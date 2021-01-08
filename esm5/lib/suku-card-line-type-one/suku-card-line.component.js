/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-card-line-type-one/suku-card-line.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuCardLineTypeOneComponent = /** @class */ (function () {
    function SukuCardLineTypeOneComponent() {
        this.bgColor = '';
        this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
        this.chatReadIcon = 'suku-chat-read-icon';
        this.chatUnreadIcon = 'suku-chat-unread-icon';
        this.chatReadIconId = 'suku-chat-read-icon';
        this.chatUnreadIconId = 'suku-chat-unread-icon';
        this.customClass = '';
        this.customImgclass = '';
        this.customIconClass = 'text-center suku-xl';
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
    SukuCardLineTypeOneComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SukuCardLineTypeOneComponent.prototype.cardAction = /**
     * @return {?}
     */
    function () {
        this.action.emit();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SukuCardLineTypeOneComponent.prototype.contentAction = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.userAction.emit();
        e.stopPropagation();
    };
    SukuCardLineTypeOneComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-card-line-type-one',
                    template: "<div class=\"col p-0\" (click)=\"cardAction()\">\r\n  <div class=\"row card-line-bg p-3 m-3 {{customClass}}\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img class=\"customclass {{imgCustomClass}}\" src=\"{{image}}\" alt=\"card-img\">\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus == 'read'\">\r\n      <i class=\"{{customIconClass}} {{chatReadIcon}}\" id=\"{{chatReadIconId}}\"></i>\r\n      <!-- <img [class]=\"customIconClass\" src=\"{{chatUnreadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\"> -->\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus == 'unRead'\">\r\n      <i class=\"{{customIconClass}} {{chatUnreadIcon}}\" id=\"{{chatUnreadIconId}}\"></i>\r\n      <!-- <img [class]=\"customIconClass\" src=\"{{chatReadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\"> -->\r\n    </div>\r\n    <div [class]=\"txtcolsize\">\r\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\r\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\r\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n    </div>\r\n    <div [class]=\"txtTwocolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"\r\n        [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\" (click)=\"contentAction($event)\"\r\n        [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n    </div>\r\n    <div [class]=\"txtThreecolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"\r\n        [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"\r\n        [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:var(--suku-text-label-one);word-break:break-word!important}.img-width{width:55px;height:46px}.card-line-bg{background-color:var(--suku-homepage-bg);box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.c-pointer,.user{cursor:pointer}.user:hover{color:var(--suku-filter-label-selected)!important;font-weight:700!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuCardLineTypeOneComponent.ctorParameters = function () { return []; };
    SukuCardLineTypeOneComponent.propDecorators = {
        bgColor: [{ type: Input, args: ['bg-color',] }],
        image: [{ type: Input }],
        chatReadIcon: [{ type: Input, args: ['chat-read-icon',] }],
        chatUnreadIcon: [{ type: Input, args: ['chat-unread-icon',] }],
        chatReadIconId: [{ type: Input, args: ['chat-read-icon-id',] }],
        chatUnreadIconId: [{ type: Input, args: ['chat-unread-icon-id',] }],
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
    return SukuCardLineTypeOneComponent;
}());
export { SukuCardLineTypeOneComponent };
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
    SukuCardLineTypeOneComponent.prototype.chatReadIconId;
    /** @type {?} */
    SukuCardLineTypeOneComponent.prototype.chatUnreadIconId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jYXJkLWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY2FyZC1saW5lLXR5cGUtb25lL3N1a3UtY2FyZC1saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0U7SUF5REM7UUFuRG1CLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFFaEMsVUFBSyxHQUFHLGdKQUFnSixDQUFDO1FBQ2hJLGlCQUFZLEdBQUcscUJBQXFCLENBQUM7UUFDbkMsbUJBQWMsR0FBRyx1QkFBdUIsQ0FBQztRQUN4QyxtQkFBYyxHQUFHLHFCQUFxQixDQUFDO1FBQ3JDLHFCQUFnQixHQUFHLHVCQUF1QixDQUFDO1FBRWxELGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2IsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDbkIsb0JBQWUsR0FBRyxxQkFBcUIsQ0FBQztRQUMzQyxpQkFBWSxHQUFHLG9CQUFvQixDQUFDO1FBQ3RDLGVBQVUsR0FBRyxxQkFBcUIsQ0FBQztRQUMvQixrQkFBYSxHQUFHLHlCQUF5QixDQUFDO1FBQ3hDLG9CQUFlLEdBQUcsb0JBQW9CLENBQUM7UUFDaEQsYUFBUSxHQUFHLFdBQVcsQ0FBQztRQUNqQixrQkFBYSxHQUFHLE9BQU8sQ0FBQztRQUN2QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN6QixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNiLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUNuQyxlQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ2Qsb0JBQWUsR0FBRyxTQUFTLENBQUM7UUFDM0IscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ2YsMEJBQXFCLEdBQUcsRUFB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SUFFeEQsOENBQXNDOztJQUN0QyxrREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3N1a3UtY2FyZC1saW5lLXR5cGUtb25lJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1jYXJkLWxpbmUuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL3N1a3UtY2FyZC1saW5lLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VDYXJkTGluZVR5cGVPbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgnYmctY29sb3InKSBiZ0NvbG9yID0gJyc7XHJcblx0QElucHV0KClcclxuXHRpbWFnZSA9ICdodHRwczovL2VuY3J5cHRlZC10Ym4xLmdzdGF0aWMuY29tL3Nob3BwaW5nP3E9dGJuOkFOZDlHY1NUcXo2NEEyWGo1NGY1djQ0ckQ5dk5VcXlUWHo1YzByN3pUbGZoMThpZG95VVlHSDhoRjUxcFA2X2Vmb2RuYWpDdVlWQjRva2NNblQwJnVzcXA9Q0FjJztcclxuXHRASW5wdXQoJ2NoYXQtcmVhZC1pY29uJykgY2hhdFJlYWRJY29uID0gJ3N1a3UtY2hhdC1yZWFkLWljb24nO1xyXG5cdEBJbnB1dCgnY2hhdC11bnJlYWQtaWNvbicpIGNoYXRVbnJlYWRJY29uID0gJ3N1a3UtY2hhdC11bnJlYWQtaWNvbic7XHJcblx0QElucHV0KCdjaGF0LXJlYWQtaWNvbi1pZCcpIGNoYXRSZWFkSWNvbklkID0gJ3N1a3UtY2hhdC1yZWFkLWljb24nO1xyXG5cdEBJbnB1dCgnY2hhdC11bnJlYWQtaWNvbi1pZCcpIGNoYXRVbnJlYWRJY29uSWQgPSAnc3VrdS1jaGF0LXVucmVhZC1pY29uJztcclxuXHRASW5wdXQoJ21zZy1zdGF0dXMnKSBtc2dTdGF0dXM7XHJcblx0QElucHV0KCdjdXN0b20tY2xhc3MnKSBjdXN0b21DbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnY3VzdG9tLWltZy1jbGFzcycpIGN1c3RvbUltZ2NsYXNzID0gJyc7XHJcblx0QElucHV0KCdjdXN0b20taWNvbi1jbGFzcycpIGN1c3RvbUljb25DbGFzcyA9ICd0ZXh0LWNlbnRlciBzdWt1LXhsJztcclxuXHRASW5wdXQoJ2ltYWdlLWNvbC1zaXplJykgaW1hZ2VDb2xTaXplID0gJ2NvbC1zbS0xIHB0LTEgcGwtMic7XHJcblx0QElucHV0KCd0eHQtY29sLXNpemUnKSB0eHRjb2xzaXplID0gJ2NvbC1zbS02ICBwdC0yIG10LTEnO1xyXG5cdEBJbnB1dCgndHh0LXR3by1jb2wtc2l6ZScpIHR4dFR3b2NvbHNpemUgPSAnY29sLXNtLTIgcHQtMiBwbC0yIG10LTEnO1xyXG5cdEBJbnB1dCgndHh0LXRocmVlLWNvbC1zaXplJykgdHh0VGhyZWVjb2xzaXplID0gJ2NvbC1zbS0zIHB0LTIgbXQtMSc7XHJcblx0QElucHV0KCd0aXRsZS1vbmUnKSB0aXRsZU9uZSA9ICdUaXRsZSBPbmUnO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lLWNvbG9yJykgdGl0bGVPbmVDb2xvciA9ICdibGFjayc7XHJcblx0QElucHV0KCd0aXRsZS1vbmUtd2VpZ2h0JykgdGl0bGVPbmVXZWlnaHQgPSAnNjAwJztcclxuXHRASW5wdXQoJ3RpdGxlLW9uZS1zaXplJykgdGl0bGVPbmVTaXplID0gJzE0JztcclxuXHRASW5wdXQoJ3RpdGxlLW9uZS1jdXN0b21jbGFzcycpIHRpdGxlT25lY3VzdG9tY2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lJykgY29udGVudE9uZSA9ICckMTAwJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lLWNvbG9yJykgY29udGVudE9uZUNvbG9yID0gJyMzZTNlM2UnO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUtd2VpZ2h0JykgY29udGVudE9uZVdlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUtc2l6ZScpIGNvbnRlbnRPbmVTaXplID0gJzE0JztcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lLWN1c3RvbWNsYXNzJykgY29udGVudE9uZWN1c3RvbWNsYXNzID0gJyc7XHJcblx0QElucHV0KCdjb250ZW50LXR3bycpIGNvbnRlbnRUd28gPSAnSm9obiBTbWl0aCc7XHJcblx0QElucHV0KCdjb250ZW50LXR3by1jb2xvcicpIGNvbnRlbnRUd29Db2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLXdlaWdodCcpIGNvbnRlbnRUd29XZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLXNpemUnKSBjb250ZW50VHdvU2l6ZSA9ICcxNCc7XHJcblx0QElucHV0KCdjb250ZW50LXR3by1jdXN0b21jbGFzcycpIGNvbnRlbnRUd29jdXN0b21jbGFzcyA9ICd1c2VyJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28nKSBzdWJUaXRsZVR3byA9ICdTT0xEIEJZJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28tY29sb3InKSBzdWJUaXRsZVR3b0NvbG9yID0gJyNiNmI2YjYnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by13ZWlnaHQnKSBzdWJUaXRsZVR3b1dlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by1zaXplJykgc3ViVGl0bGVUd29TaXplID0gJzEyJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28tY3VzdG9tY2xhc3MnKSBzdWJUaXRsZVR3b2N1c3RvbWNsYXNzID0gJyc7XHJcblxyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlJykgc3ViVGl0bGVUaHJlZSA9ICdFWFBJUlkgREFURSc7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUtY29sb3InKSBzdWJUaXRsZVRocmVlY29sb3IgPSAnI2I2YjZiNic7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUtd2VpZ2h0Jykgc3ViVGl0bGVUaHJlZVdlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLXNpemUnKSBzdWJUaXRsZVRocmVlU2l6ZSA9ICcxMic7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWVjbGFzcycpIHN1YlRpdGxlVGhyZWVDbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZScpIGNvbnRlbnRUaHJlZSA9ICcyOCBOb3YgMjAxOCc7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlLWNvbG9yJykgY29udGVudFRocmVlQ29sb3IgPSAnIzNlM2UzZSc7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlLXdpZGdldCcpIGNvbnRlbnRUaHJlZVdlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZS1zaXplJykgY29udGVudFRocmVlU2l6ZSA9ICcxNCc7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlLWN1c3RvbWNsYXNzJykgY29udGVudFRocmVlY3VzdG9tY2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2ltZy1jdXN0b20tY2xhc3MnKSBpbWdDdXN0b21DbGFzcyA9ICdpbWctd2lkdGgnO1xyXG5cclxuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSB1c2VyQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHR9XHJcblxyXG5cdGNhcmRBY3Rpb24oKSB7XHJcblx0XHR0aGlzLmFjdGlvbi5lbWl0KCk7XHJcblx0fVxyXG5cclxuXHRjb250ZW50QWN0aW9uKGUpIHtcclxuXHRcdHRoaXMudXNlckFjdGlvbi5lbWl0KClcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fVxyXG59XHJcbiJdfQ==