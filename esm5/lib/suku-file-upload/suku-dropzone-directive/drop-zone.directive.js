/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-file-upload/suku-dropzone-directive/drop-zone.directive.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC16b25lLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWZpbGUtdXBsb2FkL3N1a3UtZHJvcHpvbmUtZGlyZWN0aXZlL2Ryb3Atem9uZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBZSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNGO0lBUUU7UUFIVSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUN2QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUVoQyxDQUFDOzs7OztJQUdqQixzQ0FBTTs7OztJQUROLFVBQ08sTUFBTTtRQUNYLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBR0QsMENBQVU7Ozs7SUFEVixVQUNXLE1BQU07UUFDZixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFHRCwyQ0FBVzs7OztJQURYLFVBQ1ksTUFBTTtRQUNoQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBM0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Ozs7OzBCQUdFLE1BQU07MEJBQ04sTUFBTTt5QkFJTixZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDOzZCQU8vQixZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzhCQU1uQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQU12Qyw0QkFBQztDQUFBLEFBN0JELElBNkJDO1NBMUJZLHFCQUFxQjs7O0lBRWhDLHdDQUFpRDs7SUFDakQsd0NBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZHJvcFpvbmVdJ1xufSlcbmV4cG9ydCBjbGFzcyBTdWt1RHJvcFpvbmVEaXJlY3RpdmUge1xuXG4gIEBPdXRwdXQoKSBkcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlTGlzdD4oKTtcbiAgQE91dHB1dCgpIGhvdmVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcbiAgb25Ecm9wKCRldmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuZHJvcHBlZC5lbWl0KCRldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuICAgIHRoaXMuaG92ZXJlZC5lbWl0KGZhbHNlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcbiAgb25EcmFnT3ZlcigkZXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmhvdmVyZWQuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pXG4gIG9uRHJhZ0xlYXZlKCRldmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuaG92ZXJlZC5lbWl0KGZhbHNlKTtcbiAgfVxuXG59XG5cbiJdfQ==