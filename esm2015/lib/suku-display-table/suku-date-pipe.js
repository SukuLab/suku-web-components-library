/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXRlLXBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kaXNwbGF5LXRhYmxlL3N1a3UtZGF0ZS1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHM0MsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFFM0IsWUFBbUIsU0FBMkIsRUFBVSxRQUFrQjtRQUF2RCxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBSSxDQUFDOzs7Ozs7SUFFL0UsU0FBUyxDQUFDLEtBQWEsRUFBRSxVQUFrQjs7Y0FDbkMsYUFBYSxHQUFHLFVBQVU7UUFDaEMsSUFBSSxLQUFLLElBQUksR0FBRyxFQUFFO1lBQ2hCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLGFBQWEsRUFBRTs7a0JBQ1gsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVztZQUM5QyxJQUFJLFdBQVcsSUFBSSxhQUFhLEVBQUU7O29CQUM1QixvQkFBb0I7Z0JBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVM7Ozs7Z0JBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRTtvQkFDM0QsSUFBSSxJQUFJLEVBQUU7OzhCQUNGLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO3dCQUMzRCxvQkFBb0IsR0FBRyxjQUFjLENBQUM7cUJBQ3ZDO2dCQUNILENBQUMsRUFBQyxDQUFDO2dCQUNILE9BQU8sb0JBQW9CLENBQUM7YUFDN0I7U0FDRjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7OztZQXpCRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7Ozs7WUFIaEMsZ0JBQWdCO1lBQ2hCLFFBQVE7Ozs7SUFLSCxxQ0FBa0M7Ozs7O0lBQUUsb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2RhdGVMb2NhbGUnLCBwdXJlOiBmYWxzZSB9KVxyXG5leHBvcnQgY2xhc3MgRGF0ZUxvY2FsZUZpbHRlciBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLCBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSkgeyB9XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBkYXRlRm9ybWF0OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGRhdGVGb3JtYXRLZXkgPSBkYXRlRm9ybWF0O1xyXG4gICAgaWYgKHZhbHVlID09ICctJykge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0ZUZvcm1hdEtleSkge1xyXG4gICAgICBjb25zdCBjdXJyZW50TGFuZyA9IHRoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nOyAvLyBnZXQgY3VycmVudCBsYW5ndWFnZVxyXG4gICAgICBpZiAoY3VycmVudExhbmcgJiYgZGF0ZUZvcm1hdEtleSkge1xyXG4gICAgICAgIGxldCByZXR1cm5Db252ZXJ0ZWRWYWx1ZTtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoZGF0ZUZvcm1hdEtleSkuc3Vic2NyaWJlKCh0ZXh0OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIGlmICh0ZXh0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0odmFsdWUsIHRleHQpO1xyXG4gICAgICAgICAgICByZXR1cm5Db252ZXJ0ZWRWYWx1ZSA9IGZvcm1hdHRlZFZhbHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5Db252ZXJ0ZWRWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=