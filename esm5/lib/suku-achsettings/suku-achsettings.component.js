/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
        this.lowerText = 'please setup your ACH payment profile below';
        this.upperText = 'ACH Payment Profile Not Complete';
        this.upperTextId = 'upperTextId';
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
            console.log(val);
            this._beneficialOwnerStatus = val;
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
        console.log('this.documentStatus', this.documentStatus);
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
        console.log('val', val);
        this.upload.emit(val);
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
                    template: "<div class=\"col poppinsFont p-0\">\n  <div class=\"col-sm-12 text-center\">\n    <span class=\"font20\" id=\"{{titleId}}\">{{title}}</span>\n  </div>\n  <div class=\"col-sm-12 mt-4\">\n    <div class=\"form-group col-xs-12 col Rectangle-2 p-3\">\n      <div class=\"col-sm-12 text-center encode-font\">\n        <div class=\"col\">\n          <span class=\"text-center subTitle\" id=\"{{subtitleId}}\"> {{subTitle}}</span>\n          <br>\n          <p class=\"text-center mt-2 mb-2\" id=\"{{subContentId}}\">Customer status: <b\n              [ngClass]=\"{'statusVerified': subContent == 'verified', 'status': subContent !== 'verified'}\">{{subContent}}</b>\n          </p>\n          <p class=\"text-center encode-font mb-2\" *ngIf=\"subContent == 'document'\">Note: Document verification may take 2-3 business days\n            to get verified.</p>\n        </div>\n        <span class=\"redText\" id=\"{{upperTextId}}\">{{upperText}}</span>\n      </div>\n      <div class=\"col-sm-12 text-center mt-2\">\n        <i> <span class=\"font12\" id=\"{{lowerTextId}}\">{{lowerText}} </span> </i>\n      </div>\n\n      <!-- customer status start -->\n      <div class=\"col pl-5 pr-5 pb-2 pt-2\" *ngIf=\"subContent == 'document'\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <p class=\"doclabel mt-4\" *ngIf=\"documentStatus?.length > 0\"><b>Document Status:</b></p>\n          </div>\n          <div class=\"col mt-3 mb-3 text-right pr-sm-4 mr-sm-1\" *ngIf=\"documentStatus?.length > 0\">\n            <!-- <button class=\"btn textBold\" id=\"upload\" (click)=\"action.emit()\">Upload Document</button> -->\n            <span class=\"secondary-btn c-pointer\">\n              <a class=\"secondary-btn c-pointer\" id=\"upload\" (click)=\"action.emit()\">\n                Upload Document\n              </a>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"col document pl-sm-4 mb-3\" *ngFor=\"let doc of documentStatus;let imageIndex = index;\">\n          <div class=\"row p-2\">\n            <div class=\"col\">\n              <p class=\"mb-0 pb-1\">Doc Type:</p>\n              <p class=\"mb-0\"><b>{{doc?.type}}</b></p>\n            </div>\n            <div class=\"col\">\n              <p class=\"mb-0 pb-1\">Status:</p>\n              <p class=\"mb-0\"><b>{{doc?.status}}</b></p>\n            </div>\n            <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\n            <div class=\"col\" *ngIf=\"doc?.failureReason\">\n              <p class=\"mb-0 pb-1\">Failure-Reason:</p>\n              <p class=\"mb-0\"><b>{{doc?.failureReason}}</b></p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col pb-4\" id=\"beneficialOwnerBlock\">\n        <div class=\"col\">\n          <p class=\"doclabel mt-4\" *ngIf=\"_beneficialOwnerStatus\"><b>Beneficial Owners:</b></p>\n        </div>\n        <!-- id=\"document\" *ngIf=\"subContent == 'document'\" -->\n        <div class=\"col pl-sm-4 mb-3\" *ngFor=\"let user of _beneficialOwnerStatus;let i = index;\">\n          <div class=\"col card-line mt-3 mb-4 c-pointer\" data-toggle=\"collapse\" [attr.data-target]=\"'#ownerBlock' + i\"\n            (click)=\"active(i)\">\n            <div class=\"row\">\n              <label class=\"m-2 pl-3 owner c-pointer\">\n                Beneficial Owner {{i+1}}\n              </label>\n              <label class=\"d-flex justify-content-end col pl-0 c-pointer\">\n                <span class=\"pt-3 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] != i}\">\n                  <i class=\"fa fa-arrow-circle-down icon\"></i>\n                </span>\n                <span class=\"pt-3 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] == i}\">\n                  <i class=\"fa fa-arrow-circle-up icon\"></i>\n                </span>\n              </label>\n            </div>\n          </div>\n          <div class=\"col collapse p-0\" [ngClass]=\"{'show': i == 0 }\" data-parent=\"#beneficialOwnerBlock\"\n            id=\"ownerBlock{{i}}\">\n            <div class=\"col\">\n              <!-- <p class=\"doclabel mt-4\" *ngIf=\"documentStatus\"><b>Document Status:</b></p> -->\n              <div class=\"row p-2\">\n                <div class=\"col\">\n                  <p class=\"mb-0 pb-1\">First Name:</p>\n                  <p class=\"mb-0\"><b>{{user?.firstName}}</b></p>\n                </div>\n                <div class=\"col\">\n                  <p class=\"mb-0 pb-1\">Status:</p>\n                  <p class=\"mb-0\"><b>{{user?.verificationStatus}}</b></p>\n                </div>\n                <div class=\"col\" *ngIf=\"user?.verificationStatus == 'document'\">\n                  <div class=\"col d-flex justify-content-center mt-3 mb-3\">\n                    <button class=\"btn btn-info\" (click)=\"uploadDoc(user)\" id=\"uploadDocument\">Upload Document</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col pl-4 pr-4 pb-2 pt-1\" *ngIf=\"user?.verificationStatus == 'document'\">\n              <p class=\"doclabel mt-4\" *ngIf=\"user?.data?.length > 0 \"><b>Document Status:</b></p>\n              <div class=\"col document pl-sm-4 mb-3\"\n                *ngFor=\"let doc of user?.data;let statusIndex = index;\">\n                \n                <div class=\"row p-2\">\n                  <div class=\"col\">\n                    <p class=\"mb-0 pb-1\">Doc Type:</p>\n                    <p class=\"mb-0\"><b>{{doc?.type}}</b></p>\n                  </div>\n                  <div class=\"col\">\n                    <p class=\"mb-0 pb-1\">Status:</p>\n                    <p class=\"mb-0\"><b>{{doc?.status}}</b></p>\n                  </div>\n                  <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\n                  <div class=\"col\" *ngIf=\"doc?.failureReason\">\n                    <p class=\"mb-0 pb-1\">Failure-Reason:</p>\n                    <p class=\"mb-0\"><b>{{doc?.failureReason}}</b></p>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12 mt-2 mb-4 text-center\" *ngIf=\"(subContent == 'not exist' ) || (subContent != 'verified' ) && (documentStatus?.length == 0 && (subContent == 'document'))\">\n        <button class=\" btn textBold\" id=\"{{paymentButtonId}}\"\n          (click)=\"action.emit()\">{{SetupACHPaymentsBtnText}}</button>\n      </div>\n    </div>\n  </div>\n\n</div>",
                    styles: [".redText{color:red;font-size:12px}.font12{font-size:12px}.textBold{font-weight:700}.Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.poppinsFont{font-family:Poppins}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:balck}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#000;outline:0!important;box-shadow:none!important}.font20{font-size:25px}.subTitle{font-weight:700!important;font-family:Poppins,sans-serif!important}.status{color:red;letter-spacing:.3px}.statusVerified{color:#99c002!important;letter-spacing:.3px}.docLabel{font-family:Poppins,sans-serif!important;letter-spacing:.1px}.document,.mat-chip.mat-standard-chip{background-color:#e0e0e059!important;color:rgba(0,0,0,.87)!important;border-radius:0!important;border-left:3px solid #a7bf2e!important;min-height:40px!important}#document p{font-size:1.5rem}@media screen and (max-width:575px){#document p{font-size:1.4rem}}.card-line{background-color:#fff;color:#2c2727;height:46px;border-radius:2px;letter-spacing:.5px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2);border-top:3px solid #bfd131c9}.display-2{font-size:6.2rem!important;line-height:1.5!important}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.3rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.upload-btn{color:#000;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.3rem;border-bottom:3px solid #a7bf2e}.secondary-btn{font-family:Poppins,sans-serif!important;font-size:14px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important;border-bottom:3.5px solid #a7bf2e}.secondary-btn:hover{cursor:pointer!important}.encode-font{font-family:'Encode Sans',sans-serif!important}"]
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
        upperText: [{ type: Input }],
        upperTextId: [{ type: Input }],
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
    SukuACHSettingsComponent.prototype.upperText;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.upperTextId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hY2hzZXR0aW5ncy9zdWt1LWFjaHNldHRpbmdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUY7SUFrQ0M7UUEzQlMsVUFBSyxHQUFHLGlCQUFpQixDQUFDO1FBQzFCLFlBQU8sR0FBRyxnQkFBZ0IsQ0FBQztRQUMzQixhQUFRLEdBQUcsZUFBZSxDQUFDO1FBQzNCLGVBQVUsR0FBRyxjQUFjLENBQUM7UUFDNUIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUMxQixpQkFBWSxHQUFHLGFBQWEsQ0FBQztRQUM3Qiw0QkFBdUIsR0FBRyxvQkFBb0IsQ0FBQztRQUMvQyxvQkFBZSxHQUFHLGtCQUFrQixDQUFDO1FBQ3JDLGNBQVMsR0FBRyw2Q0FBNkMsQ0FBQztRQUMxRCxjQUFTLEdBQUcsa0NBQWtDLENBQUM7UUFDL0MsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDNUIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUN6QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVV0QyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQUVHLENBQUM7SUFaaEIsc0JBQ0ksMkRBQXFCOzs7O1FBRHpCO1lBRUMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7UUFDcEMsQ0FBQzs7Ozs7UUFDRCxVQUEwQixHQUFHO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSSxD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cUM7O0lBQ3JDLCtDQUFxQzs7SUFDckMsOENBQW1DOztJQUNuQywwQ0FBc0M7O0lBQ3RDLDBDQUFzQzs7SUFTdEMsa0RBQXdCOztJQUN4Qiw0Q0FBYzs7SUFDZCwwQ0FBWTs7SUFDWiwrQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1hY2gtc2V0dGluZycsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWFjaHNldHRpbmdzLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtYWNoc2V0dGluZ3MuY29tcG9uZW50LnNjc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUFDSFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblx0X2JlbmVmaWNpYWxPd25lclN0YXR1cztcblx0QElucHV0KCkgdGl0bGUgPSAnIFBheW1lbnQgUG9ydGFsJztcblx0QElucHV0KCkgdGl0bGVJZCA9ICcgcGF5bWVudFBvcnRhbCc7XG5cdEBJbnB1dCgpIHN1YlRpdGxlID0gJyBBQ0ggU2V0dGluZ3MnO1xuXHRASW5wdXQoKSBzdWJUaXRsZUlkID0gJyBBQ0hTZXR0aW5ncyc7XG5cdEBJbnB1dCgpIHN1YkNvbnRlbnQgPSAndW52ZXJpZmllZCc7XG5cdEBJbnB1dCgpIHN1YkNvbnRlbnRJZCA9ICcgdW52ZXJpZmllZCc7XG5cdEBJbnB1dCgpIFNldHVwQUNIUGF5bWVudHNCdG5UZXh0ID0gJ1NldHVwIEFDSCBQYXltZW50cyc7XG5cdEBJbnB1dCgpIHBheW1lbnRCdXR0b25JZCA9ICdTZXR1cEFDSFBheW1lbnRzJztcblx0QElucHV0KCkgbG93ZXJUZXh0ID0gJ3BsZWFzZSBzZXR1cCB5b3VyIEFDSCBwYXltZW50IHByb2ZpbGUgYmVsb3cnO1xuXHRASW5wdXQoKSB1cHBlclRleHQgPSAnQUNIIFBheW1lbnQgUHJvZmlsZSBOb3QgQ29tcGxldGUnO1xuXHRASW5wdXQoKSB1cHBlclRleHRJZCA9ICd1cHBlclRleHRJZCc7XG5cdEBJbnB1dCgpIGxvd2VyVGV4dElkID0gJ2xvd2VyVGV4dElkJztcblx0QElucHV0KCkgc3VidGl0bGVJZCA9ICdzdWJ0aXRsZUlkJztcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHVwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QElucHV0KClcblx0Z2V0IGJlbmVmaWNpYWxPd25lclN0YXR1cygpIHtcblx0XHRyZXR1cm4gdGhpcy5fYmVuZWZpY2lhbE93bmVyU3RhdHVzO1xuXHR9XG5cdHNldCBiZW5lZmljaWFsT3duZXJTdGF0dXModmFsKSB7XG5cdFx0Y29uc29sZS5sb2codmFsKTtcblx0XHR0aGlzLl9iZW5lZmljaWFsT3duZXJTdGF0dXMgPSB2YWw7XG5cdH1cblx0QElucHV0KCkgZG9jdW1lbnRTdGF0dXM7XG5cdHNlbGVjdGVkID0gW107XG5cdHRvZ2dsZSA9IFtdO1xuXHRjdXN0b21DbGFzcztcblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGNvbnNvbGUubG9nKCd0aGlzLmRvY3VtZW50U3RhdHVzJywgdGhpcy5kb2N1bWVudFN0YXR1cyk7XG5cdFx0aWYgKHRoaXMuZG9jdW1lbnRTdGF0dXMpIHtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kb2N1bWVudFN0YXR1cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHR0aGlzLnRvZ2dsZVtqXSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50b2dnbGVbMF0gPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLnNlbGVjdGVkWzBdID0gbnVsbDtcblx0fVxuXG5cdHVwbG9hZERvYyh2YWwpIHtcblx0XHRjb25zb2xlLmxvZygndmFsJywgdmFsKTtcblx0XHR0aGlzLnVwbG9hZC5lbWl0KHZhbCk7XG5cdH1cblxuXHRhY3RpdmUoaSkge1xuXHRcdHRoaXMuc2VsZWN0ZWRbaV0gPSBpO1xuXHRcdHRoaXMudG9nZ2xlW2ldID0gIXRoaXMudG9nZ2xlW2ldO1xuXHRcdGlmICh0aGlzLmRvY3VtZW50U3RhdHVzKSB7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZG9jdW1lbnRTdGF0dXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0aWYgKGkgIT0gaikge1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRbal0gPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghdGhpcy50b2dnbGVbaV0pIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRbaV0gPSBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodGhpcy5kb2N1bWVudFN0YXR1cykge1xuXHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZG9jdW1lbnRTdGF0dXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRpZiAoaSAhPSBqKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZVtqXSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSJdfQ==