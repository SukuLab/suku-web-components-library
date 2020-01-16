/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
var DateLocaleFilter = /** @class */ (function () {
    function DateLocaleFilter(translate, datePipe) {
        this.translate = translate;
        this.datePipe = datePipe;
    }
    /**
     * @param {?} value
     * @param {?} dateFormat
     * @return {?}
     */
    DateLocaleFilter.prototype.transform = /**
     * @param {?} value
     * @param {?} dateFormat
     * @return {?}
     */
    function (value, dateFormat) {
        var _this = this;
        /** @type {?} */
        var dateFormatKey = dateFormat;
        if (value == '-') {
            return value;
        }
        if (dateFormatKey) {
            /** @type {?} */
            var currentLang = this.translate.currentLang;
            if (currentLang && dateFormatKey) {
                /** @type {?} */
                var returnConvertedValue_1;
                this.translate.get(dateFormatKey).subscribe((/**
                 * @param {?} text
                 * @return {?}
                 */
                function (text) {
                    if (text) {
                        /** @type {?} */
                        var formattedValue = _this.datePipe.transform(value, text);
                        returnConvertedValue_1 = formattedValue;
                    }
                }));
                return returnConvertedValue_1;
            }
        }
        else {
            return value;
        }
    };
    DateLocaleFilter.decorators = [
        { type: Pipe, args: [{ name: 'dateLocale', pure: false },] }
    ];
    /** @nocollapse */
    DateLocaleFilter.ctorParameters = function () { return [
        { type: TranslateService },
        { type: DatePipe }
    ]; };
    return DateLocaleFilter;
}());
export { DateLocaleFilter };
if (false) {
    /** @type {?} */
    DateLocaleFilter.prototype.translate;
    /**
     * @type {?}
     * @private
     */
    DateLocaleFilter.prototype.datePipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXRlLXBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kaXNwbGF5LXRhYmxlL3N1a3UtZGF0ZS1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0M7SUFHRSwwQkFBbUIsU0FBMkIsRUFBVSxRQUFrQjtRQUF2RCxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBSSxDQUFDOzs7Ozs7SUFFL0Usb0NBQVM7Ozs7O0lBQVQsVUFBVSxLQUFhLEVBQUUsVUFBa0I7UUFBM0MsaUJBb0JDOztZQW5CTyxhQUFhLEdBQUcsVUFBVTtRQUNoQyxJQUFJLEtBQUssSUFBSSxHQUFHLEVBQUU7WUFDaEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksYUFBYSxFQUFFOztnQkFDWCxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXO1lBQzlDLElBQUksV0FBVyxJQUFJLGFBQWEsRUFBRTs7b0JBQzVCLHNCQUFvQjtnQkFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxVQUFDLElBQVk7b0JBQ3ZELElBQUksSUFBSSxFQUFFOzs0QkFDRixjQUFjLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQzt3QkFDM0Qsc0JBQW9CLEdBQUcsY0FBYyxDQUFDO3FCQUN2QztnQkFDSCxDQUFDLEVBQUMsQ0FBQztnQkFDSCxPQUFPLHNCQUFvQixDQUFDO2FBQzdCO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDOztnQkF6QkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFOzs7O2dCQUhoQyxnQkFBZ0I7Z0JBQ2hCLFFBQVE7O0lBNEJqQix1QkFBQztDQUFBLEFBMUJELElBMEJDO1NBekJZLGdCQUFnQjs7O0lBRWYscUNBQWtDOzs7OztJQUFFLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdkYXRlTG9jYWxlJywgcHVyZTogZmFsc2UgfSlcclxuZXhwb3J0IGNsYXNzIERhdGVMb2NhbGVGaWx0ZXIgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSwgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUpIHsgfVxyXG5cclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgZGF0ZUZvcm1hdDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBkYXRlRm9ybWF0S2V5ID0gZGF0ZUZvcm1hdDtcclxuICAgIGlmICh2YWx1ZSA9PSAnLScpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGVGb3JtYXRLZXkpIHtcclxuICAgICAgY29uc3QgY3VycmVudExhbmcgPSB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZzsgLy8gZ2V0IGN1cnJlbnQgbGFuZ3VhZ2VcclxuICAgICAgaWYgKGN1cnJlbnRMYW5nICYmIGRhdGVGb3JtYXRLZXkpIHtcclxuICAgICAgICBsZXQgcmV0dXJuQ29udmVydGVkVmFsdWU7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KGRhdGVGb3JtYXRLZXkpLnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGV4dCkge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKHZhbHVlLCB0ZXh0KTtcclxuICAgICAgICAgICAgcmV0dXJuQ29udmVydGVkVmFsdWUgPSBmb3JtYXR0ZWRWYWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuQ29udmVydGVkVmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19