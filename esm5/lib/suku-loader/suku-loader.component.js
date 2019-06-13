/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuLoaderComponent = /** @class */ (function () {
    function SukuLoaderComponent() {
        this.waitingMessage = 'please wait...';
        this.lodingDescription = 'The document you are downloading is being authenticated against the SUKU Blockchain.';
        this.loadingMessage = 'Please wait momentarily while this process completes...';
    }
    /**
     * @return {?}
     */
    SukuLoaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuLoaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-loader',
                    template: "<div class=\" col-sm-12 col-xs-12 d-flex col-md-12 col-lg-12 p-0\">\n  <form>\n    <div class=\"col p-0\">\n      <div class=\"col p-0\">\n        <div class=\"col text-center\">\n          <div class=\"row justify-content-center\">\n            <div class=\"product-boxContent\">\n              <div class=\"col pl-lg-4 pt-1 pb-3\">\n                <div class=\"row\">\n                  <div class=\"col pl-lg-0 pl-0 mt-3 mb-3\">\n                    <img width=\"50\" src=\"../../../assets/icons/icon-96x96.png\" class=\" mb-3\" aria-hidden=\"true\" />\n                    <br />\n                    <span id=\"confirmation\" class=\"color pb-1 mt-3 mb-3\">\n                      {{ waitingMessage }}\n                    </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <h2 class=\" col-sm-10 FontStyle mt-5 mb-2 text-center\">\n              {{ lodingDescription }}\n            </h2>\n            <div class=\"col-sm-10 spinnerStyle\">\n              <i class=\"fa fa-spinner fa-spin\"></i>\n            </div>\n            <h2 class=\" col-sm-10 FontStyle2 mt-3 text-center\">\n              {{ loadingMessage }}\n            </h2>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>",
                    styles: [".product-boxContent{width:100%;float:left;background-image:linear-gradient(to bottom,rgba(101,102,243,.06),rgba(101,102,243,.06)),radial-gradient(circle at 50% 0,#3a3a3a,#000);border-radius:0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}.color{font-family:Poppins,sans-serif!important;color:#fff!important;font-size:20px;font-weight:300}.width100{width:100%}.FontStyle{font-family:Poppins,sans-serif!important;font-size:17px;letter-spacing:.4px;font-weight:700}.FontStyle2{font-family:Poppins,sans-serif!important;font-size:17px;letter-spacing:.4px;font-weight:300}.spinnerStyle{font-size:50px;padding-top:20px;padding-bottom:20px}.boxStyle{border-radius:7px 7px 22px 22px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.bgColor{background-color:#3a3a3a;opacity:.5}"]
                }] }
    ];
    /** @nocollapse */
    SukuLoaderComponent.ctorParameters = function () { return []; };
    SukuLoaderComponent.propDecorators = {
        waitingMessage: [{ type: Input, args: ['waiting-message',] }],
        lodingDescription: [{ type: Input, args: ['loding-description',] }],
        loadingMessage: [{ type: Input, args: ['loading-message',] }]
    };
    return SukuLoaderComponent;
}());
export { SukuLoaderComponent };
if (false) {
    /** @type {?} */
    SukuLoaderComponent.prototype.waitingMessage;
    /** @type {?} */
    SukuLoaderComponent.prototype.lodingDescription;
    /** @type {?} */
    SukuLoaderComponent.prototype.loadingMessage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1sb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtbG9hZGVyL3N1a3UtbG9hZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFVRTtRQUh3QixtQkFBYyxHQUFHLGdCQUFnQixDQUFDO1FBQy9CLHNCQUFpQixHQUFHLHNGQUFzRixDQUFDO1FBQzlHLG1CQUFjLEdBQUcseURBQXlELENBQUM7SUFDbkYsQ0FBQzs7OztJQUVqQixzQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLGl4Q0FBMkM7O2lCQUU5Qzs7Ozs7aUNBR0EsS0FBSyxTQUFDLGlCQUFpQjtvQ0FDdkIsS0FBSyxTQUFDLG9CQUFvQjtpQ0FDMUIsS0FBSyxTQUFDLGlCQUFpQjs7SUFNeEIsMEJBQUM7Q0FBQSxBQWZELElBZUM7U0FWWSxtQkFBbUI7OztJQUVoQyw2Q0FBNEQ7O0lBQzVELGdEQUF3STs7SUFDeEksNkNBQXFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc3VrdS1sb2FkZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWxvYWRlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc3VrdS1sb2FkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1TG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG5ASW5wdXQoJ3dhaXRpbmctbWVzc2FnZScpIHdhaXRpbmdNZXNzYWdlID0gJ3BsZWFzZSB3YWl0Li4uJztcbkBJbnB1dCgnbG9kaW5nLWRlc2NyaXB0aW9uJykgbG9kaW5nRGVzY3JpcHRpb24gPSAnVGhlIGRvY3VtZW50IHlvdSBhcmUgZG93bmxvYWRpbmcgaXMgYmVpbmcgYXV0aGVudGljYXRlZCBhZ2FpbnN0IHRoZSBTVUtVIEJsb2NrY2hhaW4uJztcbkBJbnB1dCgnbG9hZGluZy1tZXNzYWdlJykgbG9hZGluZ01lc3NhZ2UgPSAnUGxlYXNlIHdhaXQgbW9tZW50YXJpbHkgd2hpbGUgdGhpcyBwcm9jZXNzIGNvbXBsZXRlcy4uLic7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19