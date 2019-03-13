import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class SukuBeneficialOwnerComponent implements OnInit {
    form: FormGroup;
    title: string;
    titleClass: string;
    countriesList: any;
    statesList: any;
    formValid: Boolean;
    control: any;
    arrayControlName: any;
    content: string;
    countrySelect: EventEmitter<{}>;
    stateSelect: EventEmitter<{}>;
    upload: EventEmitter<{}>;
    submitOwner: EventEmitter<{}>;
    add: EventEmitter<{}>;
    submitData: EventEmitter<{}>;
    selected: any[];
    toggle: any[];
    customClass: any;
    constructor();
    ngOnInit(): void;
    active(i: any): void;
    action(): void;
    countrySelectAction(val: any, i: any): void;
    agree(): void;
}
