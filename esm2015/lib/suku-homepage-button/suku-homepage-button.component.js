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
                template: "<div class=\"button-container d-flex flex-column align-items-center\">\r\n  <div class=\"suku-button d-flex justify-content-center align-items-center\" [ngClass]=\"{\r\n      'disabled': buttonData.disabled\r\n    }\" (click)=\"onClick()\" id=\"{{buttonData?.id}}\">\r\n    <i [ngClass]=\"[buttonData.icon, 'icon']\"></i>\r\n  </div>\r\n  <div class=\"suku-button-text text-center mt-3\">\r\n    <h3 class=\"button-title\">{{buttonData.title}}</h3>\r\n  </div>\r\n</div>",
                styles: [".button-container{width:106.4px;font-family:Poppins,sans-serif;font-weight:700}.suku-button{height:80px;width:80px;background:#303030;color:#d8f40b;cursor:pointer!important;box-shadow:0 3px 3px 0 rgba(0,0,0,.5);transition:.1s ease-in-out;border-radius:12px 28px}.suku-button:hover{-webkit-transform:translateY(-3px);transform:translateY(-3px);box-shadow:0 6px 3px 0 rgba(0,0,0,.5)}.suku-button:active{box-shadow:0 4px 3px 0 rgba(0,0,0,.5);-webkit-transform:translateY(-1px);transform:translateY(-1px);transition:none}.disabled{background:#d9d9d9;color:#7f7f7f;cursor:default}.disabled:active,.disabled:hover{box-shadow:0 3px 3px 0 rgba(0,0,0,.5);-webkit-transform:translateY(0);transform:translateY(0)}.icon{font-size:40px}.button-title{font-size:14px;font-weight:700}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ob21lcGFnZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtaG9tZXBhZ2UtYnV0dG9uL3N1a3UtaG9tZXBhZ2UtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU81RCxNQUFNLE9BQU8sMkJBQTJCO0lBS3ZDO1FBRlUsa0JBQWEsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVwRCxDQUFDOzs7O0lBRWhCLFFBQVEsS0FBSSxDQUFDOzs7O0lBRWIsT0FBTztRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlDO0lBQ0YsQ0FBQzs7O1lBbEJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxrZUFBb0Q7O2FBRXBEOzs7Ozt5QkFFQyxLQUFLOzRCQUVMLE1BQU07Ozs7SUFGUCxpREFBd0M7O0lBRXhDLG9EQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3VrdUhvbWVwYWdlQnV0dG9uIH0gZnJvbSAnLi9zdWt1LWhvbWVwYWdlLWJ1dHRvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3N1a3UtaG9tZXBhZ2UtYnV0dG9uJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1ob21lcGFnZS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LWhvbWVwYWdlLWJ1dHRvbi5jb21wb25lbnQuc2NzcycgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VIb21lcGFnZUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgYnV0dG9uRGF0YTogU3VrdUhvbWVwYWdlQnV0dG9uO1xyXG5cclxuXHRAT3V0cHV0KCkgc2VuZFJvdXRlUGF0aDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cclxuXHRvbkNsaWNrKCkge1xyXG5cdFx0aWYgKCF0aGlzLmJ1dHRvbkRhdGEuZGlzYWJsZWQpIHtcclxuXHRcdFx0dGhpcy5zZW5kUm91dGVQYXRoLmVtaXQodGhpcy5idXR0b25EYXRhLnBhdGgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=