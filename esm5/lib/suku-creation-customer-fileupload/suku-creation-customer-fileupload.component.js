/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
var SukuCreationCustomerFileuploadComponent = /** @class */ (function () {
    function SukuCreationCustomerFileuploadComponent(snackBar) {
        this.snackBar = snackBar;
        this.onFileChange = new EventEmitter();
        this.submitData = new EventEmitter();
        this.docType = [];
    }
    /**
     * @return {?}
     */
    SukuCreationCustomerFileuploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log('suku-creation-customer-fileupload');
        this.docType = [
            {
                name: 'passport',
                value: 'passport'
            },
            {
                name: 'license',
                value: 'license'
            },
            {
                name: 'idCard',
                value: 'idCard'
            },
            {
                name: 'other',
                value: 'other'
            }
        ];
    };
    /**
     * @param {?} val
     * @return {?}
     */
    SukuCreationCustomerFileuploadComponent.prototype.imageType = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.documentType = val;
        console.log('val', val);
        if (val) {
            this.uploadType = val;
        }
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
        if (this.documentType) {
            /** @type {?} */
            var files = e.target.files;
            /** @type {?} */
            var maxFileSize = 9999999;
            /** @type {?} */
            var currentFileSize = void 0;
            /** @type {?} */
            var file = e.target.files[0];
            currentFileSize = file.size;
            if (currentFileSize <= maxFileSize) {
                if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg') {
                    if (e.target.files && e.target.files.length > 0) {
                        for (var i = 0; i < e.target.files.length; i++) {
                            /** @type {?} */
                            var file_1 = e.target.files[i];
                            /** @type {?} */
                            var docType = this.uploadType;
                            /** @type {?} */
                            var data = {
                                file: file_1,
                                documentType: docType
                            };
                            this.onFileChange.emit(data);
                            currentFileSize = file_1.size;
                        }
                        e.target.value = '';
                    }
                }
                else {
                    this.snackbar('The file type jpg/jpeg/png files are allowed!');
                }
            }
            else {
                this.snackbar('The file size cannot exceed 10 MB');
            }
        }
        else {
            this.snackbar('Please select document type.');
        }
    };
    /**
     * @param {?} msg
     * @return {?}
     */
    SukuCreationCustomerFileuploadComponent.prototype.snackbar = /**
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
    SukuCreationCustomerFileuploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-creation-customer-fileupload',
                    template: "<div class=\"col Rectangle-2 d-flex\">\r\n  <div class=\"col p-3\">\r\n    <div class=\"col p-5 col-xs-12 offset-xs-1 noPadding \">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"col flexCol p-0\">\r\n            <div class=\"col-sm-10 pL0 f14 textdev\">\r\n              <span class=\"poppins\">Upload the following Documents:</span>\r\n            </div>\r\n            <div class=\"col-sm-12 pL0 textdev\">\r\n              <p class=\"mB-0 Spring-Cases txtFlow\"> 1. Controller's Driver's License:</p>\r\n              <p class=\"mB-0 Spring-Cases txtFlow\"> 2. EIN documentation (IRS-issued SS4 confirmation letter)</p>\r\n            </div>\r\n          </div>  \r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"col pl-sm-5 pr-sm-5\">\r\n            <mat-form-field class=\"col pl-sm-5 pr-sm-5\">\r\n                <mat-select placeholder=\"type of Document\" id=\"uploadDoc\"  #types (selectionChange)=\"imageType(types.value)\">\r\n                  <mat-option *ngFor=\"let type of docType\" [value]=\"type.value\">\r\n                    {{type.name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n          </div>\r\n          <div class=\"col flexCol p-0\">\r\n            <div class=\" col-sm-8 offset-sm-2 border-dot rounded-0 bg-light d-flex justify-content-center text-center p-4\">\r\n              <div class=\"col-sm-5 col-xs-4 p-4 \">\r\n                <a onclick=\"document.getElementById('myFileInput').click()\" class=\" fa fa-cloud-upload f60 text-muted center-block  pT9 \"\r\n                  id=\"saleTwoUpload\" style=\"width: 100%\"> </a>\r\n                <input type=\"file\" placeholder={{imagepath}} id=\"myFileInput\" accept=\".pdf,.jpg, .jpeg, .png\"\r\n                  name=\"uploadDocument[]\" #fileInput (change)=\"fileupload($event)\" multiple=\"true\"/>\r\n              </div>\r\n              <div class=\"col-sm-8 err_style \" *ngIf=\"showPdfErrorMsg\" id=\"uploadcanExceed\">The file type\r\n                pdf/doc/docx\r\n                files\r\n                are allowed! </div>\r\n              <div class=\"col-sm-8 err_style \" *ngIf=\"showMessage\" id=\"uploadcanExceed\">The file size cannot exceed\r\n                10\r\n                MB</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div class=\"col d-flex justify-content-center mt-4 mb-3  pB40\">\r\n              <button class=\"btn btn-info\" (click)=\"submitData.emit(); \">Agree & Continue</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [".display-2{font-size:5.2rem!important;line-height:1.5!important}.border-dot{border-style:dashed!important;border-color:#6a68689e;border-radius:1px;border-width:2px}.upload{opacity:0;width:277px!important;position:relative;height:120px}.upload:hover{cursor:pointer!important}.upload-icon{position:absolute}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.5rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.disabled{cursor:not-allowed!important}.add{font-family:Poppins,sans-serif!important;font-size:1.7rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px;color:#ccda5c}.add:hover{font-weight:600}"]
                }] }
    ];
    /** @nocollapse */
    SukuCreationCustomerFileuploadComponent.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
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
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.docType;
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.uploadType;
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.documentType;
    /**
     * @type {?}
     * @private
     */
    SukuCreationCustomerFileuploadComponent.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQvc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFFeEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWhEO0lBY0MsaURBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFSL0IsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSXpDLFlBQU8sR0FBRyxFQUFFLENBQUM7SUFHOEIsQ0FBQzs7OztJQUU3QywwREFBUTs7O0lBQVI7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNkO2dCQUNDLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsVUFBVTthQUNqQjtZQUNEO2dCQUNDLElBQUksRUFBRSxTQUFTO2dCQUNmLEtBQUssRUFBRSxTQUFTO2FBQ2hCO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLFFBQVE7YUFDZjtZQUNEO2dCQUNDLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxPQUFPO2FBQ2Q7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCwyREFBUzs7OztJQUFULFVBQVUsR0FBRztRQUNWLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUcsR0FBRyxFQUFFO1lBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUE7U0FDdEI7SUFDSixDQUFDOzs7OztJQUVELDREQUFVOzs7O0lBQVYsVUFBVyxDQUFDO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTs7Z0JBQ2xCLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7O2dCQUN0QixXQUFXLEdBQUcsT0FBTzs7Z0JBQ3ZCLGVBQWUsU0FBQTs7Z0JBQ2IsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM5QixlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM1QixJQUFJLGVBQWUsSUFBSSxXQUFXLEVBQUU7Z0JBQ25DLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxZQUFZLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxXQUFXLEVBQUU7b0JBQ3RGLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDaEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0NBQ25DLE1BQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7O2dDQUN4QixPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVU7O2dDQUMvQixJQUFJLEdBQUc7Z0NBQ0wsSUFBSSxFQUFHLE1BQUk7Z0NBQ1gsWUFBWSxFQUFFLE9BQU87NkJBQ3RCOzRCQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUM3QixlQUFlLEdBQUcsTUFBSSxDQUFDLElBQUksQ0FBQzt5QkFDNUI7d0JBQ0QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO3FCQUNwQjtpQkFDRDtxQkFBTTtvQkFDRixJQUFJLENBQUMsUUFBUSxDQUFDLCtDQUErQyxDQUFDLENBQUM7aUJBQ25FO2FBQ0Q7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO2FBQ2pEO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsOEJBQThCLENBQUMsQ0FBQztTQUMvQztJQUNGLENBQUM7Ozs7O0lBRUQsMERBQVE7Ozs7SUFBUixVQUFTLEdBQUc7UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsa0JBQWtCLEVBQUUsT0FBTztZQUMzQixRQUFRLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztJQUNKLENBQUM7O2dCQXRGRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1DQUFtQztvQkFDN0MsdXZGQUFpRTs7aUJBRWpFOzs7O2dCQU5RLFdBQVc7OzsrQkFRbEIsTUFBTTs2QkFDTixNQUFNOztJQWdGUiw4Q0FBQztDQUFBLEFBdkZELElBdUZDO1NBbEZZLHVDQUF1Qzs7O0lBQ25ELCtEQUE0Qzs7SUFDNUMsNkRBQTBDOztJQUMxQyw0REFBVTs7SUFDVixrRUFBZ0I7O0lBQ2hCLDhEQUFZOztJQUNYLDBEQUFhOztJQUNiLDZEQUFXOztJQUNYLCtEQUFhOzs7OztJQUNGLDJEQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBGb3Jtc01vZHVsZSwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtY3JlYXRpb24tY3VzdG9tZXItZmlsZXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQuY29tcG9uZW50LnNjc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUNyZWF0aW9uQ3VzdG9tZXJGaWxldXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QE91dHB1dCgpIG9uRmlsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHN1Ym1pdERhdGEgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdGltYWdlcGF0aDtcblx0c2hvd1BkZkVycm9yTXNnO1xuXHRzaG93TWVzc2FnZTtcbiAgZG9jVHlwZSA9IFtdO1xuICB1cGxvYWRUeXBlO1xuICBkb2N1bWVudFR5cGU7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGNvbnNvbGUubG9nKCdzdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQnKTtcblx0XHR0aGlzLmRvY1R5cGUgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdwYXNzcG9ydCcsXG5cdFx0XHRcdHZhbHVlOiAncGFzc3BvcnQnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnbGljZW5zZScsXG5cdFx0XHRcdHZhbHVlOiAnbGljZW5zZSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdpZENhcmQnLFxuXHRcdFx0XHR2YWx1ZTogJ2lkQ2FyZCdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdvdGhlcicsXG5cdFx0XHRcdHZhbHVlOiAnb3RoZXInXG5cdFx0XHR9XG5cdFx0XTtcblx0fVxuXG5cdGltYWdlVHlwZSh2YWwpIHtcbiAgICB0aGlzLmRvY3VtZW50VHlwZSA9IHZhbDtcbiAgICBjb25zb2xlLmxvZygndmFsJywgdmFsKTtcbiAgICBpZih2YWwpIHtcbiAgICAgIHRoaXMudXBsb2FkVHlwZSA9IHZhbFxuICAgIH1cblx0fVxuXG5cdGZpbGV1cGxvYWQoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIGlmKHRoaXMuZG9jdW1lbnRUeXBlKSB7XG5cdFx0Y29uc3QgZmlsZXMgPSBlLnRhcmdldC5maWxlcztcblx0XHRjb25zdCBtYXhGaWxlU2l6ZSA9IDk5OTk5OTk7XG5cdFx0bGV0IGN1cnJlbnRGaWxlU2l6ZTtcblx0XHRjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG5cdFx0Y3VycmVudEZpbGVTaXplID0gZmlsZS5zaXplO1xuXHRcdGlmIChjdXJyZW50RmlsZVNpemUgPD0gbWF4RmlsZVNpemUpIHtcblx0XHRcdGlmIChmaWxlLnR5cGUgPT0gJ2ltYWdlL2pwZWcnIHx8IGZpbGUudHlwZSA9PSAnaW1hZ2UvcG5nJyB8fCBmaWxlLnR5cGUgPT0gJ2ltYWdlL2pwZycpIHtcblx0XHRcdFx0aWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGUudGFyZ2V0LmZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbaV07XG4gICAgICAgICAgICBjb25zdCBkb2NUeXBlID0gdGhpcy51cGxvYWRUeXBlO1xuXHRcdFx0XHRcdFx0Y29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgZmlsZSA6IGZpbGUsXG4gICAgICAgICAgICAgIGRvY3VtZW50VHlwZTogZG9jVHlwZVxuICAgICAgICAgICAgfTtcblx0XHRcdFx0XHRcdHRoaXMub25GaWxlQ2hhbmdlLmVtaXQoZGF0YSk7XG5cdFx0XHRcdFx0XHRjdXJyZW50RmlsZVNpemUgPSBmaWxlLnNpemU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGUudGFyZ2V0LnZhbHVlID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc25hY2tiYXIoJ1RoZSBmaWxlIHR5cGUganBnL2pwZWcvcG5nIGZpbGVzIGFyZSBhbGxvd2VkIScpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNuYWNrYmFyKCdUaGUgZmlsZSBzaXplIGNhbm5vdCBleGNlZWQgMTAgTUInKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zbmFja2JhcignUGxlYXNlIHNlbGVjdCBkb2N1bWVudCB0eXBlLicpO1xuICB9XG5cdH1cblxuXHRzbmFja2Jhcihtc2cpIHtcblx0XHR0aGlzLnNuYWNrQmFyLm9wZW4obXNnLCAnY2xvc2UnLCB7XG5cdFx0XHR2ZXJ0aWNhbFBvc2l0aW9uOiAnYm90dG9tJyxcblx0XHRcdGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0Jyxcblx0XHRcdGR1cmF0aW9uOiAzNTAwXG5cdFx0fSk7XG5cdH1cbn0iXX0=