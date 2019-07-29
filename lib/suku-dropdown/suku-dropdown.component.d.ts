import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class SukuDropdownComponent implements OnInit {
    form: FormGroup;
    control: string;
    data: any[];
    keyValue: string;
    displayKey: string;
    placeholder: string;
    formSumitAttempt: any;
    selectId: string;
    errorMsg: string;
    customSelectClass: string;
    icon: string;
    iconCustomClass: string;
    iconId: string;
    select: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    isFieldValid(field: string): any;
}
