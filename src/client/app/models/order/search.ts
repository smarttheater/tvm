import { factory } from '@cinerino/sdk';

export interface IOrderSearchConditions {
    orderDateFrom?: Date;
    orderDateThrough?: Date;
    confirmationNumber: string;
    orderNumber: string;
    customer: {
        familyName: string;
        givenName: string;
        email: string;
        telephone: string;
    };
    orderStatus: '' | factory.orderStatus;
    paymentMethodType: string;
    eventStartDateFrom?: Date;
    eventStartDateThrough?: Date;
    posId: string;
    page: number;
}
