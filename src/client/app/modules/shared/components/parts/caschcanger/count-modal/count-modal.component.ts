import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-caschcanger-count-modal',
    templateUrl: './count-modal.component.html',
    styleUrls: ['./count-modal.component.scss'],
})
export class CaschcangerCountModalComponent implements OnInit {
    @Input() public counts: {
        jpy1?: string;
        jpy5?: string;
        jpy10?: string;
        jpy50?: string;
        jpy100?: string;
        jpy500?: string;
        jpy1000?: string;
        jpy2000?: string;
        jpy5000?: string;
        jpy10000?: string;
    };

    constructor(public modal: BsModalRef, private elementRef: ElementRef) {}

    public ngOnInit() {
        const element: HTMLElement =
            this.elementRef.nativeElement.querySelector('.scroll-vertical');
        setTimeout(() => {
            element.scrollTop = 0;
        }, 0);
    }
}
