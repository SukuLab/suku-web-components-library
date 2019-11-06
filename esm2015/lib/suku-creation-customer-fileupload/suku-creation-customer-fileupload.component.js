/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<div class=\"col p-0\">\r\n  <label class=\"titleClass\"><strong>{{title}}</strong></label>\r\n  <div class=\"col Rectangle-2 d-flex\">\r\n    <div class=\"col p-3\">\r\n      <div class=\"col p-3 mt-3 col-12 noPadding \">\r\n        <div class=\"col\">\r\n          <div class=\"col flexCol p-0\">\r\n            <div class=\"col-sm-10 f14\">\r\n              <span class=\"poppins\" *ngIf=\"!(_classification == 'business')\">For Controller Verification:</span>\r\n              <span class=\"poppins\" *ngIf=\"(_classification == 'business')\">For Business Verification:</span>\r\n            </div>\r\n            <div class=\"col-sm-12 preFont\">\r\n              <div *ngIf=\"!(_classification == 'business')\" class=\"pl-2\">\r\n                <p class=\"mB-0 Spring-Cases txtFlow\">\r\n                  Please submit verification documentation.\r\n                  Files must be either a .jpg, .jpeg, .png, or .pdf up to 10MB in size.*\r\n                </p>\r\n                Allowed Documents:\r\n                <ul class=\"pl-5 ml-2\">\r\n                  <li>Unexpired Passport</li>\r\n                  <li>Unexpired driver's license</li>\r\n                  <li>Other unexpired Government Issued ID card</li>\r\n                </ul>\r\n              </div>\r\n              <div *ngIf=\"(_classification == 'business')\" class=\"pl-2\">\r\n                <p class=\"mB-0 Spring-Cases txtFlow\">\r\n                  Please submit verification documentation.\r\n                  Files must be either a .jpg, .jpeg, .png, or .pdf up to 10MB in size.*\r\n                </p>\r\n                <ul class=\"pl-5 ml-2\">\r\n                  <li>Partnership, General Partnership: EIN Letter (IRS-issued SS4 confirmation letter).</li>\r\n                  <li>(Limited Liability Corporation (LLC), Corporation: EIN Letter (IRS-issued SS4 confirmation\r\n                    letter).</li>\r\n                  <li class=\"text-justify\">Sole Proprietorship: One or more of the following, as applicable to your sole\r\n                    proprietorship: Fictitious Business Name Statement; Certificate of Assumed Name; Business License;\r\n                    Sales/Use Tax License; Registration of Trade Name; EIN documentation (IRS-issued SS4 confirmation\r\n                    letter); Color copy of a valid government-issued photo ID (e.g., a driver's license, passport, or\r\n                    state ID card).\r\n                    Other business documents that are applicable includes any US government entity (federal, state,\r\n                    local) issued business formation or licensing exhibiting the name of the business enrolling with\r\n                    Dwolla, or; Any business formation documents exhibiting the name of the business entity in addition\r\n                    to being filed and stamped by a US government entity. Examples include:</li>\r\n                  <li>Filed and stamped Articles of Organization or Incorporation</li>\r\n                  <li>Sales/Use Tax License</li>\r\n                  <li>Business License</li>\r\n                  <li>Certificate of Good Standing</li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"col mt-3 mb-3 p-0\" *ngIf=\"fileArrayList?.length > 0\">\r\n                <p class=\"poppins\">Document uploaded list:</p>\r\n                <ul class=\"pl-5 ml-2\">\r\n                  <li *ngFor=\"let file of fileArrayList\"><i>{{file?.name}}</i></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"col-sm-4 offset-sm-8 p-0\">\r\n            <mat-form-field class=\"col p-0\" *ngIf=\"_classification == 'controller'\">\r\n              <mat-select placeholder=\"type of Document\" id=\"uploadDoc\" #types\r\n                (selectionChange)=\"imageType(types.value)\">\r\n                <mat-option *ngFor=\"let type of docType\" [value]=\"type.value\">\r\n                  {{type.name}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col flexCol p-0\">\r\n            <div\r\n              class=\"col-sm-4 offset-sm-8 border-dot rounded-0 bg-light d-flex justify-content-center text-center p-4\">\r\n              <div class=\"col-sm-5 col-4 p-5 m-4\">\r\n                <a onclick=\"document.getElementById('myFileInput').click()\"\r\n                  class=\" fa fa-cloud-upload upload-icon f60 text-muted center-block\" id=\"saleTwoUpload\" style=\"width: 100%\">\r\n                </a>\r\n                <input type=\"file\" class=\"upload\" placeholder={{imagepath}} id=\"myFileInput\" accept=\".pdf,.jpg, .jpeg, .png\"\r\n                  name=\"uploadDocument[]\" #fileInput (change)=\"fileupload($event)\" multiple=\"true\" />\r\n              </div>\r\n              <div class=\"col-sm-8 err_style \" *ngIf=\"showPdfErrorMsg\" id=\"uploadcanExceed\">The file type\r\n                pdf/doc/docx\r\n                files\r\n                are allowed! </div>\r\n              <div class=\"col-sm-8 err_style \" *ngIf=\"showMessage\" id=\"uploadcanExceed\">The file size cannot exceed\r\n                10\r\n                MB</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div class=\"col d-flex justify-content-center mt-4 mb-3\">\r\n              <button class=\"btn btn-info\" (click)=\"submitData.emit(); \">Agree & Continue</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{font-size:12px!important;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.display-2{font-size:5.2rem!important;line-height:1.5!important}.border-dot{border-style:dashed!important;border-color:#6a68689e;border-radius:1px;border-width:2px}.upload{opacity:0;width:277px!important;position:relative;height:120px}.upload:hover{cursor:pointer!important}.upload-icon{position:absolute;top:0;left:0}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:var(--suku-primary-font)}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.disabled{cursor:not-allowed!important}.add{font-family:var(--suku-primary-font);font-size:1.7rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px;color:#ccda5c}.add:hover{font-weight:600}.docText{font-family:var(--suku-primary-font);letter-spacing:.1px}label.titleClass{font-family:var(--suku-primary-font);font-size:20px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px}.preFont{font-family:var(--suku-secondary-font);letter-spacing:.1px;font-size:14px}.Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.f60{font-size:60px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQvc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFFeEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBT2hELE1BQU0sT0FBTyx1Q0FBdUM7Ozs7SUFxQm5ELFlBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFqQnpDLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFJYixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNWLFVBQUssR0FBRyxrQkFBa0IsQ0FBQztRQVMxQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFRyxDQUFDOzs7O0lBWDlDLElBQ0ksY0FBYztRQUNqQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFDRCxJQUFJLGNBQWMsQ0FBQyxHQUFHO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDaEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7SUFDNUIsQ0FBQzs7OztJQU1ELFFBQVE7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNkO2dCQUNDLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsVUFBVTthQUNqQjtZQUNE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QUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7O1lBckdELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsbUNBQW1DO2dCQUM3Qywrb0xBQWlFOzthQUVqRTs7OztZQU5RLFdBQVc7OztvQkFnQmxCLEtBQUs7NkJBQ0wsS0FBSzsyQkFRTCxNQUFNO3lCQUNOLE1BQU07Ozs7SUFsQlAsNERBQVU7O0lBQ1Ysa0VBQWdCOztJQUNoQiw4REFBWTs7SUFDWiwwREFBYTs7SUFDYiw2REFBVzs7SUFDWCwrREFBYTs7SUFDYixrRUFBZ0I7O0lBQ2hCLGdFQUFtQjs7SUFDbkIsd0RBQW9DOztJQVNwQywrREFBNEM7O0lBQzVDLDZEQUEwQzs7Ozs7SUFFOUIsMkRBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgRm9ybXNNb2R1bGUsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUNyZWF0aW9uQ3VzdG9tZXJGaWxldXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRpbWFnZXBhdGg7XHJcblx0c2hvd1BkZkVycm9yTXNnO1xyXG5cdHNob3dNZXNzYWdlO1xyXG5cdGRvY1R5cGUgPSBbXTtcclxuXHR1cGxvYWRUeXBlO1xyXG5cdGRvY3VtZW50VHlwZTtcclxuXHRfY2xhc3NpZmljYXRpb247XHJcblx0ZmlsZUFycmF5TGlzdCA9IFtdO1xyXG5cdEBJbnB1dCgpIHRpdGxlID0gJ0RvY3VtZW50IHVwbG9hZDonO1xyXG5cdEBJbnB1dCgpXHJcblx0Z2V0IGNsYXNzaWZpY2F0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NsYXNzaWZpY2F0aW9uO1xyXG5cdH1cclxuXHRzZXQgY2xhc3NpZmljYXRpb24odmFsKSB7XHJcblx0XHRjb25zb2xlLmxvZyh2YWwpXHJcblx0XHR0aGlzLl9jbGFzc2lmaWNhdGlvbiA9IHZhbDtcclxuXHR9XHJcblx0QE91dHB1dCgpIE9uRmlsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgc3VibWl0RGF0YSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHsgfVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdzdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQnKTtcclxuXHRcdHRoaXMuZG9jVHlwZSA9IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdwYXNzcG9ydCcsXHJcblx0XHRcdFx0dmFsdWU6ICdwYXNzcG9ydCdcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdsaWNlbnNlJyxcclxuXHRcdFx0XHR2YWx1ZTogJ2xpY2Vuc2UnXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnaWRDYXJkJyxcclxuXHRcdFx0XHR2YWx1ZTogJ2lkQ2FyZCdcclxuXHRcdFx0fVxyXG5cdFx0XTtcclxuXHR9XHJcblxyXG5cdGltYWdlVHlwZSh2YWwpIHtcclxuXHRcdHRoaXMuZG9jdW1lbnRUeXBlID0gdmFsO1xyXG5cdFx0Y29uc29sZS5sb2coJ3ZhbCcsIHZhbCk7XHJcblx0XHRpZiAodmFsKSB7XHJcblx0XHRcdHRoaXMudXBsb2FkVHlwZSA9IHZhbFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZmlsZXVwbG9hZChlKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdGlmICh0aGlzLl9jbGFzc2lmaWNhdGlvbiA9PSAnYnVzaW5lc3MnKSB7XHJcblx0XHRcdHRoaXMuZG9jdW1lbnRUeXBlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy51cGxvYWRUeXBlID0gJ290aGVyJztcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmRvY3VtZW50VHlwZSkge1xyXG5cdFx0XHRjb25zdCBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzO1xyXG5cdFx0XHRjb25zdCBtYXhGaWxlU2l6ZSA9IDk5OTk5OTk7XHJcblx0XHRcdGxldCBjdXJyZW50RmlsZVNpemU7XHJcblx0XHRcdGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuXHRcdFx0Y3VycmVudEZpbGVTaXplID0gZmlsZS5zaXplO1xyXG5cdFx0XHRpZiAoY3VycmVudEZpbGVTaXplIDw9IG1heEZpbGVTaXplKSB7XHJcblx0XHRcdFx0aWYgKGZpbGUudHlwZSA9PSAnaW1hZ2UvanBlZycgfHwgZmlsZS50eXBlID09ICdpbWFnZS9wbmcnIHx8IGZpbGUudHlwZSA9PSAnaW1hZ2UvanBnJyB8fCBmaWxlLnR5cGUgPT0gJ2FwcGxpY2F0aW9uL3BkZicpIHtcclxuXHRcdFx0XHRcdGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZS50YXJnZXQuZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbaV07XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgZG9jVHlwZSA9IHRoaXMudXBsb2FkVHlwZTtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBkYXRhID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZmlsZTogZmlsZSxcclxuXHRcdFx0XHRcdFx0XHRcdGRvY3VtZW50VHlwZTogZG9jVHlwZVxyXG5cdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5maWxlQXJyYXlMaXN0LnB1c2goZmlsZSk7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJ0aGlzLmZpbGVBcnJheUxpc3RcIiwgdGhpcy5maWxlQXJyYXlMaXN0KTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLk9uRmlsZUNoYW5nZS5lbWl0KGRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRGaWxlU2l6ZSA9IGZpbGUuc2l6ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlLnRhcmdldC52YWx1ZSA9ICcnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnNuYWNrYmFyKCdUaGUgZmlsZSB0eXBlIGpwZy9qcGVnL3BuZy9wZGYgZmlsZXMgYXJlIGFsbG93ZWQhJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuc25hY2tiYXIoJ1RoZSBmaWxlIHNpemUgY2Fubm90IGV4Y2VlZCAxMCBNQicpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNuYWNrYmFyKCdQbGVhc2Ugc2VsZWN0IGRvY3VtZW50IHR5cGUuJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0c25hY2tiYXIobXNnKSB7XHJcblx0XHR0aGlzLnNuYWNrQmFyLm9wZW4obXNnLCAnY2xvc2UnLCB7XHJcblx0XHRcdHZlcnRpY2FsUG9zaXRpb246ICdib3R0b20nLFxyXG5cdFx0XHRob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCcsXHJcblx0XHRcdGR1cmF0aW9uOiAzNTAwXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19