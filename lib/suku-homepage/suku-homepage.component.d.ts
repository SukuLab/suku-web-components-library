import { OnInit, EventEmitter } from '@angular/core';
import { SukuHomepageSection } from '../suku-homepage-section/suku-homepage-section';
export declare class SukuHomepageComponent implements OnInit {
    homepageData: SukuHomepageSection[];
    sendRoutePath: EventEmitter<string>;
    constructor();
    ngOnInit(): void;
    onSendRoutePath(string: any): void;
}
