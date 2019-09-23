import { OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
export declare class SukuMessageWidgetComponent implements OnInit {
    textAreaControl: FormControl;
    row: number;
    col: number;
    id: string;
    customClass: any;
    maxlength: number;
    readOnly: any;
    value: string;
    action: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    submitData(): void;
    checkSpcialChar(event: any): boolean;
}
