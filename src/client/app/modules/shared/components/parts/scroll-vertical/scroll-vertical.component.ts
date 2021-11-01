import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { getEnvironment } from '../../../../../../environments/environment';

@Component({
    selector: 'app-scroll-vertical',
    templateUrl: './scroll-vertical.component.html',
    styleUrls: ['./scroll-vertical.component.scss'],
})
export class ScrollVerticalComponent implements OnInit, AfterViewChecked {
    public environment = getEnvironment();
    public move: number;
    public isScroll: boolean;
    @ViewChild('scroll') public scroll: { nativeElement: HTMLDivElement };

    constructor() {}

    public async ngOnInit() {
        this.move = Number(this.environment.SCROLL_BUTTON_MOVE);
        this.isScroll = false;
    }

    public ngAfterViewChecked() {
        const { scrollHeight, clientHeight } = this.scroll.nativeElement;
        this.isScroll =
            this.environment.SCROLL_BUTTON && scrollHeight > clientHeight;
    }

    public scrollUp() {
        this.scroll.nativeElement.scrollTop -= this.move;
    }

    public scrollDown() {
        this.scroll.nativeElement.scrollTop += this.move;
    }
}
