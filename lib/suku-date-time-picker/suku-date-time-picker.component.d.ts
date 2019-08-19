import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class SukuDateTimePickerComponent implements OnInit {
    form: FormGroup;
    control: string;
    placeholder: string;
    dateId: string;
    max: any;
    min: any;
    constructor();
    ngOnInit(): void;
}
