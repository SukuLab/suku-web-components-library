/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-creation-customer-fileupload/suku-creation-customer-fileupload.component.ts
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
                template: "<div class=\"col p-0\">\n  <label class=\"titleClass\"><strong>{{title}}</strong></label>\n  <div class=\"col Rectangle-2 d-flex\">\n    <div class=\"col p-3\">\n      <div class=\"col p-3 mt-3 col-12 noPadding \">\n        <div class=\"col\">\n          <div class=\"col flexCol p-0\">\n            <div class=\"col-sm-10 f14\">\n              <span class=\"poppins\" *ngIf=\"!(_classification == 'business')\">For Controller Verification:</span>\n              <span class=\"poppins\" *ngIf=\"(_classification == 'business')\">For Business Verification:</span>\n            </div>\n            <div class=\"col-sm-12 preFont\">\n              <div *ngIf=\"!(_classification == 'business')\" class=\"pl-2\">\n                <p class=\"mB-0 Spring-Cases txtFlow\">\n                  Please submit verification documentation.\n                  Files must be either a .jpg, .jpeg, .png, or .pdf up to 10MB in size.*\n                </p>\n                Allowed Documents:\n                <ul class=\"pl-5 ml-2\">\n                  <li>Unexpired Passport</li>\n                  <li>Unexpired driver's license</li>\n                  <li>Other unexpired Government Issued ID card</li>\n                </ul>\n              </div>\n              <div *ngIf=\"(_classification == 'business')\" class=\"pl-2\">\n                <p class=\"mB-0 Spring-Cases txtFlow\">\n                  Please submit verification documentation.\n                  Files must be either a .jpg, .jpeg, .png, or .pdf up to 10MB in size.*\n                </p>\n                <ul class=\"pl-5 ml-2\">\n                  <li>Partnership, General Partnership: EIN Letter (IRS-issued SS4 confirmation letter).</li>\n                  <li>(Limited Liability Corporation (LLC), Corporation: EIN Letter (IRS-issued SS4 confirmation\n                    letter).</li>\n                  <li class=\"text-justify\">Sole Proprietorship: One or more of the following, as applicable to your sole\n                    proprietorship: Fictitious Business Name Statement; Certificate of Assumed Name; Business License;\n                    Sales/Use Tax License; Registration of Trade Name; EIN documentation (IRS-issued SS4 confirmation\n                    letter); Color copy of a valid government-issued photo ID (e.g., a driver's license, passport, or\n                    state ID card).\n                    Other business documents that are applicable includes any US government entity (federal, state,\n                    local) issued business formation or licensing exhibiting the name of the business enrolling with\n                    Dwolla, or; Any business formation documents exhibiting the name of the business entity in addition\n                    to being filed and stamped by a US government entity. Examples include:</li>\n                  <li>Filed and stamped Articles of Organization or Incorporation</li>\n                  <li>Sales/Use Tax License</li>\n                  <li>Business License</li>\n                  <li>Certificate of Good Standing</li>\n                </ul>\n              </div>\n              <div class=\"col mt-3 mb-3 p-0\" *ngIf=\"fileArrayList?.length > 0\">\n                <p class=\"poppins\">Document uploaded list:</p>\n                <ul class=\"pl-5 ml-2\">\n                  <li *ngFor=\"let file of fileArrayList\"><i>{{file?.name}}</i></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"col-sm-4 offset-sm-8 p-0\">\n            <mat-form-field class=\"col p-0\" *ngIf=\"_classification == 'controller'\">\n              <mat-select placeholder=\"type of Document\" id=\"uploadDoc\" #types\n                (selectionChange)=\"imageType(types.value)\">\n                <mat-option *ngFor=\"let type of docType\" [value]=\"type.value\">\n                  {{type.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div class=\"col flexCol p-0\">\n            <div\n              class=\"col-sm-4 offset-sm-8 border-dot rounded-0 bg-light d-flex justify-content-center text-center p-4\">\n              <div class=\"col-sm-5 col-4 p-5 m-4\">\n                <a onclick=\"document.getElementById('myFileInput').click()\"\n                  class=\" fa fa-cloud-upload upload-icon f60 text-muted center-block\" id=\"saleTwoUpload\" style=\"width: 100%\">\n                </a>\n                <input type=\"file\" class=\"upload\" placeholder={{imagepath}} id=\"myFileInput\" accept=\".pdf,.jpg, .jpeg, .png\"\n                  name=\"uploadDocument[]\" #fileInput (change)=\"fileupload($event)\" multiple=\"true\" />\n              </div>\n              <div class=\"col-sm-8 err_style \" *ngIf=\"showPdfErrorMsg\" id=\"uploadcanExceed\">The file type\n                pdf/doc/docx\n                files\n                are allowed! </div>\n              <div class=\"col-sm-8 err_style \" *ngIf=\"showMessage\" id=\"uploadcanExceed\">The file size cannot exceed\n                10\n                MB</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"col d-flex justify-content-center mt-4 mb-3\">\n              <button class=\"btn btn-info\" (click)=\"submitData.emit(); \">Agree & Continue</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQvc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTJCLE1BQU0sZUFBZSxDQUFDO0FBRXhHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU9oRCxNQUFNLE9BQU8sdUNBQXVDOzs7O0lBcUJuRCxZQUFvQixRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBakJ6QyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBSWIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQUcsa0JBQWtCLENBQUM7UUFTMUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRUcsQ0FBQzs7OztJQVg5QyxJQUNJLGNBQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBQ0QsSUFBSSxjQUFjLENBQUMsR0FBRztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFNRCxRQUFRO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDZDtnQkFDQyxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLFVBQVU7YUFDakI7WUFD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SUFBSTtTQUNkLENBQUMsQ0FBQztJQUNKLENBQUM7OztZQXJHRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsdThLQUFpRTs7YUFFakU7Ozs7WUFOUSxXQUFXOzs7b0JBZ0JsQixLQUFLOzZCQUNMLEtBQUs7MkJBUUwsTUFBTTt5QkFDTixNQUFNOzs7O0lBbEJQLDREQUFVOztJQUNWLGtFQUFnQjs7SUFDaEIsOERBQVk7O0lBQ1osMERBQWE7O0lBQ2IsNkRBQVc7O0lBQ1gsK0RBQWE7O0lBQ2Isa0VBQWdCOztJQUNoQixnRUFBbUI7O0lBQ25CLHdEQUFvQzs7SUFTcEMsK0RBQTRDOztJQUM1Qyw2REFBMEM7Ozs7O0lBRTlCLDJEQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBGb3Jtc01vZHVsZSwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtY3JlYXRpb24tY3VzdG9tZXItZmlsZXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3N1a3UtY3JlYXRpb24tY3VzdG9tZXItZmlsZXVwbG9hZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VDcmVhdGlvbkN1c3RvbWVyRmlsZXVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdGltYWdlcGF0aDtcblx0c2hvd1BkZkVycm9yTXNnO1xuXHRzaG93TWVzc2FnZTtcblx0ZG9jVHlwZSA9IFtdO1xuXHR1cGxvYWRUeXBlO1xuXHRkb2N1bWVudFR5cGU7XG5cdF9jbGFzc2lmaWNhdGlvbjtcblx0ZmlsZUFycmF5TGlzdCA9IFtdO1xuXHRASW5wdXQoKSB0aXRsZSA9ICdEb2N1bWVudCB1cGxvYWQ6Jztcblx0QElucHV0KClcblx0Z2V0IGNsYXNzaWZpY2F0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLl9jbGFzc2lmaWNhdGlvbjtcblx0fVxuXHRzZXQgY2xhc3NpZmljYXRpb24odmFsKSB7XG5cdFx0Y29uc29sZS5sb2codmFsKVxuXHRcdHRoaXMuX2NsYXNzaWZpY2F0aW9uID0gdmFsO1xuXHR9XG5cdEBPdXRwdXQoKSBPbkZpbGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBzdWJtaXREYXRhID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRjb25zb2xlLmxvZygnc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkJyk7XG5cdFx0dGhpcy5kb2NUeXBlID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAncGFzc3BvcnQnLFxuXHRcdFx0XHR2YWx1ZTogJ3Bhc3Nwb3J0J1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ2xpY2Vuc2UnLFxuXHRcdFx0XHR2YWx1ZTogJ2xpY2Vuc2UnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnaWRDYXJkJyxcblx0XHRcdFx0dmFsdWU6ICdpZENhcmQnXG5cdFx0XHR9XG5cdFx0XTtcblx0fVxuXG5cdGltYWdlVHlwZSh2YWwpIHtcblx0XHR0aGlzLmRvY3VtZW50VHlwZSA9IHZhbDtcblx0XHRjb25zb2xlLmxvZygndmFsJywgdmFsKTtcblx0XHRpZiAodmFsKSB7XG5cdFx0XHR0aGlzLnVwbG9hZFR5cGUgPSB2YWxcblx0XHR9XG5cdH1cblxuXHRmaWxldXBsb2FkKGUpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRpZiAodGhpcy5fY2xhc3NpZmljYXRpb24gPT0gJ2J1c2luZXNzJykge1xuXHRcdFx0dGhpcy5kb2N1bWVudFR5cGUgPSB0cnVlO1xuXHRcdFx0dGhpcy51cGxvYWRUeXBlID0gJ290aGVyJztcblx0XHR9XG5cdFx0aWYgKHRoaXMuZG9jdW1lbnRUeXBlKSB7XG5cdFx0XHRjb25zdCBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzO1xuXHRcdFx0Y29uc3QgbWF4RmlsZVNpemUgPSA5OTk5OTk5O1xuXHRcdFx0bGV0IGN1cnJlbnRGaWxlU2l6ZTtcblx0XHRcdGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcblx0XHRcdGN1cnJlbnRGaWxlU2l6ZSA9IGZpbGUuc2l6ZTtcblx0XHRcdGlmIChjdXJyZW50RmlsZVNpemUgPD0gbWF4RmlsZVNpemUpIHtcblx0XHRcdFx0aWYgKGZpbGUudHlwZSA9PSAnaW1hZ2UvanBlZycgfHwgZmlsZS50eXBlID09ICdpbWFnZS9wbmcnIHx8IGZpbGUudHlwZSA9PSAnaW1hZ2UvanBnJyB8fCBmaWxlLnR5cGUgPT0gJ2FwcGxpY2F0aW9uL3BkZicpIHtcblx0XHRcdFx0XHRpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlLnRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbaV07XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGRvY1R5cGUgPSB0aGlzLnVwbG9hZFR5cGU7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGRhdGEgPSB7XG5cdFx0XHRcdFx0XHRcdFx0ZmlsZTogZmlsZSxcblx0XHRcdFx0XHRcdFx0XHRkb2N1bWVudFR5cGU6IGRvY1R5cGVcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0dGhpcy5maWxlQXJyYXlMaXN0LnB1c2goZmlsZSk7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwidGhpcy5maWxlQXJyYXlMaXN0XCIsIHRoaXMuZmlsZUFycmF5TGlzdCk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuT25GaWxlQ2hhbmdlLmVtaXQoZGF0YSk7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRGaWxlU2l6ZSA9IGZpbGUuc2l6ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGUudGFyZ2V0LnZhbHVlID0gJyc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc25hY2tiYXIoJ1RoZSBmaWxlIHR5cGUganBnL2pwZWcvcG5nL3BkZiBmaWxlcyBhcmUgYWxsb3dlZCEnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zbmFja2JhcignVGhlIGZpbGUgc2l6ZSBjYW5ub3QgZXhjZWVkIDEwIE1CJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc25hY2tiYXIoJ1BsZWFzZSBzZWxlY3QgZG9jdW1lbnQgdHlwZS4nKTtcblx0XHR9XG5cdH1cblxuXG5cdHNuYWNrYmFyKG1zZykge1xuXHRcdHRoaXMuc25hY2tCYXIub3Blbihtc2csICdjbG9zZScsIHtcblx0XHRcdHZlcnRpY2FsUG9zaXRpb246ICdib3R0b20nLFxuXHRcdFx0aG9yaXpvbnRhbFBvc2l0aW9uOiAncmlnaHQnLFxuXHRcdFx0ZHVyYXRpb246IDM1MDBcblx0XHR9KTtcblx0fVxufVxuIl19