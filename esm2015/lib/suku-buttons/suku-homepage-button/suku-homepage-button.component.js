/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SukuHomepageButton } from './suku-homepage-button';
export class SukuHomepageButtonComponent {
    constructor() {
        this.sendRoutePath = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    onClick() {
        console.log('this.buttonData.path', this.buttonData.path);
        if (!this.buttonData.disabled) {
            this.sendRoutePath.emit(this.buttonData.path);
        }
    }
}
SukuHomepageButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-homepage-button',
                template: "<div class=\"button-container d-flex flex-column align-items-center \">\n  <div class=\"suku-button d-flex justify-content-center align-items-center {{sukuButtonCustomClass}}\"\n    *ngIf=\"!(buttonData.disabled == null)\" [ngClass]=\"{\n      'disabled': buttonData.disabled\n    }\" (click)=\"onClick()\" id=\"{{buttonData?.id}}\">\n    <i class=\"{{iconCustomClass}}\" [ngClass]=\"[buttonData.icon, 'icon']\"></i>\n  </div>\n  <div class=\"suku-button-text text-center mt-3\" *ngIf=\"!(buttonData.disabled == null)\">\n    <h3 class=\"button-title {{titleCustomClass}}\">{{buttonData.title}}</h3>\n  </div>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.button-container{width:106.4px;font-family:var(--suku-primary-font)!important;font-weight:700}.suku-button{height:80px;width:80px;background:var(--suku-button-default-bg);color:var(--suku-secondary-color);cursor:pointer!important;box-shadow:0 3px 3px 0 rgba(0,0,0,.5);transition:.1s ease-in-out;border-radius:12px 28px}.suku-button:hover{box-shadow:0 4px 3px 0 rgba(0,0,0,.5);-webkit-transform:translateY(-3px);transform:translateY(-3px)}.suku-button:active{box-shadow:0 4px 3px 0 rgba(0,0,0,.5);-webkit-transform:translateY(-1px);transform:translateY(-1px);transition:none}.disabled{background:var(--suku-button-disabled-bg);color:var(--suku-icon-disabled-bg);cursor:default}.disabled:active,.disabled:hover{box-shadow:0 3px 3px 0 rgba(0,0,0,.5);-webkit-transform:translateY(0);transform:translateY(0)}.icon{font-size:40px}.button-title{font-size:14px;font-weight:700}"]
            }] }
];
/** @nocollapse */
SukuHomepageButtonComponent.ctorParameters = () => [];
SukuHomepageButtonComponent.propDecorators = {
    titleId: [{ type: Input, args: ['title-id',] }],
    titleCustomClass: [{ type: Input, args: ['title-custom-class',] }],
    iconCustomClass: [{ type: Input, args: ['icon-custom-class',] }],
    sukuButtonCustomClass: [{ type: Input, args: ['suku-button-custom-class',] }],
    buttonData: [{ type: Input, args: ['button-data',] }],
    sendRoutePath: [{ type: Output, args: ['send-route-path',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ob21lcGFnZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtYnV0dG9ucy9zdWt1LWhvbWVwYWdlLWJ1dHRvbi9zdWt1LWhvbWVwYWdlLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFPNUQsTUFBTSxPQUFPLDJCQUEyQjtJQVF2QztRQUYyQixrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXBFLENBQUM7Ozs7SUFFakIsUUFBUSxLQUFLLENBQUM7Ozs7SUFFZCxPQUFPO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlDO0lBQ0YsQ0FBQzs7O1lBdEJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxxbkJBQW9EOzthQUVwRDs7Ozs7c0JBRUMsS0FBSyxTQUFDLFVBQVU7K0JBQ2hCLEtBQUssU0FBQyxvQkFBb0I7OEJBQzFCLEtBQUssU0FBQyxtQkFBbUI7b0NBQ3pCLEtBQUssU0FBQywwQkFBMEI7eUJBQ2hDLEtBQUssU0FBQyxhQUFhOzRCQUNuQixNQUFNLFNBQUMsaUJBQWlCOzs7O0lBTHpCLDhDQUEyQjs7SUFDM0IsdURBQThDOztJQUM5QyxzREFBNEM7O0lBQzVDLDREQUF5RDs7SUFDekQsaURBQXFEOztJQUNyRCxvREFBb0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWt1SG9tZXBhZ2VCdXR0b24gfSBmcm9tICcuL3N1a3UtaG9tZXBhZ2UtYnV0dG9uJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1ob21lcGFnZS1idXR0b24nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1ob21lcGFnZS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LWhvbWVwYWdlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTdWt1SG9tZXBhZ2VCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoJ3RpdGxlLWlkJykgdGl0bGVJZDtcblx0QElucHV0KCd0aXRsZS1jdXN0b20tY2xhc3MnKSB0aXRsZUN1c3RvbUNsYXNzO1xuXHRASW5wdXQoJ2ljb24tY3VzdG9tLWNsYXNzJykgaWNvbkN1c3RvbUNsYXNzO1xuXHRASW5wdXQoJ3N1a3UtYnV0dG9uLWN1c3RvbS1jbGFzcycpIHN1a3VCdXR0b25DdXN0b21DbGFzcztcblx0QElucHV0KCdidXR0b24tZGF0YScpIGJ1dHRvbkRhdGE6IFN1a3VIb21lcGFnZUJ1dHRvbjtcblx0QE91dHB1dCgnc2VuZC1yb3V0ZS1wYXRoJykgc2VuZFJvdXRlUGF0aDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgfVxuXG5cdG9uQ2xpY2soKSB7XG5cdFx0Y29uc29sZS5sb2coJ3RoaXMuYnV0dG9uRGF0YS5wYXRoJywgdGhpcy5idXR0b25EYXRhLnBhdGgpO1xuXHRcdGlmICghdGhpcy5idXR0b25EYXRhLmRpc2FibGVkKSB7XG5cdFx0XHR0aGlzLnNlbmRSb3V0ZVBhdGguZW1pdCh0aGlzLmJ1dHRvbkRhdGEucGF0aCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=