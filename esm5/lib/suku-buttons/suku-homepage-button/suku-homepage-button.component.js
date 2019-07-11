/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SukuHomepageButton } from './suku-homepage-button';
var SukuHomepageButtonComponent = /** @class */ (function () {
    function SukuHomepageButtonComponent() {
        this.sendRoutePath = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuHomepageButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    SukuHomepageButtonComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (!this.buttonData.disabled) {
            this.sendRoutePath.emit(this.buttonData.path);
        }
    };
    SukuHomepageButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-homepage-button',
                    template: "<div class=\"button-container d-flex flex-column align-items-center \">\n  <div class=\"suku-button d-flex justify-content-center align-items-center {{sukuButtonCustomClass}}\"\n    *ngIf=\"!(buttonData.disabled == null)\" [ngClass]=\"{\n      'disabled': buttonData.disabled\n    }\" (click)=\"onClick()\" id=\"{{buttonData?.id}}\">\n    <i class=\"{{iconCustomClass}}\" [ngClass]=\"[buttonData.icon, 'icon']\"></i>\n  </div>\n  <div class=\"suku-button-text text-center mt-3\" *ngIf=\"!(buttonData.disabled == null)\">\n    <h3 class=\"button-title {{titleCustomClass}}\">{{buttonData.title}}</h3>\n  </div>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.button-container{width:106.4px;font-family:var(--suku-primary-font)!important;font-weight:700}.suku-button{height:80px;width:80px;background:var(--suku-button-default-bg);color:var(--suku-secondary-color);cursor:pointer!important;box-shadow:0 3px 3px 0 rgba(0,0,0,.5);transition:.1s ease-in-out;border-radius:12px 28px}.suku-button:hover{box-shadow:0 4px 3px 0 rgba(0,0,0,.5);-webkit-transform:translateY(-3px);transform:translateY(-3px)}.suku-button:active{box-shadow:0 4px 3px 0 rgba(0,0,0,.5);-webkit-transform:translateY(-1px);transform:translateY(-1px);transition:none}.disabled{background:var(--suku-button-disabled-bg);color:var(--suku-icon-disabled-bg);cursor:default}.disabled:active,.disabled:hover{box-shadow:0 3px 3px 0 rgba(0,0,0,.5);-webkit-transform:translateY(0);transform:translateY(0)}.icon{font-size:40px}.button-title{font-size:14px;font-weight:700}"]
                }] }
    ];
    /** @nocollapse */
    SukuHomepageButtonComponent.ctorParameters = function () { return []; };
    SukuHomepageButtonComponent.propDecorators = {
        titleId: [{ type: Input }],
        titleCustomClass: [{ type: Input }],
        iconCustomClass: [{ type: Input }],
        sukuButtonCustomClass: [{ type: Input }],
        buttonData: [{ type: Input }],
        sendRoutePath: [{ type: Output }]
    };
    return SukuHomepageButtonComponent;
}());
export { SukuHomepageButtonComponent };
if (false) {
    /** @type {?} */
    SukuHomepageButtonComponent.prototype.titleId;
    /** @type {?} */
    SukuHomepageButtonComponent.prototype.titleCustomClass;
    /** @type {?} */
    SukuHomepageButtonComponent.prototype.iconCustomClass;
    /** @type {?} */
    SukuHomepageButtonComponent.prototype.sukuButtonCustomClass;
    /** @type {?} */
    SukuHomepageButtonComponent.prototype.buttonData;
    /** @type {?} */
    SukuHomepageButtonComponent.prototype.sendRoutePath;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ob21lcGFnZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtYnV0dG9ucy9zdWt1LWhvbWVwYWdlLWJ1dHRvbi9zdWt1LWhvbWVwYWdlLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQ7SUFhQztRQUZVLGtCQUFhLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFbkQsQ0FBQzs7OztJQUVqQiw4Q0FBUTs7O0lBQVIsY0FBYSxDQUFDOzs7O0lBRWQsNkNBQU87OztJQUFQO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUM7SUFDRixDQUFDOztnQkFyQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLHFuQkFBb0Q7O2lCQUVwRDs7Ozs7MEJBRUMsS0FBSzttQ0FDTCxLQUFLO2tDQUNMLEtBQUs7d0NBQ0wsS0FBSzs2QkFDTCxLQUFLO2dDQUNMLE1BQU07O0lBV1Isa0NBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQWpCWSwyQkFBMkI7OztJQUN2Qyw4Q0FBaUI7O0lBQ2pCLHVEQUEwQjs7SUFDMUIsc0RBQXlCOztJQUN6Qiw0REFBK0I7O0lBQy9CLGlEQUF3Qzs7SUFDeEMsb0RBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3VrdUhvbWVwYWdlQnV0dG9uIH0gZnJvbSAnLi9zdWt1LWhvbWVwYWdlLWJ1dHRvbic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtaG9tZXBhZ2UtYnV0dG9uJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtaG9tZXBhZ2UtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1ob21lcGFnZS1idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU3VrdUhvbWVwYWdlQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgdGl0bGVJZDtcblx0QElucHV0KCkgdGl0bGVDdXN0b21DbGFzcztcblx0QElucHV0KCkgaWNvbkN1c3RvbUNsYXNzO1xuXHRASW5wdXQoKSBzdWt1QnV0dG9uQ3VzdG9tQ2xhc3M7XG5cdEBJbnB1dCgpIGJ1dHRvbkRhdGE6IFN1a3VIb21lcGFnZUJ1dHRvbjtcblx0QE91dHB1dCgpIHNlbmRSb3V0ZVBhdGg6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0bmdPbkluaXQoKSB7IH1cblxuXHRvbkNsaWNrKCkge1xuXHRcdGlmICghdGhpcy5idXR0b25EYXRhLmRpc2FibGVkKSB7XG5cdFx0XHR0aGlzLnNlbmRSb3V0ZVBhdGguZW1pdCh0aGlzLmJ1dHRvbkRhdGEucGF0aCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=