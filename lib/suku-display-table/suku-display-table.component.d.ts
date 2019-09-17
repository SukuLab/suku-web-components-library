import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuDisplayTableComponent implements OnInit {
    header: any;
    headerContent: string;
    _tableData: any;
    p: any;
    tableDataKey: any;
    tableData: any;
    titleOneId: any;
    titleOneSize: any;
    titleOneColor: string;
    titleOneWeight: any;
    titleOneCustomClass: string;
    titleContent: string;
    headerSize: string;
    headerColor: any;
    headerWeight: any;
    dataSize: string;
    dataColor: any;
    dataWeight: any;
    hrefSelection: string;
    colorPallete: string[];
    status: string[];
    action: EventEmitter<{}>;
    showPagination: boolean;
    itemsPerPageCount: any;
    constructor();
    ngOnInit(): void;
}
