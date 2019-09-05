import { OnInit } from '@angular/core';
export declare class SukuProgressBarTypeThreeComponent implements OnInit {
    progressBarData: any;
    selected: any;
    enableToolTip: any[];
    statusKey: string[];
    data: any;
    tooltipInfo: string;
    positionTooltipLeft: any;
    positionTooltipTop: any;
    customTitleClass: string;
    enablePointer: boolean;
    constructor();
    ngOnInit(): void;
    showDetails(data: any): void;
}
