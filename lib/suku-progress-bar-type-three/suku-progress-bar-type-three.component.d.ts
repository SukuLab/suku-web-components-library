import { OnInit } from '@angular/core';
export declare class SukuProgressBarTypeThreeComponent implements OnInit {
    progressBarData: any;
    selected: any;
    enableToolTip: any[];
    statusKey: string[];
    data: any;
    tooltipInfo: string;
    positionTooltip: any;
    positionTooltext: any;
    iconInfoCustomClass: string;
    customIconClass: string;
    customTitleClass: string;
    enablePointer: boolean;
    constructor();
    ngOnInit(): void;
    showDetails(data: any): void;
}
