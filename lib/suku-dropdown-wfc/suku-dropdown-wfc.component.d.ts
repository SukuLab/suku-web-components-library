import { OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
export declare class SukuDropdownWfcComponent implements OnInit {
    _subscription: any;
    dropdownControl: FormControl;
    pattern: any;
    color: string;
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
    value: any;
    select: EventEmitter<{}>;
    valueChange: EventEmitter<{}>;
    enableRequiredValidator: any;
    constructor();
    ngOnInit(): void;
}
