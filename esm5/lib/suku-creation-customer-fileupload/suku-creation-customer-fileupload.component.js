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
    /**
     * @param {?} e
     * @return {?}
     */
    SukuCreationCustomerFileuploadComponent.prototype.fileupload = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        console.log(e);
        /** @type {?} */
        var files = e.target.files;
        /** @type {?} */
        var maxFileSize = 2100000;
        /** @type {?} */
        var currentFileSize;
        if (e.target.files && e.target.files.length > 0) {
            for (var i = 0; i < e.target.files.length; i++) {
                /** @type {?} */
                var file = e.target.files[i];
                this.onFileChange.emit(file);
                currentFileSize = file.size;
            }
        }
    };
    SukuCreationCustomerFileuploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-creation-customer-fileupload',
                    template: "<div class=\"col Rectangle-2 d-flex\">\r\n  <div class=\"col p-3\">\r\n    <div class=\"col p-5 col-xs-12 offset-xs-1 noPadding \">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"col flexCol p-0\">\r\n            <div class=\"col-sm-10 pL0 f14 textdev\">\r\n              <span class=\"poppins\">Upload the following Documents:</span>\r\n            </div>\r\n            <div class=\"col-sm-12 pL0 textdev\">\r\n              <p class=\"mB-0 Spring-Cases txtFlow\"> 1. Controller\u2019s Driver\u2019s License:</p>\r\n              <p class=\"mB-0 Spring-Cases txtFlow\"> 2. EIN documentation (IRS-issued SS4 confirmation letter)</p>\r\n            </div>\r\n          </div>  \r\n        </div>\r\n        <div class=\"col mt-3\">\r\n          <div class=\"col flexCol p-0\">\r\n            <div class=\" col-sm-8 offset-sm-2 border-dot rounded-0 bg-light d-flex justify-content-center text-center pT-4 pB-56\">\r\n              <div class=\"col-sm-5 col-xs-4 p-4 \">\r\n                <a onclick=\"document.getElementById('myFileInput').click()\" class=\" fa fa-cloud-upload f60 center-block  pT9 \"\r\n                  id=\"saleTwoUpload\" style=\"width: 100%\"> </a>\r\n                <input type=\"file\" placeholder={{imagepath}} id=\"myFileInput\" accept=\"application/msword,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document\"\r\n                  name=\"uploadDocument\" #fileInput (change)=\"fileupload($event)\" />\r\n                <input type=\"file\" placeholder={{imagepath}} id=\"myFileInput\" name=\"uploadDocument\" />\r\n                <!-- <input type=\"file\" placeholder=\"previewName\" id=\"myFileInput\" accept=\"application/msword,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document\"\r\n                  name=\"uploadDocument\" #fileInput (change)=\"onFileChange.emit($event)\" multiple /> -->\r\n              </div>\r\n              <div class=\"col-sm-8 err_style \" *ngIf=\"showPdfErrorMsg\" id=\"uploadcanExceed\">The file type\r\n                pdf/doc/docx\r\n                files\r\n                are allowed! </div>\r\n              <div class=\"col-sm-8 err_style \" *ngIf=\"showMessage\" id=\"uploadcanExceed\">The file size cannot exceed\r\n                10\r\n                MB</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div class=\"col d-flex justify-content-center mt-4 mb-3  pB40\">\r\n              <button class=\"btn btn-info\" (click)=\"submitData.emit(); \">Agree & Continue</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>",
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
    SukuCreationCustomerFileuploadComponent.prototype.onFileChange;
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.submitData;
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.imagepath;
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.showPdfErrorMsg;
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.showMessage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQvc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFHeEc7SUFhRTtRQU5VLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUsxQixDQUFDOzs7O0lBRWpCLDBEQUFROzs7SUFBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUNELDREQUFVOzs7O0lBQVYsVUFBVyxDQUFDO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTs7WUFDUixLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLOztZQUN4QixXQUFXLEdBQUcsT0FBTzs7WUFDdkIsZUFBZTtRQUNuQixJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDaEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7b0JBQ3pDLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzthQUM1QjtTQUNEO0lBQ0QsQ0FBQzs7Z0JBOUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUNBQW1DO29CQUM3Qyxzd0ZBQWlFOztpQkFFbEU7Ozs7OytCQUdFLE1BQU07NkJBQ04sTUFBTTs7SUF1QlQsOENBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTFCWSx1Q0FBdUM7OztJQUVsRCwrREFBNEM7O0lBQzVDLDZEQUEwQzs7SUFDMUMsNERBQVU7O0lBQ1Ysa0VBQWdCOztJQUNoQiw4REFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBGb3Jtc01vZHVsZSwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtY3JlYXRpb24tY3VzdG9tZXItZmlsZXVwbG9hZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Q3JlYXRpb25DdXN0b21lckZpbGV1cGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcbiAgQE91dHB1dCgpIG9uRmlsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHN1Ym1pdERhdGEgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGltYWdlcGF0aDtcbiAgc2hvd1BkZkVycm9yTXNnO1xuICBzaG93TWVzc2FnZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKFwic3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkXCIpO1xuICB9XG4gIGZpbGV1cGxvYWQoZSl7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBjb25zdCBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzO1xuXHRcdGNvbnN0IG1heEZpbGVTaXplID0gMjEwMDAwMDtcblx0XHRsZXQgY3VycmVudEZpbGVTaXplO1xuXHRcdGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGUudGFyZ2V0LmZpbGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1tpXTtcblx0XHRcdFx0dGhpcy5vbkZpbGVDaGFuZ2UuZW1pdChmaWxlKTtcblx0XHRcdFx0Y3VycmVudEZpbGVTaXplID0gZmlsZS5zaXplO1xuXHRcdFx0fVxuXHRcdH1cbiAgfVxufVxuIl19