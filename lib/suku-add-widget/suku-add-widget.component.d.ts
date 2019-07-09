import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuAddWidgetComponent implements OnInit {
    size: any;
    color: any;
    weight: any;
    id: string;
    icon: string;
    customClass: string;
    iconId: string;
    iconColor: any;
    iconCustomClass: string;
    action: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
