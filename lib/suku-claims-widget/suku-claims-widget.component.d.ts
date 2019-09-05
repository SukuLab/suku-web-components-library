import { OnInit } from '@angular/core';
export declare class SukuClaimsWidgetComponent implements OnInit {
    claims: {
        name: string;
        verifiable: boolean;
    }[];
    tooltipInfo: string;
    positionTooltipLeft: any;
    positionTooltipTop: any;
    constructor();
    ngOnInit(): void;
}
