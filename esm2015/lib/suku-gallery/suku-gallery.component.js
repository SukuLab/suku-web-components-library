/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-gallery/suku-gallery.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input } from '@angular/core';
export class SukuGalleryComponent {
    constructor() {
        this.gallery = [];
        this.size = 'default';
        this.galleryId = 'demo';
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
}
SukuGalleryComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-gallery',
                template: "<!-- <div class=\"imgcontainer\">\n  <div *ngFor=\"let item of gallery;let i= index\">\n    <input type=\"radio\" id=\"i{{1}}\" name=\"images\" [checked]='item?.checked' />\n    <div class=\"slide_img text-center\" [ngClass]=\"{'checked': item?.checked }\" id=\"item{{i}}\">\n      <img class=\"pic\" (click)=\"preview(item)\" *ngIf=\"item?.type == 'image'\" src=\"{{item?.link}}\">\n      <video #video class=\"vid\" (click)=\"preview(item)\" *ngIf=\"item?.type == 'video'\" width=\"85%\" height=\"100%\"\n        src=\"{{item?.link}}\" controls>\n        Your browser does not support the video tag.\n      </video>\n      <label class=\"prev\" *ngIf=\"prevBtnVisible\" (click)=\"active(i,'prev')\" for=\"i{{i}}\"><span class=\"icon-left\">\n          <i class=\"fa fa-chevron-left icon-control-l\"></i>\n        </span></label>\n      <label class=\"next\" *ngIf=\"nextBtnVisible\" (click)=\"active(i,'next')\" for=\"i{{i}}\"><span class=\"icon-right\">\n          <i class=\"fa fa-chevron-right icon-control-r\"></i>\n        </span></label>\n    </div>\n  </div>\n</div> -->\n<!-- pop-view Modal -->\n<div id=\"myGalleryModal\" class=\"modal\">\n  <span class=\"close\" (click)=\"closeModal()\">&times;</span>\n  <img class=\"modal-content\" id=\"img01\">\n  <video #video width=\"85%\" height=\"100%\" id=\"vid\" class=\"text-center m-auto\" controls>\n    Your browser does not support the video tag.\n  </video>\n</div>\n\n\n<div [id]=\"galleryId\" class=\"carousel slide p-1\" data-ride=\"carousel\" data-interval=\"false\" data-wrap=\"false\">\n  <!-- The slideshow -->\n  <div class=\"carousel-inner\" [ngClass]=\"{'default-container': size == 'default'}\" [style.height.rem]=\"carouselHeight\"\n    [style.width.rem]=\"carouselWidth\">\n    <div class=\"carousel-item\" [ngClass]=\"{'active': item?.checked }\" *ngFor=\"let item of gallery;let i= index\">\n      <div class=\"text-center\" [ngClass]=\"{'slide_img' :item?.type == 'image', 'slide_vid' :item?.type == 'video' }\"\n        id=\"item{{i}}\">\n        <img class=\"pic\" [style.height.rem]=\"imgHeight\" [style.width.rem]=\"imgWidth\"\n          [ngClass]=\"{'default-pic': size == 'default'}\" (click)=\"preview(item)\" *ngIf=\"item?.type == 'image'\"\n          src=\"{{item?.link}}\">\n        <video #video class=\"vid\" [style.height.rem]=\"vidHeight\" [style.width.rem]=\"vidWidth\"\n          [ngClass]=\"{'default-vid': size == 'default'}\" (click)=\"preview(item)\" *ngIf=\"item?.type == 'video'\"\n          width=\"95%\" height=\"100%\" src=\"{{item?.link}}\" controls>\n          Your browser does not support the video tag.\n        </video>\n      </div>\n    </div>\n    <!-- Left and right controls -->\n    <a class=\"carousel-control-prev\" href=\"#{{galleryId}}\" data-slide=\"prev\" *ngIf=\"(gallery?.length > 1)\">\n      <span class=\"carousel-control-prev-icon {{controlPrevIconCustomClass}}\">\n      </span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#{{galleryId}}\" data-slide=\"next\" *ngIf=\"(gallery?.length > 1)\">\n      <span class=\"carousel-control-next-icon {{controlNextIconCustomClass}}\">\n      </span>\n    </a>\n  </div>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.pic:hover{cursor:pointer}.vid{padding:4% 4% 2%}.slide_vid{margin:4% auto;position:relative;width:87%}#myImg{border-radius:5px;cursor:pointer;transition:.3s}#myImg:hover{opacity:.7}.modal{display:none;position:fixed;z-index:500;padding-top:100px;left:0;top:0;width:100%;overflow:auto;background-color:rgba(0,0,0,.9);height:100vh;justify-content:center;align-items:center}.modal-content{margin:auto;display:block;align-items:center;width:80%;max-width:65vh}#caption{display:block;width:80%;max-width:700px;text-align:center;color:#ccc;height:150px}#caption,.modal-content{-webkit-animation-name:zoom;animation-name:zoom;-webkit-animation-duration:.6s;animation-duration:.6s}@-webkit-keyframes zoom{from{transform:scale(0)}to{transform:scale(1)}}@keyframes zoom{from{transform:scale(0)}to{transform:scale(1)}}.close{position:absolute;top:15px;right:35px;color:#f1f1f1;font-size:40px;font-weight:700;transition:.3s}.close:focus,.close:hover{color:#a5a0a0;text-decoration:none;cursor:pointer}@media only screen and (max-width:700px){.modal-content{width:100%}.carousel{display:flex;justify-content:center}}.carousel-inner{position:relative;width:100%;overflow:hidden;height:14.5rem;background:#fff;box-shadow:0 2px 3px -2px #00000f4f;border:1px solid #f2f2f2;border-radius:8px 25px}.carousel-control-next-icon,.carousel-control-prev-icon{background-image:none!important;width:auto!important;height:inherit!important}.carousel-control-prev-icon{margin-right:.5rem}.carousel-control-next-icon{margin-left:.1rem}.carousel-control-next-icon:after{text-align:center;content:'\\f054';font-family:FontAwesome;color:var(--suku-primary-color);background-size:50% 50%;border-radius:50%;display:inline-flex;justify-content:center;align-items:center;height:30px;width:30px}.carousel-control-prev-icon:after{content:'\\f053';font-family:FontAwesome;color:var(--suku-primary-color);background-size:50% 50%;border-radius:50%;display:inline-flex;justify-content:center;align-items:center;height:30px;width:30px}.default-container{height:190px;width:300px}.default-pic{height:162px!important}.default-vid{height:155px!important}.slide_img{margin:5% auto;position:relative;width:70%}.pic{background-size:contain;border-radius:5px;margin:auto;width:100%;height:12rem;z-index:99}"]
            }] }
];
/** @nocollapse */
SukuGalleryComponent.ctorParameters = () => [];
SukuGalleryComponent.propDecorators = {
    gallery: [{ type: Input }],
    size: [{ type: Input }],
    galleryId: [{ type: Input, args: ['gallery-id',] }],
    carouselHeight: [{ type: Input, args: ['carousel-height',] }],
    carouselWidth: [{ type: Input, args: ['carousel-width',] }],
    imgHeight: [{ type: Input, args: ['img-height',] }],
    imgWidth: [{ type: Input, args: ['img-width',] }],
    vidHeight: [{ type: Input, args: ['vid-height',] }],
    vidWidth: [{ type: Input, args: ['vid-width',] }],
    controlNextIconCustomClass: [{ type: Input, args: ['control-next-icon-customclass',] }],
    controlPrevIconCustomClass: [{ type: Input, args: ['control-prev-icon-customclass',] }],
    videoElement: [{ type: ViewChild, args: ['video',] }]
};
if (false) {
    /** @type {?} */
    SukuGalleryComponent.prototype.gallery;
    /** @type {?} */
    SukuGalleryComponent.prototype.size;
    /** @type {?} */
    SukuGalleryComponent.prototype.galleryId;
    /** @type {?} */
    SukuGalleryComponent.prototype.carouselHeight;
    /** @type {?} */
    SukuGalleryComponent.prototype.carouselWidth;
    /** @type {?} */
    SukuGalleryComponent.prototype.imgHeight;
    /** @type {?} */
    SukuGalleryComponent.prototype.imgWidth;
    /** @type {?} */
    SukuGalleryComponent.prototype.vidHeight;
    /** @type {?} */
    SukuGalleryComponent.prototype.vidWidth;
    /** @type {?} */
    SukuGalleryComponent.prototype.controlNextIconCustomClass;
    /** @type {?} */
    SukuGalleryComponent.prototype.controlPrevIconCustomClass;
    /** @type {?} */
    SukuGalleryComponent.prototype.videoElement;
    /** @type {?} */
    SukuGalleryComponent.prototype.prevBtnVisible;
    /** @type {?} */
    SukuGalleryComponent.prototype.nextBtnVisible;
    /** @type {?} */
    SukuGalleryComponent.prototype.autoplay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1nYWxsZXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWdhbGxlcnkvc3VrdS1nYWxsZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPaEYsTUFBTSxPQUFPLG9CQUFvQjtJQWdCL0I7UUFmUyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsU0FBSSxHQUFHLFNBQVMsQ0FBQztRQUNMLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFVeEMsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsYUFBUSxHQUFHLEtBQUssQ0FBQztJQUNELENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3RDLElBQUksUUFBUSxJQUFJLE1BQU0sRUFBRTtnQkFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNULElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDVixPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzt5QkFDeEI7cUJBQ0Y7eUJBQU07d0JBQ0wsSUFBSSxDQUFD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O3lDQUNqQixLQUFLLFNBQUMsK0JBQStCO3lDQUNyQyxLQUFLLFNBQUMsK0JBQStCOzJCQUNyQyxTQUFTLFNBQUMsT0FBTzs7OztJQVhsQix1Q0FBc0I7O0lBQ3RCLG9DQUEwQjs7SUFDMUIseUNBQXdDOztJQUN4Qyw4Q0FBeUM7O0lBQ3pDLDZDQUF1Qzs7SUFDdkMseUNBQStCOztJQUMvQix3Q0FBNkI7O0lBQzdCLHlDQUErQjs7SUFDL0Isd0NBQTZCOztJQUM3QiwwREFBbUU7O0lBQ25FLDBEQUFtRTs7SUFDbkUsNENBQTZDOztJQUM3Qyw4Q0FBc0I7O0lBQ3RCLDhDQUFzQjs7SUFDdEIsd0NBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1nYWxsZXJ5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZ2FsbGVyeS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VHYWxsZXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZ2FsbGVyeSA9IFtdO1xuICBASW5wdXQoKSBzaXplID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoJ2dhbGxlcnktaWQnKSBnYWxsZXJ5SWQgPSAnZGVtbyc7XG4gIEBJbnB1dCgnY2Fyb3VzZWwtaGVpZ2h0JykgY2Fyb3VzZWxIZWlnaHQ7XG4gIEBJbnB1dCgnY2Fyb3VzZWwtd2lkdGgnKSBjYXJvdXNlbFdpZHRoO1xuICBASW5wdXQoJ2ltZy1oZWlnaHQnKSBpbWdIZWlnaHQ7XG4gIEBJbnB1dCgnaW1nLXdpZHRoJykgaW1nV2lkdGg7XG4gIEBJbnB1dCgndmlkLWhlaWdodCcpIHZpZEhlaWdodDtcbiAgQElucHV0KCd2aWQtd2lkdGgnKSB2aWRXaWR0aDtcbiAgQElucHV0KCdjb250cm9sLW5leHQtaWNvbi1jdXN0b21jbGFzcycpIGNvbnRyb2xOZXh0SWNvbkN1c3RvbUNsYXNzO1xuICBASW5wdXQoJ2NvbnRyb2wtcHJldi1pY29uLWN1c3RvbWNsYXNzJykgY29udHJvbFByZXZJY29uQ3VzdG9tQ2xhc3M7XG4gIEBWaWV3Q2hpbGQoJ3ZpZGVvJykgdmlkZW9FbGVtZW50OiBFbGVtZW50UmVmO1xuICBwcmV2QnRuVmlzaWJsZSA9IHRydWU7XG4gIG5leHRCdG5WaXNpYmxlID0gdHJ1ZTtcbiAgYXV0b3BsYXkgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGFjdGl2ZShpLCBwb3NpdGlvbikge1xuICAgIGNvbnNvbGUubG9nKGkpO1xuICAgIHRoaXMudmlkZW9FbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGF1c2UoKTtcbiAgICB0aGlzLmF1dG9wbGF5ID0gZmFsc2U7XG4gICAgdGhpcy5nYWxsZXJ5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAocG9zaXRpb24gPT0gJ3ByZXYnKSB7XG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgIGlmIChpbmRleCA9PSBpIC0gMSkge1xuICAgICAgICAgICAgaWYgKGkgIT0gMCkge1xuICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaSAhPSAwKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZygnZWxlJywgaSwgcG9zaXRpb24sIGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwb3NpdGlvbiA9PSAnbmV4dCcpIHtcbiAgICAgICAgaWYgKGluZGV4ID09IGkgKyAxKSB7XG4gICAgICAgICAgaWYgKGkgPCB0aGlzLmdhbGxlcnkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGkgPCB0aGlzLmdhbGxlcnkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdlbGUnLCBpLCBwb3NpdGlvbiwgZWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcmV2aWV3KGUpIHtcbiAgICBjb25zb2xlLmxvZygnbGluaycsIGUpO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215R2FsbGVyeU1vZGFsJyk7XG4gICAgY29uc3QgbW9kYWxJbWcgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nMDEnKTtcbiAgICBjb25zdCBtb2RhbFZpZCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWQnKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBpZiAoZS50eXBlID09ICdpbWFnZScpIHtcbiAgICAgIG1vZGFsSW1nLnNyYyA9IGUubGluaztcbiAgICAgIG1vZGFsSW1nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgbW9kYWxWaWQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2Uge1xuICAgICAgbW9kYWxWaWQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBtb2RhbEltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgbW9kYWxWaWQuc3JjID0gZS5saW5rO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlHYWxsZXJ5TW9kYWwnKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdmFyIGkgPSAxO1xuICAgIGZ1bmN0aW9uIE1vdmUoKSB7XG4gICAgICBpID0gKHRoaXMuZ2FsbGVyeS5sZW5ndGggJSAyKSArIDE7IC8vIDQgaXMgdGhlIE51bWJlciBvZiBpbWFnZSBpbiBzbGlkZXJcbiAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaScgKyBpKSkuY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbn1cblxuIl19