/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuBidTagComponent = /** @class */ (function () {
    function SukuBidTagComponent() {
        this.prize = '$100';
        this.prizeSize = '50';
        this.prizeWeight = '500';
        this.prizeColor = 'white';
        this.prizeCustomClass = 'mb-0';
        this.unit = '/ UNIT';
        this.unitSize = '14';
        this.unitWeight = '500';
        this.unitColor = 'white';
        this.unitCustomClass = 'mt-3 pt-5 mb-0 ml-3';
        this.qContent = '100 cases / box: 200 boxes';
        this.qSize = '15';
        this.qWeight = '500';
        this.qColor = 'white';
        this.qCustomClass = '';
        this.pContent = '$40,000 total (80,000 SUKU)';
        this.pSize = '15';
        this.pWeight = '500';
        this.pColor = 'white';
        this.pCustomClass = 'mt-1 pb-2';
        this.bidtagclass = 'col p-2 suku-big-tag pl-5';
        this.id = 'suku-big-tag';
    }
    /**
     * @return {?}
     */
    SukuBidTagComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuBidTagComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-bid-tag',
                    template: "<div class=\"{{bidtagclass}}\">\n  <span class=\"row pr-1 pl-3\">\n    <h1 [style.font-size.px]=\"prizeSize\" [class]=\"prizeCustomClass\" [style.font-weight]=\"prizeWeight\"\n      [style.color]=\"prizeColor\" id=\"{{id}}\">\n      {{prize}}\n    </h1>\n    <h2 [style.font-size.px]=\"unitSize\" [class]=\"unitCustomClass\" id=\"{{id}}\" [style.font-weight]=\"unitWeight\"\n      [style.color]=\"unitColor\">\n      {{unit}}\n    </h2>\n  </span>\n  <span>\n    <h1 [style.font-size.px]=\"qSize\" [class]=\"qCustomClass\" [style.font-weight]=\"qWeight\" [style.color]=\"qColor\"\n      id=\"{{id}}\">\n      {{qContent}}\n    </h1>\n    <h1 [style.font-size.px]=\"pSize\" [class]=\"pCustomClass\" [style.font-weight]=\"pWeight\" [style.color]=\"pColor\"\n      id=\"{{id}}\">\n      {{pContent}}\n    </h1>\n  </span>\n</div>",
                    styles: [".suku-big-tag{background-color:#35393e;border-radius:0 40px 0 0;border-left:6px solid #a7bf2e}.suku-big-tag-org{background-color:#35393e;border-radius:0 40px 0 0;border-left:6px solid #000}h1{font-family:Poppins,sans-serif!important;font-size:16px;font-weight:400!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-all!important}h2{font-family:Poppins,sans-serif!important;font-size:16px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6!important;word-break:break-all!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuBidTagComponent.ctorParameters = function () { return []; };
    SukuBidTagComponent.propDecorators = {
        prize: [{ type: Input }],
        prizeSize: [{ type: Input }],
        prizeWeight: [{ type: Input }],
        prizeColor: [{ type: Input }],
        prizeCustomClass: [{ type: Input }],
        unit: [{ type: Input }],
        unitSize: [{ type: Input }],
        unitWeight: [{ type: Input }],
        unitColor: [{ type: Input }],
        unitCustomClass: [{ type: Input }],
        qContent: [{ type: Input }],
        qSize: [{ type: Input }],
        qWeight: [{ type: Input }],
        qColor: [{ type: Input }],
        qCustomClass: [{ type: Input }],
        pContent: [{ type: Input }],
        pSize: [{ type: Input }],
        pWeight: [{ type: Input }],
        pColor: [{ type: Input }],
        pCustomClass: [{ type: Input }],
        bidtagclass: [{ type: Input }],
        id: [{ type: Input }]
    };
    return SukuBidTagComponent;
}());
export { SukuBidTagComponent };
if (false) {
    /** @type {?} */
    SukuBidTagComponent.prototype.prize;
    /** @type {?} */
    SukuBidTagComponent.prototype.prizeSize;
    /** @type {?} */
    SukuBidTagComponent.prototype.prizeWeight;
    /** @type {?} */
    SukuBidTagComponent.prototype.prizeColor;
    /** @type {?} */
    SukuBidTagComponent.prototype.prizeCustomClass;
    /** @type {?} */
    SukuBidTagComponent.prototype.unit;
    /** @type {?} */
    SukuBidTagComponent.prototype.unitSize;
    /** @type {?} */
    SukuBidTagComponent.prototype.unitWeight;
    /** @type {?} */
    SukuBidTagComponent.prototype.unitColor;
    /** @type {?} */
    SukuBidTagComponent.prototype.unitCustomClass;
    /** @type {?} */
    SukuBidTagComponent.prototype.qContent;
    /** @type {?} */
    SukuBidTagComponent.prototype.qSize;
    /** @type {?} */
    SukuBidTagComponent.prototype.qWeight;
    /** @type {?} */
    SukuBidTagComponent.prototype.qColor;
    /** @type {?} */
    SukuBidTagComponent.prototype.qCustomClass;
    /** @type {?} */
    SukuBidTagComponent.prototype.pContent;
    /** @type {?} */
    SukuBidTagComponent.prototype.pSize;
    /** @type {?} */
    SukuBidTagComponent.prototype.pWeight;
    /** @type {?} */
    SukuBidTagComponent.prototype.pColor;
    /** @type {?} */
    SukuBidTagComponent.prototype.pCustomClass;
    /** @type {?} */
    SukuBidTagComponent.prototype.bidtagclass;
    /** @type {?} */
    SukuBidTagComponent.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJpZC10YWcvc3VrdS1iaWQtdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUE2QkU7UUF2QlMsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUNoQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxPQUFPLENBQUM7UUFDckIscUJBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQzFCLFNBQUksR0FBRyxRQUFRLENBQUM7UUFDaEIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxPQUFPLENBQUM7UUFDcEIsb0JBQWUsR0FBRyxxQkFBcUIsQ0FBQztRQUN4QyxhQUFRLEdBQUcsNEJBQTRCLENBQUM7UUFDeEMsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUNqQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQUcsNkJBQTZCLENBQUM7UUFDekMsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUNqQixpQkFBWSxHQUFHLFdBQVcsQ0FBQztRQUMzQixnQkFBVyxHQUFHLDJCQUEyQixDQUFDO1FBQzFDLE9BQUUsR0FBRyxjQUFjLENBQUM7SUFFWixDQUFDOzs7O0lBRWpCLHNDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQWhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLHMwQkFBNEM7O2lCQUU3Qzs7Ozs7d0JBRUUsS0FBSzs0QkFDTixLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzttQ0FDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7a0NBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzsrQkFDTCxLQUFLOzhCQUNMLEtBQUs7cUJBQ0wsS0FBSzs7SUFPUCwwQkFBQztDQUFBLEFBbENELElBa0NDO1NBN0JZLG1CQUFtQjs7O0lBQzlCLG9DQUF3Qjs7SUFDekIsd0NBQTBCOztJQUMxQiwwQ0FBNkI7O0lBQzdCLHlDQUE4Qjs7SUFDOUIsK0NBQW1DOztJQUNuQyxtQ0FBeUI7O0lBQ3pCLHVDQUF5Qjs7SUFDekIseUNBQTRCOztJQUM1Qix3Q0FBNkI7O0lBQzdCLDhDQUFpRDs7SUFDakQsdUNBQWlEOztJQUNqRCxvQ0FBc0I7O0lBQ3RCLHNDQUF5Qjs7SUFDekIscUNBQTBCOztJQUMxQiwyQ0FBMkI7O0lBQzNCLHVDQUFrRDs7SUFDbEQsb0NBQXNCOztJQUN0QixzQ0FBeUI7O0lBQ3pCLHFDQUEwQjs7SUFDMUIsMkNBQW9DOztJQUNwQywwQ0FBbUQ7O0lBQ25ELGlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWJpZC10YWcnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1iaWQtdGFnLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1iaWQtdGFnLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUJpZFRhZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHByaXplID0gJyQxMDAnO1xuXHRASW5wdXQoKSBwcml6ZVNpemUgPSAnNTAnO1xuXHRASW5wdXQoKSBwcml6ZVdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoKSBwcml6ZUNvbG9yID0gJ3doaXRlJztcblx0QElucHV0KCkgcHJpemVDdXN0b21DbGFzcyA9ICdtYi0wJztcblx0QElucHV0KCkgdW5pdCA9ICcvIFVOSVQnO1xuXHRASW5wdXQoKSB1bml0U2l6ZSA9ICcxNCc7XG5cdEBJbnB1dCgpIHVuaXRXZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCkgdW5pdENvbG9yID0gJ3doaXRlJztcblx0QElucHV0KCkgdW5pdEN1c3RvbUNsYXNzID0gJ210LTMgcHQtNSBtYi0wIG1sLTMnO1xuXHRASW5wdXQoKSBxQ29udGVudCA9ICcxMDAgY2FzZXMgLyBib3g6IDIwMCBib3hlcyc7XG5cdEBJbnB1dCgpIHFTaXplID0gJzE1Jztcblx0QElucHV0KCkgcVdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoKSBxQ29sb3IgPSAnd2hpdGUnO1xuXHRASW5wdXQoKSBxQ3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCkgcENvbnRlbnQgPSAnJDQwLDAwMCB0b3RhbCAoODAsMDAwIFNVS1UpJztcblx0QElucHV0KCkgcFNpemUgPSAnMTUnO1xuXHRASW5wdXQoKSBwV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgpIHBDb2xvciA9ICd3aGl0ZSc7XG5cdEBJbnB1dCgpIHBDdXN0b21DbGFzcyA9ICdtdC0xIHBiLTInO1xuXHRASW5wdXQoKSBiaWR0YWdjbGFzcyA9ICdjb2wgcC0yIHN1a3UtYmlnLXRhZyBwbC01Jztcblx0QElucHV0KCkgaWQgPSAnc3VrdS1iaWctdGFnJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==