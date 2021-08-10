import { Component, Input, OnInit } from '@angular/core';
import { getEnvironment } from '../../../../../../environments/environment';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @Input() public step?: number;
    public environment = getEnvironment();

    constructor() {}

    public ngOnInit() {}
}
