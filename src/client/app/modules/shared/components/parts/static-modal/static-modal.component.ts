import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-static-modal',
    templateUrl: './static-modal.component.html',
    styleUrls: ['./static-modal.component.scss']
})
export class StaticModalComponent implements OnInit {
    @Input() public title: string;
    @Input() public body: string;

    constructor(
        public modal: BsModalRef,
        private elementRef: ElementRef
    ) { }

    public ngOnInit() {
        const element: HTMLElement = this.elementRef.nativeElement.querySelector('.scroll-vertical');
        setTimeout(() => {
            element.scrollTop = 0;
        }, 0);
    }

}
