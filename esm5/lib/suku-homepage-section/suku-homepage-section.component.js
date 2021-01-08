/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-homepage-section/suku-homepage-section.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SukuHomepageSection } from './suku-homepage-section';
var SukuHomepageSectionComponent = /** @class */ (function () {
    function SukuHomepageSectionComponent() {
        this.sendRoutePath = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuHomepageSectionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} string
     * @return {?}
     */
    SukuHomepageSectionComponent.prototype.onSendRoutePath = /**
     * @param {?} string
     * @return {?}
     */
    function (string) {
        this.sendRoutePath.emit(string);
    };
    SukuHomepageSectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-homepage-section',
                    template: "<section class=\"homepage-section\">\r\n  <div class=\"header row ml-3 ml-sm-5\">\r\n    <div class=\"title mt-3\">{{sectionData.header}}</div>\r\n    <div class=\"mt-3 d-flex pr-5\">\r\n      <span class=\"title ml-2 italic font-italic\"> {{sectionData.subheader}}</span>\r\n      <div class=\"ml-2 info\">\r\n        <i class=\"fas fa-info\"></i>\r\n        <div class=\"info-box\">{{sectionData.info}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row m-3 d-flex justify-content-around\">\r\n    <div class=\"justify-content-center d-flex mt-3 mt-md-5 col-lg-2 col-md-6 col-12\"\r\n      *ngFor=\"let button of sectionData.buttons\">\r\n      <suku-homepage-button [button-data]=\"button\" (send-route-path)=\"onSendRoutePath($event)\"></suku-homepage-button>\r\n    </div>\r\n  </div>\r\n</section>",
                    styles: [".homepage-section{font-family:Poppins,sans-serif}.title{font-size:23px;font-weight:700}.italic{font-weight:400}.info{text-align:center;height:23px;width:23px;border-radius:100px;background:#303030;color:#d8f40b}.info:hover .info-box{display:block}.info-box{z-index:100;width:300px;border-radius:6px;word-wrap:break-word;background:#000;display:none;position:relative;bottom:-10px;right:23px;text-align:left;padding:20px;font-size:13px;font-family:\"Encode Sans\",sans-serif;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.info-box::after{content:\"\";position:absolute;top:-10px;left:35px;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #191922;font-style:normal;font-stretch:normal}"]
                }] }
    ];
    /** @nocollapse */
    SukuHomepageSectionComponent.ctorParameters = function () { return []; };
    SukuHomepageSectionComponent.propDecorators = {
        sectionData: [{ type: Input }],
        sendRoutePath: [{ type: Output }]
    };
    return SukuHomepageSectionComponent;
}());
export { SukuHomepageSectionComponent };
if (false) {
    /** @type {?} */
    SukuHomepageSectionComponent.prototype.sectionData;
    /** @type {?} */
    SukuHomepageSectionComponent.prototype.sendRoutePath;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ob21lcGFnZS1zZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWhvbWVwYWdlLXNlY3Rpb24vc3VrdS1ob21lcGFnZS1zZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQ7SUFVQztRQUZVLGtCQUFhLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFcEQsQ0FBQzs7OztJQUVoQiwrQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOzs7OztJQUViLHNEQUFlOzs7O0lBQWYsVUFBZ0IsTUFBTTtRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFoQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLGswQkFBcUQ7O2lCQUVyRDs7Ozs7OEJBRUMsS0FBSztnQ0FFTCxNQUFNOztJQVNSLG1DQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FaWSw0QkFBNEI7OztJQUN4QyxtREFBMEM7O0lBRTFDLHFEQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3VrdUhvbWVwYWdlU2VjdGlvbiB9IGZyb20gJy4vc3VrdS1ob21lcGFnZS1zZWN0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc3VrdS1ob21lcGFnZS1zZWN0aW9uJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1ob21lcGFnZS1zZWN0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1ob21lcGFnZS1zZWN0aW9uLmNvbXBvbmVudC5zY3NzJyBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUhvbWVwYWdlU2VjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgc2VjdGlvbkRhdGE6IFN1a3VIb21lcGFnZVNlY3Rpb247XHJcblxyXG5cdEBPdXRwdXQoKSBzZW5kUm91dGVQYXRoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcblxyXG5cdG9uU2VuZFJvdXRlUGF0aChzdHJpbmcpIHtcclxuXHRcdHRoaXMuc2VuZFJvdXRlUGF0aC5lbWl0KHN0cmluZyk7XHJcblx0fVxyXG59XHJcbiJdfQ==