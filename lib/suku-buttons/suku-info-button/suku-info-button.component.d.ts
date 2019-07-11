import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuInfoButtonComponent implements OnInit {
    name: any;
    id: any;
    size: any;
    weight: string;
    disableValue: Boolean;
    action: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
