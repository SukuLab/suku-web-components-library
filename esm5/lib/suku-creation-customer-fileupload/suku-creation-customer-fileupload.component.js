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
                            this.fileArrayList.push(file_1);
                            console.log("this.fileArrayList", this.fileArrayList);
                            this.OnFileChange.emit(data);
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
                    template: "<div class=\"col p-0\">\r\n  <label class=\"titleClass\"><strong>{{title}}</strong></label>\r\n  <div class=\"col Rectangle-2 d-flex\">\r\n    <div class=\"col p-3\">\r\n      <div class=\"col p-5 col-xs-12 noPadding \">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div class=\"col flexCol p-0\">\r\n              <div class=\"col-sm-10 f14\">\r\n                <span class=\"poppins\">Upload the following Documents:</span>\r\n              </div>\r\n              <div class=\"col-sm-12 docText\">\r\n                <p class=\"mB-0 Spring-Cases txtFlow\"> 1. Controller's Driver's License:</p>\r\n                <p class=\"mB-0 Spring-Cases txtFlow\"> 2. EIN documentation (IRS-issued SS4 confirmation letter)</p>\r\n                <div class=\"col mt-3 mb-3 p-0\" *ngIf=\"fileArrayList?.length > 0\">\r\n                    <p class=\"poppins\">Document uploaded list:</p>\r\n                    <ul class=\"pl-4 ml-2\">\r\n                      <li *ngFor=\"let file of fileArrayList\"><i>{{file?.name}}</i></li>\r\n                    </ul>\r\n                  </div>\r\n              </div>\r\n            </div>  \r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"col pl-sm-5 pr-sm-5\">\r\n              <mat-form-field class=\"col pl-sm-5 pr-sm-5\" *ngIf=\"_classification == 'controller'\">\r\n                  <mat-select placeholder=\"type of Document\" id=\"uploadDoc\"  #types (selectionChange)=\"imageType(types.value)\">\r\n                    <mat-option *ngFor=\"let type of docType\" [value]=\"type.value\">\r\n                      {{type.name}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n               </mat-form-field>\r\n            </div>\r\n            <div class=\"col flexCol p-0\">\r\n              <div class=\" col-sm-8 offset-sm-2 border-dot rounded-0 bg-light d-flex justify-content-center text-center p-4\">\r\n                <div class=\"col-sm-5 col-xs-4 p-4 \">\r\n                  <a onclick=\"document.getElementById('myFileInput').click()\" class=\" fa fa-cloud-upload f60 text-muted center-block  pT9 \"\r\n                    id=\"saleTwoUpload\" style=\"width: 100%\"> </a>\r\n                  <input type=\"file\" placeholder={{imagepath}} id=\"myFileInput\" accept=\".pdf,.jpg, .jpeg, .png\"\r\n                    name=\"uploadDocument[]\" #fileInput (change)=\"fileupload($event)\" multiple=\"true\"/>\r\n                </div>\r\n                <div class=\"col-sm-8 err_style \" *ngIf=\"showPdfErrorMsg\" id=\"uploadcanExceed\">The file type\r\n                  pdf/doc/docx\r\n                  files\r\n                  are allowed! </div>\r\n                <div class=\"col-sm-8 err_style \" *ngIf=\"showMessage\" id=\"uploadcanExceed\">The file size cannot exceed\r\n                  10\r\n                  MB</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"col d-flex justify-content-center mt-4 mb-3  pB40\">\r\n                <button class=\"btn btn-info\" (click)=\"submitData.emit(); \">Agree & Continue</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  <!-- <div class=\"col p-0\">\r\n      <label class=\"titleClass\"><strong>{{title}}</strong></label>\r\n      <div class=\"col Rectangle-2 d-flex\">\r\n        <div class=\"col p-3\">\r\n          <div class=\"col p-5 col-xs-12 offset-xs-1 noPadding \">\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <div class=\"col-sm-10 f14\">\r\n                    <span class=\"poppins\">Upload the following Documents:</span>\r\n                  </div>\r\n                  <div class=\"col-sm-12 docText\">\r\n                    <p class=\"mB-0 Spring-Cases txtFlow\"> 1. Controller's Driver's License:</p>\r\n                    <p class=\"mB-0 Spring-Cases txtFlow\"> 2. EIN documentation (IRS-issued SS4 confirmation letter)</p>\r\n                  </div>\r\n                  <div class=\"col mt-3 mb-3\" *ngIf=\"fileArrayList\">\r\n                    <p class=\"poppins\">Document list:</p>\r\n                    <ul class=\"pl-5\">\r\n                      <li *ngFor=\"let file of fileArrayList\">{{file?.name}}</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>  \r\n              </div>\r\n              <div class=\"col\">\r\n                <div class=\"col pl-sm-5 pr-sm-5\">\r\n                  <mat-form-field class=\"col pl-sm-5 pr-sm-5\" *ngIf=\"_classification == 'controller'\">\r\n                      <mat-select placeholder=\"type of Document\" id=\"uploadDoc\"  #types (selectionChange)=\"imageType(types.value)\">\r\n                        <mat-option *ngFor=\"let type of docType\" [value]=\"type.value\">\r\n                          {{type.name}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                   </mat-form-field>\r\n                </div>\r\n                <div class=\"col flexCol p-0\">\r\n                  <div class=\" col-sm-8 offset-sm-2 border-dot rounded-0 bg-light d-flex justify-content-center text-center p-4\">\r\n                    <div class=\"col-sm-5 col-xs-4 p-4 \">\r\n                      <a onclick=\"document.getElementById('myFileInput').click()\" class=\" fa fa-cloud-upload f60 text-muted center-block  pT9 \"\r\n                        id=\"saleTwoUpload\" style=\"width: 100%\"> </a>\r\n                      <input type=\"file\" placeholder={{imagepath}} id=\"myFileInput\" accept=\".pdf,.jpg, .jpeg, .png\"\r\n                        name=\"uploadDocument[]\" #fileInput (change)=\"fileupload($event)\" multiple=\"true\"/>\r\n                    </div>\r\n                    <div class=\"col-sm-8 err_style \" *ngIf=\"showPdfErrorMsg\" id=\"uploadcanExceed\">The file type\r\n                      pdf/doc/docx\r\n                      files\r\n                      are allowed! </div>\r\n                    <div class=\"col-sm-8 err_style \" *ngIf=\"showMessage\" id=\"uploadcanExceed\">The file size cannot exceed\r\n                      10\r\n                      MB</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <div class=\"col d-flex justify-content-center mt-4 mb-3  pB40\">\r\n                    <button class=\"btn btn-info\" (click)=\"submitData.emit(); \">Agree & Continue</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </div> -->",
                    styles: [".display-2{font-size:5.2rem!important;line-height:1.5!important}.border-dot{border-style:dashed!important;border-color:#6a68689e;border-radius:1px;border-width:2px}.upload{opacity:0;width:277px!important;position:relative;height:120px}.upload:hover{cursor:pointer!important}.upload-icon{position:absolute}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.5rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.disabled{cursor:not-allowed!important}.add{font-family:Poppins,sans-serif!important;font-size:1.7rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px;color:#ccda5c}.add:hover{font-weight:600}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQvc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFFeEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWhEO0lBMEJDLGlEQUFvQixRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBakJ4QyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBSWQsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQUcsa0JBQWtCLENBQUM7UUFTMUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRUUsQ0FBQztJQVg3QyxzQkFDSSxtRUFBYzs7OztRQURsQjtZQUVDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM3QixDQUFDOzs7OztRQUNELFVBQW1CLEdBQUc7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNkLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO1FBQzlCLENBQUM7OztPQUpBOzs7O0lBVUQsMERBQVE7OztJQUFSO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDZDtnQkFDQyxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLFVBQVU7YUFDakI7WUFDRDtnQkFDQyxJ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LENBQUMsQ0FBQztJQUNKLENBQUM7O2dCQXJHRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1DQUFtQztvQkFDN0MsczVOQUFpRTs7aUJBRWpFOzs7O2dCQU5RLFdBQVc7Ozt3QkFnQmxCLEtBQUs7aUNBQ0wsS0FBSzsrQkFRTCxNQUFNOzZCQUNOLE1BQU07O0lBOEVSLDhDQUFDO0NBQUEsQUF0R0QsSUFzR0M7U0FqR1ksdUNBQXVDOzs7SUFDbkQsNERBQVU7O0lBQ1Ysa0VBQWdCOztJQUNoQiw4REFBWTs7SUFDWCwwREFBYTs7SUFDYiw2REFBVzs7SUFDWiwrREFBYTs7SUFDYixrRUFBZ0I7O0lBQ2hCLGdFQUFtQjs7SUFDbkIsd0RBQW9DOztJQVNwQywrREFBNEM7O0lBQzVDLDZEQUEwQzs7Ozs7SUFFOUIsMkRBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIEZvcm1zTW9kdWxlLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtY3JlYXRpb24tY3VzdG9tZXItZmlsZXVwbG9hZC5jb21wb25lbnQuc2NzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Q3JlYXRpb25DdXN0b21lckZpbGV1cGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRpbWFnZXBhdGg7XG5cdHNob3dQZGZFcnJvck1zZztcblx0c2hvd01lc3NhZ2U7XG4gIGRvY1R5cGUgPSBbXTtcbiAgdXBsb2FkVHlwZTtcblx0ZG9jdW1lbnRUeXBlO1xuXHRfY2xhc3NpZmljYXRpb247XG5cdGZpbGVBcnJheUxpc3QgPSBbXTtcblx0QElucHV0KCkgdGl0bGUgPSAnRG9jdW1lbnQgdXBsb2FkOic7XG5cdEBJbnB1dCgpXG5cdGdldCBjbGFzc2lmaWNhdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5fY2xhc3NpZmljYXRpb247XG5cdH1cblx0c2V0IGNsYXNzaWZpY2F0aW9uKHZhbCkge1xuXHRcdGNvbnNvbGUubG9nKHZhbClcbiAgICB0aGlzLl9jbGFzc2lmaWNhdGlvbiA9IHZhbDtcblx0fVxuXHRAT3V0cHV0KCkgT25GaWxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgc3VibWl0RGF0YSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge31cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRjb25zb2xlLmxvZygnc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkJyk7XG5cdFx0dGhpcy5kb2NUeXBlID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAncGFzc3BvcnQnLFxuXHRcdFx0XHR2YWx1ZTogJ3Bhc3Nwb3J0J1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ2xpY2Vuc2UnLFxuXHRcdFx0XHR2YWx1ZTogJ2xpY2Vuc2UnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnaWRDYXJkJyxcblx0XHRcdFx0dmFsdWU6ICdpZENhcmQnXG5cdFx0XHR9XG5cdFx0XTtcblx0fVxuXG5cdGltYWdlVHlwZSh2YWwpIHtcbiAgICB0aGlzLmRvY3VtZW50VHlwZSA9IHZhbDtcbiAgICBjb25zb2xlLmxvZygndmFsJywgdmFsKTtcbiAgICBpZih2YWwpIHtcbiAgICAgIHRoaXMudXBsb2FkVHlwZSA9IHZhbFxuICAgIH1cblx0fVxuXG5cdGZpbGV1cGxvYWQoZSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdGlmICh0aGlzLl9jbGFzc2lmaWNhdGlvbiA9PSAnYnVzaW5lc3MnKSB7XG5cdFx0XHR0aGlzLmRvY3VtZW50VHlwZSA9IHRydWU7XG5cdFx0XHR0aGlzLnVwbG9hZFR5cGUgPSAnb3RoZXInO1xuXHRcdH1cbiAgICBpZiAodGhpcy5kb2N1bWVudFR5cGUpIHtcblx0XHRjb25zdCBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzO1xuXHRcdGNvbnN0IG1heEZpbGVTaXplID0gOTk5OTk5OTtcblx0XHRsZXQgY3VycmVudEZpbGVTaXplO1xuXHRcdGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcblx0XHRjdXJyZW50RmlsZVNpemUgPSBmaWxlLnNpemU7XG5cdFx0aWYgKGN1cnJlbnRGaWxlU2l6ZSA8PSBtYXhGaWxlU2l6ZSkge1xuXHRcdFx0aWYgKGZpbGUudHlwZSA9PSAnaW1hZ2UvanBlZycgfHwgZmlsZS50eXBlID09ICdpbWFnZS9wbmcnIHx8IGZpbGUudHlwZSA9PSAnaW1hZ2UvanBnJykge1xuXHRcdFx0XHRpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZS50YXJnZXQuZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGRvY1R5cGUgPSB0aGlzLnVwbG9hZFR5cGU7XG5cdFx0XHRcdFx0XHRjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICBmaWxlIDogZmlsZSxcbiAgICAgICAgICAgICAgZG9jdW1lbnRUeXBlOiBkb2NUeXBlXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0dGhpcy5maWxlQXJyYXlMaXN0LnB1c2goZmlsZSk7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInRoaXMuZmlsZUFycmF5TGlzdFwiLCB0aGlzLmZpbGVBcnJheUxpc3QpO1xuXHRcdFx0XHRcdFx0dGhpcy5PbkZpbGVDaGFuZ2UuZW1pdChkYXRhKTtcblx0XHRcdFx0XHRcdGN1cnJlbnRGaWxlU2l6ZSA9IGZpbGUuc2l6ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZS50YXJnZXQudmFsdWUgPSAnJztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcbiAgICAgICAgdGhpcy5zbmFja2JhcignVGhlIGZpbGUgdHlwZSBqcGcvanBlZy9wbmcgZmlsZXMgYXJlIGFsbG93ZWQhJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc25hY2tiYXIoJ1RoZSBmaWxlIHNpemUgY2Fubm90IGV4Y2VlZCAxMCBNQicpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLnNuYWNrYmFyKCdQbGVhc2Ugc2VsZWN0IGRvY3VtZW50IHR5cGUuJyk7XG4gIH1cblx0fVxuXHRcblxuXHRzbmFja2Jhcihtc2cpIHtcblx0XHR0aGlzLnNuYWNrQmFyLm9wZW4obXNnLCAnY2xvc2UnLCB7XG5cdFx0XHR2ZXJ0aWNhbFBvc2l0aW9uOiAnYm90dG9tJyxcblx0XHRcdGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0Jyxcblx0XHRcdGR1cmF0aW9uOiAzNTAwXG5cdFx0fSk7XG5cdH1cbn0iXX0=