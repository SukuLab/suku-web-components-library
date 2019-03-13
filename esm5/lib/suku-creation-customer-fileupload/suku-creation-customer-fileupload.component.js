/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
var SukuCreationCustomerFileuploadComponent = /** @class */ (function () {
    function SukuCreationCustomerFileuploadComponent() {
        this.onFileChange = new EventEmitter();
        this.submitData = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuCreationCustomerFileuploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log("suku-creation-customer-fileupload");
    };
    SukuCreationCustomerFileuploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-creation-customer-fileupload',
                    template: "<div class=\"col Rectangle-2 d-flex\">\r\n  <div class=\"col p-3\">\r\n    <div class=\"col p-5 col-xs-12 offset-xs-1 noPadding \">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"col flexCol p-0\">\r\n            <div class=\"col-sm-10 pL0 f14 textdev\">\r\n              <span class=\"poppins\">Upload the following Documents:</span>\r\n            </div>\r\n            <div class=\"col-sm-12 pL0 textdev\">\r\n              <p class=\"mB-0 Spring-Cases txtFlow\"> 1. Controller\u2019s Driver\u2019s License:</p>\r\n              <p class=\"mB-0 Spring-Cases txtFlow\"> 2. EIN documentation (IRS-issued SS4 confirmation letter)</p>\r\n            </div>\r\n          </div>  \r\n        </div>\r\n        <div class=\"col mt-3\">\r\n          <div class=\"col flexCol p-0\">\r\n            <div class=\" col-sm-8 offset-sm-2 border-dot rounded-0 bg-light d-flex justify-content-center text-center pT-4 pB-56\">\r\n              <div class=\"col-sm-5 col-xs-4 p-4 \">\r\n                <a onclick=\"document.getElementById('myFileInput').click()\" class=\" fa fa-cloud-upload f60 center-block  pT9 \"\r\n                  id=\"saleTwoUpload\" style=\"width: 100%\"> </a>\r\n                <input type=\"file\" placeholder={{imagepath}} id=\"myFileInput\" accept=\"application/msword,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document\"\r\n                  name=\"uploadDocument\" #fileInput (change)=\"onFileChange.emit($event)\" />\r\n                <input type=\"file\" placeholder={{imagepath}} id=\"myFileInput\" name=\"uploadDocument\" />\r\n                <input type=\"file\" placeholder=\"previewName\" id=\"myFileInput\" accept=\"application/msword,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document\"\r\n                  name=\"uploadDocument\" #fileInput (change)=\"onFileChange.emit($event)\" multiple />\r\n              </div>\r\n              <div class=\"col-sm-8 err_style \" *ngIf=\"showPdfErrorMsg\" id=\"uploadcanExceed\">The file type\r\n                pdf/doc/docx\r\n                files\r\n                are allowed! </div>\r\n              <div class=\"col-sm-8 err_style \" *ngIf=\"showMessage\" id=\"uploadcanExceed\">The file size cannot exceed\r\n                10\r\n                MB</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div class=\"col d-flex justify-content-center mt-4 mb-3  pB40\">\r\n              <button class=\"btn btn-info\" (click)=\"submitData.emit(); \">Agree & Continue</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [".display-2{font-size:5.2rem!important;line-height:1.5!important}.border-dot{border-style:dashed!important;border-color:#6a68689e;border-radius:1px;border-width:2px}.upload{opacity:0;width:277px!important;position:relative;height:120px}.upload:hover{cursor:pointer!important}.upload-icon{position:absolute}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.5rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.disabled{cursor:not-allowed!important}.add{font-family:Poppins,sans-serif!important;font-size:1.7rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px;color:#ccda5c}.add:hover{font-weight:600}"]
                }] }
    ];
    /** @nocollapse */
    SukuCreationCustomerFileuploadComponent.ctorParameters = function () { return []; };
    SukuCreationCustomerFileuploadComponent.propDecorators = {
        onFileChange: [{ type: Output }],
        submitData: [{ type: Output }]
    };
    return SukuCreationCustomerFileuploadComponent;
}());
export { SukuCreationCustomerFileuploadComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQvc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFHeEc7SUFZRTtRQUhVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUUxQixDQUFDOzs7O0lBRWpCLDBEQUFROzs7SUFBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztJQUNuRCxDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQ0FBbUM7b0JBQzdDLG93RkFBaUU7O2lCQUVsRTs7Ozs7K0JBS0UsTUFBTTs2QkFDTixNQUFNOztJQVFULDhDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FiWSx1Q0FBdUM7OztJQUNsRCw0REFBVTs7SUFDViw4REFBWTs7SUFDWixrRUFBZ0I7O0lBQ2hCLCtEQUE0Qzs7SUFDNUMsNkRBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIEZvcm1zTW9kdWxlLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtY3JlYXRpb24tY3VzdG9tZXItZmlsZXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtY3JlYXRpb24tY3VzdG9tZXItZmlsZXVwbG9hZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VDcmVhdGlvbkN1c3RvbWVyRmlsZXVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGltYWdlcGF0aDtcbiAgc2hvd01lc3NhZ2U7XG4gIHNob3dQZGZFcnJvck1zZztcbiAgQE91dHB1dCgpIG9uRmlsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHN1Ym1pdERhdGEgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcInN1a3UtY3JlYXRpb24tY3VzdG9tZXItZmlsZXVwbG9hZFwiKTtcbiAgfVxuXG59XG4iXX0=