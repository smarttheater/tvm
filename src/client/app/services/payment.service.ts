import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeout } from 'rxjs/operators';
import { Functions } from '..';

interface IRequsetData {
    FUNC: string;
    JOB?: string;
    ORDERID?: string;
    AMOUNT?: string;
    MACHINE_CODE?: string;
    TRANID?: string;
    CANTRANID?: string;
    OFFLINE?: string;
}

interface IResponseData {
    FUNC: string;
    FUNC_STATUS: string;
    PROCESS_STATUS: string;
    APP_STATUS: string;
    ERRTYPE: string;
    APP_ERRCODE: string;
    APP_MESSAGE: string;
}

// interface ICreditCardResponseData extends IResponseData {
//     CARD_TYPE: string;
//     ORDERID: string;
//     TRANID: string;
//     CARD: string;
//     EXPIRE: string;
//     REFAPPROVED: string;
//     REFFORWARDED: string;
//     REFCARDBRAND: string;
//     ARPC_INFO: string;
//     ERRCODE: string;
//     ERRINFO: string;
//     ERRLEVEL: string;
//     RESULT: string;
//     REFGATEWAYNO: string;
//     DATETIME: string;
//     MEMBERID: string;
//     JOBID: string;
//     PAYQUICKID: string;
//     AID: string;
//     APPLABEL: string;
//     CARDSEQUENCENO: string;
//     ATC: string;
//     ARC: string;
//     SPID: string;
//     TC: string;
//     PIN_ERRINFO: string;
// }

// interface ICodeResponseData extends IResponseData {
//     JOBID: string;
//     ORDERID: string;
//     JOB: string;
//     R_CODE: string;
//     CNY: string;
//     GATEWAYNO: string;
//     CEN_DATE: string;
//     TRANS_STATUS: string;
// }

// interface IEMoneyResponseData extends IResponseData {
//     ID: string;
//     AMOUNT: string;
//     RESULT: string;
//     INFO_RESULT: string;
//     SEQ_NUM: string;
//     CARD_ID: string;
//     CARD_IDM: string;
//     VALUE: string;
//     BALANCE: string;
//     BALANCE_BEFORE_TRANSACTION: string;
//     SPRWID: string;
//     UNIQUE_ID: string;
//     RAS_ERROR_CODE: string;
//     RAS_EXT_CODE: string;
//     ACTION_DATE: string;
// }

interface IFrontResponseData extends IResponseData {
    CARD_TYPE: string;
    ORDERID: string;
    TRANID: string;
    CARD: string;
    EXPIRE: string;
    REFAPPROVED: string;
    REFFORWARDED: string;
    REFCARDBRAND: string;
    ARPC_INFO: string;
    ERRCODE: string;
    ERRINFO: string;
    ERRLEVEL: string;
    RESULT: string;
    REFGATEWAYNO: string;
    DATETIME: string;
    MEMBERID: string;
    JOBID: string;
    PAYQUICKID: string;
    AID: string;
    APPLABEL: string;
    CARDSEQUENCENO: string;
    ATC: string;
    ARC: string;
    SPID: string;
    TC: string;
    PIN_ERRINFO: string;
    JOB: string;
    R_CODE: string;
    CNY: string;
    GATEWAYNO: string;
    CEN_DATE: string;
    TRANS_STATUS: string;
    ID: string;
    AMOUNT: string;
    INFO_RESULT: string;
    SEQ_NUM: string;
    CARD_ID: string;
    CARD_IDM: string;
    VALUE: string;
    BALANCE: string;
    BALANCE_BEFORE_TRANSACTION: string;
    SPRWID: string;
    UNIQUE_ID: string;
    RAS_ERROR_CODE: string;
    RAS_EXT_CODE: string;
    ACTION_DATE: string;
}


/**
 * 機能コード
 */
namespace FUNC_CODE {
    /**
     * 決済端末連携
     */
    export enum TERMINAL {
        /**
         * 疎通確認
         */
        'COMMUNICATION' = '3000',
        /**
         * 選択要求　　　※決済用パラメータ必要
         */
        'CHOICE' = '3001',
        /**
         * 決済結果取得
         */
        'RESULT' = '3002',
        /**
         * 中断要求
         */
        'INTERRUPTION' = '3008'
    }
    /**
     * カード決済
     */
    export enum CREDITCARD {
        /**
         * インストール確認
         */
        'INSTALL' = '4000',
        /**
         * 決済要求　　　※決済用パラメータ必要
         */
        'SETTLEMENT' = '4001',
        /**
         * 決済結果取得
         */
        'RESULT' = '4002',
        /**
         * 中断要求
         */
        'INTERRUPTION' = '4008',
        /**
         * 状況確認
         */
        'SITUATION' = '4100'
    }
    /**
     * コード決済
     */
    export enum CODE {
        /**
         * インストール確認
         */
        'INSTALL' = '5000',
        /**
         * 決済要求　　　※決済用パラメータ必要
         */
        'SETTLEMENT' = '5001',
        /**
         * 決済結果取得
         */
        'RESULT' = '5002',
        /**
         * 中断要求
         */
        'INTERRUPTION' = '5008',
    }
    /**
     * 電子マネー決済
     */
    export enum EMONEY {
        /**
         * インストール確認
         */
        'INSTALL' = '6000',
        /**
         * 決済要求　　　※決済用パラメータ必要
         */
        'SETTLEMENT' = '6001',
        /**
         * 決済結果取得
         */
        'RESULT' = '6002',
        /**
         * 中断要求
         */
        'INTERRUPTION' = '6008',
    }
}

type TFuncCode = FUNC_CODE.TERMINAL | FUNC_CODE.CREDITCARD | FUNC_CODE.CODE | FUNC_CODE.EMONEY;

/**
 * 基本部_機能コード応答値
 */
enum FUNC_STATUS {
    /**
     * 要求正常終了
     */
    SUCCESS = '0000',
    /**
     * 決済アプリにて取消が行われた
     */
    APP_CANCEL = '0001',
    /**
     * 上位機器より取消が行われた
     */
    MACHINE_CANCEL = '0002',
    /**
     * 決済アプリでエラーが発生
     */
    APP_ERROR = '0009',
    /**
     * 該当の決済データが存在しない
     */
    NOTFOUND = '0010',
    /**
     * 対象の決済アプリがインストールされていない
     */
    NOT_INSTALLED = '1001',
    /**
     * 対象の決済アプリが未処理
     */
    APP_UNTREATED = '1002',
    /**
     * 決済アプリが処理中
     */
    APP_PROCESSING = '1003',
    /**
     * 中断要求の受付成功　　※中断の実施結果は、結果取得の要求で取得
     */
    INTERRUPTION_SUCCESS = '1100',
    /**
     * 中断処理中
     */
    INTERRUPTION_PROCESSING = '1103',
    /**
     * 中断処理失敗
     */
    INTERRUPTION_FAILURE = '1104',
    /**
     * 規定外の機能コードが指定された
     */
    OUT_OF_REGULATION = '8000',
}

enum JOB {
    /**
     * 売上
     */
    CAPTURE = 'CAPTURE',
    /**
     * 取消
     */
    VOID = 'VOID',
    /**
     * 返品
     */
    RETURN = 'RETURN',
}

@Injectable({
    providedIn: 'root'
})
export class PaymentService {
    private connectionAddress: string;
    private requestTimeout: number;
    private delayTime: number;
    private isAutoResult: boolean;
    private offline: string;

    constructor(
        private http: HttpClient,
    ) { }

    public init(params: {
        ipAddress: string;
        requestTimeout?: number;
        delayTime?: number;
        isAutoResult?: boolean;
        isOffline?: '1';
    }) {
        this.connectionAddress = `http://${params.ipAddress}:8001`;
        this.requestTimeout = (params.requestTimeout === undefined) ? 60000 : params.requestTimeout;
        this.delayTime = (params.delayTime === undefined) ? 60000 : params.delayTime;
        this.isAutoResult = (params.isAutoResult === undefined) ? true : params.isAutoResult;
        this.offline = (params.isOffline === undefined) ? '' : '1';
    }

    public creditCard() {

    }

    /**
     * 要求
     */
    public async exec(params: {
        func: TFuncCode;
        requestObj?: {
            /**
             * 処理区分
             */
            JOB: JOB;
            /**
             * 決済ID
             */
            ORDERID: string;
            /**
             * 決済金額
             */
            AMOUNT: string;
            /**
             * 精算機コード
             */
            MACHINE_CODE?: string;
            /**
             * 取引ID
             */
            TRANID?: string;
            /**
             * 取消対象取引ID
             */
            CANTRANID?: string;
        }
    }) {
        const func = params.func;
        const requestObj = params.requestObj;
        let requestData;
        try {
            switch (func) {
                case FUNC_CODE.TERMINAL.CHOICE:
                case FUNC_CODE.CREDITCARD.SETTLEMENT:
                case FUNC_CODE.CODE.SETTLEMENT:
                case FUNC_CODE.EMONEY.SETTLEMENT:
                    // 決済要求
                    if (requestObj === undefined) {
                        throw new Error('requestObj undefined');
                    }
                    requestData = {
                        FUNC: func,
                        JOB: requestObj.JOB,
                        ORDERID: requestObj.ORDERID,
                        AMOUNT: requestObj.AMOUNT,
                        MACHINE_CODE: requestObj.MACHINE_CODE,
                        TRANID: requestObj.TRANID,
                        CANTRANID: requestObj.CANTRANID,
                        OFFLINE: this.offline
                    };
                    break;

                case FUNC_CODE.CREDITCARD.SITUATION:
                    // カード決済 状況確認
                    if (requestObj === undefined) {
                        throw new Error('requestObj undefined');
                    }
                    requestData = {
                        FUNC: func,
                        JOB: requestObj.JOB,
                        ORDERID: requestObj.ORDERID,
                        TRANID: requestObj.TRANID
                    };
                    break;

                default:
                    requestData = {
                        FUNC: func,
                        OFFLINE: this.offline
                    };
                    break;
            }
        } catch (error) {
            console.error(func, error.message);
            return;
        }
        try {
            const response = await this.request<IFrontResponseData>({ requestData, methodName: 'Exec' });
            console.log('Exec', func, response);
            if (response.FUNC_STATUS === FUNC_STATUS.INTERRUPTION_SUCCESS) {
                // 中断要求の受付成功
                if (!this.isAutoResult) {
                    return;
                }
                await Functions.Util.sleep(this.delayTime);
                await this.result(func);
            } else if (response.FUNC_STATUS === FUNC_STATUS.SUCCESS) {
                // 要求正常終了
                if (func === FUNC_CODE.TERMINAL.CHOICE
                    || func === FUNC_CODE.CREDITCARD.SETTLEMENT
                    || func === FUNC_CODE.CODE.SETTLEMENT
                    || func === FUNC_CODE.EMONEY.SETTLEMENT) {
                    // 決済要求
                    if (!this.isAutoResult) {
                        return;
                    }
                    await Functions.Util.sleep(this.delayTime);
                    await this.result(func);
                }
            }
        } catch (error) {
            console.error(func, 'Exec接続エラーが発生しました');
        }
    }

    /**
     * 結果取得
     */
    public async result(func: TFuncCode) {
        switch (func) {
            case FUNC_CODE.TERMINAL.CHOICE:
            case FUNC_CODE.TERMINAL.INTERRUPTION:
                // 決済端末連携
                func = FUNC_CODE.TERMINAL.RESULT;
                break;

            case FUNC_CODE.CREDITCARD.SETTLEMENT:
            case FUNC_CODE.CREDITCARD.INTERRUPTION:
                // カード決済
                func = FUNC_CODE.CREDITCARD.RESULT;
                break;

            case FUNC_CODE.CODE.SETTLEMENT:
            case FUNC_CODE.CODE.INTERRUPTION:
                // コード決済
                func = FUNC_CODE.CODE.RESULT;
                break;

            case FUNC_CODE.EMONEY.SETTLEMENT:
            case FUNC_CODE.EMONEY.INTERRUPTION:
                // 電子マネー決済
                func = FUNC_CODE.EMONEY.RESULT;
                break;

            default:
                break;
        }
        const requestData = { FUNC: func };
        try {
            const response = await this.request<IFrontResponseData>({ requestData, methodName: 'Result' });
            console.log('Result', func, response);
            if (response.FUNC_STATUS === FUNC_STATUS.APP_PROCESSING) {
                // 決済アプリが処理中
                if (!this.isAutoResult) {
                    return;
                }
                await Functions.Util.sleep(this.delayTime);
                await this.result(func);
            } else if (response.FUNC_STATUS === FUNC_STATUS.INTERRUPTION_PROCESSING) {
                // 中断処理中
                if (!this.isAutoResult) {
                    return;
                }
                await Functions.Util.sleep(this.delayTime);
                await this.result(func);
            } else if (response.FUNC_STATUS === FUNC_STATUS.INTERRUPTION_FAILURE) {
                if (!this.isAutoResult) {
                    return;
                }
                await Functions.Util.sleep(this.delayTime);
                await this.result(func);
            } else {
                // 終了
            }
        } catch (error) {
            console.error(func, 'Result接続エラーが発生しました');
        }
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
