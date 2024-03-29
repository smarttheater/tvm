import { Injectable } from '@angular/core';
import { factory } from '@cinerino/sdk';
import * as moment from 'moment';
import { StoreService } from '..';
import { Functions, Models } from '../..';
import { CinerinoService } from '../cinerino.service';
import { UtilService } from '../util.service';

@Injectable({
    providedIn: 'root',
})
export class ActionEventService {
    constructor(
        private cinerinoService: CinerinoService,
        private utilService: UtilService,
        private storeService: StoreService
    ) {}

    /**
     * イベント取得
     */
    public async findById(params: { id: string }) {
        try {
            this.storeService.util.loadStart({
                process: 'purchaseAction.GetScreeningEvent',
            });
            await this.cinerinoService.getServices();
            const screeningEvent =
                await this.cinerinoService.event.findById<factory.chevre.eventType.ScreeningEvent>(
                    params
                );
            const workPerformed = (
                await this.cinerinoService.creativeWork.searchMovies({
                    identifier:
                        screeningEvent.workPerformed === undefined
                            ? undefined
                            : screeningEvent.workPerformed.identifier,
                })
            ).data[0];
            if (
                workPerformed !== undefined &&
                screeningEvent.workPerformed !== undefined
            ) {
                screeningEvent.workPerformed.additionalProperty =
                    workPerformed.additionalProperty;
            }
            this.storeService.util.loadEnd();
            return screeningEvent;
        } catch (error) {
            this.utilService.setError({ error });
            this.storeService.util.loadEnd();
            throw error;
        }
    }

    /**
     * 空席情報取得
     */
    public async getScreeningEventSeats() {
        try {
            this.storeService.util.loadStart({
                process: 'purchaseAction.GetScreeningEventSeats',
            });
            const purchase = await this.storeService.purchase.getData();
            if (purchase.screeningEvent === undefined) {
                throw new Error('purchase.screeningEvent === undefined');
            }
            const screeningEvent = purchase.screeningEvent;
            const limit = 100;
            let page = 1;
            let roop = true;
            let result: factory.chevre.place.seat.IPlaceWithOffer[] = [];
            if (
                !new Models.Purchase.Performance({
                    screeningEvent,
                }).isTicketedSeat()
            ) {
                this.storeService.util.loadEnd();
                return result;
            }
            await this.cinerinoService.getServices();
            while (roop) {
                const searchResult =
                    await this.cinerinoService.event.searchSeats({
                        event: { id: screeningEvent.id },
                        page,
                        limit,
                    });
                result = [...result, ...searchResult.data];
                page++;
                roop = searchResult.data.length === limit;
                if (roop) {
                    await Functions.Util.sleep();
                }
            }
            this.storeService.util.loadEnd();
            return result;
        } catch (error) {
            this.utilService.setError({ error });
            this.storeService.util.loadEnd();
            throw error;
        }
    }

    /**
     * チケットオファー検索
     */
    public async searchTicketOffers() {
        try {
            this.storeService.util.loadStart({
                process: 'purchaseAction.SearchTicketOffers',
            });
            const { screeningEvent, seller } =
                await this.storeService.purchase.getData();
            const clientId = this.cinerinoService.auth.options.clientId;
            if (
                screeningEvent === undefined ||
                seller === undefined ||
                seller.id === undefined ||
                clientId === undefined
            ) {
                throw new Error(
                    'screeningEvent or seller or clientId undefined'
                );
            }
            await this.cinerinoService.getServices();
            const ticketOffers =
                await this.cinerinoService.event.searchTicketOffers({
                    event: { id: screeningEvent.id },
                    seller: {
                        typeOf: seller.typeOf,
                        id: seller.id,
                    },
                });
            this.storeService.util.loadEnd();
            return ticketOffers;
        } catch (error) {
            this.utilService.setError({ error });
            this.storeService.util.loadEnd();
            throw error;
        }
    }

    /**
     * スケジュール一覧検索
     */
    public async searchScreeningEvent(params: {
        superEvent: {
            ids?: string[];
            locationBranchCodes?: string[];
            workPerformedIdentifiers?: string[];
        };
        startFrom: Date;
        startThrough?: Date;
        screeningEventSeries?: factory.chevre.event.screeningEventSeries.IEvent[];
        screeningRooms?: factory.chevre.place.screeningRoom.IPlace[];
        offers?: {
            validFrom?: Date;
            validThrough?: Date;
            availableFrom?: Date;
            availableThrough?: Date;
        };
        roop?: boolean;
    }) {
        try {
            this.storeService.util.loadStart({
                process: 'action.Event.search',
            });
            const {
                screeningEventSeries,
                screeningRooms,
                superEvent,
                startFrom,
                startThrough,
            } = params;
            const limit = 100;
            let page = 1;
            let roop = true;
            let result: factory.chevre.event.screeningEvent.IEvent[] = [];
            await this.cinerinoService.getServices();
            const now = moment(
                (await this.utilService.getServerTime()).date
            ).toDate();
            while (roop) {
                const searchResult = await this.cinerinoService.event.search({
                    page,
                    limit,
                    typeOf: factory.chevre.eventType.ScreeningEvent,
                    eventStatuses: [
                        factory.chevre.eventStatusType.EventScheduled,
                    ],
                    superEvent,
                    startFrom,
                    startThrough,
                    offers: {
                        availableFrom: now,
                        availableThrough: now,
                        validFrom: now,
                        validThrough: now,
                    },
                });
                result = [...result, ...searchResult.data];
                page++;
                if (params.roop !== undefined && !params.roop) {
                    break;
                }
                roop = searchResult.data.length === limit;
                if (roop) {
                    await Functions.Util.sleep();
                }
            }
            if (screeningEventSeries !== undefined) {
                result = result.sort((a, b) => {
                    const KEY_NAME = 'sortNumber';
                    const sortNumberA =
                        screeningEventSeries
                            .find((s) => s.id === a.superEvent.id)
                            ?.additionalProperty?.find(
                                (p) => p.name === KEY_NAME
                            )?.value || '0';
                    const sortNumberB =
                        screeningEventSeries
                            .find((s) => s.id === b.superEvent.id)
                            ?.additionalProperty?.find(
                                (p) => p.name === KEY_NAME
                            )?.value || '0';
                    return Number(sortNumberB) - Number(sortNumberA);
                });
            } else if (screeningRooms !== undefined) {
                result = result.sort((a, b) => {
                    const KEY_NAME = 'sortNumber';
                    const sortNumberA =
                        screeningRooms
                            .find((s) => s.id === a.superEvent.id)
                            ?.additionalProperty?.find(
                                (p) => p.name === KEY_NAME
                            )?.value || '0';
                    const sortNumberB =
                        screeningRooms
                            .find((s) => s.id === b.superEvent.id)
                            ?.additionalProperty?.find(
                                (p) => p.name === KEY_NAME
                            )?.value || '0';
                    return Number(sortNumberB) - Number(sortNumberA);
                });
            }
            this.storeService.util.loadEnd();
            return result;
        } catch (error) {
            this.utilService.setError({ error });
            this.storeService.util.loadEnd();
            throw error;
        }
    }

    /**
     * 施設コンテンツ検索
     */
    public async searchScreeningEventSeries(params: {
        location?: {
            branchCode?: {
                $eq?: string;
            };
            branchCodes?: string[];
        };
        workPerformed: {
            identifiers: string[];
        };
    }) {
        try {
            this.storeService.util.loadStart({
                process: 'action.Event.search',
            });
            const limit = 100;
            let page = 1;
            let roop = true;
            let result: factory.chevre.event.screeningEventSeries.IEvent[] = [];
            const workPerformedIdentifiers: string[][] = [];
            const splitNumber = 50;
            let splitCount = 0;
            params.workPerformed.identifiers.forEach((identifier, index) => {
                if (workPerformedIdentifiers[splitCount] === undefined) {
                    workPerformedIdentifiers[splitCount] = <string[]>[];
                }
                workPerformedIdentifiers[splitCount].push(identifier);
                index++;
                if (index % splitNumber === 0) {
                    splitCount++;
                }
            });
            await this.cinerinoService.getServices();
            if (workPerformedIdentifiers.length === 0) {
                while (roop) {
                    const searchResult =
                        await this.cinerinoService.event.search({
                            ...params,
                            page,
                            limit,
                            typeOf: factory.chevre.eventType
                                .ScreeningEventSeries,
                        });
                    result = [...result, ...searchResult.data];
                    page++;
                    roop = searchResult.data.length === limit;
                    if (roop) {
                        await Functions.Util.sleep();
                    }
                }
            } else {
                for (let i = 0; i < workPerformedIdentifiers.length; i++) {
                    page = 1;
                    roop = true;
                    while (roop) {
                        const searchResult =
                            await this.cinerinoService.event.search({
                                ...params,
                                workPerformed: {
                                    identifiers: workPerformedIdentifiers[i],
                                },
                                page,
                                limit,
                                typeOf: factory.chevre.eventType
                                    .ScreeningEventSeries,
                            });
                        result = [...result, ...searchResult.data];
                        page++;
                        roop = searchResult.data.length === limit;
                        if (roop) {
                            await Functions.Util.sleep();
                        }
                    }
                }
            }
            this.storeService.util.loadEnd();
            return result;
        } catch (error) {
            this.utilService.setError({ error });
            this.storeService.util.loadEnd();
            throw error;
        }
    }
}
