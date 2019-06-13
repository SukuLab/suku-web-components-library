import { OnInit } from '@angular/core';
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
    constructor();
    ngOnInit(): void;
}
