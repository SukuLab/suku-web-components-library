import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuPrimaryButtonComponent implements OnInit {
    id: string;
    size: string;
    color: string;
    weight: string;
    btnType: string;
    disableValue: Boolean;
    customClass: string;
    action: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
