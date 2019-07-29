import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuProgressBarTypeTwoComponent implements OnInit {
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
        labelFive: string;
    };
    progressBarIconId: {
        IconOneId: string;
        IconTwoId: string;
        IconThreeId: string;
        IconFourId: string;
        IconFiveId: string;
    };
    progressBarTitleId: {
        labelOneId: string;
        labelTwoId: string;
        labelThreeId: string;
        labelFourId: string;
        labelFiveId: string;
    };
    progressNamesCustomClass: string;
    progressLabelOne: string;
    progressLabelTwo: string;
    progressLabelThree: string;
    progressLabelFour: string;
    progressLabelFive: string;
    checkMarkCustomClass: string;
    progressTextAlignCustomClass: string;
    progressBarLabelCustomClass: string;
    labelContentCustomClass: string;
    progressOneAction: EventEmitter<{}>;
    progressTwoAction: EventEmitter<{}>;
    progressThreeAction: EventEmitter<{}>;
    progressFourAction: EventEmitter<{}>;
    progressFiveAction: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
