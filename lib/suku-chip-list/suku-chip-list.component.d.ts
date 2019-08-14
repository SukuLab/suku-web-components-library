import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuChipListComponent implements OnInit {
    DocumentList: any[];
    actionOne: EventEmitter<{}>;
    actionTwo: EventEmitter<{}>;
    tempDataOne: any;
    tempDataTwo: any;
    constructor();
    ngOnInit(): void;
    downloadDoc(val: any, docIndex: any): void;
    deleteDoc(val: any, docIndex: any): void;
}
