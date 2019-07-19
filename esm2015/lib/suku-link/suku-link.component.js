/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuLinkComponent {
    constructor() {
        this.customClass = 'clearAll c-pointer';
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-link',
                template: "<span [style.font-size.px]=\"size\" [style.color]=\"color\" (click)=\"action.emit()\" [class]=\"customClass\"\n  [style.font-weight]=\"weight\">\n  <ng-content></ng-content>\n</span>\n",
                styles: [".c-pointer{cursor:pointer!important}.clearAll{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:#1d1d1d;text-decoration:underline;text-transform:uppercase}"]
            }] }
];
/** @nocollapse */
SukuLinkComponent.ctorParameters = () => [];
SukuLinkComponent.propDecorators = {
    name: [{ type: Input }],
    size: [{ type: Input }],
    color: [{ type: Input }],
    weight: [{ type: Input }],
    customClass: [{ type: Input }],
    action: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWxpbmsvc3VrdS1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8saUJBQWlCO0lBUTVCO1FBSFEsZ0JBQVcsR0FBRyxvQkFBb0IsQ0FBQztRQUNsQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVyQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixvTUFBeUM7O2FBRTFDOzs7OzttQkFFRSxLQUFLO21CQUNOLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLOzBCQUNMLEtBQUs7cUJBQ0wsTUFBTTs7OztJQUxOLGlDQUFjOztJQUNmLGlDQUFjOztJQUNkLGtDQUFlOztJQUNmLG1DQUFnQjs7SUFDaEIsd0NBQTRDOztJQUM1QyxtQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWxpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWxpbmsuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1TGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG5hbWU7XG5cdEBJbnB1dCgpIHNpemU7XG5cdEBJbnB1dCgpIGNvbG9yO1xuXHRASW5wdXQoKSB3ZWlnaHQ7XG5cdEBJbnB1dCgpIGN1c3RvbUNsYXNzID0gJ2NsZWFyQWxsIGMtcG9pbnRlcic7XG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=