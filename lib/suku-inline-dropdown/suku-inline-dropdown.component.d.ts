import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuInlineDropdownComponent implements OnInit {
    size: string;
    color: string;
    weight: string;
    id: string;
    customClass: string;
    action: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
