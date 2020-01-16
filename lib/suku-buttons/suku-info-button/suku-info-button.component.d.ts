import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuInfoButtonComponent implements OnInit {
    id: any;
    size: string;
    weight: string;
    type: string;
    btnType: string;
    customClass: string;
    disableValue: Boolean;
    action: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
