/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var SukuRatingStarComponent = /** @class */ (function () {
    function SukuRatingStarComponent() {
        this._rate = 0;
        this.fullStars = 0;
        this.fullStarsArray = [];
        this.halfStar = 0;
        this.emptyStars = 0;
        this.emptyStarsArray = [];
        this.action = new EventEmitter();
    }
    Object.defineProperty(SukuRatingStarComponent.prototype, "ratingValue", {
        set: /**
         * @param {?} ratingValue
         * @return {?}
         */
        function (ratingValue) {
            this.fullStars = Math.round(ratingValue);
            this.fullStarsArray = Array(this.fullStars).fill(1);
            this.halfStar = (this.fullStars < ratingValue) ? 1 : 0;
            this.emptyStars = 5 - this.fullStars - this.halfStar;
            this.emptyStarsArray = Array(this.emptyStars).fill(1);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SukuRatingStarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SukuRatingStarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-rating-star',
                    template: "<span (change)=\"action.emit()\">\n  <div class=\"{{customClass}}\">\n    <span class=\"suku-star-icon fullStar\" *ngFor=\"let star of fullStarsArray\"> </span>\n    <span class=\"fa fa-star-half halfStarLeft\" *ngIf=\"halfStar == 1\"> </span>\n    <span class=\"fa fa-star-half fa-flip-horizontal halfStarRight\" *ngIf=\"halfStar == 1\"> </span>\n    <span class=\"suku-star-empty-icon emptyStar\" *ngFor=\"let star of emptyStarsArray\"> </span>\n  </div>\n</span>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.emptyStar{color:var(--suku-star-empty-bg);margin:3px;font-size:var(--suku-star-size)}.fullStar{color:var(--suku-star-full-bg);margin:3px;font-size:var(--suku-star-size)}.halfStarLeft{color:var(--suku-star-full-bg);position:relative;left:1px;font-size:var(--suku-star-size)}.halfStarRight{color:var(--suku-star-empty-bg);position:relative;right:1px;font-size:var(--suku-star-size)}"]
                }] }
    ];
    /** @nocollapse */
    SukuRatingStarComponent.ctorParameters = function () { return []; };
    SukuRatingStarComponent.propDecorators = {
        action: [{ type: Output }],
        customClass: [{ type: Input, args: ['custom-class',] }],
        ratingValue: [{ type: Input, args: ['rating-value',] }]
    };
    return SukuRatingStarComponent;
}());
export { SukuRatingStarComponent };
if (false) {
    /** @type {?} */
    SukuRatingStarComponent.prototype.myHTML;
    /** @type {?} */
    SukuRatingStarComponent.prototype._rate;
    /** @type {?} */
    SukuRatingStarComponent.prototype.fullStars;
    /** @type {?} */
    SukuRatingStarComponent.prototype.fullStarsArray;
    /** @type {?} */
    SukuRatingStarComponent.prototype.halfStar;
    /** @type {?} */
    SukuRatingStarComponent.prototype.emptyStars;
    /** @type {?} */
    SukuRatingStarComponent.prototype.emptyStarsArray;
    /** @type {?} */
    SukuRatingStarComponent.prototype.action;
    /** @type {?} */
    SukuRatingStarComponent.prototype.customClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1yYXRpbmctc3Rhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1yYXRpbmctc3Rhci9zdWt1LXJhdGluZy1zdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRTtJQTBCQztRQW5CQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Ysb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDWixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWF2QixDQUFDO0lBWGYsc0JBR0csZ0RBQVc7Ozs7O1FBSGQsVUFHZSxXQUFtQjtZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQzs7O09BQUE7Ozs7SUFJRCwwQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkE1QmQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDZkQUFnRDs7aUJBRWhEOzs7Ozt5QkFTQyxNQUFNOzhCQUNOLEtBQUssU0FBQyxjQUFjOzhCQUNuQixLQUFLLFNBQUMsY0FBYzs7SUFldkIsOEJBQUM7Q0FBQSxBQTlCRCxJQThCQztTQXpCWSx1QkFBdUI7OztJQUNuQyx5Q0FBTzs7SUFDTix3Q0FBVTs7SUFDViw0Q0FBYzs7SUFDZCxpREFBb0I7O0lBQ3BCLDJDQUFhOztJQUNiLDZDQUFlOztJQUNmLGtEQUFxQjs7SUFDdEIseUNBQXNDOztJQUN0Qyw4Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LXJhdGluZy1zdGFyJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtcmF0aW5nLXN0YXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1yYXRpbmctc3Rhci5jb21wb25lbnQuc2NzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1UmF0aW5nU3RhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdG15SFRNTDtcbiAgX3JhdGUgPSAwO1xuICBmdWxsU3RhcnMgPSAwO1xuICBmdWxsU3RhcnNBcnJheSA9IFtdO1xuICBoYWxmU3RhciA9IDA7XG4gIGVtcHR5U3RhcnMgPSAwO1xuICBlbXB0eVN0YXJzQXJyYXkgPSBbXTtcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QElucHV0KCdjdXN0b20tY2xhc3MnKSBjdXN0b21DbGFzcztcbiAgQElucHV0KCdyYXRpbmctdmFsdWUnKVxuICAvLyBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBmdWxsLCBoYWxmLCBhbmQgZW1wdHkgc3RhcnMgYmFzZWQgb24gdGhlIHJhdGluZ1ZhbHVlXG4gIC8vIEFycmF5cyBhcmUgY3JlYXRlZCB0byBpdGVyYXRlIHRocm91Z2ggd2l0aCBhbiBuZ0ZvciBpbiB0aGUgSFRNTCBmaWxlXG5cdHNldCByYXRpbmdWYWx1ZShyYXRpbmdWYWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5mdWxsU3RhcnMgPSBNYXRoLnJvdW5kKHJhdGluZ1ZhbHVlKTtcbiAgICB0aGlzLmZ1bGxTdGFyc0FycmF5ID0gQXJyYXkodGhpcy5mdWxsU3RhcnMpLmZpbGwoMSk7XG4gICAgdGhpcy5oYWxmU3RhciA9ICh0aGlzLmZ1bGxTdGFycyA8IHJhdGluZ1ZhbHVlKSA/IDEgOiAwO1xuICAgIHRoaXMuZW1wdHlTdGFycyA9IDUgLSB0aGlzLmZ1bGxTdGFycyAtIHRoaXMuaGFsZlN0YXI7XG4gICAgdGhpcy5lbXB0eVN0YXJzQXJyYXkgPSBBcnJheSh0aGlzLmVtcHR5U3RhcnMpLmZpbGwoMSk7XG4gIH1cblxuXHRjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG59XG4iXX0=