(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/router'), require('d3'), require('@angular/material'), require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('suku-webcomponents', ['exports', '@angular/common', '@angular/router', 'd3', '@angular/material', '@angular/core', '@angular/forms'], factory) :
    (factory((global['suku-webcomponents'] = {}),global.ng.common,global.ng.router,global.d3,global.ng.material,global.ng.core,global.ng.forms));
}(this, (function (exports,common,router,d3,material,i0,forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuWebcomponentsService = /** @class */ (function () {
        function SukuWebcomponentsService() {
        }
        SukuWebcomponentsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SukuWebcomponentsService.ctorParameters = function () { return []; };
        /** @nocollapse */ SukuWebcomponentsService.ngInjectableDef = i0.defineInjectable({ factory: function SukuWebcomponentsService_Factory() { return new SukuWebcomponentsService(); }, token: SukuWebcomponentsService, providedIn: "root" });
        return SukuWebcomponentsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            this.action = new i0.EventEmitter();
            this.upload = new i0.EventEmitter();
            this.selected = [];
            this.toggle = [];
        }
        Object.defineProperty(SukuACHSettingsComponent.prototype, "beneficialOwnerStatus", {
            get: /**
             * @return {?}
             */ function () {
                return this._beneficialOwnerStatus;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
            { type: i0.Component, args: [{
                        selector: 'suku-ach-setting',
                        template: "<div class=\"col poppinsFont p-0\">\r\n  <div class=\"col-sm-12 text-center\">\r\n    <span class=\"font20\" id=\"{{titleId}}\">{{title}}</span>\r\n  </div>\r\n  <div class=\"col-sm-12 mt-4\">\r\n    <div class=\"form-group col-xs-12 col Rectangle-2 p-3\">\r\n      <div class=\"col-sm-12 text-center encode-font\">\r\n        <div class=\"col\">\r\n          <span class=\"text-center subTitle\" id=\"{{subtitleId}}\"> {{subTitle}}</span>\r\n          <br>\r\n          <p class=\"text-center mt-2 mb-2\" id=\"{{subContentId}}\">Customer status: <b\r\n              [ngClass]=\"{'statusVerified': subContent == 'verified', 'status': subContent !== 'verified'}\">{{subContent}}</b>\r\n          </p>\r\n          <p class=\"text-center encode-font mb-2\" *ngIf=\"subContent == 'document'\">Note: Document verification may take 2-3 business days\r\n            to get verified.</p>\r\n        </div>\r\n        <span class=\"redText\" id=\"{{upperTextId}}\">{{upperText}}</span>\r\n      </div>\r\n      <div class=\"col-sm-12 text-center mt-2\">\r\n        <i> <span class=\"font12\" id=\"{{lowerTextId}}\">{{lowerText}} </span> </i>\r\n      </div>\r\n\r\n      <!-- customer status start -->\r\n      <div class=\"col pl-5 pr-5 pb-2 pt-2\" *ngIf=\"subContent == 'document'\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <p class=\"doclabel mt-4\" *ngIf=\"documentStatus?.length > 0\"><b>Document Status:</b></p>\r\n          </div>\r\n          <div class=\"col mt-3 mb-3 text-right pr-sm-4 mr-sm-1\" *ngIf=\"documentStatus?.length > 0\">\r\n            <!-- <button class=\"btn textBold\" id=\"upload\" (click)=\"action.emit()\">Upload Document</button> -->\r\n            <span class=\"secondary-btn c-pointer\">\r\n              <a class=\"secondary-btn c-pointer\" id=\"upload\" (click)=\"action.emit()\">\r\n                Upload Document\r\n              </a>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col document pl-sm-4 mb-3\" *ngFor=\"let doc of documentStatus;let imageIndex = index;\">\r\n          <div class=\"row p-2\">\r\n            <div class=\"col\">\r\n              <p class=\"mb-0 pb-1\">Doc Type:</p>\r\n              <p class=\"mb-0\"><b>{{doc?.type}}</b></p>\r\n            </div>\r\n            <div class=\"col\">\r\n              <p class=\"mb-0 pb-1\">Status:</p>\r\n              <p class=\"mb-0\"><b>{{doc?.status}}</b></p>\r\n            </div>\r\n            <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\r\n            <div class=\"col\" *ngIf=\"doc?.failureReason\">\r\n              <p class=\"mb-0 pb-1\">Failure-Reason:</p>\r\n              <p class=\"mb-0\"><b>{{doc?.failureReason}}</b></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col pb-4\" id=\"beneficialOwnerBlock\">\r\n        <div class=\"col\">\r\n          <p class=\"doclabel mt-4\" *ngIf=\"_beneficialOwnerStatus\"><b>Beneficial Owners:</b></p>\r\n        </div>\r\n        <!-- id=\"document\" *ngIf=\"subContent == 'document'\" -->\r\n        <div class=\"col pl-sm-4 mb-3\" *ngFor=\"let user of _beneficialOwnerStatus;let i = index;\">\r\n          <div class=\"col card-line mt-3 mb-4 c-pointer\" data-toggle=\"collapse\" [attr.data-target]=\"'#ownerBlock' + i\"\r\n            (click)=\"active(i)\">\r\n            <div class=\"row\">\r\n              <label class=\"m-2 pl-3 owner c-pointer\">\r\n                Beneficial Owner {{i+1}}\r\n              </label>\r\n              <label class=\"d-flex justify-content-end col pl-0 c-pointer\">\r\n                <span class=\"pt-3 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] != i}\">\r\n                  <i class=\"fa fa-arrow-circle-down icon\"></i>\r\n                </span>\r\n                <span class=\"pt-3 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] == i}\">\r\n                  <i class=\"fa fa-arrow-circle-up icon\"></i>\r\n                </span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col collapse p-0\" [ngClass]=\"{'show': i == 0 }\" data-parent=\"#beneficialOwnerBlock\"\r\n            id=\"ownerBlock{{i}}\">\r\n            <div class=\"col\">\r\n              <!-- <p class=\"doclabel mt-4\" *ngIf=\"documentStatus\"><b>Document Status:</b></p> -->\r\n              <div class=\"row p-2\">\r\n                <div class=\"col\">\r\n                  <p class=\"mb-0 pb-1\">First Name:</p>\r\n                  <p class=\"mb-0\"><b>{{user?.firstName}}</b></p>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <p class=\"mb-0 pb-1\">Status:</p>\r\n                  <p class=\"mb-0\"><b>{{user?.verificationStatus}}</b></p>\r\n                </div>\r\n                <div class=\"col\" *ngIf=\"user?.verificationStatus == 'document'\">\r\n                  <div class=\"col d-flex justify-content-center mt-3 mb-3\">\r\n                    <button class=\"btn btn-info\" (click)=\"uploadDoc(user)\" id=\"uploadDocument\">Upload Document</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col pl-4 pr-4 pb-2 pt-1\" *ngIf=\"user?.verificationStatus == 'document'\">\r\n              <p class=\"doclabel mt-4\" *ngIf=\"user?.data?.length > 0 \"><b>Document Status:</b></p>\r\n              <div class=\"col document pl-sm-4 mb-3\"\r\n                *ngFor=\"let doc of user?.data;let statusIndex = index;\">\r\n                \r\n                <div class=\"row p-2\">\r\n                  <div class=\"col\">\r\n                    <p class=\"mb-0 pb-1\">Doc Type:</p>\r\n                    <p class=\"mb-0\"><b>{{doc?.type}}</b></p>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <p class=\"mb-0 pb-1\">Status:</p>\r\n                    <p class=\"mb-0\"><b>{{doc?.status}}</b></p>\r\n                  </div>\r\n                  <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\r\n                  <div class=\"col\" *ngIf=\"doc?.failureReason\">\r\n                    <p class=\"mb-0 pb-1\">Failure-Reason:</p>\r\n                    <p class=\"mb-0\"><b>{{doc?.failureReason}}</b></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 mt-2 mb-4 text-center\" *ngIf=\"(subContent == 'not exist' ) || (subContent != 'verified' ) && (documentStatus?.length == 0 && (subContent == 'document'))\">\r\n        <button class=\" btn textBold\" id=\"{{paymentButtonId}}\"\r\n          (click)=\"action.emit()\">{{SetupACHPaymentsBtnText}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>",
                        styles: [".redText{color:red;font-size:12px}.font12{font-size:12px}.textBold{font-weight:700}.Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.poppinsFont{font-family:Poppins}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:balck}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#000;outline:0!important;box-shadow:none!important}.font20{font-size:25px}.subTitle{font-weight:700!important;font-family:Poppins,sans-serif!important}.status{color:red;letter-spacing:.3px}.statusVerified{color:#99c002!important;letter-spacing:.3px}.docLabel{font-family:Poppins,sans-serif!important;letter-spacing:.1px}.document,.mat-chip.mat-standard-chip{background-color:#e0e0e059!important;color:rgba(0,0,0,.87)!important;border-radius:0!important;border-left:3px solid #a7bf2e!important;min-height:40px!important}#document p{font-size:1.5rem}@media screen and (max-width:575px){#document p{font-size:1.4rem}}.card-line{background-color:#fff;color:#2c2727;height:46px;border-radius:2px;letter-spacing:.5px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2);border-top:3px solid #bfd131c9}.display-2{font-size:6.2rem!important;line-height:1.5!important}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.3rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.upload-btn{color:#000;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.3rem;border-bottom:3px solid #a7bf2e}.secondary-btn{font-family:Poppins,sans-serif!important;font-size:14px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important;border-bottom:3.5px solid #a7bf2e}.secondary-btn:hover{cursor:pointer!important}.encode-font{font-family:'Encode Sans',sans-serif!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuACHSettingsComponent.ctorParameters = function () { return []; };
        SukuACHSettingsComponent.propDecorators = {
            title: [{ type: i0.Input }],
            titleId: [{ type: i0.Input }],
            subTitle: [{ type: i0.Input }],
            subTitleId: [{ type: i0.Input }],
            subContent: [{ type: i0.Input }],
            subContentId: [{ type: i0.Input }],
            SetupACHPaymentsBtnText: [{ type: i0.Input }],
            paymentButtonId: [{ type: i0.Input }],
            lowerText: [{ type: i0.Input }],
            upperText: [{ type: i0.Input }],
            upperTextId: [{ type: i0.Input }],
            lowerTextId: [{ type: i0.Input }],
            subtitleId: [{ type: i0.Input }],
            action: [{ type: i0.Output }],
            upload: [{ type: i0.Output }],
            beneficialOwnerStatus: [{ type: i0.Input }],
            documentStatus: [{ type: i0.Input }]
        };
        return SukuACHSettingsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuTransactionHistoryComponent = /** @class */ (function () {
        function SukuTransactionHistoryComponent() {
            this.transactionHistory = 'Transaction History';
            this.transactionDetailsId = 'transactionDetailsId';
            this.typeId = 'typeId';
            this.myAccountId = 'myAccountId';
            this.counterPartyId = 'counterPartyId';
            this.counterparty = 'Counter Party';
            this.amountId = 'AmountId';
            this.statusId = 'statusId';
            this.dateCreatedId = 'dateCreatedId';
            this.paymentManagementId = 'paymentManagementId';
            this.action = new i0.EventEmitter();
            this.cancelId = 'cancelId';
            this.cancel = 'Cancel';
        }
        /**
         * @return {?}
         */
        SukuTransactionHistoryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.headings = [{
                        'type': 'Type',
                        'myAccount': 'My Account',
                        'counterparty': 'Counter Party',
                        'amount': 'Amount',
                        'status': 'Status',
                        'dateInitiated': 'Initiated On',
                        'dateCreated': 'Completed On',
                        'paymentManagement': 'Payment Management'
                    }];
            };
        SukuTransactionHistoryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-transaction-history',
                        template: "<div class=\"col fontPoppins p-5 d-flex\">\r\n  <div class=\"form-group col-12 historyWidget p-3\">\r\n    <div class=\"col-sm-12 text-center mb-2 pt-2 pb-3\">\r\n      <b>{{transactionHistory | uppercase}}</b>\r\n    </div>\r\n    <div class=\"col-sm-12 table-responsive mb-3\" id=\"transactionTable\">\r\n      <table class=\"col-sm-12  table table-bordered tableBg\" id=\"transactionHisTable\" style=\"overflow-x:auto;\">\r\n        <thead>\r\n          <tr *ngFor=\"let heading of headings\">\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{typeId}}\">{{heading.type}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{myAccountId}}\">{{heading.myAccount}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{counterPartyId}}\">{{heading.counterparty}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{amountId}}\">{{heading.amount}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{statusId}}\">{{heading.status}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{dateCreatedId}}\">{{heading.dateInitiated}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{dateCreatedId}}\">{{heading.dateCreated}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{paymentManagementId}}\">{{heading.paymentManagement}}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr id=\"{{transactionDetailsId}}\" *ngFor=\"let transaction of transactionDetails\">\r\n            <td scope=\"row\" class=\"text-center {{( (transaction?.type) == 'outgoing') ? 'outgoing' : 'incoming'}}\">\r\n              {{transaction?.type}}</td>\r\n            <td scope=\"row\" class=\"text-center\">{{transaction?.accountName}}</td>\r\n            <td scope=\"row\" class=\"text-center\">{{transaction?.counterParty}}</td>\r\n            <td scope=\"row\" class=\"text-center\">{{transaction?.amount}}</td>\r\n            <td scope=\"row\" class=\"text-center {{( (transaction.status) == 'Failed') ? 'falied' : 'incoming'}}\">{{transaction?.status}}</td>\r\n            <td scope=\"row\" class=\"text-center\">{{transaction?.created | date:'d MMM yyyy HH:MM a'}}</td>\r\n            <td scope=\"row\" class=\"text-center\">{{(transaction?.completedOn | date:'d MMM yyyy HH:MM a') || 'Not available'}}</td>\r\n            <td class=\"text-center\"><button *ngIf=\"transaction?.status=='pending'\" id=\"{{cancelId}}\" (click)=\"action.emit(transaction);\" class=\"btn  btnCancel\">{{cancel}}</button></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>",
                        styles: [".cancelText{font-size:12px;color:red}.outgoing{color:#af0a0a}.incoming{color:#000}.falied{color:red}.defaultDiv{background-color:#d8fc40;border-radius:30px}.dangerBtn{background-color:#f13030;color:#fff}.bankDiv{background-color:#f0f4f5;border-radius:30px;border:1px solid gray}.mT-35{margin-top:18%}#transactionTable{max-height:300px;overflow-x:auto;overflow-y:auto}#transactionHisTable{white-space:nowrap}.fontPoppins{font-family:Poppins}.btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.375rem .75rem;font-size:10px;font-weight:700;font-family:Poppins}.btnCancel{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:red;padding:.475rem 2.95rem;font-size:10px;font-weight:700;font-family:Poppins}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{outline:0!important;box-shadow:none!important;color:#000}.tableBg{background-color:#fff}.pT-5{padding-top:2%}.historyWidget{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05);border-top:5px solid #a7bf2e}"]
                    }] }
        ];
        /** @nocollapse */
        SukuTransactionHistoryComponent.ctorParameters = function () { return []; };
        SukuTransactionHistoryComponent.propDecorators = {
            transactionHistory: [{ type: i0.Input }],
            transactionDetailsId: [{ type: i0.Input }],
            transactionDetails: [{ type: i0.Input }],
            headings: [{ type: i0.Input }],
            typeId: [{ type: i0.Input }],
            myAccountId: [{ type: i0.Input }],
            counterPartyId: [{ type: i0.Input }],
            counterparty: [{ type: i0.Input }],
            amountId: [{ type: i0.Input }],
            statusId: [{ type: i0.Input }],
            dateCreatedId: [{ type: i0.Input }],
            paymentManagementId: [{ type: i0.Input }],
            action: [{ type: i0.Output }],
            cancelId: [{ type: i0.Input }],
            cancel: [{ type: i0.Input }]
        };
        return SukuTransactionHistoryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuFundingSourceComponent = /** @class */ (function () {
        function SukuFundingSourceComponent() {
            this.fundingDetails = [];
            this.defaultText = 'Default';
            this.defaultbankName = 'Bank Name';
            this.headerOneTxt = 'FUNDING';
            this.headerTwoText = 'SOURCES';
            this.defaultBtnTxt = 'Make Default';
            this.removeBtnTxt = 'Remove';
            this.defaultBtnId = 'defaultBtnId';
            this.removeBtnId = 'removeBtnId';
            this.defaultRemoveBtnTxt = 'Remove';
            this.achWalletTxt = 'ACH Wallet';
            this.balanceLblTxt = 'Balance';
            this.achMakeDefaultBtnText = 'Make Default';
            this.achMakeDefaultBtnId = 'achMakeDefaultBtnId';
            this.DefaultaccountNumber = 'XXXXXX0220';
            this.WalletBalance = 0.000;
            this.defaultRemoveBtnId = 'defaultRemoveBtnId';
            this.transferFundId = 'transferFundId';
            this.transferFundTxt = 'Transfer Balance';
            this.removeDefault = new i0.EventEmitter();
            this.makeDefaultAction = new i0.EventEmitter();
            this.removeSourceAction = new i0.EventEmitter();
            this.transferFundAction = new i0.EventEmitter();
            this.addSource = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuFundingSourceComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuFundingSourceComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-funding-source',
                        template: "<div class=\"col-sm-12 d-flex pt-4\">\r\n  <div class=\"Rectangle-2 col mB-2 pb-5\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"row\" >\r\n        <div class=\"col-sm-1\">\r\n          {{headerOneTxt}} <br>\r\n          {{headerTwoText}}\r\n        </div>\r\n        <div class=\"col-sm-10\">\r\n          <div class=\"add-btn p-2 pl-sm-5 ml-sm-4 text-left\" *ngIf=\"fundingDetails.length !== 8\">\r\n            <a>\r\n              <i class=\"fa fa-plus-circle plusIcon\" (click)=\"addSource.emit()\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-3 col-lg-4 col-md-6 clearfix mt-3 pr-5 pl-5\">\r\n          <div class=\"jumbotron col m-6  container defaultDiv samBoxStyle boxShadowStyle jumbotron_cus2\">\r\n            <div class=\"col-12 p-3 mt-2\">\r\n              <div class=\"col-sm-12 w74 text-center\">\r\n                <b>{{defaultText}}</b>\r\n              </div>\r\n              <div class=\"col-12 w74 text-center mt-4\">\r\n                <span>{{defaultbankName}}</span>\r\n              </div>\r\n              <div class=\"col-12 w74 text-center\">\r\n                <span>\r\n                {{DefaultaccountNumber}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-6  clearfix mt-3 pr-5 pl-5\" *ngFor=\"let item of fundingDetails; let i = index;\">\r\n          <div class=\"jumbotron m-6 justify-content-center container defaultDiv\r\n          samBoxStyle boxShadowStyle jumbotron_cus2\">\r\n            <div class=\"col-sm-12  p-3  mt-2 \">\r\n              <div class=\"col-sm-12 w74 text-center mt-35\">\r\n                <span>{{item.name}}</span>\r\n              </div>\r\n              <div class=\"col-sm-12 w74 text-center pt8\">\r\n               <span>XXXXXX{{item.id | slice:-4}}</span> \r\n              </div>\r\n              <div class=\"col mt-5 text-center\">\r\n                </div>\r\n                <div class=\"col-sm-12 text-center pt13\">\r\n                  <div class=\"col-sm-10 col-xs-12 offset-xs-0  offset-sm-1 p-2\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-lg-12 p-0\">\r\n                            <button *ngIf=\"!item.defaultAccount==true\" class=\"btn btn-info w74 mb9 btn-block btnFnt p-2\" (click)=\"makeDefaultAction.emit(item);\" id=\"{{defaultBtnId}}\">{{defaultBtnTxt}}</button>\r\n                            <button class=\"btnDanger mt-1 w74 clearfix btnFnt p-2 btn-block\" (click)=\"removeSourceAction.emit(item);\" id=\"{{removeBtnId}}\">{{removeBtnTxt}}</button>\r\n                         </div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-6 clearfix mt-3 pr-5 pl-5\">\r\n          <div class=\"jumbotron  m-6 container defaultDiv samBoxStyle boxShadowStyle jumbotron_cus2\">\r\n            <div class=\"col-sm-12  p-3  mt-2\">\r\n              <div class=\"col-sm-12 text-center w74 pb10 p-2\">\r\n                {{achWalletTxt}}\r\n              </div>\r\n              <div class=\"col-sm-12 w74 text-center\">\r\n                {{balanceLblTxt}}:\r\n              </div>\r\n              <div class=\"col-sm-12 w74 text-center\">\r\n                ${{WalletBalance}}\r\n              </div>\r\n              <div class=\"col-sm-12 text-center p15\">\r\n                <div class=\"col-sm-10 col-xs-12 offset-xs-0  offset-sm-1 p-2\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12 p-0\">\r\n                          <button class=\"btn btn-info mb9 w74 clearfix btnFnt p-2 mt-3 btn-block\" (click)=\"transferFundAction.emit();\" id=\"{{transferFundId}}\">\r\n                            Transfer Balance\r\n                          </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                        styles: [".btnDanger{border-radius:28px 76px 63px;display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:.375rem .75rem;font-size:1rem;line-height:1.5;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;background-color:#fff;cursor:pointer;border:2px solid red}.btnDanger:hover{background-color:red;color:#fff}.jumbotron_cus1{padding:10px 5px;margin-bottom:15px;margin-left:10px}.jumbotron_cus2{margin-bottom:15px;margin-right:15px;padding:15px 5px}.samBoxStyle{margin-bottom:17px;background-color:#f5f5f58c;border-top:3px solid #a7bf2e;border-radius:41px 45px 11px 14px;box-shadow:0 1px 1px rgba(0,0,0,.5);height:300px}.boxShadowStyle{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.matBoxStyle{border-radius:25px;box-shadow:0 4px 8px 0 rgba(0,0,0,.1),0 6px 20px 0 rgba(0,0,0,.1);background-color:#fff}.mb9{margin-bottom:9px}.pl34{padding-left:34px}.pt25{padding-top:25px}.borderBtm{border-bottom:5px solid #a7bf2e}.mb40{margin-bottom:40px}.progressTxt{font-family:\"Encode Sans\",sans-serif!important;font-size:14px;font-weight:1;text-align:center;color:#b6b6b6}.pl60{padding-left:60px}.Rectangle-2{background-color:#fff;border-radius:0 0 42px 42px;padding-top:15px;padding-bottom:10px}.pl49{padding-left:49px}.Pl0{padding-left:0!important;font-size:20px}.cancelTxt{font-size:20px;font-weight:700}.border{border-radius:0 0 42px 42px;border-top:3px solid #b6b6b6}.pb70{padding-bottom:70px}.pt37{padding-top:37px;padding-left:55px}.pb9{padding-bottom:9px}.pb10{padding-bottom:8px}.pt8{padding-top:8px;padding-bottom:9px}.pt13{padding-top:13px;padding-bottom:13px}.p15{padding-top:12%;padding-bottom:13px}.btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.375rem .75rem;font-size:10px;font-family:Poppins}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e}.poppinsFont{font-family:Poppins}.btnFnt{font-size:10px}.mT-18{margin-top:18%}.mT-22{margin-top:22%}.mT-15{margin-top:15%}.plusIcon{color:#a7bf2e;font-size:30px}.m-6{margin:3%}.btnRmv{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.375rem .75rem;font-size:10px;font-family:Poppins;cursor:pointer}.btnRmv:hover{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#757575;color:#fff}.btn:focus,.btnRmv:focus{outline:0!important;box-shadow:none!important;color:#000}.icon-size{font-size:74px!important;color:#a6bf2e}@media only screen and (max-width:800px){.jumbotron_cus1,.jumbotron_cus2{width:100%}}.w74{word-wrap:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        SukuFundingSourceComponent.ctorParameters = function () { return []; };
        SukuFundingSourceComponent.propDecorators = {
            fundingDetails: [{ type: i0.Input }],
            defaultText: [{ type: i0.Input }],
            defaultbankName: [{ type: i0.Input }],
            headerOneTxt: [{ type: i0.Input }],
            headerTwoText: [{ type: i0.Input }],
            defaultBtnTxt: [{ type: i0.Input }],
            removeBtnTxt: [{ type: i0.Input }],
            defaultBtnId: [{ type: i0.Input }],
            removeBtnId: [{ type: i0.Input }],
            defaultRemoveBtnTxt: [{ type: i0.Input }],
            achWalletTxt: [{ type: i0.Input }],
            balanceLblTxt: [{ type: i0.Input }],
            achMakeDefaultBtnText: [{ type: i0.Input }],
            achMakeDefaultBtnId: [{ type: i0.Input }],
            DefaultaccountNumber: [{ type: i0.Input }],
            WalletBalance: [{ type: i0.Input }],
            defaultRemoveBtnId: [{ type: i0.Input }],
            transferFundId: [{ type: i0.Input }],
            transferFundTxt: [{ type: i0.Input }],
            removeDefault: [{ type: i0.Output }],
            makeDefaultAction: [{ type: i0.Output }],
            removeSourceAction: [{ type: i0.Output }],
            transferFundAction: [{ type: i0.Output }],
            addSource: [{ type: i0.Output }]
        };
        return SukuFundingSourceComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuHeadingComponent = /** @class */ (function () {
        function SukuHeadingComponent() {
            this.id = 'heading';
        }
        /**
         * @return {?}
         */
        SukuHeadingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuHeadingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-heading',
                        template: "<h1 [style.font-size.px]=\"size\" [class]=\"customClass\" [style.font-weight]=\"weight\" [style.color]=\"color\" id=\"{{id}}\">\r\n  <ng-content></ng-content>\r\n</h1>",
                        encapsulation: i0.ViewEncapsulation.ShadowDom,
                        styles: ["h1{font-family:Poppins,sans-serif;font-size:20px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-all!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuHeadingComponent.ctorParameters = function () { return []; };
        SukuHeadingComponent.propDecorators = {
            name: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            customClass: [{ type: i0.Input }]
        };
        return SukuHeadingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuSubHeadingComponent = /** @class */ (function () {
        function SukuSubHeadingComponent() {
            this.id = 'heading';
        }
        /**
         * @return {?}
         */
        SukuSubHeadingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuSubHeadingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-sub-heading',
                        template: "<h2 [style.font-size.px]=\"size\" [class]=\"customClass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\r\n  <ng-content></ng-content>\r\n</h2>\r\n",
                        styles: ["h2{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6;word-break:break-all!important}.LISTINGSUMMARY{font-family:Poppins!important;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6}.unreadNotifications{font-family:abelregular,Arial,Helvetica,sans-serif!important;font-weight:400!important;font-style:normal!important;font-stretch:normal!important;line-height:normal!important;letter-spacing:-.3px!important;color:#b6b6b6!important}.filter-title-mysale{width:100%;float:left;font-family:abelregular,Arial,Helvetica,sans-serif!important;font-size:12px;color:#b6b6b6;line-height:16px;text-transform:uppercase}.Poppins-Regular{font-family:Poppins-Regular,Arial!important}.productType{font-family:\"Encode Sans\",sans-serif!important;font-size:17px;font-weight:200!important;letter-spacing:.1px!important;color:rgba(117,117,117,.67)}"]
                    }] }
        ];
        /** @nocollapse */
        SukuSubHeadingComponent.ctorParameters = function () { return []; };
        SukuSubHeadingComponent.propDecorators = {
            name: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            customClass: [{ type: i0.Input }]
        };
        return SukuSubHeadingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuProfileWidgetComponent = /** @class */ (function () {
        function SukuProfileWidgetComponent() {
            this.image = '../../assets/images/browser.png';
            this.userName = 'Vairog';
            this.nameWeight = '400';
            this.nameCustomClass = 'mb-0 mt-1 pl-1';
            this.nameSize = '33.4';
            this.accountType = 'Manufacturer';
            this.accountWeight = '400';
            this.accountCustomClass = 'pl-2';
            this.accountSize = '17';
            this.accountColor = '';
            this.ratingCustomClass = 'pl-2 mb-2 pt-3';
            this.rateDetails = 'based on 14 rating';
            this.rateColor = '';
            this.ratingWeight = '400';
            this.rDustomClass = 'pl-2';
            this.id = '';
            this._rate = 0;
            this.rating = new i0.EventEmitter();
            this.callOfStarts(this._rate);
        }
        Object.defineProperty(SukuProfileWidgetComponent.prototype, "ratingValue", {
            set: /**
             * @param {?} ratingValue
             * @return {?}
             */ function (ratingValue) {
                this._rate = ratingValue;
                console.log('', this._rate);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} e
         * @return {?}
         */
        SukuProfileWidgetComponent.prototype.callOfStarts = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                switch (true) {
                    case e === 0:
                        this.myHTML = "\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      </div>";
                        break;
                    case e <= 0.5:
                        this.myHTML = "\n      <span class=\"fa fa-star-half-empty starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      </div>";
                        break;
                    case e > 0.5 && e <= 1:
                        this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span> </div>";
                        break;
                    case e <= 1.5:
                        this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-half-empty starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span> </div>";
                        break;
                    case e > 1.5 && e <= 2:
                        this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span> </div>";
                        break;
                    case e <= 2.5:
                        this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-half-empty starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span> </div>";
                        break;
                    case e > 2.5 && e <= 3:
                        this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span> </div>";
                        break;
                    case e <= 3.5:
                        this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-half-empty starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span> </div>";
                        break;
                    case e > 3.5 && e <= 4:
                        this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span> </div>";
                        break;
                    case e <= 4.5:
                        this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-half-empty starChecked f22\"></span>\n    </div>";
                        break;
                    case e > 4.5 && e <= 5:
                        this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n       </div>";
                        break;
                    default:
                        break;
                }
            };
        /**
         * @return {?}
         */
        SukuProfileWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuProfileWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-profile-widget',
                        template: "`<div class=\"col-sm-12 ptl30\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-5\">\r\n      <img src=\"{{image}}\" class=\"rounded-circle image\" alt=\"profile\" width=\"150\"\r\n        height=\"150\">\r\n    </div>\r\n    <div class=\"col-sm-7 pLR60\">\r\n\t\t\t <h1 [style.font-size.px]=\"nameSize\" [class]=\"nameCustomClass\" [style.font-weight]=\"nameWeight\" [style.color]=\"nameColor\" id=\"{{id}}\">\r\n      {{userName}}\r\n      </h1>\r\n\t\t\t<h2 [style.font-size.px]=\"accountSize\" [class]=\"accountCustomClass\" id=\"{{id}}\" [style.font-weight]=\"accountWeight\" [style.color]=\"accountColor\">\r\n\t\t\t{{accountType}}\r\n\t\t </h2>\r\n     <span (change)=\"rating.emit(ratingValue)\">\r\n      <div [innerHTML]=\"myHTML\" [class]=\"customClass\" ratingValue=\"\"></div>\r\n      </span>\r\n\t\t\t<h2 [style.font-size.px]=\"accountSize\" [class]=\"rDustomClass\" id=\"{{id}}\" [style.font-weight]=\"ratingWeight\" [style.color]=\"rateColor\">\r\n\t\t\t{{rateDetails}}\r\n\t\t </h2>\r\n    </div>\r\n  </div>\r\n</div>`\r\n",
                        styles: [".profileBox{width:187.656px;border-radius:0 0 30px 30px;background-color:#fff;box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.circle{background-color:gray;height:150px;width:150px;border-radius:100%}.bLine{opacity:.09;border:1px solid #979797}.userName{font-family:Poppins-Regular,Arial;font-size:20px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;color:var(--black);word-break:break-all!important}.create-interest-listing{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:14px;color:#b6b6b6;line-height:18px;letter-spacing:.01em;word-break:break-all!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuProfileWidgetComponent.ctorParameters = function () { return []; };
        SukuProfileWidgetComponent.propDecorators = {
            image: [{ type: i0.Input }],
            userName: [{ type: i0.Input, args: ['user-name',] }],
            nameWeight: [{ type: i0.Input }],
            nameCustomClass: [{ type: i0.Input }],
            nameSize: [{ type: i0.Input }],
            nameColor: [{ type: i0.Input }],
            accountType: [{ type: i0.Input, args: ['account-type',] }],
            accountWeight: [{ type: i0.Input }],
            accountCustomClass: [{ type: i0.Input }],
            accountSize: [{ type: i0.Input }],
            accountColor: [{ type: i0.Input }],
            ratingCustomClass: [{ type: i0.Input }],
            rateDetails: [{ type: i0.Input }],
            rateColor: [{ type: i0.Input }],
            ratingWeight: [{ type: i0.Input }],
            rDustomClass: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            rating: [{ type: i0.Output }],
            customClass: [{ type: i0.Input }],
            ratingValue: [{ type: i0.Input }]
        };
        return SukuProfileWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuNotificationWidgetComponent = /** @class */ (function () {
        function SukuNotificationWidgetComponent() {
            this.notificationCount = "notificationCountId";
            this.customclass = 'col p-0 pointer text-center';
        }
        /**
         * @return {?}
         */
        SukuNotificationWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuNotificationWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-notification-widget',
                        template: "<div [class]=\"customclass\">\r\n  <div class=\"col box pointer text-center\">\r\n    <div class=\"pt-4 pb-2\">\r\n      <strong>\r\n        <a class=\"box-title\" id=\"{{id}}\">\r\n          {{notificationTitle || 'review bids' }}\r\n        </a>\r\n      </strong>\r\n    </div>\r\n    <div class=\"pb-4\">\r\n      <strong class=\"box-counter\" id=\"{{notificationCount}}\">\r\n        {{ notificationValue > 9 ? ' ' :\r\n        '0'}}{{ notificationValue === 0 ? 0 :\r\n        ''}}{{notificationValue}}\r\n      </strong>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                        styles: [".box{border-radius:2px;background-color:#fff;box-shadow:0 3px 3px 0 rgba(0,0,0,.09)}.box-title{font-family:Poppins-Regular,sans-serif;font-size:17px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#1d1d1d}.box-counter{font-size:50px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.6px;text-align:center;color:#a7bf2e}.default{width:300px}"]
                    }] }
        ];
        /** @nocollapse */
        SukuNotificationWidgetComponent.ctorParameters = function () { return []; };
        SukuNotificationWidgetComponent.propDecorators = {
            id: [{ type: i0.Input }],
            notificationCount: [{ type: i0.Input }],
            customclass: [{ type: i0.Input }],
            notificationTitle: [{ type: i0.Input, args: ['notification-title',] }],
            notificationValue: [{ type: i0.Input, args: ['notification-value',] }]
        };
        return SukuNotificationWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuMailWidgetComponent = /** @class */ (function () {
        function SukuMailWidgetComponent() {
            this.name = 'dconway@vairog.com';
            this.size = '14';
            this.color = '#3e3e3e';
            this.weight = '500';
            this.customClass = 'pt-2 pl-2';
            this.id = 'suku-mail-widget';
            this.image = '/assets/images/mail-light.svg';
        }
        /**
         * @return {?}
         */
        SukuMailWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuMailWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-mail-widget',
                        template: "<span class=\"row pb-4\">\r\n  <img [src]=\"image\">\r\n\t<h2 [style.font-size.px]=\"size\" [class]=\"customClass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\r\n  {{name}}\r\n  </h2>\r\n  </span>\r\n",
                        styles: ["h2{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6!important;word-break:break-all!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuMailWidgetComponent.ctorParameters = function () { return []; };
        SukuMailWidgetComponent.propDecorators = {
            name: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            customClass: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            image: [{ type: i0.Input }]
        };
        return SukuMailWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuBidInfoComponent = /** @class */ (function () {
        function SukuBidInfoComponent() {
            this.bids = '374';
            this.bidSize = '17';
            this.bidColor = 'black';
            this.bidWeight = '600';
            this.bidCustomClass = '';
            this.bidHeadingCustomClass = '';
            this.percentcustomClass = '';
            this.percentageHeadingcustomClass = '';
            this.bidHeading = 'bids';
            this.bidHeadingSize = '14';
            this.bidHeadingColor = 'black';
            this.bidHeadingWeight = '500';
            this.id = 'bidInfo';
            this.percent = '10%';
            this.percentSize = '17';
            this.percentColor = 'black';
            this.percentWeight = '600';
            this.percentHeading = 'fulfill';
            this.percentHeadingSize = '14';
            this.percentHeadingColor = 'black';
            this.percentHeadingWeight = '500';
        }
        /**
         * @return {?}
         */
        SukuBidInfoComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuBidInfoComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-bid-info',
                        template: "<span class=\"row\">\r\n  <span class=\"m-2 mr-3\">\r\n    <h1 [style.font-size.px]=\"bidSize\" [class]=\"bidCustomClass\" [style.font-weight]=\"bidWeight\" [style.color]=\"bidColor\"\r\n      id=\"{{id}}\">\r\n      {{bids}}\r\n    </h1>\r\n    <h2 [style.font-size.px]=\"bidHeadingSize\" [class]=\"bidHeadingCustomClass\" id=\"{{id}}\" [style.font-weight]=\"bidHeadingWeight\"\r\n      [style.color]=\"bidHeadingColor\">\r\n      {{bidHeading}}\r\n    </h2>\r\n  </span>\r\n  <span class=\"m-2 mr-3\">\r\n    <h1 [style.font-size.px]=\"percentSize\" [class]=\"percentcustomClass\" [style.font-weight]=\"percentWeight\"\r\n      [style.color]=\"percentColor\" id=\"{{id}}\">\r\n      {{percent}}\r\n    </h1>\r\n    <h2 [style.font-size.px]=\"percentHeadingSize\" [class]=\"percentageHeadingcustomClass\" id=\"{{id}}\"\r\n      [style.font-weight]=\"percentHeadingWeight\" [style.color]=\"percentHeadingColor\">\r\n      {{percentHeading}}\r\n    </h2>\r\n  </span>\r\n</span>",
                        styles: ["h1{font-family:Poppins,sans-serif;font-size:20px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-all!important}h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuBidInfoComponent.ctorParameters = function () { return []; };
        SukuBidInfoComponent.propDecorators = {
            bids: [{ type: i0.Input }],
            bidSize: [{ type: i0.Input, args: ['bid-size',] }],
            bidColor: [{ type: i0.Input, args: ['bid-color',] }],
            bidWeight: [{ type: i0.Input, args: ['bid-weight',] }],
            bidCustomClass: [{ type: i0.Input, args: ['bid-customclass',] }],
            bidHeadingCustomClass: [{ type: i0.Input, args: ['bid-headingcustomclass',] }],
            percentcustomClass: [{ type: i0.Input, args: ['percent-customclass',] }],
            percentageHeadingcustomClass: [{ type: i0.Input, args: ['percent-headingcustomclass',] }],
            bidHeading: [{ type: i0.Input, args: ['bid-heading',] }],
            bidHeadingSize: [{ type: i0.Input, args: ['bid-heding-size',] }],
            bidHeadingColor: [{ type: i0.Input, args: ['bid-heading-color',] }],
            bidHeadingWeight: [{ type: i0.Input, args: ['bid-heading-weight',] }],
            id: [{ type: i0.Input }],
            percent: [{ type: i0.Input }],
            percentSize: [{ type: i0.Input, args: ['percentage-size',] }],
            percentColor: [{ type: i0.Input, args: ['percentage-color',] }],
            percentWeight: [{ type: i0.Input, args: ['percentage-weight',] }],
            percentHeading: [{ type: i0.Input, args: ['percentage-heading',] }],
            percentHeadingSize: [{ type: i0.Input, args: ['percentage-heading-size',] }],
            percentHeadingColor: [{ type: i0.Input, args: ['percentage-heading-color',] }],
            percentHeadingWeight: [{ type: i0.Input, args: ['percentage-heading-weight',] }]
        };
        return SukuBidInfoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuMatchChipComponent = /** @class */ (function () {
        function SukuMatchChipComponent() {
            this.image = '../../assets/images/manageTrack.png';
            this.match = new i0.EventEmitter();
            this.customclass = 'col p-0';
            this.listNameSize = '16';
            this.listWeight = '600';
            this.listColor = 'black';
            this.listName = 'Super Computer';
            this.listCustomClass = '';
            this.prize = '10 SUKU';
            this.prizeSize = '14';
            this.prizeWeight = '500';
            this.prizeColor = '#3e3e3e';
            this.prizeCustomClass = 'mb-0';
            this.date = 'EXPIRY DATE';
            this.dateSize = '12';
            this.dateWeight = '500';
            this.dateColor = '#b6b6b6';
            this.dateCustomClass = '';
            this.dateV = '28 Nov 2018';
            this.dateVSize = '14';
            this.dateVWeight = '500';
            this.dateVColor = '#3e3e3e';
            this.dateVCustomClass = '';
            this.sell = 'SELLER';
            this.sellSize = '12';
            this.sellWeight = '500';
            this.sellColor = '#b6b6b6';
            this.sellCustomClass = '';
            this.sellV = 'John Smith';
            this.sellVSize = '14';
            this.sellVWeight = '500';
            this.sellVColor = '#3e3e3e';
            this.sellVCustomClass = '';
            this.id = 'suku-match-chip';
        }
        /**
         * @return {?}
         */
        SukuMatchChipComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuMatchChipComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-match-chip',
                        template: "<div [class]=\"customclass\">\r\n  <div class=\"col p-0\">\r\n    <div class=\"col-sm-12 p-0 bg-white text-center col-xs-12 match-chip-shadow rounded-0\">\r\n      <a id=\"matchhun\">\r\n        <img (click)=\"match.emit()\" src=\"{{image}}\"  class=\"m-1\" width=\"75%\" height=\"120px\" alt=\"Image\">\r\n      </a>\r\n      <br>\r\n      <div class=\"col-sm-12 p-0 border-top-box pt-3 text-center \">\r\n\t\t\t\t <h2 [style.font-size.px]=\"listNameSize\" [class]=\"listCustomClass\" id=\"{{id}}\" [style.font-weight]=\"listWeight\" [style.color]=\"listColor\">\r\n          {{listName}}\r\n\t\t\t\t</h2>\r\n\t\t\t\t<h2 [style.font-size.px]=\"prizeSize\" [class]=\"prizeCustomClass\" id=\"{{id}}\" [style.font-weight]=\"prizeWeight\" [style.color]=\"prizeColor\">\r\n\t\t\t\t{{prize}}\r\n\t\t  \t</h2>\r\n\t\t\t\t<div class=\"pt-2\">\r\n\t\t\t\t<h2 [style.font-size.px]=\"dateSize\" [class]=\"dateCustomClass\" id=\"{{id}}\" [style.font-weight]=\"dateWeight\" [style.color]=\"dateColor\">\r\n          {{date}}\r\n\t\t\t\t</h2>\r\n\t\t\t\t<h2 [style.font-size.px]=\"dateVSize\" [class]=\"dateVCustomClass\" id=\"{{id}}\" [style.font-weight]=\"dateVWeight\" [style.color]=\"dateVColor\">\r\n\t\t\t\t{{dateV}}\r\n\t\t\t\t</h2>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"pt-2 pb-3\">\r\n\t\t\t \t<h2 [style.font-size.px]=\"sellSize\" [class]=\"sellCustomClass\" id=\"{{id}}\" [style.font-weight]=\"sellWeight\" [style.color]=\"sellColor\">\r\n\t\t\t\t{{sell}}\r\n\t\t   \t</h2>\r\n\t\t\t   <h2 [style.font-size.px]=\"sellVSize\" [class]=\"sellVCustomClass\" id=\"{{id}}\" [style.font-weight]=\"sellVWeight\" [style.color]=\"sellVColor\">\r\n\t\t    \t{{sellV}}\r\n\t\t\t   </h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                        styles: [".border-top-box{border-top:1px solid #dee2e670!important}.match-chip-shadow{box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.default{width:200px}"]
                    }] }
        ];
        /** @nocollapse */
        SukuMatchChipComponent.ctorParameters = function () { return []; };
        SukuMatchChipComponent.propDecorators = {
            image: [{ type: i0.Input }],
            match: [{ type: i0.Output }],
            customclass: [{ type: i0.Input }],
            listNameSize: [{ type: i0.Input }],
            listWeight: [{ type: i0.Input }],
            listColor: [{ type: i0.Input }],
            listName: [{ type: i0.Input }],
            listCustomClass: [{ type: i0.Input }],
            prize: [{ type: i0.Input }],
            prizeSize: [{ type: i0.Input }],
            prizeWeight: [{ type: i0.Input }],
            prizeColor: [{ type: i0.Input }],
            prizeCustomClass: [{ type: i0.Input }],
            date: [{ type: i0.Input }],
            dateSize: [{ type: i0.Input }],
            dateWeight: [{ type: i0.Input }],
            dateColor: [{ type: i0.Input }],
            dateCustomClass: [{ type: i0.Input }],
            dateV: [{ type: i0.Input }],
            dateVSize: [{ type: i0.Input }],
            dateVWeight: [{ type: i0.Input }],
            dateVColor: [{ type: i0.Input }],
            dateVCustomClass: [{ type: i0.Input }],
            sell: [{ type: i0.Input }],
            sellSize: [{ type: i0.Input }],
            sellWeight: [{ type: i0.Input }],
            sellColor: [{ type: i0.Input }],
            sellCustomClass: [{ type: i0.Input }],
            sellV: [{ type: i0.Input }],
            sellVSize: [{ type: i0.Input }],
            sellVWeight: [{ type: i0.Input }],
            sellVColor: [{ type: i0.Input }],
            sellVCustomClass: [{ type: i0.Input }],
            id: [{ type: i0.Input }]
        };
        return SukuMatchChipComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuCardLineComponent = /** @class */ (function () {
        function SukuCardLineComponent() {
            this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
            this.chatReadIcon = '../assets/images/chat_read.png';
            this.chatUnreadIcon = '../assets/images/chat_unread.png';
            this.msgStatus = 'unRead';
            this.customclass = '';
            this.customIconclass = 'text-center';
            this.bgColor = '';
            this.imageColSize = 'col-sm-1 pt-1 pl-2';
            this.txtcolsize = 'col-sm-5 pl-4 pt-2 mt-1';
            this.txttwocolsize = 'col-sm-2 pt-2 mt-1';
            this.txtthreecolsize = 'col-sm-3 pt-2 mt-1';
            this.titleOne = 'Title One';
            this.titleOneColor = 'black';
            this.titleOneWeight = '600';
            this.titleOneSize = '14';
            this.titleOnecustomclass = '';
            this.contentOne = '$100';
            this.contentOneColor = '#3e3e3e';
            this.contentOneWeight = '500';
            this.contentOneSize = '14';
            this.contentOnecustomclass = '';
            this.contentTwo = 'John Smith';
            this.contentTwoColor = '#3e3e3e';
            this.contentTwoWeight = '500';
            this.contentTwoSize = '14';
            this.contentTwocustomclass = '';
            this.subTitleTwo = 'SOLD BY';
            this.subTitleTwoColor = '#b6b6b6';
            this.subTitleTwoWeight = '500';
            this.subTitleTwoSize = '12';
            this.subTitleTwocustomclass = '';
            this.subTitleThree = 'EXPIRY DATE';
            this.subTitleThreecolor = '#b6b6b6';
            this.subTitleThreeWeight = '500';
            this.subTitleThreeSize = '12';
            this.subTitleThreeClass = '';
            this.contentThree = '28 Nov 2018';
            this.contentThreeColor = '#3e3e3e';
            this.contentThreeWeight = '500';
            this.contentThreeSize = '14';
            this.contentThreecustomclass = '';
        }
        /**
         * @return {?}
         */
        SukuCardLineComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuCardLineComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-card-line',
                        template: "<div class=\"col p-0\">\r\n  <div class=\"row card-line-bg p-3 m-3 c-pointer\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img [class]=\"customclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus=='read'\">\r\n      <img [class]=\"customIconclass\" src=\"{{chatReadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus=='unRead'\">\r\n      <img [class]=\"customIconclass\" src=\"{{chatUnreadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n    </div>\r\n    <div [class]=\"txtcolsize\">\r\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\"  [style.font-weight]=\"titleOneWeight\"\r\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\"  [style.font-weight]=\"contentOneWeight\" [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n    </div>\r\n    <div [class]=\"txttwocolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"  [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\"  [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n    </div>\r\n    <div [class]=\"txtthreecolsize\">\r\n        <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"  [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n        <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"  [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n      </div>\r\n  </div>\r\n</div>\r\n",
                        styles: ["h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        SukuCardLineComponent.ctorParameters = function () { return []; };
        SukuCardLineComponent.propDecorators = {
            image: [{ type: i0.Input }],
            chatReadIcon: [{ type: i0.Input, args: ['char-read-icon',] }],
            chatUnreadIcon: [{ type: i0.Input, args: ['char-unread-icon',] }],
            msgStatus: [{ type: i0.Input, args: ['msg-status',] }],
            customclass: [{ type: i0.Input, args: ['customclass',] }],
            customIconclass: [{ type: i0.Input, args: ['custom-iconclass',] }],
            bgColor: [{ type: i0.Input }],
            interest: [{ type: i0.Input }],
            imageColSize: [{ type: i0.Input }],
            txtcolsize: [{ type: i0.Input }],
            txttwocolsize: [{ type: i0.Input }],
            txtthreecolsize: [{ type: i0.Input }],
            titleOne: [{ type: i0.Input, args: ['title-one',] }],
            titleOneColor: [{ type: i0.Input, args: ['title-one-color',] }],
            titleOneWeight: [{ type: i0.Input, args: ['title-one-weight',] }],
            titleOneSize: [{ type: i0.Input, args: ['title-one-size',] }],
            titleOnecustomclass: [{ type: i0.Input, args: ['title-one-customclass',] }],
            contentOne: [{ type: i0.Input, args: ['content-one',] }],
            contentOneColor: [{ type: i0.Input, args: ['content-one-color',] }],
            contentOneWeight: [{ type: i0.Input, args: ['content-one-weight',] }],
            contentOneSize: [{ type: i0.Input, args: ['content-one-size',] }],
            contentOnecustomclass: [{ type: i0.Input, args: ['content-one-customclass',] }],
            contentTwo: [{ type: i0.Input, args: ['content-two',] }],
            contentTwoColor: [{ type: i0.Input, args: ['content-two-color',] }],
            contentTwoWeight: [{ type: i0.Input, args: ['content-two-weight',] }],
            contentTwoSize: [{ type: i0.Input, args: ['content-two-size',] }],
            contentTwocustomclass: [{ type: i0.Input, args: ['content-two-customclass',] }],
            subTitleTwo: [{ type: i0.Input, args: ['sub-title-two',] }],
            subTitleTwoColor: [{ type: i0.Input, args: ['sub-title-two-color',] }],
            subTitleTwoWeight: [{ type: i0.Input, args: ['sub-title-two-weight',] }],
            subTitleTwoSize: [{ type: i0.Input, args: ['sub-title-two-size',] }],
            subTitleTwocustomclass: [{ type: i0.Input, args: ['sub-title-two-customclass',] }],
            subTitleThree: [{ type: i0.Input, args: ['sub-title-three',] }],
            subTitleThreecolor: [{ type: i0.Input, args: ['sub-title-three-color',] }],
            subTitleThreeWeight: [{ type: i0.Input, args: ['sub-title-three-weight',] }],
            subTitleThreeSize: [{ type: i0.Input, args: ['sub-title-three-size',] }],
            subTitleThreeClass: [{ type: i0.Input, args: ['sub-title-threeclass',] }],
            contentThree: [{ type: i0.Input, args: ['content-three',] }],
            contentThreeColor: [{ type: i0.Input, args: ['content-three-color',] }],
            contentThreeWeight: [{ type: i0.Input, args: ['content-three-widget',] }],
            contentThreeSize: [{ type: i0.Input, args: ['content-three-size',] }],
            contentThreecustomclass: [{ type: i0.Input, args: ['content-three-customclass',] }]
        };
        return SukuCardLineComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuDashboardProfileComponent = /** @class */ (function () {
        function SukuDashboardProfileComponent() {
            this.image = 'assets/images/user.png';
            this.icon = 'assets/images/plus-icon.png';
            this.createNewList = new i0.EventEmitter();
            this.clearBuyInterestStorage = new i0.EventEmitter();
        }
        /**
         * @param {?} i
         * @return {?}
         */
        SukuDashboardProfileComponent.prototype.test = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                alert(i);
            };
        /**
         * @return {?}
         */
        SukuDashboardProfileComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuDashboardProfileComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-dashboard-profile',
                        template: "<div class=\"profileBox\">\r\n    <div class=\"col-md-12 col-sm-12 text-center\">\r\n      <img class=\"circle mb-4 mt-4\" id=\"image\" src=\"{{image}}\" alt=\"PROFILE\">\r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 text-center\">\r\n      <label class=\"userName\">\r\n        <b>{{ userName }}</b>\r\n      </label>\r\n    </div>\r\n    <div class=\"bLine form-group\"></div>\r\n    <div class=\"col-sm-12 col-md-12\"  id=\"newSellList\">\r\n      <div class=\"row pointer\">\r\n        <div class=\"p-3 col mb-1\" >\r\n        <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\">\r\n        <span class=\"create-interest-listing c-pointer pl-2 pt-3\" (click)=\"createNewList.emit(1)\">{{titleOne || 'CREATE NEW LISTING'}} </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-12 form-group mb-3\"  id=\"newBuyInterest\">\r\n      <div class=\"row pointer\">\r\n        <div class=\"pl-3 pb-3 pr-3 pt-2 col mb-2\" >\r\n        <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\">\r\n        <span class=\"create-interest-listing c-pointer pl-2 pt-3 mB-170\" (click)=\"clearBuyInterestStorage.emit(1)\">{{titleTwo || 'CREATE NEW INTEREST'}}</span>\r\n        </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n",
                        styles: [".box{border-radius:2px;background-color:#fff;box-shadow:0 3px 3px 0 rgba(0,0,0,.09)}.box-title{font-family:Poppins-Regular,Arial;font-size:17px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#1d1d1d}.box-counter{font-size:50px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.6px;text-align:center;color:#a7bf2e}.profileBox{width:200px;border-radius:0 0 30px 30px;background-color:#fff;box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.circle{background-color:gray;height:150px;width:150px;border-radius:100%}.bLine{opacity:.09;border:1px solid #979797}.userName{font-family:Poppins,sans-serif;font-size:20px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;color:var(--black);word-break:break-all!important}.create-interest-listing{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:14px;color:#b6b6b6;line-height:18px;letter-spacing:.01em;word-break:break-all!important}.default{width:170px;height:274px;box-shadow:0 2px 4px 0 rgba(0,0,0,.03);background-color:#fff}"]
                    }] }
        ];
        /** @nocollapse */
        SukuDashboardProfileComponent.ctorParameters = function () { return []; };
        SukuDashboardProfileComponent.propDecorators = {
            userName: [{ type: i0.Input, args: ['user-name',] }],
            image: [{ type: i0.Input }],
            icon: [{ type: i0.Input }],
            titleOne: [{ type: i0.Input, args: ['title-one',] }],
            titleTwo: [{ type: i0.Input, args: ['title-two',] }],
            createNewList: [{ type: i0.Output, args: ['action-one',] }],
            clearBuyInterestStorage: [{ type: i0.Output, args: ['action-two',] }]
        };
        return SukuDashboardProfileComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuNavSubmenuComponent = /** @class */ (function () {
        function SukuNavSubmenuComponent() {
            this.subMenuList = [];
            this.subMenuList = [
                {
                    name: 'Listings & Bids',
                    path: 'pathOne',
                    id: 1
                },
                {
                    name: 'Negotiations',
                    path: 'pathTwo',
                    id: 2
                },
                {
                    name: 'Purchase Orders',
                    path: 'pathThree',
                    id: 3
                },
                {
                    name: 'Transactions',
                    path: 'pathFour',
                    id: 4
                }
            ];
        }
        /**
         * @param {?} event
         * @param {?} newValue
         * @return {?}
         */
        SukuNavSubmenuComponent.prototype.subMenuSelected = /**
         * @param {?} event
         * @param {?} newValue
         * @return {?}
         */
            function (event, newValue) {
                console.log(newValue);
                this.selectedItem = newValue;
            };
        SukuNavSubmenuComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-nav-submenu',
                        template: "<div class=\"header-main\">\r\n  <div class=\"sub-menu-bar navBarRes\" *ngIf=\"true\">\r\n    <div class=\"container\">\r\n      <div class=\"sub-menu\">\r\n        <nav>\r\n          <ul class=\"mt-2 pt-1\" id=\"subMenu\">\r\n            <li [ngClass]=\"{'active': selectedItem == item}\"\r\n              (click)=\"subMenuSelected($event, item);\" *ngFor=\"let item of subMenuList\" >\r\n              <a class=\"c-pointer\">{{ item.name }} {{item.path}}</a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                        styles: [".header-main .sub-menu-bar{width:100%;height:62px;float:left;background:#2b3034;position:relative}.header-main .sub-menu{float:left}.header-main .sub-menu nav{float:left;padding:0;margin:0}.header-main .sub-menu nav ul{height:47px;float:left;padding:0;margin:0}.header-main .sub-menu nav ul li{height:30px;float:left;font-family:Poppins,sans-serif;font-size:15px;color:rgba(255,255,255,.5);line-height:2px;letter-spacing:.01em;position:relative;padding:0;border-radius:15px 50px 50px;margin:0 10px 0 0}.header-main .sub-menu nav ul li:before{display:none}.header-main .sub-menu nav ul li a{height:30px;float:left;color:rgba(255,255,255,.5);text-decoration:none;position:relative;padding:22px 37px 20px;border-radius:28px 76px 63px;font-family:Poppins,sans-serif}.header-main .sub-menu nav ul li a:before{content:\"\";width:0;height:0;transition:.5s;background:0 0;border-radius:0;position:absolute;top:0;opacity:0}.header-main .sub-menu nav ul li a:after{content:\"\";width:0;height:0;transition:.5s;background:0 0;border-radius:15px 50px 50px;position:absolute;top:0;opacity:0}.header-main .sub-menu nav ul li.active a,.header-main .sub-menu nav ul li:hover a{color:#fff!important;background:#17181a!important}.header-main .sub-menu nav ul li.active a:after,.header-main .sub-menu nav ul li.active a:before,.header-main .sub-menu nav ul li:hover a:after,.header-main .sub-menu nav ul li:hover a:before{opacity:1;border-radius:15px 50px 50px}.sub-menu-style{background:#2b3034;color:#fff}ul#subMenu{list-style:none}.c-pointer{cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        SukuNavSubmenuComponent.ctorParameters = function () { return []; };
        SukuNavSubmenuComponent.propDecorators = {
            subMenuList: [{ type: i0.Input }]
        };
        return SukuNavSubmenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuProgressBarComponent = /** @class */ (function () {
        function SukuProgressBarComponent() {
            this.progressStyleOne = '';
            this.progressStyleTwo = '';
            this.progressStyleThree = '';
            this.progressStyleFour = '';
            this.progressStyleFive = '';
            this.headingOne = 'LISTING DETAILS';
            this.headingTwo = 'PRODUCT DETAILS';
            this.headingThree = 'PRODUCT TRACEABILITY';
            this.headingFour = 'TERMS OF SALE';
            this.headingFive = 'CONFIRM';
            this.headingOneId = 'firstHeading';
            this.headingTwoId = 'secondHeading';
            this.headingThreeId = 'thirdHeading';
            this.headingFourId = 'fourthHeading';
            this.headingFiveId = 'fifthHeading';
            this.customHeadingOneClass = '';
            this.customHeadingTwoClass = '';
            this.customHeadingThreeClass = '';
            this.customHeadingFourClass = '';
            this.customHeadingFiveClass = '';
        }
        /**
         * @return {?}
         */
        SukuProgressBarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuProgressBarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-progress-bar',
                        template: "<table class=\"col-sm-10 offset-sm-1\">\r\n  <tr class=\"pt-3\">\r\n    <td class=\"{{progressStyleOne}} text-center\">\r\n      <i *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\r\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\r\n    </td>\r\n    <td>\r\n      <hr class=\"hrLine\">\r\n    </td>\r\n    <td class=\"{{progressStyleTwo}} text-center\">\r\n    <i *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\r\n    <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\r\n  </td>\r\n    <td>\r\n      <hr class=\"hrLine\">\r\n    </td>\r\n    <td class=\"{{progressStyleThree}} text-center\">\r\n    <i *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\r\n    <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\r\n  </td>\r\n    <td>\r\n      <hr class=\"hrLine\">\r\n    </td>\r\n    <td class=\"{{progressStyleFour}} text-center\">\r\n    <i *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\r\n    <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\r\n  </td>\r\n    <td>\r\n      <hr class=\"hrLine\">\r\n    </td>\r\n    <td class=\"{{progressStyleFive}} text-center\">\r\n    <i *ngIf=\"(progressStyleFive == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\r\n    <span *ngIf=\"!(progressStyleFive == 'progressCompleted')\">5</span>\r\n  </td>\r\n  </tr>\r\n</table>\r\n<table class=\"col-sm-12 text-center\">\r\n<tr id=\"txt\" class=\"pt-3\">\r\n\t<td class=\"{{customHeadingOneClass}} progressTitle\">\r\n\t\t{{headingOne}}\r\n\t</td>\r\n\t<td class=\"{{customHeadingTwoClass}} progressTitle\">\r\n\t\t{{headingTwo}}\r\n\t</td>\r\n\t<td class=\"{{customHeadingThreeClass}} progressTitle \">\r\n\t{{headingThree}}\r\n\t</td>\r\n\t<td class=\"{{customHeadingFourClass}} progressTitle\">\r\n\t{{headingFour}}\r\n\t</td>\r\n\t<td class=\"{{customHeadingFiveClass}} progressTitle\">\r\n\t{{headingFive}}\r\n\t</td>\r\n</tr>\r\n</table>",
                        styles: [".Progresscircle{width:50px;height:50px;color:#fff;background:#031103;border-radius:50%}.progressActive{width:50px!important;height:50px;color:#fff;background:var(--main-color);border-radius:50%!important;font-family:Poppins-Regular}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:Poppins-Regular}.PRODUCT-1{width:90px;height:24px;font-family:Poppins;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins-Regular}.progressTitle{font-family:EncodeSans;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.progress-bar-active{font-family:EncodeSans;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.circleP{width:50px!important;height:50px!important;background:gray;border-radius:50%!important}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:20%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuProgressBarComponent.ctorParameters = function () { return []; };
        SukuProgressBarComponent.propDecorators = {
            progressStyleOne: [{ type: i0.Input, args: ['progress-style-one',] }],
            progressStyleTwo: [{ type: i0.Input, args: ['progress-style-two',] }],
            progressStyleThree: [{ type: i0.Input, args: ['progress-style-three',] }],
            progressStyleFour: [{ type: i0.Input, args: ['progress-style-four',] }],
            progressStyleFive: [{ type: i0.Input, args: ['progress-style-five',] }],
            headingOne: [{ type: i0.Input }],
            headingTwo: [{ type: i0.Input }],
            headingThree: [{ type: i0.Input }],
            headingFour: [{ type: i0.Input }],
            headingFive: [{ type: i0.Input }],
            headingOneId: [{ type: i0.Input }],
            headingTwoId: [{ type: i0.Input }],
            headingThreeId: [{ type: i0.Input }],
            headingFourId: [{ type: i0.Input }],
            headingFiveId: [{ type: i0.Input }],
            customHeadingOneClass: [{ type: i0.Input, args: ['custom-heading-one-class',] }],
            customHeadingTwoClass: [{ type: i0.Input, args: ['custom-heading-two-class',] }],
            customHeadingThreeClass: [{ type: i0.Input, args: ['custom-heading-three-class',] }],
            customHeadingFourClass: [{ type: i0.Input, args: ['custom-heading-four-class',] }],
            customHeadingFiveClass: [{ type: i0.Input, args: ['custom-heading-five-class',] }],
            max: [{ type: i0.Input }]
        };
        return SukuProgressBarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuHomeItalicHeadingComponent = /** @class */ (function () {
        function SukuHomeItalicHeadingComponent() {
        }
        /**
         * @return {?}
         */
        SukuHomeItalicHeadingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuHomeItalicHeadingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-home-italic-heading',
                        template: "<h5 [style.font-size.px]=\"size\" [style.color]=\"color\" [class]=\"customClass\" [style.font-weight]=\"weight\">\r\n  <ng-content></ng-content>\r\n  </h5>\r\n",
                        styles: ["h5{font-family:poppins;font-size:14px;font-weight:400;font-style:italic!important;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#646469;word-break:break-all!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuHomeItalicHeadingComponent.ctorParameters = function () { return []; };
        SukuHomeItalicHeadingComponent.propDecorators = {
            name: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            customClass: [{ type: i0.Input }]
        };
        return SukuHomeItalicHeadingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuLinkComponent = /** @class */ (function () {
        function SukuLinkComponent() {
            this.customClass = 'clearAll c-pointer';
            this.action = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuLinkComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuLinkComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-link',
                        template: "<span [style.font-size.px]=\"size\" [style.color]=\"color\" (click)=\"action.emit()\" [class]=\"customClass\"\r\n  [style.font-weight]=\"weight\">\r\n  <ng-content></ng-content>\r\n</span>\r\n",
                        styles: [".c-pointer{cursor:pointer!important}.clearAll{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:#1d1d1d;text-decoration:underline;text-transform:uppercase}"]
                    }] }
        ];
        /** @nocollapse */
        SukuLinkComponent.ctorParameters = function () { return []; };
        SukuLinkComponent.propDecorators = {
            name: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            customClass: [{ type: i0.Input }],
            action: [{ type: i0.Output }]
        };
        return SukuLinkComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuAddWidgetComponent = /** @class */ (function () {
        function SukuAddWidgetComponent() {
            this.image = '../../assets/images/plus-icon-gold.png';
            this.customclass = 'ml-2 add-widget mt-1';
            this.action = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuAddWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuAddWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-add-widget',
                        template: "<a (click)=\"action.emit()\">\r\n  <span><img [src]=\"image\" width=\"33px\" height=\"33px\">\r\n    <span [style.font-size.px]=\"size\" [style.color]=\"color\" [class]=\"customclass\" [style.font-weight]=\"weight\">\r\n      <ng-content></ng-content>\r\n    </span>\r\n  </span>\r\n</a>\r\n",
                        styles: [".add-widget{font-family:abelregular,Arial,Helvetica,sans-serif!important;font-size:12px;text-transform:uppercase;text-align:left}"]
                    }] }
        ];
        /** @nocollapse */
        SukuAddWidgetComponent.ctorParameters = function () { return []; };
        SukuAddWidgetComponent.propDecorators = {
            image: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            customclass: [{ type: i0.Input }],
            action: [{ type: i0.Output }]
        };
        return SukuAddWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuSelectInputComponent = /** @class */ (function () {
        function SukuSelectInputComponent() {
            this.name = 'ADD INTEREST';
            this.sort = new i0.EventEmitter();
            this.options = [
                {
                    name: 'Matches-Low to High',
                    value: '0'
                },
                {
                    name: 'Matches-High to Low',
                    value: '1'
                },
                {
                    name: 'Z to A',
                    value: '2'
                },
                {
                    name: 'A to Z',
                    value: '3'
                }
            ];
        }
        /**
         * @return {?}
         */
        SukuSelectInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuSelectInputComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-select-input',
                        template: "<div class=\"input-group mb-3\">\r\n  <div class=\"input-group-prepend\">\r\n    <span class=\"sort-by mt-3 mr-3\"> SORT BY </span>\r\n  </div>\r\n  <span [class]=\"customclass\">\r\n    <select class=\"custom-select optionsBox\" id=\"inputGroupSelect03\" name=\"sort\" #addRe (change)=\"sort.emit(addRe.value)\">\r\n      <option id=\"default\" value=\"default\" disabled>Choose sort method</option>\r\n      <option *ngFor=\"let option of options;let i=index\" id=\"{{option.value}}\" value=\"{{option.value}}\">{{option.name}}</option>\r\n    </select>\r\n  </span>\r\n</div>\r\n",
                        styles: [".custom-select{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.01px;color:#3e3e3e;text-transform:uppercase;background-color:#f2f2f2!important}.sort-by{font-family:Poppins,sans-serif;font-size:15px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:#b6b6b6;text-transform:uppercase}.optionsBox{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#000;height:36px!important;text-transform:lowercase;border-radius:0;border-color:#cdcdcd}.default{width:281px}.custom-select:focus{outline:0;box-shadow:none}"]
                    }] }
        ];
        /** @nocollapse */
        SukuSelectInputComponent.ctorParameters = function () { return []; };
        SukuSelectInputComponent.propDecorators = {
            name: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            customclass: [{ type: i0.Input }],
            sort: [{ type: i0.Output }],
            options: [{ type: i0.Input }]
        };
        return SukuSelectInputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuPhoneWidgetComponent = /** @class */ (function () {
        function SukuPhoneWidgetComponent() {
            this.name = '4806069863';
            this.size = '14';
            this.color = '#3e3e3e';
            this.weight = '500';
            this.customClass = 'pl-2 mt-1 mb-1';
            this.id = '';
        }
        /**
         * @return {?}
         */
        SukuPhoneWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuPhoneWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-phone-widget',
                        template: "<span class=\"row\">\r\n  <img src=\"../../assets/images/phone-light.png\" height=\"20px\" class=\"mt-1\">\r\n  <h2 [style.font-size.px]=\"size\" [class]=\"customClass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\r\n    {{name}}\r\n  </h2>\r\n</span>",
                        styles: ["h2{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6!important;word-break:break-all!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuPhoneWidgetComponent.ctorParameters = function () { return []; };
        SukuPhoneWidgetComponent.propDecorators = {
            name: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            customClass: [{ type: i0.Input }],
            id: [{ type: i0.Input }]
        };
        return SukuPhoneWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuAddressWidgetComponent = /** @class */ (function () {
        function SukuAddressWidgetComponent() {
            this.image = '../../../assets/images/map-pin.svg';
            this.name = '9315 NW 112TH AVE';
            this.size = '14';
            this.color = '#3e3e3e';
            this.weight = '500';
            this.id = '';
            this.customClass = 'pt-2 pl-3';
        }
        /**
         * @return {?}
         */
        SukuAddressWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuAddressWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-address-widget',
                        template: "<span class=\"row\">\r\n  <img src=\"{{image}}\">\r\n  <h2 [style.font-size.px]=\"size\" [class]=\"customClass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\r\n    <ng-content></ng-content>\r\n  </h2>\r\n</span>",
                        styles: ["h2{font-family:'Encode Sans',sans-serif!important;font-size:12px!important;font-weight:500!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px!important;color:#b6b6b6!important;word-break:break-all!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuAddressWidgetComponent.ctorParameters = function () { return []; };
        SukuAddressWidgetComponent.propDecorators = {
            image: [{ type: i0.Input }],
            name: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            customClass: [{ type: i0.Input }]
        };
        return SukuAddressWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuInlineDropdownComponent = /** @class */ (function () {
        function SukuInlineDropdownComponent() {
            this.size = '14';
            this.color = '#757575';
            this.weight = '600';
            this.id = '';
            this.customclass = 'row';
            this.customcontentclass = 'pr-2 c-pointer';
            this.action = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuInlineDropdownComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuInlineDropdownComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-inline-dropdown',
                        template: "<span (click)=\"action.emit()\" [class]=\"customclass\">\r\n  <h2 [style.font-size.px]=\"size\" [class]=\"customcontentclass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\r\n    <ng-content></ng-content>\r\n  </h2>\r\n  <i class=\"fa fa-chevron-circle-down f17 c-pointer\" style=\"color:#a7bf2e\"></i>\r\n</span>",
                        styles: ["h2{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#bcbcbce3!important;word-break:break-all!important}h2:hover{color:#a8a8a8!important}.f17{font-size:17px}.c-pointer{cursor:pointer!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuInlineDropdownComponent.ctorParameters = function () { return []; };
        SukuInlineDropdownComponent.propDecorators = {
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            customclass: [{ type: i0.Input }],
            customcontentclass: [{ type: i0.Input }],
            action: [{ type: i0.Output }]
        };
        return SukuInlineDropdownComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuHomeWidgetComponent = /** @class */ (function () {
        function SukuHomeWidgetComponent() {
            this.color = '#f1f4f5';
            this.bgColor = '#76767b';
            this.routerLink = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuHomeWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuHomeWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-home-widget',
                        template: "<div class=\"col widget\" [style.background-color]=\"bgColor\" [style.color]=\"color\" (click)=\"routerLink.emit()\">\r\n  <label class=\"pt-2 pb-2 c-pointer\" id=\"{{id}}\"><ng-content></ng-content></label>\r\n </div>\r\n",
                        styles: [".widget{font-family:'Encode Sans',sans-serif;border-radius:6px 20px 20px;font-size:16px;float:left;width:150px;height:63px;word-break:break-all!important}.c-pointer{cursor:pointer!important}h5{font-family:Poppins,sans-serif;font-size:14px;font-weight:400;font-style:italic;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#646469;word-break:break-all!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuHomeWidgetComponent.ctorParameters = function () { return []; };
        SukuHomeWidgetComponent.propDecorators = {
            id: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            bgColor: [{ type: i0.Input }],
            routerLink: [{ type: i0.Output }]
        };
        return SukuHomeWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuFiltersComponent = /** @class */ (function () {
        function SukuFiltersComponent() {
            this.size = '18';
            this.filterOnChange = new i0.EventEmitter();
            this.applyFilter = new i0.EventEmitter();
            this.selectAll = new i0.EventEmitter();
            this.deselectAll = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuFiltersComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuFiltersComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-filters',
                        template: "<div class=\"side-bar\" [formGroup]=\"form\">\r\n  <div class=\"filter-title\">\r\n    <a class=\"collapsed f30\" data-toggle=\"collapse\" href=\".collapse-filter\"></a>\r\n  </div>\r\n  <div class=\"collapse-filter collapse\" id=\"collapse-filter\">\r\n    <div class=\"box\">\r\n      <div class=\"filter-list\">\r\n        <h2 [style.font-size.px]=\"size\" class=\"unreadNotifications\">{{filterHeading}}</h2>\r\n        <div class=\"options pl-3\">\r\n          <div *ngFor=\"let status of statusTypesDynamic; let l = index\">\r\n            <mat-checkbox *ngIf=\"!status?.label\" color=\"primary\" [checked]=\"status.checked\" (change)=\"(status.checked = $event.checked); filterOnChange.emit($event);\">\r\n              {{status.displayName}}</mat-checkbox>\r\n            <div *ngIf=\"status?.label\" class=\"mat-checkbox-label pb-2\">\r\n              {{status.displayName}}\r\n            </div>\r\n            <!-- *ngIf=\"status.hasSub && status.checked\" -->\r\n            <div class=\"p-0\">\r\n              <div class=\"col-sm-12 pl-3\" *ngFor=\"let subStatus of status.sub; let sk = index\">\r\n                <mat-checkbox [checked]=\"subStatus.checked\" (change)=\"(subStatus.checked = $event.checked); filterOnChange.emit($event);\"\r\n                  color=\"primary\"> {{subStatus.displayName}}</mat-checkbox>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-3 mt-4 mb-1\">\r\n          <h3>{{filterSubHeading}}</h3>\r\n          <div class=\"pb-0 mt-3\">From</div>\r\n          <mat-form-field class=\"pt-0\">\r\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" id=\"fromDateMyPro\" formControlName=\"fromDate\"\r\n              name=\"fromDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"mt-3 pb-0\">To</div>\r\n          <mat-form-field>\r\n            <input matInput formControlName=\"tillDate\" [matDatepicker]=\"picker1\" placeholder=\"Choose a date\" id=\"tillDateMyPro\"\r\n              name=\"tillDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker1></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"p-3 pb-4 pl-5 pr-5\">\r\n        <button type=\"button\" class=\" btn btn-info btn-lg btn-block\" (click)=\"applyFilter.emit()\">Apply Date Filters\r\n        </button>\r\n      </div>\r\n      <div class=\"filter-links\">\r\n        <p>\r\n          <a (click)=\"selectAll.emit();\">SELECT ALL</a>\r\n          <a (click)=\"deselectAll.emit();\">CLEAR ALL</a>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                        styles: [".side-bar{width:100%;float:left;padding:0 15px 0 0}.side-bar .filter-title{color:#c5af79}.side-bar .filter-title a{color:#b6b6b6;text-decoration:none}.side-bar .box{width:100%;float:left;background:#fff;box-shadow:rgba(0,0,0,.07) 0 10px 20px;border-radius:0 0 30px 30px;padding:25px 0 15px}.side-bar .box .filter-list{width:100%;float:left;padding:0 20px}.side-bar .box .filter-list:last-child{padding-bottom:0}.side-bar .box .filter-list h2{font-family:abelregular,Arial,Helvetica,sans-serif;color:#b6b6b6;border-bottom:1px solid #ececec;padding:0 0 15px;margin:0 0 15px;font-size:19px}.side-bar .box .filter-links{width:100%;float:left;border-top:1px solid #ececec;padding:10px 0 0 30px}.side-bar .box .filter-links p{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:12px;line-height:14px;text-transform:uppercase;padding:0}.side-bar .box .filter-links p a{color:#1d1d1d;text-decoration:underline;margin:0 15px 0 0}.side-bar .box .filter-links p a:hover{color:#02b3e3}.side-bar .box .add-btn{width:100%;float:left;padding:0 20px 20px}.side-bar .collapse{width:100%;float:left;margin:0;padding:0}@media (min-width:992px){.side-bar .filter-title a{pointer-events:none}.side-bar .collapse-filter{height:auto!important;display:block!important;overflow:visible!important;visibility:visible!important}}@media (max-width:991px){.side-bar{padding:0;margin:0 0 30px}.side-bar .filter-title{height:auto;line-height:normal;border-bottom:1px solid #ccc;padding:0 0 15px}.side-bar .filter-title a{width:100%;float:left;font-size:16px;text-transform:uppercase;text-decoration:none;position:relative;margin:0;padding:0}.side-bar .filter-title a:before{content:\"\\f056\";float:right;font-family:\"Font Awesome\\ 5 Pro\";font-weight:300;font-size:20px;color:#c5af79;position:absolute;top:0;right:0}.side-bar .filter-title a.collapsed:before{content:\"\\f055\"}.side-bar .collapse-filter{width:100%;float:left;margin:0;padding:0}.mat-form-field{display:flow-root}.btn{font-size:10px!important;padding:5px!important}}.btn-p{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#343a40!important;color:#fff;font-family:'Encode Sans',sans-serif;font-weight:600;font-size:14px;padding:.75rem 2.1rem}.btn-p:hover{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#a7bf2e!important;color:#fff}.btn-p:click{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#a7bf2e!important;color:#fff}.btn-p-p.disabled:hover{border:2px solid #a7bf2e!important;border-radius:10px 20px 15px;background-color:#fff;color:#1d1d1d}.zeplin_button{height:40px;color:#f2f2f2;border:2px solid #a7bf2e;background-color:#272727!important}.zeplin_button:hover{background-color:#a7bf2e!important}.zeplin_button1{height:40px;color:#f2f2f2!important;border:2px solid #757575!important;background-color:#272727!important}.btn_zep1:hover{background-color:#757575!important}.REVIEW-BIDS{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:300;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#fff}.btn-primary{border:2px solid #a7bf2e;border-radius:10px 20px 15px}.btn-primary:hover{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#a7bf2e;color:#fff}.btn-primary:click{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#a7bf2e!important;color:#fff}.btn-primary:active{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#a7bf2e;color:#fff}.btn-primary.disabled{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#fff;color:grey}.btn-primary.disabled.focus,.btn-primary.disabled:focus,.btn-primary.disabled:hover,.btn-primary[disabled].focus,.btn-primary[disabled]:focus,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary.focus,fieldset[disabled] .btn-primary:focus,fieldset[disabled] .btn-primary:hover{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#fff!important;color:grey}.btn-primary.focus,.btn-primary:focus{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#a7bf2e;color:#fff}.btn-primary.active.focus,.btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active.focus,.btn-primary:active:focus,.btn-primary:active:hover,.open>.dropdown-toggle .btn-primary.focus,.open>.dropdown-toggle .btn-primary:focus,.open>.dropdown-toggle.btn-primary:hover{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#a7bf2e;color:#fff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#a7bf2e;border-color:#a7bf2e}.btn-primary.focus,.btn-primary:focus,.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem #a7bf2e}.btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-family:'Encode Sans',sans-serif;font-weight:600;font-size:14px;padding:.55rem .85rem}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:click{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e!important;color:#fff}.btn.disabled:hover{border:2px solid #a7bf2e!important;border-radius:28px 76px 63px;background-color:#fff;color:#000}.btn-info{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000}.btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info:click{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e!important;color:#fff}.btn-info:active{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff!important;color:grey}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#a7bf2e;border-color:#a7bf2e}.btn-info.focus,.btn-info:focus,.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem #a7bf2e}.default-btn{font-family:'Encode Sans',sans-serif;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#fff!important}.secondary-btn{font-family:'Encode Sans',sans-serif;font-size:14px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important;border-bottom:3.5px solid #a7bf2e}.clearAll{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:#1d1d1d;text-decoration:underline;text-transform:uppercase}.mat-checkbox-label{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:17px;letter-spacing:.2px}"]
                    }] }
        ];
        /** @nocollapse */
        SukuFiltersComponent.ctorParameters = function () { return []; };
        SukuFiltersComponent.propDecorators = {
            form: [{ type: i0.Input }],
            filterHeading: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            filterSubHeading: [{ type: i0.Input }],
            statusTypesDynamic: [{ type: i0.Input }],
            filterOnChange: [{ type: i0.Output }],
            applyFilter: [{ type: i0.Output }],
            selectAll: [{ type: i0.Output }],
            deselectAll: [{ type: i0.Output }]
        };
        return SukuFiltersComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuInfoButtonComponent = /** @class */ (function () {
        function SukuInfoButtonComponent() {
            this.trigger = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuInfoButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuInfoButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-info-button',
                        template: "<button class=\"btn btn-info btn-lg btn-block\" [style.font-size.px]=\"size\" id=\"{{id}}\" (click)=\"trigger.emit()\">\r\n  <ng-content></ng-content>\r\n </button>",
                        styles: [".btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-family:'Encode Sans',sans-serif;font-weight:600;font-size:14px;padding:.55rem .85rem}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:click{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e!important;color:#fff}.btn.disabled:hover{border:2px solid #a7bf2e!important;border-radius:28px 76px 63px;background-color:#fff;color:#000}.btn-info{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000}.btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info:click{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e!important;color:#fff}.btn-info:active{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff!important;color:grey}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#a7bf2e;border-color:#a7bf2e}.btn-info.focus,.btn-info:focus,.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem #a7bf2e}"]
                    }] }
        ];
        /** @nocollapse */
        SukuInfoButtonComponent.ctorParameters = function () { return []; };
        SukuInfoButtonComponent.propDecorators = {
            name: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            trigger: [{ type: i0.Output }]
        };
        return SukuInfoButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuPrimaryButtonComponent = /** @class */ (function () {
        function SukuPrimaryButtonComponent() {
            this.id = 'primary';
            this.customClass = 'btn-p btn-primary c-pointer';
            this.trigger = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuPrimaryButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuPrimaryButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-primary-button',
                        template: "<button [class]=\"customClass\" id=\"{{id}}\" (click)=\"trigger.emit()\">\r\n  <ng-content></ng-content>\r\n </button>",
                        styles: [".btn-p{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#343a40!important;color:#fff;font-family:'Encode Sans',sans-serif;font-weight:600;font-size:14px;padding:.75rem 2.1rem}.btn-p:hover{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#a7bf2e!important;color:#fff}.btn-p:click{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#a7bf2e!important;color:#fff}.btn-p-p.disabled:hover{border:2px solid #a7bf2e!important;border-radius:10px 20px 15px;background-color:#fff;color:#1d1d1d}.btn-primary{border:2px solid #a7bf2e;border-radius:10px 20px 15px}.btn-primary:hover{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#a7bf2e;color:#fff}.btn-primary:click{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#a7bf2e!important;color:#fff}.btn-primary:active{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#a7bf2e;color:#fff}.btn-primary.disabled{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#fff;color:grey}.btn-primary.disabled.focus,.btn-primary.disabled:focus,.btn-primary.disabled:hover,.btn-primary[disabled].focus,.btn-primary[disabled]:focus,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary.focus,fieldset[disabled] .btn-primary:focus,fieldset[disabled] .btn-primary:hover{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#fff!important;color:grey}.btn-primary.focus,.btn-primary:focus{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#a7bf2e;color:#fff}.btn-primary.active.focus,.btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active.focus,.btn-primary:active:focus,.btn-primary:active:hover,.open>.dropdown-toggle .btn-primary.focus,.open>.dropdown-toggle .btn-primary:focus,.open>.dropdown-toggle.btn-primary:hover{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#a7bf2e;color:#fff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#a7bf2e;border-color:#a7bf2e}.btn-primary.focus,.btn-primary:focus,.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem #a7bf2e}.REVIEW-BIDS{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#fff}.zeplin_button1{width:100%;height:40px;color:#f2f2f2!important;border:2px solid #757575!important;background-color:#272727!important}.btn_zep1:hover{background-color:#757575!important}.zeplin_button2{width:100%;height:40px;color:#000!important;border:2px solid #757575!important;background-color:#fff!important}.btn_zep2:hover{background-color:#757575!important;color:#fff!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuPrimaryButtonComponent.ctorParameters = function () { return []; };
        SukuPrimaryButtonComponent.propDecorators = {
            id: [{ type: i0.Input }],
            customClass: [{ type: i0.Input }],
            trigger: [{ type: i0.Output }]
        };
        return SukuPrimaryButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuSecondaryButtonComponent = /** @class */ (function () {
        function SukuSecondaryButtonComponent() {
            this.trigger = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuSecondaryButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuSecondaryButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-secondary-button',
                        template: "<a class=\"secondary-btn c-pointer\" id=\"{{id}}\" [style.color]=\"color\" [style.font-size.px]=\"size\" (click)=\"trigger.emit()\">\r\n  <ng-content></ng-content>\r\n</a>\r\n",
                        styles: [".secondary-btn{font-family:'Encode Sans',sans-serif;font-size:14px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important;border-bottom:3.5px solid #a7bf2e}"]
                    }] }
        ];
        /** @nocollapse */
        SukuSecondaryButtonComponent.ctorParameters = function () { return []; };
        SukuSecondaryButtonComponent.propDecorators = {
            id: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            trigger: [{ type: i0.Output }]
        };
        return SukuSecondaryButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuDefaultButtonComponent = /** @class */ (function () {
        function SukuDefaultButtonComponent() {
            this.trigger = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuDefaultButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuDefaultButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-default-button',
                        template: "<a class=\"default-btn c-pointer\" id=\"{{id}}\" (click)=\"trigger.emit()\">\r\n  <ng-content></ng-content>\r\n </a>\r\n",
                        styles: [".default-btn{font-family:'Encode Sans',sans-serif;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#fff!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuDefaultButtonComponent.ctorParameters = function () { return []; };
        SukuDefaultButtonComponent.propDecorators = {
            name: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            trigger: [{ type: i0.Output }]
        };
        return SukuDefaultButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuStarBadgeComponent = /** @class */ (function () {
        function SukuStarBadgeComponent() {
            this.icon = '../assets/images/star.svg';
        }
        /**
         * @return {?}
         */
        SukuStarBadgeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuStarBadgeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-star-badge',
                        template: "<div class=\"star\">\r\n  <img src=\"../assets/images/star.svg\" alt=\"star-image\" height=\"37px\" id=\"star-image\">\r\n  <h2 class=\"star-txt text-center\" id=\"value\"><ng-content></ng-content></h2>\r\n\r\n </div>\r\n",
                        styles: [".star{position:relative!important;width:26px}.star-txt{position:absolute!important;top:13px;left:6px;width:100%;font-size:12px;color:#d8fc40}h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px}"]
                    }] }
        ];
        /** @nocollapse */
        SukuStarBadgeComponent.ctorParameters = function () { return []; };
        SukuStarBadgeComponent.propDecorators = {
            icon: [{ type: i0.Input }]
        };
        return SukuStarBadgeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuSearchInputComponent = /** @class */ (function () {
        function SukuSearchInputComponent() {
            this.icon = '../../assets/images/search-icon.svg';
            this.customClass = 'float-right m-2 mr-3 c-pointer';
        }
        /**
         * @return {?}
         */
        SukuSearchInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuSearchInputComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-search-input',
                        template: "<div id=\"search_container\" class=\"col-sm-3 p-0 d-flex\">\r\n  <input type=\"text\" id=\"search\" class=\"stretch\" value>\r\n  <img src=\"{{icon}}\" [class]=\"customClass\" width=\"6%\" height=\"7%\">\r\n </div>",
                        styles: ["#search_container{border:2px solid #f2f2f2;border-radius:10px 18px 18px 16px}.stretch{flex-grow:1;border:none!important;border-radius:15px}.c-pointer{cursor:pointer!important}input#search{margin-left:15px;height:32px;font-family:'Encode Sans',sans-serif;font-size:14px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#3e3e3e}input:focus{border:none!important;outline:0!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuSearchInputComponent.ctorParameters = function () { return []; };
        SukuSearchInputComponent.propDecorators = {
            formRadio: [{ type: i0.Input }],
            icon: [{ type: i0.Input }],
            customClass: [{ type: i0.Input }]
        };
        return SukuSearchInputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuBidTagComponent = /** @class */ (function () {
        function SukuBidTagComponent() {
            this.prize = '$100';
            this.prizeSize = '50';
            this.prizeWeight = '500';
            this.prizeColor = 'white';
            this.prizeCustomClass = 'mb-0';
            this.unit = '/ BOX';
            this.unitSize = '14';
            this.unitWeight = '500';
            this.unitColor = 'white';
            this.unitCustomClass = 'mt-3 pt-5 mb-0 ml-3';
            this.qContent = '100 cases / box: 200 boxes';
            this.qSize = '15';
            this.qWeight = '500';
            this.qColor = 'white';
            this.qCustomClass = '';
            this.pContent = '$40,000 total (80,000 SUKU)';
            this.pSize = '15';
            this.pWeight = '500';
            this.pColor = 'white';
            this.pCustomClass = 'mt-1 pb-2';
            this.bidtagclass = 'col p-3 suku-big-tag pl-5';
            this.id = 'suku-big-tag';
        }
        /**
         * @return {?}
         */
        SukuBidTagComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuBidTagComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-bid-tag',
                        template: "<div class=\"col p-1 {{bidtagclass}} pl-4\">\r\n  <span class=\"row pr-1 pl-3 mt-2\">\r\n\t\t<h1 [style.font-size.px]=\"prizeSize\" [class]=\"prizeCustomClass\" [style.font-weight]=\"prizeWeight\" [style.color]=\"prizeColor\" id=\"{{id}}\">\r\n  {{prize}}\r\n  </h1>\r\n\t<h2 [style.font-size.px]=\"unitSize\" [class]=\"unitCustomClass\" id=\"{{id}}\" [style.font-weight]=\"unitWeight\" [style.color]=\"unitColor\">\r\n  {{unit}}\r\n  </h2>\r\n  </span>\r\n  <span>\r\n\t\t<h1 [style.font-size.px]=\"qSize\" [class]=\"qCustomClass\" [style.font-weight]=\"qWeight\" [style.color]=\"qColor\" id=\"{{id}}\">\r\n\t\t{{qContent}}\r\n\t\t</h1>\r\n\t\t<h1 [style.font-size.px]=\"pSize\" [class]=\"pCustomClass\" [style.font-weight]=\"pWeight\" [style.color]=\"pColor\" id=\"{{id}}\">\r\n\t\t{{pContent}}\r\n\t\t</h1>\r\n  </span>\r\n</div>\r\n",
                        styles: [".suku-big-tag{background-color:#35393e;border-radius:0 40px 0 0;border-left:6px solid #a7bf2e}.suku-big-tag-org{background-color:#35393e;border-radius:0 40px 0 0;border-left:6px solid #000}h1{font-family:Poppins,Arial,Helvetica,sans-serif;font-size:20px;font-weight:600!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-all!important}h2{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6!important;word-break:break-all!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuBidTagComponent.ctorParameters = function () { return []; };
        SukuBidTagComponent.propDecorators = {
            prize: [{ type: i0.Input }],
            prizeSize: [{ type: i0.Input }],
            prizeWeight: [{ type: i0.Input }],
            prizeColor: [{ type: i0.Input }],
            prizeCustomClass: [{ type: i0.Input }],
            unit: [{ type: i0.Input }],
            unitSize: [{ type: i0.Input }],
            unitWeight: [{ type: i0.Input }],
            unitColor: [{ type: i0.Input }],
            unitCustomClass: [{ type: i0.Input }],
            qContent: [{ type: i0.Input }],
            qSize: [{ type: i0.Input }],
            qWeight: [{ type: i0.Input }],
            qColor: [{ type: i0.Input }],
            qCustomClass: [{ type: i0.Input }],
            pContent: [{ type: i0.Input }],
            pSize: [{ type: i0.Input }],
            pWeight: [{ type: i0.Input }],
            pColor: [{ type: i0.Input }],
            pCustomClass: [{ type: i0.Input }],
            bidtagclass: [{ type: i0.Input }],
            id: [{ type: i0.Input }]
        };
        return SukuBidTagComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuTrackProgressBarComponent = /** @class */ (function () {
        function SukuTrackProgressBarComponent() {
            this.progressStyleOne = 'progressCompleted';
            this.progressStyleTwo = 'progressActive';
            this.progressStyleThree = 'progressUpcoming';
            this.headingOne = 'SELECT A PRODUCT';
            this.headingTwo = 'TRACE COMPONENTS';
            this.headingThree = 'SHOW TRACE';
            this.headingOneId = 'firstHeading';
            this.headingTwoId = 'secondHeading';
            this.headingThreeId = 'thirdHeading';
            this.customHeadingOneClass = '';
            this.customHeadingTwoClass = '';
            this.customHeadingThreeClass = '';
        }
        /**
         * @return {?}
         */
        SukuTrackProgressBarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuTrackProgressBarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-track-progress-bar',
                        template: "<table class=\"col-sm-6 offset-sm-3\">\r\n  <tr class=\"pt-3\">\r\n    <td class=\"{{progressStyleOne}} text-center\">\r\n      <i *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\r\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\r\n    </td>\r\n    <td>\r\n      <hr class=\"hrLine\">\r\n    </td>\r\n    <td class=\"{{progressStyleTwo}} text-center\">\r\n      <i *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\r\n      <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\r\n    </td>\r\n    <td>\r\n      <hr class=\"hrLine\">\r\n    </td>\r\n    <td class=\"{{progressStyleThree}} text-center\">\r\n      <i *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\r\n      <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\r\n    </td>\r\n  </tr>\r\n</table>\r\n<table class=\"col-sm-8 offset-sm-2 text-center\">\r\n  <tr id=\"txt\">\r\n    <td class=\"{{customHeadingOneClass}} progressTitle pt-3\">\r\n      {{headingOne}}\r\n    </td>\r\n    <td class=\"{{customHeadingTwoClass}} progressTitle pt-3\">\r\n      {{headingTwo}}\r\n    </td>\r\n    <td class=\"{{customHeadingThreeClass}} progressTitle pt-3\">\r\n      {{headingThree}}\r\n    </td>\r\n  </tr>\r\n</table>\r\n",
                        styles: [".Progresscircle{width:50px;height:50px;color:#fff;background:#031103;border-radius:50%}.progressActive{width:50px!important;height:50px;color:#fff;background:#a7bf2e;border-radius:50%!important;font-family:Poppins,sans-serif}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:Poppins,sans-serif}.PRODUCT-1{width:90px;height:24px;font-family:Poppins,sans-serif;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins,sans-serif}.progressTitle{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.progress-bar-active{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.circleP{background-color:gray;width:50px!important;height:50px!important;border-radius:50%!important}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:20%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.tracTraceTxtBold{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}"]
                    }] }
        ];
        /** @nocollapse */
        SukuTrackProgressBarComponent.ctorParameters = function () { return []; };
        SukuTrackProgressBarComponent.propDecorators = {
            progressStyleOne: [{ type: i0.Input, args: ['progress-style-one',] }],
            progressStyleTwo: [{ type: i0.Input, args: ['progress-style-two',] }],
            progressStyleThree: [{ type: i0.Input, args: ['progress-style-three',] }],
            headingOne: [{ type: i0.Input }],
            headingTwo: [{ type: i0.Input }],
            headingThree: [{ type: i0.Input }],
            headingOneId: [{ type: i0.Input }],
            headingTwoId: [{ type: i0.Input }],
            headingThreeId: [{ type: i0.Input }],
            customHeadingOneClass: [{ type: i0.Input, args: ['custom-heading-one-class',] }],
            customHeadingTwoClass: [{ type: i0.Input, args: ['custom-heading-two-class',] }],
            customHeadingThreeClass: [{ type: i0.Input, args: ['custom-heading-three-class',] }]
        };
        return SukuTrackProgressBarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuProductTraceWidgetComponent = /** @class */ (function () {
        function SukuProductTraceWidgetComponent() {
            this.val = true;
            this.val2 = false;
            this.isSearch = false;
            this.searchId = 'searchProduct';
            this.productId = 'tracetheProduct';
            this.traceMethodRadio = 'method';
            this.searchFun = new i0.EventEmitter();
            this.selectproducts = new i0.EventEmitter();
            this.searchByProduct = new i0.EventEmitter();
            this.traceproduct = new i0.EventEmitter();
        }
        Object.defineProperty(SukuProductTraceWidgetComponent.prototype, "disableBtn", {
            get: /**
             * @return {?}
             */ function () {
                return this._disableBtn;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._disableBtn = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SukuProductTraceWidgetComponent.prototype, "productdetails", {
            get: /**
             * @return {?}
             */ function () {
                return this._data;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val) {
                    this._data = JSON.parse(val);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SukuProductTraceWidgetComponent.prototype, "result", {
            get: /**
             * @return {?}
             */ function () {
                return this._result;
            },
            set: /**
             * @param {?} res
             * @return {?}
             */ function (res) {
                this._result = res;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuProductTraceWidgetComponent.prototype.searchEnabled = /**
         * @return {?}
         */
            function () {
                this.isSearch = !this.isSearch;
            };
        Object.defineProperty(SukuProductTraceWidgetComponent.prototype, "visible", {
            get: /**
             * @return {?}
             */ function () {
                return this._visible;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._visible = val;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} newValue
         * @return {?}
         */
        SukuProductTraceWidgetComponent.prototype.showSelectedPro = /**
         * @param {?} newValue
         * @return {?}
         */
            function (newValue) {
                this.selectedItem = newValue;
            };
        /**
         * @return {?}
         */
        SukuProductTraceWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuProductTraceWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-product-trace-widget',
                        template: "<span [formGroup]=\"form\">\r\n  <div class=\" product-boxContent\">\r\n    <div class=\"col-sm-12 prizeHead pl-0\">\r\n      {{headName}}\r\n    </div>\r\n    <div class=\"col-sm-12 prizesubHead pl-0\">\r\n      {{subHeadName}}\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12 mt-2 pt-4 pb-4 RectangleBorder\">\r\n    <div class=\"col-sm-12 productName pb-3\">\r\n      {{name}}\r\n    </div> \r\n    <div class=\"col-sm-12 pb-2 pl-3 p-0 searchBorderBox\">\r\n      <input type=\"text\" #search class=\"searchBorderStyles\" formControlName=\"{{control}}\" name=\"{{control}}\"\r\n        placeholder=\"search\" (keyup)=\"searchFun.emit(isSearch)\">\r\n      <span class=\"m-1\"><i class=\"fa fa-search\" style=\"font-size:22px;color:#b6b6b6;\"></i></span>\r\n    </div>\r\n    <p class=\"resultCount\" *ngIf=\"_result == 'true'\">{{productdetails?.length}} products found with the above number.\r\n    </p>\r\n    <div *ngIf=\"_visible == 'false'\">\r\n      <p class=\"responseInfo\" *ngIf=\"productdetails?.length > 0 ? true : false \">please select one</p>\r\n      <div class=\"heightTab\" id=\"scrollDiv\">\r\n        <div class=\"col\" *ngFor=\"let products of productdetails ;let i= index\">\r\n          <mat-radio-button id=\"{{traceMethodRadio}}{{i}}\" color=\"primary\" class=\"searchData f13\" value=\"2\" (click)=\"selectproducts.emit(products)\"\r\n            (click)=\"showSelectedPro(products)\">{{products.asset.description}}<br>\r\n            {{products.asset.name}}<br></mat-radio-button>\r\n          <hr>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12 mb-2 text-center pt-3 mt-3 pb-1\">\r\n      <span class=\"pt-2\">\r\n        <a *ngIf=\"_visible == 'true'\" id=\"{{searchId}}\" class=\"trackBtn btn-info f14\" (click)=\"searchByProduct.emit()\">\r\n          Search for product </a>\r\n        <a *ngIf=\"_visible == 'false'\" [ngClass]=\"{'disabled': _disableBtn =='false' }\" id=\"{{productId}}\" class=\"trackBtn btn-info f14\"\r\n          (click)=\"traceproduct.emit(1)\"> trace the\r\n          product </a>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</span>",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: [".product-boxContent{width:100%;float:left;background:#494848;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:15px 5px 4px 15px;margin:0}.prizeHead{width:100%;float:left;font-size:17px;color:#e5e5e5;line-height:1em;margin:0 0 12px}.prizesubHead{width:100%;float:left;font-family:Poppins-Regular,sans-serif!important;font-size:15px;color:#e5e5e5;line-height:1em;margin:0 0 12px}.RectangleBorder{background-color:#fff;box-shadow:0 -4px 2px 0 rgba(0,0,0,.08);border-radius:0;margin-top:84px!important}.productName{color:#e5e5e5;font-size:13px}.searchBorderBox{border:1px solid #b6b6b6;border-radius:12px 25.5px 25.5px;font-size:15px}.searchBorderStyles{width:87%;padding:5px 0 0;border-width:0}.productCount{color:#b6b6b6;font-size:12px}.trackBtn{font-family:\"Encode Sans\",sans-serif;font-size:15px;padding:.55rem .85rem}.trackBtn:hover{color:#fff!important;background:#a7bf2e!important}.trackBtn.disabled:hover{color:grey!important;background:#a7bf2e!important}.pTB11{padding-bottom:8px;padding-top:10px}.searchData{color:#b6b6b6}.resultCount{color:#e5e5e5;font-size:12px;padding-left:13px}.responseInfo{color:#b6b6b6;font-size:12px;padding-left:13px}.heightTab{max-height:230px;overflow-x:hidden}::-webkit-scrollbar-thumb{background:#a7bf2e;border-radius:60px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #a7bf2e;border-radius:60px}#scrollDiv::-webkit-scrollbar{width:6px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:60px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}"]
                    }] }
        ];
        /** @nocollapse */
        SukuProductTraceWidgetComponent.ctorParameters = function () { return []; };
        SukuProductTraceWidgetComponent.propDecorators = {
            form: [{ type: i0.Input }],
            headName: [{ type: i0.Input, args: ['head-name',] }],
            subHeadName: [{ type: i0.Input, args: ['sub-Head-Name',] }],
            name: [{ type: i0.Input }],
            control: [{ type: i0.Input }],
            searchId: [{ type: i0.Input }],
            productId: [{ type: i0.Input }],
            traceMethodRadio: [{ type: i0.Input }],
            searchFun: [{ type: i0.Output }],
            selectproducts: [{ type: i0.Output }],
            searchByProduct: [{ type: i0.Output }],
            traceproduct: [{ type: i0.Output }],
            disableBtn: [{ type: i0.Input }],
            productdetails: [{ type: i0.Input }],
            result: [{ type: i0.Input }],
            visible: [{ type: i0.Input, args: ['visible',] }]
        };
        return SukuProductTraceWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuTreeComponent = /** @class */ (function () {
        function SukuTreeComponent() {
            this.action = new i0.EventEmitter();
            this.boxWidth = 183;
            this.boxHeight = 55;
            this.margin = {
                top: 50,
                right: 5,
                bottom: 50,
                left: 5
            };
            this.width = 1060 - this.margin.left - this.margin.right;
            this.height = 510 - this.margin.top - this.margin.bottom;
            this.childCount = 0;
            this.max = 0;
            this.maxHeight = 0;
        }
        /**
         * @return {?}
         */
        SukuTreeComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (this.treeDataFromApi) {
                    if (document.getElementById('tree')) {
                        /** @type {?} */
                        var list = document.getElementById('tree');
                        while (list.hasChildNodes()) {
                            list.removeChild(list.firstChild);
                        }
                        this.width = 0;
                        this.height = 0;
                        this.max = 0;
                        this.maxHeight = 0;
                    }
                    this.constructTree();
                    console.log('tree called');
                }
            };
        /**
         * @return {?}
         */
        SukuTreeComponent.prototype.constructTree = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var treeData = this.treeDataFromApi;
                this.root = treeData[0];
                this.tree = d3.layout.tree().separation(( /**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */function (a, b) { return (a.parent === b.parent ? 5 : 5.25); })).children(( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                    return d.relations;
                }));
                /** @type {?} */
                var nodes = this.tree.nodes(this.root).reverse();
                if (this.relation == 1) {
                    nodes.forEach(( /**
                     * @param {?} d
                     * @return {?}
                     */function (d) {
                        if (d.depth > _this.max) {
                            _this.max = d.depth;
                            console.log("depth", _this.max);
                        }
                        if (d.children) {
                            if (d.children.length > _this.maxHeight) {
                                _this.maxHeight = d.children.length;
                            }
                        }
                    }));
                    this.width = (this.max + 1) * 320 - this.margin.left - this.margin.right;
                    this.height = (this.maxHeight + 1) * 155 - this.margin.top - this.margin.bottom;
                }
                else {
                    nodes.forEach(( /**
                     * @param {?} d
                     * @return {?}
                     */function (d) {
                        if (d.depth > _this.max) {
                            _this.max = d.depth;
                        }
                        if (d.children) {
                            if (d.children.length > _this.maxHeight) {
                                _this.maxHeight = d.children.length;
                            }
                        }
                    }));
                    this.width = (this.max + 1) * 270 - this.margin.left - this.margin.right;
                    this.height = (this.maxHeight + 1) * 155 - this.margin.top - this.margin.bottom;
                }
                console.log('width', this.width, this.maxHeight);
                this.i = 0;
                this.j = 0;
                this.testd = 0;
                if (treeData) {
                    this.tree = d3.layout
                        .tree()
                        .separation(( /**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */function (a, b) { return (a.parent === b.parent ? 5 : 5.25); }))
                        .children(( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                        return d.relations;
                    }))
                        .size([this.height, this.width]);
                    this.svg = d3.select('#tree')
                        .insert('p')
                        .attr('id', 'treedata')
                        .attr('width', this.width + this.margin.right + this.margin.left)
                        .attr('height', this.height + this.margin.top + this.margin.bottom)
                        .append('svg')
                        .attr('width', this.width + this.margin.right + this.margin.left)
                        .attr('height', this.height + this.margin.top + this.margin.bottom)
                        .append('g')
                        .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
                    this.root = treeData[0];
                    this.drawTree();
                }
            };
        /**
         * @return {?}
         */
        SukuTreeComponent.prototype.drawTree = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var nodes = this.tree.nodes(this.root).reverse();
                /** @type {?} */
                var links = this.tree.links(nodes);
                if (this.relation == 1) {
                    nodes.forEach(( /**
                     * @param {?} d
                     * @return {?}
                     */function (d) {
                        if (_this.max == 0) {
                            d.y = _this.width - (_this.max + 1) * 220 - d.depth * -270; // reverse tree
                        }
                        else {
                            d.y = _this.width - (_this.max + 1) * 250 - d.depth * -270; // reverse tree
                        }
                    }));
                }
                else {
                    nodes.forEach(( /**
                     * @param {?} d
                     * @return {?}
                     */function (d) {
                        d.y = _this.width - 109 - d.depth * 270; // reverse tree
                    }));
                }
                /** @type {?} */
                var node = this.svg.selectAll('g.node').data(nodes, ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                    return d.id || (d.id = ++_this.i); // assign id to nodes
                }));
                /** @type {?} */
                var nodeEnter = node.enter().append('g').attr('class', 'node').attr('transform', ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                    return 'translate(' + d.y + ',' + d.x + ')'; // append g with class attr
                }));
                // append line into svg
                node
                    .append('line')
                    .style('stroke', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    console.log('d', d);
                    if (d.depth === 0) {
                        return '#6f3bda';
                    }
                    else {
                        if (_this.relation == 1) {
                            return '#3fdbef';
                        }
                        else {
                            return '#b8ce2b';
                        }
                    }
                }))
                    .attr('x1', -(this.boxWidth / 2))
                    .attr('y1', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    if (d.assetName.length > 50) {
                        return -(_this.boxHeight / 2);
                    }
                    if (d.assetName.length > 23) {
                        return -(_this.boxHeight / 2);
                    }
                    if (d.assetName.length > 0) {
                        return -(_this.boxHeight / 2);
                    }
                }))
                    .attr('x2', -(this.boxWidth / 2))
                    .attr('y2', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    if (d.assetName.length > 50) {
                        return _this.boxHeight / 2 + 30;
                    }
                    if (d.assetName.length > 40) {
                        return _this.boxHeight / 2 + 30;
                    }
                    if (d.assetName.length > 23) {
                        return _this.boxHeight / 2 + 10;
                    }
                    if (d.assetName.length > 0) {
                        return _this.boxHeight / 2;
                    }
                }))
                    .attr('stroke-width', '10');
                // append rect into svg
                node
                    .append('rect')
                    .attr({
                    x: -(this.boxWidth / 2),
                    y: -(this.boxHeight / 2),
                    width: this.boxWidth,
                    height: ( /**
                     * @param {?} d
                     * @return {?}
                     */function (d) {
                        if (d.assetName.length > 40) {
                            return _this.boxHeight + 30;
                        }
                        else if (d.assetName.length > 23) {
                            return _this.boxHeight + 10;
                        }
                        else {
                            return _this.boxHeight;
                        }
                    })
                })
                    .attr('fill', 'white')
                    .attr('stroke-width', '.5')
                    .attr('stroke', '#c2c1c1ab');
                node.insert('g', 'g').attr('class', 'dot');
                // append dots to rect
                this.svg
                    .selectAll('g.dot')
                    .insert('circle')
                    .attr('r', 2.2)
                    .attr('cx', 65)
                    .attr('cy', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    if (d.assetName.length > 50) {
                        return 50;
                    }
                    if (d.assetName.length > 40) {
                        return 48;
                    }
                    else if (d.assetName.length > 23) {
                        return 28;
                    }
                    else {
                        return 17;
                    }
                }))
                    .attr('fill', '#b6b6b6');
                this.svg
                    .selectAll('g.dot')
                    .insert('circle')
                    .attr('r', 2.2)
                    .attr('cx', 72)
                    .attr('cy', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    if (d.assetName.length > 50) {
                        return 50;
                    }
                    if (d.assetName.length > 40) {
                        return 48;
                    }
                    else if (d.assetName.length > 23) {
                        return 28;
                    }
                    else {
                        return 17;
                    }
                }))
                    .attr('fill', '#b6b6b6');
                this.svg
                    .selectAll('g.dot')
                    .insert('circle')
                    .attr('r', 2.2)
                    .attr('cx', 79)
                    .attr('cy', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    if (d.assetName.length > 50) {
                        return 50;
                    }
                    if (d.assetName.length > 40) {
                        return 48;
                    }
                    else if (d.assetName.length > 23) {
                        return 28;
                    }
                    else {
                        return 17;
                    }
                }))
                    .attr('fill', '#b6b6b6');
                this.svg
                    .selectAll('g.dot')
                    .insert('rect')
                    .attr('class', 'dot')
                    .attr('x', '60')
                    .attr('y', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    if (d.assetName.length > 50) {
                        return 45;
                    }
                    if (d.assetName.length > 40) {
                        return 30;
                    }
                    if (d.assetName.length > 23) {
                        return 23;
                    }
                    if (d.assetName.length > 0) {
                        return 15;
                    }
                }))
                    .attr('id', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    return 'asset' + ++_this.j;
                }))
                    .attr('height', '10')
                    .attr('width', '25')
                    .attr('fill', 'transparent')
                    .on('click', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    console.log(d);
                    if (d.uid) {
                        _this.dataUID = d.uid;
                        _this.action.emit(d.uid);
                    }
                }));
                this.svgNOde = node
                    .append('text')
                    .attr('x', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    return -(_this.boxWidth / 10) - 65;
                }))
                    .attr('y', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    return -(_this.boxWidth / 35);
                }))
                    .style('text-anchor', 'middle')
                    .style('fill', '#aaaaaa')
                    .attr('font-family', 'sans-serif')
                    .text(( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    return d.assetName;
                }))
                    .call(( /**
             * @param {?} text
             * @param {?} width
             * @return {?}
             */function wrap(text, width) {
                    text.each(( /**
                     * @return {?}
                     */function () {
                        console.log('word tezt infor each', d3.select(this));
                        // tslint:disable-next-line:prefer-const
                        // tslint:disable-next-line:no-shadowed-variable
                        /** @type {?} */
                        var text = d3.select(this);
                        /** @type {?} */
                        var words = text.text().split(/\s+/).reverse();
                        /** @type {?} */
                        var word;
                        /** @type {?} */
                        var line = [];
                        /** @type {?} */
                        var lineNumber = 0;
                        /** @type {?} */
                        var lineHeight = 1.3;
                        // ems
                        /** @type {?} */
                        var x = text.attr('x');
                        /** @type {?} */
                        var y = text.attr('y');
                        /** @type {?} */
                        var dy = 0;
                        // parseFloat(text.attr("dy")),
                        /** @type {?} */
                        var tspan = text.text(null).append('tspan').attr('x', x).attr('y', y).attr('dy', dy + 'em').style('text-anchor', 'start');
                        while ((word = words.pop())) {
                            console.log('word', word);
                            line.push(word);
                            tspan.text(line.join(' '));
                            if (tspan.node().getComputedTextLength() > 170) {
                                line.pop();
                                tspan.text(line.join(' '));
                                line = [word];
                                tspan = text
                                    .append('tspan')
                                    .attr('x', x)
                                    .attr('y', y)
                                    .attr('dy', ++lineNumber * lineHeight + dy + 'em')
                                    .style('text-anchor', 'start')
                                    .text(word);
                            }
                        }
                    }));
                }));
                /** @type {?} */
                var link = this.svg.selectAll('path.link').data(links, ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                    _this.data = d;
                    return d.target.id;
                }));
                // append link into svg
                link
                    .enter()
                    .insert('path', 'g')
                    .attr('class', 'link')
                    .attr('fill', 'none')
                    .attr('stroke', '#c2c1c1')
                    .attr('stroke-width', '2')
                    .attr('shape-rendering', 'geometricPrecision ')
                    .attr('d', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    /** @type {?} */
                    var sourceX = d.source.x;
                    /** @type {?} */
                    var sourceY = d.source.y + _this.boxWidth / 2;
                    /** @type {?} */
                    var targetX = d.target.x;
                    /** @type {?} */
                    var targetY = d.target.y - _this.boxWidth / 2;
                    return ('M' +
                        sourceY +
                        ',' +
                        sourceX +
                        'H' +
                        (sourceY + (targetY - sourceY) / 2) +
                        'V' +
                        targetX +
                        'H' +
                        targetY);
                }));
            };
        /**
         * @param {?} val
         * @return {?}
         */
        SukuTreeComponent.prototype.actionFun = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this.action.emit(val);
            };
        SukuTreeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-tree',
                        template: "<div id=\"tree\"></div>\r\n<!-- [ngClass]=\"{'treeRtl': relation == 0, 'treeltr': relation == 1}\" -->",
                        styles: ["/deep/.node text{font-size:16px;font-family:'Encode Sans',sans-serif;fill:#aaa}/deep/#tree{width:100%;overflow-x:scroll!important;direction:rtl!important}/deep/svg{overflow-x:scroll!important}/deep/rect.dot{cursor:pointer!important}"]
                    }] }
        ];
        SukuTreeComponent.propDecorators = {
            treeDataFromApi: [{ type: i0.Input, args: ['tree-data',] }],
            relation: [{ type: i0.Input }],
            action: [{ type: i0.Output }]
        };
        return SukuTreeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuRatingStarComponent = /** @class */ (function () {
        function SukuRatingStarComponent() {
            this._rate = 0;
            this.action = new i0.EventEmitter();
        }
        Object.defineProperty(SukuRatingStarComponent.prototype, "ratingValue", {
            set: /**
             * @param {?} ratingValue
             * @return {?}
             */ function (ratingValue) {
                this._rate = ratingValue;
                console.log('', this._rate);
                this.callOfStarts(this._rate);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} e
         * @return {?}
         */
        SukuRatingStarComponent.prototype.callOfStarts = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                switch (true) {
                    case e == 0:
                        this.myHTML = "\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      </div>";
                        break;
                    case e <= 0.5:
                        this.myHTML = "\n      <span class=\"fa fa-star-half-empty starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      </div>";
                        break;
                    case e > 0.5 && e <= 1:
                        this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span> </div>";
                        break;
                    case e <= 1.5:
                        this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-half-empty starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span> </div>";
                        break;
                    case e > 1.5 && e <= 2:
                        this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span> </div>";
                        break;
                    case e <= 2.5:
                        this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-half-empty starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span> </div>";
                        break;
                    case e > 2.5 && e <= 3:
                        this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span> </div>";
                        break;
                    case e <= 3.5:
                        this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-half-empty starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span> </div>";
                        break;
                    case e > 3.5 && e <= 4:
                        this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span> </div>";
                        break;
                    case e <= 4.5:
                        this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-half-empty starChecked f22\"></span>\n    </div>";
                        break;
                    case e > 4.5 && e <= 5:
                        this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n       </div>";
                        break;
                    default:
                        break;
                }
            };
        /**
         * @return {?}
         */
        SukuRatingStarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuRatingStarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-rating-star',
                        template: "<span (change)=\"action.emit(ratingValue)\">\r\n  <div [innerHTML]=\"myHTML\" [class]=\"customclass\" ratingValue=\"\"></div>\r\n</span>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SukuRatingStarComponent.ctorParameters = function () { return []; };
        SukuRatingStarComponent.propDecorators = {
            action: [{ type: i0.Output }],
            customclass: [{ type: i0.Input }],
            ratingValue: [{ type: i0.Input, args: ['rating-value',] }]
        };
        return SukuRatingStarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuCardTitleComponent = /** @class */ (function () {
        function SukuCardTitleComponent() {
            this.cardTitleName = 'INTEREST NAME';
            this.cardTitleId = 'heading';
            this.cardTitlesize = '12';
            this.cardTitlecolor = '#b6b6b6';
            this.cardContentName = 'Spring Cases';
            this.cardContentId = 'Content';
            this.cardContentsize = '17';
            this.cardContentcolor = '#1d1d1d';
            this.cardContentweight = '700';
            this.customclassContent = '';
            this.customclasstitle = '';
        }
        /**
         * @return {?}
         */
        SukuCardTitleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuCardTitleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-card-title',
                        template: "<div class=\"product-title\">\r\n  <h1 [style.font-size.px]=\"cardTitlesize\" [class]=\"customclasstitle\" [style.color]=\"cardTitlecolor\" id=\"{{cardTitleId}}\">\r\n    {{cardTitleName}}\r\n  </h1>\r\n  <h2 [style.font-size.px]=\"cardContentsize\" [class]=\"customclassContent\" id=\"{{cardContentId}}\" [style.font-weight]=\"cardContentweight\"\r\n    [style.color]=\"cardContentcolor\">\r\n    {{cardContentName}}\r\n  </h2>\r\n</div>\r\n",
                        styles: ["h1{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:0;color:#b6b6b6!important;margin-bottom:1px}h2{font-family:Poppins,sans-serif!important;font-size:17px;font-weight:900;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d}"]
                    }] }
        ];
        /** @nocollapse */
        SukuCardTitleComponent.ctorParameters = function () { return []; };
        SukuCardTitleComponent.propDecorators = {
            cardTitleName: [{ type: i0.Input }],
            cardTitleId: [{ type: i0.Input }],
            cardTitlesize: [{ type: i0.Input }],
            cardTitlecolor: [{ type: i0.Input }],
            cardTitleweight: [{ type: i0.Input }],
            cardContentName: [{ type: i0.Input }],
            cardContentId: [{ type: i0.Input }],
            cardContentsize: [{ type: i0.Input }],
            cardContentcolor: [{ type: i0.Input }],
            cardContentweight: [{ type: i0.Input }],
            customclassContent: [{ type: i0.Input }],
            customclasstitle: [{ type: i0.Input }]
        };
        return SukuCardTitleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuShippingWidgetComponent = /** @class */ (function () {
        function SukuShippingWidgetComponent() {
            this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
            this.amountPaid = '../assets/img/paid amount.png';
            this.amountUnPaid = '../assets/img/unpaid.png';
            this.unShippedIcon = '../assets/img/un shipped.png';
            this.shippedIcon = '../assets/img/shipped.png';
            this.msgPaymentStatus = 'Paid';
            this.msgShipmentStatus = 'shipped';
            this.customclass = 'customclass imgsize';
            this.customIconclass = 'text-right';
            this.bgColor = '';
            this.imageColSize = ' col-sm-1 flex pt-1 pl-2';
            this.txtcolsize = 'txtcolsize col-sm-4 pl-4 pt-2 mt-1';
            this.txttwocolsize = 'col-sm-2 pt-2 mt-1';
            this.txtthreecolsize = 'col-sm-3 pt-2 mt-1';
            this.titleOne = 'Title One';
            this.titleOneColor = 'black';
            this.titleOneWeight = '600';
            this.titleOneSize = '14';
            this.titleOnecustomclass = '';
            this.contentOne = '$100';
            this.contentOneColor = '#3e3e3e';
            this.contentOneWeight = '500';
            this.contentOneSize = '14';
            this.contentOnecustomclass = '';
            this.contentTwo = 'John Smith';
            this.contentTwoColor = '#3e3e3e';
            this.contentTwoWeight = '500';
            this.contentTwoSize = '14';
            this.contentTwocustomclass = '';
            this.subTitleTwo = 'SOLD BY';
            this.subTitleTwoColor = '#b6b6b6';
            this.subTitleTwoWeight = '500';
            this.subTitleTwoSize = '12';
            this.subTitleTwocustomclass = '';
            this.subTitleThree = 'EXPIRY DATE';
            this.subTitleThreecolor = '#b6b6b6';
            this.subTitleThreeWeight = '500';
            this.subTitleThreeSize = '12';
            this.subTitleThreeClass = '';
            this.contentThree = '28 Nov 2018';
            this.contentThreeColor = '#3e3e3e';
            this.contentThreeWeight = '500';
            this.contentThreeSize = '14';
            this.contentThreecustomclass = '';
        }
        /**
         * @return {?}
         */
        SukuShippingWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuShippingWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-shipping-widget',
                        template: "<div class=\"col p-0\">\r\n  <div class=\"row card-line-bg p-3 m-3 c-pointer center\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img [class]=\"customclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\r\n    </div>\r\n      <div *ngIf=\"msgPaymentStatus=='Paid'\" class=\"padlf\">\r\n        <img [class]=\"customIconclass\" src=\"{{amountPaid}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n      </div>\r\n      <div *ngIf=\"msgPaymentStatus=='unPaid'\" class=\"padlf\">\r\n        <img [class]=\"customIconclass\" src=\"{{amountUnPaid}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n      </div>\r\n      <div *ngIf=\"msgShipmentStatus=='shipped'\">\r\n        <img [class]=\"customIconclass\" src=\"{{shippedIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n      </div>\r\n      <div *ngIf=\"msgShipmentStatus=='unShipped'\">\r\n        <img [class]=\"customIconclass\" src=\"{{unShippedIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n      </div>\r\n    <div [class]=\"txtcolsize\">\r\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\r\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\r\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n    </div>\r\n    <div [class]=\"txttwocolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\" [style.font-weight]=\"subTitleTwoWeight\"\r\n        [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\" [style.font-weight]=\"contentTwoWeight\"\r\n        [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n    </div>\r\n    <div [class]=\"txtthreecolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\" [style.font-weight]=\"subTitleThreeWeight\"\r\n        [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\" [style.font-weight]=\"contentThreeWeight\"\r\n        [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n    </div>\r\n  </div>\r\n</div>",
                        styles: ["h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}@media only screen and (max-width:500px){.center{text-align:center}.imgsize{height:100px;width:100px}.padlf{padding-left:30%}}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        SukuShippingWidgetComponent.ctorParameters = function () { return []; };
        SukuShippingWidgetComponent.propDecorators = {
            image: [{ type: i0.Input }],
            amountPaid: [{ type: i0.Input, args: ['paid-icon',] }],
            amountUnPaid: [{ type: i0.Input, args: ['unpaid-icon',] }],
            unShippedIcon: [{ type: i0.Input, args: ['unshipped-icon',] }],
            shippedIcon: [{ type: i0.Input, args: ['shipped-icon',] }],
            msgPaymentStatus: [{ type: i0.Input, args: ['msg-Payment-Status',] }],
            msgShipmentStatus: [{ type: i0.Input, args: ['msg-Shipment-Status',] }],
            customclass: [{ type: i0.Input, args: ['customclass',] }],
            customIconclass: [{ type: i0.Input, args: ['custom-iconclass',] }],
            bgColor: [{ type: i0.Input }],
            interest: [{ type: i0.Input }],
            imageColSize: [{ type: i0.Input }],
            txtcolsize: [{ type: i0.Input }],
            txttwocolsize: [{ type: i0.Input }],
            txtthreecolsize: [{ type: i0.Input }],
            titleOne: [{ type: i0.Input, args: ['title-one',] }],
            titleOneColor: [{ type: i0.Input, args: ['title-one-color',] }],
            titleOneWeight: [{ type: i0.Input, args: ['title-one-weight',] }],
            titleOneSize: [{ type: i0.Input, args: ['title-one-size',] }],
            titleOnecustomclass: [{ type: i0.Input, args: ['title-one-customclass',] }],
            contentOne: [{ type: i0.Input, args: ['content-one',] }],
            contentOneColor: [{ type: i0.Input, args: ['content-one-color',] }],
            contentOneWeight: [{ type: i0.Input, args: ['content-one-weight',] }],
            contentOneSize: [{ type: i0.Input, args: ['content-one-size',] }],
            contentOnecustomclass: [{ type: i0.Input, args: ['content-one-customclass',] }],
            contentTwo: [{ type: i0.Input, args: ['content-two',] }],
            contentTwoColor: [{ type: i0.Input, args: ['content-two-color',] }],
            contentTwoWeight: [{ type: i0.Input, args: ['content-two-weight',] }],
            contentTwoSize: [{ type: i0.Input, args: ['content-two-size',] }],
            contentTwocustomclass: [{ type: i0.Input, args: ['content-two-customclass',] }],
            subTitleTwo: [{ type: i0.Input, args: ['sub-title-two',] }],
            subTitleTwoColor: [{ type: i0.Input, args: ['sub-title-two-color',] }],
            subTitleTwoWeight: [{ type: i0.Input, args: ['sub-title-two-weight',] }],
            subTitleTwoSize: [{ type: i0.Input, args: ['sub-title-two-size',] }],
            subTitleTwocustomclass: [{ type: i0.Input, args: ['sub-title-two-customclass',] }],
            subTitleThree: [{ type: i0.Input, args: ['sub-title-three',] }],
            subTitleThreecolor: [{ type: i0.Input, args: ['sub-title-three-color',] }],
            subTitleThreeWeight: [{ type: i0.Input, args: ['sub-title-three-weight',] }],
            subTitleThreeSize: [{ type: i0.Input, args: ['sub-title-three-size',] }],
            subTitleThreeClass: [{ type: i0.Input, args: ['sub-title-threeclass',] }],
            contentThree: [{ type: i0.Input, args: ['content-three',] }],
            contentThreeColor: [{ type: i0.Input, args: ['content-three-color',] }],
            contentThreeWeight: [{ type: i0.Input, args: ['content-three-widget',] }],
            contentThreeSize: [{ type: i0.Input, args: ['content-three-size',] }],
            contentThreecustomclass: [{ type: i0.Input, args: ['content-three-customclass',] }]
        };
        return SukuShippingWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuResponseComponent = /** @class */ (function () {
        function SukuResponseComponent() {
            this.customClass = 'filterResult text-center col';
            this.iconClass = 'fa fa-frown-o responseIcon';
            this.iconColor = '#c0ca33';
            this.content = 'no data available';
            this.bgColor = '';
        }
        SukuResponseComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-response',
                        template: "<div [class]=\"customClass\" [style.background-color]=\"bgColor\">\r\n  <img src=\"../../assets/images/no_data.png\">\r\n</div>",
                        styles: [".filterResult{margin-top:170px}.responseIcon{font-size:36px;color:#c0ca33}"]
                    }] }
        ];
        SukuResponseComponent.propDecorators = {
            customClass: [{ type: i0.Input }],
            iconClass: [{ type: i0.Input }],
            iconColor: [{ type: i0.Input }],
            content: [{ type: i0.Input }],
            bgColor: [{ type: i0.Input }]
        };
        return SukuResponseComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuCreateCustomerComponent = /** @class */ (function () {
        //  getControlcontroller;
        //  getControlAddress;
        function SukuCreateCustomerComponent(fb) {
            this.fb = fb;
            this.countrySelect = new i0.EventEmitter();
            this.submitData = new i0.EventEmitter();
            this.onSubmit = new i0.EventEmitter();
            this.stateSelect = new i0.EventEmitter();
            this.industryTypeFun = new i0.EventEmitter();
            this.businessTypeFun = new i0.EventEmitter();
        }
        Object.defineProperty(SukuCreateCustomerComponent.prototype, "ssnLimit", {
            get: /**
             * @return {?}
             */ function () {
                return this._ssnLimit;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                console.log(val);
                this._ssnLimit = val;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuCreateCustomerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.DwollaTOSformValid = true;
                this.CitizensReserveTOSformValid = true;
                this.validateType = true;
                this.getControl = this.form.get(this.formArrayNameValue)['controls'][0];
                this.GetFormattedDate();
            };
        /**
         * @param {?} val
         * @return {?}
         */
        SukuCreateCustomerComponent.prototype.countrySelectAction = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                if (val) {
                    /** @type {?} */
                    var data = {
                        countryDetails: JSON.parse(val)
                    };
                    this.countrySelect.emit(data);
                }
            };
        /**
         * @param {?} val
         * @return {?}
         */
        SukuCreateCustomerComponent.prototype.industryTypeFunAction = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                if (val) {
                    /** @type {?} */
                    var data = {
                        industryType: JSON.parse(val)
                    };
                    this.industryTypeFun.emit(data);
                }
            };
        /**
         * @param {?} val
         * @return {?}
         */
        SukuCreateCustomerComponent.prototype.businessTypeFunAction = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                console.log("value", val);
                this.validateTypeFun(val);
            };
        /**
         * @param {?} type
         * @return {?}
         */
        SukuCreateCustomerComponent.prototype.validateTypeFun = /**
         * @param {?} type
         * @return {?}
         */
            function (type) {
                /** @type {?} */
                var typevalue = type;
                if (typevalue == 'soleProprietorship') {
                    this.validateType = true;
                }
                else {
                    this.validateType = false;
                }
            };
        /**
         * @return {?}
         */
        SukuCreateCustomerComponent.prototype.action1 = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var controlName1 = this.CRDwollaTOSControl;
                if (this.form.get(controlName1).value) {
                    this.CitizensReserveTOSformValid = false;
                }
                else {
                    this.CitizensReserveTOSformValid = true;
                }
            };
        /**
         * @return {?}
         */
        SukuCreateCustomerComponent.prototype.GetFormattedDate = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var todayTime = new Date();
                /** @type {?} */
                var year = (todayTime.getFullYear());
                /** @type {?} */
                var LeapYear = year % 4;
                if (LeapYear == 0) {
                    // This is Leap Year
                    this.currentDate = new Date().setDate(todayTime.getDate() - 6575);
                }
                else {
                    // This is not leap year
                    this.currentDate = new Date().setDate(todayTime.getDate() - 6574);
                    console.log("cxcxcxcx" + this.currentDate);
                }
                this.maxDate = new Date(this.currentDate).toISOString();
            };
        SukuCreateCustomerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-create-customer',
                        template: "<form [formGroup]=\"form\">\r\n  <div class=\"form-group col-sm-12 col-md-12 col-lg-12\">\r\n    <div class=\"col-sm-12 col-xs-12 text-center\">\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"col-sm-12 pL0 textdev\">\r\n    <span class=\"Account-Setup\">Customer Creation</span>\r\n  </div>\r\n  <br>\r\n  <div class=\"col Rectangle-2\">\r\n    <div formArrayName=\"{{formArrayNameValue}}\">\r\n      <div class=\"form-group col-xs-12 col-sm-12 col-md-12 col-lg-12\"\r\n        *ngFor=\"let detail of form.get(formArrayNameValue)['controls']; let i=index\" [formGroupName]=\"i\">\r\n        <div class=\"col-sm-10 col-xs-12 offset-sm-1\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 p-0 mt-sm-5\">\r\n              <div class=\"col-sm-12 pt-3\">\r\n                <span class=\"header pL30\">Business Information</span>\r\n              </div>\r\n              <div class=\"col-sm-12 pt-2\">\r\n                <span class=\"hide-details pL30\">ACCOUNT ADMIN</span>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" name=\"firstName\" formControlName=\"firstName\" id=\"firstName\"\r\n                      placeholder=\"First name\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('firstName').touched\">\r\n                      <span *ngIf=\"getControl.hasError('pattern',['firstName'])\">\r\n                        Invalid firstName\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" name=\"lastName\" formControlName=\"lastName\" id=\"lastName\"\r\n                      placeholder=\"Last name\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('lastName').touched\">\r\n                      <span *ngIf=\"getControl.hasError('pattern',['lastName'])\">\r\n                        Invalid lastName\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" name=\"email\" formControlName=\"email\" id=\"email\" placeholder=\"e-mail\">\r\n                  </mat-form-field>\r\n\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('email').touched\">\r\n                      <span *ngIf=\"getControl.hasError('pattern',['email'])\">\r\n                        Invalid email\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" name=\"address1\" formControlName=\"address1\" id=\"address1\"\r\n                      placeholder=\"Address\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('address1').touched\">\r\n                      <span *ngIf=\"getControl.hasError('pattern',['address1'])\">\r\n                        Invalid Address\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" name=\"city\" formControlName=\"city\" id=\"city\" placeholder=\"City\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('city').touched\">\r\n                      <span *ngIf=\"getControl.hasError('pattern',['city'])\">\r\n                        Invalid City\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" name=\"state\" formControlName=\"state\" id=\"state\" placeholder=\"State\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('state').touched\">\r\n                      <span *ngIf=\"getControl.hasError('pattern',['state'])\">\r\n                        Invalid State\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" name=\"postalCode\" formControlName=\"postalCode\" id=\"postalCode\"\r\n                      placeholder=\"Postal-code\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('postalCode').touched\">\r\n                      <span *ngIf=\"getControl.hasError('pattern',['postalCode'])\">\r\n                        Invalid postalCode\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12\">\r\n                <div class=\"col-sm-6 p-0\">\r\n                  <span class=\"hide-details\">INDUSTRY</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <mat-select id=\"type\" #x (selectionChange)=\"industryTypeFunAction(x.value)\" formControlName=\"type\"\r\n                      name=\"type\" placeholder=\"Industry type\">\r\n                      <mat-option value=\"\">Select Industry</mat-option>\r\n                      <mat-option *ngFor=\"let industry of industryTypeValue; let i = index\" value=\"{{industry | json}}\">\r\n                        {{industry.name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <mat-select id=\"businessClassification\" formControlName=\"businessClassification\"\r\n                      name=\"businessClassification\" placeholder=\"Business Classification\">\r\n                      <mat-option value=\"\">Select business Classification</mat-option>\r\n                      <mat-option *ngFor=\"let businessClassification of businessClassificationValue ; let i = index\"\r\n                        value=\"{{businessClassification.id}}\">\r\n                        {{businessClassification.name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" id=\"businessName\" formControlName=\"businessName\" name=\"businessName\"\r\n                      placeholder=\"Business name\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('businessName').touched\">\r\n                      <span *ngIf=\"getControl.hasError('pattern',['businessName'])\">\r\n                        Invalid Business Name\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <mat-select id=\"businessType\" #z (selectionChange)=\"businessTypeFunAction(z.value)\"\r\n                      formControlName=\"businessType\" name=\"businessType\" placeholder=\"Business type\">\r\n                      <mat-option value=\"\">Select businessType</mat-option>\r\n                      <mat-option *ngFor=\"let business of businessTypeValue ; let i = index\" value=\"{{business.value}}\">\r\n                        {{business.name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" name=\"ein\" formControlName=\"ein\" id=\"ein\" placeholder=\"EIN\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('ein').touched\">\r\n                      <span *ngIf=\"getControl.hasError('pattern',['ein'])\">\r\n                        Invalid EIN\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- controller -->\r\n            <div class=\"col-sm-6 p-0 mt-sm-5\" formGroupName=\"controller\">\r\n              <div class=\"col-sm-12 pb-5 pt-3\">\r\n                <span class=\"header pL30\">Controller Information</span>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" [readonly]=\"validateType\" name=\"firstName\" formControlName=\"firstName\"\r\n                      id=\"firstName\" placeholder=\"First name\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('controller').get('firstName').touched\">\r\n                      <span *ngIf=\"getControl.get('controller').hasError('pattern',['firstName'])\">\r\n                        Invalid FirstName\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" [readonly]=\"validateType\" name=\"lastName\" formControlName=\"lastName\"\r\n                      id=\"lastName\" placeholder=\"Last name\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('controller').get('lastName').touched\">\r\n                      <span *ngIf=\"getControl.get('controller').hasError('pattern',['lastName'])\">\r\n                        Invalid LastName\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" [readonly]=\"validateType\" name=\"title\" formControlName=\"title\"\r\n                      id=\"title\" placeholder=\"Title\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('controller').get('title').touched\">\r\n                      <span *ngIf=\"getControl.get('controller').hasError('pattern',['title'])\">\r\n                        Invalid title\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker\" [max]=\"maxDate\" placeholder=\"Date of Birth\"\r\n                      id=\"dateOfBirth\" formControlName=\"dateOfBirth\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" name=\"ssn\" formControlName=\"ssn\" id=\"ssn\" [placeholder]=\"_ssnLimit\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('controller').get('ssn').touched\">\r\n                      <span *ngIf=\"getControl.get('controller').hasError('pattern',['ssn'])\">\r\n                        Invalid SSN\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 \">\r\n                <div class=\"col-sm-6 p-0\">\r\n                  <span class=\"hide-details \">ADDRESS</span>\r\n                </div>\r\n              </div>\r\n              <div formGroupName=\"address\">\r\n                <div class=\"col-sm-12 form-group\">\r\n                  <div class=\"col flexCol p-0\">\r\n                    <mat-form-field>\r\n                      <input matInput type=\"text\" [readonly]=\"validateType\" name=\"address1\" formControlName=\"address1\"\r\n                        id=\"address1\" placeholder=\"Address-1\">\r\n                    </mat-form-field>\r\n                    <mat-error>\r\n                      <span *ngIf=\"getControl.get('controller').get('address').get('address1').touched\">\r\n                        <span *ngIf=\"getControl.get('controller').get('address').hasError('pattern',['address1'])\">\r\n                          Invalid address1\r\n                        </span>\r\n                      </span>\r\n                    </mat-error>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12 form-group\">\r\n                  <div class=\"col flexCol p-0\">\r\n                    <mat-form-field>\r\n                      <input matInput type=\"text\" [readonly]=\"validateType\" name=\"address2\" formControlName=\"address2\"\r\n                        id=\"address2\" placeholder=\"Address-2\">\r\n                    </mat-form-field>\r\n                    <mat-error>\r\n                      <span *ngIf=\"getControl.get('controller').get('address').get('address2').touched\">\r\n                        <span *ngIf=\"getControl.get('controller').get('address').hasError('pattern',['address2'])\">\r\n                          Invalid address2\r\n                        </span>\r\n                      </span>\r\n                    </mat-error>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12 form-group\">\r\n                  <div class=\"col flexCol p-0\">\r\n                    <mat-form-field>\r\n                      <mat-select #t (selectionChange)=\"countrySelectAction(t.value)\" name=\"country\"\r\n                        formControlName=\"country\" id=\"country\" placeholder=\"Country\">\r\n                        <mat-option *ngFor=\"let item of countriesList; let i = index\" value=\"{{item | json}}\">\r\n                          {{item.countryName }}</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12 form-group\">\r\n                  <div class=\"col flexCol p-0\">\r\n                    <mat-form-field>\r\n                      <mat-select name=\"stateProvinceRegion\" formControlName=\"stateProvinceRegion\"\r\n                        id=\"stateProvinceRegion\" placeholder=\"State\">\r\n                        <mat-option *ngFor=\"let item of statesList; let i = index\" value=\"{{ item.stateShortName }}\">{{\r\n                          item.stateName }}</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12 form-group\">\r\n                  <div class=\"col flexCol p-0\">\r\n                    <mat-form-field>\r\n                      <input matInput type=\"text\" [readonly]=\"validateType\" name=\"city\" formControlName=\"city\" id=\"city\"\r\n                        placeholder=\"City\">\r\n                    </mat-form-field>\r\n                    <mat-error>\r\n                      <span *ngIf=\"getControl.get('controller').get('address').get('city').touched\">\r\n                        <span *ngIf=\"getControl.get('controller').get('address').hasError('pattern',['city'])\">\r\n                          Invalid city\r\n                        </span>\r\n                      </span>\r\n                    </mat-error>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12 form-group\">\r\n                  <div class=\"col flexCol p-0\">\r\n                    <mat-form-field>\r\n                      <input matInput type=\"text\" [readonly]=\"validateType\" name=\"postalCode\"\r\n                        formControlName=\"postalCode\" id=\"postalCode\" placeholder=\"Postal-code\">\r\n                    </mat-form-field>\r\n                    <mat-error>\r\n                      <span *ngIf=\"getControl.get('controller').get('address').get('postalCode').touched\">\r\n                        <span *ngIf=\"getControl.get('controller').get('address').hasError('pattern',['postalCode'])\">\r\n                          Invalid postalCode\r\n                        </span>\r\n                      </span>\r\n                    </mat-error>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group col-xs-12 col-sm-10 offset-sm-1 p-0\">\r\n      <div class=\" col pt-4 col-xs-12\">\r\n        <span>\r\n          <mat-checkbox color=\"primary\" type=\"checkbox\" (change)=\"action1()\" id=\"{{CRDwollaTOSControl}}\"\r\n            formControlName=\"{{CRDwollaTOSControl}}\" name=\"{{CRDwollaTOSControl}}\">\r\n          </mat-checkbox>\r\n        </span>\r\n        <span class=\"col terms f15\">I agree to Citizen Reserve's\r\n          <a class=\"link ws\" href=\"https://citizensreserve.com/terms\" target=\"_blank\">Terms of Service</a>\r\n          and\r\n          <a class=\"link ws\" href=\"https://citizensreserve.com/privacy\" target=\"_blank\">Privacy Policy</a>\r\n          , as well as our payment partner Dwolla's\r\n          <a href=\"https://www.dwolla.com/legal/tos/\" target=\"_blank\">Terms of Service </a> and\r\n          <a href=\"https://www.dwolla.com/legal/privacy/\" target=\"_blank\"> Privacy Policy.</a>\r\n        </span>\r\n      </div>\r\n      <div class=\"col d-flex justify-content-center mt-4 mb-3  pB40\">\r\n        <button class=\"btn btn-info\" [disabled]=\"CitizensReserveTOSformValid\"\r\n          [ngClass]=\"{'disabled': CitizensReserveTOSformValid}\" (click)=\"submitData.emit(); onSubmit.emit();\">Agree\r\n          & Continue</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>",
                        styles: [".logo{position:absolute;font-size:50px;opacity:0;right:0;top:0}.hide-details{font-family:'Encode Sans',sans-serif!important;font-size:15px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px;color:#1d1d1d}.pB40{padding-bottom:40px}.hide-details1{font-family:'Encode Sans',sans-serif!important;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px;color:#1d1d1d}.pL43{padding-left:43px}.logoDiv{position:relative;overflow:hidden;margin-top:15px}.f60{font-size:60px;color:#000}.padLft{padding-left:4px}#snackbar{visibility:hidden;min-width:250px;margin-left:-125px;background-color:#333;color:#fff;text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:1;left:50%;bottom:30px;font-size:17px}#snackbar.show{visibility:visible;-webkit-animation:.5s fadein,.5s 2.5s fadeout;animation:.5s fadein,.5s 2.5s fadeout}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@-webkit-keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}#successfull{visibility:hidden;min-width:250px;margin-left:-125px;background-color:#4cca1a;color:#fff;text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:1;left:50%;bottom:30px;font-size:17px}#successfull.show{visibility:visible;-webkit-animation:.5s fadein,.5s 2.5s fadeout;animation:.5s fadein,.5s 2.5s fadeout}.padLeft{padding-left:19px}.marginBoth{margin-top:0;margin-bottom:0}.circle{width:60px;height:60px;color:#fff;background:#031103;border-radius:50%}.progressText{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;color:#b6b6b6}.Setup-marketplace-in{width:249px;height:24px;font-family:Poppins-Regular,sans-serif;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;color:var(--black);margin-left:2%}.-Fill-out-preferenc{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#3e3e3e}.lastDiv{margin-bottom:14%}.lastELem{margin-bottom:1%}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}.trMar{padding-top:3%}.progressTxt{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:1;text-align:center;color:#b6b6b6}.divMarBtm{margin-bottom:3%}.intText{font-family:'Encode Sans',sans-serif!important;font-size:15px;font-weight:500;text-align:center;color:#b6b6b6;margin-bottom:0}.txtFlow{word-wrap:break-word;overflow-wrap:break-word;white-space:pre-wrap}.pL0R0{padding-right:15px;padding-left:15px}.pL0{padding-left:0}.Account-Setup{font-family:Poppins,sans-serif;font-size:21px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#1c1c1c;color:var(--black)}.border_bottom{border-bottom:2px solid #a7bf2e}.cancel{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#000}.zeplin_button{width:81px;height:40px;color:#fff;border:2px solid #757575;background-color:#757575}.btn_zep:hover{background-color:#a7bf2e}.zeplin_button1{width:81px;height:40px;color:#000;border:2px solid #757575;background-color:#272727}.btn_zep1:hover{background-color:#757575}@media screen and (max-width:700px){.Rectangle-10{width:100%;height:100%;background-color:#272727}}@media screen and (max-width:800px){.pL25{padding-left:25px}.pL0R0{padding-left:0;padding-right:0}}@media screen and (max-width:1500px){.pL0R0one{padding-left:15px;padding-right:15px}}@media screen and (min-width:500px){.Rectangle-10{width:100%;height:84px;background-color:#272727}.pL124,.pL128{padding-left:10px}.top_mrg_list_respo{padding-top:20px}.txt_aln_res{text-align:right}.res-pad{padding-left:0;padding-right:20px}.pT30{padding-top:30px}.mT27{margin-top:24px}.pL25{padding-left:0}.pR64L0{padding-right:64px;padding-left:0}.pL0R0{padding-right:0;padding-left:0}.pL0R0one{padding-left:0;padding-right:0}}.pL39{padding-left:82px}.pL-15{padding-left:15px}.pR10{padding-right:5px}.pL15{padding-left:41px}.pR28{padding-right:86px}.pR15{padding-right:46px}@media (max-width:430px){.confirmTxt,.progressTxt{padding-left:0;padding-right:0}.pL40{padding-left:10px}.pL16{padding-left:0}.pr15,.pr28{padding-right:0}}.pT6{padding-top:6px}.pT28{padding-top:28px}.pL20{padding-left:4px}.pT5{padding-top:13px}.REVIEW-BIDS{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#f3eeee}.pT16{padding-top:16px}.Spring-Cases{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:2;letter-spacing:.1px;color:#757575}.pT3B3{padding-top:3px;padding-bottom:3px}.paddingLeft27{padding-left:27px;padding-right:28px}@media (max-width:430px){.paddingLeft27{padding-left:18px;padding-right:23px}}.pB25{padding-bottom:25px}.mL29{margin-left:29px}.progressWidth{width:20%}.mL28{margin-left:28px}.pL31{padding-left:23px}.pR46{padding-right:20px}.pR68{padding-right:38px}.pR82{padding-right:73px}@media screen and (max-width:1024px){.mL29{margin-left:0}.progressWidth{width:20%}.mL28{margin-left:-6px}.pL31{padding-left:0}.pR46{padding-right:0;padding-left:0}.pR68{padding-right:4px}.pR82{padding-right:0}}.pL-250{padding-left:250px}.mL-120{margin-left:120px}.Dashboard{font-family:Poppins,sans-serif!important;font-size:22px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6}.product-list2 .article .product-img{width:255px;height:158px;float:left;text-align:center;line-height:158px;border:1px solid #f4f4f4;box-shadow:rgba(0,0,0,.05) 0 0 2px;position:relative;margin:0 -255px 0 0;z-index:10}.pB-56{padding-bottom:56px}.pL40{padding-left:40px}.Bheight{height:261px}.bgColor{background-color:#9ea6af;box-shadow:rgba(0,0,0,.05) 0 0 2px}.card-header{margin-bottom:17px;background-color:#9ea6af;border-radius:0 0 5px 6px;box-shadow:0 1px 1px rgba(0,0,0,.5);color:#fff}.headerFont{font-family:Poppins-Regular,sans-serif;letter-spacing:0}.pL-30{padding-left:30px}.header{font-family:'Encode Sans',sans-serif;font-size:20px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important}.pT-20{padding-left:41px;padding-top:21px;padding-right:0}.pB-37{padding-bottom:37px}.line{max-height:50px}.pL186{padding-left:186px}.Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05);font-size:12px!important}.btn-agree{color:#fff;background-color:#747474;border-radius:45px;padding:15px 40px;border:0;cursor:pointer;font-weight:700}.btn-agree:hover{background-color:#5a5a5a;cursor:pointer}.disabled{background-color:#757575;cursor:not-allowed!important}.pL100{padding-left:100px}.pT9{padding-top:9px}.pT25{padding-top:25px}.pL63{padding-left:64px}.f15{font-size:15px}.terms{font-family:'Encode Sans'}.display-2{font-size:5.2rem!important;line-height:1.5!important}.border-dot{border-style:dashed!important;border-color:#6a68689e;border-radius:1px;border-width:2px}.upload{opacity:0;width:277px!important;position:relative;height:120px}.upload:hover{cursor:pointer!important}.upload-icon{position:absolute}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.5rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.add{font-family:Poppins,sans-serif!important;font-size:1.7rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px;color:#ccda5c}.add:hover{font-weight:600}"]
                    }] }
        ];
        /** @nocollapse */
        SukuCreateCustomerComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder }
            ];
        };
        SukuCreateCustomerComponent.propDecorators = {
            form: [{ type: i0.Input }],
            formArrayNameValue: [{ type: i0.Input }],
            countriesList: [{ type: i0.Input }],
            statesList: [{ type: i0.Input }],
            CRDwollaTOSControl: [{ type: i0.Input }],
            CitizensReserveTOScontrol: [{ type: i0.Input }],
            countrySelect: [{ type: i0.Output }],
            submitData: [{ type: i0.Output }],
            onSubmit: [{ type: i0.Output }],
            stateSelect: [{ type: i0.Output }],
            industryTypeFun: [{ type: i0.Output }],
            businessTypeFun: [{ type: i0.Output }],
            businessTypeValue: [{ type: i0.Input }],
            industryTypeValue: [{ type: i0.Input }],
            businessClassificationValue: [{ type: i0.Input }],
            ssnLimit: [{ type: i0.Input }]
        };
        return SukuCreateCustomerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuBeneficialOwnerComponent = /** @class */ (function () {
        function SukuBeneficialOwnerComponent(snackBar) {
            this.snackBar = snackBar;
            this.title = 'Beneficial Owners';
            this.titleClass = 'mb-3 mt-5 ';
            this.content = "I, Daisy, hereby certify, to the best of my knowledge, that the\n  information provided above is complete and correct.";
            this.countrySelect = new i0.EventEmitter();
            this.stateSelect = new i0.EventEmitter();
            this.upload = new i0.EventEmitter();
            this.submitOwner = new i0.EventEmitter();
            this.add = new i0.EventEmitter();
            this.submitData = new i0.EventEmitter();
            this.verify = new i0.EventEmitter();
            this.selected = [];
            this.toggle = [];
        }
        /**
         * @return {?}
         */
        SukuBeneficialOwnerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.formValid = true;
                for (var j = 0; j < this.form.get(this.arrayControlName)['controls'].length; j++) {
                    this.toggle[j] = false;
                }
                this.selected[0] = 0;
                this.toggle[0] = true;
            };
        /**
         * @param {?} i
         * @return {?}
         */
        SukuBeneficialOwnerComponent.prototype.active = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                this.selected[i] = i;
                this.toggle[i] = !this.toggle[i];
                for (var j = 0; j < this.form.get(this.arrayControlName)['controls'].length; j++) {
                    if (i != j) {
                        this.selected[j] = null;
                    }
                }
                if (!this.toggle[i]) {
                    this.selected[i] = null;
                }
                else {
                    for (var j = 0; j < this.form.get(this.arrayControlName)['controls'].length; j++) {
                        if (i != j) {
                            this.toggle[j] = false;
                        }
                    }
                }
            };
        /**
         * @return {?}
         */
        SukuBeneficialOwnerComponent.prototype.action = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var controlName = this.control;
                if (this.form.get(controlName).value) {
                    this.formValid = false;
                    this.verify.emit();
                }
                else {
                    this.formValid = true;
                }
            };
        /**
         * @param {?} val
         * @param {?} i
         * @return {?}
         */
        SukuBeneficialOwnerComponent.prototype.countrySelectAction = /**
         * @param {?} val
         * @param {?} i
         * @return {?}
         */
            function (val, i) {
                if (val) {
                    /** @type {?} */
                    var data = {
                        countryDetails: JSON.parse(val),
                        index: i
                    };
                    this.countrySelect.emit(data);
                }
            };
        /**
         * @return {?}
         */
        SukuBeneficialOwnerComponent.prototype.agree = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var formData = this.form.value;
                this.submitOwner.emit(formData);
            };
        /**
         * @param {?} e
         * @return {?}
         */
        SukuBeneficialOwnerComponent.prototype.fileupload = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                console.log(e);
                /** @type {?} */
                var files = e.target.files;
                /** @type {?} */
                var maxFileSize = 9999999;
                /** @type {?} */
                var currentFileSize;
                /** @type {?} */
                var file = e.target.files[0];
                currentFileSize = file.size;
                if (currentFileSize <= maxFileSize) {
                    if (file.type == 'image/jpeg' ||
                        file.type == 'application/pdf' ||
                        file.type == 'image/png' ||
                        file.type == 'image/jpg') {
                        if (e.target.files && e.target.files.length > 0) {
                            for (var i = 0; i < e.target.files.length; i++) {
                                /** @type {?} */
                                var file_1 = e.target.files[i];
                                /** @type {?} */
                                var docType = this.uploadType;
                                /** @type {?} */
                                var data = {
                                    file: file_1,
                                    documentType: docType
                                };
                                this.upload.emit(data);
                                currentFileSize = file_1.size;
                            }
                            e.target.value = '';
                        }
                    }
                    else {
                        this.snackbar('The file type jpg/jpeg/png files are allowed!');
                    }
                }
                else {
                    this.snackbar('The file size cannot exceed 10 MB');
                }
            };
        /**
         * @param {?} msg
         * @return {?}
         */
        SukuBeneficialOwnerComponent.prototype.snackbar = /**
         * @param {?} msg
         * @return {?}
         */
            function (msg) {
                this.snackBar.open(msg, 'close', {
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                    duration: 3500
                });
            };
        SukuBeneficialOwnerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-beneficial-owner',
                        template: "<form [formGroup]=\"form\">\n  <div class=\"col\">\n    <label class=\"titleClass\"><strong>{{title}}</strong></label>\n    <div class=\"col bg pl-5 pr-5 pt-5 pb-3 mb-5\">\n      <div class=\"col p-0\" formArrayName=\"{{arrayControlName}}\" id=\"beneficialOwnerBlock\">\n        <div class=\"col p-0\" *ngFor=\"let detail of form.get(arrayControlName)['controls']; let i=index\" [formGroupName]=\"i\">\n          <div class=\"col card-line mt-3 mb-4 c-pointer\" data-toggle=\"collapse\" [attr.data-target]=\"'#ownerBlock' + i\"\n            (click)=\"active(i)\">\n            <div class=\"row\">\n              <label class=\"m-2 pl-3 owner c-pointer\">\n                Beneficial Owner {{i+1}}\n              </label>\n              <label class=\"d-flex justify-content-end col pl-0 c-pointer\">\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] != i}\">\n                  <i class=\"fa fa-arrow-circle-down icon\"></i>\n                </span>\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] == i}\">\n                  <i class=\"fa fa-arrow-circle-up icon\"></i>\n                </span>\n              </label>\n            </div>\n          </div>\n          <div class=\"col mt-4 collapse\" [ngClass]=\"{'show': i == 0 }\" data-parent=\"#beneficialOwnerBlock\" id=\"ownerBlock{{i}}\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"First Name\" id=\"firstname\" formControlName=\"firstName\" name=\"firstName\">\n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Last Name\" id=\"lastname\" formControlName=\"lastName\" name=\"lastName\">\n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n                <mat-form-field>\n                  <input matInput [matDatepicker]=\"myDatepicker\" id=\"dob\" placeholder=\"Date of birth\" formControlName=\"dateOfBirth\"\n                    name=\"dateOfBirth\">\n                  <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n                  <mat-datepicker #myDatepicker></mat-datepicker>\n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"SSN\" id=\"ssn\" formControlName=\"ssn\" name=\"ssn\">\n                  <mat-hint>hint: 1234-12-123</mat-hint>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"col p-0\" formGroupName=\"address\">\n              <div class=\"col p-0\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Address 1\" id=\"address1\" formControlName=\"address1\" name=\"address1\">\n                </mat-form-field>\n              </div>\n              <div class=\"col p-0\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Address 2\" id=\"address2\" formControlName=\"address2\" name=\"address2\">\n                </mat-form-field>\n              </div>\n              <div class=\"col p-0\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <mat-select #t (selectionChange)=\"countrySelectAction(t.value,i)\" id=\"country\" formControlName=\"country\"\n                        name=\"country\" placeholder=\"country\">\n                        <mat-option value=\"\">Select Country</mat-option>\n                        <mat-option *ngFor=\"let item of countriesList; let i = index\" value=\"{{ item | json }}\">\n                          {{ item.countryName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <mat-select #s (selectionChange)=\"stateSelect.emit(s.value)\" formControlName=\"stateProvinceRegion\"\n                        id=\"stateProvinceRegion\" name=\"stateProvinceRegion\" placeholder=\"state\">\n                        <mat-option value=\"\">Select State</mat-option>\n                        <mat-option *ngFor=\"let item of statesList; let i = index\" value=\"{{ item.stateShortName  }}\">{{\n                          item.stateName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <input matInput placeholder=\"City\" id=\"city\" formControlName=\"city\" name=\"city\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <input matInput #postalcode maxlength=\"5\" placeholder=\"Postal Code\" id=\"postalCode\"\n                        formControlName=\"postalCode\" name=\"postalCode\">\n                    </mat-form-field>\n                  </div>\n                </div>\n\n                <!-- <div class=\"col p-3\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-8 p-0\">\n                      <label class=\"upload-doc-title\">\n                        <b>\n                          Upload a driver license or passport.\n                        </b>\n                      </label>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"col border-dot rounded-0 bg-light d-flex justify-content-center mt-3\">\n                        <span class=\"fa fa-cloud-upload mt-3 upload-icon display-2 text-muted\" *ngIf=\"true\">\n                        </span>\n                        <input type=\"file\" class=\"upload\" name=\"document\" formControlName=\"document\" (change)=\"fileupload($event)\" />\n                      </div>\n                    </div>\n                  </div>\n                </div> -->\n\n                \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col mt-5 mb-3\">\n        <div class=\"row\">\n          <div class=\"col mt-3 mb-2\">\n            <span class=\"add c-pointer\" id=\"addOwner\" (click)=\"add.emit()\"><i class=\"fa fa-plus-circle pr-3 icon\"></i>Add New\n              Beneficial\n              Owner</span>\n          </div>\n          <div class=\"col d-flex justify-content-end  mt-3 mb-3 pr-sm-5 mr-sm-2\">\n            <button class=\"btn btn-info\" id=\"submitOwner\" (click)=\"agree()\">Submit Beneficial Owner</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"col mt-5\">\n          <div class=\"row\">\n            <span>\n              <mat-checkbox color=\"primary\" type=\"checkbox\" (change)=\"action()\" id=\"agree\" formControlName=\"{{control}}\"\n                name=\"{{control}}\">\n              </mat-checkbox>\n            </span>\n            <span class=\"col terms\" id=\"content\">{{content}}\n            </span>\n          </div>\n        </div>\n        <div class=\"col d-flex justify-content-center mt-4 mb-3\">\n          <button class=\"btn btn-info\" id=\"agreeBtn\" [ngClass]=\"{'disabled': formValid}\" (click)=\"submitData.emit()\" [disabled]=\"formValid\">Agree\n            & Continue</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>",
                        styles: [":root{font-size:17px!important}.bg{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.terms{font-family:\"Encode Sans\",sans-serif!important;font-size:1.5rem}label{font-family:Poppins,sans-serif!important;font-size:20px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px}.upload-doc-title{font-family:Poppins,sans-serif!important;font-size:1.5rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px}.owner{font-family:Poppins,sans-serif!important;font-size:1.6rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px}.card-line{background-color:#fff;color:#2c2727;height:46px;border-radius:2px;letter-spacing:.5px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2);border-top:3px solid #bfd131c9}.fullwidth{width:100%}.c-pointer{cursor:pointer}.display-2{font-size:6.2rem!important;line-height:1.5!important}.border-dot{border-style:dashed!important;border-color:#6a68689e;border-radius:1px;border-width:2px}.upload{opacity:0;width:277px!important;position:relative;height:120px}.upload:hover{cursor:pointer!important}.upload-icon{position:absolute}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.3rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.disabled{cursor:not-allowed!important}.add{font-family:Poppins,sans-serif!important;font-size:1.5rem;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px;color:#ccda5c}"]
                    }] }
        ];
        /** @nocollapse */
        SukuBeneficialOwnerComponent.ctorParameters = function () {
            return [
                { type: material.MatSnackBar }
            ];
        };
        SukuBeneficialOwnerComponent.propDecorators = {
            form: [{ type: i0.Input }],
            title: [{ type: i0.Input }],
            titleClass: [{ type: i0.Input }],
            countriesList: [{ type: i0.Input }],
            statesList: [{ type: i0.Input }],
            formValid: [{ type: i0.Input }],
            control: [{ type: i0.Input }],
            arrayControlName: [{ type: i0.Input }],
            content: [{ type: i0.Input }],
            countrySelect: [{ type: i0.Output }],
            stateSelect: [{ type: i0.Output }],
            upload: [{ type: i0.Output }],
            submitOwner: [{ type: i0.Output }],
            add: [{ type: i0.Output }],
            submitData: [{ type: i0.Output }],
            verify: [{ type: i0.Output }]
        };
        return SukuBeneficialOwnerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuDwollaFundingAgreementComponent = /** @class */ (function () {
        function SukuDwollaFundingAgreementComponent() {
            this.title = 'Funding Source Agreement';
            this.titleClass = 'mb-3 mt-5 ';
            this.checkBoxId = 'checkAgreement';
            this.content = ' I agree that future payments to daisy will be processed by the Dwolla payment system from the selected account above. In order to cancel this authorization, I will change my payment settings within my emery account.';
            this.contentId = 'termsID';
            this.contentSize = '1.5';
            this.btnTextSize = '1.5';
            this.submit = new i0.EventEmitter();
            this.verify = new i0.EventEmitter();
            this.formValid = true;
        }
        /**
         * @return {?}
         */
        SukuDwollaFundingAgreementComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        SukuDwollaFundingAgreementComponent.prototype.action = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var controlName = this.control;
                if (this.form.get(controlName).value) {
                    this.formValid = false;
                    this.verify.emit();
                }
                else {
                    this.formValid = true;
                }
            };
        /**
         * @return {?}
         */
        SukuDwollaFundingAgreementComponent.prototype.agree = /**
         * @return {?}
         */
            function () {
                console.log(this.form);
                this.submit.emit(this.form);
            };
        SukuDwollaFundingAgreementComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-dwolla-funding-agreement',
                        template: "<div class=\"col p-4\" [formGroup]=\"form\">\r\n  <label id=\"titleId\" class=\"titleClass\">{{title}}</label>\r\n  <div class=\"col bg p-4\">\r\n    <div class=\"col mt-4 mb-3\">\r\n      <mat-checkbox color=\"primary\" type=\"checkbox\" (change)=\"action()\" id=\"{{checkBoxId}}\" formControlName=\"{{control}}\"\r\n        name=\"{{control}}\">\r\n      </mat-checkbox>\r\n      <span class=\"col-sm-12 terms\" [style.font-size.rem]=\"contentSize\" id=\"{{contentId}}\">\r\n        {{content}}\r\n      </span>\r\n    </div>\r\n    <div class=\"col d-flex justify-content-center mt-5 mb-3\">\r\n      <button class=\"btn btn-info\" [ngClass]=\"{'disabled': formValid}\" (click)=\"agree()\"\r\n        [style.font-size.rem]=\"btnTextSize\"\r\n        [disabled]=\"formValid\">Agree & Continue</button>\r\n    </div>\r\n  </div>\r\n</div>",
                        styles: [".terms{font-family:\"Encode Sans\",sans-serif!important;font-size:1rem}.bg{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}label{font-family:Poppins,sans-serif!important;font-size:20px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px;color:#1d1d1d}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.5rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.disabled{cursor:not-allowed!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuDwollaFundingAgreementComponent.ctorParameters = function () { return []; };
        SukuDwollaFundingAgreementComponent.propDecorators = {
            form: [{ type: i0.Input }],
            title: [{ type: i0.Input }],
            titleClass: [{ type: i0.Input }],
            control: [{ type: i0.Input }],
            checkBoxId: [{ type: i0.Input }],
            content: [{ type: i0.Input }],
            contentId: [{ type: i0.Input }],
            contentSize: [{ type: i0.Input }],
            btnTextSize: [{ type: i0.Input, args: [' btn-text-size',] }],
            submit: [{ type: i0.Output }],
            verify: [{ type: i0.Output }]
        };
        return SukuDwollaFundingAgreementComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuDwollaFundingSourceComponent = /** @class */ (function () {
        function SukuDwollaFundingSourceComponent(snackBar) {
            this.snackBar = snackBar;
            this.action = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuDwollaFundingSourceComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @return {?}
         */
        SukuDwollaFundingSourceComponent.prototype.getDwollaHtml = /**
         * @return {?}
         */
            function () {
                if (this.iavtoken) {
                    (( /** @type {?} */(document.getElementById('start')))).disabled = true;
                    if (document.getElementById('iavContainer')) {
                        /** @type {?} */
                        var list = document.getElementById('iavContainer');
                        while (list.hasChildNodes()) {
                            list.removeChild(list.firstChild);
                        }
                    }
                    console.log('triggered', this.iavtoken);
                    dwolla.configure('sandbox');
                    dwolla.iav.start(this.iavtoken, {
                        container: 'iavContainer',
                        stylesheets: ['https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext'],
                        microDeposits: true,
                        backButton: true,
                        fallbackToMicroDeposits: true
                    }, ( /**
                     * @param {?} err
                     * @param {?} res
                     * @return {?}
                     */function (err, res) {
                        console.log('Error: ' + JSON.stringify(err) + ' -- Response: ' + JSON.stringify(res));
                        if (err) {
                            console.log('failed');
                            (( /** @type {?} */(document.getElementById('start')))).disabled = false;
                        }
                    }));
                }
                else {
                    this.snackbar('Please try after sometime.');
                }
            };
        /**
         * @param {?} msg
         * @return {?}
         */
        SukuDwollaFundingSourceComponent.prototype.snackbar = /**
         * @param {?} msg
         * @return {?}
         */
            function (msg) {
                this.snackBar.open(msg, 'close', {
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                    duration: 3500
                });
            };
        SukuDwollaFundingSourceComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-dwolla-funding-source',
                        template: "<div class=\"col p-2\">\r\n    <div id=\"mainContainer\">\r\n      <input type=\"button\" class=\"suku-button\" id=\"start\" (click)=\"getDwollaHtml()\" value=\"Add Bank\">\r\n    </div>\r\n    <div id=\"iavContainer\" class=\"bg m-3\"></div>\r\n  </div>",
                        styles: [".suku-button{cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1px}.suku-button:hover{cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#a7bf2e!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1px}.suku-button:focus{box-shadow:none!important;outline:0!important}.dwolla-iav-link{font-weight:400;color:#a7bf2e!important;font-family:Poppins,sans-serif!important;letter-spacing:.2px}.dwolla-iav-button{cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1px}.dwolla-iav-back-button{width:auto!important;cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1.1px}.bg{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}"]
                    }] }
        ];
        /** @nocollapse */
        SukuDwollaFundingSourceComponent.ctorParameters = function () {
            return [
                { type: material.MatSnackBar }
            ];
        };
        SukuDwollaFundingSourceComponent.propDecorators = {
            iavtoken: [{ type: i0.Input, args: ['iav-token',] }],
            action: [{ type: i0.Output }]
        };
        return SukuDwollaFundingSourceComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuCreationCustomerFileuploadComponent = /** @class */ (function () {
        function SukuCreationCustomerFileuploadComponent(snackBar) {
            this.snackBar = snackBar;
            this.docType = [];
            this.fileArrayList = [];
            this.title = 'Document upload:';
            this.OnFileChange = new i0.EventEmitter();
            this.submitData = new i0.EventEmitter();
        }
        Object.defineProperty(SukuCreationCustomerFileuploadComponent.prototype, "classification", {
            get: /**
             * @return {?}
             */ function () {
                return this._classification;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                console.log(val);
                this._classification = val;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuCreationCustomerFileuploadComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                console.log('suku-creation-customer-fileupload');
                this.docType = [
                    {
                        name: 'passport',
                        value: 'passport'
                    },
                    {
                        name: 'license',
                        value: 'license'
                    },
                    {
                        name: 'idCard',
                        value: 'idCard'
                    }
                ];
            };
        /**
         * @param {?} val
         * @return {?}
         */
        SukuCreationCustomerFileuploadComponent.prototype.imageType = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this.documentType = val;
                console.log('val', val);
                if (val) {
                    this.uploadType = val;
                }
            };
        /**
         * @param {?} e
         * @return {?}
         */
        SukuCreationCustomerFileuploadComponent.prototype.fileupload = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                console.log(e);
                if (this._classification == 'business') {
                    this.documentType = true;
                    this.uploadType = 'other';
                }
                if (this.documentType) {
                    /** @type {?} */
                    var files = e.target.files;
                    /** @type {?} */
                    var maxFileSize = 9999999;
                    /** @type {?} */
                    var currentFileSize = void 0;
                    /** @type {?} */
                    var file = e.target.files[0];
                    currentFileSize = file.size;
                    if (currentFileSize <= maxFileSize) {
                        if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg') {
                            if (e.target.files && e.target.files.length > 0) {
                                for (var i = 0; i < e.target.files.length; i++) {
                                    /** @type {?} */
                                    var file_1 = e.target.files[i];
                                    /** @type {?} */
                                    var docType = this.uploadType;
                                    /** @type {?} */
                                    var data = {
                                        file: file_1,
                                        documentType: docType
                                    };
                                    this.fileArrayList.push(file_1);
                                    console.log("this.fileArrayList", this.fileArrayList);
                                    this.OnFileChange.emit(data);
                                    currentFileSize = file_1.size;
                                }
                                e.target.value = '';
                            }
                        }
                        else {
                            this.snackbar('The file type jpg/jpeg/png files are allowed!');
                        }
                    }
                    else {
                        this.snackbar('The file size cannot exceed 10 MB');
                    }
                }
                else {
                    this.snackbar('Please select document type.');
                }
            };
        /**
         * @param {?} msg
         * @return {?}
         */
        SukuCreationCustomerFileuploadComponent.prototype.snackbar = /**
         * @param {?} msg
         * @return {?}
         */
            function (msg) {
                this.snackBar.open(msg, 'close', {
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                    duration: 3500
                });
            };
        SukuCreationCustomerFileuploadComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-creation-customer-fileupload',
                        template: "<div class=\"col p-0\">\r\n  <label class=\"titleClass\"><strong>{{title}}</strong></label>\r\n  <div class=\"col Rectangle-2 d-flex\">\r\n    <div class=\"col p-3\">\r\n      <div class=\"col p-5 col-xs-12 noPadding \">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div class=\"col flexCol p-0\">\r\n              <div class=\"col-sm-10 f14\">\r\n                <span class=\"poppins\">Upload the following Documents:</span>\r\n              </div>\r\n              <div class=\"col-sm-12 docText\">\r\n                <p class=\"mB-0 Spring-Cases txtFlow\"> 1. Controller's Driver's License:</p>\r\n                <p class=\"mB-0 Spring-Cases txtFlow\"> 2. EIN documentation (IRS-issued SS4 confirmation letter)</p>\r\n                <div class=\"col mt-3 mb-3 p-0\" *ngIf=\"fileArrayList?.length > 0\">\r\n                    <p class=\"poppins\">Document uploaded list:</p>\r\n                    <ul class=\"pl-4 ml-2\">\r\n                      <li *ngFor=\"let file of fileArrayList\"><i>{{file?.name}}</i></li>\r\n                    </ul>\r\n                  </div>\r\n              </div>\r\n            </div>  \r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"col pl-sm-5 pr-sm-5\">\r\n              <mat-form-field class=\"col pl-sm-5 pr-sm-5\" *ngIf=\"_classification == 'controller'\">\r\n                  <mat-select placeholder=\"type of Document\" id=\"uploadDoc\"  #types (selectionChange)=\"imageType(types.value)\">\r\n                    <mat-option *ngFor=\"let type of docType\" [value]=\"type.value\">\r\n                      {{type.name}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n               </mat-form-field>\r\n            </div>\r\n            <div class=\"col flexCol p-0\">\r\n              <div class=\" col-sm-8 offset-sm-2 border-dot rounded-0 bg-light d-flex justify-content-center text-center p-4\">\r\n                <div class=\"col-sm-5 col-xs-4 p-4 \">\r\n                  <a onclick=\"document.getElementById('myFileInput').click()\" class=\" fa fa-cloud-upload f60 text-muted center-block  pT9 \"\r\n                    id=\"saleTwoUpload\" style=\"width: 100%\"> </a>\r\n                  <input type=\"file\" placeholder={{imagepath}} id=\"myFileInput\" accept=\".pdf,.jpg, .jpeg, .png\"\r\n                    name=\"uploadDocument[]\" #fileInput (change)=\"fileupload($event)\" multiple=\"true\"/>\r\n                </div>\r\n                <div class=\"col-sm-8 err_style \" *ngIf=\"showPdfErrorMsg\" id=\"uploadcanExceed\">The file type\r\n                  pdf/doc/docx\r\n                  files\r\n                  are allowed! </div>\r\n                <div class=\"col-sm-8 err_style \" *ngIf=\"showMessage\" id=\"uploadcanExceed\">The file size cannot exceed\r\n                  10\r\n                  MB</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"col d-flex justify-content-center mt-4 mb-3  pB40\">\r\n                <button class=\"btn btn-info\" (click)=\"submitData.emit(); \">Agree & Continue</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  <!-- <div class=\"col p-0\">\r\n      <label class=\"titleClass\"><strong>{{title}}</strong></label>\r\n      <div class=\"col Rectangle-2 d-flex\">\r\n        <div class=\"col p-3\">\r\n          <div class=\"col p-5 col-xs-12 offset-xs-1 noPadding \">\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <div class=\"col-sm-10 f14\">\r\n                    <span class=\"poppins\">Upload the following Documents:</span>\r\n                  </div>\r\n                  <div class=\"col-sm-12 docText\">\r\n                    <p class=\"mB-0 Spring-Cases txtFlow\"> 1. Controller's Driver's License:</p>\r\n                    <p class=\"mB-0 Spring-Cases txtFlow\"> 2. EIN documentation (IRS-issued SS4 confirmation letter)</p>\r\n                  </div>\r\n                  <div class=\"col mt-3 mb-3\" *ngIf=\"fileArrayList\">\r\n                    <p class=\"poppins\">Document list:</p>\r\n                    <ul class=\"pl-5\">\r\n                      <li *ngFor=\"let file of fileArrayList\">{{file?.name}}</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>  \r\n              </div>\r\n              <div class=\"col\">\r\n                <div class=\"col pl-sm-5 pr-sm-5\">\r\n                  <mat-form-field class=\"col pl-sm-5 pr-sm-5\" *ngIf=\"_classification == 'controller'\">\r\n                      <mat-select placeholder=\"type of Document\" id=\"uploadDoc\"  #types (selectionChange)=\"imageType(types.value)\">\r\n                        <mat-option *ngFor=\"let type of docType\" [value]=\"type.value\">\r\n                          {{type.name}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                   </mat-form-field>\r\n                </div>\r\n                <div class=\"col flexCol p-0\">\r\n                  <div class=\" col-sm-8 offset-sm-2 border-dot rounded-0 bg-light d-flex justify-content-center text-center p-4\">\r\n                    <div class=\"col-sm-5 col-xs-4 p-4 \">\r\n                      <a onclick=\"document.getElementById('myFileInput').click()\" class=\" fa fa-cloud-upload f60 text-muted center-block  pT9 \"\r\n                        id=\"saleTwoUpload\" style=\"width: 100%\"> </a>\r\n                      <input type=\"file\" placeholder={{imagepath}} id=\"myFileInput\" accept=\".pdf,.jpg, .jpeg, .png\"\r\n                        name=\"uploadDocument[]\" #fileInput (change)=\"fileupload($event)\" multiple=\"true\"/>\r\n                    </div>\r\n                    <div class=\"col-sm-8 err_style \" *ngIf=\"showPdfErrorMsg\" id=\"uploadcanExceed\">The file type\r\n                      pdf/doc/docx\r\n                      files\r\n                      are allowed! </div>\r\n                    <div class=\"col-sm-8 err_style \" *ngIf=\"showMessage\" id=\"uploadcanExceed\">The file size cannot exceed\r\n                      10\r\n                      MB</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <div class=\"col d-flex justify-content-center mt-4 mb-3  pB40\">\r\n                    <button class=\"btn btn-info\" (click)=\"submitData.emit(); \">Agree & Continue</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </div> -->",
                        styles: [".display-2{font-size:5.2rem!important;line-height:1.5!important}.border-dot{border-style:dashed!important;border-color:#6a68689e;border-radius:1px;border-width:2px}.upload{opacity:0;width:277px!important;position:relative;height:120px}.upload:hover{cursor:pointer!important}.upload-icon{position:absolute}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.5rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.disabled{cursor:not-allowed!important}.add{font-family:Poppins,sans-serif!important;font-size:1.7rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px;color:#ccda5c}.add:hover{font-weight:600}"]
                    }] }
        ];
        /** @nocollapse */
        SukuCreationCustomerFileuploadComponent.ctorParameters = function () {
            return [
                { type: material.MatSnackBar }
            ];
        };
        SukuCreationCustomerFileuploadComponent.propDecorators = {
            title: [{ type: i0.Input }],
            classification: [{ type: i0.Input }],
            OnFileChange: [{ type: i0.Output }],
            submitData: [{ type: i0.Output }]
        };
        return SukuCreationCustomerFileuploadComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuPaymentPortalHelpComponent = /** @class */ (function () {
        function SukuPaymentPortalHelpComponent() {
            this.helpPage = 'FIND ALL INFORMATION REQUIRED FOR THE HELP PAGE';
            this.helpPageHref = 'https://docs.google.com/document/d/11BYv2KVQSEfProqHHxvoxEsOyxZwuqNu2UXTQnSQS14/edit#heading=h.l7cgm61nvh7m';
        }
        /**
         * @return {?}
         */
        SukuPaymentPortalHelpComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuPaymentPortalHelpComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-payment-portal-help',
                        template: "<div class=\"col-12 text-left border d-flex Rectangle-2 mT-8 p-3 bgWhite\">\r\n  <div class=\"col-12\">\r\n    <span class=\"Pl0 progressTxt mb40\">HELP PAGE</span>\r\n    <div class=\"col-12 text-left p-0 progressTxt mT-5 mB-8\">\r\n      {{helpPage}} <a \r\n            href=\"{{helpPageHref}}\"\r\n            target=\"_blank\"> HERE</a>\r\n  </div>\r\n  </div>\r\n</div>",
                        styles: [".progressTxt{font-family:'Encode Sans',sans-serif;font-size:15px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.bgWhite{background-color:#fff}.mT-5{margin-top:5%}.mT-8{margin-top:8%}.mB-8{margin-bottom:8%}.linkA{cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        SukuPaymentPortalHelpComponent.ctorParameters = function () { return []; };
        SukuPaymentPortalHelpComponent.propDecorators = {
            helpPage: [{ type: i0.Input }],
            helpPageHref: [{ type: i0.Input }]
        };
        return SukuPaymentPortalHelpComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuTermsAndConditionsComponent = /** @class */ (function () {
        function SukuTermsAndConditionsComponent(fb) {
            this.fb = fb;
            this.action = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuTermsAndConditionsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.termsandcondition = this.fb.group({
                    'contractTerms': false
                });
            };
        // action(eventvalue)
        // action(eventvalue)
        /**
         * @return {?}
         */
        SukuTermsAndConditionsComponent.prototype.action1 =
            // action(eventvalue)
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var data = this.termsandcondition.value.contractTerms;
                this.action.emit(data);
            };
        SukuTermsAndConditionsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-terms-and-conditions',
                        template: "<form [formGroup]=\"termsandcondition\">\n  <div class=\" container-fluid  d-flex flex-column justify-content-center py-3\">\n    <div class=\"text-center \"><b>Contract Terms & Conditions</b></div>\n    <div class=\"d-flex flex-row\">\n      <mat-checkbox color=\"primary\" type=\"checkbox\" #t (change)=\"action1()\" id=\"contractTerms\" \n      formControlName=\"contractTerms\" name=\"contractTerms\">\n      </mat-checkbox>\n      <span class=\"col Spring-Cases txtFlow termsAndConditions\"> I Accept the terms and conditions and authorize\n        this transaction.\n        <a class=\"link ws\" href=\"https://citizensreserve.com/terms\" target=\"_blank\">Terms</a>\n        <a class=\"link ws\" href=\"https://citizensreserve.com/privacy\" target=\"_blank\">Privacy</a>\n      </span>\n    </div>\n  </div>\n</form>",
                        styles: [".link{color:#757575;text-decoration:underline;margin-left:5px;margin-right:5px}.ws{white-space:pre}.termsAndConditions{font-family:EncodeSans;font-size:15px;font-weight:500;font-style:normal;font-stretch:normal;letter-spacing:.4px;color:#757575}"]
                    }] }
        ];
        /** @nocollapse */
        SukuTermsAndConditionsComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder }
            ];
        };
        SukuTermsAndConditionsComponent.propDecorators = {
            action: [{ type: i0.Output }]
        };
        return SukuTermsAndConditionsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuWebcomponentsModule = /** @class */ (function () {
        function SukuWebcomponentsModule() {
        }
        SukuWebcomponentsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            SukuBidTagComponent,
                            SukuCardLineComponent,
                            SukuDashboardProfileComponent,
                            SukuDefaultButtonComponent,
                            SukuHeadingComponent,
                            SukuHomeItalicHeadingComponent,
                            SukuHomeWidgetComponent,
                            SukuInfoButtonComponent,
                            SukuInlineDropdownComponent,
                            SukuMailWidgetComponent,
                            SukuMatchChipComponent,
                            SukuNotificationWidgetComponent,
                            SukuPrimaryButtonComponent,
                            SukuProgressBarComponent,
                            SukuSecondaryButtonComponent,
                            SukuSubHeadingComponent,
                            SukuLinkComponent,
                            SukuAddWidgetComponent,
                            SukuSelectInputComponent,
                            SukuNavSubmenuComponent,
                            SukuBidInfoComponent,
                            SukuPhoneWidgetComponent,
                            SukuAddressWidgetComponent,
                            SukuSearchInputComponent,
                            SukuProfileWidgetComponent,
                            SukuStarBadgeComponent,
                            SukuFiltersComponent,
                            SukuTrackProgressBarComponent,
                            SukuProductTraceWidgetComponent,
                            SukuTreeComponent,
                            SukuCardTitleComponent,
                            SukuRatingStarComponent,
                            SukuShippingWidgetComponent,
                            SukuResponseComponent,
                            SukuACHSettingsComponent,
                            SukuTransactionHistoryComponent,
                            SukuFundingSourceComponent,
                            SukuCreateCustomerComponent,
                            SukuBeneficialOwnerComponent,
                            SukuDwollaFundingAgreementComponent,
                            SukuDwollaFundingSourceComponent,
                            SukuCreationCustomerFileuploadComponent,
                            SukuPaymentPortalHelpComponent,
                            SukuTermsAndConditionsComponent
                        ],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            material.MatAutocompleteModule,
                            material.MatBadgeModule,
                            material.MatBottomSheetModule,
                            material.MatButtonModule,
                            material.MatButtonToggleModule,
                            material.MatCardModule,
                            material.MatCheckboxModule,
                            material.MatChipsModule,
                            material.MatDatepickerModule,
                            material.MatDialogModule,
                            material.MatDividerModule,
                            material.MatExpansionModule,
                            material.MatGridListModule,
                            material.MatIconModule,
                            material.MatInputModule,
                            material.MatListModule,
                            material.MatMenuModule,
                            material.MatNativeDateModule,
                            material.MatPaginatorModule,
                            material.MatProgressBarModule,
                            material.MatProgressSpinnerModule,
                            material.MatRadioModule,
                            material.MatRippleModule,
                            material.MatSelectModule,
                            material.MatSidenavModule,
                            material.MatSliderModule,
                            material.MatSlideToggleModule,
                            material.MatSnackBarModule,
                            material.MatSortModule,
                            material.MatStepperModule,
                            material.MatTableModule,
                            material.MatTabsModule,
                            material.MatToolbarModule,
                            material.MatTooltipModule
                        ],
                        exports: [
                            SukuBidTagComponent,
                            SukuCardLineComponent,
                            SukuDashboardProfileComponent,
                            SukuDefaultButtonComponent,
                            SukuHeadingComponent,
                            SukuHomeItalicHeadingComponent,
                            SukuHomeWidgetComponent,
                            SukuInfoButtonComponent,
                            SukuInlineDropdownComponent,
                            SukuMailWidgetComponent,
                            SukuMatchChipComponent,
                            SukuNotificationWidgetComponent,
                            SukuPrimaryButtonComponent,
                            SukuProgressBarComponent,
                            SukuSecondaryButtonComponent,
                            SukuSubHeadingComponent,
                            SukuLinkComponent,
                            SukuAddWidgetComponent,
                            SukuSelectInputComponent,
                            SukuNavSubmenuComponent,
                            SukuBidInfoComponent,
                            SukuPhoneWidgetComponent,
                            SukuAddressWidgetComponent,
                            SukuSearchInputComponent,
                            SukuProfileWidgetComponent,
                            SukuStarBadgeComponent,
                            SukuTrackProgressBarComponent,
                            SukuProductTraceWidgetComponent,
                            SukuFiltersComponent,
                            SukuTreeComponent,
                            SukuRatingStarComponent,
                            SukuCardTitleComponent,
                            SukuShippingWidgetComponent,
                            SukuResponseComponent,
                            SukuACHSettingsComponent,
                            SukuTransactionHistoryComponent,
                            router.RouterModule,
                            SukuFundingSourceComponent,
                            SukuCreateCustomerComponent,
                            SukuBeneficialOwnerComponent,
                            SukuDwollaFundingAgreementComponent,
                            SukuDwollaFundingSourceComponent,
                            SukuCreationCustomerFileuploadComponent,
                            SukuPaymentPortalHelpComponent,
                            SukuTermsAndConditionsComponent,
                        ]
                    },] }
        ];
        return SukuWebcomponentsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.SukuWebcomponentsService = SukuWebcomponentsService;
    exports.SukuWebcomponentsModule = SukuWebcomponentsModule;
    exports.ɵbi = SukuACHSettingsComponent;
    exports.ɵr = SukuAddWidgetComponent;
    exports.ɵw = SukuAddressWidgetComponent;
    exports.ɵbm = SukuBeneficialOwnerComponent;
    exports.ɵu = SukuBidInfoComponent;
    exports.ɵa = SukuBidTagComponent;
    exports.ɵb = SukuCardLineComponent;
    exports.ɵbe = SukuCardTitleComponent;
    exports.ɵbl = SukuCreateCustomerComponent;
    exports.ɵbp = SukuCreationCustomerFileuploadComponent;
    exports.ɵc = SukuDashboardProfileComponent;
    exports.ɵd = SukuDefaultButtonComponent;
    exports.ɵbn = SukuDwollaFundingAgreementComponent;
    exports.ɵbo = SukuDwollaFundingSourceComponent;
    exports.ɵba = SukuFiltersComponent;
    exports.ɵbk = SukuFundingSourceComponent;
    exports.ɵe = SukuHeadingComponent;
    exports.ɵf = SukuHomeItalicHeadingComponent;
    exports.ɵg = SukuHomeWidgetComponent;
    exports.ɵh = SukuInfoButtonComponent;
    exports.ɵi = SukuInlineDropdownComponent;
    exports.ɵq = SukuLinkComponent;
    exports.ɵj = SukuMailWidgetComponent;
    exports.ɵk = SukuMatchChipComponent;
    exports.ɵt = SukuNavSubmenuComponent;
    exports.ɵl = SukuNotificationWidgetComponent;
    exports.ɵbq = SukuPaymentPortalHelpComponent;
    exports.ɵv = SukuPhoneWidgetComponent;
    exports.ɵm = SukuPrimaryButtonComponent;
    exports.ɵbc = SukuProductTraceWidgetComponent;
    exports.ɵy = SukuProfileWidgetComponent;
    exports.ɵn = SukuProgressBarComponent;
    exports.ɵbf = SukuRatingStarComponent;
    exports.ɵbh = SukuResponseComponent;
    exports.ɵx = SukuSearchInputComponent;
    exports.ɵo = SukuSecondaryButtonComponent;
    exports.ɵs = SukuSelectInputComponent;
    exports.ɵbg = SukuShippingWidgetComponent;
    exports.ɵz = SukuStarBadgeComponent;
    exports.ɵp = SukuSubHeadingComponent;
    exports.ɵbr = SukuTermsAndConditionsComponent;
    exports.ɵbb = SukuTrackProgressBarComponent;
    exports.ɵbj = SukuTransactionHistoryComponent;
    exports.ɵbd = SukuTreeComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=suku-webcomponents.umd.js.map