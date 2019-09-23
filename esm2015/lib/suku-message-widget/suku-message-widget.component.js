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
        this.value = '';
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
                template: "<textarea class=\"form-control {{customClass}}\" [id]=\"id\" type=\"text\" (keyup)=\"submitData()\"\n  [formControl]=\"textAreaControl\" (keypress)=\"checkSpcialChar($event)\" rows=\"{{row}}\" cols=\"{{col}}\"\n  [maxlength]=\"maxlength\" [value]=\"value\" [readOnly]=\"readOnly\"></textarea>",
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
    readOnly: [{ type: Input }],
    value: [{ type: Input }],
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
    SukuMessageWidgetComponent.prototype.readOnly;
    /** @type {?} */
    SukuMessageWidgetComponent.prototype.value;
    /** @type {?} */
    SukuMessageWidgetComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tZXNzYWdlLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1tZXNzYWdlLXdpZGdldC9zdWt1LW1lc3NhZ2Utd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPN0MsTUFBTSxPQUFPLDBCQUEwQjtJQVVyQztRQVRBLG9CQUFlLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUMzQixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULE9BQUUsR0FBRyxTQUFTLENBQUM7UUFFZixjQUFTLEdBQUcsR0FBRyxDQUFDO1FBRWhCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDVixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsVUFBVTs7Y0FDRixLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUU7WUFDdEIsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQ3BCLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRTtZQUNwQixLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUU7WUFDcEIsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQ3BCLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRTtZQUNwQixLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUU7WUFDcEIsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQ3BCLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRSxFQUNwQjtZQUNBLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztZQUNwRCxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7WUFDM0UsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDekIsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDMUIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7O1lBakRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixnVEFBbUQ7O2FBRXBEOzs7OztrQkFHRSxLQUFLO2tCQUNMLEtBQUs7aUJBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLE1BQU07Ozs7SUFSUCxxREFBb0M7O0lBQ3BDLHlDQUFrQjs7SUFDbEIseUNBQWtCOztJQUNsQix3Q0FBd0I7O0lBQ3hCLGlEQUFxQjs7SUFDckIsK0NBQXlCOztJQUN6Qiw4Q0FBa0I7O0lBQ2xCLDJDQUFvQjs7SUFDcEIsNENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtbWVzc2FnZS13aWRnZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1tZXNzYWdlLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtbWVzc2FnZS13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1TWVzc2FnZVdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRleHRBcmVhQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBASW5wdXQoKSByb3cgPSAxNTtcbiAgQElucHV0KCkgY29sID0gMjI7XG4gIEBJbnB1dCgpIGlkID0gJ21lc3NhZ2UnO1xuICBASW5wdXQoKSBjdXN0b21DbGFzcztcbiAgQElucHV0KCkgbWF4bGVuZ3RoID0gNTAwO1xuICBASW5wdXQoKSByZWFkT25seTtcbiAgQElucHV0KCkgdmFsdWUgPSAnJztcbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHN1Ym1pdERhdGEoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnRleHRBcmVhQ29udHJvbC52YWx1ZTtcbiAgICBjb25zb2xlLmxvZygndGV4dCcsIHZhbHVlKTtcbiAgICB0aGlzLmFjdGlvbi5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGNoZWNrU3BjaWFsQ2hhcihldmVudCkge1xuICAgIGlmIChldmVudC5jaGFyQ29kZSA9PSAzNiB8fFxuICAgICAgZXZlbnQuY2hhckNvZGUgPT0gOTUgfHxcbiAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQyIHx8XG4gICAgICBldmVudC5jaGFyQ29kZSA9PSA0NSB8fFxuICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDMgfHxcbiAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQwIHx8XG4gICAgICBldmVudC5jaGFyQ29kZSA9PSA0MSB8fFxuICAgICAgZXZlbnQuY2hhckNvZGUgPT0gMzkgfHxcbiAgICAgIGV2ZW50LmNoYXJDb2RlID09IDMzXG4gICAgKSB7XG4gICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoISgoZXZlbnQuY2hhckNvZGUgPj0gNjUpICYmIChldmVudC5jaGFyQ29kZSA8PSA5MCkgfHxcbiAgICAgIChldmVudC5jaGFyQ29kZSA+PSA5NykgJiYgKGV2ZW50LmNoYXJDb2RlIDw9IDEyMikgfHwgKGV2ZW50LmNoYXJDb2RlID49IDQ4KSAmJlxuICAgICAgKGV2ZW50LmNoYXJDb2RlIDw9IDU3KSkpIHtcbiAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGV2ZW50LnJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG59XG4iXX0=