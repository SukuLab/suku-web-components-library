/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-form-table/suku-key.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var SukuKeysPipe = /** @class */ (function () {
    function SukuKeysPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SukuKeysPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var keys = [];
        for (var key in value) {
            keys.push(key);
        }
        return keys;
    };
    SukuKeysPipe.decorators = [
        { type: Pipe, args: [{ name: 'keys' },] }
    ];
    return SukuKeysPipe;
}());
export { SukuKeysPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1rZXkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWZvcm0tdGFibGUvc3VrdS1rZXkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFTQSxDQUFDOzs7OztJQVBDLGdDQUFTOzs7O0lBQVQsVUFBVSxLQUFLOztZQUNQLElBQUksR0FBRyxFQUFFO1FBQ2YsS0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBUkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTs7SUFTdEIsbUJBQUM7Q0FBQSxBQVRELElBU0M7U0FSWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICdrZXlzJyB9KVxuZXhwb3J0IGNsYXNzIFN1a3VLZXlzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWUpOiBhbnkge1xuICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWUpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbiAgfVxufVxuIl19