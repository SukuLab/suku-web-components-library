import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuSocialIconsComponent implements OnInit {
    socialIcons: any;
    action: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    sendRoutePath(e: any): void;
}
