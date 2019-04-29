/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
var SukuDropdownComponent = /** @class */ (function () {
    function SukuDropdownComponent() {
        this.control = 'productTraceability';
        this.data = [];
        this.icon = '../assets/images/arrow-icon.png';
        this.keyValue = 'productName';
        this.displayKey = 'productName';
        this.placeholder = 'select product from this listing';
        this.selectId = 'sttProductTraceability';
        this.errorMsg = 'Cannot be blank';
        this.customSelectClass = '';
        this.select = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuDropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} field
     * @return {?}
     */
    SukuDropdownComponent.prototype.isFieldValid = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return ((!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSumitAttempt));
    };
    SukuDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-dropdown',
                    template: "<span [formGroup]=\"form\">\n  <mat-form-field class=\"col p-0\">\n    <mat-select id=\"{{selectId}}\" [class]=\"customSelectClass\" #selector formControlName=\"{{control}}\"\n      (selectionChange)=\"select.emit(selector.value)\" [placeholder]=\"placeholder\">\n      <mat-option *ngFor=\"let item of data;let i=index\" value=\"{{item[keyValue]}}\" id=\"option{{i}}\">\n        {{item[displayKey]}}\n      </mat-option>\n    </mat-select>\n    <span matSuffix>\n      <mat-icon><span><img height=\"23\" [src]=\"icon\" width=\"20\"></span></mat-icon>\n    </span>\n    <!-- *ngIf=\"isFieldValid(control)\" -->\n    <mat-error>\n      <span class=\"err_style\">\n        <span *ngIf=\"form.hasError('required',[control])\" id=\"countryReq\">{{errorMsg}}\n        </span>\n      </span>\n    </mat-error>\n  </mat-form-field>\n</span>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SukuDropdownComponent.ctorParameters = function () { return []; };
    SukuDropdownComponent.propDecorators = {
        form: [{ type: Input }],
        control: [{ type: Input }],
        data: [{ type: Input }],
        icon: [{ type: Input }],
        keyValue: [{ type: Input }],
        displayKey: [{ type: Input }],
        placeholder: [{ type: Input }],
        formSumitAttempt: [{ type: Input }],
        selectId: [{ type: Input }],
        errorMsg: [{ type: Input }],
        customSelectClass: [{ type: Input }],
        select: [{ type: Output }]
    };
    return SukuDropdownComponent;
}());
export { SukuDropdownComponent };
if (false) {
    /** @type {?} */
    SukuDropdownComponent.prototype.form;
    /** @type {?} */
    SukuDropdownComponent.prototype.control;
    /** @type {?} */
    SukuDropdownComponent.prototype.data;
    /** @type {?} */
    SukuDropdownComponent.prototype.icon;
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
    SukuDropdownComponent.prototype.select;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kcm9wZG93bi9zdWt1LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0M7SUFrQkM7UUFYUyxZQUFPLEdBQUcscUJBQXFCLENBQUM7UUFDaEMsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFNBQUksR0FBRyxpQ0FBaUMsQ0FBQztRQUN6QyxhQUFRLEdBQUcsYUFBYSxDQUFDO1FBQ3pCLGVBQVUsR0FBRyxhQUFhLENBQUM7UUFDM0IsZ0JBQVcsR0FBRyxrQ0FBa0MsQ0FBQztRQUVqRCxhQUFRLEdBQUcsd0JBQXdCLENBQUM7UUFDcEMsYUFBUSxHQUFHLGlCQUFpQixDQUFDO1FBQzdCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN0QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRWhCLHdDQUFROzs7SUFBUixjQUFZLENBQUM7Ozs7O0lBRWIsNENBQVk7Ozs7SUFBWixVQUFhLEtBQWE7UUFDekIsT0FBTyxDQUNOLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzdELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUN6RCxDQUFDO0lBQ0gsQ0FBQzs7Z0JBM0JELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsZUFBZTtvQkFDekIsNjBCQUE2Qzs7aUJBRTdDOzs7Ozt1QkFFQyxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLO21DQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLO29DQUNMLEtBQUs7eUJBQ0wsTUFBTTs7SUFXUiw0QkFBQztDQUFBLEFBNUJELElBNEJDO1NBdkJZLHFCQUFxQjs7O0lBQ2pDLHFDQUF5Qjs7SUFDekIsd0NBQXlDOztJQUN6QyxxQ0FBbUI7O0lBQ25CLHFDQUFrRDs7SUFDbEQseUNBQWtDOztJQUNsQywyQ0FBb0M7O0lBQ3BDLDRDQUEwRDs7SUFDMUQsaURBQTBCOztJQUMxQix5Q0FBNkM7O0lBQzdDLHlDQUFzQzs7SUFDdEMsa0RBQWdDOztJQUNoQyx1Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBfa2V5VmFsdWVEaWZmZXJzRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL2FwcGxpY2F0aW9uX21vZHVsZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtZHJvcGRvd24nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VEcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcblx0QElucHV0KCkgY29udHJvbCA9ICdwcm9kdWN0VHJhY2VhYmlsaXR5Jztcblx0QElucHV0KCkgZGF0YSA9IFtdO1xuXHRASW5wdXQoKSBpY29uID0gJy4uL2Fzc2V0cy9pbWFnZXMvYXJyb3ctaWNvbi5wbmcnO1xuXHRASW5wdXQoKSBrZXlWYWx1ZSA9ICdwcm9kdWN0TmFtZSc7XG5cdEBJbnB1dCgpIGRpc3BsYXlLZXkgPSAncHJvZHVjdE5hbWUnO1xuXHRASW5wdXQoKSBwbGFjZWhvbGRlciA9ICdzZWxlY3QgcHJvZHVjdCBmcm9tIHRoaXMgbGlzdGluZyc7XG5cdEBJbnB1dCgpIGZvcm1TdW1pdEF0dGVtcHQ7XG5cdEBJbnB1dCgpIHNlbGVjdElkID0gJ3N0dFByb2R1Y3RUcmFjZWFiaWxpdHknO1xuXHRASW5wdXQoKSBlcnJvck1zZyA9ICdDYW5ub3QgYmUgYmxhbmsnO1xuXHRASW5wdXQoKSBjdXN0b21TZWxlY3RDbGFzcyA9ICcnO1xuXHRAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bmdPbkluaXQoKSB7fVxuXG5cdGlzRmllbGRWYWxpZChmaWVsZDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdCghdGhpcy5mb3JtLmdldChmaWVsZCkudmFsaWQgJiYgdGhpcy5mb3JtLmdldChmaWVsZCkudG91Y2hlZCkgfHxcblx0XHRcdCh0aGlzLmZvcm0uZ2V0KGZpZWxkKS51bnRvdWNoZWQgJiYgdGhpcy5mb3JtU3VtaXRBdHRlbXB0KVxuXHRcdCk7XG5cdH1cbn1cbiJdfQ==