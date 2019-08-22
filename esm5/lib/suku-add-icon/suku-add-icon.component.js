/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuAddIconComponent = /** @class */ (function () {
    function SukuAddIconComponent() {
        this.id = 'addNewSellListing';
        this.icon = 'suku-plus-icon suku-md';
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
                    template: "<div class=\"d-flex\">\r\n  <div class=\"add-btn mt-1\">\r\n    <span>\r\n      <i class=\"{{icon}} {{iconCustomClass}}\" [id]=\"iconId\" [style.color]=\"iconColor\"></i>\r\n      <span [style.font-size.px]=\"size\" [style.color]=\"color\" [class]=\"customClass\" [style.font-weight]=\"weight\">\r\n        <ng-content></ng-content>\r\n      </span>\r\n    </span>\r\n  </div>\r\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.c-pointer{cursor:pointer!important}.add-widget{font-family:var(--suku-ternary-font);font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:var(--suku-text-label-one)!important;text-decoration:underline;text-transform:uppercase}.add-btn{width:100%;float:left}.add-btn span{width:100px;height:33px;float:left;font-family:var(--suku-ternary-font);text-transform:uppercase;line-height:32px;text-align:left;text-decoration:none;position:relative;padding:0 0 0 20px}.add-btn span i{float:none;display:inline-block;vertical-align:middle;text-align:center;line-height:31px;border-radius:33px;position:absolute;top:0;left:0;z-index:10}.add-btn a:hover{text-decoration:underline}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hZGQtaWNvbi9zdWt1LWFkZC1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBZ0JFO1FBUFMsT0FBRSxHQUFHLG1CQUFtQixDQUFDO1FBQ3pCLFNBQUksR0FBRyx3QkFBd0IsQ0FBQztRQUNoQyxnQkFBVyxHQUFHLHNCQUFzQixDQUFDO1FBQ3JDLFdBQU0sR0FBRyxNQUFNLENBQUM7UUFFaEIsb0JBQWUsR0FBRyxFQUFFLENBQUM7SUFFZCxDQUFDOzs7O0lBRWpCLHVDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLDhZQUE2Qzs7aUJBRTlDOzs7Ozt1QkFFRSxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzRCQUNMLEtBQUs7a0NBQ0wsS0FBSzs7SUFPUiwyQkFBQztDQUFBLEFBckJELElBcUJDO1NBaEJZLG9CQUFvQjs7O0lBQy9CLG9DQUFjOztJQUNkLHFDQUFlOztJQUNmLHNDQUFnQjs7SUFDaEIsa0NBQWtDOztJQUNsQyxvQ0FBeUM7O0lBQ3pDLDJDQUE4Qzs7SUFDOUMsc0NBQXlCOztJQUN6Qix5Q0FBbUI7O0lBQ25CLCtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1hZGQtaWNvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtYWRkLWljb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtYWRkLWljb24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUFkZEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHNpemU7XHJcbiAgQElucHV0KCkgY29sb3I7XHJcbiAgQElucHV0KCkgd2VpZ2h0O1xyXG4gIEBJbnB1dCgpIGlkID0gJ2FkZE5ld1NlbGxMaXN0aW5nJztcclxuICBASW5wdXQoKSBpY29uID0gJ3N1a3UtcGx1cy1pY29uIHN1a3UtbWQnO1xyXG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzID0gJ2FkZC13aWRnZXQgYy1wb2ludGVyJztcclxuICBASW5wdXQoKSBpY29uSWQgPSAnaWNvbic7XHJcbiAgQElucHV0KCkgaWNvbkNvbG9yO1xyXG4gIEBJbnB1dCgpIGljb25DdXN0b21DbGFzcyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==