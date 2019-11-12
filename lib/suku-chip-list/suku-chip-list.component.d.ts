import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuChipListComponent implements OnInit {
    DocumentList: any[];
    actionOne: EventEmitter<{}>;
    actionTwo: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    downloadDoc(val: any): void;
    deleteDoc(val: any): void;
}
