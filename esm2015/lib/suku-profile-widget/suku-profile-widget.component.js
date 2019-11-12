/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
export class SukuProfileWidgetComponent {
    constructor() {
        this.image = '../../assets/images/browser.png';
        this.userName = 'Vairog';
        this.nameWeight = '400';
        this.nameCustomClass = 'mb-0 mt-1 pl-1';
        this.nameSize = '';
        this.accountType = 'Manufacturer';
        this.accountWeight = '400';
        this.accountCustomClass = 'pl-2';
        this.accountSize = '';
        this.accountColor = '';
        this.ratingCustomClass = 'pl-2 mb-2 pt-3 mt-4';
        this.rateDetails = 'based on 14 rating';
        this.rateColor = '';
        this.ratingWeight = '400';
        this.rDustomClass = 'pl-2';
        this.id = '';
        this.subCustomClass = 'profileBox';
        this.mainCustomClass = 'col-sm-12 col-md-6 col-lg-3 ml-2 mt-1 p-0';
        this._rate = 5;
        this.rating = new EventEmitter();
        this.fullStars = 0;
        this.fullStarsArray = [];
        this.halfStar = 0;
        this.emptyStars = 0;
        this.emptyStarsArray = [];
        this.action = new EventEmitter();
    }
    /**
     * @param {?} ratingValue
     * @return {?}
     */
    set ratingValue(ratingValue) {
        this.fullStars = Math.round(ratingValue);
        this.fullStarsArray = Array(this.fullStars).fill(1);
        this.halfStar = (this.fullStars < ratingValue) ? 1 : 0;
        this.emptyStars = 5 - this.fullStars - this.halfStar;
        this.emptyStarsArray = Array(this.emptyStars).fill(1);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuProfileWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-profile-widget',
                template: "<div [class]=\"mainCustomClass\">\r\n  <div class=\"row d-flex justify-content-start {{subCustomClass}}\">\r\n    <img src=\"{{image}}\" class=\"rounded-circle image mt-2 \" alt=\"profile\">\r\n    <div class=\"mL\">\r\n      <h1 [style.font-size.rem]=\"nameSize\" class=\"{{nameCustomClass}}} userName pl-2\" [style.font-weight]=\"nameWeight\"\r\n        [style.color]=\"nameColor\" id=\"{{id}}\">\r\n        {{userName}}\r\n      </h1>\r\n      <h2 [style.font-size.rem]=\"accountSize\" class=\"{{accountCustomClass}} accountType\" id=\"{{id}}\"\r\n        [style.font-weight]=\"accountWeight\" [style.color]=\"accountColor\">\r\n        {{accountType}}\r\n      </h2>\r\n      <div class=\"pt-3\">\r\n        <span (change)=\"action.emit()\">\r\n          <span class=\"fa fa-star fullStar pl-2\" *ngFor=\"let star of fullStarsArray\"> </span>\r\n          <span class=\"fa fa-star-half halfStarLeft\" *ngIf=\"halfStar == 1\"> </span>\r\n          <span class=\"fa fa-star-half fa-flip-horizontal halfStarRight\" *ngIf=\"halfStar == 1\"> </span>\r\n          <span class=\"fa fa-star emptyStar\" *ngFor=\"let star of emptyStarsArray\"> </span>\r\n        </span>\r\n      </div>\r\n      <h2 [style.font-size.rem]=\"accountSize\" class=\"{{rDustomClass}} ratingDetails\" id=\"{{id}}\"\r\n        [style.font-weight]=\"ratingWeight\" [style.color]=\"rateColor\">\r\n        {{rateDetails}}\r\n      </h2>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.emptyStar{color:var(--suku-star-empty-bg);margin:4px;font-size:var(--suku-star-size)}.fullStar{color:var(--suku-star-full-bg);margin:4px;font-size:var(--suku-star-size)}.halfStarLeft{color:var(--suku-star-full-bg);position:relative;left:1px;font-size:var(--suku-star-size)}.halfStarRight{color:var(--suku-star-empty-bg);position:relative;right:1px;font-size:var(--suku-star-size)}.profileBox{background-color:var(--suku-profile-bg-color);box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.mL{margin-left:40px!important}.circle{height:150px;width:150px;border-radius:100%}.rounded-circle{background-color:#000;width:150px;height:150px}.userName{font-family:var(--suku-primary-font);font-size:1.8rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:var(--suku-text-label-two);word-break:break-all!important}.accountType{font-family:var(--suku-primary-font);font-size:1.1rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:var(--suku-profile-text-one);word-break:break-all!important}.ratingValue{font-family:var(--suku-primary-font);font-size:25px;color:var(--suku-text-info);font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;word-break:break-all!important}.ratingDetails{font-family:var(--suku-primary-font);color:var(--suku-profile-text-two);font-size:.8rem;font-weight:700;word-break:break-all!important}"]
            }] }
];
/** @nocollapse */
SukuProfileWidgetComponent.ctorParameters = () => [];
SukuProfileWidgetComponent.propDecorators = {
    image: [{ type: Input }],
    userName: [{ type: Input, args: ['user-name',] }],
    nameWeight: [{ type: Input, args: ['name-weight',] }],
    nameCustomClass: [{ type: Input, args: ['name-custom-class',] }],
    nameSize: [{ type: Input, args: ['name-size',] }],
    nameColor: [{ type: Input, args: ['name-color',] }],
    accountType: [{ type: Input, args: ['account-type',] }],
    accountWeight: [{ type: Input, args: ['account-weight',] }],
    accountCustomClass: [{ type: Input, args: ['account-custom-class',] }],
    accountSize: [{ type: Input, args: ['account-size',] }],
    accountColor: [{ type: Input, args: ['account-color',] }],
    ratingCustomClass: [{ type: Input, args: ['rating-custom-class',] }],
    rateDetails: [{ type: Input, args: ['rate-details',] }],
    rateColor: [{ type: Input, args: ['rate-color',] }],
    ratingWeight: [{ type: Input, args: ['rating-weight',] }],
    rDustomClass: [{ type: Input, args: ['r-dustom-class',] }],
    id: [{ type: Input }],
    subCustomClass: [{ type: Input, args: ['sub-custom-class',] }],
    mainCustomClass: [{ type: Input, args: ['main-custom-class',] }],
    rating: [{ type: Output }],
    customClass: [{ type: Input }],
    action: [{ type: Output }],
    ratingValue: [{ type: Input, args: ['rating-value',] }]
};
if (false) {
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.image;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.userName;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.nameWeight;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.nameCustomClass;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.nameSize;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.nameColor;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.accountType;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.accountWeight;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.accountCustomClass;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.accountSize;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.accountColor;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.ratingCustomClass;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.rateDetails;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.rateColor;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.ratingWeight;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.rDustomClass;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.id;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.subCustomClass;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.mainCustomClass;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.myHTML;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype._rate;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.rating;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.customClass;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.fullStars;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.fullStarsArray;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.halfStar;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.emptyStars;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.emptyStarsArray;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9maWxlLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9maWxlLXdpZGdldC9zdWt1LXByb2ZpbGUtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sMEJBQTBCO0lBd0NyQztRQXZDUyxVQUFLLEdBQUcsaUNBQWlDLENBQUM7UUFDL0IsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2Isb0JBQWUsR0FBRyxnQkFBZ0IsQ0FBQztRQUMzQyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBRVgsZ0JBQVcsR0FBRyxjQUFjLENBQUM7UUFDM0Isa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDaEIsdUJBQWtCLEdBQUcsTUFBTSxDQUFDO1FBQ3BDLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ1osc0JBQWlCLEdBQUcscUJBQXFCLENBQUM7UUFDakQsZ0JBQVcsR0FBRyxvQkFBb0IsQ0FBQztRQUNyQyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ1osaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDcEIsaUJBQVksR0FBRyxNQUFNLENBQUM7UUFDdEMsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUNVLG1CQUFjLEdBQUcsWUFBWSxDQUFDO1FBQzdCLG9CQUFlLEdBQUcsMkNBQTJDLENBQUM7UUFFMUYsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNBLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRDLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ1gsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFZdEMsQ0FBQzs7Ozs7SUFYRCxJQUdJLFdBQVcsQ0FBQyxXQUFtQjtRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUlELFFBQVE7SUFDUixDQUFDOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLDg2Q0FBbUQ7O2FBRXBEOzs7OztvQkFFRSxLQUFLO3VCQUNMLEtBQUssU0FBQyxXQUFXO3lCQUNqQixLQUFLLFNBQUMsYUFBYTs4QkFDbkIsS0FBSyxTQUFDLG1CQUFtQjt1QkFDekIsS0FBSyxTQUFDLFdBQVc7d0JBQ2pCLEtBQUssU0FBQyxZQUFZOzBCQUNsQixLQUFLLFNBQUMsY0FBYzs0QkFDcEIsS0FBSyxTQUFDLGdCQUFnQjtpQ0FDdEIsS0FBSyxTQUFDLHNCQUFzQjswQkFDNUIsS0FBSyxTQUFDLGNBQWM7MkJBQ3BCLEtBQUssU0FBQyxlQUFlO2dDQUNyQixLQUFLLFNBQUMscUJBQXFCOzBCQUMzQixLQUFLLFNBQUMsY0FBYzt3QkFDcEIsS0FBSyxTQUFDLFlBQVk7MkJBQ2xCLEtBQUssU0FBQyxlQUFlOzJCQUNyQixLQUFLLFNBQUMsZ0JBQWdCO2lCQUN0QixLQUFLOzZCQUNMLEtBQUssU0FBQyxrQkFBa0I7OEJBQ3hCLEtBQUssU0FBQyxtQkFBbUI7cUJBR3pCLE1BQU07MEJBQ04sS0FBSztxQkFNTCxNQUFNOzBCQUNOLEtBQUssU0FBQyxjQUFjOzs7O0lBN0JyQiwyQ0FBbUQ7O0lBQ25ELDhDQUF3Qzs7SUFDeEMsZ0RBQXlDOztJQUN6QyxxREFBK0Q7O0lBQy9ELDhDQUFrQzs7SUFDbEMsK0NBQStCOztJQUMvQixpREFBb0Q7O0lBQ3BELG1EQUErQzs7SUFDL0Msd0RBQTJEOztJQUMzRCxpREFBd0M7O0lBQ3hDLGtEQUEwQzs7SUFDMUMsdURBQXdFOztJQUN4RSxpREFBMEQ7O0lBQzFELCtDQUFvQzs7SUFDcEMsa0RBQTZDOztJQUM3QyxrREFBK0M7O0lBQy9DLHdDQUFpQjs7SUFDakIsb0RBQXlEOztJQUN6RCxxREFBMEY7O0lBQzFGLDRDQUFPOztJQUNQLDJDQUFVOztJQUNWLDRDQUFzQzs7SUFDdEMsaURBQXFCOztJQUNyQiwrQ0FBYzs7SUFDZCxvREFBb0I7O0lBQ3BCLDhDQUFhOztJQUNiLGdEQUFlOztJQUNmLHFEQUFxQjs7SUFDckIsNENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LXByb2ZpbGUtd2lkZ2V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1wcm9maWxlLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1wcm9maWxlLXdpZGdldC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1UHJvZmlsZVdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaW1hZ2UgPSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9icm93c2VyLnBuZyc7XHJcbiAgQElucHV0KCd1c2VyLW5hbWUnKSB1c2VyTmFtZSA9ICdWYWlyb2cnO1xyXG4gIEBJbnB1dCgnbmFtZS13ZWlnaHQnKSBuYW1lV2VpZ2h0ID0gJzQwMCc7XHJcbiAgQElucHV0KCduYW1lLWN1c3RvbS1jbGFzcycpIG5hbWVDdXN0b21DbGFzcyA9ICdtYi0wIG10LTEgcGwtMSc7XHJcbiAgQElucHV0KCduYW1lLXNpemUnKSBuYW1lU2l6ZSA9ICcnO1xyXG4gIEBJbnB1dCgnbmFtZS1jb2xvcicpIG5hbWVDb2xvcjtcclxuICBASW5wdXQoJ2FjY291bnQtdHlwZScpIGFjY291bnRUeXBlID0gJ01hbnVmYWN0dXJlcic7XHJcbiAgQElucHV0KCdhY2NvdW50LXdlaWdodCcpIGFjY291bnRXZWlnaHQgPSAnNDAwJztcclxuICBASW5wdXQoJ2FjY291bnQtY3VzdG9tLWNsYXNzJykgYWNjb3VudEN1c3RvbUNsYXNzID0gJ3BsLTInO1xyXG4gIEBJbnB1dCgnYWNjb3VudC1zaXplJykgYWNjb3VudFNpemUgPSAnJztcclxuICBASW5wdXQoJ2FjY291bnQtY29sb3InKSBhY2NvdW50Q29sb3IgPSAnJztcclxuICBASW5wdXQoJ3JhdGluZy1jdXN0b20tY2xhc3MnKSByYXRpbmdDdXN0b21DbGFzcyA9ICdwbC0yIG1iLTIgcHQtMyBtdC00JztcclxuICBASW5wdXQoJ3JhdGUtZGV0YWlscycpIHJhdGVEZXRhaWxzID0gJ2Jhc2VkIG9uIDE0IHJhdGluZyc7XHJcbiAgQElucHV0KCdyYXRlLWNvbG9yJykgcmF0ZUNvbG9yID0gJyc7XHJcbiAgQElucHV0KCdyYXRpbmctd2VpZ2h0JykgcmF0aW5nV2VpZ2h0ID0gJzQwMCc7XHJcbiAgQElucHV0KCdyLWR1c3RvbS1jbGFzcycpIHJEdXN0b21DbGFzcyA9ICdwbC0yJztcclxuICBASW5wdXQoKSBpZCA9ICcnO1xyXG4gIEBJbnB1dCgnc3ViLWN1c3RvbS1jbGFzcycpIHN1YkN1c3RvbUNsYXNzID0gJ3Byb2ZpbGVCb3gnO1xyXG4gIEBJbnB1dCgnbWFpbi1jdXN0b20tY2xhc3MnKSBtYWluQ3VzdG9tQ2xhc3MgPSAnY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy0zIG1sLTIgbXQtMSBwLTAnO1xyXG4gIG15SFRNTDtcclxuICBfcmF0ZSA9IDU7XHJcbiAgQE91dHB1dCgpIHJhdGluZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASW5wdXQoKSBjdXN0b21DbGFzcztcclxuICBmdWxsU3RhcnMgPSAwO1xyXG4gIGZ1bGxTdGFyc0FycmF5ID0gW107XHJcbiAgaGFsZlN0YXIgPSAwO1xyXG4gIGVtcHR5U3RhcnMgPSAwO1xyXG4gIGVtcHR5U3RhcnNBcnJheSA9IFtdO1xyXG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCdyYXRpbmctdmFsdWUnKVxyXG4gIC8vIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGZ1bGwsIGhhbGYsIGFuZCBlbXB0eSBzdGFycyBiYXNlZCBvbiB0aGUgcmF0aW5nVmFsdWVcclxuICAvLyBBcnJheXMgYXJlIGNyZWF0ZWQgdG8gaXRlcmF0ZSB0aHJvdWdoIHdpdGggYW4gbmdGb3IgaW4gdGhlIEhUTUwgZmlsZVxyXG4gIHNldCByYXRpbmdWYWx1ZShyYXRpbmdWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmZ1bGxTdGFycyA9IE1hdGgucm91bmQocmF0aW5nVmFsdWUpO1xyXG4gICAgdGhpcy5mdWxsU3RhcnNBcnJheSA9IEFycmF5KHRoaXMuZnVsbFN0YXJzKS5maWxsKDEpO1xyXG4gICAgdGhpcy5oYWxmU3RhciA9ICh0aGlzLmZ1bGxTdGFycyA8IHJhdGluZ1ZhbHVlKSA/IDEgOiAwO1xyXG4gICAgdGhpcy5lbXB0eVN0YXJzID0gNSAtIHRoaXMuZnVsbFN0YXJzIC0gdGhpcy5oYWxmU3RhcjtcclxuICAgIHRoaXMuZW1wdHlTdGFyc0FycmF5ID0gQXJyYXkodGhpcy5lbXB0eVN0YXJzKS5maWxsKDEpO1xyXG4gIH1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19