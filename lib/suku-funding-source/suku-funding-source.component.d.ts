import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuFundingSourceComponent implements OnInit {
    constructor();
    fundingDetails: any[];
    defaultText: string;
    defaultbankName: string;
    defaultBtnTxt: string;
    removeBtnTxt: string;
    defaultBtnId: string;
    removeBtnId: string;
    defaultRemoveBtnTxt: string;
    achWalletTxt: string;
    balanceLblTxt: string;
    achMakeDefaultBtnText: string;
    achMakeDefaultBtnId: string;
    DefaultaccountNumber: string;
    WalletBalance: number;
    defaultRemoveBtnId: string;
    transferFundId: string;
    transferFundTxt: string;
    removeDefault: EventEmitter<{}>;
    makeDefaultAction: EventEmitter<{}>;
    removeSourceAction: EventEmitter<{}>;
    transferFundAction: EventEmitter<{}>;
    addSource: EventEmitter<{}>;
    ngOnInit(): void;
}
