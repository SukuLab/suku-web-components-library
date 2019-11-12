import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuClaimsWidgetComponent implements OnInit {
    claims: {
        name: string;
        verifiable: boolean;
        tooltipInfo: string;
        description: string[];
    }[];
    claimTitleCustomClass: string;
    claimTooltipCustomClass: string;
    tooltipInfo: string;
    positionTooltipRight: any;
    positionTooltipBottom: any;
    action: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
