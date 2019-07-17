/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuAddIconComponent = /** @class */ (function () {
    function SukuAddIconComponent() {
        this.id = 'addNewSellListing';
        this.icon = 'fa fa-plus';
        this.customClass = 'add-widget c-pointer';
        this.iconId = 'icon';
        this.iconCustomClass = '';
    }
    /**
     * @return {?}
     */
    SukuAddIconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuAddIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-add-icon',
                    template: "<div class=\"d-flex\">\n  <div class=\"add-btn mt-1\">\n    <span>\n      <i class=\"{{icon}} {{iconCustomClass}}\" [id]=\"iconId\" [style.color]=\"iconColor\"></i>\n      <span [style.font-size.px]=\"size\" [style.color]=\"color\" [class]=\"customClass\" [style.font-weight]=\"weight\">\n        <ng-content></ng-content>\n      </span>\n    </span>\n  </div>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.c-pointer{cursor:pointer!important}.add-widget{font-family:var(--suku-ternary-font)!important;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:var(--suku-text-label-one)!important;text-decoration:underline;text-transform:uppercase}.add-btn{width:100%;float:left}.add-btn span{width:100px;height:33px;float:left;font-family:var(--suku-ternary-font)!important;font-size:12px;text-transform:uppercase;line-height:32px;text-align:left;text-decoration:none;position:relative;padding:0 0 0 20px}.add-btn span i{width:33px;height:33px;float:none;display:inline-block;vertical-align:middle;font-size:12px;color:#d4c5a0;text-align:center;line-height:31px;border:1px solid #ebedee;border-radius:33px;position:absolute;top:0;left:0;z-index:10}.add-btn a:hover{text-decoration:underline}"]
                }] }
    ];
    /** @nocollapse */
    SukuAddIconComponent.ctorParameters = function () { return []; };
    SukuAddIconComponent.propDecorators = {
        size: [{ type: Input }],
        color: [{ type: Input }],
        weight: [{ type: Input }],
        id: [{ type: Input }],
        icon: [{ type: Input }],
        customClass: [{ type: Input }],
        iconId: [{ type: Input }],
        iconColor: [{ type: Input }],
        iconCustomClass: [{ type: Input }]
    };
    return SukuAddIconComponent;
}());
export { SukuAddIconComponent };
if (false) {
    /** @type {?} */
    SukuAddIconComponent.prototype.size;
    /** @type {?} */
    SukuAddIconComponent.prototype.color;
    /** @type {?} */
    SukuAddIconComponent.prototype.weight;
    /** @type {?} */
    SukuAddIconComponent.prototype.id;
    /** @type {?} */
    SukuAddIconComponent.prototype.icon;
    /** @type {?} */
    SukuAddIconComponent.prototype.customClass;
    /** @type {?} */
    SukuAddIconComponent.prototype.iconId;
    /** @type {?} */
    SukuAddIconComponent.prototype.iconColor;
    /** @type {?} */
    SukuAddIconComponent.prototype.iconCustomClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hZGQtaWNvbi9zdWt1LWFkZC1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBZ0JFO1FBUFMsT0FBRSxHQUFHLG1CQUFtQixDQUFDO1FBQ3pCLFNBQUksR0FBRyxZQUFZLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxzQkFBc0IsQ0FBQztRQUNyQyxXQUFNLEdBQUcsTUFBTSxDQUFDO1FBRWhCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO0lBRWQsQ0FBQzs7OztJQUVqQix1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qiw0WEFBNkM7O2lCQUU5Qzs7Ozs7dUJBRUUsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzhCQUNMLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLO2tDQUNMLEtBQUs7O0lBT1IsMkJBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWhCWSxvQkFBb0I7OztJQUMvQixvQ0FBYzs7SUFDZCxxQ0FBZTs7SUFDZixzQ0FBZ0I7O0lBQ2hCLGtDQUFrQzs7SUFDbEMsb0NBQTZCOztJQUM3QiwyQ0FBOEM7O0lBQzlDLHNDQUF5Qjs7SUFDekIseUNBQW1COztJQUNuQiwrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtYWRkLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1hZGQtaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtYWRkLWljb24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1QWRkSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNpemU7XG4gIEBJbnB1dCgpIGNvbG9yO1xuICBASW5wdXQoKSB3ZWlnaHQ7XG4gIEBJbnB1dCgpIGlkID0gJ2FkZE5ld1NlbGxMaXN0aW5nJztcbiAgQElucHV0KCkgaWNvbiA9ICdmYSBmYS1wbHVzJztcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3MgPSAnYWRkLXdpZGdldCBjLXBvaW50ZXInO1xuICBASW5wdXQoKSBpY29uSWQgPSAnaWNvbic7XG4gIEBJbnB1dCgpIGljb25Db2xvcjtcbiAgQElucHV0KCkgaWNvbkN1c3RvbUNsYXNzID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=