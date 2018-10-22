import { IScreeningEventReservation } from '@cinerino/api-abstract-client/lib/service/reservation';
import { factory } from '@cinerino/api-javascript-client';

export interface IDecodeResult extends factory.ownershipInfo.IOwnershipInfo<IScreeningEventReservation> {
    iat: number;
}
