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
                template: "<div class=\"col poppinsFont p-0\">\n  <div class=\"col-sm-12 text-center\">\n    <span class=\"font20\" id=\"{{titleId}}\">{{title}}</span>\n  </div>\n  <div class=\"col-sm-12 mt-4\">\n    <div class=\"form-group col-xs-12 col Rectangle-2 p-3\">\n      <div class=\"col-sm-12 text-center encode-font\">\n        <div class=\"col\">\n          <span class=\"text-center subTitle\" id=\"{{subtitleId}}\"> {{subTitle}}</span>\n          <br>\n          <p class=\"text-center mt-2 mb-2 text-capitalize\" id=\"{{subContentId}}\">Payment profile status: <b\n              [ngClass]=\"{'statusVerified': subContent == 'verified', 'status': subContent !== 'verified'}\">{{subContent}}</b>\n          </p>\n          <p class=\"text-center mt-2 mb-2\" *ngIf=\"_beneficialOwnerStatus\" id=\"beneficial-owner-status\">Beneficial Owner\n            Status: <b class=\"statusUnverified\">Documentation Upload Needed</b>\n          </p>\n          <p class=\"text-center encode-font mb-2\" *ngIf=\"subContent == 'document'\">Note: Document verification may take\n            2-3 business days\n            to get verified.</p>\n        </div>\n      </div>\n      <div class=\"col-sm-12 text-center mt-2\">\n        <i> <span class=\"font12\" id=\"{{lowerTextId}}\">{{lowerText}} </span> </i>\n      </div>\n      <div class=\"col pl-5 pr-5 pb-2 pt-2\" *ngIf=\"subContent == 'document'\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <p class=\"doclabel mt-4\" *ngIf=\"documentStatus?.length > 0\"><b>Document Status:</b></p>\n          </div>\n          <div class=\"col mt-3 mb-3 text-right pr-sm-4 mr-sm-1\" *ngIf=\"documentStatus?.length > 0\">\n            <span class=\"secondary-btn c-pointer\">\n              <a class=\"secondary-btn c-pointer\" id=\"upload\" (click)=\"action.emit()\">\n                Upload Document\n              </a>\n            </span>\n          </div>\n        </div>\n        <div class=\"col document pl-sm-4 mb-3\" *ngFor=\"let doc of documentStatus;let imageIndex = index;\">\n          <div class=\"row p-2\">\n            <div class=\"col\">\n              <p class=\"mb-0 pb-1\">Doc Type:</p>\n              <p class=\"mb-0\"><b>{{doc?.type}}</b></p>\n            </div>\n            <div class=\"col\">\n              <p class=\"mb-0 pb-1\">Status:</p>\n              <p class=\"mb-0\"><b>{{doc?.status}}</b></p>\n            </div>\n            <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\n            <div class=\"col\" *ngIf=\"doc?.failureReason\">\n              <p class=\"mb-0 pb-1\">Failure Reason:</p>\n              <p class=\"mb-0\"><b>{{doc?.failureReason}}</b></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col pb-4\" id=\"beneficialOwnerBlock\">\n        <div class=\"col\">\n          <p class=\"doclabel mt-4\" *ngIf=\"_beneficialOwnerStatus\"><b>Beneficial Owners:</b></p>\n        </div>\n        <div class=\"col pl-sm-4 mb-3\" *ngFor=\"let user of _beneficialOwnerStatus;let i = index;\">\n          <div class=\"col card-line mt-3 mb-4 c-pointer\" data-toggle=\"collapse\" [attr.data-target]=\"'#ownerBlock' + i\"\n            (click)=\"active(i)\">\n            <div class=\"row\">\n              <label class=\"m-2 pl-3 owner c-pointer\">\n                Beneficial Owner {{i+1}}\n              </label>\n              <label class=\"d-flex justify-content-end col pl-0 c-pointer\">\n                <span class=\"pt-3 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] != i}\">\n                  <i class=\"fa fa-arrow-circle-down icon\"></i>\n                </span>\n                <span class=\"pt-3 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] == i}\">\n                  <i class=\"fa fa-arrow-circle-up icon\"></i>\n                </span>\n              </label>\n            </div>\n          </div>\n          <div class=\"col collapse p-0\" [ngClass]=\"{'show': i == 0 }\" data-parent=\"#beneficialOwnerBlock\"\n            id=\"ownerBlock{{i}}\">\n            <div class=\"col\">\n              <div class=\"row p-2\">\n                <div class=\"col\">\n                  <p class=\"mb-0 pb-1\">Beneficial Owner Name:</p>\n                  <p class=\"mb-0\"><b>{{user?.firstName}}</b></p>\n                </div>\n                <div class=\"col\">\n                  <p class=\"mb-0 pb-1\">Status:</p>\n                  <p class=\"mb-0\"><b>{{user?.verificationStatus}}</b></p>\n                </div>\n                <div class=\"col\" *ngIf=\"user?.verificationStatus == 'document'\">\n                  <div class=\"col d-flex justify-content-center mt-3 mb-3\">\n                    <button class=\"btn btn-info\" (click)=\"uploadDoc(user)\" id=\"uploadDocument\">Upload Document</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col pl-4 pr-4 pb-2 pt-1\" *ngIf=\"user?.verificationStatus == 'document'\">\n              <p class=\"doclabel mt-4\" *ngIf=\"user?.data?.length > 0 \"><b>Document Status:</b></p>\n              <div class=\"col document pl-sm-4 mb-3\" *ngFor=\"let doc of user?.data;let statusIndex = index;\">\n                <div class=\"row p-2\">\n                  <div class=\"col\">\n                    <p class=\"mb-0 pb-1\">Doc Type:</p>\n                    <p class=\"mb-0\"><b>{{getDocTypeString(doc?.type)}}</b></p>\n                  </div>\n                  <div class=\"col\">\n                    <p class=\"mb-0 pb-1\">Status:</p>\n                    <p class=\"mb-0\"><b>{{doc?.status}}</b></p>\n                  </div>\n                  <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\n                  <div class=\"col\" *ngIf=\"doc?.failureReason\">\n                    <p class=\"mb-0 pb-1\">Failure-Reason:</p>\n                    <p class=\"mb-0\"><b>{{getDocFailureString(doc?.failureReason)}}</b></p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12 mt-2 mb-4 text-center\" *ngIf=\"(subContent == 'not complete' ) || (subContent != 'verified' ) && (documentStatus?.length == 0 && (subContent == 'document'))\">\n        <button class=\" btn textBold\" id=\"{{paymentButtonId}}\"\n          (click)=\"action.emit()\">{{SetupACHPaymentsBtnText}}</button>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);.redText{color:red;font-size:12px}.font12{font-size:12px}.textBold{font-weight:700}.Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.poppinsFont{font-family:Poppins,sans-serif!important}.btn{font-size:12px!important}.btn:focus,.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#000}.btn:focus{outline:0!important;box-shadow:none!important}.font20{font-size:25px}.subTitle{font-weight:700!important;font-family:Poppins,sans-serif!important}.statusUnverified{color:red;letter-spacing:.3px}.statusVerified{color:#99c002!important;letter-spacing:.3px}.docLabel{font-family:Poppins,sans-serif!important;letter-spacing:.1px}.document,.mat-chip.mat-standard-chip{background-color:#e0e0e059!important;color:rgba(0,0,0,.87)!important;border-radius:0!important;border-left:3px solid #a7bf2e!important;min-height:40px!important}#document p{font-size:1.5rem}@media screen and (max-width:575px){#document p{font-size:1.4rem}}.card-line{background-color:#fff;color:#2c2727;height:46px;border-radius:2px;letter-spacing:.5px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2);border-top:3px solid #bfd131c9}.display-2{font-size:6.2rem!important;line-height:1.5!important}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.upload-btn{color:#000;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.3rem;border-bottom:3px solid #a7bf2e}.secondary-btn{font-family:Poppins,sans-serif!important;font-size:14px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important;border-bottom:3.5px solid #a7bf2e}.secondary-btn:hover{cursor:pointer!important}.encode-font{font-family:\"Encode Sans\",sans-serif!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hY2hzZXR0aW5ncy9zdWt1LWFjaHNldHRpbmdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FFWixNQUFNLGVBQWUsQ0FBQztBQU92QixNQUFNLE9BQU8sd0JBQXdCO0lBNkJwQztRQTNCUyxVQUFLLEdBQUcsaUJBQWlCLENBQUM7UUFDMUIsWUFBTyxHQUFHLGdCQUFnQixDQUFDO1FBQzNCLGFBQVEsR0FBRyxlQUFlLENBQUM7UUFDM0IsZUFBVSxHQUFHLGNBQWMsQ0FBQztRQUM1QixlQUFVLEdBQUcsWUFBWSxDQUFDO1FBQzFCLGlCQUFZLEdBQUcsYUFBYSxDQUFDO1FBQzdCLDRCQUF1QixHQUFHLG9CQUFvQixDQUFDO1FBQy9DLG9CQUFlLEdBQUcsa0JBQWtCLENBQUM7UUFDckMsY0FBUyxHQUFHLDZDQUE2QyxDQUFDO1FBQzFELGdCQUFXLEdBQUcsYUFBYSxDQUFDO1FBQzVCLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFDekIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFZdEMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFdBQU0sR0FBRyxFQUFFLENBQUM7SUFFRyxDQUFDOzs7O0lBZGhCLElBQ0kscUJBQXFCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBQ0QsSUFBSSxxQkFBcUIsQ0FBQyxHQUFHO1FBQzVCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxHQUFHLENBQUM7UUFDbEMsSUFBSSxHQUFHLEVBQUU7WUFDUixJQUFJLENBQUMsU0FBUyxHQUFHLGdE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QyxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSztzQ0FDTCxLQUFLOzhCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7cUJBQ0wsTUFBTTtxQkFDTixNQUFNO29DQUNOLEtBQUs7NkJBVUwsS0FBSzs7OztJQXhCTiwwREFBdUI7O0lBQ3ZCLHlDQUFtQzs7SUFDbkMsMkNBQW9DOztJQUNwQyw0Q0FBb0M7O0lBQ3BDLDhDQUFxQzs7SUFDckMsOENBQW1DOztJQUNuQyxnREFBc0M7O0lBQ3RDLDJEQUF3RDs7SUFDeEQsbURBQThDOztJQUM5Qyw2Q0FBbUU7O0lBQ25FLCtDQUFxQzs7SUFDckMsOENBQW1DOztJQUNuQywwQ0FBc0M7O0lBQ3RDLDBDQUFzQzs7SUFXdEMsa0RBQXdCOztJQUN4Qiw0Q0FBYzs7SUFDZCwwQ0FBWTs7SUFDWiwrQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0T25Jbml0LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdEFmdGVyVmlld0luaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LWFjaC1zZXR0aW5nJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtYWNoc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQuc2NzcycgXSxcbn0pXG5leHBvcnQgY2xhc3MgU3VrdUFDSFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblx0X2JlbmVmaWNpYWxPd25lclN0YXR1cztcblx0QElucHV0KCkgdGl0bGUgPSAnIFBheW1lbnQgUG9ydGFsJztcblx0QElucHV0KCkgdGl0bGVJZCA9ICcgcGF5bWVudFBvcnRhbCc7XG5cdEBJbnB1dCgpIHN1YlRpdGxlID0gJyBBQ0ggU2V0dGluZ3MnO1xuXHRASW5wdXQoKSBzdWJUaXRsZUlkID0gJyBBQ0hTZXR0aW5ncyc7XG5cdEBJbnB1dCgpIHN1YkNvbnRlbnQgPSAndW52ZXJpZmllZCc7XG5cdEBJbnB1dCgpIHN1YkNvbnRlbnRJZCA9ICcgdW52ZXJpZmllZCc7XG5cdEBJbnB1dCgpIFNldHVwQUNIUGF5bWVudHNCdG5UZXh0ID0gJ1NldHVwIEFDSCBQYXltZW50cyc7XG5cdEBJbnB1dCgpIHBheW1lbnRCdXR0b25JZCA9ICdTZXR1cEFDSFBheW1lbnRzJztcblx0QElucHV0KCkgbG93ZXJUZXh0ID0gJ1BsZWFzZSBzZXR1cCB5b3VyIEFDSCBwYXltZW50IHByb2ZpbGUgYmVsb3cnO1xuXHRASW5wdXQoKSBsb3dlclRleHRJZCA9ICdsb3dlclRleHRJZCc7XG5cdEBJbnB1dCgpIHN1YnRpdGxlSWQgPSAnc3VidGl0bGVJZCc7XG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSB1cGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBJbnB1dCgpXG5cdGdldCBiZW5lZmljaWFsT3duZXJTdGF0dXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2JlbmVmaWNpYWxPd25lclN0YXR1cztcblx0fVxuXHRzZXQgYmVuZWZpY2lhbE93bmVyU3RhdHVzKHZhbCkge1xuXHRcdHRoaXMuX2JlbmVmaWNpYWxPd25lclN0YXR1cyA9IHZhbDtcblx0XHRpZiAodmFsKSB7XG5cdFx0XHR0aGlzLmxvd2VyVGV4dCA9ICdQbGVhc2UgdXBsb2FkIGJlbmVmaWNpYWwgb3duZXIgZG9jdW1lbnRzIGJlbG93Jztcblx0XHR9XG5cdH1cblx0QElucHV0KCkgZG9jdW1lbnRTdGF0dXM7XG5cdHNlbGVjdGVkID0gW107XG5cdHRvZ2dsZSA9IFtdO1xuXHRjdXN0b21DbGFzcztcblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGlmICh0aGlzLmRvY3VtZW50U3RhdHVzKSB7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZG9jdW1lbnRTdGF0dXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0dGhpcy50b2dnbGVbal0gPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMudG9nZ2xlWzBdID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5zZWxlY3RlZFswXSA9IG51bGw7XG5cdH1cblxuXHR1cGxvYWREb2ModmFsKSB7XG5cdFx0dGhpcy51cGxvYWQuZW1pdCh2YWwpO1xuXHR9XG5cblx0Z2V0RG9jVHlwZVN0cmluZyhkb2NUeXBlKTogc3RyaW5nIHtcblx0XHRzd2l0Y2ggKGRvY1R5cGUpIHtcblx0XHRcdGNhc2UgJ2lkY2FyZCc6XG5cdFx0XHRcdHJldHVybiAnR292ZXJubWVudCBJc3N1ZWQgSUQnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3Bhc3Nwb3J0Jzpcblx0XHRcdFx0cmV0dXJuICdQYXNzcG9ydCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbGljZW5zZSc6XG5cdFx0XHRcdHJldHVybiBcIkRyaXZlcidzIExpY2Vuc2VcIjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gZG9jVHlwZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Z2V0RG9jRmFpbHVyZVN0cmluZyhmYWlsdXJlVHlwZSk6IHN0cmluZyB7XG5cdFx0c3dpdGNoIChmYWlsdXJlVHlwZSkge1xuXHRcdFx0Y2FzZSAnU2Nhbk5vdFJlYWRhYmxlJzpcblx0XHRcdFx0cmV0dXJuICdTY2FuIE5vdCBSZWFkYWJsZSc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnU2Nhbk5vdFVwbG9hZGVkJzpcblx0XHRcdFx0cmV0dXJuICdTY2FuIE5vdCBVcGxvYWRlZCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnU2NhbklkVHlwZU5vdFN1cHBvcnRlZCc6XG5cdFx0XHRcdHJldHVybiAnSUQgVHlwZSBOb3QgU3VwcG9ydGVkJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdTY2FuTmFtZU1pc21hdGNoJzpcblx0XHRcdFx0cmV0dXJuICdOYW1lIE1pc21hdGNoJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gZmFpbHVyZVR5cGU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGFjdGl2ZShpKSB7XG5cdFx0dGhpcy5zZWxlY3RlZFtpXSA9IGk7XG5cdFx0dGhpcy50b2dnbGVbaV0gPSAhdGhpcy50b2dnbGVbaV07XG5cdFx0aWYgKHRoaXMuZG9jdW1lbnRTdGF0dXMpIHtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kb2N1bWVudFN0YXR1cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRpZiAoaSAhPSBqKSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZFtqXSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCF0aGlzLnRvZ2dsZVtpXSkge1xuXHRcdFx0dGhpcy5zZWxlY3RlZFtpXSA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0aGlzLmRvY3VtZW50U3RhdHVzKSB7XG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kb2N1bWVudFN0YXR1cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGlmIChpICE9IGopIHtcblx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlW2pdID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0=