/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<span (change)=\"action.emit()\">\r\n  <div>\r\n    <span class=\"fa fa-star fullStar f22\" *ngFor=\"let star of fullStarsArray\"> </span>\r\n    <span class=\"fa fa-star-half halfStarLeft f22\" *ngIf=\"halfStar == 1\"> </span>\r\n    <span class=\"fa fa-star-half fa-flip-horizontal halfStarRight f22\" *ngIf=\"halfStar == 1\"> </span>\r\n    <span class=\"fa fa-star emptyStar f22\" *ngFor=\"let star of emptyStarsArray\"> </span>\r\n  </div>\r\n</span>",
                    styles: [".emptyStar{color:#e1e1e1;margin:4px}.fullStar{color:#898989;margin:4px}.halfStarLeft{color:#898989;position:relative;left:1px}.halfStarRight{color:#e1e1e1;position:relative;right:1px}"]
                }] }
    ];
    /** @nocollapse */
    SukuRatingStarComponent.ctorParameters = function () { return []; };
    SukuRatingStarComponent.propDecorators = {
        action: [{ type: Output }],
        customclass: [{ type: Input }],
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
    SukuRatingStarComponent.prototype.customclass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1yYXRpbmctc3Rhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1yYXRpbmctc3Rhci9zdWt1LXJhdGluZy1zdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRTtJQTBCQztRQW5CQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Ysb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDWixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWF2QixDQUFDO0lBWGYsc0JBR0csZ0RBQVc7Ozs7O1FBSGQsVUFHZSxXQUFtQjtZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQzs7O09BQUE7Ozs7SUFJRCwwQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkE1QmQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLG1kQUFnRDs7aUJBRWhEOzs7Ozt5QkFTQyxNQUFNOzhCQUNOLEtBQUs7OEJBQ0osS0FBSyxTQUFDLGNBQWM7O0lBZXZCLDhCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0F6QlksdUJBQXVCOzs7SUFDbkMseUNBQU87O0lBQ04sd0NBQVU7O0lBQ1YsNENBQWM7O0lBQ2QsaURBQW9COztJQUNwQiwyQ0FBYTs7SUFDYiw2Q0FBZTs7SUFDZixrREFBcUI7O0lBQ3RCLHlDQUFzQzs7SUFDdEMsOENBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3N1a3UtcmF0aW5nLXN0YXInLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXJhdGluZy1zdGFyLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1yYXRpbmctc3Rhci5jb21wb25lbnQuc2NzcycgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdVJhdGluZ1N0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdG15SFRNTDtcclxuICBfcmF0ZSA9IDA7XHJcbiAgZnVsbFN0YXJzID0gMDtcclxuICBmdWxsU3RhcnNBcnJheSA9IFtdO1xyXG4gIGhhbGZTdGFyID0gMDtcclxuICBlbXB0eVN0YXJzID0gMDtcclxuICBlbXB0eVN0YXJzQXJyYXkgPSBbXTtcclxuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBJbnB1dCgpIGN1c3RvbWNsYXNzO1xyXG4gIEBJbnB1dCgncmF0aW5nLXZhbHVlJylcclxuICAvLyBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBmdWxsLCBoYWxmLCBhbmQgZW1wdHkgc3RhcnMgYmFzZWQgb24gdGhlIHJhdGluZ1ZhbHVlXHJcbiAgLy8gQXJyYXlzIGFyZSBjcmVhdGVkIHRvIGl0ZXJhdGUgdGhyb3VnaCB3aXRoIGFuIG5nRm9yIGluIHRoZSBIVE1MIGZpbGVcclxuXHRzZXQgcmF0aW5nVmFsdWUocmF0aW5nVmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5mdWxsU3RhcnMgPSBNYXRoLnJvdW5kKHJhdGluZ1ZhbHVlKTtcclxuICAgIHRoaXMuZnVsbFN0YXJzQXJyYXkgPSBBcnJheSh0aGlzLmZ1bGxTdGFycykuZmlsbCgxKTtcclxuICAgIHRoaXMuaGFsZlN0YXIgPSAodGhpcy5mdWxsU3RhcnMgPCByYXRpbmdWYWx1ZSkgPyAxIDogMDtcclxuICAgIHRoaXMuZW1wdHlTdGFycyA9IDUgLSB0aGlzLmZ1bGxTdGFycyAtIHRoaXMuaGFsZlN0YXI7XHJcbiAgICB0aGlzLmVtcHR5U3RhcnNBcnJheSA9IEFycmF5KHRoaXMuZW1wdHlTdGFycykuZmlsbCgxKTtcclxuICB9XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxufVxyXG4iXX0=