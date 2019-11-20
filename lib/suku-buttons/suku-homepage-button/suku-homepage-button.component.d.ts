import { OnInit, EventEmitter } from '@angular/core';
import { SukuHomepageButton } from './suku-homepage-button';
export declare class SukuHomepageButtonComponent implements OnInit {
    titleId: any;
    titleCustomClass: any;
    iconCustomClass: any;
    sukuButtonCustomClass: any;
    buttonData: SukuHomepageButton;
    sendRoutePath: EventEmitter<string>;
    constructor();
    ngOnInit(): void;
    onClick(): void;
}
