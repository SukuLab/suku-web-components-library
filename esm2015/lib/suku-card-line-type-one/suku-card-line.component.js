/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuCardLineTypeOneComponent {
    constructor() {
        this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
        this.chatReadIcon = '../assets/images/chat_read.png';
        this.chatUnreadIcon = '../assets/images/chat_unread.png';
        this.customclass = '';
        this.customImgclass = '';
        this.customIconclass = 'text-center';
        this.bgColor = '';
        this.imageColSize = 'col-sm-1 pt-1 pl-2';
        this.txtcolsize = 'col-sm-6 pl-5 pt-2 mt-1';
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
        this.contentTwocustomclass = 'user';
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
        this.action = new EventEmitter();
        this.userAction = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    cardAction() {
        this.action.emit();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    contentAction(e) {
        this.userAction.emit();
        e.stopPropagation();
    }
}
SukuCardLineTypeOneComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-card-line-type-one',
                template: "<div class=\"col p-0\" (click)=\"cardAction()\">\r\n  <div class=\"row card-line-bg p-3 m-3 {{customclass}}\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img [class]=\"customclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus == 'read'\">\r\n      <img [class]=\"customIconclass\" src=\"{{chatUnreadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus == 'unRead'\">\r\n      <img [class]=\"customIconclass\" src=\"{{chatReadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n    </div>\r\n    <!-- <div class=\"col-sm-1\" *ngIf=\"!msgStatus\"></div> -->\r\n    <div [class]=\"txtcolsize\">\r\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\r\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\r\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n    </div>\r\n    <div [class]=\"txttwocolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"\r\n        [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\" (click)=\"contentAction($event)\"\r\n        [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n    </div>\r\n    <div [class]=\"txtthreecolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"\r\n        [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"\r\n        [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ["h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-word!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer,.user{cursor:pointer}.user:hover{color:#000!important;font-weight:700!important}"]
            }] }
];
/** @nocollapse */
SukuCardLineTypeOneComponent.ctorParameters = () => [];
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
    contentThreecustomclass: [{ type: Input, args: ['content-three-customclass',] }],
    action: [{ type: Output }],
    userAction: [{ type: Output }]
};
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
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.action;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.userAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jYXJkLWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY2FyZC1saW5lLXR5cGUtb25lL3N1a3UtY2FyZC1saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sNEJBQTRCO0lBb0R4QztRQWxEQSxVQUFLLEdBQUcsZ0pBQWdKLENBQUM7UUFDaEksaUJBQVksR0FBRyxnQ0FBZ0MsQ0FBQztRQUM5QyxtQkFBYyxHQUFHLGtDQUFrQyxDQUFDO1FBRXpELGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2QsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDbEIsb0JBQWUsR0FBRyxhQUFhLENBQUM7UUFDbEQsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUdiLGlCQUFZLEdBQUcsb0JBQW9CLENBQUM7UUFDcEMsZUFBVSxHQUFHLHlCQUF5QixDQUFDO1FBQ3ZDLGtCQUFhLEdBQUcsb0JBQW9CLENBQUM7UUFDckMsb0JBQWUsR0FBRyxvQkFBb0IsQ0FBQztRQUM1QixhQUFRLEdBQUcsV0FBVyxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ2Isd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ25DLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFDZCxvQkFBZSxHQUFHLFNBQVMsQ0FBQztRQUMzQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDM0IsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDZiwwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFFdkMsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUNwQixvQkFBZSxH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TUFBTTs7OztJQWpEUCw2Q0FDeUo7O0lBQ3pKLG9EQUF5RTs7SUFDekUsc0RBQStFOztJQUMvRSxpREFBK0I7O0lBQy9CLG1EQUF1Qzs7SUFDdkMsc0RBQTZDOztJQUM3Qyx1REFBMkQ7O0lBQzNELCtDQUFzQjs7SUFFdEIsZ0RBQWtCOztJQUNsQixvREFBNkM7O0lBQzdDLGtEQUFnRDs7SUFDaEQscURBQThDOztJQUM5Qyx1REFBZ0Q7O0lBQ2hELGdEQUEyQzs7SUFDM0MscURBQWtEOztJQUNsRCxzREFBa0Q7O0lBQ2xELG9EQUE2Qzs7SUFDN0MsMkRBQXlEOztJQUN6RCxrREFBMEM7O0lBQzFDLHVEQUF3RDs7SUFDeEQsd0RBQXNEOztJQUN0RCxzREFBaUQ7O0lBQ2pELDZEQUE2RDs7SUFFN0Qsa0RBQWdEOztJQUNoRCx1REFBd0Q7O0lBQ3hELHdEQUFzRDs7SUFDdEQsc0RBQWlEOztJQUNqRCw2REFBaUU7O0lBQ2pFLG1EQUFnRDs7SUFDaEQsd0RBQTJEOztJQUMzRCx5REFBeUQ7O0lBQ3pELHVEQUFvRDs7SUFDcEQsOERBQWdFOztJQUVoRSxxREFBd0Q7O0lBQ3hELDBEQUErRDs7SUFDL0QsMkRBQTZEOztJQUM3RCx5REFBd0Q7O0lBQ3hELDBEQUF1RDs7SUFDdkQsb0RBQXFEOztJQUNyRCx5REFBNEQ7O0lBQzVELDBEQUEwRDs7SUFDMUQsd0RBQXFEOztJQUNyRCwrREFBaUU7O0lBRWpFLDhDQUFzQzs7SUFDdEMsa0RBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LWNhcmQtbGluZS10eXBlLW9uZScsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtY2FyZC1saW5lLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1jYXJkLWxpbmUuY29tcG9uZW50LnNjc3MnIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VDYXJkTGluZVR5cGVPbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpXHJcblx0aW1hZ2UgPSAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMS5nc3RhdGljLmNvbS9zaG9wcGluZz9xPXRibjpBTmQ5R2NTVHF6NjRBMlhqNTRmNXY0NHJEOXZOVXF5VFh6NWMwcjd6VGxmaDE4aWRveVVZR0g4aEY1MXBQNl9lZm9kbmFqQ3VZVkI0b2tjTW5UMCZ1c3FwPUNBYyc7XHJcblx0QElucHV0KCdjaGFyLXJlYWQtaWNvbicpIGNoYXRSZWFkSWNvbiA9ICcuLi9hc3NldHMvaW1hZ2VzL2NoYXRfcmVhZC5wbmcnO1xyXG5cdEBJbnB1dCgnY2hhci11bnJlYWQtaWNvbicpIGNoYXRVbnJlYWRJY29uID0gJy4uL2Fzc2V0cy9pbWFnZXMvY2hhdF91bnJlYWQucG5nJztcclxuXHRASW5wdXQoJ21zZy1zdGF0dXMnKSBtc2dTdGF0dXM7XHJcblx0QElucHV0KCdjdXN0b21jbGFzcycpIGN1c3RvbWNsYXNzID0gJyc7XHJcblx0QElucHV0KCdjdXN0b21JbWdjbGFzcycpIGN1c3RvbUltZ2NsYXNzID0gJyc7XHJcblx0QElucHV0KCdjdXN0b20taWNvbmNsYXNzJykgY3VzdG9tSWNvbmNsYXNzID0gJ3RleHQtY2VudGVyJztcclxuXHRASW5wdXQoKSBiZ0NvbG9yID0gJyc7XHJcblxyXG5cdEBJbnB1dCgpIGludGVyZXN0O1xyXG5cdEBJbnB1dCgpIGltYWdlQ29sU2l6ZSA9ICdjb2wtc20tMSBwdC0xIHBsLTInO1xyXG5cdEBJbnB1dCgpIHR4dGNvbHNpemUgPSAnY29sLXNtLTYgcGwtNSBwdC0yIG10LTEnO1xyXG5cdEBJbnB1dCgpIHR4dHR3b2NvbHNpemUgPSAnY29sLXNtLTIgcHQtMiBtdC0xJztcclxuXHRASW5wdXQoKSB0eHR0aHJlZWNvbHNpemUgPSAnY29sLXNtLTMgcHQtMiBtdC0xJztcclxuXHRASW5wdXQoJ3RpdGxlLW9uZScpIHRpdGxlT25lID0gJ1RpdGxlIE9uZSc7XHJcblx0QElucHV0KCd0aXRsZS1vbmUtY29sb3InKSB0aXRsZU9uZUNvbG9yID0gJ2JsYWNrJztcclxuXHRASW5wdXQoJ3RpdGxlLW9uZS13ZWlnaHQnKSB0aXRsZU9uZVdlaWdodCA9ICc2MDAnO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lLXNpemUnKSB0aXRsZU9uZVNpemUgPSAnMTQnO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lLWN1c3RvbWNsYXNzJykgdGl0bGVPbmVjdXN0b21jbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUnKSBjb250ZW50T25lID0gJyQxMDAnO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUtY29sb3InKSBjb250ZW50T25lQ29sb3IgPSAnIzNlM2UzZSc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS13ZWlnaHQnKSBjb250ZW50T25lV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS1zaXplJykgY29udGVudE9uZVNpemUgPSAnMTQnO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUtY3VzdG9tY2xhc3MnKSBjb250ZW50T25lY3VzdG9tY2xhc3MgPSAnJztcclxuXHJcblx0QElucHV0KCdjb250ZW50LXR3bycpIGNvbnRlbnRUd28gPSAnSm9obiBTbWl0aCc7XHJcblx0QElucHV0KCdjb250ZW50LXR3by1jb2xvcicpIGNvbnRlbnRUd29Db2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLXdlaWdodCcpIGNvbnRlbnRUd29XZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLXNpemUnKSBjb250ZW50VHdvU2l6ZSA9ICcxNCc7XHJcblx0QElucHV0KCdjb250ZW50LXR3by1jdXN0b21jbGFzcycpIGNvbnRlbnRUd29jdXN0b21jbGFzcyA9ICd1c2VyJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28nKSBzdWJUaXRsZVR3byA9ICdTT0xEIEJZJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28tY29sb3InKSBzdWJUaXRsZVR3b0NvbG9yID0gJyNiNmI2YjYnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by13ZWlnaHQnKSBzdWJUaXRsZVR3b1dlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by1zaXplJykgc3ViVGl0bGVUd29TaXplID0gJzEyJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28tY3VzdG9tY2xhc3MnKSBzdWJUaXRsZVR3b2N1c3RvbWNsYXNzID0gJyc7XHJcblxyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlJykgc3ViVGl0bGVUaHJlZSA9ICdFWFBJUlkgREFURSc7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUtY29sb3InKSBzdWJUaXRsZVRocmVlY29sb3IgPSAnI2I2YjZiNic7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUtd2VpZ2h0Jykgc3ViVGl0bGVUaHJlZVdlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLXNpemUnKSBzdWJUaXRsZVRocmVlU2l6ZSA9ICcxMic7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWVjbGFzcycpIHN1YlRpdGxlVGhyZWVDbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZScpIGNvbnRlbnRUaHJlZSA9ICcyOCBOb3YgMjAxOCc7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlLWNvbG9yJykgY29udGVudFRocmVlQ29sb3IgPSAnIzNlM2UzZSc7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlLXdpZGdldCcpIGNvbnRlbnRUaHJlZVdlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZS1zaXplJykgY29udGVudFRocmVlU2l6ZSA9ICcxNCc7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlLWN1c3RvbWNsYXNzJykgY29udGVudFRocmVlY3VzdG9tY2xhc3MgPSAnJztcclxuXHJcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgdXNlckFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHR9XHJcblxyXG5cdGNhcmRBY3Rpb24oKSB7XHJcblx0XHR0aGlzLmFjdGlvbi5lbWl0KCk7XHJcblx0fVxyXG5cclxuXHRjb250ZW50QWN0aW9uKGUpIHtcclxuXHRcdHRoaXMudXNlckFjdGlvbi5lbWl0KClcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fVxyXG59XHJcbiJdfQ==