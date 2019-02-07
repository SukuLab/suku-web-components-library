/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
var SukuProfileWidgetComponent = /** @class */ (function () {
    function SukuProfileWidgetComponent() {
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
    Object.defineProperty(SukuProfileWidgetComponent.prototype, "ratingValue", {
        set: /**
         * @param {?} ratingValue
         * @return {?}
         */
        function (ratingValue) {
            this._rate = ratingValue;
            console.log('', this._rate);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    SukuProfileWidgetComponent.prototype.callOfStarts = /**
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
    SukuProfileWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuProfileWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-profile-widget',
                    template: "`<div class=\"col-sm-12 ptl30\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-5\">\r\n      <img src=\"{{image}}\" class=\"rounded-circle image\" alt=\"profile\" width=\"150\"\r\n        height=\"150\">\r\n    </div>\r\n    <div class=\"col-sm-7 pLR60\">\r\n\t\t\t <h1 [style.font-size.px]=\"nameSize\" [class]=\"nameCustomClass\" [style.font-weight]=\"nameWeight\" [style.color]=\"nameColor\" id=\"{{id}}\">\r\n      {{userName}}\r\n      </h1>\r\n\t\t\t<h2 [style.font-size.px]=\"accountSize\" [class]=\"accountCustomClass\" id=\"{{id}}\" [style.font-weight]=\"accountWeight\" [style.color]=\"accountColor\">\r\n\t\t\t{{accountType}}\r\n\t\t </h2>\r\n     <span (change)=\"rating.emit(ratingValue)\">\r\n      <div [innerHTML]=\"myHTML\" [class]=\"customClass\" ratingValue=\"\"></div>\r\n      </span>\r\n\t\t\t<h2 [style.font-size.px]=\"accountSize\" [class]=\"rDustomClass\" id=\"{{id}}\" [style.font-weight]=\"ratingWeight\" [style.color]=\"rateColor\">\r\n\t\t\t{{rateDetails}}\r\n\t\t </h2>\r\n    </div>\r\n  </div>\r\n</div>`\r\n",
                    styles: [".profileBox{width:187.656px;border-radius:0 0 30px 30px;background-color:#fff;box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.circle{background-color:gray;height:150px;width:150px;border-radius:100%}.bLine{opacity:.09;border:1px solid #979797}.userName{font-family:Poppins-Regular,Arial;font-size:20px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;color:var(--black);word-break:break-all!important}.create-interest-listing{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:14px;color:#b6b6b6;line-height:18px;letter-spacing:.01em;word-break:break-all!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuProfileWidgetComponent.ctorParameters = function () { return []; };
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
    return SukuProfileWidgetComponent;
}());
export { SukuProfileWidgetComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9maWxlLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9maWxlLXdpZGdldC9zdWt1LXByb2ZpbGUtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWdDRTtRQTFCUyxVQUFLLEdBQUcsaUNBQWlDLENBQUM7UUFDaEMsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQUMvQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLG9CQUFlLEdBQUcsZ0JBQWdCLENBQUM7UUFDbkMsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUVKLGdCQUFXLEdBQUcsY0FBYyxDQUFDO1FBQzNDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLHVCQUFrQixHQUFHLE1BQU0sQ0FBQztRQUM1QixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixzQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztRQUNyQyxnQkFBVyxHQUFHLG9CQUFvQixDQUFDO1FBQ25DLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNwQixpQkFBWSxHQUFHLE1BQU0sQ0FBQztRQUN0QixPQUFFLEdBQUcsRUFBRSxDQUFDO1FBRWxCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDQSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVFuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBUEYsc0JBQ0ksbURBQVc7Ozs7O1FBRGYsVUFDZ0IsV0FBbUI7WUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFX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bmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1wcm9maWxlLXdpZGdldCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtcHJvZmlsZS13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtcHJvZmlsZS13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdVByb2ZpbGVXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGltYWdlID0gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnJvd3Nlci5wbmcnO1xyXG5cdEBJbnB1dCgndXNlci1uYW1lJykgdXNlck5hbWUgPSAnVmFpcm9nJztcclxuXHRASW5wdXQoKSBuYW1lV2VpZ2h0ID0gJzQwMCc7XHJcblx0QElucHV0KCkgbmFtZUN1c3RvbUNsYXNzID0gJ21iLTAgbXQtMSBwbC0xJztcclxuXHRASW5wdXQoKSBuYW1lU2l6ZSA9ICczMy40JztcclxuXHRASW5wdXQoKSBuYW1lQ29sb3I7XHJcblx0QElucHV0KCdhY2NvdW50LXR5cGUnKSBhY2NvdW50VHlwZSA9ICdNYW51ZmFjdHVyZXInO1xyXG5cdEBJbnB1dCgpIGFjY291bnRXZWlnaHQgPSAnNDAwJztcclxuXHRASW5wdXQoKSBhY2NvdW50Q3VzdG9tQ2xhc3MgPSAncGwtMic7XHJcblx0QElucHV0KCkgYWNjb3VudFNpemUgPSAnMTcnO1xyXG5cdEBJbnB1dCgpIGFjY291bnRDb2xvciA9ICcnO1xyXG5cdEBJbnB1dCgpIHJhdGluZ0N1c3RvbUNsYXNzID0gJ3BsLTIgbWItMiBwdC0zJztcclxuXHRASW5wdXQoKSByYXRlRGV0YWlscyA9ICdiYXNlZCBvbiAxNCByYXRpbmcnO1xyXG5cdEBJbnB1dCgpIHJhdGVDb2xvciA9ICcnO1xyXG5cdEBJbnB1dCgpIHJhdGluZ1dlaWdodCA9ICc0MDAnO1xyXG4gIEBJbnB1dCgpIHJEdXN0b21DbGFzcyA9ICdwbC0yJztcclxuICBASW5wdXQoKSBpZCA9ICcnO1xyXG4gIG15SFRNTDtcclxuXHRfcmF0ZSA9IDA7XHJcblx0QE91dHB1dCgpIHJhdGluZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRASW5wdXQoKSBjdXN0b21DbGFzcztcclxuXHRASW5wdXQoKVxyXG5cdHNldCByYXRpbmdWYWx1ZShyYXRpbmdWYWx1ZTogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl9yYXRlID0gcmF0aW5nVmFsdWU7XHJcblx0XHRjb25zb2xlLmxvZygnJywgdGhpcy5fcmF0ZSk7XHJcblx0fVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jYWxsT2ZTdGFydHModGhpcy5fcmF0ZSk7XHJcbiAgfVxyXG4gIGNhbGxPZlN0YXJ0cyhlKSB7XHJcblx0XHRzd2l0Y2ggKHRydWUpIHtcclxuXHRcdFx0Y2FzZSBlID09PSAwOlxyXG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+YDtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgZSA8PSAwLjU6XHJcblx0XHRcdFx0dGhpcy5teUhUTUwgPSBgXHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1oYWxmLWVtcHR5IHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5gO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBlID4gMC41ICYmIGUgPD0gMTpcclxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPiA8L2Rpdj5gO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBlIDw9IDEuNTpcclxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLWhhbGYtZW1wdHkgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPiA8L2Rpdj5gO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBlID4gMS41ICYmIGUgPD0gMjpcclxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj4gPC9kaXY+YDtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgZSA8PSAyLjU6XHJcblx0XHRcdFx0dGhpcy5teUhUTUwgPSBgXHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1oYWxmLWVtcHR5IHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+IDwvZGl2PmA7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIGUgPiAyLjUgJiYgZSA8PSAzOlxyXG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIGYyMlwiPjwvc3Bhbj4gPC9kaXY+YDtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgZSA8PSAzLjU6XHJcblx0XHRcdFx0dGhpcy5teUhUTUwgPSBgXHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBzdGFyQ2hlY2tlZCBmMjJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1oYWxmLWVtcHR5IHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPiA8L2Rpdj5gO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBlID4gMy41ICYmIGUgPD0gNDpcclxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gZjIyXCI+PC9zcGFuPiA8L2Rpdj5gO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBlIDw9IDQuNTpcclxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLWhhbGYtZW1wdHkgc3RhckNoZWNrZWQgZjIyXCI+PC9zcGFuPlxyXG4gICAgPC9kaXY+YDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBlID4gNC41ICYmIGUgPD0gNTpcclxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIHN0YXJDaGVja2VkIGYyMlwiPjwvc3Bhbj5cclxuICAgICAgIDwvZGl2PmA7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==