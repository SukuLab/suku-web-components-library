import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class SukuDateTimePickerComponent implements OnInit {
    form: FormGroup;
    control: string;
    placeholder: string;
    dateId: string;
    max: any;
    min: any;
    startAt: any;
    formSumitAttempt: any;
    errorMsg: string;
    dateSelect: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    isFieldValid(field: string): any;
    selectedDate(val: any): void;
}
