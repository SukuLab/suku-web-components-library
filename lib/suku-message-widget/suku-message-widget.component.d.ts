import { OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
export declare class SukuMessageWidgetComponent implements OnInit {
    textAreaControl: FormControl;
    row: number;
    col: number;
    id: string;
    customClass: any;
    maxlength: number;
    action: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    submitData(): void;
}
