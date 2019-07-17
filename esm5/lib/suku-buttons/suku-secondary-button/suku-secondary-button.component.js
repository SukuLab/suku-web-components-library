/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuSecondaryButtonComponent = /** @class */ (function () {
    function SukuSecondaryButtonComponent() {
        this.size = 1;
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuSecondaryButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SukuSecondaryButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-secondary-button',
                    template: "<span class=\"secondary-btn c-pointer {{customClass}}\" [id]=\"id\" [style.font-weight]=\"weight\" [style.color]=\"color\"\n  [style.font-size.rem]=\"size\" (click)=\"action.emit()\">\n  <ng-content></ng-content>\n</span>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.secondary-btn{font-family:var(--suku-secondary-font)!important;font-size:var(--suku-font-size-2);font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:var(--suku-text-heading);border-bottom:3.5px solid;border-color:var(--suku-primary-color);word-break:break-word}"]
                }] }
    ];
    /** @nocollapse */
    SukuSecondaryButtonComponent.ctorParameters = function () { return []; };
    SukuSecondaryButtonComponent.propDecorators = {
        id: [{ type: Input }],
        size: [{ type: Input }],
        weight: [{ type: Input }],
        color: [{ type: Input }],
        customClass: [{ type: Input, args: ['custom-class',] }],
        action: [{ type: Output }]
    };
    return SukuSecondaryButtonComponent;
}());
export { SukuSecondaryButtonComponent };
if (false) {
    /** @type {?} */
    SukuSecondaryButtonComponent.prototype.id;
    /** @type {?} */
    SukuSecondaryButtonComponent.prototype.size;
    /** @type {?} */
    SukuSecondaryButtonComponent.prototype.weight;
    /** @type {?} */
    SukuSecondaryButtonComponent.prototype.color;
    /** @type {?} */
    SukuSecondaryButtonComponent.prototype.customClass;
    /** @type {?} */
    SukuSecondaryButtonComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zZWNvbmRhcnktYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJ1dHRvbnMvc3VrdS1zZWNvbmRhcnktYnV0dG9uL3N1a3Utc2Vjb25kYXJ5LWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0U7SUFhQztRQU5TLFNBQUksR0FBRyxDQUFDLENBQUM7UUFJUixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV0QixDQUFDOzs7O0lBRWpCLCtDQUFROzs7SUFBUixjQUFhLENBQUM7O2dCQWZkLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyx5T0FBcUQ7O2lCQUVyRDs7Ozs7cUJBRUMsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLLFNBQUMsY0FBYzt5QkFDcEIsTUFBTTs7SUFLUixtQ0FBQztDQUFBLEFBaEJELElBZ0JDO1NBWFksNEJBQTRCOzs7SUFDeEMsMENBQVk7O0lBQ1osNENBQWtCOztJQUNsQiw4Q0FBZ0I7O0lBQ2hCLDZDQUFlOztJQUNmLG1EQUFtQzs7SUFDbkMsOENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LXNlY29uZGFyeS1idXR0b24nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1zZWNvbmRhcnktYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1zZWNvbmRhcnktYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVNlY29uZGFyeUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIGlkO1xuXHRASW5wdXQoKSBzaXplID0gMTtcblx0QElucHV0KCkgd2VpZ2h0O1xuXHRASW5wdXQoKSBjb2xvcjtcblx0QElucHV0KCdjdXN0b20tY2xhc3MnKSBjdXN0b21DbGFzcztcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdG5nT25Jbml0KCkgeyB9XG59XG4iXX0=