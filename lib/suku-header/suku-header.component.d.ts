import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuHeaderComponent implements OnInit {
    _date: any;
    _enableTimer: any;
    titleOne: string;
    contentOne: string;
    titleTwo: string;
    contentTwo: string;
    titleThree: string;
    contentThree: any;
    enableTimer: any;
    action: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
