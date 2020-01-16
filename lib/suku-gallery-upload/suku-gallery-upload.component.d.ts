import { OnInit, ElementRef, EventEmitter } from '@angular/core';
export declare class SukuGalleryUploadComponent implements OnInit {
    gallery: any[];
    size: string;
    galleryId: string;
    carouselHeight: any;
    carouselWidth: any;
    imgHeight: any;
    imgWidth: any;
    vidHeight: any;
    vidWidth: any;
    loader: boolean;
    controlNextIconCustomClass: any;
    controlPrevIconCustomClass: any;
    videoElement: ElementRef;
    deleteImage: EventEmitter<{}>;
    upload: EventEmitter<{}>;
    clear: EventEmitter<{}>;
    prevBtnVisible: boolean;
    nextBtnVisible: boolean;
    autoplay: boolean;
    constructor();
    ngOnInit(): void;
    active(i: any, position: any): void;
    preview(e: any): void;
    closeModal(): void;
    start(): void;
    onFileChange(e: any): void;
}
