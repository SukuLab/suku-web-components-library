/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, } from '@angular/core';
export class SukuACHSettingsComponent {
    constructor() {
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
            this.labelSix = 'Please upload beneficial owner documents below';
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
            case 'passport':
                return 'Passport';
            case 'license':
                return `Driver's License`;
            default:
                return docType;
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
            case 'ScanNotUploaded':
                return 'Scan Not Uploaded';
            case 'ScanIdTypeNotSupported':
                return 'ID Type Not Supported';
            case 'ScanNameMismatch':
                return 'Name Mismatch';
            default:
                return failureType;
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
                template: "<div class=\"col poppinsFont p-0\">\n  <div class=\"col-sm-12 text-center\">\n    <span class=\"title {{titleCustomClass}}\" id=\"{{titleId}}\">{{title}}</span>\n  </div>\n  <div class=\"col-sm-12 mt-4\">\n    <div class=\"form-group col-xs-12 col achsetting-box p-3\">\n      <div class=\"col-sm-12 text-center encode-font\">\n        <div class=\"col\">\n          <span class=\"text-center subTitle {{subTitleCustomClass}}\" id=\"{{subtitleId}}\">{{subTitle}}</span>\n          <br>\n          <p class=\"text-center mt-2 mb-2 text-capitalize\">\n            <span [class]=\"labelOneCustomClass\" [id]=\"labelOneId\"></span>{{labelOne}}\n            <span [class]=\"subContentCustomClass\"\n              [ngClass]=\"{'statusVerified': subContent == 'verified', 'status': subContent !== 'verified'}\"\n              [id]=\"subContentId\" class=\"text-bold\">{{subContent}}</span>\n          </p>\n          <p class=\"text-center mt-2 mb-2\" *ngIf=\"_beneficialOwnerStatus\" id=\"beneficial-owner-status\">\n            <span [class]=\"labelTwoCustomClass\" [id]=\"labelTwoId\">{{labelTwo}} </span>\n            <span [class]=\"labelThreeCustomClass\" [id]=\"labelThreeId\">{{labelThree}}</span>\n            <span class=\"statusUnverified {{labelFourCustomClass}}\" id=\"labelFourId\">{{labelFour}}</span>\n          </p>\n          <p class=\"text-center encode-font mb-2 {{labelFiveCustomClass}}\" [id]=\"labelFiveId\"\n            *ngIf=\"subContent == 'document'\">{{labelFive}}</p>\n        </div>\n      </div>\n      <div class=\"col-sm-12 text-center mt-2\">\n        <i> <span class=\"font12 {{labelSixCustomClass}}\" [id]=\"labelSixId\">{{labelSix}} </span>\n        </i>\n      </div>\n      <div class=\"col plc-5 prc-5 pb-2 pt-2\" *ngIf=\"subContent == 'document'\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <p class=\"doclabel mt-4 {{labelSevenCustomClass}}\" *ngIf=\"documentStatus?.length > 0\" [id]=\"labelSevenId\">\n              <b>{{labelSeven}}</b></p>\n          </div>\n          <div class=\"col mt-3 mb-3 text-right pr-sm-4 mr-sm-1\" *ngIf=\"documentStatus?.length > 0\">\n            <span class=\"secondary-btn c-pointer\">\n              <a class=\"secondary-btn c-pointer {{labelEightCustomClass}}\" [id]=\"labelEightId\" (click)=\"action.emit()\">\n                {{labelEight}}\n              </a>\n            </span>\n          </div>\n        </div>\n        <div class=\"col document pl-sm-4 mb-3\" *ngFor=\"let doc of documentStatus;let imageIndex = index;\">\n          <div class=\"row p-2\">\n            <div class=\"col\">\n              <p class=\"mb-0 pb-1\" id=\"docLabelOne{{imageIndex}}\">{{doc?.labelOne || 'Doc Type:'}}</p>\n              <p class=\"mb-0\" id=\"docType{{imageIndex}}\"><b>{{doc?.type}}</b></p>\n            </div>\n            <div class=\"col\">\n              <p class=\"mb-0 pb-1\" id=\"docLabelTwo{{imageIndex}}\">{{doc?.labelTwo || 'Status:'}}</p>\n              <p class=\"mb-0\" id=\"docStatus{{imageIndex}}\"><b>{{doc?.status}}</b></p>\n            </div>\n            <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\n            <div class=\"col\" *ngIf=\"doc?.failureReason\">\n              <p class=\"mb-0 pb-1\" id=\"docLabelThree{{imageIndex}}\">{{doc?.labelThree || 'Failure Reason:'}}</p>\n              <p class=\"mb-0\" id=\"doFailureReasons{{imageIndex}}\"><b>{{doc?.failureReason}}</b></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col pb-4\" id=\"beneficialOwnerBlock\">\n        <div class=\"col pl-4 pr-4\">\n          <p class=\"doclabel mt-4 {{labelNineCustomClass}}\" *ngIf=\"_beneficialOwnerStatus\" [id]=\"labelNineId\">\n            <b>{{labelNine}}</b></p>\n        </div>\n        <div class=\"col pl-sm-4 mb-3\" *ngFor=\"let user of _beneficialOwnerStatus;let i = index;\">\n          <div class=\"col card-line mt-3 mb-4 c-pointer\" data-toggle=\"collapse\" [attr.data-target]=\"'#ownerBlock' + i\"\n            (click)=\"active(i)\">\n            <div class=\"row\">\n              <label class=\"m-2 pl-3 owner c-pointer\">\n                Beneficial Owner {{i+1}}\n              </label>\n              <label class=\"d-flex justify-content-end col p-0 c-pointer\">\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] != i}\">\n                  <i class=\"fa fa-arrow-circle-down icon\"></i>\n                </span>\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] == i}\">\n                  <i class=\"fa fa-arrow-circle-up icon\"></i>\n                </span>\n              </label>\n            </div>\n          </div>\n\n          <div class=\"col collapse p-0\" [ngClass]=\"{'show': i == 0 }\" data-parent=\"#beneficialOwnerBlock\"\n            id=\"ownerBlock{{i}}\">\n            <div class=\"col\">\n              <div class=\"row p-2\">\n                <div class=\"col-12 col-lg-4\">\n                  <p class=\"mb-0 pb-1\" id=\"userLabelOne{{i}}\">{{ user?.labelOne || \"Beneficial Owner Name:\"}}</p>\n                  <p class=\"mb-0\" id=\"userFirstName{{i}}\"><b>{{user?.firstName}}</b></p>\n                </div>\n                <div class=\"col-12 col-lg-4\">\n                  <p class=\"mb-0 pb-1\" id=\"userLabelTwo{{i}}\">{{ user?.labelTwo || 'Status:'}}</p>\n                  <p class=\"mb-0\" id=\"userVerificationStatus{{i}}\"><b>{{user?.verificationStatus}}</b></p>\n                </div>\n                <div class=\"col-12 col-lg-4\" *ngIf=\"user?.verificationStatus == 'document'\">\n                  <div class=\"col d-flex justify-content-center mt-3 mb-3\">\n                    <button class=\"btn btn-info\" (click)=\"uploadDoc(user)\"\n                      id=\"uploadBeneficialDocument{{i}}\">{{ user?.labelThree || 'Upload Document'}}</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col pl-4 pr-4 pb-2 pt-1\" *ngIf=\"user?.verificationStatus == 'document'\">\n              <p class=\"doclabel mt-4\" *ngIf=\"user?.data?.length > 0 \"><b>Document Status:</b></p>\n              <div class=\"col document pl-sm-4 mb-3\" *ngFor=\"let doc of user?.data;let statusIndex = index;\">\n                <div class=\"row p-2\">\n                  <div class=\"col\">\n                    <p class=\"mb-0 pb-1\" id=\"docBeneficialLabelOne{{statusIndex}}\">{{ doc.labelOne || 'Doc Type:'}}</p>\n                    <p class=\"mb-0\" id=\"docBeneficialDocType{{statusIndex}}\"><b>{{getDocTypeString(doc?.type)}}</b></p>\n                  </div>\n                  <div class=\"col\">\n                    <p class=\"mb-0 pb-1\" id=\"docBeneficialLabelTwo{{statusIndex}}\">{{ doc.labelTwo || 'Status:'}}</p>\n                    <p class=\"mb-0\" id=\"docBeneficialStatus{{statusIndex}}\"><b>{{doc?.status}}</b></p>\n                  </div>\n                  <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\n                  <div class=\"col\" *ngIf=\"doc?.failureReason\">\n                    <p class=\"mb-0 pb-1\" id=\"docBeneficialLabelThree{{statusIndex}}\">\n                      {{ doc.labelThree || 'Failure-Reason:'}}</p>\n                    <p class=\"mb-0\" id=\"docBeneficialFailureStatus{{statusIndex}}\">\n                      <b>{{getDocFailureString(doc?.failureReason)}}</b></p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12 mt-2 mb-4 text-center\" *ngIf=\"(subContent == 'not complete' ) || (subContent != 'verified' ) && (documentStatus?.length == 0 &&\n         (subContent == 'document'))\">\n        <button class=\"btn textBold\" id=\"{{buttonLabelId}}\" (click)=\"action.emit()\">{{buttonLabel}}</button>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{font-size:12px!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-info:hover{background-color:var(--suku-primary-border-color)!important}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.redText{color:red;font-size:12px}.font12{font-size:12px}.textBold{font-weight:700}.achsetting-box{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.poppinsFont,.title{font-family:var(--suku-primary-font)!important}.owner{font-family:var(--suku-primary-font)!important;font-size:1rem}@media (max-width:320px){.owner{font-size:.75rem;padding:.3rem 0!important;margin:.45rem!important}}.font20{font-size:25px}.subTitle{font-weight:700!important;font-family:var(--suku-primary-font)!important}.statusUnverified{color:red;letter-spacing:.3px}.statusVerified{color:#99c002!important;letter-spacing:.3px}.docLabel{font-family:var(--suku-primary-font) !important!important;letter-spacing:.1px}.document{background-color:#e0e0e059!important;color:rgba(0,0,0,.87)!important;border-radius:0!important;border-left:3px solid!important;border-color:var(--suku-primary-color)!important;min-height:40px!important}#document p{font-size:1.5rem}@media screen and (max-width:575px){#document p{font-size:1.4rem}}.card-line{background-color:#fff;color:#2c2727;height:46px;border-radius:2px;letter-spacing:.5px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2);border-top:3px solid #bfd131c9}.display-2{font-size:6.2rem!important;line-height:1.5!important}.icon{font-size:1.5rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:var(--suku-primary-font)!important}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.upload-btn{color:#000;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.3rem;border-bottom:3px solid #a7bf2e}.secondary-btn{font-family:Poppins,sans-serif!important;font-size:14px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important;border-bottom:3.5px solid #a7bf2e}.secondary-btn:hover{cursor:pointer!important}.encode-font{font-family:var(--suku-secondary-font)!important}.plc-5{padding-left:2.35rem!important}.prc-5{padding-right:2rem!important}"]
            }] }
];
/** @nocollapse */
SukuACHSettingsComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hY2hzZXR0aW5ncy9zdWt1LWFjaHNldHRpbmdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FFWixNQUFNLGVBQWUsQ0FBQztBQU92QixNQUFNLE9BQU8sd0JBQXdCO0lBdUVwQztRQXJFUyxVQUFLLEdBQUcsZ0JBQWdCLENBQUM7UUFDekIsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQUMxQixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFHLGNBQWMsQ0FBQztRQUMxQixlQUFVLEdBQUcsYUFBYSxDQUFDO1FBQzNCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUV6QixhQUFRLEdBQUcseUJBQXlCLENBQUM7UUFDckMsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsYUFBUSxHQUFHLGtCQUFrQixDQUFDO1FBQzlCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUN6QixlQUFVLEdBQUcsa0JBQWtCLENBQUM7UUFFaEMsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QiwwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDM0IsaUJBQVksR0FBRyxrQkFBa0IsQ0FBQztRQUVsQyxjQUFTLEdBQUcsOEJBQThCLENBQUM7UUFDM0MseUJBQW9CLEdBQUcsRUFBRSxDQUFDO1FBQzFCLDJCQUFzQixHQUFHLHNCQUFzQixDQUFDO1FBRWhELGNBQVMsR0FBRyx5RUFBeUUsQ0FBQztRQUN0Rix5QkFBb0IsR0FBRyxFQUFFLENBQUM7UUFDMUIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFakIsYUFBUSxHQUFHLDZDQUE2QyxDQUFDO1FBQ3pELHdC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QXdCOztJQUN4Qiw0Q0FBYzs7SUFDZCwwQ0FBWTs7SUFDWiwrQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0T25Jbml0LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdEFmdGVyVmlld0luaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LWFjaC1zZXR0aW5nJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtYWNoc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LWFjaHNldHRpbmdzLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VBQ0hTZXR0aW5nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cdF9iZW5lZmljaWFsT3duZXJTdGF0dXM7XG5cdEBJbnB1dCgpIHRpdGxlID0gJ1BheW1lbnQgUG9ydGFsJztcblx0QElucHV0KCkgdGl0bGVJZCA9ICdwYXltZW50UG9ydGFsJztcblx0QElucHV0KCkgdGl0bGVDdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoKSBzdWJUaXRsZSA9ICdBQ0ggU2V0dGluZ3MnO1xuXHRASW5wdXQoKSBzdWJUaXRsZUlkID0gJ0FDSFNldHRpbmdzJztcblx0QElucHV0KCkgc3ViVGl0bGVDdXN0b21DbGFzcyA9ICcnO1xuXG5cdEBJbnB1dCgpIGxhYmVsT25lID0gJ1BheW1lbnQgcHJvZmlsZSBzdGF0dXM6Jztcblx0QElucHV0KCkgbGFiZWxPbmVDdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoKSBsYWJlbE9uZUlkID0gJyc7XG5cblx0QElucHV0KCkgbGFiZWxUd28gPSAnQmVuZWZpY2lhbCBPd25lcic7XG5cdEBJbnB1dCgpIGxhYmVsVHdvQ3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCkgbGFiZWxUd29JZCA9ICdCZW5lZmljaWFsIE93bmVyJztcblxuXHRASW5wdXQoKSBsYWJlbFRocmVlID0gJ1N0YXR1czonO1xuXHRASW5wdXQoKSBsYWJlbFRocmVlQ3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCkgbGFiZWxUaHJlZUlkID0gJ0JlbmVmaWNpYWwgT3duZXInO1xuXG5cdEBJbnB1dCgpIGxhYmVsRm91ciA9ICcgRG9jdW1lbnRhdGlvbiBVcGxvYWQgTmVlZGVkJztcblx0QElucHV0KCkgbGFiZWxGb3VyQ3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCkgbGFiZWxGb3VyQ3VzdG9tQ2xhc3NJZCA9ICdEb2N1bWVudGF0aW9uIFVwbG9hZCc7XG5cblx0QElucHV0KCkgbGFiZWxGaXZlID0gJ05vdGU6IERvY3VtZW50IHZlcmlmaWNhdGlvbiBtYXkgdGFrZSAyLTMgYnVzaW5lc3MgZGF5cyB0byBnZXQgdmVyaWZpZWQuJztcblx0QElucHV0KCkgbGFiZWxGaXZlQ3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCkgbGFiZWxGaXZlSWQgPSAnJztcblxuXHRASW5wdXQoKSBsYWJlbFNpeCA9ICdQbGVhc2Ugc2V0dXAgeW91ciBBQ0ggcGF5bWVudCBwcm9maWxlIGJlbG93Jztcblx0QElucHV0KCkgbGFiZWxTaXhDdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoKSBsYWJlbFNpeElkID0gJyc7XG5cblx0QElucHV0KCkgbGFiZWxTZXZlbiA9ICdEb2N1bWVudCBTdGF0dXM6Jztcblx0QElucHV0KCkgbGFiZWxTZXZlbkN1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIGxhYmVsU2V2ZW5JZCA9ICcnO1xuXG5cdEBJbnB1dCgpIGxhYmVsRWlnaHQgPSAnVXBsb2FkIERvY3VtZW50Jztcblx0QElucHV0KCkgbGFiZWxFaWdodEN1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIGxhYmVsRWlnaHRJZCA9ICd1cGxvYWQnO1xuXG5cdEBJbnB1dCgpIGxhYmVsTmluZSA9ICdCZW5lZmljaWFsIE93bmVyczonO1xuXHRASW5wdXQoKSBsYWJlbE5pbmVDdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoKSBsYWJlbE5pbmVJZCA9ICd1cGxvYWQnO1xuXG5cdEBJbnB1dCgpIHN1YkNvbnRlbnRDdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoKSBzdWJDb250ZW50SWQgPSAndW52ZXJpZmllZCc7XG5cdEBJbnB1dCgpIHN1YkNvbnRlbnQgPSAndW52ZXJpZmllZCc7XG5cblx0QElucHV0KCkgYnV0dG9uTGFiZWwgPSAnU2V0dXAgQUNIIFBheW1lbnRzJztcblx0QElucHV0KCkgYnV0dG9uTGFiZWxJZCA9ICdzZXR1cEFDSFBheW1lbnRzJztcblxuXHRASW5wdXQoKSBwYXltZW50QnV0dG9uSWQgPSAnU2V0dXBBQ0hQYXltZW50cyc7XG5cblx0QElucHV0KCkgc3VidGl0bGVJZCA9ICdzdWJ0aXRsZUlkJztcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHVwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QElucHV0KClcblx0Z2V0IGJlbmVmaWNpYWxPd25lclN0YXR1cygpIHtcblx0XHRyZXR1cm4gdGhpcy5fYmVuZWZpY2lhbE93bmVyU3RhdHVzO1xuXHR9XG5cdHNldCBiZW5lZmljaWFsT3duZXJTdGF0dXModmFsKSB7XG5cdFx0dGhpcy5fYmVuZWZpY2lhbE93bmVyU3RhdHVzID0gdmFsO1xuXHRcdGlmICh2YWwpIHtcblx0XHRcdHRoaXMubGFiZWxTaXggPSAnUGxlYXNlIHVwbG9hZCBiZW5lZmljaWFsIG93bmVyIGRvY3VtZW50cyBiZWxvdyc7XG5cdFx0fVxuXHR9XG5cdEBJbnB1dCgpIGRvY3VtZW50U3RhdHVzO1xuXHRzZWxlY3RlZCA9IFtdO1xuXHR0b2dnbGUgPSBbXTtcblx0Y3VzdG9tQ2xhc3M7XG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMuZG9jdW1lbnRTdGF0dXMpIHtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kb2N1bWVudFN0YXR1cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHR0aGlzLnRvZ2dsZVtqXSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50b2dnbGVbMF0gPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLnNlbGVjdGVkWzBdID0gbnVsbDtcblx0fVxuXG5cdHVwbG9hZERvYyh2YWwpIHtcblx0XHR0aGlzLnVwbG9hZC5lbWl0KHZhbCk7XG5cdH1cblxuXHRnZXREb2NUeXBlU3RyaW5nKGRvY1R5cGUpOiBzdHJpbmcge1xuXHRcdHN3aXRjaCAoZG9jVHlwZSkge1xuXHRcdFx0Y2FzZSAnaWRjYXJkJzpcblx0XHRcdFx0cmV0dXJuICdHb3Zlcm5tZW50IElzc3VlZCBJRCc7XG5cdFx0XHRjYXNlICdwYXNzcG9ydCc6XG5cdFx0XHRcdHJldHVybiAnUGFzc3BvcnQnO1xuXHRcdFx0Y2FzZSAnbGljZW5zZSc6XG5cdFx0XHRcdHJldHVybiBgRHJpdmVyJ3MgTGljZW5zZWA7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gZG9jVHlwZTtcblx0XHR9XG5cdH1cblxuXHRnZXREb2NGYWlsdXJlU3RyaW5nKGZhaWx1cmVUeXBlKTogc3RyaW5nIHtcblx0XHRzd2l0Y2ggKGZhaWx1cmVUeXBlKSB7XG5cdFx0XHRjYXNlICdTY2FuTm90UmVhZGFibGUnOlxuXHRcdFx0XHRyZXR1cm4gJ1NjYW4gTm90IFJlYWRhYmxlJztcblx0XHRcdGNhc2UgJ1NjYW5Ob3RVcGxvYWRlZCc6XG5cdFx0XHRcdHJldHVybiAnU2NhbiBOb3QgVXBsb2FkZWQnO1xuXHRcdFx0Y2FzZSAnU2NhbklkVHlwZU5vdFN1cHBvcnRlZCc6XG5cdFx0XHRcdHJldHVybiAnSUQgVHlwZSBOb3QgU3VwcG9ydGVkJztcblx0XHRcdGNhc2UgJ1NjYW5OYW1lTWlzbWF0Y2gnOlxuXHRcdFx0XHRyZXR1cm4gJ05hbWUgTWlzbWF0Y2gnO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIGZhaWx1cmVUeXBlO1xuXHRcdH1cblx0fVxuXG5cdGFjdGl2ZShpKSB7XG5cdFx0dGhpcy5zZWxlY3RlZFtpXSA9IGk7XG5cdFx0dGhpcy50b2dnbGVbaV0gPSAhdGhpcy50b2dnbGVbaV07XG5cdFx0aWYgKHRoaXMuZG9jdW1lbnRTdGF0dXMpIHtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kb2N1bWVudFN0YXR1cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRpZiAoaSAhPSBqKSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZFtqXSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCF0aGlzLnRvZ2dsZVtpXSkge1xuXHRcdFx0dGhpcy5zZWxlY3RlZFtpXSA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0aGlzLmRvY3VtZW50U3RhdHVzKSB7XG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kb2N1bWVudFN0YXR1cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGlmIChpICE9IGopIHtcblx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlW2pdID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0=