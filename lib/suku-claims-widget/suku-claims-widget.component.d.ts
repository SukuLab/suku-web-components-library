import { OnInit } from '@angular/core';
export declare class SukuClaimsWidgetComponent implements OnInit {
    claims: {
        name: string;
        verifiable: boolean;
    }[];
    claimTitleCustomClass: string;
    claimTooltipCustomClass: string;
    tooltipInfo: string;
    positionTooltipRight: any;
    positionTooltipBottom: any;
    constructor();
    ngOnInit(): void;
}
