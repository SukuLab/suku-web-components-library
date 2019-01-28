/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuLinkComponent = /** @class */ (function () {
    function SukuLinkComponent() {
        this.customClass = 'clearAll c-pointer';
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuLinkComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-link',
                    template: "<span [style.font-size.px]=\"size\" [style.color]=\"color\" (click)=\"action.emit()\" [class]=\"customClass\" [style.font-weight]=\"weight\">\n  <ng-content></ng-content>\n  </span>\n",
                    styles: [".c-pointer{cursor:pointer!important}.clearAll{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:#1d1d1d;text-decoration:underline;text-transform:uppercase}"]
                }] }
    ];
    /** @nocollapse */
    SukuLinkComponent.ctorParameters = function () { return []; };
    SukuLinkComponent.propDecorators = {
        name: [{ type: Input }],
        size: [{ type: Input }],
        color: [{ type: Input }],
        weight: [{ type: Input }],
        customClass: [{ type: Input }],
        action: [{ type: Output }]
    };
    return SukuLinkComponent;
}());
export { SukuLinkComponent };
if (false) {
    /** @type {?} */
    SukuLinkComponent.prototype.name;
    /** @type {?} */
    SukuLinkComponent.prototype.size;
    /** @type {?} */
    SukuLinkComponent.prototype.color;
    /** @type {?} */
    SukuLinkComponent.prototype.weight;
    /** @type {?} */
    SukuLinkComponent.prototype.customClass;
    /** @type {?} */
    SukuLinkComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWxpbmsvc3VrdS1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWFFO1FBSFEsZ0JBQVcsR0FBRyxvQkFBb0IsQ0FBQztRQUNsQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVyQixDQUFDOzs7O0lBRWpCLG9DQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLG1NQUF5Qzs7aUJBRTFDOzs7Ozt1QkFFRSxLQUFLO3VCQUNOLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7eUJBQ0wsTUFBTTs7SUFPUix3QkFBQztDQUFBLEFBbEJELElBa0JDO1NBYlksaUJBQWlCOzs7SUFDNUIsaUNBQWM7O0lBQ2YsaUNBQWM7O0lBQ2Qsa0NBQWU7O0lBQ2YsbUNBQWdCOztJQUNoQix3Q0FBNEM7O0lBQzVDLG1DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtbGluay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtbGluay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VMaW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbmFtZTtcblx0QElucHV0KCkgc2l6ZTtcblx0QElucHV0KCkgY29sb3I7XG5cdEBJbnB1dCgpIHdlaWdodDtcblx0QElucHV0KCkgY3VzdG9tQ2xhc3MgPSAnY2xlYXJBbGwgYy1wb2ludGVyJztcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==