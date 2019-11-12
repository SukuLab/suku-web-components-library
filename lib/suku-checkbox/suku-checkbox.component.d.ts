import { OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
export declare class SukuCheckboxComponent implements OnInit {
    _subscription: any;
    checkboxId: string;
    customClass: string;
    color: string;
    control: any;
    checked: any;
    indeterminate: any;
    labelPosition: string;
    disabled: any;
    checkBoxControl: FormControl;
    action: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    ngDestroy(): void;
}
