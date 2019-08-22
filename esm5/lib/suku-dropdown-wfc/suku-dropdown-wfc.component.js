/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
var SukuDropdownWfcComponent = /** @class */ (function () {
    function SukuDropdownWfcComponent() {
        this.dropdownControl = new FormControl('');
        this.color = 'primary';
        this.data = [];
        this.keyValue = 'productName';
        this.displayKey = 'productName';
        this.placeholder = 'select product from this listing';
        this.selectId = 'sttProductTraceability';
        this.errorMsg = 'Cannot be blank';
        this.customSelectClass = '';
        this.icon = 'suku-arrow-icon';
        this.iconCustomClass = 'arrow-icon';
        this.iconId = 'arrow';
        this.select = new EventEmitter();
        this.valueChange = new EventEmitter();
    }
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
                    template: "<span>\n  <mat-form-field class=\"col p-0\">\n    <mat-select id=\"{{selectId}}\" [class]=\"customSelectClass\" #selector [formControl]=\"dropdownControl\"\n      name=\"dropdownControl\" (selectionChange)=\"select.emit(dropdownControl);\" [placeholder]=\"placeholder\">\n      <mat-option *ngFor=\"let item of data;let i=index\" value=\"{{item[keyValue]}}\" id=\"option{{i}}\">\n        {{item[displayKey]}}\n      </mat-option>\n    </mat-select>\n    <span matSuffix>\n      <mat-icon>\n        <span>\n          <i [id]=\"iconId\" class=\"{{iconCustomClass}} {{icon}}\"></i>\n        </span>\n      </mat-icon>\n    </span>\n    <mat-error *ngIf=\"dropdownControl.hasError('required')\">\n      {{errorMsg}}\n    </mat-error>\n  </mat-form-field>\n</span>",
                    styles: ["::ng-deep .mat-select-arrow{border:0!important;-webkit-appearance:none;-moz-appearance:none}.mat-select-panel{margin-left:10px!important}.mat-select-panel:focus,.mat-select-trigger:focus{outline:0!important}::ng-deep mat-select:focus{outline:0!important}.arrow-icon{height:.9em!important;background-size:.6em!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuDropdownWfcComponent.ctorParameters = function () { return []; };
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
        select: [{ type: Output }],
        valueChange: [{ type: Output }],
        enableRequiredValidator: [{ type: Input, args: ['enable-required-validator',] }]
    };
    return SukuDropdownWfcComponent;
}());
export { SukuDropdownWfcComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kcm9wZG93bi13ZmMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHJvcGRvd24td2ZjL3N1a3UtZHJvcGRvd24td2ZjLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpEO0lBZ0NFO1FBekJBLG9CQUFlLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFN0IsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsYUFBUSxHQUFHLGFBQWEsQ0FBQztRQUN6QixlQUFVLEdBQUcsYUFBYSxDQUFDO1FBQzNCLGdCQUFXLEdBQUcsa0NBQWtDLENBQUM7UUFFakQsYUFBUSxHQUFHLHdCQUF3QixDQUFDO1FBQ3BDLGFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUM3QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsU0FBSSxHQUFHLGlCQUFpQixDQUFDO1FBQ04sb0JBQWUsR0FBRyxZQUFZLENBQUM7UUFDekMsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUN6QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFVM0IsQ0FBQztJQVJqQixzQkFDSSw2REFBdUI7Ozs7O1FBRDNCLFVBQzRCLEdBQUc7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1QyxJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxlQUFlLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzthQUMvQztRQUNILENBQUM7OztPQUFBOzs7O0lBR0QsMkNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBbkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qixtd0JBQWlEOztpQkFFbEQ7Ozs7OzBCQUlFLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLO21DQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLO29DQUNMLEtBQUs7dUJBQ0wsS0FBSztrQ0FDTCxLQUFLLFNBQUMsbUJBQW1CO3lCQUN6QixLQUFLLFNBQUMsU0FBUzt5QkFDZixNQUFNOzhCQUNOLE1BQU07MENBRU4sS0FBSyxTQUFDLDJCQUEyQjs7SUFhcEMsK0JBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQWhDWSx3QkFBd0I7OztJQUNuQyxpREFBYzs7SUFDZCxtREFBc0M7O0lBQ3RDLDJDQUFpQjs7SUFDakIseUNBQTJCOztJQUMzQix3Q0FBbUI7O0lBQ25CLDRDQUFrQzs7SUFDbEMsOENBQW9DOztJQUNwQywrQ0FBMEQ7O0lBQzFELG9EQUEwQjs7SUFDMUIsNENBQTZDOztJQUM3Qyw0Q0FBc0M7O0lBQ3RDLHFEQUFnQzs7SUFDaEMsd0NBQWtDOztJQUNsQyxtREFBMkQ7O0lBQzNELDBDQUFtQzs7SUFDbkMsMENBQXNDOztJQUN0QywrQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWRyb3Bkb3duLXdmYycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWRyb3Bkb3duLXdmYy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZHJvcGRvd24td2ZjLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdURyb3Bkb3duV2ZjQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgX3N1YnNjcmlwdGlvbjtcbiAgZHJvcGRvd25Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgQElucHV0KCkgcGF0dGVybjtcbiAgQElucHV0KCkgY29sb3IgPSAncHJpbWFyeSc7XG4gIEBJbnB1dCgpIGRhdGEgPSBbXTtcbiAgQElucHV0KCkga2V5VmFsdWUgPSAncHJvZHVjdE5hbWUnO1xuICBASW5wdXQoKSBkaXNwbGF5S2V5ID0gJ3Byb2R1Y3ROYW1lJztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnc2VsZWN0IHByb2R1Y3QgZnJvbSB0aGlzIGxpc3RpbmcnO1xuICBASW5wdXQoKSBmb3JtU3VtaXRBdHRlbXB0O1xuICBASW5wdXQoKSBzZWxlY3RJZCA9ICdzdHRQcm9kdWN0VHJhY2VhYmlsaXR5JztcbiAgQElucHV0KCkgZXJyb3JNc2cgPSAnQ2Fubm90IGJlIGJsYW5rJztcbiAgQElucHV0KCkgY3VzdG9tU2VsZWN0Q2xhc3MgPSAnJztcbiAgQElucHV0KCkgaWNvbiA9ICdzdWt1LWFycm93LWljb24nO1xuICBASW5wdXQoJ2ljb24tY3VzdG9tLWNsYXNzJykgaWNvbkN1c3RvbUNsYXNzID0gJ2Fycm93LWljb24nO1xuICBASW5wdXQoJ2ljb24taWQnKSBpY29uSWQgPSAnYXJyb3cnO1xuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCdlbmFibGUtcmVxdWlyZWQtdmFsaWRhdG9yJylcbiAgc2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCdlbmFibGVSZXF1aXJlZFZhbGlkYXRvcicsIHZhbCk7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5kcm9wZG93bkNvbnRyb2wuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgIHRoaXMuZHJvcGRvd25Db250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=