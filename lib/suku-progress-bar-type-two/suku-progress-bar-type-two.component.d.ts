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
    enablePointer: boolean;
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
    progressOneAction: EventEmitter<{}>;
    progressTwoAction: EventEmitter<{}>;
    progressThreeAction: EventEmitter<{}>;
    progressFourAction: EventEmitter<{}>;
    progressFiveAction: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
