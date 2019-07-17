/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuAddWidgetComponent {
    constructor() {
        this.id = 'addNewSellListing';
        this.icon = 'fa fa-plus';
        this.customClass = 'add-widget c-pointer';
        this.iconId = 'icon';
        this.iconCustomClass = '';
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SukuAddWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-add-widget',
                template: "<div (click)=\"action.emit()\">\n  <div class=\"d-flex\">\n    <div class=\"add-btn mt-1\">\n      <span>\n        <i class=\"{{icon}} {{iconCustomClass}}\" [id]=\"iconId\" [style.color]=\"iconColor\"></i>\n        <span [style.font-size.px]=\"size\" [style.color]=\"color\" [class]=\"customClass\" [style.font-weight]=\"weight\">\n          <ng-content></ng-content>\n        </span>\n      </span>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.c-pointer{cursor:pointer!important}.add-widget{font-family:var(--suku-ternary-font)!important;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:var(--suku-text-label-one)!important;text-decoration:underline;text-transform:uppercase}.add-btn{width:100%;float:left}.add-btn span{height:33px;float:left;font-family:var(--suku-ternary-font)!important;font-size:12px;text-transform:uppercase;line-height:32px;text-align:left;text-decoration:none;position:relative;padding:0 0 0 20px}.add-btn span i{width:33px;height:33px;float:none;display:inline-block;vertical-align:middle;font-size:12px;color:#d4c5a0;text-align:center;line-height:31px;border:1px solid #ebedee;border-radius:33px;position:absolute;top:0;left:0;z-index:10}.add-btn a:hover{text-decoration:underline}"]
            }] }
];
/** @nocollapse */
SukuAddWidgetComponent.ctorParameters = () => [];
SukuAddWidgetComponent.propDecorators = {
    size: [{ type: Input }],
    color: [{ type: Input }],
    weight: [{ type: Input }],
    id: [{ type: Input }],
    icon: [{ type: Input }],
    customClass: [{ type: Input }],
    iconId: [{ type: Input }],
    iconColor: [{ type: Input }],
    iconCustomClass: [{ type: Input }],
    action: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuAddWidgetComponent.prototype.size;
    /** @type {?} */
    SukuAddWidgetComponent.prototype.color;
    /** @type {?} */
    SukuAddWidgetComponent.prototype.weight;
    /** @type {?} */
    SukuAddWidgetComponent.prototype.id;
    /** @type {?} */
    SukuAddWidgetComponent.prototype.icon;
    /** @type {?} */
    SukuAddWidgetComponent.prototype.customClass;
    /** @type {?} */
    SukuAddWidgetComponent.prototype.iconId;
    /** @type {?} */
    SukuAddWidgetComponent.prototype.iconColor;
    /** @type {?} */
    SukuAddWidgetComponent.prototype.iconCustomClass;
    /** @type {?} */
    SukuAddWidgetComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWFkZC13aWRnZXQvc3VrdS1hZGQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sc0JBQXNCO0lBWWxDO1FBUlMsT0FBRSxHQUFHLG1CQUFtQixDQUFDO1FBQ3pCLFNBQUksR0FBRyxZQUFZLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxzQkFBc0IsQ0FBQztRQUNyQyxXQUFNLEdBQUcsTUFBTSxDQUFDO1FBRWhCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXRCLENBQUM7Ozs7SUFFakIsUUFBUSxLQUFLLENBQUM7OztZQW5CZCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IseWJBQStDOzthQUUvQzs7Ozs7bUJBRUMsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7aUJBQ0wsS0FBSzttQkFDTCxLQUFLOzBCQUNMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7cUJBQ0wsTUFBTTs7OztJQVRQLHNDQUFjOztJQUNkLHVDQUFlOztJQUNmLHdDQUFnQjs7SUFDaEIsb0NBQWtDOztJQUNsQyxzQ0FBNkI7O0lBQzdCLDZDQUE4Qzs7SUFDOUMsd0NBQXlCOztJQUN6QiwyQ0FBbUI7O0lBQ25CLGlEQUE4Qjs7SUFDOUIsd0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LWFkZC13aWRnZXQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1hZGQtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1hZGQtd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUFkZFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIHNpemU7XG5cdEBJbnB1dCgpIGNvbG9yO1xuXHRASW5wdXQoKSB3ZWlnaHQ7XG5cdEBJbnB1dCgpIGlkID0gJ2FkZE5ld1NlbGxMaXN0aW5nJztcblx0QElucHV0KCkgaWNvbiA9ICdmYSBmYS1wbHVzJztcblx0QElucHV0KCkgY3VzdG9tQ2xhc3MgPSAnYWRkLXdpZGdldCBjLXBvaW50ZXInO1xuXHRASW5wdXQoKSBpY29uSWQgPSAnaWNvbic7XG5cdEBJbnB1dCgpIGljb25Db2xvcjtcblx0QElucHV0KCkgaWNvbkN1c3RvbUNsYXNzID0gJyc7XG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgfVxufVxuIl19