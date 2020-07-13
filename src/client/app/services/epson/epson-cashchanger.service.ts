import { Injectable } from '@angular/core';
import { Functions } from '../..';

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
    status: 'BUSY' | 'PAUSE' | 'END';
}

@Injectable({
    providedIn: 'root'
})
export class EpsonCaschCangerService {
    private ePOSDevice: any;
    private device: any;
    private deposit: IDeposit;

    constructor() { }

    public async init(params: {
        ipAddress: string;
        timeout?: number;
    }) {
        this.device = undefined;
        this.ePOSDevice = new (<any>window).epson.ePOSDevice();
        await this.connect(params);
        this.device = (await this.createDevice()).data;
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
    public async disconnect() {
        this.ePOSDevice.disconnect();
    }

    /**
     * デバイス作成
     */
    private createDevice(params?: {
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
    public async beginDeposit(params: {
        cb: Function
    }) {
        if (this.device === undefined) {
            return;
        }
        this.device.beginDeposit();
        this.device.ondeposit = (data: IDeposit) => {
            console.log('beginDeposit', data);
            // 入金処理
            this.deposit = data;
            params.cb(this.getDeposit().amount);
        };
        await Functions.Util.sleep(1000);
    }

    /**
     * 終了
     */
    public async endDeposit() {
        if (this.device === undefined) {
            return;
        }
        this.device.pauseDeposit();
        await Functions.Util.sleep(1000);
        this.device.endDeposit(this.device.DEPOSIT_NOCHANGE);
        await Functions.Util.sleep(1000);
    }

    /**
     * 返金して終了
     */
    public async endDepositRepay() {
        if (this.device === undefined) {
            return;
        }
        this.device.pauseDeposit();
        await Functions.Util.sleep(1000);
        this.device.endDeposit(this.device.DEPOSIT_REPAY);
        await Functions.Util.sleep(1000);
    }

    /**
     * 出金
     */
    public async dispenseChange(params: {
        amount: number;
    }) {
        if (this.device === undefined) {
            return;
        }
        // this.device.ondispense = (data: IDeposit) => {
        //     // 出金処理
        //     console.log(data);
        // };
        this.device.dispenseChange(String(params.amount));
        await Functions.Util.sleep(1000);
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
                status: 'END'
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
