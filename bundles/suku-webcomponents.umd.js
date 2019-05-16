(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/router'), require('d3'), require('@angular/material'), require('@angular/forms'), require('ngx-countdown-timer'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('suku-webcomponents', ['exports', '@angular/common', '@angular/router', 'd3', '@angular/material', '@angular/forms', 'ngx-countdown-timer', '@angular/core'], factory) :
    (factory((global['suku-webcomponents'] = {}),global.ng.common,global.ng.router,global.d3,global.ng.material,global.ng.forms,global.ngxCountdownTimer,global.ng.core));
}(this, (function (exports,common,router,d3,material,forms,ngxCountdownTimer,i0) { 'use strict';

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
            this.lowerText = 'Please setup your ACH payment profile below';
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
            { type: i0.Component, args: [{
                        selector: 'suku-ach-setting',
                        template: "<div class=\"col poppinsFont p-0\">\n  <div class=\"col-sm-12 text-center\">\n    <span class=\"font20\" id=\"{{titleId}}\">{{title}}</span>\n  </div>\n  <div class=\"col-sm-12 mt-4\">\n    <div class=\"form-group col-xs-12 col Rectangle-2 p-3\">\n      <div class=\"col-sm-12 text-center encode-font\">\n        <div class=\"col\">\n          <span class=\"text-center subTitle\" id=\"{{subtitleId}}\"> {{subTitle}}</span>\n          <br>\n          <p class=\"text-center mt-2 mb-2 text-capitalize\" id=\"{{subContentId}}\">Payment profile status: <b\n              [ngClass]=\"{'statusVerified': subContent == 'verified', 'status': subContent !== 'verified'}\">{{subContent}}</b>\n          </p>\n          <p class=\"text-center mt-2 mb-2\" *ngIf=\"_beneficialOwnerStatus\" id=\"beneficial-owner-status\">Beneficial Owner\n            Status: <b class=\"statusUnverified\">Documentation Upload Needed</b>\n          </p>\n          <p class=\"text-center encode-font mb-2\" *ngIf=\"subContent == 'document'\">Note: Document verification may take\n            2-3 business days\n            to get verified.</p>\n        </div>\n      </div>\n      <div class=\"col-sm-12 text-center mt-2\">\n        <i> <span class=\"font12\" id=\"{{lowerTextId}}\">{{lowerText}} </span> </i>\n      </div>\n\n      <!-- customer status start -->\n      <div class=\"col pl-5 pr-5 pb-2 pt-2\" *ngIf=\"subContent == 'document'\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <p class=\"doclabel mt-4\" *ngIf=\"documentStatus?.length > 0\"><b>Document Status:</b></p>\n          </div>\n          <div class=\"col mt-3 mb-3 text-right pr-sm-4 mr-sm-1\" *ngIf=\"documentStatus?.length > 0\">\n            <!-- <button class=\"btn textBold\" id=\"upload\" (click)=\"action.emit()\">Upload Document</button> -->\n            <span class=\"secondary-btn c-pointer\">\n              <a class=\"secondary-btn c-pointer\" id=\"upload\" (click)=\"action.emit()\">\n                Upload Document\n              </a>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"col document pl-sm-4 mb-3\" *ngFor=\"let doc of documentStatus;let imageIndex = index;\">\n          <div class=\"row p-2\">\n            <div class=\"col\">\n              <p class=\"mb-0 pb-1\">Doc Type:</p>\n              <p class=\"mb-0\"><b>{{doc?.type}}</b></p>\n            </div>\n            <div class=\"col\">\n              <p class=\"mb-0 pb-1\">Status:</p>\n              <p class=\"mb-0\"><b>{{doc?.status}}</b></p>\n            </div>\n            <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\n            <div class=\"col\" *ngIf=\"doc?.failureReason\">\n              <p class=\"mb-0 pb-1\">Failure Reason:</p>\n              <p class=\"mb-0\"><b>{{doc?.failureReason}}</b></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col pb-4\" id=\"beneficialOwnerBlock\">\n        <div class=\"col\">\n          <p class=\"doclabel mt-4\" *ngIf=\"_beneficialOwnerStatus\"><b>Beneficial Owners:</b></p>\n        </div>\n        <!-- id=\"document\" *ngIf=\"subContent == 'document'\" -->\n        <div class=\"col pl-sm-4 mb-3\" *ngFor=\"let user of _beneficialOwnerStatus;let i = index;\">\n          <div class=\"col card-line mt-3 mb-4 c-pointer\" data-toggle=\"collapse\" [attr.data-target]=\"'#ownerBlock' + i\"\n            (click)=\"active(i)\">\n            <div class=\"row\">\n              <label class=\"m-2 pl-3 owner c-pointer\">\n                Beneficial Owner {{i+1}}\n              </label>\n              <label class=\"d-flex justify-content-end col pl-0 c-pointer\">\n                <span class=\"pt-3 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] != i}\">\n                  <i class=\"fa fa-arrow-circle-down icon\"></i>\n                </span>\n                <span class=\"pt-3 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] == i}\">\n                  <i class=\"fa fa-arrow-circle-up icon\"></i>\n                </span>\n              </label>\n            </div>\n          </div>\n          <div class=\"col collapse p-0\" [ngClass]=\"{'show': i == 0 }\" data-parent=\"#beneficialOwnerBlock\"\n            id=\"ownerBlock{{i}}\">\n            <div class=\"col\">\n              <!-- <p class=\"doclabel mt-4\" *ngIf=\"documentStatus\"><b>Document Status:</b></p> -->\n              <div class=\"row p-2\">\n                <div class=\"col\">\n                  <p class=\"mb-0 pb-1\">Beneficial Owner Name:</p>\n                  <p class=\"mb-0\"><b>{{user?.firstName}}</b></p>\n                </div>\n                <div class=\"col\">\n                  <p class=\"mb-0 pb-1\">Status:</p>\n                  <p class=\"mb-0\"><b>{{user?.verificationStatus}}</b></p>\n                </div>\n                <div class=\"col\" *ngIf=\"user?.verificationStatus == 'document'\">\n                  <div class=\"col d-flex justify-content-center mt-3 mb-3\">\n                    <button class=\"btn btn-info\" (click)=\"uploadDoc(user)\" id=\"uploadDocument\">Upload Document</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col pl-4 pr-4 pb-2 pt-1\" *ngIf=\"user?.verificationStatus == 'document'\">\n              <p class=\"doclabel mt-4\" *ngIf=\"user?.data?.length > 0 \"><b>Document Status:</b></p>\n              <div class=\"col document pl-sm-4 mb-3\" *ngFor=\"let doc of user?.data;let statusIndex = index;\">\n                <div class=\"row p-2\">\n                  <div class=\"col\">\n                    <p class=\"mb-0 pb-1\">Doc Type:</p>\n                    <p class=\"mb-0\"><b>{{getDocTypeString(doc?.type)}}</b></p>\n                  </div>\n                  <div class=\"col\">\n                    <p class=\"mb-0 pb-1\">Status:</p>\n                    <p class=\"mb-0\"><b>{{doc?.status}}</b></p>\n                  </div>\n                  <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\n                  <div class=\"col\" *ngIf=\"doc?.failureReason\">\n                    <p class=\"mb-0 pb-1\">Failure-Reason:</p>\n                    <p class=\"mb-0\"><b>{{getDocFailureString(doc?.failureReason)}}</b></p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12 mt-2 mb-4 text-center\" *ngIf=\"(subContent == 'not complete' ) || (subContent != 'verified' ) && (documentStatus?.length == 0 && (subContent == 'document'))\">\n        <button class=\" btn textBold\" id=\"{{paymentButtonId}}\"\n          (click)=\"action.emit()\">{{SetupACHPaymentsBtnText}}</button>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: [".redText{color:red;font-size:12px}.font12{font-size:12px}.textBold{font-weight:700}.Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.poppinsFont{font-family:Poppins}.btn{font-size:12px!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:balck}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#000;outline:0!important;box-shadow:none!important}.font20{font-size:25px}.subTitle{font-weight:700!important;font-family:Poppins,sans-serif!important}.statusUnverified{color:red;letter-spacing:.3px}.statusVerified{color:#99c002!important;letter-spacing:.3px}.docLabel{font-family:Poppins,sans-serif!important;letter-spacing:.1px}.document,.mat-chip.mat-standard-chip{background-color:#e0e0e059!important;color:rgba(0,0,0,.87)!important;border-radius:0!important;border-left:3px solid #a7bf2e!important;min-height:40px!important}#document p{font-size:1.5rem}@media screen and (max-width:575px){#document p{font-size:1.4rem}}.card-line{background-color:#fff;color:#2c2727;height:46px;border-radius:2px;letter-spacing:.5px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2);border-top:3px solid #bfd131c9}.display-2{font-size:6.2rem!important;line-height:1.5!important}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.upload-btn{color:#000;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.3rem;border-bottom:3px solid #a7bf2e}.secondary-btn{font-family:Poppins,sans-serif!important;font-size:14px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important;border-bottom:3.5px solid #a7bf2e}.secondary-btn:hover{cursor:pointer!important}.encode-font{font-family:'Encode Sans',sans-serif!important}"]
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
                this.heading = {
                    type: 'Type',
                    myAccount: 'My Account',
                    counterparty: 'Counterparty',
                    amount: 'Amount',
                    status: 'Status',
                    dateInitiated: 'Initiated On',
                    dateCreated: 'Completed On',
                    paymentManagement: 'Payment Management'
                };
            };
        SukuTransactionHistoryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-transaction-history',
                        template: "<div class=\"col fontPoppins d-flex p-0\">\n  <div class=\"form-group col-12 p-0\">\n    <div class=\"col-sm-12 text-center text-white historyWidget p-4 pt-2 pb-3\">\n      <p class=\"pop text-center mb-0\">{{transactionHistory | uppercase}}</p>\n    </div>\n    <div class=\"col-sm-12 table-responsive box-shadows mb-3 p-0\" id=\"transactionTable\">\n      <div class=\"col-sm-12 p-5\" *ngIf=\"!transactionDetails\">\n        <div class=\"col-sm-12 d-flex justify-content-center\">\n          <mat-spinner diameter=\"65\"></mat-spinner>\n        </div>\n        <div class=\"mt-4 pb-3 col-sm-12 text-center\">\n          <span id=\"loading\">Please wait...</span>\n        </div>\n      </div>\n      <table class=\"col-sm-12 table table-striped tableBg mb-0 pl-4 pr-5\" *ngIf=\"transactionDetails\"\n        id=\"transactionHisTable\" style=\"overflow-x:auto;\">\n        <thead>\n          <tr>\n            <th scope=\"col\" class=\"text-center\" id=\"{{typeId}}\">{{heading.type}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{myAccountId}}\">{{heading.myAccount}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{counterPartyId}}\">{{heading.counterparty}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{amountId}}\">{{heading.amount}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{statusId}}\">{{heading.status}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{dateCreatedId}}\">{{heading.dateInitiated}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{dateCreatedId}}\">{{heading.dateCreated}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{paymentManagementId}}\">{{heading.paymentManagement}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr id=\"{{transactionDetailsId}}\" *ngFor=\"let transaction of transactionDetails\">\n            <td scope=\"row\" class=\"text-left {{( (transaction?.type) == 'outgoing') ? 'outgoing' : 'incoming'}}\">\n              <span class=\"pl-4\">{{transaction?.type || 'Not available'}}</span></td>\n            <td scope=\"row\" class=\"text-left\"><span class=\"pl-4\">{{transaction?.accountName || 'Not available'}}</span>\n            </td>\n            <td scope=\"row\" class=\"text-left\"><span class=\"pl-4\">{{transaction?.counterParty || 'Not available'}}</span>\n            </td>\n            <td scope=\"row\" class=\"text-left\"><span class=\"pl-4\">${{transaction?.amount || 'Not available'}}</span></td>\n            <td scope=\"row\" class=\"text-left {{( (transaction.status) == 'Failed') ? 'falied' : 'incoming'}}\">\n              <span class=\"pl-4\">{{transaction?.status || 'Not available'}}</span></td>\n            <td scope=\"row\" class=\"text-left\"><span\n                class=\"pl-4\">{{transaction?.created | date:'d MMM yyyy h:mm:s a'  || 'Not available'}}</span>\n            </td>\n            <td scope=\"row\" class=\"text-left\"><span class=\"pl-4\">\n                {{(transaction?.completedOn | date:'d MMM yyyy h:mm:s a') || 'Not available'}}</span>\n            </td>\n            <td class=\"text-center\"><button id=\"{{cancelId}}\" *ngIf=\"transaction?.status=='pending'\"\n                (click)=\"action.emit(transaction);\" class=\"btn  btnCancel\">{{cancel}}</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>",
                        styles: [".cancelText{font-size:12px;color:red}.outgoing{color:#af0a0a}.incoming{color:#000}.falied{color:red}.defaultDiv{background-color:#d8fc40;border-radius:30px}.dangerBtn{background-color:#f13030;color:#fff}.bankDiv{background-color:#f0f4f5;border-radius:30px;border:1px solid gray}.mT-35{margin-top:18%}#transactionTable{max-height:287px;overflow-x:auto;overflow-y:auto}#transactionHisTable{white-space:nowrap}.fontPoppins{font-family:Poppins,sans-serif!important}.btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.375rem .75rem;font-size:10px;font-weight:700;font-family:Poppins,sans-serif!important}.btnCancel{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:red;padding:.475rem 2.95rem;font-size:10px;font-weight:700;font-family:Poppins,sans-serif!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{outline:0!important;box-shadow:none!important;color:#000}.tableBg{background-color:#fff}.pT-5{padding-top:2%}.historyWidget{background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:#fff}.pop{font-family:Poppins,sans-serif!important;font-weight:600;font-size:20px}.table{font-family:Poppins,sans-serif!important}td{border:none}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.03)}::-webkit-scrollbar{width:3px;height:3px}::-webkit-scrollbar:vertical{width:3px!important}::-webkit-scrollbar-track{-webkit-box-shadow:inset 10px 5px 6px #27272f36;border-radius:10px;box-shadow:inset 10px 5px 6px #27272f36}::-webkit-scrollbar-thumb{border-radius:32px;box-shadow:0 0 0 #000;-webkit-box-shadow:inset 28px 28px 28px 28px #2b30348f}"]
                    }] }
        ];
        /** @nocollapse */
        SukuTransactionHistoryComponent.ctorParameters = function () { return []; };
        SukuTransactionHistoryComponent.propDecorators = {
            transactionHistory: [{ type: i0.Input }],
            transactionDetailsId: [{ type: i0.Input }],
            transactionDetails: [{ type: i0.Input }],
            heading: [{ type: i0.Input }],
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
            this.iconClass = 'icon';
            this.fundingSourceLabel = {
                labelOne: 'Funding Sources',
                labelOneId: 'fundingSources',
                labelTwo: 'Default Funding Sources:',
                labelTwoId: 'defaultFundingSources:',
                labelThree: 'Current Funding Sources',
                labelThreeId: 'currentFundingSources',
                labelFour: 'No Funding Source Added!',
                labelFourId: 'noFundingSourceAdded!',
                labelFive: 'Default',
                labelFiveId: 'Default'
            };
            this.fundingSourceWidgetLabel = {
                labelOne: 'ACH Wallet',
                labelOneId: 'ACHWallet',
                labelTwo: 'Balance:',
                labelTwoId: 'Balance:'
            };
            this.fundingSourceWidgetButtonLabel = {
                labelOne: 'Remove',
                labelOneId: 'Remove',
                labelTwo: 'Make Default:',
                labelTwoId: 'Make Default:',
                labelThree: 'Transfer Balance',
                labelThreeId: 'Make Default:'
            };
            this.contentOne = '';
            /* output--actions */
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
            function () { };
        SukuFundingSourceComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-funding-source',
                        template: "<div class=\"d-flex col pt-5 p-0\">\r\n  <div class=\"col-sm-12 p-0\">\r\n    <!-- loader -start -->\r\n    <div class=\"col d-flex Rectangle-2 pt-5 mt-lg-4 mb-3\" *ngIf=\"!(fundingDetails?.length > 0)\">\r\n      <div class=\"col-sm-12 p-3\">\r\n        <div class=\"col-sm-12 d-flex justify-content-center\">\r\n          <mat-spinner diameter=\"55\"></mat-spinner>\r\n        </div>\r\n        <div class=\"mt-4 pb-3 col-sm-12 text-center\">\r\n          <span id=\"loading\">Please wait...</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- loader -end -->\r\n    <!-- fs-header-start -->\r\n    <div class=\"col-sm-12 pt-2 pb-2 funding-box-widget p-0\" *ngIf=\"(fundingDetails?.length > 0)\">\r\n      <div class=\"col-sm-12 pt-3 pb-3\">\r\n        <div class=\"col\">\r\n          <div class=\"col-sm-12\">\r\n            <h1 class=\"title\">{{fundingSourceLabel?.labelOne}}<span class=\"pl-3 c-pointer\"\r\n                id=\"{{fundingSourceLabel?.labelOneId}}\" (click)=\"addSource.emit()\">\r\n                <img src=\"../assets/images/plus_circle.png\" [class]=\"iconClass\" class=\"icon\" width=\"25px\" height=\"25px\"\r\n                  alt=\"plus-icon\">\r\n              </span>\r\n            </h1>\r\n          </div>\r\n          <div class=\"col-sm-12\">\r\n            <h2>{{fundingSourceLabel?.labelTwo}}<span class=\"pl-lg-2 pop-light\"\r\n                id=\"{{fundingSourceLabel?.labelTwoId}}\">{{contentOne || 'N/A'}}</span></h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- fs-header-end -->\r\n    <div class=\"col-sm-12 box-shadows d-flex p-0\" *ngIf=\"(fundingDetails?.length > 0)\">\r\n      <div class=\"row flex\">\r\n        <div class=\"col\">\r\n          <div class=\"col-sm-12 pt-4 pl-lg-5 pr-lg-0 pb-2\">\r\n            <p class=\"sub-title pt-3 pl-5\" [style.font-weight]=\"700\" *ngIf=\"contentOne\"\r\n              id=\"{{fundingSourceLabel?.labelThreeId}}\">\r\n              {{fundingSourceLabel?.labelThree}}\r\n            </p>\r\n            <p class=\"sub-title pt-3 pl-5\" [style.font-weight]=\"700\" *ngIf=\"!contentOne\"\r\n              id=\"{{fundingSourceLabel?.labelFourId}}\">\r\n              {{fundingSourceLabel?.labelFour}}\r\n            </p>\r\n          </div>\r\n          <div class=\"col-sm-12 pl-lg-5 pr-lg-5 pb-5\">\r\n            <div class=\"col\">\r\n              <div class=\"col-sm-12 pl-lg-5 pr-lg-5\">\r\n                <div class=\"col-lg-4 col-sm-12 pt-4 pl-lg-0 pr-lg-0\" *ngIf=\"contentOne\">\r\n                  <p class=\"pop f16 text-center mb-0\" id=\"{{fundingSourceLabel?.labelFiveId}}\">\r\n                    {{fundingSourceLabel?.labelFive}}\r\n                  </p>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <!-- funding-source-widget -->\r\n                  <div class=\"col-sm-12 col-lg-4 pl-lg-5 pr-lg-3 pb-3 pt-3 p-xs-0 mb-4 custom-width\"\r\n                    *ngFor=\"let item of fundingDetails; let in = index;\">\r\n                    <div class=\"col pr-lg-0 pl-lg-1 p-xs-0\">\r\n                      <div class=\"card pl-3\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"col-sm-12\">\r\n                            <p class=\"text-white mb-1 source-title\" *ngIf=\"!item?.balance\">{{item?.name || 'N/A'}}</p>\r\n                            <p class=\"text-white mb-1 source-title\" *ngIf=\"item?.balance\">\r\n                              {{fundingSourceWidgetLabel?.labelOne}}</p>\r\n                            <p class=\"text-white content-font\" *ngIf=\"!item?.balance\">\r\n                              XXXXXX{{ (item?.id) ? (item.id | slice:-4) : 'N/A'}}\r\n                            </p>\r\n                            <p class=\"text-white\" *ngIf=\"item?.balance\"><span\r\n                                class=\"pop f16\">{{fundingSourceWidgetLabel?.labelTwo}}</span>\r\n                              <span class=\"content-font\"> ${{item?.balance}}</span></p>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                          <!-- remove-fs-action -->\r\n                          <div class=\"col pl-5 pr-5 pb-3\" *ngIf=\"item?.defaultAccount\">\r\n                            <button type=\"button\" class=\"btn-lg btn-block btn-default\"\r\n                              (click)=\"removeSourceAction.emit(item);\"\r\n                              id=\"{{fundingSourceWidgetButtonLabel?.labelOneId}}\">{{fundingSourceWidgetButtonLabel?.labelOne}}</button>\r\n                          </div>\r\n                          <!-- default-fs-action -->\r\n                          <div class=\"col pl-5 pr-5 pb-3\" *ngIf=\"!item?.defaultAccount && !item?.balance\">\r\n                            <button type=\"button\" class=\"btn-lg btn-block btn-default\"\r\n                              (click)=\"makeDefaultAction.emit(item);\"\r\n                              id=\"{{fundingSourceWidgetButtonLabel?.labelTwoId}}\">{{fundingSourceWidgetButtonLabel?.labelTwo}}</button>\r\n                          </div>\r\n                          <!-- transfer-balance-action -->\r\n                          <div class=\"col pl-5 pr-5 pb-3\" *ngIf=\"item?.balance\">\r\n                            <button type=\"button\" class=\"btn-lg btn-block\"\r\n                              [ngClass]=\"{'btn-default': item?.defaultAccount, 'btn': !item?.defaultAccount}\"\r\n                              (click)=\"transferFundAction.emit();\"\r\n                              id=\"{{fundingSourceWidgetButtonLabel?.labelThreeId}}\">{{fundingSourceWidgetButtonLabel?.labelThree}}</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- fs-widget-end -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);.title{color:#fafaf8;font-size:28px;font-family:Poppins,sans-serif!important;font-weight:200!important}.funding-box-widget{width:100%;float:left;background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}.card-body{padding:0}.card{background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:20px 5px 0 15px;margin:0;color:#fff;height:160px}.card::after{background:linear-gradient(to right,rgba(255,255,255,0) 0,rgba(255,255,255,0) 77%,rgba(255,255,255,0) 92%,rgba(255,255,255,0) 100%);left:50px}.card-footer{padding:.2rem 1.25rem;background-color:#2f2e2e!important;border-top:none!important}.icon:hover{vertical-align:middle;border-style:none;width:26px;box-shadow:2px 2px 5px 0 rgba(0,0,0,.25);box-shadow:2px 2px 5px 0 #000;border-radius:27px;height:26px}h1{color:#fafaf8;font-size:24px;font-family:Poppins,sans-serif!important;font-weight:200!important}h2{color:#ccc;font-size:15px;font-family:Poppins,sans-serif!important;font-weight:600;letter-spacing:.15px}.source-title{font-family:Poppins,sans-serif!important;font-weight:700;font-size:15px!important}.pop-light{font-family:Poppins,sans-serif!important;font-weight:200!important;font-size:16px}.c-pointer{cursor:pointer;text-transform:capitalize}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:#fff}.pop{font-family:Poppins,sans-serif!important;font-weight:800}.sub-title{font-family:Poppins,sans-serif!important;font-weight:700;font-size:22px!important}.flex{margin-left:0;flex:0 0 100%;max-width:100%}.f16{font-size:16px}.content-font{font-family:Poppins,sans-serif!important;font-weight:200!important}.btn-default{border:1px solid #e9e9e900;border-radius:28px 76px 63px;background-color:#e9e9e9bd;color:#000;padding:.675rem .75rem;font-size:12px;font-family:Poppins,sans-serif!important;font-weight:700}.btn-default:hover{border-radius:28px 76px 63px;padding:.675rem .75rem;font-size:12px;font-family:Poppins,sans-serif!important;font-weight:700;color:#fff}.btn{border:1px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;padding:.675rem .75rem;font-size:12px;font-family:Poppins,sans-serif!important;font-weight:600}.btn:hover{border:1px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#2f2e2e}.btn:focus{border:1px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#000}.icon-size{font-size:74px!important;color:#a6bf2e}@media only screen and (max-width:768px){.content-font,.source-title{font-size:14px!important}.sub-title{font-size:18px!important}}@media only screen and (max-width:568px){.pl-xs-0{padding-left:0!important}.pr-xs-0{padding-right:0!important}.p-xs-0{padding:0!important}}@media only screen and (max-width:1100px){.custom-width{max-width:100%!important;flex:0 0 50%}}@media only screen and (max-width:992px){.custom-width{flex:0 0 100%;max-width:100%}}"]
                    }] }
        ];
        /** @nocollapse */
        SukuFundingSourceComponent.ctorParameters = function () { return []; };
        SukuFundingSourceComponent.propDecorators = {
            fundingDetails: [{ type: i0.Input }],
            iconClass: [{ type: i0.Input }],
            fundingSourceLabel: [{ type: i0.Input }],
            fundingSourceWidgetLabel: [{ type: i0.Input }],
            fundingSourceWidgetButtonLabel: [{ type: i0.Input }],
            contentOne: [{ type: i0.Input }],
            labelOneId: [{ type: i0.Input }],
            labelOneSize: [{ type: i0.Input }],
            labelOneColor: [{ type: i0.Input }],
            labelOneWeight: [{ type: i0.Input }],
            labelOneCustomClass: [{ type: i0.Input }],
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
                        template: "<h1 [style.font-size.px]=\"size\" [class]=\"customClass\" [style.font-weight]=\"weight\" [style.color]=\"color\" id=\"{{id}}\">\n  <ng-content></ng-content>\n</h1>",
                        encapsulation: i0.ViewEncapsulation.ShadowDom,
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);h1{font-family:Poppins,sans-serif!important;font-size:20px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-all!important}"]
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
                        template: "<h2 [style.font-size.px]=\"size\" [class]=\"customClass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\n  <ng-content></ng-content>\n</h2>\n",
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
                        template: "`<div class=\"col-sm-12 ptl30\">\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n      <img src=\"{{image}}\" class=\"rounded-circle image\" alt=\"profile\" width=\"150\"\n        height=\"150\">\n    </div>\n    <div class=\"col-sm-7 pLR60\">\n\t\t\t <h1 [style.font-size.px]=\"nameSize\" [class]=\"nameCustomClass\" [style.font-weight]=\"nameWeight\" [style.color]=\"nameColor\" id=\"{{id}}\">\n      {{userName}}\n      </h1>\n\t\t\t<h2 [style.font-size.px]=\"accountSize\" [class]=\"accountCustomClass\" id=\"{{id}}\" [style.font-weight]=\"accountWeight\" [style.color]=\"accountColor\">\n\t\t\t{{accountType}}\n\t\t </h2>\n     <span (change)=\"rating.emit(ratingValue)\">\n      <div [innerHTML]=\"myHTML\" [class]=\"customClass\" ratingValue=\"\"></div>\n      </span>\n\t\t\t<h2 [style.font-size.px]=\"accountSize\" [class]=\"rDustomClass\" id=\"{{id}}\" [style.font-weight]=\"ratingWeight\" [style.color]=\"rateColor\">\n\t\t\t{{rateDetails}}\n\t\t </h2>\n    </div>\n  </div>\n</div>`\n",
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
            this.customclass = 'col box pointer text-center';
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
                        template: "<div [class]=\"customclass\">\n  <div class=\"col pointer text-center p-0\">\n    <div class=\"pt-4\">\n      <span class=\"box-counter\">\n        {{ notificationValue > 9 ? ' ' :\n        '0'}}{{ notificationValue === 0 ? 0 :\n        ''}}{{notificationValue}}\n      </span>\n      <p class=\"pb-3 n-m mb-0\">\n        <a class=\"box-title\" id=\"{{id}}\">\n          {{notificationTitle || 'review bids' }}\n        </a>\n      </p>\n    </div>\n  </div>\n</div>",
                        styles: [".box{border-radius:2px;background-color:#fff;box-shadow:0 3px 3px 0 rgba(0,0,0,.03);border-left:1px solid #dee2e68a!important;border-bottom:1px solid #dee2e68a!important}.box-title{font-family:Poppins,sans-serif;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#1d1d1d;word-break:break-word!important}.box-counter{font-family:Poppins,sans-serif;font-size:50px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.6px;text-align:center;color:#a7bf2e}.default{width:300px}.n-m{margin-top:-15px}@media (min-width:575.98px){.box{height:145px!important}}@media (min-width:767.98px){.box{height:175px!important}}@media (min-width:991.98px){.box{height:180px!important}}@media (min-width:1199.98px){.box{height:150px!important}}"]
                    }] }
        ];
        /** @nocollapse */
        SukuNotificationWidgetComponent.ctorParameters = function () { return []; };
        SukuNotificationWidgetComponent.propDecorators = {
            id: [{ type: i0.Input }],
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
            this.color = '#0f0f0f';
            this.weight = '500';
            this.customClass = 'pt-2 pl-3';
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
                        template: "<span class=\"row pb-4\">\n  <img [src]=\"image\">\n\t<h2 [style.font-size.px]=\"size\" [class]=\"customClass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\n  {{name}}\n  </h2>\n  </span>\n",
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
                        template: "<span class=\"row\">\n  <span class=\"m-2 mr-3\">\n    <h1 [style.font-size.px]=\"bidSize\" [class]=\"bidCustomClass\" [style.font-weight]=\"bidWeight\" [style.color]=\"bidColor\"\n      id=\"{{id}}\">\n      {{bids}}\n    </h1>\n    <h2 [style.font-size.px]=\"bidHeadingSize\" [class]=\"bidHeadingCustomClass\" id=\"{{id}}\" [style.font-weight]=\"bidHeadingWeight\"\n      [style.color]=\"bidHeadingColor\">\n      {{bidHeading}}\n    </h2>\n  </span>\n  <span class=\"m-2 mr-3\">\n    <h1 [style.font-size.px]=\"percentSize\" [class]=\"percentcustomClass\" [style.font-weight]=\"percentWeight\"\n      [style.color]=\"percentColor\" id=\"{{id}}\">\n      {{percent}}\n    </h1>\n    <h2 [style.font-size.px]=\"percentHeadingSize\" [class]=\"percentageHeadingcustomClass\" id=\"{{id}}\"\n      [style.font-weight]=\"percentHeadingWeight\" [style.color]=\"percentHeadingColor\">\n      {{percentHeading}}\n    </h2>\n  </span>\n</span>",
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
            this.imgId = 'img-id';
            this.match = new i0.EventEmitter();
            this.userAction = new i0.EventEmitter();
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
            this.prizeCustomClass = 'mb-0 pt-2';
            this.date = 'LISTING EXPIRATION DATE';
            this.dateSize = '12';
            this.dateWeight = '500';
            this.dateColor = '#b6b6b6';
            this.dateCustomClass = '';
            this.dateV = '28 Nov 2018';
            this.dateVSize = '14';
            this.dateVWeight = '500';
            this.dateVColor = '#3e3e3e';
            this.dateVCustomClass = '';
            this.sell = 'SOLD BY';
            this.sellSize = '12';
            this.sellWeight = '500';
            this.sellColor = '#b6b6b6';
            this.sellCustomClass = '';
            this.sellV = 'John Smith';
            this.sellVSize = '14';
            this.sellVWeight = '500';
            this.sellVColor = '#3e3e3e';
            this.sellVCustomClass = 'c-pointer';
            this.id = 'suku-match-chip';
            this.sellerid = '0';
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
                        template: "<div [class]=\"customclass\">\r\n  <div class=\"col p-0\">\r\n    <div class=\"col-sm-12 p-0 bg-white text-center col-xs-12 match-chip-shadow rounded-0\">\r\n      <a id=\"match-chip\">\r\n        <img (click)=\"match.emit()\" src=\"{{image}}\" id=\"listImg{{imgId}}\" class=\"m-1 p-2 pt-3 pb-3 c-pointer\"\r\n          width=\"90%\" height=\"120px\" alt=\"Image\" />\r\n      </a>\r\n      <br>\r\n      <div class=\"col-sm-12 p-0 pl-3 pr-3 border-top-box pt-4 text-center \">\r\n        <h2 [style.font-size.px]=\"listNameSize\" [class]=\"listCustomClass\" id=\"{{id}}\" [style.font-weight]=\"listWeight\"\r\n          [style.color]=\"listColor\">\r\n          {{listName}}\r\n        </h2>\r\n        <h2 [style.font-size.px]=\"prizeSize\" [class]=\"prizeCustomClass\" id=\"{{id}}\" [style.font-weight]=\"prizeWeight\"\r\n          [style.color]=\"prizeColor\">\r\n          {{prize}}\r\n        </h2>\r\n        <div class=\"pt-4\">\r\n          <h2 [style.font-size.px]=\"dateSize\" [class]=\"dateCustomClass\" id=\"{{id}}\" [style.font-weight]=\"dateWeight\"\r\n            [style.color]=\"dateColor\">\r\n            {{date}}\r\n          </h2>\r\n          <h2 [style.font-size.px]=\"dateVSize\" [class]=\"dateVCustomClass\" id=\"{{id}}\" [style.font-weight]=\"dateVWeight\"\r\n            [style.color]=\"dateVColor\">\r\n            {{dateV}}\r\n          </h2>\r\n        </div>\r\n        <div class=\"pt-3 pb-3\">\r\n          <h2 [style.font-size.px]=\"sellSize\" [class]=\"sellCustomClass\" id=\"{{id}}\" [style.font-weight]=\"sellWeight\"\r\n            [style.color]=\"sellColor\">\r\n            {{sell}}\r\n          </h2>\r\n          <h2 (click)=\"userAction.emit()\" [style.font-size.px]=\"sellVSize\" [class]=\"sellVCustomClass\"\r\n            id=\"sellerName{{sellerid}}\" [style.font-weight]=\"sellVWeight\" [style.color]=\"sellVColor\">\r\n            {{sellV}}\r\n          </h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                        styles: [".border-top-box{border-top:1px solid #dee2e670!important}.match-chip-shadow{box-shadow:0 2px 4px 0 rgba(0,0,0,.05);height:340px}.default{width:200px}h2{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;word-break:break-word!important;margin-bottom:0!important}.c-pointer{cursor:pointer!important}.c-pointer:hover{font-weight:900!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuMatchChipComponent.ctorParameters = function () { return []; };
        SukuMatchChipComponent.propDecorators = {
            image: [{ type: i0.Input }],
            imgId: [{ type: i0.Input }],
            match: [{ type: i0.Output }],
            userAction: [{ type: i0.Output }],
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
            id: [{ type: i0.Input }],
            sellerid: [{ type: i0.Input }]
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
                        template: "<div class=\"col p-0\">\n  <div class=\"row card-line-bg p-3 m-3 c-pointer\" [style.background-color]=\"bgColor\">\n    <div [class]=\"imageColSize\">\n      <img [class]=\"customclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\n    </div>\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus=='read'\">\n      <img [class]=\"customIconclass\" src=\"{{chatReadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\n    </div>\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus=='unRead'\">\n      <img [class]=\"customIconclass\" src=\"{{chatUnreadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\n    </div>\n    <div [class]=\"txtcolsize\">\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\"  [style.font-weight]=\"titleOneWeight\"\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\"  [style.font-weight]=\"contentOneWeight\" [style.color]=\"contentOneColor\">{{contentOne}}</h2>\n    </div>\n    <div [class]=\"txttwocolsize\">\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"  [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\"  [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\n    </div>\n    <div [class]=\"txtthreecolsize\">\n        <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"  [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\n        <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"  [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\n      </div>\n  </div>\n</div>\n",
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
                        template: "<div class=\"profileBox\">\n  <div class=\"col-md-12 col-sm-12 text-center\">\n    <img class=\"circle mb-4 mt-4\" id=\"image\" src=\"{{image}}\" alt=\"PROFILE\">\n  </div>\n  <div class=\"col-md-12 col-sm-12 text-center\">\n    <label class=\"userName\">\n      {{ userName }}\n    </label>\n  </div>\n  <div class=\"b-line mt-3 mb-3\"></div>\n  <div class=\"col-sm-12 col-md-12\" id=\"newSellList\">\n    <div class=\"row pointer\">\n      <div class=\"p-4 col mb-1\">\n        <span (click)=\"createNewList.emit(1)\" class=\"c-pointer\">\n          <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\">\n          <span class=\"create-interest-listing c-pointer pl-3 pt-3\" >{{titleOne || 'CREATE\n            NEW LISTING'}} </span>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-12 pb-5\" id=\"newBuyInterest\">\n    <div class=\"row pointer\">\n      <div class=\"pl-4 pb-3 pr-4 pt-2 col mb-2\">\n        <span (click)=\"clearBuyInterestStorage.emit(1)\" class=\"c-pointer\">\n          <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\">\n          <span class=\"create-interest-listing c-pointer pl-3 pt-3 mB-170\">{{titleTwo\n            || 'CREATE NEW INTEREST'}}</span>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: [".circle{background-color:#f2f2f2;height:150px;width:150px;border-radius:100%}.profileBox{width:200px;height:487px;border-radius:0 0 30px 30px;background-color:#fff;box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.b-line{opacity:.09;border:1px solid #97979796}.userName{font-family:Poppins,sans-serif;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;text-transform:capitalize;word-break:break-all!important}.create-interest-listing{font-family:'Encode sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6;word-break:break-all!important}.default{width:170px;height:274px;box-shadow:0 2px 4px 0 rgba(0,0,0,.03);background-color:#fff}.c-pointer{cursor:pointer!important}"]
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
                        template: "<div class=\"header-main\">\n  <div class=\"sub-menu-bar navBarRes\" *ngIf=\"true\">\n    <div class=\"container\">\n      <div class=\"sub-menu\">\n        <nav>\n          <ul class=\"mt-2 pt-1\" id=\"subMenu\">\n            <li [ngClass]=\"{'active': selectedItem == item}\"\n              (click)=\"subMenuSelected($event, item);\" *ngFor=\"let item of subMenuList\" >\n              <a class=\"c-pointer\">{{ item.name }} {{item.path}}</a>\n            </li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n  </div>\n</div>\n",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.header-main .sub-menu-bar{width:100%;height:62px;float:left;background:#2b3034;position:relative}.header-main .sub-menu{float:left}.header-main .sub-menu nav{float:left;padding:0;margin:0}.header-main .sub-menu nav ul{height:47px;float:left;padding:0;margin:0}.header-main .sub-menu nav ul li{height:30px;float:left;font-family:Poppins,sans-serif!important;font-size:15px;color:rgba(255,255,255,.5);line-height:2px;letter-spacing:.01em;position:relative;padding:0;border-radius:15px 50px 50px;margin:0 10px 0 0}.header-main .sub-menu nav ul li:before{display:none}.header-main .sub-menu nav ul li a{height:30px;float:left;color:rgba(255,255,255,.5);text-decoration:none;position:relative;padding:22px 37px 20px;border-radius:28px 76px 63px;font-family:Poppins,sans-serif!important}.header-main .sub-menu nav ul li a:before{content:\"\";width:0;height:0;transition:.5s;background:0 0;border-radius:0;position:absolute;top:0;opacity:0}.header-main .sub-menu nav ul li a:after{content:\"\";width:0;height:0;transition:.5s;background:0 0;border-radius:15px 50px 50px;position:absolute;top:0;opacity:0}.header-main .sub-menu nav ul li.active a,.header-main .sub-menu nav ul li:hover a{color:#fff!important;background:#17181a!important}.header-main .sub-menu nav ul li.active a:after,.header-main .sub-menu nav ul li.active a:before,.header-main .sub-menu nav ul li:hover a:after,.header-main .sub-menu nav ul li:hover a:before{opacity:1;border-radius:15px 50px 50px}.sub-menu-style{background:#2b3034;color:#fff}ul#subMenu{list-style:none}.c-pointer{cursor:pointer}"]
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
                        template: "<h5 [style.font-size.px]=\"size\" [style.color]=\"color\" [class]=\"customClass\" [style.font-weight]=\"weight\">\n  <ng-content></ng-content>\n  </h5>\n",
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
                        template: "<span [style.font-size.px]=\"size\" [style.color]=\"color\" (click)=\"action.emit()\" [class]=\"customClass\"\n  [style.font-weight]=\"weight\">\n  <ng-content></ng-content>\n</span>\n",
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
                        template: "<a (click)=\"action.emit()\">\n  <span><img [src]=\"image\" width=\"33px\" height=\"33px\">\n    <span [style.font-size.px]=\"size\" [style.color]=\"color\" [class]=\"customclass\" [style.font-weight]=\"weight\">\n      <ng-content></ng-content>\n    </span>\n  </span>\n</a>\n",
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
            this.keyValue = 'value';
            this.displayKey = 'name';
            this.titleText = 'Sort by';
            this.placeHolder = 'Choose sort method';
            // @Input() imgheight = '18';
            // @Input() imgwidth = '20';
            // @Input() imgurl = '../assets/images/arrow-icon.png';
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
                        template: "<div class=\"form-group\">\n  <div class=\"select-out input-group\">\n    <label for=\"select\" id=\"sortBy\" class=\"sort-by col-sm-2 p-0 mt-3 mb-0 mr-3\">{{titleText}}</label>\n    <span [class]=\"customclass\">\n      <select class=\"optionsBox form-control fcontrol mt-1\" id=\"interestTwo\" name=\"sort\" #addRe (change)=\"sort.emit(addRe.value)\">\n        <option id=\"default\" value=\"default\" disabled>{{placeHolder}}</option>\n        <option *ngFor=\"let option of options;let i=index\" id=\"{{option[keyValue]}}\" value=\"{{option[keyValue]}}\">{{option[displayKey]}}</option>\n      </select>\n      <!-- <i class=\"fa fa-chevron-down\"></i> -->\n      <img class = \"image\" height=\"18\"  src=\"../assets/images/arrow-icon.png\" width=\"20\">\n    </span>\n  </div>\n</div>\n",
                        styles: [".sort-by{font-family:Poppins,sans-serif;font-size:15px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:#b6b6b6;text-transform:uppercase}.optionsBox{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#000;height:44px!important;text-transform:lowercase;border:1px solid rgba(151,151,151,.23);background-color:#fff}.optionsBox:focus{background-color:#fff!important}.default{width:281px}select+img.image{float:right;margin-top:-30px;margin-right:5px;pointer-events:none;background-color:#fff;padding-right:5px}select:focus{background-color:#fff!important}"]
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
            keyValue: [{ type: i0.Input }],
            displayKey: [{ type: i0.Input }],
            titleText: [{ type: i0.Input }],
            placeHolder: [{ type: i0.Input }],
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
                        template: "<span class=\"row\">\n  <img src=\"../../assets/images/phone-light.png\" height=\"20px\" class=\"mt-1\">\n  <h2 [style.font-size.px]=\"size\" [class]=\"customClass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\n    {{name}}\n  </h2>\n</span>",
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
                        template: "<span class=\"row\">\n  <img src=\"{{image}}\">\n  <h2 [style.font-size.px]=\"size\" [class]=\"customClass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\n    <ng-content></ng-content>\n  </h2>\n</span>",
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
                        template: "<span (click)=\"action.emit()\" [class]=\"customclass\">\n  <h2 [style.font-size.px]=\"size\" [class]=\"customcontentclass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\n    <ng-content></ng-content>\n  </h2>\n  <i class=\"fa fa-chevron-circle-down f17 c-pointer\" style=\"color:#a7bf2e\"></i>\n</span>",
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
                        template: "<div class=\"col widget\" [style.background-color]=\"bgColor\" [style.color]=\"color\" (click)=\"routerLink.emit()\">\n  <label class=\"pt-2 pb-2 c-pointer\" id=\"{{id}}\"><ng-content></ng-content></label>\n </div>\n",
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
                        template: "<div class=\"side-bar\" [formGroup]=\"form\">\n  <div class=\"filter-title\">\n    <a class=\"collapsed f30\" data-toggle=\"collapse\" href=\".collapse-filter\"></a>\n  </div>\n  <div class=\"collapse-filter collapse\" id=\"collapse-filter\">\n    <div class=\"box\">\n      <div class=\"filter-list\">\n        <h2 [style.font-size.px]=\"size\" class=\"unreadNotifications\">{{filterHeading}}</h2>\n        <div class=\"options pl-3\">\n          <div *ngFor=\"let status of statusTypesDynamic; let l = index\">\n            <mat-checkbox *ngIf=\"!status?.label\" color=\"primary\" [checked]=\"status.checked\" (change)=\"(status.checked = $event.checked); filterOnChange.emit($event);\">\n              {{status.displayName}}</mat-checkbox>\n            <div *ngIf=\"status?.label\" class=\"mat-checkbox-label pb-2\">\n              {{status.displayName}}\n            </div>\n            <!-- *ngIf=\"status.hasSub && status.checked\" -->\n            <div class=\"p-0\">\n              <div class=\"col-sm-12 pl-3\" *ngFor=\"let subStatus of status.sub; let sk = index\">\n                <mat-checkbox [checked]=\"subStatus.checked\" (change)=\"(subStatus.checked = $event.checked); filterOnChange.emit($event);\"\n                  color=\"primary\"> {{subStatus.displayName}}</mat-checkbox>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-3 mt-4 mb-1\">\n          <h3>{{filterSubHeading}}</h3>\n          <div class=\"pb-0 mt-3\">From</div>\n          <mat-form-field class=\"pt-0\">\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" id=\"fromDateMyPro\" formControlName=\"fromDate\"\n              name=\"fromDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n          <div class=\"mt-3 pb-0\">To</div>\n          <mat-form-field>\n            <input matInput formControlName=\"tillDate\" [matDatepicker]=\"picker1\" placeholder=\"Choose a date\" id=\"tillDateMyPro\"\n              name=\"tillDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n            <mat-datepicker #picker1></mat-datepicker>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"p-3 pb-4 pl-5 pr-5\">\n        <button type=\"button\" class=\" btn btn-info btn-lg btn-block\" (click)=\"applyFilter.emit()\">Apply Date Filters\n        </button>\n      </div>\n      <div class=\"filter-links\">\n        <p>\n          <a (click)=\"selectAll.emit();\">select all</a>\n          <a (click)=\"deselectAll.emit();\">clear all</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: [".side-bar{width:100%;float:left;padding:0 15px 0 0}.side-bar .filter-title{color:#c5af79}.side-bar .filter-title a{color:#b6b6b6;text-decoration:none}.side-bar .box{width:100%;float:left;background:#fff;box-shadow:rgba(0,0,0,.07) 0 10px 20px;border-radius:0 0 30px 30px;padding:25px 0 15px}.side-bar .box .filter-list{width:100%;float:left;padding:0 20px}.side-bar .box .filter-list:last-child{padding-bottom:0}.side-bar .box .filter-list h2{font-family:Poppins,sans-serif!important;font-size:15px!important;color:#b6b6b6;border-bottom:1px solid #ececec;padding:0 0 15px;margin:0 0 15px}.side-bar .box .filter-links{width:100%;float:left;border-top:1px solid #ececec;padding:10px 0 0 30px}.side-bar .box .filter-links p{font-family:'Encode Sans',sans-serif!important;font-size:14px;line-height:14px;text-transform:lowercase;padding:0}.side-bar .box .filter-links p a{color:#1d1d1d;text-decoration:underline;margin:0 15px 0 0}.side-bar .box .filter-links p a:hover{color:#02b3e3}.side-bar .box .add-btn{width:100%;float:left;padding:0 20px 20px}.side-bar .collapse{width:100%;float:left;margin:0;padding:0}@media (min-width:992px){.side-bar .filter-title a{pointer-events:none}.side-bar .collapse-filter{height:auto!important;display:block!important;overflow:visible!important;visibility:visible!important}}@media (max-width:991px){.side-bar{padding:0;margin:0 0 30px}.side-bar .filter-title{height:auto;line-height:normal;border-bottom:1px solid #ccc;padding:0 0 15px}.side-bar .filter-title a{width:100%;float:left;font-size:16px;text-transform:uppercase;text-decoration:none;position:relative;margin:0;padding:0}.side-bar .filter-title a:before{content:\"\\f056\";float:right;font-weight:300;font-size:20px;color:#c5af79;position:absolute;top:0;right:0}.side-bar .filter-title a.collapsed:before{content:\"\\f055\"}.side-bar .collapse-filter{width:100%;float:left;margin:0;padding:0}.mat-form-field{display:flow-root}.btn{font-size:10px!important;padding:5px!important}}.btn-p{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#343a40!important;color:#fff;font-family:'Encode Sans',sans-serif;font-weight:600;font-size:14px;padding:.75rem 2.1rem}.btn-p:hover{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#a7bf2e!important;color:#fff}.btn-p-p.disabled:hover{border:2px solid #a7bf2e!important;border-radius:10px 20px 15px;background-color:#fff;color:#1d1d1d}.zeplin_button{height:40px;color:#f2f2f2;border:2px solid #a7bf2e;background-color:#272727!important}.zeplin_button:hover{background-color:#a7bf2e!important}.zeplin_button1{height:40px;color:#f2f2f2!important;border:2px solid #757575a6!important;background-color:#272727!important}.btn_zep1:hover{background-color:#757575a6!important}.REVIEW-BIDS{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:300;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#fff}.btn-primary{border:2px solid #a7bf2e;border-radius:10px 20px 15px}.btn-primary:active,.btn-primary:hover{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#a7bf2e;color:#fff}.btn-primary.disabled{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#fff;color:grey}.btn-primary.disabled.focus,.btn-primary.disabled:focus,.btn-primary.disabled:hover,.btn-primary[disabled].focus,.btn-primary[disabled]:focus,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary.focus,fieldset[disabled] .btn-primary:focus,fieldset[disabled] .btn-primary:hover{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#fff!important;color:grey}.btn-primary.focus,.btn-primary:focus{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#a7bf2e;color:#fff}.btn-primary.active.focus,.btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active.focus,.btn-primary:active:focus,.btn-primary:active:hover,.open>.dropdown-toggle .btn-primary.focus,.open>.dropdown-toggle .btn-primary:focus,.open>.dropdown-toggle.btn-primary:hover{border:2px solid #a7bf2e;border-radius:10px 20px 15px;background-color:#a7bf2e;color:#fff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#a7bf2e;border-color:#a7bf2e}.btn-primary.focus,.btn-primary:focus,.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem #a7bf2e}.btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-family:'Encode Sans',sans-serif;font-weight:600;font-size:14px;padding:.55rem .85rem}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn.disabled:hover{border:2px solid #a7bf2e!important;border-radius:28px 76px 63px;background-color:#fff;color:#000}.btn-info{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff!important;color:grey}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#a7bf2e;border-color:#a7bf2e}.btn-info.focus,.btn-info:focus,.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem #a7bf2e}.default-btn{font-family:'Encode Sans',sans-serif;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#fff!important}.secondary-btn{font-family:'Encode Sans',sans-serif;font-size:14px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important;border-bottom:3.5px solid #a7bf2e}.clearAll{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:#1d1d1d;text-decoration:underline;text-transform:uppercase}/deep/.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0,0,.2,.1);border-width:0!important;border-style:solid;border-color:#757575a6}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none;border:1px solid #757575a6}.mat-checkbox-frame,/deep/.mat-checkbox-background{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none;border:1px solid #757575a6}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0,0,.2,.1);border-width:0!important;border-style:solid;border-color:#757575a6}/deep/.mat-checkbox-checked.mat-primary .mat-checkbox-background{background-color:#fff}/deep/.mat-checkbox-checkmark-path{stroke:#0f0f0f!important}/deep/.mat-checkbox-checked .mat-checkbox-layout .mat-checkbox-label{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:17px;letter-spacing:.2px;color:#000!important}/deep/.mat-checkbox-layout .mat-checkbox-label{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:17px;letter-spacing:.2px;color:#757575a6!important}.mat-checkbox-label{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:17px;letter-spacing:.2px}"]
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
            this.fontWeight = 400;
            this.trigger = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuInfoButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuInfoButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-info-button',
                        template: "<div class=\"col p-0\">\n  <button class=\"btn btn-info btn-lg btn-block\" [disabled]=\"disableValue\" [style.font-size.px]=\"size\" [style.font-weight]=\"fontWeight\" id=\"{{id}}\" (click)=\"trigger.emit()\">\n    <ng-content></ng-content>\n  </button>\n</div>",
                        styles: [".btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#3e3e3e;font-family:'Encode Sans',sans-serif;font-weight:600;font-size:14px;padding:.55rem .85rem}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn.disabled:hover{border:2px solid #a7bf2e!important;border-radius:28px 76px 63px;background-color:#fff;color:#3e3e3e}.btn-info{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#3e3e3e}.btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info:click{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e!important;color:#fff}.btn-info:active{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff!important;color:grey}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#a7bf2e;border-color:#a7bf2e}.btn-info.focus,.btn-info:focus,.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem #a7bf2e}"]
                    }] }
        ];
        /** @nocollapse */
        SukuInfoButtonComponent.ctorParameters = function () { return []; };
        SukuInfoButtonComponent.propDecorators = {
            name: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            fontWeight: [{ type: i0.Input }],
            disableValue: [{ type: i0.Input }],
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
                        template: "<button [class]=\"customClass\" id=\"{{id}}\" (click)=\"trigger.emit()\">\n  <ng-content></ng-content>\n </button>",
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
                        template: "<a class=\"secondary-btn c-pointer\" id=\"{{id}}\" [style.color]=\"color\" [style.font-size.px]=\"size\" (click)=\"trigger.emit()\">\n  <ng-content></ng-content>\n</a>\n",
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
                        template: "<a class=\"default-btn c-pointer\" id=\"{{id}}\" (click)=\"trigger.emit()\">\n  <ng-content></ng-content>\n </a>\n",
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
                        template: "<div class=\"star\">\n  <img src=\"../assets/images/star.svg\" alt=\"star-image\" height=\"37px\" id=\"star-image\">\n  <h2 class=\"star-txt text-center\" id=\"value\"><ng-content></ng-content></h2>\n\n </div>\n",
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
                        template: "<div id=\"search_container\" class=\"col-sm-3 p-0 d-flex\">\n  <input type=\"text\" id=\"search\" class=\"stretch\" value>\n  <img src=\"{{icon}}\" [class]=\"customClass\" width=\"6%\" height=\"7%\">\n </div>",
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
            this.unit = '/ UNIT';
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
            this.bidtagclass = 'col p-2 suku-big-tag pl-5';
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
                        template: "<div class=\"{{bidtagclass}}\">\n  <span class=\"row pr-1 pl-3\">\n\t\t<h1 [style.font-size.px]=\"prizeSize\" [class]=\"prizeCustomClass\" [style.font-weight]=\"prizeWeight\" [style.color]=\"prizeColor\" id=\"{{id}}\">\n  {{prize}}\n  </h1>\n\t<h2 [style.font-size.px]=\"unitSize\" [class]=\"unitCustomClass\" id=\"{{id}}\" [style.font-weight]=\"unitWeight\" [style.color]=\"unitColor\">\n  {{unit}}\n  </h2>\n  </span>\n  <span>\n\t\t<h1 [style.font-size.px]=\"qSize\" [class]=\"qCustomClass\" [style.font-weight]=\"qWeight\" [style.color]=\"qColor\" id=\"{{id}}\">\n\t\t{{qContent}}\n\t\t</h1>\n\t\t<h1 [style.font-size.px]=\"pSize\" [class]=\"pCustomClass\" [style.font-weight]=\"pWeight\" [style.color]=\"pColor\" id=\"{{id}}\">\n\t\t{{pContent}}\n\t\t</h1>\n  </span>\n</div>\n",
                        styles: [".suku-big-tag{background-color:#35393e;border-radius:0 40px 0 0;border-left:6px solid #a7bf2e}.suku-big-tag-org{background-color:#35393e;border-radius:0 40px 0 0;border-left:6px solid #000}h1{font-family:Poppins,sans-serif!important;font-size:16px;font-weight:400!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-all!important}h2{font-family:Poppins,sans-serif!important;font-size:16px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6!important;word-break:break-all!important}"]
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
            this.headingThree = 'SHOW TRACE TREE';
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
                        template: "<table class=\"col-sm-6 offset-sm-3\">\n  <tr class=\"pt-3\">\n    <td class=\"{{progressStyleOne}} text-center\">\n      <i *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleTwo}} text-center\">\n      <i *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n      <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleThree}} text-center\">\n      <i *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n      <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\n    </td>\n  </tr>\n</table>\n<table class=\"col-sm-8 offset-sm-2 text-center\">\n  <tr id=\"txt\">\n    <td class=\"{{customHeadingOneClass}} progressTitle pt-3\">\n      {{headingOne}}\n    </td>\n    <td class=\"{{customHeadingTwoClass}} progressTitle pt-3\">\n      {{headingTwo}}\n    </td>\n    <td class=\"{{customHeadingThreeClass}} progressTitle pt-3\">\n      {{headingThree}}\n    </td>\n  </tr>\n</table>\n",
                        styles: [".Progresscircle{width:50px;height:50px;color:#fff;background:#031103;border-radius:50%}.progressActive{width:50px!important;height:50px;color:#fff;background:#a7bf2e;border-radius:50%!important;font-family:Poppins,sans-serif}.progressUpcoming{width:50px!important;height:50px!important;color:#a8a6a6;background:#757575;border-radius:50%!important;font-family:Poppins,sans-serif}.PRODUCT-1{width:90px;height:24px;font-family:Poppins,sans-serif;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins,sans-serif}.progressTitle{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.progress-bar-active{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.circleP{background-color:gray;width:50px!important;height:50px!important;border-radius:50%!important}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:20%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.tracTraceTxtBold{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}"]
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
            this.tracetheProductId = '';
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
                        template: "<span [formGroup]=\"form\">\n  <div class=\" product-boxContent\">\n    <div class=\"col-sm-12 prizeHead pl-0\">\n      {{headName}}\n    </div>\n    <div class=\"col-sm-12 prizesubHead pl-0\">\n      {{subHeadName}}\n    </div>\n  </div>\n  <div class=\"col-sm-12 mt-2 pt-4 pb-4 RectangleBorder\">\n    <div class=\"col-sm-12 productName pb-1\">\n      {{name}}\n    </div>\n    <div class=\"col-sm-12 pb-2 pl-3 pt-2 p-0 searchBorderBox\">\n      <input type=\"text\" #search class=\"searchBorderStyles\" formControlName=\"{{control}}\" name=\"{{control}}\"\n      (keyup)=\"searchFun.emit(isSearch)\">\n      <span class=\"m-1\"><i class=\"fa fa-search\" style=\"font-size:22px;color:#b6b6b6;\"></i></span>\n    </div>\n    <p class=\"resultCount\" *ngIf=\"_result == 'true'\">{{productdetails?.length}} products found with the above number.\n    </p>\n    <div *ngIf=\"_visible == 'false'\">\n      <p class=\"responseInfo\" *ngIf=\"productdetails?.length > 0 ? true : false \">please select one</p>\n      <div class=\"heightTab\" id=\"scrollDiv\">\n        <div class=\"col\" *ngFor=\"let products of productdetails\">\n          <mat-radio-button class=\"searchData f13\" value=\"2\" (click)=\"selectproducts.emit(products)\"\n            (click)=\"showSelectedPro(products)\"> {{products?.asset?.description}}<br>\n            {{products?.asset?.name}}<br></mat-radio-button>\n          <hr>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 mb-2 text-center pt-3 mt-3 pb-1\">\n      <span class=\"pt-2\">\n        <a *ngIf=\"_visible == 'true'\" id=\"{{searchId}}\" class=\"trackBtn btn f14\" (click)=\"searchByProduct.emit()\">\n          Search for product </a>\n        <a *ngIf=\"_visible == 'false'\" [ngClass]=\"{'disabled': _disableBtn =='false' }\" id=\"{{tracetheProductId}}\" class=\"trackBtn btn f14\"\n          (click)=\"traceproduct.emit(1)\"> trace the\n          product </a>\n      </span>\n    </div>\n  </div>\n</span>",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: [".product-boxContent{width:100%;float:left;background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}.prizeHead{width:100%;float:left;font-size:15px;color:#e5e5e5;line-height:1em;margin:0 0 8px}.prizesubHead{width:100%;float:left;font-family:Poppins-Regular,sans-serif!important;font-size:15px;color:#e5e5e5;line-height:1em;margin:0 0 12px}.RectangleBorder{background-color:#fff;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);border-radius:0;margin-top:63px!important;padding-right:20px;padding-left:20px}.productName{color:#7f7e7e;font-size:13px}.searchBorderStyles{width:87%;border-width:0}.searchBorderBox{border:1px solid #b6b6b6;border-radius:12px 25.5px 25.5px;font-size:15px;margin-top:7px}.productCount{color:#b6b6b6;font-size:12px}.trackBtn{font-family:\"Encode Sans\",sans-serif;font-size:11px;padding:.55rem .99rem}.trackBtn:hover{color:#fff!important;background:#a7bf2e!important}.trackBtn.disabled:hover{color:#000!important;background:#fff}.pTB11{padding-bottom:8px;padding-top:10px}.searchData{word-break:normal;font-size:13px;color:#b6b6b6;font-family:Poppins,sans-serif!important}.resultCount{color:#898787;font-size:12px;padding-left:13px}.responseInfo{color:#b6b6b6;font-size:12px;padding-left:13px}.heightTab{max-height:230px;overflow-x:hidden}::-webkit-scrollbar-thumb{background:#a7bf2e;border-radius:60px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #a7bf2e;border-radius:60px}.searchData>label{white-space:pre-wrap!important;line-height:normal!important;white-space:pre-wrap}#scrollDiv::-webkit-scrollbar{width:6px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:60px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#a7bf2e!important}.mat-radio-button.mat-accent .mat-radio-inner-circle::before{font-family:\"Font Awesome 5 Free\",sans-serif!important;content:\"\\f058\"!important;display:inline-block!important;vertical-align:middle;font-weight:900;font-size:35px!important;color:#a7bf2e;margin:-7.6px 0 0 -8px!important}.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#fafafa!important}.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:#a7bf2e3a!important}"]
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
            tracetheProductId: [{ type: i0.Input }],
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
                        template: "<div id=\"tree\"></div>\n<!-- [ngClass]=\"{'treeRtl': relation == 0, 'treeltr': relation == 1}\" -->",
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
            this.fullStars = 0;
            this.fullStarsArray = [];
            this.halfStar = 0;
            this.emptyStars = 0;
            this.emptyStarsArray = [];
            this.action = new i0.EventEmitter();
        }
        Object.defineProperty(SukuRatingStarComponent.prototype, "ratingValue", {
            set: /**
             * @param {?} ratingValue
             * @return {?}
             */ function (ratingValue) {
                this.fullStars = Math.round(ratingValue);
                this.fullStarsArray = Array(this.fullStars).fill(1);
                this.halfStar = (this.fullStars < ratingValue) ? 1 : 0;
                this.emptyStars = 5 - this.fullStars - this.halfStar;
                this.emptyStarsArray = Array(this.emptyStars).fill(1);
            },
            enumerable: true,
            configurable: true
        });
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
                        template: "<span (change)=\"action.emit()\">\n  <div>\n    <span class=\"fa fa-star fullStar f22\" *ngFor=\"let star of fullStarsArray\"> </span>\n    <span class=\"fa fa-star-half halfStarLeft f22\" *ngIf=\"halfStar == 1\"> </span>\n    <span class=\"fa fa-star-half fa-flip-horizontal halfStarRight f22\" *ngIf=\"halfStar == 1\"> </span>\n    <span class=\"fa fa-star emptyStar f22\" *ngFor=\"let star of emptyStarsArray\"> </span>\n  </div>\n</span>",
                        styles: [".emptyStar{color:#e1e1e1;margin:4px}.fullStar{color:#898989;margin:4px}.halfStarLeft{color:#898989;position:relative;left:1px}.halfStarRight{color:#e1e1e1;position:relative;right:1px}"]
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
                        template: "<div class=\"product-title\">\n  <h1 [style.font-size.px]=\"cardTitlesize\" [class]=\"customclasstitle\" [style.color]=\"cardTitlecolor\" id=\"{{cardTitleId}}\">\n    {{cardTitleName}}\n  </h1>\n  <h2 [style.font-size.px]=\"cardContentsize\" [class]=\"customclassContent\" id=\"{{cardContentId}}\" [style.font-weight]=\"cardContentweight\"\n    [style.color]=\"cardContentcolor\">\n    {{cardContentName}}\n  </h2>\n</div>\n",
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
                        template: "<div class=\"col p-0\">\n  <div class=\"row card-line-bg p-3 m-3 c-pointer center\" [style.background-color]=\"bgColor\">\n    <div [class]=\"imageColSize\">\n      <img [class]=\"customclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\n    </div>\n      <div *ngIf=\"msgPaymentStatus=='Paid'\" class=\"padlf\">\n        <img [class]=\"customIconclass\" src=\"{{amountPaid}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\n      </div>\n      <div *ngIf=\"msgPaymentStatus=='unPaid'\" class=\"padlf\">\n        <img [class]=\"customIconclass\" src=\"{{amountUnPaid}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\n      </div>\n      <div *ngIf=\"msgShipmentStatus=='shipped'\">\n        <img [class]=\"customIconclass\" src=\"{{shippedIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\n      </div>\n      <div *ngIf=\"msgShipmentStatus=='unShipped'\">\n        <img [class]=\"customIconclass\" src=\"{{unShippedIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\n      </div>\n    <div [class]=\"txtcolsize\">\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\n    </div>\n    <div [class]=\"txttwocolsize\">\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\" [style.font-weight]=\"subTitleTwoWeight\"\n        [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\" [style.font-weight]=\"contentTwoWeight\"\n        [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\n    </div>\n    <div [class]=\"txtthreecolsize\">\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\" [style.font-weight]=\"subTitleThreeWeight\"\n        [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\" [style.font-weight]=\"contentThreeWeight\"\n        [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\n    </div>\n  </div>\n</div>",
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
            this.customClass = 'filterResult text-center col p-0';
            this.title = 'No results found';
            this.titleId = 'noResultsFound';
            this.titleSize = '26';
            this.titleColor = 'black';
            this.titleWeight = '300';
            this.description = 'Try changing your filter settings on the left to see a different set of results.';
            this.descriptionId = 'description';
            this.descriptionSize = '18';
            this.descriptionColor = '#979797';
            this.descriptionWeight = '400';
            this.bgColor = '';
        }
        SukuResponseComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-response',
                        template: "<div [class]=\"customClass\" [style.background-color]=\"bgColor\">\n  <div class=\"col-lg-5 p-0 col-sm-12 justify-content-center mx-auto\">\n    <p class=\"response-title\" id=\"{{titleId}}\" [style.font-size.px]=\"titleSize\" [style.color]=\"titleColor\"\n    [style.font-weight]=\"titleWeight\">{{title}}</p>\n    <img src=\"../../assets/images/no-data-search-icon.svg\" class=\"img-res mb-4 mt-4\" height=\"70px\" width=\"70px\"\n      alt=\"no-data-search-icon\">\n    <p class=\"text-justify text-center mx-auto description\" id=\"{{descriptionId}}\" [style.font-size.px]=\"descriptionSize\"\n      [style.color]=\"descriptionColor\" [style.font-weight]=\"descriptionWeight\">{{description}}</p>\n  </div>\n</div>",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.filterResult{margin-top:170px}.response-title{font-family:Poppins,sans-serif!important;font-weight:300}.description{font-family:Poppins,sans-serif!important;color:#979797;width:350px}"]
                    }] }
        ];
        SukuResponseComponent.propDecorators = {
            customClass: [{ type: i0.Input }],
            title: [{ type: i0.Input }],
            titleId: [{ type: i0.Input }],
            titleSize: [{ type: i0.Input }],
            titleColor: [{ type: i0.Input }],
            titleWeight: [{ type: i0.Input }],
            description: [{ type: i0.Input }],
            descriptionId: [{ type: i0.Input }],
            descriptionSize: [{ type: i0.Input }],
            descriptionColor: [{ type: i0.Input }],
            descriptionWeight: [{ type: i0.Input }],
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
                        template: "<form [formGroup]=\"form\">\n  <div class=\"form-group col-sm-12 col-md-12 col-lg-12\">\n    <div class=\"col-sm-12 col-xs-12 text-center\">\n    </div>\n  </div>\n  <br>\n  <div class=\"col-sm-12 pL0 textdev\">\n    <span class=\"Account-Setup\">Customer Creation</span>\n  </div>\n  <br>\n  <div class=\"col Rectangle-2\">\n    <div formArrayName=\"{{formArrayNameValue}}\">\n      <div class=\"form-group col-xs-12 col-sm-12 col-md-12 col-lg-12\"\n        *ngFor=\"let detail of form.get(formArrayNameValue)['controls']; let i=index\" [formGroupName]=\"i\">\n        <div class=\"col-sm-10 col-xs-12 offset-sm-1\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 p-0 mt-sm-5\">\n              <div class=\"col-sm-12 pt-3\">\n                <span class=\"header pL30\">Business Information</span>\n              </div>\n              <div class=\"col-sm-12 pt-2\">\n                <span class=\"hide-details pL30\">ACCOUNT ADMIN</span>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"firstName\" formControlName=\"firstName\" id=\"firstName\"\n                      placeholder=\"First name\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('firstName').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['firstName'])\">\n                        Invalid firstName\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"lastName\" formControlName=\"lastName\" id=\"lastName\"\n                      placeholder=\"Last name\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('lastName').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['lastName'])\">\n                        Invalid lastName\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"email\" formControlName=\"email\" id=\"email\" placeholder=\"e-mail\">\n                  </mat-form-field>\n\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('email').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['email'])\">\n                        Invalid email\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"address1\" formControlName=\"address1\" id=\"address1\"\n                      placeholder=\"Address\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('address1').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['address1'])\">\n                        Invalid Address\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"city\" formControlName=\"city\" id=\"city\" placeholder=\"City\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('city').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['city'])\">\n                        Invalid City\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"state\" formControlName=\"state\" id=\"state\" placeholder=\"State\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('state').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['state'])\">\n                        Invalid State\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"postalCode\" formControlName=\"postalCode\" id=\"postalCode\"\n                      placeholder=\"Postal-code\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('postalCode').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['postalCode'])\">\n                        Invalid postalCode\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"col-sm-6 p-0\">\n                  <span class=\"hide-details\">INDUSTRY</span>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <mat-select id=\"type\" #x (selectionChange)=\"industryTypeFunAction(x.value)\" formControlName=\"type\"\n                      name=\"type\" placeholder=\"Industry type\">\n                      <mat-option value=\"\">Select Industry</mat-option>\n                      <mat-option *ngFor=\"let industry of industryTypeValue; let i = index\" value=\"{{industry | json}}\">\n                        {{industry.name}}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <mat-select id=\"businessClassification\" formControlName=\"businessClassification\"\n                      name=\"businessClassification\" placeholder=\"Business Classification\">\n                      <mat-option value=\"\">Select business Classification</mat-option>\n                      <mat-option *ngFor=\"let businessClassification of businessClassificationValue ; let i = index\"\n                        value=\"{{businessClassification.id}}\">\n                        {{businessClassification.name}}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" id=\"businessName\" formControlName=\"businessName\" name=\"businessName\"\n                      placeholder=\"Business name\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('businessName').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['businessName'])\">\n                        Invalid Business Name\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <mat-select id=\"businessType\" #z (selectionChange)=\"businessTypeFunAction(z.value)\"\n                      formControlName=\"businessType\" name=\"businessType\" placeholder=\"Business type\">\n                      <mat-option value=\"\">Select businessType</mat-option>\n                      <mat-option *ngFor=\"let business of businessTypeValue ; let i = index\" value=\"{{business.value}}\">\n                        {{business.name}}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"ein\" formControlName=\"ein\" id=\"ein\" placeholder=\"EIN\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('ein').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['ein'])\">\n                        Invalid EIN\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n            </div>\n            <!-- controller -->\n            <div class=\"col-sm-6 p-0 mt-sm-5\" formGroupName=\"controller\">\n              <div class=\"col-sm-12 pb-5 pt-3\">\n                <span class=\"header pL30\">Controller Information</span>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" [readonly]=\"validateType\" name=\"firstName\" formControlName=\"firstName\"\n                      id=\"firstName\" placeholder=\"First name\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('controller').get('firstName').touched\">\n                      <span *ngIf=\"getControl.get('controller').hasError('pattern',['firstName'])\">\n                        Invalid FirstName\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" [readonly]=\"validateType\" name=\"lastName\" formControlName=\"lastName\"\n                      id=\"lastName\" placeholder=\"Last name\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('controller').get('lastName').touched\">\n                      <span *ngIf=\"getControl.get('controller').hasError('pattern',['lastName'])\">\n                        Invalid LastName\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" [readonly]=\"validateType\" name=\"title\" formControlName=\"title\"\n                      id=\"title\" placeholder=\"Title\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('controller').get('title').touched\">\n                      <span *ngIf=\"getControl.get('controller').hasError('pattern',['title'])\">\n                        Invalid title\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput [matDatepicker]=\"picker\" [max]=\"maxDate\" placeholder=\"Date of Birth\"\n                      id=\"dateOfBirth\" formControlName=\"dateOfBirth\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker></mat-datepicker>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"ssn\" formControlName=\"ssn\" id=\"ssn\" [placeholder]=\"_ssnLimit\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('controller').get('ssn').touched\">\n                      <span *ngIf=\"getControl.get('controller').hasError('pattern',['ssn'])\">\n                        Invalid SSN\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 \">\n                <div class=\"col-sm-6 p-0\">\n                  <span class=\"hide-details \">ADDRESS</span>\n                </div>\n              </div>\n              <div formGroupName=\"address\">\n                <div class=\"col-sm-12 form-group\">\n                  <div class=\"col flexCol p-0\">\n                    <mat-form-field>\n                      <input matInput type=\"text\" [readonly]=\"validateType\" name=\"address1\" formControlName=\"address1\"\n                        id=\"address1\" placeholder=\"Address-1\">\n                    </mat-form-field>\n                    <mat-error>\n                      <span *ngIf=\"getControl.get('controller').get('address').get('address1').touched\">\n                        <span *ngIf=\"getControl.get('controller').get('address').hasError('pattern',['address1'])\">\n                          Invalid address1\n                        </span>\n                      </span>\n                    </mat-error>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 form-group\">\n                  <div class=\"col flexCol p-0\">\n                    <mat-form-field>\n                      <input matInput type=\"text\" [readonly]=\"validateType\" name=\"address2\" formControlName=\"address2\"\n                        id=\"address2\" placeholder=\"Address-2\">\n                    </mat-form-field>\n                    <mat-error>\n                      <span *ngIf=\"getControl.get('controller').get('address').get('address2').touched\">\n                        <span *ngIf=\"getControl.get('controller').get('address').hasError('pattern',['address2'])\">\n                          Invalid address2\n                        </span>\n                      </span>\n                    </mat-error>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 form-group\">\n                  <div class=\"col flexCol p-0\">\n                    <mat-form-field>\n                      <mat-select #t (selectionChange)=\"countrySelectAction(t.value)\" name=\"country\"\n                        formControlName=\"country\" id=\"country\" placeholder=\"Country\">\n                        <mat-option *ngFor=\"let item of countriesList; let i = index\" value=\"{{item | json}}\">\n                          {{item.countryName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 form-group\">\n                  <div class=\"col flexCol p-0\">\n                    <mat-form-field>\n                      <mat-select name=\"stateProvinceRegion\" formControlName=\"stateProvinceRegion\"\n                        id=\"stateProvinceRegion\" placeholder=\"State\">\n                        <mat-option *ngFor=\"let item of statesList; let i = index\" value=\"{{ item.stateShortName }}\">{{\n                          item.stateName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 form-group\">\n                  <div class=\"col flexCol p-0\">\n                    <mat-form-field>\n                      <input matInput type=\"text\" [readonly]=\"validateType\" name=\"city\" formControlName=\"city\" id=\"city\"\n                        placeholder=\"City\">\n                    </mat-form-field>\n                    <mat-error>\n                      <span *ngIf=\"getControl.get('controller').get('address').get('city').touched\">\n                        <span *ngIf=\"getControl.get('controller').get('address').hasError('pattern',['city'])\">\n                          Invalid city\n                        </span>\n                      </span>\n                    </mat-error>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 form-group\">\n                  <div class=\"col flexCol p-0\">\n                    <mat-form-field>\n                      <input matInput type=\"text\" [readonly]=\"validateType\" name=\"postalCode\"\n                        formControlName=\"postalCode\" id=\"postalCode\" placeholder=\"Postal-code\">\n                    </mat-form-field>\n                    <mat-error>\n                      <span *ngIf=\"getControl.get('controller').get('address').get('postalCode').touched\">\n                        <span *ngIf=\"getControl.get('controller').get('address').hasError('pattern',['postalCode'])\">\n                          Invalid postalCode\n                        </span>\n                      </span>\n                    </mat-error>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group col-xs-12 col-sm-10 offset-sm-1 p-0\">\n      <div class=\" col pt-4 col-xs-12\">\n        <span>\n          <mat-checkbox color=\"primary\" type=\"checkbox\" (change)=\"action1()\" id=\"{{CRDwollaTOSControl}}\"\n            formControlName=\"{{CRDwollaTOSControl}}\" name=\"{{CRDwollaTOSControl}}\">\n          </mat-checkbox>\n        </span>\n        <span class=\"col terms f15\">I agree to Citizen Reserve's\n          <a class=\"link ws\" href=\"https://citizensreserve.com/terms\" target=\"_blank\">Terms of Service</a>\n          and\n          <a class=\"link ws\" href=\"https://citizensreserve.com/privacy\" target=\"_blank\">Privacy Policy</a>\n          , as well as our payment partner Dwolla's\n          <a href=\"https://www.dwolla.com/legal/tos/\" target=\"_blank\">Terms of Service </a> and\n          <a href=\"https://www.dwolla.com/legal/privacy/\" target=\"_blank\"> Privacy Policy.</a>\n        </span>\n      </div>\n      <div class=\"col d-flex justify-content-center mt-4 mb-3  pB40\">\n        <button class=\"btn btn-info\" [disabled]=\"CitizensReserveTOSformValid\"\n          [ngClass]=\"{'disabled': CitizensReserveTOSformValid}\" (click)=\"submitData.emit(); onSubmit.emit();\">Agree\n          & Continue</button>\n      </div>\n    </div>\n  </div>\n</form>",
                        styles: [".logo{position:absolute;font-size:50px;opacity:0;right:0;top:0}.hide-details{font-family:'Encode Sans',sans-serif!important;font-size:15px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px;color:#1d1d1d}.pB40{padding-bottom:40px}.hide-details1{font-family:'Encode Sans',sans-serif!important;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px;color:#1d1d1d}.pL43{padding-left:43px}.logoDiv{position:relative;overflow:hidden;margin-top:15px}.f60{font-size:60px;color:#000}.padLft{padding-left:4px}#snackbar{visibility:hidden;min-width:250px;margin-left:-125px;background-color:#333;color:#fff;text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:1;left:50%;bottom:30px;font-size:17px}#snackbar.show{visibility:visible;-webkit-animation:.5s fadein,.5s 2.5s fadeout;animation:.5s fadein,.5s 2.5s fadeout}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@-webkit-keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}#successfull{visibility:hidden;min-width:250px;margin-left:-125px;background-color:#4cca1a;color:#fff;text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:1;left:50%;bottom:30px;font-size:17px}#successfull.show{visibility:visible;-webkit-animation:.5s fadein,.5s 2.5s fadeout;animation:.5s fadein,.5s 2.5s fadeout}.padLeft{padding-left:19px}.marginBoth{margin-top:0;margin-bottom:0}.circle{width:60px;height:60px;color:#fff;background:#031103;border-radius:50%}.progressText{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;color:#b6b6b6}.Setup-marketplace-in{width:249px;height:24px;font-family:Poppins-Regular,sans-serif;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;color:var(--black);margin-left:2%}.-Fill-out-preferenc{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#3e3e3e}.lastDiv{margin-bottom:14%}.lastELem{margin-bottom:1%}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}.trMar{padding-top:3%}.progressTxt{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:1;text-align:center;color:#b6b6b6}.divMarBtm{margin-bottom:3%}.intText{font-family:'Encode Sans',sans-serif!important;font-size:15px;font-weight:500;text-align:center;color:#b6b6b6;margin-bottom:0}.txtFlow{word-wrap:break-word;overflow-wrap:break-word;white-space:pre-wrap}.pL0R0{padding-right:15px;padding-left:15px}.pL0{padding-left:0}.Account-Setup{font-family:Poppins,sans-serif;font-size:21px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#1c1c1c;color:var(--black)}.border_bottom{border-bottom:2px solid #a7bf2e}.cancel{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#000}.zeplin_button{width:81px;height:40px;color:#fff;border:2px solid #757575;background-color:#757575}.btn_zep:hover{background-color:#a7bf2e}.zeplin_button1{width:81px;height:40px;color:#000;border:2px solid #757575;background-color:#272727}.btn_zep1:hover{background-color:#757575}@media screen and (max-width:700px){.Rectangle-10{width:100%;height:100%;background-color:#272727}}@media screen and (max-width:800px){.pL25{padding-left:25px}.pL0R0{padding-left:0;padding-right:0}}@media screen and (max-width:1500px){.pL0R0one{padding-left:15px;padding-right:15px}}@media screen and (min-width:500px){.Rectangle-10{width:100%;height:84px;background-color:#272727}.pL124,.pL128{padding-left:10px}.top_mrg_list_respo{padding-top:20px}.txt_aln_res{text-align:right}.res-pad{padding-left:0;padding-right:20px}.pT30{padding-top:30px}.mT27{margin-top:24px}.pL25{padding-left:0}.pR64L0{padding-right:64px;padding-left:0}.pL0R0{padding-right:0;padding-left:0}.pL0R0one{padding-left:0;padding-right:0}}.pL39{padding-left:82px}.pL-15{padding-left:15px}.pR10{padding-right:5px}.pL15{padding-left:41px}.pR28{padding-right:86px}.pR15{padding-right:46px}@media (max-width:430px){.confirmTxt,.progressTxt{padding-left:0;padding-right:0}.pL40{padding-left:10px}.pL16{padding-left:0}.pr15,.pr28{padding-right:0}}.pT6{padding-top:6px}.pT28{padding-top:28px}.pL20{padding-left:4px}.pT5{padding-top:13px}.REVIEW-BIDS{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#f3eeee}.pT16{padding-top:16px}.Spring-Cases{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:2;letter-spacing:.1px;color:#757575}.pT3B3{padding-top:3px;padding-bottom:3px}.paddingLeft27{padding-left:27px;padding-right:28px}@media (max-width:430px){.paddingLeft27{padding-left:18px;padding-right:23px}}.pB25{padding-bottom:25px}.mL29{margin-left:29px}.progressWidth{width:20%}.mL28{margin-left:28px}.pL31{padding-left:23px}.pR46{padding-right:20px}.pR68{padding-right:38px}.pR82{padding-right:73px}@media screen and (max-width:1024px){.mL29{margin-left:0}.progressWidth{width:20%}.mL28{margin-left:-6px}.pL31{padding-left:0}.pR46{padding-right:0;padding-left:0}.pR68{padding-right:4px}.pR82{padding-right:0}}.pL-250{padding-left:250px}.mL-120{margin-left:120px}.Dashboard{font-family:Poppins,sans-serif!important;font-size:22px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6}.product-list2 .article .product-img{width:255px;height:158px;float:left;text-align:center;line-height:158px;border:1px solid #f4f4f4;box-shadow:rgba(0,0,0,.05) 0 0 2px;position:relative;margin:0 -255px 0 0;z-index:10}.pB-56{padding-bottom:56px}.pL40{padding-left:40px}.Bheight{height:261px}.bgColor{background-color:#9ea6af;box-shadow:rgba(0,0,0,.05) 0 0 2px}.card-header{margin-bottom:17px;background-color:#9ea6af;border-radius:0 0 5px 6px;box-shadow:0 1px 1px rgba(0,0,0,.5);color:#fff}.headerFont{font-family:Poppins-Regular,sans-serif;letter-spacing:0}.pL-30{padding-left:30px}.header{font-family:'Encode Sans',sans-serif;font-size:20px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important}.pT-20{padding-left:41px;padding-top:21px;padding-right:0}.pB-37{padding-bottom:37px}.line{max-height:50px}.pL186{padding-left:186px}.Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05);font-size:12px!important}.btn-agree{color:#fff;background-color:#747474;border-radius:45px;padding:15px 40px;border:0;cursor:pointer;font-weight:700}.btn-agree:hover{background-color:#5a5a5a;cursor:pointer}.disabled{background-color:#757575;cursor:not-allowed!important}.pL100{padding-left:100px}.pT9{padding-top:9px}.pT25{padding-top:25px}.pL63{padding-left:64px}.f15{font-size:15px}.terms{font-family:'Encode Sans'}.display-2{font-size:5.2rem!important;line-height:1.5!important}.border-dot{border-style:dashed!important;border-color:#6a68689e;border-radius:1px;border-width:2px}.upload{opacity:0;width:277px!important;position:relative;height:120px}.upload:hover{cursor:pointer!important}.upload-icon{position:absolute}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.5rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.add{font-family:Poppins,sans-serif!important;font-size:1.7rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px;color:#ccda5c}.add:hover{font-weight:600}:ng-deep .mat-form-field-appearance-legacy .mat-form-field-underline{bottom:.5em!important}"]
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
                        template: "<div class=\"col p-4\" [formGroup]=\"form\">\n  <label id=\"titleId\" class=\"titleClass\">{{title}}</label>\n  <div class=\"col bg p-4\">\n    <div class=\"col mt-4 mb-3\">\n      <mat-checkbox color=\"primary\" type=\"checkbox\" (change)=\"action()\" id=\"{{checkBoxId}}\" formControlName=\"{{control}}\"\n        name=\"{{control}}\">\n      </mat-checkbox>\n      <span class=\"col-sm-12 terms\" [style.font-size.rem]=\"contentSize\" id=\"{{contentId}}\">\n        {{content}}\n      </span>\n    </div>\n    <div class=\"col d-flex justify-content-center mt-5 mb-3\">\n      <button class=\"btn btn-info\" [ngClass]=\"{'disabled': formValid}\" (click)=\"agree()\"\n        [style.font-size.rem]=\"btnTextSize\"\n        [disabled]=\"formValid\">Agree & Continue</button>\n    </div>\n  </div>\n</div>",
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
            this.enable = {
                button: false
            };
            this.action = new i0.EventEmitter();
        }
        Object.defineProperty(SukuDwollaFundingSourceComponent.prototype, "iavToken", {
            get: /**
             * @return {?}
             */ function () {
                return this._iavToken;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._iavToken = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SukuDwollaFundingSourceComponent.prototype, "validResponse", {
            get: /**
             * @return {?}
             */ function () {
                return this._validResponse;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._validResponse = val;
                console.log('_validResponse', this._validResponse);
                if (this._validResponse) {
                    this.getDwollaHtml();
                }
                else {
                    this.snackbar('Please wait...');
                }
            },
            enumerable: true,
            configurable: true
        });
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
                var _this = this;
                if (this._iavToken) {
                    if (document.getElementById('iavContainer')) {
                        /** @type {?} */
                        var list = document.getElementById('iavContainer');
                        while (list.hasChildNodes()) {
                            list.removeChild(list.firstChild);
                        }
                    }
                    console.log('triggered', this._iavToken);
                    dwolla.configure('sandbox');
                    dwolla.iav.start(this._iavToken, {
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
                        if (res) {
                            /** @type {?} */
                            var checkResponse = res['_links']['funding-source'].href;
                            if (checkResponse) {
                                _this.enable.button = true;
                            }
                            else {
                                _this.enable.button = false;
                            }
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
                    duration: 3000
                });
            };
        SukuDwollaFundingSourceComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-dwolla-funding-source',
                        template: "<div class=\"col p-2\">\n  <div id=\"mainContainer\">\n    <p class=\"mt-2 note pl-3 text-center\"><b>Note:</b> Adding a funding resource requires a third-party UI, which may\n      take a few moments to load.</p>\n  </div>\n  <div class=\"col pt-3 pb-2 bg m-3\">\n    <div id=\"iavContainer\"></div>\n    <div class=\"col text-center pb-4\">\n      <button class=\"suku-button\" (click)=\"action.emit()\" *ngIf=\"enable?.button \">Return to Funding Sources</button>\n    </div>\n  </div>\n</div>",
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
            iavToken: [{ type: i0.Input, args: ['iav-token',] }],
            validResponse: [{ type: i0.Input }],
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
                        if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg' || file.type == 'application/pdf') {
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
                            this.snackbar('The file type jpg/jpeg/png/pdf files are allowed!');
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
                        template: "<div class=\"col p-0\">\n  <label class=\"titleClass\"><strong>{{title}}</strong></label>\n  <div class=\"col Rectangle-2 d-flex\">\n    <div class=\"col p-3\">\n      <div class=\"col p-3 mt-3 col-xs-12 noPadding \">\n        <div class=\"col\">\n          <div class=\"col flexCol p-0\">\n            <div class=\"col-sm-10 f14\">\n              <span class=\"poppins\" *ngIf=\"!(_classification == 'business')\">For Controller Verification:</span>\n              <span class=\"poppins\" *ngIf=\"(_classification == 'business')\">For Business Verification:</span>\n            </div>\n            <div class=\"col-sm-12 preFont\">\n              <div *ngIf=\"!(_classification == 'business')\" class=\"pl-2\">\n                <p class=\"mB-0 Spring-Cases txtFlow\">\n                  Please submit verification documentation.\n                  Files must be either a .jpg, .jpeg, .png, or .pdf up to 10MB in size.*\n                </p>\n                Allowed Documents:\n                <ul class=\"pl-5 ml-2\">\n                  <li>Unexpired Passport</li>\n                  <li>Unexpired driver's license</li>\n                  <li>Other unexpired Government Issued ID card</li>\n                </ul>\n              </div>\n              <div *ngIf=\"(_classification == 'business')\" class=\"pl-2\">\n                <p class=\"mB-0 Spring-Cases txtFlow\">\n                  Please submit verification documentation.\n                  Files must be either a .jpg, .jpeg, .png, or .pdf up to 10MB in size.*\n                </p>\n                <ul class=\"pl-5 ml-2\">\n                  <li>Partnership, General Partnership: EIN Letter (IRS-issued SS4 confirmation letter).</li>\n                  <li>(Limited Liability Corporation (LLC), Corporation: EIN Letter (IRS-issued SS4 confirmation\n                    letter).</li>\n                  <li class=\"text-justify\">Sole Proprietorship: One or more of the following, as applicable to your sole\n                    proprietorship: Fictitious Business Name Statement; Certificate of Assumed Name; Business License;\n                    Sales/Use Tax License; Registration of Trade Name; EIN documentation (IRS-issued SS4 confirmation\n                    letter); Color copy of a valid government-issued photo ID (e.g., a driver's license, passport, or\n                    state ID card).\n                    Other business documents that are applicable includes any US government entity (federal, state,\n                    local) issued business formation or licensing exhibiting the name of the business enrolling with\n                    Dwolla, or; Any business formation documents exhibiting the name of the business entity in addition\n                    to being filed and stamped by a US government entity. Examples include:</li>\n                  <li>Filed and stamped Articles of Organization or Incorporation</li>\n                  <li>Sales/Use Tax License</li>\n                  <li>Business License</li>\n                  <li>Certificate of Good Standing</li>\n                </ul>\n              </div>\n              <div class=\"col mt-3 mb-3 p-0\" *ngIf=\"fileArrayList?.length > 0\">\n                <p class=\"poppins\">Document uploaded list:</p>\n                <ul class=\"pl-5 ml-2\">\n                  <li *ngFor=\"let file of fileArrayList\"><i>{{file?.name}}</i></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"col-sm-4 offset-sm-8 p-0\">\n            <mat-form-field class=\"col p-0\" *ngIf=\"_classification == 'controller'\">\n              <mat-select placeholder=\"type of Document\" id=\"uploadDoc\" #types\n                (selectionChange)=\"imageType(types.value)\">\n                <mat-option *ngFor=\"let type of docType\" [value]=\"type.value\">\n                  {{type.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div class=\"col flexCol p-0\">\n            <div\n              class=\"col-sm-4 offset-sm-8 border-dot rounded-0 bg-light d-flex justify-content-center text-center p-4\">\n              <div class=\"col-sm-5 col-xs-4 p-4 \">\n                <a onclick=\"document.getElementById('myFileInput').click()\"\n                  class=\" fa fa-cloud-upload f60 text-muted center-block  pT9 \" id=\"saleTwoUpload\" style=\"width: 100%\">\n                </a>\n                <input type=\"file\" placeholder={{imagepath}} id=\"myFileInput\" accept=\".pdf,.jpg, .jpeg, .png\"\n                  name=\"uploadDocument[]\" #fileInput (change)=\"fileupload($event)\" multiple=\"true\" />\n              </div>\n              <div class=\"col-sm-8 err_style \" *ngIf=\"showPdfErrorMsg\" id=\"uploadcanExceed\">The file type\n                pdf/doc/docx\n                files\n                are allowed! </div>\n              <div class=\"col-sm-8 err_style \" *ngIf=\"showMessage\" id=\"uploadcanExceed\">The file size cannot exceed\n                10\n                MB</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"col d-flex justify-content-center mt-4 mb-3  pB40\">\n              <button class=\"btn btn-info\" (click)=\"submitData.emit(); \">Agree & Continue</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: [".display-2{font-size:5.2rem!important;line-height:1.5!important}.border-dot{border-style:dashed!important;border-color:#6a68689e;border-radius:1px;border-width:2px}.upload{opacity:0;width:277px!important;position:relative;height:120px}.upload:hover{cursor:pointer!important}.upload-icon{position:absolute}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.5rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.disabled{cursor:not-allowed!important}.add{font-family:Poppins,sans-serif!important;font-size:1.7rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px;color:#ccda5c}.add:hover{font-weight:600}.docText{font-family:Poppins,sans-serif!important;letter-spacing:.1px}label.titleClass{font-family:Poppins,sans-serif!important;font-size:20px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px}.preFont{font-family:\"Encode sans\",sans-serif!important;letter-spacing:.1px;font-size:14px}"]
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
            this.add = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuPaymentPortalHelpComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuPaymentPortalHelpComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-payment-portal-help',
                        template: "<div class=\"col-12 text-left border d-flex Rectangle-2 mT-8 p-3 bgWhite\">\n  <div class=\"col-12 m-3\" style=\"padding-left: 3%; padding-right: 3%\">\n    <suku-heading>Payments Help Page</suku-heading>\n\n    <b style=\"color: black\">ACH PAYMENTS</b>\n    <div class=\"col-12 text-left p-0 progressTxt mb-5\">\n      <p>The SUKU Platform utilizes a payment provider, Dwolla, to enable ACH Payments. Please reach out to the SUKU\n        help mailbox at support@suku.world if you have any questions regarding payments.</p>\n      <b>What is Dwolla?</b>\n      <p>Dwolla is a powerful payments platform that securely connects to bank or credit union accounts to enable the\n        transfer of money for any individual or organization in the U.S.</p>\n\n      <b>Why is my transaction still pending?</b>\n      <p>A bank or credit union transaction usually takes 3\u20134 business days to complete via the Automated Clearing House\n        network (ACH) used by banks to transfer funds. Please note that transfers take longer to complete if over a\n        weekend or a holiday.</p>\n\n      <b>Why did the transaction fail?</b>\n      <p>Sometimes transactions to or from a bank or credit union can fail. Here are a few reasons why a transaction can\n        fail:</p>\n      <ul>\n        <li>Insufficient funds: There are insufficient funds in the sending bank or credit union account to complete the\n          transaction.</li>\n        <li>Frozen account: A bank or credit union account has been frozen.</li>\n        <li>Other reasons: A bank or credit union rejects the transaction for some other reason.</li>\n      </ul>\n      <p>If a transaction fails, please contact your bank or credit union to check on the status of your account. Then\n        either re-initiate the transaction or ask your financial institution why the transaction may not be processed.\n      </p>\n\n      <b>Why am I being asked for more documentation?</b>\n      <p>If we ask for a photo ID:</p>\n      <p>Additional information is needed to verify your identity. Please upload one of the following forms of\n        identification: An unexpired, current, state-issued driver\u2019s license or identification card OR An unexpired,\n        current U.S. passport</p>\n\n      <p>If we ask for a bank statement:</p>\n      <p>Additional information is needed to verify that you are an authorized signer on your connected bank or credit\n        union account. Please upload a copy of a recent statement.</p>\n\n      <b>How does Dwolla protect customers\u2019 data?</b>\n      <p>At Dwolla, we take protecting data seriously. Dwolla maintains compliance with the SOC 2 framework. This\n        framework provides an independent, third-party assurance that we are taking the appropriate steps to protect our\n        systems and your data. Learn more about Dwolla\u2019s security practices <a\n          href=\"https://www.dwolla.com/security/\">here</a>.</p>\n    </div>\n    <div class=\"col mt-3 mb-2 p-0 pt-4\">\n      <span class=\"add c-pointer\" id=\"addOwner\" (click)=\"add.emit()\"><i class=\"fa fa-plus-circle pr-3 icon\"></i>Add New\n        Beneficial Owner</span>\n    </div>\n  </div>\n</div>",
                        styles: [".progressTxt{font-family:'Encode Sans',sans-serif;font-size:15px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.bgWhite{background-color:#fff}.mT-5{margin-top:5%}.mT-8{margin-top:8%}.mB-8{margin-bottom:8%}.linkA{cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        SukuPaymentPortalHelpComponent.ctorParameters = function () { return []; };
        SukuPaymentPortalHelpComponent.propDecorators = {
            helpPage: [{ type: i0.Input }],
            helpPageHref: [{ type: i0.Input }],
            add: [{ type: i0.Output }]
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
                        template: "<form [formGroup]=\"termsandcondition\">\n  <div class=\" d-flex flex-column py-3\">\n    <div class=\"pb-1\"><b>Contract Terms & Conditions</b></div>\n    <div class=\"d-flex flex-row\">\n      <mat-checkbox color=\"primary\" type=\"checkbox\" #t (change)=\"action1()\" id=\"contractTerms\" \n      formControlName=\"contractTerms\" name=\"contractTerms\">\n      </mat-checkbox>\n      <span class=\"col Spring-Cases txtFlow termsAndConditions pl-2 pr-0\"> I Accept the terms and conditions and authorize\n        this transaction.\n        <a class=\"link ws\" href=\"https://citizensreserve.com/terms\" target=\"_blank\">Terms</a>\n        <a class=\"link ws\" href=\"https://citizensreserve.com/privacy\" target=\"_blank\">Privacy</a>\n      </span>\n    </div>\n  </div>\n</form>",
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
    var SukuCardLineTypeOneComponent = /** @class */ (function () {
        function SukuCardLineTypeOneComponent() {
            this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
            this.chatReadIcon = '../assets/images/chat_read.png';
            this.chatUnreadIcon = '../assets/images/chat_unread.png';
            this.customclass = '';
            this.customImgclass = '';
            this.customIconclass = 'text-center';
            this.bgColor = '';
            this.imageColSize = 'col-sm-1 pt-1 pl-2';
            this.txtcolsize = 'col-sm-6 pl-5 pt-2 mt-1';
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
            this.contentTwocustomclass = 'user';
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
            this.action = new i0.EventEmitter();
            this.userAction = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuCardLineTypeOneComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        SukuCardLineTypeOneComponent.prototype.cardAction = /**
         * @return {?}
         */
            function () {
                this.action.emit();
            };
        /**
         * @param {?} e
         * @return {?}
         */
        SukuCardLineTypeOneComponent.prototype.contentAction = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                this.userAction.emit();
                e.stopPropagation();
            };
        SukuCardLineTypeOneComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-card-line-type-one',
                        template: "<div class=\"col p-0\" (click)=\"cardAction()\">\r\n  <div class=\"row card-line-bg p-3 m-3 {{customclass}}\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img [class]=\"customclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus == 'read'\">\r\n      <img [class]=\"customIconclass\" src=\"{{chatUnreadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus == 'unRead'\">\r\n      <img [class]=\"customIconclass\" src=\"{{chatReadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n    </div>\r\n    <!-- <div class=\"col-sm-1\" *ngIf=\"!msgStatus\"></div> -->\r\n    <div [class]=\"txtcolsize\">\r\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\r\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\r\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n    </div>\r\n    <div [class]=\"txttwocolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"\r\n        [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\" (click)=\"contentAction($event)\"\r\n        [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n    </div>\r\n    <div [class]=\"txtthreecolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"\r\n        [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"\r\n        [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n    </div>\r\n  </div>\r\n</div>",
                        styles: ["h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-word!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer,.user{cursor:pointer}.user:hover{color:#000!important;font-weight:700!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuCardLineTypeOneComponent.ctorParameters = function () { return []; };
        SukuCardLineTypeOneComponent.propDecorators = {
            image: [{ type: i0.Input }],
            chatReadIcon: [{ type: i0.Input, args: ['char-read-icon',] }],
            chatUnreadIcon: [{ type: i0.Input, args: ['char-unread-icon',] }],
            msgStatus: [{ type: i0.Input, args: ['msg-status',] }],
            customclass: [{ type: i0.Input, args: ['customclass',] }],
            customImgclass: [{ type: i0.Input, args: ['customImgclass',] }],
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
            contentThreecustomclass: [{ type: i0.Input, args: ['content-three-customclass',] }],
            action: [{ type: i0.Output }],
            userAction: [{ type: i0.Output }]
        };
        return SukuCardLineTypeOneComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuCardLineTypeTwoComponent = /** @class */ (function () {
        function SukuCardLineTypeTwoComponent() {
            this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
            this.iconOne = '';
            this.iconTwo = '';
            this.customclass = '';
            this.customImgclass = '';
            this.customIconclass = 'text-center';
            this.bgColor = '';
            this.imageColSize = "col-sm-1 pt-1 pl-2";
            this.txtcolsize = "col-sm-5 pl-sm-5 pt-2 mt-1";
            this.txttwocolsize = "col-sm-2 pl-lg-0 pr-lg-2 pt-2 mt-1";
            this.txtthreecolsize = "col pt-2 mt-1";
            this.titleOne = 'Title One';
            this.iconOneInfo = 'icon info One';
            this.iconTwoInfo = 'icon info Two';
            this.titleOneColor = 'black';
            this.titleOneWeight = '600';
            this.titleOneSize = '14';
            this.titleOnecustomclass = '';
            this.contentOne = '$100';
            this.contentOneColor = '#3e3e3e';
            this.contentOneWeight = '500';
            this.contentOneSize = '14';
            this.contentOnecustomclass = '';
            this.contentTwo = 'N/A';
            this.contentTwoColor = '#3e3e3e';
            this.contentTwoWeight = '500';
            this.contentTwoSize = '14';
            this.contentTwocustomclass = 'user';
            this.subTitleTwo = 'SOLD BY';
            this.subTitleTwoColor = '#b6b6b6';
            this.subTitleTwoWeight = '500';
            this.subTitleTwoSize = '12';
            this.subTitleTwocustomclass = '';
            this.subTitleThree = 'TOTAL PRICE';
            this.subTitleThreecolor = '#b6b6b6';
            this.subTitleThreeWeight = '500';
            this.subTitleThreeSize = '12';
            this.subTitleThreeClass = '';
            this.contentThree = 'N/A';
            this.contentThreeColor = '#3e3e3e';
            this.contentThreeWeight = '500';
            this.contentThreeSize = '14';
            this.contentThreecustomclass = '';
            this.userAction = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuCardLineTypeTwoComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuCardLineTypeTwoComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-card-line-type-two',
                        template: "<div class=\"col p-0\">\r\n  <div class=\"row card-line-bg p-3 m-2 {{customclass}}\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img [class]=\"customImgclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\r\n    </div>\r\n    <div class=\"col-sm-1\">\r\n      <span class=\"tipTool\">\r\n        <span class=\"tipTooltext\">\r\n          <span class=\"uncheckedTextContent\">{{iconOneInfo}}</span>\r\n        </span>\r\n        <img [class]=\"customIconclass\" [src]=\"iconOne\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n      </span>\r\n    </div>\r\n    <div class=\"col-sm-1\">\r\n        <span class=\"tipTool\">\r\n          <span class=\"tipTooltext\">\r\n            <span class=\"uncheckedTextContent\">{{iconTwoInfo}}</span>\r\n          </span>\r\n          <img [class]=\"customIconclass\" src=\"{{iconTwo}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n        </span>\r\n    </div>\r\n    <div [class]=\"txtcolsize\">\r\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\r\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\r\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n    </div>\r\n    <div [class]=\"txttwocolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"\r\n        [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n      <h2 [style.font-size.px]=\"contentTwoSize\" (click)=\"userAction.emit()\" [class]=\"contentTwocustomclass\" [style.font-weight]=\"contentTwoWeight\"\r\n        [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n    </div>\r\n    <div [class]=\"txtthreecolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"\r\n        [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"\r\n        [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n    </div>\r\n  </div>\r\n</div>",
                        styles: ["h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-word!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}.tipTool{position:relative;display:inline-block;width:35px;height:0;text-align:center;border-radius:15px;background-color:#d8d8d8a8 transparent;font-size:18px;color:#757575;font-weight:700;font-style:italic;font-stretch:normal;letter-spacing:.5px}.tipTool .tipTooltext{visibility:hidden;width:-webkit-max-content;width:-moz-max-content;width:max-content;background-color:#000000eb;text-align:left;border-radius:6px;padding:15px 18px;position:absolute;z-index:1;bottom:150%;left:70%;margin-left:-60px;font-style:normal;font-stretch:normal;font-size:13px;font-family:\"Encode Sans\",sans-serif;font-weight:500;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.tipTool .tipTooltext::after{content:\"\";position:absolute;top:100%;left:31.5%;margin-left:0;border-width:5px;border-style:solid;border-color:#191922 transparent transparent;font-style:normal;font-stretch:normal}.tipTool:hover .tipTooltext{visibility:visible}.user{cursor:pointer!important}.user:hover{color:#000!important;font-weight:700!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuCardLineTypeTwoComponent.ctorParameters = function () { return []; };
        SukuCardLineTypeTwoComponent.propDecorators = {
            image: [{ type: i0.Input }],
            iconOne: [{ type: i0.Input, args: ['icon-one',] }],
            iconTwo: [{ type: i0.Input, args: ['icon-two',] }],
            msgStatus: [{ type: i0.Input, args: ['msg-status',] }],
            customclass: [{ type: i0.Input, args: ['customclass',] }],
            customImgclass: [{ type: i0.Input, args: ['customImgclass',] }],
            customIconclass: [{ type: i0.Input, args: ['custom-iconclass',] }],
            bgColor: [{ type: i0.Input }],
            interest: [{ type: i0.Input }],
            imageColSize: [{ type: i0.Input }],
            txtcolsize: [{ type: i0.Input }],
            txttwocolsize: [{ type: i0.Input }],
            txtthreecolsize: [{ type: i0.Input }],
            titleOne: [{ type: i0.Input, args: ['title-one',] }],
            iconOneInfo: [{ type: i0.Input, args: ['icon-info-one',] }],
            iconTwoInfo: [{ type: i0.Input, args: ['icon-info-two',] }],
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
            contentThreecustomclass: [{ type: i0.Input, args: ['content-three-customclass',] }],
            userAction: [{ type: i0.Output }]
        };
        return SukuCardLineTypeTwoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuRatingCardLineComponent = /** @class */ (function () {
        function SukuRatingCardLineComponent() {
            this.fullStars = 0;
            this.fullStarsArray = [];
            this.halfStar = 0;
            this.emptyStars = 0;
            this.emptyStarsArray = [];
            this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
            this.iconOne = '';
            this.iconTwo = '';
            this.customclass = '';
            this.customImgclass = 'img-res';
            this.customIconclass = 'text-center';
            this.bgColor = '';
            this.imageColSize = 'col-sm-1 p-0';
            this.txtcolsize = 'col-sm-3 col-xs-12 pl-lg-2 pr-2 pt-1 mt-1';
            this.txttwocolsize = 'col-sm-3 pt-2';
            this.txtthreecolsize = 'col-sm-2 pt-2';
            this.titleOne = 'Title One';
            this.titleOneColor = 'black';
            this.titleOneWeight = '600';
            this.titleOneSize = '14';
            this.titleOnecustomclass = '';
            this.ratingTitle = 'RATING RECEIVED';
            this.ratingtitleColor = '#b6b6b6';
            this.ratingtitleWeight = '500';
            this.ratingtitleSize = '12';
            this.ratingtitlecustomclass = '';
            this.contentOne = '$100';
            this.contentOneColor = '#3e3e3e';
            this.contentOneWeight = '500';
            this.contentOneSize = '14';
            this.contentOnecustomclass = '';
            this.contentTwo = 'John Smith';
            this.contentTwoColor = '#3e3e3e';
            this.contentTwoWeight = '500';
            this.contentTwoSize = '14';
            this.contentTwocustomclass = 'user';
            this.subTitleTwo = 'SOLD BY';
            this.subTitleTwoColor = '#b6b6b6';
            this.subTitleTwoWeight = '500';
            this.subTitleTwoSize = '12';
            this.subTitleTwocustomclass = '';
            this.subTitleThree = 'TOTAL PRICE';
            this.subTitleThreecolor = '#b6b6b6';
            this.subTitleThreeWeight = '500';
            this.subTitleThreeSize = '12';
            this.subTitleThreeClass = '';
            this.contentThree = '28 Nov 2018';
            this.contentThreeColor = '#3e3e3e';
            this.contentThreeWeight = '500';
            this.contentThreeSize = '14';
            this.contentThreecustomclass = '';
            this.action = new i0.EventEmitter();
            this.userAction = new i0.EventEmitter();
        }
        Object.defineProperty(SukuRatingCardLineComponent.prototype, "ratingValue", {
            set: /**
             * @param {?} ratingValue
             * @return {?}
             */ function (ratingValue) {
                console.log('ra', this.ratingValue);
                this.fullStars = Math.round(ratingValue);
                this.fullStarsArray = Array(this.fullStars).fill(1);
                this.halfStar = this.fullStars < ratingValue ? 1 : 0;
                this.emptyStars = 5 - this.fullStars - this.halfStar;
                this.emptyStarsArray = Array(this.emptyStars).fill(1);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuRatingCardLineComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuRatingCardLineComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-rating-card-line',
                        template: "<div class=\"col p-0\">\r\n  <div class=\"row card-line-bg p-3 m-3 {{customclass}}\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img [class]=\"customImgclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\r\n    </div>\r\n    <span class=\"col d-lg-flex d-md-flex p-0 pt-1\">\r\n    <div [class]=\"txtcolsize\">\r\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\r\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\r\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n    </div>\r\n    <div class=\"col-sm-4 d-flex pt-2 flex-column\" (click)=\"action.emit()\"  *ngIf=\"true\">\r\n      <h2 [style.font-size.px]=\"ratingtitleSize\" [class]=\"ratingtitlecustomclass\"\r\n        [style.font-weight]=\"ratingtitleWeight\" [style.color]=\"ratingtitleColor\">{{ratingTitle}}</h2>\r\n      <p class=\"mb-0\">\r\n        <span class=\"starSize\">\r\n          <div class=\"pl-1\">\r\n              <span class=\"fa fa-star fullStar f20\" *ngFor=\"let star of fullStarsArray\"> </span>\r\n              <span class=\"fa fa-star-half halfStarLeft f20\" *ngIf=\"halfStar == 1\"> </span>\r\n              <span class=\"fa fa-star-half fa-flip-horizontal halfStarRight f20\" *ngIf=\"halfStar == 1\"> </span>\r\n              <span class=\"fa fa-star emptyStar f20\" *ngFor=\"let star of emptyStarsArray\"> </span>\r\n          </div>\r\n        </span>\r\n      </p>\r\n    </div>\r\n    <div [class]=\"txttwocolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"\r\n        [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n      <h2 [style.font-size.px]=\"contentTwoSize\" (click)=\"userAction.emit()\" [class]=\"contentTwocustomclass\" [style.font-weight]=\"contentTwoWeight\"\r\n        [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n    </div>\r\n    <div [class]=\"txtthreecolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"\r\n        [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"\r\n        [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n    </div>\r\n  </span>\r\n  </div>\r\n</div>",
                        styles: ["h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}.starSize{font-size:20px!important}.img-res{width:100px;height:auto;max-width:100%;max-height:100%;padding:6px 5px}.emptyStar{color:#e1e1e1;margin-right:5px}.fullStar{color:#898989;margin-right:5px}.halfStarLeft{color:#898989;position:relative;left:1px}.halfStarRight{color:#e1e1e1;position:relative;right:1px}.f20{font-size:20px}.user{cursor:pointer}.user:hover{color:#000!important;font-weight:700!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuRatingCardLineComponent.ctorParameters = function () { return []; };
        SukuRatingCardLineComponent.propDecorators = {
            image: [{ type: i0.Input }],
            iconOne: [{ type: i0.Input, args: ['icon-one',] }],
            iconTwo: [{ type: i0.Input, args: ['icon-two',] }],
            msgStatus: [{ type: i0.Input, args: ['msg-status',] }],
            customclass: [{ type: i0.Input, args: ['customclass',] }],
            customImgclass: [{ type: i0.Input, args: ['customImgclass',] }],
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
            ratingTitle: [{ type: i0.Input, args: ['rating-title',] }],
            ratingtitleColor: [{ type: i0.Input, args: ['rating-title-color',] }],
            ratingtitleWeight: [{ type: i0.Input, args: ['rating-title-weight',] }],
            ratingtitleSize: [{ type: i0.Input, args: ['rating-title-size',] }],
            ratingtitlecustomclass: [{ type: i0.Input, args: ['rating-title-customclass',] }],
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
            contentThreecustomclass: [{ type: i0.Input, args: ['content-three-customclass',] }],
            action: [{ type: i0.Output }],
            userAction: [{ type: i0.Output }],
            customRatingclass: [{ type: i0.Input }],
            ratingValue: [{ type: i0.Input, args: ['rating-value',] }]
        };
        return SukuRatingCardLineComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuNotificationPanelComponent = /** @class */ (function () {
        function SukuNotificationPanelComponent() {
            this.title = 'Dashboard';
            this.customclass = 'col p-0 box pointer text-center';
            this.notificationArray = [];
            this.action = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuNotificationPanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuNotificationPanelComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-notification-panel',
                        template: "  <label class=\"title\">{{title}}</label>\n  <div class=\"d-md-flex mb-5 flex-md-row\">\n    <div [class]=\"customclass\" *ngFor=\"let item of notificationArray;let i=index\" (click)=\"action.emit(item?.id)\"\n      id=\"notification{{item?.id}}\">\n      <div class=\"col pointer text-center p-0\">\n        <div class=\"pt-4\">\n          <span class=\"box-counter\" id=\"notificationValue{{i}}\">\n            {{ (item?.value > 9) ? '' : '0' }}{{ (item?.value == 0) ? 00 : item?.value }}\n          </span>\n          <p class=\"pb-4 n-m mb-0\">\n            <a class=\"box-title\" id=\"notificationTitle{{i}}\">\n              {{item?.name  || 'N/A' }}\n            </a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.box{border-radius:2px;background-color:#fff;box-shadow:0 3px 3px 0 rgba(0,0,0,.03);border-left:1px solid #dee2e68a!important;border-bottom:1px solid #dee2e68a!important;cursor:pointer!important}.box-title{font-family:Poppins,sans-serif!important;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#1d1d1d;word-break:break-word!important}.box-counter{font-family:Poppins,sans-serif!important;font-size:50px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.6px;text-align:center;color:#a7bf2e}.default{width:300px}.n-m{margin-top:-15px}.title{font-family:Poppins,sans-serif!important;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6}@media (min-width:575.98px){.box{height:145px!important}}@media (min-width:767.98px){.box{height:175px!important}}@media (min-width:991.98px){.box{height:170px!important}}@media (min-width:1199.98px){.box{height:140px!important}.box-title{font-size:15px!important}}@media (min-width:1400px){.box-title{font-size:17px!important}}"]
                    }] }
        ];
        /** @nocollapse */
        SukuNotificationPanelComponent.ctorParameters = function () { return []; };
        SukuNotificationPanelComponent.propDecorators = {
            title: [{ type: i0.Input }],
            customclass: [{ type: i0.Input }],
            notificationArray: [{ type: i0.Input }],
            action: [{ type: i0.Output }]
        };
        return SukuNotificationPanelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuAddIconComponent = /** @class */ (function () {
        function SukuAddIconComponent() {
            this.customClass = 'clearAll c-pointer';
        }
        /**
         * @return {?}
         */
        SukuAddIconComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuAddIconComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-add-icon',
                        template: "<div class=\"add-btn mt-1\">\n    <a [style.font-size.px]=\"size\" [style.color]=\"color\" id=\"addNew\" [class]=\"customClass\"\n    [style.font-weight]=\"weight\">\n    <i [style.color] = \"iconColor\" class=\"fa fa-plus \"></i>\n    <ng-content></ng-content>\n  </a>\n</div>\n",
                        styles: [".c-pointer{cursor:pointer!important}.clearAll{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:#b6b6b6!important;text-decoration:underline;text-transform:uppercase}.add-btn{width:100%;float:left}.add-btn a{width:100px;height:33px;float:left;font-family:abelregular,Arial,Helvetica,sans-serif;font-size:12px;text-transform:uppercase;line-height:33px;text-align:right;text-decoration:none;position:relative;padding:0 0 0 33px}.add-btn a i{width:33px;height:33px;float:none;display:inline-block;vertical-align:middle;font-size:12px;color:#d4c5a0;text-align:center;line-height:31px;border:1px solid #ebedee;border-radius:33px;position:absolute;top:0;left:0;z-index:10}.add-btn a:hover{text-decoration:underline}"]
                    }] }
        ];
        /** @nocollapse */
        SukuAddIconComponent.ctorParameters = function () { return []; };
        SukuAddIconComponent.propDecorators = {
            name: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            iconColor: [{ type: i0.Input }],
            customClass: [{ type: i0.Input }]
        };
        return SukuAddIconComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuHomepageButton = /** @class */ (function () {
        function SukuHomepageButton(values) {
            if (values === void 0) {
                values = {};
            }
            Object.assign(this, values);
        }
        return SukuHomepageButton;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuHomepageSection = /** @class */ (function () {
        function SukuHomepageSection(values) {
            if (values === void 0) {
                values = {};
            }
            Object.assign(this, values);
        }
        return SukuHomepageSection;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var sukuHomepageData = [
        new SukuHomepageSection({
            header: 'SUKU Core Applications',
            subheader: '',
            info: 'SUKU Core Applications offer the primary feature set on the SUKU Platform. Click any of the icons below to open that SUKU Core Application.',
            buttons: [
                new SukuHomepageButton({
                    title: 'Marketplace',
                    icon: 'fas fa-shopping-cart',
                    path: '/userDashboard',
                    disabled: false,
                    id: 'Marketplace'
                }),
                new SukuHomepageButton({
                    title: 'Track & Trace',
                    icon: 'fas fa-link',
                    path: '/productSearch',
                    disabled: false,
                    id: 'trackAndTrace'
                }),
                new SukuHomepageButton({
                    title: 'Document Authenticator',
                    icon: 'far fa-file-code',
                    path: '/verify',
                    disabled: false,
                    id: 'documentAuthenticator'
                }),
                new SukuHomepageButton({
                    title: 'Payment Portal',
                    icon: 'fas fa-sliders-h',
                    path: '/paymentPortal',
                    disabled: false,
                    id: 'paymentPortal'
                })
            ]
        }),
        new SukuHomepageSection({
            header: 'SUKU Applications and Services',
            subheader: '- Coming Soon',
            info: 'SUKU Applications and Services provide additional functionality and features, which typically leverage the the SUKU Core. We expect these Applications and Services to be built by 3rd parties and by the SUKU Team. These features are coming soon!',
            buttons: [
                new SukuHomepageButton({
                    title: 'Inventory Management',
                    icon: 'fas fa-box-open',
                    path: '/',
                    disabled: true,
                    id: 'inventoryManagement'
                }),
                new SukuHomepageButton({
                    title: 'Warehouse Management',
                    icon: 'fas fa-dolly',
                    path: '/',
                    disabled: true,
                    id: 'warehouseManagement'
                }),
                new SukuHomepageButton({
                    title: 'Insurance',
                    icon: 'fas fa-shield-alt',
                    path: '/',
                    disabled: true,
                    id: 'insurance'
                }),
                new SukuHomepageButton({
                    title: 'Quorum Block Explorer',
                    icon: 'fas fa-cubes',
                    path: '/',
                    disabled: true,
                    id: 'quorumBlockExplorer'
                })
            ]
        })
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuHomepageComponent = /** @class */ (function () {
        function SukuHomepageComponent() {
            this.sendRoutePath = new i0.EventEmitter();
            this.homepageData = sukuHomepageData;
        }
        /**
         * @return {?}
         */
        SukuHomepageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} string
         * @return {?}
         */
        SukuHomepageComponent.prototype.onSendRoutePath = /**
         * @param {?} string
         * @return {?}
         */
            function (string) {
                this.sendRoutePath.emit(string);
            };
        SukuHomepageComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-homepage',
                        template: "<div class=\"homepage col-md-10 col-12 m-auto\">\r\n  <div *ngFor=\"let section of homepageData\">\r\n    <suku-homepage-section (sendRoutePath)=\"onSendRoutePath($event)\" [sectionData]=\"section\"></suku-homepage-section>\r\n  </div>\r\n</div>",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.homepage{padding:30px 0 40px;font-family:Poppins,sans-serif;background:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05);border-radius:0 0 41px 41px}"]
                    }] }
        ];
        /** @nocollapse */
        SukuHomepageComponent.ctorParameters = function () { return []; };
        SukuHomepageComponent.propDecorators = {
            sendRoutePath: [{ type: i0.Output }]
        };
        return SukuHomepageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuHomepageSectionComponent = /** @class */ (function () {
        function SukuHomepageSectionComponent() {
            this.sendRoutePath = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuHomepageSectionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} string
         * @return {?}
         */
        SukuHomepageSectionComponent.prototype.onSendRoutePath = /**
         * @param {?} string
         * @return {?}
         */
            function (string) {
                this.sendRoutePath.emit(string);
            };
        SukuHomepageSectionComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-homepage-section',
                        template: "<section class=\"homepage-section\">\r\n  <div class=\"header row ml-3 ml-sm-5\">\r\n    <div class=\"title mt-3\">{{sectionData.header}}</div>\r\n    <div class=\"mt-3 d-flex pr-5\">\r\n      <span class=\"title italic font-italic\">{{sectionData.subheader}}</span>\r\n      <div class=\"ml-2 info\">\r\n        <i class=\"fas fa-info\"></i>\r\n        <div class=\"info-box\">{{sectionData.info}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row m-3 d-flex justify-content-around\">\r\n    <div class=\"justify-content-center d-flex mt-3 mt-md-5 col-lg-3 col-md-6 col-12\"\r\n      *ngFor=\"let button of sectionData.buttons\">\r\n      <suku-homepage-button [buttonData]=\"button\" (sendRoutePath)=\"onSendRoutePath($event)\"></suku-homepage-button>\r\n    </div>\r\n  </div>\r\n</section>",
                        styles: [".homepage-section{font-family:Poppins,sans-serif}.title{font-size:23px;font-weight:700}.italic{font-weight:400}.info{text-align:center;height:23px;width:23px;border-radius:100px;background:#303030;color:#d8f40b}.info:hover .info-box{display:block}.info-box{z-index:100;width:300px;border-radius:6px;word-wrap:break-word;background:#000;display:none;position:relative;bottom:-10px;right:23px;text-align:left;padding:20px;font-size:13px;font-family:\"Encode Sans\",sans-serif;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.info-box::after{content:\"\";position:absolute;top:-10px;left:35px;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #191922;font-style:normal;font-stretch:normal}"]
                    }] }
        ];
        /** @nocollapse */
        SukuHomepageSectionComponent.ctorParameters = function () { return []; };
        SukuHomepageSectionComponent.propDecorators = {
            sectionData: [{ type: i0.Input }],
            sendRoutePath: [{ type: i0.Output }]
        };
        return SukuHomepageSectionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuHomepageButtonComponent = /** @class */ (function () {
        function SukuHomepageButtonComponent() {
            this.sendRoutePath = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuHomepageButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @return {?}
         */
        SukuHomepageButtonComponent.prototype.onClick = /**
         * @return {?}
         */
            function () {
                if (!this.buttonData.disabled) {
                    this.sendRoutePath.emit(this.buttonData.path);
                }
            };
        SukuHomepageButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-homepage-button',
                        template: "<div class=\"button-container d-flex flex-column align-items-center\">\r\n  <div class=\"suku-button d-flex justify-content-center align-items-center\" [ngClass]=\"{\r\n      'disabled': buttonData.disabled\r\n    }\" (click)=\"onClick()\" id=\"{{buttonData?.id}}\">\r\n    <i [ngClass]=\"[buttonData.icon, 'icon']\"></i>\r\n  </div>\r\n  <div class=\"suku-button-text text-center mt-3\">\r\n    <h3 class=\"button-title\">{{buttonData.title}}</h3>\r\n  </div>\r\n</div>",
                        styles: [".button-container{width:106.4px;font-family:Poppins,sans-serif;font-weight:700}.suku-button{height:80px;width:80px;background:#303030;color:#d8f40b;cursor:pointer!important;box-shadow:0 3px 3px 0 rgba(0,0,0,.5);transition:.1s ease-in-out;border-radius:12px 28px}.suku-button:hover{-webkit-transform:translateY(-3px);transform:translateY(-3px);box-shadow:0 6px 3px 0 rgba(0,0,0,.5)}.suku-button:active{box-shadow:0 4px 3px 0 rgba(0,0,0,.5);-webkit-transform:translateY(-1px);transform:translateY(-1px);transition:none}.disabled{background:#d9d9d9;color:#7f7f7f;cursor:default}.disabled:active,.disabled:hover{box-shadow:0 3px 3px 0 rgba(0,0,0,.5);-webkit-transform:translateY(0);transform:translateY(0)}.icon{font-size:40px}.button-title{font-size:14px;font-weight:700}"]
                    }] }
        ];
        /** @nocollapse */
        SukuHomepageButtonComponent.ctorParameters = function () { return []; };
        SukuHomepageButtonComponent.propDecorators = {
            buttonData: [{ type: i0.Input }],
            sendRoutePath: [{ type: i0.Output }]
        };
        return SukuHomepageButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuProfileHeaderComponent = /** @class */ (function () {
        function SukuProfileHeaderComponent() {
            /* profile--widget --start */
            this.fullStars = 0;
            this.fullStarsArray = [];
            this.halfStar = 0;
            this.emptyStars = 0;
            this.emptyStarsArray = [];
            this.profileImage = '../../assets/images/browser.png';
            this.userName = 'Suku';
            this.nameWeight = '400';
            this.nameCustomClass = 'text-white mb-4 res-color pl-2 text-capitalize';
            this.nameSize = '33.4';
            this.accountType = 'Manufacturer';
            this.accountWeight = '400';
            this.accountCustomClass = 'pl-2 res-color';
            this.accountSize = '17';
            this.accountColor = 'rgba(255, 255, 255, 0.67)';
            this.accountId = 'accountId';
            this.ratingCustomClass = 'pl-2 mb-2 pt-3';
            this.rateDetails = '';
            this.rateDetailColor = '#757575';
            this.ratingDetailWeight = '400';
            this.rateDetailSize = '14';
            this.rateDetailsCustomClass = 'pl-2 mt-1';
            this.rateDetailsId = '';
            this.actionOne = new i0.EventEmitter();
            this.actionTwo = new i0.EventEmitter();
            this.rating = new i0.EventEmitter();
            /* edit-password--visibility */
            this.subHeadingOne = 'edit account';
            this.subHeadingOneId = 'editAccount';
            this.subHeadingTwo = 'change password';
            this.subHeadingTwoId = 'changePassword';
            this.editvisibility = true;
            this.changePasswordvisibility = true;
            /* suku-mail-widget */
            this.mail = 'dconway@suku.com';
            this.mailTxtSize = '13';
            this.mailTextColor = '#3e3e3e';
            this.mailWeight = '500';
            this.mailcustomClass = 'pt-2 pl-4 d-flex align-items-center';
            this.mailId = 'mail';
            this.mailIcon = '/assets/images/mail-light.svg';
            this.mailIconClass = '';
            /* suku-phone-widget */
            this.number = 'N/A';
            this.phnumberSize = '13';
            this.phnumberColor = '#3e3e3e';
            this.phnumberWeight = '500';
            this.phnumberCustomClass = 'pl-4 mt-1 mb-1  d-flex align-items-center';
            this.phNumberIcon = '../../assets/images/phone-light.png';
            this.phoneId = '';
            /* suku-address-widget */
            this.addressIcon = '../../../assets/images/map-pin.svg';
            this.address = '9315 NW 112TH AVE';
            this.addressSize = '13';
            this.addressColor = '#3e3e3e';
            this.addressWeight = '500';
            this.addressId = '';
            this.addressCustomClass = 'pt-2 pl-4 d-flex align-items-center';
            /* sam-bardge */
            this.samBadgeIcon = '../../../assets/img/samBadge.png';
            this.samBadgeClass = '';
            this.samIconAction = new i0.EventEmitter();
        }
        Object.defineProperty(SukuProfileHeaderComponent.prototype, "ratingValue", {
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this.fullStars = Math.round(val);
                this.fullStarsArray = Array(this.fullStars).fill(1);
                this.halfStar = this.fullStars < val ? 1 : 0;
                this.emptyStars = 5 - this.fullStars - this.halfStar;
                this.emptyStarsArray = Array(this.emptyStars).fill(1);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuProfileHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @return {?}
         */
        SukuProfileHeaderComponent.prototype.editAccount = /**
         * @return {?}
         */
            function () {
                this.actionOne.emit();
            };
        /**
         * @return {?}
         */
        SukuProfileHeaderComponent.prototype.changePass = /**
         * @return {?}
         */
            function () {
                this.actionTwo.emit();
            };
        SukuProfileHeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-profile-header',
                        template: "<div class=\"col p-0 bgColor\">\n  <div class=\"col-sm-12 pt1 pt-top\">\n    <div class=\"col pl-lg-5\">\n      <div class=\"row\">\n        <div class=\"col mt-4 p-md-0 pl-lg-2\">\n          <div class=\"col-sm-8 pt-2 col-md-12 col-lg-12\">\n            <div class=\"row\">\n              <div class=\"col-sm-5 col-md-5\">\n                <img [src]=\"profileImage\" class=\"rounded-circle img-circle\" alt=\"profile\" width=\"150\" height=\"150\">\n              </div>\n              <div class=\"col-sm-7 pl-lg-1 col-md-7\" id=\"profileDetails\">\n                <h1 [style.font-size.px]=\"nameSize\" [class]=\"nameCustomClass\" [style.font-weight]=\"nameWeight\"\n                  [style.color]=\"nameColor\" id=\"{{userNameId}}\">\n                  {{userName}}\n                </h1>\n                <!--Commenting out account type (e.g., manufacturer)-->\n                <!-- <h2 [style.font-size.px]=\"accountSize\" [class]=\"accountCustomClass\" id=\"{{accountId}}\"\n                  [style.font-weight]=\"accountWeight\" [style.color]=\"accountColor\">\n                  {{accountType}}\n                </h2> -->\n                <span>\n                  <div class=\"pt-2 pl-1\" *ngIf=\"ratingPrivacy\">\n                    <span class=\"fa fa-star fullStar f22\" *ngFor=\"let star of fullStarsArray\"> </span>\n                    <span class=\"fa fa-star-half halfStarLeft f22\" *ngIf=\"halfStar == 1\"> </span>\n                    <span class=\"fa fa-star-half fa-flip-horizontal halfStarRight f22\" *ngIf=\"halfStar == 1\"> </span>\n                    <span class=\"fa fa-star emptyStar f22\" *ngFor=\"let star of emptyStarsArray\"> </span>\n                  </div>\n                </span>\n                <h2 [style.font-size.px]=\"rateDetailSize\" *ngIf=\"ratingPrivacy\" [class]=\"rateDetailsCustomClass\"\n                  id=\"{{rateDetailsId}}\" [style.font-weight]=\"ratingDetailWeight\" [style.color]=\"rateDetailColor\">\n                  {{rateDetails}}\n                </h2>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-7 col-md-12 col-lg-6 pl-lg-0\">\n          <div class=\"col-sm-12 pt-lg-0 pl-lg-0\" id=\"detailsBlock\">\n            <div class=\"col-sm-12 pt-lg-5 pl-lg-0 p-xs-2\" id=\"editsBlock\">\n              <div class=\"col-sm-12 pt-lg-4\" [ngClass]=\"{'mb-lg-5': !editvisibility }\" id=\"editBlock\"\n                [style.visibility]=\"editvisibility\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12 col-lg-4 offset-lg-4 text-lg-right col-md-3 text-md-center col-xs-12 p-xs-0\"\n                    *ngIf=\"editvisibility\">\n                    <a class=\"profilePercentage colorGrey\" id=\"{{subHeadingOneId}}\"\n                      [style.visibility]=\"editvisibility ? 'visible' : 'hidden'\"\n                      (click)=\"editAccount()\">{{subHeadingOne}}</a>\n                  </div>\n                  <div class=\"col-sm-3 col-md-3 p-md-0 col-lg-4 text-lg-center col-xs-12 p-xs-0\"\n                    *ngIf=\"changePasswordvisibility\">\n                    <a class=\" profilePercentage colorGrey\" id=\"{{subHeadingTwoId}}\"\n                      [style.visibility]=\"changePasswordvisibility ? 'visible' : 'hidden'\"\n                      (click)=\"changePass()\">{{subHeadingTwo}}</a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-12 pt-3 mt-2 pl-md-0\">\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div>\n                      <span class=\"row pb-2\">\n                        <img [src]=\"mailIcon\" [class]=\"mailIconClass\">\n                        <h2 [style.font-size.px]=\"mailTxtSize\" [class]=\"mailcustomClass\" id=\"{{mailId}}\"\n                          [style.font-weight]=\"mailWeight\" [style.color]=\"mailTextColor\">\n                          {{mail}}\n                        </h2>\n                      </span>\n                    </div>\n                    <div class=\"pt-2 pb-2\">\n                      <span class=\"row pb-2\">\n                        <img [src]=\"phNumberIcon\" height=\"20px\" class=\"mt-1\">\n                        <h2 [style.font-size.px]=\"phnumberSize\" [class]=\"phnumberCustomClass\" id=\"{{phoneId}}\"\n                          [style.font-weight]=\"phnumberWeight\" [style.color]=\"phnumberColor\">\n                          {{number}}\n                        </h2>\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-6 pr-2\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-8\">\n                        <span class=\"row pb-2\">\n                          <img [src]=\"addressIcon\">\n                          <h2 [style.font-size.px]=\"addressSize\" [class]=\"addressCustomClass\" id=\"{{addressId}}\"\n                            [style.font-weight]=\"addressWeight\" [style.color]=\"addressColor\">\n                            {{address}}\n                          </h2>\n                        </span>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <a id=\"editProfCont\" (click)=\"samIconAction.emit()\" [hidden]=\"!editvisibility\">\n                          <img [src]=\"samBadgeIcon\" alt=\"sam badge\" [class]=\"samBadgeClass\" height=\"50px\" width=\"50px\">\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);#privacy{flex-grow:1}.bgColor{background-color:#fff;box-shadow:3px -4px 0 3px rgba(0,0,0,.01);border-radius:70px 70px 0 0}.bgColor:before{content:\"\";position:absolute;width:100%;height:202px;border-radius:70px 70px 0 0;background-image:radial-gradient(circle at 50% 0,#3a3a3a,#000),linear-gradient(rgba(101,102,243,.06),rgba(101,102,243,.06))}.colorGrey{color:rgba(255,255,255,.67)!important}@media only screen and (max-width:800px){.colorGrey{color:#000!important}}.border,.border-top{border:1px solid #e9e9e9bf!important}@media only screen and (min-width:1500px){.p-auto{padding-right:3rem!important}}@media only screen and (min-width:1024px){.pt-top{padding-top:94px!important}}@media only screen and (max-width:1024px){.tab-size{flex:auto;max-width:100%}.mbc-auto,.mc-auto{margin:auto!important}.pt-top{padding-top:41px!important}.bgColor:before{height:148px!important}}@media only screen and (max-width:768px){.bgColor:before{height:122px!important}.pt-top{padding-top:10px!important}}.profilePercentage{font-family:\"Encode Sans\",sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#fff}.emptyStar{color:#e1e1e1;margin:4px}.fullStar{color:#898989;margin:4px}.halfStarLeft{color:#898989;position:relative;left:1px}.halfStarRight{color:#e1e1e1;position:relative;right:1px}.profileBox{width:187.656px;border-radius:0 0 30px 30px;background-color:#fff;box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.img-circle{height:150px;width:150px;border-radius:100%;background-color:#fff!important}.bLine{opacity:.09;border:1px solid #979797}.userName{font-family:Poppins,sans-serif!important;font-size:20px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;color:var(--black);word-break:break-all!important}.create-interest-listing{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:14px;color:#b6b6b6;line-height:18px;letter-spacing:.01em;word-break:break-all!important}@media only screen and (max-width:500px){h1,h2{color:#000!important}}h1{font-family:Poppins,sans-serif!important;font-size:33.4px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.5px}h2{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;word-break:break-all!important}@media only screen and (max-width:1024px){h2{font-size:10px!important}}@media only screen and (max-width:568px){h2{font-size:13px!important}.res-color{color:#000!important}.p-xs-0{padding:0}.p-xs-2{padding:0 0 0 .2rem}}.f22{font-size:22px}"]
                    }] }
        ];
        /** @nocollapse */
        SukuProfileHeaderComponent.ctorParameters = function () { return []; };
        SukuProfileHeaderComponent.propDecorators = {
            profileImage: [{ type: i0.Input }],
            userName: [{ type: i0.Input, args: ['user-name',] }],
            nameWeight: [{ type: i0.Input }],
            nameCustomClass: [{ type: i0.Input }],
            nameSize: [{ type: i0.Input }],
            nameColor: [{ type: i0.Input }],
            userNameId: [{ type: i0.Input }],
            accountType: [{ type: i0.Input, args: ['account-type',] }],
            accountWeight: [{ type: i0.Input }],
            accountCustomClass: [{ type: i0.Input }],
            accountSize: [{ type: i0.Input }],
            accountColor: [{ type: i0.Input }],
            accountId: [{ type: i0.Input }],
            ratingCustomClass: [{ type: i0.Input }],
            rateDetails: [{ type: i0.Input }],
            rateDetailColor: [{ type: i0.Input }],
            ratingDetailWeight: [{ type: i0.Input }],
            rateDetailSize: [{ type: i0.Input }],
            rateDetailsCustomClass: [{ type: i0.Input }],
            ratingPrivacy: [{ type: i0.Input }],
            rateDetailsId: [{ type: i0.Input }],
            actionOne: [{ type: i0.Output }],
            actionTwo: [{ type: i0.Output }],
            rating: [{ type: i0.Output }],
            customClass: [{ type: i0.Input }],
            ratingValue: [{ type: i0.Input }, { type: i0.Input, args: ['rating-value',] }],
            subHeadingOne: [{ type: i0.Input }],
            subHeadingOneId: [{ type: i0.Input }],
            subHeadingTwo: [{ type: i0.Input }],
            subHeadingTwoId: [{ type: i0.Input }],
            editvisibility: [{ type: i0.Input }],
            changePasswordvisibility: [{ type: i0.Input }],
            mail: [{ type: i0.Input }],
            mailTxtSize: [{ type: i0.Input }],
            mailTextColor: [{ type: i0.Input }],
            mailWeight: [{ type: i0.Input }],
            mailcustomClass: [{ type: i0.Input }],
            mailId: [{ type: i0.Input }],
            mailIcon: [{ type: i0.Input }],
            mailIconClass: [{ type: i0.Input }],
            number: [{ type: i0.Input }],
            phnumberSize: [{ type: i0.Input }],
            phnumberColor: [{ type: i0.Input }],
            phnumberWeight: [{ type: i0.Input }],
            phnumberCustomClass: [{ type: i0.Input }],
            phNumberIcon: [{ type: i0.Input }],
            phoneId: [{ type: i0.Input }],
            addressIcon: [{ type: i0.Input }],
            address: [{ type: i0.Input }],
            addressSize: [{ type: i0.Input }],
            addressColor: [{ type: i0.Input }],
            addressWeight: [{ type: i0.Input }],
            addressId: [{ type: i0.Input }],
            addressCustomClass: [{ type: i0.Input }],
            samBadgeIcon: [{ type: i0.Input }],
            samBadgeClass: [{ type: i0.Input }],
            samIconAction: [{ type: i0.Output }]
        };
        return SukuProfileHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuSocialIconsComponent = /** @class */ (function () {
        function SukuSocialIconsComponent() {
            this.action = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuSocialIconsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.socialIcons = [
                    {
                        icon: 'fa fa-twitter',
                        path: '/companyInfo',
                        id: 'twitter'
                    },
                    {
                        icon: 'fa fa-facebook',
                        path: '/companyInfo',
                        id: 'facebook'
                    },
                    {
                        icon: 'fa fa-linkedin',
                        path: '/companyInfo',
                        id: 'linkedin'
                    },
                    {
                        icon: 'fa fa-instagram',
                        path: '/companyInfo',
                        id: 'instagram'
                    }
                ];
            };
        /**
         * @param {?} e
         * @return {?}
         */
        SukuSocialIconsComponent.prototype.sendRoutePath = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                this.action.emit(e);
            };
        SukuSocialIconsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-social-icons',
                        template: "<ul id=\"socialIcon\" class=\"icon-effect icon-effect-1a\">\n  <li class=\"mrc-2\" *ngFor=\"let icon of socialIcons;let i=index\" >\n    <a class=\"icon\" id=\"icon?.id\" (click)=\"sendRoutePath(icon?.path)\"><i [ngClass]=\"icon?.icon\"></i></a>\n  </li>\n</ul>",
                        styles: ["ul{list-style:none;padding:0!important}ul>li{display:inline;padding:0!important;margin-right:10px}.icon{display:inline-block;position:relative;z-index:0;width:39px;height:39px;border-radius:50%;font-size:20px!important;line-height:42px;text-align:center;box-shadow:0 2px 2px 0 rgba(0,0,0,.1);background-color:#fff}.icon:after{position:absolute;width:100%;height:100%;border-radius:50%;content:'';box-sizing:content-box}.icon-effect .icon{transition:.5s}.icon-effect .icon:after{top:-7px;left:-7px;box-shadow:0 0 0 3px #caec1c;color:#fff;transition:.5s;-webkit-transform:scale(.9);transform:scale(.9);opacity:0;padding:6.9px 7.1px 8px}.icon-effect-1a .icon:hover{background-color:#caec1c;color:#fff;cursor:pointer!important}.icon-effect-1a .icon:hover:after{-webkit-transform:scale(.9);transform:scale(.9);opacity:1}.mrc-2{margin-right:2rem!important}@media only screen and (min-width:1440px){.mrc-2{margin-right:3.2rem!important}}@media only screen and (min-width:1640px){.mrc-2{margin-right:3.8rem!important}}@media only screen and (min-width:1800px){.mrc-2{margin-right:4.5rem!important}}"]
                    }] }
        ];
        /** @nocollapse */
        SukuSocialIconsComponent.ctorParameters = function () { return []; };
        SukuSocialIconsComponent.propDecorators = {
            socialIcons: [{ type: i0.Input }],
            action: [{ type: i0.Output }]
        };
        return SukuSocialIconsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuRadioButtonComponent = /** @class */ (function () {
        function SukuRadioButtonComponent() {
            this.control = 'traceabilityProduct';
            this.content = 'using an id';
            this.contentCustomClass = 'traceSelectedProd';
            this.radioButtonId = 'sukuRadioButton';
            this.color = 'primary';
            this.value = 1;
            this.action = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuRadioButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @return {?}
         */
        SukuRadioButtonComponent.prototype.buttonAction = /**
         * @return {?}
         */
            function () {
                this.action.emit();
            };
        SukuRadioButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-radio-button',
                        template: "<span [formGroup]=\"form\">\n  <mat-radio-group formControlName=\"{{control}}\" name=\"{{control}}\">\n    <mat-radio-button type=\"radio\" (click)=\"buttonAction()\" class=\"radio-inline thisProductInfoLabel\"\n      [id]=\"radioButtonId\" [color]=\"color\" [value]=\"value\">\n      <span [class]=\"contentCustomClass\">{{content}}</span>\n    </mat-radio-button>\n  </mat-radio-group>\n</span>",
                        styles: [".thisProductInfoLabel{font-family:'Encode Sans',sans-serif;font-size:14px;font-style:normal;font-stretch:normal;line-height:2;letter-spacing:-.4px;color:#1c1c1c}.radio-inline{margin-top:0!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuRadioButtonComponent.ctorParameters = function () { return []; };
        SukuRadioButtonComponent.propDecorators = {
            form: [{ type: i0.Input }],
            control: [{ type: i0.Input }],
            content: [{ type: i0.Input }],
            contentCustomClass: [{ type: i0.Input }],
            radioButtonId: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            value: [{ type: i0.Input }],
            action: [{ type: i0.Output }]
        };
        return SukuRadioButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuDropdownComponent = /** @class */ (function () {
        function SukuDropdownComponent() {
            this.control = 'productTraceability';
            this.data = [];
            this.icon = '../assets/images/arrow-icon.png';
            this.keyValue = 'productName';
            this.displayKey = 'productName';
            this.placeholder = 'select product from this listing';
            this.selectId = 'sttProductTraceability';
            this.errorMsg = 'Cannot be blank';
            this.customSelectClass = '';
            this.select = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuDropdownComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} field
         * @return {?}
         */
        SukuDropdownComponent.prototype.isFieldValid = /**
         * @param {?} field
         * @return {?}
         */
            function (field) {
                return ((!this.form.get(field).valid && this.form.get(field).touched) ||
                    (this.form.get(field).untouched && this.formSumitAttempt));
            };
        SukuDropdownComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-dropdown',
                        template: "<span [formGroup]=\"form\">\n  <mat-form-field class=\"col p-0\">\n    <mat-select id=\"{{selectId}}\" [class]=\"customSelectClass\" #selector formControlName=\"{{control}}\"\n      (selectionChange)=\"select.emit(selector.value)\" [placeholder]=\"placeholder\">\n      <mat-option *ngFor=\"let item of data;let i=index\" value=\"{{item[keyValue]}}\" id=\"option{{i}}\">\n        {{item[displayKey]}}\n      </mat-option>\n    </mat-select>\n    <span matSuffix>\n      <mat-icon><span><img height=\"23\" [src]=\"icon\" width=\"20\"></span></mat-icon>\n    </span>\n    <!-- *ngIf=\"isFieldValid(control)\" -->\n    <mat-error>\n      <span class=\"err_style\">\n        <span *ngIf=\"form.hasError('required',[control])\" id=\"countryReq\">{{errorMsg}}\n        </span>\n      </span>\n    </mat-error>\n  </mat-form-field>\n</span>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SukuDropdownComponent.ctorParameters = function () { return []; };
        SukuDropdownComponent.propDecorators = {
            form: [{ type: i0.Input }],
            control: [{ type: i0.Input }],
            data: [{ type: i0.Input }],
            icon: [{ type: i0.Input }],
            keyValue: [{ type: i0.Input }],
            displayKey: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            formSumitAttempt: [{ type: i0.Input }],
            selectId: [{ type: i0.Input }],
            errorMsg: [{ type: i0.Input }],
            customSelectClass: [{ type: i0.Input }],
            select: [{ type: i0.Output }]
        };
        return SukuDropdownComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuHeaderComponent = /** @class */ (function () {
        function SukuHeaderComponent() {
            this.titleOne = 'LISTING NAME';
            this.contentOne = 'N/A';
            this.titleTwo = 'SELLER NAME';
            this.contentTwo = 'N/A';
            this.contentTwoCustomClass = "c-pointer";
            this.titleThree = 'TIME REMAINING';
            this.action = new i0.EventEmitter();
        }
        Object.defineProperty(SukuHeaderComponent.prototype, "contentThree", {
            get: /**
             * @return {?}
             */ function () {
                return this._date;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._date = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SukuHeaderComponent.prototype, "enableTimer", {
            get: /**
             * @return {?}
             */ function () {
                return this._enableTimer;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._enableTimer = val;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.contentThree = 'N/A';
            };
        SukuHeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-header',
                        template: "<div class=\"product-boxContent\">\n  <div class=\"col pl-lg-5 pt-3 pb-3\">\n    <div class=\"row\">\n      <div class=\"col pl-lg-5\">\n        <h1 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOneCustomClass\" [style.font-weight]=\"titleOneWeight\"\n          [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">{{titleOne}}</h1>\n        <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOneCustomClass\" [style.font-weight]=\"contentOneWeight\"\n          [style.color]=\"contentOneColor\" id=\"{{contentOneId}}\">{{contentOne}}</h2>\n      </div>\n      <div class=\"col pl-lg-5\">\n        <h1 [style.font-size.px]=\"titleTwoSize\" [class]=\"titleTwoCustomClass\" [style.font-weight]=\"titleTwoWeight\"\n          [style.color]=\"titleTwoColor\" id=\"{{titleTwoId}}\">{{titleTwo}}</h1>\n        <h2 class=\"c-pointer\" (click)=\"action.emit()\" [style.font-size.px]=\"contentTwoSize\"\n          [class]=\"contentTwoCustomClass\" [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\"\n          id=\"{{contentTwoId}}\">{{contentTwo}}</h2>\n      </div>\n      <div class=\"col pl-lg-5\">\n        <h1 [style.font-size.px]=\"titleThreeSize\" [class]=\"titleThreeCustomClass\" [style.font-weight]=\"titleThreeWeight\"\n          [style.color]=\"titleThreeColor\" id=\"{{titleThreeId}}\">{{titleThree}}</h1>\n        <h2 *ngIf=\"(_enableTimer == 'false')\" [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreeCustomClass\"\n          [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\" id=\"{{contentThreeId}}\">\n          {{contentThree}}\n        </h2>\n        <h2 *ngIf=\"(_enableTimer == 'true')\">\n          <countdown-timer [end]=\"_date\"></countdown-timer>\n        </h2>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.product-boxContent{width:100%;float:left;background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}h1{color:#fafaf8;font-size:17px}h2{color:#f9f9f1bd;font-size:15px}.c-pointer{cursor:pointer;text-transform:capitalize}.c-pointer:hover{color:#fff;text-decoration:underline}.prizeHead{width:100%;float:left;color:#e5e5e5;line-height:1em;margin:0 0 8px}.prizesubHead{width:100%;float:left;font-family:Poppins,sans-serif!important;font-size:15px;color:#e5e5e5;line-height:1em;margin:0 0 12px}.RectangleBorder{background-color:#fff;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);border-radius:0;margin-top:63px!important;padding-right:20px;padding-left:20px}.productName{color:#7f7e7e;font-size:13px}"]
                    }] }
        ];
        /** @nocollapse */
        SukuHeaderComponent.ctorParameters = function () { return []; };
        SukuHeaderComponent.propDecorators = {
            titleOne: [{ type: i0.Input }],
            titleOneId: [{ type: i0.Input }],
            titleOneSize: [{ type: i0.Input }],
            titleOneColor: [{ type: i0.Input }],
            titleOneWeight: [{ type: i0.Input }],
            titleOneCustomClass: [{ type: i0.Input }],
            contentOne: [{ type: i0.Input }],
            contentOneId: [{ type: i0.Input }],
            contentOneSize: [{ type: i0.Input }],
            contentOneColor: [{ type: i0.Input }],
            contentOneWeight: [{ type: i0.Input }],
            contentOneCustomClass: [{ type: i0.Input }],
            titleTwo: [{ type: i0.Input }],
            titleTwoId: [{ type: i0.Input }],
            titleTwoSize: [{ type: i0.Input }],
            titleTwoColor: [{ type: i0.Input }],
            titleTwoWeight: [{ type: i0.Input }],
            titleTwoCustomClass: [{ type: i0.Input }],
            contentTwo: [{ type: i0.Input }],
            contentTwoId: [{ type: i0.Input }],
            contentTwoSize: [{ type: i0.Input }],
            contentTwoColor: [{ type: i0.Input }],
            contentTwoWeight: [{ type: i0.Input }],
            contentTwoCustomClass: [{ type: i0.Input }],
            titleThree: [{ type: i0.Input }],
            titleThreeId: [{ type: i0.Input }],
            titleThreeSize: [{ type: i0.Input }],
            titleThreeColor: [{ type: i0.Input }],
            titleThreeWeight: [{ type: i0.Input }],
            titleThreeCustomClass: [{ type: i0.Input }],
            contentThree: [{ type: i0.Input }],
            enableTimer: [{ type: i0.Input }],
            contentThreeId: [{ type: i0.Input }],
            contentThreeSize: [{ type: i0.Input }],
            contentThreeColor: [{ type: i0.Input }],
            contentThreeWeight: [{ type: i0.Input }],
            contentThreeCustomClass: [{ type: i0.Input }],
            action: [{ type: i0.Output }]
        };
        return SukuHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuTitleHeaderComponent = /** @class */ (function () {
        function SukuTitleHeaderComponent() {
            this.titleOne = 'LISTING NAME';
            this.titleOneCustomClass = 'pop';
        }
        /**
         * @return {?}
         */
        SukuTitleHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuTitleHeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-title-header',
                        template: "<div class=\"product-boxContent\">\n  <div class=\"col pl-0 pt-3 pb-3\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h1 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOneCustomClass\" [style.font-weight]=\"titleOneWeight\"\n          [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\"><ng-content></ng-content> </h1>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.product-boxContent{width:100%;float:left;background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:10px 5px 0 15px;margin:0}h1{color:#fafaf8;font-size:17px}.c-pointer{cursor:pointer;text-transform:capitalize}.c-pointer:hover{color:#fff;text-decoration:underline}.RectangleBorder{background-color:#fff;border-radius:0;margin-top:63px!important;padding-right:20px;padding-left:20px}.productName{color:#7f7e7e;font-size:13px}.pop{font-family:Poppins,sans-serif!important;font-weight:600;font-size:20px;text-transform:uppercase}"]
                    }] }
        ];
        /** @nocollapse */
        SukuTitleHeaderComponent.ctorParameters = function () { return []; };
        SukuTitleHeaderComponent.propDecorators = {
            titleOne: [{ type: i0.Input }],
            titleOneId: [{ type: i0.Input }],
            titleOneSize: [{ type: i0.Input }],
            titleOneColor: [{ type: i0.Input }],
            titleOneWeight: [{ type: i0.Input }],
            titleOneCustomClass: [{ type: i0.Input }]
        };
        return SukuTitleHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuShippingInfoWidgetComponent = /** @class */ (function () {
        function SukuShippingInfoWidgetComponent() {
            this.widgetTitle = 'Shipping Information';
            this.firstName = '';
            this.secondName = '';
            this.addressOne = '';
            this.addressTwo = '';
            this.city = '';
            this.state = '';
            this.zip = '';
            this.country = '';
        }
        /**
         * @return {?}
         */
        SukuShippingInfoWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuShippingInfoWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-shipping-info-widget',
                        template: "<div class=\"headingStyle\">{{widgetTitle}} </div>\n<div class=\"article mb-4\">\n  <div class=\"col-sm-12 col-xs-12  borderTop border borderLeft\">\n    <div class=\"col-sm-11 col-xs-12 marginBottom22\">\n      <div class=\"font_weight contentStyle\">\n        <!-- {{shippingAddress}} -->\n        <p class=\"bidderAdd mb-1\"><span>{{firstName || 'no data'}}</span>\n          <span class=\"ml-2\">{{secondName}}</span></p>\n        <p class=\"bidderAdd mb-1\">{{addressOne}}</p>\n        <p class=\"bidderAdd mb-1\">{{addressTwo}}</p>\n        <p class=\"bidderAdd mb-1\"><span>{{city}}</span><span\n            class=\"ml-2\">{{state}}</span><span class=\"ml-2\">\n            {{zip}}</span></p>\n        <p class=\"bidderAdd mb-1\">{{country}}</p>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: [".headingStyle{font-family:Poppins,sans-serif;padding-bottom:9px}.contentStyle{padding-top:15px}.marginBottom22{margin-bottom:22px}.bidderAdd{font-family:\"Encode Sans\",sans-serif;font-size:15px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#020202d9;margin-bottom:1px;text-transform:capitalize}.article{width:100%;float:left;margin:0 8.4% 50px 0}"]
                    }] }
        ];
        /** @nocollapse */
        SukuShippingInfoWidgetComponent.ctorParameters = function () { return []; };
        SukuShippingInfoWidgetComponent.propDecorators = {
            widgetTitle: [{ type: i0.Input }],
            firstName: [{ type: i0.Input }],
            secondName: [{ type: i0.Input }],
            addressOne: [{ type: i0.Input }],
            addressTwo: [{ type: i0.Input }],
            city: [{ type: i0.Input }],
            state: [{ type: i0.Input }],
            zip: [{ type: i0.Input }],
            country: [{ type: i0.Input }]
        };
        return SukuShippingInfoWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuProgressBarTypeOneComponent = /** @class */ (function () {
        function SukuProgressBarTypeOneComponent() {
            this.progressStyleOne = 'progressActive';
            this.progressStyleTwo = 'progressUpcoming';
            this.progressStyleThree = 'progressUpcoming';
            this.progressStyleFour = 'progressUpcoming';
            this.progressStyleFive = 'progressUpcoming';
            this.customHeadingOneClass = '';
            this.customHeadingTwoClass = '';
            this.customHeadingThreeClass = '';
            this.customHeadingFourClass = '';
            this.customHeadingFiveClass = '';
            this.progressBarLabels = {
                labelOne: 'RETRIEVE COMPANY DATA',
                labelTwo: 'COMPANY INFO',
                labelThree: 'LICENSING',
                labelFour: 'CONFIRMATION'
            };
            this.progressBarIconId = {
                IconOneId: 'listingDetails',
                IconTwoId: 'productDetails',
                IconThreeId: 'productTraceability',
                IconFourId: 'confirm'
            };
            this.progressBarTitleId = {
                labelOneId: 'listingDetails',
                labelTwoId: 'productDetails',
                labelThreeId: 'productTraceability',
                labelFourId: 'confirm'
            };
        }
        /**
         * @return {?}
         */
        SukuProgressBarTypeOneComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuProgressBarTypeOneComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-progress-bar-type-one',
                        template: "<div class=\"col p-0 pt-4\">\n  <div class=\"row\">\n    <div class=\"col-sm-2 pr-0 mnt-0 \">\n      <span class=\"progressText \">PROGRESS</span>\n      <hr>\n    </div>\n    <div class=\"col-sm-8 p-0\">\n      <table class=\"col-sm-12\">\n        <tr class=\"pt-3\">\n          <td class=\"{{progressStyleOne}} text-center\" id=\"{{progressBarIconId?.IconOneId}}\">\n            <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n            <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\n          </td>\n          <td>\n            <hr>\n          </td>\n          <td class=\"{{progressStyleTwo}} text-center\" id=\"{{progressBarIconId?.IconTwoId}}\">\n            <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n            <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\n          </td>\n          <td>\n            <hr>\n          </td>\n          <td class=\"{{progressStyleThree}} text-center\" id=\"{{progressBarIconId?.IconThreeId}}\">\n            <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n            <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\n          </td>\n          <td>\n            <hr>\n          </td>\n          <td class=\"{{progressStyleFour}} text-center\" id=\"{{progressBarIconId?.IconFourId}}\">\n            <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n            <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\n          </td>\n        </tr>\n      </table>\n    </div>\n    <div class=\"col-sm-2 pl-0 m-auto\">\n      <hr>\n    </div>\n  </div>\n  <div class=\"col-sm-12\">\n    <table class=\"col-sm-10 offset-sm-1 text-center\">\n      <tr id=\"txt\" class=\"pt-3\">\n        <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelOneId}}\">\n          <span class=\"{{customHeadingOneClass}} pr-5\">{{progressBarLabels?.labelOne}}</span>\n        </td>\n        <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelTwoId}}\">\n          <span class=\"{{customHeadingTwoClass}} pr-3\">{{progressBarLabels?.labelTwo}}</span>\n        </td>\n        <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelThreeId}}\">\n          <span class=\"pl-3 {{customHeadingThreeClass}}\">{{progressBarLabels?.labelThree}}</span>\n        </td>\n        <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFourId}}\">\n          <span class=\"pl-5 {{customHeadingFourClass}}\">{{progressBarLabels?.labelFour}}</span>\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);.Progresscircle{width:50px;height:50px;color:#fff;background:#031103;border-radius:50%}.progressActive{width:50px!important;height:50px;color:#fff;background:#a7bf2e;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressTitle{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:20%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.text-bold{color:#000!important;font-weight:700!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center}.checkmark{display:inline-block}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid #d8fc40;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}hr{margin-top:1rem!important;margin-bottom:1rem!important;border:0!important;border-top:1px solid #979797!important;opacity:.2!important}.pr-6{padding-right:5rem}.pl-6{padding-left:4.8rem}.progressText{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:500;color:#b6b6b6}.mnt-0{margin-top:-1.1rem}"]
                    }] }
        ];
        /** @nocollapse */
        SukuProgressBarTypeOneComponent.ctorParameters = function () { return []; };
        SukuProgressBarTypeOneComponent.propDecorators = {
            progressStyleOne: [{ type: i0.Input }],
            progressStyleTwo: [{ type: i0.Input }],
            progressStyleThree: [{ type: i0.Input }],
            progressStyleFour: [{ type: i0.Input }],
            progressStyleFive: [{ type: i0.Input }],
            customHeadingOneClass: [{ type: i0.Input }],
            customHeadingTwoClass: [{ type: i0.Input }],
            customHeadingThreeClass: [{ type: i0.Input }],
            customHeadingFourClass: [{ type: i0.Input }],
            customHeadingFiveClass: [{ type: i0.Input }],
            progressBarLabels: [{ type: i0.Input }],
            progressBarIconId: [{ type: i0.Input }],
            progressBarTitleId: [{ type: i0.Input }]
        };
        return SukuProgressBarTypeOneComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuProgressBarTypeTwoComponent = /** @class */ (function () {
        function SukuProgressBarTypeTwoComponent() {
            this.progressStyleOne = 'progressActive';
            this.progressStyleTwo = 'progressUpcoming';
            this.progressStyleThree = 'progressUpcoming';
            this.progressStyleFour = 'progressUpcoming';
            this.progressStyleFive = 'progressUpcoming';
            this.customHeadingOneClass = '';
            this.customHeadingTwoClass = '';
            this.customHeadingThreeClass = '';
            this.customHeadingFourClass = '';
            this.customHeadingFiveClass = '';
            this.progressBarLabels = {
                labelOne: 'LISTING DETAILS',
                labelTwo: 'PRODUCT DETAILS',
                labelThree: 'PRODUCT TRACEABILITY',
                labelFour: 'TERMS OF SALE',
                labelFive: 'CONFIRM'
            };
            this.progressBarIconId = {
                IconOneId: 'listingDetails',
                IconTwoId: 'productDetails',
                IconThreeId: 'productTraceability',
                IconFourId: 'termsOfSale',
                IconFiveId: 'confirm'
            };
            this.progressBarTitleId = {
                labelOneId: 'listingDetails',
                labelTwoId: 'productDetails',
                labelThreeId: 'productTraceability',
                labelFourId: 'termsOfSale',
                labelFiveId: 'confirm'
            };
        }
        /**
         * @return {?}
         */
        SukuProgressBarTypeTwoComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuProgressBarTypeTwoComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-progress-bar-type-two',
                        template: "<table class=\"col-sm-10 offset-sm-1\">\n  <tr class=\"pt-3\">\n    <td class=\"{{progressStyleOne}} text-center\" id=\"{{progressBarIconId?.IconOneId}}\">\n      <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleTwo}} text-center\" id=\"{{progressBarIconId?.IconTwoId}}\">\n      <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleThree}} text-center\" id=\"{{progressBarIconId?.IconThreeId}}\">\n      <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFour}} text-center\" id=\"{{progressBarIconId?.IconFourId}}\">\n      <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFive}} text-center\" id=\"{{progressBarIconId?.IconFiveId}}\">\n      <span *ngIf=\"(progressStyleFive == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFive == 'progressCompleted')\">5</span>\n    </td>\n  </tr>\n</table>\n<table class=\"col-sm-12 text-center mt-2\">\n  <tr id=\"txt\" class=\"pt-3\">\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelOneId}}\">\n      <span class=\"pl-4 p-xs-0 {{customHeadingOneClass}}\">{{progressBarLabels?.labelOne}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelTwoId}}\">\n      <span class=\"{{customHeadingTwoClass}} pl-4 p-xs-0\">{{progressBarLabels?.labelTwo}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelThreeId}}\">\n      <span class=\"{{customHeadingThreeClass}} p-xs-0\">{{progressBarLabels?.labelThree}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFourId}}\">\n      <span class=\"pr-3 {{customHeadingFourClass}} p-xs-0\">{{progressBarLabels?.labelFour}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFiveId}}\">\n      <span class=\"pr-4 {{customHeadingFiveClass}} p-xs-0\">{{progressBarLabels?.labelFive}}</span>\n    </td>\n  </tr>\n</table>",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);.progressActive{width:50px!important;height:50px;color:#fff;background:#a7bf2e;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressTitle{font-family:\"Encode Sans\",sans-serif!important;font-size:12px!important;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.progress-bar-active{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.circleP{background-color:gray;width:50px!important;height:50px!important;border-radius:50%!important}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:20%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.text-bold{color:#000!important;font-weight:700!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center}.checkmark{display:inline-block}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid #d8fc40;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}hr{margin-top:1rem!important;margin-bottom:1rem!important;border:0!important;border-top:1px solid #979797!important;opacity:.2!important}.pr-6{padding-right:5rem}.pl-6{padding-left:4.8rem}@media only screen and (max-width:990px){.progressTitle{font-size:8px!important}.p-xs-0{padding:0!important}}"]
                    }] }
        ];
        /** @nocollapse */
        SukuProgressBarTypeTwoComponent.ctorParameters = function () { return []; };
        SukuProgressBarTypeTwoComponent.propDecorators = {
            progressStyleOne: [{ type: i0.Input }],
            progressStyleTwo: [{ type: i0.Input }],
            progressStyleThree: [{ type: i0.Input }],
            progressStyleFour: [{ type: i0.Input }],
            progressStyleFive: [{ type: i0.Input }],
            customHeadingOneClass: [{ type: i0.Input }],
            customHeadingTwoClass: [{ type: i0.Input }],
            customHeadingThreeClass: [{ type: i0.Input }],
            customHeadingFourClass: [{ type: i0.Input }],
            customHeadingFiveClass: [{ type: i0.Input }],
            progressBarLabels: [{ type: i0.Input }],
            progressBarIconId: [{ type: i0.Input }],
            progressBarTitleId: [{ type: i0.Input }]
        };
        return SukuProgressBarTypeTwoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuImageWidgetComponent = /** @class */ (function () {
        function SukuImageWidgetComponent() {
            this.imageSrc = '';
        }
        /**
         * @return {?}
         */
        SukuImageWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuImageWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-image-widget',
                        template: "<div class=\"product-img\">\n    <img src=\"{{imageSrc}}\"\n      class=\"ImgRes imgBorder rounded-0\" alt=\"product-01\" />\n  </div>",
                        styles: [".product-img{width:auto;max-width:256px;max-height:158px;height:auto;float:left;text-align:center;line-height:172px;position:relative;z-index:10}.ImgRes{max-width:100%;max-height:158px}.imgBorder{border:1px solid #f2f2f2!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuImageWidgetComponent.ctorParameters = function () { return []; };
        SukuImageWidgetComponent.propDecorators = {
            imageSrc: [{ type: i0.Input }]
        };
        return SukuImageWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScrollToBottomDirective = /** @class */ (function () {
        function ScrollToBottomDirective(_el) {
            this._el = _el;
        }
        /**
         * @return {?}
         */
        ScrollToBottomDirective.prototype.scrollToBottom = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var el = this._el.nativeElement;
                el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight);
            };
        ScrollToBottomDirective.decorators = [
            { type: i0.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[scrollToBottom]'
                    },] }
        ];
        /** @nocollapse */
        ScrollToBottomDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        return ScrollToBottomDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuChatWidgetComponent = /** @class */ (function () {
        function SukuChatWidgetComponent() {
            this._imgPlaceholder = '../assets/images/group.svg';
            this.chat = {
                labelOne: 'Negotiation Chat Box',
                labelOneId: 'negotiationChatBox',
                labelTwo: 'Chatting with:',
                labelTwoId: 'chattingWith'
            };
            this.toUserName = 'N/A';
            this.toUserNameId = 'touserName';
            this.chatStatus = false;
            this.messageData = [];
            this.IconSrc = '../assets/images/send-message-icon.png';
            this.userImg = '../assets/images/group.svg';
            this.toUserImg = '../assets/images/group.svg';
            this.sendmessage = new i0.EventEmitter();
            this.userAction = new i0.EventEmitter();
        }
        Object.defineProperty(SukuChatWidgetComponent.prototype, "chkmessageStatus", {
            get: /**
             * @return {?}
             */ function () {
                return this._chkmessageStatus;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._chkmessageStatus = val;
                if (this._chkmessageStatus) {
                    this.scrollToBottom();
                }
                else {
                    this.scrollToBottom();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} event
         * @return {?}
         */
        SukuChatWidgetComponent.prototype.scrollHandler = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this._initialScrollHeight.scrollHeight - event.target.scrollTop > 390) {
                    this._showScrollDownIcon = true; // enable scrollToBottomOnClik()
                    console.log('true');
                }
                else {
                    this._showScrollDownIcon = false;
                }
            };
        /**
         * @return {?}
         */
        SukuChatWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.messageData.length > 0) {
                    this._messageObj = {
                        message: this.messageData[0].message,
                        timestamp: this.messageData[0].dateTime,
                        userId: this.messageData[0].sender.userId,
                        sender: {
                            userId: this.messageData[0].sender.userId,
                            userName: this.messageData[0].sender.userName
                        },
                        receiver: {
                            userId: this.messageData[0].receiver.userId,
                            userName: this.messageData[0].receiver.userName
                        }
                    };
                }
                this._initialScrollHeight = document.querySelector('.chatBox');
                this.scrollToBottom();
            };
        /**
         * @return {?}
         */
        SukuChatWidgetComponent.prototype.action = /**
         * @return {?}
         */
            function () {
                if (this.messageData) {
                    this.userAction.emit(this.messageData[0].receiver);
                }
            };
        /**
         * @param {?} val
         * @return {?}
         */
        SukuChatWidgetComponent.prototype.sendMessage = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                console.log('test-send', val);
                this.sendmessage.emit(val);
                this.scrollToBottom();
            };
        /**
         * @return {?}
         */
        SukuChatWidgetComponent.prototype.scrollToBottom = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var someElement = document.querySelector('.chatBox');
                console.log('sd', someElement.scrollTop);
                /** @type {?} */
                var duration = 300;
                this.animateScroll(duration);
            };
        /**
         * @param {?} duration
         * @return {?}
         */
        SukuChatWidgetComponent.prototype.animateScroll = /**
         * @param {?} duration
         * @return {?}
         */
            function (duration) {
                /** @type {?} */
                var someElement = document.getElementById('scrollDiv');
                /** @type {?} */
                var start = someElement.scrollTop;
                /** @type {?} */
                var end = someElement.scrollHeight;
                /** @type {?} */
                var change = end - start;
                /** @type {?} */
                var increment = 20;
                /**
                 * @param {?} currentTime
                 * @param {?} startPos
                 * @param {?} changePos
                 * @param {?} delay
                 * @return {?}
                 */
                function easeInOut(currentTime, startPos, changePos, delay) {
                    currentTime /= delay / 2;
                    if (currentTime < 1) {
                        return changePos / 2 * currentTime * currentTime + startPos;
                    }
                    currentTime -= 1;
                    return -changePos / 2 * (currentTime * (currentTime - 2) - 1) + start;
                }
                /**
                 * @param {?} elapsedTime
                 * @return {?}
                 */
                function animate(elapsedTime) {
                    elapsedTime += increment;
                    /** @type {?} */
                    var position = easeInOut(elapsedTime, start, change, duration);
                    someElement.scrollTop = position;
                    if (elapsedTime < duration) {
                        setTimeout(( /**
                         * @return {?}
                         */function () {
                            animate(elapsedTime);
                        }), increment);
                    }
                }
                animate(0);
            };
        SukuChatWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-chat-widget',
                        template: "<div class=\"col p-0\" [ngClass]=\"{'disabled': chatStatus }\">\n  <div class=\"col p-0\">\n    <div class=\"col-sm-12 chat-header p-3\">\n      <div class=\"col p-0\">\n        <div class=\"col p-0\">\n          <div class=\"col-sm-12\">\n            <h1 class=\"title\" id=\"{{chat?.labelOneId}}\">{{chat?.labelOne}}\n            </h1>\n          </div>\n          <div class=\"col-sm-12\">\n            <h2 id=\"{{chat?.labelTwoId}}\">{{chat?.labelTwo}}\n              <span class=\"pl-lg-2 pop-bold\" (click)=\"action()\" id=\"{{toUserNameId}}\">{{toUserName || 'N/A'}}</span>\n            </h2>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group box-shadows col-xs-12 col-sm-12 p-0\">\n      <!-- auto scroll  `scrollMe [scrollTop]=scrollMe.scrollHeight` disabled  -->\n      <div id=\"scrollDiv\" class=\"chatBox p-1\"  (scroll)=\"scrollHandler($event)\">\n        <div class=\"blockChat\" *ngFor=\"let item of messageData; let i=index\" scrollToBottom>\n          <div class=\"col d-flex\" [class.messageContainerRgt]=\"item?.userId == item?.sender?.userId\"\n            [class.messageContainerLft]=\"item?.userId != item?.sender?.userId\">\n            <div class=\"messageStyle mb-1\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\">\n              <span class=\"mcb-5 p-2 align-end\"\n                [ngClass]=\"{'order-last ml-2': item?.userId == item?.sender?.userId, 'mr-2': item?.userId != item?.sender?.userId }\">\n                <img [src]=\"((item?.userId == item?.sender?.userId)? userImg : toUserImg) || _imgPlaceholder\"\n                  alt=\"Avatar\" class=\"user-icon\">\n              </span>\n              <span class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\"\n                class=\"msg-content hoverable\">\n                <div class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\" id=\"messageBlock\">\n                  <span class=\"mb-0\" id=\"chatMessage{{i}}\">\n                    <p class=\"p-2 mb-0 mct-9 \"\n                      [ngClass]=\"{'senderColor': item?.userId == item?.sender?.userId, 'receiverColor': item?.userId != item?.sender?.userId }\">\n                      <span class=\"chatMessage\">{{item?.message}}</span>\n                    </p>\n                  </span>\n                </div>\n                <p class=\"mb-0\" id=\"timeStamp\"\n                  [ngClass]=\"{ 'float-right': item?.userId == item?.sender?.userId, 'float-left': item?.userId != item?.sender?.userId }\">\n                  {{item?.timestamp | date:'medium'}}</p>\n              </span>\n            </div>  \n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <!-- to scroll down -->\n        <div id=\"ScrollDownbutton\" (click)=\"scrollToBottom()\" *ngIf=\"_showScrollDownIcon\">\n          <button class=\"scrollDown\"><span class=\"fa fa-angle-double-down scroll-down-icon mt-1\"></span></button>\n        </div>\n        <div class=\"row p-3 bg-light\">\n          <div style=\"text-align: center;\" class=\"col-lg-10 col-sm-10 col-10 pl-1 pr-1\">\n            <input class=\"form-control\" [disabled]=\"chatStatus\" [ngClass]=\"{'disabled': chatStatus }\" autofocus=\"autofocus\" #messageValue\n              type=\"text\" name=\"message \" id=\"message\" placeholder=\"type message here... \"\n              (keyup.enter)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n          </div>\n          <div class=\"col-sm-2 col-2 p-xs-0 mx-auto f22 c-pointer\" [ngClass]=\"{'disabled': chatStatus }\"\n            (click)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n            <img [src]=\"IconSrc\" alt=\"send-icon\" class=\"rotateIcon\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.title{color:#fafaf8;font-size:28px;font-family:Poppins,sans-serif!important;font-weight:200!important}h1{color:#fafaf8;font-size:20px;font-family:Poppins,sans-serif!important;font-weight:200!important}h2{color:#ccc;font-size:15px;font-family:Poppins,sans-serif!important;font-weight:200;letter-spacing:.15px}.source-title{font-family:Poppins,sans-serif!important;font-weight:700;font-size:15px!important}.pop-bold{font-family:Poppins,sans-serif!important;font-weight:600!important;font-size:16px}.pop-bold:hover{text-decoration:underline;cursor:pointer}.c-pointer{cursor:pointer;text-transform:capitalize}.f22{font-size:22px}.borderChat{height:400.59306px;margin-bottom:25px;border-top:4px solid #a7bf2e;border-bottom:4px solid #a7bf2e}.chat-header{background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:10px 5px 0 15px;margin:0}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:#fff}.user-icon{vertical-align:middle;width:40px;height:40px;border-radius:50%}.messageStyle{display:flex;width:100%}.chatBox{height:300px!important;overflow-x:hidden!important}.chatMessage,.msg-content{font-family:Poppins,sans-serif!important;font-weight:400;font-size:15px}.bg-light{background-color:#f2f2f2!important}.rightFloat{justify-content:flex-end!important}.mct-9{margin-top:9px}.mcb-5{margin-bottom:5px}.align-end{align-self:flex-end}.senderColor{background-color:#a7bf2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:right;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.receiverColor{background-color:#2f2e2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:left;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.form-control{background:#fff;font-size:13px}.form-control:focus{background-color:#fff!important;border-color:none;outline:0;box-shadow:none!important}#timeStamp{color:#716868;font-family:Poppins,sans-serif!important;font-size:10px;padding-top:.3rem;padding-left:.45rem;padding-right:.45rem;opacity:0;z-index:10;line-height:15px}.messageContainerRgt{float:right!important;width:80%}.messageContainerLft{float:left!important;width:80%}#messageBlock:hover+#timeStamp{opacity:1;background-color:#efeeee;color:#726868;border-radius:5px}.rotateIcon{width:34px;height:34px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}::-webkit-scrollbar-thumb{background:#726868;border-radius:6px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #726868;border-radius:6px}#scrollDiv::-webkit-scrollbar{width:8px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:6px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}::-webkit-scrollbar-track{-webkit-box-shadow:inset 10px 5px 6px #f2f2f2;border-radius:0!important;box-shadow:inset 10px 5px 6px #f2f2f2!important}.scrollDown{color:#716868;padding:5px;width:35px;height:35px;border-radius:50%;text-decoration:none;-moz-border-radius:50%;-webkit-border-radius:50%;transition:.3s;border:none;background:0 0}.scrollDown:hover{cursor:pointer}.scroll-down-icon{font-size:17px;color:#716868;transition:.3s}.scrollDown:hover>.scroll-down-icon{transition:.5s;font-size:18px}button:focus{outline:0}#ScrollDownbutton{position:absolute;right:3px;bottom:78px}#ScrollDownbutton:hover{position:absolute;right:3px;bottom:70px;transition:.5s}@media only screen and (max-width:425){.p-xs-0{padding:0!important}}"]
                    }] }
        ];
        /** @nocollapse */
        SukuChatWidgetComponent.ctorParameters = function () { return []; };
        SukuChatWidgetComponent.propDecorators = {
            scroll: [{ type: i0.ViewChild, args: [ScrollToBottomDirective,] }],
            chat: [{ type: i0.Input }],
            toUserName: [{ type: i0.Input }],
            toUserNameId: [{ type: i0.Input }],
            chatStatus: [{ type: i0.Input }],
            messageData: [{ type: i0.Input }],
            IconSrc: [{ type: i0.Input }],
            userImg: [{ type: i0.Input }],
            toUserImg: [{ type: i0.Input }],
            chkmessageStatus: [{ type: i0.Input }],
            sendmessage: [{ type: i0.Output }],
            userAction: [{ type: i0.Output }],
            scrollHandler: [{ type: i0.HostListener, args: ['scroll', ['$event'],] }]
        };
        return SukuChatWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuLoaderComponent = /** @class */ (function () {
        function SukuLoaderComponent() {
            this.waitingMessage = 'please wait...';
            this.lodingDescription = 'The document you are downloading is being authenticated against the SUKU Blockchain.';
            this.loadingMessage = 'Please wait momentarily while this process completes...';
        }
        /**
         * @return {?}
         */
        SukuLoaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuLoaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-loader',
                        template: "<div class=\" col-sm-12 col-xs-12 d-flex col-md-12 col-lg-12 p-0\">\n  <form>\n    <div class=\"col p-0\">\n      <div class=\"col p-0\">\n        <div class=\"col text-center\">\n          <div class=\"row justify-content-center\">\n            <div class=\"product-boxContent\">\n              <div class=\"col pl-lg-4 pt-1 pb-3\">\n                <div class=\"row\">\n                  <div class=\"col pl-lg-0 pl-0 mt-3 mb-3\">\n                    <img\n                      width=\"50\"\n                      src=\"../../../assets/icons/icon-96x96.png\"\n                      class=\" mb-3\"\n                      aria-hidden=\"true\"\n                    />\n                    <br />\n                    <span id=\"confirmation\" class=\"color pb-1 mt-3 mb-3\">\n                      {{ waitingMessage }}\n                    </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <h2 class=\" col-sm-10 FontStyle mt-5 mb-2 text-center\">\n              {{ lodingDescription }}\n            </h2>\n            <div class=\"col-sm-10 spinnerStyle\">\n              <i class=\"fa fa-spinner fa-spin\"></i>\n            </div>\n            <h2 class=\" col-sm-10 FontStyle2 mt-3 text-center\">\n              {{ loadingMessage }}\n            </h2>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n",
                        styles: [".product-boxContent{width:100%;float:left;background-image:linear-gradient(to bottom,rgba(101,102,243,.06),rgba(101,102,243,.06)),radial-gradient(circle at 50% 0,#3a3a3a,#000);border-radius:5px 5px 10px 10px;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}.color{font-family:Poppins,sans-serif!important;color:#fff!important;font-size:20px;font-weight:300}.width100{width:100%}.FontStyle{font-family:Poppins,sans-serif!important;font-size:17px;letter-spacing:.4px;font-weight:700}.FontStyle2{font-family:Poppins,sans-serif!important;font-size:17px;letter-spacing:.4px;font-weight:300}.spinnerStyle{font-size:50px;padding-top:20px;padding-bottom:20px}.boxStyle{border-radius:7px 7px 22px 22px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.bgColor{background-color:#3a3a3a;opacity:.5}"]
                    }] }
        ];
        /** @nocollapse */
        SukuLoaderComponent.ctorParameters = function () { return []; };
        SukuLoaderComponent.propDecorators = {
            waitingMessage: [{ type: i0.Input, args: ['waiting-message',] }],
            lodingDescription: [{ type: i0.Input, args: ['loding-description',] }],
            loadingMessage: [{ type: i0.Input, args: ['loading-message',] }]
        };
        return SukuLoaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuConfirmationComponent = /** @class */ (function () {
        function SukuConfirmationComponent() {
            this.triggerone = new i0.EventEmitter();
            this.triggertwo = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuConfirmationComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuConfirmationComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-confirmation',
                        template: "<mat-dialog-content>\n  <div class=\"col text-center\">\n    <div class=\"row justify-content-center\">\n      <div class=\"product-boxContent\">\n        <div class=\"col pl-lg-4 pt-1 pb-3\">\n          <div class=\"row\">\n            <div class=\"col pl-lg-0 pl-0 mt-3 mb-3\">\n              <i class=\"fa fa-question iconstyle\"></i>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col pl-lg-0 pl-0 mt-2 mb-3\">\n              <span id=\"confirmation\" class=\"color pb-1 mt-3 mb-3\">\n                {{ Titleone }}\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class=\" col-sm-10 FontStyle mt-5 mb-2 text-center\">\n        {{ Titletwo }}\n      </h2>\n      <h2 class=\" col-sm-10 FontStyle2 mt-3 mb-3 text-center\">\n        {{ Titlethree }}\n      </h2>\n    </div>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <div class=\"col text-center\">\n    <div class=\"row\">\n      <div\n        class=\" col-lg-3 col-md-6 col-sm-4 col-xs-10 offset-lg-2 pl-lg-0 pr-lg-0 \"\n      >\n        <button\n          type=\"button\"\n          id=\"{{ Buttononeid }}\"\n          class=\"btn btn-default btn-lg center-block width100\"\n          mat-dialog-close\n          (click)=\"triggerone.emit()\"\n          tabindex=\"-1\"\n        >\n          {{ Buttonone }}\n        </button>\n      </div>\n      <div\n        class=\"col-lg-3 col-md-6 col-sm-4 col-xs-10 offset-lg-2 pl-lg-0 pr-lg-0\"\n      >\n        <button\n          type=\"button\"\n          tabindex=\"1\"\n          (click)=\"triggertwo.emit()\"\n          id=\"{{ Buttontwoid }}\"\n          mat-dialog-close\n          class=\"btn btn-info btn-lg center-block width100\"\n        >\n          {{ Buttontwo }}\n        </button>\n      </div>\n    </div>\n  </div>\n</mat-dialog-actions>\n",
                        styles: [".product-boxContent{width:100%;float:left;background-image:linear-gradient(to bottom,rgba(101,102,243,.06),rgba(101,102,243,.06)),radial-gradient(circle at 50% 0,#3a3a3a,#000);border-radius:5px 5px 10px 10px;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}.color{font-family:Poppins,sans-serif!important;color:#fff!important;font-size:20px;font-weight:300}.width100{width:100%}.FontStyle{font-family:Poppins,sans-serif!important;font-size:17px;letter-spacing:.4px;font-weight:700}.FontStyle2{font-family:Poppins,sans-serif!important;font-size:17px;letter-spacing:.4px;font-weight:300}.spinnerStyle{font-size:50px;padding-top:20px;padding-bottom:20px}.boxStyle{border-radius:7px 7px 22px 22px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.bgColor{background-color:#3a3a3a;opacity:.5}::ng-deep.mat-dialog-container{display:block;padding:0;border-radius:5px 5px 10px 10px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}::ng-deep.mat-dialog-content{margin:0!important;padding:0!important}.iconstyle{font-size:50px;color:#a7bf2e}"]
                    }] }
        ];
        /** @nocollapse */
        SukuConfirmationComponent.ctorParameters = function () { return []; };
        SukuConfirmationComponent.propDecorators = {
            Titleone: [{ type: i0.Input, args: ['Title-one',] }],
            Titletwo: [{ type: i0.Input, args: ['Title-two',] }],
            Titlethree: [{ type: i0.Input, args: ['Title-three',] }],
            Buttonone: [{ type: i0.Input, args: ['Button-one',] }],
            Buttononeid: [{ type: i0.Input, args: ['Button-one-id',] }],
            Buttontwo: [{ type: i0.Input, args: ['Button-two',] }],
            Buttontwoid: [{ type: i0.Input, args: ['Button-two-id',] }],
            triggerone: [{ type: i0.Output }],
            triggertwo: [{ type: i0.Output }]
        };
        return SukuConfirmationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuLargeBidTagComponent = /** @class */ (function () {
        function SukuLargeBidTagComponent() {
            this.priceFontSize = '50px';
            this.priceFontColor = '#ffffff';
            this.listFontColor = '';
            this.listFontSize = '16';
            this.totalPriceLabel = 'Total Price';
            this.quantityLabel = 'Quantity';
            this.minQtyLabel = '';
            this.productPrice = 50;
            this.productTotalPrice = '50';
            this.productQuantity = 1;
            this.paymentMethod = 'USD';
            this.priceFontWeight = 100;
        }
        /**
         * @return {?}
         */
        SukuLargeBidTagComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuLargeBidTagComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-bid-tag-type-two',
                        template: "<aside>\n  <div class=\"prize\"> <span [style.color]=\"priceFontColor\" [style.font-size.px]=\"priceFontSize\" [style.font-weight]=\"priceFontWeight\"> {{(paymentMethod == 'USD') ? '$': ''}}{{productPrice}}</span> <sub>{{(paymentMethod != 'USD') ? paymentMethod : ''}} / UNIT</sub>\n  </div>\n  <ul class=\"bulletPoint\" [style.color]=\"listFontColor\" [style.font-size.px]=\"listFontSize\" [style.font-weight]=\"listFontWeight\">\n    <li>{{totalPriceLabel}}: {{(paymentMethod == 'USD') ? '$': ''}}{{productTotalPrice}} {{(paymentMethod != 'USD') ? paymentMethod : ''}}</li>\n    <li>{{quantityLabel}}: {{productQuantity}}</li>\n    <li *ngIf=\"minQtyLabel\">{{minQtyLabel}}: {{minimumQuantity}}</li>\n  </ul>\n</aside>",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);aside{width:100%;float:left;background:#353a3e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:17px 30px;margin:0 0 18px}aside:last-child{margin-bottom:0}aside .prize{width:100%;float:left;font-family:Poppins,sans-serif!important;font-size:50px;color:#fff;line-height:1em;margin:0 0 12px}aside .prize sub{font-size:38%;color:rgba(255,255,255,.5);top:-2px}aside ul{width:100%;float:left;font-family:Poppins,sans-serif!important;padding:0;margin:0}aside ul li{width:100%;float:left;color:rgba(255,255,255,.5);letter-spacing:.02em;padding:0 0 4px;margin:0}.bulletPoint li{list-style-type:none}"]
                    }] }
        ];
        /** @nocollapse */
        SukuLargeBidTagComponent.ctorParameters = function () { return []; };
        SukuLargeBidTagComponent.propDecorators = {
            priceFontSize: [{ type: i0.Input }],
            priceFontColor: [{ type: i0.Input }],
            listFontColor: [{ type: i0.Input }],
            listFontSize: [{ type: i0.Input }],
            totalPriceLabel: [{ type: i0.Input }],
            quantityLabel: [{ type: i0.Input }],
            minQtyLabel: [{ type: i0.Input }],
            productPrice: [{ type: i0.Input }],
            productTotalPrice: [{ type: i0.Input }],
            productQuantity: [{ type: i0.Input }],
            minimumQuantity: [{ type: i0.Input }],
            paymentMethod: [{ type: i0.Input }],
            priceFontWeight: [{ type: i0.Input }],
            listFontWeight: [{ type: i0.Input }]
        };
        return SukuLargeBidTagComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuBidWidgetTagComponent = /** @class */ (function () {
        function SukuBidWidgetTagComponent() {
            this.paymentMethod = 'USD';
            this.productPrice = 50;
            this.productTotalPrice = '50';
            this.productQuantity = 1;
            this.paymentTerms = 1;
            this.deliveryTerms = 1;
            this.paymentMethodLabel = 'Payment method';
            this.paymentTermsLabel = 'Payment time frame';
            this.deliveryTermsLabel = 'Delivery terms';
            this.totalPriceLabel = 'Total Price';
            this.quantityLabel = 'Quantity';
            this.minQtyLabel = '';
            this.titleText = 'Original Ask';
            this.documents = [];
            this.customClass = 'col';
            this.priceFontSize = '50px';
            this.priceFontColor = '#ffffff';
            this.listFontColor = '';
            this.listFontSize = '16';
            this.bidTitleFontColor = '';
            this.bidTitleFontSize = '';
            this.bidDetilsFontColor = '';
            this.bidDetilsFontSize = '';
            this.priceFontWeight = '';
            this.listFontWeight = '';
            this.bidTitleFontWeight = '';
            this.bidDetilsFontWeight = '';
            this.titleFontColor = '';
            this.titleFontSize = '';
            this.titleFontWeight = '';
        }
        /**
         * @return {?}
         */
        SukuBidWidgetTagComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuBidWidgetTagComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-bid-widget',
                        template: "<div [class]=\"customClass\">\n  <div class=\"article selected\">\n    <div class=\"title-txt\" [style.color]=\"titleFontColor\" [style.font-size.px]=\"titleFontSize\" [style.font-weight]=\"titleFontWeight\">{{titleText}}</div>\n    <aside>\n      <div class=\"prize\"> <span [style.color]=\"priceFontColor\" [style.font-size.px]=\"priceFontSize\" [style.font-weight]=\"priceFontWeight\"> {{(paymentMethod == 'USD') ? '$': ''}}{{productPrice}}</span> <sub>{{(paymentMethod != 'USD') ? paymentMethod : ''}} / UNIT</sub>\n      </div>\n      <ul class=\"bulletPoint\" [style.color]=\"listFontColor\" [style.font-size.px]=\"listFontSize\" [style.font-weight]=\"listFontWeight\">\n        <li>{{totalPriceLabel}}: {{(paymentMethod == 'USD') ? '$': ''}}{{productTotalPrice}} {{(paymentMethod != 'USD') ? paymentMethod : ''}}</li>\n        <li>{{quantityLabel}}: {{productQuantity}}</li>\n        <li *ngIf=\"minQtyLabel\">{{minQtyLabel}}: {{minimumQuantity}}</li>\n      </ul>\n    </aside>\n    <div class=\"list\">\n      <ul class=\"pl-4 productPayment\">\n        <li>\n          <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\" [style.font-size.px]=\"bidTitleFontSize\">{{paymentMethodLabel}}:</span>\n          <span class=\"bid-details ml-2\" [style.font-weight]=\"bidDetilsFontWeight\" [style.color]=\"bidDetilsFontColor\" [style.font-size.px]=\"bidDetilsFontSize\"> {{paymentMethod}}</span>\n        </li>\n        <li>\n          <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\" [style.font-size.px]=\"bidTitleFontSize\">{{paymentTermsLabel}}:</span>\n          <span class=\"bid-details ml-2\" [style.font-weight]=\"bidDetilsFontWeight\" [style.color]=\"bidDetilsFontColor\" [style.font-size.px]=\"bidDetilsFontSize\"> {{paymentTerms}}</span>\n        </li>\n        <li>\n          <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\" [style.font-size.px]=\"bidTitleFontSize\"> {{deliveryTermsLabel}}:</span>\n          <span class=\"bid-details ml-2\" [style.font-weight]=\"bidDetilsFontWeight\" [style.color]=\"bidDetilsFontColor\" [style.font-size.px]=\"bidDetilsFontSize\">  {{deliveryTerms}} {{ deliveryTerms > 1 ? '\n              days' : ' day'}}</span>\n          </li>\n      </ul>\n    </div>\n  </div>  \n</div>",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);.article{float:left}.article .title-txt{font-size:14px!important;width:100%;float:left;color:#1d1d1d;padding:0 0 12px}.article aside{width:100%;float:left;background:#353a3e;border-left:5px solid #010101;border-radius:0 40px 0 0;padding:17px 30px;margin:0 0 18px}.article aside:last-child{margin-bottom:0}.article aside .prize{width:100%;float:left;font-family:Poppins,sans-serif!important;font-size:50px;color:#fff;line-height:1em;margin:0 0 12px}.article aside .prize sub{font-size:38%;color:rgba(255,255,255,.5);top:-2px}.article aside ul{width:100%;float:left;font-family:Poppins,sans-serif!important;padding:0;margin:0}.article aside ul li{width:100%;float:left;color:rgba(255,255,255,.5);letter-spacing:.02em;padding:0 0 4px;margin:0}.article aside ul li:last-child{padding-bottom:0}.article aside ul li:before{display:none}.article .list{width:100%;float:left;border-bottom:1px solid rgba(0,0,0,.1);padding:0 0 20px}.article .list ul li{color:#000}.article.selected aside{border-left-color:#a7bf2e}.article-out{width:100%;float:left;margin:0 0 0 35px}@media (max-width:991px){.article{width:44%;margin:0 3% 50px}.article aside{padding:25px;margin:0 0 18px}.article-out{width:106%;margin:0 -3% -50px;height:100%}}@media (max-width:767px){.article{width:100%;margin:0 0 35px}.article aside{border-radius:0 25px 0 0;padding:20px}.article aside .prize{font-size:40px}.article aside ul{width:100%;float:left;padding:0;margin:0}.article .list{padding:0 0 20px}.article-out{width:100%;margin:0 0 -35px;height:100%}}.bulletPoint li{list-style-type:none}.productPayment{font-family:\"Encode Sans\",sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#3e3e3e}.bid-title{font-family:\"Encode Sans\",sans-serif!important;font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6;text-transform:uppercase}.bid-details{font-family:\"Encode Sans\",sans-serif!important;font-size:14px;font-weight:50px;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#3e3e3e}ul{list-style:none}ul li::before{content:\"\\2022\";color:#dedede;font-weight:700;font-size:16px;display:inline-block;width:1em}.default{width:350px}"]
                    }] }
        ];
        /** @nocollapse */
        SukuBidWidgetTagComponent.ctorParameters = function () { return []; };
        SukuBidWidgetTagComponent.propDecorators = {
            paymentMethod: [{ type: i0.Input }],
            productPrice: [{ type: i0.Input }],
            productTotalPrice: [{ type: i0.Input }],
            productQuantity: [{ type: i0.Input }],
            minimumQuantity: [{ type: i0.Input }],
            paymentTerms: [{ type: i0.Input }],
            deliveryTerms: [{ type: i0.Input }],
            paymentMethodLabel: [{ type: i0.Input }],
            paymentTermsLabel: [{ type: i0.Input }],
            deliveryTermsLabel: [{ type: i0.Input }],
            totalPriceLabel: [{ type: i0.Input }],
            quantityLabel: [{ type: i0.Input }],
            minQtyLabel: [{ type: i0.Input }],
            titleText: [{ type: i0.Input }],
            documents: [{ type: i0.Input }],
            customClass: [{ type: i0.Input }],
            priceFontSize: [{ type: i0.Input }],
            priceFontColor: [{ type: i0.Input }],
            listFontColor: [{ type: i0.Input }],
            listFontSize: [{ type: i0.Input }],
            bidTitleFontColor: [{ type: i0.Input }],
            bidTitleFontSize: [{ type: i0.Input }],
            bidDetilsFontColor: [{ type: i0.Input }],
            bidDetilsFontSize: [{ type: i0.Input }],
            priceFontWeight: [{ type: i0.Input }],
            listFontWeight: [{ type: i0.Input }],
            bidTitleFontWeight: [{ type: i0.Input }],
            bidDetilsFontWeight: [{ type: i0.Input }],
            titleFontColor: [{ type: i0.Input }],
            titleFontSize: [{ type: i0.Input }],
            titleFontWeight: [{ type: i0.Input }]
        };
        return SukuBidWidgetTagComponent;
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
                            SukuProgressBarTypeOneComponent,
                            SukuProgressBarTypeTwoComponent,
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
                            SukuTermsAndConditionsComponent,
                            SukuCardLineTypeOneComponent,
                            SukuCardLineTypeTwoComponent,
                            SukuRatingCardLineComponent,
                            SukuNotificationPanelComponent,
                            SukuAddIconComponent,
                            SukuHomepageComponent,
                            SukuHomepageSectionComponent,
                            SukuHomepageButtonComponent,
                            SukuProfileHeaderComponent,
                            SukuSocialIconsComponent,
                            SukuRadioButtonComponent,
                            SukuDropdownComponent,
                            SukuHeaderComponent,
                            SukuTitleHeaderComponent,
                            SukuShippingInfoWidgetComponent,
                            SukuImageWidgetComponent,
                            SukuChatWidgetComponent,
                            SukuLoaderComponent,
                            SukuConfirmationComponent,
                            ScrollToBottomDirective,
                            SukuLargeBidTagComponent,
                            SukuBidWidgetTagComponent
                        ],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            ngxCountdownTimer.CountdownTimerModule,
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
                            SukuCardLineTypeOneComponent,
                            SukuCardLineTypeTwoComponent,
                            SukuRatingCardLineComponent,
                            SukuNotificationPanelComponent,
                            SukuAddIconComponent,
                            SukuHomepageComponent,
                            SukuHomepageSectionComponent,
                            SukuHomepageButtonComponent,
                            SukuProfileHeaderComponent,
                            SukuSocialIconsComponent,
                            SukuRadioButtonComponent,
                            SukuDropdownComponent,
                            SukuHeaderComponent,
                            SukuTitleHeaderComponent,
                            SukuShippingInfoWidgetComponent,
                            SukuProgressBarTypeOneComponent,
                            SukuProgressBarTypeTwoComponent,
                            SukuImageWidgetComponent,
                            SukuChatWidgetComponent,
                            SukuLoaderComponent,
                            SukuConfirmationComponent,
                            SukuLargeBidTagComponent,
                            SukuBidWidgetTagComponent
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
    exports.ɵbj = SukuACHSettingsComponent;
    exports.ɵbx = SukuAddIconComponent;
    exports.ɵs = SukuAddWidgetComponent;
    exports.ɵx = SukuAddressWidgetComponent;
    exports.ɵbn = SukuBeneficialOwnerComponent;
    exports.ɵv = SukuBidInfoComponent;
    exports.ɵcn = SukuLargeBidTagComponent;
    exports.ɵa = SukuBidTagComponent;
    exports.ɵco = SukuBidWidgetTagComponent;
    exports.ɵbt = SukuCardLineTypeOneComponent;
    exports.ɵbu = SukuCardLineTypeTwoComponent;
    exports.ɵb = SukuCardLineComponent;
    exports.ɵbf = SukuCardTitleComponent;
    exports.ɵck = ScrollToBottomDirective;
    exports.ɵcj = SukuChatWidgetComponent;
    exports.ɵcm = SukuConfirmationComponent;
    exports.ɵbm = SukuCreateCustomerComponent;
    exports.ɵbq = SukuCreationCustomerFileuploadComponent;
    exports.ɵc = SukuDashboardProfileComponent;
    exports.ɵd = SukuDefaultButtonComponent;
    exports.ɵce = SukuDropdownComponent;
    exports.ɵbo = SukuDwollaFundingAgreementComponent;
    exports.ɵbp = SukuDwollaFundingSourceComponent;
    exports.ɵbb = SukuFiltersComponent;
    exports.ɵbl = SukuFundingSourceComponent;
    exports.ɵcf = SukuHeaderComponent;
    exports.ɵe = SukuHeadingComponent;
    exports.ɵf = SukuHomeItalicHeadingComponent;
    exports.ɵg = SukuHomeWidgetComponent;
    exports.ɵca = SukuHomepageButtonComponent;
    exports.ɵbz = SukuHomepageSectionComponent;
    exports.ɵby = SukuHomepageComponent;
    exports.ɵci = SukuImageWidgetComponent;
    exports.ɵh = SukuInfoButtonComponent;
    exports.ɵi = SukuInlineDropdownComponent;
    exports.ɵr = SukuLinkComponent;
    exports.ɵcl = SukuLoaderComponent;
    exports.ɵj = SukuMailWidgetComponent;
    exports.ɵk = SukuMatchChipComponent;
    exports.ɵu = SukuNavSubmenuComponent;
    exports.ɵbw = SukuNotificationPanelComponent;
    exports.ɵl = SukuNotificationWidgetComponent;
    exports.ɵbr = SukuPaymentPortalHelpComponent;
    exports.ɵw = SukuPhoneWidgetComponent;
    exports.ɵm = SukuPrimaryButtonComponent;
    exports.ɵbd = SukuProductTraceWidgetComponent;
    exports.ɵcb = SukuProfileHeaderComponent;
    exports.ɵz = SukuProfileWidgetComponent;
    exports.ɵn = SukuProgressBarTypeOneComponent;
    exports.ɵo = SukuProgressBarTypeTwoComponent;
    exports.ɵcd = SukuRadioButtonComponent;
    exports.ɵbv = SukuRatingCardLineComponent;
    exports.ɵbg = SukuRatingStarComponent;
    exports.ɵbi = SukuResponseComponent;
    exports.ɵy = SukuSearchInputComponent;
    exports.ɵp = SukuSecondaryButtonComponent;
    exports.ɵt = SukuSelectInputComponent;
    exports.ɵch = SukuShippingInfoWidgetComponent;
    exports.ɵbh = SukuShippingWidgetComponent;
    exports.ɵcc = SukuSocialIconsComponent;
    exports.ɵba = SukuStarBadgeComponent;
    exports.ɵq = SukuSubHeadingComponent;
    exports.ɵbs = SukuTermsAndConditionsComponent;
    exports.ɵcg = SukuTitleHeaderComponent;
    exports.ɵbc = SukuTrackProgressBarComponent;
    exports.ɵbk = SukuTransactionHistoryComponent;
    exports.ɵbe = SukuTreeComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=suku-webcomponents.umd.js.map