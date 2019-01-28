/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var SukuRatingStarComponent = /** @class */ (function () {
    function SukuRatingStarComponent() {
        this._rate = 0;
        this.action = new EventEmitter();
    }
    Object.defineProperty(SukuRatingStarComponent.prototype, "ratingValue", {
        set: /**
         * @param {?} ratingValue
         * @return {?}
         */
        function (ratingValue) {
            this._rate = ratingValue;
            console.log('', this._rate);
            this.callOfStarts(this._rate);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    SukuRatingStarComponent.prototype.callOfStarts = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        switch (true) {
            case e === 0:
                this.myHTML = "\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      </div>";
                break;
            case e <= 0.5:
                this.myHTML = "\n      <span class=\"fa fa-star-half-empty starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      </div>";
                break;
            case e > 0.5 && e <= 1:
                this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span> </div>";
                break;
            case e <= 1.5:
                this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-half-empty starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span> </div>";
                break;
            case e > 1.5 && e <= 2:
                this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span> </div>";
                break;
            case e <= 2.5:
                this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-half-empty starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span> </div>";
                break;
            case e > 2.5 && e <= 3:
                this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span> </div>";
                break;
            case e <= 3.5:
                this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-half-empty starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span> </div>";
                break;
            case e > 3.5 && e <= 4:
                this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-o f22\"></span> </div>";
                break;
            case e <= 4.5:
                this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star-half-empty starChecked f22\"></span>\n    </div>";
                break;
            case e > 4.5 && e <= 5:
                this.myHTML = "\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n      <span class=\"fa fa-star starChecked f22\"></span>\n       </div>";
                break;
            default:
                break;
        }
    };
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
                    template: "<span (change)=\"action.emit(ratingValue)\">\n  <div [innerHTML]=\"myHTML\" [class]=\"customclass\" ratingValue=\"\"></div>\n</span>\n",
                    styles: [""]
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
    SukuRatingStarComponent.prototype.action;
    /** @type {?} */
    SukuRatingStarComponent.prototype.customclass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1yYXRpbmctc3Rhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1yYXRpbmctc3Rhci9zdWt1LXJhdGluZy1zdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRTtJQTJIQztRQXBIQSxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ0EsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFtSHZCLENBQUM7SUFqSGhCLHNCQUNJLGdEQUFXOzs7OztRQURmLFVBQ2dCLFdBQW1CO1lBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTs7Ozs7SUFDRCw4Q0FBWTs7OztJQUFaLFVBQWEsQ0FBQztRQUNiLFFBQVEsSUFBSSxFQUFFO1lBQ2IsS0FBSyxDQUFDLEtBQUssQ0FBQztnQkFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLGdRQU1MLENBQUM7Z0JBQ1YsTUFBTTtZQUVQLEtBQUssQ0FBQyxJQUFJLEdBQUc7Z0JBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxxUkFNTCxDQUFDO2dCQUNWLE1BQU07WUFFUCxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsbVFBS2tDLENBQUM7Z0JBQ2pELE1BQU07WUFFUCxLQUFLLENBQUMsSUFBSSxHQUFHO2dCQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsd1JBS2tDLENBQUM7Z0JBQ2pELE1BQU07WUFFUCxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsNlFBS2tDLENBQUM7Z0JBQ2pELE1BQU07WUFFUCxLQUFLLENBQUMsSUFBSSxHQUFHO2dCQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsa1NBS2tDLENBQUM7Z0JBQ2pELE1BQU07WUFFUCxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsdVJBS2tDLENBQUM7Z0JBQ2pELE1BQU07WUFFUCxLQUFLLENBQUMsSUFBSSxHQUFHO2dCQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsNFNBS2tDLENBQUM7Z0JBQ2pELE1BQU07WUFFUCxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsaVNBS2tDLENBQUM7Z0JBQ2pELE1BQU07WUFFUCxLQUFLLENBQUMsSUFBSSxHQUFHO2dCQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsMlRBTVAsQ0FBQztnQkFDUixNQUFNO1lBQ1AsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLG1UQU1KLENBQUM7Z0JBQ1gsTUFBTTtZQUNQO2dCQUNDLE1BQU07U0FDUDtJQUNGLENBQUM7Ozs7SUFHRCwwQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkE3SGIsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGtKQUFnRDs7aUJBRWhEOzs7Ozt5QkFJQyxNQUFNOzhCQUNOLEtBQUs7OEJBQ0wsS0FBSyxTQUFDLGNBQWM7O0lBb0h0Qiw4QkFBQztDQUFBLEFBOUhELElBOEhDO1NBekhZLHVCQUF1Qjs7O0lBQ25DLHlDQUFPOztJQUNQLHdDQUFVOztJQUNWLHlDQUFzQzs7SUFDdEMsOENBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1yYXRpbmctc3RhcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXJhdGluZy1zdGFyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtcmF0aW5nLXN0YXIuY29tcG9uZW50LnNjc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVJhdGluZ1N0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRteUhUTUw7XG5cdF9yYXRlID0gMDtcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QElucHV0KCkgY3VzdG9tY2xhc3M7XG5cdEBJbnB1dCgncmF0aW5nLXZhbHVlJylcblx0c2V0IHJhdGluZ1ZhbHVlKHJhdGluZ1ZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLl9yYXRlID0gcmF0aW5nVmFsdWU7XG5cdFx0Y29uc29sZS5sb2coJycsIHRoaXMuX3JhdGUpO1xuXHRcdHRoaXMuY2FsbE9mU3RhcnRzKHRoaXMuX3JhdGUpO1xuXHR9XG5cdGNhbGxPZlN0YXJ0cyhlKSB7XG5cdFx0c3dpdGNoICh0cnVlKSB7XG5cdFx0XHRjYXNlIGUgPT09IDA6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgZSA8PSAwLjU6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLWhhbGYtZW1wdHkgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgZSA+IDAuNSAmJiBlIDw9IDE6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj4gPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgZSA8PSAxLjU6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1oYWxmLWVtcHR5IHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj4gPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgZSA+IDEuNSAmJiBlIDw9IDI6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+IDwvZGl2PmA7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIGUgPD0gMi41OlxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLWhhbGYtZW1wdHkgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPiA8L2Rpdj5gO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBlID4gMi41ICYmIGUgPD0gMzpcblx0XHRcdFx0dGhpcy5teUhUTUwgPSBgXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+IDwvZGl2PmA7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIGUgPD0gMy41OlxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1oYWxmLWVtcHR5IHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj4gPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgZSA+IDMuNSAmJiBlIDw9IDQ6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj4gPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgZSA8PSA0LjU6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1oYWxmLWVtcHR5IHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICA8L2Rpdj5gO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgZSA+IDQuNSAmJiBlIDw9IDU6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICAgPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdG5nT25Jbml0KCkge31cbn1cbiJdfQ==