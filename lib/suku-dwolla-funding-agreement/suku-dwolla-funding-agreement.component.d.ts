import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class SukuDwollaFundingAgreementComponent implements OnInit {
    form: FormGroup;
    title: string;
    titleClass: string;
    control: any;
    checkBoxId: string;
    content: string;
    contentId: string;
    contentSize: string;
    btnTextSize: string;
    submit: EventEmitter<{}>;
    verify: EventEmitter<{}>;
    formValid: Boolean;
    constructor();
    ngOnInit(): void;
    action(): void;
    agree(): void;
}
