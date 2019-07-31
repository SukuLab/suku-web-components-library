/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventEmitter } from 'events';
var SukuCheckboxComponent = /** @class */ (function () {
    function SukuCheckboxComponent() {
        this.checkboxId = 'suku-checkbox';
        this.customClass = '';
        this.color = 'primary';
        this.labelPosition = 'after';
        this.checkBoxControl = new FormControl();
        this.action = new EventEmitter();
    }
    Object.defineProperty(SukuCheckboxComponent.prototype, "checked", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                this.checkBoxControl.patchValue(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SukuCheckboxComponent.prototype, "disabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            console.log(value);
            if (value) {
                this.checkBoxControl.disable();
            }
            else {
                this.checkBoxControl.enable();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SukuCheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscription = this.checkBoxControl.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.action.emit(value);
            console.log('checkBoxControl', value);
        }));
    };
    /**
     * @return {?}
     */
    SukuCheckboxComponent.prototype.ngDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    SukuCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-checkbox',
                    template: "<mat-checkbox [color]=\"color\" [formControl]=\"checkBoxControl\" [(indeterminate)]=\"indeterminate\"\n  [labelPosition]=\"labelPosition\"><span class=\"suku-checkbox {{customClass}}\">\n    Suku checkbox</span></mat-checkbox>\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-checkbox{font-family:var(--suku-primary-font);font-weight:500;font-size:var(--suku-font-size-3);color:var(--suku-text-label-one);letter-spacing:0;word-break:break-word}"]
                }] }
    ];
    /** @nocollapse */
    SukuCheckboxComponent.ctorParameters = function () { return []; };
    SukuCheckboxComponent.propDecorators = {
        checkboxId: [{ type: Input, args: ['checkbox-id',] }],
        customClass: [{ type: Input, args: ['custom-class',] }],
        color: [{ type: Input }],
        control: [{ type: Input }],
        checked: [{ type: Input }],
        indeterminate: [{ type: Input }],
        labelPosition: [{ type: Input }],
        disabled: [{ type: Input }],
        action: [{ type: Output }]
    };
    return SukuCheckboxComponent;
}());
export { SukuCheckboxComponent };
if (false) {
    /** @type {?} */
    SukuCheckboxComponent.prototype._subscription;
    /** @type {?} */
    SukuCheckboxComponent.prototype.checkboxId;
    /** @type {?} */
    SukuCheckboxComponent.prototype.customClass;
    /** @type {?} */
    SukuCheckboxComponent.prototype.color;
    /** @type {?} */
    SukuCheckboxComponent.prototype.control;
    /** @type {?} */
    SukuCheckboxComponent.prototype.indeterminate;
    /** @type {?} */
    SukuCheckboxComponent.prototype.labelPosition;
    /** @type {?} */
    SukuCheckboxComponent.prototype.checkBoxControl;
    /** @type {?} */
    SukuCheckboxComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGVja2JveC9zdWt1LWNoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXRDO0lBOEJFO1FBdkJzQixlQUFVLEdBQUcsZUFBZSxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQy9CLFVBQUssR0FBRyxTQUFTLENBQUM7UUFTbEIsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFVakMsb0JBQWUsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzFCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFuQmpCLHNCQUNJLDBDQUFPOzs7OztRQURYLFVBQ1ksR0FBRztZQUNiLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3RDO1FBQ0gsQ0FBQzs7O09BQUE7SUFHRCxzQkFDSSwyQ0FBUTs7Ozs7UUFEWixVQUNhLEtBQUs7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2hDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDL0I7UUFDSCxDQUFDOzs7T0FBQTs7OztJQUtELHdDQUFROzs7SUFBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ3BFLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQseUNBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDOztnQkF6Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixnUEFBNkM7O2lCQUU5Qzs7Ozs7NkJBR0UsS0FBSyxTQUFDLGFBQWE7OEJBQ25CLEtBQUssU0FBQyxjQUFjO3dCQUNwQixLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSztnQ0FNTCxLQUFLO2dDQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFVTCxNQUFNOztJQWNULDRCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0F0Q1kscUJBQXFCOzs7SUFDaEMsOENBQWM7O0lBQ2QsMkNBQW1EOztJQUNuRCw0Q0FBd0M7O0lBQ3hDLHNDQUEyQjs7SUFDM0Isd0NBQWlCOztJQU9qQiw4Q0FBdUI7O0lBQ3ZCLDhDQUFpQzs7SUFVakMsZ0RBQW9DOztJQUNwQyx1Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWNoZWNrYm94LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUNoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgX3N1YnNjcmlwdGlvbjtcbiAgQElucHV0KCdjaGVja2JveC1pZCcpIGNoZWNrYm94SWQgPSAnc3VrdS1jaGVja2JveCc7XG4gIEBJbnB1dCgnY3VzdG9tLWNsYXNzJykgY3VzdG9tQ2xhc3MgPSAnJztcbiAgQElucHV0KCkgY29sb3IgPSAncHJpbWFyeSc7XG4gIEBJbnB1dCgpIGNvbnRyb2w7XG4gIEBJbnB1dCgpXG4gIHNldCBjaGVja2VkKHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuY2hlY2tCb3hDb250cm9sLnBhdGNoVmFsdWUodmFsKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgaW5kZXRlcm1pbmF0ZTtcbiAgQElucHV0KCkgbGFiZWxQb3NpdGlvbiA9ICdhZnRlcic7XG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuY2hlY2tCb3hDb250cm9sLmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGVja0JveENvbnRyb2wuZW5hYmxlKCk7XG4gICAgfVxuICB9XG4gIGNoZWNrQm94Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuY2hlY2tCb3hDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdGhpcy5hY3Rpb24uZW1pdCh2YWx1ZSk7XG4gICAgICBjb25zb2xlLmxvZygnY2hlY2tCb3hDb250cm9sJywgdmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdEZXN0cm95KCkge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbn1cbiJdfQ==