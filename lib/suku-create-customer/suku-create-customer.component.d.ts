import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
export declare class SukuCreateCustomerComponent implements OnInit {
    private fb;
    _data: any;
    _data1: any;
    _ssnLimit: any;
    maxDate: any;
    currentDate: any;
    DwollaTOSformValid: boolean;
    CitizensReserveTOSformValid: boolean;
    validateType: boolean;
    getControl: any;
    form: FormGroup;
    formArrayNameValue: any;
    countriesList: any;
    statesList: any;
    CRDwollaTOSControl: any;
    CitizensReserveTOScontrol: any;
    countrySelect: EventEmitter<{}>;
    submitData: EventEmitter<{}>;
    onSubmit: EventEmitter<{}>;
    stateSelect: EventEmitter<{}>;
    industryTypeFun: EventEmitter<{}>;
    businessTypeFun: EventEmitter<{}>;
    businessTypeValue: any;
    industryTypeValue: any;
    businessClassificationValue: any;
    accountTypeChk: any;
    accountTypeControl: any;
    accountType: {
        name: string;
        value: number;
    }[];
    ssnLimit: any;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    countrySelectAction(val: any): void;
    industryTypeFunAction(val: any): void;
    businessTypeFunAction(val: any): void;
    validateTypeFun(type: any): void;
    action1(): void;
    GetFormattedDate(): void;
    accountTypeAction(e: any): void;
}
