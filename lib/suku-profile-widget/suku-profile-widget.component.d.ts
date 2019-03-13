import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuProfileWidgetComponent implements OnInit {
    image: string;
    userName: string;
    nameWeight: string;
    nameCustomClass: string;
    nameSize: string;
    nameColor: any;
    accountType: string;
    accountWeight: string;
    accountCustomClass: string;
    accountSize: string;
    accountColor: string;
    ratingCustomClass: string;
    rateDetails: string;
    rateColor: string;
    ratingWeight: string;
    rDustomClass: string;
    id: string;
    myHTML: any;
    _rate: number;
    rating: EventEmitter<{}>;
    customClass: any;
    ratingValue: number;
    constructor();
    callOfStarts(e: any): void;
    ngOnInit(): void;
}
