/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
// import moment from 'moment';
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
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getTranslatedTxt(key) {
        if (key) {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => {
                this.translate.get(key).subscribe((/**
                 * @param {?} text
                 * @return {?}
                 */
                (text) => {
                    console.log('text', text);
                    resolve(text);
                }));
            }));
        }
        else {
            return key;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXRlLXBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kaXNwbGF5LXRhYmxlL3N1a3UtZGF0ZS1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBSTNDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBRTNCLFlBQW1CLFNBQTJCLEVBQVUsUUFBa0I7UUFBdkQsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUksQ0FBQzs7Ozs7O0lBRS9FLFNBQVMsQ0FBQyxLQUFhLEVBQUUsVUFBa0I7O2NBQ25DLGFBQWEsR0FBRyxVQUFVO1FBQ2hDLElBQUksS0FBSyxJQUFJLEdBQUcsRUFBRTtZQUNoQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxhQUFhLEVBQUU7WUFDakIsMEVBQTBFO1lBQzFFLDREQUE0RDtZQUM1RCxxQ0FBcUM7WUFDckMsb0ZBQW9GO1lBQ3BGLDZEQUE2RDtZQUM3RCxrQkFBa0I7WUFDbEIsK0JBQStCO1lBQy9CLHlDQUF5QztZQUN6QyxzQkFBc0I7WUFDdEIsaUJBQWlCO1lBQ2pCLFFBQVE7WUFDUixvQkFBb0I7WUFDcEIsd0RBQXdEO1lBQ3hELHlFQUF5RTtZQUN6RSw2QkFBNkI7WUFDN0IsTUFBTTtZQUNOLEtBQUs7U0FDTjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsR0FBRztRQUNsQixJQUFJLEdBQUcsRUFBRTtZQUNQLE9BQU8sSUFBSSxPQUFPOzs7OztZQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7b0JBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUMxQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsT0FBTyxHQUFHLENBQUM7U0FDWjtJQUNILENBQUM7OztZQTVDRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7Ozs7WUFKaEMsZ0JBQWdCO1lBQ2hCLFFBQVE7Ozs7SUFNSCxxQ0FBa0M7Ozs7O0lBQUUsb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5AUGlwZSh7IG5hbWU6ICdkYXRlTG9jYWxlJywgcHVyZTogZmFsc2UgfSlcbmV4cG9ydCBjbGFzcyBEYXRlTG9jYWxlRmlsdGVyIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSwgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUpIHsgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBkYXRlRm9ybWF0OiBzdHJpbmcpIHtcbiAgICBjb25zdCBkYXRlRm9ybWF0S2V5ID0gZGF0ZUZvcm1hdDtcbiAgICBpZiAodmFsdWUgPT0gJy0nKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmIChkYXRlRm9ybWF0S2V5KSB7XG4gICAgICAvLyBjb25zdCBjdXJyZW50TGFuZyA9IHRoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nOyAvLyBnZXQgY3VycmVudCBsYW5ndWFnZVxuICAgICAgLy8gY29uc29sZS5sb2coJ2N1cnJlbnRMYW5nIGZyb20gcGlwZScsIHZhbHVlLCBjdXJyZW50TGFuZyk7XG4gICAgICAvLyBpZihjdXJyZW50TGFuZyAmJiBkYXRlRm9ybWF0S2V5KSB7XG4gICAgICAvLyAgIC8vIGNvbnN0IHJldHVyblZhbHVlID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRpb25zW2N1cnJlbnRMYW5nXVtkYXRlRm9ybWF0S2V5XTtcbiAgICAgIC8vICBjb25zdCByZXR1cm5WYWx1ZSA9IHRoaXMuZ2V0VHJhbnNsYXRlZFR4dChkYXRlRm9ybWF0S2V5KTtcbiAgICAgIC8vICBsZXQgZm9ybWF0S2V5O1xuICAgICAgLy8gICByZXR1cm5WYWx1ZS50aGVuKHZhbCA9PiB7IFxuICAgICAgLy8gICAgY29uc29sZS5sb2coJ3JldHVyblZhbHVlVHh0JywgdmFsKTtcbiAgICAgIC8vICAgIGZvcm1hdEtleSA9IHZhbDtcbiAgICAgIC8vICAgIHJldHVybiB2YWw7XG4gICAgICAvLyAgIH0pO1xuICAgICAgLy8gICBpZihmb3JtYXRLZXkpIHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZygndmFsdWUgZnJvbSBwaXBlJywgdmFsdWUsIGZvcm1hdEtleSk7XG4gICAgICAvLyAgICAgY29uc3QgZm9ybWF0dGVkVmFsdWUgPSB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybSh2YWx1ZSAsIGZvcm1hdEtleSk7XG4gICAgICAvLyAgICAgcmV0dXJuIGZvcm1hdHRlZFZhbHVlO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9IFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0VHJhbnNsYXRlZFR4dChrZXkpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlLmdldChrZXkpLnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3RleHQnLCB0ZXh0KTtcbiAgICAgICAgICByZXNvbHZlKHRleHQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG59XG4iXX0=