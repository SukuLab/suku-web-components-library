/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<span (change)=\"action.emit()\">\n  <div class=\"{{customClass}}\">\n    <span class=\"suku-star-icon fullStar\" *ngFor=\"let star of fullStarsArray\"> </span>\n    <span class=\"fa fa-star-half halfStarLeft\" *ngIf=\"halfStar == 1\"> </span>\n    <span class=\"fa fa-star-half fa-flip-horizontal halfStarRight\" *ngIf=\"halfStar == 1\"> </span>\n    <span class=\"suku-star-empty-icon emptyStar\" *ngFor=\"let star of emptyStarsArray\"> </span>\n  </div>\n</span>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.emptyStar{color:var(--suku-star-empty-bg);margin:3px;font-size:var(--suku-star-size)}.fullStar{color:var(--suku-star-full-bg);margin:3px;font-size:var(--suku-star-size)}.halfStarLeft{color:var(--suku-star-full-bg);position:relative;left:1px;font-size:var(--suku-star-size)}.halfStarRight{color:var(--suku-star-empty-bg);position:relative;right:1px;font-size:var(--suku-star-size)}"]
            }] }
];
/** @nocollapse */
SukuRatingStarComponent.ctorParameters = () => [];
SukuRatingStarComponent.propDecorators = {
    action: [{ type: Output }],
    customClass: [{ type: Input, args: ['custom-class',] }],
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
    SukuRatingStarComponent.prototype.customClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1yYXRpbmctc3Rhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1yYXRpbmctc3Rhci9zdWt1LXJhdGluZy1zdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0vRSxNQUFNLE9BQU8sdUJBQXVCO0lBcUJuQztRQW5CQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Ysb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDWixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWF2QixDQUFDOzs7OztJQVhmLElBR0csV0FBVyxDQUFDLFdBQW1CO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBSUQsUUFBUSxLQUFJLENBQUM7OztZQTVCZCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsNmRBQWdEOzthQUVoRDs7Ozs7cUJBU0MsTUFBTTswQkFDTixLQUFLLFNBQUMsY0FBYzswQkFDbkIsS0FBSyxTQUFDLGNBQWM7Ozs7SUFUdEIseUNBQU87O0lBQ04sd0NBQVU7O0lBQ1YsNENBQWM7O0lBQ2QsaURBQW9COztJQUNwQiwyQ0FBYTs7SUFDYiw2Q0FBZTs7SUFDZixrREFBcUI7O0lBQ3RCLHlDQUFzQzs7SUFDdEMsOENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1yYXRpbmctc3RhcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXJhdGluZy1zdGFyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtcmF0aW5nLXN0YXIuY29tcG9uZW50LnNjc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVJhdGluZ1N0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRteUhUTUw7XG4gIF9yYXRlID0gMDtcbiAgZnVsbFN0YXJzID0gMDtcbiAgZnVsbFN0YXJzQXJyYXkgPSBbXTtcbiAgaGFsZlN0YXIgPSAwO1xuICBlbXB0eVN0YXJzID0gMDtcbiAgZW1wdHlTdGFyc0FycmF5ID0gW107XG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBJbnB1dCgnY3VzdG9tLWNsYXNzJykgY3VzdG9tQ2xhc3M7XG4gIEBJbnB1dCgncmF0aW5nLXZhbHVlJylcbiAgLy8gQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgZnVsbCwgaGFsZiwgYW5kIGVtcHR5IHN0YXJzIGJhc2VkIG9uIHRoZSByYXRpbmdWYWx1ZVxuICAvLyBBcnJheXMgYXJlIGNyZWF0ZWQgdG8gaXRlcmF0ZSB0aHJvdWdoIHdpdGggYW4gbmdGb3IgaW4gdGhlIEhUTUwgZmlsZVxuXHRzZXQgcmF0aW5nVmFsdWUocmF0aW5nVmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuZnVsbFN0YXJzID0gTWF0aC5yb3VuZChyYXRpbmdWYWx1ZSk7XG4gICAgdGhpcy5mdWxsU3RhcnNBcnJheSA9IEFycmF5KHRoaXMuZnVsbFN0YXJzKS5maWxsKDEpO1xuICAgIHRoaXMuaGFsZlN0YXIgPSAodGhpcy5mdWxsU3RhcnMgPCByYXRpbmdWYWx1ZSkgPyAxIDogMDtcbiAgICB0aGlzLmVtcHR5U3RhcnMgPSA1IC0gdGhpcy5mdWxsU3RhcnMgLSB0aGlzLmhhbGZTdGFyO1xuICAgIHRoaXMuZW1wdHlTdGFyc0FycmF5ID0gQXJyYXkodGhpcy5lbXB0eVN0YXJzKS5maWxsKDEpO1xuICB9XG5cblx0Y29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cblxufVxuIl19