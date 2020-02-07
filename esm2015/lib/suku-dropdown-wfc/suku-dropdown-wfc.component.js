/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-dropdown-wfc/suku-dropdown-wfc.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
export class SukuDropdownWfcComponent {
    constructor() {
        this.dropdownControl = new FormControl('');
        this.color = 'primary';
        this.data = [];
        this.keyValue = 'productName';
        this.displayKey = 'productName';
        this.placeholder = 'select product from this listing';
        this.selectId = 'sttProductTraceability';
        this.errorMsg = 'Cannot be blank.';
        this.errorMsgTwo = 'Duplicate lotId.';
        this.customSelectClass = '';
        this.icon = 'suku-dropdown-icon';
        this.iconCustomClass = 'arrow-icon';
        this.iconId = 'arrow';
        this.select = new EventEmitter();
        this.valueChange = new EventEmitter();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set disabled(val) {
        if (val) {
            this.dropdownControl.disable();
        }
        else {
            this.dropdownControl.enable();
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set value(val) {
        console.log('val', val);
        if (val) {
            this.dropdownControl.patchValue(val);
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set enableRequiredValidator(val) {
        console.log('enableRequiredValidator', val);
        if (val) {
            this.dropdownControl.setValidators(Validators.required);
            this.dropdownControl.updateValueAndValidity();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuDropdownWfcComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-dropdown-wfc',
                template: "<span>\n  <mat-form-field class=\"col p-0\">\n    <mat-select id=\"{{selectId}}\" [class]=\"customSelectClass\" #selector [formControl]=\"dropdownControl\"\n      name=\"dropdownControl\" (selectionChange)=\"select.emit(dropdownControl);\" [placeholder]=\"placeholder\">\n      <mat-option *ngFor=\"let item of data;let i=index\" value=\"{{item[keyValue]}}\" id=\"option{{i}}\">\n        {{item[displayKey]}}\n      </mat-option>\n    </mat-select>\n    <span matSuffix>\n      <mat-icon>\n        <span>\n          <i [id]=\"iconId\" class=\"{{iconCustomClass}} dropdown-icon {{icon}}\"></i>\n        </span>\n      </mat-icon>\n    </span>\n    <mat-error *ngIf=\"dropdownControl.hasError('required')\">\n      {{errorMsg}}\n    </mat-error>\n  </mat-form-field>\n</span>",
                styles: [":host ::ng-deep.mat-select-trigger{height:1.7em!important;padding-bottom:.5em!important}::ng-deep .mat-select-arrow{border:0!important;-webkit-appearance:none;-moz-appearance:none}.mat-select-panel{margin-left:10px!important}.mat-select-panel:focus,.mat-select-trigger:focus{outline:0!important}.mat-select-arrow+i.dropdown-icon{float:right;margin-top:-30px;margin-right:4px;pointer-events:none;font-size:large}::ng-deep mat-select:focus{outline:0!important}.arrow-icon{font-size:2.5em}"]
            }] }
];
/** @nocollapse */
SukuDropdownWfcComponent.ctorParameters = () => [];
SukuDropdownWfcComponent.propDecorators = {
    peerForm: [{ type: Input, args: ['form',] }],
    pattern: [{ type: Input }],
    color: [{ type: Input }],
    data: [{ type: Input }],
    keyValue: [{ type: Input }],
    displayKey: [{ type: Input }],
    placeholder: [{ type: Input }],
    formSumitAttempt: [{ type: Input }],
    selectId: [{ type: Input }],
    errorMsg: [{ type: Input }],
    errorMsgTwo: [{ type: Input }],
    customSelectClass: [{ type: Input }],
    icon: [{ type: Input }],
    iconCustomClass: [{ type: Input, args: ['icon-custom-class',] }],
    iconId: [{ type: Input, args: ['icon-id',] }],
    disabled: [{ type: Input }],
    value: [{ type: Input }],
    enableRequiredValidator: [{ type: Input, args: ['enable-required-validator',] }],
    select: [{ type: Output }],
    valueChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuDropdownWfcComponent.prototype._subscription;
    /** @type {?} */
    SukuDropdownWfcComponent.prototype.peerForm;
    /** @type {?} */
    SukuDropdownWfcComponent.prototype.dropdownControl;
    /** @type {?} */
    SukuDropdownWfcComponent.prototype.pattern;
    /** @type {?} */
    SukuDropdownWfcComponent.prototype.color;
    /** @type {?} */
    SukuDropdownWfcComponent.prototype.data;
    /** @type {?} */
    SukuDropdownWfcComponent.prototype.keyValue;
    /** @type {?} */
    SukuDropdownWfcComponent.prototype.displayKey;
    /** @type {?} */
    SukuDropdownWfcComponent.prototype.placeholder;
    /** @type {?} */
    SukuDropdownWfcComponent.prototype.formSumitAttempt;
    /** @type {?} */
    SukuDropdownWfcComponent.prototype.selectId;
    /** @type {?} */
    SukuDropdownWfcComponent.prototype.errorMsg;
    /** @type {?} */
    SukuDropdownWfcComponent.prototype.errorMsgTwo;
    /** @type {?} */
    SukuDropdownWfcComponent.prototype.customSelectClass;
    /** @type {?} */
    SukuDropdownWfcComponent.prototype.icon;
    /** @type {?} */
    SukuDropdownWfcComponent.prototype.iconCustomClass;
    /** @type {?} */
    SukuDropdownWfcComponent.prototype.iconId;
    /** @type {?} */
    SukuDropdownWfcComponent.prototype.select;
    /** @type {?} */
    SukuDropdownWfcComponent.prototype.valueChange;
}
/**
 * @param {?} c
 * @return {?}
 */
export function duplicate(c) {
    console.log('parent', c);
    if (c.value) {
        if (c.parent.controls['amount'].value <= 0 || c.parent.controls['amount'].value > c.parent.controls['balance'].value) {
            return { duplicate: true };
        }
        else {
            return null;
        }
    }
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kcm9wZG93bi13ZmMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHJvcGRvd24td2ZjL3N1a3UtZHJvcGRvd24td2ZjLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPakUsTUFBTSxPQUFPLHdCQUF3QjtJQTJDbkM7UUF4Q0Esb0JBQWUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU3QixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixhQUFRLEdBQUcsYUFBYSxDQUFDO1FBQ3pCLGVBQVUsR0FBRyxhQUFhLENBQUM7UUFDM0IsZ0JBQVcsR0FBRyxrQ0FBa0MsQ0FBQztRQUVqRCxhQUFRLEdBQUcsd0JBQXdCLENBQUM7UUFDcEMsYUFBUSxHQUFHLGtCQUFrQixDQUFDO1FBQzlCLGdCQUFXLEdBQUcsa0JBQWtCLENBQUM7UUFDakMsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQztRQUNULG9CQUFlLEdBQUcsWUFBWSxDQUFDO1FBQ3pDLFdBQU0sR0FBRyxPQUFPLENBQUM7UUF3QnpCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQXpCakIsSUFDSSxRQUFRLENBQUMsR0FBRztRQUNkLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQzthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUMvQjtJQUNILENBQUM7Ozs7O0lBQ0QsSUFDSSxLQUFLLENBQUMsR0FBRztRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDOzs7OztJQUNELElBQ0ksdUJBQXVCLENBQUMsR0FBRztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxlQUFlLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUMvQztJQUNILENBQUM7Ozs7SUFLRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBbkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixpeEJBQWlEOzthQUVsRDs7Ozs7dUJBR0UsS0FBSyxTQUFDLE1BQU07c0JBRVosS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSztnQ0FDTCxLQUFLO21CQUNMLEtBQUs7OEJBQ0wsS0FBSyxTQUFDLG1CQUFtQjtxQkFDekIsS0FBSyxTQUFDLFNBQVM7dUJBQ2YsS0FBSztvQkFRTCxLQUFLO3NDQU9MLEtBQUssU0FBQywyQkFBMkI7cUJBUWpDLE1BQU07MEJBQ04sTUFBTTs7OztJQXpDUCxpREFBYzs7SUFDZCw0Q0FBZ0M7O0lBQ2hDLG1EQUFzQzs7SUFDdEMsMkNBQWlCOztJQUNqQix5Q0FBMkI7O0lBQzNCLHdDQUFtQjs7SUFDbkIsNENBQWtDOztJQUNsQyw4Q0FBb0M7O0lBQ3BDLCtDQUEwRDs7SUFDMUQsb0RBQTBCOztJQUMxQiw0Q0FBNkM7O0lBQzdDLDRDQUF1Qzs7SUFDdkMsK0NBQTBDOztJQUMxQyxxREFBZ0M7O0lBQ2hDLHdDQUFxQzs7SUFDckMsbURBQTJEOztJQUMzRCwwQ0FBbUM7O0lBd0JuQywwQ0FBc0M7O0lBQ3RDLCtDQUEyQzs7Ozs7O0FBUzdDLE1BQU0sVUFBVSxTQUFTLENBQUMsQ0FBYztJQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QixJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUU7UUFDWCxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNwSCxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDO1NBQzVCO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZHJvcGRvd24td2ZjJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZHJvcGRvd24td2ZjLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1kcm9wZG93bi13ZmMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1RHJvcGRvd25XZmNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBfc3Vic2NyaXB0aW9uO1xuICBASW5wdXQoJ2Zvcm0nKSBwZWVyRm9ybTogTmdGb3JtO1xuICBkcm9wZG93bkNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICBASW5wdXQoKSBwYXR0ZXJuO1xuICBASW5wdXQoKSBjb2xvciA9ICdwcmltYXJ5JztcbiAgQElucHV0KCkgZGF0YSA9IFtdO1xuICBASW5wdXQoKSBrZXlWYWx1ZSA9ICdwcm9kdWN0TmFtZSc7XG4gIEBJbnB1dCgpIGRpc3BsYXlLZXkgPSAncHJvZHVjdE5hbWUnO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICdzZWxlY3QgcHJvZHVjdCBmcm9tIHRoaXMgbGlzdGluZyc7XG4gIEBJbnB1dCgpIGZvcm1TdW1pdEF0dGVtcHQ7XG4gIEBJbnB1dCgpIHNlbGVjdElkID0gJ3N0dFByb2R1Y3RUcmFjZWFiaWxpdHknO1xuICBASW5wdXQoKSBlcnJvck1zZyA9ICdDYW5ub3QgYmUgYmxhbmsuJztcbiAgQElucHV0KCkgZXJyb3JNc2dUd28gPSAnRHVwbGljYXRlIGxvdElkLic7XG4gIEBJbnB1dCgpIGN1c3RvbVNlbGVjdENsYXNzID0gJyc7XG4gIEBJbnB1dCgpIGljb24gPSAnc3VrdS1kcm9wZG93bi1pY29uJztcbiAgQElucHV0KCdpY29uLWN1c3RvbS1jbGFzcycpIGljb25DdXN0b21DbGFzcyA9ICdhcnJvdy1pY29uJztcbiAgQElucHV0KCdpY29uLWlkJykgaWNvbklkID0gJ2Fycm93JztcbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuZHJvcGRvd25Db250cm9sLmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcm9wZG93bkNvbnRyb2wuZW5hYmxlKCk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWwpIHtcbiAgICBjb25zb2xlLmxvZygndmFsJywgdmFsKTtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duQ29udHJvbC5wYXRjaFZhbHVlKHZhbCk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgnZW5hYmxlLXJlcXVpcmVkLXZhbGlkYXRvcicpXG4gIHNldCBlbmFibGVSZXF1aXJlZFZhbGlkYXRvcih2YWwpIHtcbiAgICBjb25zb2xlLmxvZygnZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3InLCB2YWwpO1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuZHJvcGRvd25Db250cm9sLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICB0aGlzLmRyb3Bkb3duQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuICB9XG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGR1cGxpY2F0ZShjOiBGb3JtQ29udHJvbCk6IGFueSB7XG4gIGNvbnNvbGUubG9nKCdwYXJlbnQnLCBjKTtcbiAgaWYgKGMudmFsdWUpIHtcbiAgICBpZiAoYy5wYXJlbnQuY29udHJvbHNbJ2Ftb3VudCddLnZhbHVlIDw9IDAgfHwgYy5wYXJlbnQuY29udHJvbHNbJ2Ftb3VudCddLnZhbHVlID4gYy5wYXJlbnQuY29udHJvbHNbJ2JhbGFuY2UnXS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHsgZHVwbGljYXRlOiB0cnVlIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiJdfQ==