/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class SukuRatingStarComponent {
    constructor() {
        this._rate = 0;
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
    ngOnInit() { }
}
SukuRatingStarComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-rating-star',
                template: "<span (change)=\"action.emit()\">\r\n  <div>\r\n    <span class=\"fa fa-star fullStar f22\" *ngFor=\"let star of fullStarsArray\"> </span>\r\n    <span class=\"fa fa-star-half halfStarLeft f22\" *ngIf=\"halfStar == 1\"> </span>\r\n    <span class=\"fa fa-star-half fa-flip-horizontal halfStarRight f22\" *ngIf=\"halfStar == 1\"> </span>\r\n    <span class=\"fa fa-star emptyStar f22\" *ngFor=\"let star of emptyStarsArray\"> </span>\r\n  </div>\r\n</span>",
                styles: [".emptyStar{color:#e1e1e1;margin:4px}.fullStar{color:#898989;margin:4px}.halfStarLeft{color:#898989;position:relative;left:1px}.halfStarRight{color:#e1e1e1;position:relative;right:1px}"]
            }] }
];
/** @nocollapse */
SukuRatingStarComponent.ctorParameters = () => [];
SukuRatingStarComponent.propDecorators = {
    action: [{ type: Output }],
    customclass: [{ type: Input }],
    ratingValue: [{ type: Input, args: ['rating-value',] }]
};
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
    SukuRatingStarComponent.prototype.customclass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1yYXRpbmctc3Rhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1yYXRpbmctc3Rhci9zdWt1LXJhdGluZy1zdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0vRSxNQUFNLE9BQU8sdUJBQXVCO0lBcUJuQztRQW5CQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Ysb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDWixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWF2QixDQUFDOzs7OztJQVhmLElBR0csV0FBVyxDQUFDLFdBQW1CO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBSUQsUUFBUSxLQUFJLENBQUM7OztZQTVCZCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsbWRBQWdEOzthQUVoRDs7Ozs7cUJBU0MsTUFBTTswQkFDTixLQUFLOzBCQUNKLEtBQUssU0FBQyxjQUFjOzs7O0lBVHRCLHlDQUFPOztJQUNOLHdDQUFVOztJQUNWLDRDQUFjOztJQUNkLGlEQUFvQjs7SUFDcEIsMkNBQWE7O0lBQ2IsNkNBQWU7O0lBQ2Ysa0RBQXFCOztJQUN0Qix5Q0FBc0M7O0lBQ3RDLDhDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LXJhdGluZy1zdGFyJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1yYXRpbmctc3Rhci5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtcmF0aW5nLXN0YXIuY29tcG9uZW50LnNjc3MnIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VSYXRpbmdTdGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRteUhUTUw7XHJcbiAgX3JhdGUgPSAwO1xyXG4gIGZ1bGxTdGFycyA9IDA7XHJcbiAgZnVsbFN0YXJzQXJyYXkgPSBbXTtcclxuICBoYWxmU3RhciA9IDA7XHJcbiAgZW1wdHlTdGFycyA9IDA7XHJcbiAgZW1wdHlTdGFyc0FycmF5ID0gW107XHJcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRASW5wdXQoKSBjdXN0b21jbGFzcztcclxuICBASW5wdXQoJ3JhdGluZy12YWx1ZScpXHJcbiAgLy8gQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgZnVsbCwgaGFsZiwgYW5kIGVtcHR5IHN0YXJzIGJhc2VkIG9uIHRoZSByYXRpbmdWYWx1ZVxyXG4gIC8vIEFycmF5cyBhcmUgY3JlYXRlZCB0byBpdGVyYXRlIHRocm91Z2ggd2l0aCBhbiBuZ0ZvciBpbiB0aGUgSFRNTCBmaWxlXHJcblx0c2V0IHJhdGluZ1ZhbHVlKHJhdGluZ1ZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuZnVsbFN0YXJzID0gTWF0aC5yb3VuZChyYXRpbmdWYWx1ZSk7XHJcbiAgICB0aGlzLmZ1bGxTdGFyc0FycmF5ID0gQXJyYXkodGhpcy5mdWxsU3RhcnMpLmZpbGwoMSk7XHJcbiAgICB0aGlzLmhhbGZTdGFyID0gKHRoaXMuZnVsbFN0YXJzIDwgcmF0aW5nVmFsdWUpID8gMSA6IDA7XHJcbiAgICB0aGlzLmVtcHR5U3RhcnMgPSA1IC0gdGhpcy5mdWxsU3RhcnMgLSB0aGlzLmhhbGZTdGFyO1xyXG4gICAgdGhpcy5lbXB0eVN0YXJzQXJyYXkgPSBBcnJheSh0aGlzLmVtcHR5U3RhcnMpLmZpbGwoMSk7XHJcbiAgfVxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbn1cclxuIl19