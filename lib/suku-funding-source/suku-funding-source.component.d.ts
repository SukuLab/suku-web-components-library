import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuFundingSourceComponent implements OnInit {
    constructor();
    arrayOne: any[];
    defaultText: string;
    defaultbankName: string;
    headerOneTxt: string;
    headerTwoText: string;
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
    removeDefault: EventEmitter<{}>;
    makeDefaultAction: EventEmitter<{}>;
    removeSourceAction: EventEmitter<{}>;
    achMakeDefaultAction: EventEmitter<{}>;
    ngOnInit(): void;
}
