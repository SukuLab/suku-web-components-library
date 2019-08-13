/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
var SukuGalleryUploadComponent = /** @class */ (function () {
    function SukuGalleryUploadComponent() {
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
    SukuGalleryUploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} i
     * @param {?} position
     * @return {?}
     */
    SukuGalleryUploadComponent.prototype.active = /**
     * @param {?} i
     * @param {?} position
     * @return {?}
     */
    function (i, position) {
        var _this = this;
        console.log(i);
        this.videoElement.nativeElement.pause();
        this.autoplay = false;
        this.gallery.forEach((/**
         * @param {?} element
         * @param {?} index
         * @return {?}
         */
        function (element, index) {
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
                    if (i < _this.gallery.length - 1) {
                        element.checked = true;
                    }
                }
                else {
                    if (i < _this.gallery.length - 1) {
                        element.checked = false;
                    }
                }
                console.log('ele', i, position, element);
            }
        }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SukuGalleryUploadComponent.prototype.preview = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        console.log('link', e);
        /** @type {?} */
        var modal = document.getElementById('myGalleryModal');
        /** @type {?} */
        var modalImg = (/** @type {?} */ (document.getElementById('img01')));
        /** @type {?} */
        var modalVid = (/** @type {?} */ (document.getElementById('vid')));
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
    };
    /**
     * @return {?}
     */
    SukuGalleryUploadComponent.prototype.closeModal = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var modal = document.getElementById('myGalleryModal');
        modal.style.display = 'none';
    };
    /**
     * @return {?}
     */
    SukuGalleryUploadComponent.prototype.start = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var i = 1;
        /**
         * @return {?}
         */
        function Move() {
            i = (this.gallery.length % 2) + 1; // 4 is the Number of image in slider
            ((/** @type {?} */ (document.getElementById('i' + i)))).checked = true;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SukuGalleryUploadComponent.prototype.onFileChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        console.log("img--", e.target.files);
        this.upload.emit(e.target.files);
        ((/** @type {?} */ (document.getElementById('uploadGallery')))).value = '';
    };
    SukuGalleryUploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-gallery-upload',
                    template: "<!-- pop-view Modal -->\n<div id=\"myGalleryModal\" class=\"modal\">\n  <span class=\"close\" (click)=\"closeModal()\">&times;</span>\n  <img class=\"modal-content\" id=\"img01\">\n  <video #video width=\"85%\" height=\"100%\" id=\"vid\" class=\"text-center m-auto\" controls>\n    Your browser does not support the video tag.\n  </video>\n</div>\n<div [id]=\"galleryId\" class=\"carousel slide p-1\" data-ride=\"carousel\" data-interval=\"false\" data-wrap=\"false\"\n  [style.height.rem]=\"carouselHeight\" [style.width.rem]=\"carouselWidth\">\n  <div *ngIf=\"!(gallery.length > 0) && !loader\" class=\"col-sm-12 pt-5 pb-5 text-center carousel-inner default-container\"\n    onclick=\"document.getElementById('uploadGallery').click()\" [style.height.rem]=\"carouselHeight\"\n    [style.width.rem]=\"carouselWidth\">\n    <img src=\"../../assets/images/defaultImg.png\" width=\"80px\" alt=\"product-01\" height=\"80px\">\n  </div>\n  <div *ngIf=\"loader\" class=\"col-sm-12 pt-5 pb-5 text-center carousel-inner default-container\"\n    [style.height.rem]=\"carouselHeight\" [style.width.rem]=\"carouselWidth\">\n    <div class=\"col-sm-12 pt-5 d-flex justify-content-center\">\n      <mat-spinner diameter=\"45\"></mat-spinner>\n    </div>\n  </div>\n  <input type=\"file\" id=\"uploadGallery\" accept=\"image/x-png,image/jpeg,image/jpg\" name=\"uploadDocument\" multiple\n    (change)=\"onFileChange($event)\">\n  <!-- The slideshow -->\n  <div class=\"carousel-inner\" *ngIf=\"(gallery.length > 0) && !loader\"\n    [ngClass]=\"{'default-container': size == 'default'}\" [style.height.rem]=\"carouselHeight\"\n    [style.width.rem]=\"carouselWidth\">\n    <div class=\"carousel-item\" [ngClass]=\"{'active': item?.checked }\" *ngFor=\"let item of gallery;let i= index\">\n      <div class=\"text-center\" [ngClass]=\"{'slide_img' :item?.type == 'image', 'slide_vid' :item?.type == 'video' }\"\n        id=\"item{{i}}\">\n        <div class=\"col p-0\">\n          <i class=\" f16 fa fa-close\" (click)=\"deleteImage.emit(item)\"></i>\n        </div>\n        <img class=\"pic\" [style.height.rem]=\"imgHeight\" [style.width.rem]=\"imgWidth\"\n          [ngClass]=\"{'default-pic': size == 'default'}\" (click)=\"preview(item)\" *ngIf=\"item?.type == 'image'\"\n          src=\"{{item?.link}}\">\n        <video #video class=\"vid\" [style.height.rem]=\"vidHeight\" [style.width.rem]=\"vidWidth\"\n          [ngClass]=\"{'default-vid': size == 'default'}\" (click)=\"preview(item)\" *ngIf=\"item?.type == 'video'\"\n          width=\"95%\" height=\"100%\" src=\"{{item?.link}}\" controls>\n          Your browser does not support the video tag.\n        </video>\n      </div>\n    </div>\n    <!-- Left and right controls -->\n    <a class=\"carousel-control-prev\" href=\"#{{galleryId}}\" data-slide=\"prev\" *ngIf=\"(gallery?.length > 1)\">\n      <span class=\"carousel-control-prev-icon {{controlPrevIconCustomClass}}\">\n      </span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#{{galleryId}}\" data-slide=\"next\" *ngIf=\"(gallery?.length > 1)\">\n      <span class=\"carousel-control-next-icon {{controlNextIconCustomClass}}\">\n      </span>\n    </a>\n  </div>\n  <div class=\"col pt-2\">\n    <div class=\"row\">\n      <div class=\"col pr-0\">\n        <a onclick=\"document.getElementById('uploadGallery').click()\" id=\"saleTwoUpload\" (change)=\"onFileChange($event)\"\n          class=\"productInfoLabel pr-5\">Upload\n          Image\n        </a>\n      </div>\n      <div class=\"col text-right\">\n        <a (click)=\"clear.emit()\" id=\"clearAll\" class=\"productInfoLabel\">Clear All\n        </a>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: [".pic:hover{cursor:pointer}.vid{padding:4% 4% 2%}.slide_vid{margin:4% auto;position:relative;width:87%}#myImg{border-radius:5px;cursor:pointer;transition:.3s}#myImg:hover{opacity:.7}.modal{display:none;position:fixed;z-index:500;padding-top:100px;left:0;top:0;width:100%;overflow:auto;background-color:rgba(0,0,0,.9);height:100vh;justify-content:center;align-items:center}.modal-content{margin:auto;display:block;align-items:center;width:80%;max-width:65vh}#caption{display:block;width:80%;max-width:700px;text-align:center;color:#ccc;height:150px}#caption,.modal-content{-webkit-animation-name:zoom;animation-name:zoom;-webkit-animation-duration:.6s;animation-duration:.6s}@-webkit-keyframes zoom{from{transform:scale(0)}to{transform:scale(1)}}@keyframes zoom{from{transform:scale(0)}to{transform:scale(1)}}.close{position:absolute;top:15px;right:35px;color:#f1f1f1;font-size:40px;font-weight:700;transition:.3s}.close:focus,.close:hover{color:#a5a0a0;text-decoration:none;cursor:pointer}@media only screen and (max-width:700px){.modal-content{width:100%}.carousel{display:flex;justify-content:center}}.carousel-inner{position:relative;width:100%;overflow:hidden;height:14.5rem;background:#f8f8f8;box-shadow:0 2px 3px -2px #00000f4f;border:1px solid #f2f2f2}.carousel-control-next-icon,.carousel-control-prev-icon{background-image:none!important;width:auto!important;height:inherit!important}.carousel-control-prev-icon{margin-right:.5rem}.carousel-control-next-icon{margin-left:.1rem}.carousel-control-next-icon:after{text-align:center;content:'\\f054';font-family:FontAwesome;color:#a7bf2e;background-size:50% 50%;border-radius:50%;display:inline-flex;justify-content:center;align-items:center;height:30px;width:30px}.carousel-control-prev-icon:after{content:'\\f053';font-family:FontAwesome;color:#a7bf2e;background-size:50% 50%;border-radius:50%;display:inline-flex;justify-content:center;align-items:center;height:30px;width:30px}.default-container{height:190px;width:300px}.default-pic{height:162px!important}.default-vid{height:155px!important}.slide_img{margin:5% auto;position:relative;width:70%}.pic{background-size:contain;border-radius:5px;margin:auto;width:100%;height:12rem;z-index:99}.f16{font-size:1.3rem;position:absolute;top:-7px;right:-8px;z-index:100;background:#fff;padding:.5rem .65rem;border-radius:50%;cursor:pointer;box-shadow:0 0 4px 1px #cacacaad}input[type=file]{display:none}.productInfoLabel{height:22px;font-family:\"Encode Sans\",sans-serif;font-size:15px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px;color:rgba(117,117,117,.67);text-decoration:underline!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuGalleryUploadComponent.ctorParameters = function () { return []; };
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
    return SukuGalleryUploadComponent;
}());
export { SukuGalleryUploadComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1nYWxsZXJ5LXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1nYWxsZXJ5LXVwbG9hZC9zdWt1LWdhbGxlcnktdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRHO0lBeUJFO1FBbkJTLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixTQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ0wsY0FBUyxHQUFHLE1BQU0sQ0FBQztRQU92QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBSXRCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyQyxtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ0QsQ0FBQzs7OztJQUVqQiw2Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7Ozs7SUFFRCwyQ0FBTTs7Ozs7SUFBTixVQUFPLENBQUMsRUFBRSxRQUFRO1FBQWxCLGlCQWlDQztRQWhDQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7OztRQUFDLFVBQUMsT0FBTyxFQUFFLEtBQUs7WUFDbEMsSUFBSSxRQUFRLElBQUksTUFBTSxF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Q3RCLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWdhbGxlcnktdXBsb2FkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZ2FsbGVyeS11cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWdhbGxlcnktdXBsb2FkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUdhbGxlcnlVcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBnYWxsZXJ5ID0gW107XG4gIEBJbnB1dCgpIHNpemUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgnZ2FsbGVyeS1pZCcpIGdhbGxlcnlJZCA9ICdkZW1vJztcbiAgQElucHV0KCdjYXJvdXNlbC1oZWlnaHQnKSBjYXJvdXNlbEhlaWdodDtcbiAgQElucHV0KCdjYXJvdXNlbC13aWR0aCcpIGNhcm91c2VsV2lkdGg7XG4gIEBJbnB1dCgnaW1nLWhlaWdodCcpIGltZ0hlaWdodDtcbiAgQElucHV0KCdpbWctd2lkdGgnKSBpbWdXaWR0aDtcbiAgQElucHV0KCd2aWQtaGVpZ2h0JykgdmlkSGVpZ2h0O1xuICBASW5wdXQoJ3ZpZC13aWR0aCcpIHZpZFdpZHRoO1xuICBASW5wdXQoJ2xvYWRlcicpIGxvYWRlciA9IGZhbHNlO1xuICBASW5wdXQoJ2NvbnRyb2wtbmV4dC1pY29uLWN1c3RvbWNsYXNzJykgY29udHJvbE5leHRJY29uQ3VzdG9tQ2xhc3M7XG4gIEBJbnB1dCgnY29udHJvbC1wcmV2LWljb24tY3VzdG9tY2xhc3MnKSBjb250cm9sUHJldkljb25DdXN0b21DbGFzcztcbiAgQFZpZXdDaGlsZCgndmlkZW8nKSB2aWRlb0VsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBPdXRwdXQoKSBkZWxldGVJbWFnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHVwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwcmV2QnRuVmlzaWJsZSA9IHRydWU7XG4gIG5leHRCdG5WaXNpYmxlID0gdHJ1ZTtcbiAgYXV0b3BsYXkgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGFjdGl2ZShpLCBwb3NpdGlvbikge1xuICAgIGNvbnNvbGUubG9nKGkpO1xuICAgIHRoaXMudmlkZW9FbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGF1c2UoKTtcbiAgICB0aGlzLmF1dG9wbGF5ID0gZmFsc2U7XG4gICAgdGhpcy5nYWxsZXJ5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAocG9zaXRpb24gPT0gJ3ByZXYnKSB7XG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgIGlmIChpbmRleCA9PSBpIC0gMSkge1xuICAgICAgICAgICAgaWYgKGkgIT0gMCkge1xuICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaSAhPSAwKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZygnZWxlJywgaSwgcG9zaXRpb24sIGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwb3NpdGlvbiA9PSAnbmV4dCcpIHtcbiAgICAgICAgaWYgKGluZGV4ID09IGkgKyAxKSB7XG4gICAgICAgICAgaWYgKGkgPCB0aGlzLmdhbGxlcnkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGkgPCB0aGlzLmdhbGxlcnkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdlbGUnLCBpLCBwb3NpdGlvbiwgZWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcmV2aWV3KGUpIHtcbiAgICBjb25zb2xlLmxvZygnbGluaycsIGUpO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215R2FsbGVyeU1vZGFsJyk7XG4gICAgY29uc3QgbW9kYWxJbWcgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nMDEnKTtcbiAgICBjb25zdCBtb2RhbFZpZCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWQnKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBpZiAoZS50eXBlID09ICdpbWFnZScpIHtcbiAgICAgIG1vZGFsSW1nLnNyYyA9IGUubGluaztcbiAgICAgIG1vZGFsSW1nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgbW9kYWxWaWQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2Uge1xuICAgICAgbW9kYWxWaWQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBtb2RhbEltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgbW9kYWxWaWQuc3JjID0gZS5saW5rO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlHYWxsZXJ5TW9kYWwnKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdmFyIGkgPSAxO1xuICAgIGZ1bmN0aW9uIE1vdmUoKSB7XG4gICAgICBpID0gKHRoaXMuZ2FsbGVyeS5sZW5ndGggJSAyKSArIDE7IC8vIDQgaXMgdGhlIE51bWJlciBvZiBpbWFnZSBpbiBzbGlkZXJcbiAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaScgKyBpKSkuY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgb25GaWxlQ2hhbmdlKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImltZy0tXCIsIGUudGFyZ2V0LmZpbGVzKTtcbiAgICB0aGlzLnVwbG9hZC5lbWl0KGUudGFyZ2V0LmZpbGVzKTtcbiAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwbG9hZEdhbGxlcnknKSkudmFsdWUgPSAnJztcbiAgfVxuXG59Il19