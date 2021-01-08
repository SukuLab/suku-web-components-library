/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-profile-header/suku-profile-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuProfileHeaderComponent {
    constructor() {
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
    /**
     * @param {?} val
     * @return {?}
     */
    set ratingValue(val) {
        this.fullStars = Math.round(val);
        this.fullStarsArray = Array(this.fullStars).fill(1);
        this.halfStar = this.fullStars < val ? 1 : 0;
        this.emptyStars = 5 - this.fullStars - this.halfStar;
        this.emptyStarsArray = Array(this.emptyStars).fill(1);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    editAccount() {
        this.actionOne.emit();
    }
    /**
     * @return {?}
     */
    changePass() {
        this.actionTwo.emit();
    }
}
SukuProfileHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-profile-header',
                template: "<div class=\"col p-0 bgColor\">\n  <div class=\"col-sm-12 pt1 pt-top\">\n    <div class=\"col pl-lg-5\">\n      <div class=\"row\">\n        <div class=\"col mt-4 p-md-0 pl-lg-2\">\n          <div class=\"col-sm-8 pt-2 col-md-12 col-lg-12\">\n            <div class=\"row\">\n              <div class=\"col-sm-5 col-md-5\">\n                <img [src]=\"profileImage\" class=\"rounded-circle img-circle\" alt=\"profile\" width=\"150\" height=\"150\">\n              </div>\n              <div class=\"col-sm-7 pl-lg-1 col-md-7\" id=\"profileDetails\">\n                <h1 [style.font-size.px]=\"nameSize\" [class]=\"nameCustomClass\" [style.font-weight]=\"nameWeight\"\n                  [style.color]=\"nameColor\" id=\"{{userNameId}}\">\n                  {{userName}}\n                </h1>\n                <span>\n                  <div class=\"pt-2 pl-1\" *ngIf=\"ratingPrivacy\">\n                    <span class=\"fa fa-star fullStar f22\" *ngFor=\"let star of fullStarsArray\"> </span>\n                    <span class=\"fa fa-star-half halfStarLeft f22\" *ngIf=\"halfStar == 1\"> </span>\n                    <span class=\"fa fa-star-half fa-flip-horizontal halfStarRight f22\" *ngIf=\"halfStar == 1\"> </span>\n                    <span class=\"fa fa-star emptyStar f22\" *ngFor=\"let star of emptyStarsArray\"> </span>\n                  </div>\n                </span>\n                <h2 [style.font-size.px]=\"rateDetailSize\" *ngIf=\"ratingPrivacy\" [class]=\"rateDetailsCustomClass\"\n                  id=\"{{rateDetailsId}}\" [style.font-weight]=\"ratingDetailWeight\" [style.color]=\"rateDetailColor\">\n                  {{rateDetails}}\n                </h2>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-7 col-md-12 col-lg-6 pl-lg-0\">\n          <div class=\"col-sm-12 pt-lg-0 pl-lg-0\" id=\"detailsBlock\">\n            <div class=\"col-sm-12 pt-lg-5 pl-lg-0 p-xs-2\" id=\"editsBlock\">\n              <div class=\"col-sm-12 pt-lg-4\" [ngClass]=\"{'mb-lg-5': !editvisibility }\" id=\"editBlock\"\n                [style.visibility]=\"editvisibility\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12 col-lg-4 offset-lg-4 text-lg-right col-md-3 text-md-center col-xs-12 p-xs-0\"\n                    *ngIf=\"editvisibility\">\n                    <a class=\"profilePercentage colorGrey\" id=\"{{subHeadingOneId}}\"\n                      [style.visibility]=\"editvisibility ? 'visible' : 'hidden'\"\n                      (click)=\"editAccount()\">{{subHeadingOne}}</a>\n                  </div>\n                  <div class=\"col-sm-3 col-md-3 p-md-0 col-lg-4 text-lg-center col-xs-12 p-xs-0\"\n                    *ngIf=\"changePasswordvisibility\">\n                    <a class=\" profilePercentage colorGrey\" id=\"{{subHeadingTwoId}}\"\n                      [style.visibility]=\"changePasswordvisibility ? 'visible' : 'hidden'\"\n                      (click)=\"changePass()\">{{subHeadingTwo}}</a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-12 pt-3 mt-2 pl-md-0\">\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div>\n                      <span class=\"row pb-2\">\n                        <img [src]=\"mailIcon\" [class]=\"mailIconClass\" *ngIf=\"mailIcon\">\n                        <i class=\"{{iconOne}} {{iconOneCustomClass}}\" id=\"iconOneId\" *ngIf=\"iconOne\"></i>\n                        <h2 [style.font-size.px]=\"mailTxtSize\" [class]=\"mailcustomClass\" id=\"{{mailId}}\"\n                          [style.font-weight]=\"mailWeight\" [style.color]=\"mailTextColor\">\n                          {{mail}}\n                        </h2>\n                      </span>\n                    </div>\n                    <div class=\"pt-2 pb-2\">\n                      <span class=\"row pb-2\">\n                        <img [src]=\"phNumberIcon\" height=\"20px\" class=\"mt-1\">\n                        <i class=\"{{iconTwo}} {{iconTwoCustomClass}}\" id=\"iconTwoId\" *ngIf=\"iconTwo\"></i>\n                        <h2 [style.font-size.px]=\"phnumberSize\" [class]=\"phnumberCustomClass\" id=\"{{phoneId}}\"\n                          [style.font-weight]=\"phnumberWeight\" [style.color]=\"phnumberColor\">\n                          {{number}}\n                        </h2>\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-6 pr-2\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-8\">\n                        <span class=\"row pb-2\">\n                          <img [src]=\"addressIcon\">\n                          <i class=\"{{iconThree}} {{iconThreeCustomClass}}\" id=\"iconThreeId\" *ngIf=\"iconThree\"></i>\n                          <h2 [style.font-size.px]=\"addressSize\" [class]=\"addressCustomClass\" id=\"{{addressId}}\"\n                            [style.font-weight]=\"addressWeight\" [style.color]=\"addressColor\">\n                            {{address}}\n                          </h2>\n                        </span>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <a id=\"editProfCont\" (click)=\"samIconAction.emit()\" [hidden]=\"!editvisibility\">\n                          <i class=\"{{iconFour}} {{iconFourCustomClass}}\" id=\"iconFourId\" *ngIf=\"iconFour\"></i>\n                          <img [src]=\"samBadgeIcon\" alt=\"sam badge\" [class]=\"samBadgeClass\" height=\"50px\" width=\"50px\"  *ngIf=\"samBadgeIcon\">\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);#privacy{flex-grow:1}.bgColor{background-color:#fff;box-shadow:3px -4px 0 3px rgba(0,0,0,.01);border-radius:70px 70px 0 0}.bgColor:before{content:\"\";position:absolute;width:100%;height:202px;border-radius:70px 70px 0 0;background-image:radial-gradient(circle at 50% 0,#3a3a3a,#000),linear-gradient(rgba(101,102,243,.06),rgba(101,102,243,.06))}.colorGrey{color:rgba(255,255,255,.67)!important}@media only screen and (max-width:800px){.colorGrey{color:#000!important}}.border,.border-top{border:1px solid #e9e9e9bf!important}@media only screen and (min-width:1500px){.p-auto{padding-right:3rem!important}}@media only screen and (min-width:1024px){.pt-top{padding-top:94px!important}}@media only screen and (max-width:1024px){.tab-size{flex:auto;max-width:100%}.mbc-auto,.mc-auto{margin:auto!important}.pt-top{padding-top:41px!important}.bgColor:before{height:148px!important}}@media only screen and (max-width:768px){.bgColor:before{height:122px!important}.pt-top{padding-top:10px!important}}.profilePercentage{font-family:\"Encode Sans\",sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#fff}.emptyStar{color:#e1e1e1;margin:4px}.fullStar{color:#898989;margin:4px}.halfStarLeft{color:#898989;position:relative;left:1px}.halfStarRight{color:#e1e1e1;position:relative;right:1px}.profileBox{width:187.656px;border-radius:0 0 30px 30px;background-color:#fff;box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.img-circle{height:150px;width:150px;border-radius:100%;background-color:#fff!important}.bLine{opacity:.09;border:1px solid #979797}.userName{font-family:Poppins,sans-serif!important;font-size:20px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;color:var(--black);word-break:break-all!important}.create-interest-listing{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:14px;color:#b6b6b6;line-height:18px;letter-spacing:.01em;word-break:break-all!important}@media only screen and (max-width:500px){h1,h2{color:#000!important}}h1{font-family:Poppins,sans-serif!important;font-size:33.4px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.5px}h2{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;word-break:break-all!important}@media only screen and (max-width:1024px){h2{font-size:10px!important}}@media only screen and (max-width:568px){h2{font-size:13px!important}.res-color{color:#000!important}.p-xs-0{padding:0}.p-xs-2{padding:0 0 0 .2rem}}.f22{font-size:22px}"]
            }] }
];
/** @nocollapse */
SukuProfileHeaderComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9maWxlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9maWxlLWhlYWRlci9zdWt1LXByb2ZpbGUtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0UsTUFBTSxPQUFPLDBCQUEwQjtJQWlHdEM7O1FBL0ZBLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBRVosaUJBQVksR0FBRyxpQ0FBaUMsQ0FBQztRQUN0QyxhQUFRLEdBQUcsTUFBTSxDQUFDO1FBQzdCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsb0JBQWUsR0FBRyxnREFBZ0QsQ0FBQztRQUNuRSxhQUFRLEdBQUcsTUFBTSxDQUFDO1FBR0osZ0JBQVcsR0FBRyxjQUFjLENBQUM7UUFDM0Msa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsdUJBQWtCLEdBQUcsZ0JBQWdCLENBQUM7UUFDdEMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsaUJBQVksR0FBRywyQkFBMkIsQ0FBQztRQUMzQyxjQUFTLEdBQUcsV0FBVyxDQUFDO1FBQ3hCLHNCQUFpQixHQUFHLGdCQUFnQixDQUFDO1FBQ3JDLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLG9CQUFlLEdBQUcsU0FBUyxDQUFDO1FBQzVCLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUMzQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QiwyQkFBc0IsR0FBRyxXQUFXLENBQUM7UUFFckMsa0JB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LDRDQUF3Qjs7SUFDeEIsa0RBQTZCOztJQUM3QixtREFBbUM7O0lBQ25DLG9EQUFnQzs7SUFDaEMseURBQTJFOztJQUMzRSxrREFBMkI7O0lBQzNCLDZDQUFzQjs7SUFDdEIsK0NBQTBDOztJQUMxQyw2Q0FBK0M7O0lBQy9DLHdEQUE0RDs7SUFHNUQsaURBQTBCOztJQUMxQiw2Q0FBdUM7O0lBQ3ZDLGlEQUE0Qjs7SUFDNUIsa0RBQWtDOztJQUNsQyxtREFBK0I7O0lBQy9CLCtDQUF3Qjs7SUFDeEIsd0RBQW9FOztJQUNwRSxpREFBZ0Q7O0lBQ2hELCtDQUFxRDs7SUFDckQsMERBQWdFOztJQUdoRSxrREFBMkI7O0lBQzNCLG1EQUE0Qjs7SUFDNUIsbURBQTZDOztJQUM3QyxnREFBOEM7O0lBQzlDLDhDQUFxRDs7SUFDckQseURBQXNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LXByb2ZpbGUtaGVhZGVyJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtcHJvZmlsZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1wcm9maWxlLWhlYWRlci5jb21wb25lbnQuc2NzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1UHJvZmlsZUhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdC8qIHByb2ZpbGUtLXdpZGdldCAtLXN0YXJ0ICovXG5cdGZ1bGxTdGFycyA9IDA7XG5cdGZ1bGxTdGFyc0FycmF5ID0gW107XG5cdGhhbGZTdGFyID0gMDtcblx0ZW1wdHlTdGFycyA9IDA7XG5cdGVtcHR5U3RhcnNBcnJheSA9IFtdO1xuXHRfcmF0aW5nVmFsdWU7XG5cdEBJbnB1dCgpIHByb2ZpbGVJbWFnZSA9ICcuLi8uLi9hc3NldHMvaW1hZ2VzL2Jyb3dzZXIucG5nJztcblx0QElucHV0KCd1c2VyLW5hbWUnKSB1c2VyTmFtZSA9ICdTdWt1Jztcblx0QElucHV0KCkgbmFtZVdlaWdodCA9ICc0MDAnO1xuXHRASW5wdXQoKSBuYW1lQ3VzdG9tQ2xhc3MgPSAndGV4dC13aGl0ZSBtYi00IHJlcy1jb2xvciBwbC0yIHRleHQtY2FwaXRhbGl6ZSc7XG5cdEBJbnB1dCgpIG5hbWVTaXplID0gJzMzLjQnO1xuXHRASW5wdXQoKSBuYW1lQ29sb3I7XG5cdEBJbnB1dCgpIHVzZXJOYW1lSWQ7XG5cdEBJbnB1dCgnYWNjb3VudC10eXBlJykgYWNjb3VudFR5cGUgPSAnTWFudWZhY3R1cmVyJztcblx0QElucHV0KCkgYWNjb3VudFdlaWdodCA9ICc0MDAnO1xuXHRASW5wdXQoKSBhY2NvdW50Q3VzdG9tQ2xhc3MgPSAncGwtMiByZXMtY29sb3InO1xuXHRASW5wdXQoKSBhY2NvdW50U2l6ZSA9ICcxNyc7XG5cdEBJbnB1dCgpIGFjY291bnRDb2xvciA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjcpJztcblx0QElucHV0KCkgYWNjb3VudElkID0gJ2FjY291bnRJZCc7XG5cdEBJbnB1dCgpIHJhdGluZ0N1c3RvbUNsYXNzID0gJ3BsLTIgbWItMiBwdC0zJztcblx0QElucHV0KCkgcmF0ZURldGFpbHMgPSAnJztcblx0QElucHV0KCkgcmF0ZURldGFpbENvbG9yID0gJyM3NTc1NzUnO1xuXHRASW5wdXQoKSByYXRpbmdEZXRhaWxXZWlnaHQgPSAnNDAwJztcblx0QElucHV0KCkgcmF0ZURldGFpbFNpemUgPSAnMTQnO1xuXHRASW5wdXQoKSByYXRlRGV0YWlsc0N1c3RvbUNsYXNzID0gJ3BsLTIgbXQtMSc7XG5cdEBJbnB1dCgpIHJhdGluZ1ByaXZhY3k6IEJvb2xlYW47XG5cdEBJbnB1dCgpIHJhdGVEZXRhaWxzSWQgPSAnJztcblx0QE91dHB1dCgpIGFjdGlvbk9uZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIGFjdGlvblR3byA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHJhdGluZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QElucHV0KCkgY3VzdG9tQ2xhc3M7XG5cdEBJbnB1dCgpXG5cdEBJbnB1dCgncmF0aW5nLXZhbHVlJylcblx0c2V0IHJhdGluZ1ZhbHVlKHZhbDogbnVtYmVyKSB7XG5cdFx0dGhpcy5mdWxsU3RhcnMgPSBNYXRoLnJvdW5kKHZhbCk7XG5cdFx0dGhpcy5mdWxsU3RhcnNBcnJheSA9IEFycmF5KHRoaXMuZnVsbFN0YXJzKS5maWxsKDEpO1xuXHRcdHRoaXMuaGFsZlN0YXIgPSB0aGlzLmZ1bGxTdGFycyA8IHZhbCA/IDEgOiAwO1xuXHRcdHRoaXMuZW1wdHlTdGFycyA9IDUgLSB0aGlzLmZ1bGxTdGFycyAtIHRoaXMuaGFsZlN0YXI7XG5cdFx0dGhpcy5lbXB0eVN0YXJzQXJyYXkgPSBBcnJheSh0aGlzLmVtcHR5U3RhcnMpLmZpbGwoMSk7XG5cdH1cblxuXHQvKiBlZGl0LXBhc3N3b3JkLS12aXNpYmlsaXR5ICovXG5cdEBJbnB1dCgpIHN1YkhlYWRpbmdPbmUgPSAnZWRpdCBhY2NvdW50Jztcblx0QElucHV0KCkgc3ViSGVhZGluZ09uZUlkID0gJ2VkaXRBY2NvdW50Jztcblx0QElucHV0KCkgc3ViSGVhZGluZ1R3byA9ICdjaGFuZ2UgcGFzc3dvcmQnO1xuXHRASW5wdXQoKSBzdWJIZWFkaW5nVHdvSWQgPSAnY2hhbmdlUGFzc3dvcmQnO1xuXHRASW5wdXQoKSBlZGl0dmlzaWJpbGl0eSA9IHRydWU7XG5cdEBJbnB1dCgpIGNoYW5nZVBhc3N3b3JkdmlzaWJpbGl0eSA9IHRydWU7XG5cblx0Lyogc3VrdS1tYWlsLXdpZGdldCAqL1xuXHRASW5wdXQoKSBtYWlsID0gJ2Rjb253YXlAc3VrdS5jb20nO1xuXHRASW5wdXQoKSBtYWlsVHh0U2l6ZSA9ICcxMyc7XG5cdEBJbnB1dCgpIG1haWxUZXh0Q29sb3IgPSAnIzNlM2UzZSc7XG5cdEBJbnB1dCgpIG1haWxXZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCkgbWFpbGN1c3RvbUNsYXNzID0gJ3B0LTIgcGwtNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJztcblx0QElucHV0KCkgbWFpbElkID0gJ21haWwnO1xuXHRASW5wdXQoKSBtYWlsSWNvbiA9ICcnO1xuXHRASW5wdXQoKSBtYWlsSWNvbkNsYXNzID0gJyc7XG5cdEBJbnB1dCgnaWNvbi1vbmUtaWQnKSBpY29uT25lSWQgPSAnbWFpbCc7XG5cdEBJbnB1dCgnaWNvbi1vbmUnKSBpY29uT25lID0gJ3N1a3UtbWFpbC1pY29uJztcblx0QElucHV0KCdpY29uLW9uZS1jdXN0b20tY2xhc3MnKSBpY29uT25lQ3VzdG9tQ2xhc3MgPSAnbXQtMic7XG5cblx0Lyogc3VrdS1waG9uZS13aWRnZXQgKi9cblx0QElucHV0KCkgbnVtYmVyID0gJ04vQSc7XG5cdEBJbnB1dCgpIHBobnVtYmVyU2l6ZSA9ICcxMyc7XG5cdEBJbnB1dCgpIHBobnVtYmVyQ29sb3IgPSAnIzNlM2UzZSc7XG5cdEBJbnB1dCgpIHBobnVtYmVyV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgpIHBobnVtYmVyQ3VzdG9tQ2xhc3MgPSAncGwtNCBtdC0xIG1iLTEgIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInO1xuXHRASW5wdXQoKSBwaE51bWJlckljb24gPSAnJztcblx0QElucHV0KCkgcGhvbmVJZCA9ICcnO1xuXHRASW5wdXQoJ2ljb24tdHdvLWlkJykgaWNvblR3b0lkID0gJ3Bob25lJztcblx0QElucHV0KCdpY29uLXR3bycpIGljb25Ud28gPSAnc3VrdS1waG9uZS1pY29uJztcblx0QElucHV0KCdpY29uLXR3by1jdXN0b20tY2xhc3MnKSBpY29uVHdvQ3VzdG9tQ2xhc3MgPSAnbXQtMic7XG5cblx0Lyogc3VrdS1hZGRyZXNzLXdpZGdldCAqL1xuXHRASW5wdXQoKSBhZGRyZXNzSWNvbiA9ICcnO1xuXHRASW5wdXQoKSBhZGRyZXNzID0gJzkzMTUgTlcgMTEyVEggQVZFJztcblx0QElucHV0KCkgYWRkcmVzc1NpemUgPSAnMTMnO1xuXHRASW5wdXQoKSBhZGRyZXNzQ29sb3IgPSAnIzNlM2UzZSc7XG5cdEBJbnB1dCgpIGFkZHJlc3NXZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCkgYWRkcmVzc0lkID0gJyc7XG5cdEBJbnB1dCgpIGFkZHJlc3NDdXN0b21DbGFzcyA9ICdwdC0yIHBsLTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic7XG5cdEBJbnB1dCgnaWNvbi10aHJlZS1pZCcpIGljb25UaHJlZUlkID0gJ2FkZHJlc3MnO1xuXHRASW5wdXQoJ2ljb24tdGhyZWUnKSBpY29uVGhyZWUgPSAnc3VrdS1tYXAtcGluLWljb24nO1xuXHRASW5wdXQoJ2ljb24tdGhyZWUtY3VzdG9tLWNsYXNzJykgaWNvblRocmVlQ3VzdG9tQ2xhc3MgPSAnbXQtMic7XG5cblx0Lyogc2FtLWJhcmRnZSAqL1xuXHRASW5wdXQoKSBzYW1CYWRnZUljb24gPSAnJztcblx0QElucHV0KCkgc2FtQmFkZ2VDbGFzcyA9ICcnO1xuXHRAT3V0cHV0KCkgc2FtSWNvbkFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QElucHV0KCdpY29uLWZvdXItaWQnKSBpY29uRm91cklkID0gJ2FkZHJlc3MnO1xuXHRASW5wdXQoJ2ljb24tZm91cicpIGljb25Gb3VyID0gJ3N1a3Utc2FtLWJhZGdlLWljb24nO1xuXHRASW5wdXQoJ2ljb24tZm91ci1jdXN0b20tY2xhc3MnKSBpY29uRm91ckN1c3RvbUNsYXNzID0gJ210LTEgc3VrdS1sZyc7XG5cdFxuXG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRuZ09uSW5pdCgpIHt9XG5cblx0ZWRpdEFjY291bnQoKSB7XG5cdFx0dGhpcy5hY3Rpb25PbmUuZW1pdCgpO1xuXHR9XG5cblx0Y2hhbmdlUGFzcygpIHtcblx0XHR0aGlzLmFjdGlvblR3by5lbWl0KCk7XG5cdH1cbn1cbiJdfQ==