/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-display-table/suku-date-pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
export class DateLocaleFilter {
    /**
     * @param {?} translate
     * @param {?} datePipe
     */
    constructor(translate, datePipe) {
        this.translate = translate;
        this.datePipe = datePipe;
    }
    /**
     * @param {?} value
     * @param {?} dateFormat
     * @return {?}
     */
    transform(value, dateFormat) {
        /** @type {?} */
        const dateFormatKey = dateFormat;
        if (value == '-') {
            return value;
        }
        if (dateFormatKey) {
            /** @type {?} */
            const currentLang = this.translate.currentLang;
            if (currentLang && dateFormatKey) {
                /** @type {?} */
                let returnConvertedValue;
                this.translate.get(dateFormatKey).subscribe((/**
                 * @param {?} text
                 * @return {?}
                 */
                (text) => {
                    if (text) {
                        /** @type {?} */
                        const formattedValue = this.datePipe.transform(value, text);
                        returnConvertedValue = formattedValue;
                    }
                }));
                return returnConvertedValue;
            }
        }
        else {
            return value;
        }
    }
}
DateLocaleFilter.decorators = [
    { type: Pipe, args: [{ name: 'dateLocale', pure: false },] }
];
/** @nocollapse */
DateLocaleFilter.ctorParameters = () => [
    { type: TranslateService },
    { type: DatePipe }
];
if (false) {
    /** @type {?} */
    DateLocaleFilter.prototype.translate;
    /**
     * @type {?}
     * @private
     */
    DateLocaleFilter.prototype.datePipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXRlLXBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kaXNwbGF5LXRhYmxlL3N1a3UtZGF0ZS1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFjLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzNDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBRTNCLFlBQW1CLFNBQTJCLEVBQVUsUUFBa0I7UUFBdkQsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUksQ0FBQzs7Ozs7O0lBRS9FLFNBQVMsQ0FBQyxLQUFhLEVBQUUsVUFBa0I7O2NBQ25DLGFBQWEsR0FBRyxVQUFVO1FBQ2hDLElBQUksS0FBSyxJQUFJLEdBQUcsRUFBRTtZQUNoQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxhQUFhLEVBQUU7O2tCQUNYLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVc7WUFDOUMsSUFBSSxXQUFXLElBQUksYUFBYSxFQUFFOztvQkFDNUIsb0JBQW9CO2dCQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7b0JBQzNELElBQUksSUFBSSxFQUFFOzs4QkFDRixjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQzt3QkFDM0Qsb0JBQW9CLEdBQUcsY0FBYyxDQUFDO3FCQUN2QztnQkFDSCxDQUFDLEVBQUMsQ0FBQztnQkFDSCxPQUFPLG9CQUFvQixDQUFDO2FBQzdCO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs7WUF6QkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFOzs7O1lBSGhDLGdCQUFnQjtZQUNoQixRQUFROzs7O0lBS0gscUNBQWtDOzs7OztJQUFFLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQFBpcGUoeyBuYW1lOiAnZGF0ZUxvY2FsZScsIHB1cmU6IGZhbHNlIH0pXG5leHBvcnQgY2xhc3MgRGF0ZUxvY2FsZUZpbHRlciBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlKSB7IH1cblxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgZGF0ZUZvcm1hdDogc3RyaW5nKSB7XG4gICAgY29uc3QgZGF0ZUZvcm1hdEtleSA9IGRhdGVGb3JtYXQ7XG4gICAgaWYgKHZhbHVlID09ICctJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAoZGF0ZUZvcm1hdEtleSkge1xuICAgICAgY29uc3QgY3VycmVudExhbmcgPSB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZzsgLy8gZ2V0IGN1cnJlbnQgbGFuZ3VhZ2VcbiAgICAgIGlmIChjdXJyZW50TGFuZyAmJiBkYXRlRm9ybWF0S2V5KSB7XG4gICAgICAgIGxldCByZXR1cm5Db252ZXJ0ZWRWYWx1ZTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KGRhdGVGb3JtYXRLZXkpLnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0odmFsdWUsIHRleHQpO1xuICAgICAgICAgICAgcmV0dXJuQ29udmVydGVkVmFsdWUgPSBmb3JtYXR0ZWRWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV0dXJuQ29udmVydGVkVmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==