import { OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
export declare class SukuSearchWidgetComponent implements OnInit {
    searchFieldFontSize: number;
    searchFiledPlaceHolder: string;
    searchFieldFontColor: string;
    fieldId: string;
    fieldValue: string;
    buttonId: string;
    buttonName: string;
    buttonFontSize: any;
    buttonFontWeight: any;
    searchFieldFontWeight: any;
    _subscription: any;
    searchControl: FormControl;
    pattern: any;
    color: string;
    placeholder: string;
    customClass: any;
    enableUserIcon: boolean;
    errorMessageOne: string;
    errorMessageTwo: string;
    errorMessageThree: string;
    errorMessageFour: string;
    value: any;
    disable: any;
    enableRequiredValidator: any;
    enablePatternValidators: any;
    enableMaxLenValidators: any;
    enableMinLenValidators: any;
    action: EventEmitter<{}>;
    getValue: EventEmitter<{}>;
    onChangeAction: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    getErrorMessage(): "" | "You must enter a value" | "username should be more than 2 letters";
    getFieldValue(): void;
    ngDestroy(): void;
}
