/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SukuHomepageButton } from './suku-homepage-button';
var SukuHomepageButtonComponent = /** @class */ (function () {
    function SukuHomepageButtonComponent() {
        this.sendRoutePath = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuHomepageButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    SukuHomepageButtonComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (!this.buttonData.disabled) {
            this.sendRoutePath.emit(this.buttonData.path);
        }
    };
    SukuHomepageButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-homepage-button',
                    template: "<div class=\"button-container d-flex flex-column align-items-center\">\n  <div class=\"suku-button d-flex justify-content-center align-items-center\" [ngClass]=\"{\n      'disabled': buttonData.disabled\n    }\" (click)=\"onClick()\">\n    <i [ngClass]=\"[buttonData.icon, 'icon']\"></i>\n  </div>\n  <div class=\"suku-button-text text-center mt-3\">\n    <h3 class=\"button-title\">{{buttonData.title}}</h3>\n  </div>\n</div>",
                    styles: [".button-container{width:106.4px;font-family:Poppins,sans-serif;font-weight:700}.suku-button{height:80px;width:80px;background:#303030;color:#d8f40b;box-shadow:0 3px 3px 0 rgba(0,0,0,.5);transition:.1s ease-in-out;border-radius:12px 28px}.suku-button:hover{-webkit-transform:translateY(-3px);transform:translateY(-3px);box-shadow:0 6px 3px 0 rgba(0,0,0,.5)}.suku-button:active{box-shadow:0 4px 3px 0 rgba(0,0,0,.5);-webkit-transform:translateY(-1px);transform:translateY(-1px);transition:none}.disabled{background:#d9d9d9;color:#7f7f7f;cursor:default}.disabled:active,.disabled:hover{box-shadow:0 3px 3px 0 rgba(0,0,0,.5);-webkit-transform:translateY(0);transform:translateY(0)}.icon{font-size:40px}.button-title{font-size:14px;font-weight:700}"]
                }] }
    ];
    /** @nocollapse */
    SukuHomepageButtonComponent.ctorParameters = function () { return []; };
    SukuHomepageButtonComponent.propDecorators = {
        buttonData: [{ type: Input }],
        sendRoutePath: [{ type: Output }]
    };
    return SukuHomepageButtonComponent;
}());
export { SukuHomepageButtonComponent };
if (false) {
    /** @type {?} */
    SukuHomepageButtonComponent.prototype.buttonData;
    /** @type {?} */
    SukuHomepageButtonComponent.prototype.sendRoutePath;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ob21lcGFnZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtaG9tZXBhZ2UtYnV0dG9uL3N1a3UtaG9tZXBhZ2UtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RDtJQVVDO1FBRlUsa0JBQWEsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVwRCxDQUFDOzs7O0lBRWhCLDhDQUFROzs7SUFBUixjQUFZLENBQUM7Ozs7SUFFYiw2Q0FBTzs7O0lBQVA7UUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QztJQUNGLENBQUM7O2dCQWxCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsc2JBQW9EOztpQkFFcEQ7Ozs7OzZCQUVDLEtBQUs7Z0NBRUwsTUFBTTs7SUFXUixrQ0FBQztDQUFBLEFBbkJELElBbUJDO1NBZFksMkJBQTJCOzs7SUFDdkMsaURBQXdDOztJQUV4QyxvREFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWt1SG9tZXBhZ2VCdXR0b24gfSBmcm9tICcuL3N1a3UtaG9tZXBhZ2UtYnV0dG9uJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1ob21lcGFnZS1idXR0b24nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1ob21lcGFnZS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1ob21lcGFnZS1idXR0b24uY29tcG9uZW50LnNjc3MnIF0sXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VIb21lcGFnZUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIGJ1dHRvbkRhdGE6IFN1a3VIb21lcGFnZUJ1dHRvbjtcblxuXHRAT3V0cHV0KCkgc2VuZFJvdXRlUGF0aDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdG5nT25Jbml0KCkge31cblxuXHRvbkNsaWNrKCkge1xuXHRcdGlmICghdGhpcy5idXR0b25EYXRhLmRpc2FibGVkKSB7XG5cdFx0XHR0aGlzLnNlbmRSb3V0ZVBhdGguZW1pdCh0aGlzLmJ1dHRvbkRhdGEucGF0aCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=