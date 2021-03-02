import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-quantity-input',
    templateUrl: './quantity-input.component.html',
    styleUrls: ['./quantity-input.component.scss']
})
export class QuantityInputComponent implements OnInit {
    @Input() public value: number;
    @Input() public maxValue: number;
    @Output() public valueChange = new EventEmitter<number>();
    constructor() { }

    public ngOnInit() {
    }

    public increment() {
        this.value++;
        this.valueChange.emit(this.value);
    }

    public decrement() {
        this.value--;
        this.valueChange.emit(this.value);
    }

}
