/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SukuHomepageButton } from './suku-homepage-button';
export class SukuHomepageButtonComponent {
    constructor() {
        this.sendRoutePath = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    onClick() {
        if (!this.buttonData.disabled) {
            this.sendRoutePath.emit(this.buttonData.path);
        }
    }
}
SukuHomepageButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-homepage-button',
                template: "<div class=\"button-container d-flex flex-column align-items-center\">\r\n  <div class=\"suku-button d-flex justify-content-center align-items-center\" *ngIf=\"!(buttonData.disabled == null)\"\r\n    [ngClass]=\"{\r\n      'disabled': buttonData.disabled\r\n    }\" (click)=\"onClick()\" id=\"{{buttonData?.id}}\">\r\n    <i [ngClass]=\"[buttonData.icon, 'icon']\"></i>\r\n  </div>\r\n  <div class=\"suku-button-text text-center mt-3\" *ngIf=\"!(buttonData.disabled == null)\">\r\n    <h3 class=\"button-title\">{{buttonData.title}}</h3>\r\n  </div>\r\n </div>",
                styles: [".button-container{width:106.4px;font-family:Poppins,sans-serif;font-weight:700}.suku-button{height:80px;width:80px;background:#303030;color:#d8f40b;cursor:pointer!important;box-shadow:0 3px 3px 0 rgba(0,0,0,.5);transition:.1s ease-in-out;border-radius:12px 28px}.suku-button:hover{transform:translateY(-3px);box-shadow:0 6px 3px 0 rgba(0,0,0,.5)}.suku-button:active{box-shadow:0 4px 3px 0 rgba(0,0,0,.5);transform:translateY(-1px);transition:none}.disabled{background:#d9d9d9;color:#7f7f7f;cursor:default}.disabled:active,.disabled:hover{box-shadow:0 3px 3px 0 rgba(0,0,0,.5);transform:translateY(0)}.icon{font-size:40px}.button-title{font-size:14px;font-weight:700}"]
            }] }
];
/** @nocollapse */
SukuHomepageButtonComponent.ctorParameters = () => [];
SukuHomepageButtonComponent.propDecorators = {
    buttonData: [{ type: Input }],
    sendRoutePath: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuHomepageButtonComponent.prototype.buttonData;
    /** @type {?} */
    SukuHomepageButtonComponent.prototype.sendRoutePath;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ob21lcGFnZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtaG9tZXBhZ2UtYnV0dG9uL3N1a3UtaG9tZXBhZ2UtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU81RCxNQUFNLE9BQU8sMkJBQTJCO0lBS3ZDO1FBRlUsa0JBQWEsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVwRCxDQUFDOzs7O0lBRWhCLFFBQVEsS0FBSSxDQUFDOzs7O0lBRWIsT0FBTztRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlDO0lBQ0YsQ0FBQzs7O1lBbEJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyw0akJBQW9EOzthQUVwRDs7Ozs7eUJBRUMsS0FBSzs0QkFFTCxNQUFNOzs7O0lBRlAsaURBQXdDOztJQUV4QyxvREFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1a3VIb21lcGFnZUJ1dHRvbiB9IGZyb20gJy4vc3VrdS1ob21lcGFnZS1idXR0b24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LWhvbWVwYWdlLWJ1dHRvbicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtaG9tZXBhZ2UtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1ob21lcGFnZS1idXR0b24uY29tcG9uZW50LnNjc3MnIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1SG9tZXBhZ2VCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIGJ1dHRvbkRhdGE6IFN1a3VIb21lcGFnZUJ1dHRvbjtcclxuXHJcblx0QE91dHB1dCgpIHNlbmRSb3V0ZVBhdGg6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHJcblx0b25DbGljaygpIHtcclxuXHRcdGlmICghdGhpcy5idXR0b25EYXRhLmRpc2FibGVkKSB7XHJcblx0XHRcdHRoaXMuc2VuZFJvdXRlUGF0aC5lbWl0KHRoaXMuYnV0dG9uRGF0YS5wYXRoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19