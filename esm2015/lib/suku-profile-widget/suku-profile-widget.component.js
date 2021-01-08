/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-profile-widget/suku-profile-widget.component.ts
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
                template: "<div [class]=\"mainCustomClass\">\n  <div class=\"row d-flex justify-content-start {{subCustomClass}}\">\n    <img src=\"{{image}}\" class=\"rounded-circle image mt-2 \" alt=\"profile\">\n    <div class=\"mL\">\n      <h1 [style.font-size.rem]=\"nameSize\" class=\"{{nameCustomClass}}} userName pl-2\" [style.font-weight]=\"nameWeight\"\n        [style.color]=\"nameColor\" id=\"{{id}}\">\n        {{userName}}\n      </h1>\n      <h2 [style.font-size.rem]=\"accountSize\" class=\"{{accountCustomClass}} accountType\" id=\"{{id}}\"\n        [style.font-weight]=\"accountWeight\" [style.color]=\"accountColor\">\n        {{accountType}}\n      </h2>\n      <div class=\"pt-3\">\n        <span (change)=\"action.emit()\">\n          <span class=\"fa fa-star fullStar pl-2\" *ngFor=\"let star of fullStarsArray\"> </span>\n          <span class=\"fa fa-star-half halfStarLeft\" *ngIf=\"halfStar == 1\"> </span>\n          <span class=\"fa fa-star-half fa-flip-horizontal halfStarRight\" *ngIf=\"halfStar == 1\"> </span>\n          <span class=\"fa fa-star emptyStar\" *ngFor=\"let star of emptyStarsArray\"> </span>\n        </span>\n      </div>\n      <h2 [style.font-size.rem]=\"accountSize\" class=\"{{rDustomClass}} ratingDetails\" id=\"{{id}}\"\n        [style.font-weight]=\"ratingWeight\" [style.color]=\"rateColor\">\n        {{rateDetails}}\n      </h2>\n    </div>\n  </div>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9maWxlLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9maWxlLXdpZGdldC9zdWt1LXByb2ZpbGUtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0UsTUFBTSxPQUFPLDBCQUEwQjtJQXdDckM7UUF2Q1MsVUFBSyxHQUFHLGlDQUFpQyxDQUFDO1FBQy9CLGFBQVEsR0FBRyxRQUFRLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNiLG9CQUFlLEdBQUcsZ0JBQWdCLENBQUM7UUFDM0MsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVYLGdCQUFXLEdBQUcsY0FBYyxDQUFDO1FBQzNCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLHVCQUFrQixHQUFHLE1BQU0sQ0FBQztRQUNwQyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNoQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNaLHNCQUFpQixHQUFHLHFCQUFxQixDQUFDO1FBQ2pELGdCQUFXLEdBQUcsb0JBQW9CLENBQUM7UUFDckMsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNaLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGlCQUFZLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFDVSxtQkFBYyxHQUFHLFlBQVksQ0FBQztRQUM3QixvQkFBZSxHQUFHLDJDQUEyQyxDQUFDO1FBRTFGLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDQSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0QyxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNYLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBWXRDLENBQUM7Ozs7O0lBWEQsSUFHSSxXQUFXLENBQUMsV0FBbUI7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFJRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBakRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQiwwM0NBQW1EOzthQUVwRDs7Ozs7b0JBRUUsS0FBSzt1QkFDTCxLQUFLLFNBQUMsV0FBVzt5QkFDakIsS0FBSyxTQUFDLGFBQWE7OEJBQ25CLEtBQUssU0FBQyxtQkFBbUI7dUJBQ3pCLEtBQUssU0FBQyxXQUFXO3dCQUNqQixLQUFLLFNBQUMsWUFBWTswQkFDbEIsS0FBSyxTQUFDLGNBQWM7NEJBQ3BCLEtBQUssU0FBQyxnQkFBZ0I7aUNBQ3RCLEtBQUssU0FBQyxzQkFBc0I7MEJBQzVCLEtBQUssU0FBQyxjQUFjOzJCQUNwQixLQUFLLFNBQUMsZUFBZTtnQ0FDckIsS0FBSyxTQUFDLHFCQUFxQjswQkFDM0IsS0FBSyxTQUFDLGNBQWM7d0JBQ3BCLEtBQUssU0FBQyxZQUFZOzJCQUNsQixLQUFLLFNBQUMsZUFBZTsyQkFDckIsS0FBSyxTQUFDLGdCQUFnQjtpQkFDdEIsS0FBSzs2QkFDTCxLQUFLLFNBQUMsa0JBQWtCOzhCQUN4QixLQUFLLFNBQUMsbUJBQW1CO3FCQUd6QixNQUFNOzBCQUNOLEtBQUs7cUJBTUwsTUFBTTswQkFDTixLQUFLLFNBQUMsY0FBYzs7OztJQTdCckIsMkNBQW1EOztJQUNuRCw4Q0FBd0M7O0lBQ3hDLGdEQUF5Qzs7SUFDekMscURBQStEOztJQUMvRCw4Q0FBa0M7O0lBQ2xDLCtDQUErQjs7SUFDL0IsaURBQW9EOztJQUNwRCxtREFBK0M7O0lBQy9DLHdEQUEyRDs7SUFDM0QsaURBQXdDOztJQUN4QyxrREFBMEM7O0lBQzFDLHVEQUF3RTs7SUFDeEUsaURBQTBEOztJQUMxRCwrQ0FBb0M7O0lBQ3BDLGtEQUE2Qzs7SUFDN0Msa0RBQStDOztJQUMvQyx3Q0FBaUI7O0lBQ2pCLG9EQUF5RDs7SUFDekQscURBQTBGOztJQUMxRiw0Q0FBTzs7SUFDUCwyQ0FBVTs7SUFDViw0Q0FBc0M7O0lBQ3RDLGlEQUFxQjs7SUFDckIsK0NBQWM7O0lBQ2Qsb0RBQW9COztJQUNwQiw4Q0FBYTs7SUFDYixnREFBZTs7SUFDZixxREFBcUI7O0lBQ3JCLDRDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1wcm9maWxlLXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXByb2ZpbGUtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1wcm9maWxlLXdpZGdldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VQcm9maWxlV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaW1hZ2UgPSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9icm93c2VyLnBuZyc7XG4gIEBJbnB1dCgndXNlci1uYW1lJykgdXNlck5hbWUgPSAnVmFpcm9nJztcbiAgQElucHV0KCduYW1lLXdlaWdodCcpIG5hbWVXZWlnaHQgPSAnNDAwJztcbiAgQElucHV0KCduYW1lLWN1c3RvbS1jbGFzcycpIG5hbWVDdXN0b21DbGFzcyA9ICdtYi0wIG10LTEgcGwtMSc7XG4gIEBJbnB1dCgnbmFtZS1zaXplJykgbmFtZVNpemUgPSAnJztcbiAgQElucHV0KCduYW1lLWNvbG9yJykgbmFtZUNvbG9yO1xuICBASW5wdXQoJ2FjY291bnQtdHlwZScpIGFjY291bnRUeXBlID0gJ01hbnVmYWN0dXJlcic7XG4gIEBJbnB1dCgnYWNjb3VudC13ZWlnaHQnKSBhY2NvdW50V2VpZ2h0ID0gJzQwMCc7XG4gIEBJbnB1dCgnYWNjb3VudC1jdXN0b20tY2xhc3MnKSBhY2NvdW50Q3VzdG9tQ2xhc3MgPSAncGwtMic7XG4gIEBJbnB1dCgnYWNjb3VudC1zaXplJykgYWNjb3VudFNpemUgPSAnJztcbiAgQElucHV0KCdhY2NvdW50LWNvbG9yJykgYWNjb3VudENvbG9yID0gJyc7XG4gIEBJbnB1dCgncmF0aW5nLWN1c3RvbS1jbGFzcycpIHJhdGluZ0N1c3RvbUNsYXNzID0gJ3BsLTIgbWItMiBwdC0zIG10LTQnO1xuICBASW5wdXQoJ3JhdGUtZGV0YWlscycpIHJhdGVEZXRhaWxzID0gJ2Jhc2VkIG9uIDE0IHJhdGluZyc7XG4gIEBJbnB1dCgncmF0ZS1jb2xvcicpIHJhdGVDb2xvciA9ICcnO1xuICBASW5wdXQoJ3JhdGluZy13ZWlnaHQnKSByYXRpbmdXZWlnaHQgPSAnNDAwJztcbiAgQElucHV0KCdyLWR1c3RvbS1jbGFzcycpIHJEdXN0b21DbGFzcyA9ICdwbC0yJztcbiAgQElucHV0KCkgaWQgPSAnJztcbiAgQElucHV0KCdzdWItY3VzdG9tLWNsYXNzJykgc3ViQ3VzdG9tQ2xhc3MgPSAncHJvZmlsZUJveCc7XG4gIEBJbnB1dCgnbWFpbi1jdXN0b20tY2xhc3MnKSBtYWluQ3VzdG9tQ2xhc3MgPSAnY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy0zIG1sLTIgbXQtMSBwLTAnO1xuICBteUhUTUw7XG4gIF9yYXRlID0gNTtcbiAgQE91dHB1dCgpIHJhdGluZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M7XG4gIGZ1bGxTdGFycyA9IDA7XG4gIGZ1bGxTdGFyc0FycmF5ID0gW107XG4gIGhhbGZTdGFyID0gMDtcbiAgZW1wdHlTdGFycyA9IDA7XG4gIGVtcHR5U3RhcnNBcnJheSA9IFtdO1xuICBAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoJ3JhdGluZy12YWx1ZScpXG4gIC8vIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGZ1bGwsIGhhbGYsIGFuZCBlbXB0eSBzdGFycyBiYXNlZCBvbiB0aGUgcmF0aW5nVmFsdWVcbiAgLy8gQXJyYXlzIGFyZSBjcmVhdGVkIHRvIGl0ZXJhdGUgdGhyb3VnaCB3aXRoIGFuIG5nRm9yIGluIHRoZSBIVE1MIGZpbGVcbiAgc2V0IHJhdGluZ1ZhbHVlKHJhdGluZ1ZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmZ1bGxTdGFycyA9IE1hdGgucm91bmQocmF0aW5nVmFsdWUpO1xuICAgIHRoaXMuZnVsbFN0YXJzQXJyYXkgPSBBcnJheSh0aGlzLmZ1bGxTdGFycykuZmlsbCgxKTtcbiAgICB0aGlzLmhhbGZTdGFyID0gKHRoaXMuZnVsbFN0YXJzIDwgcmF0aW5nVmFsdWUpID8gMSA6IDA7XG4gICAgdGhpcy5lbXB0eVN0YXJzID0gNSAtIHRoaXMuZnVsbFN0YXJzIC0gdGhpcy5oYWxmU3RhcjtcbiAgICB0aGlzLmVtcHR5U3RhcnNBcnJheSA9IEFycmF5KHRoaXMuZW1wdHlTdGFycykuZmlsbCgxKTtcbiAgfVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==