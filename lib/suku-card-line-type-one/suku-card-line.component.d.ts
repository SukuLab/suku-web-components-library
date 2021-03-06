import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuCardLineTypeOneComponent implements OnInit {
    bgColor: string;
    image: string;
    chatReadIcon: string;
    chatUnreadIcon: string;
    chatReadIconId: string;
    chatUnreadIconId: string;
    msgStatus: any;
    customClass: string;
    customImgclass: string;
    customIconClass: string;
    imageColSize: string;
    txtcolsize: string;
    txtTwocolsize: string;
    txtThreecolsize: string;
    titleOne: string;
    titleOneColor: string;
    titleOneWeight: string;
    titleOneSize: string;
    titleOnecustomclass: string;
    contentOne: string;
    contentOneColor: string;
    contentOneWeight: string;
    contentOneSize: string;
    contentOnecustomclass: string;
    contentTwo: string;
    contentTwoColor: string;
    contentTwoWeight: string;
    contentTwoSize: string;
    contentTwocustomclass: string;
    subTitleTwo: string;
    subTitleTwoColor: string;
    subTitleTwoWeight: string;
    subTitleTwoSize: string;
    subTitleTwocustomclass: string;
    subTitleThree: string;
    subTitleThreecolor: string;
    subTitleThreeWeight: string;
    subTitleThreeSize: string;
    subTitleThreeClass: string;
    contentThree: string;
    contentThreeColor: string;
    contentThreeWeight: string;
    contentThreeSize: string;
    contentThreecustomclass: string;
    imgCustomClass: string;
    action: EventEmitter<{}>;
    userAction: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    cardAction(): void;
    contentAction(e: any): void;
}
