import { OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class SukuTermsAndConditionsComponent implements OnInit {
    private fb;
    termsandcondition: FormGroup;
    checkBoxColor: string;
    title: string;
    titleColor: any;
    titleSize: any;
    titleWeight: any;
    description: string;
    descriptionCustomClass: string;
    linkCustomClass: string;
    linkOne: string;
    linkTwo: string;
    linkOneTitle: string;
    linkTwoTitle: string;
    control: string;
    action: EventEmitter<{}>;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    action1(): void;
}
