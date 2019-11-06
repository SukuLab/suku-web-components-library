/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmltLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1mb3JtLXRhYmxlL3N1a3UtdHJpbS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRDtJQUFBO0lBU0EsQ0FBQzs7Ozs7SUFQQyxnQ0FBUzs7OztJQUFULFVBQVUsS0FBVTtRQUNsQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkFSRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFOztJQVN0QixtQkFBQztDQUFBLEFBVEQsSUFTQztTQVJZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbkBQaXBlKHsgbmFtZTogJ3RyaW0nIH0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1VHJpbVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSkge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxzL2csICcnKTtcclxuICB9XHJcbn1cclxuIl19