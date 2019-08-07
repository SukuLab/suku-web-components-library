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
        this.imgSrc = '../../../../assets/images/smartrac-upload-icon.png';
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
                    template: "     <div class=\"col\">\n       <div class=\"col text-center p-0\" [ngClass]=\"{'upload-container': enableContainer}\" >\n         <div class=\"text-center col-sm-12 p-4\">\n           <div class=\"dropzone\" dropZone [style.width.rem]=\"dropZoneWidth\" (hovered)=\"toggleHover($event)\"\n             (dropped)=\"startUpload($event)\" [class.hovering]=\"isHovering\" (click)=\"upload($event)\">\n             <h1 class=\" title {{customClass}}\" [style.font-size.rem]=\"titleSize\" [style.font-weight]=\"titleWeight\"\n               [style.color]=\"titleColor\" [id]=\"titleId\">Verify the authenticity of a document by uploading it here</h1>\n             <div class=\"file\">\n               <label class=\"file-label\" [style.height.rem]=\"dropZoneHeight\">\n                 <span class=\"file-cta\">\n                   <span class=\"file-icon\">\n                     <img class=\"mt-5\" [style.height.%]=\"imgHeight\" [style.width.%]=\"imgWidth\" [src]=\"imgSrc\" />\n                    </span>\n                  </span>\n                </label>\n              </div>\n              <input class=\"file-input\" [id]=\"fileInputId\" type=\"file\" (change)=\"startUpload($event.target.files)\">\n            </div>\n          </div>\n        </div>\n      </div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.upload-container{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}h1{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-4);font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-word!important;overflow:hidden;text-overflow:ellipsis!important;white-space:normal}.file-wrapper{cursor:pointer;display:inline-block;overflow:hidden;position:relative}.file-wrapper input{cursor:pointer;font-size:100px;-moz-opacity:.01;opacity:.01;position:absolute;right:0;top:0}.file-wrapper .button{border:solid 2px var(--suku-default-border-color);border-radius:28px 76px 63px;color:#000;cursor:pointer;display:inline-block;font-size:14px;font-weight:700;margin-right:5px;padding:4px 18px}.dropzone{display:flex;align-items:center;justify-content:center;flex-direction:column;font-weight:200;height:30%;border:2px dashed var(--suku-default-border-color);border-radius:3px;background-color:#eaeaea5e;margin:1rem}.dropzone.hovering{border:2px solid var(--suku-default-border-color)}.dropzone .file-label{font-size:.2rem;position:relative;z-index:2;display:flex}.file-input{visibility:hidden;z-index:-20!important;pointer-events:none}"]
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
    SukuFileUploadComponent.prototype.fileInputId;
    /** @type {?} */
    SukuFileUploadComponent.prototype.action;
    /**
     * @type {?}
     * @private
     */
    SukuFileUploadComponent.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1maWxlLXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1maWxlLXVwbG9hZC9zdWt1LWZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFaEQ7SUFvQkUsaUNBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFiZCxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUNoQyxZQUFPLEdBQUcsU0FBUyxDQUFDO1FBRWpCLGVBQVUsR0FBRyxXQUFXLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxNQUFNLENBQUM7UUFDakIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdkIsa0JBQWEsR0FBRyxNQUFNLENBQUM7UUFDNUIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNsQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxvREFBb0QsQ0FBQztRQUN4RCxnQkFBVyxHQUFHLE1BQU0sQ0FBQztRQUNuQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNPLENBQUM7Ozs7SUFFOUMsMENBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksS0FBYztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELDZDQUFXOzs7O0lBQVgsVUFBWSxLQUFlOztZQUNuQixXQUFXLEdBQUcs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b3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZmlsZS11cGxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1maWxlLXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1RmlsZVVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlzSG92ZXJpbmc7XG4gIEBJbnB1dCgnZW5hYmxlLWNvbnRhaW5lcicpIGVuYWJsZUNvbnRhaW5lciA9IGZhbHNlO1xuICBASW5wdXQoJ3RpdGxlLUlkJykgdGl0bGVJZCA9ICdoZWFkaW5nJztcbiAgQElucHV0KCd0aXRsZS1zaXplJykgdGl0bGVTaXplO1xuICBASW5wdXQoJ3RpdGxlLWNvbG9yJykgdGl0bGVDb2xvciA9ICcjNzQ3NDcwZWInO1xuICBASW5wdXQoJ3RpdGxlLXdlaWdodCcpIHRpdGxlV2VpZ2h0ID0gJzYwMCc7XG4gIEBJbnB1dCgnY3VzdG9tLWNsYXNzJykgY3VzdG9tQ2xhc3MgPSAncHQtNCc7XG4gIEBJbnB1dCgnZHJvcC16b25lLWhlaWdodCcpIGRyb3Bab25lSGVpZ2h0ID0gJzEyJztcbiAgQElucHV0KCdkcm9wLXpvbmUtd2lkdGgnKSBkcm9wWm9uZVdpZHRoID0gJ2F1dG8nO1xuICBASW5wdXQoJ2ltZy1oZWlnaHQnKSBpbWdIZWlnaHQgPSAnNTUnO1xuICBASW5wdXQoJ2ltZy13aWR0aCcpIGltZ1dpZHRoID0gJyc7XG4gIEBJbnB1dCgnaW1nLXNyYycpIGltZ1NyYyA9ICcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NtYXJ0cmFjLXVwbG9hZC1pY29uLnBuZyc7XG4gIEBJbnB1dCgnZmlsZS1pbnB1dC1pZCcpIGZpbGVJbnB1dElkID0gJ2ZpbGUnO1xuICBAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICB0b2dnbGVIb3ZlcihldmVudDogYm9vbGVhbikge1xuICAgIHRoaXMuaXNIb3ZlcmluZyA9IGV2ZW50O1xuICAgIGNvbnNvbGUubG9nKCdldmVudCcsIGV2ZW50KTtcbiAgfVxuXG4gIHN0YXJ0VXBsb2FkKGV2ZW50OiBGaWxlTGlzdCkge1xuICAgIGNvbnN0IG1heEZpbGVTaXplID0gOTk5OTk5OTtcbiAgICBjb25zdCBmaWxlID0gZXZlbnQ7XG4gICAgaWYgKGV2ZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGV2ZW50W2ldLnR5cGUgPT0gJ2ltYWdlL2pwZWcnIHx8IGV2ZW50W2ldLnR5cGUgPT0gJ2ltYWdlL3BuZycgfHwgZXZlbnRbaV0udHlwZSA9PSAnaW1hZ2UvanBnJyB8fFxuICAgICAgICAgIGV2ZW50W2ldLnR5cGUgPT0gJ2FwcGxpY2F0aW9uL3BkZicpIHtcbiAgICAgICAgICBpZiAoZXZlbnRbaV0uc2l6ZSA8PSBtYXhGaWxlU2l6ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2V2ZW50JywgZXZlbnRbaV0pO1xuICAgICAgICAgICAgY29uc3QgZSA9IGV2ZW50W2ldO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24uZW1pdChlKTtcbiAgICAgICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpKS52YWx1ZSA9ICcnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNuYWNrYmFyKCdUaGUgZmlsZSBzaXplIGNhbm5vdCBleGNlZWQgMTAgTUInKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zbmFja2JhcignVGhlIGZpbGUgdHlwZSBqcGcvanBlZy9wbmcvcGRmIGZpbGVzIGFyZSBhbGxvd2VkIScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBsb2FkKGUpIHtcbiAgICBjb25zb2xlLmxvZygnZmlsZS11cGxvYWQnKTtcbiAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUnKSkuY2xpY2soKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgc25hY2tiYXIobXNnKSB7XG4gICAgdGhpcy5zbmFja0Jhci5vcGVuKG1zZywgJ2Nsb3NlJywge1xuICAgICAgdmVydGljYWxQb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICBob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCcsXG4gICAgICBkdXJhdGlvbjogMzUwMFxuICAgIH0pO1xuICB9XG59XG4iXX0=