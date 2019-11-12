import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuSelectInputComponent implements OnInit {
    name: string;
    size: any;
    color: any;
    weight: any;
    customclass: any;
    keyValue: string;
    displayKey: string;
    titleText: string;
    placeHolder: string;
    imgheight: string;
    imgwidth: string;
    imgurl: string;
    imageCustomClass: string;
    icon: string;
    iconId: string;
    iconCustomClass: string;
    sort: EventEmitter<{}>;
    options: any[];
    constructor();
    ngOnInit(): void;
}
