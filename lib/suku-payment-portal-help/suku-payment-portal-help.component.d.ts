import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuPaymentPortalHelpComponent implements OnInit {
    title: string;
    titleId: string;
    titleCustomClass: string;
    subTitle: string;
    subTitleId: string;
    subTitleCustomClass: string;
    descriptionCustomClass: string;
    descriptionId: string;
    icon: string;
    iconId: string;
    labelOne: string;
    labelOneId: string;
    labelOneCustomClass: string;
    add: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
