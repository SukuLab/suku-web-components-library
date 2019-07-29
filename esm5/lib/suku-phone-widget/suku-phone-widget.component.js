/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuPhoneWidgetComponent = /** @class */ (function () {
    function SukuPhoneWidgetComponent() {
        this.id = '';
        this.name = '4806069863';
        this.size = '0.9';
        this.color = '#3e3e3e';
        this.weight = '500';
        this.customClass = 'pl-3 mt-auto mb-auto';
        this.icon = 'suku-phone-icon';
        this.iconId = 'phoneIcon';
        this.iconCustomClass = 'icon';
        this.widgetCustomClass = 'col';
    }
    /**
     * @return {?}
     */
    SukuPhoneWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SukuPhoneWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-phone-widget',
                    template: "<div class=\"{{widgetCustomClass}}\">\n  <span class=\"row pb-1\">\n    <i class=\"{{icon}} {{iconCustomClass}}\" [id]=\"iconId\"></i>\n    <h2 [style.font-size.rem]=\"size\" class=\"{{customClass}}\" id=\"{{id}}\" [style.font-weight]=\"weight\"\n      [style.color]=\"color\">\n      <ng-content></ng-content>\n    </h2>\n  </span>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-secondary-font)!important;font-size:var(--suku-font-size-2);font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:var(--suku-text-label-one);position:absolute;display:inline;margin-left:14px;padding-top:3px;word-break:break-word!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuPhoneWidgetComponent.ctorParameters = function () { return []; };
    SukuPhoneWidgetComponent.propDecorators = {
        id: [{ type: Input }],
        name: [{ type: Input }],
        size: [{ type: Input }],
        color: [{ type: Input }],
        weight: [{ type: Input }],
        customClass: [{ type: Input }],
        icon: [{ type: Input, args: ['icon',] }],
        iconId: [{ type: Input, args: ['icon-id',] }],
        iconCustomClass: [{ type: Input, args: ['icon-custom-class',] }],
        widgetCustomClass: [{ type: Input, args: ['widget-custom-class',] }]
    };
    return SukuPhoneWidgetComponent;
}());
export { SukuPhoneWidgetComponent };
if (false) {
    /** @type {?} */
    SukuPhoneWidgetComponent.prototype.id;
    /** @type {?} */
    SukuPhoneWidgetComponent.prototype.name;
    /** @type {?} */
    SukuPhoneWidgetComponent.prototype.size;
    /** @type {?} */
    SukuPhoneWidgetComponent.prototype.color;
    /** @type {?} */
    SukuPhoneWidgetComponent.prototype.weight;
    /** @type {?} */
    SukuPhoneWidgetComponent.prototype.customClass;
    /** @type {?} */
    SukuPhoneWidgetComponent.prototype.icon;
    /** @type {?} */
    SukuPhoneWidgetComponent.prototype.iconId;
    /** @type {?} */
    SukuPhoneWidgetComponent.prototype.iconCustomClass;
    /** @type {?} */
    SukuPhoneWidgetComponent.prototype.widgetCustomClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1waG9uZS13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcGhvbmUtd2lkZ2V0L3N1a3UtcGhvbmUtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFnQkU7UUFWUyxPQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1IsU0FBSSxHQUFHLFlBQVksQ0FBQztRQUNwQixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZ0JBQVcsR0FBRyxzQkFBc0IsQ0FBQztRQUMvQixTQUFJLEdBQUcsaUJBQWlCLENBQUM7UUFDdEIsV0FBTSxHQUFHLFdBQVcsQ0FBQztRQUNYLG9CQUFlLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztJQUN6QyxDQUFDOzs7O0lBRWhCLDJDQUFROzs7SUFBUixjQUFZLENBQUM7O2dCQWxCZCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsZ1dBQWlEOztpQkFFbEQ7Ozs7O3FCQUVFLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxLQUFLO3VCQUNMLEtBQUssU0FBQyxNQUFNO3lCQUNaLEtBQUssU0FBQyxTQUFTO2tDQUNmLEtBQUssU0FBQyxtQkFBbUI7b0NBQ3pCLEtBQUssU0FBQyxxQkFBcUI7O0lBSTlCLCtCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FkWSx3QkFBd0I7OztJQUNuQyxzQ0FBaUI7O0lBQ2pCLHdDQUE2Qjs7SUFDN0Isd0NBQXNCOztJQUN0Qix5Q0FBMkI7O0lBQzNCLDBDQUF3Qjs7SUFDeEIsK0NBQThDOztJQUM5Qyx3Q0FBd0M7O0lBQ3hDLDBDQUF1Qzs7SUFDdkMsbURBQXFEOztJQUNyRCxxREFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1waG9uZS13aWRnZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1waG9uZS13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXBob25lLXdpZGdldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VQaG9uZVdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlkID0gJyc7XG4gIEBJbnB1dCgpIG5hbWUgPSAnNDgwNjA2OTg2Myc7XG4gIEBJbnB1dCgpIHNpemUgPSAnMC45JztcbiAgQElucHV0KCkgY29sb3IgPSAnIzNlM2UzZSc7XG4gIEBJbnB1dCgpIHdlaWdodCA9ICc1MDAnO1xuICBASW5wdXQoKSBjdXN0b21DbGFzcyA9ICdwbC0zIG10LWF1dG8gbWItYXV0byc7XG4gIEBJbnB1dCgnaWNvbicpIGljb24gPSAnc3VrdS1waG9uZS1pY29uJztcbiAgQElucHV0KCdpY29uLWlkJykgaWNvbklkID0gJ3Bob25lSWNvbic7XG4gIEBJbnB1dCgnaWNvbi1jdXN0b20tY2xhc3MnKSBpY29uQ3VzdG9tQ2xhc3MgPSAnaWNvbic7XG4gIEBJbnB1dCgnd2lkZ2V0LWN1c3RvbS1jbGFzcycpIHdpZGdldEN1c3RvbUNsYXNzID0gJ2NvbCc7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG59XG4iXX0=