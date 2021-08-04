import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    @Input() public topButton?: boolean;

    constructor() {}

    public ngOnInit() {
        this.topButton = this.topButton === undefined ? true : this.topButton;
    }
}
