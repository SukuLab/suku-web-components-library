import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuDashboardProfileComponent implements OnInit {
    userName: any;
    image: string;
    icon: string;
    titleOne: any;
    titleTwo: any;
    createNewList: EventEmitter<{}>;
    clearBuyInterestStorage: EventEmitter<{}>;
    test(i: any): void;
    constructor();
    ngOnInit(): void;
}
