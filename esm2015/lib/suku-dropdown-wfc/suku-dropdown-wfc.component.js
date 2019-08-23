/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
export class SukuDropdownWfcComponent {
    constructor() {
        this.dropdownControl = new FormControl('');
        this.color = 'primary';
        this.data = [];
        this.keyValue = 'productName';
        this.displayKey = 'productName';
        this.placeholder = 'select product from this listing';
        this.selectId = 'sttProductTraceability';
        this.errorMsg = 'Cannot be blank';
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
    pattern: [{ type: Input }],
    color: [{ type: Input }],
    data: [{ type: Input }],
    keyValue: [{ type: Input }],
    displayKey: [{ type: Input }],
    placeholder: [{ type: Input }],
    formSumitAttempt: [{ type: Input }],
    selectId: [{ type: Input }],
    errorMsg: [{ type: Input }],
    customSelectClass: [{ type: Input }],
    icon: [{ type: Input }],
    iconCustomClass: [{ type: Input, args: ['icon-custom-class',] }],
    iconId: [{ type: Input, args: ['icon-id',] }],
    value: [{ type: Input }],
    select: [{ type: Output }],
    valueChange: [{ type: Output }],
    enableRequiredValidator: [{ type: Input, args: ['enable-required-validator',] }]
};
if (false) {
    /** @type {?} */
    SukuDropdownWfcComponent.prototype._subscription;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kcm9wZG93bi13ZmMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHJvcGRvd24td2ZjL3N1a3UtZHJvcGRvd24td2ZjLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3pELE1BQU0sT0FBTyx3QkFBd0I7SUFrQ25DO1FBaENBLG9CQUFlLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFN0IsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsYUFBUSxHQUFHLGFBQWEsQ0FBQztRQUN6QixlQUFVLEdBQUcsYUFBYSxDQUFDO1FBQzNCLGdCQUFXLEdBQUcsa0NBQWtDLENBQUM7UUFFakQsYUFBUSxHQUFHLHdCQUF3QixDQUFDO1FBQ3BDLGFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUM3QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsU0FBSSxHQUFHLG9CQUFvQixDQUFDO1FBQ1Qsb0JBQWUsR0FBRyxZQUFZLENBQUM7UUFDekMsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQVF6QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFVM0IsQ0FBQzs7Ozs7SUFsQmpCLElBQ0ksS0FBSyxDQUFDLEdBQUc7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7Ozs7SUFJRCxJQUNJLHVCQUF1QixDQUFDLEdBQUc7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QyxJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsZUFBZSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDL0M7SUFDSCxDQUFDOzs7O0lBR0QsUUFBUTtJQUNSLENBQUM7OztZQTFDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsaXhCQUFpRDs7YUFFbEQ7Ozs7O3NCQUlFLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOytCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO2dDQUNMLEtBQUs7bUJBQ0wsS0FBSzs4QkFDTCxLQUFLLFNBQUMsbUJBQW1CO3FCQUN6QixLQUFLLFNBQUMsU0FBUztvQkFDZixLQUFLO3FCQU9MLE1BQU07MEJBQ04sTUFBTTtzQ0FFTixLQUFLLFNBQUMsMkJBQTJCOzs7O0lBekJsQyxpREFBYzs7SUFDZCxtREFBc0M7O0lBQ3RDLDJDQUFpQjs7SUFDakIseUNBQTJCOztJQUMzQix3Q0FBbUI7O0lBQ25CLDRDQUFrQzs7SUFDbEMsOENBQW9DOztJQUNwQywrQ0FBMEQ7O0lBQzFELG9EQUEwQjs7SUFDMUIsNENBQTZDOztJQUM3Qyw0Q0FBc0M7O0lBQ3RDLHFEQUFnQzs7SUFDaEMsd0NBQXFDOztJQUNyQyxtREFBMkQ7O0lBQzNELDBDQUFtQzs7SUFRbkMsMENBQXNDOztJQUN0QywrQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWRyb3Bkb3duLXdmYycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWRyb3Bkb3duLXdmYy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZHJvcGRvd24td2ZjLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdURyb3Bkb3duV2ZjQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgX3N1YnNjcmlwdGlvbjtcbiAgZHJvcGRvd25Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgQElucHV0KCkgcGF0dGVybjtcbiAgQElucHV0KCkgY29sb3IgPSAncHJpbWFyeSc7XG4gIEBJbnB1dCgpIGRhdGEgPSBbXTtcbiAgQElucHV0KCkga2V5VmFsdWUgPSAncHJvZHVjdE5hbWUnO1xuICBASW5wdXQoKSBkaXNwbGF5S2V5ID0gJ3Byb2R1Y3ROYW1lJztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnc2VsZWN0IHByb2R1Y3QgZnJvbSB0aGlzIGxpc3RpbmcnO1xuICBASW5wdXQoKSBmb3JtU3VtaXRBdHRlbXB0O1xuICBASW5wdXQoKSBzZWxlY3RJZCA9ICdzdHRQcm9kdWN0VHJhY2VhYmlsaXR5JztcbiAgQElucHV0KCkgZXJyb3JNc2cgPSAnQ2Fubm90IGJlIGJsYW5rJztcbiAgQElucHV0KCkgY3VzdG9tU2VsZWN0Q2xhc3MgPSAnJztcbiAgQElucHV0KCkgaWNvbiA9ICdzdWt1LWRyb3Bkb3duLWljb24nO1xuICBASW5wdXQoJ2ljb24tY3VzdG9tLWNsYXNzJykgaWNvbkN1c3RvbUNsYXNzID0gJ2Fycm93LWljb24nO1xuICBASW5wdXQoJ2ljb24taWQnKSBpY29uSWQgPSAnYXJyb3cnO1xuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsKSB7XG4gICAgY29uc29sZS5sb2coJ3ZhbCcsIHZhbCk7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5kcm9wZG93bkNvbnRyb2wucGF0Y2hWYWx1ZSh2YWwpO1xuICAgIH1cbiAgfVxuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCdlbmFibGUtcmVxdWlyZWQtdmFsaWRhdG9yJylcbiAgc2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCdlbmFibGVSZXF1aXJlZFZhbGlkYXRvcicsIHZhbCk7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5kcm9wZG93bkNvbnRyb2wuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgIHRoaXMuZHJvcGRvd25Db250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=