import { OnInit } from '@angular/core';
export declare class SukuClaimsWidgetComponent implements OnInit {
    claims: {
        name: string;
        verifiable: boolean;
    }[];
    tooltipInfo: string;
    constructor();
    ngOnInit(): void;
}
