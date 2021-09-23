import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'formatDate',
    pure: false,
})
export class FormatDatePipe implements PipeTransform {
    constructor() {}

    public transform(value: string, format: string): any {
        const result = moment(value).format(format);

        return result;
    }
}
