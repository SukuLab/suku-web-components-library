import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuSelectInputComponent implements OnInit {
    name: string;
    size: any;
    color: any;
    weight: any;
    customclass: any;
    sort: EventEmitter<{}>;
    options: any[];
    constructor();
    ngOnInit(): void;
}
