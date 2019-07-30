/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuFileUploadComponent {
    constructor() {
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
        console.log('event', event);
        this.action.emit(event);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    upload(e) {
        console.log('file-upload');
        ((/** @type {?} */ (document.getElementById('file')))).click();
    }
}
SukuFileUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-file-upload',
                template: "     <div class=\"col\">\n       <div class=\"col text-center p-0\" [ngClass]=\"{'upload-container': enableContainer}\" (click)=\"upload($event)\">\n         <div class=\"text-center col-sm-12 p-4\">\n           <div class=\"dropzone\" dropZone [style.width.rem]=\"dropZoneWidth\" (hovered)=\"toggleHover($event)\"\n             (dropped)=\"startUpload($event)\" [class.hovering]=\"isHovering\">\n             <h1 class=\" title {{customClass}}\" [style.font-size.rem]=\"titleSize\" [style.font-weight]=\"titleWeight\"\n               [style.color]=\"titleColor\" [id]=\"titleId\">Verify the authenticity of a document by uploading it here</h1>\n             <div class=\"file\">\n               <label class=\"file-label\" [style.height.rem]=\"dropZoneHeight\">\n                 <span class=\"file-cta\">\n                   <span class=\"file-icon\">\n                     <img class=\"mt-5\" [style.height.%]=\"imgHeight\" [style.width.%]=\"imgWidth\" [src]=\"imgSrc\" />\n                   </span>\n                   <span class=\"file-label\">\n                     <input class=\"file-input\" [id]=\"fileInputId\" type=\"file\">\n                   </span>\n                 </span>\n               </label>\n             </div>\n           </div>\n         </div>\n       </div>\n     </div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.upload-container{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}h1{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-4);font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-word!important;overflow:hidden;text-overflow:ellipsis!important;white-space:normal}.file-wrapper{cursor:pointer;display:inline-block;overflow:hidden;position:relative}.file-wrapper input{cursor:pointer;font-size:100px;-moz-opacity:.01;opacity:.01;position:absolute;right:0;top:0}.file-wrapper .button{border:solid 2px var(--suku-default-border-color);border-radius:28px 76px 63px;color:#000;cursor:pointer;display:inline-block;font-size:14px;font-weight:700;margin-right:5px;padding:4px 18px}.dropzone{display:flex;align-items:center;justify-content:center;flex-direction:column;font-weight:200;height:30%;border:2px dashed var(--suku-default-border-color);border-radius:3px;background-color:#eaeaea5e;margin:1rem}.dropzone.hovering{border:2px solid var(--suku-default-border-color)}.dropzone .file-label{font-size:.2rem;position:relative;z-index:10;display:flex}.file-input{visibility:hidden}"]
            }] }
];
/** @nocollapse */
SukuFileUploadComponent.ctorParameters = () => [];
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1maWxlLXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1maWxlLXVwbG9hZC9zdWt1LWZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sdUJBQXVCO0lBZWxDO1FBYjJCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLFlBQU8sR0FBRyxTQUFTLENBQUM7UUFFakIsZUFBVSxHQUFHLFdBQVcsQ0FBQztRQUN4QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixnQkFBVyxHQUFHLE1BQU0sQ0FBQztRQUNqQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN2QixrQkFBYSxHQUFHLE1BQU0sQ0FBQztRQUM1QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDaEIsV0FBTSxHQUFHLG9EQUFvRCxDQUFDO1FBQ3hELGdCQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ25DLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBZTtRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxDQUFDO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixDQUFDLG1CQUFrQixRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFBLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM5RCxDQUFDOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGl5Q0FBZ0Q7O2FBRWpEOzs7Ozs4QkFHRSxLQUFLLFNBQUMsa0JBQWtCO3NCQUN4QixLQUFLLFNBQUMsVUFBVTt3QkFDaEIsS0FBSyxTQUFDLFlBQVk7eUJBQ2xCLEtBQUssU0FBQyxhQUFhOzBCQUNuQixLQUFLLFNBQUMsY0FBYzswQkFDcEIsS0FBSyxTQUFDLGNBQWM7NkJBQ3BCLEtBQUssU0FBQyxrQkFBa0I7NEJBQ3hCLEtBQUssU0FBQyxpQkFBaUI7d0JBQ3ZCLEtBQUssU0FBQyxZQUFZO3VCQUNsQixLQUFLLFNBQUMsV0FBVztxQkFDakIsS0FBSyxTQUFDLFNBQVM7MEJBQ2YsS0FBSyxTQUFDLGVBQWU7cUJBQ3JCLE1BQU07Ozs7SUFiUCw2Q0FBVzs7SUFDWCxrREFBbUQ7O0lBQ25ELDBDQUF1Qzs7SUFDdkMsNENBQStCOztJQUMvQiw2Q0FBK0M7O0lBQy9DLDhDQUEyQzs7SUFDM0MsOENBQTRDOztJQUM1QyxpREFBaUQ7O0lBQ2pELGdEQUFpRDs7SUFDakQsNENBQXNDOztJQUN0QywyQ0FBa0M7O0lBQ2xDLHlDQUFnRjs7SUFDaEYsOENBQTZDOztJQUM3Qyx5Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZmlsZS11cGxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1maWxlLXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1RmlsZVVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlzSG92ZXJpbmc7XG4gIEBJbnB1dCgnZW5hYmxlLWNvbnRhaW5lcicpIGVuYWJsZUNvbnRhaW5lciA9IGZhbHNlO1xuICBASW5wdXQoJ3RpdGxlLUlkJykgdGl0bGVJZCA9ICdoZWFkaW5nJztcbiAgQElucHV0KCd0aXRsZS1zaXplJykgdGl0bGVTaXplO1xuICBASW5wdXQoJ3RpdGxlLWNvbG9yJykgdGl0bGVDb2xvciA9ICcjNzQ3NDcwZWInO1xuICBASW5wdXQoJ3RpdGxlLXdlaWdodCcpIHRpdGxlV2VpZ2h0ID0gJzYwMCc7XG4gIEBJbnB1dCgnY3VzdG9tLWNsYXNzJykgY3VzdG9tQ2xhc3MgPSAncHQtNCc7XG4gIEBJbnB1dCgnZHJvcC16b25lLWhlaWdodCcpIGRyb3Bab25lSGVpZ2h0ID0gJzEyJztcbiAgQElucHV0KCdkcm9wLXpvbmUtd2lkdGgnKSBkcm9wWm9uZVdpZHRoID0gJ2F1dG8nO1xuICBASW5wdXQoJ2ltZy1oZWlnaHQnKSBpbWdIZWlnaHQgPSAnNTUnO1xuICBASW5wdXQoJ2ltZy13aWR0aCcpIGltZ1dpZHRoID0gJyc7XG4gIEBJbnB1dCgnaW1nLXNyYycpIGltZ1NyYyA9ICcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NtYXJ0cmFjLXVwbG9hZC1pY29uLnBuZyc7XG4gIEBJbnB1dCgnZmlsZS1pbnB1dC1pZCcpIGZpbGVJbnB1dElkID0gJ2ZpbGUnO1xuICBAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgdG9nZ2xlSG92ZXIoZXZlbnQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzSG92ZXJpbmcgPSBldmVudDtcbiAgICBjb25zb2xlLmxvZygnZXZlbnQnLCBldmVudCk7XG4gIH1cblxuICBzdGFydFVwbG9hZChldmVudDogRmlsZUxpc3QpIHtcbiAgICBjb25zb2xlLmxvZygnZXZlbnQnLCBldmVudCk7XG4gICAgdGhpcy5hY3Rpb24uZW1pdChldmVudCk7XG4gIH1cblxuICB1cGxvYWQoZSkge1xuICAgIGNvbnNvbGUubG9nKCdmaWxlLXVwbG9hZCcpO1xuICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpKS5jbGljaygpO1xuICB9XG59XG4iXX0=