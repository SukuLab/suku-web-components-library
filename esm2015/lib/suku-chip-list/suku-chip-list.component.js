/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-chip-list/suku-chip-list.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGlwLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY2hpcC1saXN0L3N1a3UtY2hpcC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFHLE1BQU0sRUFBRSxZQUFZLEdBQUcsTUFBTSxlQUFlLENBQUM7QUFPakYsTUFBTSxPQUFPLHFCQUFxQjtJQUtoQztRQUh3QixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNwQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7OztJQUVGLFdBQVcsQ0FBQyxHQUFHO1FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBRztRQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7OztZQXJCRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsdWNBQThDOzthQUUvQzs7Ozs7MkJBR0UsS0FBSyxTQUFDLGVBQWU7d0JBQ3JCLE1BQU0sU0FBQyxZQUFZO3dCQUNuQixNQUFNLFNBQUMsWUFBWTs7OztJQUZwQiw2Q0FBMEM7O0lBQzFDLDBDQUFxRDs7SUFDckQsMENBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0ICxcdE91dHB1dCxcdEV2ZW50RW1pdHRlciwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1jaGlwLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1jaGlwLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWNoaXAtbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VDaGlwTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCdkb2N1bWVudC1saXN0JykgRG9jdW1lbnRMaXN0ID0gW107XG4gIEBPdXRwdXQoJ2FjdGlvbi1vbmUnKSBhY3Rpb25PbmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoJ2FjdGlvbi10d28nKSBhY3Rpb25Ud28gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuXHRkb3dubG9hZERvYyh2YWwpIHtcblx0XHR0aGlzLmFjdGlvbk9uZS5lbWl0KHZhbCk7XG4gIH1cbiAgXG4gIGRlbGV0ZURvYyh2YWwpIHtcblx0XHR0aGlzLmFjdGlvblR3by5lbWl0KHZhbCk7XG5cdH1cbn1cbiJdfQ==