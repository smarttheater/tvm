import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class HammerConfig extends HammerGestureConfig {
    public overrides = {
        press: {
            time: 3000,
        }, // override default settings
    };
}
