/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
var SukuDropdownWfcComponent = /** @class */ (function () {
    function SukuDropdownWfcComponent() {
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
    Object.defineProperty(SukuDropdownWfcComponent.prototype, "disabled", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                this.dropdownControl.disable();
            }
            else {
                this.dropdownControl.enable();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SukuDropdownWfcComponent.prototype, "value", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            console.log('val', val);
            if (val) {
                this.dropdownControl.patchValue(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SukuDropdownWfcComponent.prototype, "enableRequiredValidator", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            console.log('enableRequiredValidator', val);
            if (val) {
                this.dropdownControl.setValidators(Validators.required);
                this.dropdownControl.updateValueAndValidity();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SukuDropdownWfcComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuDropdownWfcComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-dropdown-wfc',
                    template: "<span>\n  <mat-form-field class=\"col p-0\">\n    <mat-select id=\"{{selectId}}\" [class]=\"customSelectClass\" #selector [formControl]=\"dropdownControl\"\n      name=\"dropdownControl\" (selectionChange)=\"select.emit(dropdownControl);\" [placeholder]=\"placeholder\">\n      <mat-option *ngFor=\"let item of data;let i=index\" value=\"{{item[keyValue]}}\" id=\"option{{i}}\">\n        {{item[displayKey]}}\n      </mat-option>\n    </mat-select>\n    <span matSuffix>\n      <mat-icon>\n        <span>\n          <i [id]=\"iconId\" class=\"{{iconCustomClass}} dropdown-icon {{icon}}\"></i>\n        </span>\n      </mat-icon>\n    </span>\n    <mat-error *ngIf=\"dropdownControl.hasError('required')\">\n      {{errorMsg}}\n    </mat-error>\n  </mat-form-field>\n</span>",
                    styles: [":host ::ng-deep.mat-select-trigger{height:1.7em!important;padding-bottom:.5em!important}::ng-deep .mat-select-arrow{border:0!important;-webkit-appearance:none;-moz-appearance:none}.mat-select-panel{margin-left:10px!important}.mat-select-panel:focus,.mat-select-trigger:focus{outline:0!important}.mat-select-arrow+i.dropdown-icon{float:right;margin-top:-30px;margin-right:4px;pointer-events:none;font-size:large}::ng-deep mat-select:focus{outline:0!important}.arrow-icon{font-size:2.5em}"]
                }] }
    ];
    /** @nocollapse */
    SukuDropdownWfcComponent.ctorParameters = function () { return []; };
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
    return SukuDropdownWfcComponent;
}());
export { SukuDropdownWfcComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kcm9wZG93bi13ZmMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHJvcGRvd24td2ZjL3N1a3UtZHJvcGRvd24td2ZjLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRTtJQWdERTtRQXhDQSxvQkFBZSxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTdCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FBRyxhQUFhLENBQUM7UUFDekIsZUFBVSxHQUFHLGFBQWEsQ0FBQztRQUMzQixnQkFBVyxHQUFHLGtDQUFrQyxDQUFDO1FBRWpELGFBQVEsR0FBRyx3QkFBd0IsQ0FBQztRQUNwQyxhQUFRLEdBQUcsa0JBQWtCLENBQUM7UUFDOUIsZ0JBQVcsR0FBRyxrQkFBa0IsQ0FBQztRQUNqQyxzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsU0FBSSxHQUFHLG9CQUFvQixDQUFDO1FBQ1Qsb0JBQWUsR0FBRyxZQUFZLENBQUM7UUFDekMsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQXdCekIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUF6QmpCLHNCQUNJLDhDQUFROzs7OztRQURaLFVBQ2EsR0FBRztZQUNkLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUMvQjtRQUNILENBQUM7OztPQUFBO0lBQ0Qsc0JBQ0ksMkNBQUs7Ozs7O1FBRFQsVUFDVSxHQUFHO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEIsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdEM7UUFDSCxDQUFDOzs7T0FBQTtJQUNELHNCQUNJLDZEQUF1Qjs7Ozs7UUFEM0IsVUFDNEIsR0FBRztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2FBQy9DO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUFLRCwyQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFuREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLGl4QkFBaUQ7O2lCQUVsRDs7Ozs7MkJBR0UsS0FBSyxTQUFDLE1BQU07MEJBRVosS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7bUNBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSztvQ0FDTCxLQUFLO3VCQUNMLEtBQUs7a0NBQ0wsS0FBSyxTQUFDLG1CQUFtQjt5QkFDekIsS0FBSyxTQUFDLFNBQVM7MkJBQ2YsS0FBSzt3QkFRTCxLQUFLOzBDQU9MLEtBQUssU0FBQywyQkFBMkI7eUJBUWpDLE1BQU07OEJBQ04sTUFBTTs7SUFPVCwrQkFBQztDQUFBLEFBdERELElBc0RDO1NBakRZLHdCQUF3Qjs7O0lBQ25DLGlEQUFjOztJQUNkLDRDQUFnQzs7SUFDaEMsbURBQXNDOztJQUN0QywyQ0FBaUI7O0lBQ2pCLHlDQUEyQjs7SUFDM0Isd0NBQW1COztJQUNuQiw0Q0FBa0M7O0lBQ2xDLDhDQUFvQzs7SUFDcEMsK0NBQTBEOztJQUMxRCxvREFBMEI7O0lBQzFCLDRDQUE2Qzs7SUFDN0MsNENBQXVDOztJQUN2QywrQ0FBMEM7O0lBQzFDLHFEQUFnQzs7SUFDaEMsd0NBQXFDOztJQUNyQyxtREFBMkQ7O0lBQzNELDBDQUFtQzs7SUF3Qm5DLDBDQUFzQzs7SUFDdEMsK0NBQTJDOzs7Ozs7QUFTN0MsTUFBTSxVQUFVLFNBQVMsQ0FBQyxDQUFjO0lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRTtRQUNYLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ3BILE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDNUI7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1kcm9wZG93bi13ZmMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1kcm9wZG93bi13ZmMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWRyb3Bkb3duLXdmYy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VEcm9wZG93bldmY0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIF9zdWJzY3JpcHRpb247XG4gIEBJbnB1dCgnZm9ybScpIHBlZXJGb3JtOiBOZ0Zvcm07XG4gIGRyb3Bkb3duQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIEBJbnB1dCgpIHBhdHRlcm47XG4gIEBJbnB1dCgpIGNvbG9yID0gJ3ByaW1hcnknO1xuICBASW5wdXQoKSBkYXRhID0gW107XG4gIEBJbnB1dCgpIGtleVZhbHVlID0gJ3Byb2R1Y3ROYW1lJztcbiAgQElucHV0KCkgZGlzcGxheUtleSA9ICdwcm9kdWN0TmFtZSc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ3NlbGVjdCBwcm9kdWN0IGZyb20gdGhpcyBsaXN0aW5nJztcbiAgQElucHV0KCkgZm9ybVN1bWl0QXR0ZW1wdDtcbiAgQElucHV0KCkgc2VsZWN0SWQgPSAnc3R0UHJvZHVjdFRyYWNlYWJpbGl0eSc7XG4gIEBJbnB1dCgpIGVycm9yTXNnID0gJ0Nhbm5vdCBiZSBibGFuay4nO1xuICBASW5wdXQoKSBlcnJvck1zZ1R3byA9ICdEdXBsaWNhdGUgbG90SWQuJztcbiAgQElucHV0KCkgY3VzdG9tU2VsZWN0Q2xhc3MgPSAnJztcbiAgQElucHV0KCkgaWNvbiA9ICdzdWt1LWRyb3Bkb3duLWljb24nO1xuICBASW5wdXQoJ2ljb24tY3VzdG9tLWNsYXNzJykgaWNvbkN1c3RvbUNsYXNzID0gJ2Fycm93LWljb24nO1xuICBASW5wdXQoJ2ljb24taWQnKSBpY29uSWQgPSAnYXJyb3cnO1xuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQodmFsKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5kcm9wZG93bkNvbnRyb2wuZGlzYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyb3Bkb3duQ29udHJvbC5lbmFibGUoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCd2YWwnLCB2YWwpO1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuZHJvcGRvd25Db250cm9sLnBhdGNoVmFsdWUodmFsKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCdlbmFibGUtcmVxdWlyZWQtdmFsaWRhdG9yJylcbiAgc2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCdlbmFibGVSZXF1aXJlZFZhbGlkYXRvcicsIHZhbCk7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5kcm9wZG93bkNvbnRyb2wuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgIHRoaXMuZHJvcGRvd25Db250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG4gIH1cbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZHVwbGljYXRlKGM6IEZvcm1Db250cm9sKTogYW55IHtcbiAgY29uc29sZS5sb2coJ3BhcmVudCcsIGMpO1xuICBpZiAoYy52YWx1ZSkge1xuICAgIGlmIChjLnBhcmVudC5jb250cm9sc1snYW1vdW50J10udmFsdWUgPD0gMCB8fCBjLnBhcmVudC5jb250cm9sc1snYW1vdW50J10udmFsdWUgPiBjLnBhcmVudC5jb250cm9sc1snYmFsYW5jZSddLnZhbHVlKSB7XG4gICAgICByZXR1cm4geyBkdXBsaWNhdGU6IHRydWUgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuIl19