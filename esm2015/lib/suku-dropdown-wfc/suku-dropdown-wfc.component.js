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
        this.icon = 'suku-arrow-icon';
        this.iconCustomClass = 'arrow-icon';
        this.iconId = 'arrow';
        this.select = new EventEmitter();
        this.valueChange = new EventEmitter();
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
                template: "<span>\n  <mat-form-field class=\"col p-0\">\n    <mat-select id=\"{{selectId}}\" [class]=\"customSelectClass\" #selector [formControl]=\"dropdownControl\"\n      name=\"dropdownControl\" (selectionChange)=\"select.emit(dropdownControl);\" [placeholder]=\"placeholder\">\n      <mat-option *ngFor=\"let item of data;let i=index\" value=\"{{item[keyValue]}}\" id=\"option{{i}}\">\n        {{item[displayKey]}}\n      </mat-option>\n    </mat-select>\n    <span matSuffix>\n      <mat-icon>\n        <span>\n          <i [id]=\"iconId\" class=\"{{iconCustomClass}} {{icon}}\"></i>\n        </span>\n      </mat-icon>\n    </span>\n    <mat-error *ngIf=\"dropdownControl.hasError('required')\">\n      {{errorMsg}}\n    </mat-error>\n  </mat-form-field>\n</span>",
                styles: ["::ng-deep .mat-select-arrow{border:0!important;-webkit-appearance:none;-moz-appearance:none}.mat-select-panel{margin-left:10px!important}.mat-select-panel:focus,.mat-select-trigger:focus{outline:0!important}::ng-deep mat-select:focus{outline:0!important}.arrow-icon{height:.9em!important;background-size:.6em!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kcm9wZG93bi13ZmMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHJvcGRvd24td2ZjL3N1a3UtZHJvcGRvd24td2ZjLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3pELE1BQU0sT0FBTyx3QkFBd0I7SUEyQm5DO1FBekJBLG9CQUFlLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFN0IsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsYUFBUSxHQUFHLGFBQWEsQ0FBQztRQUN6QixlQUFVLEdBQUcsYUFBYSxDQUFDO1FBQzNCLGdCQUFXLEdBQUcsa0NBQWtDLENBQUM7UUFFakQsYUFBUSxHQUFHLHdCQUF3QixDQUFDO1FBQ3BDLGFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUM3QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsU0FBSSxHQUFHLGlCQUFpQixDQUFDO1FBQ04sb0JBQWUsR0FBRyxZQUFZLENBQUM7UUFDekMsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUN6QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFVM0IsQ0FBQzs7Ozs7SUFSakIsSUFDSSx1QkFBdUIsQ0FBQyxHQUFHO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQy9DO0lBQ0gsQ0FBQzs7OztJQUdELFFBQVE7SUFDUixDQUFDOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLG13QkFBaUQ7O2FBRWxEOzs7OztzQkFJRSxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzsrQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSztnQ0FDTCxLQUFLO21CQUNMLEtBQUs7OEJBQ0wsS0FBSyxTQUFDLG1CQUFtQjtxQkFDekIsS0FBSyxTQUFDLFNBQVM7cUJBQ2YsTUFBTTswQkFDTixNQUFNO3NDQUVOLEtBQUssU0FBQywyQkFBMkI7Ozs7SUFsQmxDLGlEQUFjOztJQUNkLG1EQUFzQzs7SUFDdEMsMkNBQWlCOztJQUNqQix5Q0FBMkI7O0lBQzNCLHdDQUFtQjs7SUFDbkIsNENBQWtDOztJQUNsQyw4Q0FBb0M7O0lBQ3BDLCtDQUEwRDs7SUFDMUQsb0RBQTBCOztJQUMxQiw0Q0FBNkM7O0lBQzdDLDRDQUFzQzs7SUFDdEMscURBQWdDOztJQUNoQyx3Q0FBa0M7O0lBQ2xDLG1EQUEyRDs7SUFDM0QsMENBQW1DOztJQUNuQywwQ0FBc0M7O0lBQ3RDLCtDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZHJvcGRvd24td2ZjJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZHJvcGRvd24td2ZjLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1kcm9wZG93bi13ZmMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1RHJvcGRvd25XZmNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBfc3Vic2NyaXB0aW9uO1xuICBkcm9wZG93bkNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICBASW5wdXQoKSBwYXR0ZXJuO1xuICBASW5wdXQoKSBjb2xvciA9ICdwcmltYXJ5JztcbiAgQElucHV0KCkgZGF0YSA9IFtdO1xuICBASW5wdXQoKSBrZXlWYWx1ZSA9ICdwcm9kdWN0TmFtZSc7XG4gIEBJbnB1dCgpIGRpc3BsYXlLZXkgPSAncHJvZHVjdE5hbWUnO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICdzZWxlY3QgcHJvZHVjdCBmcm9tIHRoaXMgbGlzdGluZyc7XG4gIEBJbnB1dCgpIGZvcm1TdW1pdEF0dGVtcHQ7XG4gIEBJbnB1dCgpIHNlbGVjdElkID0gJ3N0dFByb2R1Y3RUcmFjZWFiaWxpdHknO1xuICBASW5wdXQoKSBlcnJvck1zZyA9ICdDYW5ub3QgYmUgYmxhbmsnO1xuICBASW5wdXQoKSBjdXN0b21TZWxlY3RDbGFzcyA9ICcnO1xuICBASW5wdXQoKSBpY29uID0gJ3N1a3UtYXJyb3ctaWNvbic7XG4gIEBJbnB1dCgnaWNvbi1jdXN0b20tY2xhc3MnKSBpY29uQ3VzdG9tQ2xhc3MgPSAnYXJyb3ctaWNvbic7XG4gIEBJbnB1dCgnaWNvbi1pZCcpIGljb25JZCA9ICdhcnJvdyc7XG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoJ2VuYWJsZS1yZXF1aXJlZC12YWxpZGF0b3InKVxuICBzZXQgZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IodmFsKSB7XG4gICAgY29uc29sZS5sb2coJ2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yJywgdmFsKTtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duQ29udHJvbC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy5kcm9wZG93bkNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==