/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuCardLineComponent = /** @class */ (function () {
    function SukuCardLineComponent() {
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
    SukuCardLineComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuCardLineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-card-line',
                    template: "<div class=\"col p-0\">\n  <div class=\"row card-line-bg p-3 m-3 c-pointer\" [style.background-color]=\"bgColor\">\n    <div [class]=\"imageColSize\">\n      <img [class]=\"customclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\n    </div>\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus=='read'\">\n      <img [class]=\"customIconclass\" src=\"{{chatReadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\n    </div>\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus=='unRead'\">\n      <img [class]=\"customIconclass\" src=\"{{chatUnreadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\n    </div>\n    <div [class]=\"txtcolsize\">\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\"  [style.font-weight]=\"titleOneWeight\"\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\"  [style.font-weight]=\"contentOneWeight\" [style.color]=\"contentOneColor\">{{contentOne}}</h2>\n    </div>\n    <div [class]=\"txttwocolsize\">\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"  [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\"  [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\n    </div>\n    <div [class]=\"txtthreecolsize\">\n        <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"  [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\n        <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"  [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\n      </div>\n  </div>\n</div>\n",
                    styles: ["h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    SukuCardLineComponent.ctorParameters = function () { return []; };
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
    return SukuCardLineComponent;
}());
export { SukuCardLineComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jYXJkLWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY2FyZC1saW5lL3N1a3UtY2FyZC1saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFvREU7UUE5Q1MsVUFBSyxHQUFHLGdKQUFnSixDQUFDO1FBQzFJLGlCQUFZLEdBQUcsZ0NBQWdDLENBQUM7UUFDOUMsbUJBQWMsR0FBRyxrQ0FBa0MsQ0FBQztRQUMxRCxjQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ1osb0JBQWUsR0FBRyxhQUFhLENBQUM7UUFDbEQsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUdiLGlCQUFZLEdBQUcsb0JBQW9CLENBQUM7UUFDcEMsZUFBVSxHQUFHLHlCQUF5QixDQUFDO1FBQ3ZDLGtCQUFhLEdBQUcsb0JBQW9CLENBQUM7UUFDckMsb0JBQWUsR0FBRyxvQkFBb0IsQ0FBQztRQUM1QixhQUFRLEdBQUcsV0FBVyxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ2Isd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFDZCxvQkFBZSxHQUFHLFNBQVMsQ0FBQztRQUMzQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDM0IsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDZCwwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFFeEMsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUNwQixvQkFBZSxHQUFHLFNBQVMsQ0FBQztRQUMzQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDM0Is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O0lBQ3RELCtDQUFpRDs7SUFDaEQsc0RBQTZEOztJQUU5RCwyQ0FBZ0Q7O0lBQ2hELGdEQUF3RDs7SUFDeEQsaURBQXNEOztJQUN0RCwrQ0FBaUQ7O0lBQ2hELHNEQUE2RDs7SUFDOUQsNENBQWdEOztJQUNoRCxpREFBMkQ7O0lBQzNELGtEQUF5RDs7SUFDekQsZ0RBQW9EOztJQUNuRCx1REFBZ0U7O0lBRWpFLDhDQUF3RDs7SUFDeEQsbURBQStEOztJQUMvRCxvREFBNkQ7O0lBQzdELGtEQUF3RDs7SUFDdkQsbURBQXVEOztJQUN4RCw2Q0FBcUQ7O0lBQ3JELGtEQUE0RDs7SUFDNUQsbURBQTBEOztJQUMxRCxpREFBcUQ7O0lBQ3BELHdEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWNhcmQtbGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWNhcmQtbGluZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtY2FyZC1saW5lLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUNhcmRMaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaW1hZ2UgPSAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMS5nc3RhdGljLmNvbS9zaG9wcGluZz9xPXRibjpBTmQ5R2NTVHF6NjRBMlhqNTRmNXY0NHJEOXZOVXF5VFh6NWMwcjd6VGxmaDE4aWRveVVZR0g4aEY1MXBQNl9lZm9kbmFqQ3VZVkI0b2tjTW5UMCZ1c3FwPUNBYyc7XG5cdEBJbnB1dCgnY2hhci1yZWFkLWljb24nKSBjaGF0UmVhZEljb24gPSAnLi4vYXNzZXRzL2ltYWdlcy9jaGF0X3JlYWQucG5nJztcblx0QElucHV0KCdjaGFyLXVucmVhZC1pY29uJykgY2hhdFVucmVhZEljb24gPSAnLi4vYXNzZXRzL2ltYWdlcy9jaGF0X3VucmVhZC5wbmcnO1xuXHRASW5wdXQoJ21zZy1zdGF0dXMnKSBtc2dTdGF0dXMgPSAndW5SZWFkJztcblx0QElucHV0KCdjdXN0b21jbGFzcycpIGN1c3RvbWNsYXNzID0gJyc7XG5cdEBJbnB1dCgnY3VzdG9tLWljb25jbGFzcycpIGN1c3RvbUljb25jbGFzcyA9ICd0ZXh0LWNlbnRlcic7XG5cdEBJbnB1dCgpIGJnQ29sb3IgPSAnJztcblxuXHRASW5wdXQoKSBpbnRlcmVzdDtcblx0QElucHV0KCkgaW1hZ2VDb2xTaXplID0gJ2NvbC1zbS0xIHB0LTEgcGwtMic7XG5cdEBJbnB1dCgpIHR4dGNvbHNpemUgPSAnY29sLXNtLTUgcGwtNCBwdC0yIG10LTEnO1xuXHRASW5wdXQoKSB0eHR0d29jb2xzaXplID0gJ2NvbC1zbS0yIHB0LTIgbXQtMSc7XG5cdEBJbnB1dCgpIHR4dHRocmVlY29sc2l6ZSA9ICdjb2wtc20tMyBwdC0yIG10LTEnO1xuXHRASW5wdXQoJ3RpdGxlLW9uZScpIHRpdGxlT25lID0gJ1RpdGxlIE9uZSc7XG5cdEBJbnB1dCgndGl0bGUtb25lLWNvbG9yJykgdGl0bGVPbmVDb2xvciA9ICdibGFjayc7XG5cdEBJbnB1dCgndGl0bGUtb25lLXdlaWdodCcpIHRpdGxlT25lV2VpZ2h0ID0gJzYwMCc7XG4gIEBJbnB1dCgndGl0bGUtb25lLXNpemUnKSB0aXRsZU9uZVNpemUgPSAnMTQnO1xuICBASW5wdXQoJ3RpdGxlLW9uZS1jdXN0b21jbGFzcycpIHRpdGxlT25lY3VzdG9tY2xhc3MgPSAnJztcblx0QElucHV0KCdjb250ZW50LW9uZScpIGNvbnRlbnRPbmUgPSAnJDEwMCc7XG5cdEBJbnB1dCgnY29udGVudC1vbmUtY29sb3InKSBjb250ZW50T25lQ29sb3IgPSAnIzNlM2UzZSc7XG5cdEBJbnB1dCgnY29udGVudC1vbmUtd2VpZ2h0JykgY29udGVudE9uZVdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoJ2NvbnRlbnQtb25lLXNpemUnKSBjb250ZW50T25lU2l6ZSA9ICcxNCc7XG4gIEBJbnB1dCgnY29udGVudC1vbmUtY3VzdG9tY2xhc3MnKSBjb250ZW50T25lY3VzdG9tY2xhc3MgPSAnJztcblxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvJykgY29udGVudFR3byA9ICdKb2huIFNtaXRoJztcblx0QElucHV0KCdjb250ZW50LXR3by1jb2xvcicpIGNvbnRlbnRUd29Db2xvciA9ICcjM2UzZTNlJztcblx0QElucHV0KCdjb250ZW50LXR3by13ZWlnaHQnKSBjb250ZW50VHdvV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgnY29udGVudC10d28tc2l6ZScpIGNvbnRlbnRUd29TaXplID0gJzE0JztcbiAgQElucHV0KCdjb250ZW50LXR3by1jdXN0b21jbGFzcycpIGNvbnRlbnRUd29jdXN0b21jbGFzcyA9ICcnO1xuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28nKSBzdWJUaXRsZVR3byA9ICdTT0xEIEJZJztcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLWNvbG9yJykgc3ViVGl0bGVUd29Db2xvciA9ICcjYjZiNmI2Jztcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLXdlaWdodCcpIHN1YlRpdGxlVHdvV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by1zaXplJykgc3ViVGl0bGVUd29TaXplID0gJzEyJztcbiAgQElucHV0KCdzdWItdGl0bGUtdHdvLWN1c3RvbWNsYXNzJykgc3ViVGl0bGVUd29jdXN0b21jbGFzcyA9ICcnO1xuXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlJykgc3ViVGl0bGVUaHJlZSA9ICdFWFBJUlkgREFURSc7XG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLWNvbG9yJykgc3ViVGl0bGVUaHJlZWNvbG9yID0gJyNiNmI2YjYnO1xuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZS13ZWlnaHQnKSBzdWJUaXRsZVRocmVlV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLXNpemUnKSBzdWJUaXRsZVRocmVlU2l6ZSA9ICcxMic7XG4gIEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlY2xhc3MnKSBzdWJUaXRsZVRocmVlQ2xhc3MgPSAnJztcblx0QElucHV0KCdjb250ZW50LXRocmVlJykgY29udGVudFRocmVlID0gJzI4IE5vdiAyMDE4Jztcblx0QElucHV0KCdjb250ZW50LXRocmVlLWNvbG9yJykgY29udGVudFRocmVlQ29sb3IgPSAnIzNlM2UzZSc7XG5cdEBJbnB1dCgnY29udGVudC10aHJlZS13aWRnZXQnKSBjb250ZW50VGhyZWVXZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCdjb250ZW50LXRocmVlLXNpemUnKSBjb250ZW50VGhyZWVTaXplID0gJzE0JztcbiAgQElucHV0KCdjb250ZW50LXRocmVlLWN1c3RvbWNsYXNzJykgY29udGVudFRocmVlY3VzdG9tY2xhc3MgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==