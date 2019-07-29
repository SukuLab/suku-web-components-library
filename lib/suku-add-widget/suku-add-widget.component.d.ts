import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuAddWidgetComponent implements OnInit {
    id: string;
    size: string;
    color: string;
    weight: string;
    customClass: string;
    icon: string;
    iconId: string;
    iconCustomClass: string;
    widgetCustomClass: string;
    action: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
