/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuPhoneWidgetComponent = /** @class */ (function () {
    function SukuPhoneWidgetComponent() {
        this.id = '';
        this.size = '0.9';
        this.color = '#3e3e3e';
        this.weight = '500';
        this.customClass = 'pl-3 mt-auto mb-auto';
        this.icon = 'suku-phone-icon suku-xs';
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
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:var(--suku-text-label-one);position:absolute;display:inline;margin-left:14px;padding-top:3px;word-break:break-word!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuPhoneWidgetComponent.ctorParameters = function () { return []; };
    SukuPhoneWidgetComponent.propDecorators = {
        id: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1waG9uZS13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcGhvbmUtd2lkZ2V0L3N1a3UtcGhvbmUtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFlRTtRQVRTLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFDUixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZ0JBQVcsR0FBRyxzQkFBc0IsQ0FBQztRQUMvQixTQUFJLEdBQUcseUJBQXlCLENBQUM7UUFDOUIsV0FBTSxHQUFHLFdBQVcsQ0FBQztRQUNYLG9CQUFlLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztJQUN4QyxDQUFDOzs7O0lBRWpCLDJDQUFROzs7SUFBUixjQUFhLENBQUM7O2dCQWpCZixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsZ1dBQWlEOztpQkFFbEQ7Ozs7O3FCQUVFLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsS0FBSzt1QkFDTCxLQUFLLFNBQUMsTUFBTTt5QkFDWixLQUFLLFNBQUMsU0FBUztrQ0FDZixLQUFLLFNBQUMsbUJBQW1CO29DQUN6QixLQUFLLFNBQUMscUJBQXFCOztJQUk5QiwrQkFBQztDQUFBLEFBbEJELElBa0JDO1NBYlksd0JBQXdCOzs7SUFDbkMsc0NBQWlCOztJQUNqQix3Q0FBc0I7O0lBQ3RCLHlDQUEyQjs7SUFDM0IsMENBQXdCOztJQUN4QiwrQ0FBOEM7O0lBQzlDLHdDQUFnRDs7SUFDaEQsMENBQXVDOztJQUN2QyxtREFBcUQ7O0lBQ3JELHFEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXBob25lLXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXBob25lLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtcGhvbmUtd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVBob25lV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaWQgPSAnJztcbiAgQElucHV0KCkgc2l6ZSA9ICcwLjknO1xuICBASW5wdXQoKSBjb2xvciA9ICcjM2UzZTNlJztcbiAgQElucHV0KCkgd2VpZ2h0ID0gJzUwMCc7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzID0gJ3BsLTMgbXQtYXV0byBtYi1hdXRvJztcbiAgQElucHV0KCdpY29uJykgaWNvbiA9ICdzdWt1LXBob25lLWljb24gc3VrdS14cyc7XG4gIEBJbnB1dCgnaWNvbi1pZCcpIGljb25JZCA9ICdwaG9uZUljb24nO1xuICBASW5wdXQoJ2ljb24tY3VzdG9tLWNsYXNzJykgaWNvbkN1c3RvbUNsYXNzID0gJ2ljb24nO1xuICBASW5wdXQoJ3dpZGdldC1jdXN0b20tY2xhc3MnKSB3aWRnZXRDdXN0b21DbGFzcyA9ICdjb2wnO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG59XG4iXX0=