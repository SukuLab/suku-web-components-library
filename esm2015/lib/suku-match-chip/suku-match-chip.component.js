/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, } from '@angular/core';
export class SukuMatchChipComponent {
    constructor() {
        this.image = '../../assets/images/manageTrack.png';
        this.match = new EventEmitter();
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
        this.prizeCustomClass = 'mb-0';
        this.date = 'EXPIRY DATE';
        this.dateSize = '12';
        this.dateWeight = '500';
        this.dateColor = '#b6b6b6';
        this.dateCustomClass = '';
        this.dateV = '28 Nov 2018';
        this.dateVSize = '14';
        this.dateVWeight = '500';
        this.dateVColor = '#3e3e3e';
        this.dateVCustomClass = '';
        this.sell = 'SELLER';
        this.sellSize = '12';
        this.sellWeight = '500';
        this.sellColor = '#b6b6b6';
        this.sellCustomClass = '';
        this.sellV = 'John Smith';
        this.sellVSize = '14';
        this.sellVWeight = '500';
        this.sellVColor = '#3e3e3e';
        this.sellVCustomClass = '';
        this.id = 'suku-match-chip';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuMatchChipComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-match-chip',
                template: "<div [class]=\"customclass\">\n  <div class=\"col p-0\">\n    <div class=\"col-sm-12 p-0 bg-white text-center col-xs-12 match-chip-shadow rounded-0\">\n      <a id=\"matchhun\">\n        <img (click)=\"match.emit()\" src=\"{{image}}\"  class=\"m-1\" width=\"75%\" height=\"120px\" alt=\"Image\">\n      </a>\n      <br>\n      <div class=\"col-sm-12 p-0 border-top-box pt-3 text-center \">\n\t\t\t\t <h2 [style.font-size.px]=\"listNameSize\" [class]=\"listCustomClass\" id=\"{{id}}\" [style.font-weight]=\"listWeight\" [style.color]=\"listColor\">\n          {{listName}}\n\t\t\t\t</h2>\n\t\t\t\t<h2 [style.font-size.px]=\"prizeSize\" [class]=\"prizeCustomClass\" id=\"{{id}}\" [style.font-weight]=\"prizeWeight\" [style.color]=\"prizeColor\">\n\t\t\t\t{{prize}}\n\t\t  \t</h2>\n\t\t\t\t<div class=\"pt-2\">\n\t\t\t\t<h2 [style.font-size.px]=\"dateSize\" [class]=\"dateCustomClass\" id=\"{{id}}\" [style.font-weight]=\"dateWeight\" [style.color]=\"dateColor\">\n          {{date}}\n\t\t\t\t</h2>\n\t\t\t\t<h2 [style.font-size.px]=\"dateVSize\" [class]=\"dateVCustomClass\" id=\"{{id}}\" [style.font-weight]=\"dateVWeight\" [style.color]=\"dateVColor\">\n\t\t\t\t{{dateV}}\n\t\t\t\t</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pt-2 pb-3\">\n\t\t\t \t<h2 [style.font-size.px]=\"sellSize\" [class]=\"sellCustomClass\" id=\"{{id}}\" [style.font-weight]=\"sellWeight\" [style.color]=\"sellColor\">\n\t\t\t\t{{sell}}\n\t\t   \t</h2>\n\t\t\t   <h2 [style.font-size.px]=\"sellVSize\" [class]=\"sellVCustomClass\" id=\"{{id}}\" [style.font-weight]=\"sellVWeight\" [style.color]=\"sellVColor\">\n\t\t    \t{{sellV}}\n\t\t\t   </h2>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".border-top-box{border-top:1px solid #dee2e670!important}.match-chip-shadow{box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.default{width:200px}"]
            }] }
];
/** @nocollapse */
SukuMatchChipComponent.ctorParameters = () => [];
SukuMatchChipComponent.propDecorators = {
    image: [{ type: Input }],
    match: [{ type: Output }],
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
    id: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuMatchChipComponent.prototype.image;
    /** @type {?} */
    SukuMatchChipComponent.prototype.match;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tYXRjaC1jaGlwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LW1hdGNoLWNoaXAvc3VrdS1tYXRjaC1jaGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksR0FBSSxNQUFNLGVBQWUsQ0FBQztBQU9qRixNQUFNLE9BQU8sc0JBQXNCO0lBb0NqQztRQW5DUyxVQUFLLEdBQUcscUNBQXFDLENBQUM7UUFDOUMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDeEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztRQUM1QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxNQUFNLENBQUM7UUFDMUIsU0FBSSxHQUFHLGFBQWEsQ0FBQztRQUNyQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixVQUFLLEdBQUcsYUFBYSxDQUFDO1FBQ3RCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQUNoQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixVQUFLLEdBQUcsWUFBWSxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsT0FBRSxHQUFHLGlCQUFpQixDQUFDO0lBRWYsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBNUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiw4cERBQStDOzthQUVoRDs7Ozs7b0JBRUUsS0FBSztvQkFDTixNQUFNOzBCQUNOLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzs4QkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7K0JBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzsrQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7aUJBQ0wsS0FBSzs7OztJQWpDTCx1Q0FBdUQ7O0lBQ3hELHVDQUFxQzs7SUFDckMsNkNBQWlDOztJQUNqQyw4Q0FBNkI7O0lBQzdCLDRDQUE0Qjs7SUFDNUIsMkNBQTZCOztJQUM3QiwwQ0FBcUM7O0lBQ3JDLGlEQUE4Qjs7SUFDOUIsdUNBQTJCOztJQUMzQiwyQ0FBMEI7O0lBQzFCLDZDQUE2Qjs7SUFDN0IsNENBQWdDOztJQUNoQyxrREFBbUM7O0lBQ25DLHNDQUE4Qjs7SUFDOUIsMENBQXlCOztJQUN6Qiw0Q0FBNEI7O0lBQzVCLDJDQUErQjs7SUFDL0IsaURBQThCOztJQUM5Qix1Q0FBK0I7O0lBQy9CLDJDQUEwQjs7SUFDMUIsNkNBQTZCOztJQUM3Qiw0Q0FBZ0M7O0lBQ2hDLGtEQUErQjs7SUFDL0Isc0NBQXlCOztJQUN6QiwwQ0FBeUI7O0lBQ3pCLDRDQUE0Qjs7SUFDNUIsMkNBQStCOztJQUMvQixpREFBOEI7O0lBQzlCLHVDQUE4Qjs7SUFDOUIsMkNBQTBCOztJQUMxQiw2Q0FBNkI7O0lBQzdCLDRDQUFnQzs7SUFDaEMsa0RBQStCOztJQUMvQixvQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1tYXRjaC1jaGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtbWF0Y2gtY2hpcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtbWF0Y2gtY2hpcC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VNYXRjaENoaXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpbWFnZSA9ICcuLi8uLi9hc3NldHMvaW1hZ2VzL21hbmFnZVRyYWNrLnBuZyc7XG5cdEBPdXRwdXQoKSBtYXRjaCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QElucHV0KCkgY3VzdG9tY2xhc3MgPSAnY29sIHAtMCc7XG5cdEBJbnB1dCgpIGxpc3ROYW1lU2l6ZSA9ICcxNic7XG5cdEBJbnB1dCgpIGxpc3RXZWlnaHQgPSAnNjAwJztcblx0QElucHV0KCkgbGlzdENvbG9yID0gJ2JsYWNrJztcblx0QElucHV0KCkgbGlzdE5hbWUgPSAnU3VwZXIgQ29tcHV0ZXInO1xuXHRASW5wdXQoKSBsaXN0Q3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCkgcHJpemUgPSAnMTAgU1VLVSc7XG5cdEBJbnB1dCgpIHByaXplU2l6ZSA9ICcxNCc7XG5cdEBJbnB1dCgpIHByaXplV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgpIHByaXplQ29sb3IgPSAnIzNlM2UzZSc7XG5cdEBJbnB1dCgpIHByaXplQ3VzdG9tQ2xhc3MgPSAnbWItMCc7XG5cdEBJbnB1dCgpIGRhdGUgPSAnRVhQSVJZIERBVEUnO1xuXHRASW5wdXQoKSBkYXRlU2l6ZSA9ICcxMic7XG5cdEBJbnB1dCgpIGRhdGVXZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCkgZGF0ZUNvbG9yID0gJyNiNmI2YjYnO1xuXHRASW5wdXQoKSBkYXRlQ3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCkgZGF0ZVYgPSAnMjggTm92IDIwMTgnO1xuXHRASW5wdXQoKSBkYXRlVlNpemUgPSAnMTQnO1xuXHRASW5wdXQoKSBkYXRlVldlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoKSBkYXRlVkNvbG9yID0gJyMzZTNlM2UnO1xuXHRASW5wdXQoKSBkYXRlVkN1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIHNlbGwgPSAnU0VMTEVSJztcblx0QElucHV0KCkgc2VsbFNpemUgPSAnMTInO1xuXHRASW5wdXQoKSBzZWxsV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgpIHNlbGxDb2xvciA9ICcjYjZiNmI2Jztcblx0QElucHV0KCkgc2VsbEN1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIHNlbGxWID0gJ0pvaG4gU21pdGgnO1xuXHRASW5wdXQoKSBzZWxsVlNpemUgPSAnMTQnO1xuXHRASW5wdXQoKSBzZWxsVldlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoKSBzZWxsVkNvbG9yID0gJyMzZTNlM2UnO1xuXHRASW5wdXQoKSBzZWxsVkN1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIGlkID0gJ3N1a3UtbWF0Y2gtY2hpcCc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=