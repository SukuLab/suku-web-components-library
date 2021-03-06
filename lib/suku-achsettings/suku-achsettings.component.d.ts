import { OnInit, EventEmitter, AfterViewInit } from '@angular/core';
export declare class SukuACHSettingsComponent implements OnInit, AfterViewInit {
    _beneficialOwnerStatus: any;
    title: string;
    titleId: string;
    titleCustomClass: string;
    subTitle: string;
    subTitleId: string;
    subTitleCustomClass: string;
    labelOne: string;
    labelOneCustomClass: string;
    labelOneId: string;
    labelTwo: string;
    labelTwoCustomClass: string;
    labelTwoId: string;
    labelThree: string;
    labelThreeCustomClass: string;
    labelThreeId: string;
    labelFour: string;
    labelFourCustomClass: string;
    labelFourCustomClassId: string;
    labelFive: string;
    labelFiveCustomClass: string;
    labelFiveId: string;
    labelSix: string;
    labelSixCustomClass: string;
    labelSixId: string;
    labelSeven: string;
    labelSevenCustomClass: string;
    labelSevenId: string;
    labelEight: string;
    labelEightCustomClass: string;
    labelEightId: string;
    labelNine: string;
    labelNineCustomClass: string;
    labelNineId: string;
    subContentCustomClass: string;
    subContentId: string;
    subContent: string;
    buttonLabel: string;
    buttonLabelId: string;
    paymentButtonId: string;
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
