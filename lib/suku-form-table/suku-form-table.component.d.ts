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
    tableDisabled: boolean;
    enableEditIndex: any;
    typeKey: any;
    type: any;
    defaultCount: number;
    actionkey: string;
    items: any;
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
    errorMessageOne: string;
    save: EventEmitter<{}>;
    remove: EventEmitter<{}>;
    submitData: EventEmitter<{}>;
    formStatus: EventEmitter<{}>;
    sortable: string;
    _null: any;
    blockPaste(e: KeyboardEvent): void;
    blockCopy(e: KeyboardEvent): void;
    blockCut(e: KeyboardEvent): void;
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
    checkSpcialChar(event: any, type: any): boolean;
    sort(head: any, type: any, formate: any): void;
}
