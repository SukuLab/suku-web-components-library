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
        this.icon = 'suku-dropdown-icon';
        this.iconCustomClass = 'arrow-icon';
        this.iconId = 'arrow';
        this.select = new EventEmitter();
        this.valueChange = new EventEmitter();
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kcm9wZG93bi13ZmMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHJvcGRvd24td2ZjL3N1a3UtZHJvcGRvd24td2ZjLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpEO0lBdUNFO1FBaENBLG9CQUFlLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFN0IsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsYUFBUSxHQUFHLGFBQWEsQ0FBQztRQUN6QixlQUFVLEdBQUcsYUFBYSxDQUFDO1FBQzNCLGdCQUFXLEdBQUcsa0NBQWtDLENBQUM7UUFFakQsYUFBUSxHQUFHLHdCQUF3QixDQUFDO1FBQ3BDLGFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUM3QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsU0FBSSxHQUFHLG9CQUFvQixDQUFDO1FBQ1Qsb0JBQWUsR0FBRyxZQUFZLENBQUM7UUFDekMsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQVF6QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFVM0IsQ0FBQztJQWxCakIsc0JBQ0ksMkNBQUs7Ozs7O1FBRFQsVUFDVSxHQUFHO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEIsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdEM7UUFDSCxDQUFDOzs7T0FBQTtJQUlELHNCQUNJLDZEQUF1Qjs7Ozs7UUFEM0IsVUFDNEIsR0FBRztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2FBQy9DO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUFHRCwyQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkExQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLGl4QkFBaUQ7O2lCQUVsRDs7Ozs7MEJBSUUsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7bUNBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7b0NBQ0wsS0FBSzt1QkFDTCxLQUFLO2tDQUNMLEtBQUssU0FBQyxtQkFBbUI7eUJBQ3pCLEtBQUssU0FBQyxTQUFTO3dCQUNmLEtBQUs7eUJBT0wsTUFBTTs4QkFDTixNQUFNOzBDQUVOLEtBQUssU0FBQywyQkFBMkI7O0lBYXBDLCtCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0F2Q1ksd0JBQXdCOzs7SUFDbkMsaURBQWM7O0lBQ2QsbURBQXNDOztJQUN0QywyQ0FBaUI7O0lBQ2pCLHlDQUEyQjs7SUFDM0Isd0NBQW1COztJQUNuQiw0Q0FBa0M7O0lBQ2xDLDhDQUFvQzs7SUFDcEMsK0NBQTBEOztJQUMxRCxvREFBMEI7O0lBQzFCLDRDQUE2Qzs7SUFDN0MsNENBQXNDOztJQUN0QyxxREFBZ0M7O0lBQ2hDLHdDQUFxQzs7SUFDckMsbURBQTJEOztJQUMzRCwwQ0FBbUM7O0lBUW5DLDBDQUFzQzs7SUFDdEMsK0NBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1kcm9wZG93bi13ZmMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1kcm9wZG93bi13ZmMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWRyb3Bkb3duLXdmYy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VEcm9wZG93bldmY0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIF9zdWJzY3JpcHRpb247XG4gIGRyb3Bkb3duQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIEBJbnB1dCgpIHBhdHRlcm47XG4gIEBJbnB1dCgpIGNvbG9yID0gJ3ByaW1hcnknO1xuICBASW5wdXQoKSBkYXRhID0gW107XG4gIEBJbnB1dCgpIGtleVZhbHVlID0gJ3Byb2R1Y3ROYW1lJztcbiAgQElucHV0KCkgZGlzcGxheUtleSA9ICdwcm9kdWN0TmFtZSc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ3NlbGVjdCBwcm9kdWN0IGZyb20gdGhpcyBsaXN0aW5nJztcbiAgQElucHV0KCkgZm9ybVN1bWl0QXR0ZW1wdDtcbiAgQElucHV0KCkgc2VsZWN0SWQgPSAnc3R0UHJvZHVjdFRyYWNlYWJpbGl0eSc7XG4gIEBJbnB1dCgpIGVycm9yTXNnID0gJ0Nhbm5vdCBiZSBibGFuayc7XG4gIEBJbnB1dCgpIGN1c3RvbVNlbGVjdENsYXNzID0gJyc7XG4gIEBJbnB1dCgpIGljb24gPSAnc3VrdS1kcm9wZG93bi1pY29uJztcbiAgQElucHV0KCdpY29uLWN1c3RvbS1jbGFzcycpIGljb25DdXN0b21DbGFzcyA9ICdhcnJvdy1pY29uJztcbiAgQElucHV0KCdpY29uLWlkJykgaWNvbklkID0gJ2Fycm93JztcbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCd2YWwnLCB2YWwpO1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuZHJvcGRvd25Db250cm9sLnBhdGNoVmFsdWUodmFsKTtcbiAgICB9XG4gIH1cbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgnZW5hYmxlLXJlcXVpcmVkLXZhbGlkYXRvcicpXG4gIHNldCBlbmFibGVSZXF1aXJlZFZhbGlkYXRvcih2YWwpIHtcbiAgICBjb25zb2xlLmxvZygnZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3InLCB2YWwpO1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuZHJvcGRvd25Db250cm9sLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICB0aGlzLmRyb3Bkb3duQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19