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
        this._beneficialOwnerStatus = val;
        if (val) {
            this.lowerText = 'Please upload beneficial owner documents below';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hY2hzZXR0aW5ncy9zdWt1LWFjaHNldHRpbmdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FFWixNQUFNLGVBQWUsQ0FBQztBQU92QixNQUFNLE9BQU8sd0JBQXdCO0lBNkJwQztRQTNCUyxVQUFLLEdBQUcsaUJBQWlCLENBQUM7UUFDMUIsWUFBTyxHQUFHLGdCQUFnQixDQUFDO1FBQzNCLGFBQVEsR0FBRyxlQUFlLENBQUM7UUFDM0IsZUFBVSxHQUFHLGNBQWMsQ0FBQztRQUM1QixlQUFVLEdBQUcsWUFBWSxDQUFDO1FBQzFCLGlCQUFZLEdBQUcsYUFBYSxDQUFDO1FBQzdCLDRCQUF1QixHQUFHLG9CQUFvQixDQUFDO1FBQy9DLG9CQUFlLEdBQUcsa0JBQWtCLENBQUM7UUFDckMsY0FBUyxHQUFHLDZDQUE2QyxDQUFDO1FBQzFELGdCQUFXLEdBQUcsYUFBYSxDQUFDO1FBQzVCLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFDekIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFZdEMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFdBQU0sR0FBRyxFQUFFLENBQUM7SUFFRyxDQUFDOzs7O0lBZGhCLElBQ0kscUJBQXFCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBQ0QsSUFBSSxxQkFBcUIsQ0FBQyxHQUFHO1FBQzVCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxHQUFHLENBQUM7UUFDbEMsSUFBSSxHQUFHLEVBQUU7WUFDUixJQUFJLENBQUMsU0FBUyxHQUFHLGdE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QyxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSztzQ0FDTCxLQUFLOzhCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7cUJBQ0wsTUFBTTtxQkFDTixNQUFNO29DQUNOLEtBQUs7NkJBVUwsS0FBSzs7OztJQXhCTiwwREFBdUI7O0lBQ3ZCLHlDQUFtQzs7SUFDbkMsMkNBQW9DOztJQUNwQyw0Q0FBb0M7O0lBQ3BDLDhDQUFxQzs7SUFDckMsOENBQW1DOztJQUNuQyxnREFBc0M7O0lBQ3RDLDJEQUF3RDs7SUFDeEQsbURBQThDOztJQUM5Qyw2Q0FBbUU7O0lBQ25FLCtDQUFxQzs7SUFDckMsOENBQW1DOztJQUNuQywwQ0FBc0M7O0lBQ3RDLDBDQUFzQzs7SUFXdEMsa0RBQXdCOztJQUN4Qiw0Q0FBYzs7SUFDZCwwQ0FBWTs7SUFDWiwrQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRJbnB1dCxcclxuXHRPdXRwdXQsXHJcblx0RXZlbnRFbWl0dGVyLFxyXG5cdEFmdGVyVmlld0luaXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3N1a3UtYWNoLXNldHRpbmcnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWFjaHNldHRpbmdzLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQuc2NzcycgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VBQ0hTZXR0aW5nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblx0X2JlbmVmaWNpYWxPd25lclN0YXR1cztcclxuXHRASW5wdXQoKSB0aXRsZSA9ICcgUGF5bWVudCBQb3J0YWwnO1xyXG5cdEBJbnB1dCgpIHRpdGxlSWQgPSAnIHBheW1lbnRQb3J0YWwnO1xyXG5cdEBJbnB1dCgpIHN1YlRpdGxlID0gJyBBQ0ggU2V0dGluZ3MnO1xyXG5cdEBJbnB1dCgpIHN1YlRpdGxlSWQgPSAnIEFDSFNldHRpbmdzJztcclxuXHRASW5wdXQoKSBzdWJDb250ZW50ID0gJ3VudmVyaWZpZWQnO1xyXG5cdEBJbnB1dCgpIHN1YkNvbnRlbnRJZCA9ICcgdW52ZXJpZmllZCc7XHJcblx0QElucHV0KCkgU2V0dXBBQ0hQYXltZW50c0J0blRleHQgPSAnU2V0dXAgQUNIIFBheW1lbnRzJztcclxuXHRASW5wdXQoKSBwYXltZW50QnV0dG9uSWQgPSAnU2V0dXBBQ0hQYXltZW50cyc7XHJcblx0QElucHV0KCkgbG93ZXJUZXh0ID0gJ1BsZWFzZSBzZXR1cCB5b3VyIEFDSCBwYXltZW50IHByb2ZpbGUgYmVsb3cnO1xyXG5cdEBJbnB1dCgpIGxvd2VyVGV4dElkID0gJ2xvd2VyVGV4dElkJztcclxuXHRASW5wdXQoKSBzdWJ0aXRsZUlkID0gJ3N1YnRpdGxlSWQnO1xyXG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIHVwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRASW5wdXQoKVxyXG5cdGdldCBiZW5lZmljaWFsT3duZXJTdGF0dXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fYmVuZWZpY2lhbE93bmVyU3RhdHVzO1xyXG5cdH1cclxuXHRzZXQgYmVuZWZpY2lhbE93bmVyU3RhdHVzKHZhbCkge1xyXG5cdFx0dGhpcy5fYmVuZWZpY2lhbE93bmVyU3RhdHVzID0gdmFsO1xyXG5cdFx0aWYgKHZhbCkge1xyXG5cdFx0XHR0aGlzLmxvd2VyVGV4dCA9ICdQbGVhc2UgdXBsb2FkIGJlbmVmaWNpYWwgb3duZXIgZG9jdW1lbnRzIGJlbG93JztcclxuXHRcdH1cclxuXHR9XHJcblx0QElucHV0KCkgZG9jdW1lbnRTdGF0dXM7XHJcblx0c2VsZWN0ZWQgPSBbXTtcclxuXHR0b2dnbGUgPSBbXTtcclxuXHRjdXN0b21DbGFzcztcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0aWYgKHRoaXMuZG9jdW1lbnRTdGF0dXMpIHtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmRvY3VtZW50U3RhdHVzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0dGhpcy50b2dnbGVbal0gPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnRvZ2dsZVswXSA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkWzBdID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdHVwbG9hZERvYyh2YWwpIHtcclxuXHRcdHRoaXMudXBsb2FkLmVtaXQodmFsKTtcclxuXHR9XHJcblxyXG5cdGdldERvY1R5cGVTdHJpbmcoZG9jVHlwZSk6IHN0cmluZyB7XHJcblx0XHRzd2l0Y2ggKGRvY1R5cGUpIHtcclxuXHRcdFx0Y2FzZSAnaWRjYXJkJzpcclxuXHRcdFx0XHRyZXR1cm4gJ0dvdmVybm1lbnQgSXNzdWVkIElEJztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAncGFzc3BvcnQnOlxyXG5cdFx0XHRcdHJldHVybiAnUGFzc3BvcnQnO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdsaWNlbnNlJzpcclxuXHRcdFx0XHRyZXR1cm4gXCJEcml2ZXIncyBMaWNlbnNlXCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmV0dXJuIGRvY1R5cGU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXREb2NGYWlsdXJlU3RyaW5nKGZhaWx1cmVUeXBlKTogc3RyaW5nIHtcclxuXHRcdHN3aXRjaCAoZmFpbHVyZVR5cGUpIHtcclxuXHRcdFx0Y2FzZSAnU2Nhbk5vdFJlYWRhYmxlJzpcclxuXHRcdFx0XHRyZXR1cm4gJ1NjYW4gTm90IFJlYWRhYmxlJztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnU2Nhbk5vdFVwbG9hZGVkJzpcclxuXHRcdFx0XHRyZXR1cm4gJ1NjYW4gTm90IFVwbG9hZGVkJztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnU2NhbklkVHlwZU5vdFN1cHBvcnRlZCc6XHJcblx0XHRcdFx0cmV0dXJuICdJRCBUeXBlIE5vdCBTdXBwb3J0ZWQnO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdTY2FuTmFtZU1pc21hdGNoJzpcclxuXHRcdFx0XHRyZXR1cm4gJ05hbWUgTWlzbWF0Y2gnO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiBmYWlsdXJlVHlwZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFjdGl2ZShpKSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkW2ldID0gaTtcclxuXHRcdHRoaXMudG9nZ2xlW2ldID0gIXRoaXMudG9nZ2xlW2ldO1xyXG5cdFx0aWYgKHRoaXMuZG9jdW1lbnRTdGF0dXMpIHtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmRvY3VtZW50U3RhdHVzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0aWYgKGkgIT0gaikge1xyXG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZFtqXSA9IG51bGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoIXRoaXMudG9nZ2xlW2ldKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRbaV0gPSBudWxsO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuZG9jdW1lbnRTdGF0dXMpIHtcclxuXHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZG9jdW1lbnRTdGF0dXMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdGlmIChpICE9IGopIHtcclxuXHRcdFx0XHRcdFx0dGhpcy50b2dnbGVbal0gPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19