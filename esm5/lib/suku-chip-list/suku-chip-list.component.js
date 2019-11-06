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
     * @return {?}
     */
    SukuChipListComponent.prototype.downloadDoc = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.actionOne.emit(val);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    SukuChipListComponent.prototype.deleteDoc = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.actionTwo.emit(val);
    };
    SukuChipListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-chip-list',
                    template: "<div class=\"col\">\r\n  <mat-chip-list>\r\n    <mat-chip class=\"whiteSpace\" *ngFor=\"let doc of DocumentList;let docIndex = index;\"> <br>\r\n      <mat-icon matChipRemove (click)=\"downloadDoc(doc)\" matTooltip=\"Download\">\r\n        save_alt\r\n      </mat-icon>\r\n      <mat-icon matChipRemove matTooltip=\"Delete\" (click)=\"deleteDoc(doc)\">clear\r\n      </mat-icon>\r\n      <span> {{doc.name}}</span>\r\n    </mat-chip>\r\n  </mat-chip-list>\r\n</div>",
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGlwLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY2hpcC1saXN0L3N1a3UtY2hpcC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUcsTUFBTSxFQUFFLFlBQVksR0FBRyxNQUFNLGVBQWUsQ0FBQztBQUVqRjtJQVVFO1FBSHdCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFakIsd0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7SUFFRiwyQ0FBVzs7OztJQUFYLFVBQVksR0FBRztRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQseUNBQVM7Ozs7SUFBVCxVQUFVLEdBQUc7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDOztnQkFyQkQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDZkQUE4Qzs7aUJBRS9DOzs7OzsrQkFHRSxLQUFLLFNBQUMsZUFBZTs0QkFDckIsTUFBTSxTQUFDLFlBQVk7NEJBQ25CLE1BQU0sU0FBQyxZQUFZOztJQWF0Qiw0QkFBQztDQUFBLEFBdEJELElBc0JDO1NBakJZLHFCQUFxQjs7O0lBRWhDLDZDQUEwQzs7SUFDMUMsMENBQXFEOztJQUNyRCwwQ0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgLFx0T3V0cHV0LFx0RXZlbnRFbWl0dGVyLCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LWNoaXAtbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtY2hpcC1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWNoaXAtbGlzdC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1Q2hpcExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoJ2RvY3VtZW50LWxpc3QnKSBEb2N1bWVudExpc3QgPSBbXTtcclxuICBAT3V0cHV0KCdhY3Rpb24tb25lJykgYWN0aW9uT25lID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoJ2FjdGlvbi10d28nKSBhY3Rpb25Ud28gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuXHRkb3dubG9hZERvYyh2YWwpIHtcclxuXHRcdHRoaXMuYWN0aW9uT25lLmVtaXQodmFsKTtcclxuICB9XHJcbiAgXHJcbiAgZGVsZXRlRG9jKHZhbCkge1xyXG5cdFx0dGhpcy5hY3Rpb25Ud28uZW1pdCh2YWwpO1xyXG5cdH1cclxufVxyXG4iXX0=