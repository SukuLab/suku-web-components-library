/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
export class SukuInfoButtonComponent {
    constructor() {
        this.size = '';
        this.weight = '600';
        this.type = 'info';
        this.btnType = 'submit';
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
                template: "<button class=\"suku-i suku-{{type}} {{customClass}}\" type=\"{{btnType}}\" [ngClass]=\"{'disabled' : disableValue}\"\n  [disabled]=\"disableValue\" [style.font-size.rem]=\"size\" [style.font-weight]=\"weight\" [id]=\"id\" (click)=\"action.emit()\">\n  <ng-content></ng-content>\n</button>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-i{border:2px solid;border-radius:28px 76px 63px;color:#3e3e3e;font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;padding:.55rem 2rem}.suku-i:hover{color:#fff;cursor:pointer}.suku-i:focus{outline:0!important}.suku.disabled:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff;color:var(--suku-text-link);cursor:not-allowed}.suku-info{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-default-bg);color:var(--suku-text-heading)}.suku-info:active,.suku-info:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.suku-info.disabled{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:grey}.suku-info.disabled.focus,.suku-info.disabled:focus,.suku-info.disabled:hover,.suku-info[disabled].focus,.suku-info[disabled]:focus,.suku-info[disabled]:hover,fieldset[disabled] .suku-info.focus,fieldset[disabled] .suku-info:focus,fieldset[disabled] .suku-info:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:grey;cursor:not-allowed}.suku-info.focus,.suku-info:focus{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.open>.dropdown-toggle .suku-info.focus,.open>.dropdown-toggle .suku-info:focus,.open>.dropdown-toggle.suku-info:hover,.suku-info.active.focus,.suku-info.active:focus,.suku-info.active:hover,.suku-info:active.focus,.suku-info:active:focus,.suku-info:active:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.show>.suku-info.dropdown-toggle,.suku-info:not(:disabled):not(.disabled).active,.suku-info:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}.show>.suku-info.dropdown-toggle:focus,.suku-info.focus,.suku-info:focus,.suku-info:not(:disabled):not(.disabled).active:focus,.suku-info:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}.suku-default{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-default-bg);color:var(--suku-text-heading)}.suku-default:active,.suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.suku-default.disabled{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#c4c4c4;opacity:.7}.suku-default.disabled.focus,.suku-default.disabled:focus,.suku-default.disabled:hover,.suku-default[disabled].focus,.suku-default[disabled]:focus,.suku-default[disabled]:hover,fieldset[disabled] .suku-default.focus,fieldset[disabled] .suku-default:focus,fieldset[disabled] .suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#c4c4c4;opacity:.7;cursor:not-allowed}.suku-default.focus,.suku-default:focus{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.open>.dropdown-toggle .suku-default.focus,.open>.dropdown-toggle .suku-default:focus,.open>.dropdown-toggle.suku-default:hover,.suku-default.active.focus,.suku-default.active:focus,.suku-default.active:hover,.suku-default:active.focus,.suku-default:active:focus,.suku-default:active:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.show>.suku-default.dropdown-toggle,.suku-default:not(:disabled):not(.disabled).active,.suku-default:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-text-info);border-color:var(--suku-text-info)}.show>.suku-default.dropdown-toggle:focus,.suku-default.focus,.suku-default:focus,.suku-default:not(:disabled):not(.disabled).active:focus,.suku-default:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}"]
            }] }
];
/** @nocollapse */
SukuInfoButtonComponent.ctorParameters = () => [];
SukuInfoButtonComponent.propDecorators = {
    id: [{ type: Input }],
    size: [{ type: Input }],
    weight: [{ type: Input }],
    type: [{ type: Input }],
    btnType: [{ type: Input, args: ['btn-type',] }],
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
    SukuInfoButtonComponent.prototype.btnType;
    /** @type {?} */
    SukuInfoButtonComponent.prototype.customClass;
    /** @type {?} */
    SukuInfoButtonComponent.prototype.disableValue;
    /** @type {?} */
    SukuInfoButtonComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1pbmZvLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1idXR0b25zL3N1a3UtaW5mby1idXR0b24vc3VrdS1pbmZvLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0UsTUFBTSxPQUFPLHVCQUF1QjtJQVVuQztRQVJTLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNKLFlBQU8sR0FBRyxRQUFRLENBQUM7UUFDZixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUU5QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV0QixDQUFDOzs7O0lBRWpCLFFBQVEsS0FBSyxDQUFDOzs7WUFqQmQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDZTQUFnRDs7YUFFaEQ7Ozs7O2lCQUVDLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxLQUFLO21CQUNMLEtBQUs7c0JBQ0wsS0FBSyxTQUFDLFVBQVU7MEJBQ2hCLEtBQUssU0FBQyxjQUFjOzJCQUNwQixLQUFLLFNBQUMsZUFBZTtxQkFDckIsTUFBTTs7OztJQVBQLHFDQUFZOztJQUNaLHVDQUFtQjs7SUFDbkIseUNBQXdCOztJQUN4Qix1Q0FBdUI7O0lBQ3ZCLDBDQUFzQzs7SUFDdEMsOENBQXdDOztJQUN4QywrQ0FBOEM7O0lBQzlDLHlDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1pbmZvLWJ1dHRvbicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWluZm8tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1pbmZvLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VJbmZvQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgaWQ7XG5cdEBJbnB1dCgpIHNpemUgPSAnJztcblx0QElucHV0KCkgd2VpZ2h0ID0gJzYwMCc7XG5cdEBJbnB1dCgpIHR5cGUgPSAnaW5mbyc7XG5cdEBJbnB1dCgnYnRuLXR5cGUnKSBidG5UeXBlID0gJ3N1Ym1pdCc7XG5cdEBJbnB1dCgnY3VzdG9tLWNsYXNzJykgY3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCdkaXNhYmxlLXZhbHVlJykgZGlzYWJsZVZhbHVlOiBCb29sZWFuO1xuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0bmdPbkluaXQoKSB7IH1cbn1cbiJdfQ==