import { OnInit, EventEmitter } from '@angular/core';
import { SukuHomepageButton } from './suku-homepage-button';
export declare class SukuHomepageButtonComponent implements OnInit {
    buttonData: SukuHomepageButton;
    sendRoutePath: EventEmitter<string>;
    constructor();
    ngOnInit(): void;
    onClick(): void;
}
