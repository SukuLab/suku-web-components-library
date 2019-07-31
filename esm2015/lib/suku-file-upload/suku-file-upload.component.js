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
        this.imgSrc = '../../../../assets/images/smartrac-upload-icon.png';
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
                template: "     <div class=\"col\">\n       <div class=\"col text-center p-0\" [ngClass]=\"{'upload-container': enableContainer}\" >\n         <div class=\"text-center col-sm-12 p-4\">\n           <div class=\"dropzone\" dropZone [style.width.rem]=\"dropZoneWidth\" (hovered)=\"toggleHover($event)\"\n             (dropped)=\"startUpload($event)\" [class.hovering]=\"isHovering\" (click)=\"upload($event)\">\n             <h1 class=\" title {{customClass}}\" [style.font-size.rem]=\"titleSize\" [style.font-weight]=\"titleWeight\"\n               [style.color]=\"titleColor\" [id]=\"titleId\">Verify the authenticity of a document by uploading it here</h1>\n             <div class=\"file\">\n               <label class=\"file-label\" [style.height.rem]=\"dropZoneHeight\">\n                 <span class=\"file-cta\">\n                   <span class=\"file-icon\">\n                     <img class=\"mt-5\" [style.height.%]=\"imgHeight\" [style.width.%]=\"imgWidth\" [src]=\"imgSrc\" />\n                    </span>\n                  </span>\n                </label>\n              </div>\n              <input class=\"file-input\" [id]=\"fileInputId\" type=\"file\" (change)=\"startUpload($event.target.files)\">\n            </div>\n          </div>\n        </div>\n      </div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.upload-container{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}h1{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-4);font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-word!important;overflow:hidden;text-overflow:ellipsis!important;white-space:normal}.file-wrapper{cursor:pointer;display:inline-block;overflow:hidden;position:relative}.file-wrapper input{cursor:pointer;font-size:100px;-moz-opacity:.01;opacity:.01;position:absolute;right:0;top:0}.file-wrapper .button{border:solid 2px var(--suku-default-border-color);border-radius:28px 76px 63px;color:#000;cursor:pointer;display:inline-block;font-size:14px;font-weight:700;margin-right:5px;padding:4px 18px}.dropzone{display:flex;align-items:center;justify-content:center;flex-direction:column;font-weight:200;height:30%;border:2px dashed var(--suku-default-border-color);border-radius:3px;background-color:#eaeaea5e;margin:1rem}.dropzone.hovering{border:2px solid var(--suku-default-border-color)}.dropzone .file-label{font-size:.2rem;position:relative;z-index:2;display:flex}.file-input{visibility:hidden;z-index:-20!important;pointer-events:none}"]
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
    SukuFileUploadComponent.prototype.fileInputId;
    /** @type {?} */
    SukuFileUploadComponent.prototype.action;
    /**
     * @type {?}
     * @private
     */
    SukuFileUploadComponent.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1maWxlLXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1maWxlLXVwbG9hZC9zdWt1LWZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPaEQsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQWVsQyxZQUFvQixRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBYmQsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDaEMsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUVqQixlQUFVLEdBQUcsV0FBVyxDQUFDO1FBQ3hCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ2pCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQUcsTUFBTSxDQUFDO1FBQzVCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDbEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNoQixXQUFNLEdBQUcsb0RBQW9ELENBQUM7UUFDeEQsZ0JBQVcsR0FBRyxNQUFNLENBQUM7UUFDbkMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDTyxDQUFDOzs7O0lBRTlDLFFBQVE7SUFDUixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxLQUFjO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQWU7O2NBQ25CLFdBQVcsR0FBRyxPQUFPOztjQUNyQixJQUFJLEdBQUcsS0FBSztRQUNsQixJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNyQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksWUFBWSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksV0FBVyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksV0FBVztvQkFDakcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxpQkFBaUIsRUFBRTtvQkFDbEMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLFdBQVcsRUFBRTt3QkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7OzhCQUN6QixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3JCO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsbUNBQW1DLENBQUMsQ0FBQztxQkFDcEQ7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO2lCQUNwRTthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxDQUFDO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixDQUFDLG1CQUFrQixRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFBLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1RCxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsR0FBRztRQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUU7WUFDL0IsZ0JBQWdCLEVBQUUsUUFBUTtZQUMxQixrQkFBa0IsRUFBRSxPQUFPO1lBQzNCLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBL0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qixxd0NBQWdEOzthQUVqRDs7OztZQU5RLFdBQVc7Ozs4QkFTakIsS0FBSyxTQUFDLGtCQUFrQjtzQkFDeEIsS0FBSyxTQUFDLFVBQVU7d0JBQ2hCLEtBQUssU0FBQyxZQUFZO3lCQUNsQixLQUFLLFNBQUMsYUFBYTswQkFDbkIsS0FBSyxTQUFDLGNBQWM7MEJBQ3BCLEtBQUssU0FBQyxjQUFjOzZCQUNwQixLQUFLLFNBQUMsa0JBQWtCOzRCQUN4QixLQUFLLFNBQUMsaUJBQWlCO3dCQUN2QixLQUFLLFNBQUMsWUFBWTt1QkFDbEIsS0FBSyxTQUFDLFdBQVc7cUJBQ2pCLEtBQUssU0FBQyxTQUFTOzBCQUNmLEtBQUssU0FBQyxlQUFlO3FCQUNyQixNQUFNOzs7O0lBYlAsNkNBQVc7O0lBQ1gsa0RBQW1EOztJQUNuRCwwQ0FBdUM7O0lBQ3ZDLDRDQUErQjs7SUFDL0IsNkNBQStDOztJQUMvQyw4Q0FBMkM7O0lBQzNDLDhDQUE0Qzs7SUFDNUMsaURBQWlEOztJQUNqRCxnREFBaUQ7O0lBQ2pELDRDQUFzQzs7SUFDdEMsMkNBQWtDOztJQUNsQyx5Q0FBZ0Y7O0lBQ2hGLDhDQUE2Qzs7SUFDN0MseUNBQXNDOzs7OztJQUMxQiwyQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1maWxlLXVwbG9hZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWZpbGUtdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VGaWxlVXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXNIb3ZlcmluZztcbiAgQElucHV0KCdlbmFibGUtY29udGFpbmVyJykgZW5hYmxlQ29udGFpbmVyID0gZmFsc2U7XG4gIEBJbnB1dCgndGl0bGUtSWQnKSB0aXRsZUlkID0gJ2hlYWRpbmcnO1xuICBASW5wdXQoJ3RpdGxlLXNpemUnKSB0aXRsZVNpemU7XG4gIEBJbnB1dCgndGl0bGUtY29sb3InKSB0aXRsZUNvbG9yID0gJyM3NDc0NzBlYic7XG4gIEBJbnB1dCgndGl0bGUtd2VpZ2h0JykgdGl0bGVXZWlnaHQgPSAnNjAwJztcbiAgQElucHV0KCdjdXN0b20tY2xhc3MnKSBjdXN0b21DbGFzcyA9ICdwdC00JztcbiAgQElucHV0KCdkcm9wLXpvbmUtaGVpZ2h0JykgZHJvcFpvbmVIZWlnaHQgPSAnMTInO1xuICBASW5wdXQoJ2Ryb3Atem9uZS13aWR0aCcpIGRyb3Bab25lV2lkdGggPSAnYXV0byc7XG4gIEBJbnB1dCgnaW1nLWhlaWdodCcpIGltZ0hlaWdodCA9ICc1NSc7XG4gIEBJbnB1dCgnaW1nLXdpZHRoJykgaW1nV2lkdGggPSAnJztcbiAgQElucHV0KCdpbWctc3JjJykgaW1nU3JjID0gJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc21hcnRyYWMtdXBsb2FkLWljb24ucG5nJztcbiAgQElucHV0KCdmaWxlLWlucHV0LWlkJykgZmlsZUlucHV0SWQgPSAnZmlsZSc7XG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHRvZ2dsZUhvdmVyKGV2ZW50OiBib29sZWFuKSB7XG4gICAgdGhpcy5pc0hvdmVyaW5nID0gZXZlbnQ7XG4gICAgY29uc29sZS5sb2coJ2V2ZW50JywgZXZlbnQpO1xuICB9XG5cbiAgc3RhcnRVcGxvYWQoZXZlbnQ6IEZpbGVMaXN0KSB7XG4gICAgY29uc3QgbWF4RmlsZVNpemUgPSA5OTk5OTk5O1xuICAgIGNvbnN0IGZpbGUgPSBldmVudDtcbiAgICBpZiAoZXZlbnQubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZXZlbnRbaV0udHlwZSA9PSAnaW1hZ2UvanBlZycgfHwgZXZlbnRbaV0udHlwZSA9PSAnaW1hZ2UvcG5nJyB8fCBldmVudFtpXS50eXBlID09ICdpbWFnZS9qcGcnIHx8XG4gICAgICAgIGV2ZW50W2ldLnR5cGUgPT0gJ2FwcGxpY2F0aW9uL3BkZicpIHtcbiAgICAgICAgICBpZiAoZXZlbnRbaV0uc2l6ZSA8PSBtYXhGaWxlU2l6ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2V2ZW50JywgZXZlbnRbaV0pO1xuICAgICAgICAgICAgY29uc3QgZSA9IGV2ZW50W2ldO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24uZW1pdChlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zbmFja2JhcignVGhlIGZpbGUgc2l6ZSBjYW5ub3QgZXhjZWVkIDEwIE1CJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc25hY2tiYXIoJ1RoZSBmaWxlIHR5cGUganBnL2pwZWcvcG5nL3BkZiBmaWxlcyBhcmUgYWxsb3dlZCEnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwbG9hZChlKSB7XG4gICAgY29uc29sZS5sb2coJ2ZpbGUtdXBsb2FkJyk7XG4gICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJykpLmNsaWNrKCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHNuYWNrYmFyKG1zZykge1xuICAgIHRoaXMuc25hY2tCYXIub3Blbihtc2csICdjbG9zZScsIHtcbiAgICAgIHZlcnRpY2FsUG9zaXRpb246ICdib3R0b20nLFxuICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgZHVyYXRpb246IDM1MDBcbiAgICB9KTtcbiAgfVxufVxuIl19