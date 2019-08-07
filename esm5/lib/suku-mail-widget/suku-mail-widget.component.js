/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuMailWidgetComponent = /** @class */ (function () {
    function SukuMailWidgetComponent() {
        // @Input() name = 'dconway@vairog.com';
        this.id = 'suku-mail-widget';
        this.size = '0.9';
        this.color = '#0f0f0f';
        this.weight = '';
        this.customClass = 'pl-3 pt-0 mb-1';
        this.icon = 'suku-mail-icon suku-xs';
        this.iconId = 'mailIcon';
        this.iconCustomClass = '';
        this.imageWidth = 'img-width';
        this.widgetCustomClass = 'col mt-2';
    }
    /**
     * @return {?}
     */
    SukuMailWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SukuMailWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-mail-widget',
                    template: "<div class=\"{{widgetCustomClass}}\">\n  <span class=\"row pb-1\">\n    <i class=\"{{icon}} {{iconCustomClass}}\" [id]=\"iconId\"></i>\n    <h2 [style.font-size.rem]=\"size\" class=\"{{customClass}}\" id=\"{{id}}\" [style.font-weight]=\"weight\"\n      [style.color]=\"color\">\n      <ng-content></ng-content>\n    </h2>\n  </span>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:var(--suku-text-label-one);word-break:break-all!important;display:inline;position:absolute;margin-left:14px;padding-top:3px}.icon{width:25px}"]
                }] }
    ];
    /** @nocollapse */
    SukuMailWidgetComponent.ctorParameters = function () { return []; };
    SukuMailWidgetComponent.propDecorators = {
        id: [{ type: Input }],
        size: [{ type: Input }],
        color: [{ type: Input }],
        weight: [{ type: Input }],
        customClass: [{ type: Input }],
        icon: [{ type: Input }],
        iconId: [{ type: Input, args: ['icon-id',] }],
        iconCustomClass: [{ type: Input, args: ['icon-custom-class',] }],
        imageWidth: [{ type: Input }],
        widgetCustomClass: [{ type: Input, args: ['widget-custom-class',] }]
    };
    return SukuMailWidgetComponent;
}());
export { SukuMailWidgetComponent };
if (false) {
    /** @type {?} */
    SukuMailWidgetComponent.prototype.id;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.size;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.color;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.weight;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.customClass;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.icon;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.iconId;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.iconCustomClass;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.imageWidth;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.widgetCustomClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tYWlsLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1tYWlsLXdpZGdldC9zdWt1LW1haWwtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFpQkU7O1FBVlMsT0FBRSxHQUFHLGtCQUFrQixDQUFDO1FBQ3hCLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixnQkFBVyxHQUFHLGdCQUFnQixDQUFDO1FBQy9CLFNBQUksR0FBRyx3QkFBd0IsQ0FBQztRQUN2QixXQUFNLEdBQUcsVUFBVSxDQUFDO1FBQ1Ysb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDeEMsZUFBVSxHQUFHLFdBQVcsQ0FBQztRQUNKLHNCQUFpQixHQUFHLFVBQVUsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRWpCLDBDQUFROzs7SUFBUixjQUFhLENBQUM7O2dCQW5CZixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsZ1dBQWdEOztpQkFFakQ7Ozs7O3FCQUdFLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUssU0FBQyxTQUFTO2tDQUNmLEtBQUssU0FBQyxtQkFBbUI7NkJBQ3pCLEtBQUs7b0NBQ0wsS0FBSyxTQUFDLHFCQUFxQjs7SUFJOUIsOEJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWZZLHVCQUF1Qjs7O0lBRWxDLHFDQUFpQzs7SUFDakMsdUNBQXNCOztJQUN0Qix3Q0FBMkI7O0lBQzNCLHlDQUFxQjs7SUFDckIsOENBQXdDOztJQUN4Qyx1Q0FBeUM7O0lBQ3pDLHlDQUFzQzs7SUFDdEMsa0RBQWlEOztJQUNqRCw2Q0FBa0M7O0lBQ2xDLG9EQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LW1haWwtd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtbWFpbC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LW1haWwtd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdU1haWxXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBASW5wdXQoKSBuYW1lID0gJ2Rjb253YXlAdmFpcm9nLmNvbSc7XG4gIEBJbnB1dCgpIGlkID0gJ3N1a3UtbWFpbC13aWRnZXQnO1xuICBASW5wdXQoKSBzaXplID0gJzAuOSc7XG4gIEBJbnB1dCgpIGNvbG9yID0gJyMwZjBmMGYnO1xuICBASW5wdXQoKSB3ZWlnaHQgPSAnJztcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3MgPSAncGwtMyBwdC0wIG1iLTEnO1xuICBASW5wdXQoKSBpY29uID0gJ3N1a3UtbWFpbC1pY29uIHN1a3UteHMnO1xuICBASW5wdXQoJ2ljb24taWQnKSBpY29uSWQgPSAnbWFpbEljb24nO1xuICBASW5wdXQoJ2ljb24tY3VzdG9tLWNsYXNzJykgaWNvbkN1c3RvbUNsYXNzID0gJyc7XG4gIEBJbnB1dCgpIGltYWdlV2lkdGggPSAnaW1nLXdpZHRoJztcbiAgQElucHV0KCd3aWRnZXQtY3VzdG9tLWNsYXNzJykgd2lkZ2V0Q3VzdG9tQ2xhc3MgPSAnY29sIG10LTInO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG59XG4iXX0=