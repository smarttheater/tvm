import { Injectable } from '@angular/core';
import { Functions, Models } from '../..';

@Injectable({
    providedIn: 'root'
})
export class EpsonPrinterService {

    constructor() {
        this.ePOSDevice = new (<any>window).epson.ePOSDevice();
    }
    private static WITE_TIME = 2000;
    private static LIMIT_COUNT = 5;
    private static METHOD_TIMEOUT = 2000;
    private ePOSDevice: any;
    private device: any;

    public async init(params: {
        printer: Models.Util.Printer.IPrinter;
        timeout?: number;
    }) {
        this.device = undefined;
        await this.connect(params);
        this.device = (await this.createDevice()).data;
        this.device.onstatuschange = (_status: any) => {
        };
    }

    /**
     * 接続
     */
    private async connect(params: {
        printer: Models.Util.Printer.IPrinter;
    }) {
        // 安全でないコンテンツを許可する必要があります
        return new Promise<string>((resolve, reject) => {
            const printer = params.printer;
            if (printer.ipAddress === '') {
                reject(new Error('IP address of the printer is not set'));
                return;
            }
            const url = new URL(`${location.protocol}${printer.ipAddress}`);
            this.ePOSDevice.connect(url.hostname, url.port, (data: string) => {
                console.warn('connect', data);
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
        const disconnect = async () => {
            const process = async () => {
                return new Promise<{ status: 'TIMEOUT_ERROR' | 'SUCCESS' }>((resolve) => {
                    const timer = setTimeout(() => {
                        resolve({ status: 'TIMEOUT_ERROR' });
                    }, EpsonPrinterService.METHOD_TIMEOUT);
                    this.ePOSDevice.ondisconnect = () => {
                        clearTimeout(timer);
                        resolve({ status: 'SUCCESS' });
                    };
                    this.ePOSDevice.disconnect();
                });
            };
            const limit = EpsonPrinterService.LIMIT_COUNT;
            let count = 0;
            let roop = true;
            while (roop) {
                const processResult = await process();
                console.warn('disconnect', processResult);
                if (limit < count) {
                    throw new Error(`disconnect status error: ${processResult.status}`);
                }
                if (processResult.status !== 'SUCCESS') {
                    await Functions.Util.sleep(EpsonPrinterService.WITE_TIME);
                    count++;
                    continue;
                }
                roop = false;
            }
        };
        await disconnect();
        this.device = undefined;
    }

    /**
     * デバイス作成
     */
    private createDevice(params?: {
        deviceId: string;
        options: { crypto: boolean; buffer: boolean; }
    }) {
        return new Promise<{ data: any; code: string; }>((resolve, reject) => {
            const deviceId = (params === undefined) ? 'local_printer' : params.deviceId;
            const options = (params === undefined) ? { crypto: (location.protocol === 'https:'), buffer: false } : params.options;
            this.ePOSDevice.createDevice(
                deviceId,
                this.ePOSDevice.DEVICE_TYPE_PRINTER,
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
     * 印刷処理
     */
    public async print(params: {
        canvasList: HTMLCanvasElement[];
    }) {
        const canvasList = params.canvasList;
        for (const canvas of canvasList) {
            const mode = 'MODE_MONO';
            const cut = true;
            await Functions.Util.sleep(500);
            this.device.print(canvas, cut, this.device[mode]);
            const result = () => {
                return new Promise<void>(async (resolve, reject) => {
                    this.device.onreceive = (response: any) => {
                        if (response.success) {
                            // 印刷成功メッセージ表示
                            resolve();
                            return;
                        }
                        // エラーメッセージ表示
                        reject(response);
                    };
                });
            };
            await result();
        }
    }


}
