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
                template: "<!-- `<div class=\"col-sm-12 ptl30\">\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n      <img src=\"{{image}}\" class=\"rounded-circle image\" alt=\"profile\" width=\"150\"\n        height=\"150\">\n    </div>\n    <div class=\"col-sm-7 pLR60\">\n\t\t\t <h1 [style.font-size.px]=\"nameSize\" [class]=\"nameCustomClass\" [style.font-weight]=\"nameWeight\" [style.color]=\"nameColor\" id=\"{{id}}\">\n      {{userName}}\n      </h1>\n\t\t\t<h2 [style.font-size.px]=\"accountSize\" [class]=\"accountCustomClass\" id=\"{{id}}\" [style.font-weight]=\"accountWeight\" [style.color]=\"accountColor\">\n\t\t\t{{accountType}}\n\t\t </h2>\n     <span (change)=\"rating.emit(ratingValue)\">\n      <div [innerHTML]=\"myHTML\" [class]=\"customClass\" ratingValue=\"\"></div>\n      </span>\n\t\t\t<h2 [style.font-size.px]=\"accountSize\" [class]=\"rDustomClass\" id=\"{{id}}\" [style.font-weight]=\"ratingWeight\" [style.color]=\"rateColor\">\n\t\t\t{{rateDetails}}\n\t\t </h2>\n    </div>\n  </div>\n</div> -->\n\n\n<div [class]=\"mainCustomClass\">\n  <div class=\"row d-flex justify-content-start {{subCustomClass}}\">\n    <img src=\"{{image}}\" class=\"rounded-circle image mt-2 \" alt=\"profile\">\n    <div class=\"mL\">\n      <h1 [style.font-size.rem]=\"nameSize\" class=\"{{nameCustomClass}}} userName pl-2\" [style.font-weight]=\"nameWeight\"\n        [style.color]=\"nameColor\" id=\"{{id}}\">\n        {{userName}}\n      </h1>\n      <h2 [style.font-size.rem]=\"accountSize\" class=\"{{accountCustomClass}} accountType\" id=\"{{id}}\"\n        [style.font-weight]=\"accountWeight\" [style.color]=\"accountColor\">\n        {{accountType}}\n      </h2>\n      <div class=\"pt-3\">\n        <span (change)=\"action.emit()\">\n          <span class=\"fa fa-star fullStar pl-2\" *ngFor=\"let star of fullStarsArray\"> </span>\n          <span class=\"fa fa-star-half halfStarLeft\" *ngIf=\"halfStar == 1\"> </span>\n          <span class=\"fa fa-star-half fa-flip-horizontal halfStarRight\" *ngIf=\"halfStar == 1\"> </span>\n          <span class=\"fa fa-star emptyStar\" *ngFor=\"let star of emptyStarsArray\"> </span>\n        </span>\n      </div>\n      <h2 [style.font-size.rem]=\"accountSize\" class=\"{{rDustomClass}} ratingDetails\" id=\"{{id}}\"\n        [style.font-weight]=\"ratingWeight\" [style.color]=\"rateColor\">\n        {{rateDetails}}\n      </h2>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.emptyStar{color:var(--suku-star-empty-bg);margin:4px;font-size:var(--suku-star-size)}.fullStar{color:var(--suku-star-full-bg);margin:4px;font-size:var(--suku-star-size)}.halfStarLeft{color:var(--suku-star-full-bg);position:relative;left:1px;font-size:var(--suku-star-size)}.halfStarRight{color:var(--suku-star-empty-bg);position:relative;right:1px;font-size:var(--suku-star-size)}.profileBox{background-color:var(--suku-profile-bg-color);box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.mL{margin-left:40px!important}.circle{height:150px;width:150px;border-radius:100%}.rounded-circle{background-color:#000;width:150px;height:150px}.userName{font-family:var(--suku-primary-font)!important;font-size:1.8rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:var(--suku-text-label-two);word-break:break-all!important}.accountType{font-family:var(--suku-primary-font)!important;font-size:1.1rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:var(--suku-profile-text-one);word-break:break-all!important}.ratingValue{font-family:var(--suku-primary-font)!important;font-size:25px;color:var(--suku-text-info);font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;word-break:break-all!important}.ratingDetails{font-family:var(--suku-primary-font)!important;color:var(--suku-profile-text-two);font-size:.8rem;font-weight:700;word-break:break-all!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9maWxlLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9maWxlLXdpZGdldC9zdWt1LXByb2ZpbGUtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sMEJBQTBCO0lBd0NyQztRQXZDUyxVQUFLLEdBQUcsaUNBQWlDLENBQUM7UUFDL0IsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2Isb0JBQWUsR0FBRyxnQkFBZ0IsQ0FBQztRQUMzQyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBRVgsZ0JBQVcsR0FBRyxjQUFjLENBQUM7UUFDM0Isa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDaEIsdUJBQWtCLEdBQUcsTUFBTSxDQUFDO1FBQ3BDLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ1osc0JBQWlCLEdBQUcscUJBQXFCLENBQUM7UUFDakQsZ0JBQVcsR0FBRyxvQkFBb0IsQ0FBQztRQUNyQyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ1osaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDcEIsaUJBQVksR0FBRyxNQUFNLENBQUM7UUFDdEMsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUNVLG1CQUFjLEdBQUcsWUFBWSxDQUFDO1FBQzdCLG9CQUFlLEdBQUcsMkNBQTJDLENBQUM7UUFFMUYsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNBLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRDLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ1gsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFZdEMsQ0FBQzs7Ozs7SUFYRCxJQUdJLFdBQVcsQ0FBQyxXQUFtQjtRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUlELFFBQVE7SUFDUixDQUFDOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLGczRUFBbUQ7O2FBRXBEOzs7OztvQkFFRSxLQUFLO3VCQUNMLEtBQUssU0FBQyxXQUFXO3lCQUNqQixLQUFLLFNBQUMsYUFBYTs4QkFDbkIsS0FBSyxTQUFDLG1CQUFtQjt1QkFDekIsS0FBSyxTQUFDLFdBQVc7d0JBQ2pCLEtBQUssU0FBQyxZQUFZOzBCQUNsQixLQUFLLFNBQUMsY0FBYzs0QkFDcEIsS0FBSyxTQUFDLGdCQUFnQjtpQ0FDdEIsS0FBSyxTQUFDLHNCQUFzQjswQkFDNUIsS0FBSyxTQUFDLGNBQWM7MkJBQ3BCLEtBQUssU0FBQyxlQUFlO2dDQUNyQixLQUFLLFNBQUMscUJBQXFCOzBCQUMzQixLQUFLLFNBQUMsY0FBYzt3QkFDcEIsS0FBSyxTQUFDLFlBQVk7MkJBQ2xCLEtBQUssU0FBQyxlQUFlOzJCQUNyQixLQUFLLFNBQUMsZ0JBQWdCO2lCQUN0QixLQUFLOzZCQUNMLEtBQUssU0FBQyxrQkFBa0I7OEJBQ3hCLEtBQUssU0FBQyxtQkFBbUI7cUJBR3pCLE1BQU07MEJBQ04sS0FBSztxQkFNTCxNQUFNOzBCQUNOLEtBQUssU0FBQyxjQUFjOzs7O0lBN0JyQiwyQ0FBbUQ7O0lBQ25ELDhDQUF3Qzs7SUFDeEMsZ0RBQXlDOztJQUN6QyxxREFBK0Q7O0lBQy9ELDhDQUFrQzs7SUFDbEMsK0NBQStCOztJQUMvQixpREFBb0Q7O0lBQ3BELG1EQUErQzs7SUFDL0Msd0RBQTJEOztJQUMzRCxpREFBd0M7O0lBQ3hDLGtEQUEwQzs7SUFDMUMsdURBQXdFOztJQUN4RSxpREFBMEQ7O0lBQzFELCtDQUFvQzs7SUFDcEMsa0RBQTZDOztJQUM3QyxrREFBK0M7O0lBQy9DLHdDQUFpQjs7SUFDakIsb0RBQXlEOztJQUN6RCxxREFBMEY7O0lBQzFGLDRDQUFPOztJQUNQLDJDQUFVOztJQUNWLDRDQUFzQzs7SUFDdEMsaURBQXFCOztJQUNyQiwrQ0FBYzs7SUFDZCxvREFBb0I7O0lBQ3BCLDhDQUFhOztJQUNiLGdEQUFlOztJQUNmLHFEQUFxQjs7SUFDckIsNENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXByb2ZpbGUtd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtcHJvZmlsZS13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXByb2ZpbGUtd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVByb2ZpbGVXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpbWFnZSA9ICcuLi8uLi9hc3NldHMvaW1hZ2VzL2Jyb3dzZXIucG5nJztcbiAgQElucHV0KCd1c2VyLW5hbWUnKSB1c2VyTmFtZSA9ICdWYWlyb2cnO1xuICBASW5wdXQoJ25hbWUtd2VpZ2h0JykgbmFtZVdlaWdodCA9ICc0MDAnO1xuICBASW5wdXQoJ25hbWUtY3VzdG9tLWNsYXNzJykgbmFtZUN1c3RvbUNsYXNzID0gJ21iLTAgbXQtMSBwbC0xJztcbiAgQElucHV0KCduYW1lLXNpemUnKSBuYW1lU2l6ZSA9ICcnO1xuICBASW5wdXQoJ25hbWUtY29sb3InKSBuYW1lQ29sb3I7XG4gIEBJbnB1dCgnYWNjb3VudC10eXBlJykgYWNjb3VudFR5cGUgPSAnTWFudWZhY3R1cmVyJztcbiAgQElucHV0KCdhY2NvdW50LXdlaWdodCcpIGFjY291bnRXZWlnaHQgPSAnNDAwJztcbiAgQElucHV0KCdhY2NvdW50LWN1c3RvbS1jbGFzcycpIGFjY291bnRDdXN0b21DbGFzcyA9ICdwbC0yJztcbiAgQElucHV0KCdhY2NvdW50LXNpemUnKSBhY2NvdW50U2l6ZSA9ICcnO1xuICBASW5wdXQoJ2FjY291bnQtY29sb3InKSBhY2NvdW50Q29sb3IgPSAnJztcbiAgQElucHV0KCdyYXRpbmctY3VzdG9tLWNsYXNzJykgcmF0aW5nQ3VzdG9tQ2xhc3MgPSAncGwtMiBtYi0yIHB0LTMgbXQtNCc7XG4gIEBJbnB1dCgncmF0ZS1kZXRhaWxzJykgcmF0ZURldGFpbHMgPSAnYmFzZWQgb24gMTQgcmF0aW5nJztcbiAgQElucHV0KCdyYXRlLWNvbG9yJykgcmF0ZUNvbG9yID0gJyc7XG4gIEBJbnB1dCgncmF0aW5nLXdlaWdodCcpIHJhdGluZ1dlaWdodCA9ICc0MDAnO1xuICBASW5wdXQoJ3ItZHVzdG9tLWNsYXNzJykgckR1c3RvbUNsYXNzID0gJ3BsLTInO1xuICBASW5wdXQoKSBpZCA9ICcnO1xuICBASW5wdXQoJ3N1Yi1jdXN0b20tY2xhc3MnKSBzdWJDdXN0b21DbGFzcyA9ICdwcm9maWxlQm94JztcbiAgQElucHV0KCdtYWluLWN1c3RvbS1jbGFzcycpIG1haW5DdXN0b21DbGFzcyA9ICdjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTMgbWwtMiBtdC0xIHAtMCc7XG4gIG15SFRNTDtcbiAgX3JhdGUgPSA1O1xuICBAT3V0cHV0KCkgcmF0aW5nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBjdXN0b21DbGFzcztcbiAgZnVsbFN0YXJzID0gMDtcbiAgZnVsbFN0YXJzQXJyYXkgPSBbXTtcbiAgaGFsZlN0YXIgPSAwO1xuICBlbXB0eVN0YXJzID0gMDtcbiAgZW1wdHlTdGFyc0FycmF5ID0gW107XG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgncmF0aW5nLXZhbHVlJylcbiAgLy8gQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgZnVsbCwgaGFsZiwgYW5kIGVtcHR5IHN0YXJzIGJhc2VkIG9uIHRoZSByYXRpbmdWYWx1ZVxuICAvLyBBcnJheXMgYXJlIGNyZWF0ZWQgdG8gaXRlcmF0ZSB0aHJvdWdoIHdpdGggYW4gbmdGb3IgaW4gdGhlIEhUTUwgZmlsZVxuICBzZXQgcmF0aW5nVmFsdWUocmF0aW5nVmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuZnVsbFN0YXJzID0gTWF0aC5yb3VuZChyYXRpbmdWYWx1ZSk7XG4gICAgdGhpcy5mdWxsU3RhcnNBcnJheSA9IEFycmF5KHRoaXMuZnVsbFN0YXJzKS5maWxsKDEpO1xuICAgIHRoaXMuaGFsZlN0YXIgPSAodGhpcy5mdWxsU3RhcnMgPCByYXRpbmdWYWx1ZSkgPyAxIDogMDtcbiAgICB0aGlzLmVtcHR5U3RhcnMgPSA1IC0gdGhpcy5mdWxsU3RhcnMgLSB0aGlzLmhhbGZTdGFyO1xuICAgIHRoaXMuZW1wdHlTdGFyc0FycmF5ID0gQXJyYXkodGhpcy5lbXB0eVN0YXJzKS5maWxsKDEpO1xuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19