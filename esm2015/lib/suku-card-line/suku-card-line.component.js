/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuCardLineComponent {
    constructor() {
        this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
        this.chatReadIcon = '../assets/images/chat_read.png';
        this.chatUnreadIcon = '../assets/images/chat_unread.png';
        this.msgStatus = 'unRead';
        this.customclass = '';
        this.customIconclass = 'text-center';
        this.bgColor = '';
        this.imageColSize = 'col-sm-1 pt-1 pl-2';
        this.txtcolsize = 'col-sm-5 pl-4 pt-2 mt-1';
        this.txttwocolsize = 'col-sm-2 pt-2 mt-1';
        this.txtthreecolsize = 'col-sm-3 pt-2 mt-1';
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
SukuCardLineComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-card-line',
                template: "<div class=\"col p-0\">\r\n  <div class=\"row card-line-bg p-3 m-3 c-pointer\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img [class]=\"customclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus=='read'\">\r\n      <img [class]=\"customIconclass\" src=\"{{chatReadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus=='unRead'\">\r\n      <img [class]=\"customIconclass\" src=\"{{chatUnreadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n    </div>\r\n    <div [class]=\"txtcolsize\">\r\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\"  [style.font-weight]=\"titleOneWeight\"\r\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\"  [style.font-weight]=\"contentOneWeight\" [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n    </div>\r\n    <div [class]=\"txttwocolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"  [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\"  [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n    </div>\r\n    <div [class]=\"txtthreecolsize\">\r\n        <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"  [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n        <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"  [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n      </div>\r\n  </div>\r\n</div>\r\n",
                styles: ["h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}"]
            }] }
];
/** @nocollapse */
SukuCardLineComponent.ctorParameters = () => [];
SukuCardLineComponent.propDecorators = {
    image: [{ type: Input }],
    chatReadIcon: [{ type: Input, args: ['char-read-icon',] }],
    chatUnreadIcon: [{ type: Input, args: ['char-unread-icon',] }],
    msgStatus: [{ type: Input, args: ['msg-status',] }],
    customclass: [{ type: Input, args: ['customclass',] }],
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
    SukuCardLineComponent.prototype.image;
    /** @type {?} */
    SukuCardLineComponent.prototype.chatReadIcon;
    /** @type {?} */
    SukuCardLineComponent.prototype.chatUnreadIcon;
    /** @type {?} */
    SukuCardLineComponent.prototype.msgStatus;
    /** @type {?} */
    SukuCardLineComponent.prototype.customclass;
    /** @type {?} */
    SukuCardLineComponent.prototype.customIconclass;
    /** @type {?} */
    SukuCardLineComponent.prototype.bgColor;
    /** @type {?} */
    SukuCardLineComponent.prototype.interest;
    /** @type {?} */
    SukuCardLineComponent.prototype.imageColSize;
    /** @type {?} */
    SukuCardLineComponent.prototype.txtcolsize;
    /** @type {?} */
    SukuCardLineComponent.prototype.txttwocolsize;
    /** @type {?} */
    SukuCardLineComponent.prototype.txtthreecolsize;
    /** @type {?} */
    SukuCardLineComponent.prototype.titleOne;
    /** @type {?} */
    SukuCardLineComponent.prototype.titleOneColor;
    /** @type {?} */
    SukuCardLineComponent.prototype.titleOneWeight;
    /** @type {?} */
    SukuCardLineComponent.prototype.titleOneSize;
    /** @type {?} */
    SukuCardLineComponent.prototype.titleOnecustomclass;
    /** @type {?} */
    SukuCardLineComponent.prototype.contentOne;
    /** @type {?} */
    SukuCardLineComponent.prototype.contentOneColor;
    /** @type {?} */
    SukuCardLineComponent.prototype.contentOneWeight;
    /** @type {?} */
    SukuCardLineComponent.prototype.contentOneSize;
    /** @type {?} */
    SukuCardLineComponent.prototype.contentOnecustomclass;
    /** @type {?} */
    SukuCardLineComponent.prototype.contentTwo;
    /** @type {?} */
    SukuCardLineComponent.prototype.contentTwoColor;
    /** @type {?} */
    SukuCardLineComponent.prototype.contentTwoWeight;
    /** @type {?} */
    SukuCardLineComponent.prototype.contentTwoSize;
    /** @type {?} */
    SukuCardLineComponent.prototype.contentTwocustomclass;
    /** @type {?} */
    SukuCardLineComponent.prototype.subTitleTwo;
    /** @type {?} */
    SukuCardLineComponent.prototype.subTitleTwoColor;
    /** @type {?} */
    SukuCardLineComponent.prototype.subTitleTwoWeight;
    /** @type {?} */
    SukuCardLineComponent.prototype.subTitleTwoSize;
    /** @type {?} */
    SukuCardLineComponent.prototype.subTitleTwocustomclass;
    /** @type {?} */
    SukuCardLineComponent.prototype.subTitleThree;
    /** @type {?} */
    SukuCardLineComponent.prototype.subTitleThreecolor;
    /** @type {?} */
    SukuCardLineComponent.prototype.subTitleThreeWeight;
    /** @type {?} */
    SukuCardLineComponent.prototype.subTitleThreeSize;
    /** @type {?} */
    SukuCardLineComponent.prototype.subTitleThreeClass;
    /** @type {?} */
    SukuCardLineComponent.prototype.contentThree;
    /** @type {?} */
    SukuCardLineComponent.prototype.contentThreeColor;
    /** @type {?} */
    SukuCardLineComponent.prototype.contentThreeWeight;
    /** @type {?} */
    SukuCardLineComponent.prototype.contentThreeSize;
    /** @type {?} */
    SukuCardLineComponent.prototype.contentThreecustomclass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jYXJkLWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY2FyZC1saW5lL3N1a3UtY2FyZC1saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHFCQUFxQjtJQStDaEM7UUE5Q1MsVUFBSyxHQUFHLGdKQUFnSixDQUFDO1FBQzFJLGlCQUFZLEdBQUcsZ0NBQWdDLENBQUM7UUFDOUMsbUJBQWMsR0FBRyxrQ0FBa0MsQ0FBQztRQUMxRCxjQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ1osb0JBQWUsR0FBRyxhQUFhLENBQUM7UUFDbEQsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUdiLGlCQUFZLEdBQUcsb0JBQW9CLENBQUM7UUFDcEMsZUFBVSxHQUFHLHlCQUF5QixDQUFDO1FBQ3ZDLGtCQUFhLEdBQUcsb0JBQW9CLENBQUM7UUFDckMsb0JBQWUsR0FBRyxvQkFBb0IsQ0FBQztRQUM1QixhQUFRLEdBQUcsV0FBVyxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ2Isd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFDZCxvQkFBZSxHQUFHLFNBQVMsQ0FBQztRQUMzQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDM0IsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDZCwwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFFeEMsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUNwQixvQkFBZSxHQUFHLFNBQVMsQ0FBQztRQUMzQixxQkFBZ0IsR0FB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OUQsMkNBQWdEOztJQUNoRCxnREFBd0Q7O0lBQ3hELGlEQUFzRDs7SUFDdEQsK0NBQWlEOztJQUNoRCxzREFBNkQ7O0lBQzlELDRDQUFnRDs7SUFDaEQsaURBQTJEOztJQUMzRCxrREFBeUQ7O0lBQ3pELGdEQUFvRDs7SUFDbkQsdURBQWdFOztJQUVqRSw4Q0FBd0Q7O0lBQ3hELG1EQUErRDs7SUFDL0Qsb0RBQTZEOztJQUM3RCxrREFBd0Q7O0lBQ3ZELG1EQUF1RDs7SUFDeEQsNkNBQXFEOztJQUNyRCxrREFBNEQ7O0lBQzVELG1EQUEwRDs7SUFDMUQsaURBQXFEOztJQUNwRCx3REFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1jYXJkLWxpbmUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWNhcmQtbGluZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1jYXJkLWxpbmUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUNhcmRMaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpbWFnZSA9ICdodHRwczovL2VuY3J5cHRlZC10Ym4xLmdzdGF0aWMuY29tL3Nob3BwaW5nP3E9dGJuOkFOZDlHY1NUcXo2NEEyWGo1NGY1djQ0ckQ5dk5VcXlUWHo1YzByN3pUbGZoMThpZG95VVlHSDhoRjUxcFA2X2Vmb2RuYWpDdVlWQjRva2NNblQwJnVzcXA9Q0FjJztcclxuXHRASW5wdXQoJ2NoYXItcmVhZC1pY29uJykgY2hhdFJlYWRJY29uID0gJy4uL2Fzc2V0cy9pbWFnZXMvY2hhdF9yZWFkLnBuZyc7XHJcblx0QElucHV0KCdjaGFyLXVucmVhZC1pY29uJykgY2hhdFVucmVhZEljb24gPSAnLi4vYXNzZXRzL2ltYWdlcy9jaGF0X3VucmVhZC5wbmcnO1xyXG5cdEBJbnB1dCgnbXNnLXN0YXR1cycpIG1zZ1N0YXR1cyA9ICd1blJlYWQnO1xyXG5cdEBJbnB1dCgnY3VzdG9tY2xhc3MnKSBjdXN0b21jbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnY3VzdG9tLWljb25jbGFzcycpIGN1c3RvbUljb25jbGFzcyA9ICd0ZXh0LWNlbnRlcic7XHJcblx0QElucHV0KCkgYmdDb2xvciA9ICcnO1xyXG5cclxuXHRASW5wdXQoKSBpbnRlcmVzdDtcclxuXHRASW5wdXQoKSBpbWFnZUNvbFNpemUgPSAnY29sLXNtLTEgcHQtMSBwbC0yJztcclxuXHRASW5wdXQoKSB0eHRjb2xzaXplID0gJ2NvbC1zbS01IHBsLTQgcHQtMiBtdC0xJztcclxuXHRASW5wdXQoKSB0eHR0d29jb2xzaXplID0gJ2NvbC1zbS0yIHB0LTIgbXQtMSc7XHJcblx0QElucHV0KCkgdHh0dGhyZWVjb2xzaXplID0gJ2NvbC1zbS0zIHB0LTIgbXQtMSc7XHJcblx0QElucHV0KCd0aXRsZS1vbmUnKSB0aXRsZU9uZSA9ICdUaXRsZSBPbmUnO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lLWNvbG9yJykgdGl0bGVPbmVDb2xvciA9ICdibGFjayc7XHJcblx0QElucHV0KCd0aXRsZS1vbmUtd2VpZ2h0JykgdGl0bGVPbmVXZWlnaHQgPSAnNjAwJztcclxuICBASW5wdXQoJ3RpdGxlLW9uZS1zaXplJykgdGl0bGVPbmVTaXplID0gJzE0JztcclxuICBASW5wdXQoJ3RpdGxlLW9uZS1jdXN0b21jbGFzcycpIHRpdGxlT25lY3VzdG9tY2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lJykgY29udGVudE9uZSA9ICckMTAwJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lLWNvbG9yJykgY29udGVudE9uZUNvbG9yID0gJyMzZTNlM2UnO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUtd2VpZ2h0JykgY29udGVudE9uZVdlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUtc2l6ZScpIGNvbnRlbnRPbmVTaXplID0gJzE0JztcclxuICBASW5wdXQoJ2NvbnRlbnQtb25lLWN1c3RvbWNsYXNzJykgY29udGVudE9uZWN1c3RvbWNsYXNzID0gJyc7XHJcblxyXG5cdEBJbnB1dCgnY29udGVudC10d28nKSBjb250ZW50VHdvID0gJ0pvaG4gU21pdGgnO1xyXG5cdEBJbnB1dCgnY29udGVudC10d28tY29sb3InKSBjb250ZW50VHdvQ29sb3IgPSAnIzNlM2UzZSc7XHJcblx0QElucHV0KCdjb250ZW50LXR3by13ZWlnaHQnKSBjb250ZW50VHdvV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCdjb250ZW50LXR3by1zaXplJykgY29udGVudFR3b1NpemUgPSAnMTQnO1xyXG4gIEBJbnB1dCgnY29udGVudC10d28tY3VzdG9tY2xhc3MnKSBjb250ZW50VHdvY3VzdG9tY2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28nKSBzdWJUaXRsZVR3byA9ICdTT0xEIEJZJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28tY29sb3InKSBzdWJUaXRsZVR3b0NvbG9yID0gJyNiNmI2YjYnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by13ZWlnaHQnKSBzdWJUaXRsZVR3b1dlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by1zaXplJykgc3ViVGl0bGVUd29TaXplID0gJzEyJztcclxuICBASW5wdXQoJ3N1Yi10aXRsZS10d28tY3VzdG9tY2xhc3MnKSBzdWJUaXRsZVR3b2N1c3RvbWNsYXNzID0gJyc7XHJcblxyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlJykgc3ViVGl0bGVUaHJlZSA9ICdFWFBJUlkgREFURSc7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUtY29sb3InKSBzdWJUaXRsZVRocmVlY29sb3IgPSAnI2I2YjZiNic7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUtd2VpZ2h0Jykgc3ViVGl0bGVUaHJlZVdlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLXNpemUnKSBzdWJUaXRsZVRocmVlU2l6ZSA9ICcxMic7XHJcbiAgQElucHV0KCdzdWItdGl0bGUtdGhyZWVjbGFzcycpIHN1YlRpdGxlVGhyZWVDbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZScpIGNvbnRlbnRUaHJlZSA9ICcyOCBOb3YgMjAxOCc7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlLWNvbG9yJykgY29udGVudFRocmVlQ29sb3IgPSAnIzNlM2UzZSc7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlLXdpZGdldCcpIGNvbnRlbnRUaHJlZVdlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZS1zaXplJykgY29udGVudFRocmVlU2l6ZSA9ICcxNCc7XHJcbiAgQElucHV0KCdjb250ZW50LXRocmVlLWN1c3RvbWNsYXNzJykgY29udGVudFRocmVlY3VzdG9tY2xhc3MgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=