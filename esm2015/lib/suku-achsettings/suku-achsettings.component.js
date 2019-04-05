/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, } from '@angular/core';
export class SukuACHSettingsComponent {
    constructor() {
        this.title = ' Payment Portal';
        this.titleId = ' paymentPortal';
        this.subTitle = ' ACH Settings';
        this.subTitleId = ' ACHSettings';
        this.subContent = 'unverified';
        this.subContentId = ' unverified';
        this.SetupACHPaymentsBtnText = 'Setup ACH Payments';
        this.paymentButtonId = 'SetupACHPayments';
        this.lowerText = 'Please setup your ACH payment profile below';
        this.lowerTextId = 'lowerTextId';
        this.subtitleId = 'subtitleId';
        this.action = new EventEmitter();
        this.upload = new EventEmitter();
        this.selected = [];
        this.toggle = [];
    }
    /**
     * @return {?}
     */
    get beneficialOwnerStatus() {
        return this._beneficialOwnerStatus;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set beneficialOwnerStatus(val) {
        console.log(val);
        this._beneficialOwnerStatus = val;
        console.log(`beneficial ownership status: ${val}`);
        console.log(val);
        if (val) {
            this.lowerText = 'Please upload beneficial owner documents below';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('this.documentStatus', this.documentStatus);
        if (this.documentStatus) {
            for (let j = 0; j < this.documentStatus.length; j++) {
                this.toggle[j] = false;
            }
            this.toggle[0] = true;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.selected[0] = null;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    uploadDoc(val) {
        console.log('val', val);
        this.upload.emit(val);
    }
    /**
     * @param {?} docType
     * @return {?}
     */
    getDocTypeString(docType) {
        switch (docType) {
            case 'idcard':
                return 'Government Issued ID';
                break;
            case 'passport':
                return 'Passport';
                break;
            case 'license':
                return "Driver's License";
                break;
            default:
                return docType;
                break;
        }
    }
    /**
     * @param {?} failureType
     * @return {?}
     */
    getDocFailureString(failureType) {
        switch (failureType) {
            case 'ScanNotReadable':
                return 'Scan Not Readable';
                break;
            case 'ScanNotUploaded':
                return 'Scan Not Uploaded';
                break;
            case 'ScanIdTypeNotSupported':
                return 'ID Type Not Supported';
                break;
            case 'ScanNameMismatch':
                return 'Name Mismatch';
                break;
            default:
                return failureType;
                break;
        }
    }
    /**
     * @param {?} i
     * @return {?}
     */
    active(i) {
        this.selected[i] = i;
        this.toggle[i] = !this.toggle[i];
        if (this.documentStatus) {
            for (let j = 0; j < this.documentStatus.length; j++) {
                if (i != j) {
                    this.selected[j] = null;
                }
            }
        }
        if (!this.toggle[i]) {
            this.selected[i] = null;
        }
        else {
            if (this.documentStatus) {
                for (let j = 0; j < this.documentStatus.length; j++) {
                    if (i != j) {
                        this.toggle[j] = false;
                    }
                }
            }
        }
    }
}
SukuACHSettingsComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-ach-setting',
                template: "<div class=\"col poppinsFont p-0\">\r\n  <div class=\"col-sm-12 text-center\">\r\n    <span class=\"font20\" id=\"{{titleId}}\">{{title}}</span>\r\n  </div>\r\n  <div class=\"col-sm-12 mt-4\">\r\n    <div class=\"form-group col-xs-12 col Rectangle-2 p-3\">\r\n      <div class=\"col-sm-12 text-center encode-font\">\r\n        <div class=\"col\">\r\n          <span class=\"text-center subTitle\" id=\"{{subtitleId}}\"> {{subTitle}}</span>\r\n          <br>\r\n          <p class=\"text-center mt-2 mb-2 text-capitalize\" id=\"{{subContentId}}\">Payment profile status: <b\r\n              [ngClass]=\"{'statusVerified': subContent == 'verified', 'status': subContent !== 'verified'}\">{{subContent}}</b>\r\n          </p>\r\n          <p class=\"text-center mt-2 mb-2\" *ngIf=\"_beneficialOwnerStatus\" id=\"beneficial-owner-status\">Beneficial Owner\r\n            Status: <b class=\"statusUnverified\">Documentation Upload Needed</b>\r\n          </p>\r\n          <p class=\"text-center encode-font mb-2\" *ngIf=\"subContent == 'document'\">Note: Document verification may take\r\n            2-3 business days\r\n            to get verified.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 text-center mt-2\">\r\n        <i> <span class=\"font12\" id=\"{{lowerTextId}}\">{{lowerText}} </span> </i>\r\n      </div>\r\n\r\n      <!-- customer status start -->\r\n      <div class=\"col pl-5 pr-5 pb-2 pt-2\" *ngIf=\"subContent == 'document'\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <p class=\"doclabel mt-4\" *ngIf=\"documentStatus?.length > 0\"><b>Document Status:</b></p>\r\n          </div>\r\n          <div class=\"col mt-3 mb-3 text-right pr-sm-4 mr-sm-1\" *ngIf=\"documentStatus?.length > 0\">\r\n            <!-- <button class=\"btn textBold\" id=\"upload\" (click)=\"action.emit()\">Upload Document</button> -->\r\n            <span class=\"secondary-btn c-pointer\">\r\n              <a class=\"secondary-btn c-pointer\" id=\"upload\" (click)=\"action.emit()\">\r\n                Upload Document\r\n              </a>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col document pl-sm-4 mb-3\" *ngFor=\"let doc of documentStatus;let imageIndex = index;\">\r\n          <div class=\"row p-2\">\r\n            <div class=\"col\">\r\n              <p class=\"mb-0 pb-1\">Doc Type:</p>\r\n              <p class=\"mb-0\"><b>{{doc?.type}}</b></p>\r\n            </div>\r\n            <div class=\"col\">\r\n              <p class=\"mb-0 pb-1\">Status:</p>\r\n              <p class=\"mb-0\"><b>{{doc?.status}}</b></p>\r\n            </div>\r\n            <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\r\n            <div class=\"col\" *ngIf=\"doc?.failureReason\">\r\n              <p class=\"mb-0 pb-1\">Failure Reason:</p>\r\n              <p class=\"mb-0\"><b>{{doc?.failureReason}}</b></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col pb-4\" id=\"beneficialOwnerBlock\">\r\n        <div class=\"col\">\r\n          <p class=\"doclabel mt-4\" *ngIf=\"_beneficialOwnerStatus\"><b>Beneficial Owners:</b></p>\r\n        </div>\r\n        <!-- id=\"document\" *ngIf=\"subContent == 'document'\" -->\r\n        <div class=\"col pl-sm-4 mb-3\" *ngFor=\"let user of _beneficialOwnerStatus;let i = index;\">\r\n          <div class=\"col card-line mt-3 mb-4 c-pointer\" data-toggle=\"collapse\" [attr.data-target]=\"'#ownerBlock' + i\"\r\n            (click)=\"active(i)\">\r\n            <div class=\"row\">\r\n              <label class=\"m-2 pl-3 owner c-pointer\">\r\n                Beneficial Owner {{i+1}}\r\n              </label>\r\n              <label class=\"d-flex justify-content-end col pl-0 c-pointer\">\r\n                <span class=\"pt-3 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] != i}\">\r\n                  <i class=\"fa fa-arrow-circle-down icon\"></i>\r\n                </span>\r\n                <span class=\"pt-3 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] == i}\">\r\n                  <i class=\"fa fa-arrow-circle-up icon\"></i>\r\n                </span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col collapse p-0\" [ngClass]=\"{'show': i == 0 }\" data-parent=\"#beneficialOwnerBlock\"\r\n            id=\"ownerBlock{{i}}\">\r\n            <div class=\"col\">\r\n              <!-- <p class=\"doclabel mt-4\" *ngIf=\"documentStatus\"><b>Document Status:</b></p> -->\r\n              <div class=\"row p-2\">\r\n                <div class=\"col\">\r\n                  <p class=\"mb-0 pb-1\">Beneficial Owner Name:</p>\r\n                  <p class=\"mb-0\"><b>{{user?.firstName}}</b></p>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <p class=\"mb-0 pb-1\">Status:</p>\r\n                  <p class=\"mb-0\"><b>{{user?.verificationStatus}}</b></p>\r\n                </div>\r\n                <div class=\"col\" *ngIf=\"user?.verificationStatus == 'document'\">\r\n                  <div class=\"col d-flex justify-content-center mt-3 mb-3\">\r\n                    <button class=\"btn btn-info\" (click)=\"uploadDoc(user)\" id=\"uploadDocument\">Upload Document</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col pl-4 pr-4 pb-2 pt-1\" *ngIf=\"user?.verificationStatus == 'document'\">\r\n              <p class=\"doclabel mt-4\" *ngIf=\"user?.data?.length > 0 \"><b>Document Status:</b></p>\r\n              <div class=\"col document pl-sm-4 mb-3\" *ngFor=\"let doc of user?.data;let statusIndex = index;\">\r\n                <div class=\"row p-2\">\r\n                  <div class=\"col\">\r\n                    <p class=\"mb-0 pb-1\">Doc Type:</p>\r\n                    <p class=\"mb-0\"><b>{{getDocTypeString(doc?.type)}}</b></p>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <p class=\"mb-0 pb-1\">Status:</p>\r\n                    <p class=\"mb-0\"><b>{{doc?.status}}</b></p>\r\n                  </div>\r\n                  <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\r\n                  <div class=\"col\" *ngIf=\"doc?.failureReason\">\r\n                    <p class=\"mb-0 pb-1\">Failure-Reason:</p>\r\n                    <p class=\"mb-0\"><b>{{getDocFailureString(doc?.failureReason)}}</b></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 mt-2 mb-4 text-center\" *ngIf=\"(subContent == 'not complete' ) || (subContent != 'verified' ) && (documentStatus?.length == 0 && (subContent == 'document'))\">\r\n        <button class=\" btn textBold\" id=\"{{paymentButtonId}}\"\r\n          (click)=\"action.emit()\">{{SetupACHPaymentsBtnText}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [".redText{color:red;font-size:12px}.font12{font-size:12px}.textBold{font-weight:700}.Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.poppinsFont{font-family:Poppins}.btn{font-size:12px!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:balck}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#000;outline:0!important;box-shadow:none!important}.font20{font-size:25px}.subTitle{font-weight:700!important;font-family:Poppins,sans-serif!important}.statusUnverified{color:red;letter-spacing:.3px}.statusVerified{color:#99c002!important;letter-spacing:.3px}.docLabel{font-family:Poppins,sans-serif!important;letter-spacing:.1px}.document,.mat-chip.mat-standard-chip{background-color:#e0e0e059!important;color:rgba(0,0,0,.87)!important;border-radius:0!important;border-left:3px solid #a7bf2e!important;min-height:40px!important}#document p{font-size:1.5rem}@media screen and (max-width:575px){#document p{font-size:1.4rem}}.card-line{background-color:#fff;color:#2c2727;height:46px;border-radius:2px;letter-spacing:.5px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2);border-top:3px solid #bfd131c9}.display-2{font-size:6.2rem!important;line-height:1.5!important}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.upload-btn{color:#000;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.3rem;border-bottom:3px solid #a7bf2e}.secondary-btn{font-family:Poppins,sans-serif!important;font-size:14px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important;border-bottom:3.5px solid #a7bf2e}.secondary-btn:hover{cursor:pointer!important}.encode-font{font-family:'Encode Sans',sans-serif!important}"]
            }] }
];
/** @nocollapse */
SukuACHSettingsComponent.ctorParameters = () => [];
SukuACHSettingsComponent.propDecorators = {
    title: [{ type: Input }],
    titleId: [{ type: Input }],
    subTitle: [{ type: Input }],
    subTitleId: [{ type: Input }],
    subContent: [{ type: Input }],
    subContentId: [{ type: Input }],
    SetupACHPaymentsBtnText: [{ type: Input }],
    paymentButtonId: [{ type: Input }],
    lowerText: [{ type: Input }],
    lowerTextId: [{ type: Input }],
    subtitleId: [{ type: Input }],
    action: [{ type: Output }],
    upload: [{ type: Output }],
    beneficialOwnerStatus: [{ type: Input }],
    documentStatus: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuACHSettingsComponent.prototype._beneficialOwnerStatus;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.title;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.titleId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.subTitle;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.subTitleId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.subContent;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.subContentId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.SetupACHPaymentsBtnText;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.paymentButtonId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.lowerText;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.lowerTextId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.subtitleId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.action;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.upload;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.documentStatus;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.selected;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.toggle;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.customClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hY2hzZXR0aW5ncy9zdWt1LWFjaHNldHRpbmdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FFWixNQUFNLGVBQWUsQ0FBQztBQU92QixNQUFNLE9BQU8sd0JBQXdCO0lBZ0NwQztRQTlCUyxVQUFLLEdBQUcsaUJBQWlCLENBQUM7UUFDMUIsWUFBTyxHQUFHLGdCQUFnQixDQUFDO1FBQzNCLGFBQVEsR0FBRyxlQUFlLENBQUM7UUFDM0IsZUFBVSxHQUFHLGNBQWMsQ0FBQztRQUM1QixlQUFVLEdBQUcsWUFBWSxDQUFDO1FBQzFCLGlCQUFZLEdBQUcsYUFBYSxDQUFDO1FBQzdCLDRCQUF1QixHQUFHLG9CQUFvQixDQUFDO1FBQy9DLG9CQUFlLEdBQUcsa0JBQWtCLENBQUM7UUFDckMsY0FBUyxHQUFHLDZDQUE2QyxDQUFDO1FBQzFELGdCQUFXLEdBQUcsYUFBYSxDQUFDO1FBQzVCLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFDekIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFldEMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFdBQU0sR0FBRyxFQUFFLENBQUM7SUFFRyxDQUFDOzs7O0lBakJoQixJQUNJLHFCQUFxQjtRQUN4QixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUNELElBQUkscUJBQXFCLENBQUMsR0FBRztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxHQUFHLENBQUM7UUFDbEMs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QUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztxQkFDdkI7aUJBQ0Q7YUFDRDtTQUNEO0lBQ0YsQ0FBQzs7O1lBcEhELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qiw4Mk5BQWdEOzthQUVoRDs7Ozs7b0JBR0MsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7c0NBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3FCQUNMLE1BQU07cUJBQ04sTUFBTTtvQ0FDTixLQUFLOzZCQWFMLEtBQUs7Ozs7SUEzQk4sMERBQXVCOztJQUN2Qix5Q0FBbUM7O0lBQ25DLDJDQUFvQzs7SUFDcEMsNENBQW9DOztJQUNwQyw4Q0FBcUM7O0lBQ3JDLDhDQUFtQzs7SUFDbkMsZ0RBQXNDOztJQUN0QywyREFBd0Q7O0lBQ3hELG1EQUE4Qzs7SUFDOUMsNkNBQW1FOztJQUNuRSwrQ0FBcUM7O0lBQ3JDLDhDQUFtQzs7SUFDbkMsMENBQXNDOztJQUN0QywwQ0FBc0M7O0lBY3RDLGtEQUF3Qjs7SUFDeEIsNENBQWM7O0lBQ2QsMENBQVk7O0lBQ1osK0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0SW5wdXQsXHJcblx0T3V0cHV0LFxyXG5cdEV2ZW50RW1pdHRlcixcclxuXHRBZnRlclZpZXdJbml0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LWFjaC1zZXR0aW5nJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtYWNoc2V0dGluZ3MuY29tcG9uZW50LnNjc3MnIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1QUNIU2V0dGluZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cdF9iZW5lZmljaWFsT3duZXJTdGF0dXM7XHJcblx0QElucHV0KCkgdGl0bGUgPSAnIFBheW1lbnQgUG9ydGFsJztcclxuXHRASW5wdXQoKSB0aXRsZUlkID0gJyBwYXltZW50UG9ydGFsJztcclxuXHRASW5wdXQoKSBzdWJUaXRsZSA9ICcgQUNIIFNldHRpbmdzJztcclxuXHRASW5wdXQoKSBzdWJUaXRsZUlkID0gJyBBQ0hTZXR0aW5ncyc7XHJcblx0QElucHV0KCkgc3ViQ29udGVudCA9ICd1bnZlcmlmaWVkJztcclxuXHRASW5wdXQoKSBzdWJDb250ZW50SWQgPSAnIHVudmVyaWZpZWQnO1xyXG5cdEBJbnB1dCgpIFNldHVwQUNIUGF5bWVudHNCdG5UZXh0ID0gJ1NldHVwIEFDSCBQYXltZW50cyc7XHJcblx0QElucHV0KCkgcGF5bWVudEJ1dHRvbklkID0gJ1NldHVwQUNIUGF5bWVudHMnO1xyXG5cdEBJbnB1dCgpIGxvd2VyVGV4dCA9ICdQbGVhc2Ugc2V0dXAgeW91ciBBQ0ggcGF5bWVudCBwcm9maWxlIGJlbG93JztcclxuXHRASW5wdXQoKSBsb3dlclRleHRJZCA9ICdsb3dlclRleHRJZCc7XHJcblx0QElucHV0KCkgc3VidGl0bGVJZCA9ICdzdWJ0aXRsZUlkJztcclxuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSB1cGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QElucHV0KClcclxuXHRnZXQgYmVuZWZpY2lhbE93bmVyU3RhdHVzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2JlbmVmaWNpYWxPd25lclN0YXR1cztcclxuXHR9XHJcblx0c2V0IGJlbmVmaWNpYWxPd25lclN0YXR1cyh2YWwpIHtcclxuXHRcdGNvbnNvbGUubG9nKHZhbCk7XHJcblx0XHR0aGlzLl9iZW5lZmljaWFsT3duZXJTdGF0dXMgPSB2YWw7XHJcblx0XHRjb25zb2xlLmxvZyhgYmVuZWZpY2lhbCBvd25lcnNoaXAgc3RhdHVzOiAke3ZhbH1gKTtcclxuXHRcdGNvbnNvbGUubG9nKHZhbCk7XHJcblx0XHRpZiAodmFsKSB7XHJcblx0XHRcdHRoaXMubG93ZXJUZXh0ID0gJ1BsZWFzZSB1cGxvYWQgYmVuZWZpY2lhbCBvd25lciBkb2N1bWVudHMgYmVsb3cnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRASW5wdXQoKSBkb2N1bWVudFN0YXR1cztcclxuXHRzZWxlY3RlZCA9IFtdO1xyXG5cdHRvZ2dsZSA9IFtdO1xyXG5cdGN1c3RvbUNsYXNzO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRjb25zb2xlLmxvZygndGhpcy5kb2N1bWVudFN0YXR1cycsIHRoaXMuZG9jdW1lbnRTdGF0dXMpO1xyXG5cdFx0aWYgKHRoaXMuZG9jdW1lbnRTdGF0dXMpIHtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmRvY3VtZW50U3RhdHVzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0dGhpcy50b2dnbGVbal0gPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnRvZ2dsZVswXSA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkWzBdID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdHVwbG9hZERvYyh2YWwpIHtcclxuXHRcdGNvbnNvbGUubG9nKCd2YWwnLCB2YWwpO1xyXG5cdFx0dGhpcy51cGxvYWQuZW1pdCh2YWwpO1xyXG5cdH1cclxuXHJcblx0Z2V0RG9jVHlwZVN0cmluZyhkb2NUeXBlKTogc3RyaW5nIHtcclxuXHRcdHN3aXRjaCAoZG9jVHlwZSkge1xyXG5cdFx0XHRjYXNlICdpZGNhcmQnOlxyXG5cdFx0XHRcdHJldHVybiAnR292ZXJubWVudCBJc3N1ZWQgSUQnO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdwYXNzcG9ydCc6XHJcblx0XHRcdFx0cmV0dXJuICdQYXNzcG9ydCc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xpY2Vuc2UnOlxyXG5cdFx0XHRcdHJldHVybiBcIkRyaXZlcidzIExpY2Vuc2VcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gZG9jVHlwZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldERvY0ZhaWx1cmVTdHJpbmcoZmFpbHVyZVR5cGUpOiBzdHJpbmcge1xyXG5cdFx0c3dpdGNoIChmYWlsdXJlVHlwZSkge1xyXG5cdFx0XHRjYXNlICdTY2FuTm90UmVhZGFibGUnOlxyXG5cdFx0XHRcdHJldHVybiAnU2NhbiBOb3QgUmVhZGFibGUnO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdTY2FuTm90VXBsb2FkZWQnOlxyXG5cdFx0XHRcdHJldHVybiAnU2NhbiBOb3QgVXBsb2FkZWQnO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdTY2FuSWRUeXBlTm90U3VwcG9ydGVkJzpcclxuXHRcdFx0XHRyZXR1cm4gJ0lEIFR5cGUgTm90IFN1cHBvcnRlZCc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ1NjYW5OYW1lTWlzbWF0Y2gnOlxyXG5cdFx0XHRcdHJldHVybiAnTmFtZSBNaXNtYXRjaCc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmV0dXJuIGZhaWx1cmVUeXBlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YWN0aXZlKGkpIHtcclxuXHRcdHRoaXMuc2VsZWN0ZWRbaV0gPSBpO1xyXG5cdFx0dGhpcy50b2dnbGVbaV0gPSAhdGhpcy50b2dnbGVbaV07XHJcblx0XHRpZiAodGhpcy5kb2N1bWVudFN0YXR1cykge1xyXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZG9jdW1lbnRTdGF0dXMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRpZiAoaSAhPSBqKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkW2pdID0gbnVsbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICghdGhpcy50b2dnbGVbaV0pIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFtpXSA9IG51bGw7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5kb2N1bWVudFN0YXR1cykge1xyXG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kb2N1bWVudFN0YXR1cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdFx0aWYgKGkgIT0gaikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZVtqXSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=