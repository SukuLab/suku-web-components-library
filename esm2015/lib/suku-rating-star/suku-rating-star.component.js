/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class SukuRatingStarComponent {
    constructor() {
        this._rate = 0;
        this.action = new EventEmitter();
    }
    /**
     * @param {?} ratingValue
     * @return {?}
     */
    set ratingValue(ratingValue) {
        this._rate = ratingValue;
        console.log('', this._rate);
        this.callOfStarts(this._rate);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    callOfStarts(e) {
        switch (true) {
            case e === 0:
                this.myHTML = `
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      </div>`;
                break;
            case e <= 0.5:
                this.myHTML = `
      <span class="fa fa-star-half-empty starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      </div>`;
                break;
            case e > 0.5 && e <= 1:
                this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span> </div>`;
                break;
            case e <= 1.5:
                this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-half-empty starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span> </div>`;
                break;
            case e > 1.5 && e <= 2:
                this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span> </div>`;
                break;
            case e <= 2.5:
                this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-half-empty starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span> </div>`;
                break;
            case e > 2.5 && e <= 3:
                this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span> </div>`;
                break;
            case e <= 3.5:
                this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-half-empty starChecked f22"></span>
      <span class="fa fa-star-o f22"></span> </div>`;
                break;
            case e > 3.5 && e <= 4:
                this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-o f22"></span> </div>`;
                break;
            case e <= 4.5:
                this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-half-empty starChecked f22"></span>
    </div>`;
                break;
            case e > 4.5 && e <= 5:
                this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
       </div>`;
                break;
            default:
                break;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SukuRatingStarComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-rating-star',
                template: "<span (change)=\"action.emit(ratingValue)\">\n  <div [innerHTML]=\"myHTML\" [class]=\"customclass\" ratingValue=\"\"></div>\n</span>\n",
                styles: [""]
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
    SukuRatingStarComponent.prototype.action;
    /** @type {?} */
    SukuRatingStarComponent.prototype.customclass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1yYXRpbmctc3Rhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1yYXRpbmctc3Rhci9zdWt1LXJhdGluZy1zdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0vRSxNQUFNLE9BQU8sdUJBQXVCO0lBc0huQztRQXBIQSxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ0EsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFtSHZCLENBQUM7Ozs7O0lBakhoQixJQUNJLFdBQVcsQ0FBQyxXQUFtQjtRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFDRCxZQUFZLENBQUMsQ0FBQztRQUNiLFFBQVEsSUFBSSxFQUFFO1lBQ2IsS0FBSyxDQUFDLEtBQUssQ0FBQztnQkFDWCxJQUFJLENBQUMsTUFBTSxHQUFHOzs7Ozs7YUFNTCxDQUFDO2dCQUNWLE1BQU07WUFFUCxLQUFLLENBQUMsSUFBSSxHQUFHO2dCQUNaLElBQUksQ0FBQyxNQUFNLEdBQUc7Ozs7OzthQU1MLENBQUM7Z0JBQ1YsTUFBTTtZQUVQLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRzs7Ozs7b0RBS2tDLENBQUM7Z0JBQ2pELE1BQU07WUFFUCxLQUFLLENBQUMsSUFBSSxHQUFHO2dCQUNaLElBQUksQ0FBQyxNQUFNLEdBQUc7Ozs7O29EQUtrQyxDQUFDO2dCQUNqRCxNQUFNO1lBRVAsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHOzs7OztvREFLa0MsQ0FBQztnQkFDakQsTUFBTTtZQUVQLEtBQUssQ0FBQyxJQUFJLEdBQUc7Z0JBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRzs7Ozs7b0RBS2tDLENBQUM7Z0JBQ2pELE1BQU07WUFFUCxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUc7Ozs7O29EQUtrQyxDQUFDO2dCQUNqRCxNQUFNO1lBRVAsS0FBSyxDQUFDLElBQUksR0FBRztnQkFDWixJQUFJLENBQUMsTUFBTSxHQUFHOzs7OztvREFLa0MsQ0FBQztnQkFDakQsTUFBTTtZQUVQLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRzs7Ozs7b0RBS2tDLENBQUM7Z0JBQ2pELE1BQU07WUFFUCxLQUFLLENBQUMsSUFBSSxHQUFHO2dCQUNaLElBQUksQ0FBQyxNQUFNLEdBQUc7Ozs7OztXQU1QLENBQUM7Z0JBQ1IsTUFBTTtZQUNQLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRzs7Ozs7O2NBTUosQ0FBQztnQkFDWCxNQUFNO1lBQ1A7Z0JBQ0MsTUFBTTtTQUNQO0lBQ0YsQ0FBQzs7OztJQUdELFFBQVEsS0FBSSxDQUFDOzs7WUE3SGIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGtKQUFnRDs7YUFFaEQ7Ozs7O3FCQUlDLE1BQU07MEJBQ04sS0FBSzswQkFDTCxLQUFLLFNBQUMsY0FBYzs7OztJQUpyQix5Q0FBTzs7SUFDUCx3Q0FBVTs7SUFDVix5Q0FBc0M7O0lBQ3RDLDhDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtcmF0aW5nLXN0YXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1yYXRpbmctc3Rhci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LXJhdGluZy1zdGFyLmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VSYXRpbmdTdGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0bXlIVE1MO1xuXHRfcmF0ZSA9IDA7XG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBJbnB1dCgpIGN1c3RvbWNsYXNzO1xuXHRASW5wdXQoJ3JhdGluZy12YWx1ZScpXG5cdHNldCByYXRpbmdWYWx1ZShyYXRpbmdWYWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5fcmF0ZSA9IHJhdGluZ1ZhbHVlO1xuXHRcdGNvbnNvbGUubG9nKCcnLCB0aGlzLl9yYXRlKTtcblx0XHR0aGlzLmNhbGxPZlN0YXJ0cyh0aGlzLl9yYXRlKTtcblx0fVxuXHRjYWxsT2ZTdGFydHMoZSkge1xuXHRcdHN3aXRjaCAodHJ1ZSkge1xuXHRcdFx0Y2FzZSBlID09PSAwOlxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmA7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIGUgPD0gMC41OlxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1oYWxmLWVtcHR5IHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmA7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIGUgPiAwLjUgJiYgZSA8PSAxOlxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+IDwvZGl2PmA7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIGUgPD0gMS41OlxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItaGFsZi1lbXB0eSBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+IDwvZGl2PmA7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIGUgPiAxLjUgJiYgZSA8PSAyOlxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPiA8L2Rpdj5gO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBlIDw9IDIuNTpcblx0XHRcdFx0dGhpcy5teUhUTUwgPSBgXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1oYWxmLWVtcHR5IHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj4gPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgZSA+IDIuNSAmJiBlIDw9IDM6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPiA8L2Rpdj5gO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBlIDw9IDMuNTpcblx0XHRcdFx0dGhpcy5teUhUTUwgPSBgXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItaGFsZi1lbXB0eSBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+IDwvZGl2PmA7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIGUgPiAzLjUgJiYgZSA8PSA0OlxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+IDwvZGl2PmA7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIGUgPD0gNC41OlxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItaGFsZi1lbXB0eSBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIGUgPiA0LjUgJiYgZSA8PSA1OlxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgIDwvZGl2PmA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRuZ09uSW5pdCgpIHt9XG59XG4iXX0=