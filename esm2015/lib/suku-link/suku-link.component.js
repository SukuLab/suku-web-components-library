/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<span [style.font-size.px]=\"size\" [style.color]=\"color\" (click)=\"action.emit()\" [class]=\"customClass\"\r\n  [style.font-weight]=\"weight\">\r\n  <ng-content></ng-content>\r\n</span>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWxpbmsvc3VrdS1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8saUJBQWlCO0lBUTVCO1FBSFEsZ0JBQVcsR0FBRyxvQkFBb0IsQ0FBQztRQUNsQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVyQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiw0TUFBeUM7O2FBRTFDOzs7OzttQkFFRSxLQUFLO21CQUNOLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLOzBCQUNMLEtBQUs7cUJBQ0wsTUFBTTs7OztJQUxOLGlDQUFjOztJQUNmLGlDQUFjOztJQUNkLGtDQUFlOztJQUNmLG1DQUFnQjs7SUFDaEIsd0NBQTRDOztJQUM1QyxtQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3UtbGluaycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtbGluay5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1saW5rLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VMaW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBuYW1lO1xyXG5cdEBJbnB1dCgpIHNpemU7XHJcblx0QElucHV0KCkgY29sb3I7XHJcblx0QElucHV0KCkgd2VpZ2h0O1xyXG5cdEBJbnB1dCgpIGN1c3RvbUNsYXNzID0gJ2NsZWFyQWxsIGMtcG9pbnRlcic7XHJcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=