/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
var SukuCreationCustomerFileuploadComponent = /** @class */ (function () {
    function SukuCreationCustomerFileuploadComponent(snackBar) {
        this.snackBar = snackBar;
        this.docType = [];
        this.fileArrayList = [];
        this.title = 'Document upload:';
        this.OnFileChange = new EventEmitter();
        this.submitData = new EventEmitter();
    }
    Object.defineProperty(SukuCreationCustomerFileuploadComponent.prototype, "classification", {
        get: /**
         * @return {?}
         */
        function () {
            return this._classification;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            console.log(val);
            this._classification = val;
        },
        enumerable: true,
        configurable: true
    });
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
        if (this._classification == 'business') {
            this.documentType = true;
            this.uploadType = 'other';
        }
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
                if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg' || file.type == 'application/pdf') {
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
                            this.fileArrayList.push(file_1);
                            console.log("this.fileArrayList", this.fileArrayList);
                            this.OnFileChange.emit(data);
                            currentFileSize = file_1.size;
                        }
                        e.target.value = '';
                    }
                }
                else {
                    this.snackbar('The file type jpg/jpeg/png/pdf files are allowed!');
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
                    template: "<div class=\"col p-0\">\r\n    <label class=\"titleClass\"><strong>{{title}}</strong></label>\r\n    <div class=\"col Rectangle-2 d-flex\">\r\n      <div class=\"col p-3\">\r\n        <div class=\"col p-3 mt-3 col-xs-12 noPadding \">\r\n          <div class=\"col\">\r\n            <div class=\"col flexCol p-0\">\r\n              <div class=\"col-sm-10 f14\">\r\n                <span class=\"poppins\" *ngIf=\"!(_classification == 'business')\">For Controller Verification:</span>\r\n                <span class=\"poppins\" *ngIf=\"(_classification == 'business')\">For Business Verification:</span>\r\n              </div>\r\n              <div class=\"col-sm-12 preFont\">\r\n                <div *ngIf=\"!(_classification == 'business')\"  class=\"pl-2\">\r\n                  <p class=\"mB-0 Spring-Cases txtFlow\">\r\n                    Please submit verification documentation.\r\n                    Files must be either a .jpg, .jpeg, .png, or .pdf up to 10MB in size.*\r\n                  </p>\r\n                  Allowed Documents:\r\n                  <ul class=\"pl-5 ml-2\">\r\n                    <li>Unexpired Passport</li>\r\n                    <li>Unexpired driver's license</li>\r\n                    <li>Other unexpired Government Issued ID card</li>\r\n                  </ul>\r\n                </div>\r\n                <div *ngIf=\"(_classification == 'business')\" class=\"pl-2\">\r\n                  <p class=\"mB-0 Spring-Cases txtFlow\">\r\n                    Please submit verification documentation.\r\n                    Files must be either a .jpg, .jpeg, .png, or .pdf up to 10MB in size.*\r\n                  </p>\r\n                  <ul class=\"pl-5 ml-2\">\r\n                    <li>Partnership, General Partnership: EIN Letter (IRS-issued SS4 confirmation letter).</li>\r\n                    <li>(Limited Liability Corporation (LLC), Corporation: EIN Letter (IRS-issued SS4 confirmation\r\n                      letter).</li>\r\n                    <li class=\"text-justify\">Sole Proprietorship: One or more of the following, as applicable to your sole\r\n                      proprietorship: Fictitious Business Name Statement; Certificate of Assumed Name; Business License;\r\n                      Sales/Use Tax License; Registration of Trade Name; EIN documentation (IRS-issued SS4 confirmation\r\n                      letter); Color copy of a valid government-issued photo ID (e.g., a driver's license, passport, or\r\n                      state ID card).\r\n                      Other business documents that are applicable includes any US government entity (federal, state,\r\n                      local) issued business formation or licensing exhibiting the name of the business enrolling with\r\n                      Dwolla, or; Any business formation documents exhibiting the name of the business entity in addition\r\n                      to being filed and stamped by a US government entity. Examples include:</li>\r\n                    <li>Filed and stamped Articles of Organization or Incorporation</li>\r\n                    <li>Sales/Use Tax License</li>\r\n                    <li>Business License</li>\r\n                    <li>Certificate of Good Standing</li>\r\n                  </ul>\r\n                </div>\r\n                <div class=\"col mt-3 mb-3 p-0\" *ngIf=\"fileArrayList?.length > 0\">\r\n                  <p class=\"poppins\">Document uploaded list:</p>\r\n                  <ul class=\"pl-5 ml-2\">\r\n                    <li *ngFor=\"let file of fileArrayList\"><i>{{file?.name}}</i></li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"col pl-sm-5 pr-sm-5\">\r\n              <mat-form-field class=\"col pl-sm-5 pr-sm-5\" *ngIf=\"_classification == 'controller'\">\r\n                <mat-select placeholder=\"type of Document\" id=\"uploadDoc\" #types\r\n                  (selectionChange)=\"imageType(types.value)\">\r\n                  <mat-option *ngFor=\"let type of docType\" [value]=\"type.value\">\r\n                    {{type.name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col flexCol p-0\">\r\n              <div\r\n                class=\"col-sm-4 offset-sm-8 border-dot rounded-0 bg-light d-flex justify-content-center text-center p-4\">\r\n                <div class=\"col-sm-5 col-xs-4 p-4 \">\r\n                  <a onclick=\"document.getElementById('myFileInput').click()\"\r\n                    class=\" fa fa-cloud-upload f60 text-muted center-block  pT9 \" id=\"saleTwoUpload\" style=\"width: 100%\">\r\n                  </a>\r\n                  <input type=\"file\" placeholder={{imagepath}} id=\"myFileInput\" accept=\".pdf,.jpg, .jpeg, .png\"\r\n                    name=\"uploadDocument[]\" #fileInput (change)=\"fileupload($event)\" multiple=\"true\" />\r\n                </div>\r\n                <div class=\"col-sm-8 err_style \" *ngIf=\"showPdfErrorMsg\" id=\"uploadcanExceed\">The file type\r\n                  pdf/doc/docx\r\n                  files\r\n                  are allowed! </div>\r\n                <div class=\"col-sm-8 err_style \" *ngIf=\"showMessage\" id=\"uploadcanExceed\">The file size cannot exceed\r\n                  10\r\n                  MB</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"col d-flex justify-content-center mt-4 mb-3  pB40\">\r\n                <button class=\"btn btn-info\" (click)=\"submitData.emit(); \">Agree & Continue</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>",
                    styles: [".display-2{font-size:5.2rem!important;line-height:1.5!important}.border-dot{border-style:dashed!important;border-color:#6a68689e;border-radius:1px;border-width:2px}.upload{opacity:0;width:277px!important;position:relative;height:120px}.upload:hover{cursor:pointer!important}.upload-icon{position:absolute}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.5rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.disabled{cursor:not-allowed!important}.add{font-family:Poppins,sans-serif!important;font-size:1.7rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px;color:#ccda5c}.add:hover{font-weight:600}.docText{font-family:Poppins,sans-serif!important;letter-spacing:.1px}label.titleClass{font-family:Poppins,sans-serif!important;font-size:20px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px}.preFont{font-family:\"Encode sans\",sans-serif!important;letter-spacing:.1px;font-size:14px}"]
                }] }
    ];
    /** @nocollapse */
    SukuCreationCustomerFileuploadComponent.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
    SukuCreationCustomerFileuploadComponent.propDecorators = {
        title: [{ type: Input }],
        classification: [{ type: Input }],
        OnFileChange: [{ type: Output }],
        submitData: [{ type: Output }]
    };
    return SukuCreationCustomerFileuploadComponent;
}());
export { SukuCreationCustomerFileuploadComponent };
if (false) {
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
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype._classification;
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.fileArrayList;
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.title;
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.OnFileChange;
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.submitData;
    /**
     * @type {?}
     * @private
     */
    SukuCreationCustomerFileuploadComponent.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQvc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFFeEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWhEO0lBMEJDLGlEQUFvQixRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBakJ6QyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBSWIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQUcsa0JBQWtCLENBQUM7UUFTMUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRUcsQ0FBQztJQVg5QyxzQkFDSSxtRUFBYzs7OztRQURsQjtZQUVDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM3QixDQUFDOzs7OztRQUNELFVBQW1CLEdBQUc7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNoQixJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztRQUM1QixDQUFDOzs7T0FKQTs7OztJQVVELDBEQUFROzs7SUFBUjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2Q7Z0JBQ0MsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEtBQUssRUFBRSxVQUFVO2FBQ2pCO1lBQ0Q7Z0JBQ0Ms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QUUsT0FBTztZQUMzQixRQUFRLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztJQUNKLENBQUM7O2dCQXJHRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1DQUFtQztvQkFDN0MsaTFMQUFpRTs7aUJBRWpFOzs7O2dCQU5RLFdBQVc7Ozt3QkFnQmxCLEtBQUs7aUNBQ0wsS0FBSzsrQkFRTCxNQUFNOzZCQUNOLE1BQU07O0lBOEVSLDhDQUFDO0NBQUEsQUF0R0QsSUFzR0M7U0FqR1ksdUNBQXVDOzs7SUFDbkQsNERBQVU7O0lBQ1Ysa0VBQWdCOztJQUNoQiw4REFBWTs7SUFDWiwwREFBYTs7SUFDYiw2REFBVzs7SUFDWCwrREFBYTs7SUFDYixrRUFBZ0I7O0lBQ2hCLGdFQUFtQjs7SUFDbkIsd0RBQW9DOztJQVNwQywrREFBNEM7O0lBQzVDLDZEQUEwQzs7Ozs7SUFFOUIsMkRBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIEZvcm1zTW9kdWxlLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUNyZWF0aW9uQ3VzdG9tZXJGaWxldXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0aW1hZ2VwYXRoO1xuXHRzaG93UGRmRXJyb3JNc2c7XG5cdHNob3dNZXNzYWdlO1xuXHRkb2NUeXBlID0gW107XG5cdHVwbG9hZFR5cGU7XG5cdGRvY3VtZW50VHlwZTtcblx0X2NsYXNzaWZpY2F0aW9uO1xuXHRmaWxlQXJyYXlMaXN0ID0gW107XG5cdEBJbnB1dCgpIHRpdGxlID0gJ0RvY3VtZW50IHVwbG9hZDonO1xuXHRASW5wdXQoKVxuXHRnZXQgY2xhc3NpZmljYXRpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2NsYXNzaWZpY2F0aW9uO1xuXHR9XG5cdHNldCBjbGFzc2lmaWNhdGlvbih2YWwpIHtcblx0XHRjb25zb2xlLmxvZyh2YWwpXG5cdFx0dGhpcy5fY2xhc3NpZmljYXRpb24gPSB2YWw7XG5cdH1cblx0QE91dHB1dCgpIE9uRmlsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHN1Ym1pdERhdGEgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGNvbnNvbGUubG9nKCdzdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQnKTtcblx0XHR0aGlzLmRvY1R5cGUgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdwYXNzcG9ydCcsXG5cdFx0XHRcdHZhbHVlOiAncGFzc3BvcnQnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnbGljZW5zZScsXG5cdFx0XHRcdHZhbHVlOiAnbGljZW5zZSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdpZENhcmQnLFxuXHRcdFx0XHR2YWx1ZTogJ2lkQ2FyZCdcblx0XHRcdH1cblx0XHRdO1xuXHR9XG5cblx0aW1hZ2VUeXBlKHZhbCkge1xuXHRcdHRoaXMuZG9jdW1lbnRUeXBlID0gdmFsO1xuXHRcdGNvbnNvbGUubG9nKCd2YWwnLCB2YWwpO1xuXHRcdGlmICh2YWwpIHtcblx0XHRcdHRoaXMudXBsb2FkVHlwZSA9IHZhbFxuXHRcdH1cblx0fVxuXG5cdGZpbGV1cGxvYWQoZSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdGlmICh0aGlzLl9jbGFzc2lmaWNhdGlvbiA9PSAnYnVzaW5lc3MnKSB7XG5cdFx0XHR0aGlzLmRvY3VtZW50VHlwZSA9IHRydWU7XG5cdFx0XHR0aGlzLnVwbG9hZFR5cGUgPSAnb3RoZXInO1xuXHRcdH1cblx0XHRpZiAodGhpcy5kb2N1bWVudFR5cGUpIHtcblx0XHRcdGNvbnN0IGZpbGVzID0gZS50YXJnZXQuZmlsZXM7XG5cdFx0XHRjb25zdCBtYXhGaWxlU2l6ZSA9IDk5OTk5OTk7XG5cdFx0XHRsZXQgY3VycmVudEZpbGVTaXplO1xuXHRcdFx0Y29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuXHRcdFx0Y3VycmVudEZpbGVTaXplID0gZmlsZS5zaXplO1xuXHRcdFx0aWYgKGN1cnJlbnRGaWxlU2l6ZSA8PSBtYXhGaWxlU2l6ZSkge1xuXHRcdFx0XHRpZiAoZmlsZS50eXBlID09ICdpbWFnZS9qcGVnJyB8fCBmaWxlLnR5cGUgPT0gJ2ltYWdlL3BuZycgfHwgZmlsZS50eXBlID09ICdpbWFnZS9qcGcnIHx8IGZpbGUudHlwZSA9PSAnYXBwbGljYXRpb24vcGRmJykge1xuXHRcdFx0XHRcdGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGUudGFyZ2V0LmZpbGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1tpXTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZG9jVHlwZSA9IHRoaXMudXBsb2FkVHlwZTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZGF0YSA9IHtcblx0XHRcdFx0XHRcdFx0XHRmaWxlOiBmaWxlLFxuXHRcdFx0XHRcdFx0XHRcdGRvY3VtZW50VHlwZTogZG9jVHlwZVxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHR0aGlzLmZpbGVBcnJheUxpc3QucHVzaChmaWxlKTtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJ0aGlzLmZpbGVBcnJheUxpc3RcIiwgdGhpcy5maWxlQXJyYXlMaXN0KTtcblx0XHRcdFx0XHRcdFx0dGhpcy5PbkZpbGVDaGFuZ2UuZW1pdChkYXRhKTtcblx0XHRcdFx0XHRcdFx0Y3VycmVudEZpbGVTaXplID0gZmlsZS5zaXplO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZS50YXJnZXQudmFsdWUgPSAnJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zbmFja2JhcignVGhlIGZpbGUgdHlwZSBqcGcvanBlZy9wbmcvcGRmIGZpbGVzIGFyZSBhbGxvd2VkIScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNuYWNrYmFyKCdUaGUgZmlsZSBzaXplIGNhbm5vdCBleGNlZWQgMTAgTUInKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zbmFja2JhcignUGxlYXNlIHNlbGVjdCBkb2N1bWVudCB0eXBlLicpO1xuXHRcdH1cblx0fVxuXG5cblx0c25hY2tiYXIobXNnKSB7XG5cdFx0dGhpcy5zbmFja0Jhci5vcGVuKG1zZywgJ2Nsb3NlJywge1xuXHRcdFx0dmVydGljYWxQb3NpdGlvbjogJ2JvdHRvbScsXG5cdFx0XHRob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCcsXG5cdFx0XHRkdXJhdGlvbjogMzUwMFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=