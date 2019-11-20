/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class SukuKeysPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        if (value) {
            /** @type {?} */
            const keys = [];
            for (let key in value) {
                keys.push(key);
            }
            return keys;
        }
    }
}
SukuKeysPipe.decorators = [
    { type: Pipe, args: [{ name: 'keys' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1rZXkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWZvcm0tdGFibGUvc3VrdS1rZXkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEQsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBQ3ZCLFNBQVMsQ0FBQyxLQUFLO1FBQ2IsSUFBRyxLQUFLLEVBQUU7O2tCQUNGLElBQUksR0FBRyxFQUFFO1lBQ2YsS0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDaEI7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQzs7O1lBVkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2tleXMnIH0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1S2V5c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWUpOiBhbnkge1xyXG4gICAgaWYodmFsdWUpIHtcclxuICAgICAgY29uc3Qga2V5cyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWUpIHtcclxuICAgICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ga2V5cztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19