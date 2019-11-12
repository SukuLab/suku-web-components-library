/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1rZXkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWZvcm0tdGFibGUvc3VrdS1rZXkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEQ7SUFBQTtJQVNBLENBQUM7Ozs7O0lBUEMsZ0NBQVM7Ozs7SUFBVCxVQUFVLEtBQUs7O1lBQ1AsSUFBSSxHQUFHLEVBQUU7UUFDZixLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRTtZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnQkFSRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFOztJQVN0QixtQkFBQztDQUFBLEFBVEQsSUFTQztTQVJZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdrZXlzJyB9KVxyXG5leHBvcnQgY2xhc3MgU3VrdUtleXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlKTogYW55IHtcclxuICAgIGNvbnN0IGtleXMgPSBbXTtcclxuICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZSkge1xyXG4gICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgIH1cclxuICAgIHJldHVybiBrZXlzO1xyXG4gIH1cclxufVxyXG4iXX0=