/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.nameCustomClass = 'mb-0 text-white mt-1 pl-1 text-capitalize';
        this.nameSize = '33.4';
        this.accountType = 'Manufacturer';
        this.accountWeight = '400';
        this.accountCustomClass = 'pl-2';
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
        /* edit-password--visibility */
        this.subHeadingOne = 'edit account';
        this.subHeadingOneId = 'editAccount';
        this.subHeadingTwo = 'change password';
        this.subHeadingTwoId = 'changePassword';
        this.editvisibility = true;
        this.changePasswordvisibility = true;
        /* suku-mail-widget */
        this.mail = 'dconway@vairog.com';
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
                template: "<div class=\"col p-0 bgColor\">\r\n  <div class=\"col-sm-12 pt1 pt-top\">\r\n    <div class=\"col pl-lg-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col mt-5\">\r\n          <div class=\"col-sm-8 col-md-12 col-lg-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-5 col-md-5\">\r\n                <img [src]=\"profileImage\" class=\"rounded-circle img-circle\" alt=\"profile\" width=\"150\" height=\"150\">\r\n              </div>\r\n              <div class=\"col-sm-7 pt-3 col-md-7\">\r\n                <h1 [style.font-size.px]=\"nameSize\" [class]=\"nameCustomClass\" [style.font-weight]=\"nameWeight\"\r\n                  [style.color]=\"nameColor\" id=\"{{userNameId}}\">\r\n                  {{userName}}\r\n                </h1>\r\n                <h2 [style.font-size.px]=\"accountSize\" [class]=\"accountCustomClass\" id=\"{{accountId}}\"\r\n                  [style.font-weight]=\"accountWeight\" [style.color]=\"accountColor\">\r\n                  {{accountType}}\r\n                </h2>\r\n                <span>\r\n                  <div class=\"pt-4\" *ngIf=\"ratingPrivacy\">\r\n                    <span class=\"fa fa-star fullStar f22\" *ngFor=\"let star of fullStarsArray\"> </span>\r\n                    <span class=\"fa fa-star-half halfStarLeft f22\" *ngIf=\"halfStar == 1\"> </span>\r\n                    <span class=\"fa fa-star-half fa-flip-horizontal halfStarRight f22\" *ngIf=\"halfStar == 1\"> </span>\r\n                    <span class=\"fa fa-star emptyStar f22\" *ngFor=\"let star of emptyStarsArray\"> </span>\r\n                  </div>\r\n                </span>\r\n                <h2 [style.font-size.px]=\"rateDetailSize\" [class]=\"rateDetailsCustomClass\" id=\"{{rateDetailsId}}\"\r\n                  [style.font-weight]=\"ratingDetailWeight\" [style.color]=\"rateDetailColor\">\r\n                  {{rateDetails}}\r\n                </h2>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-7 col-md-12 col-lg-6 pl-lg-0\">\r\n          <div class=\"col-sm-12 pt-lg-5 pl-lg-0\">\r\n            <div class=\"col-sm-12 pt-lg-5 pl-lg-0 p-xs-2\">\r\n              <div class=\"col-sm-12 pt-lg-4\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12 col-lg-4 offset-lg-4 text-lg-right col-md-3 text-md-center col-xs-12 p-xs-0\">\r\n                    <a class=\"profilePercentage colorGrey\"  id=\"{{subHeadingOneId}}\" [style.visibility]=\"editvisibility ? 'visible' : 'hidden'\"\r\n                      (click)=\"editAccount()\">{{subHeadingOne}}</a>\r\n                  </div>\r\n                  <div class=\"col-sm-3 col-md-3 p-md-0 col-lg-4 text-lg-center col-xs-12 p-xs-0\">\r\n                    <a class=\" profilePercentage colorGrey\" id=\"{{subHeadingTwoId}}\" [style.visibility]=\"changePasswordvisibility ? 'visible' : 'hidden'\"\r\n                    (click)=\"changePass()\">{{subHeadingTwo}}</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 pt-5 pl-md-0\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                    <div>\r\n                      <span class=\"row pb-2\">\r\n                        <img [src]=\"mailIcon\" [class]=\"mailIconClass\">\r\n                        <h2 [style.font-size.px]=\"mailTxtSize\" [class]=\"mailcustomClass\" id=\"{{mailId}}\" [style.font-weight]=\"mailWeight\"\r\n                          [style.color]=\"mailTextColor\">\r\n                          {{mail}}\r\n                        </h2>\r\n                      </span>\r\n                    </div>\r\n                    <div class=\"pt-3\">\r\n                      <span class=\"row pb-2\">\r\n                        <img [src]=\"phNumberIcon\" height=\"20px\" class=\"mt-1\">\r\n                        <h2 [style.font-size.px]=\"phnumberSize\" [class]=\"phnumberCustomClass\" id=\"{{phoneId}}\" [style.font-weight]=\"phnumberWeight\"\r\n                          [style.color]=\"phnumberColor\">\r\n                          {{number}}\r\n                        </h2>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6 pr-2\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-8\">\r\n                        <span class=\"row pb-2\">\r\n                          <img [src]=\"addressIcon\">\r\n                          <h2 [style.font-size.px]=\"addressSize\" [class]=\"addressCustomClass\" id=\"{{addressId}}\" [style.font-weight]=\"addressWeight\"\r\n                            [style.color]=\"addressColor\">\r\n                            {{address}}\r\n                          </h2>\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"col-sm-4\">\r\n                        <a id=\"editProfCont\" (click)=\"samIconAction.emit()\" [hidden]=\"!editvisibility\">\r\n                          <img [src]=\"samBadgeIcon\" alt=\"sam badge\" [class]=\"samBadgeClass\" height=\"50px\" width=\"50px\">\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ["#privacy{flex-grow:1}.bgColor{background-color:#fff;box-shadow:3px -4px 0 3px rgba(0,0,0,.01);border-radius:70px 70px 0 0}.bgColor:before{content:\"\";position:absolute;width:100%;height:202px;border-radius:70px 70px 0 0;background-image:radial-gradient(circle at 50% 0,#3a3a3a,#000),linear-gradient(rgba(101,102,243,.06),rgba(101,102,243,.06))}.colorGrey{color:rgba(255,255,255,.67)!important}@media only screen and (max-width:800px){.colorGrey{color:#000!important}}.border,.border-top{border:1px solid #e9e9e9bf!important}@media only screen and (min-width:1500px){.p-auto{padding-right:3rem!important}}@media only screen and (min-width:1024px){.pt-top{padding-top:94px!important}}@media only screen and (max-width:1024px){.tab-size{flex:auto;max-width:100%}.mbc-auto,.mc-auto{margin:auto!important}.pt-top{padding-top:41px!important}.bgColor:before{height:148px!important}}.profilePercentage{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#fff}.emptyStar{color:#e1e1e1;margin:4px}.fullStar{color:#898989;margin:4px}.halfStarLeft{color:#898989;position:relative;left:1px}.halfStarRight{color:#e1e1e1;position:relative;right:1px}.profileBox{width:187.656px;border-radius:0 0 30px 30px;background-color:#fff;box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.img-circle{height:150px;width:150px;border-radius:100%;background-color:#fff!important}.bLine{opacity:.09;border:1px solid #979797}.userName{font-family:Poppins,sans-serif!important;font-size:20px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;color:var(--black);word-break:break-all!important}.create-interest-listing{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:14px;color:#b6b6b6;line-height:18px;letter-spacing:.01em;word-break:break-all!important}@media only screen and (max-width:500px){h1,h2{color:#000!important}}h2{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;word-break:break-all!important}@media only screen and (max-width:1024px){h2{font-size:10px!important}}@media only screen and (max-width:768px){.bgColor:before{height:122px!important}.pt-top{padding-top:10px!important}h2{font-size:13px!important}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9maWxlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9maWxlLWhlYWRlci9zdWt1LXByb2ZpbGUtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sMEJBQTBCO0lBbUZ0Qzs7UUFqRkEsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Ysb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFFWixpQkFBWSxHQUFHLGlDQUFpQyxDQUFDO1FBQ3RDLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFDN0IsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixvQkFBZSxHQUFHLDJDQUEyQyxDQUFDO1FBQzlELGFBQVEsR0FBRyxNQUFNLENBQUM7UUFHSixnQkFBVyxHQUFHLGNBQWMsQ0FBQztRQUMzQyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0Qix1QkFBa0IsR0FBRyxNQUFNLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsaUJBQVksR0FBRywyQkFBMkIsQ0FBQztRQUMzQyxjQUFTLEdBQUcsV0FBVyxDQUFDO1FBQ3hCLHNCQUFpQixHQUFHLGdCQUFnQixDQUFDO1FBQ3JDLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLG9CQUFlLEdBQUcsU0FBUyxDQUFDO1FBQzVCLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUMzQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QiwyQkFBc0IsR0FBRyxNQUFNLENBQUM7UUFFaEMsa0JBQWEs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cUI7O0lBWXJCLG1EQUF3Qzs7SUFDeEMscURBQXlDOztJQUN6QyxtREFBMkM7O0lBQzNDLHFEQUE0Qzs7SUFDNUMsb0RBQStCOztJQUMvQiw4REFBeUM7O0lBR3pDLDBDQUFxQzs7SUFDckMsaURBQTRCOztJQUM1QixtREFBbUM7O0lBQ25DLGdEQUE0Qjs7SUFDNUIscURBQWlFOztJQUNqRSw0Q0FBeUI7O0lBQ3pCLDhDQUFvRDs7SUFDcEQsbURBQTRCOztJQUc1Qiw0Q0FBd0I7O0lBQ3hCLGtEQUE2Qjs7SUFDN0IsbURBQW1DOztJQUNuQyxvREFBZ0M7O0lBQ2hDLHlEQUEyRTs7SUFDM0Usa0RBQThEOztJQUM5RCw2Q0FBc0I7O0lBR3RCLGlEQUE0RDs7SUFDNUQsNkNBQXVDOztJQUN2QyxpREFBNEI7O0lBQzVCLGtEQUFrQzs7SUFDbEMsbURBQStCOztJQUMvQiwrQ0FBd0I7O0lBQ3hCLHdEQUFvRTs7SUFHcEUsa0RBQTJEOztJQUMzRCxtREFBNEI7O0lBQzVCLG1EQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc3VrdS1wcm9maWxlLWhlYWRlcicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtcHJvZmlsZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL3N1a3UtcHJvZmlsZS1oZWFkZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdVByb2ZpbGVIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdC8qIHByb2ZpbGUtLXdpZGdldCAtLXN0YXJ0ICovXHJcblx0ZnVsbFN0YXJzID0gMDtcclxuXHRmdWxsU3RhcnNBcnJheSA9IFtdO1xyXG5cdGhhbGZTdGFyID0gMDtcclxuXHRlbXB0eVN0YXJzID0gMDtcclxuXHRlbXB0eVN0YXJzQXJyYXkgPSBbXTtcclxuXHRfcmF0aW5nVmFsdWU7XHJcblx0QElucHV0KCkgcHJvZmlsZUltYWdlID0gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnJvd3Nlci5wbmcnO1xyXG5cdEBJbnB1dCgndXNlci1uYW1lJykgdXNlck5hbWUgPSAnU3VrdSc7XHJcblx0QElucHV0KCkgbmFtZVdlaWdodCA9ICc0MDAnO1xyXG5cdEBJbnB1dCgpIG5hbWVDdXN0b21DbGFzcyA9ICdtYi0wIHRleHQtd2hpdGUgbXQtMSBwbC0xIHRleHQtY2FwaXRhbGl6ZSc7XHJcblx0QElucHV0KCkgbmFtZVNpemUgPSAnMzMuNCc7XHJcblx0QElucHV0KCkgbmFtZUNvbG9yO1xyXG5cdEBJbnB1dCgpIHVzZXJOYW1lSWQ7XHJcblx0QElucHV0KCdhY2NvdW50LXR5cGUnKSBhY2NvdW50VHlwZSA9ICdNYW51ZmFjdHVyZXInO1xyXG5cdEBJbnB1dCgpIGFjY291bnRXZWlnaHQgPSAnNDAwJztcclxuXHRASW5wdXQoKSBhY2NvdW50Q3VzdG9tQ2xhc3MgPSAncGwtMic7XHJcblx0QElucHV0KCkgYWNjb3VudFNpemUgPSAnMTcnO1xyXG5cdEBJbnB1dCgpIGFjY291bnRDb2xvciA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjcpJztcclxuXHRASW5wdXQoKSBhY2NvdW50SWQgPSAnYWNjb3VudElkJztcclxuXHRASW5wdXQoKSByYXRpbmdDdXN0b21DbGFzcyA9ICdwbC0yIG1iLTIgcHQtMyc7XHJcblx0QElucHV0KCkgcmF0ZURldGFpbHMgPSAnJztcclxuXHRASW5wdXQoKSByYXRlRGV0YWlsQ29sb3IgPSAnIzc1NzU3NSc7XHJcblx0QElucHV0KCkgcmF0aW5nRGV0YWlsV2VpZ2h0ID0gJzQwMCc7XHJcblx0QElucHV0KCkgcmF0ZURldGFpbFNpemUgPSAnMTQnO1xyXG5cdEBJbnB1dCgpIHJhdGVEZXRhaWxzQ3VzdG9tQ2xhc3MgPSAncGwtMic7XHJcblx0QElucHV0KCkgcmF0aW5nUHJpdmFjeTogQm9vbGVhbjtcclxuXHRASW5wdXQoKSByYXRlRGV0YWlsc0lkID0gJyc7XHJcblx0QE91dHB1dCgpIGFjdGlvbk9uZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgYWN0aW9uVHdvID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBJbnB1dCgpIGN1c3RvbUNsYXNzO1xyXG5cdEBJbnB1dCgpXHJcblx0QElucHV0KCdyYXRpbmctdmFsdWUnKVxyXG5cdHNldCByYXRpbmdWYWx1ZSh2YWw6IG51bWJlcikge1xyXG5cdFx0dGhpcy5mdWxsU3RhcnMgPSBNYXRoLnJvdW5kKHZhbCk7XHJcblx0XHR0aGlzLmZ1bGxTdGFyc0FycmF5ID0gQXJyYXkodGhpcy5mdWxsU3RhcnMpLmZpbGwoMSk7XHJcblx0XHR0aGlzLmhhbGZTdGFyID0gdGhpcy5mdWxsU3RhcnMgPCB2YWwgPyAxIDogMDtcclxuXHRcdHRoaXMuZW1wdHlTdGFycyA9IDUgLSB0aGlzLmZ1bGxTdGFycyAtIHRoaXMuaGFsZlN0YXI7XHJcblx0XHR0aGlzLmVtcHR5U3RhcnNBcnJheSA9IEFycmF5KHRoaXMuZW1wdHlTdGFycykuZmlsbCgxKTtcclxuXHR9XHJcblxyXG5cdC8qIGVkaXQtcGFzc3dvcmQtLXZpc2liaWxpdHkgKi9cclxuXHRASW5wdXQoKSBzdWJIZWFkaW5nT25lID0gJ2VkaXQgYWNjb3VudCc7XHJcblx0QElucHV0KCkgc3ViSGVhZGluZ09uZUlkID0gJ2VkaXRBY2NvdW50JztcclxuXHRASW5wdXQoKSBzdWJIZWFkaW5nVHdvID0gJ2NoYW5nZSBwYXNzd29yZCc7XHJcblx0QElucHV0KCkgc3ViSGVhZGluZ1R3b0lkID0gJ2NoYW5nZVBhc3N3b3JkJztcclxuXHRASW5wdXQoKSBlZGl0dmlzaWJpbGl0eSA9IHRydWU7XHJcblx0QElucHV0KCkgY2hhbmdlUGFzc3dvcmR2aXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcblx0Lyogc3VrdS1tYWlsLXdpZGdldCAqL1xyXG5cdEBJbnB1dCgpIG1haWwgPSAnZGNvbndheUB2YWlyb2cuY29tJztcclxuXHRASW5wdXQoKSBtYWlsVHh0U2l6ZSA9ICcxMyc7XHJcblx0QElucHV0KCkgbWFpbFRleHRDb2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoKSBtYWlsV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCkgbWFpbGN1c3RvbUNsYXNzID0gJ3B0LTIgcGwtNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJztcclxuXHRASW5wdXQoKSBtYWlsSWQgPSAnbWFpbCc7XHJcblx0QElucHV0KCkgbWFpbEljb24gPSAnL2Fzc2V0cy9pbWFnZXMvbWFpbC1saWdodC5zdmcnO1xyXG5cdEBJbnB1dCgpIG1haWxJY29uQ2xhc3MgPSAnJztcclxuXHJcblx0Lyogc3VrdS1waG9uZS13aWRnZXQgKi9cclxuXHRASW5wdXQoKSBudW1iZXIgPSAnTi9BJztcclxuXHRASW5wdXQoKSBwaG51bWJlclNpemUgPSAnMTMnO1xyXG5cdEBJbnB1dCgpIHBobnVtYmVyQ29sb3IgPSAnIzNlM2UzZSc7XHJcblx0QElucHV0KCkgcGhudW1iZXJXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoKSBwaG51bWJlckN1c3RvbUNsYXNzID0gJ3BsLTQgbXQtMSBtYi0xICBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJztcclxuXHRASW5wdXQoKSBwaE51bWJlckljb24gPSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9waG9uZS1saWdodC5wbmcnO1xyXG5cdEBJbnB1dCgpIHBob25lSWQgPSAnJztcclxuXHJcblx0Lyogc3VrdS1hZGRyZXNzLXdpZGdldCAqL1xyXG5cdEBJbnB1dCgpIGFkZHJlc3NJY29uID0gJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFwLXBpbi5zdmcnO1xyXG5cdEBJbnB1dCgpIGFkZHJlc3MgPSAnOTMxNSBOVyAxMTJUSCBBVkUnO1xyXG5cdEBJbnB1dCgpIGFkZHJlc3NTaXplID0gJzEzJztcclxuXHRASW5wdXQoKSBhZGRyZXNzQ29sb3IgPSAnIzNlM2UzZSc7XHJcblx0QElucHV0KCkgYWRkcmVzc1dlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgpIGFkZHJlc3NJZCA9ICcnO1xyXG5cdEBJbnB1dCgpIGFkZHJlc3NDdXN0b21DbGFzcyA9ICdwdC0yIHBsLTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic7XHJcblxyXG5cdC8qIHNhbS1iYXJkZ2UgKi9cclxuXHRASW5wdXQoKSBzYW1CYWRnZUljb24gPSAnLi4vLi4vLi4vYXNzZXRzL2ltZy9zYW1CYWRnZS5wbmcnO1xyXG5cdEBJbnB1dCgpIHNhbUJhZGdlQ2xhc3MgPSAnJztcclxuXHRAT3V0cHV0KCkgc2FtSWNvbkFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7IH1cclxuXHRcclxuXHRlZGl0QWNjb3VudCgpIHtcclxuICAgICAgICB0aGlzLmFjdGlvbk9uZS5lbWl0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUGFzcygpIHtcclxuICAgICAgICB0aGlzLmFjdGlvblR3by5lbWl0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19