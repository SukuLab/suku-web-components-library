import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuCreationCustomerFileuploadComponent implements OnInit {
    imagepath: any;
    showMessage: any;
    showPdfErrorMsg: any;
    onFileChange: EventEmitter<{}>;
    submitData: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
