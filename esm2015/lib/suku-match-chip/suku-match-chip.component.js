/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-match-chip/suku-match-chip.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
    ngOnInit() { }
}
SukuMatchChipComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-match-chip',
                template: "<div [class]=\"customclass\">\r\n  <div class=\"col p-0\">\r\n    <div class=\"col-sm-12 p-0 bg-white text-center col-xs-12 match-chip-shadow rounded-0\">\r\n      <a id=\"match-chip\">\r\n        <img (click)=\"match.emit()\" src=\"{{image}}\" id=\"listImg{{imgId}}\" class=\"m-1 p-2 pt-3 pb-3 c-pointer\"\r\n          width=\"90%\" height=\"120px\" alt=\"Image\" />\r\n      </a>\r\n      <br>\r\n      <div class=\"col-sm-12 p-0 pl-3 pr-3 border-top-box pt-4 text-center \">\r\n        <h2 [style.font-size.px]=\"listNameSize\" [class]=\"listCustomClass\" id=\"{{id}}\" [style.font-weight]=\"listWeight\"\r\n          [style.color]=\"listColor\">\r\n          {{listName}}\r\n        </h2>\r\n        <h2 [style.font-size.px]=\"prizeSize\" [class]=\"prizeCustomClass\" id=\"{{id}}\" [style.font-weight]=\"prizeWeight\"\r\n          [style.color]=\"prizeColor\">\r\n          {{prize}}\r\n        </h2>\r\n        <div class=\"pt-4\">\r\n          <h2 [style.font-size.px]=\"dateSize\" [class]=\"dateCustomClass\" id=\"{{id}}\" [style.font-weight]=\"dateWeight\"\r\n            [style.color]=\"dateColor\">\r\n            {{date}}\r\n          </h2>\r\n          <h2 [style.font-size.px]=\"dateVSize\" [class]=\"dateVCustomClass\" id=\"{{id}}\" [style.font-weight]=\"dateVWeight\"\r\n            [style.color]=\"dateVColor\">\r\n            {{dateV}}\r\n          </h2>\r\n        </div>\r\n        <div class=\"pt-3 pb-3\">\r\n          <h2 [style.font-size.px]=\"sellSize\" [class]=\"sellCustomClass\" id=\"{{id}}\" [style.font-weight]=\"sellWeight\"\r\n            [style.color]=\"sellColor\">\r\n            {{sell}}\r\n          </h2>\r\n          <h2 (click)=\"userAction.emit()\" [style.font-size.px]=\"sellVSize\" [class]=\"sellVCustomClass\"\r\n            id=\"sellerName{{sellerid}}\" [style.font-weight]=\"sellVWeight\" [style.color]=\"sellVColor\">\r\n            {{sellV}}\r\n          </h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.border-top-box{border-top:1px solid #dee2e670!important}.match-chip-shadow{box-shadow:0 2px 4px 0 rgba(0,0,0,.05);height:340px}.default{width:200px}h2{font-family:var(--suku-secondary-font);font-size:14px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;word-break:break-word!important;margin-bottom:0!important}.c-pointer{cursor:pointer!important}.c-pointer:hover{font-weight:900!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tYXRjaC1jaGlwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LW1hdGNoLWNoaXAvc3VrdS1tYXRjaC1jaGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0UsTUFBTSxPQUFPLHNCQUFzQjtJQXVDakM7UUF0Q1MsVUFBSyxHQUFHLHFDQUFxQyxDQUFDO1FBQzlDLFVBQUssR0FBRyxRQUFRLENBQUM7UUFDaEIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0IsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDeEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztRQUM1QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxXQUFXLENBQUM7UUFDL0IsU0FBSSxHQUFHLHlCQUF5QixDQUFDO1FBQ2pDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLFVBQUssR0FBRyxhQUFhLENBQUM7UUFDdEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixlQUFVLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUN0QixTQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLFVBQUssR0FBRyxZQUFZLENBQUM7UUFDckIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixlQUFVLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLHFCQUFnQixHQUFHLFdBQVcsQ0FBQztRQUMvQixPQUFFLEdBQUcsaUJBQWlCLENBQUM7UUFDdkIsYUFBUSxHQUFHLEdBQUcsQ0FBQztJQUVULENBQUM7Ozs7SUFFaEIsUUFBUSxLQUFJLENBQUM7OztZQTlDZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IscThEQUErQzs7YUFFaEQ7Ozs7O29CQUVFLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxNQUFNO3lCQUNOLE1BQU07MEJBQ04sS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzhCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzsrQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7K0JBQ0wsS0FBSztpQkFDTCxLQUFLO3VCQUNMLEtBQUs7Ozs7SUFwQ04sdUNBQXVEOztJQUN2RCx1Q0FBMEI7O0lBQzFCLHVDQUFxQzs7SUFDckMsNENBQTBDOztJQUMxQyw2Q0FBaUM7O0lBQ2pDLDhDQUE2Qjs7SUFDN0IsNENBQTRCOztJQUM1QiwyQ0FBNkI7O0lBQzdCLDBDQUFxQzs7SUFDckMsaURBQThCOztJQUM5Qix1Q0FBMkI7O0lBQzNCLDJDQUEwQjs7SUFDMUIsNkNBQTZCOztJQUM3Qiw0Q0FBZ0M7O0lBQ2hDLGtEQUF3Qzs7SUFDeEMsc0NBQTBDOztJQUMxQywwQ0FBeUI7O0lBQ3pCLDRDQUE0Qjs7SUFDNUIsMkNBQStCOztJQUMvQixpREFBOEI7O0lBQzlCLHVDQUErQjs7SUFDL0IsMkNBQTBCOztJQUMxQiw2Q0FBNkI7O0lBQzdCLDRDQUFnQzs7SUFDaEMsa0RBQStCOztJQUMvQixzQ0FBMEI7O0lBQzFCLDBDQUF5Qjs7SUFDekIsNENBQTRCOztJQUM1QiwyQ0FBK0I7O0lBQy9CLGlEQUE4Qjs7SUFDOUIsdUNBQThCOztJQUM5QiwyQ0FBMEI7O0lBQzFCLDZDQUE2Qjs7SUFDN0IsNENBQWdDOztJQUNoQyxrREFBd0M7O0lBQ3hDLG9DQUFnQzs7SUFDaEMsMENBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LW1hdGNoLWNoaXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LW1hdGNoLWNoaXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtbWF0Y2gtY2hpcC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1TWF0Y2hDaGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpbWFnZSA9ICcuLi8uLi9hc3NldHMvaW1hZ2VzL21hbmFnZVRyYWNrLnBuZyc7XHJcbiAgQElucHV0KCkgaW1nSWQgPSAnaW1nLWlkJztcclxuICBAT3V0cHV0KCkgbWF0Y2ggPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHVzZXJBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCkgY3VzdG9tY2xhc3MgPSAnY29sIHAtMCc7XHJcbiAgQElucHV0KCkgbGlzdE5hbWVTaXplID0gJzE2JztcclxuICBASW5wdXQoKSBsaXN0V2VpZ2h0ID0gJzYwMCc7XHJcbiAgQElucHV0KCkgbGlzdENvbG9yID0gJ2JsYWNrJztcclxuICBASW5wdXQoKSBsaXN0TmFtZSA9ICdTdXBlciBDb21wdXRlcic7XHJcbiAgQElucHV0KCkgbGlzdEN1c3RvbUNsYXNzID0gJyc7XHJcbiAgQElucHV0KCkgcHJpemUgPSAnMTAgU1VLVSc7XHJcbiAgQElucHV0KCkgcHJpemVTaXplID0gJzE0JztcclxuICBASW5wdXQoKSBwcml6ZVdlaWdodCA9ICc1MDAnO1xyXG4gIEBJbnB1dCgpIHByaXplQ29sb3IgPSAnIzNlM2UzZSc7XHJcbiAgQElucHV0KCkgcHJpemVDdXN0b21DbGFzcyA9ICdtYi0wIHB0LTInO1xyXG4gIEBJbnB1dCgpIGRhdGUgPSAnTElTVElORyBFWFBJUkFUSU9OIERBVEUnO1xyXG4gIEBJbnB1dCgpIGRhdGVTaXplID0gJzEyJztcclxuICBASW5wdXQoKSBkYXRlV2VpZ2h0ID0gJzUwMCc7XHJcbiAgQElucHV0KCkgZGF0ZUNvbG9yID0gJyNiNmI2YjYnO1xyXG4gIEBJbnB1dCgpIGRhdGVDdXN0b21DbGFzcyA9ICcnO1xyXG4gIEBJbnB1dCgpIGRhdGVWID0gJzI4IE5vdiAyMDE4JztcclxuICBASW5wdXQoKSBkYXRlVlNpemUgPSAnMTQnO1xyXG4gIEBJbnB1dCgpIGRhdGVWV2VpZ2h0ID0gJzUwMCc7XHJcbiAgQElucHV0KCkgZGF0ZVZDb2xvciA9ICcjM2UzZTNlJztcclxuICBASW5wdXQoKSBkYXRlVkN1c3RvbUNsYXNzID0gJyc7XHJcbiAgQElucHV0KCkgc2VsbCA9ICdTT0xEIEJZJztcclxuICBASW5wdXQoKSBzZWxsU2l6ZSA9ICcxMic7XHJcbiAgQElucHV0KCkgc2VsbFdlaWdodCA9ICc1MDAnO1xyXG4gIEBJbnB1dCgpIHNlbGxDb2xvciA9ICcjYjZiNmI2JztcclxuICBASW5wdXQoKSBzZWxsQ3VzdG9tQ2xhc3MgPSAnJztcclxuICBASW5wdXQoKSBzZWxsViA9ICdKb2huIFNtaXRoJztcclxuICBASW5wdXQoKSBzZWxsVlNpemUgPSAnMTQnO1xyXG4gIEBJbnB1dCgpIHNlbGxWV2VpZ2h0ID0gJzUwMCc7XHJcbiAgQElucHV0KCkgc2VsbFZDb2xvciA9ICcjM2UzZTNlJztcclxuICBASW5wdXQoKSBzZWxsVkN1c3RvbUNsYXNzID0gJ2MtcG9pbnRlcic7XHJcbiAgQElucHV0KCkgaWQgPSAnc3VrdS1tYXRjaC1jaGlwJztcclxuICBASW5wdXQoKSBzZWxsZXJpZCA9ICcwJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuIl19