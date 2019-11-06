/**
 * @fileoverview added by tsickle
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
                template: "<span>\r\n  <mat-form-field class=\"col p-0\">\r\n    <mat-select id=\"{{selectId}}\" [class]=\"customSelectClass\" #selector [formControl]=\"dropdownControl\"\r\n      name=\"dropdownControl\" (selectionChange)=\"select.emit(dropdownControl);\" [placeholder]=\"placeholder\">\r\n      <mat-option *ngFor=\"let item of data;let i=index\" value=\"{{item[keyValue]}}\" id=\"option{{i}}\">\r\n        {{item[displayKey]}}\r\n      </mat-option>\r\n    </mat-select>\r\n    <span matSuffix>\r\n      <mat-icon>\r\n        <span>\r\n          <i [id]=\"iconId\" class=\"{{iconCustomClass}} dropdown-icon {{icon}}\"></i>\r\n        </span>\r\n      </mat-icon>\r\n    </span>\r\n    <mat-error *ngIf=\"dropdownControl.hasError('required')\">\r\n      {{errorMsg}}\r\n    </mat-error>\r\n  </mat-form-field>\r\n</span>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kcm9wZG93bi13ZmMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHJvcGRvd24td2ZjL3N1a3UtZHJvcGRvd24td2ZjLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU9qRSxNQUFNLE9BQU8sd0JBQXdCO0lBMkNuQztRQXhDQSxvQkFBZSxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTdCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FBRyxhQUFhLENBQUM7UUFDekIsZUFBVSxHQUFHLGFBQWEsQ0FBQztRQUMzQixnQkFBVyxHQUFHLGtDQUFrQyxDQUFDO1FBRWpELGFBQVEsR0FBRyx3QkFBd0IsQ0FBQztRQUNwQyxhQUFRLEdBQUcsa0JBQWtCLENBQUM7UUFDOUIsZ0JBQVcsR0FBRyxrQkFBa0IsQ0FBQztRQUNqQyxzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsU0FBSSxHQUFHLG9CQUFvQixDQUFDO1FBQ1Qsb0JBQWUsR0FBRyxZQUFZLENBQUM7UUFDekMsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQXdCekIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBekJqQixJQUNJLFFBQVEsQ0FBQyxHQUFHO1FBQ2QsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hDO2FBQU07WUFDTCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7Ozs7SUFDRCxJQUNJLEtBQUssQ0FBQyxHQUFHO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7Ozs7O0lBQ0QsSUFDSSx1QkFBdUIsQ0FBQyxHQUFHO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQy9DO0lBQ0gsQ0FBQzs7OztJQUtELFFBQVE7SUFDUixDQUFDOzs7WUFuREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHV6QkFBaUQ7O2FBRWxEOzs7Ozt1QkFHRSxLQUFLLFNBQUMsTUFBTTtzQkFFWixLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzsrQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLO2dDQUNMLEtBQUs7bUJBQ0wsS0FBSzs4QkFDTCxLQUFLLFNBQUMsbUJBQW1CO3FCQUN6QixLQUFLLFNBQUMsU0FBUzt1QkFDZixLQUFLO29CQVFMLEtBQUs7c0NBT0wsS0FBSyxTQUFDLDJCQUEyQjtxQkFRakMsTUFBTTswQkFDTixNQUFNOzs7O0lBekNQLGlEQUFjOztJQUNkLDRDQUFnQzs7SUFDaEMsbURBQXNDOztJQUN0QywyQ0FBaUI7O0lBQ2pCLHlDQUEyQjs7SUFDM0Isd0NBQW1COztJQUNuQiw0Q0FBa0M7O0lBQ2xDLDhDQUFvQzs7SUFDcEMsK0NBQTBEOztJQUMxRCxvREFBMEI7O0lBQzFCLDRDQUE2Qzs7SUFDN0MsNENBQXVDOztJQUN2QywrQ0FBMEM7O0lBQzFDLHFEQUFnQzs7SUFDaEMsd0NBQXFDOztJQUNyQyxtREFBMkQ7O0lBQzNELDBDQUFtQzs7SUF3Qm5DLDBDQUFzQzs7SUFDdEMsK0NBQTJDOzs7Ozs7QUFTN0MsTUFBTSxVQUFVLFNBQVMsQ0FBQyxDQUFjO0lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRTtRQUNYLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ3BILE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDNUI7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LWRyb3Bkb3duLXdmYycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZHJvcGRvd24td2ZjLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWRyb3Bkb3duLXdmYy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1RHJvcGRvd25XZmNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIF9zdWJzY3JpcHRpb247XHJcbiAgQElucHV0KCdmb3JtJykgcGVlckZvcm06IE5nRm9ybTtcclxuICBkcm9wZG93bkNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG4gIEBJbnB1dCgpIHBhdHRlcm47XHJcbiAgQElucHV0KCkgY29sb3IgPSAncHJpbWFyeSc7XHJcbiAgQElucHV0KCkgZGF0YSA9IFtdO1xyXG4gIEBJbnB1dCgpIGtleVZhbHVlID0gJ3Byb2R1Y3ROYW1lJztcclxuICBASW5wdXQoKSBkaXNwbGF5S2V5ID0gJ3Byb2R1Y3ROYW1lJztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICdzZWxlY3QgcHJvZHVjdCBmcm9tIHRoaXMgbGlzdGluZyc7XHJcbiAgQElucHV0KCkgZm9ybVN1bWl0QXR0ZW1wdDtcclxuICBASW5wdXQoKSBzZWxlY3RJZCA9ICdzdHRQcm9kdWN0VHJhY2VhYmlsaXR5JztcclxuICBASW5wdXQoKSBlcnJvck1zZyA9ICdDYW5ub3QgYmUgYmxhbmsuJztcclxuICBASW5wdXQoKSBlcnJvck1zZ1R3byA9ICdEdXBsaWNhdGUgbG90SWQuJztcclxuICBASW5wdXQoKSBjdXN0b21TZWxlY3RDbGFzcyA9ICcnO1xyXG4gIEBJbnB1dCgpIGljb24gPSAnc3VrdS1kcm9wZG93bi1pY29uJztcclxuICBASW5wdXQoJ2ljb24tY3VzdG9tLWNsYXNzJykgaWNvbkN1c3RvbUNsYXNzID0gJ2Fycm93LWljb24nO1xyXG4gIEBJbnB1dCgnaWNvbi1pZCcpIGljb25JZCA9ICdhcnJvdyc7XHJcbiAgQElucHV0KClcclxuICBzZXQgZGlzYWJsZWQodmFsKSB7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIHRoaXMuZHJvcGRvd25Db250cm9sLmRpc2FibGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZHJvcGRvd25Db250cm9sLmVuYWJsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBASW5wdXQoKVxyXG4gIHNldCB2YWx1ZSh2YWwpIHtcclxuICAgIGNvbnNvbGUubG9nKCd2YWwnLCB2YWwpO1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICB0aGlzLmRyb3Bkb3duQ29udHJvbC5wYXRjaFZhbHVlKHZhbCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBJbnB1dCgnZW5hYmxlLXJlcXVpcmVkLXZhbGlkYXRvcicpXHJcbiAgc2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yKHZhbCkge1xyXG4gICAgY29uc29sZS5sb2coJ2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yJywgdmFsKTtcclxuICAgIGlmICh2YWwpIHtcclxuICAgICAgdGhpcy5kcm9wZG93bkNvbnRyb2wuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgICAgdGhpcy5kcm9wZG93bkNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGR1cGxpY2F0ZShjOiBGb3JtQ29udHJvbCk6IGFueSB7XHJcbiAgY29uc29sZS5sb2coJ3BhcmVudCcsIGMpO1xyXG4gIGlmIChjLnZhbHVlKSB7XHJcbiAgICBpZiAoYy5wYXJlbnQuY29udHJvbHNbJ2Ftb3VudCddLnZhbHVlIDw9IDAgfHwgYy5wYXJlbnQuY29udHJvbHNbJ2Ftb3VudCddLnZhbHVlID4gYy5wYXJlbnQuY29udHJvbHNbJ2JhbGFuY2UnXS52YWx1ZSkge1xyXG4gICAgICByZXR1cm4geyBkdXBsaWNhdGU6IHRydWUgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG4iXX0=