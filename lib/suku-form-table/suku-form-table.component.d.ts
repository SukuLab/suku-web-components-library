import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuFormTableComponent implements OnInit {
    j: any;
    _items: any[];
    _itemsKey: any;
    editable: any[];
    errorvalidationIndex: any;
    errorvalidationKey: any;
    titleOneId: any;
    titleOneSize: any;
    titleOneColor: string;
    titleOneWeight: any;
    titleOneCustomClass: string;
    titleContent: string;
    headerSize: string;
    headerColor: any;
    headerWeight: any;
    colorPallete: string[];
    status: string[];
    enableEditIndex: any;
    typeKey: any;
    type: any;
    defaultCount: number;
    items: any[];
    selectionKey: any;
    highlighterKey: any;
    patchKey: any;
    hiddenKey: any[];
    enableHighlighter: boolean;
    enableControls: boolean;
    enableSelectAll: boolean;
    selectAll: any;
    keyData: any[];
    controlsSize: any;
    controlCustomClass: any;
    save: EventEmitter<{}>;
    remove: EventEmitter<{}>;
    submitData: EventEmitter<{}>;
    formStatus: EventEmitter<{}>;
    _null: any;
    constructor();
    ngOnInit(): void;
    addTable(val: any, editIndex: any): void;
    submit(): void;
    edit(i: any, item: any): void;
    removedata(i: any, item: any): void;
    checkValid(list: any): boolean;
    selectAllAction(): void;
    chkHiddenKey(key: any): boolean;
    patchValue(selection: any, defaultValue: any, index: any): Promise<void>;
    sendData(): void;
    validate(key: any, index: any): void;
    checkSpcialChar(event: any): boolean;
    sort(head: any, type: any): void;
}
