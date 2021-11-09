import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'app-numeric-keypad',
    templateUrl: './numeric-keypad.component.html',
    styleUrls: ['./numeric-keypad.component.scss'],
})
export class NumericKeypadComponent implements OnInit {
    public isOpen: boolean;
    public position: { y: number; x: number };
    @Input() public inputValue: string;
    @Input() public viewPosition?: 'Top';
    @Input() public maxlength?: number;
    @Input() public inputType: 'number' | 'telephone' | 'string';
    @Output() public change = new EventEmitter<string>();
    @Output() public hidden = new EventEmitter<string>();
    @ViewChild('trigger') private trigger: { nativeElement: HTMLElement };
    @ViewChild('keypad') private keypad: { nativeElement: HTMLElement };

    constructor() {}

    public ngOnInit() {
        this.isOpen = false;
        this.position = { y: 0, x: 0 };
        if (this.inputValue === '0') {
            this.inputValue = '';
        }
        this.maxlength = this.maxlength === undefined ? 20 : this.maxlength;
    }

    public show() {
        const target = document.body;
        const scale =
            target.getAttribute('data-scale') === null
                ? 1
                : Number(target.getAttribute('data-scale'));
        const height = this.trigger.nativeElement.clientHeight;
        const rect = this.trigger.nativeElement.getBoundingClientRect();
        // const scrollTop = window.pageYOffset || (<HTMLElement>document.documentElement).scrollTop;
        // const scrollLeft = window.pageXOffset || (<HTMLElement>document.documentElement).scrollLeft;
        this.position = {
            y: rect.top / scale + height,
            x: rect.left / scale,
        };
        this.isOpen = true;

        setTimeout(() => {
            if (this.viewPosition === 'Top') {
                this.position.y =
                    rect.top - this.keypad.nativeElement.clientHeight;
            }
        }, 0);
    }

    public hide() {
        this.isOpen = false;
        this.hidden.emit(this.inputValue);
    }

    public inputCode(code: string) {
        // console.log(this.inputValue);
        this.inputValue = (this.inputValue + code).slice(0, this.maxlength);
        if (this.inputType === 'number') {
            this.inputValue = String(parseInt(this.inputValue, 10));
        }
        this.change.emit(this.inputValue);
    }

    public clear() {
        if (this.inputValue.length === 0) {
            return;
        }
        this.change.emit(this.inputValue.slice(0, -1));
    }
}
