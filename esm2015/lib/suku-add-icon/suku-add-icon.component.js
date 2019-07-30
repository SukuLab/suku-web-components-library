/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuAddIconComponent {
    constructor() {
        this.id = 'addNewSellListing';
        this.icon = 'fa fa-plus';
        this.customClass = 'add-widget c-pointer';
        this.iconId = 'icon';
        this.iconCustomClass = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuAddIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-add-icon',
                template: "<div class=\"d-flex\">\n  <div class=\"add-btn mt-1\">\n    <span>\n      <i class=\"{{icon}} {{iconCustomClass}}\" [id]=\"iconId\" [style.color]=\"iconColor\"></i>\n      <span [style.font-size.px]=\"size\" [style.color]=\"color\" [class]=\"customClass\" [style.font-weight]=\"weight\">\n        <ng-content></ng-content>\n      </span>\n    </span>\n  </div>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.c-pointer{cursor:pointer!important}.add-widget{font-family:var(--suku-ternary-font);font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:var(--suku-text-label-one)!important;text-decoration:underline;text-transform:uppercase}.add-btn{width:100%;float:left}.add-btn span{width:100px;height:33px;float:left;font-family:var(--suku-ternary-font);font-size:12px;text-transform:uppercase;line-height:32px;text-align:left;text-decoration:none;position:relative;padding:0 0 0 20px}.add-btn span i{width:33px;height:33px;float:none;display:inline-block;vertical-align:middle;font-size:12px;color:#d4c5a0;text-align:center;line-height:31px;border:1px solid #ebedee;border-radius:33px;position:absolute;top:0;left:0;z-index:10}.add-btn a:hover{text-decoration:underline}"]
            }] }
];
/** @nocollapse */
SukuAddIconComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hZGQtaWNvbi9zdWt1LWFkZC1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTyxvQkFBb0I7SUFXL0I7UUFQUyxPQUFFLEdBQUcsbUJBQW1CLENBQUM7UUFDekIsU0FBSSxHQUFHLFlBQVksQ0FBQztRQUNwQixnQkFBVyxHQUFHLHNCQUFzQixDQUFDO1FBQ3JDLFdBQU0sR0FBRyxNQUFNLENBQUM7UUFFaEIsb0JBQWUsR0FBRyxFQUFFLENBQUM7SUFFZCxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6Qiw0WEFBNkM7O2FBRTlDOzs7OzttQkFFRSxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztpQkFDTCxLQUFLO21CQUNMLEtBQUs7MEJBQ0wsS0FBSztxQkFDTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7OztJQVJOLG9DQUFjOztJQUNkLHFDQUFlOztJQUNmLHNDQUFnQjs7SUFDaEIsa0NBQWtDOztJQUNsQyxvQ0FBNkI7O0lBQzdCLDJDQUE4Qzs7SUFDOUMsc0NBQXlCOztJQUN6Qix5Q0FBbUI7O0lBQ25CLCtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1hZGQtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWFkZC1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1hZGQtaWNvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VBZGRJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc2l6ZTtcbiAgQElucHV0KCkgY29sb3I7XG4gIEBJbnB1dCgpIHdlaWdodDtcbiAgQElucHV0KCkgaWQgPSAnYWRkTmV3U2VsbExpc3RpbmcnO1xuICBASW5wdXQoKSBpY29uID0gJ2ZhIGZhLXBsdXMnO1xuICBASW5wdXQoKSBjdXN0b21DbGFzcyA9ICdhZGQtd2lkZ2V0IGMtcG9pbnRlcic7XG4gIEBJbnB1dCgpIGljb25JZCA9ICdpY29uJztcbiAgQElucHV0KCkgaWNvbkNvbG9yO1xuICBASW5wdXQoKSBpY29uQ3VzdG9tQ2xhc3MgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==