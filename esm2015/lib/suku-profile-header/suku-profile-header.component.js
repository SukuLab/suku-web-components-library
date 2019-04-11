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
        this.rating = new EventEmitter();
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
}
SukuProfileHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-profile-header',
                template: "<div class=\"col p-0 bgColor\">\n  <div class=\"col-sm-12 pt1 pt-top\">\n    <div class=\"col pl-lg-5\">\n      <div class=\"row\">\n        <div class=\"col mt-5\">\n          <div class=\"col-sm-8 col-md-12 col-lg-12\">\n            <div class=\"row\">\n              <div class=\"col-sm-5 col-md-5\">\n                <img [src]=\"profileImage\" class=\"rounded-circle img-circle\" alt=\"profile\" width=\"150\" height=\"150\">\n              </div>\n              <div class=\"col-sm-7 pt-3 col-md-7\">\n                <h1 [style.font-size.px]=\"nameSize\" [class]=\"nameCustomClass\" [style.font-weight]=\"nameWeight\"\n                  [style.color]=\"nameColor\" id=\"{{userNameId}}\">\n                  {{userName}}\n                </h1>\n                <h2 [style.font-size.px]=\"accountSize\" [class]=\"accountCustomClass\" id=\"{{accountId}}\"\n                  [style.font-weight]=\"accountWeight\" [style.color]=\"accountColor\">\n                  {{accountType}}\n                </h2>\n                <span>\n                  <div class=\"pt-4\" *ngIf=\"ratingPrivacy\">\n                    <span class=\"fa fa-star fullStar f22\" *ngFor=\"let star of fullStarsArray\"> </span>\n                    <span class=\"fa fa-star-half halfStarLeft f22\" *ngIf=\"halfStar == 1\"> </span>\n                    <span class=\"fa fa-star-half fa-flip-horizontal halfStarRight f22\" *ngIf=\"halfStar == 1\"> </span>\n                    <span class=\"fa fa-star emptyStar f22\" *ngFor=\"let star of emptyStarsArray\"> </span>\n                  </div>\n                </span>\n                <h2 [style.font-size.px]=\"rateDetailSize\" [class]=\"rateDetailsCustomClass\" id=\"{{rateDetailsId}}\"\n                  [style.font-weight]=\"ratingDetailWeight\" [style.color]=\"rateDetailColor\">\n                  {{rateDetails}}\n                </h2>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-7 col-md-12 col-lg-6 pl-lg-0\">\n          <div class=\"col-sm-12 pt-lg-5 pl-lg-0\">\n            <div class=\"col-sm-12 pt-lg-5 pl-lg-0 p-xs-2\">\n              <div class=\"col-sm-12 pt-lg-4\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12 col-lg-4 offset-lg-4 text-lg-right col-md-3 text-md-center col-xs-12 p-xs-0\">\n                    <a class=\"profilePercentage colorGrey\"  id=\"{{subHeadingOneId}}\" [style.visibility]=\"editvisibility ? 'visible' : 'hidden'\"\n                      routerLink=\"/CreateProfile_Confirmation\">{{subHeadingOne}}</a>\n                  </div>\n                  <div class=\"col-sm-3 col-md-3 p-md-0 col-lg-4 text-lg-center col-xs-12 p-xs-0\">\n                    <a class=\" profilePercentage colorGrey\" id=\"{{subHeadingTwoId}}\" [style.visibility]=\"changePasswordvisibility ? 'visible' : 'hidden'\"\n                      routerLink=\"/changePassword\">{{subHeadingTwo}}</a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-12 pt-5 pl-md-0\">\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div>\n                      <span class=\"row pb-2\">\n                        <img [src]=\"mailIcon\" [class]=\"mailIconClass\">\n                        <h2 [style.font-size.px]=\"mailTxtSize\" [class]=\"mailcustomClass\" id=\"{{mailId}}\" [style.font-weight]=\"mailWeight\"\n                          [style.color]=\"mailTextColor\">\n                          {{mail}}\n                        </h2>\n                      </span>\n                    </div>\n                    <div class=\"pt-3\">\n                      <span class=\"row pb-2\">\n                        <img [src]=\"phNumberIcon\" height=\"20px\" class=\"mt-1\">\n                        <h2 [style.font-size.px]=\"phnumberSize\" [class]=\"phnumberCustomClass\" id=\"{{phoneId}}\" [style.font-weight]=\"phnumberWeight\"\n                          [style.color]=\"phnumberColor\">\n                          {{number}}\n                        </h2>\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-6 pr-2\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-8\">\n                        <span class=\"row pb-2\">\n                          <img [src]=\"addressIcon\">\n                          <h2 [style.font-size.px]=\"addressSize\" [class]=\"addressCustomClass\" id=\"{{addressId}}\" [style.font-weight]=\"addressWeight\"\n                            [style.color]=\"addressColor\">\n                            {{address}}\n                          </h2>\n                        </span>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <a id=\"editProfCont\" (click)=\"samIconAction.emit()\" [hidden]=\"!editvisibility\">\n                          <img [src]=\"samBadgeIcon\" alt=\"sam badge\" [class]=\"samBadgeClass\" height=\"50px\" width=\"50px\">\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: ["#privacy{flex-grow:1}.bgColor{background-color:#fff;box-shadow:3px -4px 0 3px rgba(0,0,0,.01);border-radius:70px 70px 0 0}.bgColor:before{content:\"\";position:absolute;width:100%;height:202px;border-radius:70px 70px 0 0;background-image:radial-gradient(circle at 50% 0,#3a3a3a,#000),linear-gradient(rgba(101,102,243,.06),rgba(101,102,243,.06))}.colorGrey{color:rgba(255,255,255,.67)!important}@media only screen and (max-width:800px){.colorGrey{color:#000!important}}.border,.border-top{border:1px solid #e9e9e9bf!important}@media only screen and (min-width:1500px){.p-auto{padding-right:3rem!important}}@media only screen and (min-width:1024px){.pt-top{padding-top:94px!important}}@media only screen and (max-width:1024px){.tab-size{flex:auto;max-width:100%}.mbc-auto,.mc-auto{margin:auto!important}.pt-top{padding-top:41px!important}.bgColor{margin-top:30px!important}.bgColor:before{height:148px!important}}.profilePercentage{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#fff}.emptyStar{color:#e1e1e1;margin:4px}.fullStar{color:#898989;margin:4px}.halfStarLeft{color:#898989;position:relative;left:1px}.halfStarRight{color:#e1e1e1;position:relative;right:1px}.profileBox{width:187.656px;border-radius:0 0 30px 30px;background-color:#fff;box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.img-circle{height:150px;width:150px;border-radius:100%;background-color:#fff!important}.bLine{opacity:.09;border:1px solid #979797}.userName{font-family:Poppins,sans-serif!important;font-size:20px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;color:var(--black);word-break:break-all!important}.create-interest-listing{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:14px;color:#b6b6b6;line-height:18px;letter-spacing:.01em;word-break:break-all!important}@media only screen and (max-width:500px){h1,h2{color:#000!important}}h2{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;word-break:break-all!important}@media only screen and (max-width:1024px){h2{font-size:10px!important}}@media only screen and (max-width:768px){.bgColor:before{height:122px!important}.pt-top{padding-top:10px!important}h2{font-size:13px!important}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9maWxlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9maWxlLWhlYWRlci9zdWt1LXByb2ZpbGUtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sMEJBQTBCO0lBa0Z0Qzs7UUFoRkEsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Ysb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFFWixpQkFBWSxHQUFHLGlDQUFpQyxDQUFDO1FBQ3RDLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFDN0IsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixvQkFBZSxHQUFHLDJDQUEyQyxDQUFDO1FBQzlELGFBQVEsR0FBRyxNQUFNLENBQUM7UUFHSixnQkFBVyxHQUFHLGNBQWMsQ0FBQztRQUMzQyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0Qix1QkFBa0IsR0FBRyxNQUFNLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsaUJBQVksR0FBRywyQkFBMkIsQ0FBQztRQUMzQyxjQUFTLEdBQUcsV0FBVyxDQUFDO1FBQ3hCLHNCQUFpQixHQUFHLGdCQUFnQixDQUFDO1FBQ3JDLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLG9CQUFlLEdBQUcsU0FBUyxDQUFDO1FBQzVCLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUMzQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QiwyQkFBc0IsR0FBRyxNQUFNLENBQUM7UUFFaEMsa0JBQWEs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cEQsbURBQTRCOztJQUc1Qiw0Q0FBd0I7O0lBQ3hCLGtEQUE2Qjs7SUFDN0IsbURBQW1DOztJQUNuQyxvREFBZ0M7O0lBQ2hDLHlEQUEyRTs7SUFDM0Usa0RBQThEOztJQUM5RCw2Q0FBc0I7O0lBR3RCLGlEQUE0RDs7SUFDNUQsNkNBQXVDOztJQUN2QyxpREFBNEI7O0lBQzVCLGtEQUFrQzs7SUFDbEMsbURBQStCOztJQUMvQiwrQ0FBd0I7O0lBQ3hCLHdEQUFvRTs7SUFHcEUsa0RBQTJEOztJQUMzRCxtREFBNEI7O0lBQzVCLG1EQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1wcm9maWxlLWhlYWRlcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXByb2ZpbGUtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1wcm9maWxlLWhlYWRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VQcm9maWxlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0LyogcHJvZmlsZS0td2lkZ2V0IC0tc3RhcnQgKi9cblx0ZnVsbFN0YXJzID0gMDtcblx0ZnVsbFN0YXJzQXJyYXkgPSBbXTtcblx0aGFsZlN0YXIgPSAwO1xuXHRlbXB0eVN0YXJzID0gMDtcblx0ZW1wdHlTdGFyc0FycmF5ID0gW107XG5cdF9yYXRpbmdWYWx1ZTtcblx0QElucHV0KCkgcHJvZmlsZUltYWdlID0gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnJvd3Nlci5wbmcnO1xuXHRASW5wdXQoJ3VzZXItbmFtZScpIHVzZXJOYW1lID0gJ1N1a3UnO1xuXHRASW5wdXQoKSBuYW1lV2VpZ2h0ID0gJzQwMCc7XG5cdEBJbnB1dCgpIG5hbWVDdXN0b21DbGFzcyA9ICdtYi0wIHRleHQtd2hpdGUgbXQtMSBwbC0xIHRleHQtY2FwaXRhbGl6ZSc7XG5cdEBJbnB1dCgpIG5hbWVTaXplID0gJzMzLjQnO1xuXHRASW5wdXQoKSBuYW1lQ29sb3I7XG5cdEBJbnB1dCgpIHVzZXJOYW1lSWQ7XG5cdEBJbnB1dCgnYWNjb3VudC10eXBlJykgYWNjb3VudFR5cGUgPSAnTWFudWZhY3R1cmVyJztcblx0QElucHV0KCkgYWNjb3VudFdlaWdodCA9ICc0MDAnO1xuXHRASW5wdXQoKSBhY2NvdW50Q3VzdG9tQ2xhc3MgPSAncGwtMic7XG5cdEBJbnB1dCgpIGFjY291bnRTaXplID0gJzE3Jztcblx0QElucHV0KCkgYWNjb3VudENvbG9yID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC42NyknO1xuXHRASW5wdXQoKSBhY2NvdW50SWQgPSAnYWNjb3VudElkJztcblx0QElucHV0KCkgcmF0aW5nQ3VzdG9tQ2xhc3MgPSAncGwtMiBtYi0yIHB0LTMnO1xuXHRASW5wdXQoKSByYXRlRGV0YWlscyA9ICcnO1xuXHRASW5wdXQoKSByYXRlRGV0YWlsQ29sb3IgPSAnIzc1NzU3NSc7XG5cdEBJbnB1dCgpIHJhdGluZ0RldGFpbFdlaWdodCA9ICc0MDAnO1xuXHRASW5wdXQoKSByYXRlRGV0YWlsU2l6ZSA9ICcxNCc7XG5cdEBJbnB1dCgpIHJhdGVEZXRhaWxzQ3VzdG9tQ2xhc3MgPSAncGwtMic7XG5cdEBJbnB1dCgpIHJhdGluZ1ByaXZhY3k6IEJvb2xlYW47XG5cdEBJbnB1dCgpIHJhdGVEZXRhaWxzSWQgPSAnJztcblx0QE91dHB1dCgpIHJhdGluZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QElucHV0KCkgY3VzdG9tQ2xhc3M7XG5cdEBJbnB1dCgpXG5cdEBJbnB1dCgncmF0aW5nLXZhbHVlJylcblx0c2V0IHJhdGluZ1ZhbHVlKHZhbDogbnVtYmVyKSB7XG5cdFx0dGhpcy5mdWxsU3RhcnMgPSBNYXRoLnJvdW5kKHZhbCk7XG5cdFx0dGhpcy5mdWxsU3RhcnNBcnJheSA9IEFycmF5KHRoaXMuZnVsbFN0YXJzKS5maWxsKDEpO1xuXHRcdHRoaXMuaGFsZlN0YXIgPSB0aGlzLmZ1bGxTdGFycyA8IHZhbCA/IDEgOiAwO1xuXHRcdHRoaXMuZW1wdHlTdGFycyA9IDUgLSB0aGlzLmZ1bGxTdGFycyAtIHRoaXMuaGFsZlN0YXI7XG5cdFx0dGhpcy5lbXB0eVN0YXJzQXJyYXkgPSBBcnJheSh0aGlzLmVtcHR5U3RhcnMpLmZpbGwoMSk7XG5cdH1cblxuXHQvKiBlZGl0LXBhc3N3b3JkLS12aXNpYmlsaXR5ICovXG5cdEBJbnB1dCgpIHN1YkhlYWRpbmdPbmUgPSAnZWRpdCBhY2NvdW50Jztcblx0QElucHV0KCkgc3ViSGVhZGluZ09uZUlkID0gJ2VkaXRBY2NvdW50Jztcblx0QElucHV0KCkgc3ViSGVhZGluZ1R3byA9ICdjaGFuZ2UgcGFzc3dvcmQnO1xuXHRASW5wdXQoKSBzdWJIZWFkaW5nVHdvSWQgPSAnY2hhbmdlUGFzc3dvcmQnO1xuXHRASW5wdXQoKSBlZGl0dmlzaWJpbGl0eSA9IHRydWU7XG5cdEBJbnB1dCgpIGNoYW5nZVBhc3N3b3JkdmlzaWJpbGl0eSA9IHRydWU7XG5cblx0Lyogc3VrdS1tYWlsLXdpZGdldCAqL1xuXHRASW5wdXQoKSBtYWlsID0gJ2Rjb253YXlAdmFpcm9nLmNvbSc7XG5cdEBJbnB1dCgpIG1haWxUeHRTaXplID0gJzEzJztcblx0QElucHV0KCkgbWFpbFRleHRDb2xvciA9ICcjM2UzZTNlJztcblx0QElucHV0KCkgbWFpbFdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoKSBtYWlsY3VzdG9tQ2xhc3MgPSAncHQtMiBwbC00IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInO1xuXHRASW5wdXQoKSBtYWlsSWQgPSAnbWFpbCc7XG5cdEBJbnB1dCgpIG1haWxJY29uID0gJy9hc3NldHMvaW1hZ2VzL21haWwtbGlnaHQuc3ZnJztcblx0QElucHV0KCkgbWFpbEljb25DbGFzcyA9ICcnO1xuXG5cdC8qIHN1a3UtcGhvbmUtd2lkZ2V0ICovXG5cdEBJbnB1dCgpIG51bWJlciA9ICdOL0EnO1xuXHRASW5wdXQoKSBwaG51bWJlclNpemUgPSAnMTMnO1xuXHRASW5wdXQoKSBwaG51bWJlckNvbG9yID0gJyMzZTNlM2UnO1xuXHRASW5wdXQoKSBwaG51bWJlcldlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoKSBwaG51bWJlckN1c3RvbUNsYXNzID0gJ3BsLTQgbXQtMSBtYi0xICBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJztcblx0QElucHV0KCkgcGhOdW1iZXJJY29uID0gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGhvbmUtbGlnaHQucG5nJztcblx0QElucHV0KCkgcGhvbmVJZCA9ICcnO1xuXG5cdC8qIHN1a3UtYWRkcmVzcy13aWRnZXQgKi9cblx0QElucHV0KCkgYWRkcmVzc0ljb24gPSAnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tYXAtcGluLnN2Zyc7XG5cdEBJbnB1dCgpIGFkZHJlc3MgPSAnOTMxNSBOVyAxMTJUSCBBVkUnO1xuXHRASW5wdXQoKSBhZGRyZXNzU2l6ZSA9ICcxMyc7XG5cdEBJbnB1dCgpIGFkZHJlc3NDb2xvciA9ICcjM2UzZTNlJztcblx0QElucHV0KCkgYWRkcmVzc1dlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoKSBhZGRyZXNzSWQgPSAnJztcblx0QElucHV0KCkgYWRkcmVzc0N1c3RvbUNsYXNzID0gJ3B0LTIgcGwtNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJztcblxuXHQvKiBzYW0tYmFyZGdlICovXG5cdEBJbnB1dCgpIHNhbUJhZGdlSWNvbiA9ICcuLi8uLi8uLi9hc3NldHMvaW1nL3NhbUJhZGdlLnBuZyc7XG5cdEBJbnB1dCgpIHNhbUJhZGdlQ2xhc3MgPSAnJztcblx0QE91dHB1dCgpIHNhbUljb25BY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgfVxufVxuIl19