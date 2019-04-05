import { OnInit, EventEmitter, AfterViewInit } from '@angular/core';
export declare class SukuACHSettingsComponent implements OnInit, AfterViewInit {
    _beneficialOwnerStatus: any;
    title: string;
    titleId: string;
    subTitle: string;
    subTitleId: string;
    subContent: string;
    subContentId: string;
    SetupACHPaymentsBtnText: string;
    paymentButtonId: string;
    lowerText: string;
    lowerTextId: string;
    subtitleId: string;
    action: EventEmitter<{}>;
    upload: EventEmitter<{}>;
    beneficialOwnerStatus: any;
    documentStatus: any;
    selected: any[];
    toggle: any[];
    customClass: any;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    uploadDoc(val: any): void;
    getDocTypeString(docType: any): string;
    getDocFailureString(failureType: any): string;
    active(i: any): void;
}
