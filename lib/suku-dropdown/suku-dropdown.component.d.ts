import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class SukuDropdownComponent implements OnInit {
    form: FormGroup;
    control: string;
    data: any[];
    icon: string;
    select: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
