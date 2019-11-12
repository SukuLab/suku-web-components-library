/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
var SukuDropZoneDirective = /** @class */ (function () {
    function SukuDropZoneDirective() {
        this.dropped = new EventEmitter();
        this.hovered = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    SukuDropZoneDirective.prototype.onDrop = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        this.dropped.emit($event.dataTransfer.files);
        this.hovered.emit(false);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SukuDropZoneDirective.prototype.onDragOver = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        this.hovered.emit(true);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SukuDropZoneDirective.prototype.onDragLeave = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        this.hovered.emit(false);
    };
    SukuDropZoneDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dropZone]'
                },] }
    ];
    /** @nocollapse */
    SukuDropZoneDirective.ctorParameters = function () { return []; };
    SukuDropZoneDirective.propDecorators = {
        dropped: [{ type: Output }],
        hovered: [{ type: Output }],
        onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
        onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }]
    };
    return SukuDropZoneDirective;
}());
export { SukuDropZoneDirective };
if (false) {
    /** @type {?} */
    SukuDropZoneDirective.prototype.dropped;
    /** @type {?} */
    SukuDropZoneDirective.prototype.hovered;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC16b25lLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWZpbGUtdXBsb2FkL3N1a3UtZHJvcHpvbmUtZGlyZWN0aXZlL2Ryb3Atem9uZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFlLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0Y7SUFRRTtRQUhVLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBQ3ZDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBRWhDLENBQUM7Ozs7O0lBR2pCLHNDQUFNOzs7O0lBRE4sVUFDTyxNQUFNO1FBQ1gsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFHRCwwQ0FBVTs7OztJQURWLFVBQ1csTUFBTTtRQUNmLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUdELDJDQUFXOzs7O0lBRFgsVUFDWSxNQUFNO1FBQ2hCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOztnQkEzQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7Ozs7MEJBR0UsTUFBTTswQkFDTixNQUFNO3lCQUlOLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkJBTy9CLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7OEJBTW5DLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBTXZDLDRCQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0ExQlkscUJBQXFCOzs7SUFFaEMsd0NBQWlEOztJQUNqRCx3Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tkcm9wWm9uZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1RHJvcFpvbmVEaXJlY3RpdmUge1xyXG5cclxuICBAT3V0cHV0KCkgZHJvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZUxpc3Q+KCk7XHJcbiAgQE91dHB1dCgpIGhvdmVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxyXG4gIG9uRHJvcCgkZXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5kcm9wcGVkLmVtaXQoJGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyk7XHJcbiAgICB0aGlzLmhvdmVyZWQuZW1pdChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXHJcbiAgb25EcmFnT3ZlcigkZXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5ob3ZlcmVkLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKVxyXG4gIG9uRHJhZ0xlYXZlKCRldmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmhvdmVyZWQuZW1pdChmYWxzZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19