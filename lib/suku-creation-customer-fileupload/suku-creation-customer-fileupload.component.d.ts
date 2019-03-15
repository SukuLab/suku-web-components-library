import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuCreationCustomerFileuploadComponent implements OnInit {
    onFileChange: EventEmitter<{}>;
    submitData: EventEmitter<{}>;
    imagepath: any;
    showPdfErrorMsg: any;
    showMessage: any;
    constructor();
    ngOnInit(): void;
    fileupload(e: any): void;
}
