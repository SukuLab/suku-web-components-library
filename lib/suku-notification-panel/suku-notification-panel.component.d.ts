import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuNotificationPanelComponent implements OnInit {
    title: string;
    customclass: string;
    notificationArray: any[];
    action: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
