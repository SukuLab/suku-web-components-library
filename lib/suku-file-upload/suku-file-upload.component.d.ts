import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuFileUploadComponent implements OnInit {
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
    fileInputId: string;
    action: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    toggleHover(event: boolean): void;
    startUpload(event: FileList): void;
    upload(e: any): void;
}
