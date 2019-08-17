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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    downloadDoc(val) {
        this.actionOne.emit(val);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    deleteDoc(val) {
        this.actionTwo.emit(val);
    }
}
SukuChipListComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-chip-list',
                template: "<div class=\"col\">\n  <mat-chip-list>\n    <mat-chip class=\"whiteSpace\" *ngFor=\"let doc of DocumentList;let docIndex = index;\"> <br>\n      <mat-icon matChipRemove (click)=\"downloadDoc(doc)\" matTooltip=\"Download\">\n        save_alt\n      </mat-icon>\n      <mat-icon matChipRemove matTooltip=\"Delete\" (click)=\"deleteDoc(doc)\">clear\n      </mat-icon>\n      <span> {{doc.name}}</span>\n    </mat-chip>\n  </mat-chip-list>\n</div>",
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGlwLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY2hpcC1saXN0L3N1a3UtY2hpcC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUcsTUFBTSxFQUFFLFlBQVksR0FBRyxNQUFNLGVBQWUsQ0FBQztBQU9qRixNQUFNLE9BQU8scUJBQXFCO0lBS2hDO1FBSHdCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUYsV0FBVyxDQUFDLEdBQUc7UUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxHQUFHO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7O1lBckJELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQix1Y0FBOEM7O2FBRS9DOzs7OzsyQkFHRSxLQUFLLFNBQUMsZUFBZTt3QkFDckIsTUFBTSxTQUFDLFlBQVk7d0JBQ25CLE1BQU0sU0FBQyxZQUFZOzs7O0lBRnBCLDZDQUEwQzs7SUFDMUMsMENBQXFEOztJQUNyRCwwQ0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgLFx0T3V0cHV0LFx0RXZlbnRFbWl0dGVyLCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWNoaXAtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWNoaXAtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtY2hpcC1saXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUNoaXBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoJ2RvY3VtZW50LWxpc3QnKSBEb2N1bWVudExpc3QgPSBbXTtcbiAgQE91dHB1dCgnYWN0aW9uLW9uZScpIGFjdGlvbk9uZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgnYWN0aW9uLXR3bycpIGFjdGlvblR3byA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG5cdGRvd25sb2FkRG9jKHZhbCkge1xuXHRcdHRoaXMuYWN0aW9uT25lLmVtaXQodmFsKTtcbiAgfVxuICBcbiAgZGVsZXRlRG9jKHZhbCkge1xuXHRcdHRoaXMuYWN0aW9uVHdvLmVtaXQodmFsKTtcblx0fVxufVxuIl19