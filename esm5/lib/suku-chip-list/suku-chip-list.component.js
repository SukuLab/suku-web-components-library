/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, } from '@angular/core';
var SukuChipListComponent = /** @class */ (function () {
    function SukuChipListComponent() {
        this.DocumentList = [];
        this.actionOne = new EventEmitter();
        this.actionTwo = new EventEmitter();
        this.tempDataOne = (/** @type {?} */ ([]));
        this.tempDataTwo = (/** @type {?} */ ([]));
    }
    /**
     * @return {?}
     */
    SukuChipListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} val
     * @param {?} docIndex
     * @return {?}
     */
    SukuChipListComponent.prototype.downloadDoc = /**
     * @param {?} val
     * @param {?} docIndex
     * @return {?}
     */
    function (val, docIndex) {
        this.tempDataOne.map((/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            d.value = val;
            d.index = docIndex;
        }));
        this.actionOne.emit(this.tempDataOne);
    };
    /**
     * @param {?} val
     * @param {?} docIndex
     * @return {?}
     */
    SukuChipListComponent.prototype.deleteDoc = /**
     * @param {?} val
     * @param {?} docIndex
     * @return {?}
     */
    function (val, docIndex) {
        this.tempDataTwo.map((/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            d.value = val;
            d.index = docIndex;
        }));
        this.actionTwo.emit(this.tempDataTwo);
    };
    SukuChipListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-chip-list',
                    template: "<div class=\"col\">\n  <mat-chip-list>\n    <mat-chip class=\"whiteSpace\" *ngFor=\"let doc of DocumentList;let docIndex = index;\"> <br>\n      <mat-icon matChipRemove (click)=\"downloadDoc(doc,docIndex)\" matTooltip=\"Download\">\n        save_alt\n      </mat-icon>\n      <mat-icon matChipRemove matTooltip=\"Delete\" (click)=\"deleteDoc(doc,docIndex)\">clear\n      </mat-icon>\n      <span> {{doc.name}}</span>\n    </mat-chip>\n  </mat-chip-list>\n</div>",
                    styles: [".whiteSpace{white-space:nowrap}"]
                }] }
    ];
    /** @nocollapse */
    SukuChipListComponent.ctorParameters = function () { return []; };
    SukuChipListComponent.propDecorators = {
        DocumentList: [{ type: Input, args: ['document-list',] }],
        actionOne: [{ type: Output, args: ['action-one',] }],
        actionTwo: [{ type: Output, args: ['action-two',] }]
    };
    return SukuChipListComponent;
}());
export { SukuChipListComponent };
if (false) {
    /** @type {?} */
    SukuChipListComponent.prototype.DocumentList;
    /** @type {?} */
    SukuChipListComponent.prototype.actionOne;
    /** @type {?} */
    SukuChipListComponent.prototype.actionTwo;
    /** @type {?} */
    SukuChipListComponent.prototype.tempDataOne;
    /** @type {?} */
    SukuChipListComponent.prototype.tempDataTwo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGlwLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY2hpcC1saXN0L3N1a3UtY2hpcC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUcsTUFBTSxFQUFFLFlBQVksR0FBRyxNQUFNLGVBQWUsQ0FBQztBQUVqRjtJQVlFO1FBTHdCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JELGdCQUFXLEdBQUcsbUJBQUssRUFBRSxFQUFBLENBQUM7UUFDdkIsZ0JBQVcsR0FBRyxtQkFBSyxFQUFFLEVBQUEsQ0FBQztJQUNMLENBQUM7Ozs7SUFFakIsd0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7O0lBRUYsMkNBQVc7Ozs7O0lBQVgsVUFBWSxHQUFHLEVBQUMsUUFBUTtRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDZCxDQUFDLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQTtRQUNwQixDQUFDLEVBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7SUFFRCx5Q0FBUzs7Ozs7SUFBVCxVQUFVLEdBQUcsRUFBQyxRQUFRO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsQ0FBQztZQUNyQixDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNkLENBQUMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFBO1FBQ3BCLENBQUMsRUFBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7O2dCQS9CRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIseWRBQThDOztpQkFFL0M7Ozs7OytCQUdFLEtBQUssU0FBQyxlQUFlOzRCQUNyQixNQUFNLFNBQUMsWUFBWTs0QkFDbkIsTUFBTSxTQUFDLFlBQVk7O0lBdUJ0Qiw0QkFBQztDQUFBLEFBaENELElBZ0NDO1NBM0JZLHFCQUFxQjs7O0lBRWhDLDZDQUEwQzs7SUFDMUMsMENBQXFEOztJQUNyRCwwQ0FBcUQ7O0lBQ3JELDRDQUFzQjs7SUFDdkIsNENBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0ICxcdE91dHB1dCxcdEV2ZW50RW1pdHRlciwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1jaGlwLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1jaGlwLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWNoaXAtbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VDaGlwTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCdkb2N1bWVudC1saXN0JykgRG9jdW1lbnRMaXN0ID0gW107XG4gIEBPdXRwdXQoJ2FjdGlvbi1vbmUnKSBhY3Rpb25PbmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoJ2FjdGlvbi10d28nKSBhY3Rpb25Ud28gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHRlbXBEYXRhT25lID0gPGFueT5bXTtcblx0dGVtcERhdGFUd28gPSA8YW55PltdO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cblx0ZG93bmxvYWREb2ModmFsLGRvY0luZGV4KSB7XG4gICAgdGhpcy50ZW1wRGF0YU9uZS5tYXAoKGQpID0+IHtcbiAgICAgIGQudmFsdWUgPSB2YWw7XG4gICAgICBkLmluZGV4ID0gZG9jSW5kZXhcbiAgICB9KTtcblx0XHR0aGlzLmFjdGlvbk9uZS5lbWl0KHRoaXMudGVtcERhdGFPbmUpO1xuICB9XG4gIFxuICBkZWxldGVEb2ModmFsLGRvY0luZGV4KSB7XG4gICAgdGhpcy50ZW1wRGF0YVR3by5tYXAoKGQpID0+IHtcbiAgICAgIGQudmFsdWUgPSB2YWw7XG4gICAgICBkLmluZGV4ID0gZG9jSW5kZXhcbiAgICB9KTtcblx0XHR0aGlzLmFjdGlvblR3by5lbWl0KHRoaXMudGVtcERhdGFUd28pO1xuXHR9XG59XG4iXX0=