/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-dropdown/suku-dropdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class SukuDropdownComponent {
    // @Input() icon = 'suku-arrow-icon';
    // @Input('icon-custom-class') iconCustomClass = 'arrow-icon';
    constructor() {
        this.control = 'productTraceability';
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
        this.disabled = false;
        this.select = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} field
     * @return {?}
     */
    isFieldValid(field) {
        return ((!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSumitAttempt));
    }
}
SukuDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-dropdown',
                template: "<span [formGroup]=\"form\">\n  <mat-form-field class=\"col p-0\">\n    <mat-select id=\"{{selectId}}\" [class]=\"customSelectClass\" [disabled]=\"disabled\" #selector\n      formControlName=\"{{control}}\" (selectionChange)=\"select.emit(selector.value)\" [placeholder]=\"placeholder\">\n      <mat-option *ngFor=\"let item of data;let i=index\" value=\"{{item[keyValue]}}\" id=\"option{{i}}\">\n        {{item[displayKey]}}\n      </mat-option>\n    </mat-select>\n    <span id=\"dropdown-arrow-icon\" matSuffix>\n      <mat-icon>\n        <span>\n          <i [id]=\"iconId\" class=\"{{iconCustomClass}} {{icon}}\"></i>\n          <!-- <img [id]=\"iconId\" class=\"{{iconCustomClass}}\" height=\"23\" src=\"{{icon}}\" width=\"20\"> -->\n        </span>\n      </mat-icon>\n    </span>\n    <mat-error>\n      <span class=\"err_style\">\n        <span *ngIf=\"form.hasError('required',[control])\" id=\"countryReq\">{{errorMsg}}</span>\n      </span>\n    </mat-error>\n  </mat-form-field>\n</span>",
                styles: ["::ng-deep .mat-select-arrow{border:0!important;-webkit-appearance:none;-moz-appearance:none}:host ::ng-deep.mat-select-trigger{height:1.7em!important;padding-bottom:.5em!important}:host ::ng-deep .mat-form-field-suffix{top:9px!important}.mat-select-panel{margin-left:10px!important}.mat-select-panel:focus,.mat-select-trigger:focus{outline:0!important}::ng-deep mat-select:focus{outline:0!important}.arrow-icon{font-size:2.5em}"]
            }] }
];
/** @nocollapse */
SukuDropdownComponent.ctorParameters = () => [];
SukuDropdownComponent.propDecorators = {
    form: [{ type: Input }],
    control: [{ type: Input }],
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
    disabled: [{ type: Input, args: ['disabled',] }],
    select: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuDropdownComponent.prototype.form;
    /** @type {?} */
    SukuDropdownComponent.prototype.control;
    /** @type {?} */
    SukuDropdownComponent.prototype.data;
    /** @type {?} */
    SukuDropdownComponent.prototype.keyValue;
    /** @type {?} */
    SukuDropdownComponent.prototype.displayKey;
    /** @type {?} */
    SukuDropdownComponent.prototype.placeholder;
    /** @type {?} */
    SukuDropdownComponent.prototype.formSumitAttempt;
    /** @type {?} */
    SukuDropdownComponent.prototype.selectId;
    /** @type {?} */
    SukuDropdownComponent.prototype.errorMsg;
    /** @type {?} */
    SukuDropdownComponent.prototype.customSelectClass;
    /** @type {?} */
    SukuDropdownComponent.prototype.icon;
    /** @type {?} */
    SukuDropdownComponent.prototype.iconCustomClass;
    /** @type {?} */
    SukuDropdownComponent.prototype.iconId;
    /** @type {?} */
    SukuDropdownComponent.prototype.disabled;
    /** @type {?} */
    SukuDropdownComponent.prototype.select;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kcm9wZG93bi9zdWt1LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUTNDLE1BQU0sT0FBTyxxQkFBcUI7OztJQW1CakM7UUFqQlMsWUFBTyxHQUFHLHFCQUFxQixDQUFDO1FBQ2hDLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixhQUFRLEdBQUcsYUFBYSxDQUFDO1FBQ3pCLGVBQVUsR0FBRyxhQUFhLENBQUM7UUFDM0IsZ0JBQVcsR0FBRyxrQ0FBa0MsQ0FBQztRQUVqRCxhQUFRLEdBQUcsd0JBQXdCLENBQUM7UUFDcEMsYUFBUSxHQUFHLGlCQUFpQixDQUFDO1FBQzdCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixTQUFJLEdBQUcsb0JBQW9CLENBQUM7UUFDVCxvQkFBZSxHQUFHLFlBQVksQ0FBQztRQUN6QyxXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFJdEIsQ0FBQzs7OztJQUVqQixRQUFRLEtBQUssQ0FBQzs7Ozs7SUFFZCxZQUFZLENBQUMsS0FBYTtRQUN6QixPQUFPLENBQ04sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDN0QsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQ3pELENBQUM7SUFDSCxDQUFDOzs7WUFqQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixtL0JBQTZDOzthQUU3Qzs7Ozs7bUJBRUMsS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7Z0NBQ0wsS0FBSzttQkFDTCxLQUFLOzhCQUNMLEtBQUssU0FBQyxtQkFBbUI7cUJBQ3pCLEtBQUssU0FBQyxTQUFTO3VCQUNmLEtBQUssU0FBQyxVQUFVO3FCQUNoQixNQUFNOzs7O0lBZFAscUNBQXlCOztJQUN6Qix3Q0FBeUM7O0lBQ3pDLHFDQUFtQjs7SUFDbkIseUNBQWtDOztJQUNsQywyQ0FBb0M7O0lBQ3BDLDRDQUEwRDs7SUFDMUQsaURBQTBCOztJQUMxQix5Q0FBNkM7O0lBQzdDLHlDQUFzQzs7SUFDdEMsa0RBQWdDOztJQUNoQyxxQ0FBcUM7O0lBQ3JDLGdEQUEyRDs7SUFDM0QsdUNBQW1DOztJQUNuQyx5Q0FBb0M7O0lBQ3BDLHVDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IF9rZXlWYWx1ZURpZmZlcnNGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvYXBwbGljYXRpb25fbW9kdWxlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1kcm9wZG93bicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1kcm9wZG93bi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VEcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcblx0QElucHV0KCkgY29udHJvbCA9ICdwcm9kdWN0VHJhY2VhYmlsaXR5Jztcblx0QElucHV0KCkgZGF0YSA9IFtdO1xuXHRASW5wdXQoKSBrZXlWYWx1ZSA9ICdwcm9kdWN0TmFtZSc7XG5cdEBJbnB1dCgpIGRpc3BsYXlLZXkgPSAncHJvZHVjdE5hbWUnO1xuXHRASW5wdXQoKSBwbGFjZWhvbGRlciA9ICdzZWxlY3QgcHJvZHVjdCBmcm9tIHRoaXMgbGlzdGluZyc7XG5cdEBJbnB1dCgpIGZvcm1TdW1pdEF0dGVtcHQ7XG5cdEBJbnB1dCgpIHNlbGVjdElkID0gJ3N0dFByb2R1Y3RUcmFjZWFiaWxpdHknO1xuXHRASW5wdXQoKSBlcnJvck1zZyA9ICdDYW5ub3QgYmUgYmxhbmsnO1xuXHRASW5wdXQoKSBjdXN0b21TZWxlY3RDbGFzcyA9ICcnO1xuXHRASW5wdXQoKSBpY29uID0gJ3N1a3UtZHJvcGRvd24taWNvbic7XG5cdEBJbnB1dCgnaWNvbi1jdXN0b20tY2xhc3MnKSBpY29uQ3VzdG9tQ2xhc3MgPSAnYXJyb3ctaWNvbic7XG5cdEBJbnB1dCgnaWNvbi1pZCcpIGljb25JZCA9ICdhcnJvdyc7XG5cdEBJbnB1dCgnZGlzYWJsZWQnKSBkaXNhYmxlZCA9IGZhbHNlO1xuXHRAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHQvLyBASW5wdXQoKSBpY29uID0gJ3N1a3UtYXJyb3ctaWNvbic7XG5cdC8vIEBJbnB1dCgnaWNvbi1jdXN0b20tY2xhc3MnKSBpY29uQ3VzdG9tQ2xhc3MgPSAnYXJyb3ctaWNvbic7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgfVxuXG5cdGlzRmllbGRWYWxpZChmaWVsZDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdCghdGhpcy5mb3JtLmdldChmaWVsZCkudmFsaWQgJiYgdGhpcy5mb3JtLmdldChmaWVsZCkudG91Y2hlZCkgfHxcblx0XHRcdCh0aGlzLmZvcm0uZ2V0KGZpZWxkKS51bnRvdWNoZWQgJiYgdGhpcy5mb3JtU3VtaXRBdHRlbXB0KVxuXHRcdCk7XG5cdH1cbn1cbiJdfQ==