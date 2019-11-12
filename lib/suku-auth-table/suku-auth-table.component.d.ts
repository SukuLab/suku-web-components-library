import { OnInit } from '@angular/core';
export declare class SukuAuthTableComponent implements OnInit {
    tableHeading: string;
    tableContent: ({
        'blocknumber': string;
        'blocknumber2'?: undefined;
        'claim'?: undefined;
    } | {
        'blocknumber2': string;
        'blocknumber'?: undefined;
        'claim'?: undefined;
    } | {
        'claim': string[];
        'blocknumber'?: undefined;
        'blocknumber2'?: undefined;
    })[];
    headingFontWeight: any;
    headingTextColor: any;
    headingTextSize: any;
    headingBgColor: any;
    keyFontWeight: any;
    keyTextColor: any;
    keyTextSize: any;
    keyBgColor: any;
    valueFontWeight: any;
    valueTextColor: any;
    valueTextSize: any;
    valueBgColor: any;
    tableBgColor: string;
    constructor();
    ngOnInit(): void;
    getKeyValue(obj: any): {};
    chechIfArray(data: any): boolean;
}
