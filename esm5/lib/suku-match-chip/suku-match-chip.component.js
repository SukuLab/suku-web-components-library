/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, } from '@angular/core';
var SukuMatchChipComponent = /** @class */ (function () {
    function SukuMatchChipComponent() {
        this.image = '../../assets/images/manageTrack.png';
        this.imgId = 'img-id';
        this.match = new EventEmitter();
        this.userAction = new EventEmitter();
        this.customclass = 'col p-0';
        this.listNameSize = '16';
        this.listWeight = '600';
        this.listColor = 'black';
        this.listName = 'Super Computer';
        this.listCustomClass = '';
        this.prize = '10 SUKU';
        this.prizeSize = '14';
        this.prizeWeight = '500';
        this.prizeColor = '#3e3e3e';
        this.prizeCustomClass = 'mb-0 pt-2';
        this.date = 'LISTING EXPIRATION DATE';
        this.dateSize = '12';
        this.dateWeight = '500';
        this.dateColor = '#b6b6b6';
        this.dateCustomClass = '';
        this.dateV = '28 Nov 2018';
        this.dateVSize = '14';
        this.dateVWeight = '500';
        this.dateVColor = '#3e3e3e';
        this.dateVCustomClass = '';
        this.sell = 'SOLD BY';
        this.sellSize = '12';
        this.sellWeight = '500';
        this.sellColor = '#b6b6b6';
        this.sellCustomClass = '';
        this.sellV = 'John Smith';
        this.sellVSize = '14';
        this.sellVWeight = '500';
        this.sellVColor = '#3e3e3e';
        this.sellVCustomClass = 'c-pointer';
        this.id = 'suku-match-chip';
        this.sellerid = '0';
    }
    /**
     * @return {?}
     */
    SukuMatchChipComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuMatchChipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-match-chip',
                    template: "<div [class]=\"customclass\">\r\n  <div class=\"col p-0\">\r\n    <div class=\"col-sm-12 p-0 bg-white text-center col-xs-12 match-chip-shadow rounded-0\">\r\n      <a id=\"match-chip\">\r\n        <img (click)=\"match.emit()\" src=\"{{image}}\" id=\"listImg{{imgId}}\" class=\"m-1 p-2 pt-3 pb-3 c-pointer\"\r\n          width=\"90%\" height=\"120px\" alt=\"Image\" />\r\n      </a>\r\n      <br>\r\n      <div class=\"col-sm-12 p-0 pl-3 pr-3 border-top-box pt-4 text-center \">\r\n        <h2 [style.font-size.px]=\"listNameSize\" [class]=\"listCustomClass\" id=\"{{id}}\" [style.font-weight]=\"listWeight\"\r\n          [style.color]=\"listColor\">\r\n          {{listName}}\r\n        </h2>\r\n        <h2 [style.font-size.px]=\"prizeSize\" [class]=\"prizeCustomClass\" id=\"{{id}}\" [style.font-weight]=\"prizeWeight\"\r\n          [style.color]=\"prizeColor\">\r\n          {{prize}}\r\n        </h2>\r\n        <div class=\"pt-4\">\r\n          <h2 [style.font-size.px]=\"dateSize\" [class]=\"dateCustomClass\" id=\"{{id}}\" [style.font-weight]=\"dateWeight\"\r\n            [style.color]=\"dateColor\">\r\n            {{date}}\r\n          </h2>\r\n          <h2 [style.font-size.px]=\"dateVSize\" [class]=\"dateVCustomClass\" id=\"{{id}}\" [style.font-weight]=\"dateVWeight\"\r\n            [style.color]=\"dateVColor\">\r\n            {{dateV}}\r\n          </h2>\r\n        </div>\r\n        <div class=\"pt-3 pb-3\">\r\n          <h2 [style.font-size.px]=\"sellSize\" [class]=\"sellCustomClass\" id=\"{{id}}\" [style.font-weight]=\"sellWeight\"\r\n            [style.color]=\"sellColor\">\r\n            {{sell}}\r\n          </h2>\r\n          <h2 (click)=\"userAction.emit()\" [style.font-size.px]=\"sellVSize\" [class]=\"sellVCustomClass\"\r\n            id=\"sellerName{{sellerid}}\" [style.font-weight]=\"sellVWeight\" [style.color]=\"sellVColor\">\r\n            {{sellV}}\r\n          </h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [".border-top-box{border-top:1px solid #dee2e670!important}.match-chip-shadow{box-shadow:0 2px 4px 0 rgba(0,0,0,.05);height:340px}.default{width:200px}h2{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;word-break:break-word!important;margin-bottom:0!important}.c-pointer{cursor:pointer!important}.c-pointer:hover{font-weight:900!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuMatchChipComponent.ctorParameters = function () { return []; };
    SukuMatchChipComponent.propDecorators = {
        image: [{ type: Input }],
        imgId: [{ type: Input }],
        match: [{ type: Output }],
        userAction: [{ type: Output }],
        customclass: [{ type: Input }],
        listNameSize: [{ type: Input }],
        listWeight: [{ type: Input }],
        listColor: [{ type: Input }],
        listName: [{ type: Input }],
        listCustomClass: [{ type: Input }],
        prize: [{ type: Input }],
        prizeSize: [{ type: Input }],
        prizeWeight: [{ type: Input }],
        prizeColor: [{ type: Input }],
        prizeCustomClass: [{ type: Input }],
        date: [{ type: Input }],
        dateSize: [{ type: Input }],
        dateWeight: [{ type: Input }],
        dateColor: [{ type: Input }],
        dateCustomClass: [{ type: Input }],
        dateV: [{ type: Input }],
        dateVSize: [{ type: Input }],
        dateVWeight: [{ type: Input }],
        dateVColor: [{ type: Input }],
        dateVCustomClass: [{ type: Input }],
        sell: [{ type: Input }],
        sellSize: [{ type: Input }],
        sellWeight: [{ type: Input }],
        sellColor: [{ type: Input }],
        sellCustomClass: [{ type: Input }],
        sellV: [{ type: Input }],
        sellVSize: [{ type: Input }],
        sellVWeight: [{ type: Input }],
        sellVColor: [{ type: Input }],
        sellVCustomClass: [{ type: Input }],
        id: [{ type: Input }],
        sellerid: [{ type: Input }]
    };
    return SukuMatchChipComponent;
}());
export { SukuMatchChipComponent };
if (false) {
    /** @type {?} */
    SukuMatchChipComponent.prototype.image;
    /** @type {?} */
    SukuMatchChipComponent.prototype.imgId;
    /** @type {?} */
    SukuMatchChipComponent.prototype.match;
    /** @type {?} */
    SukuMatchChipComponent.prototype.userAction;
    /** @type {?} */
    SukuMatchChipComponent.prototype.customclass;
    /** @type {?} */
    SukuMatchChipComponent.prototype.listNameSize;
    /** @type {?} */
    SukuMatchChipComponent.prototype.listWeight;
    /** @type {?} */
    SukuMatchChipComponent.prototype.listColor;
    /** @type {?} */
    SukuMatchChipComponent.prototype.listName;
    /** @type {?} */
    SukuMatchChipComponent.prototype.listCustomClass;
    /** @type {?} */
    SukuMatchChipComponent.prototype.prize;
    /** @type {?} */
    SukuMatchChipComponent.prototype.prizeSize;
    /** @type {?} */
    SukuMatchChipComponent.prototype.prizeWeight;
    /** @type {?} */
    SukuMatchChipComponent.prototype.prizeColor;
    /** @type {?} */
    SukuMatchChipComponent.prototype.prizeCustomClass;
    /** @type {?} */
    SukuMatchChipComponent.prototype.date;
    /** @type {?} */
    SukuMatchChipComponent.prototype.dateSize;
    /** @type {?} */
    SukuMatchChipComponent.prototype.dateWeight;
    /** @type {?} */
    SukuMatchChipComponent.prototype.dateColor;
    /** @type {?} */
    SukuMatchChipComponent.prototype.dateCustomClass;
    /** @type {?} */
    SukuMatchChipComponent.prototype.dateV;
    /** @type {?} */
    SukuMatchChipComponent.prototype.dateVSize;
    /** @type {?} */
    SukuMatchChipComponent.prototype.dateVWeight;
    /** @type {?} */
    SukuMatchChipComponent.prototype.dateVColor;
    /** @type {?} */
    SukuMatchChipComponent.prototype.dateVCustomClass;
    /** @type {?} */
    SukuMatchChipComponent.prototype.sell;
    /** @type {?} */
    SukuMatchChipComponent.prototype.sellSize;
    /** @type {?} */
    SukuMatchChipComponent.prototype.sellWeight;
    /** @type {?} */
    SukuMatchChipComponent.prototype.sellColor;
    /** @type {?} */
    SukuMatchChipComponent.prototype.sellCustomClass;
    /** @type {?} */
    SukuMatchChipComponent.prototype.sellV;
    /** @type {?} */
    SukuMatchChipComponent.prototype.sellVSize;
    /** @type {?} */
    SukuMatchChipComponent.prototype.sellVWeight;
    /** @type {?} */
    SukuMatchChipComponent.prototype.sellVColor;
    /** @type {?} */
    SukuMatchChipComponent.prototype.sellVCustomClass;
    /** @type {?} */
    SukuMatchChipComponent.prototype.id;
    /** @type {?} */
    SukuMatchChipComponent.prototype.sellerid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tYXRjaC1jaGlwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LW1hdGNoLWNoaXAvc3VrdS1tYXRjaC1jaGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksR0FBSSxNQUFNLGVBQWUsQ0FBQztBQUVqRjtJQTRDRTtRQXRDUyxVQUFLLEdBQUcscUNBQXFDLENBQUM7UUFDOUMsVUFBSyxHQUFHLFFBQVEsQ0FBQztRQUNqQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUN4QixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxPQUFPLENBQUM7UUFDcEIsYUFBUSxHQUFHLGdCQUFnQixDQUFDO1FBQzVCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixlQUFVLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLHFCQUFnQixHQUFHLFdBQVcsQ0FBQztRQUMvQixTQUFJLEdBQUcseUJBQXlCLENBQUM7UUFDakMsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsVUFBSyxHQUFHLGFBQWEsQ0FBQztRQUN0QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxTQUFTLENBQUM7UUFDdkIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLFNBQUksR0FBRyxTQUFTLENBQUM7UUFDakIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsVUFBSyxHQUFHLFlBQVksQ0FBQztRQUNyQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxTQUFTLENBQUM7UUFDdkIscUJBQWdCLEdBQUcsV0FBVyxDQUFDO1FBQy9CLE9BQUUsR0FBRyxpQkFBaUIsQ0FBQztRQUN2QixhQUFRLEdBQUcsR0FBRyxDQUFDO0lBRVAsQ0FBQzs7OztJQUVqQix5Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkEvQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHE4REFBK0M7O2lCQUVoRDs7Ozs7d0JBRUUsS0FBSzt3QkFDTCxLQUFLO3dCQUNOLE1BQU07NkJBQ04sTUFBTTs4QkFDTixLQUFLOytCQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7a0NBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLO21DQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSztrQ0FDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7bUNBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLO2tDQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzttQ0FDTCxLQUFLO3FCQUNMLEtBQUs7MkJBQ0wsS0FBSzs7SUFPUCw2QkFBQztDQUFBLEFBakRELElBaURDO1NBNUNZLHNCQUFzQjs7O0lBQ2pDLHVDQUF1RDs7SUFDdkQsdUNBQTBCOztJQUMzQix1Q0FBcUM7O0lBQ3JDLDRDQUEwQzs7SUFDMUMsNkNBQWlDOztJQUNqQyw4Q0FBNkI7O0lBQzdCLDRDQUE0Qjs7SUFDNUIsMkNBQTZCOztJQUM3QiwwQ0FBcUM7O0lBQ3JDLGlEQUE4Qjs7SUFDOUIsdUNBQTJCOztJQUMzQiwyQ0FBMEI7O0lBQzFCLDZDQUE2Qjs7SUFDN0IsNENBQWdDOztJQUNoQyxrREFBd0M7O0lBQ3hDLHNDQUEwQzs7SUFDMUMsMENBQXlCOztJQUN6Qiw0Q0FBNEI7O0lBQzVCLDJDQUErQjs7SUFDL0IsaURBQThCOztJQUM5Qix1Q0FBK0I7O0lBQy9CLDJDQUEwQjs7SUFDMUIsNkNBQTZCOztJQUM3Qiw0Q0FBZ0M7O0lBQ2hDLGtEQUErQjs7SUFDL0Isc0NBQTBCOztJQUMxQiwwQ0FBeUI7O0lBQ3pCLDRDQUE0Qjs7SUFDNUIsMkNBQStCOztJQUMvQixpREFBOEI7O0lBQzlCLHVDQUE4Qjs7SUFDOUIsMkNBQTBCOztJQUMxQiw2Q0FBNkI7O0lBQzdCLDRDQUFnQzs7SUFDaEMsa0RBQXdDOztJQUN4QyxvQ0FBZ0M7O0lBQ2hDLDBDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LW1hdGNoLWNoaXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LW1hdGNoLWNoaXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtbWF0Y2gtY2hpcC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1TWF0Y2hDaGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpbWFnZSA9ICcuLi8uLi9hc3NldHMvaW1hZ2VzL21hbmFnZVRyYWNrLnBuZyc7XHJcbiAgQElucHV0KCkgaW1nSWQgPSAnaW1nLWlkJztcclxuXHRAT3V0cHV0KCkgbWF0Y2ggPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIHVzZXJBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QElucHV0KCkgY3VzdG9tY2xhc3MgPSAnY29sIHAtMCc7XHJcblx0QElucHV0KCkgbGlzdE5hbWVTaXplID0gJzE2JztcclxuXHRASW5wdXQoKSBsaXN0V2VpZ2h0ID0gJzYwMCc7XHJcblx0QElucHV0KCkgbGlzdENvbG9yID0gJ2JsYWNrJztcclxuXHRASW5wdXQoKSBsaXN0TmFtZSA9ICdTdXBlciBDb21wdXRlcic7XHJcblx0QElucHV0KCkgbGlzdEN1c3RvbUNsYXNzID0gJyc7XHJcblx0QElucHV0KCkgcHJpemUgPSAnMTAgU1VLVSc7XHJcblx0QElucHV0KCkgcHJpemVTaXplID0gJzE0JztcclxuXHRASW5wdXQoKSBwcml6ZVdlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgpIHByaXplQ29sb3IgPSAnIzNlM2UzZSc7XHJcblx0QElucHV0KCkgcHJpemVDdXN0b21DbGFzcyA9ICdtYi0wIHB0LTInO1xyXG5cdEBJbnB1dCgpIGRhdGUgPSAnTElTVElORyBFWFBJUkFUSU9OIERBVEUnO1xyXG5cdEBJbnB1dCgpIGRhdGVTaXplID0gJzEyJztcclxuXHRASW5wdXQoKSBkYXRlV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCkgZGF0ZUNvbG9yID0gJyNiNmI2YjYnO1xyXG5cdEBJbnB1dCgpIGRhdGVDdXN0b21DbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgpIGRhdGVWID0gJzI4IE5vdiAyMDE4JztcclxuXHRASW5wdXQoKSBkYXRlVlNpemUgPSAnMTQnO1xyXG5cdEBJbnB1dCgpIGRhdGVWV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCkgZGF0ZVZDb2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoKSBkYXRlVkN1c3RvbUNsYXNzID0gJyc7XHJcblx0QElucHV0KCkgc2VsbCA9ICdTT0xEIEJZJztcclxuXHRASW5wdXQoKSBzZWxsU2l6ZSA9ICcxMic7XHJcblx0QElucHV0KCkgc2VsbFdlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgpIHNlbGxDb2xvciA9ICcjYjZiNmI2JztcclxuXHRASW5wdXQoKSBzZWxsQ3VzdG9tQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoKSBzZWxsViA9ICdKb2huIFNtaXRoJztcclxuXHRASW5wdXQoKSBzZWxsVlNpemUgPSAnMTQnO1xyXG5cdEBJbnB1dCgpIHNlbGxWV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCkgc2VsbFZDb2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoKSBzZWxsVkN1c3RvbUNsYXNzID0gJ2MtcG9pbnRlcic7XHJcblx0QElucHV0KCkgaWQgPSAnc3VrdS1tYXRjaC1jaGlwJztcclxuXHRASW5wdXQoKSBzZWxsZXJpZCA9ICcwJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=