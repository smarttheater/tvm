import { getEnvironment } from '../../environments/environment';

/**
 * 入力データを検索条件へ変換
 */
export function findPaymentMethodType2Code(params: {
    paymentMethodType: string;
}) {
    const environment = getEnvironment();
    const { paymentMethodType } = params;
    const findResult = environment.PAYMENT_METHOD_CODE_MAPPING.find((p) => {
        return p.value.find((v) => v === paymentMethodType) !== undefined;
    });
    return findResult?.key;
}
