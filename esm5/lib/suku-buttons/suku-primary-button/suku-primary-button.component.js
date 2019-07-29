/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuPrimaryButtonComponent = /** @class */ (function () {
    function SukuPrimaryButtonComponent() {
        this.id = 'primary';
        this.size = '1';
        this.color = '';
        this.weight = '600';
        this.customClass = '';
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuPrimaryButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SukuPrimaryButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-primary-button',
                    template: "<button class=\"suku-p suku-primary c-pointer {{customClass}}\" [ngClass]=\"{'disabled' : disableValue}\"\n  [style.font-size.rem]=\"size\" [style.color]=\"color\" [style.font-weight]=\"weight\" [disabled]=\"disableValue\" [id]=\"id\"\n  (click)=\"action.emit()\">\n  <ng-content></ng-content>\n</button>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-p{border:2px solid var(--suku-primary-color);background-color:var(--suku-bg-secondary);color:var(--suku-text-label-two);font-family:var(--suku-secondary-font)!important;font-weight:600;font-size:14px;padding:1rem 2rem;border-radius:12px 28px 23px 30px;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.25px;text-align:center}.suku-p:hover{cursor:pointer;background-color:var(--suku-primary-color)!important;color:var(--suku-text-label-two)}.suku-p:focus{color:var(--suku-text-label-two);background-color:var(--suku-primary-color)!important;outline:0!important;box-shadow:none!important}.suku-p.disabled:hover{border:2px solid!important;background-color:var(--suku-bg-ternary);color:#1d1d1d;cursor:not-allowed}.suku-primary.disabled{background-color:var(--suku-bg-ternary);color:grey;opacity:.65}.suku-primary.disabled.focus,.suku-primary.disabled:focus,.suku-primary.disabled:hover,.suku-primary[disabled].focus,.suku-primary[disabled]:focus,.suku-primary[disabled]:hover,fieldset[disabled] .suku-primary.focus,fieldset[disabled] .suku-primary:focus,fieldset[disabled] .suku-primary:hover{background-color:var(--suku-bg-ternary)!important;color:grey}.suku-primary.focus,.suku-primary:focus{background-color:var(--suku-primary-color);color:var(--suku-text-label-two)}.open>.dropdown-toggle .suku-primary.focus,.open>.dropdown-toggle .suku-primary:focus,.open>.dropdown-toggle.suku-primary:hover,.suku-primary.active.focus,.suku-primary.active:focus,.suku-primary.active:hover,.suku-primary:active.focus,.suku-primary:active:focus,.suku-primary:active:hover{background-color:var(--suku-primary-color);color:var(--suku-text-label-two)}.show>.suku-primary.dropdown-toggle,.suku-primary:not(:disabled):not(.disabled).active,.suku-primary:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}"]
                }] }
    ];
    /** @nocollapse */
    SukuPrimaryButtonComponent.ctorParameters = function () { return []; };
    SukuPrimaryButtonComponent.propDecorators = {
        id: [{ type: Input }],
        size: [{ type: Input }],
        color: [{ type: Input }],
        weight: [{ type: Input }],
        disableValue: [{ type: Input, args: ['disable-value',] }],
        customClass: [{ type: Input, args: ['custom-class',] }],
        action: [{ type: Output }]
    };
    return SukuPrimaryButtonComponent;
}());
export { SukuPrimaryButtonComponent };
if (false) {
    /** @type {?} */
    SukuPrimaryButtonComponent.prototype.id;
    /** @type {?} */
    SukuPrimaryButtonComponent.prototype.size;
    /** @type {?} */
    SukuPrimaryButtonComponent.prototype.color;
    /** @type {?} */
    SukuPrimaryButtonComponent.prototype.weight;
    /** @type {?} */
    SukuPrimaryButtonComponent.prototype.disableValue;
    /** @type {?} */
    SukuPrimaryButtonComponent.prototype.customClass;
    /** @type {?} */
    SukuPrimaryButtonComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcmltYXJ5LWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1idXR0b25zL3N1a3UtcHJpbWFyeS1idXR0b24vc3VrdS1wcmltYXJ5LWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0U7SUFjQztRQVJTLE9BQUUsR0FBRyxTQUFTLENBQUM7UUFDZixTQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ1gsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFRCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUM5QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV0QixDQUFDOzs7O0lBRWpCLDZDQUFROzs7SUFBUixjQUFhLENBQUM7O2dCQWhCZCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsNFRBQW1EOztpQkFFbkQ7Ozs7O3FCQUVDLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7K0JBQ0wsS0FBSyxTQUFDLGVBQWU7OEJBQ3JCLEtBQUssU0FBQyxjQUFjO3lCQUNwQixNQUFNOztJQUtSLGlDQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FaWSwwQkFBMEI7OztJQUN0Qyx3Q0FBd0I7O0lBQ3hCLDBDQUFvQjs7SUFDcEIsMkNBQW9COztJQUNwQiw0Q0FBd0I7O0lBQ3hCLGtEQUE4Qzs7SUFDOUMsaURBQXdDOztJQUN4Qyw0Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtcHJpbWFyeS1idXR0b24nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1wcmltYXJ5LWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3N1a3UtcHJpbWFyeS1idXR0b24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1UHJpbWFyeUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIGlkID0gJ3ByaW1hcnknO1xuXHRASW5wdXQoKSBzaXplID0gJzEnO1xuXHRASW5wdXQoKSBjb2xvciA9ICcnO1xuXHRASW5wdXQoKSB3ZWlnaHQgPSAnNjAwJztcblx0QElucHV0KCdkaXNhYmxlLXZhbHVlJykgZGlzYWJsZVZhbHVlOiBCb29sZWFuO1xuXHRASW5wdXQoJ2N1c3RvbS1jbGFzcycpIGN1c3RvbUNsYXNzID0gJyc7XG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgfVxufVxuIl19