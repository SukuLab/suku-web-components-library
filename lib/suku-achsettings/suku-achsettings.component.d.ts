import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuACHSettingsComponent implements OnInit {
    title: string;
    titleId: string;
    subTitle: string;
    subTitleId: string;
    subContent: string;
    subContentId: string;
    SetupACHPaymentsBtnText: string;
    paymentButtonId: string;
    lowerText: string;
    upperText: string;
    upperTextId: string;
    lowerTextId: string;
    subtitleId: string;
    action: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
