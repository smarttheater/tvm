import { factory } from '@cinerino/sdk';
import { Action, createReducer, on } from '@ngrx/store';
import { IState } from '.';
import { Models } from '../..';
import { userAction } from '../actions';

export interface IUserState {
    application?: {
        /**
         * 劇場
         */
        theater: factory.chevre.place.movieTheater.IPlaceWithoutScreeningRoom;
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
    };
    /**
     * プロフィール
     */
    profile?: factory.person.IProfile;
    /**
     * デバイス
     */
    device?: {
        /**
         * プリンター
         */
        printer?: Models.Util.Printer.IPrinter;
        /**
         * 決済端末
         */
        payment?: { ipAddress: string };
        /**
         * 釣銭機
         */
        cashchanger?: { ipAddress: string };
    };
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
        on(userAction.update, (state, payload) => {
            const { application, device, profile } = payload;

            return {
                ...state,
                userData: {
                    ...state.userData,
                    profile,
                    application,
                    device,
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
