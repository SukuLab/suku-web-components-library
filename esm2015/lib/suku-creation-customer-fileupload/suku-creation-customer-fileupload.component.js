/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
export class SukuCreationCustomerFileuploadComponent {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.docType = [];
        this.fileArrayList = [];
        this.title = 'Document upload:';
        this.OnFileChange = new EventEmitter();
        this.submitData = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get classification() {
        return this._classification;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set classification(val) {
        console.log(val);
        this._classification = val;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    /**
     * @param {?} val
     * @return {?}
     */
    imageType(val) {
        this.documentType = val;
        console.log('val', val);
        if (val) {
            this.uploadType = val;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    fileupload(e) {
        console.log(e);
        if (this._classification == 'business') {
            this.documentType = true;
            this.uploadType = 'other';
        }
        if (this.documentType) {
            /** @type {?} */
            const files = e.target.files;
            /** @type {?} */
            const maxFileSize = 9999999;
            /** @type {?} */
            let currentFileSize;
            /** @type {?} */
            const file = e.target.files[0];
            currentFileSize = file.size;
            if (currentFileSize <= maxFileSize) {
                if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg' || file.type == 'application/pdf') {
                    if (e.target.files && e.target.files.length > 0) {
                        for (let i = 0; i < e.target.files.length; i++) {
                            /** @type {?} */
                            const file = e.target.files[i];
                            /** @type {?} */
                            const docType = this.uploadType;
                            /** @type {?} */
                            const data = {
                                file: file,
                                documentType: docType
                            };
                            this.fileArrayList.push(file);
                            console.log("this.fileArrayList", this.fileArrayList);
                            this.OnFileChange.emit(data);
                            currentFileSize = file.size;
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
SukuCreationCustomerFileuploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-creation-customer-fileupload',
                template: "<div class=\"col p-0\">\n  <label class=\"titleClass\"><strong>{{title}}</strong></label>\n  <div class=\"col Rectangle-2 d-flex\">\n    <div class=\"col p-3\">\n      <div class=\"col p-3 mt-3 col-xs-12 noPadding \">\n        <div class=\"col\">\n          <div class=\"col flexCol p-0\">\n            <div class=\"col-sm-10 f14\">\n              <span class=\"poppins\" *ngIf=\"!(_classification == 'business')\">For Controller Verification:</span>\n              <span class=\"poppins\" *ngIf=\"(_classification == 'business')\">For Business Verification:</span>\n            </div>\n            <div class=\"col-sm-12 preFont\">\n              <div *ngIf=\"!(_classification == 'business')\" class=\"pl-2\">\n                <p class=\"mB-0 Spring-Cases txtFlow\">\n                  Please submit verification documentation.\n                  Files must be either a .jpg, .jpeg, .png, or .pdf up to 10MB in size.*\n                </p>\n                Allowed Documents:\n                <ul class=\"pl-5 ml-2\">\n                  <li>Unexpired Passport</li>\n                  <li>Unexpired driver's license</li>\n                  <li>Other unexpired Government Issued ID card</li>\n                </ul>\n              </div>\n              <div *ngIf=\"(_classification == 'business')\" class=\"pl-2\">\n                <p class=\"mB-0 Spring-Cases txtFlow\">\n                  Please submit verification documentation.\n                  Files must be either a .jpg, .jpeg, .png, or .pdf up to 10MB in size.*\n                </p>\n                <ul class=\"pl-5 ml-2\">\n                  <li>Partnership, General Partnership: EIN Letter (IRS-issued SS4 confirmation letter).</li>\n                  <li>(Limited Liability Corporation (LLC), Corporation: EIN Letter (IRS-issued SS4 confirmation\n                    letter).</li>\n                  <li class=\"text-justify\">Sole Proprietorship: One or more of the following, as applicable to your sole\n                    proprietorship: Fictitious Business Name Statement; Certificate of Assumed Name; Business License;\n                    Sales/Use Tax License; Registration of Trade Name; EIN documentation (IRS-issued SS4 confirmation\n                    letter); Color copy of a valid government-issued photo ID (e.g., a driver's license, passport, or\n                    state ID card).\n                    Other business documents that are applicable includes any US government entity (federal, state,\n                    local) issued business formation or licensing exhibiting the name of the business enrolling with\n                    Dwolla, or; Any business formation documents exhibiting the name of the business entity in addition\n                    to being filed and stamped by a US government entity. Examples include:</li>\n                  <li>Filed and stamped Articles of Organization or Incorporation</li>\n                  <li>Sales/Use Tax License</li>\n                  <li>Business License</li>\n                  <li>Certificate of Good Standing</li>\n                </ul>\n              </div>\n              <div class=\"col mt-3 mb-3 p-0\" *ngIf=\"fileArrayList?.length > 0\">\n                <p class=\"poppins\">Document uploaded list:</p>\n                <ul class=\"pl-5 ml-2\">\n                  <li *ngFor=\"let file of fileArrayList\"><i>{{file?.name}}</i></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"col-sm-4 offset-sm-8 p-0\">\n            <mat-form-field class=\"col p-0\" *ngIf=\"_classification == 'controller'\">\n              <mat-select placeholder=\"type of Document\" id=\"uploadDoc\" #types\n                (selectionChange)=\"imageType(types.value)\">\n                <mat-option *ngFor=\"let type of docType\" [value]=\"type.value\">\n                  {{type.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div class=\"col flexCol p-0\">\n            <div\n              class=\"col-sm-4 offset-sm-8 border-dot rounded-0 bg-light d-flex justify-content-center text-center p-4\">\n              <div class=\"col-sm-5 col-xs-4 p-4 \">\n                <a onclick=\"document.getElementById('myFileInput').click()\"\n                  class=\" fa fa-cloud-upload upload-icon f60 text-muted center-block\" id=\"saleTwoUpload\" style=\"width: 100%\">\n                </a>\n                <input type=\"file\" class=\"upload\" placeholder={{imagepath}} id=\"myFileInput\" accept=\".pdf,.jpg, .jpeg, .png\"\n                  name=\"uploadDocument[]\" #fileInput (change)=\"fileupload($event)\" multiple=\"true\" />\n              </div>\n              <div class=\"col-sm-8 err_style \" *ngIf=\"showPdfErrorMsg\" id=\"uploadcanExceed\">The file type\n                pdf/doc/docx\n                files\n                are allowed! </div>\n              <div class=\"col-sm-8 err_style \" *ngIf=\"showMessage\" id=\"uploadcanExceed\">The file size cannot exceed\n                10\n                MB</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"col d-flex justify-content-center mt-4 mb-3\">\n              <button class=\"btn btn-info\" (click)=\"submitData.emit(); \">Agree & Continue</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);.display-2{font-size:5.2rem!important;line-height:1.5!important}.border-dot{border-style:dashed!important;border-color:#6a68689e;border-radius:1px;border-width:2px}.upload{opacity:0;width:277px!important;position:relative;height:120px}.upload:hover{cursor:pointer!important}.upload-icon{position:absolute}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.5rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.disabled{cursor:not-allowed!important}.add{font-family:Poppins,sans-serif!important;font-size:1.7rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px;color:#ccda5c}.add:hover{font-weight:600}.docText{font-family:Poppins,sans-serif!important;letter-spacing:.1px}label.titleClass{font-family:Poppins,sans-serif!important;font-size:20px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px}.preFont{font-family:\"Encode Sans\",sans-serif!important;letter-spacing:.1px;font-size:14px}.Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.f60{font-size:60px}"]
            }] }
];
/** @nocollapse */
SukuCreationCustomerFileuploadComponent.ctorParameters = () => [
    { type: MatSnackBar }
];
SukuCreationCustomerFileuploadComponent.propDecorators = {
    title: [{ type: Input }],
    classification: [{ type: Input }],
    OnFileChange: [{ type: Output }],
    submitData: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQvc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFFeEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBT2hELE1BQU0sT0FBTyx1Q0FBdUM7Ozs7SUFxQm5ELFlBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFqQnpDLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFJYixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNWLFVBQUssR0FBRyxrQkFBa0IsQ0FBQztRQVMxQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFRyxDQUFDOzs7O0lBWDlDLElBQ0ksY0FBYztRQUNqQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFDRCxJQUFJLGNBQWMsQ0FBQyxHQUFHO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDaEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7SUFDNUIsQ0FBQzs7OztJQU1ELFFBQVE7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNkO2dCQUNDLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsVUFBVTthQUNqQjtZQUNE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QUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7O1lBckdELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QywwOEtBQWlFOzthQUVqRTs7OztZQU5RLFdBQVc7OztvQkFnQmxCLEtBQUs7NkJBQ0wsS0FBSzsyQkFRTCxNQUFNO3lCQUNOLE1BQU07Ozs7SUFsQlAsNERBQVU7O0lBQ1Ysa0VBQWdCOztJQUNoQiw4REFBWTs7SUFDWiwwREFBYTs7SUFDYiw2REFBVzs7SUFDWCwrREFBYTs7SUFDYixrRUFBZ0I7O0lBQ2hCLGdFQUFtQjs7SUFDbkIsd0RBQW9DOztJQVNwQywrREFBNEM7O0lBQzVDLDZEQUEwQzs7Ozs7SUFFOUIsMkRBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIEZvcm1zTW9kdWxlLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUNyZWF0aW9uQ3VzdG9tZXJGaWxldXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0aW1hZ2VwYXRoO1xuXHRzaG93UGRmRXJyb3JNc2c7XG5cdHNob3dNZXNzYWdlO1xuXHRkb2NUeXBlID0gW107XG5cdHVwbG9hZFR5cGU7XG5cdGRvY3VtZW50VHlwZTtcblx0X2NsYXNzaWZpY2F0aW9uO1xuXHRmaWxlQXJyYXlMaXN0ID0gW107XG5cdEBJbnB1dCgpIHRpdGxlID0gJ0RvY3VtZW50IHVwbG9hZDonO1xuXHRASW5wdXQoKVxuXHRnZXQgY2xhc3NpZmljYXRpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2NsYXNzaWZpY2F0aW9uO1xuXHR9XG5cdHNldCBjbGFzc2lmaWNhdGlvbih2YWwpIHtcblx0XHRjb25zb2xlLmxvZyh2YWwpXG5cdFx0dGhpcy5fY2xhc3NpZmljYXRpb24gPSB2YWw7XG5cdH1cblx0QE91dHB1dCgpIE9uRmlsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHN1Ym1pdERhdGEgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGNvbnNvbGUubG9nKCdzdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQnKTtcblx0XHR0aGlzLmRvY1R5cGUgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdwYXNzcG9ydCcsXG5cdFx0XHRcdHZhbHVlOiAncGFzc3BvcnQnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnbGljZW5zZScsXG5cdFx0XHRcdHZhbHVlOiAnbGljZW5zZSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdpZENhcmQnLFxuXHRcdFx0XHR2YWx1ZTogJ2lkQ2FyZCdcblx0XHRcdH1cblx0XHRdO1xuXHR9XG5cblx0aW1hZ2VUeXBlKHZhbCkge1xuXHRcdHRoaXMuZG9jdW1lbnRUeXBlID0gdmFsO1xuXHRcdGNvbnNvbGUubG9nKCd2YWwnLCB2YWwpO1xuXHRcdGlmICh2YWwpIHtcblx0XHRcdHRoaXMudXBsb2FkVHlwZSA9IHZhbFxuXHRcdH1cblx0fVxuXG5cdGZpbGV1cGxvYWQoZSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdGlmICh0aGlzLl9jbGFzc2lmaWNhdGlvbiA9PSAnYnVzaW5lc3MnKSB7XG5cdFx0XHR0aGlzLmRvY3VtZW50VHlwZSA9IHRydWU7XG5cdFx0XHR0aGlzLnVwbG9hZFR5cGUgPSAnb3RoZXInO1xuXHRcdH1cblx0XHRpZiAodGhpcy5kb2N1bWVudFR5cGUpIHtcblx0XHRcdGNvbnN0IGZpbGVzID0gZS50YXJnZXQuZmlsZXM7XG5cdFx0XHRjb25zdCBtYXhGaWxlU2l6ZSA9IDk5OTk5OTk7XG5cdFx0XHRsZXQgY3VycmVudEZpbGVTaXplO1xuXHRcdFx0Y29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuXHRcdFx0Y3VycmVudEZpbGVTaXplID0gZmlsZS5zaXplO1xuXHRcdFx0aWYgKGN1cnJlbnRGaWxlU2l6ZSA8PSBtYXhGaWxlU2l6ZSkge1xuXHRcdFx0XHRpZiAoZmlsZS50eXBlID09ICdpbWFnZS9qcGVnJyB8fCBmaWxlLnR5cGUgPT0gJ2ltYWdlL3BuZycgfHwgZmlsZS50eXBlID09ICdpbWFnZS9qcGcnIHx8IGZpbGUudHlwZSA9PSAnYXBwbGljYXRpb24vcGRmJykge1xuXHRcdFx0XHRcdGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGUudGFyZ2V0LmZpbGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1tpXTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZG9jVHlwZSA9IHRoaXMudXBsb2FkVHlwZTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZGF0YSA9IHtcblx0XHRcdFx0XHRcdFx0XHRmaWxlOiBmaWxlLFxuXHRcdFx0XHRcdFx0XHRcdGRvY3VtZW50VHlwZTogZG9jVHlwZVxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHR0aGlzLmZpbGVBcnJheUxpc3QucHVzaChmaWxlKTtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJ0aGlzLmZpbGVBcnJheUxpc3RcIiwgdGhpcy5maWxlQXJyYXlMaXN0KTtcblx0XHRcdFx0XHRcdFx0dGhpcy5PbkZpbGVDaGFuZ2UuZW1pdChkYXRhKTtcblx0XHRcdFx0XHRcdFx0Y3VycmVudEZpbGVTaXplID0gZmlsZS5zaXplO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZS50YXJnZXQudmFsdWUgPSAnJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zbmFja2JhcignVGhlIGZpbGUgdHlwZSBqcGcvanBlZy9wbmcvcGRmIGZpbGVzIGFyZSBhbGxvd2VkIScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNuYWNrYmFyKCdUaGUgZmlsZSBzaXplIGNhbm5vdCBleGNlZWQgMTAgTUInKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zbmFja2JhcignUGxlYXNlIHNlbGVjdCBkb2N1bWVudCB0eXBlLicpO1xuXHRcdH1cblx0fVxuXG5cblx0c25hY2tiYXIobXNnKSB7XG5cdFx0dGhpcy5zbmFja0Jhci5vcGVuKG1zZywgJ2Nsb3NlJywge1xuXHRcdFx0dmVydGljYWxQb3NpdGlvbjogJ2JvdHRvbScsXG5cdFx0XHRob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCcsXG5cdFx0XHRkdXJhdGlvbjogMzUwMFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=