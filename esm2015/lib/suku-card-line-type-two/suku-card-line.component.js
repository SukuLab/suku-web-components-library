/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuCardLineTypeTwoComponent {
    constructor() {
        this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
        this.iconOne = '';
        this.iconTwo = '';
        this.customclass = '';
        this.customImgclass = '';
        this.customIconclass = 'text-center';
        this.bgColor = '';
        this.imageColSize = "col-sm-1 pt-1 pl-2";
        this.txtcolsize = "col-sm-4 pl-sm-5 pt-2 mt-1";
        this.txttwocolsize = "col-sm-2 pt-2 pl-lg-2 pr-lg-2 mt-1";
        this.txtthreecolsize = "col-sm-3 pt-2 mt-1";
        this.titleOne = 'Title One';
        this.titleOneColor = 'black';
        this.titleOneWeight = '600';
        this.titleOneSize = '14';
        this.titleOnecustomclass = '';
        this.contentOne = '$100';
        this.contentOneColor = '#3e3e3e';
        this.contentOneWeight = '500';
        this.contentOneSize = '14';
        this.contentOnecustomclass = '';
        this.contentTwo = 'John Smith';
        this.contentTwoColor = '#3e3e3e';
        this.contentTwoWeight = '500';
        this.contentTwoSize = '14';
        this.contentTwocustomclass = '';
        this.subTitleTwo = 'SOLD BY';
        this.subTitleTwoColor = '#b6b6b6';
        this.subTitleTwoWeight = '500';
        this.subTitleTwoSize = '12';
        this.subTitleTwocustomclass = '';
        this.subTitleThree = 'EXPIRY DATE';
        this.subTitleThreecolor = '#b6b6b6';
        this.subTitleThreeWeight = '500';
        this.subTitleThreeSize = '12';
        this.subTitleThreeClass = '';
        this.contentThree = '28 Nov 2018';
        this.contentThreeColor = '#3e3e3e';
        this.contentThreeWeight = '500';
        this.contentThreeSize = '14';
        this.contentThreecustomclass = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuCardLineTypeTwoComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-card-line-type-two',
                template: "<div class=\"col p-0\">\n  <div class=\"row card-line-bg p-3 m-3 {{customclass}}\" [style.background-color]=\"bgColor\">\n    <div [class]=\"imageColSize\">\n      <img [class]=\"customImgclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\n    </div>\n    <div class=\"col-sm-1\">\n      <img [class]=\"customIconclass\" [src]=\"iconOne\" alt=\"card-img\" width=\"50px\" height=\"50px\">\n    </div>\n    <div class=\"col-sm-1\">\n      <img [class]=\"customIconclass\" src=\"{{iconTwo}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\n    </div>\n    <div [class]=\"txtcolsize\">\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\"  [style.font-weight]=\"titleOneWeight\"\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\"  [style.font-weight]=\"contentOneWeight\" [style.color]=\"contentOneColor\">{{contentOne}}</h2>\n    </div>\n    <div [class]=\"txttwocolsize\">\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"  [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\"  [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\n    </div>\n    <div [class]=\"txtthreecolsize\">\n        <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"  [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\n        <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"  [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\n      </div>\n  </div>\n</div>\n",
                styles: ["h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}"]
            }] }
];
/** @nocollapse */
SukuCardLineTypeTwoComponent.ctorParameters = () => [];
SukuCardLineTypeTwoComponent.propDecorators = {
    image: [{ type: Input }],
    iconOne: [{ type: Input, args: ['icon-one',] }],
    iconTwo: [{ type: Input, args: ['icon-two',] }],
    msgStatus: [{ type: Input, args: ['msg-status',] }],
    customclass: [{ type: Input, args: ['customclass',] }],
    customImgclass: [{ type: Input, args: ['customImgclass',] }],
    customIconclass: [{ type: Input, args: ['custom-iconclass',] }],
    bgColor: [{ type: Input }],
    interest: [{ type: Input }],
    imageColSize: [{ type: Input }],
    txtcolsize: [{ type: Input }],
    txttwocolsize: [{ type: Input }],
    txtthreecolsize: [{ type: Input }],
    titleOne: [{ type: Input, args: ['title-one',] }],
    titleOneColor: [{ type: Input, args: ['title-one-color',] }],
    titleOneWeight: [{ type: Input, args: ['title-one-weight',] }],
    titleOneSize: [{ type: Input, args: ['title-one-size',] }],
    titleOnecustomclass: [{ type: Input, args: ['title-one-customclass',] }],
    contentOne: [{ type: Input, args: ['content-one',] }],
    contentOneColor: [{ type: Input, args: ['content-one-color',] }],
    contentOneWeight: [{ type: Input, args: ['content-one-weight',] }],
    contentOneSize: [{ type: Input, args: ['content-one-size',] }],
    contentOnecustomclass: [{ type: Input, args: ['content-one-customclass',] }],
    contentTwo: [{ type: Input, args: ['content-two',] }],
    contentTwoColor: [{ type: Input, args: ['content-two-color',] }],
    contentTwoWeight: [{ type: Input, args: ['content-two-weight',] }],
    contentTwoSize: [{ type: Input, args: ['content-two-size',] }],
    contentTwocustomclass: [{ type: Input, args: ['content-two-customclass',] }],
    subTitleTwo: [{ type: Input, args: ['sub-title-two',] }],
    subTitleTwoColor: [{ type: Input, args: ['sub-title-two-color',] }],
    subTitleTwoWeight: [{ type: Input, args: ['sub-title-two-weight',] }],
    subTitleTwoSize: [{ type: Input, args: ['sub-title-two-size',] }],
    subTitleTwocustomclass: [{ type: Input, args: ['sub-title-two-customclass',] }],
    subTitleThree: [{ type: Input, args: ['sub-title-three',] }],
    subTitleThreecolor: [{ type: Input, args: ['sub-title-three-color',] }],
    subTitleThreeWeight: [{ type: Input, args: ['sub-title-three-weight',] }],
    subTitleThreeSize: [{ type: Input, args: ['sub-title-three-size',] }],
    subTitleThreeClass: [{ type: Input, args: ['sub-title-threeclass',] }],
    contentThree: [{ type: Input, args: ['content-three',] }],
    contentThreeColor: [{ type: Input, args: ['content-three-color',] }],
    contentThreeWeight: [{ type: Input, args: ['content-three-widget',] }],
    contentThreeSize: [{ type: Input, args: ['content-three-size',] }],
    contentThreecustomclass: [{ type: Input, args: ['content-three-customclass',] }]
};
if (false) {
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.image;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.iconOne;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.iconTwo;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.msgStatus;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.customclass;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.customImgclass;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.customIconclass;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.bgColor;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.interest;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.imageColSize;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.txtcolsize;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.txttwocolsize;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.txtthreecolsize;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.titleOne;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.titleOneColor;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.titleOneWeight;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.titleOneSize;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.titleOnecustomclass;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentOne;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentOneColor;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentOneWeight;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentOneSize;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentOnecustomclass;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentTwo;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentTwoColor;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentTwoWeight;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentTwoSize;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentTwocustomclass;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.subTitleTwo;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.subTitleTwoColor;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.subTitleTwoWeight;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.subTitleTwoSize;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.subTitleTwocustomclass;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.subTitleThree;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.subTitleThreecolor;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.subTitleThreeWeight;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.subTitleThreeSize;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.subTitleThreeClass;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentThree;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentThreeColor;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentThreeWeight;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentThreeSize;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentThreecustomclass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jYXJkLWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY2FyZC1saW5lLXR5cGUtdHdvL3N1a3UtY2FyZC1saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLDRCQUE0QjtJQWdEdkM7UUEvQ1MsVUFBSyxHQUFHLGdKQUFnSixDQUFDO1FBQ2hKLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBRVYsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDZCxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNsQixvQkFBZSxHQUFHLGFBQWEsQ0FBQztRQUNsRCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBR2IsaUJBQVksR0FBRyxvQkFBb0IsQ0FBQztRQUNwQyxlQUFVLEdBQUcsNEJBQTRCLENBQUM7UUFDMUMsa0JBQWEsR0FBRyxvQ0FBb0MsQ0FBQztRQUNyRCxvQkFBZSxHQUFHLG9CQUFvQixDQUFDO1FBQzVCLGFBQVEsR0FBRyxXQUFXLENBQUM7UUFDakIsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFDdkIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDeEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDYix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDcEMsZUFBVSxHQUFHLE1BQU0sQ0FBQztRQUNkLG9CQUFlLEdBQUcsU0FBUyxDQUFDO1FBQzNCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUMzQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUNkLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUV4QyxlQUFVLEdBQUcsWUFBWSxDQUFDO1FBQ3BCLG9CQUFlLEdBQUcsU0FBUyxDQUFDO1FBQzNCLHFCQUFnQixH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QXNEOztJQUN0RCxzREFBaUQ7O0lBQ2hELDZEQUE2RDs7SUFFOUQsa0RBQWdEOztJQUNoRCx1REFBd0Q7O0lBQ3hELHdEQUFzRDs7SUFDdEQsc0RBQWlEOztJQUNoRCw2REFBNkQ7O0lBQzlELG1EQUFnRDs7SUFDaEQsd0RBQTJEOztJQUMzRCx5REFBeUQ7O0lBQ3pELHVEQUFvRDs7SUFDbkQsOERBQWdFOztJQUVqRSxxREFBd0Q7O0lBQ3hELDBEQUErRDs7SUFDL0QsMkRBQTZEOztJQUM3RCx5REFBd0Q7O0lBQ3ZELDBEQUF1RDs7SUFDeEQsb0RBQXFEOztJQUNyRCx5REFBNEQ7O0lBQzVELDBEQUEwRDs7SUFDMUQsd0RBQXFEOztJQUNwRCwrREFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1jYXJkLWxpbmUtdHlwZS10d28nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1jYXJkLWxpbmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWNhcmQtbGluZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VDYXJkTGluZVR5cGVUd29Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpbWFnZSA9ICdodHRwczovL2VuY3J5cHRlZC10Ym4xLmdzdGF0aWMuY29tL3Nob3BwaW5nP3E9dGJuOkFOZDlHY1NUcXo2NEEyWGo1NGY1djQ0ckQ5dk5VcXlUWHo1YzByN3pUbGZoMThpZG95VVlHSDhoRjUxcFA2X2Vmb2RuYWpDdVlWQjRva2NNblQwJnVzcXA9Q0FjJztcblx0QElucHV0KCdpY29uLW9uZScpIGljb25PbmUgPSAnJztcblx0QElucHV0KCdpY29uLXR3bycpIGljb25Ud28gPSAnJztcblx0QElucHV0KCdtc2ctc3RhdHVzJykgbXNnU3RhdHVzO1xuXHRASW5wdXQoJ2N1c3RvbWNsYXNzJykgY3VzdG9tY2xhc3MgPSAnJztcblx0QElucHV0KCdjdXN0b21JbWdjbGFzcycpIGN1c3RvbUltZ2NsYXNzID0gJyc7XG5cdEBJbnB1dCgnY3VzdG9tLWljb25jbGFzcycpIGN1c3RvbUljb25jbGFzcyA9ICd0ZXh0LWNlbnRlcic7XG5cdEBJbnB1dCgpIGJnQ29sb3IgPSAnJztcblxuXHRASW5wdXQoKSBpbnRlcmVzdDtcblx0QElucHV0KCkgaW1hZ2VDb2xTaXplID0gXCJjb2wtc20tMSBwdC0xIHBsLTJcIjtcblx0QElucHV0KCkgdHh0Y29sc2l6ZSA9IFwiY29sLXNtLTQgcGwtc20tNSBwdC0yIG10LTFcIjtcblx0QElucHV0KCkgdHh0dHdvY29sc2l6ZSA9IFwiY29sLXNtLTIgcHQtMiBwbC1sZy0yIHByLWxnLTIgbXQtMVwiO1xuXHRASW5wdXQoKSB0eHR0aHJlZWNvbHNpemUgPSBcImNvbC1zbS0zIHB0LTIgbXQtMVwiO1xuXHRASW5wdXQoJ3RpdGxlLW9uZScpIHRpdGxlT25lID0gJ1RpdGxlIE9uZSc7XG5cdEBJbnB1dCgndGl0bGUtb25lLWNvbG9yJykgdGl0bGVPbmVDb2xvciA9ICdibGFjayc7XG5cdEBJbnB1dCgndGl0bGUtb25lLXdlaWdodCcpIHRpdGxlT25lV2VpZ2h0ID0gJzYwMCc7XG4gIEBJbnB1dCgndGl0bGUtb25lLXNpemUnKSB0aXRsZU9uZVNpemUgPSAnMTQnO1xuICBASW5wdXQoJ3RpdGxlLW9uZS1jdXN0b21jbGFzcycpIHRpdGxlT25lY3VzdG9tY2xhc3MgPSAnJztcblx0QElucHV0KCdjb250ZW50LW9uZScpIGNvbnRlbnRPbmUgPSAnJDEwMCc7XG5cdEBJbnB1dCgnY29udGVudC1vbmUtY29sb3InKSBjb250ZW50T25lQ29sb3IgPSAnIzNlM2UzZSc7XG5cdEBJbnB1dCgnY29udGVudC1vbmUtd2VpZ2h0JykgY29udGVudE9uZVdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoJ2NvbnRlbnQtb25lLXNpemUnKSBjb250ZW50T25lU2l6ZSA9ICcxNCc7XG4gIEBJbnB1dCgnY29udGVudC1vbmUtY3VzdG9tY2xhc3MnKSBjb250ZW50T25lY3VzdG9tY2xhc3MgPSAnJztcblxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvJykgY29udGVudFR3byA9ICdKb2huIFNtaXRoJztcblx0QElucHV0KCdjb250ZW50LXR3by1jb2xvcicpIGNvbnRlbnRUd29Db2xvciA9ICcjM2UzZTNlJztcblx0QElucHV0KCdjb250ZW50LXR3by13ZWlnaHQnKSBjb250ZW50VHdvV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgnY29udGVudC10d28tc2l6ZScpIGNvbnRlbnRUd29TaXplID0gJzE0JztcbiAgQElucHV0KCdjb250ZW50LXR3by1jdXN0b21jbGFzcycpIGNvbnRlbnRUd29jdXN0b21jbGFzcyA9ICcnO1xuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28nKSBzdWJUaXRsZVR3byA9ICdTT0xEIEJZJztcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLWNvbG9yJykgc3ViVGl0bGVUd29Db2xvciA9ICcjYjZiNmI2Jztcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLXdlaWdodCcpIHN1YlRpdGxlVHdvV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by1zaXplJykgc3ViVGl0bGVUd29TaXplID0gJzEyJztcbiAgQElucHV0KCdzdWItdGl0bGUtdHdvLWN1c3RvbWNsYXNzJykgc3ViVGl0bGVUd29jdXN0b21jbGFzcyA9ICcnO1xuXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlJykgc3ViVGl0bGVUaHJlZSA9ICdFWFBJUlkgREFURSc7XG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLWNvbG9yJykgc3ViVGl0bGVUaHJlZWNvbG9yID0gJyNiNmI2YjYnO1xuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZS13ZWlnaHQnKSBzdWJUaXRsZVRocmVlV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLXNpemUnKSBzdWJUaXRsZVRocmVlU2l6ZSA9ICcxMic7XG4gIEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlY2xhc3MnKSBzdWJUaXRsZVRocmVlQ2xhc3MgPSAnJztcblx0QElucHV0KCdjb250ZW50LXRocmVlJykgY29udGVudFRocmVlID0gJzI4IE5vdiAyMDE4Jztcblx0QElucHV0KCdjb250ZW50LXRocmVlLWNvbG9yJykgY29udGVudFRocmVlQ29sb3IgPSAnIzNlM2UzZSc7XG5cdEBJbnB1dCgnY29udGVudC10aHJlZS13aWRnZXQnKSBjb250ZW50VGhyZWVXZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCdjb250ZW50LXRocmVlLXNpemUnKSBjb250ZW50VGhyZWVTaXplID0gJzE0JztcbiAgQElucHV0KCdjb250ZW50LXRocmVlLWN1c3RvbWNsYXNzJykgY29udGVudFRocmVlY3VzdG9tY2xhc3MgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==