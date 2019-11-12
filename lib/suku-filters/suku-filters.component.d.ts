import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class SukuFiltersComponent implements OnInit {
    form: FormGroup;
    filterHeading: any;
    size: string;
    color: string;
    diameter: string;
    filterSubHeading: any;
    enableLoader: boolean;
    statusTypesDynamic: any[];
    filterOnChange: EventEmitter<{}>;
    applyFilter: EventEmitter<{}>;
    selectAll: EventEmitter<{}>;
    deselectAll: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
