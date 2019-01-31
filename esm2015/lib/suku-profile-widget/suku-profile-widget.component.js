/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
export class SukuProfileWidgetComponent {
    constructor() {
        this.image = '../../assets/images/browser.png';
        this.userName = 'Vairog';
        this.nameWeight = '400';
        this.nameCustomClass = 'mb-0 mt-1 pl-1';
        this.nameSize = '33.4';
        this.accountType = 'Manufacturer';
        this.accountWeight = '400';
        this.accountCustomClass = 'pl-2';
        this.accountSize = '17';
        this.accountColor = '';
        this.ratingCustomClass = 'pl-2 mb-2 pt-3';
        this.rateDetails = 'based on 14 rating';
        this.rateColor = '';
        this.ratingWeight = '400';
        this.rDustomClass = 'pl-2';
        this.id = '';
        this._rate = 0;
        this.rating = new EventEmitter();
        this.callOfStarts(this._rate);
    }
    /**
     * @param {?} ratingValue
     * @return {?}
     */
    set ratingValue(ratingValue) {
        this._rate = ratingValue;
        console.log('', this._rate);
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
    ngOnInit() {
    }
}
SukuProfileWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-profile-widget',
                template: "`<div class=\"col-sm-12 ptl30\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-5\">\r\n      <img src=\"{{image}}\" class=\"rounded-circle image\" alt=\"profile\" width=\"150\"\r\n        height=\"150\">\r\n    </div>\r\n    <div class=\"col-sm-7 pLR60\">\r\n\t\t\t <h1 [style.font-size.px]=\"nameSize\" [class]=\"nameCustomClass\" [style.font-weight]=\"nameWeight\" [style.color]=\"nameColor\" id=\"{{id}}\">\r\n      {{userName}}\r\n      </h1>\r\n\t\t\t<h2 [style.font-size.px]=\"accountSize\" [class]=\"accountCustomClass\" id=\"{{id}}\" [style.font-weight]=\"accountWeight\" [style.color]=\"accountColor\">\r\n\t\t\t{{accountType}}\r\n\t\t </h2>\r\n     <span (change)=\"rating.emit(ratingValue)\">\r\n      <div [innerHTML]=\"myHTML\" [class]=\"customClass\" ratingValue=\"\"></div>\r\n      </span>\r\n\t\t\t<h2 [style.font-size.px]=\"accountSize\" [class]=\"rDustomClass\" id=\"{{id}}\" [style.font-weight]=\"ratingWeight\" [style.color]=\"rateColor\">\r\n\t\t\t{{rateDetails}}\r\n\t\t </h2>\r\n    </div>\r\n  </div>\r\n</div>`\r\n",
                styles: [".profileBox{width:187.656px;border-radius:0 0 30px 30px;background-color:#fff;box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.circle{background-color:gray;height:150px;width:150px;border-radius:100%}.bLine{opacity:.09;border:1px solid #979797}.userName{font-family:Poppins-Regular,Arial;font-size:20px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;color:var(--black);word-break:break-all!important}.create-interest-listing{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:14px;color:#b6b6b6;line-height:18px;letter-spacing:.01em;word-break:break-all!important}"]
            }] }
];
/** @nocollapse */
SukuProfileWidgetComponent.ctorParameters = () => [];
SukuProfileWidgetComponent.propDecorators = {
    image: [{ type: Input }],
    userName: [{ type: Input, args: ['user-name',] }],
    nameWeight: [{ type: Input }],
    nameCustomClass: [{ type: Input }],
    nameSize: [{ type: Input }],
    nameColor: [{ type: Input }],
    accountType: [{ type: Input, args: ['account-type',] }],
    accountWeight: [{ type: Input }],
    accountCustomClass: [{ type: Input }],
    accountSize: [{ type: Input }],
    accountColor: [{ type: Input }],
    ratingCustomClass: [{ type: Input }],
    rateDetails: [{ type: Input }],
    rateColor: [{ type: Input }],
    ratingWeight: [{ type: Input }],
    rDustomClass: [{ type: Input }],
    id: [{ type: Input }],
    rating: [{ type: Output }],
    customClass: [{ type: Input }],
    ratingValue: [{ type: Input }]
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
    SukuProfileWidgetComponent.prototype.myHTML;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype._rate;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.rating;
    /** @type {?} */
    SukuProfileWidgetComponent.prototype.customClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9maWxlLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9maWxlLXdpZGdldC9zdWt1LXByb2ZpbGUtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sMEJBQTBCO0lBMkJyQztRQTFCUyxVQUFLLEdBQUcsaUNBQWlDLENBQUM7UUFDaEMsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQUMvQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLG9CQUFlLEdBQUcsZ0JBQWdCLENBQUM7UUFDbkMsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUVKLGdCQUFXLEdBQUcsY0FBYyxDQUFDO1FBQzNDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLHVCQUFrQixHQUFHLE1BQU0sQ0FBQztRQUM1QixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixzQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztRQUNyQyxnQkFBVyxHQUFHLG9CQUFvQixDQUFDO1FBQ25DLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNwQixpQkFBWSxHQUFHLE1BQU0sQ0FBQztRQUN0QixPQUFFLEdBQUcsRUFBRSxDQUFDO1FBRWxCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDQSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVFuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQVBGLElBQ0ksV0FBVyxDQUFDLFdBQW1CO1FBQ2xDLElBQUksQ0FBQyxLQUFL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IElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LXByb2ZpbGUtd2lkZ2V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1wcm9maWxlLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1wcm9maWxlLXdpZGdldC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1UHJvZmlsZVdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaW1hZ2UgPSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9icm93c2VyLnBuZyc7XHJcblx0QElucHV0KCd1c2VyLW5hbWUnKSB1c2VyTmFtZSA9ICdWYWlyb2cnO1xyXG5cdEBJbnB1dCgpIG5hbWVXZWlnaHQgPSAnNDAwJztcclxuXHRASW5wdXQoKSBuYW1lQ3VzdG9tQ2xhc3MgPSAnbWItMCBtdC0xIHBsLTEnO1xyXG5cdEBJbnB1dCgpIG5hbWVTaXplID0gJzMzLjQnO1xyXG5cdEBJbnB1dCgpIG5hbWVDb2xvcjtcclxuXHRASW5wdXQoJ2FjY291bnQtdHlwZScpIGFjY291bnRUeXBlID0gJ01hbnVmYWN0dXJlcic7XHJcblx0QElucHV0KCkgYWNjb3VudFdlaWdodCA9ICc0MDAnO1xyXG5cdEBJbnB1dCgpIGFjY291bnRDdXN0b21DbGFzcyA9ICdwbC0yJztcclxuXHRASW5wdXQoKSBhY2NvdW50U2l6ZSA9ICcxNyc7XHJcblx0QElucHV0KCkgYWNjb3VudENvbG9yID0gJyc7XHJcblx0QElucHV0KCkgcmF0aW5nQ3VzdG9tQ2xhc3MgPSAncGwtMiBtYi0yIHB0LTMnO1xyXG5cdEBJbnB1dCgpIHJhdGVEZXRhaWxzID0gJ2Jhc2VkIG9uIDE0IHJhdGluZyc7XHJcblx0QElucHV0KCkgcmF0ZUNvbG9yID0gJyc7XHJcblx0QElucHV0KCkgcmF0aW5nV2VpZ2h0ID0gJzQwMCc7XHJcbiAgQElucHV0KCkgckR1c3RvbUNsYXNzID0gJ3BsLTInO1xyXG4gIEBJbnB1dCgpIGlkID0gJyc7XHJcbiAgbXlIVE1MO1xyXG5cdF9yYXRlID0gMDtcclxuXHRAT3V0cHV0KCkgcmF0aW5nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBJbnB1dCgpIGN1c3RvbUNsYXNzO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IHJhdGluZ1ZhbHVlKHJhdGluZ1ZhbHVlOiBudW1iZXIpIHtcclxuXHRcdHRoaXMuX3JhdGUgPSByYXRpbmdWYWx1ZTtcclxuXHRcdGNvbnNvbGUubG9nKCcnLCB0aGlzLl9yYXRlKTtcclxuXHR9XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNhbGxPZlN0YXJ0cyh0aGlzLl9yYXRlKTtcclxuICB9XHJcbiAgY2FsbE9mU3RhcnRzKGUpIHtcclxuXHRcdHN3aXRjaCAodHJ1ZSkge1xyXG5cdFx0XHRjYXNlIGUgPT09IDA6XHJcblx0XHRcdFx0dGhpcy5teUhUTUwgPSBgXHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5gO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBlIDw9IDAuNTpcclxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLWhhbGYtZW1wdHkgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDwvZGl2PmA7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIGUgPiAwLjUgJiYgZSA8PSAxOlxyXG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+IDwvZGl2PmA7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIGUgPD0gMS41OlxyXG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItaGFsZi1lbXB0eSBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+IDwvZGl2PmA7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIGUgPiAxLjUgJiYgZSA8PSAyOlxyXG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPiA8L2Rpdj5gO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBlIDw9IDIuNTpcclxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLWhhbGYtZW1wdHkgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj4gPC9kaXY+YDtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgZSA+IDIuNSAmJiBlIDw9IDM6XHJcblx0XHRcdFx0dGhpcy5teUhUTUwgPSBgXHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPiA8L2Rpdj5gO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBlIDw9IDMuNTpcclxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLWhhbGYtZW1wdHkgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+IDwvZGl2PmA7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIGUgPiAzLjUgJiYgZSA8PSA0OlxyXG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+IDwvZGl2PmA7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIGUgPD0gNC41OlxyXG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItaGFsZi1lbXB0eSBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XHJcbiAgICA8L2Rpdj5gO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIGUgPiA0LjUgJiYgZSA8PSA1OlxyXG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICAgPC9kaXY+YDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19