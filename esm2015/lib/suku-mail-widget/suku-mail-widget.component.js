/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuMailWidgetComponent {
    constructor() {
        // @Input() name = 'dconway@vairog.com';
        this.id = 'suku-mail-widget';
        this.size = '0.9';
        this.color = '#0f0f0f';
        this.weight = '';
        this.customClass = 'pl-3 pt-0 mb-1';
        this.icon = 'suku-mail-icon';
        this.iconId = 'mailIcon';
        this.iconCustomClass = '';
        this.imageWidth = 'img-width';
        this.widgetCustomClass = 'col mt-2';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SukuMailWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-mail-widget',
                template: "<div class=\"{{widgetCustomClass}}\">\n  <span class=\"row pb-1\">\n    <i class=\"{{icon}} {{iconCustomClass}}\" [id]=\"iconId\"></i>\n    <h2 [style.font-size.rem]=\"size\" class=\"{{customClass}}\" id=\"{{id}}\" [style.font-weight]=\"weight\"\n      [style.color]=\"color\">\n      <ng-content></ng-content>\n    </h2>\n  </span>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:var(--suku-text-label-one);word-break:break-all!important;display:inline;position:absolute;margin-left:14px;padding-top:3px}.icon{width:25px}"]
            }] }
];
/** @nocollapse */
SukuMailWidgetComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tYWlsLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1tYWlsLXdpZGdldC9zdWt1LW1haWwtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHVCQUF1QjtJQVlsQzs7UUFWUyxPQUFFLEdBQUcsa0JBQWtCLENBQUM7UUFDeEIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGdCQUFXLEdBQUcsZ0JBQWdCLENBQUM7UUFDL0IsU0FBSSxHQUFHLGdCQUFnQixDQUFDO1FBQ2YsV0FBTSxHQUFHLFVBQVUsQ0FBQztRQUNWLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLGVBQVUsR0FBRyxXQUFXLENBQUM7UUFDSixzQkFBaUIsR0FBRyxVQUFVLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVoQixRQUFRLEtBQUksQ0FBQzs7O1lBbkJkLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixnV0FBZ0Q7O2FBRWpEOzs7OztpQkFHRSxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLOzBCQUNMLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxLQUFLLFNBQUMsU0FBUzs4QkFDZixLQUFLLFNBQUMsbUJBQW1CO3lCQUN6QixLQUFLO2dDQUNMLEtBQUssU0FBQyxxQkFBcUI7Ozs7SUFUNUIscUNBQWlDOztJQUNqQyx1Q0FBc0I7O0lBQ3RCLHdDQUEyQjs7SUFDM0IseUNBQXFCOztJQUNyQiw4Q0FBd0M7O0lBQ3hDLHVDQUFpQzs7SUFDakMseUNBQXNDOztJQUN0QyxrREFBaUQ7O0lBQ2pELDZDQUFrQzs7SUFDbEMsb0RBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtbWFpbC13aWRnZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1tYWlsLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtbWFpbC13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1TWFpbFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIEBJbnB1dCgpIG5hbWUgPSAnZGNvbndheUB2YWlyb2cuY29tJztcbiAgQElucHV0KCkgaWQgPSAnc3VrdS1tYWlsLXdpZGdldCc7XG4gIEBJbnB1dCgpIHNpemUgPSAnMC45JztcbiAgQElucHV0KCkgY29sb3IgPSAnIzBmMGYwZic7XG4gIEBJbnB1dCgpIHdlaWdodCA9ICcnO1xuICBASW5wdXQoKSBjdXN0b21DbGFzcyA9ICdwbC0zIHB0LTAgbWItMSc7XG4gIEBJbnB1dCgpIGljb24gPSAnc3VrdS1tYWlsLWljb24nO1xuICBASW5wdXQoJ2ljb24taWQnKSBpY29uSWQgPSAnbWFpbEljb24nO1xuICBASW5wdXQoJ2ljb24tY3VzdG9tLWNsYXNzJykgaWNvbkN1c3RvbUNsYXNzID0gJyc7XG4gIEBJbnB1dCgpIGltYWdlV2lkdGggPSAnaW1nLXdpZHRoJztcbiAgQElucHV0KCd3aWRnZXQtY3VzdG9tLWNsYXNzJykgd2lkZ2V0Q3VzdG9tQ2xhc3MgPSAnY29sIG10LTInO1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19