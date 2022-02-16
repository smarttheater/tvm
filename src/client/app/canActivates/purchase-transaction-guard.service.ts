/**
 * PurchaseTransactionGuardService
 */
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {  StoreService } from '../services';

@Injectable({
    providedIn: 'root',
})
export class PurchaseTransactionGuardService implements CanActivate {
    constructor(private router: Router, private storeService: StoreService) {}

    /**
     * 認証
     * @method canActivate
     * @returns {Promise<boolean>}
     */
    public async canActivate(): Promise<boolean> {
        try {
            const transaction = (await this.storeService.purchase.getData())
                .transaction;
            if (transaction === undefined) {
                throw new Error('transaction not found');
            }

            return true;
        } catch (error) {
            console.log('canActivate', error);
            this.router.navigate(['/']);

            return false;
        }
    }
}
