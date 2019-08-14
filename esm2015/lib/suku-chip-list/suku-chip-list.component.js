/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, } from '@angular/core';
export class SukuChipListComponent {
    constructor() {
        this.DocumentList = [];
        this.actionOne = new EventEmitter();
        this.actionTwo = new EventEmitter();
        this.tempDataOne = (/** @type {?} */ ([]));
        this.tempDataTwo = (/** @type {?} */ ([]));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} val
     * @param {?} docIndex
     * @return {?}
     */
    downloadDoc(val, docIndex) {
        this.tempDataOne.map((/**
         * @param {?} d
         * @return {?}
         */
        (d) => {
            d.value = val;
            d.index = docIndex;
        }));
        this.actionOne.emit(this.tempDataOne);
    }
    /**
     * @param {?} val
     * @param {?} docIndex
     * @return {?}
     */
    deleteDoc(val, docIndex) {
        this.tempDataTwo.map((/**
         * @param {?} d
         * @return {?}
         */
        (d) => {
            d.value = val;
            d.index = docIndex;
        }));
        this.actionTwo.emit(this.tempDataTwo);
    }
}
SukuChipListComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-chip-list',
                template: "<div class=\"col\">\n  <mat-chip-list>\n    <mat-chip class=\"whiteSpace\" *ngFor=\"let doc of DocumentList;let docIndex = index;\"> <br>\n      <mat-icon matChipRemove (click)=\"downloadDoc(doc,docIndex)\" matTooltip=\"Download\">\n        save_alt\n      </mat-icon>\n      <mat-icon matChipRemove matTooltip=\"Delete\" (click)=\"deleteDoc(doc,docIndex)\">clear\n      </mat-icon>\n      <span> {{doc.name}}</span>\n    </mat-chip>\n  </mat-chip-list>\n</div>",
                styles: [".whiteSpace{white-space:nowrap}"]
            }] }
];
/** @nocollapse */
SukuChipListComponent.ctorParameters = () => [];
SukuChipListComponent.propDecorators = {
    DocumentList: [{ type: Input, args: ['document-list',] }],
    actionOne: [{ type: Output, args: ['action-one',] }],
    actionTwo: [{ type: Output, args: ['action-two',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGlwLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY2hpcC1saXN0L3N1a3UtY2hpcC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUcsTUFBTSxFQUFFLFlBQVksR0FBRyxNQUFNLGVBQWUsQ0FBQztBQU9qRixNQUFNLE9BQU8scUJBQXFCO0lBT2hDO1FBTHdCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JELGdCQUFXLEdBQUcsbUJBQUssRUFBRSxFQUFBLENBQUM7UUFDdkIsZ0JBQVcsR0FBRyxtQkFBSyxFQUFFLEVBQUEsQ0FBQztJQUNMLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7OztJQUVGLFdBQVcsQ0FBQyxHQUFHLEVBQUMsUUFBUTtRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3pCLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2QsQ0FBQyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUE7UUFDcEIsQ0FBQyxFQUFDLENBQUM7UUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQUcsRUFBQyxRQUFRO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDekIsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDZCxDQUFDLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQTtRQUNwQixDQUFDLEVBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7WUEvQkQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHlkQUE4Qzs7YUFFL0M7Ozs7OzJCQUdFLEtBQUssU0FBQyxlQUFlO3dCQUNyQixNQUFNLFNBQUMsWUFBWTt3QkFDbkIsTUFBTSxTQUFDLFlBQVk7Ozs7SUFGcEIsNkNBQTBDOztJQUMxQywwQ0FBcUQ7O0lBQ3JELDBDQUFxRDs7SUFDckQsNENBQXNCOztJQUN2Qiw0Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgLFx0T3V0cHV0LFx0RXZlbnRFbWl0dGVyLCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWNoaXAtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWNoaXAtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtY2hpcC1saXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUNoaXBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoJ2RvY3VtZW50LWxpc3QnKSBEb2N1bWVudExpc3QgPSBbXTtcbiAgQE91dHB1dCgnYWN0aW9uLW9uZScpIGFjdGlvbk9uZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgnYWN0aW9uLXR3bycpIGFjdGlvblR3byA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgdGVtcERhdGFPbmUgPSA8YW55PltdO1xuXHR0ZW1wRGF0YVR3byA9IDxhbnk+W107XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuXHRkb3dubG9hZERvYyh2YWwsZG9jSW5kZXgpIHtcbiAgICB0aGlzLnRlbXBEYXRhT25lLm1hcCgoZCkgPT4ge1xuICAgICAgZC52YWx1ZSA9IHZhbDtcbiAgICAgIGQuaW5kZXggPSBkb2NJbmRleFxuICAgIH0pO1xuXHRcdHRoaXMuYWN0aW9uT25lLmVtaXQodGhpcy50ZW1wRGF0YU9uZSk7XG4gIH1cbiAgXG4gIGRlbGV0ZURvYyh2YWwsZG9jSW5kZXgpIHtcbiAgICB0aGlzLnRlbXBEYXRhVHdvLm1hcCgoZCkgPT4ge1xuICAgICAgZC52YWx1ZSA9IHZhbDtcbiAgICAgIGQuaW5kZXggPSBkb2NJbmRleFxuICAgIH0pO1xuXHRcdHRoaXMuYWN0aW9uVHdvLmVtaXQodGhpcy50ZW1wRGF0YVR3byk7XG5cdH1cbn1cbiJdfQ==