import { EventEmitter, OnInit } from '@angular/core';
export declare class SukuRatingStarComponent implements OnInit {
    myHTML: any;
    _rate: number;
    action: EventEmitter<{}>;
    customclass: any;
    ratingValue: number;
    callOfStarts(e: any): void;
    constructor();
    ngOnInit(): void;
}
