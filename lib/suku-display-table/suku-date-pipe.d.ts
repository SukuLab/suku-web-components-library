import { PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
export declare class DateLocaleFilter implements PipeTransform {
    translate: TranslateService;
    private datePipe;
    constructor(translate: TranslateService, datePipe: DatePipe);
    transform(value: string, dateFormat: string): any;
}
