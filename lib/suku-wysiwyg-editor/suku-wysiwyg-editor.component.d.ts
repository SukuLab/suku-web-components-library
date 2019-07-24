import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class SukuWysiwygEditorComponent implements OnInit {
    htmlQuillContent: any;
    form: FormGroup;
    control: string;
    placeholder: string;
    moduleConfig: {
        toolbar: (string[] | {
            header: number;
        }[] | {
            list: string;
        }[] | {
            script: string;
        }[] | {
            indent: string;
        }[] | {
            direction: string;
        }[] | {
            header: (number | boolean)[];
        }[] | ({
            color: any[];
            background?: undefined;
        } | {
            background: any[];
            color?: undefined;
        })[] | {
            font: any[];
        }[] | {
            align: any[];
        }[])[];
    };
    constructor();
    ngOnInit(): void;
    onContentChanged(data: any): void;
}
