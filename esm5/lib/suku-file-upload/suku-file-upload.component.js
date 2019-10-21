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
                    template: "<div class=\"col\">\n  <div class=\"col text-center p-0\" [ngClass]=\"{'upload-container': enableContainer}\">\n    <div class=\"text-center col-sm-12 p-4\">\n      <div class=\"dropzone\" dropZone [style.width.rem]=\"dropZoneWidth\" (hovered)=\"toggleHover($event)\"\n        (dropped)=\"startUpload($event)\" [class.hovering]=\"isHovering\" (click)=\"upload($event)\">\n        <h1 class=\" title {{customClass}}\" [style.font-size.rem]=\"titleSize\" [style.font-weight]=\"titleWeight\"\n          [style.color]=\"titleColor\" [id]=\"titleId\">Verify the authenticity of a document by uploading it here</h1>\n        <div class=\"file\">\n          <label class=\"file-label\" [style.height.rem]=\"dropZoneHeight\">\n            <span class=\"file-cta\">\n              <span class=\"file-icon\">\n                <img class=\"mt-5\" *ngIf=\"imgSrc\" [style.height.%]=\"imgHeight\" [style.width.%]=\"imgWidth\"\n                  [src]=\"imgSrc\" />\n                <i class=\"mt-5 {{icon}} {{iconCustomClass}}\" *ngIf=\"icon\" id=\"{{iconId}}\"></i>\n              </span>\n            </span>\n          </label>\n        </div>\n        <input class=\"file-input\" [id]=\"fileInputId\" type=\"file\" (change)=\"startUpload($event.target.files)\">\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.upload-container{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}h1{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-4);font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-word!important;overflow:hidden;text-overflow:ellipsis!important;white-space:normal}.file-wrapper{cursor:pointer;display:inline-block;overflow:hidden;position:relative}.file-wrapper input{cursor:pointer;font-size:100px;-moz-opacity:.01;opacity:.01;position:absolute;right:0;top:0}.file-wrapper .button{border:solid 2px var(--suku-default-border-color);border-radius:28px 76px 63px;color:#000;cursor:pointer;display:inline-block;font-weight:700;margin-right:5px;padding:4px 18px}.dropzone{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;font-weight:200;height:30%;border:2px dashed var(--suku-default-border-color);border-radius:3px;background-color:#eaeaea5e;margin:1rem}.dropzone.hovering{border:2px solid var(--suku-default-border-color)}.dropzone .file-label{position:relative;z-index:2;display:-webkit-box;display:flex}.file-icon{font-size:4em}.file-input{visibility:hidden;z-index:-20!important;pointer-events:none}"]
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
    SukuFileUploadComponent.prototype.action;
    /**
     * @type {?}
     * @private
     */
    SukuFileUploadComponent.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1maWxlLXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1maWxlLXVwbG9hZC9zdWt1LWZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFaEQ7SUF1QkUsaUNBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFoQmQsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDaEMsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUVqQixlQUFVLEdBQUcsV0FBVyxDQUFDO1FBQ3hCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ2pCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQUcsTUFBTSxDQUFDO1FBQzVCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDbEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNoQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2YsU0FBSSxHQUFHLGtCQUFrQixDQUFDO1FBQ3ZCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDRixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUN6QixnQkFBVyxHQUFHLE1BQU0sQ0FBQztRQUNuQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNPLENBQUM7Ozs7SUFFOUMsMENBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksS0FBYztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFB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Q0FBNEM7O0lBQzVDLGlEQUFpRDs7SUFDakQsZ0RBQWlEOztJQUNqRCw0Q0FBc0M7O0lBQ3RDLDJDQUFrQzs7SUFDbEMseUNBQThCOztJQUM5Qix1Q0FBeUM7O0lBQ3pDLHlDQUE4Qjs7SUFDOUIsa0RBQWlEOztJQUNqRCw4Q0FBNkM7O0lBQzdDLHlDQUFzQzs7Ozs7SUFDMUIsMkNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZmlsZS11cGxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1maWxlLXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1RmlsZVVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlzSG92ZXJpbmc7XG4gIEBJbnB1dCgnZW5hYmxlLWNvbnRhaW5lcicpIGVuYWJsZUNvbnRhaW5lciA9IGZhbHNlO1xuICBASW5wdXQoJ3RpdGxlLUlkJykgdGl0bGVJZCA9ICdoZWFkaW5nJztcbiAgQElucHV0KCd0aXRsZS1zaXplJykgdGl0bGVTaXplO1xuICBASW5wdXQoJ3RpdGxlLWNvbG9yJykgdGl0bGVDb2xvciA9ICcjNzQ3NDcwZWInO1xuICBASW5wdXQoJ3RpdGxlLXdlaWdodCcpIHRpdGxlV2VpZ2h0ID0gJzYwMCc7XG4gIEBJbnB1dCgnY3VzdG9tLWNsYXNzJykgY3VzdG9tQ2xhc3MgPSAncHQtNCc7XG4gIEBJbnB1dCgnZHJvcC16b25lLWhlaWdodCcpIGRyb3Bab25lSGVpZ2h0ID0gJzEyJztcbiAgQElucHV0KCdkcm9wLXpvbmUtd2lkdGgnKSBkcm9wWm9uZVdpZHRoID0gJ2F1dG8nO1xuICBASW5wdXQoJ2ltZy1oZWlnaHQnKSBpbWdIZWlnaHQgPSAnNTUnO1xuICBASW5wdXQoJ2ltZy13aWR0aCcpIGltZ1dpZHRoID0gJyc7XG4gIEBJbnB1dCgnaW1nLXNyYycpIGltZ1NyYyA9ICcnO1xuICBASW5wdXQoJ2ljb24nKSBpY29uID0gJ3N1a3UtdXBsb2FkLWljb24nO1xuICBASW5wdXQoJ2ljb24taWQnKSBpY29uSWQgPSAnJztcbiAgQElucHV0KCdpY29uLWN1c3RvbS1jbGFzcycpIGljb25DdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoJ2ZpbGUtaW5wdXQtaWQnKSBmaWxlSW5wdXRJZCA9ICdmaWxlJztcbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgdG9nZ2xlSG92ZXIoZXZlbnQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzSG92ZXJpbmcgPSBldmVudDtcbiAgICBjb25zb2xlLmxvZygnZXZlbnQnLCBldmVudCk7XG4gIH1cblxuICBzdGFydFVwbG9hZChldmVudDogRmlsZUxpc3QpIHtcbiAgICBjb25zdCBtYXhGaWxlU2l6ZSA9IDk5OTk5OTk7XG4gICAgY29uc3QgZmlsZSA9IGV2ZW50O1xuICAgIGlmIChldmVudC5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChldmVudFtpXS50eXBlID09ICdpbWFnZS9qcGVnJyB8fCBldmVudFtpXS50eXBlID09ICdpbWFnZS9wbmcnIHx8IGV2ZW50W2ldLnR5cGUgPT0gJ2ltYWdlL2pwZycgfHxcbiAgICAgICAgICBldmVudFtpXS50eXBlID09ICdhcHBsaWNhdGlvbi9wZGYnKSB7XG4gICAgICAgICAgaWYgKGV2ZW50W2ldLnNpemUgPD0gbWF4RmlsZVNpemUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdldmVudCcsIGV2ZW50W2ldKTtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBldmVudFtpXTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLmVtaXQoZSk7XG4gICAgICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUnKSkudmFsdWUgPSAnJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zbmFja2JhcignVGhlIGZpbGUgc2l6ZSBjYW5ub3QgZXhjZWVkIDEwIE1CJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc25hY2tiYXIoJ1RoZSBmaWxlIHR5cGUganBnL2pwZWcvcG5nL3BkZiBmaWxlcyBhcmUgYWxsb3dlZCEnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwbG9hZChlKSB7XG4gICAgY29uc29sZS5sb2coJ2ZpbGUtdXBsb2FkJyk7XG4gICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJykpLmNsaWNrKCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHNuYWNrYmFyKG1zZykge1xuICAgIHRoaXMuc25hY2tCYXIub3Blbihtc2csICdjbG9zZScsIHtcbiAgICAgIHZlcnRpY2FsUG9zaXRpb246ICdib3R0b20nLFxuICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgZHVyYXRpb246IDM1MDBcbiAgICB9KTtcbiAgfVxufVxuIl19