/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
export class SukuInfoButtonComponent {
    constructor() {
        this.fontWeight = 400;
        this.trigger = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SukuInfoButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-info-button',
                template: "<div class=\"col p-0\">\n  <button class=\"btn btn-info btn-lg btn-block\" [disabled]=\"disableValue\" [style.font-size.px]=\"size\" [style.font-weight]=\"fontWeight\" id=\"{{id}}\" (click)=\"trigger.emit()\">\n    <ng-content></ng-content>\n  </button>\n</div>",
                styles: [".btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#3e3e3e;font-family:'Encode Sans',sans-serif;font-weight:600;font-size:14px;padding:.55rem .85rem}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn.disabled:hover{border:2px solid #a7bf2e!important;border-radius:28px 76px 63px;background-color:#fff;color:#3e3e3e}.btn-info{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#3e3e3e}.btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info:click{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e!important;color:#fff}.btn-info:active{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff!important;color:grey}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#a7bf2e;border-color:#a7bf2e}.btn-info.focus,.btn-info:focus,.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem #a7bf2e}"]
            }] }
];
/** @nocollapse */
SukuInfoButtonComponent.ctorParameters = () => [];
SukuInfoButtonComponent.propDecorators = {
    name: [{ type: Input }],
    id: [{ type: Input }],
    size: [{ type: Input }],
    fontWeight: [{ type: Input }],
    disableValue: [{ type: Input }],
    trigger: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuInfoButtonComponent.prototype.name;
    /** @type {?} */
    SukuInfoButtonComponent.prototype.id;
    /** @type {?} */
    SukuInfoButtonComponent.prototype.size;
    /** @type {?} */
    SukuInfoButtonComponent.prototype.fontWeight;
    /** @type {?} */
    SukuInfoButtonComponent.prototype.disableValue;
    /** @type {?} */
    SukuInfoButtonComponent.prototype.trigger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1pbmZvLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1pbmZvLWJ1dHRvbi9zdWt1LWluZm8tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sdUJBQXVCO0lBUW5DO1FBSlMsZUFBVSxHQUFHLEdBQUcsQ0FBQztRQUVoQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV4QixDQUFDOzs7O0lBRWhCLFFBQVEsS0FBSSxDQUFDOzs7WUFmYixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsaVJBQWdEOzthQUVoRDs7Ozs7bUJBRUMsS0FBSztpQkFDTCxLQUFLO21CQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3NCQUNMLE1BQU07Ozs7SUFMUCx1Q0FBYzs7SUFDZCxxQ0FBWTs7SUFDWix1Q0FBYzs7SUFDZCw2Q0FBMEI7O0lBQzFCLCtDQUErQjs7SUFDL0IsMENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LWluZm8tYnV0dG9uJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtaW5mby1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1pbmZvLWJ1dHRvbi5jb21wb25lbnQuc2NzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1SW5mb0J1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIG5hbWU7XG5cdEBJbnB1dCgpIGlkO1xuXHRASW5wdXQoKSBzaXplO1xuXHRASW5wdXQoKSBmb250V2VpZ2h0ID0gNDAwO1xuXHRASW5wdXQoKSBkaXNhYmxlVmFsdWU6IEJvb2xlYW47XG5cdEBPdXRwdXQoKSB0cmlnZ2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRuZ09uSW5pdCgpIHt9XG59XG4iXX0=