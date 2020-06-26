import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EpsonPrinterService {

    constructor() { }

    /**
     * 印刷処理
     */
    public async printProcess(params: {
        canvasList: HTMLCanvasElement[];
    }) {
        const canvasList = params.canvasList;
        console.log(canvasList);
    }


}
