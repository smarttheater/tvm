/**
 * 決済
 */
export interface IPayment {
    /**
     * 現金
     */
    cash?: { ipAddress: string; };
    /**
     * クレジットカード
     */
    creditcard?: { ipAddress: string; };
    /**
     * 電子マネー
     */
    emoney?: { ipAddress: string; };
    /**
     * コード決済
     */
    code?: { ipAddress: string; };
}
