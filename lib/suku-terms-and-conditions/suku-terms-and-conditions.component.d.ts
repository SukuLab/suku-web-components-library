import { OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class SukuTermsAndConditionsComponent implements OnInit {
    private fb;
    termsandcondition: FormGroup;
    action: EventEmitter<{}>;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    action1(): void;
}
