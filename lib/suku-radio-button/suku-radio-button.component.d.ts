import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class SukuRadioButtonComponent implements OnInit {
    form: FormGroup;
    control: string;
    content: string;
    contentCustomClass: string;
    radioButtonId: string;
    color: string;
    value: number;
    action: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    buttonAction(): void;
}
