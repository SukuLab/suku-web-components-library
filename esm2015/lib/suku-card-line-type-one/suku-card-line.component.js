/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuCardLineTypeOneComponent {
    constructor() {
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
                template: "<div class=\"col p-0\" (click)=\"cardAction()\">\r\n  <div class=\"row card-line-bg p-3 m-3 {{customClass}}\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img class=\"customclass {{imgCustomClass}}\" src=\"{{image}}\" alt=\"card-img\">\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus == 'read'\">\r\n      <i class=\"{{customIconClass}} {{chatReadIcon}}\" id=\"{{chatReadIconId}}\"></i>\r\n      <!-- <img [class]=\"customIconClass\" src=\"{{chatUnreadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\"> -->\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus == 'unRead'\">\r\n      <i class=\"{{customIconClass}} {{chatUnreadIcon}}\" id=\"{{chatUnreadIconId}}\"></i>\r\n      <!-- <img [class]=\"customIconClass\" src=\"{{chatReadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\"> -->\r\n    </div>\r\n    <div [class]=\"txtcolsize\">\r\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\r\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\r\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n    </div>\r\n    <div [class]=\"txtTwocolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"\r\n        [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\" (click)=\"contentAction($event)\"\r\n        [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n    </div>\r\n    <div [class]=\"txtThreecolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"\r\n        [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"\r\n        [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:var(--suku-text-label-one);word-break:break-word!important}.img-width{width:55px;height:46px}.card-line-bg{background-color:var(--suku-homepage-bg);box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.c-pointer,.user{cursor:pointer}.user:hover{color:var(--suku-filter-label-selected)!important;font-weight:700!important}"]
            }] }
];
/** @nocollapse */
SukuCardLineTypeOneComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jYXJkLWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY2FyZC1saW5lLXR5cGUtb25lL3N1a3UtY2FyZC1saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sNEJBQTRCO0lBb0R4QztRQW5EbUIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUVoQyxVQUFLLEdBQUcsZ0pBQWdKLENBQUM7UUFDaEksaUJBQVksR0FBRyxxQkFBcUIsQ0FBQztRQUNuQyxtQkFBYyxHQUFHLHVCQUF1QixDQUFDO1FBQ3hDLG1CQUFjLEdBQUcscUJBQXFCLENBQUM7UUFDckMscUJBQWdCLEdBQUcsdUJBQXVCLENBQUM7UUFFbEQsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDYixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNuQixvQkFBZSxHQUFHLHFCQUFxQixDQUFDO1FBQzNDLGlCQUFZLEdBQUcsb0JBQW9CLENBQUM7UUFDdEMsZUFBVSxHQUFHLHFCQUFxQixDQUFDO1FBQy9CLGtCQUFhLEdBQUcseUJBQXlCLENBQUM7UUFDeEMsb0JBQWUsR0FBRyxvQkFBb0IsQ0FBQztRQUNoRCxhQUFRLEdBQUcsV0FBVyxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ2Isd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ25DLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFDZCxvQkFBZSxHQUFHLFNBQVMsQ0FBQztRQUMzQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDM0IsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFD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b3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LWNhcmQtbGluZS10eXBlLW9uZScsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtY2FyZC1saW5lLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LWNhcmQtbGluZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1Q2FyZExpbmVUeXBlT25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoJ2JnLWNvbG9yJykgYmdDb2xvciA9ICcnO1xyXG5cdEBJbnB1dCgpXHJcblx0aW1hZ2UgPSAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMS5nc3RhdGljLmNvbS9zaG9wcGluZz9xPXRibjpBTmQ5R2NTVHF6NjRBMlhqNTRmNXY0NHJEOXZOVXF5VFh6NWMwcjd6VGxmaDE4aWRveVVZR0g4aEY1MXBQNl9lZm9kbmFqQ3VZVkI0b2tjTW5UMCZ1c3FwPUNBYyc7XHJcblx0QElucHV0KCdjaGF0LXJlYWQtaWNvbicpIGNoYXRSZWFkSWNvbiA9ICdzdWt1LWNoYXQtcmVhZC1pY29uJztcclxuXHRASW5wdXQoJ2NoYXQtdW5yZWFkLWljb24nKSBjaGF0VW5yZWFkSWNvbiA9ICdzdWt1LWNoYXQtdW5yZWFkLWljb24nO1xyXG5cdEBJbnB1dCgnY2hhdC1yZWFkLWljb24taWQnKSBjaGF0UmVhZEljb25JZCA9ICdzdWt1LWNoYXQtcmVhZC1pY29uJztcclxuXHRASW5wdXQoJ2NoYXQtdW5yZWFkLWljb24taWQnKSBjaGF0VW5yZWFkSWNvbklkID0gJ3N1a3UtY2hhdC11bnJlYWQtaWNvbic7XHJcblx0QElucHV0KCdtc2ctc3RhdHVzJykgbXNnU3RhdHVzO1xyXG5cdEBJbnB1dCgnY3VzdG9tLWNsYXNzJykgY3VzdG9tQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2N1c3RvbS1pbWctY2xhc3MnKSBjdXN0b21JbWdjbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnY3VzdG9tLWljb24tY2xhc3MnKSBjdXN0b21JY29uQ2xhc3MgPSAndGV4dC1jZW50ZXIgc3VrdS14bCc7XHJcblx0QElucHV0KCdpbWFnZS1jb2wtc2l6ZScpIGltYWdlQ29sU2l6ZSA9ICdjb2wtc20tMSBwdC0xIHBsLTInO1xyXG5cdEBJbnB1dCgndHh0LWNvbC1zaXplJykgdHh0Y29sc2l6ZSA9ICdjb2wtc20tNiAgcHQtMiBtdC0xJztcclxuXHRASW5wdXQoJ3R4dC10d28tY29sLXNpemUnKSB0eHRUd29jb2xzaXplID0gJ2NvbC1zbS0yIHB0LTIgcGwtMiBtdC0xJztcclxuXHRASW5wdXQoJ3R4dC10aHJlZS1jb2wtc2l6ZScpIHR4dFRocmVlY29sc2l6ZSA9ICdjb2wtc20tMyBwdC0yIG10LTEnO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lJykgdGl0bGVPbmUgPSAnVGl0bGUgT25lJztcclxuXHRASW5wdXQoJ3RpdGxlLW9uZS1jb2xvcicpIHRpdGxlT25lQ29sb3IgPSAnYmxhY2snO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lLXdlaWdodCcpIHRpdGxlT25lV2VpZ2h0ID0gJzYwMCc7XHJcblx0QElucHV0KCd0aXRsZS1vbmUtc2l6ZScpIHRpdGxlT25lU2l6ZSA9ICcxNCc7XHJcblx0QElucHV0KCd0aXRsZS1vbmUtY3VzdG9tY2xhc3MnKSB0aXRsZU9uZWN1c3RvbWNsYXNzID0gJyc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZScpIGNvbnRlbnRPbmUgPSAnJDEwMCc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS1jb2xvcicpIGNvbnRlbnRPbmVDb2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lLXdlaWdodCcpIGNvbnRlbnRPbmVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lLXNpemUnKSBjb250ZW50T25lU2l6ZSA9ICcxNCc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS1jdXN0b21jbGFzcycpIGNvbnRlbnRPbmVjdXN0b21jbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnY29udGVudC10d28nKSBjb250ZW50VHdvID0gJ0pvaG4gU21pdGgnO1xyXG5cdEBJbnB1dCgnY29udGVudC10d28tY29sb3InKSBjb250ZW50VHdvQ29sb3IgPSAnIzNlM2UzZSc7XHJcblx0QElucHV0KCdjb250ZW50LXR3by13ZWlnaHQnKSBjb250ZW50VHdvV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCdjb250ZW50LXR3by1zaXplJykgY29udGVudFR3b1NpemUgPSAnMTQnO1xyXG5cdEBJbnB1dCgnY29udGVudC10d28tY3VzdG9tY2xhc3MnKSBjb250ZW50VHdvY3VzdG9tY2xhc3MgPSAndXNlcic7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdHdvJykgc3ViVGl0bGVUd28gPSAnU09MRCBCWSc7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLWNvbG9yJykgc3ViVGl0bGVUd29Db2xvciA9ICcjYjZiNmI2JztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28td2VpZ2h0Jykgc3ViVGl0bGVUd29XZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28tc2l6ZScpIHN1YlRpdGxlVHdvU2l6ZSA9ICcxMic7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLWN1c3RvbWNsYXNzJykgc3ViVGl0bGVUd29jdXN0b21jbGFzcyA9ICcnO1xyXG5cclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZScpIHN1YlRpdGxlVGhyZWUgPSAnRVhQSVJZIERBVEUnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLWNvbG9yJykgc3ViVGl0bGVUaHJlZWNvbG9yID0gJyNiNmI2YjYnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLXdlaWdodCcpIHN1YlRpdGxlVGhyZWVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZS1zaXplJykgc3ViVGl0bGVUaHJlZVNpemUgPSAnMTInO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlY2xhc3MnKSBzdWJUaXRsZVRocmVlQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUnKSBjb250ZW50VGhyZWUgPSAnMjggTm92IDIwMTgnO1xyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZS1jb2xvcicpIGNvbnRlbnRUaHJlZUNvbG9yID0gJyMzZTNlM2UnO1xyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZS13aWRnZXQnKSBjb250ZW50VGhyZWVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtc2l6ZScpIGNvbnRlbnRUaHJlZVNpemUgPSAnMTQnO1xyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZS1jdXN0b21jbGFzcycpIGNvbnRlbnRUaHJlZWN1c3RvbWNsYXNzID0gJyc7XHJcblx0QElucHV0KCdpbWctY3VzdG9tLWNsYXNzJykgaW1nQ3VzdG9tQ2xhc3MgPSAnaW1nLXdpZHRoJztcclxuXHJcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgdXNlckFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0fVxyXG5cclxuXHRjYXJkQWN0aW9uKCkge1xyXG5cdFx0dGhpcy5hY3Rpb24uZW1pdCgpO1xyXG5cdH1cclxuXHJcblx0Y29udGVudEFjdGlvbihlKSB7XHJcblx0XHR0aGlzLnVzZXJBY3Rpb24uZW1pdCgpXHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH1cclxufVxyXG4iXX0=