/**
 * 支払い方法コード
 */
export enum PaymentMethodCode {
    Cash = 'Cash',
    CreditCard = 'CreditCard',
    EMoney = 'EMoney',
    Code = 'Code',
}

/**
 * 機能コード
 */
export namespace FUNC_CODE {
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
        'INTERRUPTION' = '3008',
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
        'SITUATION' = '4100',
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

export type TFuncCode =
    | FUNC_CODE.TERMINAL
    | FUNC_CODE.CREDITCARD
    | FUNC_CODE.CODE
    | FUNC_CODE.EMONEY;

/**
 * 基本部_機能コード応答値
 */
export enum FUNC_STATUS {
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

export enum JOB {
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

export interface IExecOptions {
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

export interface IRequsetData {
    FUNC: TFuncCode;
    JOB?: JOB;
    ORDERID?: string;
    AMOUNT?: string;
    MACHINE_CODE?: string;
    TRANID?: string;
    CANTRANID?: string;
    OFFLINE?: string;
}

export interface IResponseData {
    FUNC: TFuncCode;
    FUNC_STATUS: FUNC_STATUS;
    PROCESS_STATUS: string;
    APP_STATUS: string;
    ERRTYPE: string;
    APP_ERRCODE: string;
    APP_MESSAGE: string;
}

export interface ICreditCardResponseData extends IResponseData {
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
}

export interface ICodeResponseData extends IResponseData {
    JOBID: string;
    ORDERID: string;
    JOB: string;
    R_CODE: string;
    CNY: string;
    GATEWAYNO: string;
    CEN_DATE: string;
    TRANS_STATUS: string;
}

export interface IEMoneyResponseData extends IResponseData {
    ID: string;
    AMOUNT: string;
    RESULT: string;
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

export interface IFrontResponseData extends IResponseData {
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

export type TResponseData =
    | IResponseData
    | IFrontResponseData
    | ICreditCardResponseData
    | ICodeResponseData
    | IEMoneyResponseData;
