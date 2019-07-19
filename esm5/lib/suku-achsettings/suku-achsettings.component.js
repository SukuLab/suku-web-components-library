/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, } from '@angular/core';
var SukuACHSettingsComponent = /** @class */ (function () {
    function SukuACHSettingsComponent() {
        this.title = 'Payment Portal';
        this.titleId = 'paymentPortal';
        this.titleCustomClass = '';
        this.subTitle = 'ACH Settings';
        this.subTitleId = 'ACHSettings';
        this.subTitleCustomClass = '';
        this.labelOne = 'Payment profile status';
        this.labelOneCustomClass = '';
        this.labelOneId = '';
        this.labelTwo = 'Beneficial Owner';
        this.labelTwoCustomClass = '';
        this.labelTwoId = 'Beneficial Owner';
        this.labelThree = 'Status:';
        this.labelThreeCustomClass = '';
        this.labelThreeId = 'Beneficial Owner';
        this.labelFour = 'Documentation Upload Needed';
        this.labelFourCustomClass = '';
        this.labelFourCustomClassId = 'Documentation Upload';
        this.labelFive = 'Note: Document verification may take 2-3 business days to get verified.';
        this.labelFiveCustomClass = '';
        this.labelFiveId = '';
        this.labelSix = 'Please setup your ACH payment profile below';
        this.labelSixCustomClass = '';
        this.labelSixId = '';
        this.labelSeven = 'Document Status:';
        this.labelSevenCustomClass = '';
        this.labelSevenId = '';
        this.labelEight = 'Upload Document';
        this.labelEightCustomClass = '';
        this.labelEightId = 'upload';
        this.subContentCustomClass = '';
        this.subContentId = 'unverified';
        this.subContent = 'unverified';
        this.buttonLabel = 'Setup ACH Payments';
        this.buttonLabelId = 'setupACHPayments';
        this.paymentButtonId = 'SetupACHPayments';
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
                this.labelSix = 'Please upload beneficial owner documents below';
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
                    template: "<div class=\"col poppinsFont p-0\">\n  <div class=\"col-sm-12 text-center\">\n    <span class=\"title {{titleCustomClass}}\" id=\"{{titleId}}\">{{title}}</span>\n  </div>\n  <div class=\"col-sm-12 mt-4\">\n    <div class=\"form-group col-xs-12 col achsetting-box p-3\">\n      <div class=\"col-sm-12 text-center encode-font\">\n        <div class=\"col\">\n          <span class=\"text-center subTitle {{subTitleCustomClass}}\" id=\"{{subtitleId}}\">{{subTitle}}</span>\n          <br>\n          <p class=\"text-center mt-2 mb-2 text-capitalize\">\n            <span [class]=\"labelOneCustomClass\" [id]=\"labelOneId\"></span>{{labelOne}}\n            <span [class]=\"subContentCustomClass\"\n              [ngClass]=\"{'statusVerified': subContent == 'verified', 'status': subContent !== 'verified'}\"\n              [id]=\"subContentId\" class=\"text-bold\">{{subContent}}</span>\n          </p>\n          <p class=\"text-center mt-2 mb-2\" *ngIf=\"_beneficialOwnerStatus\" id=\"beneficial-owner-status\">\n            <span [class]=\"labelTwoCustomClass\" [id]=\"labelTwoId\">{{labelTwo}}</span>\n            <span [class]=\"labelThreeCustomClass\" [id]=\"labelThreeId\">{{labelThree}}</span>\n            <span class=\"statusUnverified {{labelFourCustomClass}}\" id=\"labelFourCustomClassId\">{{labelFour}}</span>\n          </p>\n          <p class=\"text-center encode-font mb-2 {{labelFiveCustomClass}}\" [id]=\"labelFiveId\"\n            *ngIf=\"subContent == 'document'\">{{labelFive}}</p>\n        </div>\n      </div>\n      <div class=\"col-sm-12 text-center mt-2\">\n        <i> <span class=\"font12 {{labelSixCustomClass}}\" [id]=\"labelSixId\">{{labelSix}} </span>\n        </i>\n      </div>\n      <div class=\"col pl-5 pr-5 pb-2 pt-2\" *ngIf=\"subContent == 'document'\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <p class=\"doclabel mt-4 {{labelSevenCustomClass}}\" *ngIf=\"documentStatus?.length > 0\" [id]=\"labelSevenId\">\n              <b>{{labelSeven}}</b></p>\n          </div>\n          <div class=\"col mt-3 mb-3 text-right pr-sm-4 mr-sm-1\" *ngIf=\"documentStatus?.length > 0\">\n            <span class=\"secondary-btn c-pointer\">\n              <a class=\"secondary-btn c-pointer {{labelEightCustomClass}}\" [id]=\"labelEightId\" (click)=\"action.emit()\">\n                {{labelEight}}\n              </a>\n            </span>\n          </div>\n        </div>\n        <div class=\"col document pl-sm-4 mb-3\" *ngFor=\"let doc of documentStatus;let imageIndex = index;\">\n          <div class=\"row p-2\">\n            <div class=\"col\">\n              <p class=\"mb-0 pb-1\">Doc Type:</p>\n              <p class=\"mb-0\"><b>{{doc?.type}}</b></p>\n            </div>\n            <div class=\"col\">\n              <p class=\"mb-0 pb-1\">Status:</p>\n              <p class=\"mb-0\"><b>{{doc?.status}}</b></p>\n            </div>\n            <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\n            <div class=\"col\" *ngIf=\"doc?.failureReason\">\n              <p class=\"mb-0 pb-1\">Failure Reason:</p>\n              <p class=\"mb-0\"><b>{{doc?.failureReason}}</b></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col pb-4\" id=\"beneficialOwnerBlock\">\n        <div class=\"col\">\n          <p class=\"doclabel mt-4\" *ngIf=\"_beneficialOwnerStatus\"><b>Beneficial Owners:</b></p>\n        </div>\n        <div class=\"col pl-sm-4 mb-3\" *ngFor=\"let user of _beneficialOwnerStatus;let i = index;\">\n          <div class=\"col card-line mt-3 mb-4 c-pointer\" data-toggle=\"collapse\" [attr.data-target]=\"'#ownerBlock' + i\"\n            (click)=\"active(i)\">\n            <div class=\"row\">\n              <label class=\"m-2 pl-3 owner c-pointer\">\n                Beneficial Owner {{i+1}}\n              </label>\n              <label class=\"d-flex justify-content-end col pl-0 c-pointer\">\n                <span class=\"pt-3 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] != i}\">\n                  <i class=\"fa fa-arrow-circle-down icon\"></i>\n                </span>\n                <span class=\"pt-3 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] == i}\">\n                  <i class=\"fa fa-arrow-circle-up icon\"></i>\n                </span>\n              </label>\n            </div>\n          </div>\n\n          <div class=\"col collapse p-0\" [ngClass]=\"{'show': i == 0 }\" data-parent=\"#beneficialOwnerBlock\"\n            id=\"ownerBlock{{i}}\">\n            <div class=\"col\">\n              <div class=\"row p-2\">\n                <div class=\"col\">\n                  <p class=\"mb-0 pb-1\">Beneficial Owner Name:</p>\n                  <p class=\"mb-0\"><b>{{user?.firstName}}</b></p>\n                </div>\n                <div class=\"col\">\n                  <p class=\"mb-0 pb-1\">Status:</p>\n                  <p class=\"mb-0\"><b>{{user?.verificationStatus}}</b></p>\n                </div>\n                <div class=\"col\" *ngIf=\"user?.verificationStatus == 'document'\">\n                  <div class=\"col d-flex justify-content-center mt-3 mb-3\">\n                    <button class=\"btn btn-info\" (click)=\"uploadDoc(user)\" id=\"uploadDocument\">Upload Document</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col pl-4 pr-4 pb-2 pt-1\" *ngIf=\"user?.verificationStatus == 'document'\">\n              <p class=\"doclabel mt-4\" *ngIf=\"user?.data?.length > 0 \"><b>Document Status:</b></p>\n              <div class=\"col document pl-sm-4 mb-3\" *ngFor=\"let doc of user?.data;let statusIndex = index;\">\n                <div class=\"row p-2\">\n                  <div class=\"col\">\n                    <p class=\"mb-0 pb-1\">Doc Type:</p>\n                    <p class=\"mb-0\"><b>{{getDocTypeString(doc?.type)}}</b></p>\n                  </div>\n                  <div class=\"col\">\n                    <p class=\"mb-0 pb-1\">Status:</p>\n                    <p class=\"mb-0\"><b>{{doc?.status}}</b></p>\n                  </div>\n                  <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\n                  <div class=\"col\" *ngIf=\"doc?.failureReason\">\n                    <p class=\"mb-0 pb-1\">Failure-Reason:</p>\n                    <p class=\"mb-0\"><b>{{getDocFailureString(doc?.failureReason)}}</b></p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12 mt-2 mb-4 text-center\" *ngIf=\"(subContent == 'not complete' ) || (subContent != 'verified' ) && (documentStatus?.length == 0 &&\n         (subContent == 'document'))\">\n        <button class=\"btn textBold\" id=\"{{buttonLabelId}}\" (click)=\"action.emit()\">{{buttonLabel}}</button>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{font-size:12px!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#000}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#000;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.redText{color:red;font-size:12px}.font12{font-size:12px}.textBold{font-weight:700}.achsetting-box{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.poppinsFont,.title{font-family:var(--suku-primary-font)!important}.font20{font-size:25px}.subTitle{font-weight:700!important;font-family:var(--suku-primary-font)!important}.statusUnverified{color:red;letter-spacing:.3px}.statusVerified{color:#99c002!important;letter-spacing:.3px}.docLabel{font-family:var(--suku-primary-font)!important;letter-spacing:.1px}.document,.mat-chip.mat-standard-chip{background-color:#e0e0e059!important;color:rgba(0,0,0,.87)!important;border-radius:0!important;border-left:3px solid #a7bf2e!important;min-height:40px!important}#document p{font-size:1.5rem}@media screen and (max-width:575px){#document p{font-size:1.4rem}}.card-line{background-color:#fff;color:#2c2727;height:46px;border-radius:2px;letter-spacing:.5px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2);border-top:3px solid #bfd131c9}.display-2{font-size:6.2rem!important;line-height:1.5!important}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:var(--suku-primary-font)!important}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.upload-btn{color:#000;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.3rem;border-bottom:3px solid #a7bf2e}.secondary-btn{font-family:Poppins,sans-serif!important;font-size:14px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important;border-bottom:3.5px solid #a7bf2e}.secondary-btn:hover{cursor:pointer!important}.encode-font{font-family:var(--suku-secondary-font)!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuACHSettingsComponent.ctorParameters = function () { return []; };
    SukuACHSettingsComponent.propDecorators = {
        title: [{ type: Input }],
        titleId: [{ type: Input }],
        titleCustomClass: [{ type: Input }],
        subTitle: [{ type: Input }],
        subTitleId: [{ type: Input }],
        subTitleCustomClass: [{ type: Input }],
        labelOne: [{ type: Input }],
        labelOneCustomClass: [{ type: Input }],
        labelOneId: [{ type: Input }],
        labelTwo: [{ type: Input }],
        labelTwoCustomClass: [{ type: Input }],
        labelTwoId: [{ type: Input }],
        labelThree: [{ type: Input }],
        labelThreeCustomClass: [{ type: Input }],
        labelThreeId: [{ type: Input }],
        labelFour: [{ type: Input }],
        labelFourCustomClass: [{ type: Input }],
        labelFourCustomClassId: [{ type: Input }],
        labelFive: [{ type: Input }],
        labelFiveCustomClass: [{ type: Input }],
        labelFiveId: [{ type: Input }],
        labelSix: [{ type: Input }],
        labelSixCustomClass: [{ type: Input }],
        labelSixId: [{ type: Input }],
        labelSeven: [{ type: Input }],
        labelSevenCustomClass: [{ type: Input }],
        labelSevenId: [{ type: Input }],
        labelEight: [{ type: Input }],
        labelEightCustomClass: [{ type: Input }],
        labelEightId: [{ type: Input }],
        subContentCustomClass: [{ type: Input }],
        subContentId: [{ type: Input }],
        subContent: [{ type: Input }],
        buttonLabel: [{ type: Input }],
        buttonLabelId: [{ type: Input }],
        paymentButtonId: [{ type: Input }],
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
    SukuACHSettingsComponent.prototype.titleCustomClass;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.subTitle;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.subTitleId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.subTitleCustomClass;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelOne;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelOneCustomClass;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelOneId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelTwo;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelTwoCustomClass;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelTwoId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelThree;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelThreeCustomClass;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelThreeId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelFour;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelFourCustomClass;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelFourCustomClassId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelFive;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelFiveCustomClass;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelFiveId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelSix;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelSixCustomClass;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelSixId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelSeven;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelSevenCustomClass;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelSevenId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelEight;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelEightCustomClass;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelEightId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.subContentCustomClass;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.subContentId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.subContent;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.buttonLabel;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.buttonLabelId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.paymentButtonId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hY2hzZXR0aW5ncy9zdWt1LWFjaHNldHRpbmdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FFWixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQTBFQztRQW5FUyxVQUFLLEdBQUcsZ0JBQWdCLENBQUM7UUFDekIsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQUMxQixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFHLGNBQWMsQ0FBQztRQUMxQixlQUFVLEdBQUcsYUFBYSxDQUFDO1FBQzNCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUV6QixhQUFRLEdBQUcsd0JBQXdCLENBQUM7UUFDcEMsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsYUFBUSxHQUFHLGtCQUFrQixDQUFDO1FBQzlCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUN6QixlQUFVLEdBQUcsa0JBQWtCLENBQUM7UUFFaEMsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QiwwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDM0IsaUJBQVksR0FBRyxrQkFBa0IsQ0FBQztRQUVsQyxjQUFTLEdBQUcsNkJBQTZCLENBQUM7UUFDMUMseUJBQW9CLEdBQUcsRUFBRSxDQUFDO1FBQzFCLDJCQUFzQixHQUFHLHNCQUFzQixDQUFDO1FBRWhELGNBQVMsR0FBRyx5RUFBeUUsQ0FBQztRQUN0Rix5QkFBb0IsR0FBRyxFQUFFLENBQUM7UUFDMUIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFakIsYUFBUSxHQUFHLDZDQUE2QyxDQUFDO1FBQ3pELHdCQUFtQixHQUFHLEVBQUUsQ0FB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QUN0QywwQ0FBc0M7O0lBV3RDLGtEQUF3Qjs7SUFDeEIsNENBQWM7O0lBQ2QsMENBQVk7O0lBQ1osK0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdE9uSW5pdCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRBZnRlclZpZXdJbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1hY2gtc2V0dGluZycsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWFjaHNldHRpbmdzLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTdWt1QUNIU2V0dGluZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXHRfYmVuZWZpY2lhbE93bmVyU3RhdHVzO1xuXHRASW5wdXQoKSB0aXRsZSA9ICdQYXltZW50IFBvcnRhbCc7XG5cdEBJbnB1dCgpIHRpdGxlSWQgPSAncGF5bWVudFBvcnRhbCc7XG5cdEBJbnB1dCgpIHRpdGxlQ3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCkgc3ViVGl0bGUgPSAnQUNIIFNldHRpbmdzJztcblx0QElucHV0KCkgc3ViVGl0bGVJZCA9ICdBQ0hTZXR0aW5ncyc7XG5cdEBJbnB1dCgpIHN1YlRpdGxlQ3VzdG9tQ2xhc3MgPSAnJztcblxuXHRASW5wdXQoKSBsYWJlbE9uZSA9ICdQYXltZW50IHByb2ZpbGUgc3RhdHVzJztcblx0QElucHV0KCkgbGFiZWxPbmVDdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoKSBsYWJlbE9uZUlkID0gJyc7XG5cblx0QElucHV0KCkgbGFiZWxUd28gPSAnQmVuZWZpY2lhbCBPd25lcic7XG5cdEBJbnB1dCgpIGxhYmVsVHdvQ3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCkgbGFiZWxUd29JZCA9ICdCZW5lZmljaWFsIE93bmVyJztcblxuXHRASW5wdXQoKSBsYWJlbFRocmVlID0gJ1N0YXR1czonO1xuXHRASW5wdXQoKSBsYWJlbFRocmVlQ3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCkgbGFiZWxUaHJlZUlkID0gJ0JlbmVmaWNpYWwgT3duZXInO1xuXG5cdEBJbnB1dCgpIGxhYmVsRm91ciA9ICdEb2N1bWVudGF0aW9uIFVwbG9hZCBOZWVkZWQnO1xuXHRASW5wdXQoKSBsYWJlbEZvdXJDdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoKSBsYWJlbEZvdXJDdXN0b21DbGFzc0lkID0gJ0RvY3VtZW50YXRpb24gVXBsb2FkJztcblxuXHRASW5wdXQoKSBsYWJlbEZpdmUgPSAnTm90ZTogRG9jdW1lbnQgdmVyaWZpY2F0aW9uIG1heSB0YWtlIDItMyBidXNpbmVzcyBkYXlzIHRvIGdldCB2ZXJpZmllZC4nO1xuXHRASW5wdXQoKSBsYWJlbEZpdmVDdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoKSBsYWJlbEZpdmVJZCA9ICcnO1xuXG5cdEBJbnB1dCgpIGxhYmVsU2l4ID0gJ1BsZWFzZSBzZXR1cCB5b3VyIEFDSCBwYXltZW50IHByb2ZpbGUgYmVsb3cnO1xuXHRASW5wdXQoKSBsYWJlbFNpeEN1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIGxhYmVsU2l4SWQgPSAnJztcblxuXHRASW5wdXQoKSBsYWJlbFNldmVuID0gJ0RvY3VtZW50IFN0YXR1czonO1xuXHRASW5wdXQoKSBsYWJlbFNldmVuQ3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCkgbGFiZWxTZXZlbklkID0gJyc7XG5cblx0QElucHV0KCkgbGFiZWxFaWdodCA9ICdVcGxvYWQgRG9jdW1lbnQnO1xuXHRASW5wdXQoKSBsYWJlbEVpZ2h0Q3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCkgbGFiZWxFaWdodElkID0gJ3VwbG9hZCc7XG5cblx0QElucHV0KCkgc3ViQ29udGVudEN1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIHN1YkNvbnRlbnRJZCA9ICd1bnZlcmlmaWVkJztcblxuXG5cdEBJbnB1dCgpIHN1YkNvbnRlbnQgPSAndW52ZXJpZmllZCc7XG5cblx0QElucHV0KCkgYnV0dG9uTGFiZWwgPSAnU2V0dXAgQUNIIFBheW1lbnRzJztcblx0QElucHV0KCkgYnV0dG9uTGFiZWxJZCA9ICdzZXR1cEFDSFBheW1lbnRzJztcblxuXHRASW5wdXQoKSBwYXltZW50QnV0dG9uSWQgPSAnU2V0dXBBQ0hQYXltZW50cyc7XG5cblx0QElucHV0KCkgc3VidGl0bGVJZCA9ICdzdWJ0aXRsZUlkJztcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHVwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QElucHV0KClcblx0Z2V0IGJlbmVmaWNpYWxPd25lclN0YXR1cygpIHtcblx0XHRyZXR1cm4gdGhpcy5fYmVuZWZpY2lhbE93bmVyU3RhdHVzO1xuXHR9XG5cdHNldCBiZW5lZmljaWFsT3duZXJTdGF0dXModmFsKSB7XG5cdFx0dGhpcy5fYmVuZWZpY2lhbE93bmVyU3RhdHVzID0gdmFsO1xuXHRcdGlmICh2YWwpIHtcblx0XHRcdHRoaXMubGFiZWxTaXggPSAnUGxlYXNlIHVwbG9hZCBiZW5lZmljaWFsIG93bmVyIGRvY3VtZW50cyBiZWxvdyc7XG5cdFx0fVxuXHR9XG5cdEBJbnB1dCgpIGRvY3VtZW50U3RhdHVzO1xuXHRzZWxlY3RlZCA9IFtdO1xuXHR0b2dnbGUgPSBbXTtcblx0Y3VzdG9tQ2xhc3M7XG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMuZG9jdW1lbnRTdGF0dXMpIHtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kb2N1bWVudFN0YXR1cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHR0aGlzLnRvZ2dsZVtqXSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50b2dnbGVbMF0gPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLnNlbGVjdGVkWzBdID0gbnVsbDtcblx0fVxuXG5cdHVwbG9hZERvYyh2YWwpIHtcblx0XHR0aGlzLnVwbG9hZC5lbWl0KHZhbCk7XG5cdH1cblxuXHRnZXREb2NUeXBlU3RyaW5nKGRvY1R5cGUpOiBzdHJpbmcge1xuXHRcdHN3aXRjaCAoZG9jVHlwZSkge1xuXHRcdFx0Y2FzZSAnaWRjYXJkJzpcblx0XHRcdFx0cmV0dXJuICdHb3Zlcm5tZW50IElzc3VlZCBJRCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncGFzc3BvcnQnOlxuXHRcdFx0XHRyZXR1cm4gJ1Bhc3Nwb3J0Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdsaWNlbnNlJzpcblx0XHRcdFx0cmV0dXJuIFwiRHJpdmVyJ3MgTGljZW5zZVwiO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBkb2NUeXBlO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRnZXREb2NGYWlsdXJlU3RyaW5nKGZhaWx1cmVUeXBlKTogc3RyaW5nIHtcblx0XHRzd2l0Y2ggKGZhaWx1cmVUeXBlKSB7XG5cdFx0XHRjYXNlICdTY2FuTm90UmVhZGFibGUnOlxuXHRcdFx0XHRyZXR1cm4gJ1NjYW4gTm90IFJlYWRhYmxlJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdTY2FuTm90VXBsb2FkZWQnOlxuXHRcdFx0XHRyZXR1cm4gJ1NjYW4gTm90IFVwbG9hZGVkJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdTY2FuSWRUeXBlTm90U3VwcG9ydGVkJzpcblx0XHRcdFx0cmV0dXJuICdJRCBUeXBlIE5vdCBTdXBwb3J0ZWQnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ1NjYW5OYW1lTWlzbWF0Y2gnOlxuXHRcdFx0XHRyZXR1cm4gJ05hbWUgTWlzbWF0Y2gnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBmYWlsdXJlVHlwZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0YWN0aXZlKGkpIHtcblx0XHR0aGlzLnNlbGVjdGVkW2ldID0gaTtcblx0XHR0aGlzLnRvZ2dsZVtpXSA9ICF0aGlzLnRvZ2dsZVtpXTtcblx0XHRpZiAodGhpcy5kb2N1bWVudFN0YXR1cykge1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmRvY3VtZW50U3RhdHVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGlmIChpICE9IGopIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkW2pdID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIXRoaXMudG9nZ2xlW2ldKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkW2ldID0gbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHRoaXMuZG9jdW1lbnRTdGF0dXMpIHtcblx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmRvY3VtZW50U3RhdHVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0aWYgKGkgIT0gaikge1xuXHRcdFx0XHRcdFx0dGhpcy50b2dnbGVbal0gPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ==