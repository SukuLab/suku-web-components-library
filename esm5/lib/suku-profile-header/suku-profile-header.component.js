/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
        this.nameWeight = '300';
        this.nameCustomClass = 'mb-4 text-white res-color mt-4 pl-1 text-capitalize';
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
        this.rateDetailsCustomClass = 'pl-2';
        this.rateDetailsId = '';
        this.actionOne = new EventEmitter();
        this.actionTwo = new EventEmitter();
        this.rating = new EventEmitter();
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
        this.samIconAction = new EventEmitter();
    }
    Object.defineProperty(SukuProfileHeaderComponent.prototype, "ratingValue", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
        { type: Component, args: [{
                    selector: 'suku-profile-header',
                    template: "<div class=\"col p-0 bgColor\">\n  <div class=\"col-sm-12 pt1 pt-top\">\n    <div class=\"col pl-lg-5\">\n      <div class=\"row\">\n        <div class=\"col mt-5 p-md-0 pl-lg-2\">\n          <div class=\"col-sm-8 col-md-12 col-lg-12\">\n            <div class=\"row\">\n              <div class=\"col-sm-5 col-md-5\">\n                <img [src]=\"profileImage\" class=\"rounded-circle img-circle\" alt=\"profile\" width=\"150\" height=\"150\">\n              </div>\n              <div class=\"col-sm-7 pt-3 pl-lg-1 col-md-7\">\n                <h1 [style.font-size.px]=\"nameSize\" [class]=\"nameCustomClass\" [style.font-weight]=\"nameWeight\"\n                  [style.color]=\"nameColor\" id=\"{{userNameId}}\">\n                  {{userName}}\n                </h1>\n                <!--Commenting out account type (e.g., manufacturer)-->\n                <!--<h2 [style.font-size.px]=\"accountSize\" [class]=\"accountCustomClass\" id=\"{{accountId}}\"\n                  [style.font-weight]=\"accountWeight\" [style.color]=\"accountColor\">\n                  {{accountType}}\n                </h2>-->\n                <span>\n                  <div class=\"pt-4\" *ngIf=\"ratingPrivacy\">\n                    <span class=\"fa fa-star fullStar f22\" *ngFor=\"let star of fullStarsArray\"> </span>\n                    <span class=\"fa fa-star-half halfStarLeft f22\" *ngIf=\"halfStar == 1\"> </span>\n                    <span class=\"fa fa-star-half fa-flip-horizontal halfStarRight f22\" *ngIf=\"halfStar == 1\"> </span>\n                    <span class=\"fa fa-star emptyStar f22\" *ngFor=\"let star of emptyStarsArray\"> </span>\n                  </div>\n                </span>\n                <h2 [style.font-size.px]=\"rateDetailSize\" *ngIf=\"ratingPrivacy\" [class]=\"rateDetailsCustomClass\"\n                  id=\"{{rateDetailsId}}\" [style.font-weight]=\"ratingDetailWeight\" [style.color]=\"rateDetailColor\">\n                  {{rateDetails}}\n                </h2>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-7 col-md-12 col-lg-6 pl-lg-0\">\n          <div class=\"col-sm-12 pt-lg-5 pl-lg-0\">\n            <div class=\"col-sm-12 pt-lg-5 pl-lg-0 p-xs-2\">\n              <div class=\"col-sm-12 pt-lg-4\" [ngClass]=\"{'mb-lg-3': !editvisibility }\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12 col-lg-4 offset-lg-4 text-lg-right col-md-3 text-md-center col-xs-12 p-xs-0\"\n                    *ngIf=\"editvisibility\">\n                    <a class=\"profilePercentage colorGrey\" id=\"{{subHeadingOneId}}\"\n                      [style.visibility]=\"editvisibility ? 'visible' : 'hidden'\"\n                      (click)=\"editAccount()\">{{subHeadingOne}}</a>\n                  </div>\n                  <div class=\"col-sm-3 col-md-3 p-md-0 col-lg-4 text-lg-center col-xs-12 p-xs-0\"\n                    *ngIf=\"changePasswordvisibility\">\n                    <a class=\" profilePercentage colorGrey\" id=\"{{subHeadingTwoId}}\"\n                      [style.visibility]=\"changePasswordvisibility ? 'visible' : 'hidden'\"\n                      (click)=\"changePass()\">{{subHeadingTwo}}</a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-12 pt-5 pl-md-0\">\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div>\n                      <span class=\"row pb-2\">\n                        <img [src]=\"mailIcon\" [class]=\"mailIconClass\">\n                        <h2 [style.font-size.px]=\"mailTxtSize\" [class]=\"mailcustomClass\" id=\"{{mailId}}\"\n                          [style.font-weight]=\"mailWeight\" [style.color]=\"mailTextColor\">\n                          {{mail}}\n                        </h2>\n                      </span>\n                    </div>\n                    <div class=\"pt-3\">\n                      <span class=\"row pb-2\">\n                        <img [src]=\"phNumberIcon\" height=\"20px\" class=\"mt-1\">\n                        <h2 [style.font-size.px]=\"phnumberSize\" [class]=\"phnumberCustomClass\" id=\"{{phoneId}}\"\n                          [style.font-weight]=\"phnumberWeight\" [style.color]=\"phnumberColor\">\n                          {{number}}\n                        </h2>\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-6 pr-2\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-8\">\n                        <span class=\"row pb-2\">\n                          <img [src]=\"addressIcon\">\n                          <h2 [style.font-size.px]=\"addressSize\" [class]=\"addressCustomClass\" id=\"{{addressId}}\"\n                            [style.font-weight]=\"addressWeight\" [style.color]=\"addressColor\">\n                            {{address}}\n                          </h2>\n                        </span>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <a id=\"editProfCont\" (click)=\"samIconAction.emit()\" [hidden]=\"!editvisibility\">\n                          <img [src]=\"samBadgeIcon\" alt=\"sam badge\" [class]=\"samBadgeClass\" height=\"50px\" width=\"50px\">\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);#privacy{flex-grow:1}.bgColor{background-color:#fff;box-shadow:3px -4px 0 3px rgba(0,0,0,.01);border-radius:70px 70px 0 0}.bgColor:before{content:\"\";position:absolute;width:100%;height:202px;border-radius:70px 70px 0 0;background-image:radial-gradient(circle at 50% 0,#3a3a3a,#000),linear-gradient(rgba(101,102,243,.06),rgba(101,102,243,.06))}.colorGrey{color:rgba(255,255,255,.67)!important}@media only screen and (max-width:800px){.colorGrey{color:#000!important}}.border,.border-top{border:1px solid #e9e9e9bf!important}@media only screen and (min-width:1500px){.p-auto{padding-right:3rem!important}}@media only screen and (min-width:1024px){.pt-top{padding-top:94px!important}}@media only screen and (max-width:1024px){.tab-size{flex:auto;max-width:100%}.mbc-auto,.mc-auto{margin:auto!important}.pt-top{padding-top:41px!important}.bgColor:before{height:148px!important}}@media only screen and (max-width:768px){.bgColor:before{height:122px!important}.pt-top{padding-top:10px!important}}.profilePercentage{font-family:\"Encode Sans\",sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#fff}.emptyStar{color:#e1e1e1;margin:4px}.fullStar{color:#898989;margin:4px}.halfStarLeft{color:#898989;position:relative;left:1px}.halfStarRight{color:#e1e1e1;position:relative;right:1px}.profileBox{width:187.656px;border-radius:0 0 30px 30px;background-color:#fff;box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.img-circle{height:150px;width:150px;border-radius:100%;background-color:#fff!important}.bLine{opacity:.09;border:1px solid #979797}.userName{font-family:Poppins,sans-serif!important;font-size:20px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;color:var(--black);word-break:break-all!important}.create-interest-listing{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:14px;color:#b6b6b6;line-height:18px;letter-spacing:.01em;word-break:break-all!important}@media only screen and (max-width:500px){h1,h2{color:#000!important}}h2{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;word-break:break-all!important}@media only screen and (max-width:1024px){h2{font-size:10px!important}}@media only screen and (max-width:568px){h2{font-size:13px!important}.res-color{color:#000!important}}"]
                }] }
    ];
    /** @nocollapse */
    SukuProfileHeaderComponent.ctorParameters = function () { return []; };
    SukuProfileHeaderComponent.propDecorators = {
        profileImage: [{ type: Input }],
        userName: [{ type: Input, args: ['user-name',] }],
        nameWeight: [{ type: Input }],
        nameCustomClass: [{ type: Input }],
        nameSize: [{ type: Input }],
        nameColor: [{ type: Input }],
        userNameId: [{ type: Input }],
        accountType: [{ type: Input, args: ['account-type',] }],
        accountWeight: [{ type: Input }],
        accountCustomClass: [{ type: Input }],
        accountSize: [{ type: Input }],
        accountColor: [{ type: Input }],
        accountId: [{ type: Input }],
        ratingCustomClass: [{ type: Input }],
        rateDetails: [{ type: Input }],
        rateDetailColor: [{ type: Input }],
        ratingDetailWeight: [{ type: Input }],
        rateDetailSize: [{ type: Input }],
        rateDetailsCustomClass: [{ type: Input }],
        ratingPrivacy: [{ type: Input }],
        rateDetailsId: [{ type: Input }],
        actionOne: [{ type: Output }],
        actionTwo: [{ type: Output }],
        rating: [{ type: Output }],
        customClass: [{ type: Input }],
        ratingValue: [{ type: Input }, { type: Input, args: ['rating-value',] }],
        subHeadingOne: [{ type: Input }],
        subHeadingOneId: [{ type: Input }],
        subHeadingTwo: [{ type: Input }],
        subHeadingTwoId: [{ type: Input }],
        editvisibility: [{ type: Input }],
        changePasswordvisibility: [{ type: Input }],
        mail: [{ type: Input }],
        mailTxtSize: [{ type: Input }],
        mailTextColor: [{ type: Input }],
        mailWeight: [{ type: Input }],
        mailcustomClass: [{ type: Input }],
        mailId: [{ type: Input }],
        mailIcon: [{ type: Input }],
        mailIconClass: [{ type: Input }],
        number: [{ type: Input }],
        phnumberSize: [{ type: Input }],
        phnumberColor: [{ type: Input }],
        phnumberWeight: [{ type: Input }],
        phnumberCustomClass: [{ type: Input }],
        phNumberIcon: [{ type: Input }],
        phoneId: [{ type: Input }],
        addressIcon: [{ type: Input }],
        address: [{ type: Input }],
        addressSize: [{ type: Input }],
        addressColor: [{ type: Input }],
        addressWeight: [{ type: Input }],
        addressId: [{ type: Input }],
        addressCustomClass: [{ type: Input }],
        samBadgeIcon: [{ type: Input }],
        samBadgeClass: [{ type: Input }],
        samIconAction: [{ type: Output }]
    };
    return SukuProfileHeaderComponent;
}());
export { SukuProfileHeaderComponent };
if (false) {
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.fullStars;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.fullStarsArray;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.halfStar;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.emptyStars;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.emptyStarsArray;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype._ratingValue;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.profileImage;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.userName;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.nameWeight;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.nameCustomClass;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.nameSize;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.nameColor;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.userNameId;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.accountType;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.accountWeight;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.accountCustomClass;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.accountSize;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.accountColor;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.accountId;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.ratingCustomClass;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.rateDetails;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.rateDetailColor;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.ratingDetailWeight;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.rateDetailSize;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.rateDetailsCustomClass;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.ratingPrivacy;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.rateDetailsId;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.actionOne;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.actionTwo;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.rating;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.customClass;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.subHeadingOne;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.subHeadingOneId;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.subHeadingTwo;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.subHeadingTwoId;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.editvisibility;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.changePasswordvisibility;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.mail;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.mailTxtSize;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.mailTextColor;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.mailWeight;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.mailcustomClass;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.mailId;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.mailIcon;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.mailIconClass;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.number;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.phnumberSize;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.phnumberColor;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.phnumberWeight;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.phnumberCustomClass;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.phNumberIcon;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.phoneId;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.addressIcon;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.address;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.addressSize;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.addressColor;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.addressWeight;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.addressId;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.addressCustomClass;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.samBadgeIcon;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.samBadgeClass;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.samIconAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9maWxlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9maWxlLWhlYWRlci9zdWt1LXByb2ZpbGUtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQXlGQzs7UUFsRkEsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Ysb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFFWixpQkFBWSxHQUFHLGlDQUFpQyxDQUFDO1FBQ3RDLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFDN0IsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixvQkFBZSxHQUFHLHFEQUFxRCxDQUFDO1FBQ3hFLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFHSixnQkFBVyxHQUFHLGNBQWMsQ0FBQztRQUMzQyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0Qix1QkFBa0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN0QyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixpQkFBWSxHQUFHLDJCQUEyQixDQUFDO1FBQzNDLGNBQVMsR0FBRyxXQUFXLENBQUM7UUFDeEIsc0JBQWlCLEdBQUcsZ0JBQWdCLENBQUM7UUFDckMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsb0JBQWUsR0FBRyxTQUFTLENBQUM7UUFDNUIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLDJCQUFzQixHQUFHLE1BQU0sQ0FBQztRQUVoQyxrQkFBYSxHQUFHLEVBQUUsQ0FBQztR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cUM7O0lBQ3JDLHdEQUFvQzs7SUFDcEMsb0RBQStCOztJQUMvQiw0REFBeUM7O0lBQ3pDLG1EQUFnQzs7SUFDaEMsbURBQTRCOztJQUM1QiwrQ0FBeUM7O0lBQ3pDLCtDQUF5Qzs7SUFDekMsNENBQXNDOztJQUN0QyxpREFBcUI7O0lBWXJCLG1EQUF3Qzs7SUFDeEMscURBQXlDOztJQUN6QyxtREFBMkM7O0lBQzNDLHFEQUE0Qzs7SUFDNUMsb0RBQStCOztJQUMvQiw4REFBeUM7O0lBR3pDLDBDQUFtQzs7SUFDbkMsaURBQTRCOztJQUM1QixtREFBbUM7O0lBQ25DLGdEQUE0Qjs7SUFDNUIscURBQWlFOztJQUNqRSw0Q0FBeUI7O0lBQ3pCLDhDQUFvRDs7SUFDcEQsbURBQTRCOztJQUc1Qiw0Q0FBd0I7O0lBQ3hCLGtEQUE2Qjs7SUFDN0IsbURBQW1DOztJQUNuQyxvREFBZ0M7O0lBQ2hDLHlEQUEyRTs7SUFDM0Usa0RBQThEOztJQUM5RCw2Q0FBc0I7O0lBR3RCLGlEQUE0RDs7SUFDNUQsNkNBQXVDOztJQUN2QyxpREFBNEI7O0lBQzVCLGtEQUFrQzs7SUFDbEMsbURBQStCOztJQUMvQiwrQ0FBd0I7O0lBQ3hCLHdEQUFvRTs7SUFHcEUsa0RBQTJEOztJQUMzRCxtREFBNEI7O0lBQzVCLG1EQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1wcm9maWxlLWhlYWRlcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXByb2ZpbGUtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtcHJvZmlsZS1oZWFkZXIuY29tcG9uZW50LnNjc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVByb2ZpbGVIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHQvKiBwcm9maWxlLS13aWRnZXQgLS1zdGFydCAqL1xuXHRmdWxsU3RhcnMgPSAwO1xuXHRmdWxsU3RhcnNBcnJheSA9IFtdO1xuXHRoYWxmU3RhciA9IDA7XG5cdGVtcHR5U3RhcnMgPSAwO1xuXHRlbXB0eVN0YXJzQXJyYXkgPSBbXTtcblx0X3JhdGluZ1ZhbHVlO1xuXHRASW5wdXQoKSBwcm9maWxlSW1hZ2UgPSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9icm93c2VyLnBuZyc7XG5cdEBJbnB1dCgndXNlci1uYW1lJykgdXNlck5hbWUgPSAnU3VrdSc7XG5cdEBJbnB1dCgpIG5hbWVXZWlnaHQgPSAnMzAwJztcblx0QElucHV0KCkgbmFtZUN1c3RvbUNsYXNzID0gJ21iLTQgdGV4dC13aGl0ZSByZXMtY29sb3IgbXQtNCBwbC0xIHRleHQtY2FwaXRhbGl6ZSc7XG5cdEBJbnB1dCgpIG5hbWVTaXplID0gJzMzLjQnO1xuXHRASW5wdXQoKSBuYW1lQ29sb3I7XG5cdEBJbnB1dCgpIHVzZXJOYW1lSWQ7XG5cdEBJbnB1dCgnYWNjb3VudC10eXBlJykgYWNjb3VudFR5cGUgPSAnTWFudWZhY3R1cmVyJztcblx0QElucHV0KCkgYWNjb3VudFdlaWdodCA9ICc0MDAnO1xuXHRASW5wdXQoKSBhY2NvdW50Q3VzdG9tQ2xhc3MgPSAncGwtMiByZXMtY29sb3InO1xuXHRASW5wdXQoKSBhY2NvdW50U2l6ZSA9ICcxNyc7XG5cdEBJbnB1dCgpIGFjY291bnRDb2xvciA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjcpJztcblx0QElucHV0KCkgYWNjb3VudElkID0gJ2FjY291bnRJZCc7XG5cdEBJbnB1dCgpIHJhdGluZ0N1c3RvbUNsYXNzID0gJ3BsLTIgbWItMiBwdC0zJztcblx0QElucHV0KCkgcmF0ZURldGFpbHMgPSAnJztcblx0QElucHV0KCkgcmF0ZURldGFpbENvbG9yID0gJyM3NTc1NzUnO1xuXHRASW5wdXQoKSByYXRpbmdEZXRhaWxXZWlnaHQgPSAnNDAwJztcblx0QElucHV0KCkgcmF0ZURldGFpbFNpemUgPSAnMTQnO1xuXHRASW5wdXQoKSByYXRlRGV0YWlsc0N1c3RvbUNsYXNzID0gJ3BsLTInO1xuXHRASW5wdXQoKSByYXRpbmdQcml2YWN5OiBCb29sZWFuO1xuXHRASW5wdXQoKSByYXRlRGV0YWlsc0lkID0gJyc7XG5cdEBPdXRwdXQoKSBhY3Rpb25PbmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBhY3Rpb25Ud28gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSByYXRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBJbnB1dCgpIGN1c3RvbUNsYXNzO1xuXHRASW5wdXQoKVxuXHRASW5wdXQoJ3JhdGluZy12YWx1ZScpXG5cdHNldCByYXRpbmdWYWx1ZSh2YWw6IG51bWJlcikge1xuXHRcdHRoaXMuZnVsbFN0YXJzID0gTWF0aC5yb3VuZCh2YWwpO1xuXHRcdHRoaXMuZnVsbFN0YXJzQXJyYXkgPSBBcnJheSh0aGlzLmZ1bGxTdGFycykuZmlsbCgxKTtcblx0XHR0aGlzLmhhbGZTdGFyID0gdGhpcy5mdWxsU3RhcnMgPCB2YWwgPyAxIDogMDtcblx0XHR0aGlzLmVtcHR5U3RhcnMgPSA1IC0gdGhpcy5mdWxsU3RhcnMgLSB0aGlzLmhhbGZTdGFyO1xuXHRcdHRoaXMuZW1wdHlTdGFyc0FycmF5ID0gQXJyYXkodGhpcy5lbXB0eVN0YXJzKS5maWxsKDEpO1xuXHR9XG5cblx0LyogZWRpdC1wYXNzd29yZC0tdmlzaWJpbGl0eSAqL1xuXHRASW5wdXQoKSBzdWJIZWFkaW5nT25lID0gJ2VkaXQgYWNjb3VudCc7XG5cdEBJbnB1dCgpIHN1YkhlYWRpbmdPbmVJZCA9ICdlZGl0QWNjb3VudCc7XG5cdEBJbnB1dCgpIHN1YkhlYWRpbmdUd28gPSAnY2hhbmdlIHBhc3N3b3JkJztcblx0QElucHV0KCkgc3ViSGVhZGluZ1R3b0lkID0gJ2NoYW5nZVBhc3N3b3JkJztcblx0QElucHV0KCkgZWRpdHZpc2liaWxpdHkgPSB0cnVlO1xuXHRASW5wdXQoKSBjaGFuZ2VQYXNzd29yZHZpc2liaWxpdHkgPSB0cnVlO1xuXG5cdC8qIHN1a3UtbWFpbC13aWRnZXQgKi9cblx0QElucHV0KCkgbWFpbCA9ICdkY29ud2F5QHN1a3UuY29tJztcblx0QElucHV0KCkgbWFpbFR4dFNpemUgPSAnMTMnO1xuXHRASW5wdXQoKSBtYWlsVGV4dENvbG9yID0gJyMzZTNlM2UnO1xuXHRASW5wdXQoKSBtYWlsV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgpIG1haWxjdXN0b21DbGFzcyA9ICdwdC0yIHBsLTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic7XG5cdEBJbnB1dCgpIG1haWxJZCA9ICdtYWlsJztcblx0QElucHV0KCkgbWFpbEljb24gPSAnL2Fzc2V0cy9pbWFnZXMvbWFpbC1saWdodC5zdmcnO1xuXHRASW5wdXQoKSBtYWlsSWNvbkNsYXNzID0gJyc7XG5cblx0Lyogc3VrdS1waG9uZS13aWRnZXQgKi9cblx0QElucHV0KCkgbnVtYmVyID0gJ04vQSc7XG5cdEBJbnB1dCgpIHBobnVtYmVyU2l6ZSA9ICcxMyc7XG5cdEBJbnB1dCgpIHBobnVtYmVyQ29sb3IgPSAnIzNlM2UzZSc7XG5cdEBJbnB1dCgpIHBobnVtYmVyV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgpIHBobnVtYmVyQ3VzdG9tQ2xhc3MgPSAncGwtNCBtdC0xIG1iLTEgIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInO1xuXHRASW5wdXQoKSBwaE51bWJlckljb24gPSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9waG9uZS1saWdodC5wbmcnO1xuXHRASW5wdXQoKSBwaG9uZUlkID0gJyc7XG5cblx0Lyogc3VrdS1hZGRyZXNzLXdpZGdldCAqL1xuXHRASW5wdXQoKSBhZGRyZXNzSWNvbiA9ICcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21hcC1waW4uc3ZnJztcblx0QElucHV0KCkgYWRkcmVzcyA9ICc5MzE1IE5XIDExMlRIIEFWRSc7XG5cdEBJbnB1dCgpIGFkZHJlc3NTaXplID0gJzEzJztcblx0QElucHV0KCkgYWRkcmVzc0NvbG9yID0gJyMzZTNlM2UnO1xuXHRASW5wdXQoKSBhZGRyZXNzV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgpIGFkZHJlc3NJZCA9ICcnO1xuXHRASW5wdXQoKSBhZGRyZXNzQ3VzdG9tQ2xhc3MgPSAncHQtMiBwbC00IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInO1xuXG5cdC8qIHNhbS1iYXJkZ2UgKi9cblx0QElucHV0KCkgc2FtQmFkZ2VJY29uID0gJy4uLy4uLy4uL2Fzc2V0cy9pbWcvc2FtQmFkZ2UucG5nJztcblx0QElucHV0KCkgc2FtQmFkZ2VDbGFzcyA9ICcnO1xuXHRAT3V0cHV0KCkgc2FtSWNvbkFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bmdPbkluaXQoKSB7fVxuXG5cdGVkaXRBY2NvdW50KCkge1xuXHRcdHRoaXMuYWN0aW9uT25lLmVtaXQoKTtcblx0fVxuXG5cdGNoYW5nZVBhc3MoKSB7XG5cdFx0dGhpcy5hY3Rpb25Ud28uZW1pdCgpO1xuXHR9XG59XG4iXX0=