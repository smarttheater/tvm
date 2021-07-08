import { factory } from '@cinerino/sdk';
import { Action, createReducer, on } from '@ngrx/store';
import { IState } from '.';
import { Models } from '../..';
import { userAction } from '../actions';

export interface IUserState {
    /**
     * 劇場
     */
    theater?: factory.chevre.place.movieTheater.IPlaceWithoutScreeningRoom;
    /**
     * POS
     */
    pos?: factory.chevre.place.movieTheater.IPOS;
    /**
     * アプリケーションタイプ
     */
    applicationType?: Models.Util.Application.ApplicationType;
    /**
     * アプリケーションパスワード
     */
    applicationPassword?: string;
    /**
     * 購入者情報
     */
    customerContact?: factory.person.IProfile;
    /**
     * プリンター
     */
    printer?: Models.Util.Printer.IPrinter;
    /**
     * 決済端末
     */
    payment?: string;
    /**
     * 釣銭機
     */
    cashchanger?: string;
    /**
     * 言語
     */
    language: string;
    /**
     * バージョン
     */
    version?: string;
}

export const userInitialState: IUserState = {
    language: 'ja',
};

export function reducer(initialState: IState, action: Action) {
    return createReducer(
        initialState,
        on(userAction.remove, (state) => {
            return {
                ...state,
                userData: {
                    language: 'ja',
                },
                loading: false,
                process: '',
            };
        }),
        on(userAction.updateAll, (state, payload) => {
            const customerContact = payload.profile;
            const pos = payload.pos;
            const theater = payload.theater;
            const printer = payload.printer;
            const cashchanger = payload.cashchanger;
            const payment = payload.payment;
            const applicationType = payload.applicationType;
            const applicationPassword = payload.applicationPassword;

            return {
                ...state,
                userData: {
                    ...state.userData,
                    customerContact,
                    pos,
                    theater,
                    printer,
                    cashchanger,
                    payment,
                    applicationType,
                    applicationPassword,
                },
                loading: false,
                process: '',
            };
        }),
        on(userAction.updateLanguage, (state, payload) => {
            const language = payload.language;
            return { ...state, userData: { ...state.userData, language } };
        }),
        on(userAction.setVersion, (state, payload) => {
            const version = payload.version;
            return { ...state, userData: { ...state.userData, version } };
        })
    )(initialState, action);
}
