/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
var SukuConfirmationComponent = /** @class */ (function () {
    function SukuConfirmationComponent() {
        this.triggerone = new EventEmitter();
        this.triggertwo = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuConfirmationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SukuConfirmationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-confirmation',
                    template: "<mat-dialog-content>\n  <div class=\"col text-center\">\n    <div class=\"row justify-content-center\">\n      <div class=\"product-boxContent\">\n        <div class=\"col pl-lg-4 pt-1 pb-3\">\n          <div class=\"row\">\n            <div class=\"col pl-lg-0 pl-0 mt-3 mb-3\">\n              <i class=\"fa fa-question iconstyle\"></i>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col pl-lg-0 pl-0 mt-2 mb-3\">\n              <span id=\"confirmation\" class=\"color pb-1 mt-3 mb-3\">\n                {{ Titleone }}\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class=\" col-sm-10 FontStyle mt-5 mb-2 text-center\">\n        {{ Titletwo }}\n      </h2>\n      <h2 class=\" col-sm-10 FontStyle2 mt-3 mb-3 text-center\">\n        {{ Titlethree }}\n      </h2>\n    </div>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <div class=\"col text-center\">\n    <div class=\"row\">\n      <div\n        class=\" col-lg-3 col-md-6 col-sm-4 col-xs-10 offset-lg-2 pl-lg-0 pr-lg-0 \"\n      >\n        <button\n          type=\"button\"\n          id=\"{{ Buttononeid }}\"\n          class=\"btn btn-default btn-lg center-block width100\"\n          mat-dialog-close\n          (click)=\"triggerone.emit()\"\n          tabindex=\"-1\"\n        >\n          {{ Buttonone }}\n        </button>\n      </div>\n      <div\n        class=\"col-lg-3 col-md-6 col-sm-4 col-xs-10 offset-lg-2 pl-lg-0 pr-lg-0\"\n      >\n        <button\n          type=\"button\"\n          tabindex=\"1\"\n          (click)=\"triggertwo.emit()\"\n          id=\"{{ Buttontwoid }}\"\n          mat-dialog-close\n          class=\"btn btn-info btn-lg center-block width100\"\n        >\n          {{ Buttontwo }}\n        </button>\n      </div>\n    </div>\n  </div>\n</mat-dialog-actions>\n",
                    styles: [".product-boxContent{width:100%;float:left;background-image:linear-gradient(to bottom,rgba(101,102,243,.06),rgba(101,102,243,.06)),radial-gradient(circle at 50% 0,#3a3a3a,#000);border-radius:5px 5px 10px 10px;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}.color{font-family:Poppins,sans-serif!important;color:#fff!important;font-size:20px;font-weight:300}.width100{width:100%}.FontStyle{font-family:Poppins,sans-serif!important;font-size:17px;letter-spacing:.4px;font-weight:700}.FontStyle2{font-family:Poppins,sans-serif!important;font-size:17px;letter-spacing:.4px;font-weight:300}.spinnerStyle{font-size:50px;padding-top:20px;padding-bottom:20px}.boxStyle{border-radius:7px 7px 22px 22px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.bgColor{background-color:#3a3a3a;opacity:.5}::ng-deep.mat-dialog-container{display:block;padding:0;border-radius:5px 5px 10px 10px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}::ng-deep.mat-dialog-content{margin:0!important;padding:0!important}.iconstyle{font-size:50px;color:#a7bf2e}"]
                }] }
    ];
    /** @nocollapse */
    SukuConfirmationComponent.ctorParameters = function () { return []; };
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
    return SukuConfirmationComponent;
}());
export { SukuConfirmationComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jb25maXJtYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY29uZmlybWF0aW9uL3N1a3UtY29uZmlybWF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWVFO1FBRlUsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVoQiw0Q0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkFqQmQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLDYxREFBaUQ7O2lCQUVsRDs7Ozs7MkJBRUUsS0FBSyxTQUFDLFdBQVc7MkJBQ2pCLEtBQUssU0FBQyxXQUFXOzZCQUNqQixLQUFLLFNBQUMsYUFBYTs0QkFDbkIsS0FBSyxTQUFDLFlBQVk7OEJBQ2xCLEtBQUssU0FBQyxlQUFlOzRCQUNyQixLQUFLLFNBQUMsWUFBWTs4QkFDbEIsS0FBSyxTQUFDLGVBQWU7NkJBQ3JCLE1BQU07NkJBQ04sTUFBTTs7SUFJVCxnQ0FBQztDQUFBLEFBbEJELElBa0JDO1NBYlkseUJBQXlCOzs7SUFDcEMsNkNBQTZCOztJQUM3Qiw2Q0FBNkI7O0lBQzdCLCtDQUFpQzs7SUFDakMsOENBQStCOztJQUMvQixnREFBb0M7O0lBQ3BDLDhDQUErQjs7SUFDL0IsZ0RBQW9DOztJQUNwQywrQ0FBMEM7O0lBQzFDLCtDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1jb25maXJtYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VDb25maXJtYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ1RpdGxlLW9uZScpIFRpdGxlb25lO1xuICBASW5wdXQoJ1RpdGxlLXR3bycpIFRpdGxldHdvO1xuICBASW5wdXQoJ1RpdGxlLXRocmVlJykgVGl0bGV0aHJlZTtcbiAgQElucHV0KCdCdXR0b24tb25lJykgQnV0dG9ub25lO1xuICBASW5wdXQoJ0J1dHRvbi1vbmUtaWQnKSBCdXR0b25vbmVpZDtcbiAgQElucHV0KCdCdXR0b24tdHdvJykgQnV0dG9udHdvO1xuICBASW5wdXQoJ0J1dHRvbi10d28taWQnKSBCdXR0b250d29pZDtcbiAgQE91dHB1dCgpIHRyaWdnZXJvbmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSB0cmlnZ2VydHdvID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19