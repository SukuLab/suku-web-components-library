/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        console.log('this.buttonData.path', this.buttonData.path);
        if (!this.buttonData.disabled) {
            this.sendRoutePath.emit(this.buttonData.path);
        }
    };
    SukuHomepageButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-homepage-button',
                    template: "<div class=\"button-container d-flex flex-column align-items-center \">\n  <div class=\"suku-button d-flex justify-content-center align-items-center {{sukuButtonCustomClass}}\"\n    *ngIf=\"!(buttonData.disabled == null)\" [ngClass]=\"{\n      'disabled': buttonData.disabled\n    }\" (click)=\"onClick()\" id=\"{{buttonData?.id}}\">\n    <i class=\"{{iconCustomClass}}\" [ngClass]=\"[buttonData.icon, 'icon']\"></i>\n  </div>\n  <div class=\"suku-button-text text-center mt-3\" *ngIf=\"!(buttonData.disabled == null)\">\n    <h3 class=\"button-title {{titleCustomClass}}\">{{buttonData.title}}</h3>\n  </div>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.button-container{width:106.4px;font-family:var(--suku-primary-font);font-weight:700}.suku-button{height:80px;width:80px;background:var(--suku-button-default-bg);color:var(--suku-secondary-color);cursor:pointer!important;box-shadow:0 3px 3px 0 rgba(0,0,0,.5);-webkit-transition:.1s ease-in-out;transition:.1s ease-in-out;border-radius:12px 28px}.suku-button:hover{box-shadow:0 4px 3px 0 rgba(0,0,0,.5);-webkit-transform:translateY(-3px);transform:translateY(-3px)}.suku-button:active{box-shadow:0 4px 3px 0 rgba(0,0,0,.5);-webkit-transform:translateY(-1px);transform:translateY(-1px);-webkit-transition:none;transition:none}.disabled{background:var(--suku-button-disabled-bg);color:var(--suku-icon-disabled-bg);cursor:default}.disabled:active,.disabled:hover{box-shadow:0 3px 3px 0 rgba(0,0,0,.5);-webkit-transform:translateY(0);transform:translateY(0)}.icon{font-size:40px}.button-title{font-size:14px;font-weight:700}"]
                }] }
    ];
    /** @nocollapse */
    SukuHomepageButtonComponent.ctorParameters = function () { return []; };
    SukuHomepageButtonComponent.propDecorators = {
        titleId: [{ type: Input, args: ['title-id',] }],
        titleCustomClass: [{ type: Input, args: ['title-custom-class',] }],
        iconCustomClass: [{ type: Input, args: ['icon-custom-class',] }],
        sukuButtonCustomClass: [{ type: Input, args: ['suku-button-custom-class',] }],
        buttonData: [{ type: Input, args: ['button-data',] }],
        sendRoutePath: [{ type: Output, args: ['send-route-path',] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ob21lcGFnZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtYnV0dG9ucy9zdWt1LWhvbWVwYWdlLWJ1dHRvbi9zdWt1LWhvbWVwYWdlLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQ7SUFhQztRQUYyQixrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXBFLENBQUM7Ozs7SUFFakIsOENBQVE7OztJQUFSLGNBQWEsQ0FBQzs7OztJQUVkLDZDQUFPOzs7SUFBUDtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QztJQUNGLENBQUM7O2dCQXRCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMscW5CQUFvRDs7aUJBRXBEOzs7OzswQkFFQyxLQUFLLFNBQUMsVUFBVTttQ0FDaEIsS0FBSyxTQUFDLG9CQUFvQjtrQ0FDMUIsS0FBSyxTQUFDLG1CQUFtQjt3Q0FDekIsS0FBSyxTQUFDLDBCQUEwQjs2QkFDaEMsS0FBSyxTQUFDLGFBQWE7Z0NBQ25CLE1BQU0sU0FBQyxpQkFBaUI7O0lBWTFCLGtDQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FsQlksMkJBQTJCOzs7SUFDdkMsOENBQTJCOztJQUMzQix1REFBOEM7O0lBQzlDLHNEQUE0Qzs7SUFDNUMsNERBQXlEOztJQUN6RCxpREFBcUQ7O0lBQ3JELG9EQUFvRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1a3VIb21lcGFnZUJ1dHRvbiB9IGZyb20gJy4vc3VrdS1ob21lcGFnZS1idXR0b24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LWhvbWVwYWdlLWJ1dHRvbicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWhvbWVwYWdlLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3N1a3UtaG9tZXBhZ2UtYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VIb21lcGFnZUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgndGl0bGUtaWQnKSB0aXRsZUlkO1xuXHRASW5wdXQoJ3RpdGxlLWN1c3RvbS1jbGFzcycpIHRpdGxlQ3VzdG9tQ2xhc3M7XG5cdEBJbnB1dCgnaWNvbi1jdXN0b20tY2xhc3MnKSBpY29uQ3VzdG9tQ2xhc3M7XG5cdEBJbnB1dCgnc3VrdS1idXR0b24tY3VzdG9tLWNsYXNzJykgc3VrdUJ1dHRvbkN1c3RvbUNsYXNzO1xuXHRASW5wdXQoJ2J1dHRvbi1kYXRhJykgYnV0dG9uRGF0YTogU3VrdUhvbWVwYWdlQnV0dG9uO1xuXHRAT3V0cHV0KCdzZW5kLXJvdXRlLXBhdGgnKSBzZW5kUm91dGVQYXRoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdG5nT25Jbml0KCkgeyB9XG5cblx0b25DbGljaygpIHtcblx0XHRjb25zb2xlLmxvZygndGhpcy5idXR0b25EYXRhLnBhdGgnLCB0aGlzLmJ1dHRvbkRhdGEucGF0aCk7XG5cdFx0aWYgKCF0aGlzLmJ1dHRvbkRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdHRoaXMuc2VuZFJvdXRlUGF0aC5lbWl0KHRoaXMuYnV0dG9uRGF0YS5wYXRoKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==