/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
import { sukuHomepageData } from './suku-homepage-data';
export class SukuHomepageComponent {
    constructor() {
        this.sendRoutePath = new EventEmitter();
        this.homepageData = sukuHomepageData;
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
SukuHomepageComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-homepage',
                template: "<div class=\"homepage col-md-10 col-12 m-auto\">\r\n  <div *ngFor=\"let section of homepageData\">\r\n    <suku-homepage-section (sendRoutePath)=\"onSendRoutePath($event)\" [sectionData]=\"section\"></suku-homepage-section>\r\n  </div>\r\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.homepage{padding:30px 0 40px;font-family:Poppins,sans-serif;background:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05);border-radius:0 0 41px 41px}"]
            }] }
];
/** @nocollapse */
SukuHomepageComponent.ctorParameters = () => [];
SukuHomepageComponent.propDecorators = {
    sendRoutePath: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuHomepageComponent.prototype.homepageData;
    /** @type {?} */
    SukuHomepageComponent.prototype.sendRoutePath;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ob21lcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1ob21lcGFnZS9zdWt1LWhvbWVwYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQVMsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBT3hELE1BQU0sT0FBTyxxQkFBcUI7SUFLakM7UUFGVSxrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR2xFLElBQUksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELFFBQVEsS0FBSSxDQUFDOzs7OztJQUViLGVBQWUsQ0FBQyxNQUFNO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQWxCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLGlRQUE2Qzs7YUFFN0M7Ozs7OzRCQUlDLE1BQU07Ozs7SUFGUCw2Q0FBb0M7O0lBRXBDLDhDQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3VrdUhvbWVwYWdlU2VjdGlvbiB9IGZyb20gJy4uL3N1a3UtaG9tZXBhZ2Utc2VjdGlvbi9zdWt1LWhvbWVwYWdlLXNlY3Rpb24nO1xyXG5pbXBvcnQgeyBzdWt1SG9tZXBhZ2VEYXRhIH0gZnJvbSAnLi9zdWt1LWhvbWVwYWdlLWRhdGEnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LWhvbWVwYWdlJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1ob21lcGFnZS5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MnIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1SG9tZXBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGhvbWVwYWdlRGF0YTogU3VrdUhvbWVwYWdlU2VjdGlvbltdO1xyXG5cclxuXHRAT3V0cHV0KCkgc2VuZFJvdXRlUGF0aDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5ob21lcGFnZURhdGEgPSBzdWt1SG9tZXBhZ2VEYXRhO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cclxuXHRvblNlbmRSb3V0ZVBhdGgoc3RyaW5nKSB7XHJcblx0XHR0aGlzLnNlbmRSb3V0ZVBhdGguZW1pdChzdHJpbmcpO1xyXG5cdH1cclxufVxyXG4iXX0=