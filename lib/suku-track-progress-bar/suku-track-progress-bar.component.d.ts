import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuTrackProgressBarComponent implements OnInit {
    progressStyleOne: string;
    progressStyleTwo: string;
    progressStyleThree: string;
    headingOne: string;
    headingTwo: string;
    headingThree: string;
    headingOneId: string;
    headingTwoId: string;
    headingThreeId: string;
    customHeadingOneClass: string;
    customHeadingTwoClass: string;
    customHeadingThreeClass: string;
    progressBarLabelOne: string;
    progressBarLabelTwo: string;
    progressBarLabelThree: string;
    tickSignCustomClass: string;
    customHeadingCustomClass: string;
    progressCustomClass: string;
    customProgressTitle: string;
    contentCustomClass: string;
    enablePointer: boolean;
    progressOneAction: EventEmitter<{}>;
    progressTwoAction: EventEmitter<{}>;
    progressThreeAction: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
