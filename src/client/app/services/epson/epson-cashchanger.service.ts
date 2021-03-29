import { Injectable } from '@angular/core';
import { Functions } from '../..';
import { UtilService } from '../util.service';

interface IDeposit {
    amount: string;
    jpy1: string;
    jpy5: string;
    jpy10: string;
    jpy50: string;
    jpy100: string;
    jpy500: string;
    jpy1000: string;
    jpy2000: string;
    jpy5000: string;
    jpy10000: string;
    status: DepositStatus;
}

enum DepositStatus {
    BUSY = 'BUSY',
    PAUSE = 'PAUSE',
    END = 'END',
    DEVICE_ERROR = 'DEVICE_ERROR',
    SYSTEM_ERROR = 'SYSTEM_ERROR',
    COMMAND_ERROR = 'COMMAND_ERROR',
}

interface IDispense {
    status: DispenseStatus;
}

enum DispenseStatus {
    BUSY = 'BUSY',
    SUCCESS = 'SUCCESS',
    SHORTAGE_ERROR = 'SHORTAGE_ERROR',
    CASH_IN_TRAY_ERROR = 'CASH_IN_TRAY_ERROR',
    ILLEGAL_PARAMETER_ERROR = 'ILLEGAL_PARAMETER_ERROR',
    DEVICE_ERROR = 'DEVICE_ERROR',
    SYSTEM_ERROR = 'SYSTEM_ERROR',
    COMMAND_ERROR = 'COMMAND_ERROR',
}

@Injectable({
    providedIn: 'root'
})
export class EpsonCaschCangerService {
    private ePOSDevice: any;
    private device: any;
    private deposit?: IDeposit;

    constructor(private utilService: UtilService) { }

    public async init(params: {
        ipAddress: string;
        timeout?: number;
    }) {
        try {
            this.device = undefined;
            this.deposit = undefined;
            this.ePOSDevice = new (<any>window).epson.ePOSDevice();
            await this.connect(params);
            this.device = (await this.createDevice()).data;
            console.log(this.device);
        } catch (error) {
            this.utilService.setError(error);
            throw error;
        }
    }

    /**
     * 接続確認
     */
    public isConnected() {
        return this.device !== undefined;
    }

    /**
     * 接続
     */
    private async connect(params: {
        ipAddress: string;
    }) {
        // 安全でないコンテンツを許可する必要があります
        return new Promise<string>((resolve, reject) => {
            const ipAddress = params.ipAddress;
            if (ipAddress === '') {
                reject(new Error('IP address of the printer is not set'));
                return;
            }
            const url = new URL(`${location.protocol}${ipAddress}`);
            this.ePOSDevice.connect(url.hostname, url.port, (data: string) => {
                if (data === 'OK' || data === 'SSL_CONNECT_OK') {
                    resolve(data);
                    return;
                }
                reject(new Error(data));
            });
        });
    }

    /**
     * 接続終了
     */
    public disconnect() {
        this.ePOSDevice.disconnect();
        this.device = undefined;
        this.deposit = undefined;
    }

    /**
     * デバイス作成
     */
    private async createDevice(params?: {
        deviceId: string;
        options: { crypto: boolean; buffer: boolean; }
    }) {
        return new Promise<{ data: any; code: string; }>((resolve, reject) => {
            const deviceId = (params === undefined) ? 'local_cashchanger' : params.deviceId;
            const options = (params === undefined) ? { crypto: (location.protocol === 'https:'), buffer: false } : params.options;
            this.ePOSDevice.createDevice(
                deviceId,
                this.ePOSDevice.DEVICE_TYPE_CASH_CHANGER,
                options,
                (data: any, code: string) => {
                    if (data === null) {
                        reject(new Error(code));
                        return;
                    }
                    resolve({ data, code });
                }
            );
        });
    }

    /**
     * 開始
     */
    public async beginDeposit() {
        if (this.device === undefined) {
            throw new Error('device undefined');
        }
        const beginDeposit = () => {
            return new Promise<IDeposit>((resolve) => {
                this.device.ondeposit = (data: IDeposit) => {
                    console.warn('beginDeposit', data);
                    resolve(data);
                };
                this.device.beginDeposit();
            });
        };
        try {
            const beginDepositResult = await beginDeposit();
            if (beginDepositResult.status !== DepositStatus.BUSY) {
                throw new Error(`status error: ${beginDepositResult.status}`);
            }
        } catch (error) {
            this.disconnect();
            this.utilService.setError(error);
            throw error;
        }
        this.device.ondeposit = (data: IDeposit) => {
            console.warn('deposit', data);
            // 入金処理
            this.deposit = data;
        };
    }

    /**
     * 終了
     */
    public async endDeposit(params: {
        endDepositType: 'DEPOSIT_REPAY' | 'DEPOSIT_NOCHANGE';
    }) {
        const endDepositType = (params.endDepositType === 'DEPOSIT_REPAY')
            ? this.device.DEPOSIT_REPAY : this.device.DEPOSIT_NOCHANGE;
        if (this.device === undefined) {
            throw new Error('device undefined');
        }
        const pauseDeposit = () => {
            return new Promise<IDeposit>((resolve) => {
                this.device.ondeposit = (data: IDeposit) => {
                    console.warn('pauseDeposit', data);
                    resolve(data);
                };
                this.device.pauseDeposit();
            });
        };
        const restartDeposit = () => {
            return new Promise<IDeposit>((resolve) => {
                this.device.ondeposit = (data: IDeposit) => {
                    console.warn('restartDeposit', data);
                    resolve(data);
                };
                this.device.restartDeposit();
            });
        };
        const endDeposit = () => {
            return new Promise<IDeposit>((resolve) => {
                this.device.ondeposit = (data: IDeposit) => {
                    console.warn('endDeposit', data);
                    resolve(data);
                };
                this.device.endDeposit(endDepositType);
            });
        };
        try {
            let pauseDepositResult = await pauseDeposit();
            if (pauseDepositResult.status !== DepositStatus.PAUSE) {
                throw new Error(`status error: ${pauseDepositResult.status}`);
            }
            await Functions.Util.sleep(3000);
            const restartDepositResult = await restartDeposit();
            if (restartDepositResult.status !== DepositStatus.BUSY) {
                throw new Error(`status error: ${restartDepositResult.status}`);
            }
            await Functions.Util.sleep(1000);
            pauseDepositResult = await pauseDeposit();
            if (pauseDepositResult.status !== DepositStatus.PAUSE) {
                throw new Error(`status error: ${pauseDepositResult.status}`);
            }
            await Functions.Util.sleep(1000);
            const endDepositResult = await endDeposit();
            if (endDepositResult.status !== DepositStatus.END) {
                throw new Error(`status error: ${endDepositResult.status}`);
            }
            await Functions.Util.sleep(3000);
        } catch (error) {
            this.disconnect();
            this.utilService.setError(error);
            throw error;
        }
    }

    /**
     * 出金
     */
    public async dispenseChange(params: {
        amount: number;
    }) {
        if (this.device === undefined) {
            throw new Error('device undefined');
        }
        const dispenseChange = () => {
            return new Promise<IDispense>((resolve) => {
                this.device.ondispense = (data: IDispense) => {
                    console.warn('dispenseChange', data);
                    resolve(data);
                };
                this.device.dispenseChange(String(params.amount));
            });
        };
        try {
            const dispenseChangeResult = await dispenseChange();
            if (dispenseChangeResult.status !== DispenseStatus.SUCCESS) {
                throw new Error(`status error: ${dispenseChangeResult.status}`);
            }
            await Functions.Util.sleep(1000);
        } catch (error) {
            this.disconnect();
            this.utilService.setError(error);
            throw error;
        }
    }

    /**
     * 入金情報取得
     */
    public getDeposit() {
        if (this.deposit === undefined
            || this.deposit.amount === undefined) {
            return {
                amount: 0,
                jpy1: 0,
                jpy5: 0,
                jpy10: 0,
                jpy50: 0,
                jpy100: 0,
                jpy500: 0,
                jpy1000: 0,
                jpy2000: 0,
                jpy5000: 0,
                jpy10000: 0,
                status: DepositStatus.END
            };
        }
        return {
            amount: Number(this.deposit.amount),
            jpy1: Number(this.deposit.jpy1),
            jpy5: Number(this.deposit.jpy5),
            jpy10: Number(this.deposit.jpy10),
            jpy50: Number(this.deposit.jpy50),
            jpy100: Number(this.deposit.jpy100),
            jpy500: Number(this.deposit.jpy500),
            jpy1000: Number(this.deposit.jpy1000),
            jpy2000: Number(this.deposit.jpy2000),
            jpy5000: Number(this.deposit.jpy5000),
            jpy10000: Number(this.deposit.jpy10000),
            status: this.deposit.status
        };
    }


}
