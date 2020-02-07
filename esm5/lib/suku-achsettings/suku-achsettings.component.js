/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-achsettings/suku-achsettings.component.ts
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
                    template: "<div class=\"col poppinsFont p-0\">\n  <div class=\"col-sm-12 text-center\">\n    <span class=\"title {{titleCustomClass}}\" id=\"{{titleId}}\">{{title}}</span>\n  </div>\n  <div class=\"col-sm-12 mt-4\">\n    <div class=\"form-group col-xs-12 col achsetting-box p-3\">\n      <div class=\"col-sm-12 text-center encode-font\">\n        <div class=\"col\">\n          <span class=\"text-center subTitle {{subTitleCustomClass}}\" id=\"{{subtitleId}}\">{{subTitle}}</span>\n          <br>\n          <p class=\"text-center mt-2 mb-2 text-capitalize\">\n            <span [class]=\"labelOneCustomClass\" [id]=\"labelOneId\"></span>{{labelOne}}\n            <span [class]=\"subContentCustomClass\"\n              [ngClass]=\"{'statusVerified': subContent == 'verified', 'status': subContent !== 'verified'}\"\n              [id]=\"subContentId\" class=\"text-bold\">{{subContent}}</span>\n          </p>\n          <p class=\"text-center mt-2 mb-2\" *ngIf=\"_beneficialOwnerStatus\" id=\"beneficial-owner-status\">\n            <span [class]=\"labelTwoCustomClass\" [id]=\"labelTwoId\">{{labelTwo}} </span>\n            <span [class]=\"labelThreeCustomClass\" [id]=\"labelThreeId\">{{labelThree}}</span>\n            <span class=\"statusUnverified {{labelFourCustomClass}}\" id=\"labelFourId\">{{labelFour}}</span>\n          </p>\n          <p class=\"text-center encode-font mb-2 {{labelFiveCustomClass}}\" [id]=\"labelFiveId\"\n            *ngIf=\"subContent == 'document'\">{{labelFive}}</p>\n        </div>\n      </div>\n      <div class=\"col-sm-12 text-center mt-2\">\n        <i> <span class=\"f12 {{labelSixCustomClass}}\" [id]=\"labelSixId\">{{labelSix}} </span>\n        </i>\n      </div>\n      <div class=\"col plc-5 prc-5 pb-2 pt-2\" *ngIf=\"subContent == 'document'\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <p class=\"doclabel mt-4 {{labelSevenCustomClass}}\" *ngIf=\"documentStatus?.length > 0\" [id]=\"labelSevenId\">\n              <b>{{labelSeven}}</b></p>\n          </div>\n          <div class=\"col mt-3 mb-3 text-right pr-sm-4 mr-sm-1\" *ngIf=\"documentStatus?.length > 0\">\n            <span class=\"secondary-btn c-pointer\">\n              <a class=\"secondary-btn c-pointer {{labelEightCustomClass}}\" [id]=\"labelEightId\" (click)=\"action.emit()\">\n                {{labelEight}}\n              </a>\n            </span>\n          </div>\n        </div>\n        <div class=\"col document pl-sm-4 mb-3\" *ngFor=\"let doc of documentStatus;let imageIndex = index;\">\n          <div class=\"row p-2\">\n            <div class=\"col\">\n              <p class=\"mb-0 pb-1\" id=\"docLabelOne{{imageIndex}}\">{{doc?.labelOne || 'Doc Type:'}}</p>\n              <p class=\"mb-0\" id=\"docType{{imageIndex}}\"><b>{{doc?.type}}</b></p>\n            </div>\n            <div class=\"col\">\n              <p class=\"mb-0 pb-1\" id=\"docLabelTwo{{imageIndex}}\">{{doc?.labelTwo || 'Status:'}}</p>\n              <p class=\"mb-0\" id=\"docStatus{{imageIndex}}\"><b>{{doc?.status}}</b></p>\n            </div>\n            <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\n            <div class=\"col\" *ngIf=\"doc?.failureReason\">\n              <p class=\"mb-0 pb-1\" id=\"docLabelThree{{imageIndex}}\">{{doc?.labelThree || 'Failure Reason:'}}</p>\n              <p class=\"mb-0\" id=\"doFailureReasons{{imageIndex}}\"><b>{{doc?.failureReason}}</b></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col pb-4\" id=\"beneficialOwnerBlock\">\n        <div class=\"col pl-4 pr-4\">\n          <p class=\"doclabel mt-4 {{labelNineCustomClass}}\" *ngIf=\"_beneficialOwnerStatus\" [id]=\"labelNineId\">\n            <b>{{labelNine}}</b></p>\n        </div>\n        <div class=\"col pl-sm-4 mb-3\" *ngFor=\"let user of _beneficialOwnerStatus;let i = index;\">\n          <div class=\"col card-line mt-3 mb-4 c-pointer\" data-toggle=\"collapse\" [attr.data-target]=\"'#ownerBlock' + i\"\n            (click)=\"active(i)\">\n            <div class=\"row\">\n              <label class=\"m-2 pl-3 owner c-pointer\">\n                Beneficial Owner {{i+1}}\n              </label>\n              <label class=\"d-flex justify-content-end col p-0 c-pointer\">\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] != i}\">\n                  <i class=\"fa fa-arrow-circle-down icon\"></i>\n                </span>\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] == i}\">\n                  <i class=\"fa fa-arrow-circle-up icon\"></i>\n                </span>\n              </label>\n            </div>\n          </div>\n\n          <div class=\"col collapse p-0\" [ngClass]=\"{'show': i == 0 }\" data-parent=\"#beneficialOwnerBlock\"\n            id=\"ownerBlock{{i}}\">\n            <div class=\"col\">\n              <div class=\"row p-2\">\n                <div class=\"col-12 col-lg-4\">\n                  <p class=\"mb-0 pb-1\" id=\"userLabelOne{{i}}\">{{ user?.labelOne || \"Beneficial Owner Name:\"}}</p>\n                  <p class=\"mb-0\" id=\"userFirstName{{i}}\"><b>{{user?.firstName}}</b></p>\n                </div>\n                <div class=\"col-12 col-lg-4\">\n                  <p class=\"mb-0 pb-1\" id=\"userLabelTwo{{i}}\">{{ user?.labelTwo || 'Status:'}}</p>\n                  <p class=\"mb-0\" id=\"userVerificationStatus{{i}}\"><b>{{user?.verificationStatus}}</b></p>\n                </div>\n                <div class=\"col-12 col-lg-4\" *ngIf=\"user?.verificationStatus == 'document'\">\n                  <div class=\"col d-flex justify-content-center mt-3 mb-3\">\n                    <button class=\"suku suku-info\" (click)=\"uploadDoc(user)\"\n                      id=\"uploadBeneficialDocument{{i}}\">{{ user?.labelThree || 'Upload Document'}}</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col pl-4 pr-4 pb-2 pt-1\" *ngIf=\"user?.verificationStatus == 'document'\">\n              <p class=\"doclabel mt-4\" *ngIf=\"user?.data?.length > 0 \"><b>Document Status:</b></p>\n              <div class=\"col document pl-sm-4 mb-3\" *ngFor=\"let doc of user?.data;let statusIndex = index;\">\n                <div class=\"row p-2\">\n                  <div class=\"col\">\n                    <p class=\"mb-0 pb-1\" id=\"docBeneficialLabelOne{{statusIndex}}\">{{ doc.labelOne || 'Doc Type:'}}</p>\n                    <p class=\"mb-0\" id=\"docBeneficialDocType{{statusIndex}}\"><b>{{getDocTypeString(doc?.type)}}</b></p>\n                  </div>\n                  <div class=\"col\">\n                    <p class=\"mb-0 pb-1\" id=\"docBeneficialLabelTwo{{statusIndex}}\">{{ doc.labelTwo || 'Status:'}}</p>\n                    <p class=\"mb-0\" id=\"docBeneficialStatus{{statusIndex}}\"><b>{{doc?.status}}</b></p>\n                  </div>\n                  <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\n                  <div class=\"col\" *ngIf=\"doc?.failureReason\">\n                    <p class=\"mb-0 pb-1\" id=\"docBeneficialLabelThree{{statusIndex}}\">\n                      {{ doc.labelThree || 'Failure-Reason:'}}</p>\n                    <p class=\"mb-0\" id=\"docBeneficialFailureStatus{{statusIndex}}\">\n                      <b>{{getDocFailureString(doc?.failureReason)}}</b></p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12 mt-2 mb-4 text-center\" *ngIf=\"(subContent == 'not complete' ) || (subContent != 'verified' ) && (documentStatus?.length == 0 &&\n         (subContent == 'document'))\">\n        <button class=\"suku textBold\" id=\"{{buttonLabelId}}\" (click)=\"action.emit()\">{{buttonLabel}}</button>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.redText{color:red;font-size:var(--suku-font-size-2)}.f12{font-size:var(--suku-font-size-2)}.textBold{font-weight:700}.achsetting-box{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.poppinsFont,.title{font-family:var(--suku-primary-font)}.owner{font-family:var(--suku-primary-font);font-size:1rem}@media (max-width:320px){.owner{font-size:.75rem;padding:.3rem 0!important;margin:.45rem!important}}.font20{font-size:25px}.subTitle{font-weight:700!important;font-family:var(--suku-primary-font)}.statusUnverified{color:red;letter-spacing:.3px}.statusVerified{color:#99c002!important;letter-spacing:.3px}.docLabel{font-family:var(--suku-primary-font)!important;letter-spacing:.1px}.document{background-color:#e0e0e059!important;color:rgba(0,0,0,.87)!important;border-radius:0!important;border-left:3px solid!important;border-color:var(--suku-primary-color)!important;min-height:40px!important}#document p{font-size:1.5rem}@media screen and (max-width:575px){#document p{font-size:1.4rem}}.card-line{background-color:#fff;color:#2c2727;height:46px;border-radius:2px;letter-spacing:.5px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2);border-top:3px solid #bfd131c9}.display-2{font-size:6.2rem!important;line-height:1.5!important}.icon{font-size:1.5rem!important;color:#ccda5c!important}.suku{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:var(--suku-primary-font);font-size:1.3rem}.suku-info{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff;color:#00000099}.suku-info:active,.suku-info:hover{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:var(--suku-primary-color);color:#fff}.suku-info.disabled{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff;color:grey}.suku-info.disabled.focus,.suku-info.disabled:focus,.suku-info.disabled:hover,.suku-info[disabled].focus,.suku-info[disabled]:focus,.suku-info[disabled]:hover,fieldset[disabled] .suku-info.focus,fieldset[disabled] .suku-info:focus,fieldset[disabled] .suku-info:hover{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info.focus,.suku-info:focus{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:var(--suku-primary-color);color:#fff;box-shadow:none!important}.open>.dropdown-toggle .suku-info.focus,.open>.dropdown-toggle .suku-info:focus,.open>.dropdown-toggle.suku-info:hover,.suku-info.active.focus,.suku-info.active:focus,.suku-info.active:hover,.suku-info:active.focus,.suku-info:active:focus,.suku-info:active:hover{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:var(--suku-primary-color);color:#fff;box-shadow:none!important}.upload-suku{color:#000;font-weight:900;font-family:var(--suku-primary-font);font-size:1.3rem;border-bottom:3px solid var(--suku-primary-color)}.secondary-btn{font-family:var(--suku-primary-font);font-size:14px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important;border-bottom:3.5px solid var(--suku-primary-color)}.secondary-btn:hover{cursor:pointer!important}.encode-font{font-family:var(--suku-secondary-font)}.plc-5{padding-left:2.35rem!important}.prc-5{padding-right:2rem!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hY2hzZXR0aW5ncy9zdWt1LWFjaHNldHRpbmdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEdBRVosTUFBTSxlQUFlLENBQUM7QUFFdkI7SUE0RUM7UUFyRVMsVUFBSyxHQUFHLGdCQUFnQixDQUFDO1FBQ3pCLFlBQU8sR0FBRyxlQUFlLENBQUM7UUFDMUIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLGFBQVEsR0FBRyxjQUFjLENBQUM7UUFDMUIsZUFBVSxHQUFHLGFBQWEsQ0FBQztRQUMzQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFFekIsYUFBUSxHQUFHLHlCQUF5QixDQUFDO1FBQ3JDLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUN6QixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGFBQVEsR0FBRyxrQkFBa0IsQ0FBQztRQUM5Qix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsZUFBVSxHQUFHLGtCQUFrQixDQUFDO1FBRWhDLGVBQVUsR0FBRyxTQUFTLENBQUM7UUFDdkIsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLGlCQUFZLEdBQUcsa0JBQWtCLENBQUM7UUFFbEMsY0FBUyxHQUFHLDhCQUE4QixDQUFDO1FBQzNDLHlCQUFvQixHQUFHLEVBQUUsQ0FBQztRQUMxQiwyQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQztRQUVoRCxjQUFTLEdBQUcseUVBQXlFLENBQUM7UUFDdEYseUJBQW9CLEdBQUcsRUFBRSxDQUFDO1FBQzFCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBRWpCLGFBQVEsR0FBRyw2Q0FBNkMsQ0FBQztRQUN6RCx3QkFBbUIsR0FBRyxFQUFFLENB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NEM7O0lBQzVDLGlEQUE0Qzs7SUFFNUMsbURBQThDOztJQUU5Qyw4Q0FBbUM7O0lBQ25DLDBDQUFzQzs7SUFDdEMsMENBQXNDOztJQVd0QyxrREFBd0I7O0lBQ3hCLDRDQUFjOztJQUNkLDBDQUFZOztJQUNaLCtDQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRPbkluaXQsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0QWZ0ZXJWaWV3SW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtYWNoLXNldHRpbmcnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3N1a3UtYWNoc2V0dGluZ3MuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU3VrdUFDSFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblx0X2JlbmVmaWNpYWxPd25lclN0YXR1cztcblx0QElucHV0KCkgdGl0bGUgPSAnUGF5bWVudCBQb3J0YWwnO1xuXHRASW5wdXQoKSB0aXRsZUlkID0gJ3BheW1lbnRQb3J0YWwnO1xuXHRASW5wdXQoKSB0aXRsZUN1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIHN1YlRpdGxlID0gJ0FDSCBTZXR0aW5ncyc7XG5cdEBJbnB1dCgpIHN1YlRpdGxlSWQgPSAnQUNIU2V0dGluZ3MnO1xuXHRASW5wdXQoKSBzdWJUaXRsZUN1c3RvbUNsYXNzID0gJyc7XG5cblx0QElucHV0KCkgbGFiZWxPbmUgPSAnUGF5bWVudCBwcm9maWxlIHN0YXR1czonO1xuXHRASW5wdXQoKSBsYWJlbE9uZUN1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIGxhYmVsT25lSWQgPSAnJztcblxuXHRASW5wdXQoKSBsYWJlbFR3byA9ICdCZW5lZmljaWFsIE93bmVyJztcblx0QElucHV0KCkgbGFiZWxUd29DdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoKSBsYWJlbFR3b0lkID0gJ0JlbmVmaWNpYWwgT3duZXInO1xuXG5cdEBJbnB1dCgpIGxhYmVsVGhyZWUgPSAnU3RhdHVzOic7XG5cdEBJbnB1dCgpIGxhYmVsVGhyZWVDdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoKSBsYWJlbFRocmVlSWQgPSAnQmVuZWZpY2lhbCBPd25lcic7XG5cblx0QElucHV0KCkgbGFiZWxGb3VyID0gJyBEb2N1bWVudGF0aW9uIFVwbG9hZCBOZWVkZWQnO1xuXHRASW5wdXQoKSBsYWJlbEZvdXJDdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoKSBsYWJlbEZvdXJDdXN0b21DbGFzc0lkID0gJ0RvY3VtZW50YXRpb24gVXBsb2FkJztcblxuXHRASW5wdXQoKSBsYWJlbEZpdmUgPSAnTm90ZTogRG9jdW1lbnQgdmVyaWZpY2F0aW9uIG1heSB0YWtlIDItMyBidXNpbmVzcyBkYXlzIHRvIGdldCB2ZXJpZmllZC4nO1xuXHRASW5wdXQoKSBsYWJlbEZpdmVDdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoKSBsYWJlbEZpdmVJZCA9ICcnO1xuXG5cdEBJbnB1dCgpIGxhYmVsU2l4ID0gJ1BsZWFzZSBzZXR1cCB5b3VyIEFDSCBwYXltZW50IHByb2ZpbGUgYmVsb3cnO1xuXHRASW5wdXQoKSBsYWJlbFNpeEN1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIGxhYmVsU2l4SWQgPSAnJztcblxuXHRASW5wdXQoKSBsYWJlbFNldmVuID0gJ0RvY3VtZW50IFN0YXR1czonO1xuXHRASW5wdXQoKSBsYWJlbFNldmVuQ3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCkgbGFiZWxTZXZlbklkID0gJyc7XG5cblx0QElucHV0KCkgbGFiZWxFaWdodCA9ICdVcGxvYWQgRG9jdW1lbnQnO1xuXHRASW5wdXQoKSBsYWJlbEVpZ2h0Q3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCkgbGFiZWxFaWdodElkID0gJ3VwbG9hZCc7XG5cblx0QElucHV0KCkgbGFiZWxOaW5lID0gJ0JlbmVmaWNpYWwgT3duZXJzOic7XG5cdEBJbnB1dCgpIGxhYmVsTmluZUN1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIGxhYmVsTmluZUlkID0gJ3VwbG9hZCc7XG5cblx0QElucHV0KCkgc3ViQ29udGVudEN1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIHN1YkNvbnRlbnRJZCA9ICd1bnZlcmlmaWVkJztcblx0QElucHV0KCkgc3ViQ29udGVudCA9ICd1bnZlcmlmaWVkJztcblxuXHRASW5wdXQoKSBidXR0b25MYWJlbCA9ICdTZXR1cCBBQ0ggUGF5bWVudHMnO1xuXHRASW5wdXQoKSBidXR0b25MYWJlbElkID0gJ3NldHVwQUNIUGF5bWVudHMnO1xuXG5cdEBJbnB1dCgpIHBheW1lbnRCdXR0b25JZCA9ICdTZXR1cEFDSFBheW1lbnRzJztcblxuXHRASW5wdXQoKSBzdWJ0aXRsZUlkID0gJ3N1YnRpdGxlSWQnO1xuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgdXBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRASW5wdXQoKVxuXHRnZXQgYmVuZWZpY2lhbE93bmVyU3RhdHVzKCkge1xuXHRcdHJldHVybiB0aGlzLl9iZW5lZmljaWFsT3duZXJTdGF0dXM7XG5cdH1cblx0c2V0IGJlbmVmaWNpYWxPd25lclN0YXR1cyh2YWwpIHtcblx0XHR0aGlzLl9iZW5lZmljaWFsT3duZXJTdGF0dXMgPSB2YWw7XG5cdFx0aWYgKHZhbCkge1xuXHRcdFx0dGhpcy5sYWJlbFNpeCA9ICdQbGVhc2UgdXBsb2FkIGJlbmVmaWNpYWwgb3duZXIgZG9jdW1lbnRzIGJlbG93Jztcblx0XHR9XG5cdH1cblx0QElucHV0KCkgZG9jdW1lbnRTdGF0dXM7XG5cdHNlbGVjdGVkID0gW107XG5cdHRvZ2dsZSA9IFtdO1xuXHRjdXN0b21DbGFzcztcblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRpZiAodGhpcy5kb2N1bWVudFN0YXR1cykge1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmRvY3VtZW50U3RhdHVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHRoaXMudG9nZ2xlW2pdID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRvZ2dsZVswXSA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuc2VsZWN0ZWRbMF0gPSBudWxsO1xuXHR9XG5cblx0dXBsb2FkRG9jKHZhbCkge1xuXHRcdHRoaXMudXBsb2FkLmVtaXQodmFsKTtcblx0fVxuXG5cdGdldERvY1R5cGVTdHJpbmcoZG9jVHlwZSk6IHN0cmluZyB7XG5cdFx0c3dpdGNoIChkb2NUeXBlKSB7XG5cdFx0XHRjYXNlICdpZGNhcmQnOlxuXHRcdFx0XHRyZXR1cm4gJ0dvdmVybm1lbnQgSXNzdWVkIElEJztcblx0XHRcdGNhc2UgJ3Bhc3Nwb3J0Jzpcblx0XHRcdFx0cmV0dXJuICdQYXNzcG9ydCc7XG5cdFx0XHRjYXNlICdsaWNlbnNlJzpcblx0XHRcdFx0cmV0dXJuIGBEcml2ZXIncyBMaWNlbnNlYDtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBkb2NUeXBlO1xuXHRcdH1cblx0fVxuXG5cdGdldERvY0ZhaWx1cmVTdHJpbmcoZmFpbHVyZVR5cGUpOiBzdHJpbmcge1xuXHRcdHN3aXRjaCAoZmFpbHVyZVR5cGUpIHtcblx0XHRcdGNhc2UgJ1NjYW5Ob3RSZWFkYWJsZSc6XG5cdFx0XHRcdHJldHVybiAnU2NhbiBOb3QgUmVhZGFibGUnO1xuXHRcdFx0Y2FzZSAnU2Nhbk5vdFVwbG9hZGVkJzpcblx0XHRcdFx0cmV0dXJuICdTY2FuIE5vdCBVcGxvYWRlZCc7XG5cdFx0XHRjYXNlICdTY2FuSWRUeXBlTm90U3VwcG9ydGVkJzpcblx0XHRcdFx0cmV0dXJuICdJRCBUeXBlIE5vdCBTdXBwb3J0ZWQnO1xuXHRcdFx0Y2FzZSAnU2Nhbk5hbWVNaXNtYXRjaCc6XG5cdFx0XHRcdHJldHVybiAnTmFtZSBNaXNtYXRjaCc7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gZmFpbHVyZVR5cGU7XG5cdFx0fVxuXHR9XG5cblx0YWN0aXZlKGkpIHtcblx0XHR0aGlzLnNlbGVjdGVkW2ldID0gaTtcblx0XHR0aGlzLnRvZ2dsZVtpXSA9ICF0aGlzLnRvZ2dsZVtpXTtcblx0XHRpZiAodGhpcy5kb2N1bWVudFN0YXR1cykge1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmRvY3VtZW50U3RhdHVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGlmIChpICE9IGopIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkW2pdID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIXRoaXMudG9nZ2xlW2ldKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkW2ldID0gbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHRoaXMuZG9jdW1lbnRTdGF0dXMpIHtcblx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmRvY3VtZW50U3RhdHVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0aWYgKGkgIT0gaikge1xuXHRcdFx0XHRcdFx0dGhpcy50b2dnbGVbal0gPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ==