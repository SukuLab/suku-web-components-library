import { EventEmitter, OnInit } from '@angular/core';
export declare class SukuRatingStarComponent implements OnInit {
    myHTML: any;
    _rate: number;
    fullStars: number;
    fullStarsArray: any[];
    halfStar: number;
    emptyStars: number;
    emptyStarsArray: any[];
    action: EventEmitter<{}>;
    customclass: any;
    ratingValue: number;
    constructor();
    ngOnInit(): void;
}
