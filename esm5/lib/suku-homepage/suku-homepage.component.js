/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
import { sukuHomepageData } from './suku-homepage-data';
var SukuHomepageComponent = /** @class */ (function () {
    function SukuHomepageComponent() {
        this.sendRoutePath = new EventEmitter();
        this.homepageData = sukuHomepageData;
    }
    /**
     * @return {?}
     */
    SukuHomepageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} string
     * @return {?}
     */
    SukuHomepageComponent.prototype.onSendRoutePath = /**
     * @param {?} string
     * @return {?}
     */
    function (string) {
        this.sendRoutePath.emit(string);
    };
    SukuHomepageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-homepage',
                    template: "<div class=\"homepage col-md-10 col-12 m-auto\">\n  <div *ngFor=\"let section of homepageData\">\n    <suku-homepage-section (sendRoutePath)=\"onSendRoutePath($event)\" [sectionData]=\"section\"></suku-homepage-section>\n  </div>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.homepage{padding:30px 0 40px;font-family:Poppins,sans-serif;background:#fff;box-shadow:0 3px 3px 0 rgba(0,0,0,.5);border-radius:0 0 41px 41px}"]
                }] }
    ];
    /** @nocollapse */
    SukuHomepageComponent.ctorParameters = function () { return []; };
    SukuHomepageComponent.propDecorators = {
        sendRoutePath: [{ type: Output }]
    };
    return SukuHomepageComponent;
}());
export { SukuHomepageComponent };
if (false) {
    /** @type {?} */
    SukuHomepageComponent.prototype.homepageData;
    /** @type {?} */
    SukuHomepageComponent.prototype.sendRoutePath;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ob21lcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1ob21lcGFnZS9zdWt1LWhvbWVwYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQVMsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhEO0lBVUM7UUFGVSxrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR2xFLElBQUksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELHdDQUFROzs7SUFBUixjQUFZLENBQUM7Ozs7O0lBRWIsK0NBQWU7Ozs7SUFBZixVQUFnQixNQUFNO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQWxCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLHlQQUE2Qzs7aUJBRTdDOzs7OztnQ0FJQyxNQUFNOztJQVdSLDRCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FkWSxxQkFBcUI7OztJQUNqQyw2Q0FBb0M7O0lBRXBDLDhDQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1a3VIb21lcGFnZVNlY3Rpb24gfSBmcm9tICcuLi9zdWt1LWhvbWVwYWdlLXNlY3Rpb24vc3VrdS1ob21lcGFnZS1zZWN0aW9uJztcbmltcG9ydCB7IHN1a3VIb21lcGFnZURhdGEgfSBmcm9tICcuL3N1a3UtaG9tZXBhZ2UtZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtaG9tZXBhZ2UnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1ob21lcGFnZS5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LWhvbWVwYWdlLmNvbXBvbmVudC5zY3NzJyBdLFxufSlcbmV4cG9ydCBjbGFzcyBTdWt1SG9tZXBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRob21lcGFnZURhdGE6IFN1a3VIb21lcGFnZVNlY3Rpb25bXTtcblxuXHRAT3V0cHV0KCkgc2VuZFJvdXRlUGF0aDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5ob21lcGFnZURhdGEgPSBzdWt1SG9tZXBhZ2VEYXRhO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7fVxuXG5cdG9uU2VuZFJvdXRlUGF0aChzdHJpbmcpIHtcblx0XHR0aGlzLnNlbmRSb3V0ZVBhdGguZW1pdChzdHJpbmcpO1xuXHR9XG59XG4iXX0=