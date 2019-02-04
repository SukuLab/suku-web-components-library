/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, } from '@angular/core';
var SukuMatchChipComponent = /** @class */ (function () {
    function SukuMatchChipComponent() {
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
    SukuMatchChipComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuMatchChipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-match-chip',
                    template: "<div [class]=\"customclass\">\r\n  <div class=\"col p-0\">\r\n    <div class=\"col-sm-12 p-0 bg-white text-center col-xs-12 match-chip-shadow rounded-0\">\r\n      <a id=\"matchhun\">\r\n        <img (click)=\"match.emit()\" src=\"{{image}}\"  class=\"m-1\" width=\"75%\" height=\"120px\" alt=\"Image\">\r\n      </a>\r\n      <br>\r\n      <div class=\"col-sm-12 p-0 border-top-box pt-3 text-center \">\r\n\t\t\t\t <h2 [style.font-size.px]=\"listNameSize\" [class]=\"listCustomClass\" id=\"{{id}}\" [style.font-weight]=\"listWeight\" [style.color]=\"listColor\">\r\n          {{listName}}\r\n\t\t\t\t</h2>\r\n\t\t\t\t<h2 [style.font-size.px]=\"prizeSize\" [class]=\"prizeCustomClass\" id=\"{{id}}\" [style.font-weight]=\"prizeWeight\" [style.color]=\"prizeColor\">\r\n\t\t\t\t{{prize}}\r\n\t\t  \t</h2>\r\n\t\t\t\t<div class=\"pt-2\">\r\n\t\t\t\t<h2 [style.font-size.px]=\"dateSize\" [class]=\"dateCustomClass\" id=\"{{id}}\" [style.font-weight]=\"dateWeight\" [style.color]=\"dateColor\">\r\n          {{date}}\r\n\t\t\t\t</h2>\r\n\t\t\t\t<h2 [style.font-size.px]=\"dateVSize\" [class]=\"dateVCustomClass\" id=\"{{id}}\" [style.font-weight]=\"dateVWeight\" [style.color]=\"dateVColor\">\r\n\t\t\t\t{{dateV}}\r\n\t\t\t\t</h2>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"pt-2 pb-3\">\r\n\t\t\t \t<h2 [style.font-size.px]=\"sellSize\" [class]=\"sellCustomClass\" id=\"{{id}}\" [style.font-weight]=\"sellWeight\" [style.color]=\"sellColor\">\r\n\t\t\t\t{{sell}}\r\n\t\t   \t</h2>\r\n\t\t\t   <h2 [style.font-size.px]=\"sellVSize\" [class]=\"sellVCustomClass\" id=\"{{id}}\" [style.font-weight]=\"sellVWeight\" [style.color]=\"sellVColor\">\r\n\t\t    \t{{sellV}}\r\n\t\t\t   </h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".border-top-box{border-top:1px solid #dee2e670!important}.match-chip-shadow{box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.default{width:200px}"]
                }] }
    ];
    /** @nocollapse */
    SukuMatchChipComponent.ctorParameters = function () { return []; };
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
    return SukuMatchChipComponent;
}());
export { SukuMatchChipComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tYXRjaC1jaGlwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LW1hdGNoLWNoaXAvc3VrdS1tYXRjaC1jaGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksR0FBSSxNQUFNLGVBQWUsQ0FBQztBQUVqRjtJQXlDRTtRQW5DUyxVQUFLLEdBQUcscUNBQXFDLENBQUM7UUFDOUMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDeEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztRQUM1QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxNQUFNLENBQUM7UUFDMUIsU0FBSSxHQUFHLGFBQWEsQ0FBQztRQUNyQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixVQUFLLEdBQUcsYUFBYSxDQUFDO1FBQ3RCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQUNoQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixVQUFLLEdBQUcsWUFBWSxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsT0FBRSxHQUFHLGlCQUFpQixDQUFDO0lBRWYsQ0FBQzs7OztJQUVqQix5Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkE1Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLGt1REFBK0M7O2lCQUVoRDs7Ozs7d0JBRUUsS0FBSzt3QkFDTixNQUFNOzhCQUNOLEtBQUs7K0JBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSztrQ0FDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7bUNBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLO2tDQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzttQ0FDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7a0NBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLO21DQUNMLEtBQUs7cUJBQ0wsS0FBSzs7SUFPUCw2QkFBQztDQUFBLEFBOUNELElBOENDO1NBekNZLHNCQUFzQjs7O0lBQ2pDLHVDQUF1RDs7SUFDeEQsdUNBQXFDOztJQUNyQyw2Q0FBaUM7O0lBQ2pDLDhDQUE2Qjs7SUFDN0IsNENBQTRCOztJQUM1QiwyQ0FBNkI7O0lBQzdCLDBDQUFxQzs7SUFDckMsaURBQThCOztJQUM5Qix1Q0FBMkI7O0lBQzNCLDJDQUEwQjs7SUFDMUIsNkNBQTZCOztJQUM3Qiw0Q0FBZ0M7O0lBQ2hDLGtEQUFtQzs7SUFDbkMsc0NBQThCOztJQUM5QiwwQ0FBeUI7O0lBQ3pCLDRDQUE0Qjs7SUFDNUIsMkNBQStCOztJQUMvQixpREFBOEI7O0lBQzlCLHVDQUErQjs7SUFDL0IsMkNBQTBCOztJQUMxQiw2Q0FBNkI7O0lBQzdCLDRDQUFnQzs7SUFDaEMsa0RBQStCOztJQUMvQixzQ0FBeUI7O0lBQ3pCLDBDQUF5Qjs7SUFDekIsNENBQTRCOztJQUM1QiwyQ0FBK0I7O0lBQy9CLGlEQUE4Qjs7SUFDOUIsdUNBQThCOztJQUM5QiwyQ0FBMEI7O0lBQzFCLDZDQUE2Qjs7SUFDN0IsNENBQWdDOztJQUNoQyxrREFBK0I7O0lBQy9CLG9DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LW1hdGNoLWNoaXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LW1hdGNoLWNoaXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtbWF0Y2gtY2hpcC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1TWF0Y2hDaGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpbWFnZSA9ICcuLi8uLi9hc3NldHMvaW1hZ2VzL21hbmFnZVRyYWNrLnBuZyc7XHJcblx0QE91dHB1dCgpIG1hdGNoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBJbnB1dCgpIGN1c3RvbWNsYXNzID0gJ2NvbCBwLTAnO1xyXG5cdEBJbnB1dCgpIGxpc3ROYW1lU2l6ZSA9ICcxNic7XHJcblx0QElucHV0KCkgbGlzdFdlaWdodCA9ICc2MDAnO1xyXG5cdEBJbnB1dCgpIGxpc3RDb2xvciA9ICdibGFjayc7XHJcblx0QElucHV0KCkgbGlzdE5hbWUgPSAnU3VwZXIgQ29tcHV0ZXInO1xyXG5cdEBJbnB1dCgpIGxpc3RDdXN0b21DbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgpIHByaXplID0gJzEwIFNVS1UnO1xyXG5cdEBJbnB1dCgpIHByaXplU2l6ZSA9ICcxNCc7XHJcblx0QElucHV0KCkgcHJpemVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoKSBwcml6ZUNvbG9yID0gJyMzZTNlM2UnO1xyXG5cdEBJbnB1dCgpIHByaXplQ3VzdG9tQ2xhc3MgPSAnbWItMCc7XHJcblx0QElucHV0KCkgZGF0ZSA9ICdFWFBJUlkgREFURSc7XHJcblx0QElucHV0KCkgZGF0ZVNpemUgPSAnMTInO1xyXG5cdEBJbnB1dCgpIGRhdGVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoKSBkYXRlQ29sb3IgPSAnI2I2YjZiNic7XHJcblx0QElucHV0KCkgZGF0ZUN1c3RvbUNsYXNzID0gJyc7XHJcblx0QElucHV0KCkgZGF0ZVYgPSAnMjggTm92IDIwMTgnO1xyXG5cdEBJbnB1dCgpIGRhdGVWU2l6ZSA9ICcxNCc7XHJcblx0QElucHV0KCkgZGF0ZVZXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoKSBkYXRlVkNvbG9yID0gJyMzZTNlM2UnO1xyXG5cdEBJbnB1dCgpIGRhdGVWQ3VzdG9tQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoKSBzZWxsID0gJ1NFTExFUic7XHJcblx0QElucHV0KCkgc2VsbFNpemUgPSAnMTInO1xyXG5cdEBJbnB1dCgpIHNlbGxXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoKSBzZWxsQ29sb3IgPSAnI2I2YjZiNic7XHJcblx0QElucHV0KCkgc2VsbEN1c3RvbUNsYXNzID0gJyc7XHJcblx0QElucHV0KCkgc2VsbFYgPSAnSm9obiBTbWl0aCc7XHJcblx0QElucHV0KCkgc2VsbFZTaXplID0gJzE0JztcclxuXHRASW5wdXQoKSBzZWxsVldlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgpIHNlbGxWQ29sb3IgPSAnIzNlM2UzZSc7XHJcblx0QElucHV0KCkgc2VsbFZDdXN0b21DbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgpIGlkID0gJ3N1a3UtbWF0Y2gtY2hpcCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19