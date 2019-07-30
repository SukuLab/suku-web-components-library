/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuFileUploadComponent = /** @class */ (function () {
    function SukuFileUploadComponent() {
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
        console.log('event', event);
        this.action.emit(event);
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
    };
    SukuFileUploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-file-upload',
                    template: "     <div class=\"col\">\n       <div class=\"col text-center p-0\" [ngClass]=\"{'upload-container': enableContainer}\" (click)=\"upload($event)\">\n         <div class=\"text-center col-sm-12 p-4\">\n           <div class=\"dropzone\" dropZone [style.width.rem]=\"dropZoneWidth\" (hovered)=\"toggleHover($event)\"\n             (dropped)=\"startUpload($event)\" [class.hovering]=\"isHovering\">\n             <h1 class=\" title {{customClass}}\" [style.font-size.rem]=\"titleSize\" [style.font-weight]=\"titleWeight\"\n               [style.color]=\"titleColor\" [id]=\"titleId\">Verify the authenticity of a document by uploading it here</h1>\n             <div class=\"file\">\n               <label class=\"file-label\" [style.height.rem]=\"dropZoneHeight\">\n                 <span class=\"file-cta\">\n                   <span class=\"file-icon\">\n                     <img class=\"mt-5\" [style.height.%]=\"imgHeight\" [style.width.%]=\"imgWidth\" [src]=\"imgSrc\" />\n                   </span>\n                   <span class=\"file-label\">\n                     <input class=\"file-input\" [id]=\"fileInputId\" type=\"file\">\n                   </span>\n                 </span>\n               </label>\n             </div>\n           </div>\n         </div>\n       </div>\n     </div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.upload-container{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}h1{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-4);font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-word!important;overflow:hidden;text-overflow:ellipsis!important;white-space:normal}.file-wrapper{cursor:pointer;display:inline-block;overflow:hidden;position:relative}.file-wrapper input{cursor:pointer;font-size:100px;-moz-opacity:.01;opacity:.01;position:absolute;right:0;top:0}.file-wrapper .button{border:solid 2px var(--suku-default-border-color);border-radius:28px 76px 63px;color:#000;cursor:pointer;display:inline-block;font-size:14px;font-weight:700;margin-right:5px;padding:4px 18px}.dropzone{display:flex;align-items:center;justify-content:center;flex-direction:column;font-weight:200;height:30%;border:2px dashed var(--suku-default-border-color);border-radius:3px;background-color:#eaeaea5e;margin:1rem}.dropzone.hovering{border:2px solid var(--suku-default-border-color)}.dropzone .file-label{font-size:.2rem;position:relative;z-index:10;display:flex}.file-input{visibility:hidden}"]
                }] }
    ];
    /** @nocollapse */
    SukuFileUploadComponent.ctorParameters = function () { return []; };
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1maWxlLXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1maWxlLXVwbG9hZC9zdWt1LWZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQW9CRTtRQWIyQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUNoQyxZQUFPLEdBQUcsU0FBUyxDQUFDO1FBRWpCLGVBQVUsR0FBRyxXQUFXLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxNQUFNLENBQUM7UUFDakIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdkIsa0JBQWEsR0FBRyxNQUFNLENBQUM7UUFDNUIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNsQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxvREFBb0QsQ0FBQztRQUN4RCxnQkFBVyxHQUFHLE1BQU0sQ0FBQztRQUNuQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRWpCLDBDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksS0FBZTtRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELHdDQUFNOzs7O0lBQU4sVUFBTyxDQUFDO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixDQUFDLG1CQUFrQixRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFBLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM5RCxDQUFDOztnQkF0Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGl5Q0FBZ0Q7O2lCQUVqRDs7Ozs7a0NBR0UsS0FBSyxTQUFDLGtCQUFrQjswQkFDeEIsS0FBSyxTQUFDLFVBQVU7NEJBQ2hCLEtBQUssU0FBQyxZQUFZOzZCQUNsQixLQUFLLFNBQUMsYUFBYTs4QkFDbkIsS0FBSyxTQUFDLGNBQWM7OEJBQ3BCLEtBQUssU0FBQyxjQUFjO2lDQUNwQixLQUFLLFNBQUMsa0JBQWtCO2dDQUN4QixLQUFLLFNBQUMsaUJBQWlCOzRCQUN2QixLQUFLLFNBQUMsWUFBWTsyQkFDbEIsS0FBSyxTQUFDLFdBQVc7eUJBQ2pCLEtBQUssU0FBQyxTQUFTOzhCQUNmLEtBQUssU0FBQyxlQUFlO3lCQUNyQixNQUFNOztJQW9CVCw4QkFBQztDQUFBLEFBdkNELElBdUNDO1NBbENZLHVCQUF1Qjs7O0lBQ2xDLDZDQUFXOztJQUNYLGtEQUFtRDs7SUFDbkQsMENBQXVDOztJQUN2Qyw0Q0FBK0I7O0lBQy9CLDZDQUErQzs7SUFDL0MsOENBQTJDOztJQUMzQyw4Q0FBNEM7O0lBQzVDLGlEQUFpRDs7SUFDakQsZ0RBQWlEOztJQUNqRCw0Q0FBc0M7O0lBQ3RDLDJDQUFrQzs7SUFDbEMseUNBQWdGOztJQUNoRiw4Q0FBNkM7O0lBQzdDLHlDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1maWxlLXVwbG9hZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWZpbGUtdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VGaWxlVXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXNIb3ZlcmluZztcbiAgQElucHV0KCdlbmFibGUtY29udGFpbmVyJykgZW5hYmxlQ29udGFpbmVyID0gZmFsc2U7XG4gIEBJbnB1dCgndGl0bGUtSWQnKSB0aXRsZUlkID0gJ2hlYWRpbmcnO1xuICBASW5wdXQoJ3RpdGxlLXNpemUnKSB0aXRsZVNpemU7XG4gIEBJbnB1dCgndGl0bGUtY29sb3InKSB0aXRsZUNvbG9yID0gJyM3NDc0NzBlYic7XG4gIEBJbnB1dCgndGl0bGUtd2VpZ2h0JykgdGl0bGVXZWlnaHQgPSAnNjAwJztcbiAgQElucHV0KCdjdXN0b20tY2xhc3MnKSBjdXN0b21DbGFzcyA9ICdwdC00JztcbiAgQElucHV0KCdkcm9wLXpvbmUtaGVpZ2h0JykgZHJvcFpvbmVIZWlnaHQgPSAnMTInO1xuICBASW5wdXQoJ2Ryb3Atem9uZS13aWR0aCcpIGRyb3Bab25lV2lkdGggPSAnYXV0byc7XG4gIEBJbnB1dCgnaW1nLWhlaWdodCcpIGltZ0hlaWdodCA9ICc1NSc7XG4gIEBJbnB1dCgnaW1nLXdpZHRoJykgaW1nV2lkdGggPSAnJztcbiAgQElucHV0KCdpbWctc3JjJykgaW1nU3JjID0gJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc21hcnRyYWMtdXBsb2FkLWljb24ucG5nJztcbiAgQElucHV0KCdmaWxlLWlucHV0LWlkJykgZmlsZUlucHV0SWQgPSAnZmlsZSc7XG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICB0b2dnbGVIb3ZlcihldmVudDogYm9vbGVhbikge1xuICAgIHRoaXMuaXNIb3ZlcmluZyA9IGV2ZW50O1xuICAgIGNvbnNvbGUubG9nKCdldmVudCcsIGV2ZW50KTtcbiAgfVxuXG4gIHN0YXJ0VXBsb2FkKGV2ZW50OiBGaWxlTGlzdCkge1xuICAgIGNvbnNvbGUubG9nKCdldmVudCcsIGV2ZW50KTtcbiAgICB0aGlzLmFjdGlvbi5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHVwbG9hZChlKSB7XG4gICAgY29uc29sZS5sb2coJ2ZpbGUtdXBsb2FkJyk7XG4gICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJykpLmNsaWNrKCk7XG4gIH1cbn1cbiJdfQ==