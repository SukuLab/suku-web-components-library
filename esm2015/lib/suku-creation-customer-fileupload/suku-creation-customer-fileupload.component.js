/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
export class SukuCreationCustomerFileuploadComponent {
    constructor() {
        this.onFileChange = new EventEmitter();
        this.submitData = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log("suku-creation-customer-fileupload");
    }
}
SukuCreationCustomerFileuploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-creation-customer-fileupload',
                template: "<div class=\"col Rectangle-2 d-flex\">\r\n  <div class=\"col p-3\">\r\n    <div class=\"col p-5 col-xs-12 offset-xs-1 noPadding \">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"col flexCol p-0\">\r\n            <div class=\"col-sm-10 pL0 f14 textdev\">\r\n              <span class=\"poppins\">Upload the following Documents:</span>\r\n            </div>\r\n            <div class=\"col-sm-12 pL0 textdev\">\r\n              <p class=\"mB-0 Spring-Cases txtFlow\"> 1. Controller\u2019s Driver\u2019s License:</p>\r\n              <p class=\"mB-0 Spring-Cases txtFlow\"> 2. EIN documentation (IRS-issued SS4 confirmation letter)</p>\r\n            </div>\r\n          </div>  \r\n        </div>\r\n        <div class=\"col mt-3\">\r\n          <div class=\"col flexCol p-0\">\r\n            <div class=\" col-sm-8 offset-sm-2 border-dot rounded-0 bg-light d-flex justify-content-center text-center pT-4 pB-56\">\r\n              <div class=\"col-sm-5 col-xs-4 p-4 \">\r\n                <a onclick=\"document.getElementById('myFileInput').click()\" class=\" fa fa-cloud-upload f60 center-block  pT9 \"\r\n                  id=\"saleTwoUpload\" style=\"width: 100%\"> </a>\r\n                <input type=\"file\" placeholder={{imagepath}} id=\"myFileInput\" accept=\"application/msword,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document\"\r\n                  name=\"uploadDocument\" #fileInput (change)=\"onFileChange.emit($event)\" />\r\n                <input type=\"file\" placeholder={{imagepath}} id=\"myFileInput\" name=\"uploadDocument\" />\r\n                <input type=\"file\" placeholder=\"previewName\" id=\"myFileInput\" accept=\"application/msword,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document\"\r\n                  name=\"uploadDocument\" #fileInput (change)=\"onFileChange.emit($event)\" multiple />\r\n              </div>\r\n              <div class=\"col-sm-8 err_style \" *ngIf=\"showPdfErrorMsg\" id=\"uploadcanExceed\">The file type\r\n                pdf/doc/docx\r\n                files\r\n                are allowed! </div>\r\n              <div class=\"col-sm-8 err_style \" *ngIf=\"showMessage\" id=\"uploadcanExceed\">The file size cannot exceed\r\n                10\r\n                MB</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div class=\"col d-flex justify-content-center mt-4 mb-3  pB40\">\r\n              <button class=\"btn btn-info\" (click)=\"submitData.emit(); \">Agree & Continue</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [".display-2{font-size:5.2rem!important;line-height:1.5!important}.border-dot{border-style:dashed!important;border-color:#6a68689e;border-radius:1px;border-width:2px}.upload{opacity:0;width:277px!important;position:relative;height:120px}.upload:hover{cursor:pointer!important}.upload-icon{position:absolute}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.5rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.disabled{cursor:not-allowed!important}.add{font-family:Poppins,sans-serif!important;font-size:1.7rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px;color:#ccda5c}.add:hover{font-weight:600}"]
            }] }
];
/** @nocollapse */
SukuCreationCustomerFileuploadComponent.ctorParameters = () => [];
SukuCreationCustomerFileuploadComponent.propDecorators = {
    onFileChange: [{ type: Output }],
    submitData: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.imagepath;
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.showMessage;
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.showPdfErrorMsg;
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.onFileChange;
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.submitData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQvc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFReEcsTUFBTSxPQUFPLHVDQUF1QztJQU9sRDtRQUhVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUUxQixDQUFDOzs7O0lBRWpCLFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUNBQW1DO2dCQUM3Qyxvd0ZBQWlFOzthQUVsRTs7Ozs7MkJBS0UsTUFBTTt5QkFDTixNQUFNOzs7O0lBSlAsNERBQVU7O0lBQ1YsOERBQVk7O0lBQ1osa0VBQWdCOztJQUNoQiwrREFBNEM7O0lBQzVDLDZEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBGb3Jtc01vZHVsZSwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtY3JlYXRpb24tY3VzdG9tZXItZmlsZXVwbG9hZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Q3JlYXRpb25DdXN0b21lckZpbGV1cGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbWFnZXBhdGg7XG4gIHNob3dNZXNzYWdlO1xuICBzaG93UGRmRXJyb3JNc2c7XG4gIEBPdXRwdXQoKSBvbkZpbGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzdWJtaXREYXRhID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coXCJzdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWRcIik7XG4gIH1cblxufVxuIl19