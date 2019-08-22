import { OnInit, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
export declare class SukuFileUploadComponent implements OnInit {
    private snackBar;
    isHovering: any;
    enableContainer: boolean;
    titleId: string;
    titleSize: any;
    titleColor: string;
    titleWeight: string;
    customClass: string;
    dropZoneHeight: string;
    dropZoneWidth: string;
    imgHeight: string;
    imgWidth: string;
    imgSrc: string;
    icon: string;
    iconId: string;
    iconCustomClass: string;
    fileInputId: string;
    action: EventEmitter<{}>;
    constructor(snackBar: MatSnackBar);
    ngOnInit(): void;
    toggleHover(event: boolean): void;
    startUpload(event: FileList): void;
    upload(e: any): void;
    snackbar(msg: any): void;
}
