import { OnInit } from '@angular/core';
export declare class SukuProgressBarTypeThreeComponent implements OnInit {
    progressBarData: any;
    statusKey: string[];
    data: any;
    steps: ({
        '_order': number;
        'step': {
            'facility': {
                '_id': string;
                'name': string;
            };
            'description': string;
            'facilityType': string;
            'templateLocator': string;
            'inputs': {
                'assetId': string;
                'timestamp': string;
                'attestedBy': string;
            }[];
            'outputs': {
                'assetId': string;
                'timestamp': string;
                'attestedBy': string;
            }[];
        };
        'order'?: undefined;
    } | {
        'order': number;
        'step': {
            'facility': {
                '_id': string;
                'name': string;
            };
            'description': string;
            'facilityType': string;
            'templateLocator': string;
            'inputs': {
                'assetId': string;
                'timestamp': string;
                'attestedBy': string;
            }[];
            'outputs': ({
                'assetId': string;
                'timestamp': string;
                'attestedBy': string;
            } | {
                'assetId': string;
                'timestamp'?: undefined;
                'attestedBy'?: undefined;
            })[];
        };
        '_order'?: undefined;
    })[];
    iconInfo: string;
    positionTooltip: any;
    positionTooltext: any;
    iconInfoCustomClass: string;
    customIconClass: string;
    constructor();
    ngOnInit(): void;
}
