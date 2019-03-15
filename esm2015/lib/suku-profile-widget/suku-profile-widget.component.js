/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "`<div class=\"col-sm-12 ptl30\">\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n      <img src=\"{{image}}\" class=\"rounded-circle image\" alt=\"profile\" width=\"150\"\n        height=\"150\">\n    </div>\n    <div class=\"col-sm-7 pLR60\">\n\t\t\t <h1 [style.font-size.px]=\"nameSize\" [class]=\"nameCustomClass\" [style.font-weight]=\"nameWeight\" [style.color]=\"nameColor\" id=\"{{id}}\">\n      {{userName}}\n      </h1>\n\t\t\t<h2 [style.font-size.px]=\"accountSize\" [class]=\"accountCustomClass\" id=\"{{id}}\" [style.font-weight]=\"accountWeight\" [style.color]=\"accountColor\">\n\t\t\t{{accountType}}\n\t\t </h2>\n     <span (change)=\"rating.emit(ratingValue)\">\n      <div [innerHTML]=\"myHTML\" [class]=\"customClass\" ratingValue=\"\"></div>\n      </span>\n\t\t\t<h2 [style.font-size.px]=\"accountSize\" [class]=\"rDustomClass\" id=\"{{id}}\" [style.font-weight]=\"ratingWeight\" [style.color]=\"rateColor\">\n\t\t\t{{rateDetails}}\n\t\t </h2>\n    </div>\n  </div>\n</div>`\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9maWxlLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9maWxlLXdpZGdldC9zdWt1LXByb2ZpbGUtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sMEJBQTBCO0lBMkJyQztRQTFCUyxVQUFLLEdBQUcsaUNBQWlDLENBQUM7UUFDaEMsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQUMvQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLG9CQUFlLEdBQUcsZ0JBQWdCLENBQUM7UUFDbkMsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUVKLGdCQUFXLEdBQUcsY0FBYyxDQUFDO1FBQzNDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLHVCQUFrQixHQUFHLE1BQU0sQ0FBQztRQUM1QixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixzQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztRQUNyQyxnQkFBVyxHQUFHLG9CQUFvQixDQUFDO1FBQ25DLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNwQixpQkFBWSxHQUFHLE1BQU0sQ0FBQztRQUN0QixPQUFFLEdBQUcsRUFBRSxDQUFDO1FBRWxCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDQSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVFuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQVBGLElBQ0ksV0FBVyxDQUFDLFdBQW1CO1FBQ2xDLElBQUksQ0FBQyxLQUFL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IElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXByb2ZpbGUtd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtcHJvZmlsZS13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXByb2ZpbGUtd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVByb2ZpbGVXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpbWFnZSA9ICcuLi8uLi9hc3NldHMvaW1hZ2VzL2Jyb3dzZXIucG5nJztcblx0QElucHV0KCd1c2VyLW5hbWUnKSB1c2VyTmFtZSA9ICdWYWlyb2cnO1xuXHRASW5wdXQoKSBuYW1lV2VpZ2h0ID0gJzQwMCc7XG5cdEBJbnB1dCgpIG5hbWVDdXN0b21DbGFzcyA9ICdtYi0wIG10LTEgcGwtMSc7XG5cdEBJbnB1dCgpIG5hbWVTaXplID0gJzMzLjQnO1xuXHRASW5wdXQoKSBuYW1lQ29sb3I7XG5cdEBJbnB1dCgnYWNjb3VudC10eXBlJykgYWNjb3VudFR5cGUgPSAnTWFudWZhY3R1cmVyJztcblx0QElucHV0KCkgYWNjb3VudFdlaWdodCA9ICc0MDAnO1xuXHRASW5wdXQoKSBhY2NvdW50Q3VzdG9tQ2xhc3MgPSAncGwtMic7XG5cdEBJbnB1dCgpIGFjY291bnRTaXplID0gJzE3Jztcblx0QElucHV0KCkgYWNjb3VudENvbG9yID0gJyc7XG5cdEBJbnB1dCgpIHJhdGluZ0N1c3RvbUNsYXNzID0gJ3BsLTIgbWItMiBwdC0zJztcblx0QElucHV0KCkgcmF0ZURldGFpbHMgPSAnYmFzZWQgb24gMTQgcmF0aW5nJztcblx0QElucHV0KCkgcmF0ZUNvbG9yID0gJyc7XG5cdEBJbnB1dCgpIHJhdGluZ1dlaWdodCA9ICc0MDAnO1xuICBASW5wdXQoKSByRHVzdG9tQ2xhc3MgPSAncGwtMic7XG4gIEBJbnB1dCgpIGlkID0gJyc7XG4gIG15SFRNTDtcblx0X3JhdGUgPSAwO1xuXHRAT3V0cHV0KCkgcmF0aW5nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRASW5wdXQoKSBjdXN0b21DbGFzcztcblx0QElucHV0KClcblx0c2V0IHJhdGluZ1ZhbHVlKHJhdGluZ1ZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLl9yYXRlID0gcmF0aW5nVmFsdWU7XG5cdFx0Y29uc29sZS5sb2coJycsIHRoaXMuX3JhdGUpO1xuXHR9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FsbE9mU3RhcnRzKHRoaXMuX3JhdGUpO1xuICB9XG4gIGNhbGxPZlN0YXJ0cyhlKSB7XG5cdFx0c3dpdGNoICh0cnVlKSB7XG5cdFx0XHRjYXNlIGUgPT09IDA6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgZSA8PSAwLjU6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLWhhbGYtZW1wdHkgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgZSA+IDAuNSAmJiBlIDw9IDE6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj4gPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgZSA8PSAxLjU6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1oYWxmLWVtcHR5IHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj4gPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgZSA+IDEuNSAmJiBlIDw9IDI6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+IDwvZGl2PmA7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIGUgPD0gMi41OlxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLWhhbGYtZW1wdHkgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPiA8L2Rpdj5gO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBlID4gMi41ICYmIGUgPD0gMzpcblx0XHRcdFx0dGhpcy5teUhUTUwgPSBgXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+IDwvZGl2PmA7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIGUgPD0gMy41OlxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1oYWxmLWVtcHR5IHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj4gPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgZSA+IDMuNSAmJiBlIDw9IDQ6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj4gPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgZSA8PSA0LjU6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1oYWxmLWVtcHR5IHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICA8L2Rpdj5gO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgZSA+IDQuNSAmJiBlIDw9IDU6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XG4gICAgICAgPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=