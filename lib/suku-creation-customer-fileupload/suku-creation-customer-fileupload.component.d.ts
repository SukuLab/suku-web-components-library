import { OnInit, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
export declare class SukuCreationCustomerFileuploadComponent implements OnInit {
    private snackBar;
    imagepath: any;
    showPdfErrorMsg: any;
    showMessage: any;
    docType: any[];
    uploadType: any;
    documentType: any;
    _classification: any;
    fileArrayList: any[];
    title: string;
    classification: any;
    OnFileChange: EventEmitter<{}>;
    submitData: EventEmitter<{}>;
    constructor(snackBar: MatSnackBar);
    ngOnInit(): void;
    imageType(val: any): void;
    fileupload(e: any): void;
    snackbar(msg: any): void;
}
