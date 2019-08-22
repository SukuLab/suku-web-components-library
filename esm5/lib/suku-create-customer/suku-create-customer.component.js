/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
var SukuCreateCustomerComponent = /** @class */ (function () {
    function SukuCreateCustomerComponent(fb) {
        this.fb = fb;
        this.countrySelect = new EventEmitter();
        this.submitData = new EventEmitter();
        this.onSubmit = new EventEmitter();
        this.stateSelect = new EventEmitter();
        this.industryTypeFun = new EventEmitter();
        this.businessTypeFun = new EventEmitter();
    }
    Object.defineProperty(SukuCreateCustomerComponent.prototype, "ssnLimit", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ssnLimit;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
        { type: Component, args: [{
                    selector: 'suku-create-customer',
                    template: "<form [formGroup]=\"form\">\r\n  <div class=\"form-group col-sm-12 col-md-12 col-lg-12\">\r\n    <div class=\"col-sm-12 col-xs-12 text-center\">\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"col-sm-12 pL0 textdev\">\r\n    <span class=\"Account-Setup\">Customer Creation</span>\r\n  </div>\r\n  <br>\r\n  <div class=\"col Rectangle-2\" id=\"createCustomer\"> \r\n    <div formArrayName=\"{{formArrayNameValue}}\">\r\n      <div class=\"form-group col-xs-12 col-sm-12 col-md-12 col-lg-12\"\r\n        *ngFor=\"let detail of form.get(formArrayNameValue)['controls']; let i=index\" [formGroupName]=\"i\">\r\n        <div class=\"col-sm-10 col-xs-12 offset-sm-1\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 p-0 mt-sm-5\">\r\n              <div class=\"col-sm-12 pt-3\">\r\n                <span class=\"header pL30\">Business Information</span>\r\n              </div>\r\n              <div class=\"col-sm-12 pt-2\">\r\n                <span class=\"hide-details pL30\">ACCOUNT ADMIN</span>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" name=\"firstName\" formControlName=\"firstName\" id=\"firstName\"\r\n                      placeholder=\"First name\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('firstName').touched\">\r\n                      <span *ngIf=\"getControl.hasError('pattern',['firstName'])\">\r\n                        Invalid firstName\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" name=\"lastName\" formControlName=\"lastName\" id=\"lastName\"\r\n                      placeholder=\"Last name\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('lastName').touched\">\r\n                      <span *ngIf=\"getControl.hasError('pattern',['lastName'])\">\r\n                        Invalid lastName\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" name=\"email\" formControlName=\"email\" id=\"email\" placeholder=\"e-mail\">\r\n                  </mat-form-field>\r\n\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('email').touched\">\r\n                      <span *ngIf=\"getControl.hasError('pattern',['email'])\">\r\n                        Invalid email\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" name=\"address1\" formControlName=\"address1\" id=\"address1\"\r\n                      placeholder=\"Address\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('address1').touched\">\r\n                      <span *ngIf=\"getControl.hasError('pattern',['address1'])\">\r\n                        Invalid Address\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" name=\"city\" formControlName=\"city\" id=\"city\" placeholder=\"City\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('city').touched\">\r\n                      <span *ngIf=\"getControl.hasError('pattern',['city'])\">\r\n                        Invalid City\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" name=\"state\" formControlName=\"state\" id=\"state\" placeholder=\"State\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('state').touched\">\r\n                      <span *ngIf=\"getControl.hasError('pattern',['state'])\">\r\n                        Invalid State\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" name=\"postalCode\" formControlName=\"postalCode\" id=\"postalCode\"\r\n                      placeholder=\"Postal-code\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('postalCode').touched\">\r\n                      <span *ngIf=\"getControl.hasError('pattern',['postalCode'])\">\r\n                        Invalid postalCode\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12\">\r\n                <div class=\"col-sm-6 p-0\">\r\n                  <span class=\"hide-details\">INDUSTRY</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <mat-select id=\"type\" #x (selectionChange)=\"industryTypeFunAction(x.value)\" formControlName=\"type\"\r\n                      name=\"type\" placeholder=\"Industry type\">\r\n                      <mat-option value=\"\">Select Industry</mat-option>\r\n                      <mat-option *ngFor=\"let industry of industryTypeValue; let i = index\" value=\"{{industry | json}}\">\r\n                        {{industry.name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <mat-select id=\"businessClassification\" formControlName=\"businessClassification\"\r\n                      name=\"businessClassification\" placeholder=\"Business Classification\">\r\n                      <mat-option value=\"\">Select business Classification</mat-option>\r\n                      <mat-option *ngFor=\"let businessClassification of businessClassificationValue ; let i = index\"\r\n                        value=\"{{businessClassification.id}}\">\r\n                        {{businessClassification.name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" id=\"businessName\" formControlName=\"businessName\" name=\"businessName\"\r\n                      placeholder=\"Business name\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('businessName').touched\">\r\n                      <span *ngIf=\"getControl.hasError('pattern',['businessName'])\">\r\n                        Invalid Business Name\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <mat-select id=\"businessType\" #z (selectionChange)=\"businessTypeFunAction(z.value)\"\r\n                      formControlName=\"businessType\" name=\"businessType\" placeholder=\"Business type\">\r\n                      <mat-option value=\"\">Select businessType</mat-option>\r\n                      <mat-option *ngFor=\"let business of businessTypeValue ; let i = index\" value=\"{{business.value}}\">\r\n                        {{business.name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" name=\"ein\" formControlName=\"ein\" id=\"ein\" placeholder=\"EIN\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('ein').touched\">\r\n                      <span *ngIf=\"getControl.hasError('pattern',['ein'])\">\r\n                        Invalid EIN\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- controller -->\r\n            <div class=\"col-sm-6 p-0 mt-sm-5\" formGroupName=\"controller\">\r\n              <div class=\"col-sm-12 pb-5 pt-3\">\r\n                <span class=\"header pL30\">Controller Information</span>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" [readonly]=\"validateType\" name=\"firstName\" formControlName=\"firstName\"\r\n                      id=\"firstName\" placeholder=\"First name\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('controller').get('firstName').touched\">\r\n                      <span *ngIf=\"getControl.get('controller').hasError('pattern',['firstName'])\">\r\n                        Invalid FirstName\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" [readonly]=\"validateType\" name=\"lastName\" formControlName=\"lastName\"\r\n                      id=\"lastName\" placeholder=\"Last name\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('controller').get('lastName').touched\">\r\n                      <span *ngIf=\"getControl.get('controller').hasError('pattern',['lastName'])\">\r\n                        Invalid LastName\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" [readonly]=\"validateType\" name=\"title\" formControlName=\"title\"\r\n                      id=\"title\" placeholder=\"Title\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('controller').get('title').touched\">\r\n                      <span *ngIf=\"getControl.get('controller').hasError('pattern',['title'])\">\r\n                        Invalid title\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker\" [max]=\"maxDate\" placeholder=\"Date of Birth\"\r\n                      id=\"dateOfBirth\" formControlName=\"dateOfBirth\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 form-group\">\r\n                <div class=\"col flexCol p-0\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" name=\"ssn\" formControlName=\"ssn\" id=\"ssn\" [placeholder]=\"_ssnLimit\">\r\n                  </mat-form-field>\r\n                  <mat-error>\r\n                    <span *ngIf=\"getControl.get('controller').get('ssn').touched\">\r\n                      <span *ngIf=\"getControl.get('controller').hasError('pattern',['ssn'])\">\r\n                        Invalid SSN\r\n                      </span>\r\n                    </span>\r\n                  </mat-error>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 \">\r\n                <div class=\"col-sm-6 p-0\">\r\n                  <span class=\"hide-details \">ADDRESS</span>\r\n                </div>\r\n              </div>\r\n              <div formGroupName=\"address\">\r\n                <div class=\"col-sm-12 form-group\">\r\n                  <div class=\"col flexCol p-0\">\r\n                    <mat-form-field>\r\n                      <input matInput type=\"text\" [readonly]=\"validateType\" name=\"address1\" formControlName=\"address1\"\r\n                        id=\"address1\" placeholder=\"Address-1\">\r\n                    </mat-form-field>\r\n                    <mat-error>\r\n                      <span *ngIf=\"getControl.get('controller').get('address').get('address1').touched\">\r\n                        <span *ngIf=\"getControl.get('controller').get('address').hasError('pattern',['address1'])\">\r\n                          Invalid address1\r\n                        </span>\r\n                      </span>\r\n                    </mat-error>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12 form-group\">\r\n                  <div class=\"col flexCol p-0\">\r\n                    <mat-form-field>\r\n                      <input matInput type=\"text\" [readonly]=\"validateType\" name=\"address2\" formControlName=\"address2\"\r\n                        id=\"address2\" placeholder=\"Address-2\">\r\n                    </mat-form-field>\r\n                    <mat-error>\r\n                      <span *ngIf=\"getControl.get('controller').get('address').get('address2').touched\">\r\n                        <span *ngIf=\"getControl.get('controller').get('address').hasError('pattern',['address2'])\">\r\n                          Invalid address2\r\n                        </span>\r\n                      </span>\r\n                    </mat-error>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12 form-group\">\r\n                  <div class=\"col flexCol p-0\">\r\n                    <mat-form-field>\r\n                      <mat-select #t (selectionChange)=\"countrySelectAction(t.value)\" name=\"country\"\r\n                        formControlName=\"country\" id=\"country\" placeholder=\"Country\">\r\n                        <mat-option *ngFor=\"let item of countriesList; let i = index\" value=\"{{item | json}}\">\r\n                          {{item.countryName }}</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12 form-group\">\r\n                  <div class=\"col flexCol p-0\">\r\n                    <mat-form-field>\r\n                      <mat-select name=\"stateProvinceRegion\" formControlName=\"stateProvinceRegion\"\r\n                        id=\"stateProvinceRegion\" placeholder=\"State\">\r\n                        <mat-option *ngFor=\"let item of statesList; let i = index\" value=\"{{ item.stateShortName }}\">{{\r\n                          item.stateName }}</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12 form-group\">\r\n                  <div class=\"col flexCol p-0\">\r\n                    <mat-form-field>\r\n                      <input matInput type=\"text\" [readonly]=\"validateType\" name=\"city\" formControlName=\"city\" id=\"city\"\r\n                        placeholder=\"City\">\r\n                    </mat-form-field>\r\n                    <mat-error>\r\n                      <span *ngIf=\"getControl.get('controller').get('address').get('city').touched\">\r\n                        <span *ngIf=\"getControl.get('controller').get('address').hasError('pattern',['city'])\">\r\n                          Invalid city\r\n                        </span>\r\n                      </span>\r\n                    </mat-error>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12 form-group\">\r\n                  <div class=\"col flexCol p-0\">\r\n                    <mat-form-field>\r\n                      <input matInput type=\"text\" [readonly]=\"validateType\" name=\"postalCode\"\r\n                        formControlName=\"postalCode\" id=\"postalCode\" placeholder=\"Postal-code\">\r\n                    </mat-form-field>\r\n                    <mat-error>\r\n                      <span *ngIf=\"getControl.get('controller').get('address').get('postalCode').touched\">\r\n                        <span *ngIf=\"getControl.get('controller').get('address').hasError('pattern',['postalCode'])\">\r\n                          Invalid postalCode\r\n                        </span>\r\n                      </span>\r\n                    </mat-error>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group col-xs-12 col-sm-10 offset-sm-1 p-0\">\r\n      <div class=\" col pt-4 col-xs-12\">\r\n        <span>\r\n          <mat-checkbox color=\"primary\" type=\"checkbox\" (change)=\"action1()\" id=\"{{CRDwollaTOSControl}}\"\r\n            formControlName=\"{{CRDwollaTOSControl}}\" name=\"{{CRDwollaTOSControl}}\">\r\n          </mat-checkbox>\r\n        </span>\r\n        <span class=\"col terms f15\">I agree to Citizen Reserve's\r\n          <a class=\"link ws\" href=\"https://citizensreserve.com/terms\" target=\"_blank\">Terms of Service</a>\r\n          and\r\n          <a class=\"link ws\" href=\"https://citizensreserve.com/privacy\" target=\"_blank\">Privacy Policy</a>\r\n          , as well as our payment partner Dwolla's\r\n          <a href=\"https://www.dwolla.com/legal/tos/\" target=\"_blank\">Terms of Service </a> and\r\n          <a href=\"https://www.dwolla.com/legal/privacy/\" target=\"_blank\"> Privacy Policy.</a>\r\n        </span>\r\n      </div>\r\n      <div class=\"col d-flex justify-content-center mt-4 mb-3  pB40\">\r\n        <button class=\"btn btn-info\" [disabled]=\"CitizensReserveTOSformValid\"\r\n          [ngClass]=\"{'disabled': CitizensReserveTOSformValid}\" (click)=\"submitData.emit(); onSubmit.emit();\">Agree\r\n          & Continue</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>",
                    styles: [".logo{position:absolute;font-size:50px;opacity:0;right:0;top:0}.hide-details{font-family:'Encode Sans',sans-serif!important;font-size:15px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px;color:#1d1d1d}.pB40{padding-bottom:40px}.hide-details1{font-family:'Encode Sans',sans-serif!important;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px;color:#1d1d1d}.pL43{padding-left:43px}.logoDiv{position:relative;overflow:hidden;margin-top:15px}.f60{font-size:60px;color:#000}.padLft{padding-left:4px}#snackbar{visibility:hidden;min-width:250px;margin-left:-125px;background-color:#333;color:#fff;text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:1;left:50%;bottom:30px;font-size:17px}#snackbar.show{visibility:visible;-webkit-animation:.5s fadein,.5s 2.5s fadeout;animation:.5s fadein,.5s 2.5s fadeout}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@-webkit-keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}#successfull{visibility:hidden;min-width:250px;margin-left:-125px;background-color:#4cca1a;color:#fff;text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:1;left:50%;bottom:30px;font-size:17px}#successfull.show{visibility:visible;-webkit-animation:.5s fadein,.5s 2.5s fadeout;animation:.5s fadein,.5s 2.5s fadeout}.padLeft{padding-left:19px}.marginBoth{margin-top:0;margin-bottom:0}.circle{width:60px;height:60px;color:#fff;background:#031103;border-radius:50%}.progressText{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;color:#b6b6b6}.Setup-marketplace-in{width:249px;height:24px;font-family:Poppins-Regular,sans-serif;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;color:var(--black);margin-left:2%}.-Fill-out-preferenc{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#3e3e3e}.lastDiv{margin-bottom:14%}.lastELem{margin-bottom:1%}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}.trMar{padding-top:3%}.progressTxt{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:1;text-align:center;color:#b6b6b6}.divMarBtm{margin-bottom:3%}.intText{font-family:'Encode Sans',sans-serif!important;font-size:15px;font-weight:500;text-align:center;color:#b6b6b6;margin-bottom:0}.txtFlow{word-wrap:break-word;overflow-wrap:break-word;white-space:pre-wrap}.pL0R0{padding-right:15px;padding-left:15px}.pL0{padding-left:0}.Account-Setup{font-family:Poppins,sans-serif;font-size:21px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#1c1c1c;color:var(--black)}.border_bottom{border-bottom:2px solid #a7bf2e}.cancel{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#000}.zeplin_button{width:81px;height:40px;color:#fff;border:2px solid #757575;background-color:#757575}.btn_zep:hover{background-color:#a7bf2e}.zeplin_button1{width:81px;height:40px;color:#000;border:2px solid #757575;background-color:#272727}.btn_zep1:hover{background-color:#757575}@media screen and (max-width:700px){.Rectangle-10{width:100%;height:100%;background-color:#272727}}@media screen and (max-width:800px){.pL25{padding-left:25px}.pL0R0{padding-left:0;padding-right:0}}@media screen and (max-width:1500px){.pL0R0one{padding-left:15px;padding-right:15px}}@media screen and (min-width:500px){.Rectangle-10{width:100%;height:84px;background-color:#272727}.pL124,.pL128{padding-left:10px}.top_mrg_list_respo{padding-top:20px}.txt_aln_res{text-align:right}.res-pad{padding-left:0;padding-right:20px}.pT30{padding-top:30px}.mT27{margin-top:24px}.pL25{padding-left:0}.pR64L0{padding-right:64px;padding-left:0}.pL0R0{padding-right:0;padding-left:0}.pL0R0one{padding-left:0;padding-right:0}}.pL39{padding-left:82px}.pL-15{padding-left:15px}.pR10{padding-right:5px}.pL15{padding-left:41px}.pR28{padding-right:86px}.pR15{padding-right:46px}@media (max-width:430px){.confirmTxt,.progressTxt{padding-left:0;padding-right:0}.pL40{padding-left:10px}.pL16{padding-left:0}.pr15,.pr28{padding-right:0}}.pT6{padding-top:6px}.pT28{padding-top:28px}.pL20{padding-left:4px}.pT5{padding-top:13px}.REVIEW-BIDS{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#f3eeee}.pT16{padding-top:16px}.Spring-Cases{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:2;letter-spacing:.1px;color:#757575}.pT3B3{padding-top:3px;padding-bottom:3px}.paddingLeft27{padding-left:27px;padding-right:28px}@media (max-width:430px){.paddingLeft27{padding-left:18px;padding-right:23px}}.pB25{padding-bottom:25px}.mL29{margin-left:29px}.progressWidth{width:20%}.mL28{margin-left:28px}.pL31{padding-left:23px}.pR46{padding-right:20px}.pR68{padding-right:38px}.pR82{padding-right:73px}@media screen and (max-width:1024px){.mL29{margin-left:0}.progressWidth{width:20%}.mL28{margin-left:-6px}.pL31{padding-left:0}.pR46{padding-right:0;padding-left:0}.pR68{padding-right:4px}.pR82{padding-right:0}}.pL-250{padding-left:250px}.mL-120{margin-left:120px}.Dashboard{font-family:Poppins,sans-serif!important;font-size:22px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6}.product-list2 .article .product-img{width:255px;height:158px;float:left;text-align:center;line-height:158px;border:1px solid #f4f4f4;box-shadow:rgba(0,0,0,.05) 0 0 2px;position:relative;margin:0 -255px 0 0;z-index:10}.pB-56{padding-bottom:56px}.pL40{padding-left:40px}.Bheight{height:261px}.bgColor{background-color:#9ea6af;box-shadow:rgba(0,0,0,.05) 0 0 2px}.card-header{margin-bottom:17px;background-color:#9ea6af;border-radius:0 0 5px 6px;box-shadow:0 1px 1px rgba(0,0,0,.5);color:#fff}.headerFont{font-family:Poppins-Regular,sans-serif;letter-spacing:0}.pL-30{padding-left:30px}.header{font-family:'Encode Sans',sans-serif;font-size:20px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important}.pT-20{padding-left:41px;padding-top:21px;padding-right:0}.pB-37{padding-bottom:37px}.line{max-height:50px}.pL186{padding-left:186px}.Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05);font-size:12px!important}.btn-agree{color:#fff;background-color:#747474;border-radius:45px;padding:15px 40px;border:0;cursor:pointer;font-weight:700}.btn-agree:hover{background-color:#5a5a5a;cursor:pointer}.disabled{background-color:#757575;cursor:not-allowed!important}.pL100{padding-left:100px}.pT9{padding-top:9px}.pT25{padding-top:25px}.pL63{padding-left:64px}.f15{font-size:15px}.terms{font-family:'Encode Sans'}.display-2{font-size:5.2rem!important;line-height:1.5!important}.border-dot{border-style:dashed!important;border-color:#6a68689e;border-radius:1px;border-width:2px}.upload{opacity:0;width:277px!important;position:relative;height:120px}.upload:hover{cursor:pointer!important}.upload-icon{position:absolute}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.5rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.add{font-family:Poppins,sans-serif!important;font-size:1.7rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px;color:#ccda5c}.add:hover{font-weight:600}#createCustomer /deep/.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1rem!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuCreateCustomerComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    SukuCreateCustomerComponent.propDecorators = {
        form: [{ type: Input }],
        formArrayNameValue: [{ type: Input }],
        countriesList: [{ type: Input }],
        statesList: [{ type: Input }],
        CRDwollaTOSControl: [{ type: Input }],
        CitizensReserveTOScontrol: [{ type: Input }],
        countrySelect: [{ type: Output }],
        submitData: [{ type: Output }],
        onSubmit: [{ type: Output }],
        stateSelect: [{ type: Output }],
        industryTypeFun: [{ type: Output }],
        businessTypeFun: [{ type: Output }],
        businessTypeValue: [{ type: Input }],
        industryTypeValue: [{ type: Input }],
        businessClassificationValue: [{ type: Input }],
        ssnLimit: [{ type: Input }]
    };
    return SukuCreateCustomerComponent;
}());
export { SukuCreateCustomerComponent };
if (false) {
    /** @type {?} */
    SukuCreateCustomerComponent.prototype._data;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype._data1;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype._ssnLimit;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.maxDate;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.currentDate;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.DwollaTOSformValid;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.CitizensReserveTOSformValid;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.validateType;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.getControl;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.form;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.formArrayNameValue;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.countriesList;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.statesList;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.CRDwollaTOSControl;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.CitizensReserveTOScontrol;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.countrySelect;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.submitData;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.onSubmit;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.stateSelect;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.industryTypeFun;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.businessTypeFun;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.businessTypeValue;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.industryTypeValue;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.businessClassificationValue;
    /**
     * @type {?}
     * @private
     */
    SukuCreateCustomerComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jcmVhdGUtY3VzdG9tZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY3JlYXRlLWN1c3RvbWVyL3N1a3UtY3JlYXRlLWN1c3RvbWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQXdDLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUY7SUFzQ0MscUNBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBakJ6QixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFZVCxDQUFDO0lBUnZDLHNCQUNJLGlEQUFROzs7O1FBRFo7WUFFQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFDRCxVQUFhLEdBQUc7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLENBQUM7OztPQUpBOzs7O0lBT0QsOENBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCx5REFBbUI7Ozs7SUFBbkIsVUFBb0IsR0FBRztRQUN0QixJQUFJLEdBQUcsRUFBRTs7Z0JBQ0YsSUFBSSxHQUFHO2dCQUNaLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUMvQjtZQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO0lBQ0QsQ0FBQzs7Ozs7SUFFRiwyREFBcUI7Ozs7SUFBckIsVUFBc0IsR0FBRztRQUN4QixJQUFJLEdBQUcsRUFBRTs7Z0JBQ0YsSUFBSSxHQUFHO2dCQUNaLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUM3QjtZQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO0lBQ0YsQ0FBQzs7Ozs7SUFFRCwyREFBcUI7Ozs7SUFBckIsVUFBc0IsR0FBRztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQscURBQWU7Ozs7SUFBZixVQUFnQixJQUFJOztZQUNiLFNBQVMsR0FBRyxJQUFJO1FBQ3RCLElBQUksU0FBUyxJQUFJLG9CQUFvQixFQUFFO1lBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO2FBQU07WUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMxQjtJQUNELENBQUM7Ozs7SUFFRiw2Q0FBTzs7O0lBQVA7O1lBQ08sWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0I7UUFDNUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDdEMsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQztTQUN6QzthQUFNO1lBQ04sSUFBSSxDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQztTQUN4QztJQUNGLENBQUM7Ozs7SUFFRCxzREFBZ0I7OztJQUFoQjs7WUFDUyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUU7O1lBQ3RCLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7WUFDaEMsUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDO1FBQ3pCLElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNqQixvQkFBb0I7WUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUE7U0FDbEU7YUFBTTtZQUNMLHdCQUF3QjtZQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQTtZQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDekM7UUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6RCxDQUFDOztnQkF0R0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLHVpb0JBQW9EOztpQkFFcEQ7Ozs7Z0JBTm1CLFdBQVc7Ozt1QkFpQjdCLEtBQUs7cUNBQ0wsS0FBSztnQ0FDTCxLQUFLOzZCQUNMLEtBQUs7cUNBQ0wsS0FBSzs0Q0FDTCxLQUFLO2dDQUNMLE1BQU07NkJBQ04sTUFBTTsyQkFDTixNQUFNOzhCQUNOLE1BQU07a0NBQ04sTUFBTTtrQ0FDTixNQUFNO29DQUNOLEtBQUs7b0NBQ0wsS0FBSzs4Q0FDTCxLQUFLOzJCQUNMLEtBQUs7O0lBMEVQLGtDQUFDO0NBQUEsQUF4R0QsSUF3R0M7U0FuR1ksMkJBQTJCOzs7SUFDdkMsNENBQU07O0lBQ04sNkNBQU87O0lBQ1AsZ0RBQVU7O0lBQ1YsOENBQVE7O0lBQ1Isa0RBQVk7O0lBQ1oseURBQTRCOztJQUM1QixrRUFBcUM7O0lBQ3JDLG1EQUFzQjs7SUFDdEIsaURBQVc7O0lBQ1gsMkNBQXlCOztJQUN6Qix5REFBNEI7O0lBQzVCLG9EQUF1Qjs7SUFDdkIsaURBQW9COztJQUNwQix5REFBNEI7O0lBQzVCLGdFQUFtQzs7SUFDbkMsb0RBQTZDOztJQUM3QyxpREFBMEM7O0lBQzFDLCtDQUF3Qzs7SUFDeEMsa0RBQTJDOztJQUMzQyxzREFBK0M7O0lBQy9DLHNEQUErQzs7SUFDL0Msd0RBQTJCOztJQUMzQix3REFBMkI7O0lBQzNCLGtFQUFxQzs7Ozs7SUFTekIseUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgRm9ybXNNb2R1bGUsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LWNyZWF0ZS1jdXN0b21lcicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtY3JlYXRlLWN1c3RvbWVyLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1jcmVhdGUtY3VzdG9tZXIuY29tcG9uZW50LnNjc3MnIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VDcmVhdGVDdXN0b21lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0X2RhdGE7XHJcblx0X2RhdGExO1xyXG5cdF9zc25MaW1pdDtcclxuXHRtYXhEYXRlO1xyXG5cdGN1cnJlbnREYXRlO1xyXG5cdER3b2xsYVRPU2Zvcm1WYWxpZDogYm9vbGVhbjtcclxuXHRDaXRpemVuc1Jlc2VydmVUT1Nmb3JtVmFsaWQ6IGJvb2xlYW47XHJcblx0dmFsaWRhdGVUeXBlOiBib29sZWFuO1xyXG5cdGdldENvbnRyb2w7XHJcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIGZvcm1BcnJheU5hbWVWYWx1ZTtcclxuXHRASW5wdXQoKSBjb3VudHJpZXNMaXN0O1xyXG5cdEBJbnB1dCgpIHN0YXRlc0xpc3Q7XHJcblx0QElucHV0KCkgQ1JEd29sbGFUT1NDb250cm9sO1xyXG5cdEBJbnB1dCgpIENpdGl6ZW5zUmVzZXJ2ZVRPU2NvbnRyb2w7XHJcblx0QE91dHB1dCgpIGNvdW50cnlTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIHN1Ym1pdERhdGEgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIG9uU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBzdGF0ZVNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaW5kdXN0cnlUeXBlRnVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBidXNpbmVzc1R5cGVGdW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QElucHV0KCkgYnVzaW5lc3NUeXBlVmFsdWU7XHJcblx0QElucHV0KCkgaW5kdXN0cnlUeXBlVmFsdWU7XHJcblx0QElucHV0KCkgYnVzaW5lc3NDbGFzc2lmaWNhdGlvblZhbHVlO1xyXG5cdEBJbnB1dCgpXHJcblx0Z2V0IHNzbkxpbWl0KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NzbkxpbWl0O1xyXG5cdH1cclxuXHRzZXQgc3NuTGltaXQodmFsKSB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWwpXHJcbiAgICB0aGlzLl9zc25MaW1pdCA9IHZhbDtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5Ed29sbGFUT1Nmb3JtVmFsaWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5DaXRpemVuc1Jlc2VydmVUT1Nmb3JtVmFsaWQgPSB0cnVlO1xyXG5cdFx0dGhpcy52YWxpZGF0ZVR5cGUgPSB0cnVlO1xyXG5cdFx0dGhpcy5nZXRDb250cm9sID0gdGhpcy5mb3JtLmdldCh0aGlzLmZvcm1BcnJheU5hbWVWYWx1ZSlbJ2NvbnRyb2xzJ11bMF07XHJcblx0XHR0aGlzLkdldEZvcm1hdHRlZERhdGUoKTtcclxuXHR9XHJcblxyXG5cdGNvdW50cnlTZWxlY3RBY3Rpb24odmFsKSB7XHJcblx0XHRpZiAodmFsKSB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdFx0Y291bnRyeURldGFpbHM6IEpTT04ucGFyc2UodmFsKVxyXG5cdFx0XHR9O1xyXG5cdFx0XHR0aGlzLmNvdW50cnlTZWxlY3QuZW1pdChkYXRhKTtcclxuXHRcdH1cclxuICB9XHJcblxyXG5cdGluZHVzdHJ5VHlwZUZ1bkFjdGlvbih2YWwpIHtcclxuXHRcdGlmICh2YWwpIHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0XHRpbmR1c3RyeVR5cGU6IEpTT04ucGFyc2UodmFsKVxyXG5cdFx0XHR9O1xyXG5cdFx0XHR0aGlzLmluZHVzdHJ5VHlwZUZ1bi5lbWl0KGRhdGEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YnVzaW5lc3NUeXBlRnVuQWN0aW9uKHZhbCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJ2YWx1ZVwiLCB2YWwpO1xyXG5cdFx0dGhpcy52YWxpZGF0ZVR5cGVGdW4odmFsKTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlVHlwZUZ1bih0eXBlKSB7XHJcblx0XHRjb25zdCB0eXBldmFsdWUgPSB0eXBlO1xyXG5cdFx0aWYgKHR5cGV2YWx1ZSA9PSAnc29sZVByb3ByaWV0b3JzaGlwJykge1xyXG5cdFx0XHR0aGlzLnZhbGlkYXRlVHlwZSA9IHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnZhbGlkYXRlVHlwZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG4gIH1cclxuXHJcblx0YWN0aW9uMSgpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2xOYW1lMSA9IHRoaXMuQ1JEd29sbGFUT1NDb250cm9sO1xyXG5cdFx0aWYgKHRoaXMuZm9ybS5nZXQoY29udHJvbE5hbWUxKS52YWx1ZSkge1xyXG5cdFx0XHR0aGlzLkNpdGl6ZW5zUmVzZXJ2ZVRPU2Zvcm1WYWxpZCA9IGZhbHNlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5DaXRpemVuc1Jlc2VydmVUT1Nmb3JtVmFsaWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0R2V0Rm9ybWF0dGVkRGF0ZSgpIHtcclxuICAgIGNvbnN0IHRvZGF5VGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCB5ZWFyID0gKHRvZGF5VGltZS5nZXRGdWxsWWVhcigpKTtcclxuICAgIGNvbnN0IExlYXBZZWFyID0geWVhciAlIDQ7XHJcbiAgICBpZiAoTGVhcFllYXIgPT0gMCkge1xyXG4gICAgICAvLyBUaGlzIGlzIExlYXAgWWVhclxyXG4gICAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUoKS5zZXREYXRlKHRvZGF5VGltZS5nZXREYXRlKCkgLSA2NTc1KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gVGhpcyBpcyBub3QgbGVhcCB5ZWFyXHJcblx0XHRcdHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLnNldERhdGUodG9kYXlUaW1lLmdldERhdGUoKSAtIDY1NzQpXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiY3hjeGN4Y3hcIiArIFx0dGhpcy5jdXJyZW50RGF0ZSlcclxuICAgIH1cclxuXHRcdHRoaXMubWF4RGF0ZSA9IG5ldyBEYXRlKHRoaXMuY3VycmVudERhdGUpLnRvSVNPU3RyaW5nKCk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=