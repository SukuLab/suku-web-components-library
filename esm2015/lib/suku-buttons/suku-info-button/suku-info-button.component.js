/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
export class SukuInfoButtonComponent {
    constructor() {
        this.size = '';
        this.weight = '600';
        this.type = 'info';
        this.customClass = '';
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SukuInfoButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-info-button',
                template: "<button class=\"suku-i suku-{{type}} {{customClass}}\" [ngClass]=\"{'disabled' : disableValue}\" [disabled]=\"disableValue\"\n  [style.font-size.rem]=\"size\" [style.font-weight]=\"weight\" [id]=\"id\" (click)=\"action.emit()\">\n  <ng-content></ng-content>\n</button>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-i{border:2px solid;border-radius:28px 76px 63px;color:#3e3e3e;font-family:var(--suku-secondary-font)!important;font-size:var(--suku-font-size-2);font-weight:600;padding:.45rem 2rem!important}.suku-i:hover{color:#fff;cursor:pointer}.suku.disabled:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff;color:var(--suku-text-link);cursor:not-allowed}.suku-info{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-text-label-two);color:var(--suku-text-heading)}.suku-info:active,.suku-info:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.suku-info.disabled{border:2px solid;border-color:var(--suku-text-info);background-color:#fff;color:grey}.suku-info.disabled.focus,.suku-info.disabled:focus,.suku-info.disabled:hover,.suku-info[disabled].focus,.suku-info[disabled]:focus,.suku-info[disabled]:hover,fieldset[disabled] .suku-info.focus,fieldset[disabled] .suku-info:focus,fieldset[disabled] .suku-info:hover{border:2px solid;border-color:var(--suku-text-info);background-color:#fff!important;color:grey}.suku-info.focus,.suku-info:focus{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.open>.dropdown-toggle .suku-info.focus,.open>.dropdown-toggle .suku-info:focus,.open>.dropdown-toggle.suku-info:hover,.suku-info.active.focus,.suku-info.active:focus,.suku-info.active:hover,.suku-info:active.focus,.suku-info:active:focus,.suku-info:active:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.show>.suku-info.dropdown-toggle,.suku-info:not(:disabled):not(.disabled).active,.suku-info:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-text-info)}.show>.suku-info.dropdown-toggle:focus,.suku-info.focus,.suku-info:focus,.suku-info:not(:disabled):not(.disabled).active:focus,.suku-info:not(:disabled):not(.disabled):active:focus{box-shadow:0 0 0 .2rem var(--suku-text-info)}.suku-default{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-bg-secondary);color:var(--suku-text-label-one)}.suku-default:active,.suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.suku-default.disabled{border:2px solid;border-color:var(--suku-text-info);background-color:#fff;color:grey}.suku-default.disabled.focus,.suku-default.disabled:focus,.suku-default.disabled:hover,.suku-default[disabled].focus,.suku-default[disabled]:focus,.suku-default[disabled]:hover,fieldset[disabled] .suku-default.focus,fieldset[disabled] .suku-default:focus,fieldset[disabled] .suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:#fff!important;color:grey}.suku-default.focus,.suku-default:focus{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.open>.dropdown-toggle .suku-default.focus,.open>.dropdown-toggle .suku-default:focus,.open>.dropdown-toggle.suku-default:hover,.suku-default.active.focus,.suku-default.active:focus,.suku-default.active:hover,.suku-default:active.focus,.suku-default:active:focus,.suku-default:active:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.show>.suku-default.dropdown-toggle,.suku-default:not(:disabled):not(.disabled).active,.suku-default:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-text-info);border-color:var(--suku-text-info)}.show>.suku-default.dropdown-toggle:focus,.suku-default.focus,.suku-default:focus,.suku-default:not(:disabled):not(.disabled).active:focus,.suku-default:not(:disabled):not(.disabled):active:focus{box-shadow:0 0 0 .2rem var(--suku-text-info)}"]
            }] }
];
/** @nocollapse */
SukuInfoButtonComponent.ctorParameters = () => [];
SukuInfoButtonComponent.propDecorators = {
    id: [{ type: Input }],
    size: [{ type: Input }],
    weight: [{ type: Input }],
    type: [{ type: Input }],
    customClass: [{ type: Input, args: ['custom-class',] }],
    disableValue: [{ type: Input, args: ['disable-value',] }],
    action: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuInfoButtonComponent.prototype.id;
    /** @type {?} */
    SukuInfoButtonComponent.prototype.size;
    /** @type {?} */
    SukuInfoButtonComponent.prototype.weight;
    /** @type {?} */
    SukuInfoButtonComponent.prototype.type;
    /** @type {?} */
    SukuInfoButtonComponent.prototype.customClass;
    /** @type {?} */
    SukuInfoButtonComponent.prototype.disableValue;
    /** @type {?} */
    SukuInfoButtonComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1pbmZvLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1idXR0b25zL3N1a3UtaW5mby1idXR0b24vc3VrdS1pbmZvLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0UsTUFBTSxPQUFPLHVCQUF1QjtJQVNuQztRQVBTLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNBLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBRTlCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXRCLENBQUM7Ozs7SUFFakIsUUFBUSxLQUFLLENBQUM7OztZQWhCZCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsd1JBQWdEOzthQUVoRDs7Ozs7aUJBRUMsS0FBSzttQkFDTCxLQUFLO3FCQUNMLEtBQUs7bUJBQ0wsS0FBSzswQkFDTCxLQUFLLFNBQUMsY0FBYzsyQkFDcEIsS0FBSyxTQUFDLGVBQWU7cUJBQ3JCLE1BQU07Ozs7SUFOUCxxQ0FBWTs7SUFDWix1Q0FBbUI7O0lBQ25CLHlDQUF3Qjs7SUFDeEIsdUNBQXVCOztJQUN2Qiw4Q0FBd0M7O0lBQ3hDLCtDQUE4Qzs7SUFDOUMseUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LWluZm8tYnV0dG9uJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtaW5mby1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LWluZm8tYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUluZm9CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKSBpZDtcblx0QElucHV0KCkgc2l6ZSA9ICcnO1xuXHRASW5wdXQoKSB3ZWlnaHQgPSAnNjAwJztcblx0QElucHV0KCkgdHlwZSA9ICdpbmZvJztcblx0QElucHV0KCdjdXN0b20tY2xhc3MnKSBjdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2Rpc2FibGUtdmFsdWUnKSBkaXNhYmxlVmFsdWU6IEJvb2xlYW47XG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgfVxufVxuIl19