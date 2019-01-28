import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuAddWidgetComponent implements OnInit {
    image: string;
    size: any;
    color: any;
    weight: any;
    customclass: string;
    action: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
