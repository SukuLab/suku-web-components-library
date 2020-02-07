/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-gallery-upload/suku-gallery-upload.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
export class SukuGalleryUploadComponent {
    constructor() {
        this.gallery = [];
        this.size = 'default';
        this.galleryId = 'demo';
        this.loader = false;
        this.deleteImage = new EventEmitter();
        this.upload = new EventEmitter();
        this.clear = new EventEmitter();
        this.prevBtnVisible = true;
        this.nextBtnVisible = true;
        this.autoplay = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} i
     * @param {?} position
     * @return {?}
     */
    active(i, position) {
        console.log(i);
        this.videoElement.nativeElement.pause();
        this.autoplay = false;
        this.gallery.forEach((/**
         * @param {?} element
         * @param {?} index
         * @return {?}
         */
        (element, index) => {
            if (position == 'prev') {
                if (i > 0) {
                    if (index == i - 1) {
                        if (i != 0) {
                            element.checked = true;
                        }
                    }
                    else {
                        if (i != 0) {
                            element.checked = false;
                        }
                    }
                    console.log('ele', i, position, element);
                }
            }
            if (position == 'next') {
                if (index == i + 1) {
                    if (i < this.gallery.length - 1) {
                        element.checked = true;
                    }
                }
                else {
                    if (i < this.gallery.length - 1) {
                        element.checked = false;
                    }
                }
                console.log('ele', i, position, element);
            }
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    preview(e) {
        console.log('link', e);
        /** @type {?} */
        const modal = document.getElementById('myGalleryModal');
        /** @type {?} */
        const modalImg = (/** @type {?} */ (document.getElementById('img01')));
        /** @type {?} */
        const modalVid = (/** @type {?} */ (document.getElementById('vid')));
        modal.style.display = 'block';
        if (e.type == 'image') {
            modalImg.src = e.link;
            modalImg.style.display = 'block';
            modalVid.style.display = 'none';
        }
        else {
            modalVid.style.display = 'block';
            modalImg.style.display = 'none';
            modalVid.src = e.link;
        }
    }
    /**
     * @return {?}
     */
    closeModal() {
        /** @type {?} */
        const modal = document.getElementById('myGalleryModal');
        modal.style.display = 'none';
    }
    /**
     * @return {?}
     */
    start() {
        /** @type {?} */
        var i = 1;
        /**
         * @return {?}
         */
        function Move() {
            i = (this.gallery.length % 2) + 1; // 4 is the Number of image in slider
            ((/** @type {?} */ (document.getElementById('i' + i)))).checked = true;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onFileChange(e) {
        console.log("img--", e.target.files);
        this.upload.emit(e.target.files);
        ((/** @type {?} */ (document.getElementById('uploadGallery')))).value = '';
    }
}
SukuGalleryUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-gallery-upload',
                template: "<!-- pop-view Modal -->\n<div class=\"col p-0\">\n  <div id=\"myGalleryModal\" class=\"modal\">\n    <span class=\"close\" (click)=\"closeModal()\">&times;</span>\n    <img class=\"modal-content\" id=\"img01\">\n    <video #video width=\"85%\" height=\"100%\" id=\"vid\" class=\"text-center m-auto\" controls>\n      Your browser does not support the video tag.\n    </video>\n  </div>\n  <div [id]=\"galleryId\" class=\"carousel slide p-0\" data-ride=\"carousel\" data-interval=\"false\" data-wrap=\"false\"\n    [style.height.rem]=\"carouselHeight\" [style.width.rem]=\"carouselWidth\">\n    <div *ngIf=\"!(gallery.length > 0) && !loader\"\n      class=\"col-sm-12 pt-5 pb-5 text-center carousel-inner default-container\"\n      onclick=\"document.getElementById('uploadGallery').click()\" [style.height.rem]=\"carouselHeight\"\n      [style.width.rem]=\"carouselWidth\">\n      <img src=\"../../assets/images/defaultImg.png\" width=\"80px\" alt=\"product-01\" height=\"80px\">\n    </div>\n    <div *ngIf=\"loader\" class=\"col-sm-12 pt-5 pb-5 text-center carousel-inner default-container\"\n      [style.height.rem]=\"carouselHeight\" [style.width.rem]=\"carouselWidth\">\n      <div class=\"col-sm-12 pt-5 d-flex justify-content-center\">\n        <mat-spinner diameter=\"45\"></mat-spinner>\n      </div>\n    </div>\n    <input type=\"file\" id=\"uploadGallery\" accept=\"image/x-png,image/jpeg,image/jpg\" name=\"uploadDocument\" multiple\n      (change)=\"onFileChange($event)\">\n    <!-- The slideshow -->\n    <div class=\"carousel-inner\" *ngIf=\"(gallery.length > 0) && !loader\"\n      [ngClass]=\"{'default-container': size == 'default'}\" [style.height.rem]=\"carouselHeight\"\n      [style.width.rem]=\"carouselWidth\">\n      <div class=\"carousel-item\" [ngClass]=\"{'active': item?.checked }\" *ngFor=\"let item of gallery;let i= index\">\n        <div class=\"text-center\" [ngClass]=\"{'slide_img' :item?.type == 'image', 'slide_vid' :item?.type == 'video' }\"\n          id=\"item{{i}}\">\n          <div class=\"col p-0\">\n            <i class=\" f16 fa fa-close\" (click)=\"deleteImage.emit(item)\"></i>\n          </div>\n          <img class=\"pic\" [style.height.rem]=\"imgHeight\" [style.width.rem]=\"imgWidth\"\n            [ngClass]=\"{'default-pic': size == 'default'}\" (click)=\"preview(item)\" *ngIf=\"item?.type == 'image'\"\n            src=\"{{item?.link}}\">\n          <video #video class=\"vid\" [style.height.rem]=\"vidHeight\" [style.width.rem]=\"vidWidth\"\n            [ngClass]=\"{'default-vid': size == 'default'}\" (click)=\"preview(item)\" *ngIf=\"item?.type == 'video'\"\n            width=\"95%\" height=\"100%\" src=\"{{item?.link}}\" controls>\n            Your browser does not support the video tag.\n          </video>\n        </div>\n      </div>\n      <!-- Left and right controls -->\n      <a class=\"carousel-control-prev\" href=\"#{{galleryId}}\" data-slide=\"prev\" *ngIf=\"(gallery?.length > 1)\">\n        <span class=\"carousel-control-prev-icon {{controlPrevIconCustomClass}}\">\n        </span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#{{galleryId}}\" data-slide=\"next\" *ngIf=\"(gallery?.length > 1)\">\n        <span class=\"carousel-control-next-icon {{controlNextIconCustomClass}}\">\n        </span>\n      </a>\n    </div>\n  </div>\n  <div class=\"col pt-2\">\n    <div class=\"row\">\n      <div class=\"col pr-0\">\n        <a onclick=\"document.getElementById('uploadGallery').click()\" id=\"saleTwoUpload\" (change)=\"onFileChange($event)\"\n          class=\"productInfoLabel pr-0\">Upload\n          Image\n        </a>\n      </div>\n      <div class=\"col text-right\">\n        <a (click)=\"clear.emit()\" id=\"clearAll\" class=\"productInfoLabel\">Clear All\n        </a>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: [".pic:hover{cursor:pointer}.vid{padding:4% 4% 2%}.slide_vid{margin:4% auto;position:relative;width:87%}#myImg{border-radius:5px;cursor:pointer;transition:.3s}#myImg:hover{opacity:.7}.modal{display:none;position:fixed;z-index:500;padding-top:100px;left:0;top:0;width:100%;overflow:auto;background-color:rgba(0,0,0,.9);height:100vh;justify-content:center;align-items:center}.modal-content{margin:auto;display:block;align-items:center;width:80%;max-width:65vh}#caption{display:block;width:80%;max-width:700px;text-align:center;color:#ccc;height:150px}#caption,.modal-content{-webkit-animation-name:zoom;animation-name:zoom;-webkit-animation-duration:.6s;animation-duration:.6s}@-webkit-keyframes zoom{from{transform:scale(0)}to{transform:scale(1)}}@keyframes zoom{from{transform:scale(0)}to{transform:scale(1)}}.close{position:absolute;top:15px;right:35px;color:#f1f1f1;font-size:40px;font-weight:700;transition:.3s}.close:focus,.close:hover{color:#a5a0a0;text-decoration:none;cursor:pointer}@media only screen and (max-width:700px){.modal-content{width:100%}.carousel{display:flex;justify-content:center}}.carousel-inner{position:relative;width:100%;overflow:hidden;height:14.5rem;background:#f8f8f8;box-shadow:0 2px 3px -2px #00000f4f;border:1px solid #f2f2f2}.carousel-control-next-icon,.carousel-control-prev-icon{background-image:none!important;width:auto!important;height:inherit!important}.carousel-control-prev-icon{margin-right:.5rem}.carousel-control-next-icon{margin-left:.1rem}.carousel-control-next-icon:after{text-align:center;content:'\\f054';font-family:FontAwesome;color:#a7bf2e;background-size:50% 50%;border-radius:50%;display:inline-flex;justify-content:center;align-items:center;height:30px;width:30px}.carousel-control-prev-icon:after{content:'\\f053';font-family:FontAwesome;color:#a7bf2e;background-size:50% 50%;border-radius:50%;display:inline-flex;justify-content:center;align-items:center;height:30px;width:30px}.default-container{height:190px;width:300px}.default-pic{height:162px!important}.default-vid{height:155px!important}.slide_img{margin:5% auto;position:relative;width:70%}.pic{background-size:contain;border-radius:5px;margin:auto;width:100%;height:12rem;z-index:99}.f16{font-size:1.3rem;position:absolute;top:-7px;right:-8px;z-index:100;background:#fff;padding:.5rem .65rem;border-radius:50%;cursor:pointer;box-shadow:0 0 4px 1px #cacacaad}input[type=file]{display:none}.productInfoLabel{height:22px;font-family:\"Encode Sans\",sans-serif;font-size:15px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px;color:rgba(117,117,117,.67);text-decoration:underline!important}"]
            }] }
];
/** @nocollapse */
SukuGalleryUploadComponent.ctorParameters = () => [];
SukuGalleryUploadComponent.propDecorators = {
    gallery: [{ type: Input }],
    size: [{ type: Input }],
    galleryId: [{ type: Input, args: ['gallery-id',] }],
    carouselHeight: [{ type: Input, args: ['carousel-height',] }],
    carouselWidth: [{ type: Input, args: ['carousel-width',] }],
    imgHeight: [{ type: Input, args: ['img-height',] }],
    imgWidth: [{ type: Input, args: ['img-width',] }],
    vidHeight: [{ type: Input, args: ['vid-height',] }],
    vidWidth: [{ type: Input, args: ['vid-width',] }],
    loader: [{ type: Input, args: ['loader',] }],
    controlNextIconCustomClass: [{ type: Input, args: ['control-next-icon-customclass',] }],
    controlPrevIconCustomClass: [{ type: Input, args: ['control-prev-icon-customclass',] }],
    videoElement: [{ type: ViewChild, args: ['video',] }],
    deleteImage: [{ type: Output }],
    upload: [{ type: Output }],
    clear: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuGalleryUploadComponent.prototype.gallery;
    /** @type {?} */
    SukuGalleryUploadComponent.prototype.size;
    /** @type {?} */
    SukuGalleryUploadComponent.prototype.galleryId;
    /** @type {?} */
    SukuGalleryUploadComponent.prototype.carouselHeight;
    /** @type {?} */
    SukuGalleryUploadComponent.prototype.carouselWidth;
    /** @type {?} */
    SukuGalleryUploadComponent.prototype.imgHeight;
    /** @type {?} */
    SukuGalleryUploadComponent.prototype.imgWidth;
    /** @type {?} */
    SukuGalleryUploadComponent.prototype.vidHeight;
    /** @type {?} */
    SukuGalleryUploadComponent.prototype.vidWidth;
    /** @type {?} */
    SukuGalleryUploadComponent.prototype.loader;
    /** @type {?} */
    SukuGalleryUploadComponent.prototype.controlNextIconCustomClass;
    /** @type {?} */
    SukuGalleryUploadComponent.prototype.controlPrevIconCustomClass;
    /** @type {?} */
    SukuGalleryUploadComponent.prototype.videoElement;
    /** @type {?} */
    SukuGalleryUploadComponent.prototype.deleteImage;
    /** @type {?} */
    SukuGalleryUploadComponent.prototype.upload;
    /** @type {?} */
    SukuGalleryUploadComponent.prototype.clear;
    /** @type {?} */
    SukuGalleryUploadComponent.prototype.prevBtnVisible;
    /** @type {?} */
    SukuGalleryUploadComponent.prototype.nextBtnVisible;
    /** @type {?} */
    SukuGalleryUploadComponent.prototype.autoplay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1nYWxsZXJ5LXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1nYWxsZXJ5LXVwbG9hZC9zdWt1LWdhbGxlcnktdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU90RyxNQUFNLE9BQU8sMEJBQTBCO0lBb0JyQztRQW5CUyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsU0FBSSxHQUFHLFNBQVMsQ0FBQztRQUNMLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFPdkIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUl0QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckMsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsYUFBUSxHQUFHLEtBQUssQ0FBQztJQUNELENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3RDLElBQUksUUFBUSxJQUFJLE1BQU0sRUFB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QUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQyxtQkFBa0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsRUFBQSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUMxRSxDQUFDOzs7WUFuR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLDh2SEFBbUQ7O2FBRXBEOzs7OztzQkFFRSxLQUFLO21CQUNMLEtBQUs7d0JBQ0wsS0FBSyxTQUFDLFlBQVk7NkJBQ2xCLEtBQUssU0FBQyxpQkFBaUI7NEJBQ3ZCLEtBQUssU0FBQyxnQkFBZ0I7d0JBQ3RCLEtBQUssU0FBQyxZQUFZO3VCQUNsQixLQUFLLFNBQUMsV0FBVzt3QkFDakIsS0FBSyxTQUFDLFlBQVk7dUJBQ2xCLEtBQUssU0FBQyxXQUFXO3FCQUNqQixLQUFLLFNBQUMsUUFBUTt5Q0FDZCxLQUFLLFNBQUMsK0JBQStCO3lDQUNyQyxLQUFLLFNBQUMsK0JBQStCOzJCQUNyQyxTQUFTLFNBQUMsT0FBTzswQkFDakIsTUFBTTtxQkFDTixNQUFNO29CQUNOLE1BQU07Ozs7SUFmUCw2Q0FBc0I7O0lBQ3RCLDBDQUEwQjs7SUFDMUIsK0NBQXdDOztJQUN4QyxvREFBeUM7O0lBQ3pDLG1EQUF1Qzs7SUFDdkMsK0NBQStCOztJQUMvQiw4Q0FBNkI7O0lBQzdCLCtDQUErQjs7SUFDL0IsOENBQTZCOztJQUM3Qiw0Q0FBZ0M7O0lBQ2hDLGdFQUFtRTs7SUFDbkUsZ0VBQW1FOztJQUNuRSxrREFBNkM7O0lBQzdDLGlEQUEyQzs7SUFDM0MsNENBQXNDOztJQUN0QywyQ0FBcUM7O0lBQ3JDLG9EQUFzQjs7SUFDdEIsb0RBQXNCOztJQUN0Qiw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1nYWxsZXJ5LXVwbG9hZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWdhbGxlcnktdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1nYWxsZXJ5LXVwbG9hZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VHYWxsZXJ5VXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZ2FsbGVyeSA9IFtdO1xuICBASW5wdXQoKSBzaXplID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoJ2dhbGxlcnktaWQnKSBnYWxsZXJ5SWQgPSAnZGVtbyc7XG4gIEBJbnB1dCgnY2Fyb3VzZWwtaGVpZ2h0JykgY2Fyb3VzZWxIZWlnaHQ7XG4gIEBJbnB1dCgnY2Fyb3VzZWwtd2lkdGgnKSBjYXJvdXNlbFdpZHRoO1xuICBASW5wdXQoJ2ltZy1oZWlnaHQnKSBpbWdIZWlnaHQ7XG4gIEBJbnB1dCgnaW1nLXdpZHRoJykgaW1nV2lkdGg7XG4gIEBJbnB1dCgndmlkLWhlaWdodCcpIHZpZEhlaWdodDtcbiAgQElucHV0KCd2aWQtd2lkdGgnKSB2aWRXaWR0aDtcbiAgQElucHV0KCdsb2FkZXInKSBsb2FkZXIgPSBmYWxzZTtcbiAgQElucHV0KCdjb250cm9sLW5leHQtaWNvbi1jdXN0b21jbGFzcycpIGNvbnRyb2xOZXh0SWNvbkN1c3RvbUNsYXNzO1xuICBASW5wdXQoJ2NvbnRyb2wtcHJldi1pY29uLWN1c3RvbWNsYXNzJykgY29udHJvbFByZXZJY29uQ3VzdG9tQ2xhc3M7XG4gIEBWaWV3Q2hpbGQoJ3ZpZGVvJykgdmlkZW9FbGVtZW50OiBFbGVtZW50UmVmO1xuICBAT3V0cHV0KCkgZGVsZXRlSW1hZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSB1cGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjbGVhciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHJldkJ0blZpc2libGUgPSB0cnVlO1xuICBuZXh0QnRuVmlzaWJsZSA9IHRydWU7XG4gIGF1dG9wbGF5ID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBhY3RpdmUoaSwgcG9zaXRpb24pIHtcbiAgICBjb25zb2xlLmxvZyhpKTtcbiAgICB0aGlzLnZpZGVvRWxlbWVudC5uYXRpdmVFbGVtZW50LnBhdXNlKCk7XG4gICAgdGhpcy5hdXRvcGxheSA9IGZhbHNlO1xuICAgIHRoaXMuZ2FsbGVyeS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHBvc2l0aW9uID09ICdwcmV2Jykge1xuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICBpZiAoaW5kZXggPT0gaSAtIDEpIHtcbiAgICAgICAgICAgIGlmIChpICE9IDApIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGkgIT0gMCkge1xuICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coJ2VsZScsIGksIHBvc2l0aW9uLCBlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocG9zaXRpb24gPT0gJ25leHQnKSB7XG4gICAgICAgIGlmIChpbmRleCA9PSBpICsgMSkge1xuICAgICAgICAgIGlmIChpIDwgdGhpcy5nYWxsZXJ5Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpIDwgdGhpcy5nYWxsZXJ5Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnZWxlJywgaSwgcG9zaXRpb24sIGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJldmlldyhlKSB7XG4gICAgY29uc29sZS5sb2coJ2xpbmsnLCBlKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUdhbGxlcnlNb2RhbCcpO1xuICAgIGNvbnN0IG1vZGFsSW1nID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZzAxJyk7XG4gICAgY29uc3QgbW9kYWxWaWQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkJyk7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgaWYgKGUudHlwZSA9PSAnaW1hZ2UnKSB7XG4gICAgICBtb2RhbEltZy5zcmMgPSBlLmxpbms7XG4gICAgICBtb2RhbEltZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIG1vZGFsVmlkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vZGFsVmlkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgbW9kYWxJbWcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIG1vZGFsVmlkLnNyYyA9IGUubGluaztcbiAgICB9XG4gIH1cblxuICBjbG9zZU1vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215R2FsbGVyeU1vZGFsJyk7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHZhciBpID0gMTtcbiAgICBmdW5jdGlvbiBNb3ZlKCkge1xuICAgICAgaSA9ICh0aGlzLmdhbGxlcnkubGVuZ3RoICUgMikgKyAxOyAvLyA0IGlzIHRoZSBOdW1iZXIgb2YgaW1hZ2UgaW4gc2xpZGVyXG4gICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2knICsgaSkpLmNoZWNrZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG9uRmlsZUNoYW5nZShlKSB7XG4gICAgY29uc29sZS5sb2coXCJpbWctLVwiLCBlLnRhcmdldC5maWxlcyk7XG4gICAgdGhpcy51cGxvYWQuZW1pdChlLnRhcmdldC5maWxlcyk7XG4gICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGxvYWRHYWxsZXJ5JykpLnZhbHVlID0gJyc7XG4gIH1cblxufSJdfQ==