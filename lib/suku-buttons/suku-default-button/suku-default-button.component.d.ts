import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuDefaultButtonComponent implements OnInit {
    id: string;
    size: string;
    color: string;
    weight: string;
    customClass: string;
    action: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
