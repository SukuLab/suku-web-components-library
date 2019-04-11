/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<div class=\"button-container d-flex flex-column align-items-center\">\n  <div class=\"suku-button d-flex justify-content-center align-items-center\" [ngClass]=\"{\n      'disabled': buttonData.disabled\n    }\" (click)=\"onClick()\">\n    <i [ngClass]=\"[buttonData.icon, 'icon']\"></i>\n  </div>\n  <div class=\"suku-button-text text-center mt-3\">\n    <h3 class=\"button-title\">{{buttonData.title}}</h3>\n  </div>\n</div>",
                styles: [".button-container{width:106.4px;font-family:Poppins,sans-serif;font-weight:700}.suku-button{height:80px;width:80px;background:#303030;color:#d8f40b;box-shadow:0 3px 3px 0 rgba(0,0,0,.5);transition:.1s ease-in-out;border-radius:12px 28px}.suku-button:hover{-webkit-transform:translateY(-3px);transform:translateY(-3px);box-shadow:0 6px 3px 0 rgba(0,0,0,.5)}.suku-button:active{box-shadow:0 4px 3px 0 rgba(0,0,0,.5);-webkit-transform:translateY(-1px);transform:translateY(-1px);transition:none}.disabled{background:#d9d9d9;color:#7f7f7f;cursor:default}.disabled:active,.disabled:hover{box-shadow:0 3px 3px 0 rgba(0,0,0,.5);-webkit-transform:translateY(0);transform:translateY(0)}.icon{font-size:40px}.button-title{font-size:14px;font-weight:700}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ob21lcGFnZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtaG9tZXBhZ2UtYnV0dG9uL3N1a3UtaG9tZXBhZ2UtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU81RCxNQUFNLE9BQU8sMkJBQTJCO0lBS3ZDO1FBRlUsa0JBQWEsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVwRCxDQUFDOzs7O0lBRWhCLFFBQVEsS0FBSSxDQUFDOzs7O0lBRWIsT0FBTztRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlDO0lBQ0YsQ0FBQzs7O1lBbEJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxzYkFBb0Q7O2FBRXBEOzs7Ozt5QkFFQyxLQUFLOzRCQUVMLE1BQU07Ozs7SUFGUCxpREFBd0M7O0lBRXhDLG9EQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1a3VIb21lcGFnZUJ1dHRvbiB9IGZyb20gJy4vc3VrdS1ob21lcGFnZS1idXR0b24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LWhvbWVwYWdlLWJ1dHRvbicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWhvbWVwYWdlLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LWhvbWVwYWdlLWJ1dHRvbi5jb21wb25lbnQuc2NzcycgXSxcbn0pXG5leHBvcnQgY2xhc3MgU3VrdUhvbWVwYWdlQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgYnV0dG9uRGF0YTogU3VrdUhvbWVwYWdlQnV0dG9uO1xuXG5cdEBPdXRwdXQoKSBzZW5kUm91dGVQYXRoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bmdPbkluaXQoKSB7fVxuXG5cdG9uQ2xpY2soKSB7XG5cdFx0aWYgKCF0aGlzLmJ1dHRvbkRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdHRoaXMuc2VuZFJvdXRlUGF0aC5lbWl0KHRoaXMuYnV0dG9uRGF0YS5wYXRoKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==