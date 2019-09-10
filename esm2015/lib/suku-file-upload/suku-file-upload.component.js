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
                template: "<div class=\"col\">\n  <div class=\"col text-center p-0\" [ngClass]=\"{'upload-container': enableContainer}\">\n    <div class=\"text-center col-sm-12 p-4\">\n      <div class=\"dropzone\" dropZone [style.width.rem]=\"dropZoneWidth\" (hovered)=\"toggleHover($event)\"\n        (dropped)=\"startUpload($event)\" [class.hovering]=\"isHovering\" (click)=\"upload($event)\">\n        <h1 class=\" title {{customClass}}\" [style.font-size.rem]=\"titleSize\" [style.font-weight]=\"titleWeight\"\n          [style.color]=\"titleColor\" [id]=\"titleId\">Verify the authenticity of a document by uploading it here</h1>\n        <div class=\"file\">\n          <label class=\"file-label\" [style.height.rem]=\"dropZoneHeight\">\n            <span class=\"file-cta\">\n              <span class=\"file-icon\">\n                <img class=\"mt-5\" *ngIf=\"imgSrc\" [style.height.%]=\"imgHeight\" [style.width.%]=\"imgWidth\"\n                  [src]=\"imgSrc\" />\n                <i class=\"mt-5 {{icon}} {{iconCustomClass}}\" *ngIf=\"icon\" id=\"{{iconId}}\"></i>\n              </span>\n            </span>\n          </label>\n        </div>\n        <input class=\"file-input\" [id]=\"fileInputId\" type=\"file\" (change)=\"startUpload($event.target.files)\">\n      </div>\n    </div>\n  </div>\n</div>",
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
    SukuFileUploadComponent.prototype.action;
    /**
     * @type {?}
     * @private
     */
    SukuFileUploadComponent.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1maWxlLXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1maWxlLXVwbG9hZC9zdWt1LWZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPaEQsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQWtCbEMsWUFBb0IsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQWhCZCxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUNoQyxZQUFPLEdBQUcsU0FBUyxDQUFDO1FBRWpCLGVBQVUsR0FBRyxXQUFXLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxNQUFNLENBQUM7UUFDakIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdkIsa0JBQWEsR0FBRyxNQUFNLENBQUM7UUFDNUIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNsQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDZixTQUFJLEdBQUcsa0JBQWtCLENBQUM7UUFDdkIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNGLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLGdCQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ25DLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ08sQ0FBQzs7OztJQUU5QyxRQUFRO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8s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LHlDQUE4Qjs7SUFDOUIsdUNBQXlDOztJQUN6Qyx5Q0FBOEI7O0lBQzlCLGtEQUFpRDs7SUFDakQsOENBQTZDOztJQUM3Qyx5Q0FBc0M7Ozs7O0lBQzFCLDJDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWZpbGUtdXBsb2FkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZmlsZS11cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUZpbGVVcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc0hvdmVyaW5nO1xuICBASW5wdXQoJ2VuYWJsZS1jb250YWluZXInKSBlbmFibGVDb250YWluZXIgPSBmYWxzZTtcbiAgQElucHV0KCd0aXRsZS1JZCcpIHRpdGxlSWQgPSAnaGVhZGluZyc7XG4gIEBJbnB1dCgndGl0bGUtc2l6ZScpIHRpdGxlU2l6ZTtcbiAgQElucHV0KCd0aXRsZS1jb2xvcicpIHRpdGxlQ29sb3IgPSAnIzc0NzQ3MGViJztcbiAgQElucHV0KCd0aXRsZS13ZWlnaHQnKSB0aXRsZVdlaWdodCA9ICc2MDAnO1xuICBASW5wdXQoJ2N1c3RvbS1jbGFzcycpIGN1c3RvbUNsYXNzID0gJ3B0LTQnO1xuICBASW5wdXQoJ2Ryb3Atem9uZS1oZWlnaHQnKSBkcm9wWm9uZUhlaWdodCA9ICcxMic7XG4gIEBJbnB1dCgnZHJvcC16b25lLXdpZHRoJykgZHJvcFpvbmVXaWR0aCA9ICdhdXRvJztcbiAgQElucHV0KCdpbWctaGVpZ2h0JykgaW1nSGVpZ2h0ID0gJzU1JztcbiAgQElucHV0KCdpbWctd2lkdGgnKSBpbWdXaWR0aCA9ICcnO1xuICBASW5wdXQoJ2ltZy1zcmMnKSBpbWdTcmMgPSAnJztcbiAgQElucHV0KCdpY29uJykgaWNvbiA9ICdzdWt1LXVwbG9hZC1pY29uJztcbiAgQElucHV0KCdpY29uLWlkJykgaWNvbklkID0gJyc7XG4gIEBJbnB1dCgnaWNvbi1jdXN0b20tY2xhc3MnKSBpY29uQ3VzdG9tQ2xhc3MgPSAnJztcbiAgQElucHV0KCdmaWxlLWlucHV0LWlkJykgZmlsZUlucHV0SWQgPSAnZmlsZSc7XG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHRvZ2dsZUhvdmVyKGV2ZW50OiBib29sZWFuKSB7XG4gICAgdGhpcy5pc0hvdmVyaW5nID0gZXZlbnQ7XG4gICAgY29uc29sZS5sb2coJ2V2ZW50JywgZXZlbnQpO1xuICB9XG5cbiAgc3RhcnRVcGxvYWQoZXZlbnQ6IEZpbGVMaXN0KSB7XG4gICAgY29uc3QgbWF4RmlsZVNpemUgPSA5OTk5OTk5O1xuICAgIGNvbnN0IGZpbGUgPSBldmVudDtcbiAgICBpZiAoZXZlbnQubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZXZlbnRbaV0udHlwZSA9PSAnaW1hZ2UvanBlZycgfHwgZXZlbnRbaV0udHlwZSA9PSAnaW1hZ2UvcG5nJyB8fCBldmVudFtpXS50eXBlID09ICdpbWFnZS9qcGcnIHx8XG4gICAgICAgICAgZXZlbnRbaV0udHlwZSA9PSAnYXBwbGljYXRpb24vcGRmJykge1xuICAgICAgICAgIGlmIChldmVudFtpXS5zaXplIDw9IG1heEZpbGVTaXplKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXZlbnQnLCBldmVudFtpXSk7XG4gICAgICAgICAgICBjb25zdCBlID0gZXZlbnRbaV07XG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5lbWl0KGUpO1xuICAgICAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJykpLnZhbHVlID0gJyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc25hY2tiYXIoJ1RoZSBmaWxlIHNpemUgY2Fubm90IGV4Y2VlZCAxMCBNQicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNuYWNrYmFyKCdUaGUgZmlsZSB0eXBlIGpwZy9qcGVnL3BuZy9wZGYgZmlsZXMgYXJlIGFsbG93ZWQhJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGxvYWQoZSkge1xuICAgIGNvbnNvbGUubG9nKCdmaWxlLXVwbG9hZCcpO1xuICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpKS5jbGljaygpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBzbmFja2Jhcihtc2cpIHtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW4obXNnLCAnY2xvc2UnLCB7XG4gICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgIGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgIGR1cmF0aW9uOiAzNTAwXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==