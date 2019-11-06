/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
var SukuFileUploadComponent = /** @class */ (function () {
    function SukuFileUploadComponent(snackBar) {
        this.snackBar = snackBar;
        this.enableContainer = false;
        this.titleId = 'heading';
        this.titleColor = '#747470eb';
        this.titleWeight = '600';
        this.customClass = 'pt-4';
        this.dropZoneHeight = '12';
        this.dropZoneWidth = 'auto';
        this.imgHeight = '55';
        this.imgWidth = '';
        this.imgSrc = '';
        this.icon = 'suku-upload-icon';
        this.iconId = '';
        this.iconCustomClass = '';
        this.fileInputId = 'file';
        this.title = 'Verify the authenticity of a document by uploading it here';
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuFileUploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SukuFileUploadComponent.prototype.toggleHover = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.isHovering = event;
        console.log('event', event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SukuFileUploadComponent.prototype.startUpload = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var maxFileSize = 9999999;
        /** @type {?} */
        var file = event;
        if (event.length > 0) {
            for (var i = 0; i < event.length; i++) {
                if (event[i].type == 'image/jpeg' || event[i].type == 'image/png' || event[i].type == 'image/jpg' ||
                    event[i].type == 'application/pdf') {
                    if (event[i].size <= maxFileSize) {
                        console.log('event', event[i]);
                        /** @type {?} */
                        var e = event[i];
                        this.action.emit(e);
                        ((/** @type {?} */ (document.getElementById('file')))).value = '';
                    }
                    else {
                        this.snackbar('The file size cannot exceed 10 MB');
                    }
                }
                else {
                    this.snackbar('The file type jpg/jpeg/png/pdf files are allowed!');
                }
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SukuFileUploadComponent.prototype.upload = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        console.log('file-upload');
        ((/** @type {?} */ (document.getElementById('file')))).click();
        e.stopPropagation();
    };
    /**
     * @param {?} msg
     * @return {?}
     */
    SukuFileUploadComponent.prototype.snackbar = /**
     * @param {?} msg
     * @return {?}
     */
    function (msg) {
        this.snackBar.open(msg, 'close', {
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            duration: 3500
        });
    };
    SukuFileUploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-file-upload',
                    template: "<div class=\"col\">\r\n  <div class=\"col text-center p-0\" [ngClass]=\"{'upload-container': enableContainer}\">\r\n    <div class=\"text-center col-sm-12 p-4\">\r\n      <div class=\"dropzone\" dropZone [style.width.rem]=\"dropZoneWidth\" (hovered)=\"toggleHover($event)\"\r\n        (dropped)=\"startUpload($event)\" [class.hovering]=\"isHovering\" (click)=\"upload($event)\">\r\n        <h1 class=\" title {{customClass}}\" [style.font-size.rem]=\"titleSize\" [style.font-weight]=\"titleWeight\"\r\n          [style.color]=\"titleColor\" [id]=\"titleId\"> {{title}}</h1>\r\n        <div class=\"file\">\r\n          <label class=\"file-label\" [style.height.rem]=\"dropZoneHeight\">\r\n            <span class=\"file-cta\">\r\n              <span class=\"file-icon\">\r\n                <img class=\"mt-5\" *ngIf=\"imgSrc\" [style.height.%]=\"imgHeight\" [style.width.%]=\"imgWidth\"\r\n                  [src]=\"imgSrc\" />\r\n                <i class=\"mt-5 {{icon}} {{iconCustomClass}}\" *ngIf=\"icon\" id=\"{{iconId}}\"></i>\r\n              </span>\r\n            </span>\r\n          </label>\r\n        </div>\r\n        <input class=\"file-input\" [id]=\"fileInputId\" type=\"file\" (change)=\"startUpload($event.target.files)\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.upload-container{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}h1{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-4);font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-word!important;overflow:hidden;text-overflow:ellipsis!important;white-space:normal}.file-wrapper{cursor:pointer;display:inline-block;overflow:hidden;position:relative}.file-wrapper input{cursor:pointer;font-size:100px;-moz-opacity:.01;opacity:.01;position:absolute;right:0;top:0}.file-wrapper .button{border:solid 2px var(--suku-default-border-color);border-radius:28px 76px 63px;color:#000;cursor:pointer;display:inline-block;font-weight:700;margin-right:5px;padding:4px 18px}.dropzone{display:flex;align-items:center;justify-content:center;flex-direction:column;font-weight:200;height:30%;border:2px dashed var(--suku-default-border-color);border-radius:3px;background-color:#eaeaea5e;margin:1rem}.dropzone.hovering{border:2px solid var(--suku-default-border-color)}.dropzone .file-label{position:relative;z-index:2;display:flex}.file-icon{font-size:4em}.file-input{visibility:hidden;z-index:-20!important;pointer-events:none}"]
                }] }
    ];
    /** @nocollapse */
    SukuFileUploadComponent.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
    SukuFileUploadComponent.propDecorators = {
        enableContainer: [{ type: Input, args: ['enable-container',] }],
        titleId: [{ type: Input, args: ['title-Id',] }],
        titleSize: [{ type: Input, args: ['title-size',] }],
        titleColor: [{ type: Input, args: ['title-color',] }],
        titleWeight: [{ type: Input, args: ['title-weight',] }],
        customClass: [{ type: Input, args: ['custom-class',] }],
        dropZoneHeight: [{ type: Input, args: ['drop-zone-height',] }],
        dropZoneWidth: [{ type: Input, args: ['drop-zone-width',] }],
        imgHeight: [{ type: Input, args: ['img-height',] }],
        imgWidth: [{ type: Input, args: ['img-width',] }],
        imgSrc: [{ type: Input, args: ['img-src',] }],
        icon: [{ type: Input, args: ['icon',] }],
        iconId: [{ type: Input, args: ['icon-id',] }],
        iconCustomClass: [{ type: Input, args: ['icon-custom-class',] }],
        fileInputId: [{ type: Input, args: ['file-input-id',] }],
        title: [{ type: Input }],
        action: [{ type: Output }]
    };
    return SukuFileUploadComponent;
}());
export { SukuFileUploadComponent };
if (false) {
    /** @type {?} */
    SukuFileUploadComponent.prototype.isHovering;
    /** @type {?} */
    SukuFileUploadComponent.prototype.enableContainer;
    /** @type {?} */
    SukuFileUploadComponent.prototype.titleId;
    /** @type {?} */
    SukuFileUploadComponent.prototype.titleSize;
    /** @type {?} */
    SukuFileUploadComponent.prototype.titleColor;
    /** @type {?} */
    SukuFileUploadComponent.prototype.titleWeight;
    /** @type {?} */
    SukuFileUploadComponent.prototype.customClass;
    /** @type {?} */
    SukuFileUploadComponent.prototype.dropZoneHeight;
    /** @type {?} */
    SukuFileUploadComponent.prototype.dropZoneWidth;
    /** @type {?} */
    SukuFileUploadComponent.prototype.imgHeight;
    /** @type {?} */
    SukuFileUploadComponent.prototype.imgWidth;
    /** @type {?} */
    SukuFileUploadComponent.prototype.imgSrc;
    /** @type {?} */
    SukuFileUploadComponent.prototype.icon;
    /** @type {?} */
    SukuFileUploadComponent.prototype.iconId;
    /** @type {?} */
    SukuFileUploadComponent.prototype.iconCustomClass;
    /** @type {?} */
    SukuFileUploadComponent.prototype.fileInputId;
    /** @type {?} */
    SukuFileUploadComponent.prototype.title;
    /** @type {?} */
    SukuFileUploadComponent.prototype.action;
    /**
     * @type {?}
     * @private
     */
    SukuFileUploadComponent.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1maWxlLXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1maWxlLXVwbG9hZC9zdWt1LWZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFaEQ7SUF3QkUsaUNBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFqQmQsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDaEMsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUVqQixlQUFVLEdBQUcsV0FBVyxDQUFDO1FBQ3hCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ2pCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQUcsTUFBTSxDQUFDO1FBQzVCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDbEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNoQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2YsU0FBSSxHQUFHLGtCQUFrQixDQUFDO1FBQ3ZCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDRixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUN6QixnQkFBVyxHQUFHLE1BQU0sQ0FBQztRQUNyQyxVQUFLLEdBQUcsNERBQTRELENBQUM7UUFDbkUsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDTyxDQUFDOzs7O0lBRTlDLDBDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIs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K0I7O0lBQy9CLDZDQUErQzs7SUFDL0MsOENBQTJDOztJQUMzQyw4Q0FBNEM7O0lBQzVDLGlEQUFpRDs7SUFDakQsZ0RBQWlEOztJQUNqRCw0Q0FBc0M7O0lBQ3RDLDJDQUFrQzs7SUFDbEMseUNBQThCOztJQUM5Qix1Q0FBeUM7O0lBQ3pDLHlDQUE4Qjs7SUFDOUIsa0RBQWlEOztJQUNqRCw4Q0FBNkM7O0lBQzdDLHdDQUE2RTs7SUFDN0UseUNBQXNDOzs7OztJQUMxQiwyQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LWZpbGUtdXBsb2FkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1maWxlLXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1RmlsZVVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaXNIb3ZlcmluZztcclxuICBASW5wdXQoJ2VuYWJsZS1jb250YWluZXInKSBlbmFibGVDb250YWluZXIgPSBmYWxzZTtcclxuICBASW5wdXQoJ3RpdGxlLUlkJykgdGl0bGVJZCA9ICdoZWFkaW5nJztcclxuICBASW5wdXQoJ3RpdGxlLXNpemUnKSB0aXRsZVNpemU7XHJcbiAgQElucHV0KCd0aXRsZS1jb2xvcicpIHRpdGxlQ29sb3IgPSAnIzc0NzQ3MGViJztcclxuICBASW5wdXQoJ3RpdGxlLXdlaWdodCcpIHRpdGxlV2VpZ2h0ID0gJzYwMCc7XHJcbiAgQElucHV0KCdjdXN0b20tY2xhc3MnKSBjdXN0b21DbGFzcyA9ICdwdC00JztcclxuICBASW5wdXQoJ2Ryb3Atem9uZS1oZWlnaHQnKSBkcm9wWm9uZUhlaWdodCA9ICcxMic7XHJcbiAgQElucHV0KCdkcm9wLXpvbmUtd2lkdGgnKSBkcm9wWm9uZVdpZHRoID0gJ2F1dG8nO1xyXG4gIEBJbnB1dCgnaW1nLWhlaWdodCcpIGltZ0hlaWdodCA9ICc1NSc7XHJcbiAgQElucHV0KCdpbWctd2lkdGgnKSBpbWdXaWR0aCA9ICcnO1xyXG4gIEBJbnB1dCgnaW1nLXNyYycpIGltZ1NyYyA9ICcnO1xyXG4gIEBJbnB1dCgnaWNvbicpIGljb24gPSAnc3VrdS11cGxvYWQtaWNvbic7XHJcbiAgQElucHV0KCdpY29uLWlkJykgaWNvbklkID0gJyc7XHJcbiAgQElucHV0KCdpY29uLWN1c3RvbS1jbGFzcycpIGljb25DdXN0b21DbGFzcyA9ICcnO1xyXG4gIEBJbnB1dCgnZmlsZS1pbnB1dC1pZCcpIGZpbGVJbnB1dElkID0gJ2ZpbGUnO1xyXG4gIEBJbnB1dCgpdGl0bGUgPSAnVmVyaWZ5IHRoZSBhdXRoZW50aWNpdHkgb2YgYSBkb2N1bWVudCBieSB1cGxvYWRpbmcgaXQgaGVyZSc7XHJcbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlSG92ZXIoZXZlbnQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaXNIb3ZlcmluZyA9IGV2ZW50O1xyXG4gICAgY29uc29sZS5sb2coJ2V2ZW50JywgZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRVcGxvYWQoZXZlbnQ6IEZpbGVMaXN0KSB7XHJcbiAgICBjb25zdCBtYXhGaWxlU2l6ZSA9IDk5OTk5OTk7XHJcbiAgICBjb25zdCBmaWxlID0gZXZlbnQ7XHJcbiAgICBpZiAoZXZlbnQubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50W2ldLnR5cGUgPT0gJ2ltYWdlL2pwZWcnIHx8IGV2ZW50W2ldLnR5cGUgPT0gJ2ltYWdlL3BuZycgfHwgZXZlbnRbaV0udHlwZSA9PSAnaW1hZ2UvanBnJyB8fFxyXG4gICAgICAgICAgZXZlbnRbaV0udHlwZSA9PSAnYXBwbGljYXRpb24vcGRmJykge1xyXG4gICAgICAgICAgaWYgKGV2ZW50W2ldLnNpemUgPD0gbWF4RmlsZVNpemUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2V2ZW50JywgZXZlbnRbaV0pO1xyXG4gICAgICAgICAgICBjb25zdCBlID0gZXZlbnRbaV07XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLmVtaXQoZSk7XHJcbiAgICAgICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zbmFja2JhcignVGhlIGZpbGUgc2l6ZSBjYW5ub3QgZXhjZWVkIDEwIE1CJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc25hY2tiYXIoJ1RoZSBmaWxlIHR5cGUganBnL2pwZWcvcG5nL3BkZiBmaWxlcyBhcmUgYWxsb3dlZCEnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwbG9hZChlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZmlsZS11cGxvYWQnKTtcclxuICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpKS5jbGljaygpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIHNuYWNrYmFyKG1zZykge1xyXG4gICAgdGhpcy5zbmFja0Jhci5vcGVuKG1zZywgJ2Nsb3NlJywge1xyXG4gICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICBkdXJhdGlvbjogMzUwMFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==