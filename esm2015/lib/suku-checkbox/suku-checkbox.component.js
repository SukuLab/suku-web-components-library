/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-checkbox/suku-checkbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
export class SukuCheckboxComponent {
    constructor() {
        this.checkboxId = 'suku-checkbox';
        this.customClass = '';
        this.color = 'primary';
        this.labelPosition = 'after';
        this.checkBoxControl = new FormControl();
        this.action = new EventEmitter();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set checked(val) {
        if (val) {
            this.checkBoxControl.patchValue(val);
        }
        else {
            this.checkBoxControl.patchValue(val);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        console.log(value);
        if (value) {
            this.checkBoxControl.disable();
        }
        else {
            this.checkBoxControl.enable();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._subscription = this.checkBoxControl.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.action.emit(value);
            console.log('checkBoxControl', value);
        }));
    }
    /**
     * @return {?}
     */
    ngDestroy() {
        this._subscription.unsubscribe();
    }
}
SukuCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-checkbox',
                template: "<mat-checkbox [color]=\"color\" [id]=\"checkboxId\" [formControl]=\"checkBoxControl\" [(indeterminate)]=\"indeterminate\"\n  [labelPosition]=\"labelPosition\"><span class=\"suku-checkbox {{customClass}}\">\n    <ng-content></ng-content>\n  </span>\n</mat-checkbox>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-checkbox{font-family:var(--suku-primary-font);font-weight:500;font-size:var(--suku-font-size-3);color:var(--suku-text-label-one);letter-spacing:0;word-break:break-word}"]
            }] }
];
/** @nocollapse */
SukuCheckboxComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGVja2JveC9zdWt1LWNoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzdDLE1BQU0sT0FBTyxxQkFBcUI7SUEyQmhDO1FBekJzQixlQUFVLEdBQUcsZUFBZSxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQy9CLFVBQUssR0FBRyxTQUFTLENBQUM7UUFXbEIsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFVakMsb0JBQWUsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzFCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBckJqQixJQUNJLE9BQU8sQ0FBQyxHQUFHO1FBQ2IsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDOzs7OztJQUdELElBQ0ksUUFBUSxDQUFDLEtBQUs7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEM7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDOzs7O0lBS0QsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7O1lBM0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsb1JBQTZDOzthQUU5Qzs7Ozs7eUJBR0UsS0FBSyxTQUFDLGFBQWE7MEJBQ25CLEtBQUssU0FBQyxjQUFjO29CQUNwQixLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzs0QkFRTCxLQUFLOzRCQUNMLEtBQUs7dUJBQ0wsS0FBSztxQkFVTCxNQUFNOzs7O0lBekJQLDhDQUFjOztJQUNkLDJDQUFtRDs7SUFDbkQsNENBQXdDOztJQUN4QyxzQ0FBMkI7O0lBQzNCLHdDQUFpQjs7SUFTakIsOENBQXVCOztJQUN2Qiw4Q0FBaUM7O0lBVWpDLGdEQUFvQzs7SUFDcEMsdUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtY2hlY2tib3guY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Q2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBfc3Vic2NyaXB0aW9uO1xuICBASW5wdXQoJ2NoZWNrYm94LWlkJykgY2hlY2tib3hJZCA9ICdzdWt1LWNoZWNrYm94JztcbiAgQElucHV0KCdjdXN0b20tY2xhc3MnKSBjdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoKSBjb2xvciA9ICdwcmltYXJ5JztcbiAgQElucHV0KCkgY29udHJvbDtcbiAgQElucHV0KClcbiAgc2V0IGNoZWNrZWQodmFsKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5jaGVja0JveENvbnRyb2wucGF0Y2hWYWx1ZSh2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoZWNrQm94Q29udHJvbC5wYXRjaFZhbHVlKHZhbCk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpIGluZGV0ZXJtaW5hdGU7XG4gIEBJbnB1dCgpIGxhYmVsUG9zaXRpb24gPSAnYWZ0ZXInO1xuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQodmFsdWUpIHtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmNoZWNrQm94Q29udHJvbC5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tCb3hDb250cm9sLmVuYWJsZSgpO1xuICAgIH1cbiAgfVxuICBjaGVja0JveENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLmNoZWNrQm94Q29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuYWN0aW9uLmVtaXQodmFsdWUpO1xuICAgICAgY29uc29sZS5sb2coJ2NoZWNrQm94Q29udHJvbCcsIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nRGVzdHJveSgpIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG59XG4iXX0=