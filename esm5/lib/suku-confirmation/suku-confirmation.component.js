/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
var SukuConfirmationComponent = /** @class */ (function () {
    function SukuConfirmationComponent() {
        this.Buttonone = "Cancel";
        this.Buttontwo = "Submit";
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
                    template: "<mat-dialog-content>\n  <div class=\"col text-center\">\n    <div class=\"row justify-content-center\">\n      <div class=\"product-boxContent\">\n        <div class=\"col pl-lg-4 pt-1 pb-3\">\n          <div class=\"row\">\n            <div class=\"col pl-lg-0 pl-0 mt-3 mb-3\">\n              <i class=\"fa fa-question iconstyle\"></i>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col pl-lg-0 pl-0 mt-2 mb-3\">\n              <span id=\"confirmation\" class=\"color pb-1 mt-3 mb-3\">\n                {{ Titleone }}\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class=\" col-sm-10 FontStyle mt-5 mb-2 text-center\">\n        {{ Titletwo }}\n      </h2>\n      <h2 class=\" col-sm-10 FontStyle2 mt-3 mb-3 text-center\">\n        {{ Titlethree }}\n      </h2>\n    </div>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <div class=\"col text-center\">\n    <div class=\"row\">\n      <div class=\" col-sm-6 justify-content-center\">\n        <button type=\"button\" id=\"{{ Buttononeid }}\" class=\"btn btn-default btn-lg center-block minWidth50\" mat-dialog-close\n          (click)=\"triggerone.emit(false)\" tabindex=\"-1\">\n          {{ Buttonone }}\n        </button>\n      </div>\n      <div class=\"col-sm-6\">\n        <button type=\"button\" tabindex=\"1\" (click)=\"triggertwo.emit(true)\" id=\"{{ Buttontwoid }}\" mat-dialog-close\n          class=\"btn btn-info btn-lg center-block minWidth50\">\n          {{ Buttontwo }}\n        </button>\n      </div>\n    </div>\n  </div>\n</mat-dialog-actions>",
                    styles: [".product-boxContent{width:100%;float:left;background-image:linear-gradient(to bottom,rgba(101,102,243,.06),rgba(101,102,243,.06)),radial-gradient(circle at 50% 0,#3a3a3a,#000);border-radius:0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}.color{font-family:Poppins,sans-serif!important;color:#fff!important;font-size:20px;font-weight:300}.width100{width:100%}.FontStyle{font-family:Poppins,sans-serif!important;font-size:17px;letter-spacing:.4px;font-weight:700}.FontStyle2{font-family:Poppins,sans-serif!important;font-size:17px;letter-spacing:.4px;font-weight:300}.spinnerStyle{font-size:50px;padding-top:20px;padding-bottom:20px}.boxStyle{border-radius:7px 7px 22px 22px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.bgColor{background-color:#3a3a3a;opacity:.5}::ng-deep.mat-dialog-container{display:block;padding:0;border-radius:5px 5px 10px 10px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}::ng-deep.mat-dialog-content{margin:0!important;padding:0!important}.iconstyle{font-size:50px;color:#a7bf2e}.minWidth50{min-width:50%}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jb25maXJtYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY29uZmlybWF0aW9uL3N1a3UtY29uZmlybWF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWVFO1FBTnFCLGNBQVMsR0FBRyxRQUFRLENBQUM7UUFFckIsY0FBUyxHQUFHLFFBQVEsQ0FBQztRQUVoQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRWhCLDRDQUFROzs7SUFBUixjQUFZLENBQUM7O2dCQWpCZCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsMG1EQUFpRDs7aUJBRWxEOzs7OzsyQkFFRSxLQUFLLFNBQUMsV0FBVzsyQkFDakIsS0FBSyxTQUFDLFdBQVc7NkJBQ2pCLEtBQUssU0FBQyxhQUFhOzRCQUNuQixLQUFLLFNBQUMsWUFBWTs4QkFDbEIsS0FBSyxTQUFDLGVBQWU7NEJBQ3JCLEtBQUssU0FBQyxZQUFZOzhCQUNsQixLQUFLLFNBQUMsZUFBZTs2QkFDckIsTUFBTTs2QkFDTixNQUFNOztJQUlULGdDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FiWSx5QkFBeUI7OztJQUNwQyw2Q0FBNkI7O0lBQzdCLDZDQUE2Qjs7SUFDN0IsK0NBQWlDOztJQUNqQyw4Q0FBMEM7O0lBQzFDLGdEQUFvQzs7SUFDcEMsOENBQTBDOztJQUMxQyxnREFBb0M7O0lBQ3BDLCtDQUEwQzs7SUFDMUMsK0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWNvbmZpcm1hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWNvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUNvbmZpcm1hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnVGl0bGUtb25lJykgVGl0bGVvbmU7XG4gIEBJbnB1dCgnVGl0bGUtdHdvJykgVGl0bGV0d287XG4gIEBJbnB1dCgnVGl0bGUtdGhyZWUnKSBUaXRsZXRocmVlO1xuICBASW5wdXQoJ0J1dHRvbi1vbmUnKSBCdXR0b25vbmUgPSBcIkNhbmNlbFwiO1xuICBASW5wdXQoJ0J1dHRvbi1vbmUtaWQnKSBCdXR0b25vbmVpZDtcbiAgQElucHV0KCdCdXR0b24tdHdvJykgQnV0dG9udHdvID0gXCJTdWJtaXRcIjtcbiAgQElucHV0KCdCdXR0b24tdHdvLWlkJykgQnV0dG9udHdvaWQ7XG4gIEBPdXRwdXQoKSB0cmlnZ2Vyb25lID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdHJpZ2dlcnR3byA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==