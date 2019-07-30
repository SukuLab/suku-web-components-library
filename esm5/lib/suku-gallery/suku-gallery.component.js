/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input } from '@angular/core';
var SukuGalleryComponent = /** @class */ (function () {
    function SukuGalleryComponent() {
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
    SukuGalleryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.gallery = [
        //   {
        //     index: 'one',
        //     type: 'image',
        //     checked: true,
        //     link:
        //       'https://leiscreekcattleco.com/wp-content/uploads/2018/10/WhyAkaushiPhoto.jpg'
        //   },
        //   {
        //     index: 'two',
        //     type: 'image',
        //     checked: false,
        //     link:
        //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaurornWO8dpOQVsH3hxOjonAzHbbcMsOA0g6_ziGZVT92HBsP'
        //   },
        //   {
        //     index: 'three',
        //     type: 'video',
        //     checked: false,
        //     link:
        //       'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        //   },
        //   {
        //     index: 'four',
        //     type: 'image',
        //     checked: false,
        //     link:
        //       'https://www.uaex.edu/farm-ranch/animals-forages/images/baldy%20with%20calf%20square.JPG'
        //   },
        //   {
        //     index: 's',
        //     type: 'video',
        //     checked: false,
        //     link:
        //       'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        //   },
        //   {
        //     index: 'one',
        //     type: 'image',
        //     checked: false,
        //     link:
        //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaXN6xiu-IvpxOb93cBuTrqJwXM5IcMStHAMKpMLXx7K6qfENb'
        //   },
        //   {
        //     index: 'one',
        //     type: 'image',
        //     checked: false,
        //     link:
        //       'https://upload.wikimedia.org/wikipedia/commons/f/f6/Limia_cattle.jpg'
        //   },
        //   {
        //     index: 'one',
        //     type: 'image',
        //     checked: false,
        //     link:
        //       'http://www.broken-spur-ranch.com/Sites/10/image/Zabaco%20Feb.%20-%20Copy.jpg'
        //   },
        //   {
        //     index: 'two',
        //     type: 'image',
        //     checked: false,
        //     link:
        //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIJXakzsFcGAsLMqlbwWFZtZqrliH6rJN6HdWAHPfW36EQF08'
        //   }
        // ];
    };
    /**
     * @param {?} i
     * @param {?} position
     * @return {?}
     */
    SukuGalleryComponent.prototype.active = /**
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
            // if (i + 1 == this.gallery[this.gallery.length]) {
            //   this.nextBtnVisible = false;
            //   this.prevBtnVisible = true;
            // } else {
            //   this.nextBtnVisible = true;
            // }
            // if (i == 1) {
            //   this.nextBtnVisible = true;
            // } else {
            //   this.prevBtnVisible = false;
            // }
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
    SukuGalleryComponent.prototype.preview = /**
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
    SukuGalleryComponent.prototype.closeModal = /**
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
    SukuGalleryComponent.prototype.start = /**
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
    SukuGalleryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-gallery',
                    template: "<!-- <div class=\"imgcontainer\">\n  <div *ngFor=\"let item of gallery;let i= index\">\n    <input type=\"radio\" id=\"i{{1}}\" name=\"images\" [checked]='item?.checked' />\n    <div class=\"slide_img text-center\" [ngClass]=\"{'checked': item?.checked }\" id=\"item{{i}}\">\n      <img class=\"pic\" (click)=\"preview(item)\" *ngIf=\"item?.type == 'image'\" src=\"{{item?.link}}\">\n      <video #video class=\"vid\" (click)=\"preview(item)\" *ngIf=\"item?.type == 'video'\" width=\"85%\" height=\"100%\"\n        src=\"{{item?.link}}\" controls>\n        Your browser does not support the video tag.\n      </video>\n      <label class=\"prev\" *ngIf=\"prevBtnVisible\" (click)=\"active(i,'prev')\" for=\"i{{i}}\"><span class=\"icon-left\">\n          <i class=\"fa fa-chevron-left icon-control-l\"></i>\n        </span></label>\n      <label class=\"next\" *ngIf=\"nextBtnVisible\" (click)=\"active(i,'next')\" for=\"i{{i}}\"><span class=\"icon-right\">\n          <i class=\"fa fa-chevron-right icon-control-r\"></i>\n        </span></label>\n    </div>\n  </div>\n</div> -->\n<!-- pop-view Modal -->\n<div id=\"myGalleryModal\" class=\"modal\">\n  <span class=\"close\" (click)=\"closeModal()\">&times;</span>\n  <img class=\"modal-content\" id=\"img01\">\n  <video #video width=\"85%\" height=\"100%\" id=\"vid\" controls>\n    Your browser does not support the video tag.\n  </video>\n</div>\n\n\n<div [id]=\"galleryId\" class=\"carousel slide p-1\" data-ride=\"carousel\" data-interval=\"false\">\n  <!-- The slideshow -->\n  <div class=\"carousel-inner\" [ngClass]=\"{'default-container': size == 'default'}\" [style.height.rem]=\"carouselHeight\"\n    [style.width.rem]=\"carouselWidth\">\n    <div class=\"carousel-item\" [ngClass]=\"{'active': item?.checked }\" *ngFor=\"let item of gallery;let i= index\">\n      <div class=\"text-center\" [ngClass]=\"{'slide_img' :item?.type == 'image', 'slide_vid' :item?.type == 'video' }\"\n        id=\"item{{i}}\">\n        <img class=\"pic\" [style.height.rem]=\"imgHeight\" [style.width.rem]=\"imgWidth\"\n          [ngClass]=\"{'default-pic': size == 'default'}\" (click)=\"preview(item)\" *ngIf=\"item?.type == 'image'\"\n          src=\"{{item?.link}}\">\n        <video #video class=\"vid\" [style.height.rem]=\"vidHeight\" [style.width.rem]=\"vidWidth\"\n          [ngClass]=\"{'default-vid': size == 'default'}\" (click)=\"preview(item)\" *ngIf=\"item?.type == 'video'\"\n          width=\"95%\" height=\"100%\" src=\"{{item?.link}}\" controls>\n          Your browser does not support the video tag.\n        </video>\n      </div>\n    </div>\n    <!-- Left and right controls -->\n    <a class=\"carousel-control-prev\" href=\"#{{galleryId}}\" data-slide=\"prev\" *ngIf=\"(gallery?.length > 1)\">\n      <span class=\"carousel-control-prev-icon {{controlPrevIconCustomClass}}\">\n      </span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#{{galleryId}}\" data-slide=\"next\" *ngIf=\"(gallery?.length > 1)\">\n      <span class=\"carousel-control-next-icon {{controlNextIconCustomClass}}\">\n      </span>\n    </a>\n  </div>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.pic:hover{cursor:pointer}.vid{padding:4% 4% 2%}.slide_vid{margin:4% auto;position:relative;width:87%}#myImg{border-radius:5px;cursor:pointer;transition:.3s}#myImg:hover{opacity:.7}.modal{display:none;position:fixed;z-index:500;padding-top:100px;left:0;top:0;width:100%;overflow:auto;background-color:rgba(0,0,0,.9);height:100vh;justify-content:center;align-items:center}.modal-content{margin:auto;display:block;align-items:center;width:80%;max-width:50vh}.modal-content:hover{transition:.45s ease-in-out;max-width:65vh}#caption{display:block;width:80%;max-width:700px;text-align:center;color:#ccc;height:150px}#caption,.modal-content{-webkit-animation-name:zoom;animation-name:zoom;-webkit-animation-duration:.6s;animation-duration:.6s}@-webkit-keyframes zoom{from{transform:scale(0)}to{transform:scale(1)}}@keyframes zoom{from{transform:scale(0)}to{transform:scale(1)}}.close{position:absolute;top:15px;right:35px;color:#f1f1f1;font-size:40px;font-weight:700;transition:.3s}.close:focus,.close:hover{color:#a5a0a0;text-decoration:none;cursor:pointer}@media only screen and (max-width:700px){.modal-content{width:100%}.carousel{display:flex;justify-content:center}}.carousel-inner{position:relative;width:100%;overflow:hidden;height:14.5rem;background:#fff;box-shadow:0 2px 3px -2px #00000f4f;border:1px solid #f2f2f2;border-radius:8px 25px}.carousel-control-next-icon,.carousel-control-prev-icon{background-image:none!important;width:auto!important;height:inherit!important}.carousel-control-prev-icon{margin-right:.5rem}.carousel-control-next-icon{margin-left:.1rem}.carousel-control-next-icon:after{text-align:center;content:'\\f054';font-family:FontAwesome;color:var(--suku-primary-color);background-size:50% 50%;border-radius:50%;display:inline-flex;justify-content:center;align-items:center;height:30px;width:30px}.carousel-control-prev-icon:after{content:'\\f053';font-family:FontAwesome;color:var(--suku-primary-color);background-size:50% 50%;border-radius:50%;display:inline-flex;justify-content:center;align-items:center;height:30px;width:30px}.default-container{height:190px;width:300px}.default-pic{height:162px!important}.default-vid{height:155px!important}.slide_img{margin:5% auto;position:relative;width:70%}.pic{background-size:contain;border-radius:5px;margin:auto;width:100%;height:12rem;z-index:99}"]
                }] }
    ];
    /** @nocollapse */
    SukuGalleryComponent.ctorParameters = function () { return []; };
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
    return SukuGalleryComponent;
}());
export { SukuGalleryComponent };
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
    SukuGalleryComponent.prototype.prevBtnVisible;
    /** @type {?} */
    SukuGalleryComponent.prototype.nextBtnVisible;
    /** @type {?} */
    SukuGalleryComponent.prototype.autoplay;
    /** @type {?} */
    SukuGalleryComponent.prototype.videoElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1nYWxsZXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWdhbGxlcnkvc3VrdS1nYWxsZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRjtJQXFCRTtRQWZTLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixTQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ0wsY0FBUyxHQUFHLE1BQU0sQ0FBQztRQVN4QyxtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBRUQsQ0FBQzs7OztJQUVqQix1Q0FBUTs7O0lBQVI7UUFDRSxtQkFBbUI7UUFDbkIsTUFBTTtRQUNOLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWix1RkFBdUY7UUFDdkYsT0FBTztRQUNQLE1BQU07UUFDTixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osbUhBQW1IO1FBQ25ILE9BQU87UUFDUCxNQUFNO1FBQ04sc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLDhGQUE4RjtRQUM5RixPQUFPO1FBQ1AsTUFBTTtRQUNOLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixrR0FBa0c7UUFDbEcsT0FBTztRQUNQLE1BQU07UUFDTixrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osOEZBQThGO1FBQzlGLE9BQU87UUFDUCxNQUFNO1FBQ04sb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLG1IQUFtSDtRQUNuSCxPQUFPO1FBQ1AsTUFBTTtRQUNOLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWiwrRUFBK0U7UUFDL0UsT0FBTztRQUNQLE1BQU07UUFDTixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osdUZBQXVGO1FBQ3ZGLE9BQU87UUFDUCxNQUFNO1FBQ04sb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLG1IQUFtSDtRQUNuSCxNQUFNO1FBQ04sS0FBSztJQUNQLENBQUM7Ozs7OztJQUVELHFDQUFNOzs7OztJQUFOLFVBQU8sQ0FBQyxFQUFFLFFBQVE7UUFBbEIsaUJBOENDO1FBN0NDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7O1FBQUMsVUFBQyxPQUFPLEVBQUUsS0FBSztZQUNsQyxvREFBb0Q7WUFDcEQsaUNBQWlDO1lBQ2pDLGdDQUFnQztZQUNoQyxXQUFXO1lBQ1gsZ0NBQWdDO1lBQ2hDLElBQUk7WUFFSixnQkFBZ0I7WUFDaEIsZ0NBQWdDO1lBQ2hDLFdBQVc7WUFDWCxpQ0FBaUM7WUFDakMsSUFBSTtZQUVKLElBQUksUUFBUSxJQUFJLE1BQU0sRUFBRTtnQkFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNULElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDVixPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzt5QkFDeEI7cUJBQ0Y7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUNWLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO3lCQUN6QjtxQkFDRjtvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUMxQzthQUNGO1lBRUQsSUFBSSxRQUFRLElBQUksTUFBTSxFQUFFO2dCQUN0QixJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNsQixJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQy9CLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO3FCQUN4QjtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQy9CLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO3FCQUN6QjtpQkFDRjtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzFDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELHNDQUFPOzs7O0lBQVAsVUFBUSxDQUFDO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1lBQ2pCLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDOztZQUNqRCxRQUFRLEdBQUcsbUJBQWtCLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUE7O1lBQzdELFFBQVEsR0FBRyxtQkFBa0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBQTtRQUNqRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBRTtZQUNyQixRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDdEIsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ2pDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztTQUNqQzthQUFNO1lBQ0wsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ2pDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUNoQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7O0lBRUQseUNBQVU7OztJQUFWOztZQUNRLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDO1FBQ3ZELEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsb0NBQUs7OztJQUFMOztZQUNNLENBQUMsR0FBRyxDQUFDOzs7O1FBQ1QsU0FBUyxJQUFJO1lBQ1gsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMscUNBQXFDO1lBQ3hFLENBQUMsbUJBQWtCLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFBLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3RFLENBQUM7SUFDSCxDQUFDOztnQkF2S0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixpakdBQTRDOztpQkFFN0M7Ozs7OzBCQUVFLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLLFNBQUMsWUFBWTtpQ0FDbEIsS0FBSyxTQUFDLGlCQUFpQjtnQ0FDdkIsS0FBSyxTQUFDLGdCQUFnQjs0QkFDdEIsS0FBSyxTQUFDLFlBQVk7MkJBQ2xCLEtBQUssU0FBQyxXQUFXOzRCQUNqQixLQUFLLFNBQUMsWUFBWTsyQkFDbEIsS0FBSyxTQUFDLFdBQVc7NkNBQ2pCLEtBQUssU0FBQywrQkFBK0I7NkNBQ3JDLEtBQUssU0FBQywrQkFBK0I7K0JBSXJDLFNBQVMsU0FBQyxPQUFPOztJQXFKcEIsMkJBQUM7Q0FBQSxBQXpLRCxJQXlLQztTQXBLWSxvQkFBb0I7OztJQUMvQix1Q0FBc0I7O0lBQ3RCLG9DQUEwQjs7SUFDMUIseUNBQXdDOztJQUN4Qyw4Q0FBeUM7O0lBQ3pDLDZDQUF1Qzs7SUFDdkMseUNBQStCOztJQUMvQix3Q0FBNkI7O0lBQzdCLHlDQUErQjs7SUFDL0Isd0NBQTZCOztJQUM3QiwwREFBbUU7O0lBQ25FLDBEQUFtRTs7SUFDbkUsOENBQXNCOztJQUN0Qiw4Q0FBc0I7O0lBQ3RCLHdDQUFpQjs7SUFDakIsNENBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1nYWxsZXJ5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZ2FsbGVyeS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VHYWxsZXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZ2FsbGVyeSA9IFtdO1xuICBASW5wdXQoKSBzaXplID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoJ2dhbGxlcnktaWQnKSBnYWxsZXJ5SWQgPSAnZGVtbyc7XG4gIEBJbnB1dCgnY2Fyb3VzZWwtaGVpZ2h0JykgY2Fyb3VzZWxIZWlnaHQ7XG4gIEBJbnB1dCgnY2Fyb3VzZWwtd2lkdGgnKSBjYXJvdXNlbFdpZHRoO1xuICBASW5wdXQoJ2ltZy1oZWlnaHQnKSBpbWdIZWlnaHQ7XG4gIEBJbnB1dCgnaW1nLXdpZHRoJykgaW1nV2lkdGg7XG4gIEBJbnB1dCgndmlkLWhlaWdodCcpIHZpZEhlaWdodDtcbiAgQElucHV0KCd2aWQtd2lkdGgnKSB2aWRXaWR0aDtcbiAgQElucHV0KCdjb250cm9sLW5leHQtaWNvbi1jdXN0b21jbGFzcycpIGNvbnRyb2xOZXh0SWNvbkN1c3RvbUNsYXNzO1xuICBASW5wdXQoJ2NvbnRyb2wtcHJldi1pY29uLWN1c3RvbWNsYXNzJykgY29udHJvbFByZXZJY29uQ3VzdG9tQ2xhc3M7XG4gIHByZXZCdG5WaXNpYmxlID0gdHJ1ZTtcbiAgbmV4dEJ0blZpc2libGUgPSB0cnVlO1xuICBhdXRvcGxheSA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCd2aWRlbycpIHZpZGVvRWxlbWVudDogRWxlbWVudFJlZjtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyB0aGlzLmdhbGxlcnkgPSBbXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGluZGV4OiAnb25lJyxcbiAgICAvLyAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAvLyAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAvLyAgICAgbGluazpcbiAgICAvLyAgICAgICAnaHR0cHM6Ly9sZWlzY3JlZWtjYXR0bGVjby5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvV2h5QWthdXNoaVBob3RvLmpwZydcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGluZGV4OiAndHdvJyxcbiAgICAvLyAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAvLyAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgLy8gICAgIGxpbms6XG4gICAgLy8gICAgICAgJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1FhdXJvcm5XTzhkcE9RVnNIM2h4T2pvbkF6SGJiY01zT0EwZzZfemlHWlZUOTJIQnNQJ1xuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgaW5kZXg6ICd0aHJlZScsXG4gICAgLy8gICAgIHR5cGU6ICd2aWRlbycsXG4gICAgLy8gICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIC8vICAgICBsaW5rOlxuICAgIC8vICAgICAgICdodHRwOi8vY29tbW9uZGF0YXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vZ3R2LXZpZGVvcy1idWNrZXQvc2FtcGxlL0VsZXBoYW50c0RyZWFtLm1wNCdcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGluZGV4OiAnZm91cicsXG4gICAgLy8gICAgIHR5cGU6ICdpbWFnZScsXG4gICAgLy8gICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIC8vICAgICBsaW5rOlxuICAgIC8vICAgICAgICdodHRwczovL3d3dy51YWV4LmVkdS9mYXJtLXJhbmNoL2FuaW1hbHMtZm9yYWdlcy9pbWFnZXMvYmFsZHklMjB3aXRoJTIwY2FsZiUyMHNxdWFyZS5KUEcnXG4gICAgLy8gICB9LFxuICAgIC8vICAge1xuICAgIC8vICAgICBpbmRleDogJ3MnLFxuICAgIC8vICAgICB0eXBlOiAndmlkZW8nLFxuICAgIC8vICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAvLyAgICAgbGluazpcbiAgICAvLyAgICAgICAnaHR0cDovL2NvbW1vbmRhdGFzdG9yYWdlLmdvb2dsZWFwaXMuY29tL2d0di12aWRlb3MtYnVja2V0L3NhbXBsZS9FbGVwaGFudHNEcmVhbS5tcDQnXG4gICAgLy8gICB9LFxuICAgIC8vICAge1xuICAgIC8vICAgICBpbmRleDogJ29uZScsXG4gICAgLy8gICAgIHR5cGU6ICdpbWFnZScsXG4gICAgLy8gICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIC8vICAgICBsaW5rOlxuICAgIC8vICAgICAgICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSYVhONnhpdS1JdnB4T2I5M2NCdVRycUp3WE01SWNNU3RIQU1LcE1MWHg3SzZxZkVOYidcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGluZGV4OiAnb25lJyxcbiAgICAvLyAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAvLyAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgLy8gICAgIGxpbms6XG4gICAgLy8gICAgICAgJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvZi9mNi9MaW1pYV9jYXR0bGUuanBnJ1xuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgaW5kZXg6ICdvbmUnLFxuICAgIC8vICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgIC8vICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAvLyAgICAgbGluazpcbiAgICAvLyAgICAgICAnaHR0cDovL3d3dy5icm9rZW4tc3B1ci1yYW5jaC5jb20vU2l0ZXMvMTAvaW1hZ2UvWmFiYWNvJTIwRmViLiUyMC0lMjBDb3B5LmpwZydcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGluZGV4OiAndHdvJyxcbiAgICAvLyAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAvLyAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgLy8gICAgIGxpbms6XG4gICAgLy8gICAgICAgJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1NMSUpYYWt6c0ZjR0FzTE1xbGJ3V0ZadFpxcmxpSDZySk42SGRXQUhQZlczNkVRRjA4J1xuICAgIC8vICAgfVxuICAgIC8vIF07XG4gIH1cblxuICBhY3RpdmUoaSwgcG9zaXRpb24pIHtcbiAgICBjb25zb2xlLmxvZyhpKTtcbiAgICB0aGlzLnZpZGVvRWxlbWVudC5uYXRpdmVFbGVtZW50LnBhdXNlKCk7XG4gICAgdGhpcy5hdXRvcGxheSA9IGZhbHNlO1xuICAgIHRoaXMuZ2FsbGVyeS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgLy8gaWYgKGkgKyAxID09IHRoaXMuZ2FsbGVyeVt0aGlzLmdhbGxlcnkubGVuZ3RoXSkge1xuICAgICAgLy8gICB0aGlzLm5leHRCdG5WaXNpYmxlID0gZmFsc2U7XG4gICAgICAvLyAgIHRoaXMucHJldkJ0blZpc2libGUgPSB0cnVlO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgdGhpcy5uZXh0QnRuVmlzaWJsZSA9IHRydWU7XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIGlmIChpID09IDEpIHtcbiAgICAgIC8vICAgdGhpcy5uZXh0QnRuVmlzaWJsZSA9IHRydWU7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICB0aGlzLnByZXZCdG5WaXNpYmxlID0gZmFsc2U7XG4gICAgICAvLyB9XG5cbiAgICAgIGlmIChwb3NpdGlvbiA9PSAncHJldicpIHtcbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgaWYgKGluZGV4ID09IGkgLSAxKSB7XG4gICAgICAgICAgICBpZiAoaSAhPSAwKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpICE9IDApIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGUnLCBpLCBwb3NpdGlvbiwgZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBvc2l0aW9uID09ICduZXh0Jykge1xuICAgICAgICBpZiAoaW5kZXggPT0gaSArIDEpIHtcbiAgICAgICAgICBpZiAoaSA8IHRoaXMuZ2FsbGVyeS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaSA8IHRoaXMuZ2FsbGVyeS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2VsZScsIGksIHBvc2l0aW9uLCBlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByZXZpZXcoZSkge1xuICAgIGNvbnNvbGUubG9nKCdsaW5rJywgZSk7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlHYWxsZXJ5TW9kYWwnKTtcbiAgICBjb25zdCBtb2RhbEltZyA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWcwMScpO1xuICAgIGNvbnN0IG1vZGFsVmlkID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZCcpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGlmIChlLnR5cGUgPT0gJ2ltYWdlJykge1xuICAgICAgbW9kYWxJbWcuc3JjID0gZS5saW5rO1xuICAgICAgbW9kYWxJbWcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBtb2RhbFZpZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb2RhbFZpZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIG1vZGFsSW1nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBtb2RhbFZpZC5zcmMgPSBlLmxpbms7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VNb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUdhbGxlcnlNb2RhbCcpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB2YXIgaSA9IDE7XG4gICAgZnVuY3Rpb24gTW92ZSgpIHtcbiAgICAgIGkgPSAodGhpcy5nYWxsZXJ5Lmxlbmd0aCAlIDIpICsgMTsgLy8gNCBpcyB0aGUgTnVtYmVyIG9mIGltYWdlIGluIHNsaWRlclxuICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpJyArIGkpKS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxufVxuXG4iXX0=