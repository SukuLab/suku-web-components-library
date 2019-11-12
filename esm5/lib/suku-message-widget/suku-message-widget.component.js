/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
var SukuMessageWidgetComponent = /** @class */ (function () {
    function SukuMessageWidgetComponent() {
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
    SukuMessageWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SukuMessageWidgetComponent.prototype.submitData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.textAreaControl.value;
        console.log('text', value);
        this.action.emit(value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SukuMessageWidgetComponent.prototype.checkSpcialChar = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log(event);
        if (event.charCode == 36 ||
            event.charCode == 95 ||
            event.charCode == 42 ||
            event.charCode == 45 ||
            event.charCode == 43 ||
            event.charCode == 40 ||
            event.charCode == 46 ||
            event.charCode == 41 ||
            event.charCode == 39 ||
            event.charCode == 32 ||
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
    };
    SukuMessageWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-message-widget',
                    template: "<textarea class=\"form-control {{customClass}}\" [id]=\"id\" type=\"text\" (keyup)=\"submitData()\"\n  [formControl]=\"textAreaControl\" (keypress)=\"checkSpcialChar($event)\" rows=\"{{row}}\" cols=\"{{col}}\"\n  [maxlength]=\"maxlength\" [value]=\"value\" [readOnly]=\"readOnly\"></textarea>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.form-control:focus{border:1px solid #ced4da;border-color:#ced4da!important;box-shadow:none!important}textarea{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-3)}"]
                }] }
    ];
    /** @nocollapse */
    SukuMessageWidgetComponent.ctorParameters = function () { return []; };
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
    return SukuMessageWidgetComponent;
}());
export { SukuMessageWidgetComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tZXNzYWdlLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1tZXNzYWdlLXdpZGdldC9zdWt1LW1lc3NhZ2Utd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0M7SUFlRTtRQVRBLG9CQUFlLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUMzQixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULE9BQUUsR0FBRyxTQUFTLENBQUM7UUFFZixjQUFTLEdBQUcsR0FBRyxDQUFDO1FBRWhCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDVixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRWpCLDZDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCwrQ0FBVTs7O0lBQVY7O1lBQ1EsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELG9EQUFlOzs7O0lBQWYsVUFBZ0IsS0FBSztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xCLElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQ3RCLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRTtZQUNwQixLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUU7WUFDcEIsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQ3BCLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRTtZQUNwQixLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUU7WUFDcEIsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQ3BCLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRTtZQUNwQixLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUU7WUFDcEIsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQ3BCLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRSxFQUNwQjtZQUNBLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztZQUNwRCxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7WUFDM0UsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDekIsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDMUIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBcERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixnVEFBbUQ7O2lCQUVwRDs7Ozs7c0JBR0UsS0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxNQUFNOztJQXdDVCxpQ0FBQztDQUFBLEFBdERELElBc0RDO1NBakRZLDBCQUEwQjs7O0lBQ3JDLHFEQUFvQzs7SUFDcEMseUNBQWtCOztJQUNsQix5Q0FBa0I7O0lBQ2xCLHdDQUF3Qjs7SUFDeEIsaURBQXFCOztJQUNyQiwrQ0FBeUI7O0lBQ3pCLDhDQUFrQjs7SUFDbEIsMkNBQW9COztJQUNwQiw0Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LW1lc3NhZ2Utd2lkZ2V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1tZXNzYWdlLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1tZXNzYWdlLXdpZGdldC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1TWVzc2FnZVdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdGV4dEFyZWFDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XHJcbiAgQElucHV0KCkgcm93ID0gMTU7XHJcbiAgQElucHV0KCkgY29sID0gMjI7XHJcbiAgQElucHV0KCkgaWQgPSAnbWVzc2FnZSc7XHJcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M7XHJcbiAgQElucHV0KCkgbWF4bGVuZ3RoID0gNTAwO1xyXG4gIEBJbnB1dCgpIHJlYWRPbmx5O1xyXG4gIEBJbnB1dCgpIHZhbHVlID0gJyc7XHJcbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIHN1Ym1pdERhdGEoKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudGV4dEFyZWFDb250cm9sLnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coJ3RleHQnLCB2YWx1ZSk7XHJcbiAgICB0aGlzLmFjdGlvbi5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNoZWNrU3BjaWFsQ2hhcihldmVudCkge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQpXHJcbiAgICBpZiAoZXZlbnQuY2hhckNvZGUgPT0gMzYgfHxcclxuICAgICAgZXZlbnQuY2hhckNvZGUgPT0gOTUgfHxcclxuICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDIgfHxcclxuICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDUgfHxcclxuICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDMgfHxcclxuICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDAgfHxcclxuICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDYgfHxcclxuICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDEgfHxcclxuICAgICAgZXZlbnQuY2hhckNvZGUgPT0gMzkgfHxcclxuICAgICAgZXZlbnQuY2hhckNvZGUgPT0gMzIgfHxcclxuICAgICAgZXZlbnQuY2hhckNvZGUgPT0gMzNcclxuICAgICkge1xyXG4gICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghKChldmVudC5jaGFyQ29kZSA+PSA2NSkgJiYgKGV2ZW50LmNoYXJDb2RlIDw9IDkwKSB8fFxyXG4gICAgICAoZXZlbnQuY2hhckNvZGUgPj0gOTcpICYmIChldmVudC5jaGFyQ29kZSA8PSAxMjIpIHx8IChldmVudC5jaGFyQ29kZSA+PSA0OCkgJiZcclxuICAgICAgKGV2ZW50LmNoYXJDb2RlIDw9IDU3KSkpIHtcclxuICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZXZlbnQucmV0dXJuVmFsdWUgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=