/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
var SukuSearchInputComponent = /** @class */ (function () {
    function SukuSearchInputComponent() {
        this.icon = '../../assets/images/search-icon.svg';
        this.customClass = 'c-pointer default';
        this.iconCustomClass = 'float-right c-pointer searchIcon';
        this.iconId = 'searchIcon';
        this.placeholder = 'search partners';
        this.searchOnType = new EventEmitter();
        this.searchOnEnter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuSearchInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuSearchInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-search-input',
                    template: "<div [formGroup]=\"form\">\n  <div id=\"search_container\" class=\"col p-0 d-flex mt-1 {{customClass}}\">\n    <input type=\"text\" autocomplete=\"off\" id=\"search\" class=\"stretch\" formControlName=\"{{control}}\" name=\"{{control}}\"\n      (keyup)=\"searchOnType.emit()\" (keyup.enter)=\"searchOnEnter.emit()\" placeholder=\"{{placeholder}}\">\n    <img src=\"{{icon}}\" [class]=\"iconCustomClass\" [id]=\"iconId\" (click)=\"searchOnEnter.emit();searchOnType.emit()\">\n  </div>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}#search_container{border-radius:var(--suku-search-border-radius)}.stretch{flex-grow:1;border:2px solid var(--suku-text-label-three);border-radius:var(--suku-search-border-radius)}.default{width:245px}.c-pointer{cursor:pointer!important}input#search{height:40px;font-family:var(--suku-secondary-font)!important;font-size:var(--suku-font-size-3);font-weight:500;font-style:normal;font-stretch:normal;line-height:1;letter-spacing:-.4px;padding-right:33px;padding-left:15px;position:relative;width:80%}input:focus{outline:0!important}::-webkit-input-placeholder{color:#3e3e3e;font-size:var(--suku-font-size-3)}::-moz-placeholder{color:#3e3e3e;font-size:var(--suku-font-size-3)}:-ms-input-placeholder{color:#3e3e3e;font-size:var(--suku-font-size-3)}::-ms-input-placeholder{color:#3e3e3e;font-size:var(--suku-font-size-3)}::placeholder{color:#3e3e3e;font-size:var(--suku-font-size-3)}.searchIcon{position:absolute;width:17px;top:10px;right:10px;margin:1px;background:var(--suku-homepage-bg)}"]
                }] }
    ];
    /** @nocollapse */
    SukuSearchInputComponent.ctorParameters = function () { return []; };
    SukuSearchInputComponent.propDecorators = {
        form: [{ type: Input }],
        control: [{ type: Input }],
        icon: [{ type: Input }],
        customClass: [{ type: Input, args: ['custom-class',] }],
        iconCustomClass: [{ type: Input, args: ['icon-custom-class',] }],
        iconId: [{ type: Input, args: ['icon-id',] }],
        placeholder: [{ type: Input, args: ['placeholder',] }],
        searchOnType: [{ type: Output }],
        searchOnEnter: [{ type: Output }]
    };
    return SukuSearchInputComponent;
}());
export { SukuSearchInputComponent };
if (false) {
    /** @type {?} */
    SukuSearchInputComponent.prototype.form;
    /** @type {?} */
    SukuSearchInputComponent.prototype.control;
    /** @type {?} */
    SukuSearchInputComponent.prototype.icon;
    /** @type {?} */
    SukuSearchInputComponent.prototype.customClass;
    /** @type {?} */
    SukuSearchInputComponent.prototype.iconCustomClass;
    /** @type {?} */
    SukuSearchInputComponent.prototype.iconId;
    /** @type {?} */
    SukuSearchInputComponent.prototype.placeholder;
    /** @type {?} */
    SukuSearchInputComponent.prototype.searchOnType;
    /** @type {?} */
    SukuSearchInputComponent.prototype.searchOnEnter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zZWFyY2gtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc2VhcmNoLWlucHV0L3N1a3Utc2VhcmNoLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFlRTtRQVBTLFNBQUksR0FBRyxxQ0FBcUMsQ0FBQztRQUMvQixnQkFBVyxHQUFHLG1CQUFtQixDQUFDO1FBQzdCLG9CQUFlLEdBQUcsa0NBQWtDLENBQUM7UUFDL0QsV0FBTSxHQUFHLFlBQVksQ0FBQztRQUNsQixnQkFBVyxHQUFHLGlCQUFpQixDQUFDO1FBQzVDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVqQiwyQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHVmQUFpRDs7aUJBRWxEOzs7Ozt1QkFFRSxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzs4QkFDTCxLQUFLLFNBQUMsY0FBYztrQ0FDcEIsS0FBSyxTQUFDLG1CQUFtQjt5QkFDekIsS0FBSyxTQUFDLFNBQVM7OEJBQ2YsS0FBSyxTQUFDLGFBQWE7K0JBQ25CLE1BQU07Z0NBQ04sTUFBTTs7SUFNVCwrQkFBQztDQUFBLEFBcEJELElBb0JDO1NBZlksd0JBQXdCOzs7SUFDbkMsd0NBQXlCOztJQUN6QiwyQ0FBaUI7O0lBQ2pCLHdDQUFzRDs7SUFDdEQsK0NBQXlEOztJQUN6RCxtREFBaUY7O0lBQ2pGLDBDQUF3Qzs7SUFDeEMsK0NBQXNEOztJQUN0RCxnREFBNEM7O0lBQzVDLGlEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1zZWFyY2gtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1zZWFyY2gtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXNlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VTZWFyY2hJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgY29udHJvbDtcbiAgQElucHV0KCkgaWNvbiA9ICcuLi8uLi9hc3NldHMvaW1hZ2VzL3NlYXJjaC1pY29uLnN2Zyc7XG4gIEBJbnB1dCgnY3VzdG9tLWNsYXNzJykgY3VzdG9tQ2xhc3MgPSAnYy1wb2ludGVyIGRlZmF1bHQnO1xuICBASW5wdXQoJ2ljb24tY3VzdG9tLWNsYXNzJykgaWNvbkN1c3RvbUNsYXNzID0gJ2Zsb2F0LXJpZ2h0IGMtcG9pbnRlciBzZWFyY2hJY29uJztcbiAgQElucHV0KCdpY29uLWlkJykgaWNvbklkID0gJ3NlYXJjaEljb24nO1xuICBASW5wdXQoJ3BsYWNlaG9sZGVyJykgcGxhY2Vob2xkZXIgPSAnc2VhcmNoIHBhcnRuZXJzJztcbiAgQE91dHB1dCgpIHNlYXJjaE9uVHlwZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlYXJjaE9uRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19