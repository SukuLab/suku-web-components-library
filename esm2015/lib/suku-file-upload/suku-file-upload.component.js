/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
export class SukuFileUploadComponent {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
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
    ngOnInit() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleHover(event) {
        this.isHovering = event;
        console.log('event', event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    startUpload(event) {
        /** @type {?} */
        const maxFileSize = 9999999;
        /** @type {?} */
        const file = event;
        if (event.length > 0) {
            for (let i = 0; i < event.length; i++) {
                if (event[i].type == 'image/jpeg' || event[i].type == 'image/png' || event[i].type == 'image/jpg' ||
                    event[i].type == 'application/pdf') {
                    if (event[i].size <= maxFileSize) {
                        console.log('event', event[i]);
                        /** @type {?} */
                        const e = event[i];
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
    }
    /**
     * @param {?} e
     * @return {?}
     */
    upload(e) {
        console.log('file-upload');
        ((/** @type {?} */ (document.getElementById('file')))).click();
        e.stopPropagation();
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    snackbar(msg) {
        this.snackBar.open(msg, 'close', {
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            duration: 3500
        });
    }
}
SukuFileUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-file-upload',
                template: "<div class=\"col\">\r\n  <div class=\"col text-center p-0\" [ngClass]=\"{'upload-container': enableContainer}\">\r\n    <div class=\"text-center col-sm-12 p-4\">\r\n      <div class=\"dropzone\" dropZone [style.width.rem]=\"dropZoneWidth\" (hovered)=\"toggleHover($event)\"\r\n        (dropped)=\"startUpload($event)\" [class.hovering]=\"isHovering\" (click)=\"upload($event)\">\r\n        <h1 class=\" title {{customClass}}\" [style.font-size.rem]=\"titleSize\" [style.font-weight]=\"titleWeight\"\r\n          [style.color]=\"titleColor\" [id]=\"titleId\"> {{title}}</h1>\r\n        <div class=\"file\">\r\n          <label class=\"file-label\" [style.height.rem]=\"dropZoneHeight\">\r\n            <span class=\"file-cta\">\r\n              <span class=\"file-icon\">\r\n                <img class=\"mt-5\" *ngIf=\"imgSrc\" [style.height.%]=\"imgHeight\" [style.width.%]=\"imgWidth\"\r\n                  [src]=\"imgSrc\" />\r\n                <i class=\"mt-5 {{icon}} {{iconCustomClass}}\" *ngIf=\"icon\" id=\"{{iconId}}\"></i>\r\n              </span>\r\n            </span>\r\n          </label>\r\n        </div>\r\n        <input class=\"file-input\" [id]=\"fileInputId\" type=\"file\" (change)=\"startUpload($event.target.files)\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.upload-container{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}h1{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-4);font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-word!important;overflow:hidden;text-overflow:ellipsis!important;white-space:normal}.file-wrapper{cursor:pointer;display:inline-block;overflow:hidden;position:relative}.file-wrapper input{cursor:pointer;font-size:100px;-moz-opacity:.01;opacity:.01;position:absolute;right:0;top:0}.file-wrapper .button{border:solid 2px var(--suku-default-border-color);border-radius:28px 76px 63px;color:#000;cursor:pointer;display:inline-block;font-weight:700;margin-right:5px;padding:4px 18px}.dropzone{display:flex;align-items:center;justify-content:center;flex-direction:column;font-weight:200;height:30%;border:2px dashed var(--suku-default-border-color);border-radius:3px;background-color:#eaeaea5e;margin:1rem}.dropzone.hovering{border:2px solid var(--suku-default-border-color)}.dropzone .file-label{position:relative;z-index:2;display:flex}.file-icon{font-size:4em}.file-input{visibility:hidden;z-index:-20!important;pointer-events:none}"]
            }] }
];
/** @nocollapse */
SukuFileUploadComponent.ctorParameters = () => [
    { type: MatSnackBar }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1maWxlLXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1maWxlLXVwbG9hZC9zdWt1LWZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPaEQsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQW1CbEMsWUFBb0IsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQWpCZCxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUNoQyxZQUFPLEdBQUcsU0FBUyxDQUFDO1FBRWpCLGVBQVUsR0FBRyxXQUFXLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxNQUFNLENBQUM7UUFDakIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdkIsa0JBQWEsR0FBRyxNQUFNLENBQUM7UUFDNUIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNsQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDZixTQUFJLEdBQUcsa0JBQWtCLENBQUM7UUFDdkIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNGLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLGdCQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ3JDLFVBQUssR0FBRyw0REFBNEQsQ0FBQztRQUNuRSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNPLENBQUM7Ozs7SUFFOUMsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFD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QUFpRDs7SUFDakQsNENBQXNDOztJQUN0QywyQ0FBa0M7O0lBQ2xDLHlDQUE4Qjs7SUFDOUIsdUNBQXlDOztJQUN6Qyx5Q0FBOEI7O0lBQzlCLGtEQUFpRDs7SUFDakQsOENBQTZDOztJQUM3Qyx3Q0FBNkU7O0lBQzdFLHlDQUFzQzs7Ozs7SUFDMUIsMkNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1maWxlLXVwbG9hZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZmlsZS11cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUZpbGVVcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGlzSG92ZXJpbmc7XHJcbiAgQElucHV0KCdlbmFibGUtY29udGFpbmVyJykgZW5hYmxlQ29udGFpbmVyID0gZmFsc2U7XHJcbiAgQElucHV0KCd0aXRsZS1JZCcpIHRpdGxlSWQgPSAnaGVhZGluZyc7XHJcbiAgQElucHV0KCd0aXRsZS1zaXplJykgdGl0bGVTaXplO1xyXG4gIEBJbnB1dCgndGl0bGUtY29sb3InKSB0aXRsZUNvbG9yID0gJyM3NDc0NzBlYic7XHJcbiAgQElucHV0KCd0aXRsZS13ZWlnaHQnKSB0aXRsZVdlaWdodCA9ICc2MDAnO1xyXG4gIEBJbnB1dCgnY3VzdG9tLWNsYXNzJykgY3VzdG9tQ2xhc3MgPSAncHQtNCc7XHJcbiAgQElucHV0KCdkcm9wLXpvbmUtaGVpZ2h0JykgZHJvcFpvbmVIZWlnaHQgPSAnMTInO1xyXG4gIEBJbnB1dCgnZHJvcC16b25lLXdpZHRoJykgZHJvcFpvbmVXaWR0aCA9ICdhdXRvJztcclxuICBASW5wdXQoJ2ltZy1oZWlnaHQnKSBpbWdIZWlnaHQgPSAnNTUnO1xyXG4gIEBJbnB1dCgnaW1nLXdpZHRoJykgaW1nV2lkdGggPSAnJztcclxuICBASW5wdXQoJ2ltZy1zcmMnKSBpbWdTcmMgPSAnJztcclxuICBASW5wdXQoJ2ljb24nKSBpY29uID0gJ3N1a3UtdXBsb2FkLWljb24nO1xyXG4gIEBJbnB1dCgnaWNvbi1pZCcpIGljb25JZCA9ICcnO1xyXG4gIEBJbnB1dCgnaWNvbi1jdXN0b20tY2xhc3MnKSBpY29uQ3VzdG9tQ2xhc3MgPSAnJztcclxuICBASW5wdXQoJ2ZpbGUtaW5wdXQtaWQnKSBmaWxlSW5wdXRJZCA9ICdmaWxlJztcclxuICBASW5wdXQoKXRpdGxlID0gJ1ZlcmlmeSB0aGUgYXV0aGVudGljaXR5IG9mIGEgZG9jdW1lbnQgYnkgdXBsb2FkaW5nIGl0IGhlcmUnO1xyXG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUhvdmVyKGV2ZW50OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzSG92ZXJpbmcgPSBldmVudDtcclxuICAgIGNvbnNvbGUubG9nKCdldmVudCcsIGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHN0YXJ0VXBsb2FkKGV2ZW50OiBGaWxlTGlzdCkge1xyXG4gICAgY29uc3QgbWF4RmlsZVNpemUgPSA5OTk5OTk5O1xyXG4gICAgY29uc3QgZmlsZSA9IGV2ZW50O1xyXG4gICAgaWYgKGV2ZW50Lmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChldmVudFtpXS50eXBlID09ICdpbWFnZS9qcGVnJyB8fCBldmVudFtpXS50eXBlID09ICdpbWFnZS9wbmcnIHx8IGV2ZW50W2ldLnR5cGUgPT0gJ2ltYWdlL2pwZycgfHxcclxuICAgICAgICAgIGV2ZW50W2ldLnR5cGUgPT0gJ2FwcGxpY2F0aW9uL3BkZicpIHtcclxuICAgICAgICAgIGlmIChldmVudFtpXS5zaXplIDw9IG1heEZpbGVTaXplKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdldmVudCcsIGV2ZW50W2ldKTtcclxuICAgICAgICAgICAgY29uc3QgZSA9IGV2ZW50W2ldO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5lbWl0KGUpO1xyXG4gICAgICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUnKSkudmFsdWUgPSAnJztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc25hY2tiYXIoJ1RoZSBmaWxlIHNpemUgY2Fubm90IGV4Y2VlZCAxMCBNQicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNuYWNrYmFyKCdUaGUgZmlsZSB0eXBlIGpwZy9qcGVnL3BuZy9wZGYgZmlsZXMgYXJlIGFsbG93ZWQhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGxvYWQoZSkge1xyXG4gICAgY29uc29sZS5sb2coJ2ZpbGUtdXBsb2FkJyk7XHJcbiAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUnKSkuY2xpY2soKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBzbmFja2Jhcihtc2cpIHtcclxuICAgIHRoaXMuc25hY2tCYXIub3Blbihtc2csICdjbG9zZScsIHtcclxuICAgICAgdmVydGljYWxQb3NpdGlvbjogJ2JvdHRvbScsXHJcbiAgICAgIGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgZHVyYXRpb246IDM1MDBcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=