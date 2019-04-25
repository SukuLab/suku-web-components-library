import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuFundingSourceComponent implements OnInit {
    fundingDetails: any[];
    loader: {
        diameter: number;
        loaderMessage: string;
    };
    fundingSourceLabel: {
        labelOne: string;
        labelOneId: string;
        labelTwo: string;
        labelTwoId: string;
        labelThree: string;
        labelThreeId: string;
        labelFour: string;
        labelFourId: string;
        labelFive: string;
        labelFiveId: string;
    };
    fundingSourceWidgetLabel: {
        labelOne: string;
        labelOneId: string;
        labelTwo: string;
        labelTwoId: string;
    };
    fundingSourceWidgetButtonLabel: {
        labelOne: string;
        labelOneId: string;
        labelTwo: string;
        labelTwoId: string;
        labelThree: string;
        labelThreeId: string;
    };
    contentOne: string;
    removeDefault: EventEmitter<{}>;
    makeDefaultAction: EventEmitter<{}>;
    removeSourceAction: EventEmitter<{}>;
    transferFundAction: EventEmitter<{}>;
    addSource: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
