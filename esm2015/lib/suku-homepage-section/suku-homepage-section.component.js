/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SukuHomepageSection } from './suku-homepage-section';
export class SukuHomepageSectionComponent {
    constructor() {
        this.sendRoutePath = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} string
     * @return {?}
     */
    onSendRoutePath(string) {
        this.sendRoutePath.emit(string);
    }
}
SukuHomepageSectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-homepage-section',
                template: "<section class=\"homepage-section\">\n  <div class=\"header row ml-3 ml-sm-5\">\n    <div class=\"title mt-3\">{{sectionData.header}}</div>\n    <div class=\"mt-3 d-flex pr-5\">\n      <span class=\"title italic font-italic\">{{sectionData.subheader}}</span>\n      <div class=\"ml-2 info\">\n        <i class=\"fas fa-info\"></i>\n        <div class=\"info-box\">{{sectionData.info}}</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row m-3 d-flex justify-content-around\">\n    <div class=\"justify-content-center d-flex mt-3 mt-md-5 col-lg-3 col-md-6 col-12\"\n      *ngFor=\"let button of sectionData.buttons\">\n      <suku-homepage-button [buttonData]=\"button\" (sendRoutePath)=\"onSendRoutePath($event)\"></suku-homepage-button>\n    </div>\n  </div>\n</section>",
                styles: [".homepage-section{font-family:Poppins,sans-serif}.title{font-size:23px;font-weight:700}.italic{font-weight:400}.info{text-align:center;height:23px;width:23px;border-radius:100px;background:#303030;color:#d8f40b}.info:hover .info-box{display:block}.info-box{z-index:100;width:300px;border-radius:6px;word-wrap:break-word;background:#000;display:none;position:relative;bottom:-10px;right:23px;text-align:left;padding:20px;font-size:13px;font-family:\"Encode Sans\";font-weight:500;font-style:normal;font-stretch:normal;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.info-box::after{content:\"\";position:absolute;top:-10px;left:35px;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #191922;font-style:normal;font-stretch:normal}"]
            }] }
];
/** @nocollapse */
SukuHomepageSectionComponent.ctorParameters = () => [];
SukuHomepageSectionComponent.propDecorators = {
    sectionData: [{ type: Input }],
    sendRoutePath: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuHomepageSectionComponent.prototype.sectionData;
    /** @type {?} */
    SukuHomepageSectionComponent.prototype.sendRoutePath;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ob21lcGFnZS1zZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWhvbWVwYWdlLXNlY3Rpb24vc3VrdS1ob21lcGFnZS1zZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU85RCxNQUFNLE9BQU8sNEJBQTRCO0lBS3hDO1FBRlUsa0JBQWEsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVwRCxDQUFDOzs7O0lBRWhCLFFBQVEsS0FBSSxDQUFDOzs7OztJQUViLGVBQWUsQ0FBQyxNQUFNO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQWhCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsdXhCQUFxRDs7YUFFckQ7Ozs7OzBCQUVDLEtBQUs7NEJBRUwsTUFBTTs7OztJQUZQLG1EQUEwQzs7SUFFMUMscURBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3VrdUhvbWVwYWdlU2VjdGlvbiB9IGZyb20gJy4vc3VrdS1ob21lcGFnZS1zZWN0aW9uJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1ob21lcGFnZS1zZWN0aW9uJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtaG9tZXBhZ2Utc2VjdGlvbi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LWhvbWVwYWdlLXNlY3Rpb24uY29tcG9uZW50LnNjc3MnIF0sXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VIb21lcGFnZVNlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKSBzZWN0aW9uRGF0YTogU3VrdUhvbWVwYWdlU2VjdGlvbjtcblxuXHRAT3V0cHV0KCkgc2VuZFJvdXRlUGF0aDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdG5nT25Jbml0KCkge31cblxuXHRvblNlbmRSb3V0ZVBhdGgoc3RyaW5nKSB7XG5cdFx0dGhpcy5zZW5kUm91dGVQYXRoLmVtaXQoc3RyaW5nKTtcblx0fVxufVxuIl19