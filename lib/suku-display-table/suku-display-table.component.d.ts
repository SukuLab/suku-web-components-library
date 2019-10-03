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
    showPagination: boolean;
    itemsPerPageCount: any;
    totalItem: any;
    translator: boolean;
    paginationPreviousLabel: string;
    paginationNextLabel: string;
    action: EventEmitter<{}>;
    pagination: EventEmitter<{}>;
    sortable: string;
    dateType: string[];
    enableDatePipe: boolean;
    constructor();
    ngOnInit(): void;
    paginationFun(p: any): void;
    sort(head: any, type: any, formate: any): void;
}
