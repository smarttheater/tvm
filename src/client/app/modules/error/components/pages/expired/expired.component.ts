import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Functions, Models } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';
import { ActionService, PaymentService } from '../../../../../services';

@Component({
    selector: 'app-expired',
    templateUrl: './expired.component.html',
    styleUrls: ['./expired.component.scss']
})
export class ExpiredComponent implements OnInit, OnDestroy {
    public environment = getEnvironment();
    private timer: any;

    constructor(
        private actionService: ActionService,
        private paymentService: PaymentService,
        private router: Router
    ) { }

    public async ngOnInit() {
        try {
            const { cashchanger } = await this.actionService.user.getData();
            if (cashchanger !== undefined) {
                await this.actionService.purchase.depositRepay({ ipAddress: cashchanger });
            }
        } catch (error) {
            console.error(error);
        }
        try {
            await this.actionService.purchase.cancelTransaction();
        } catch (error) {
            console.error(error);
        }
        this.actionService.purchase.delete();
        if (this.environment.ERROR_WAIT_TIME === '') {
            return;
        }
        const time = Number(this.environment.ERROR_WAIT_TIME);
        this.timer = setTimeout(() => {
            this.router.navigate(['/']);
        }, time);
    }

    /**
     * 破棄
     */
    public ngOnDestroy() {
        if (this.timer !== undefined) {
            clearTimeout(this.timer);
        }
    }

    /**
     * 現金返金
     */
    public async voidCash() {
        try {
            const { cashchanger } = await this.actionService.user.getData();
            if (cashchanger === undefined) {
                return;
            }
            await this.actionService.purchase.depositRepay({ ipAddress: cashchanger });
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * クレジットカード取消
     */
    public async voidCreditCard() {
        try {
            const { payment } = await this.actionService.user.getData();
            const { authorizeSeatReservations, orderId } = await this.actionService.purchase.getData();
            if (payment === undefined
                || orderId === undefined) {
                return;
            }
            const amount = Functions.Purchase.getAmount(authorizeSeatReservations);
            await this.paymentService.init({ ipAddress: payment });
            const execResult = await this.paymentService.exec({
                func: Models.Purchase.Payment.FUNC_CODE.CREDITCARD.SETTLEMENT,
                options: {
                    JOB: Models.Purchase.Payment.JOB.VOID,
                    ORDERID: orderId,
                    AMOUNT: String(amount),
                },
            });
            if (execResult.FUNC_STATUS !== Models.Purchase.Payment.FUNC_STATUS.SUCCESS) {
                await this.paymentService.exec({
                    func: Models.Purchase.Payment.FUNC_CODE.CREDITCARD.INTERRUPTION,
                });
                throw new Error(JSON.stringify(execResult));
            }
        } catch (error) {
            console.error(error);
        }
    }

}
