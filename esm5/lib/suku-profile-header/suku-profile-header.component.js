/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.mailIcon = '';
        this.mailIconClass = '';
        this.iconOneId = 'mail';
        this.iconOne = 'suku-mail-icon';
        this.iconOneCustomClass = 'mt-2';
        /* suku-phone-widget */
        this.number = 'N/A';
        this.phnumberSize = '13';
        this.phnumberColor = '#3e3e3e';
        this.phnumberWeight = '500';
        this.phnumberCustomClass = 'pl-4 mt-1 mb-1  d-flex align-items-center';
        this.phNumberIcon = '';
        this.phoneId = '';
        this.iconTwoId = 'phone';
        this.iconTwo = 'suku-phone-icon';
        this.iconTwoCustomClass = 'mt-2';
        /* suku-address-widget */
        this.addressIcon = '';
        this.address = '9315 NW 112TH AVE';
        this.addressSize = '13';
        this.addressColor = '#3e3e3e';
        this.addressWeight = '500';
        this.addressId = '';
        this.addressCustomClass = 'pt-2 pl-4 d-flex align-items-center';
        this.iconThreeId = 'address';
        this.iconThree = 'suku-map-pin-icon';
        this.iconThreeCustomClass = 'mt-2';
        /* sam-bardge */
        this.samBadgeIcon = '';
        this.samBadgeClass = '';
        this.samIconAction = new EventEmitter();
        this.iconFourId = 'address';
        this.iconFour = 'suku-sam-badge-icon';
        this.iconFourCustomClass = 'mt-1 suku-lg';
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
                    template: "<div class=\"col p-0 bgColor\">\r\n  <div class=\"col-sm-12 pt1 pt-top\">\r\n    <div class=\"col pl-lg-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col mt-4 p-md-0 pl-lg-2\">\r\n          <div class=\"col-sm-8 pt-2 col-md-12 col-lg-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-5 col-md-5\">\r\n                <img [src]=\"profileImage\" class=\"rounded-circle img-circle\" alt=\"profile\" width=\"150\" height=\"150\">\r\n              </div>\r\n              <div class=\"col-sm-7 pl-lg-1 col-md-7\" id=\"profileDetails\">\r\n                <h1 [style.font-size.px]=\"nameSize\" [class]=\"nameCustomClass\" [style.font-weight]=\"nameWeight\"\r\n                  [style.color]=\"nameColor\" id=\"{{userNameId}}\">\r\n                  {{userName}}\r\n                </h1>\r\n                <span>\r\n                  <div class=\"pt-2 pl-1\" *ngIf=\"ratingPrivacy\">\r\n                    <span class=\"fa fa-star fullStar f22\" *ngFor=\"let star of fullStarsArray\"> </span>\r\n                    <span class=\"fa fa-star-half halfStarLeft f22\" *ngIf=\"halfStar == 1\"> </span>\r\n                    <span class=\"fa fa-star-half fa-flip-horizontal halfStarRight f22\" *ngIf=\"halfStar == 1\"> </span>\r\n                    <span class=\"fa fa-star emptyStar f22\" *ngFor=\"let star of emptyStarsArray\"> </span>\r\n                  </div>\r\n                </span>\r\n                <h2 [style.font-size.px]=\"rateDetailSize\" *ngIf=\"ratingPrivacy\" [class]=\"rateDetailsCustomClass\"\r\n                  id=\"{{rateDetailsId}}\" [style.font-weight]=\"ratingDetailWeight\" [style.color]=\"rateDetailColor\">\r\n                  {{rateDetails}}\r\n                </h2>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-7 col-md-12 col-lg-6 pl-lg-0\">\r\n          <div class=\"col-sm-12 pt-lg-0 pl-lg-0\" id=\"detailsBlock\">\r\n            <div class=\"col-sm-12 pt-lg-5 pl-lg-0 p-xs-2\" id=\"editsBlock\">\r\n              <div class=\"col-sm-12 pt-lg-4\" [ngClass]=\"{'mb-lg-5': !editvisibility }\" id=\"editBlock\"\r\n                [style.visibility]=\"editvisibility\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12 col-lg-4 offset-lg-4 text-lg-right col-md-3 text-md-center col-xs-12 p-xs-0\"\r\n                    *ngIf=\"editvisibility\">\r\n                    <a class=\"profilePercentage colorGrey\" id=\"{{subHeadingOneId}}\"\r\n                      [style.visibility]=\"editvisibility ? 'visible' : 'hidden'\"\r\n                      (click)=\"editAccount()\">{{subHeadingOne}}</a>\r\n                  </div>\r\n                  <div class=\"col-sm-3 col-md-3 p-md-0 col-lg-4 text-lg-center col-xs-12 p-xs-0\"\r\n                    *ngIf=\"changePasswordvisibility\">\r\n                    <a class=\" profilePercentage colorGrey\" id=\"{{subHeadingTwoId}}\"\r\n                      [style.visibility]=\"changePasswordvisibility ? 'visible' : 'hidden'\"\r\n                      (click)=\"changePass()\">{{subHeadingTwo}}</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 pt-3 mt-2 pl-md-0\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                    <div>\r\n                      <span class=\"row pb-2\">\r\n                        <img [src]=\"mailIcon\" [class]=\"mailIconClass\" *ngIf=\"mailIcon\">\r\n                        <i class=\"{{iconOne}} {{iconOneCustomClass}}\" id=\"iconOneId\" *ngIf=\"iconOne\"></i>\r\n                        <h2 [style.font-size.px]=\"mailTxtSize\" [class]=\"mailcustomClass\" id=\"{{mailId}}\"\r\n                          [style.font-weight]=\"mailWeight\" [style.color]=\"mailTextColor\">\r\n                          {{mail}}\r\n                        </h2>\r\n                      </span>\r\n                    </div>\r\n                    <div class=\"pt-2 pb-2\">\r\n                      <span class=\"row pb-2\">\r\n                        <img [src]=\"phNumberIcon\" height=\"20px\" class=\"mt-1\">\r\n                        <i class=\"{{iconTwo}} {{iconTwoCustomClass}}\" id=\"iconTwoId\" *ngIf=\"iconTwo\"></i>\r\n                        <h2 [style.font-size.px]=\"phnumberSize\" [class]=\"phnumberCustomClass\" id=\"{{phoneId}}\"\r\n                          [style.font-weight]=\"phnumberWeight\" [style.color]=\"phnumberColor\">\r\n                          {{number}}\r\n                        </h2>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6 pr-2\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-8\">\r\n                        <span class=\"row pb-2\">\r\n                          <img [src]=\"addressIcon\">\r\n                          <i class=\"{{iconThree}} {{iconThreeCustomClass}}\" id=\"iconThreeId\" *ngIf=\"iconThree\"></i>\r\n                          <h2 [style.font-size.px]=\"addressSize\" [class]=\"addressCustomClass\" id=\"{{addressId}}\"\r\n                            [style.font-weight]=\"addressWeight\" [style.color]=\"addressColor\">\r\n                            {{address}}\r\n                          </h2>\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"col-sm-4\">\r\n                        <a id=\"editProfCont\" (click)=\"samIconAction.emit()\" [hidden]=\"!editvisibility\">\r\n                          <i class=\"{{iconFour}} {{iconFourCustomClass}}\" id=\"iconFourId\" *ngIf=\"iconFour\"></i>\r\n                          <img [src]=\"samBadgeIcon\" alt=\"sam badge\" [class]=\"samBadgeClass\" height=\"50px\" width=\"50px\"  *ngIf=\"samBadgeIcon\">\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);#privacy{flex-grow:1}.bgColor{background-color:#fff;box-shadow:3px -4px 0 3px rgba(0,0,0,.01);border-radius:70px 70px 0 0}.bgColor:before{content:\"\";position:absolute;width:100%;height:202px;border-radius:70px 70px 0 0;background-image:radial-gradient(circle at 50% 0,#3a3a3a,#000),linear-gradient(rgba(101,102,243,.06),rgba(101,102,243,.06))}.colorGrey{color:rgba(255,255,255,.67)!important}@media only screen and (max-width:800px){.colorGrey{color:#000!important}}.border,.border-top{border:1px solid #e9e9e9bf!important}@media only screen and (min-width:1500px){.p-auto{padding-right:3rem!important}}@media only screen and (min-width:1024px){.pt-top{padding-top:94px!important}}@media only screen and (max-width:1024px){.tab-size{flex:auto;max-width:100%}.mbc-auto,.mc-auto{margin:auto!important}.pt-top{padding-top:41px!important}.bgColor:before{height:148px!important}}@media only screen and (max-width:768px){.bgColor:before{height:122px!important}.pt-top{padding-top:10px!important}}.profilePercentage{font-family:\"Encode Sans\",sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#fff}.emptyStar{color:#e1e1e1;margin:4px}.fullStar{color:#898989;margin:4px}.halfStarLeft{color:#898989;position:relative;left:1px}.halfStarRight{color:#e1e1e1;position:relative;right:1px}.profileBox{width:187.656px;border-radius:0 0 30px 30px;background-color:#fff;box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.img-circle{height:150px;width:150px;border-radius:100%;background-color:#fff!important}.bLine{opacity:.09;border:1px solid #979797}.userName{font-family:Poppins,sans-serif!important;font-size:20px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;color:var(--black);word-break:break-all!important}.create-interest-listing{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:14px;color:#b6b6b6;line-height:18px;letter-spacing:.01em;word-break:break-all!important}@media only screen and (max-width:500px){h1,h2{color:#000!important}}h1{font-family:Poppins,sans-serif!important;font-size:33.4px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.5px}h2{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;word-break:break-all!important}@media only screen and (max-width:1024px){h2{font-size:10px!important}}@media only screen and (max-width:568px){h2{font-size:13px!important}.res-color{color:#000!important}.p-xs-0{padding:0}.p-xs-2{padding:0 0 0 .2rem}}.f22{font-size:22px}"]
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
        iconOneId: [{ type: Input, args: ['icon-one-id',] }],
        iconOne: [{ type: Input, args: ['icon-one',] }],
        iconOneCustomClass: [{ type: Input, args: ['icon-one-custom-class',] }],
        number: [{ type: Input }],
        phnumberSize: [{ type: Input }],
        phnumberColor: [{ type: Input }],
        phnumberWeight: [{ type: Input }],
        phnumberCustomClass: [{ type: Input }],
        phNumberIcon: [{ type: Input }],
        phoneId: [{ type: Input }],
        iconTwoId: [{ type: Input, args: ['icon-two-id',] }],
        iconTwo: [{ type: Input, args: ['icon-two',] }],
        iconTwoCustomClass: [{ type: Input, args: ['icon-two-custom-class',] }],
        addressIcon: [{ type: Input }],
        address: [{ type: Input }],
        addressSize: [{ type: Input }],
        addressColor: [{ type: Input }],
        addressWeight: [{ type: Input }],
        addressId: [{ type: Input }],
        addressCustomClass: [{ type: Input }],
        iconThreeId: [{ type: Input, args: ['icon-three-id',] }],
        iconThree: [{ type: Input, args: ['icon-three',] }],
        iconThreeCustomClass: [{ type: Input, args: ['icon-three-custom-class',] }],
        samBadgeIcon: [{ type: Input }],
        samBadgeClass: [{ type: Input }],
        samIconAction: [{ type: Output }],
        iconFourId: [{ type: Input, args: ['icon-four-id',] }],
        iconFour: [{ type: Input, args: ['icon-four',] }],
        iconFourCustomClass: [{ type: Input, args: ['icon-four-custom-class',] }]
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
    SukuProfileHeaderComponent.prototype.iconOneId;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.iconOne;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.iconOneCustomClass;
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
    SukuProfileHeaderComponent.prototype.iconTwoId;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.iconTwo;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.iconTwoCustomClass;
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
    SukuProfileHeaderComponent.prototype.iconThreeId;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.iconThree;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.iconThreeCustomClass;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.samBadgeIcon;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.samBadgeClass;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.samIconAction;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.iconFourId;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.iconFour;
    /** @type {?} */
    SukuProfileHeaderComponent.prototype.iconFourCustomClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9maWxlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9maWxlLWhlYWRlci9zdWt1LXByb2ZpbGUtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQXNHQzs7UUEvRkEsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Ysb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFFWixpQkFBWSxHQUFHLGlDQUFpQyxDQUFDO1FBQ3RDLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFDN0IsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixvQkFBZSxHQUFHLGdEQUFnRCxDQUFDO1FBQ25FLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFHSixnQkFBVyxHQUFHLGNBQWMsQ0FBQztRQUMzQyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0Qix1QkFBa0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN0QyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixpQkFBWSxHQUFHLDJCQUEyQixDQUFDO1FBQzNDLGNBQVMsR0FBRyxXQUFXLENBQUM7UUFDeEIsc0JBQWlCLEdBQUcsZ0JBQWdCLENBQUM7UUFDckMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsb0JBQWUsR0FBRyxTQUFTLENBQUM7UUFDNUIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLDJCQUFzQixHQUFHLFdBQVcsQ0FBQztRQUVyQyxrQkFBYSxHQUFHLEVBQUUsQ0FBQztR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O0lBQ3ZCLG1EQUE0Qjs7SUFDNUIsK0NBQXlDOztJQUN6Qyw2Q0FBOEM7O0lBQzlDLHdEQUE0RDs7SUFHNUQsNENBQXdCOztJQUN4QixrREFBNkI7O0lBQzdCLG1EQUFtQzs7SUFDbkMsb0RBQWdDOztJQUNoQyx5REFBMkU7O0lBQzNFLGtEQUEyQjs7SUFDM0IsNkNBQXNCOztJQUN0QiwrQ0FBMEM7O0lBQzFDLDZDQUErQzs7SUFDL0Msd0RBQTREOztJQUc1RCxpREFBMEI7O0lBQzFCLDZDQUF1Qzs7SUFDdkMsaURBQTRCOztJQUM1QixrREFBa0M7O0lBQ2xDLG1EQUErQjs7SUFDL0IsK0NBQXdCOztJQUN4Qix3REFBb0U7O0lBQ3BFLGlEQUFnRDs7SUFDaEQsK0NBQXFEOztJQUNyRCwwREFBZ0U7O0lBR2hFLGtEQUEyQjs7SUFDM0IsbURBQTRCOztJQUM1QixtREFBNkM7O0lBQzdDLGdEQUE4Qzs7SUFDOUMsOENBQXFEOztJQUNyRCx5REFBc0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3N1a3UtcHJvZmlsZS1oZWFkZXInLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXByb2ZpbGUtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1wcm9maWxlLWhlYWRlci5jb21wb25lbnQuc2NzcycgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdVByb2ZpbGVIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdC8qIHByb2ZpbGUtLXdpZGdldCAtLXN0YXJ0ICovXHJcblx0ZnVsbFN0YXJzID0gMDtcclxuXHRmdWxsU3RhcnNBcnJheSA9IFtdO1xyXG5cdGhhbGZTdGFyID0gMDtcclxuXHRlbXB0eVN0YXJzID0gMDtcclxuXHRlbXB0eVN0YXJzQXJyYXkgPSBbXTtcclxuXHRfcmF0aW5nVmFsdWU7XHJcblx0QElucHV0KCkgcHJvZmlsZUltYWdlID0gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnJvd3Nlci5wbmcnO1xyXG5cdEBJbnB1dCgndXNlci1uYW1lJykgdXNlck5hbWUgPSAnU3VrdSc7XHJcblx0QElucHV0KCkgbmFtZVdlaWdodCA9ICc0MDAnO1xyXG5cdEBJbnB1dCgpIG5hbWVDdXN0b21DbGFzcyA9ICd0ZXh0LXdoaXRlIG1iLTQgcmVzLWNvbG9yIHBsLTIgdGV4dC1jYXBpdGFsaXplJztcclxuXHRASW5wdXQoKSBuYW1lU2l6ZSA9ICczMy40JztcclxuXHRASW5wdXQoKSBuYW1lQ29sb3I7XHJcblx0QElucHV0KCkgdXNlck5hbWVJZDtcclxuXHRASW5wdXQoJ2FjY291bnQtdHlwZScpIGFjY291bnRUeXBlID0gJ01hbnVmYWN0dXJlcic7XHJcblx0QElucHV0KCkgYWNjb3VudFdlaWdodCA9ICc0MDAnO1xyXG5cdEBJbnB1dCgpIGFjY291bnRDdXN0b21DbGFzcyA9ICdwbC0yIHJlcy1jb2xvcic7XHJcblx0QElucHV0KCkgYWNjb3VudFNpemUgPSAnMTcnO1xyXG5cdEBJbnB1dCgpIGFjY291bnRDb2xvciA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjcpJztcclxuXHRASW5wdXQoKSBhY2NvdW50SWQgPSAnYWNjb3VudElkJztcclxuXHRASW5wdXQoKSByYXRpbmdDdXN0b21DbGFzcyA9ICdwbC0yIG1iLTIgcHQtMyc7XHJcblx0QElucHV0KCkgcmF0ZURldGFpbHMgPSAnJztcclxuXHRASW5wdXQoKSByYXRlRGV0YWlsQ29sb3IgPSAnIzc1NzU3NSc7XHJcblx0QElucHV0KCkgcmF0aW5nRGV0YWlsV2VpZ2h0ID0gJzQwMCc7XHJcblx0QElucHV0KCkgcmF0ZURldGFpbFNpemUgPSAnMTQnO1xyXG5cdEBJbnB1dCgpIHJhdGVEZXRhaWxzQ3VzdG9tQ2xhc3MgPSAncGwtMiBtdC0xJztcclxuXHRASW5wdXQoKSByYXRpbmdQcml2YWN5OiBCb29sZWFuO1xyXG5cdEBJbnB1dCgpIHJhdGVEZXRhaWxzSWQgPSAnJztcclxuXHRAT3V0cHV0KCkgYWN0aW9uT25lID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBhY3Rpb25Ud28gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIHJhdGluZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRASW5wdXQoKSBjdXN0b21DbGFzcztcclxuXHRASW5wdXQoKVxyXG5cdEBJbnB1dCgncmF0aW5nLXZhbHVlJylcclxuXHRzZXQgcmF0aW5nVmFsdWUodmFsOiBudW1iZXIpIHtcclxuXHRcdHRoaXMuZnVsbFN0YXJzID0gTWF0aC5yb3VuZCh2YWwpO1xyXG5cdFx0dGhpcy5mdWxsU3RhcnNBcnJheSA9IEFycmF5KHRoaXMuZnVsbFN0YXJzKS5maWxsKDEpO1xyXG5cdFx0dGhpcy5oYWxmU3RhciA9IHRoaXMuZnVsbFN0YXJzIDwgdmFsID8gMSA6IDA7XHJcblx0XHR0aGlzLmVtcHR5U3RhcnMgPSA1IC0gdGhpcy5mdWxsU3RhcnMgLSB0aGlzLmhhbGZTdGFyO1xyXG5cdFx0dGhpcy5lbXB0eVN0YXJzQXJyYXkgPSBBcnJheSh0aGlzLmVtcHR5U3RhcnMpLmZpbGwoMSk7XHJcblx0fVxyXG5cclxuXHQvKiBlZGl0LXBhc3N3b3JkLS12aXNpYmlsaXR5ICovXHJcblx0QElucHV0KCkgc3ViSGVhZGluZ09uZSA9ICdlZGl0IGFjY291bnQnO1xyXG5cdEBJbnB1dCgpIHN1YkhlYWRpbmdPbmVJZCA9ICdlZGl0QWNjb3VudCc7XHJcblx0QElucHV0KCkgc3ViSGVhZGluZ1R3byA9ICdjaGFuZ2UgcGFzc3dvcmQnO1xyXG5cdEBJbnB1dCgpIHN1YkhlYWRpbmdUd29JZCA9ICdjaGFuZ2VQYXNzd29yZCc7XHJcblx0QElucHV0KCkgZWRpdHZpc2liaWxpdHkgPSB0cnVlO1xyXG5cdEBJbnB1dCgpIGNoYW5nZVBhc3N3b3JkdmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG5cdC8qIHN1a3UtbWFpbC13aWRnZXQgKi9cclxuXHRASW5wdXQoKSBtYWlsID0gJ2Rjb253YXlAc3VrdS5jb20nO1xyXG5cdEBJbnB1dCgpIG1haWxUeHRTaXplID0gJzEzJztcclxuXHRASW5wdXQoKSBtYWlsVGV4dENvbG9yID0gJyMzZTNlM2UnO1xyXG5cdEBJbnB1dCgpIG1haWxXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoKSBtYWlsY3VzdG9tQ2xhc3MgPSAncHQtMiBwbC00IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInO1xyXG5cdEBJbnB1dCgpIG1haWxJZCA9ICdtYWlsJztcclxuXHRASW5wdXQoKSBtYWlsSWNvbiA9ICcnO1xyXG5cdEBJbnB1dCgpIG1haWxJY29uQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2ljb24tb25lLWlkJykgaWNvbk9uZUlkID0gJ21haWwnO1xyXG5cdEBJbnB1dCgnaWNvbi1vbmUnKSBpY29uT25lID0gJ3N1a3UtbWFpbC1pY29uJztcclxuXHRASW5wdXQoJ2ljb24tb25lLWN1c3RvbS1jbGFzcycpIGljb25PbmVDdXN0b21DbGFzcyA9ICdtdC0yJztcclxuXHJcblx0Lyogc3VrdS1waG9uZS13aWRnZXQgKi9cclxuXHRASW5wdXQoKSBudW1iZXIgPSAnTi9BJztcclxuXHRASW5wdXQoKSBwaG51bWJlclNpemUgPSAnMTMnO1xyXG5cdEBJbnB1dCgpIHBobnVtYmVyQ29sb3IgPSAnIzNlM2UzZSc7XHJcblx0QElucHV0KCkgcGhudW1iZXJXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoKSBwaG51bWJlckN1c3RvbUNsYXNzID0gJ3BsLTQgbXQtMSBtYi0xICBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJztcclxuXHRASW5wdXQoKSBwaE51bWJlckljb24gPSAnJztcclxuXHRASW5wdXQoKSBwaG9uZUlkID0gJyc7XHJcblx0QElucHV0KCdpY29uLXR3by1pZCcpIGljb25Ud29JZCA9ICdwaG9uZSc7XHJcblx0QElucHV0KCdpY29uLXR3bycpIGljb25Ud28gPSAnc3VrdS1waG9uZS1pY29uJztcclxuXHRASW5wdXQoJ2ljb24tdHdvLWN1c3RvbS1jbGFzcycpIGljb25Ud29DdXN0b21DbGFzcyA9ICdtdC0yJztcclxuXHJcblx0Lyogc3VrdS1hZGRyZXNzLXdpZGdldCAqL1xyXG5cdEBJbnB1dCgpIGFkZHJlc3NJY29uID0gJyc7XHJcblx0QElucHV0KCkgYWRkcmVzcyA9ICc5MzE1IE5XIDExMlRIIEFWRSc7XHJcblx0QElucHV0KCkgYWRkcmVzc1NpemUgPSAnMTMnO1xyXG5cdEBJbnB1dCgpIGFkZHJlc3NDb2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoKSBhZGRyZXNzV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCkgYWRkcmVzc0lkID0gJyc7XHJcblx0QElucHV0KCkgYWRkcmVzc0N1c3RvbUNsYXNzID0gJ3B0LTIgcGwtNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJztcclxuXHRASW5wdXQoJ2ljb24tdGhyZWUtaWQnKSBpY29uVGhyZWVJZCA9ICdhZGRyZXNzJztcclxuXHRASW5wdXQoJ2ljb24tdGhyZWUnKSBpY29uVGhyZWUgPSAnc3VrdS1tYXAtcGluLWljb24nO1xyXG5cdEBJbnB1dCgnaWNvbi10aHJlZS1jdXN0b20tY2xhc3MnKSBpY29uVGhyZWVDdXN0b21DbGFzcyA9ICdtdC0yJztcclxuXHJcblx0Lyogc2FtLWJhcmRnZSAqL1xyXG5cdEBJbnB1dCgpIHNhbUJhZGdlSWNvbiA9ICcnO1xyXG5cdEBJbnB1dCgpIHNhbUJhZGdlQ2xhc3MgPSAnJztcclxuXHRAT3V0cHV0KCkgc2FtSWNvbkFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRASW5wdXQoJ2ljb24tZm91ci1pZCcpIGljb25Gb3VySWQgPSAnYWRkcmVzcyc7XHJcblx0QElucHV0KCdpY29uLWZvdXInKSBpY29uRm91ciA9ICdzdWt1LXNhbS1iYWRnZS1pY29uJztcclxuXHRASW5wdXQoJ2ljb24tZm91ci1jdXN0b20tY2xhc3MnKSBpY29uRm91ckN1c3RvbUNsYXNzID0gJ210LTEgc3VrdS1sZyc7XHJcblx0XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cclxuXHRlZGl0QWNjb3VudCgpIHtcclxuXHRcdHRoaXMuYWN0aW9uT25lLmVtaXQoKTtcclxuXHR9XHJcblxyXG5cdGNoYW5nZVBhc3MoKSB7XHJcblx0XHR0aGlzLmFjdGlvblR3by5lbWl0KCk7XHJcblx0fVxyXG59XHJcbiJdfQ==