/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-form-table/suku-trim.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var SukuTrimPipe = /** @class */ (function () {
    function SukuTrimPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SukuTrimPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value) {
            return '';
        }
        console.log(value);
        return value.replace(/\s/g, '');
    };
    SukuTrimPipe.decorators = [
        { type: Pipe, args: [{ name: 'trim' },] }
    ];
    return SukuTrimPipe;
}());
export { SukuTrimPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmltLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1mb3JtLXRhYmxlL3N1a3UtdHJpbS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQ7SUFBQTtJQVNBLENBQUM7Ozs7O0lBUEMsZ0NBQVM7Ozs7SUFBVCxVQUFVLEtBQVU7UUFDbEIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Z0JBUkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTs7SUFTdEIsbUJBQUM7Q0FBQSxBQVRELElBU0M7U0FSWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQFBpcGUoeyBuYW1lOiAndHJpbScgfSlcbmV4cG9ydCBjbGFzcyBTdWt1VHJpbVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgfVxufVxuIl19