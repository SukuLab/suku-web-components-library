/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
                template: "<div class=\"col poppinsFont p-0\">\n  <div class=\"col-sm-12 text-center\">\n    <span class=\"font20\" id=\"{{titleId}}\">{{title}}</span>\n  </div>\n  <div class=\"col-sm-12 mt-4\">\n    <div class=\"form-group col-xs-12 col Rectangle-2 p-3\">\n      <div class=\"col-sm-12 text-center encode-font\">\n        <div class=\"col\">\n          <span class=\"text-center subTitle\" id=\"{{subtitleId}}\"> {{subTitle}}</span>\n          <br>\n          <p class=\"text-center mt-2 mb-2\" id=\"{{subContentId}}\">Customer status: <b\n              [ngClass]=\"{'statusVerified': subContent == 'verified', 'status': subContent !== 'verified'}\">{{subContent}}</b>\n          </p>\n          <p class=\"text-center encode-font mb-2\" *ngIf=\"subContent == 'document'\">Note: Document verification may take 2-3 business days\n            to get verified.</p>\n        </div>\n        <span class=\"redText\" id=\"{{upperTextId}}\">{{upperText}}</span>\n      </div>\n      <div class=\"col-sm-12 text-center mt-2\">\n        <i> <span class=\"font12\" id=\"{{lowerTextId}}\">{{lowerText}} </span> </i>\n      </div>\n\n      <!-- customer status start -->\n      <div class=\"col pl-5 pr-5 pb-2 pt-2\" *ngIf=\"subContent == 'document'\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <p class=\"doclabel mt-4\" *ngIf=\"documentStatus?.length > 0\"><b>Document Status:</b></p>\n          </div>\n          <div class=\"col mt-3 mb-3 text-right pr-sm-4 mr-sm-1\" *ngIf=\"documentStatus?.length > 0\">\n            <!-- <button class=\"btn textBold\" id=\"upload\" (click)=\"action.emit()\">Upload Document</button> -->\n            <span class=\"secondary-btn c-pointer\">\n              <a class=\"secondary-btn c-pointer\" id=\"upload\" (click)=\"action.emit()\">\n                Upload Document\n              </a>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"col document pl-sm-4 mb-3\" *ngFor=\"let doc of documentStatus;let imageIndex = index;\">\n          <div class=\"row p-2\">\n            <div class=\"col\">\n              <p class=\"mb-0 pb-1\">Doc Type:</p>\n              <p class=\"mb-0\"><b>{{doc?.type}}</b></p>\n            </div>\n            <div class=\"col\">\n              <p class=\"mb-0 pb-1\">Status:</p>\n              <p class=\"mb-0\"><b>{{doc?.status}}</b></p>\n            </div>\n            <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\n            <div class=\"col\" *ngIf=\"doc?.failureReason\">\n              <p class=\"mb-0 pb-1\">Failure-Reason:</p>\n              <p class=\"mb-0\"><b>{{doc?.failureReason}}</b></p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col pb-4\" id=\"beneficialOwnerBlock\">\n        <div class=\"col\">\n          <p class=\"doclabel mt-4\" *ngIf=\"_beneficialOwnerStatus\"><b>Beneficial Owners:</b></p>\n        </div>\n        <!-- id=\"document\" *ngIf=\"subContent == 'document'\" -->\n        <div class=\"col pl-sm-4 mb-3\" *ngFor=\"let user of _beneficialOwnerStatus;let i = index;\">\n          <div class=\"col card-line mt-3 mb-4 c-pointer\" data-toggle=\"collapse\" [attr.data-target]=\"'#ownerBlock' + i\"\n            (click)=\"active(i)\">\n            <div class=\"row\">\n              <label class=\"m-2 pl-3 owner c-pointer\">\n                Beneficial Owner {{i+1}}\n              </label>\n              <label class=\"d-flex justify-content-end col pl-0 c-pointer\">\n                <span class=\"pt-3 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] != i}\">\n                  <i class=\"fa fa-arrow-circle-down icon\"></i>\n                </span>\n                <span class=\"pt-3 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] == i}\">\n                  <i class=\"fa fa-arrow-circle-up icon\"></i>\n                </span>\n              </label>\n            </div>\n          </div>\n          <div class=\"col collapse p-0\" [ngClass]=\"{'show': i == 0 }\" data-parent=\"#beneficialOwnerBlock\"\n            id=\"ownerBlock{{i}}\">\n            <div class=\"col\">\n              <!-- <p class=\"doclabel mt-4\" *ngIf=\"documentStatus\"><b>Document Status:</b></p> -->\n              <div class=\"row p-2\">\n                <div class=\"col\">\n                  <p class=\"mb-0 pb-1\">First Name:</p>\n                  <p class=\"mb-0\"><b>{{user?.firstName}}</b></p>\n                </div>\n                <div class=\"col\">\n                  <p class=\"mb-0 pb-1\">Status:</p>\n                  <p class=\"mb-0\"><b>{{user?.verificationStatus}}</b></p>\n                </div>\n                <div class=\"col\" *ngIf=\"user?.verificationStatus == 'document'\">\n                  <div class=\"col d-flex justify-content-center mt-3 mb-3\">\n                    <button class=\"btn btn-info\" (click)=\"uploadDoc(user)\" id=\"uploadDocument\">Upload Document</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col pl-4 pr-4 pb-2 pt-1\" *ngIf=\"user?.verificationStatus == 'document'\">\n              <p class=\"doclabel mt-4\" *ngIf=\"user?.data?.length > 0 \"><b>Document Status:</b></p>\n              <div class=\"col document pl-sm-4 mb-3\"\n                *ngFor=\"let doc of user?.data;let statusIndex = index;\">\n                \n                <div class=\"row p-2\">\n                  <div class=\"col\">\n                    <p class=\"mb-0 pb-1\">Doc Type:</p>\n                    <p class=\"mb-0\"><b>{{doc?.type}}</b></p>\n                  </div>\n                  <div class=\"col\">\n                    <p class=\"mb-0 pb-1\">Status:</p>\n                    <p class=\"mb-0\"><b>{{doc?.status}}</b></p>\n                  </div>\n                  <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\n                  <div class=\"col\" *ngIf=\"doc?.failureReason\">\n                    <p class=\"mb-0 pb-1\">Failure-Reason:</p>\n                    <p class=\"mb-0\"><b>{{doc?.failureReason}}</b></p>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12 mt-2 mb-4 text-center\" *ngIf=\"(subContent == 'not exist' ) || (subContent != 'verified' ) && (documentStatus?.length == 0 && (subContent == 'document'))\">\n        <button class=\" btn textBold\" id=\"{{paymentButtonId}}\"\n          (click)=\"action.emit()\">{{SetupACHPaymentsBtnText}}</button>\n      </div>\n    </div>\n  </div>\n\n</div>",
                styles: [".redText{color:red;font-size:12px}.font12{font-size:12px}.textBold{font-weight:700}.Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.poppinsFont{font-family:Poppins}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:balck}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#000;outline:0!important;box-shadow:none!important}.font20{font-size:25px}.subTitle{font-weight:700!important;font-family:Poppins,sans-serif!important}.status{color:red;letter-spacing:.3px}.statusVerified{color:#99c002!important;letter-spacing:.3px}.docLabel{font-family:Poppins,sans-serif!important;letter-spacing:.1px}.document,.mat-chip.mat-standard-chip{background-color:#e0e0e059!important;color:rgba(0,0,0,.87)!important;border-radius:0!important;border-left:3px solid #a7bf2e!important;min-height:40px!important}#document p{font-size:1.5rem}@media screen and (max-width:575px){#document p{font-size:1.4rem}}.card-line{background-color:#fff;color:#2c2727;height:46px;border-radius:2px;letter-spacing:.5px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2);border-top:3px solid #bfd131c9}.display-2{font-size:6.2rem!important;line-height:1.5!important}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.3rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.upload-btn{color:#000;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.3rem;border-bottom:3px solid #a7bf2e}.secondary-btn{font-family:Poppins,sans-serif!important;font-size:14px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important;border-bottom:3.5px solid #a7bf2e}.secondary-btn:hover{cursor:pointer!important}.encode-font{font-family:'Encode Sans',sans-serif!important}"]
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
    upperText: [{ type: Input }],
    upperTextId: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hY2hzZXR0aW5ncy9zdWt1LWFjaHNldHRpbmdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFPOUYsTUFBTSxPQUFPLHdCQUF3QjtJQTZCcEM7UUEzQlMsVUFBSyxHQUFHLGlCQUFpQixDQUFDO1FBQzFCLFlBQU8sR0FBRyxnQkFBZ0IsQ0FBQztRQUMzQixhQUFRLEdBQUcsZUFBZSxDQUFDO1FBQzNCLGVBQVUsR0FBRyxjQUFjLENBQUM7UUFDNUIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUMxQixpQkFBWSxHQUFHLGFBQWEsQ0FBQztRQUM3Qiw0QkFBdUIsR0FBRyxvQkFBb0IsQ0FBQztRQUMvQyxvQkFBZSxHQUFHLGtCQUFrQixDQUFDO1FBQ3JDLGNBQVMsR0FBRyw2Q0FBNkMsQ0FBQztRQUMxRCxjQUFTLEdBQUcsa0NBQWtDLENBQUM7UUFDL0MsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDNUIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUN6QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVV0QyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQUVHLENBQUM7Ozs7SUFaaEIsSUFDSSxxQkFBcUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFDRCxJQUFJLHFCQUFxQixDQUFDLEdBQUc7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFH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QVN0QyxrREFBd0I7O0lBQ3hCLDRDQUFjOztJQUNkLDBDQUFZOztJQUNaLCtDQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LWFjaC1zZXR0aW5nJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtYWNoc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQuc2NzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1QUNIU2V0dGluZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXHRfYmVuZWZpY2lhbE93bmVyU3RhdHVzO1xuXHRASW5wdXQoKSB0aXRsZSA9ICcgUGF5bWVudCBQb3J0YWwnO1xuXHRASW5wdXQoKSB0aXRsZUlkID0gJyBwYXltZW50UG9ydGFsJztcblx0QElucHV0KCkgc3ViVGl0bGUgPSAnIEFDSCBTZXR0aW5ncyc7XG5cdEBJbnB1dCgpIHN1YlRpdGxlSWQgPSAnIEFDSFNldHRpbmdzJztcblx0QElucHV0KCkgc3ViQ29udGVudCA9ICd1bnZlcmlmaWVkJztcblx0QElucHV0KCkgc3ViQ29udGVudElkID0gJyB1bnZlcmlmaWVkJztcblx0QElucHV0KCkgU2V0dXBBQ0hQYXltZW50c0J0blRleHQgPSAnU2V0dXAgQUNIIFBheW1lbnRzJztcblx0QElucHV0KCkgcGF5bWVudEJ1dHRvbklkID0gJ1NldHVwQUNIUGF5bWVudHMnO1xuXHRASW5wdXQoKSBsb3dlclRleHQgPSAncGxlYXNlIHNldHVwIHlvdXIgQUNIIHBheW1lbnQgcHJvZmlsZSBiZWxvdyc7XG5cdEBJbnB1dCgpIHVwcGVyVGV4dCA9ICdBQ0ggUGF5bWVudCBQcm9maWxlIE5vdCBDb21wbGV0ZSc7XG5cdEBJbnB1dCgpIHVwcGVyVGV4dElkID0gJ3VwcGVyVGV4dElkJztcblx0QElucHV0KCkgbG93ZXJUZXh0SWQgPSAnbG93ZXJUZXh0SWQnO1xuXHRASW5wdXQoKSBzdWJ0aXRsZUlkID0gJ3N1YnRpdGxlSWQnO1xuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgdXBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRASW5wdXQoKVxuXHRnZXQgYmVuZWZpY2lhbE93bmVyU3RhdHVzKCkge1xuXHRcdHJldHVybiB0aGlzLl9iZW5lZmljaWFsT3duZXJTdGF0dXM7XG5cdH1cblx0c2V0IGJlbmVmaWNpYWxPd25lclN0YXR1cyh2YWwpIHtcblx0XHRjb25zb2xlLmxvZyh2YWwpO1xuXHRcdHRoaXMuX2JlbmVmaWNpYWxPd25lclN0YXR1cyA9IHZhbDtcblx0fVxuXHRASW5wdXQoKSBkb2N1bWVudFN0YXR1cztcblx0c2VsZWN0ZWQgPSBbXTtcblx0dG9nZ2xlID0gW107XG5cdGN1c3RvbUNsYXNzO1xuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc29sZS5sb2coJ3RoaXMuZG9jdW1lbnRTdGF0dXMnLCB0aGlzLmRvY3VtZW50U3RhdHVzKTtcblx0XHRpZiAodGhpcy5kb2N1bWVudFN0YXR1cykge1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmRvY3VtZW50U3RhdHVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHRoaXMudG9nZ2xlW2pdID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRvZ2dsZVswXSA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuc2VsZWN0ZWRbMF0gPSBudWxsO1xuXHR9XG5cblx0dXBsb2FkRG9jKHZhbCkge1xuXHRcdGNvbnNvbGUubG9nKCd2YWwnLCB2YWwpO1xuXHRcdHRoaXMudXBsb2FkLmVtaXQodmFsKTtcblx0fVxuXG5cdGFjdGl2ZShpKSB7XG5cdFx0dGhpcy5zZWxlY3RlZFtpXSA9IGk7XG5cdFx0dGhpcy50b2dnbGVbaV0gPSAhdGhpcy50b2dnbGVbaV07XG5cdFx0aWYgKHRoaXMuZG9jdW1lbnRTdGF0dXMpIHtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kb2N1bWVudFN0YXR1cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRpZiAoaSAhPSBqKSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZFtqXSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCF0aGlzLnRvZ2dsZVtpXSkge1xuXHRcdFx0dGhpcy5zZWxlY3RlZFtpXSA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0aGlzLmRvY3VtZW50U3RhdHVzKSB7XG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kb2N1bWVudFN0YXR1cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGlmIChpICE9IGopIHtcblx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlW2pdID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59Il19