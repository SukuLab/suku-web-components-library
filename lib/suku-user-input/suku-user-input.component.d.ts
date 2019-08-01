import { OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
/** Error when invalid control is dirty, touched, or submitted. */
export declare class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
}
export declare class SukuUserInputComponent implements OnInit {
    _subscription: any;
    usernameControl: FormControl;
    pattern: any;
    color: string;
    placeholder: string;
    customClass: any;
    enableUserIcon: boolean;
    errorMessageOne: string;
    errorMessageTwo: string;
    errorMessageThree: string;
    errorMessageFour: string;
    enableRequiredValidator: any;
    enablePatternValidators: any;
    enableMaxLenValidators: any;
    enableMinLenValidators: any;
    action: EventEmitter<{}>;
    email: FormControl;
    matcher: MyErrorStateMatcher;
    constructor();
    ngOnInit(): void;
    getErrorMessage(): "" | "You must enter a value" | "username should be more than 2 letters";
    ngDestroy(): void;
}
