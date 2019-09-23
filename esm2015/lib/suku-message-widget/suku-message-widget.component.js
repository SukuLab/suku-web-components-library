/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
export class SukuMessageWidgetComponent {
    constructor() {
        this.textAreaControl = new FormControl();
        this.row = 15;
        this.col = 22;
        this.id = 'message';
        this.maxlength = 500;
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    submitData() {
        /** @type {?} */
        const value = this.textAreaControl.value;
        console.log('text', value);
        this.action.emit(value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    checkSpcialChar(event) {
        if (event.charCode == 36 ||
            event.charCode == 95 ||
            event.charCode == 42 ||
            event.charCode == 45 ||
            event.charCode == 43 ||
            event.charCode == 40 ||
            event.charCode == 41 ||
            event.charCode == 39 ||
            event.charCode == 33) {
            event.returnValue = true;
            return true;
        }
        if (!((event.charCode >= 65) && (event.charCode <= 90) ||
            (event.charCode >= 97) && (event.charCode <= 122) || (event.charCode >= 48) &&
            (event.charCode <= 57))) {
            event.returnValue = false;
            return false;
        }
        event.returnValue = true;
        return true;
    }
}
SukuMessageWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-message-widget',
                template: "<textarea class=\"form-control {{customClass}}\" [id]=\"id\" type=\"text\" (keyup)=\"submitData()\"\n  [formControl]=\"textAreaControl\" (keypress)=\"checkSpcialChar($event)\" rows=\"{{row}}\" cols=\"{{col}}\"\n  [maxlength]=\"maxlength\"></textarea>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.form-control:focus{border:1px solid #ced4da;border-color:#ced4da!important;box-shadow:none!important}textarea{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-3)}"]
            }] }
];
/** @nocollapse */
SukuMessageWidgetComponent.ctorParameters = () => [];
SukuMessageWidgetComponent.propDecorators = {
    row: [{ type: Input }],
    col: [{ type: Input }],
    id: [{ type: Input }],
    customClass: [{ type: Input }],
    maxlength: [{ type: Input }],
    action: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuMessageWidgetComponent.prototype.textAreaControl;
    /** @type {?} */
    SukuMessageWidgetComponent.prototype.row;
    /** @type {?} */
    SukuMessageWidgetComponent.prototype.col;
    /** @type {?} */
    SukuMessageWidgetComponent.prototype.id;
    /** @type {?} */
    SukuMessageWidgetComponent.prototype.customClass;
    /** @type {?} */
    SukuMessageWidgetComponent.prototype.maxlength;
    /** @type {?} */
    SukuMessageWidgetComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tZXNzYWdlLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1tZXNzYWdlLXdpZGdldC9zdWt1LW1lc3NhZ2Utd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPN0MsTUFBTSxPQUFPLDBCQUEwQjtJQVFyQztRQVBBLG9CQUFlLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUMzQixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULE9BQUUsR0FBRyxTQUFTLENBQUM7UUFFZixjQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2YsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELFVBQVU7O2NBQ0YsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxLQUFLO1FBQ25CLElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQ3RCLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRTtZQUNwQixLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUU7WUFDcEIsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQ3BCLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRTtZQUNwQixLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUU7WUFDcEIsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQ3BCLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRTtZQUNwQixLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFDcEI7WUFDQSxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7WUFDcEQsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1lBQzNFLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ3pCLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN6QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0Isc1FBQW1EOzthQUVwRDs7Ozs7a0JBR0UsS0FBSztrQkFDTCxLQUFLO2lCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3FCQUNMLE1BQU07Ozs7SUFOUCxxREFBb0M7O0lBQ3BDLHlDQUFrQjs7SUFDbEIseUNBQWtCOztJQUNsQix3Q0FBd0I7O0lBQ3hCLGlEQUFxQjs7SUFDckIsK0NBQXlCOztJQUN6Qiw0Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1tZXNzYWdlLXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LW1lc3NhZ2Utd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1tZXNzYWdlLXdpZGdldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VNZXNzYWdlV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGV4dEFyZWFDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIEBJbnB1dCgpIHJvdyA9IDE1O1xuICBASW5wdXQoKSBjb2wgPSAyMjtcbiAgQElucHV0KCkgaWQgPSAnbWVzc2FnZSc7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzO1xuICBASW5wdXQoKSBtYXhsZW5ndGggPSA1MDA7XG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBzdWJtaXREYXRhKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy50ZXh0QXJlYUNvbnRyb2wudmFsdWU7XG4gICAgY29uc29sZS5sb2coJ3RleHQnLCB2YWx1ZSk7XG4gICAgdGhpcy5hY3Rpb24uZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBjaGVja1NwY2lhbENoYXIoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY2hhckNvZGUgPT0gMzYgfHxcbiAgICAgIGV2ZW50LmNoYXJDb2RlID09IDk1IHx8XG4gICAgICBldmVudC5jaGFyQ29kZSA9PSA0MiB8fFxuICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDUgfHxcbiAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQzIHx8XG4gICAgICBldmVudC5jaGFyQ29kZSA9PSA0MCB8fFxuICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDEgfHxcbiAgICAgIGV2ZW50LmNoYXJDb2RlID09IDM5IHx8XG4gICAgICBldmVudC5jaGFyQ29kZSA9PSAzM1xuICAgICkge1xuICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCEoKGV2ZW50LmNoYXJDb2RlID49IDY1KSAmJiAoZXZlbnQuY2hhckNvZGUgPD0gOTApIHx8XG4gICAgICAoZXZlbnQuY2hhckNvZGUgPj0gOTcpICYmIChldmVudC5jaGFyQ29kZSA8PSAxMjIpIHx8IChldmVudC5jaGFyQ29kZSA+PSA0OCkgJiZcbiAgICAgIChldmVudC5jaGFyQ29kZSA8PSA1NykpKSB7XG4gICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBldmVudC5yZXR1cm5WYWx1ZSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxufVxuIl19