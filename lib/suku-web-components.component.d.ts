import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class SukuHeadingComponent {
    id: string;
    size: any;
    color: any;
    weight: any;
    customclass: string;
}
export declare class SukuSubHeadingComponent {
    id: string;
    size: any;
    color: any;
    weight: any;
    customclass: string;
}
export declare class SukuHomeHeadingComponent {
    id: string;
    size: any;
    color: any;
    weight: any;
    customclass: any;
}
export declare class SukuHomeItalicHeadingComponent {
    id: string;
    size: any;
    color: any;
    weight: any;
    customclass: any;
}
export declare class SukuHeadingNestComponent {
    name: any;
    id: string;
    size: any;
    color: any;
    weight: any;
    customclass: string;
}
export declare class SukuSubNestHeadingComponent {
    name: any;
    id: string;
    size: any;
    color: any;
    weight: any;
    customclass: any;
}
export declare class SukuCardTitleComponent {
    cardTitle: string;
    cardTitleSize: string;
    cardTitleWeight: string;
    cardTitleColor: string;
    cardContent: string;
    cardContentSize: string;
    cardContentWeight: string;
    cardContentColor: string;
}
export declare class SukuCardListComponent {
    cardTitle: string;
    cardTitleSize: string;
    cardTitleWeight: string;
    cardTitleColor: string;
    cardContent: string;
    cardContentSize: string;
    cardContentWeight: string;
    cardContentColor: string;
}
export declare class SukuAddWidgetComponent {
    image: string;
    size: any;
    color: any;
    weight: any;
    customclass: string;
    action: EventEmitter<{}>;
}
export declare class SukuMailWidgetComponent {
    name: string;
    size: string;
    color: string;
    weight: string;
    customclass: string;
}
export declare class SukuPhoneWidgetComponent {
    number: string;
    size: string;
    color: string;
    weight: string;
    customclass: string;
}
export declare class SukuAddressWidgetComponent {
    name: string;
    size: string;
    color: string;
    weight: string;
    customclass: string;
}
export declare class SukuInlineDropDownComponent {
    name: string;
    size: string;
    color: string;
    weight: string;
    customclass: string;
    action: EventEmitter<{}>;
}
export declare class SukuLinkComponent {
    size: any;
    color: any;
    weight: any;
    customClass: string;
    action: EventEmitter<{}>;
}
export declare class SukuSelectInputComponent {
    title: string;
    size: any;
    color: any;
    weight: any;
    customClass: any;
    sort: EventEmitter<{}>;
    options: any;
    constructor();
}
export declare class SukuHomeWidgetComponent {
    name: any;
    id: any;
    color: string;
    bgColor: string;
    routerLink: EventEmitter<{}>;
}
export declare class SukuDashboardProfileComponent {
    userName: any;
    image: string;
    icon: string;
    titleOne: any;
    titleTwo: any;
    createNewList: EventEmitter<{}>;
    clearBuyInterestStorage: EventEmitter<{}>;
    test(i: any): void;
}
export declare class SukuNotificationBoxComponent {
    id: any;
    notificationTitle: any;
    notificationValue: any;
}
export declare class SukuInfoButtonComponent {
    name: any;
    id: any;
    action: EventEmitter<{}>;
}
export declare class SukuPrimaryButtonComponent {
    name: any;
    id: any;
    action: EventEmitter<{}>;
}
export declare class SukuSecondaryButtonComponent {
    name: any;
    id: any;
    action: EventEmitter<{}>;
}
export declare class SukuDefaultButtonComponent {
    id: string;
    action: EventEmitter<{}>;
}
export declare class SukuProgressBarComponent {
    progressStyleOne: string;
    progressStyleTwo: string;
    progressStyleThree: string;
    progressStyleFour: string;
    progressStyleFive: string;
    headingOne: string;
    headingTwo: string;
    headingThree: string;
    headingFour: string;
    headingFive: string;
    headingOneId: string;
    headingTwoId: string;
    headingThreeId: string;
    headingFourId: string;
    headingFiveId: string;
}
export declare class SukuCheckboxComponent {
    id: any;
}
export declare class SukuRadioButtonComponent {
    formRadio: FormGroup;
    controlName: string;
    radioControl: string;
    Title: string;
    sukuOne: string;
    checked: string;
    color: string;
}
export declare class SukuStarBadgeComponent {
    icon: string;
    value: number;
}
export declare class SukuSearchInputComponent {
    formRadio: FormGroup;
    icon: string;
    customClass: string;
}
export declare class SukuBidInfoComponent {
    bids: string;
    bidSize: string;
    bidColor: string;
    bidWeight: string;
    bidHeading: string;
    bidHeadingSize: string;
    bidHeadingColor: string;
    bidHeadingWeight: string;
    percent: string;
    percentSize: string;
    percentColor: string;
    percentWeight: string;
    percentHeading: string;
    percentHeadingSize: string;
    percentHeadingColor: string;
    percentHeadingWeight: string;
}
export declare class SukuNavSubmenuComponent {
    subMenuList: any[];
    selectedItem: any;
    constructor();
    subMenuSelected(event: any, newValue: any): void;
}
export declare class SukuCardLineComponent {
    image: string;
    customClass: string;
    bgColor: string;
    msgStatus: string;
    chatReadIcon: string;
    chatUnreadIcon: string;
    customIconClass: string;
    titleOne: string;
    titleOneColor: string;
    titleOneWeight: string;
    titleOneSize: string;
    contentOne: string;
    contentOneColor: string;
    contentOneWeight: string;
    contentOneSize: string;
    subTitleTwo: string;
    subTitleTwoColor: string;
    subTitleTwoWeight: string;
    subTitleTwoSize: string;
    contentTwo: string;
    contentTwoColor: string;
    contentTwoWeight: string;
    contentTwoSize: string;
    subTitleThree: string;
    subTitleThreeColor: string;
    subTitleThreeWeight: string;
    subTitleThreeSize: string;
    contentThree: string;
    contentThreeColor: string;
    contentThreeWeight: string;
    contentThreeSize: string;
}
export declare class SukuBidTagComponent {
    prize: string;
    prizeSize: string;
    prizeWeight: string;
    prizeColor: string;
    prizeCustomClass: string;
    unit: string;
    unitSize: string;
    unitWeight: string;
    unitColor: string;
    unitCustomClass: string;
    qContent: string;
    qSize: string;
    qWeight: string;
    qColor: string;
    qCustomClass: string;
    pContent: string;
    pSize: string;
    pWeight: string;
    pColor: string;
    pCustomClass: string;
}
export declare class SukuMatchChipComponent {
    image: string;
    match: EventEmitter<{}>;
    listNameSize: string;
    listWeight: string;
    listColor: string;
    listName: string;
    prize: string;
    prizeSize: string;
    prizeWeight: string;
    prizeColor: string;
    prizeCustomClass: string;
    date: string;
    dateSize: string;
    dateWeight: string;
    dateColor: string;
    dateCustomClass: string;
    dateV: string;
    dateVSize: string;
    dateVWeight: string;
    dateVColor: string;
    dateVCustomClass: string;
    sell: string;
    sellSize: string;
    sellWeight: string;
    sellColor: string;
    sellCustomClass: string;
    sellV: string;
    sellVSize: string;
    sellVWeight: string;
    sellVColor: string;
    sellVCustomClass: string;
}
export declare class SukuProfileWidgetComponent {
    image: string;
    userName: string;
    nameweight: string;
    namecustomclass: string;
    namesize: string;
    namecolor: string;
    accounttype: string;
    accountweight: string;
    accountcustomclass: string;
    accountsize: string;
    accountcolor: string;
    ratingvalue: string;
    ratingcustomclass: string;
    ratedetails: string;
    ratingweight: string;
    rdcustomclass: string;
}
export declare class SukuResponseComponent {
    customClass: string;
    iconClass: string;
    iconColor: string;
    content: string;
    bgColor: string;
}
export declare class SukuInfoComponent {
    name: string;
    Head: string;
    id: string;
    size: any;
    color: any;
    weight: any;
    customClass: string;
    customClassTwo: string;
}
