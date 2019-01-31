/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<div [class]=\"customclass\">\r\n  <div class=\"col p-0\">\r\n    <div class=\"col-sm-12 p-0 bg-white text-center col-xs-12 match-chip-shadow rounded-0\">\r\n      <a id=\"matchhun\">\r\n        <img (click)=\"match.emit()\" src=\"{{image}}\"  class=\"m-1\" width=\"75%\" height=\"120px\" alt=\"Image\">\r\n      </a>\r\n      <br>\r\n      <div class=\"col-sm-12 p-0 border-top-box pt-3 text-center \">\r\n\t\t\t\t <h2 [style.font-size.px]=\"listNameSize\" [class]=\"listCustomClass\" id=\"{{id}}\" [style.font-weight]=\"listWeight\" [style.color]=\"listColor\">\r\n          {{listName}}\r\n\t\t\t\t</h2>\r\n\t\t\t\t<h2 [style.font-size.px]=\"prizeSize\" [class]=\"prizeCustomClass\" id=\"{{id}}\" [style.font-weight]=\"prizeWeight\" [style.color]=\"prizeColor\">\r\n\t\t\t\t{{prize}}\r\n\t\t  \t</h2>\r\n\t\t\t\t<div class=\"pt-2\">\r\n\t\t\t\t<h2 [style.font-size.px]=\"dateSize\" [class]=\"dateCustomClass\" id=\"{{id}}\" [style.font-weight]=\"dateWeight\" [style.color]=\"dateColor\">\r\n          {{date}}\r\n\t\t\t\t</h2>\r\n\t\t\t\t<h2 [style.font-size.px]=\"dateVSize\" [class]=\"dateVCustomClass\" id=\"{{id}}\" [style.font-weight]=\"dateVWeight\" [style.color]=\"dateVColor\">\r\n\t\t\t\t{{dateV}}\r\n\t\t\t\t</h2>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"pt-2 pb-3\">\r\n\t\t\t \t<h2 [style.font-size.px]=\"sellSize\" [class]=\"sellCustomClass\" id=\"{{id}}\" [style.font-weight]=\"sellWeight\" [style.color]=\"sellColor\">\r\n\t\t\t\t{{sell}}\r\n\t\t   \t</h2>\r\n\t\t\t   <h2 [style.font-size.px]=\"sellVSize\" [class]=\"sellVCustomClass\" id=\"{{id}}\" [style.font-weight]=\"sellVWeight\" [style.color]=\"sellVColor\">\r\n\t\t    \t{{sellV}}\r\n\t\t\t   </h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tYXRjaC1jaGlwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LW1hdGNoLWNoaXAvc3VrdS1tYXRjaC1jaGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksR0FBSSxNQUFNLGVBQWUsQ0FBQztBQU9qRixNQUFNLE9BQU8sc0JBQXNCO0lBb0NqQztRQW5DUyxVQUFLLEdBQUcscUNBQXFDLENBQUM7UUFDOUMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDeEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztRQUM1QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxNQUFNLENBQUM7UUFDMUIsU0FBSSxHQUFHLGFBQWEsQ0FBQztRQUNyQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixVQUFLLEdBQUcsYUFBYSxDQUFDO1FBQ3RCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQUNoQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixVQUFLLEdBQUcsWUFBWSxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsT0FBRSxHQUFHLGlCQUFpQixDQUFDO0lBRWYsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBNUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixrdURBQStDOzthQUVoRDs7Ozs7b0JBRUUsS0FBSztvQkFDTixNQUFNOzBCQUNOLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzs4QkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7K0JBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzsrQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7aUJBQ0wsS0FBSzs7OztJQWpDTCx1Q0FBdUQ7O0lBQ3hELHVDQUFxQzs7SUFDckMsNkNBQWlDOztJQUNqQyw4Q0FBNkI7O0lBQzdCLDRDQUE0Qjs7SUFDNUIsMkNBQTZCOztJQUM3QiwwQ0FBcUM7O0lBQ3JDLGlEQUE4Qjs7SUFDOUIsdUNBQTJCOztJQUMzQiwyQ0FBMEI7O0lBQzFCLDZDQUE2Qjs7SUFDN0IsNENBQWdDOztJQUNoQyxrREFBbUM7O0lBQ25DLHNDQUE4Qjs7SUFDOUIsMENBQXlCOztJQUN6Qiw0Q0FBNEI7O0lBQzVCLDJDQUErQjs7SUFDL0IsaURBQThCOztJQUM5Qix1Q0FBK0I7O0lBQy9CLDJDQUEwQjs7SUFDMUIsNkNBQTZCOztJQUM3Qiw0Q0FBZ0M7O0lBQ2hDLGtEQUErQjs7SUFDL0Isc0NBQXlCOztJQUN6QiwwQ0FBeUI7O0lBQ3pCLDRDQUE0Qjs7SUFDNUIsMkNBQStCOztJQUMvQixpREFBOEI7O0lBQzlCLHVDQUE4Qjs7SUFDOUIsMkNBQTBCOztJQUMxQiw2Q0FBNkI7O0lBQzdCLDRDQUFnQzs7SUFDaEMsa0RBQStCOztJQUMvQixvQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1tYXRjaC1jaGlwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1tYXRjaC1jaGlwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LW1hdGNoLWNoaXAuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdU1hdGNoQ2hpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaW1hZ2UgPSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9tYW5hZ2VUcmFjay5wbmcnO1xyXG5cdEBPdXRwdXQoKSBtYXRjaCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRASW5wdXQoKSBjdXN0b21jbGFzcyA9ICdjb2wgcC0wJztcclxuXHRASW5wdXQoKSBsaXN0TmFtZVNpemUgPSAnMTYnO1xyXG5cdEBJbnB1dCgpIGxpc3RXZWlnaHQgPSAnNjAwJztcclxuXHRASW5wdXQoKSBsaXN0Q29sb3IgPSAnYmxhY2snO1xyXG5cdEBJbnB1dCgpIGxpc3ROYW1lID0gJ1N1cGVyIENvbXB1dGVyJztcclxuXHRASW5wdXQoKSBsaXN0Q3VzdG9tQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoKSBwcml6ZSA9ICcxMCBTVUtVJztcclxuXHRASW5wdXQoKSBwcml6ZVNpemUgPSAnMTQnO1xyXG5cdEBJbnB1dCgpIHByaXplV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCkgcHJpemVDb2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoKSBwcml6ZUN1c3RvbUNsYXNzID0gJ21iLTAnO1xyXG5cdEBJbnB1dCgpIGRhdGUgPSAnRVhQSVJZIERBVEUnO1xyXG5cdEBJbnB1dCgpIGRhdGVTaXplID0gJzEyJztcclxuXHRASW5wdXQoKSBkYXRlV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCkgZGF0ZUNvbG9yID0gJyNiNmI2YjYnO1xyXG5cdEBJbnB1dCgpIGRhdGVDdXN0b21DbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgpIGRhdGVWID0gJzI4IE5vdiAyMDE4JztcclxuXHRASW5wdXQoKSBkYXRlVlNpemUgPSAnMTQnO1xyXG5cdEBJbnB1dCgpIGRhdGVWV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCkgZGF0ZVZDb2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoKSBkYXRlVkN1c3RvbUNsYXNzID0gJyc7XHJcblx0QElucHV0KCkgc2VsbCA9ICdTRUxMRVInO1xyXG5cdEBJbnB1dCgpIHNlbGxTaXplID0gJzEyJztcclxuXHRASW5wdXQoKSBzZWxsV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCkgc2VsbENvbG9yID0gJyNiNmI2YjYnO1xyXG5cdEBJbnB1dCgpIHNlbGxDdXN0b21DbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgpIHNlbGxWID0gJ0pvaG4gU21pdGgnO1xyXG5cdEBJbnB1dCgpIHNlbGxWU2l6ZSA9ICcxNCc7XHJcblx0QElucHV0KCkgc2VsbFZXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoKSBzZWxsVkNvbG9yID0gJyMzZTNlM2UnO1xyXG5cdEBJbnB1dCgpIHNlbGxWQ3VzdG9tQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoKSBpZCA9ICdzdWt1LW1hdGNoLWNoaXAnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==