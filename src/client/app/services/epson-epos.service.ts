import { Injectable } from '@angular/core';
import { EpsonCaschCangerService } from './epson/epson-cashchanger.service';
import { EpsonPrinterService } from './epson/epson-printer.service';

@Injectable({
    providedIn: 'root'
})
export class EpsonEPOSService {
    constructor(
        public cashchanger: EpsonCaschCangerService,
        public printer: EpsonPrinterService,
    ) { }

}
