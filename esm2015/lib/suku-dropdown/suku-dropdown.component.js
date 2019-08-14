/**
 * @fileoverview added by tsickle
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
        this.icon = '../../../../../assets/images/arrow-icon.png';
        this.iconCustomClass = '';
        this.iconId = 'arrow';
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
                template: "<span [formGroup]=\"form\">\n  <mat-form-field class=\"col p-0\">\n    <mat-select id=\"{{selectId}}\" [class]=\"customSelectClass\" #selector formControlName=\"{{control}}\"\n      (selectionChange)=\"select.emit(selector.value)\" [placeholder]=\"placeholder\">\n      <mat-option *ngFor=\"let item of data;let i=index\" value=\"{{item[keyValue]}}\" id=\"option{{i}}\">\n        {{item[displayKey]}}\n      </mat-option>\n    </mat-select>\n    <span matSuffix>\n      <mat-icon>\n        <span><img [id]=\"iconId\" class=\"{{iconCustomClass}}\" height=\"23\" src=\"{{icon}} \" width=\"20\"></span>\n      </mat-icon>\n    </span>\n    <mat-error>\n      <span class=\"err_style\">\n        <span *ngIf=\"form.hasError('required',[control])\" id=\"countryReq\">{{errorMsg}}</span>\n      </span>\n    </mat-error>\n  </mat-form-field>\n</span>",
                styles: ["::ng-deep .mat-select-arrow{border:0!important;-webkit-appearance:none;-moz-appearance:none}.mat-select-panel{margin-left:10px!important}.mat-select-panel:focus,.mat-select-trigger:focus{outline:0!important}::ng-deep mat-select:focus{outline:0!important}.arrow-icon{height:1rem!important;width:3rem;background-size:1.5rem 2rem!important}"]
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
    SukuDropdownComponent.prototype.select;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kcm9wZG93bi9zdWt1LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRM0MsTUFBTSxPQUFPLHFCQUFxQjs7O0lBa0JqQztRQWhCUyxZQUFPLEdBQUcscUJBQXFCLENBQUM7UUFDaEMsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FBRyxhQUFhLENBQUM7UUFDekIsZUFBVSxHQUFHLGFBQWEsQ0FBQztRQUMzQixnQkFBVyxHQUFHLGtDQUFrQyxDQUFDO1FBRWpELGFBQVEsR0FBRyx3QkFBd0IsQ0FBQztRQUNwQyxhQUFRLEdBQUcsaUJBQWlCLENBQUM7UUFDN0Isc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLFNBQUksR0FBRyw2Q0FBNkMsQ0FBQztRQUNsQyxvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUMvQixXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBSXRCLENBQUM7Ozs7SUFFakIsUUFBUSxLQUFLLENBQUM7Ozs7O0lBRWQsWUFBWSxDQUFDLEtBQWE7UUFDekIsT0FBTyxDQUNOLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzdELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUN6RCxDQUFDO0lBQ0gsQ0FBQzs7O1lBaENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsZUFBZTtnQkFDekIsdzFCQUE2Qzs7YUFFN0M7Ozs7O21CQUVDLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOytCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO2dDQUNMLEtBQUs7bUJBQ0wsS0FBSzs4QkFDTCxLQUFLLFNBQUMsbUJBQW1CO3FCQUN6QixLQUFLLFNBQUMsU0FBUztxQkFDZixNQUFNOzs7O0lBYlAscUNBQXlCOztJQUN6Qix3Q0FBeUM7O0lBQ3pDLHFDQUFtQjs7SUFDbkIseUNBQWtDOztJQUNsQywyQ0FBb0M7O0lBQ3BDLDRDQUEwRDs7SUFDMUQsaURBQTBCOztJQUMxQix5Q0FBNkM7O0lBQzdDLHlDQUFzQzs7SUFDdEMsa0RBQWdDOztJQUNoQyxxQ0FBOEQ7O0lBQzlELGdEQUFpRDs7SUFDakQsdUNBQW1DOztJQUNuQyx1Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBfa2V5VmFsdWVEaWZmZXJzRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL2FwcGxpY2F0aW9uX21vZHVsZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtZHJvcGRvd24nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3N1a3UtZHJvcGRvd24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1RHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG5cdEBJbnB1dCgpIGNvbnRyb2wgPSAncHJvZHVjdFRyYWNlYWJpbGl0eSc7XG5cdEBJbnB1dCgpIGRhdGEgPSBbXTtcblx0QElucHV0KCkga2V5VmFsdWUgPSAncHJvZHVjdE5hbWUnO1xuXHRASW5wdXQoKSBkaXNwbGF5S2V5ID0gJ3Byb2R1Y3ROYW1lJztcblx0QElucHV0KCkgcGxhY2Vob2xkZXIgPSAnc2VsZWN0IHByb2R1Y3QgZnJvbSB0aGlzIGxpc3RpbmcnO1xuXHRASW5wdXQoKSBmb3JtU3VtaXRBdHRlbXB0O1xuXHRASW5wdXQoKSBzZWxlY3RJZCA9ICdzdHRQcm9kdWN0VHJhY2VhYmlsaXR5Jztcblx0QElucHV0KCkgZXJyb3JNc2cgPSAnQ2Fubm90IGJlIGJsYW5rJztcblx0QElucHV0KCkgY3VzdG9tU2VsZWN0Q2xhc3MgPSAnJztcblx0QElucHV0KCkgaWNvbiA9ICcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fycm93LWljb24ucG5nJztcblx0QElucHV0KCdpY29uLWN1c3RvbS1jbGFzcycpIGljb25DdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2ljb24taWQnKSBpY29uSWQgPSAnYXJyb3cnO1xuXHRAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHQvLyBASW5wdXQoKSBpY29uID0gJ3N1a3UtYXJyb3ctaWNvbic7XG5cdC8vIEBJbnB1dCgnaWNvbi1jdXN0b20tY2xhc3MnKSBpY29uQ3VzdG9tQ2xhc3MgPSAnYXJyb3ctaWNvbic7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgfVxuXG5cdGlzRmllbGRWYWxpZChmaWVsZDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdCghdGhpcy5mb3JtLmdldChmaWVsZCkudmFsaWQgJiYgdGhpcy5mb3JtLmdldChmaWVsZCkudG91Y2hlZCkgfHxcblx0XHRcdCh0aGlzLmZvcm0uZ2V0KGZpZWxkKS51bnRvdWNoZWQgJiYgdGhpcy5mb3JtU3VtaXRBdHRlbXB0KVxuXHRcdCk7XG5cdH1cbn1cbiJdfQ==