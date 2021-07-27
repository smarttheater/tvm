/**
 * ルーティング
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { getEnvironment } from '../environments/environment';
import { ErrorModule } from './modules/error/error.module';

const appRoutes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    {
        path: 'purchase',
        loadChildren: () =>
            import('./modules/purchase/purchase.module')
                .then((m) => m.PurchaseModule)
                .catch(() => location.reload()),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('./modules/auth/auth.module')
                .then((m) => m.AuthModule)
                .catch(() => location.reload()),
    },
    {
        path: 'inquiry',
        loadChildren: () =>
            import('./modules/inquiry/inquiry.module')
                .then((m) => m.InquiryModule)
                .catch(() => location.reload()),
    },
    {
        path: 'setting',
        loadChildren: () =>
            import('./modules/setting/setting.module')
                .then((m) => m.SettingModule)
                .catch(() => location.reload()),
    },
    {
        path: '',
        loadChildren: () => ErrorModule,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            useHash: true,
            enableTracing: !getEnvironment().production,
            relativeLinkResolution: 'legacy',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
