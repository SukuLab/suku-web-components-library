/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, } from '@angular/core';
export class SukuMatchChipComponent {
    constructor() {
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
    ngOnInit() {
    }
}
SukuMatchChipComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-match-chip',
                template: "<div [class]=\"customclass\">\r\n  <div class=\"col p-0\">\r\n    <div class=\"col-sm-12 p-0 bg-white text-center col-xs-12 match-chip-shadow rounded-0\">\r\n      <a id=\"match-chip\">\r\n        <img (click)=\"match.emit()\" src=\"{{image}}\" id=\"listImg{{imgId}}\" class=\"m-1 p-2 pt-3 pb-3 c-pointer\"\r\n          width=\"90%\" height=\"120px\" alt=\"Image\" />\r\n      </a>\r\n      <br>\r\n      <div class=\"col-sm-12 p-0 pl-3 pr-3 border-top-box pt-4 text-center \">\r\n        <h2 [style.font-size.px]=\"listNameSize\" [class]=\"listCustomClass\" id=\"{{id}}\" [style.font-weight]=\"listWeight\"\r\n          [style.color]=\"listColor\">\r\n          {{listName}}\r\n        </h2>\r\n        <h2 [style.font-size.px]=\"prizeSize\" [class]=\"prizeCustomClass\" id=\"{{id}}\" [style.font-weight]=\"prizeWeight\"\r\n          [style.color]=\"prizeColor\">\r\n          {{prize}}\r\n        </h2>\r\n        <div class=\"pt-4\">\r\n          <h2 [style.font-size.px]=\"dateSize\" [class]=\"dateCustomClass\" id=\"{{id}}\" [style.font-weight]=\"dateWeight\"\r\n            [style.color]=\"dateColor\">\r\n            {{date}}\r\n          </h2>\r\n          <h2 [style.font-size.px]=\"dateVSize\" [class]=\"dateVCustomClass\" id=\"{{id}}\" [style.font-weight]=\"dateVWeight\"\r\n            [style.color]=\"dateVColor\">\r\n            {{dateV}}\r\n          </h2>\r\n        </div>\r\n        <div class=\"pt-3 pb-3\">\r\n          <h2 [style.font-size.px]=\"sellSize\" [class]=\"sellCustomClass\" id=\"{{id}}\" [style.font-weight]=\"sellWeight\"\r\n            [style.color]=\"sellColor\">\r\n            {{sell}}\r\n          </h2>\r\n          <h2 (click)=\"userAction.emit()\" [style.font-size.px]=\"sellVSize\" [class]=\"sellVCustomClass\"\r\n            id=\"sellerName{{sellerid}}\" [style.font-weight]=\"sellVWeight\" [style.color]=\"sellVColor\">\r\n            {{sellV}}\r\n          </h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [".border-top-box{border-top:1px solid #dee2e670!important}.match-chip-shadow{box-shadow:0 2px 4px 0 rgba(0,0,0,.05);height:340px}.default{width:200px}h2{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;word-break:break-word!important;margin-bottom:0!important}.c-pointer{cursor:pointer!important}.c-pointer:hover{font-weight:900!important}"]
            }] }
];
/** @nocollapse */
SukuMatchChipComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tYXRjaC1jaGlwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LW1hdGNoLWNoaXAvc3VrdS1tYXRjaC1jaGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksR0FBSSxNQUFNLGVBQWUsQ0FBQztBQU9qRixNQUFNLE9BQU8sc0JBQXNCO0lBdUNqQztRQXRDUyxVQUFLLEdBQUcscUNBQXFDLENBQUM7UUFDOUMsVUFBSyxHQUFHLFFBQVEsQ0FBQztRQUNqQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUN4QixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxPQUFPLENBQUM7UUFDcEIsYUFBUSxHQUFHLGdCQUFnQixDQUFDO1FBQzVCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixlQUFVLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLHFCQUFnQixHQUFHLFdBQVcsQ0FBQztRQUMvQixTQUFJLEdBQUcseUJBQXlCLENBQUM7UUFDakMsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsVUFBSyxHQUFHLGFBQWEsQ0FBQztRQUN0QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxTQUFTLENBQUM7UUFDdkIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLFNBQUksR0FBRyxTQUFTLENBQUM7UUFDakIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsVUFBSyxHQUFHLFlBQVksQ0FBQztRQUNyQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxTQUFTLENBQUM7UUFDdkIscUJBQWdCLEdBQUcsV0FBVyxDQUFDO1FBQy9CLE9BQUUsR0FBRyxpQkFBaUIsQ0FBQztRQUN2QixhQUFRLEdBQUcsR0FBRyxDQUFDO0lBRVAsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBL0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixxOERBQStDOzthQUVoRDs7Ozs7b0JBRUUsS0FBSztvQkFDTCxLQUFLO29CQUNOLE1BQU07eUJBQ04sTUFBTTswQkFDTixLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7OEJBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7K0JBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzsrQkFDTCxLQUFLO2lCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7OztJQXBDTCx1Q0FBdUQ7O0lBQ3ZELHVDQUEwQjs7SUFDM0IsdUNBQXFDOztJQUNyQyw0Q0FBMEM7O0lBQzFDLDZDQUFpQzs7SUFDakMsOENBQTZCOztJQUM3Qiw0Q0FBNEI7O0lBQzVCLDJDQUE2Qjs7SUFDN0IsMENBQXFDOztJQUNyQyxpREFBOEI7O0lBQzlCLHVDQUEyQjs7SUFDM0IsMkNBQTBCOztJQUMxQiw2Q0FBNkI7O0lBQzdCLDRDQUFnQzs7SUFDaEMsa0RBQXdDOztJQUN4QyxzQ0FBMEM7O0lBQzFDLDBDQUF5Qjs7SUFDekIsNENBQTRCOztJQUM1QiwyQ0FBK0I7O0lBQy9CLGlEQUE4Qjs7SUFDOUIsdUNBQStCOztJQUMvQiwyQ0FBMEI7O0lBQzFCLDZDQUE2Qjs7SUFDN0IsNENBQWdDOztJQUNoQyxrREFBK0I7O0lBQy9CLHNDQUEwQjs7SUFDMUIsMENBQXlCOztJQUN6Qiw0Q0FBNEI7O0lBQzVCLDJDQUErQjs7SUFDL0IsaURBQThCOztJQUM5Qix1Q0FBOEI7O0lBQzlCLDJDQUEwQjs7SUFDMUIsNkNBQTZCOztJQUM3Qiw0Q0FBZ0M7O0lBQ2hDLGtEQUF3Qzs7SUFDeEMsb0NBQWdDOztJQUNoQywwQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1tYXRjaC1jaGlwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1tYXRjaC1jaGlwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LW1hdGNoLWNoaXAuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdU1hdGNoQ2hpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaW1hZ2UgPSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9tYW5hZ2VUcmFjay5wbmcnO1xyXG4gIEBJbnB1dCgpIGltZ0lkID0gJ2ltZy1pZCc7XHJcblx0QE91dHB1dCgpIG1hdGNoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSB1c2VyQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBJbnB1dCgpIGN1c3RvbWNsYXNzID0gJ2NvbCBwLTAnO1xyXG5cdEBJbnB1dCgpIGxpc3ROYW1lU2l6ZSA9ICcxNic7XHJcblx0QElucHV0KCkgbGlzdFdlaWdodCA9ICc2MDAnO1xyXG5cdEBJbnB1dCgpIGxpc3RDb2xvciA9ICdibGFjayc7XHJcblx0QElucHV0KCkgbGlzdE5hbWUgPSAnU3VwZXIgQ29tcHV0ZXInO1xyXG5cdEBJbnB1dCgpIGxpc3RDdXN0b21DbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgpIHByaXplID0gJzEwIFNVS1UnO1xyXG5cdEBJbnB1dCgpIHByaXplU2l6ZSA9ICcxNCc7XHJcblx0QElucHV0KCkgcHJpemVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoKSBwcml6ZUNvbG9yID0gJyMzZTNlM2UnO1xyXG5cdEBJbnB1dCgpIHByaXplQ3VzdG9tQ2xhc3MgPSAnbWItMCBwdC0yJztcclxuXHRASW5wdXQoKSBkYXRlID0gJ0xJU1RJTkcgRVhQSVJBVElPTiBEQVRFJztcclxuXHRASW5wdXQoKSBkYXRlU2l6ZSA9ICcxMic7XHJcblx0QElucHV0KCkgZGF0ZVdlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgpIGRhdGVDb2xvciA9ICcjYjZiNmI2JztcclxuXHRASW5wdXQoKSBkYXRlQ3VzdG9tQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoKSBkYXRlViA9ICcyOCBOb3YgMjAxOCc7XHJcblx0QElucHV0KCkgZGF0ZVZTaXplID0gJzE0JztcclxuXHRASW5wdXQoKSBkYXRlVldlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgpIGRhdGVWQ29sb3IgPSAnIzNlM2UzZSc7XHJcblx0QElucHV0KCkgZGF0ZVZDdXN0b21DbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgpIHNlbGwgPSAnU09MRCBCWSc7XHJcblx0QElucHV0KCkgc2VsbFNpemUgPSAnMTInO1xyXG5cdEBJbnB1dCgpIHNlbGxXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoKSBzZWxsQ29sb3IgPSAnI2I2YjZiNic7XHJcblx0QElucHV0KCkgc2VsbEN1c3RvbUNsYXNzID0gJyc7XHJcblx0QElucHV0KCkgc2VsbFYgPSAnSm9obiBTbWl0aCc7XHJcblx0QElucHV0KCkgc2VsbFZTaXplID0gJzE0JztcclxuXHRASW5wdXQoKSBzZWxsVldlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgpIHNlbGxWQ29sb3IgPSAnIzNlM2UzZSc7XHJcblx0QElucHV0KCkgc2VsbFZDdXN0b21DbGFzcyA9ICdjLXBvaW50ZXInO1xyXG5cdEBJbnB1dCgpIGlkID0gJ3N1a3UtbWF0Y2gtY2hpcCc7XHJcblx0QElucHV0KCkgc2VsbGVyaWQgPSAnMCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19