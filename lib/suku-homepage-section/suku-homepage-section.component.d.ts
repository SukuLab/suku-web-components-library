import { OnInit, EventEmitter } from '@angular/core';
import { SukuHomepageSection } from './suku-homepage-section';
export declare class SukuHomepageSectionComponent implements OnInit {
    sectionData: SukuHomepageSection;
    sendRoutePath: EventEmitter<string>;
    constructor();
    ngOnInit(): void;
    onSendRoutePath(string: any): void;
}
