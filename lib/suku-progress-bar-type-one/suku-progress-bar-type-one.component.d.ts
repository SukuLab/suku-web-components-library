import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuProgressBarTypeOneComponent implements OnInit {
    progressStyleOne: string;
    progressStyleTwo: string;
    progressStyleThree: string;
    progressStyleFour: string;
    customHeadingOneClass: string;
    customHeadingTwoClass: string;
    customHeadingThreeClass: string;
    customHeadingFourClass: string;
    enablePointer: boolean;
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
    progressOneAction: EventEmitter<{}>;
    progressTwoAction: EventEmitter<{}>;
    progressThreeAction: EventEmitter<{}>;
    progressFourAction: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
