import { factory } from '@cinerino/sdk';
import { createAction, props } from '@ngrx/store';
import { Models } from '../..';

const LABEL = '[User]';

export const remove = createAction(`${LABEL} remove`);

export const updateAll = createAction(
    `${LABEL} updateAll`,
    props<{
        pos?: factory.chevre.place.movieTheater.IPOS;
        theater: factory.chevre.place.movieTheater.IPlaceWithoutScreeningRoom;
        profile: factory.person.IProfile;
        printer: Models.Util.Printer.IPrinter;
        cashchanger?: string;
        payment?: string;
        applicationType: Models.Util.Application.ApplicationType;
    }>()
);

export const updateLanguage = createAction(
    `${LABEL} updateLanguage`,
    props<{ language: string }>()
);

export const setVersion = createAction(
    `${LABEL} setVersion`,
    props<{ version: string }>()
);
