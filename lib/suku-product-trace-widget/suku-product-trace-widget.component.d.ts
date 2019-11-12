import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class SukuProductTraceWidgetComponent implements OnInit {
    form: FormGroup;
    val: boolean;
    val2: boolean;
    _visible: any;
    _data: any;
    _disableBtn: any;
    selectedItem: any;
    isSearch: boolean;
    _result: any;
    i: any;
    color: string;
    labelOne: any;
    labelOneId: string;
    labelOneCustomClass: any;
    labelTwo: any;
    labelTwoId: string;
    labelTwoCustomClass: any;
    labelThree: any;
    labelThreeId: any;
    labelThreeCustomClass: any;
    traceBoxCustomClass: any;
    searchInputId: string;
    searchIconCustomClass: string;
    btnOneId: string;
    btnOneSize: string;
    btnOneWeight: string;
    btnLabelOne: string;
    btnType: string;
    btnOneCustomClass: string;
    btnOneDisable: Boolean;
    btnOneAction: EventEmitter<{}>;
    btnTwoId: string;
    btnTwoSize: string;
    btnTwoWeight: string;
    btnLabelTwo: string;
    btnTwoCustomClass: string;
    btnTwoDisable: Boolean;
    btnTwoAction: EventEmitter<{}>;
    messageOne: string;
    messageTwo: string;
    control: any;
    radioFormControl: any;
    traceMethodRadio: string;
    tracetheProductId: string;
    searchFun: EventEmitter<{}>;
    selectproducts: EventEmitter<{}>;
    disableBtn: any;
    productdetails: any[];
    result: any;
    searchEnabled(): void;
    visible: any;
    showSelectedPro(newValue: any): void;
    constructor();
    ngOnInit(): void;
}
