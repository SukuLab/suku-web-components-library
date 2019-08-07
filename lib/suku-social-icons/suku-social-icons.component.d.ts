import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuSocialIconsComponent implements OnInit {
    socialIcons: {
        icon: string;
        path: string;
        id: string;
    }[];
    action: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    sendRoutePath(e: any): void;
}
