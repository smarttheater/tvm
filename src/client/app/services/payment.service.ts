import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeout } from 'rxjs/operators';
import { Functions } from '..';

import {
    FUNC_CODE,
    FUNC_STATUS,
    IExecOptions,
    IRequsetData,
    IResponseData,
    TFuncCode,
    TResponseData
} from '../models/purchase/payment';



@Injectable({
    providedIn: 'root'
})
export class PaymentService {
    private connectionAddress: string;
    private requestTimeout: number;
    private delayTime: number;
    private offline: string;

    constructor(
        private http: HttpClient,
    ) { }

    public init(params: {
        ipAddress: string;
        requestTimeout?: number;
        delayTime?: number;
        isOffline?: '1';
    }) {
        this.connectionAddress = `http://${params.ipAddress}:8001`;
        this.requestTimeout = (params.requestTimeout === undefined)
            ? 60000 : params.requestTimeout;
        this.delayTime = (params.delayTime === undefined)
            ? 100 : params.delayTime;
        this.offline = (params.isOffline === undefined) ? '' : '1';
    }

    /**
     * 要求
     */
    public async exec(params: {
        func: TFuncCode;
        options?: IExecOptions;
        timeout?: number;
    }): Promise<TResponseData> {
        const func = params.func;
        const time = (params.timeout === undefined) ? 60000 : params.timeout;
        const execReqestData = this.createExecReqestData(params);
        console.log('execReqestData', execReqestData);
        const execResult = await this.request<IResponseData>({
            requestData: execReqestData,
            methodName: 'Exec'
        });
        console.log('Exec', func, execResult);
        if (!this.isResult({ func, status: execResult.FUNC_STATUS })) {
            return execResult;
        }
        // 結果取得
        let isTimeout = false;
        const timer = setTimeout(() => { isTimeout = true; }, time);
        let count = 0;
        const resultReqestData = this.createResultReqestData({ func });
        let requestResult: TResponseData = await this.request<TResponseData>({
            requestData: resultReqestData,
            methodName: 'Result'
        });
        console.log('Result:' + count, func, requestResult);
        let roop = true;
        while (roop) {
            count++;
            if (isTimeout) {
                roop = false;
                break;
            }
            await Functions.Util.sleep(this.delayTime);
            requestResult = await this.request<TResponseData>({
                requestData: resultReqestData,
                methodName: 'Result'
            });
            console.log('Result:' + count, func, requestResult);
            roop = this.isProcessing({ status: requestResult.FUNC_STATUS });
        }
        clearTimeout(timer);
        return requestResult;
    }

    /**
     * 結果取得判定
     */
    private isResult(params: { func: TFuncCode, status: FUNC_STATUS }) {
        const func = params.func;
        const status = params.status;
        if (status !== FUNC_STATUS.INTERRUPTION_SUCCESS
            && status !== FUNC_STATUS.SUCCESS) {
            // 中断要求の受付成功でないかつ要求正常終了でない
            return false;
        }
        if (status === FUNC_STATUS.SUCCESS
            && (func !== FUNC_CODE.TERMINAL.CHOICE
                && func !== FUNC_CODE.CREDITCARD.SETTLEMENT
                && func !== FUNC_CODE.CODE.SETTLEMENT
                && func !== FUNC_CODE.EMONEY.SETTLEMENT)) {
            // 要求正常終了かつ決済要求でない
            return false;
        }
        return true;
    }

    /**
     * 処理中判定
     */
    public isProcessing(params: { status: FUNC_STATUS }) {
        const status = params.status;
        return (status === FUNC_STATUS.APP_PROCESSING
            || status === FUNC_STATUS.INTERRUPTION_PROCESSING
            || status === FUNC_STATUS.INTERRUPTION_FAILURE);
    }

    private createExecReqestData(params: {
        func: TFuncCode;
        options?: IExecOptions;
    }) {
        const func = params.func;
        const options = params.options;
        let requestData;
        switch (func) {
            case FUNC_CODE.TERMINAL.CHOICE:
            case FUNC_CODE.CREDITCARD.SETTLEMENT:
            case FUNC_CODE.CODE.SETTLEMENT:
            case FUNC_CODE.EMONEY.SETTLEMENT:
                // 決済要求
                if (options === undefined) {
                    throw new Error('options undefined');
                }
                requestData = {
                    FUNC: func,
                    JOB: options.JOB,
                    ORDERID: options.ORDERID,
                    AMOUNT: options.AMOUNT,
                    MACHINE_CODE: (options.MACHINE_CODE === undefined)
                        ? '' : options.MACHINE_CODE,
                    TRANID: (options.TRANID === undefined)
                        ? '' : options.TRANID,
                    CANTRANID: (options.CANTRANID === undefined)
                        ? '' : options.CANTRANID,
                    OFFLINE: this.offline
                };
                break;

            case FUNC_CODE.CREDITCARD.SITUATION:
                // カード決済 状況確認
                if (options === undefined) {
                    throw new Error('options undefined');
                }
                requestData = {
                    FUNC: func,
                    JOB: options.JOB,
                    ORDERID: options.ORDERID,
                    TRANID: (options.TRANID === undefined)
                        ? '' : options.TRANID,
                };
                break;

            default:
                requestData = {
                    FUNC: func,
                    OFFLINE: this.offline
                };
                break;
        }
        return requestData;
    }

    private createResultReqestData(params: { func: TFuncCode; }) {
        const func = params.func;
        let result;
        switch (func) {
            case FUNC_CODE.TERMINAL.CHOICE:
            case FUNC_CODE.TERMINAL.INTERRUPTION:
                // 決済端末連携
                result = FUNC_CODE.TERMINAL.RESULT;
                break;

            case FUNC_CODE.CREDITCARD.SETTLEMENT:
            case FUNC_CODE.CREDITCARD.INTERRUPTION:
                // カード決済
                result = FUNC_CODE.CREDITCARD.RESULT;
                break;

            case FUNC_CODE.CODE.SETTLEMENT:
            case FUNC_CODE.CODE.INTERRUPTION:
                // コード決済
                result = FUNC_CODE.CODE.RESULT;
                break;

            case FUNC_CODE.EMONEY.SETTLEMENT:
            case FUNC_CODE.EMONEY.INTERRUPTION:
                // 電子マネー決済
                result = FUNC_CODE.EMONEY.RESULT;
                break;

            default:
                result = func;
                break;
        }
        return { FUNC: result };
    }

    private async request<T>(params: {
        requestData: IRequsetData;
        methodName: 'Result' | 'Exec';
    }) {
        const url = this.connectionAddress;
        const body = encodeURIComponent(JSON.stringify(params.requestData));
        const requestTimeout = this.requestTimeout;
        const result = await this.http.post<T>(url, body).pipe(timeout(requestTimeout)).toPromise();
        return result;
    }

}
