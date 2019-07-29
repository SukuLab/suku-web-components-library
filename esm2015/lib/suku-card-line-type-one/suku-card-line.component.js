/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuCardLineTypeOneComponent {
    constructor() {
        this.bgColor = '';
        this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
        this.chatReadIcon = '../assets/images/chat_read.png';
        this.chatUnreadIcon = '../assets/images/chat_unread.png';
        this.customClass = '';
        this.customImgclass = '';
        this.customIconClass = 'text-center';
        this.imageColSize = 'col-sm-1 pt-1 pl-2';
        this.txtcolsize = 'col-sm-6  pt-2 mt-1';
        this.txtTwocolsize = 'col-sm-2 pt-2 pl-2 mt-1';
        this.txtThreecolsize = 'col-sm-3 pt-2 mt-1';
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
        this.imgCustomClass = 'img-width';
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
                template: "<div class=\"col p-0\" (click)=\"cardAction()\">\r\n  <div class=\"row card-line-bg p-3 m-3 {{customClass}}\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img class=\"customclass {{imgCustomClass}}\" src=\"{{image}}\" alt=\"card-img\">\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus == 'read'\">\r\n      <img [class]=\"customIconClass\" src=\"{{chatUnreadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus == 'unRead'\">\r\n      <img [class]=\"customIconClass\" src=\"{{chatReadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n    </div>\r\n    <div [class]=\"txtcolsize\">\r\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\r\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\r\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n    </div>\r\n    <div [class]=\"txtTwocolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"\r\n        [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\" (click)=\"contentAction($event)\"\r\n        [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n    </div>\r\n    <div [class]=\"txtThreecolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"\r\n        [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"\r\n        [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-secondary-font)!important;font-size:var(--suku-font-size-2);font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:var(--suku-text-label-one);word-break:break-word!important}.img-width{width:55px;height:46px}.card-line-bg{background-color:var(--suku-homepage-bg);box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.c-pointer,.user{cursor:pointer}.user:hover{color:var(--suku-filter-label-selected)!important;font-weight:700!important}"]
            }] }
];
/** @nocollapse */
SukuCardLineTypeOneComponent.ctorParameters = () => [];
SukuCardLineTypeOneComponent.propDecorators = {
    bgColor: [{ type: Input, args: ['bg-color',] }],
    image: [{ type: Input }],
    chatReadIcon: [{ type: Input, args: ['char-read-icon',] }],
    chatUnreadIcon: [{ type: Input, args: ['char-unread-icon',] }],
    msgStatus: [{ type: Input, args: ['msg-status',] }],
    customClass: [{ type: Input, args: ['custom-class',] }],
    customImgclass: [{ type: Input, args: ['custom-img-class',] }],
    customIconClass: [{ type: Input, args: ['custom-icon-class',] }],
    imageColSize: [{ type: Input, args: ['image-col-size',] }],
    txtcolsize: [{ type: Input, args: ['txt-col-size',] }],
    txtTwocolsize: [{ type: Input, args: ['txt-two-col-size',] }],
    txtThreecolsize: [{ type: Input, args: ['txt-three-col-size',] }],
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
    imgCustomClass: [{ type: Input, args: ['img-custom-class',] }],
    action: [{ type: Output }],
    userAction: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.bgColor;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.image;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.chatReadIcon;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.chatUnreadIcon;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.msgStatus;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.customClass;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.customImgclass;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.customIconClass;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.imageColSize;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.txtcolsize;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.txtTwocolsize;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.txtThreecolsize;
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
    SukuCardLineTypeOneComponent.prototype.imgCustomClass;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.action;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.userAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jYXJkLWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY2FyZC1saW5lLXR5cGUtb25lL3N1a3UtY2FyZC1saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sNEJBQTRCO0lBa0R4QztRQWpEbUIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUVoQyxVQUFLLEdBQUcsZ0pBQWdKLENBQUM7UUFDaEksaUJBQVksR0FBRyxnQ0FBZ0MsQ0FBQztRQUM5QyxtQkFBYyxHQUFHLGtDQUFrQyxDQUFDO1FBRXhELGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2IsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDbkIsb0JBQWUsR0FBRyxhQUFhLENBQUM7UUFDbkMsaUJBQVksR0FBRyxvQkFBb0IsQ0FBQztRQUN0QyxlQUFVLEdBQUcscUJBQXFCLENBQUM7UUFDL0Isa0JBQWEsR0FBRyx5QkFBeUIsQ0FBQztRQUN4QyxvQkFBZSxHQUFHLG9CQUFvQixDQUFDO1FBQ2hELGFBQVEsR0FBRyxXQUFXLENBQUM7UUFDakIsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFDdkIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDekIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDYix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDbkMsZUFBVSxHQUFHLE1BQU0sQ0FBQztRQUNkLG9CQUFlLEdBQUcsU0FBUyxDQUFDO1FBQzNCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUMzQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUNmLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUN2QyxlQUFVLEdBQUcsWUFBWSxDQUFDO1FBQ3BCLG9CQUFl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LFNBQUMsc0JBQXNCOytCQUM1QixLQUFLLFNBQUMsb0JBQW9CO3NDQUMxQixLQUFLLFNBQUMsMkJBQTJCOzZCQUNqQyxLQUFLLFNBQUMsa0JBQWtCO3FCQUV4QixNQUFNO3lCQUNOLE1BQU07Ozs7SUEvQ1AsK0NBQWdDOztJQUNoQyw2Q0FDeUo7O0lBQ3pKLG9EQUF5RTs7SUFDekUsc0RBQStFOztJQUMvRSxpREFBK0I7O0lBQy9CLG1EQUF3Qzs7SUFDeEMsc0RBQStDOztJQUMvQyx1REFBNEQ7O0lBQzVELG9EQUE2RDs7SUFDN0Qsa0RBQTBEOztJQUMxRCxxREFBcUU7O0lBQ3JFLHVEQUFvRTs7SUFDcEUsZ0RBQTJDOztJQUMzQyxxREFBa0Q7O0lBQ2xELHNEQUFrRDs7SUFDbEQsb0RBQTZDOztJQUM3QywyREFBeUQ7O0lBQ3pELGtEQUEwQzs7SUFDMUMsdURBQXdEOztJQUN4RCx3REFBc0Q7O0lBQ3RELHNEQUFpRDs7SUFDakQsNkRBQTZEOztJQUM3RCxrREFBZ0Q7O0lBQ2hELHVEQUF3RDs7SUFDeEQsd0RBQXNEOztJQUN0RCxzREFBaUQ7O0lBQ2pELDZEQUFpRTs7SUFDakUsbURBQWdEOztJQUNoRCx3REFBMkQ7O0lBQzNELHlEQUF5RDs7SUFDekQsdURBQW9EOztJQUNwRCw4REFBZ0U7O0lBRWhFLHFEQUF3RDs7SUFDeEQsMERBQStEOztJQUMvRCwyREFBNkQ7O0lBQzdELHlEQUF3RDs7SUFDeEQsMERBQXVEOztJQUN2RCxvREFBcUQ7O0lBQ3JELHlEQUE0RDs7SUFDNUQsMERBQTBEOztJQUMxRCx3REFBcUQ7O0lBQ3JELCtEQUFpRTs7SUFDakUsc0RBQXdEOztJQUV4RCw4Q0FBc0M7O0lBQ3RDLGtEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc3VrdS1jYXJkLWxpbmUtdHlwZS1vbmUnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWNhcmQtbGluZS5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1jYXJkLWxpbmUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUNhcmRMaW5lVHlwZU9uZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCdiZy1jb2xvcicpIGJnQ29sb3IgPSAnJztcclxuXHRASW5wdXQoKVxyXG5cdGltYWdlID0gJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjEuZ3N0YXRpYy5jb20vc2hvcHBpbmc/cT10Ym46QU5kOUdjU1RxejY0QTJYajU0ZjV2NDRyRDl2TlVxeVRYejVjMHI3elRsZmgxOGlkb3lVWUdIOGhGNTFwUDZfZWZvZG5hakN1WVZCNG9rY01uVDAmdXNxcD1DQWMnO1xyXG5cdEBJbnB1dCgnY2hhci1yZWFkLWljb24nKSBjaGF0UmVhZEljb24gPSAnLi4vYXNzZXRzL2ltYWdlcy9jaGF0X3JlYWQucG5nJztcclxuXHRASW5wdXQoJ2NoYXItdW5yZWFkLWljb24nKSBjaGF0VW5yZWFkSWNvbiA9ICcuLi9hc3NldHMvaW1hZ2VzL2NoYXRfdW5yZWFkLnBuZyc7XHJcblx0QElucHV0KCdtc2ctc3RhdHVzJykgbXNnU3RhdHVzO1xyXG5cdEBJbnB1dCgnY3VzdG9tLWNsYXNzJykgY3VzdG9tQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2N1c3RvbS1pbWctY2xhc3MnKSBjdXN0b21JbWdjbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnY3VzdG9tLWljb24tY2xhc3MnKSBjdXN0b21JY29uQ2xhc3MgPSAndGV4dC1jZW50ZXInO1xyXG5cdEBJbnB1dCgnaW1hZ2UtY29sLXNpemUnKSBpbWFnZUNvbFNpemUgPSAnY29sLXNtLTEgcHQtMSBwbC0yJztcclxuXHRASW5wdXQoJ3R4dC1jb2wtc2l6ZScpIHR4dGNvbHNpemUgPSAnY29sLXNtLTYgIHB0LTIgbXQtMSc7XHJcblx0QElucHV0KCd0eHQtdHdvLWNvbC1zaXplJykgdHh0VHdvY29sc2l6ZSA9ICdjb2wtc20tMiBwdC0yIHBsLTIgbXQtMSc7XHJcblx0QElucHV0KCd0eHQtdGhyZWUtY29sLXNpemUnKSB0eHRUaHJlZWNvbHNpemUgPSAnY29sLXNtLTMgcHQtMiBtdC0xJztcclxuXHRASW5wdXQoJ3RpdGxlLW9uZScpIHRpdGxlT25lID0gJ1RpdGxlIE9uZSc7XHJcblx0QElucHV0KCd0aXRsZS1vbmUtY29sb3InKSB0aXRsZU9uZUNvbG9yID0gJ2JsYWNrJztcclxuXHRASW5wdXQoJ3RpdGxlLW9uZS13ZWlnaHQnKSB0aXRsZU9uZVdlaWdodCA9ICc2MDAnO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lLXNpemUnKSB0aXRsZU9uZVNpemUgPSAnMTQnO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lLWN1c3RvbWNsYXNzJykgdGl0bGVPbmVjdXN0b21jbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUnKSBjb250ZW50T25lID0gJyQxMDAnO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUtY29sb3InKSBjb250ZW50T25lQ29sb3IgPSAnIzNlM2UzZSc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS13ZWlnaHQnKSBjb250ZW50T25lV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS1zaXplJykgY29udGVudE9uZVNpemUgPSAnMTQnO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUtY3VzdG9tY2xhc3MnKSBjb250ZW50T25lY3VzdG9tY2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvJykgY29udGVudFR3byA9ICdKb2huIFNtaXRoJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLWNvbG9yJykgY29udGVudFR3b0NvbG9yID0gJyMzZTNlM2UnO1xyXG5cdEBJbnB1dCgnY29udGVudC10d28td2VpZ2h0JykgY29udGVudFR3b1dlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnY29udGVudC10d28tc2l6ZScpIGNvbnRlbnRUd29TaXplID0gJzE0JztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLWN1c3RvbWNsYXNzJykgY29udGVudFR3b2N1c3RvbWNsYXNzID0gJ3VzZXInO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3bycpIHN1YlRpdGxlVHdvID0gJ1NPTEQgQlknO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by1jb2xvcicpIHN1YlRpdGxlVHdvQ29sb3IgPSAnI2I2YjZiNic7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLXdlaWdodCcpIHN1YlRpdGxlVHdvV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLXNpemUnKSBzdWJUaXRsZVR3b1NpemUgPSAnMTInO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by1jdXN0b21jbGFzcycpIHN1YlRpdGxlVHdvY3VzdG9tY2xhc3MgPSAnJztcclxuXHJcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUnKSBzdWJUaXRsZVRocmVlID0gJ0VYUElSWSBEQVRFJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZS1jb2xvcicpIHN1YlRpdGxlVGhyZWVjb2xvciA9ICcjYjZiNmI2JztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZS13ZWlnaHQnKSBzdWJUaXRsZVRocmVlV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUtc2l6ZScpIHN1YlRpdGxlVGhyZWVTaXplID0gJzEyJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZWNsYXNzJykgc3ViVGl0bGVUaHJlZUNsYXNzID0gJyc7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlJykgY29udGVudFRocmVlID0gJzI4IE5vdiAyMDE4JztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtY29sb3InKSBjb250ZW50VGhyZWVDb2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtd2lkZ2V0JykgY29udGVudFRocmVlV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlLXNpemUnKSBjb250ZW50VGhyZWVTaXplID0gJzE0JztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtY3VzdG9tY2xhc3MnKSBjb250ZW50VGhyZWVjdXN0b21jbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnaW1nLWN1c3RvbS1jbGFzcycpIGltZ0N1c3RvbUNsYXNzID0gJ2ltZy13aWR0aCc7XHJcblxyXG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIHVzZXJBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdH1cclxuXHJcblx0Y2FyZEFjdGlvbigpIHtcclxuXHRcdHRoaXMuYWN0aW9uLmVtaXQoKTtcclxuXHR9XHJcblxyXG5cdGNvbnRlbnRBY3Rpb24oZSkge1xyXG5cdFx0dGhpcy51c2VyQWN0aW9uLmVtaXQoKVxyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHR9XHJcbn1cclxuIl19