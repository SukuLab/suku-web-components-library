/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
import { sukuHomepageData } from './suku-homepage-data';
var SukuHomepageComponent = /** @class */ (function () {
    function SukuHomepageComponent() {
        this.sendRoutePath = new EventEmitter();
        this.homepageData = sukuHomepageData;
        console.log('homepageData', this.homepageData);
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
                    template: "<div class=\"homepage col-md-10 col-12 m-auto\">\r\n  <div *ngFor=\"let section of homepageData\">\r\n    <suku-homepage-section (sendRoutePath)=\"onSendRoutePath($event)\" [sectionData]=\"section\"></suku-homepage-section>\r\n  </div>\r\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.homepage{padding:30px 0 40px;font-family:var(--suku-primary-font);background:var(--suku-homepage-bg);box-shadow:0 12px 14px 0 rgba(0,0,0,.05);border-radius:var(--suku-secondary-border-radius)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ob21lcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1ob21lcGFnZS9zdWt1LWhvbWVwYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQVMsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhEO0lBVUM7UUFGVSxrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR2xFLElBQUksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUM7UUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVIsY0FBYSxDQUFDOzs7OztJQUVkLCtDQUFlOzs7O0lBQWYsVUFBZ0IsTUFBTTtRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFuQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxlQUFlO29CQUN6QixpUUFBNkM7O2lCQUU3Qzs7Ozs7Z0NBSUMsTUFBTTs7SUFZUiw0QkFBQztDQUFBLEFBcEJELElBb0JDO1NBZlkscUJBQXFCOzs7SUFDakMsNkNBQW9DOztJQUVwQyw4Q0FBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1a3VIb21lcGFnZVNlY3Rpb24gfSBmcm9tICcuLi9zdWt1LWhvbWVwYWdlLXNlY3Rpb24vc3VrdS1ob21lcGFnZS1zZWN0aW9uJztcclxuaW1wb3J0IHsgc3VrdUhvbWVwYWdlRGF0YSB9IGZyb20gJy4vc3VrdS1ob21lcGFnZS1kYXRhJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc3VrdS1ob21lcGFnZScsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtaG9tZXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL3N1a3UtaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VIb21lcGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0aG9tZXBhZ2VEYXRhOiBTdWt1SG9tZXBhZ2VTZWN0aW9uW107XHJcblxyXG5cdEBPdXRwdXQoKSBzZW5kUm91dGVQYXRoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmhvbWVwYWdlRGF0YSA9IHN1a3VIb21lcGFnZURhdGE7XHJcblx0XHRjb25zb2xlLmxvZygnaG9tZXBhZ2VEYXRhJywgdGhpcy5ob21lcGFnZURhdGEpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7IH1cclxuXHJcblx0b25TZW5kUm91dGVQYXRoKHN0cmluZykge1xyXG5cdFx0dGhpcy5zZW5kUm91dGVQYXRoLmVtaXQoc3RyaW5nKTtcclxuXHR9XHJcbn1cclxuIl19