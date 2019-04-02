/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuCardLineTypeOneComponent = /** @class */ (function () {
    function SukuCardLineTypeOneComponent() {
        this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
        this.chatReadIcon = '../assets/images/chat_read.png';
        this.chatUnreadIcon = '../assets/images/chat_unread.png';
        this.customclass = '';
        this.customImgclass = '';
        this.customIconclass = 'text-center';
        this.bgColor = '';
        this.imageColSize = "col-sm-1 pt-1 pl-2";
        this.txtcolsize = "col-sm-5 pl-4 pt-2 mt-1";
        this.txttwocolsize = "col-sm-2 pt-2 mt-1";
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
    SukuCardLineTypeOneComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuCardLineTypeOneComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-card-line-type-one',
                    template: "<div class=\"col p-0\">\r\n  <div class=\"row card-line-bg p-3 m-3 {{customclass}}\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img [class]=\"customclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus == 'read'\">\r\n      <img [class]=\"customIconclass\" src=\"{{chatUnreadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus == 'unRead'\">\r\n      <img [class]=\"customIconclass\" src=\"{{chatReadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"!msgStatus\"></div>\r\n    <div [class]=\"txtcolsize\">\r\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\"  [style.font-weight]=\"titleOneWeight\"\r\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\"  [style.font-weight]=\"contentOneWeight\" [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n    </div>\r\n    <div [class]=\"txttwocolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"  [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\"  [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n    </div>\r\n    <div [class]=\"txtthreecolsize\">\r\n        <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"  [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n        <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"  [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n      </div>\r\n  </div>\r\n</div>",
                    styles: ["h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    SukuCardLineTypeOneComponent.ctorParameters = function () { return []; };
    SukuCardLineTypeOneComponent.propDecorators = {
        image: [{ type: Input }],
        chatReadIcon: [{ type: Input, args: ['char-read-icon',] }],
        chatUnreadIcon: [{ type: Input, args: ['char-unread-icon',] }],
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
    return SukuCardLineTypeOneComponent;
}());
export { SukuCardLineTypeOneComponent };
if (false) {
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.image;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.chatReadIcon;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.chatUnreadIcon;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.msgStatus;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.customclass;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.customImgclass;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.customIconclass;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.bgColor;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.interest;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.imageColSize;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.txtcolsize;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.txttwocolsize;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.txtthreecolsize;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.titleOne;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.titleOneColor;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.titleOneWeight;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.titleOneSize;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.titleOnecustomclass;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.contentOne;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.contentOneColor;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.contentOneWeight;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.contentOneSize;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.contentOnecustomclass;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.contentTwo;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.contentTwoColor;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.contentTwoWeight;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.contentTwoSize;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.contentTwocustomclass;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.subTitleTwo;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.subTitleTwoColor;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.subTitleTwoWeight;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.subTitleTwoSize;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.subTitleTwocustomclass;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.subTitleThree;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.subTitleThreecolor;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.subTitleThreeWeight;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.subTitleThreeSize;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.subTitleThreeClass;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.contentThree;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.contentThreeColor;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.contentThreeWeight;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.contentThreeSize;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.contentThreecustomclass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jYXJkLWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY2FyZC1saW5lLXR5cGUtb25lL3N1a3UtY2FyZC1saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFxREU7UUEvQ1MsVUFBSyxHQUFHLGdKQUFnSixDQUFDO1FBQzFJLGlCQUFZLEdBQUcsZ0NBQWdDLENBQUM7UUFDOUMsbUJBQWMsR0FBRyxrQ0FBa0MsQ0FBQztRQUV6RCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNkLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLG9CQUFlLEdBQUcsYUFBYSxDQUFDO1FBQ2xELFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHYixpQkFBWSxHQUFHLG9CQUFvQixDQUFDO1FBQ3BDLGVBQVUsR0FBRyx5QkFBeUIsQ0FBQztRQUN2QyxrQkFBYSxHQUFHLG9CQUFvQixDQUFDO1FBQ3JDLG9CQUFlLEdBQUcsb0JBQW9CLENBQUM7UUFDNUIsYUFBUSxHQUFHLFdBQVcsQ0FBQztRQUNqQixrQkFBYSxHQUFHLE9BQU8sQ0FBQztRQUN2QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN4QixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNiLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUNwQyxlQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ2Qsb0JBQWUsR0FBRyxTQUFTLENBQUM7UUFDM0IscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ2QsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBRXhDLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFDcEIsb0JBQWUsR0FBRyxTQUFTLENBQUM7UUFDM0IscUJBQWdCLEdBQUcsS0FBSyxD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REFBeUQ7O0lBQzFELGtEQUEwQzs7SUFDMUMsdURBQXdEOztJQUN4RCx3REFBc0Q7O0lBQ3RELHNEQUFpRDs7SUFDaEQsNkRBQTZEOztJQUU5RCxrREFBZ0Q7O0lBQ2hELHVEQUF3RDs7SUFDeEQsd0RBQXNEOztJQUN0RCxzREFBaUQ7O0lBQ2hELDZEQUE2RDs7SUFDOUQsbURBQWdEOztJQUNoRCx3REFBMkQ7O0lBQzNELHlEQUF5RDs7SUFDekQsdURBQW9EOztJQUNuRCw4REFBZ0U7O0lBRWpFLHFEQUF3RDs7SUFDeEQsMERBQStEOztJQUMvRCwyREFBNkQ7O0lBQzdELHlEQUF3RDs7SUFDdkQsMERBQXVEOztJQUN4RCxvREFBcUQ7O0lBQ3JELHlEQUE0RDs7SUFDNUQsMERBQTBEOztJQUMxRCx3REFBcUQ7O0lBQ3BELCtEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LWNhcmQtbGluZS10eXBlLW9uZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtY2FyZC1saW5lLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWNhcmQtbGluZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1Q2FyZExpbmVUeXBlT25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpbWFnZSA9ICdodHRwczovL2VuY3J5cHRlZC10Ym4xLmdzdGF0aWMuY29tL3Nob3BwaW5nP3E9dGJuOkFOZDlHY1NUcXo2NEEyWGo1NGY1djQ0ckQ5dk5VcXlUWHo1YzByN3pUbGZoMThpZG95VVlHSDhoRjUxcFA2X2Vmb2RuYWpDdVlWQjRva2NNblQwJnVzcXA9Q0FjJztcclxuXHRASW5wdXQoJ2NoYXItcmVhZC1pY29uJykgY2hhdFJlYWRJY29uID0gJy4uL2Fzc2V0cy9pbWFnZXMvY2hhdF9yZWFkLnBuZyc7XHJcblx0QElucHV0KCdjaGFyLXVucmVhZC1pY29uJykgY2hhdFVucmVhZEljb24gPSAnLi4vYXNzZXRzL2ltYWdlcy9jaGF0X3VucmVhZC5wbmcnO1xyXG5cdEBJbnB1dCgnbXNnLXN0YXR1cycpIG1zZ1N0YXR1cztcclxuXHRASW5wdXQoJ2N1c3RvbWNsYXNzJykgY3VzdG9tY2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2N1c3RvbUltZ2NsYXNzJykgY3VzdG9tSW1nY2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2N1c3RvbS1pY29uY2xhc3MnKSBjdXN0b21JY29uY2xhc3MgPSAndGV4dC1jZW50ZXInO1xyXG5cdEBJbnB1dCgpIGJnQ29sb3IgPSAnJztcclxuXHJcblx0QElucHV0KCkgaW50ZXJlc3Q7XHJcblx0QElucHV0KCkgaW1hZ2VDb2xTaXplID0gXCJjb2wtc20tMSBwdC0xIHBsLTJcIjtcclxuXHRASW5wdXQoKSB0eHRjb2xzaXplID0gXCJjb2wtc20tNSBwbC00IHB0LTIgbXQtMVwiO1xyXG5cdEBJbnB1dCgpIHR4dHR3b2NvbHNpemUgPSBcImNvbC1zbS0yIHB0LTIgbXQtMVwiO1xyXG5cdEBJbnB1dCgpIHR4dHRocmVlY29sc2l6ZSA9IFwiY29sLXNtLTMgcHQtMiBtdC0xXCI7XHJcblx0QElucHV0KCd0aXRsZS1vbmUnKSB0aXRsZU9uZSA9ICdUaXRsZSBPbmUnO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lLWNvbG9yJykgdGl0bGVPbmVDb2xvciA9ICdibGFjayc7XHJcblx0QElucHV0KCd0aXRsZS1vbmUtd2VpZ2h0JykgdGl0bGVPbmVXZWlnaHQgPSAnNjAwJztcclxuICBASW5wdXQoJ3RpdGxlLW9uZS1zaXplJykgdGl0bGVPbmVTaXplID0gJzE0JztcclxuICBASW5wdXQoJ3RpdGxlLW9uZS1jdXN0b21jbGFzcycpIHRpdGxlT25lY3VzdG9tY2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lJykgY29udGVudE9uZSA9ICckMTAwJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lLWNvbG9yJykgY29udGVudE9uZUNvbG9yID0gJyMzZTNlM2UnO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUtd2VpZ2h0JykgY29udGVudE9uZVdlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUtc2l6ZScpIGNvbnRlbnRPbmVTaXplID0gJzE0JztcclxuICBASW5wdXQoJ2NvbnRlbnQtb25lLWN1c3RvbWNsYXNzJykgY29udGVudE9uZWN1c3RvbWNsYXNzID0gJyc7XHJcblxyXG5cdEBJbnB1dCgnY29udGVudC10d28nKSBjb250ZW50VHdvID0gJ0pvaG4gU21pdGgnO1xyXG5cdEBJbnB1dCgnY29udGVudC10d28tY29sb3InKSBjb250ZW50VHdvQ29sb3IgPSAnIzNlM2UzZSc7XHJcblx0QElucHV0KCdjb250ZW50LXR3by13ZWlnaHQnKSBjb250ZW50VHdvV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCdjb250ZW50LXR3by1zaXplJykgY29udGVudFR3b1NpemUgPSAnMTQnO1xyXG4gIEBJbnB1dCgnY29udGVudC10d28tY3VzdG9tY2xhc3MnKSBjb250ZW50VHdvY3VzdG9tY2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28nKSBzdWJUaXRsZVR3byA9ICdTT0xEIEJZJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28tY29sb3InKSBzdWJUaXRsZVR3b0NvbG9yID0gJyNiNmI2YjYnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by13ZWlnaHQnKSBzdWJUaXRsZVR3b1dlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by1zaXplJykgc3ViVGl0bGVUd29TaXplID0gJzEyJztcclxuICBASW5wdXQoJ3N1Yi10aXRsZS10d28tY3VzdG9tY2xhc3MnKSBzdWJUaXRsZVR3b2N1c3RvbWNsYXNzID0gJyc7XHJcblxyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlJykgc3ViVGl0bGVUaHJlZSA9ICdFWFBJUlkgREFURSc7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUtY29sb3InKSBzdWJUaXRsZVRocmVlY29sb3IgPSAnI2I2YjZiNic7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUtd2VpZ2h0Jykgc3ViVGl0bGVUaHJlZVdlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLXNpemUnKSBzdWJUaXRsZVRocmVlU2l6ZSA9ICcxMic7XHJcbiAgQElucHV0KCdzdWItdGl0bGUtdGhyZWVjbGFzcycpIHN1YlRpdGxlVGhyZWVDbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZScpIGNvbnRlbnRUaHJlZSA9ICcyOCBOb3YgMjAxOCc7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlLWNvbG9yJykgY29udGVudFRocmVlQ29sb3IgPSAnIzNlM2UzZSc7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlLXdpZGdldCcpIGNvbnRlbnRUaHJlZVdlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZS1zaXplJykgY29udGVudFRocmVlU2l6ZSA9ICcxNCc7XHJcbiAgQElucHV0KCdjb250ZW50LXRocmVlLWN1c3RvbWNsYXNzJykgY29udGVudFRocmVlY3VzdG9tY2xhc3MgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=