/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
var SukuCreateCustomerComponent = /** @class */ (function () {
    //  getControlcontroller;
    //  getControlAddress;
    function SukuCreateCustomerComponent(fb) {
        this.fb = fb;
        this.maxDate = '2001-03-11';
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
        console.log('list', val);
        console.log('list', JSON.parse(val));
        if (val) {
            /** @type {?} */
            var data = {
                countryDetails: JSON.parse(val)
            };
            // console.log("data", this.form.get(this.arrayControlName));
            console.log('sdhhjhdsdcddscdscdsbhcdsbcjhd : ' + data);
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
        console.log('list', val);
        console.log('list', JSON.parse(val));
        if (val) {
            /** @type {?} */
            var data = {
                industryType: JSON.parse(val)
            };
            // console.log("data", this.form.get(this.arrayControlName));
            console.log('sdhhjhdsdcddscdscdsbhcdsbcjhd : ' + data);
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
        console.log('list', val);
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
        // const controlName1 = this.CitizensReserveTOScontrol;
        /** @type {?} */
        var controlName1 = this.CRDwollaTOSControl;
        if (this.form.get(controlName1).value) {
            this.CitizensReserveTOSformValid = false;
        }
        else {
            this.CitizensReserveTOSformValid = true;
        }
    };
    SukuCreateCustomerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-create-customer',
                    template: "<form [formGroup]=\"form\">\n  <div class=\"form-group col-sm-12 col-md-12 col-lg-12\">\n    <div class=\"col-sm-12 col-xs-12 text-center\">\n    </div>\n  </div>\n  <br>\n  <div class=\"col-sm-12 pL0 textdev\">\n    <span class=\"Account-Setup\">Customer Creation</span>\n  </div>\n  <br>\n  <div class=\"col Rectangle-2\">\n    <div formArrayName=\"{{formArrayNameValue}}\">\n      <div class=\"form-group col-xs-12 col-sm-12 col-md-12 col-lg-12\" *ngFor=\"let detail of form.get(formArrayNameValue)['controls']; let i=index\"\n        [formGroupName]=\"i\">\n        <div class=\"col-sm-10 col-xs-12 offset-sm-1\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 p-0 mt-sm-5\">\n              <div class=\"col-sm-12 pt-3\">\n                <span class=\"header pL30\">Business Information</span>\n              </div>\n              <div class=\"col-sm-12 pt-2\">\n                <span class=\"hide-details pL30\">ACCOUNT ADMIN</span>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"firstName\" formControlName=\"firstName\" id=\"firstName\" placeholder=\"First name\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('firstName').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['firstName'])\">\n                        Invalid firstName\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"lastName\" formControlName=\"lastName\" id=\"lastName\" placeholder=\"Last name\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('lastName').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['lastName'])\">\n                        Invalid lastName\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"email\" formControlName=\"email\" id=\"email\" placeholder=\"e-mail\">\n                  </mat-form-field>\n\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('email').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['email'])\">\n                        Invalid email\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"address1\" formControlName=\"address1\" id=\"address1\" placeholder=\"Address\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('address1').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['address1'])\">\n                        Invalid Address\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"city\" formControlName=\"city\" id=\"city\" placeholder=\"City\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('city').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['city'])\">\n                        Invalid City\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"state\" formControlName=\"state\" id=\"state\" placeholder=\"State\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('state').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['state'])\">\n                        Invalid State\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"postalCode\" formControlName=\"postalCode\" id=\"postalCode\"\n                      placeholder=\"Postal-code\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('postalCode').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['postalCode'])\">\n                        Invalid postalCode\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"col-sm-6 p-0\">\n                  <span class=\"hide-details\">INDUSTRY</span>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <mat-select id=\"type\" #x (selectionChange)=\"industryTypeFunAction(x.value)\" formControlName=\"type\"\n                      name=\"type\" placeholder=\"Industry type\">\n                      <mat-option value=\"\">Select Industry</mat-option>\n                      <mat-option *ngFor=\"let industry of industryTypeValue; let i = index\" value=\"{{industry | json}}\">\n                        {{industry.name}}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <mat-select id=\"businessClassification\" formControlName=\"businessClassification\" name=\"businessClassification\"\n                      placeholder=\"Business Classification\">\n                      <mat-option value=\"\">Select business Classification</mat-option>\n                      <mat-option *ngFor=\"let businessClassification of businessClassificationValue ; let i = index\"\n                        value=\"{{businessClassification.id}}\">\n                        {{businessClassification.name}}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" id=\"businessName\" formControlName=\"businessName\" name=\"businessName\"\n                      placeholder=\"Business name\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('businessName').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['businessName'])\">\n                        Invalid Business Name\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <mat-select id=\"businessType\" #z (selectionChange)=\"businessTypeFunAction(z.value)\" formControlName=\"businessType\"\n                      name=\"businessType\" placeholder=\"Business type\">\n                      <mat-option value=\"\">Select businessType</mat-option>\n                      <mat-option *ngFor=\"let business of businessTypeValue ; let i = index\" value=\"{{business.value}}\">\n                        {{business.name}}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"ein\" formControlName=\"ein\" id=\"ein\" placeholder=\"EIN\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('ein').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['ein'])\">\n                        Invalid EIN\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n            </div>\n            <!-- controller -->\n            <div class=\"col-sm-6 p-0 mt-sm-5\" formGroupName=\"controller\">\n              <div class=\"col-sm-12 pb-5 pt-3\">\n                <span class=\"header pL30\">Controller Information</span>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" [readonly]=\"validateType\" name=\"firstName\" formControlName=\"firstName\"\n                      id=\"firstName\" placeholder=\"First name\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('controller').get('firstName').touched\">\n                      <span *ngIf=\"getControl.get('controller').hasError('pattern',['firstName'])\">\n                        Invalid FirstName\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" [readonly]=\"validateType\" name=\"lastName\" formControlName=\"lastName\" id=\"lastName\"\n                      placeholder=\"Last name\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('controller').get('lastName').touched\">\n                      <span *ngIf=\"getControl.get('controller').hasError('pattern',['lastName'])\">\n                        Invalid LastName\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" [readonly]=\"validateType\" name=\"title\" formControlName=\"title\" id=\"title\"\n                      placeholder=\"Title\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('controller').get('title').touched\">\n                      <span *ngIf=\"getControl.get('controller').hasError('pattern',['title'])\">\n                        Invalid title\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput [matDatepicker]=\"picker\" [min]=\"2001-12-6\" [readonly]=\"validateType\" placeholder=\"Date of Birth\"\n                      id=\"dateOfBirth\" formControlName=\"dateOfBirth\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker></mat-datepicker>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" [readonly]=\"validateType\" name=\"ssn\" formControlName=\"ssn\" id=\"ssn\"\n                      [placeholder]=\"_ssnLimit\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('controller').get('ssn').touched\">\n                      <span *ngIf=\"getControl.get('controller').hasError('pattern',['ssn'])\">\n                        Invalid SSN\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 \">\n                <div class=\"col-sm-6 p-0\">\n                  <span class=\"hide-details \">ADDRESS</span>\n                </div>\n              </div>\n              <div formGroupName=\"address\">\n                <div class=\"col-sm-12 form-group\">\n                  <div class=\"col flexCol p-0\">\n                    <mat-form-field>\n                      <input matInput type=\"text\" [readonly]=\"validateType\" name=\"address1\" formControlName=\"address1\"\n                        id=\"address1\" placeholder=\"Address-1\">\n                    </mat-form-field>\n                    <mat-error>\n                      <span *ngIf=\"getControl.get('controller').get('address').get('address1').touched\">\n                        <span *ngIf=\"getControl.get('controller').get('address').hasError('pattern',['address1'])\">\n                          Invalid address1\n                        </span>\n                      </span>\n                    </mat-error>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 form-group\">\n                  <div class=\"col flexCol p-0\">\n                    <mat-form-field>\n                      <input matInput type=\"text\" [readonly]=\"validateType\" name=\"address2\" formControlName=\"address2\"\n                        id=\"address2\" placeholder=\"Address-2\">\n                    </mat-form-field>\n                    <mat-error>\n                      <span *ngIf=\"getControl.get('controller').get('address').get('address2').touched\">\n                        <span *ngIf=\"getControl.get('controller').get('address').hasError('pattern',['address2'])\">\n                          Invalid address2\n                        </span>\n                      </span>\n                    </mat-error>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 form-group\">\n                  <div class=\"col flexCol p-0\">\n                    <mat-form-field>\n                      <mat-select #t [disabled]=\"validateType\" (selectionChange)=\"countrySelectAction(t.value)\" name=\"country\"\n                        formControlName=\"country\" id=\"country\" placeholder=\"Country\">\n                        <mat-option *ngFor=\"let item of countriesList; let i = index\" value=\"{{item | json}}\">\n                          {{item.countryName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 form-group\">\n                  <div class=\"col flexCol p-0\">\n                    <mat-form-field>\n                      <mat-select name=\"stateProvinceRegion\" [disabled]=\"validateType\" formControlName=\"stateProvinceRegion\"\n                        id=\"stateProvinceRegion\" placeholder=\"State\">\n                        <mat-option *ngFor=\"let item of statesList; let i = index\" value=\"{{ item.stateShortName }}\">{{\n                          item.stateName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 form-group\">\n                  <div class=\"col flexCol p-0\">\n                    <mat-form-field>\n                      <input matInput type=\"text\" [readonly]=\"validateType\" name=\"city\" formControlName=\"city\" id=\"city\"\n                        placeholder=\"City\">\n                    </mat-form-field>\n                    <mat-error>\n                      <span *ngIf=\"getControl.get('controller').get('address').get('city').touched\">\n                        <span *ngIf=\"getControl.get('controller').get('address').hasError('pattern',['city'])\">\n                          Invalid city\n                        </span>\n                      </span>\n                    </mat-error>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 form-group\">\n                  <div class=\"col flexCol p-0\">\n                    <mat-form-field>\n                      <input matInput type=\"text\" [readonly]=\"validateType\" name=\"postalCode\" formControlName=\"postalCode\"\n                        id=\"postalCode\" placeholder=\"Postal-code\">\n                    </mat-form-field>\n                    <mat-error>\n                      <span *ngIf=\"getControl.get('controller').get('address').get('postalCode').touched\">\n                        <span *ngIf=\"getControl.get('controller').get('address').hasError('pattern',['postalCode'])\">\n                          Invalid postalCode\n                        </span>\n                      </span>\n                    </mat-error>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group col-xs-12 col-sm-10 offset-sm-1 p-0\">\n      <div class=\" col pt-4 col-xs-12\">\n        <span>\n          <mat-checkbox color=\"primary\" type=\"checkbox\" (change)=\"action1()\" id=\"{{CRDwollaTOSControl}}\"\n            formControlName=\"{{CRDwollaTOSControl}}\" name=\"{{CRDwollaTOSControl}}\">\n          </mat-checkbox>\n        </span>\n        <span class=\"col terms f15\">I agree to Citizen Reserve's\n          <a class=\"link ws\" href=\"https://citizensreserve.com/terms\" target=\"_blank\">Terms of Service</a>\n          and\n          <a class=\"link ws\" href=\"https://citizensreserve.com/privacy\" target=\"_blank\">Privacy Policy</a>\n          , as well as our payment partner Dwolla's\n          <a href=\"https://www.dwolla.com/legal/tos/\" target=\"_blank\">Terms of Service </a> and\n          <a href=\"https://www.dwolla.com/legal/privacy/\" target=\"_blank\"> Privacy Policy.</a>\n        </span>\n      </div>\n      <div class=\"col d-flex justify-content-center mt-4 mb-3  pB40\">\n        <button class=\"btn btn-info\" [disabled]=\"CitizensReserveTOSformValid\" [ngClass]=\"{'disabled': CitizensReserveTOSformValid}\"\n          (click)=\"submitData.emit(); onSubmit.emit();\">Agree\n          & Continue</button>\n      </div>\n    </div>\n  </div>\n</form>",
                    styles: [".logo{position:absolute;font-size:50px;opacity:0;right:0;top:0}.hide-details{font-family:'Encode Sans',sans-serif!important;font-size:15px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px;color:#1d1d1d}.pB40{padding-bottom:40px}.hide-details1{font-family:'Encode Sans',sans-serif!important;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px;color:#1d1d1d}.pL43{padding-left:43px}.logoDiv{position:relative;overflow:hidden;margin-top:15px}.f60{font-size:60px;color:#000}.padLft{padding-left:4px}#snackbar{visibility:hidden;min-width:250px;margin-left:-125px;background-color:#333;color:#fff;text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:1;left:50%;bottom:30px;font-size:17px}#snackbar.show{visibility:visible;-webkit-animation:.5s fadein,.5s 2.5s fadeout;animation:.5s fadein,.5s 2.5s fadeout}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@-webkit-keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}#successfull{visibility:hidden;min-width:250px;margin-left:-125px;background-color:#4cca1a;color:#fff;text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:1;left:50%;bottom:30px;font-size:17px}#successfull.show{visibility:visible;-webkit-animation:.5s fadein,.5s 2.5s fadeout;animation:.5s fadein,.5s 2.5s fadeout}.padLeft{padding-left:19px}.marginBoth{margin-top:0;margin-bottom:0}.circle{width:60px;height:60px;color:#fff;background:#031103;border-radius:50%}.progressText{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;color:#b6b6b6}.Setup-marketplace-in{width:249px;height:24px;font-family:Poppins-Regular,sans-serif;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;color:var(--black);margin-left:2%}.-Fill-out-preferenc{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#3e3e3e}.lastDiv{margin-bottom:14%}.lastELem{margin-bottom:1%}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}.trMar{padding-top:3%}.progressTxt{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:1;text-align:center;color:#b6b6b6}.divMarBtm{margin-bottom:3%}.intText{font-family:'Encode Sans',sans-serif!important;font-size:15px;font-weight:500;text-align:center;color:#b6b6b6;margin-bottom:0}.txtFlow{word-wrap:break-word;overflow-wrap:break-word;white-space:pre-wrap}.pL0R0{padding-right:15px;padding-left:15px}.pL0{padding-left:0}.Account-Setup{font-family:Poppins,sans-serif;font-size:21px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#1c1c1c;color:var(--black)}.border_bottom{border-bottom:2px solid #a7bf2e}.cancel{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#000}.zeplin_button{width:81px;height:40px;color:#fff;border:2px solid #757575;background-color:#757575}.btn_zep:hover{background-color:#a7bf2e}.zeplin_button1{width:81px;height:40px;color:#000;border:2px solid #757575;background-color:#272727}.btn_zep1:hover{background-color:#757575}@media screen and (max-width:700px){.Rectangle-10{width:100%;height:100%;background-color:#272727}}@media screen and (max-width:800px){.pL25{padding-left:25px}.pL0R0{padding-left:0;padding-right:0}}@media screen and (max-width:1500px){.pL0R0one{padding-left:15px;padding-right:15px}}@media screen and (min-width:500px){.Rectangle-10{width:100%;height:84px;background-color:#272727}.pL124,.pL128{padding-left:10px}.top_mrg_list_respo{padding-top:20px}.txt_aln_res{text-align:right}.res-pad{padding-left:0;padding-right:20px}.pT30{padding-top:30px}.mT27{margin-top:24px}.pL25{padding-left:0}.pR64L0{padding-right:64px;padding-left:0}.pL0R0{padding-right:0;padding-left:0}.pL0R0one{padding-left:0;padding-right:0}}.pL39{padding-left:82px}.pL-15{padding-left:15px}.pR10{padding-right:5px}.pL15{padding-left:41px}.pR28{padding-right:86px}.pR15{padding-right:46px}@media (max-width:430px){.confirmTxt,.progressTxt{padding-left:0;padding-right:0}.pL40{padding-left:10px}.pL16{padding-left:0}.pr15,.pr28{padding-right:0}}.pT6{padding-top:6px}.pT28{padding-top:28px}.pL20{padding-left:4px}.pT5{padding-top:13px}.REVIEW-BIDS{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#f3eeee}.pT16{padding-top:16px}.Spring-Cases{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:2;letter-spacing:.1px;color:#757575}.pT3B3{padding-top:3px;padding-bottom:3px}.paddingLeft27{padding-left:27px;padding-right:28px}@media (max-width:430px){.paddingLeft27{padding-left:18px;padding-right:23px}}.pB25{padding-bottom:25px}.mL29{margin-left:29px}.progressWidth{width:20%}.mL28{margin-left:28px}.pL31{padding-left:23px}.pR46{padding-right:20px}.pR68{padding-right:38px}.pR82{padding-right:73px}@media screen and (max-width:1024px){.mL29{margin-left:0}.progressWidth{width:20%}.mL28{margin-left:-6px}.pL31{padding-left:0}.pR46{padding-right:0;padding-left:0}.pR68{padding-right:4px}.pR82{padding-right:0}}.pL-250{padding-left:250px}.mL-120{margin-left:120px}.Dashboard{font-family:Poppins,sans-serif!important;font-size:22px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6}.product-list2 .article .product-img{width:255px;height:158px;float:left;text-align:center;line-height:158px;border:1px solid #f4f4f4;box-shadow:rgba(0,0,0,.05) 0 0 2px;position:relative;margin:0 -255px 0 0;z-index:10}.pB-56{padding-bottom:56px}.pL40{padding-left:40px}.Bheight{height:261px}.bgColor{background-color:#9ea6af;box-shadow:rgba(0,0,0,.05) 0 0 2px}.card-header{margin-bottom:17px;background-color:#9ea6af;border-radius:0 0 5px 6px;box-shadow:0 1px 1px rgba(0,0,0,.5);color:#fff}.headerFont{font-family:Poppins-Regular,sans-serif;letter-spacing:0}.pL-30{padding-left:30px}.header{font-family:'Encode Sans',sans-serif;font-size:20px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important}.pT-20{padding-left:41px;padding-top:21px;padding-right:0}.pB-37{padding-bottom:37px}.line{max-height:50px}.pL186{padding-left:186px}.Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05);font-size:12px!important}.btn-agree{color:#fff;background-color:#747474;border-radius:45px;padding:15px 40px;border:0;cursor:pointer;font-weight:700}.btn-agree:hover{background-color:#5a5a5a;cursor:pointer}.disabled{background-color:#757575;cursor:not-allowed!important}.pL100{padding-left:100px}.pT9{padding-top:9px}.pT25{padding-top:25px}.pL63{padding-left:64px}.f15{font-size:15px}.terms{font-family:'Encode Sans'}.display-2{font-size:5.2rem!important;line-height:1.5!important}.border-dot{border-style:dashed!important;border-color:#6a68689e;border-radius:1px;border-width:2px}.upload{opacity:0;width:277px!important;position:relative;height:120px}.upload:hover{cursor:pointer!important}.upload-icon{position:absolute}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.5rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.add{font-family:Poppins,sans-serif!important;font-size:1.7rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px;color:#ccda5c}.add:hover{font-weight:600}"]
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
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.DwollaTOSformValid;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.CitizensReserveTOSformValid;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.validateType;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.getControl;
    /** @type {?} */
    SukuCreateCustomerComponent.prototype.ima;
    /**
     * @type {?}
     * @private
     */
    SukuCreateCustomerComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jcmVhdGUtY3VzdG9tZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY3JlYXRlLWN1c3RvbWVyL3N1a3UtY3JlYXRlLWN1c3RvbWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQXdDLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUY7SUFzQ0MseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQ0FBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUEvQm5DLFlBQU8sR0FBRyxZQUFZLENBQUM7UUFPYixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFtQlQsQ0FBQztJQWZ2QyxzQkFDSSxpREFBUTs7OztRQURaO1lBRUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3ZCLENBQUM7Ozs7O1FBQ0QsVUFBYSxHQUFHO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN4QixDQUFDOzs7T0FKQTs7OztJQWNELDhDQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFB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WSwyQkFBMkI7OztJQUN2Qyw0Q0FBTTs7SUFDTiw2Q0FBTzs7SUFDUCxnREFBVTs7SUFDViw4Q0FBdUI7O0lBQ3ZCLDJDQUF5Qjs7SUFDekIseURBQTRCOztJQUM1QixvREFBdUI7O0lBQ3ZCLGlEQUFvQjs7SUFDcEIseURBQTRCOztJQUM1QixnRUFBbUM7O0lBQ25DLG9EQUE2Qzs7SUFDN0MsaURBQTBDOztJQUMxQywrQ0FBd0M7O0lBQ3hDLGtEQUEyQzs7SUFDM0Msc0RBQStDOztJQUMvQyxzREFBK0M7O0lBQy9DLHdEQUEyQjs7SUFDM0Isd0RBQTJCOztJQUMzQixrRUFBcUM7O0lBU3JDLHlEQUE0Qjs7SUFDNUIsa0VBQXFDOztJQUNyQyxtREFBc0I7O0lBQ3RCLGlEQUFXOztJQUNYLDBDQUFJOzs7OztJQUdRLHlDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBGb3Jtc01vZHVsZSwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtY3JlYXRlLWN1c3RvbWVyJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtY3JlYXRlLWN1c3RvbWVyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtY3JlYXRlLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VDcmVhdGVDdXN0b21lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdF9kYXRhO1xuXHRfZGF0YTE7XG5cdF9zc25MaW1pdDtcblx0bWF4RGF0ZSA9ICcyMDAxLTAzLTExJztcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuXHRASW5wdXQoKSBmb3JtQXJyYXlOYW1lVmFsdWU7XG5cdEBJbnB1dCgpIGNvdW50cmllc0xpc3Q7XG5cdEBJbnB1dCgpIHN0YXRlc0xpc3Q7XG5cdEBJbnB1dCgpIENSRHdvbGxhVE9TQ29udHJvbDtcblx0QElucHV0KCkgQ2l0aXplbnNSZXNlcnZlVE9TY29udHJvbDtcblx0QE91dHB1dCgpIGNvdW50cnlTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBzdWJtaXREYXRhID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgb25TdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBzdGF0ZVNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIGluZHVzdHJ5VHlwZUZ1biA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIGJ1c2luZXNzVHlwZUZ1biA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QElucHV0KCkgYnVzaW5lc3NUeXBlVmFsdWU7XG5cdEBJbnB1dCgpIGluZHVzdHJ5VHlwZVZhbHVlO1xuXHRASW5wdXQoKSBidXNpbmVzc0NsYXNzaWZpY2F0aW9uVmFsdWU7XG5cdEBJbnB1dCgpXG5cdGdldCBzc25MaW1pdCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3NuTGltaXQ7XG5cdH1cblx0c2V0IHNzbkxpbWl0KHZhbCkge1xuICAgIGNvbnNvbGUubG9nKHZhbClcbiAgICB0aGlzLl9zc25MaW1pdCA9IHZhbDtcblx0fVxuXHREd29sbGFUT1Nmb3JtVmFsaWQ6IGJvb2xlYW47XG5cdENpdGl6ZW5zUmVzZXJ2ZVRPU2Zvcm1WYWxpZDogYm9vbGVhbjtcblx0dmFsaWRhdGVUeXBlOiBib29sZWFuO1xuXHRnZXRDb250cm9sO1xuXHRpbWE7XG5cdC8vICBnZXRDb250cm9sY29udHJvbGxlcjtcblx0Ly8gIGdldENvbnRyb2xBZGRyZXNzO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge31cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLkR3b2xsYVRPU2Zvcm1WYWxpZCA9IHRydWU7XG5cdFx0dGhpcy5DaXRpemVuc1Jlc2VydmVUT1Nmb3JtVmFsaWQgPSB0cnVlO1xuXHRcdHRoaXMudmFsaWRhdGVUeXBlID0gdHJ1ZTtcblx0XHR0aGlzLmdldENvbnRyb2wgPSB0aGlzLmZvcm0uZ2V0KHRoaXMuZm9ybUFycmF5TmFtZVZhbHVlKVsnY29udHJvbHMnXVswXTtcblx0fVxuXG5cdGNvdW50cnlTZWxlY3RBY3Rpb24odmFsKSB7XG5cdFx0Y29uc29sZS5sb2coJ2xpc3QnLCB2YWwpO1xuXHRcdGNvbnNvbGUubG9nKCdsaXN0JywgSlNPTi5wYXJzZSh2YWwpKTtcblx0XHRpZiAodmFsKSB7XG5cdFx0XHRjb25zdCBkYXRhID0ge1xuXHRcdFx0XHRjb3VudHJ5RGV0YWlsczogSlNPTi5wYXJzZSh2YWwpXG5cdFx0XHR9O1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJkYXRhXCIsIHRoaXMuZm9ybS5nZXQodGhpcy5hcnJheUNvbnRyb2xOYW1lKSk7XG5cdFx0XHRjb25zb2xlLmxvZygnc2RoaGpoZHNkY2Rkc2Nkc2Nkc2JoY2RzYmNqaGQgOiAnICsgZGF0YSk7XG5cdFx0XHR0aGlzLmNvdW50cnlTZWxlY3QuZW1pdChkYXRhKTtcblx0XHR9XG4gIH1cblxuXHRpbmR1c3RyeVR5cGVGdW5BY3Rpb24odmFsKSB7XG5cdFx0Y29uc29sZS5sb2coJ2xpc3QnLCB2YWwpO1xuXHRcdGNvbnNvbGUubG9nKCdsaXN0JywgSlNPTi5wYXJzZSh2YWwpKTtcblxuXHRcdGlmICh2YWwpIHtcblx0XHRcdGNvbnN0IGRhdGEgPSB7XG5cdFx0XHRcdGluZHVzdHJ5VHlwZTogSlNPTi5wYXJzZSh2YWwpXG5cdFx0XHR9O1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJkYXRhXCIsIHRoaXMuZm9ybS5nZXQodGhpcy5hcnJheUNvbnRyb2xOYW1lKSk7XG5cdFx0XHRjb25zb2xlLmxvZygnc2RoaGpoZHNkY2Rkc2Nkc2Nkc2JoY2RzYmNqaGQgOiAnICsgZGF0YSk7XG5cdFx0XHR0aGlzLmluZHVzdHJ5VHlwZUZ1bi5lbWl0KGRhdGEpO1xuXHRcdH1cblx0fVxuXG5cdGJ1c2luZXNzVHlwZUZ1bkFjdGlvbih2YWwpIHtcblx0XHRjb25zb2xlLmxvZygnbGlzdCcsIHZhbCk7XG5cdFx0dGhpcy52YWxpZGF0ZVR5cGVGdW4odmFsKTtcblx0fVxuXG5cdHZhbGlkYXRlVHlwZUZ1bih0eXBlKSB7XG5cdFx0Y29uc3QgdHlwZXZhbHVlID0gdHlwZTtcblx0XHRpZiAodHlwZXZhbHVlID09ICdzb2xlUHJvcHJpZXRvcnNoaXAnKSB7XG5cdFx0XHR0aGlzLnZhbGlkYXRlVHlwZSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudmFsaWRhdGVUeXBlID0gZmFsc2U7XG5cdFx0fVxuICB9XG5cblx0YWN0aW9uMSgpIHtcblx0XHQvLyBjb25zdCBjb250cm9sTmFtZTEgPSB0aGlzLkNpdGl6ZW5zUmVzZXJ2ZVRPU2NvbnRyb2w7XG5cdFx0Y29uc3QgY29udHJvbE5hbWUxID0gdGhpcy5DUkR3b2xsYVRPU0NvbnRyb2w7XG5cdFx0aWYgKHRoaXMuZm9ybS5nZXQoY29udHJvbE5hbWUxKS52YWx1ZSkge1xuXHRcdFx0dGhpcy5DaXRpemVuc1Jlc2VydmVUT1Nmb3JtVmFsaWQgPSBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5DaXRpemVuc1Jlc2VydmVUT1Nmb3JtVmFsaWQgPSB0cnVlO1xuXHRcdH1cblx0fVxufSJdfQ==