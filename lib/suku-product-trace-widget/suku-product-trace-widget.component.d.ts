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
    headName: any;
    subHeadName: any;
    name: any;
    control: any;
    searchFun: EventEmitter<{}>;
    selectproducts: EventEmitter<{}>;
    searchByProduct: EventEmitter<{}>;
    traceproduct: EventEmitter<{}>;
    disableBtn: any;
    productdetails: any;
    result: any;
    searchEnabled(): void;
    visible: any;
    showSelectedPro(newValue: any): void;
    constructor();
    ngOnInit(): void;
}