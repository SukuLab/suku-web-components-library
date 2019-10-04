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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXRlLXBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kaXNwbGF5LXRhYmxlL3N1a3UtZGF0ZS1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0M7SUFHRSwwQkFBbUIsU0FBMkIsRUFBVSxRQUFrQjtRQUF2RCxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBSSxDQUFDOzs7Ozs7SUFFL0Usb0NBQVM7Ozs7O0lBQVQsVUFBVSxLQUFhLEVBQUUsVUFBa0I7UUFBM0MsaUJBb0JDOztZQW5CTyxhQUFhLEdBQUcsVUFBVTtRQUNoQyxJQUFJLEtBQUssSUFBSSxHQUFHLEVBQUU7WUFDaEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksYUFBYSxFQUFFOztnQkFDWCxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXO1lBQzlDLElBQUksV0FBVyxJQUFJLGFBQWEsRUFBRTs7b0JBQzVCLHNCQUFvQjtnQkFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxVQUFDLElBQVk7b0JBQ3ZELElBQUksSUFBSSxFQUFFOzs0QkFDRixjQUFjLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQzt3QkFDM0Qsc0JBQW9CLEdBQUcsY0FBYyxDQUFDO3FCQUN2QztnQkFDSCxDQUFDLEVBQUMsQ0FBQztnQkFDSCxPQUFPLHNCQUFvQixDQUFDO2FBQzdCO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDOztnQkF6QkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFOzs7O2dCQUhoQyxnQkFBZ0I7Z0JBQ2hCLFFBQVE7O0lBNEJqQix1QkFBQztDQUFBLEFBMUJELElBMEJDO1NBekJZLGdCQUFnQjs7O0lBRWYscUNBQWtDOzs7OztJQUFFLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQFBpcGUoeyBuYW1lOiAnZGF0ZUxvY2FsZScsIHB1cmU6IGZhbHNlIH0pXG5leHBvcnQgY2xhc3MgRGF0ZUxvY2FsZUZpbHRlciBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlKSB7IH1cblxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgZGF0ZUZvcm1hdDogc3RyaW5nKSB7XG4gICAgY29uc3QgZGF0ZUZvcm1hdEtleSA9IGRhdGVGb3JtYXQ7XG4gICAgaWYgKHZhbHVlID09ICctJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAoZGF0ZUZvcm1hdEtleSkge1xuICAgICAgY29uc3QgY3VycmVudExhbmcgPSB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZzsgLy8gZ2V0IGN1cnJlbnQgbGFuZ3VhZ2VcbiAgICAgIGlmIChjdXJyZW50TGFuZyAmJiBkYXRlRm9ybWF0S2V5KSB7XG4gICAgICAgIGxldCByZXR1cm5Db252ZXJ0ZWRWYWx1ZTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KGRhdGVGb3JtYXRLZXkpLnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0odmFsdWUsIHRleHQpO1xuICAgICAgICAgICAgcmV0dXJuQ29udmVydGVkVmFsdWUgPSBmb3JtYXR0ZWRWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV0dXJuQ29udmVydGVkVmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==