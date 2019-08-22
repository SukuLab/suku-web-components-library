import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuDashboardProfileComponent implements OnInit {
    userName: any;
    image: string;
    icon: string;
    titleOne: any;
    iconOne: string;
    iconOneId: any;
    iconOneCustomClass: any;
    iconTwo: string;
    iconTwoId: any;
    iconTwoCustomClass: any;
    titleTwo: any;
    createNewList: EventEmitter<{}>;
    clearBuyInterestStorage: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
