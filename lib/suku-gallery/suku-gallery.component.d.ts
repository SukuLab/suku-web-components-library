import { ElementRef, OnInit } from '@angular/core';
export declare class SukuGalleryComponent implements OnInit {
    gallery: any[];
    size: string;
    galleryId: string;
    carouselHeight: any;
    carouselWidth: any;
    imgHeight: any;
    imgWidth: any;
    vidHeight: any;
    vidWidth: any;
    controlNextIconCustomClass: any;
    controlPrevIconCustomClass: any;
    prevBtnVisible: boolean;
    nextBtnVisible: boolean;
    autoplay: boolean;
    videoElement: ElementRef;
    constructor();
    ngOnInit(): void;
    active(i: any, position: any): void;
    preview(e: any): void;
    closeModal(): void;
    start(): void;
}
