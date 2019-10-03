/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
// import moment from 'moment';
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
        /** @type {?} */
        var dateFormatKey = dateFormat;
        if (value == '-') {
            return value;
        }
        if (dateFormatKey) {
            // const currentLang = this.translate.currentLang; // get current language
            // console.log('currentLang from pipe', value, currentLang);
            // if(currentLang && dateFormatKey) {
            //   // const returnValue = this.translate.translations[currentLang][dateFormatKey];
            //  const returnValue = this.getTranslatedTxt(dateFormatKey);
            //  let formatKey;
            //   returnValue.then(val => { 
            //    console.log('returnValueTxt', val);
            //    formatKey = val;
            //    return val;
            //   });
            //   if(formatKey) {
            //     console.log('value from pipe', value, formatKey);
            //     const formattedValue = this.datePipe.transform(value , formatKey);
            //     return formattedValue;
            //   }
            // } 
        }
        else {
            return value;
        }
    };
    /**
     * @param {?} key
     * @return {?}
     */
    DateLocaleFilter.prototype.getTranslatedTxt = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var _this = this;
        if (key) {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                _this.translate.get(key).subscribe((/**
                 * @param {?} text
                 * @return {?}
                 */
                function (text) {
                    console.log('text', text);
                    resolve(text);
                }));
            }));
        }
        else {
            return key;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXRlLXBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kaXNwbGF5LXRhYmxlL3N1a3UtZGF0ZS1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRzNDO0lBR0UsMEJBQW1CLFNBQTJCLEVBQVUsUUFBa0I7UUFBdkQsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUksQ0FBQzs7Ozs7O0lBRS9FLG9DQUFTOzs7OztJQUFULFVBQVUsS0FBYSxFQUFFLFVBQWtCOztZQUNuQyxhQUFhLEdBQUcsVUFBVTtRQUNoQyxJQUFJLEtBQUssSUFBSSxHQUFHLEVBQUU7WUFDaEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksYUFBYSxFQUFFO1lBQ2pCLDBFQUEwRTtZQUMxRSw0REFBNEQ7WUFDNUQscUNBQXFDO1lBQ3JDLG9GQUFvRjtZQUNwRiw2REFBNkQ7WUFDN0Qsa0JBQWtCO1lBQ2xCLCtCQUErQjtZQUMvQix5Q0FBeUM7WUFDekMsc0JBQXNCO1lBQ3RCLGlCQUFpQjtZQUNqQixRQUFRO1lBQ1Isb0JBQW9CO1lBQ3BCLHdEQUF3RDtZQUN4RCx5RUFBeUU7WUFDekUsNkJBQTZCO1lBQzdCLE1BQU07WUFDTixLQUFLO1NBQ047YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs7OztJQUVELDJDQUFnQjs7OztJQUFoQixVQUFpQixHQUFHO1FBQXBCLGlCQVdDO1FBVkMsSUFBSSxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUksT0FBTzs7Ozs7WUFBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNqQyxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLFVBQUMsSUFBWTtvQkFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEIsQ0FBQyxFQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxPQUFPLEdBQUcsQ0FBQztTQUNaO0lBQ0gsQ0FBQzs7Z0JBNUNGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTs7OztnQkFKaEMsZ0JBQWdCO2dCQUNoQixRQUFROztJQWlEakIsdUJBQUM7Q0FBQSxBQTlDRCxJQThDQztTQTdDWSxnQkFBZ0I7OztJQUVmLHFDQUFrQzs7Ozs7SUFBRSxvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbkBQaXBlKHsgbmFtZTogJ2RhdGVMb2NhbGUnLCBwdXJlOiBmYWxzZSB9KVxuZXhwb3J0IGNsYXNzIERhdGVMb2NhbGVGaWx0ZXIgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLCBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSkgeyB9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGRhdGVGb3JtYXQ6IHN0cmluZykge1xuICAgIGNvbnN0IGRhdGVGb3JtYXRLZXkgPSBkYXRlRm9ybWF0O1xuICAgIGlmICh2YWx1ZSA9PSAnLScpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKGRhdGVGb3JtYXRLZXkpIHtcbiAgICAgIC8vIGNvbnN0IGN1cnJlbnRMYW5nID0gdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmc7IC8vIGdldCBjdXJyZW50IGxhbmd1YWdlXG4gICAgICAvLyBjb25zb2xlLmxvZygnY3VycmVudExhbmcgZnJvbSBwaXBlJywgdmFsdWUsIGN1cnJlbnRMYW5nKTtcbiAgICAgIC8vIGlmKGN1cnJlbnRMYW5nICYmIGRhdGVGb3JtYXRLZXkpIHtcbiAgICAgIC8vICAgLy8gY29uc3QgcmV0dXJuVmFsdWUgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGlvbnNbY3VycmVudExhbmddW2RhdGVGb3JtYXRLZXldO1xuICAgICAgLy8gIGNvbnN0IHJldHVyblZhbHVlID0gdGhpcy5nZXRUcmFuc2xhdGVkVHh0KGRhdGVGb3JtYXRLZXkpO1xuICAgICAgLy8gIGxldCBmb3JtYXRLZXk7XG4gICAgICAvLyAgIHJldHVyblZhbHVlLnRoZW4odmFsID0+IHsgXG4gICAgICAvLyAgICBjb25zb2xlLmxvZygncmV0dXJuVmFsdWVUeHQnLCB2YWwpO1xuICAgICAgLy8gICAgZm9ybWF0S2V5ID0gdmFsO1xuICAgICAgLy8gICAgcmV0dXJuIHZhbDtcbiAgICAgIC8vICAgfSk7XG4gICAgICAvLyAgIGlmKGZvcm1hdEtleSkge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCd2YWx1ZSBmcm9tIHBpcGUnLCB2YWx1ZSwgZm9ybWF0S2V5KTtcbiAgICAgIC8vICAgICBjb25zdCBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKHZhbHVlICwgZm9ybWF0S2V5KTtcbiAgICAgIC8vICAgICByZXR1cm4gZm9ybWF0dGVkVmFsdWU7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0gXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXRUcmFuc2xhdGVkVHh0KGtleSk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKGtleSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KGtleSkuc3Vic2NyaWJlKCh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygndGV4dCcsIHRleHQpO1xuICAgICAgICAgIHJlc29sdmUodGV4dCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==