/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<div [formGroup]=\"form\">\r\n  <div id=\"search_container\" class=\"col p-0 d-flex mt-1 {{customClass}}\">\r\n    <input type=\"text\" autocomplete=\"off\" id=\"search\" class=\"stretch\" formControlName=\"{{control}}\" name=\"{{control}}\"\r\n      (keyup)=\"searchOnType.emit()\" (keyup.enter)=\"searchOnEnter.emit()\" placeholder=\"{{placeholder}}\">\r\n    <img src=\"{{icon}}\" [class]=\"iconCustomClass\" [id]=\"iconId\" (click)=\"searchOnEnter.emit();searchOnType.emit()\">\r\n  </div>\r\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}#search_container{border-radius:var(--suku-search-border-radius)}.stretch{flex-grow:1;border:2px solid var(--suku-text-label-three);border-radius:var(--suku-search-border-radius)}.default{width:245px}.c-pointer{cursor:pointer!important}input#search{height:40px;font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:500;font-style:normal;font-stretch:normal;line-height:1;letter-spacing:-.4px;padding-right:33px;padding-left:15px;position:relative;width:80%}input:focus{outline:0!important}::-webkit-input-placeholder{color:#3e3e3e;font-size:var(--suku-font-size-3)}::-moz-placeholder{color:#3e3e3e;font-size:var(--suku-font-size-3)}:-ms-input-placeholder{color:#3e3e3e;font-size:var(--suku-font-size-3)}::-ms-input-placeholder{color:#3e3e3e;font-size:var(--suku-font-size-3)}::placeholder{color:#3e3e3e;font-size:var(--suku-font-size-3)}.searchIcon{position:absolute;width:17px;top:10px;right:10px;margin:1px;background:var(--suku-homepage-bg)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zZWFyY2gtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc2VhcmNoLWlucHV0L3N1a3Utc2VhcmNoLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFlRTtRQVBTLFNBQUksR0FBRyxxQ0FBcUMsQ0FBQztRQUMvQixnQkFBVyxHQUFHLG1CQUFtQixDQUFDO1FBQzdCLG9CQUFlLEdBQUcsa0NBQWtDLENBQUM7UUFDL0QsV0FBTSxHQUFHLFlBQVksQ0FBQztRQUNsQixnQkFBVyxHQUFHLGlCQUFpQixDQUFDO1FBQzVDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVqQiwyQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLG1nQkFBaUQ7O2lCQUVsRDs7Ozs7dUJBRUUsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7OEJBQ0wsS0FBSyxTQUFDLGNBQWM7a0NBQ3BCLEtBQUssU0FBQyxtQkFBbUI7eUJBQ3pCLEtBQUssU0FBQyxTQUFTOzhCQUNmLEtBQUssU0FBQyxhQUFhOytCQUNuQixNQUFNO2dDQUNOLE1BQU07O0lBTVQsK0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWZZLHdCQUF3Qjs7O0lBQ25DLHdDQUF5Qjs7SUFDekIsMkNBQWlCOztJQUNqQix3Q0FBc0Q7O0lBQ3RELCtDQUF5RDs7SUFDekQsbURBQWlGOztJQUNqRiwwQ0FBd0M7O0lBQ3hDLCtDQUFzRDs7SUFDdEQsZ0RBQTRDOztJQUM1QyxpREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1zZWFyY2gtaW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXNlYXJjaC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1zZWFyY2gtaW5wdXQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdVNlYXJjaElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgQElucHV0KCkgY29udHJvbDtcclxuICBASW5wdXQoKSBpY29uID0gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2VhcmNoLWljb24uc3ZnJztcclxuICBASW5wdXQoJ2N1c3RvbS1jbGFzcycpIGN1c3RvbUNsYXNzID0gJ2MtcG9pbnRlciBkZWZhdWx0JztcclxuICBASW5wdXQoJ2ljb24tY3VzdG9tLWNsYXNzJykgaWNvbkN1c3RvbUNsYXNzID0gJ2Zsb2F0LXJpZ2h0IGMtcG9pbnRlciBzZWFyY2hJY29uJztcclxuICBASW5wdXQoJ2ljb24taWQnKSBpY29uSWQgPSAnc2VhcmNoSWNvbic7XHJcbiAgQElucHV0KCdwbGFjZWhvbGRlcicpIHBsYWNlaG9sZGVyID0gJ3NlYXJjaCBwYXJ0bmVycyc7XHJcbiAgQE91dHB1dCgpIHNlYXJjaE9uVHlwZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgc2VhcmNoT25FbnRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==