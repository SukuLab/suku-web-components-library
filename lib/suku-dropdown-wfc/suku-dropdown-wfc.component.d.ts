import { OnInit, EventEmitter } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
export declare class SukuDropdownWfcComponent implements OnInit {
    _subscription: any;
    peerForm: NgForm;
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
    errorMsgTwo: string;
    customSelectClass: string;
    icon: string;
    iconCustomClass: string;
    iconId: string;
    disabled: any;
    value: any;
    enableRequiredValidator: any;
    select: EventEmitter<{}>;
    valueChange: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
export declare function duplicate(c: FormControl): any;
