import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class SukuSearchInputComponent implements OnInit {
    form: FormGroup;
    control: any;
    icon: string;
    customClass: string;
    iconCustomClass: string;
    iconId: string;
    placeholder: string;
    searchOnType: EventEmitter<{}>;
    searchOnEnter: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
