/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1nYWxsZXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWdhbGxlcnkvc3VrdS1nYWxsZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9oRixNQUFNLE9BQU8sb0JBQW9CO0lBZ0IvQjtRQWZTLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixTQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ0wsY0FBUyxHQUFHLE1BQU0sQ0FBQztRQVV4QyxtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ0QsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLENBQUMsRUFBRSxRQUFRO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7O1FBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxRQUFRLElBQUksTUFBTSxFQUFFO2dCQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1QsSUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUNWLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO3lCQUN4QjtxQkFDRjt5QkFBTTt3QkFDTCxJQUFJLENBQUMs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eUNBQ2pCLEtBQUssU0FBQywrQkFBK0I7eUNBQ3JDLEtBQUssU0FBQywrQkFBK0I7MkJBQ3JDLFNBQVMsU0FBQyxPQUFPOzs7O0lBWGxCLHVDQUFzQjs7SUFDdEIsb0NBQTBCOztJQUMxQix5Q0FBd0M7O0lBQ3hDLDhDQUF5Qzs7SUFDekMsNkNBQXVDOztJQUN2Qyx5Q0FBK0I7O0lBQy9CLHdDQUE2Qjs7SUFDN0IseUNBQStCOztJQUMvQix3Q0FBNkI7O0lBQzdCLDBEQUFtRTs7SUFDbkUsMERBQW1FOztJQUNuRSw0Q0FBNkM7O0lBQzdDLDhDQUFzQjs7SUFDdEIsOENBQXNCOztJQUN0Qix3Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWdhbGxlcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1nYWxsZXJ5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUdhbGxlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBnYWxsZXJ5ID0gW107XG4gIEBJbnB1dCgpIHNpemUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgnZ2FsbGVyeS1pZCcpIGdhbGxlcnlJZCA9ICdkZW1vJztcbiAgQElucHV0KCdjYXJvdXNlbC1oZWlnaHQnKSBjYXJvdXNlbEhlaWdodDtcbiAgQElucHV0KCdjYXJvdXNlbC13aWR0aCcpIGNhcm91c2VsV2lkdGg7XG4gIEBJbnB1dCgnaW1nLWhlaWdodCcpIGltZ0hlaWdodDtcbiAgQElucHV0KCdpbWctd2lkdGgnKSBpbWdXaWR0aDtcbiAgQElucHV0KCd2aWQtaGVpZ2h0JykgdmlkSGVpZ2h0O1xuICBASW5wdXQoJ3ZpZC13aWR0aCcpIHZpZFdpZHRoO1xuICBASW5wdXQoJ2NvbnRyb2wtbmV4dC1pY29uLWN1c3RvbWNsYXNzJykgY29udHJvbE5leHRJY29uQ3VzdG9tQ2xhc3M7XG4gIEBJbnB1dCgnY29udHJvbC1wcmV2LWljb24tY3VzdG9tY2xhc3MnKSBjb250cm9sUHJldkljb25DdXN0b21DbGFzcztcbiAgQFZpZXdDaGlsZCgndmlkZW8nKSB2aWRlb0VsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIHByZXZCdG5WaXNpYmxlID0gdHJ1ZTtcbiAgbmV4dEJ0blZpc2libGUgPSB0cnVlO1xuICBhdXRvcGxheSA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgYWN0aXZlKGksIHBvc2l0aW9uKSB7XG4gICAgY29uc29sZS5sb2coaSk7XG4gICAgdGhpcy52aWRlb0VsZW1lbnQubmF0aXZlRWxlbWVudC5wYXVzZSgpO1xuICAgIHRoaXMuYXV0b3BsYXkgPSBmYWxzZTtcbiAgICB0aGlzLmdhbGxlcnkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChwb3NpdGlvbiA9PSAncHJldicpIHtcbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgaWYgKGluZGV4ID09IGkgLSAxKSB7XG4gICAgICAgICAgICBpZiAoaSAhPSAwKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpICE9IDApIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGUnLCBpLCBwb3NpdGlvbiwgZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBvc2l0aW9uID09ICduZXh0Jykge1xuICAgICAgICBpZiAoaW5kZXggPT0gaSArIDEpIHtcbiAgICAgICAgICBpZiAoaSA8IHRoaXMuZ2FsbGVyeS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaSA8IHRoaXMuZ2FsbGVyeS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2VsZScsIGksIHBvc2l0aW9uLCBlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByZXZpZXcoZSkge1xuICAgIGNvbnNvbGUubG9nKCdsaW5rJywgZSk7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlHYWxsZXJ5TW9kYWwnKTtcbiAgICBjb25zdCBtb2RhbEltZyA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWcwMScpO1xuICAgIGNvbnN0IG1vZGFsVmlkID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZCcpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGlmIChlLnR5cGUgPT0gJ2ltYWdlJykge1xuICAgICAgbW9kYWxJbWcuc3JjID0gZS5saW5rO1xuICAgICAgbW9kYWxJbWcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBtb2RhbFZpZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb2RhbFZpZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIG1vZGFsSW1nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBtb2RhbFZpZC5zcmMgPSBlLmxpbms7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VNb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUdhbGxlcnlNb2RhbCcpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB2YXIgaSA9IDE7XG4gICAgZnVuY3Rpb24gTW92ZSgpIHtcbiAgICAgIGkgPSAodGhpcy5nYWxsZXJ5Lmxlbmd0aCAlIDIpICsgMTsgLy8gNCBpcyB0aGUgTnVtYmVyIG9mIGltYWdlIGluIHNsaWRlclxuICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpJyArIGkpKS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxufVxuXG4iXX0=