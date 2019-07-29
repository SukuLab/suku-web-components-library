import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuProgressBarTypeOneComponent implements OnInit {
    progressStyleOne: string;
    progressStyleTwo: string;
    progressStyleThree: string;
    progressStyleFour: string;
    progressStyleFive: string;
    customHeadingOneClass: string;
    customHeadingTwoClass: string;
    customHeadingThreeClass: string;
    customHeadingFourClass: string;
    customHeadingFiveClass: string;
    progressBarLabels: {
        labelOne: string;
        labelTwo: string;
        labelThree: string;
        labelFour: string;
    };
    progressBarIconId: {
        IconOneId: string;
        IconTwoId: string;
        IconThreeId: string;
        IconFourId: string;
    };
    progressBarTitleId: {
        labelOneId: string;
        labelTwoId: string;
        labelThreeId: string;
        labelFourId: string;
    };
    customClass: string;
    progressBarTitle: string;
    progressBarColor: any;
    progressBarFontSize: any;
    progressBarFontWight: any;
    progressBarLabelOne: string;
    progressBarLabelTwo: string;
    progressBarLabelThree: string;
    progressBarLabelFour: string;
    labelTitleCustomClass: string;
    lableTextCustomClass: string;
    labelGridCustomClass: string;
    progressBarNameGridAlign: string;
    progressBarTitleClass: string;
    checkMarkCustomClass: string;
    progressOneAction: EventEmitter<{}>;
    progressTwoAction: EventEmitter<{}>;
    progressThreeAction: EventEmitter<{}>;
    progressFourAction: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
