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
        this.labelOne = 'Payment profile status:';
        this.labelOneCustomClass = '';
        this.labelOneId = '';
        this.labelTwo = 'Beneficial Owner';
        this.labelTwoCustomClass = '';
        this.labelTwoId = 'Beneficial Owner';
        this.labelThree = 'Status:';
        this.labelThreeCustomClass = '';
        this.labelThreeId = 'Beneficial Owner';
        this.labelFour = ' Documentation Upload Needed';
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
        this.labelNine = 'Beneficial Owners:';
        this.labelNineCustomClass = '';
        this.labelNineId = 'upload';
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
            case 'passport':
                return 'Passport';
            case 'license':
                return "Driver's License";
            default:
                return docType;
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
            case 'ScanNotUploaded':
                return 'Scan Not Uploaded';
            case 'ScanIdTypeNotSupported':
                return 'ID Type Not Supported';
            case 'ScanNameMismatch':
                return 'Name Mismatch';
            default:
                return failureType;
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
                    template: "<div class=\"col poppinsFont p-0\">\r\n  <div class=\"col-sm-12 text-center\">\r\n    <span class=\"title {{titleCustomClass}}\" id=\"{{titleId}}\">{{title}}</span>\r\n  </div>\r\n  <div class=\"col-sm-12 mt-4\">\r\n    <div class=\"form-group col-xs-12 col achsetting-box p-3\">\r\n      <div class=\"col-sm-12 text-center encode-font\">\r\n        <div class=\"col\">\r\n          <span class=\"text-center subTitle {{subTitleCustomClass}}\" id=\"{{subtitleId}}\">{{subTitle}}</span>\r\n          <br>\r\n          <p class=\"text-center mt-2 mb-2 text-capitalize\">\r\n            <span [class]=\"labelOneCustomClass\" [id]=\"labelOneId\"></span>{{labelOne}}\r\n            <span [class]=\"subContentCustomClass\"\r\n              [ngClass]=\"{'statusVerified': subContent == 'verified', 'status': subContent !== 'verified'}\"\r\n              [id]=\"subContentId\" class=\"text-bold\">{{subContent}}</span>\r\n          </p>\r\n          <p class=\"text-center mt-2 mb-2\" *ngIf=\"_beneficialOwnerStatus\" id=\"beneficial-owner-status\">\r\n            <span [class]=\"labelTwoCustomClass\" [id]=\"labelTwoId\">{{labelTwo}} </span>\r\n            <span [class]=\"labelThreeCustomClass\" [id]=\"labelThreeId\">{{labelThree}}</span>\r\n            <span class=\"statusUnverified {{labelFourCustomClass}}\" id=\"labelFourId\">{{labelFour}}</span>\r\n          </p>\r\n          <p class=\"text-center encode-font mb-2 {{labelFiveCustomClass}}\" [id]=\"labelFiveId\"\r\n            *ngIf=\"subContent == 'document'\">{{labelFive}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 text-center mt-2\">\r\n        <i> <span class=\"f12 {{labelSixCustomClass}}\" [id]=\"labelSixId\">{{labelSix}} </span>\r\n        </i>\r\n      </div>\r\n      <div class=\"col plc-5 prc-5 pb-2 pt-2\" *ngIf=\"subContent == 'document'\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <p class=\"doclabel mt-4 {{labelSevenCustomClass}}\" *ngIf=\"documentStatus?.length > 0\" [id]=\"labelSevenId\">\r\n              <b>{{labelSeven}}</b></p>\r\n          </div>\r\n          <div class=\"col mt-3 mb-3 text-right pr-sm-4 mr-sm-1\" *ngIf=\"documentStatus?.length > 0\">\r\n            <span class=\"secondary-btn c-pointer\">\r\n              <a class=\"secondary-btn c-pointer {{labelEightCustomClass}}\" [id]=\"labelEightId\" (click)=\"action.emit()\">\r\n                {{labelEight}}\r\n              </a>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col document pl-sm-4 mb-3\" *ngFor=\"let doc of documentStatus;let imageIndex = index;\">\r\n          <div class=\"row p-2\">\r\n            <div class=\"col\">\r\n              <p class=\"mb-0 pb-1\" id=\"docLabelOne{{imageIndex}}\">{{doc?.labelOne || 'Doc Type:'}}</p>\r\n              <p class=\"mb-0\" id=\"docType{{imageIndex}}\"><b>{{doc?.type}}</b></p>\r\n            </div>\r\n            <div class=\"col\">\r\n              <p class=\"mb-0 pb-1\" id=\"docLabelTwo{{imageIndex}}\">{{doc?.labelTwo || 'Status:'}}</p>\r\n              <p class=\"mb-0\" id=\"docStatus{{imageIndex}}\"><b>{{doc?.status}}</b></p>\r\n            </div>\r\n            <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\r\n            <div class=\"col\" *ngIf=\"doc?.failureReason\">\r\n              <p class=\"mb-0 pb-1\" id=\"docLabelThree{{imageIndex}}\">{{doc?.labelThree || 'Failure Reason:'}}</p>\r\n              <p class=\"mb-0\" id=\"doFailureReasons{{imageIndex}}\"><b>{{doc?.failureReason}}</b></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col pb-4\" id=\"beneficialOwnerBlock\">\r\n        <div class=\"col pl-4 pr-4\">\r\n          <p class=\"doclabel mt-4 {{labelNineCustomClass}}\" *ngIf=\"_beneficialOwnerStatus\" [id]=\"labelNineId\">\r\n            <b>{{labelNine}}</b></p>\r\n        </div>\r\n        <div class=\"col pl-sm-4 mb-3\" *ngFor=\"let user of _beneficialOwnerStatus;let i = index;\">\r\n          <div class=\"col card-line mt-3 mb-4 c-pointer\" data-toggle=\"collapse\" [attr.data-target]=\"'#ownerBlock' + i\"\r\n            (click)=\"active(i)\">\r\n            <div class=\"row\">\r\n              <label class=\"m-2 pl-3 owner c-pointer\">\r\n                Beneficial Owner {{i+1}}\r\n              </label>\r\n              <label class=\"d-flex justify-content-end col p-0 c-pointer\">\r\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] != i}\">\r\n                  <i class=\"fa fa-arrow-circle-down icon\"></i>\r\n                </span>\r\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] == i}\">\r\n                  <i class=\"fa fa-arrow-circle-up icon\"></i>\r\n                </span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col collapse p-0\" [ngClass]=\"{'show': i == 0 }\" data-parent=\"#beneficialOwnerBlock\"\r\n            id=\"ownerBlock{{i}}\">\r\n            <div class=\"col\">\r\n              <div class=\"row p-2\">\r\n                <div class=\"col-12 col-lg-4\">\r\n                  <p class=\"mb-0 pb-1\" id=\"userLabelOne{{i}}\">{{ user?.labelOne || \"Beneficial Owner Name:\"}}</p>\r\n                  <p class=\"mb-0\" id=\"userFirstName{{i}}\"><b>{{user?.firstName}}</b></p>\r\n                </div>\r\n                <div class=\"col-12 col-lg-4\">\r\n                  <p class=\"mb-0 pb-1\" id=\"userLabelTwo{{i}}\">{{ user?.labelTwo || 'Status:'}}</p>\r\n                  <p class=\"mb-0\" id=\"userVerificationStatus{{i}}\"><b>{{user?.verificationStatus}}</b></p>\r\n                </div>\r\n                <div class=\"col-12 col-lg-4\" *ngIf=\"user?.verificationStatus == 'document'\">\r\n                  <div class=\"col d-flex justify-content-center mt-3 mb-3\">\r\n                    <button class=\"suku suku-info\" (click)=\"uploadDoc(user)\"\r\n                      id=\"uploadBeneficialDocument{{i}}\">{{ user?.labelThree || 'Upload Document'}}</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col pl-4 pr-4 pb-2 pt-1\" *ngIf=\"user?.verificationStatus == 'document'\">\r\n              <p class=\"doclabel mt-4\" *ngIf=\"user?.data?.length > 0 \"><b>Document Status:</b></p>\r\n              <div class=\"col document pl-sm-4 mb-3\" *ngFor=\"let doc of user?.data;let statusIndex = index;\">\r\n                <div class=\"row p-2\">\r\n                  <div class=\"col\">\r\n                    <p class=\"mb-0 pb-1\" id=\"docBeneficialLabelOne{{statusIndex}}\">{{ doc.labelOne || 'Doc Type:'}}</p>\r\n                    <p class=\"mb-0\" id=\"docBeneficialDocType{{statusIndex}}\"><b>{{getDocTypeString(doc?.type)}}</b></p>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <p class=\"mb-0 pb-1\" id=\"docBeneficialLabelTwo{{statusIndex}}\">{{ doc.labelTwo || 'Status:'}}</p>\r\n                    <p class=\"mb-0\" id=\"docBeneficialStatus{{statusIndex}}\"><b>{{doc?.status}}</b></p>\r\n                  </div>\r\n                  <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\r\n                  <div class=\"col\" *ngIf=\"doc?.failureReason\">\r\n                    <p class=\"mb-0 pb-1\" id=\"docBeneficialLabelThree{{statusIndex}}\">\r\n                      {{ doc.labelThree || 'Failure-Reason:'}}</p>\r\n                    <p class=\"mb-0\" id=\"docBeneficialFailureStatus{{statusIndex}}\">\r\n                      <b>{{getDocFailureString(doc?.failureReason)}}</b></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 mt-2 mb-4 text-center\" *ngIf=\"(subContent == 'not complete' ) || (subContent != 'verified' ) && (documentStatus?.length == 0 &&\r\n         (subContent == 'document'))\">\r\n        <button class=\"suku textBold\" id=\"{{buttonLabelId}}\" (click)=\"action.emit()\">{{buttonLabel}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.redText{color:red;font-size:var(--suku-font-size-2)}.f12{font-size:var(--suku-font-size-2)}.textBold{font-weight:700}.achsetting-box{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.poppinsFont,.title{font-family:var(--suku-primary-font)}.owner{font-family:var(--suku-primary-font);font-size:1rem}@media (max-width:320px){.owner{font-size:.75rem;padding:.3rem 0!important;margin:.45rem!important}}.font20{font-size:25px}.subTitle{font-weight:700!important;font-family:var(--suku-primary-font)}.statusUnverified{color:red;letter-spacing:.3px}.statusVerified{color:#99c002!important;letter-spacing:.3px}.docLabel{font-family:var(--suku-primary-font)!important;letter-spacing:.1px}.document{background-color:#e0e0e059!important;color:rgba(0,0,0,.87)!important;border-radius:0!important;border-left:3px solid!important;border-color:var(--suku-primary-color)!important;min-height:40px!important}#document p{font-size:1.5rem}@media screen and (max-width:575px){#document p{font-size:1.4rem}}.card-line{background-color:#fff;color:#2c2727;height:46px;border-radius:2px;letter-spacing:.5px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2);border-top:3px solid #bfd131c9}.display-2{font-size:6.2rem!important;line-height:1.5!important}.icon{font-size:1.5rem!important;color:#ccda5c!important}.suku{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:var(--suku-primary-font);font-size:1.3rem}.suku-info{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff;color:#00000099}.suku-info:active,.suku-info:hover{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:var(--suku-primary-color);color:#fff}.suku-info.disabled{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff;color:grey}.suku-info.disabled.focus,.suku-info.disabled:focus,.suku-info.disabled:hover,.suku-info[disabled].focus,.suku-info[disabled]:focus,.suku-info[disabled]:hover,fieldset[disabled] .suku-info.focus,fieldset[disabled] .suku-info:focus,fieldset[disabled] .suku-info:hover{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info.focus,.suku-info:focus{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:var(--suku-primary-color);color:#fff;box-shadow:none!important}.open>.dropdown-toggle .suku-info.focus,.open>.dropdown-toggle .suku-info:focus,.open>.dropdown-toggle.suku-info:hover,.suku-info.active.focus,.suku-info.active:focus,.suku-info.active:hover,.suku-info:active.focus,.suku-info:active:focus,.suku-info:active:hover{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:var(--suku-primary-color);color:#fff;box-shadow:none!important}.upload-suku{color:#000;font-weight:900;font-family:var(--suku-primary-font);font-size:1.3rem;border-bottom:3px solid var(--suku-primary-color)}.secondary-btn{font-family:var(--suku-primary-font);font-size:14px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important;border-bottom:3.5px solid var(--suku-primary-color)}.secondary-btn:hover{cursor:pointer!important}.encode-font{font-family:var(--suku-secondary-font)}.plc-5{padding-left:2.35rem!important}.prc-5{padding-right:2rem!important}"]
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
        labelNine: [{ type: Input }],
        labelNineCustomClass: [{ type: Input }],
        labelNineId: [{ type: Input }],
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
    SukuACHSettingsComponent.prototype.labelNine;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelNineCustomClass;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.labelNineId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hY2hzZXR0aW5ncy9zdWt1LWFjaHNldHRpbmdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FFWixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQTRFQztRQXJFUyxVQUFLLEdBQUcsZ0JBQWdCLENBQUM7UUFDekIsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQUMxQixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFHLGNBQWMsQ0FBQztRQUMxQixlQUFVLEdBQUcsYUFBYSxDQUFDO1FBQzNCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUV6QixhQUFRLEdBQUcseUJBQXlCLENBQUM7UUFDckMsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsYUFBUSxHQUFHLGtCQUFrQixDQUFDO1FBQzlCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUN6QixlQUFVLEdBQUcsa0JBQWtCLENBQUM7UUFFaEMsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QiwwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDM0IsaUJBQVksR0FBRyxrQkFBa0IsQ0FBQztRQUVsQyxjQUFTLEdBQUcsOEJBQThCLENBQUM7UUFDM0MseUJBQW9CLEdBQUcsRUFBRSxDQUFDO1FBQzFCLDJCQUFzQixHQUFHLHNCQUFzQixDQUFDO1FBRWhELGNBQVMsR0FBRyx5RUFBeUUsQ0FBQztRQUN0Rix5QkFBb0IsR0FBRyxFQUFFLENBQUM7UUFDMUIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFakIsYUFBUSxHQUFHLDZDQUE2QyxDQUFDO1FBQ3pELHdCQUFtQixHQUFHLEVBQUUsQ0FB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Qzs7SUFDNUMsaURBQTRDOztJQUU1QyxtREFBOEM7O0lBRTlDLDhDQUFtQzs7SUFDbkMsMENBQXNDOztJQUN0QywwQ0FBc0M7O0lBV3RDLGtEQUF3Qjs7SUFDeEIsNENBQWM7O0lBQ2QsMENBQVk7O0lBQ1osK0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0SW5wdXQsXHJcblx0T3V0cHV0LFxyXG5cdEV2ZW50RW1pdHRlcixcclxuXHRBZnRlclZpZXdJbml0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LWFjaC1zZXR0aW5nJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUFDSFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHRfYmVuZWZpY2lhbE93bmVyU3RhdHVzO1xyXG5cdEBJbnB1dCgpIHRpdGxlID0gJ1BheW1lbnQgUG9ydGFsJztcclxuXHRASW5wdXQoKSB0aXRsZUlkID0gJ3BheW1lbnRQb3J0YWwnO1xyXG5cdEBJbnB1dCgpIHRpdGxlQ3VzdG9tQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoKSBzdWJUaXRsZSA9ICdBQ0ggU2V0dGluZ3MnO1xyXG5cdEBJbnB1dCgpIHN1YlRpdGxlSWQgPSAnQUNIU2V0dGluZ3MnO1xyXG5cdEBJbnB1dCgpIHN1YlRpdGxlQ3VzdG9tQ2xhc3MgPSAnJztcclxuXHJcblx0QElucHV0KCkgbGFiZWxPbmUgPSAnUGF5bWVudCBwcm9maWxlIHN0YXR1czonO1xyXG5cdEBJbnB1dCgpIGxhYmVsT25lQ3VzdG9tQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoKSBsYWJlbE9uZUlkID0gJyc7XHJcblxyXG5cdEBJbnB1dCgpIGxhYmVsVHdvID0gJ0JlbmVmaWNpYWwgT3duZXInO1xyXG5cdEBJbnB1dCgpIGxhYmVsVHdvQ3VzdG9tQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoKSBsYWJlbFR3b0lkID0gJ0JlbmVmaWNpYWwgT3duZXInO1xyXG5cclxuXHRASW5wdXQoKSBsYWJlbFRocmVlID0gJ1N0YXR1czonO1xyXG5cdEBJbnB1dCgpIGxhYmVsVGhyZWVDdXN0b21DbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgpIGxhYmVsVGhyZWVJZCA9ICdCZW5lZmljaWFsIE93bmVyJztcclxuXHJcblx0QElucHV0KCkgbGFiZWxGb3VyID0gJyBEb2N1bWVudGF0aW9uIFVwbG9hZCBOZWVkZWQnO1xyXG5cdEBJbnB1dCgpIGxhYmVsRm91ckN1c3RvbUNsYXNzID0gJyc7XHJcblx0QElucHV0KCkgbGFiZWxGb3VyQ3VzdG9tQ2xhc3NJZCA9ICdEb2N1bWVudGF0aW9uIFVwbG9hZCc7XHJcblxyXG5cdEBJbnB1dCgpIGxhYmVsRml2ZSA9ICdOb3RlOiBEb2N1bWVudCB2ZXJpZmljYXRpb24gbWF5IHRha2UgMi0zIGJ1c2luZXNzIGRheXMgdG8gZ2V0IHZlcmlmaWVkLic7XHJcblx0QElucHV0KCkgbGFiZWxGaXZlQ3VzdG9tQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoKSBsYWJlbEZpdmVJZCA9ICcnO1xyXG5cclxuXHRASW5wdXQoKSBsYWJlbFNpeCA9ICdQbGVhc2Ugc2V0dXAgeW91ciBBQ0ggcGF5bWVudCBwcm9maWxlIGJlbG93JztcclxuXHRASW5wdXQoKSBsYWJlbFNpeEN1c3RvbUNsYXNzID0gJyc7XHJcblx0QElucHV0KCkgbGFiZWxTaXhJZCA9ICcnO1xyXG5cclxuXHRASW5wdXQoKSBsYWJlbFNldmVuID0gJ0RvY3VtZW50IFN0YXR1czonO1xyXG5cdEBJbnB1dCgpIGxhYmVsU2V2ZW5DdXN0b21DbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgpIGxhYmVsU2V2ZW5JZCA9ICcnO1xyXG5cclxuXHRASW5wdXQoKSBsYWJlbEVpZ2h0ID0gJ1VwbG9hZCBEb2N1bWVudCc7XHJcblx0QElucHV0KCkgbGFiZWxFaWdodEN1c3RvbUNsYXNzID0gJyc7XHJcblx0QElucHV0KCkgbGFiZWxFaWdodElkID0gJ3VwbG9hZCc7XHJcblxyXG5cdEBJbnB1dCgpIGxhYmVsTmluZSA9ICdCZW5lZmljaWFsIE93bmVyczonO1xyXG5cdEBJbnB1dCgpIGxhYmVsTmluZUN1c3RvbUNsYXNzID0gJyc7XHJcblx0QElucHV0KCkgbGFiZWxOaW5lSWQgPSAndXBsb2FkJztcclxuXHJcblx0QElucHV0KCkgc3ViQ29udGVudEN1c3RvbUNsYXNzID0gJyc7XHJcblx0QElucHV0KCkgc3ViQ29udGVudElkID0gJ3VudmVyaWZpZWQnO1xyXG5cdEBJbnB1dCgpIHN1YkNvbnRlbnQgPSAndW52ZXJpZmllZCc7XHJcblxyXG5cdEBJbnB1dCgpIGJ1dHRvbkxhYmVsID0gJ1NldHVwIEFDSCBQYXltZW50cyc7XHJcblx0QElucHV0KCkgYnV0dG9uTGFiZWxJZCA9ICdzZXR1cEFDSFBheW1lbnRzJztcclxuXHJcblx0QElucHV0KCkgcGF5bWVudEJ1dHRvbklkID0gJ1NldHVwQUNIUGF5bWVudHMnO1xyXG5cclxuXHRASW5wdXQoKSBzdWJ0aXRsZUlkID0gJ3N1YnRpdGxlSWQnO1xyXG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIHVwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRASW5wdXQoKVxyXG5cdGdldCBiZW5lZmljaWFsT3duZXJTdGF0dXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fYmVuZWZpY2lhbE93bmVyU3RhdHVzO1xyXG5cdH1cclxuXHRzZXQgYmVuZWZpY2lhbE93bmVyU3RhdHVzKHZhbCkge1xyXG5cdFx0dGhpcy5fYmVuZWZpY2lhbE93bmVyU3RhdHVzID0gdmFsO1xyXG5cdFx0aWYgKHZhbCkge1xyXG5cdFx0XHR0aGlzLmxhYmVsU2l4ID0gJ1BsZWFzZSB1cGxvYWQgYmVuZWZpY2lhbCBvd25lciBkb2N1bWVudHMgYmVsb3cnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRASW5wdXQoKSBkb2N1bWVudFN0YXR1cztcclxuXHRzZWxlY3RlZCA9IFtdO1xyXG5cdHRvZ2dsZSA9IFtdO1xyXG5cdGN1c3RvbUNsYXNzO1xyXG5cdGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0aWYgKHRoaXMuZG9jdW1lbnRTdGF0dXMpIHtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmRvY3VtZW50U3RhdHVzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0dGhpcy50b2dnbGVbal0gPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnRvZ2dsZVswXSA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkWzBdID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdHVwbG9hZERvYyh2YWwpIHtcclxuXHRcdHRoaXMudXBsb2FkLmVtaXQodmFsKTtcclxuXHR9XHJcblxyXG5cdGdldERvY1R5cGVTdHJpbmcoZG9jVHlwZSk6IHN0cmluZyB7XHJcblx0XHRzd2l0Y2ggKGRvY1R5cGUpIHtcclxuXHRcdFx0Y2FzZSAnaWRjYXJkJzpcclxuXHRcdFx0XHRyZXR1cm4gJ0dvdmVybm1lbnQgSXNzdWVkIElEJztcclxuXHRcdFx0Y2FzZSAncGFzc3BvcnQnOlxyXG5cdFx0XHRcdHJldHVybiAnUGFzc3BvcnQnO1xyXG5cdFx0XHRjYXNlICdsaWNlbnNlJzpcclxuXHRcdFx0XHRyZXR1cm4gYERyaXZlcidzIExpY2Vuc2VgO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiBkb2NUeXBlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0RG9jRmFpbHVyZVN0cmluZyhmYWlsdXJlVHlwZSk6IHN0cmluZyB7XHJcblx0XHRzd2l0Y2ggKGZhaWx1cmVUeXBlKSB7XHJcblx0XHRcdGNhc2UgJ1NjYW5Ob3RSZWFkYWJsZSc6XHJcblx0XHRcdFx0cmV0dXJuICdTY2FuIE5vdCBSZWFkYWJsZSc7XHJcblx0XHRcdGNhc2UgJ1NjYW5Ob3RVcGxvYWRlZCc6XHJcblx0XHRcdFx0cmV0dXJuICdTY2FuIE5vdCBVcGxvYWRlZCc7XHJcblx0XHRcdGNhc2UgJ1NjYW5JZFR5cGVOb3RTdXBwb3J0ZWQnOlxyXG5cdFx0XHRcdHJldHVybiAnSUQgVHlwZSBOb3QgU3VwcG9ydGVkJztcclxuXHRcdFx0Y2FzZSAnU2Nhbk5hbWVNaXNtYXRjaCc6XHJcblx0XHRcdFx0cmV0dXJuICdOYW1lIE1pc21hdGNoJztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gZmFpbHVyZVR5cGU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhY3RpdmUoaSkge1xyXG5cdFx0dGhpcy5zZWxlY3RlZFtpXSA9IGk7XHJcblx0XHR0aGlzLnRvZ2dsZVtpXSA9ICF0aGlzLnRvZ2dsZVtpXTtcclxuXHRcdGlmICh0aGlzLmRvY3VtZW50U3RhdHVzKSB7XHJcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kb2N1bWVudFN0YXR1cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGlmIChpICE9IGopIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRbal0gPSBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKCF0aGlzLnRvZ2dsZVtpXSkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkW2ldID0gbnVsbDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLmRvY3VtZW50U3RhdHVzKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmRvY3VtZW50U3RhdHVzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRpZiAoaSAhPSBqKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlW2pdID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==