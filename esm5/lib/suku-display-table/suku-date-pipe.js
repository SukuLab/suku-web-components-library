/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-display-table/suku-date-pipe.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXRlLXBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kaXNwbGF5LXRhYmxlL3N1a3UtZGF0ZS1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFjLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDO0lBR0UsMEJBQW1CLFNBQTJCLEVBQVUsUUFBa0I7UUFBdkQsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUksQ0FBQzs7Ozs7O0lBRS9FLG9DQUFTOzs7OztJQUFULFVBQVUsS0FBYSxFQUFFLFVBQWtCO1FBQTNDLGlCQW9CQzs7WUFuQk8sYUFBYSxHQUFHLFVBQVU7UUFDaEMsSUFBSSxLQUFLLElBQUksR0FBRyxFQUFFO1lBQ2hCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLGFBQWEsRUFBRTs7Z0JBQ1gsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVztZQUM5QyxJQUFJLFdBQVcsSUFBSSxhQUFhLEVBQUU7O29CQUM1QixzQkFBb0I7Z0JBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVM7Ozs7Z0JBQUMsVUFBQyxJQUFZO29CQUN2RCxJQUFJLElBQUksRUFBRTs7NEJBQ0YsY0FBYyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7d0JBQzNELHNCQUFvQixHQUFHLGNBQWMsQ0FBQztxQkFDdkM7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7Z0JBQ0gsT0FBTyxzQkFBb0IsQ0FBQzthQUM3QjtTQUNGO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7Z0JBekJGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTs7OztnQkFIaEMsZ0JBQWdCO2dCQUNoQixRQUFROztJQTRCakIsdUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXpCWSxnQkFBZ0I7OztJQUVmLHFDQUFrQzs7Ozs7SUFBRSxvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBQaXBlKHsgbmFtZTogJ2RhdGVMb2NhbGUnLCBwdXJlOiBmYWxzZSB9KVxuZXhwb3J0IGNsYXNzIERhdGVMb2NhbGVGaWx0ZXIgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLCBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSkgeyB9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGRhdGVGb3JtYXQ6IHN0cmluZykge1xuICAgIGNvbnN0IGRhdGVGb3JtYXRLZXkgPSBkYXRlRm9ybWF0O1xuICAgIGlmICh2YWx1ZSA9PSAnLScpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKGRhdGVGb3JtYXRLZXkpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRMYW5nID0gdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmc7IC8vIGdldCBjdXJyZW50IGxhbmd1YWdlXG4gICAgICBpZiAoY3VycmVudExhbmcgJiYgZGF0ZUZvcm1hdEtleSkge1xuICAgICAgICBsZXQgcmV0dXJuQ29udmVydGVkVmFsdWU7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlLmdldChkYXRlRm9ybWF0S2V5KS5zdWJzY3JpYmUoKHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKHZhbHVlLCB0ZXh0KTtcbiAgICAgICAgICAgIHJldHVybkNvbnZlcnRlZFZhbHVlID0gZm9ybWF0dGVkVmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldHVybkNvbnZlcnRlZFZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG59XG4iXX0=