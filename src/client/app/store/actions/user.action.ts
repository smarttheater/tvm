import { factory } from '@cinerino/sdk';
import { createAction, props } from '@ngrx/store';
import { Models } from '../..';

const LABEL = '[User]';

export const remove = createAction(`${LABEL} remove`);

export const update = createAction(
    `${LABEL} update`,
    props<{
        application: {
            theater: factory.chevre.place.movieTheater.IPlaceWithoutScreeningRoom;
            pos?: factory.chevre.place.movieTheater.IPOS;
            applicationType: Models.Util.Application.ApplicationType;
            applicationPassword?: string;
        };
        device: {
            printer: Models.Util.Printer.IPrinter;
            cashchanger?: { ipAddress: string };
            payment?: { ipAddress: string };
        };
        profile: factory.person.IProfile;
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
