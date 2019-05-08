/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
export class SukuConfirmationComponent {
    constructor() {
        this.triggerone = new EventEmitter();
        this.triggertwo = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SukuConfirmationComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-confirmation',
                template: "<mat-dialog-content>\n  <div class=\"col text-center\">\n    <div class=\"row justify-content-center\">\n      <div class=\"product-boxContent\">\n        <div class=\"col pl-lg-4 pt-1 pb-3\">\n          <div class=\"row\">\n            <div class=\"col pl-lg-0 pl-0 mt-3 mb-3\">\n              <i class=\"fa fa-question iconstyle\"></i>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col pl-lg-0 pl-0 mt-2 mb-3\">\n              <span id=\"confirmation\" class=\"color pb-1 mt-3 mb-3\">\n                {{ Titleone }}\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class=\" col-sm-10 FontStyle mt-5 mb-2 text-center\">\n        {{ Titletwo }}\n      </h2>\n      <h2 class=\" col-sm-10 FontStyle2 mt-3 mb-3 text-center\">\n        {{ Titlethree }}\n      </h2>\n    </div>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <div class=\"col text-center\">\n    <div class=\"row\">\n      <div\n        class=\" col-lg-3 col-md-6 col-sm-4 col-xs-10 offset-lg-2 pl-lg-0 pr-lg-0 \"\n      >\n        <button\n          type=\"button\"\n          id=\"{{ Buttononeid }}\"\n          class=\"btn btn-default btn-lg center-block width100\"\n          mat-dialog-close\n          (click)=\"triggerone.emit()\"\n          tabindex=\"-1\"\n        >\n          {{ Buttonone }}\n        </button>\n      </div>\n      <div\n        class=\"col-lg-3 col-md-6 col-sm-4 col-xs-10 offset-lg-2 pl-lg-0 pr-lg-0\"\n      >\n        <button\n          type=\"button\"\n          tabindex=\"1\"\n          (click)=\"triggertwo.emit()\"\n          id=\"{{ Buttontwoid }}\"\n          mat-dialog-close\n          class=\"btn btn-info btn-lg center-block width100\"\n        >\n          {{ Buttontwo }}\n        </button>\n      </div>\n    </div>\n  </div>\n</mat-dialog-actions>\n",
                styles: [".product-boxContent{width:100%;float:left;background-image:linear-gradient(to bottom,rgba(101,102,243,.06),rgba(101,102,243,.06)),radial-gradient(circle at 50% 0,#3a3a3a,#000);border-radius:12px;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}.color{font-family:Poppins,sans-serif!important;color:#fff!important;font-size:20px;font-weight:300}.width100{width:100%}.FontStyle{font-family:Poppins,sans-serif!important;font-size:17px;letter-spacing:.4px;font-weight:700}.FontStyle2{font-family:Poppins,sans-serif!important;font-size:17px;letter-spacing:.4px;font-weight:300}.spinnerStyle{font-size:50px;padding-top:20px;padding-bottom:20px}.boxStyle{border-radius:7px 7px 22px 22px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.bgColor{background-color:#3a3a3a;opacity:.5}::ng-deep.mat-dialog-container{display:block;padding:0;border-radius:10px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}::ng-deep.mat-dialog-content{margin:0!important;padding:0!important}.iconstyle{font-size:50px;color:#a7bf2e}"]
            }] }
];
/** @nocollapse */
SukuConfirmationComponent.ctorParameters = () => [];
SukuConfirmationComponent.propDecorators = {
    Titleone: [{ type: Input, args: ['Title-one',] }],
    Titletwo: [{ type: Input, args: ['Title-two',] }],
    Titlethree: [{ type: Input, args: ['Title-three',] }],
    Buttonone: [{ type: Input, args: ['Button-one',] }],
    Buttononeid: [{ type: Input, args: ['Button-one-id',] }],
    Buttontwo: [{ type: Input, args: ['Button-two',] }],
    Buttontwoid: [{ type: Input, args: ['Button-two-id',] }],
    triggerone: [{ type: Output }],
    triggertwo: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuConfirmationComponent.prototype.Titleone;
    /** @type {?} */
    SukuConfirmationComponent.prototype.Titletwo;
    /** @type {?} */
    SukuConfirmationComponent.prototype.Titlethree;
    /** @type {?} */
    SukuConfirmationComponent.prototype.Buttonone;
    /** @type {?} */
    SukuConfirmationComponent.prototype.Buttononeid;
    /** @type {?} */
    SukuConfirmationComponent.prototype.Buttontwo;
    /** @type {?} */
    SukuConfirmationComponent.prototype.Buttontwoid;
    /** @type {?} */
    SukuConfirmationComponent.prototype.triggerone;
    /** @type {?} */
    SukuConfirmationComponent.prototype.triggertwo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jb25maXJtYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY29uZmlybWF0aW9uL3N1a3UtY29uZmlybWF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8seUJBQXlCO0lBVXBDO1FBRlUsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVoQixRQUFRLEtBQUksQ0FBQzs7O1lBakJkLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qiw2MURBQWlEOzthQUVsRDs7Ozs7dUJBRUUsS0FBSyxTQUFDLFdBQVc7dUJBQ2pCLEtBQUssU0FBQyxXQUFXO3lCQUNqQixLQUFLLFNBQUMsYUFBYTt3QkFDbkIsS0FBSyxTQUFDLFlBQVk7MEJBQ2xCLEtBQUssU0FBQyxlQUFlO3dCQUNyQixLQUFLLFNBQUMsWUFBWTswQkFDbEIsS0FBSyxTQUFDLGVBQWU7eUJBQ3JCLE1BQU07eUJBQ04sTUFBTTs7OztJQVJQLDZDQUE2Qjs7SUFDN0IsNkNBQTZCOztJQUM3QiwrQ0FBaUM7O0lBQ2pDLDhDQUErQjs7SUFDL0IsZ0RBQW9DOztJQUNwQyw4Q0FBK0I7O0lBQy9CLGdEQUFvQzs7SUFDcEMsK0NBQTBDOztJQUMxQywrQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtY29uZmlybWF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Q29uZmlybWF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdUaXRsZS1vbmUnKSBUaXRsZW9uZTtcbiAgQElucHV0KCdUaXRsZS10d28nKSBUaXRsZXR3bztcbiAgQElucHV0KCdUaXRsZS10aHJlZScpIFRpdGxldGhyZWU7XG4gIEBJbnB1dCgnQnV0dG9uLW9uZScpIEJ1dHRvbm9uZTtcbiAgQElucHV0KCdCdXR0b24tb25lLWlkJykgQnV0dG9ub25laWQ7XG4gIEBJbnB1dCgnQnV0dG9uLXR3bycpIEJ1dHRvbnR3bztcbiAgQElucHV0KCdCdXR0b24tdHdvLWlkJykgQnV0dG9udHdvaWQ7XG4gIEBPdXRwdXQoKSB0cmlnZ2Vyb25lID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdHJpZ2dlcnR3byA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==