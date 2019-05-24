/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, } from '@angular/core';
var SukuACHSettingsComponent = /** @class */ (function () {
    function SukuACHSettingsComponent() {
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
    Object.defineProperty(SukuACHSettingsComponent.prototype, "beneficialOwnerStatus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._beneficialOwnerStatus;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._beneficialOwnerStatus = val;
            if (val) {
                this.lowerText = 'Please upload beneficial owner documents below';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SukuACHSettingsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.documentStatus) {
            for (var j = 0; j < this.documentStatus.length; j++) {
                this.toggle[j] = false;
            }
            this.toggle[0] = true;
        }
    };
    /**
     * @return {?}
     */
    SukuACHSettingsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.selected[0] = null;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    SukuACHSettingsComponent.prototype.uploadDoc = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.upload.emit(val);
    };
    /**
     * @param {?} docType
     * @return {?}
     */
    SukuACHSettingsComponent.prototype.getDocTypeString = /**
     * @param {?} docType
     * @return {?}
     */
    function (docType) {
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
    };
    /**
     * @param {?} failureType
     * @return {?}
     */
    SukuACHSettingsComponent.prototype.getDocFailureString = /**
     * @param {?} failureType
     * @return {?}
     */
    function (failureType) {
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
    };
    /**
     * @param {?} i
     * @return {?}
     */
    SukuACHSettingsComponent.prototype.active = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.selected[i] = i;
        this.toggle[i] = !this.toggle[i];
        if (this.documentStatus) {
            for (var j = 0; j < this.documentStatus.length; j++) {
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
                for (var j = 0; j < this.documentStatus.length; j++) {
                    if (i != j) {
                        this.toggle[j] = false;
                    }
                }
            }
        }
    };
    SukuACHSettingsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-ach-setting',
                    template: "<div class=\"col poppinsFont p-0\">\n  <div class=\"col-sm-12 text-center\">\n    <span class=\"font20\" id=\"{{titleId}}\">{{title}}</span>\n  </div>\n  <div class=\"col-sm-12 mt-4\">\n    <div class=\"form-group col-xs-12 col Rectangle-2 p-3\">\n      <div class=\"col-sm-12 text-center encode-font\">\n        <div class=\"col\">\n          <span class=\"text-center subTitle\" id=\"{{subtitleId}}\"> {{subTitle}}</span>\n          <br>\n          <p class=\"text-center mt-2 mb-2 text-capitalize\" id=\"{{subContentId}}\">Payment profile status: <b\n              [ngClass]=\"{'statusVerified': subContent == 'verified', 'status': subContent !== 'verified'}\">{{subContent}}</b>\n          </p>\n          <p class=\"text-center mt-2 mb-2\" *ngIf=\"_beneficialOwnerStatus\" id=\"beneficial-owner-status\">Beneficial Owner\n            Status: <b class=\"statusUnverified\">Documentation Upload Needed</b>\n          </p>\n          <p class=\"text-center encode-font mb-2\" *ngIf=\"subContent == 'document'\">Note: Document verification may take\n            2-3 business days\n            to get verified.</p>\n        </div>\n      </div>\n      <div class=\"col-sm-12 text-center mt-2\">\n        <i> <span class=\"font12\" id=\"{{lowerTextId}}\">{{lowerText}} </span> </i>\n      </div>\n      <div class=\"col pl-5 pr-5 pb-2 pt-2\" *ngIf=\"subContent == 'document'\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <p class=\"doclabel mt-4\" *ngIf=\"documentStatus?.length > 0\"><b>Document Status:</b></p>\n          </div>\n          <div class=\"col mt-3 mb-3 text-right pr-sm-4 mr-sm-1\" *ngIf=\"documentStatus?.length > 0\">\n            <span class=\"secondary-btn c-pointer\">\n              <a class=\"secondary-btn c-pointer\" id=\"upload\" (click)=\"action.emit()\">\n                Upload Document\n              </a>\n            </span>\n          </div>\n        </div>\n        <div class=\"col document pl-sm-4 mb-3\" *ngFor=\"let doc of documentStatus;let imageIndex = index;\">\n          <div class=\"row p-2\">\n            <div class=\"col\">\n              <p class=\"mb-0 pb-1\">Doc Type:</p>\n              <p class=\"mb-0\"><b>{{doc?.type}}</b></p>\n            </div>\n            <div class=\"col\">\n              <p class=\"mb-0 pb-1\">Status:</p>\n              <p class=\"mb-0\"><b>{{doc?.status}}</b></p>\n            </div>\n            <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\n            <div class=\"col\" *ngIf=\"doc?.failureReason\">\n              <p class=\"mb-0 pb-1\">Failure Reason:</p>\n              <p class=\"mb-0\"><b>{{doc?.failureReason}}</b></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col pb-4\" id=\"beneficialOwnerBlock\">\n        <div class=\"col\">\n          <p class=\"doclabel mt-4\" *ngIf=\"_beneficialOwnerStatus\"><b>Beneficial Owners:</b></p>\n        </div>\n        <div class=\"col pl-sm-4 mb-3\" *ngFor=\"let user of _beneficialOwnerStatus;let i = index;\">\n          <div class=\"col card-line mt-3 mb-4 c-pointer\" data-toggle=\"collapse\" [attr.data-target]=\"'#ownerBlock' + i\"\n            (click)=\"active(i)\">\n            <div class=\"row\">\n              <label class=\"m-2 pl-3 owner c-pointer\">\n                Beneficial Owner {{i+1}}\n              </label>\n              <label class=\"d-flex justify-content-end col pl-0 c-pointer\">\n                <span class=\"pt-3 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] != i}\">\n                  <i class=\"fa fa-arrow-circle-down icon\"></i>\n                </span>\n                <span class=\"pt-3 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] == i}\">\n                  <i class=\"fa fa-arrow-circle-up icon\"></i>\n                </span>\n              </label>\n            </div>\n          </div>\n          <div class=\"col collapse p-0\" [ngClass]=\"{'show': i == 0 }\" data-parent=\"#beneficialOwnerBlock\"\n            id=\"ownerBlock{{i}}\">\n            <div class=\"col\">\n              <div class=\"row p-2\">\n                <div class=\"col\">\n                  <p class=\"mb-0 pb-1\">Beneficial Owner Name:</p>\n                  <p class=\"mb-0\"><b>{{user?.firstName}}</b></p>\n                </div>\n                <div class=\"col\">\n                  <p class=\"mb-0 pb-1\">Status:</p>\n                  <p class=\"mb-0\"><b>{{user?.verificationStatus}}</b></p>\n                </div>\n                <div class=\"col\" *ngIf=\"user?.verificationStatus == 'document'\">\n                  <div class=\"col d-flex justify-content-center mt-3 mb-3\">\n                    <button class=\"btn btn-info\" (click)=\"uploadDoc(user)\" id=\"uploadDocument\">Upload Document</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col pl-4 pr-4 pb-2 pt-1\" *ngIf=\"user?.verificationStatus == 'document'\">\n              <p class=\"doclabel mt-4\" *ngIf=\"user?.data?.length > 0 \"><b>Document Status:</b></p>\n              <div class=\"col document pl-sm-4 mb-3\" *ngFor=\"let doc of user?.data;let statusIndex = index;\">\n                <div class=\"row p-2\">\n                  <div class=\"col\">\n                    <p class=\"mb-0 pb-1\">Doc Type:</p>\n                    <p class=\"mb-0\"><b>{{getDocTypeString(doc?.type)}}</b></p>\n                  </div>\n                  <div class=\"col\">\n                    <p class=\"mb-0 pb-1\">Status:</p>\n                    <p class=\"mb-0\"><b>{{doc?.status}}</b></p>\n                  </div>\n                  <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\n                  <div class=\"col\" *ngIf=\"doc?.failureReason\">\n                    <p class=\"mb-0 pb-1\">Failure-Reason:</p>\n                    <p class=\"mb-0\"><b>{{getDocFailureString(doc?.failureReason)}}</b></p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12 mt-2 mb-4 text-center\" *ngIf=\"(subContent == 'not complete' ) || (subContent != 'verified' ) && (documentStatus?.length == 0 && (subContent == 'document'))\">\n        <button class=\" btn textBold\" id=\"{{paymentButtonId}}\"\n          (click)=\"action.emit()\">{{SetupACHPaymentsBtnText}}</button>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: [".redText{color:red;font-size:12px}.font12{font-size:12px}.textBold{font-weight:700}.Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.poppinsFont{font-family:Poppins}.btn{font-size:12px!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:balck}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#000;outline:0!important;box-shadow:none!important}.font20{font-size:25px}.subTitle{font-weight:700!important;font-family:Poppins,sans-serif!important}.statusUnverified{color:red;letter-spacing:.3px}.statusVerified{color:#99c002!important;letter-spacing:.3px}.docLabel{font-family:Poppins,sans-serif!important;letter-spacing:.1px}.document,.mat-chip.mat-standard-chip{background-color:#e0e0e059!important;color:rgba(0,0,0,.87)!important;border-radius:0!important;border-left:3px solid #a7bf2e!important;min-height:40px!important}#document p{font-size:1.5rem}@media screen and (max-width:575px){#document p{font-size:1.4rem}}.card-line{background-color:#fff;color:#2c2727;height:46px;border-radius:2px;letter-spacing:.5px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2);border-top:3px solid #bfd131c9}.display-2{font-size:6.2rem!important;line-height:1.5!important}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.upload-btn{color:#000;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.3rem;border-bottom:3px solid #a7bf2e}.secondary-btn{font-family:Poppins,sans-serif!important;font-size:14px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important;border-bottom:3.5px solid #a7bf2e}.secondary-btn:hover{cursor:pointer!important}.encode-font{font-family:'Encode Sans',sans-serif!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuACHSettingsComponent.ctorParameters = function () { return []; };
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
    return SukuACHSettingsComponent;
}());
export { SukuACHSettingsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hY2hzZXR0aW5ncy9zdWt1LWFjaHNldHRpbmdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FFWixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQWtDQztRQTNCUyxVQUFLLEdBQUcsaUJBQWlCLENBQUM7UUFDMUIsWUFBTyxHQUFHLGdCQUFnQixDQUFDO1FBQzNCLGFBQVEsR0FBRyxlQUFlLENBQUM7UUFDM0IsZUFBVSxHQUFHLGNBQWMsQ0FBQztRQUM1QixlQUFVLEdBQUcsWUFBWSxDQUFDO1FBQzFCLGlCQUFZLEdBQUcsYUFBYSxDQUFDO1FBQzdCLDRCQUF1QixHQUFHLG9CQUFvQixDQUFDO1FBQy9DLG9CQUFlLEdBQUcsa0JBQWtCLENBQUM7UUFDckMsY0FBUyxHQUFHLDZDQUE2QyxDQUFDO1FBQzFELGdCQUFXLEdBQUcsYUFBYSxDQUFDO1FBQzVCLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFDekIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFZdEMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFdBQU0sR0FBRyxFQUFFLENBQUM7SUFFRyxDQUFDO0lBZGhCLHNCQUNJLDJEQUFxQjs7OztRQUR6QjtZQUVDLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO1FBQ3BDLENBQUM7Ozs7O1FBQ0QsVUFBMEIsR0FBRztZQUM1QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsR0FBRyxDQUFDO1lBQ2xDLElBQUksR0FBRyxFQUFFO2dCQUNSLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0RBQWdELENBQUM7YUFDbEU7UUFDRixD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RSxrQkFBa0I7b0JBQzVCLDZ4TUFBZ0Q7O2lCQUVoRDs7Ozs7d0JBR0MsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7MENBQ0wsS0FBSztrQ0FDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLE1BQU07eUJBQ04sTUFBTTt3Q0FDTixLQUFLO2lDQVVMLEtBQUs7O0lBa0ZQLCtCQUFDO0NBQUEsQUFoSEQsSUFnSEM7U0EzR1ksd0JBQXdCOzs7SUFDcEMsMERBQXVCOztJQUN2Qix5Q0FBbUM7O0lBQ25DLDJDQUFvQzs7SUFDcEMsNENBQW9DOztJQUNwQyw4Q0FBcUM7O0lBQ3JDLDhDQUFtQzs7SUFDbkMsZ0RBQXNDOztJQUN0QywyREFBd0Q7O0lBQ3hELG1EQUE4Qzs7SUFDOUMsNkNBQW1FOztJQUNuRSwrQ0FBcUM7O0lBQ3JDLDhDQUFtQzs7SUFDbkMsMENBQXNDOztJQUN0QywwQ0FBc0M7O0lBV3RDLGtEQUF3Qjs7SUFDeEIsNENBQWM7O0lBQ2QsMENBQVk7O0lBQ1osK0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdE9uSW5pdCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRBZnRlclZpZXdJbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1hY2gtc2V0dGluZycsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWFjaHNldHRpbmdzLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtYWNoc2V0dGluZ3MuY29tcG9uZW50LnNjc3MnIF0sXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VBQ0hTZXR0aW5nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cdF9iZW5lZmljaWFsT3duZXJTdGF0dXM7XG5cdEBJbnB1dCgpIHRpdGxlID0gJyBQYXltZW50IFBvcnRhbCc7XG5cdEBJbnB1dCgpIHRpdGxlSWQgPSAnIHBheW1lbnRQb3J0YWwnO1xuXHRASW5wdXQoKSBzdWJUaXRsZSA9ICcgQUNIIFNldHRpbmdzJztcblx0QElucHV0KCkgc3ViVGl0bGVJZCA9ICcgQUNIU2V0dGluZ3MnO1xuXHRASW5wdXQoKSBzdWJDb250ZW50ID0gJ3VudmVyaWZpZWQnO1xuXHRASW5wdXQoKSBzdWJDb250ZW50SWQgPSAnIHVudmVyaWZpZWQnO1xuXHRASW5wdXQoKSBTZXR1cEFDSFBheW1lbnRzQnRuVGV4dCA9ICdTZXR1cCBBQ0ggUGF5bWVudHMnO1xuXHRASW5wdXQoKSBwYXltZW50QnV0dG9uSWQgPSAnU2V0dXBBQ0hQYXltZW50cyc7XG5cdEBJbnB1dCgpIGxvd2VyVGV4dCA9ICdQbGVhc2Ugc2V0dXAgeW91ciBBQ0ggcGF5bWVudCBwcm9maWxlIGJlbG93Jztcblx0QElucHV0KCkgbG93ZXJUZXh0SWQgPSAnbG93ZXJUZXh0SWQnO1xuXHRASW5wdXQoKSBzdWJ0aXRsZUlkID0gJ3N1YnRpdGxlSWQnO1xuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgdXBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRASW5wdXQoKVxuXHRnZXQgYmVuZWZpY2lhbE93bmVyU3RhdHVzKCkge1xuXHRcdHJldHVybiB0aGlzLl9iZW5lZmljaWFsT3duZXJTdGF0dXM7XG5cdH1cblx0c2V0IGJlbmVmaWNpYWxPd25lclN0YXR1cyh2YWwpIHtcblx0XHR0aGlzLl9iZW5lZmljaWFsT3duZXJTdGF0dXMgPSB2YWw7XG5cdFx0aWYgKHZhbCkge1xuXHRcdFx0dGhpcy5sb3dlclRleHQgPSAnUGxlYXNlIHVwbG9hZCBiZW5lZmljaWFsIG93bmVyIGRvY3VtZW50cyBiZWxvdyc7XG5cdFx0fVxuXHR9XG5cdEBJbnB1dCgpIGRvY3VtZW50U3RhdHVzO1xuXHRzZWxlY3RlZCA9IFtdO1xuXHR0b2dnbGUgPSBbXTtcblx0Y3VzdG9tQ2xhc3M7XG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRpZiAodGhpcy5kb2N1bWVudFN0YXR1cykge1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmRvY3VtZW50U3RhdHVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHRoaXMudG9nZ2xlW2pdID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRvZ2dsZVswXSA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuc2VsZWN0ZWRbMF0gPSBudWxsO1xuXHR9XG5cblx0dXBsb2FkRG9jKHZhbCkge1xuXHRcdHRoaXMudXBsb2FkLmVtaXQodmFsKTtcblx0fVxuXG5cdGdldERvY1R5cGVTdHJpbmcoZG9jVHlwZSk6IHN0cmluZyB7XG5cdFx0c3dpdGNoIChkb2NUeXBlKSB7XG5cdFx0XHRjYXNlICdpZGNhcmQnOlxuXHRcdFx0XHRyZXR1cm4gJ0dvdmVybm1lbnQgSXNzdWVkIElEJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdwYXNzcG9ydCc6XG5cdFx0XHRcdHJldHVybiAnUGFzc3BvcnQnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2xpY2Vuc2UnOlxuXHRcdFx0XHRyZXR1cm4gXCJEcml2ZXIncyBMaWNlbnNlXCI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIGRvY1R5cGU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGdldERvY0ZhaWx1cmVTdHJpbmcoZmFpbHVyZVR5cGUpOiBzdHJpbmcge1xuXHRcdHN3aXRjaCAoZmFpbHVyZVR5cGUpIHtcblx0XHRcdGNhc2UgJ1NjYW5Ob3RSZWFkYWJsZSc6XG5cdFx0XHRcdHJldHVybiAnU2NhbiBOb3QgUmVhZGFibGUnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ1NjYW5Ob3RVcGxvYWRlZCc6XG5cdFx0XHRcdHJldHVybiAnU2NhbiBOb3QgVXBsb2FkZWQnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ1NjYW5JZFR5cGVOb3RTdXBwb3J0ZWQnOlxuXHRcdFx0XHRyZXR1cm4gJ0lEIFR5cGUgTm90IFN1cHBvcnRlZCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnU2Nhbk5hbWVNaXNtYXRjaCc6XG5cdFx0XHRcdHJldHVybiAnTmFtZSBNaXNtYXRjaCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIGZhaWx1cmVUeXBlO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRhY3RpdmUoaSkge1xuXHRcdHRoaXMuc2VsZWN0ZWRbaV0gPSBpO1xuXHRcdHRoaXMudG9nZ2xlW2ldID0gIXRoaXMudG9nZ2xlW2ldO1xuXHRcdGlmICh0aGlzLmRvY3VtZW50U3RhdHVzKSB7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZG9jdW1lbnRTdGF0dXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0aWYgKGkgIT0gaikge1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRbal0gPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghdGhpcy50b2dnbGVbaV0pIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRbaV0gPSBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodGhpcy5kb2N1bWVudFN0YXR1cykge1xuXHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZG9jdW1lbnRTdGF0dXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRpZiAoaSAhPSBqKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZVtqXSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19