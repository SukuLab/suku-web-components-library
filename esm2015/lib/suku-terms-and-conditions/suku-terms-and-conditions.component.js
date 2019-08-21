/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
export class SukuTermsAndConditionsComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
        this.checkBoxColor = 'primary';
        this.title = 'Contract Terms & Conditions';
        this.description = 'I Accept the terms and conditions and authorize this transaction.';
        this.descriptionCustomClass = 'termsAndConditions';
        this.linkCustomClass = 'link';
        this.linkOne = 'https://www.suku.world/terms';
        this.linkTwo = 'https://www.suku.world/privacy';
        this.linkOneTitle = 'Terms';
        this.linkTwoTitle = 'Privacy';
        this.control = 'contractTerms';
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.termsandcondition = this.fb.group({
            'contractTerms': false
        });
    }
    /**
     * @return {?}
     */
    action1() {
        /** @type {?} */
        const data = this.termsandcondition.value.contractTerms;
        this.action.emit(data);
    }
}
SukuTermsAndConditionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-terms-and-conditions',
                template: "<form [formGroup]=\"termsandcondition\">\n  <div class=\" d-flex flex-column\">\n    <div class=\"pb-2\" [style.color]=\"titleColor\" [style.font-weight]=\"titleWeight\"\n      [style.font-size.rem]=\"titleSize\">\n      <b>{{title}}</b></div>\n    <div class=\"d-flex flex-row\">\n      <mat-checkbox color=\"{{checkBoxColor}}\" type=\"checkbox\" #t (change)=\"action1()\" id=\"contractTerms\"\n        formControlName=\"{{control}}\" name=\"{{control}}\" class=\"mT\">\n      </mat-checkbox>\n      <span class=\"col {{descriptionCustomClass}} pl-2 pr-0\"> {{description}}\n        <a class=\"{{linkCustomClass}} ws\" href=\"{{linkOne}}\" target=\"_blank\">{{linkOneTitle}}</a>\n        <a class=\"{{linkCustomClass}} ws\" href=\"{{linkTwo}}\" target=\"_blank\">{{linkTwoTitle}}</a>\n      </span>\n    </div>\n  </div>\n</form> ",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.link{color:var(--suku-text-info);text-decoration:underline;margin-left:5px;margin-right:5px}.ws{white-space:pre}.termsAndConditions{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-4);font-weight:500;font-style:normal;font-stretch:normal;letter-spacing:.4px;color:var(--suku-text-info);word-break:break-word!important}.mT{margin-top:2px!important}"]
            }] }
];
/** @nocollapse */
SukuTermsAndConditionsComponent.ctorParameters = () => [
    { type: FormBuilder }
];
SukuTermsAndConditionsComponent.propDecorators = {
    checkBoxColor: [{ type: Input, args: ['check-box-color',] }],
    title: [{ type: Input, args: ['title',] }],
    titleColor: [{ type: Input, args: ['title-color',] }],
    titleSize: [{ type: Input, args: ['title-size',] }],
    titleWeight: [{ type: Input, args: ['title-weight',] }],
    description: [{ type: Input, args: ['description',] }],
    descriptionCustomClass: [{ type: Input, args: ['description-custom-class',] }],
    linkCustomClass: [{ type: Input, args: ['link-custom-class',] }],
    linkOne: [{ type: Input, args: ['link-one',] }],
    linkTwo: [{ type: Input, args: ['link-two',] }],
    linkOneTitle: [{ type: Input, args: ['link-name-one',] }],
    linkTwoTitle: [{ type: Input, args: ['link-name-two',] }],
    control: [{ type: Input }],
    action: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.termsandcondition;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.checkBoxColor;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.title;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.titleColor;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.titleSize;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.titleWeight;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.description;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.descriptionCustomClass;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.linkCustomClass;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.linkOne;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.linkTwo;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.linkOneTitle;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.linkTwoTitle;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.control;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.action;
    /**
     * @type {?}
     * @private
     */
    SukuTermsAndConditionsComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS10ZXJtcy1hbmQtY29uZGl0aW9ucy9zdWt1LXRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFFeEcsT0FBTyxFQUFFLFdBQVcsRUFBaUQsTUFBTSxnQkFBZ0IsQ0FBQztBQU01RixNQUFNLE9BQU8sK0JBQStCOzs7O0lBaUIxQyxZQUNVLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBaEJDLGtCQUFhLEdBQUcsU0FBUyxDQUFDO1FBQ3BDLFVBQUssR0FBRyw2QkFBNkIsQ0FBQztRQUloQyxnQkFBVyxHQUFHLG1FQUFtRSxDQUFDO1FBQ3JFLDJCQUFzQixHQUFHLG9CQUFvQixDQUFDO1FBQ3JELG9CQUFlLEdBQUcsTUFBTSxDQUFDO1FBQ2xDLFlBQU8sR0FBRyw4QkFBOEIsQ0FBQztRQUN6QyxZQUFPLEdBQUcsZ0NBQWdDLENBQUM7UUFDdEMsaUJBQVksR0FBRyxPQUFPLENBQUM7UUFDdkIsaUJBQVksR0FBRyxTQUFTLENBQUM7UUFDeEMsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQUUxQixXQUFNLEdBQUksSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUdsQyxDQUFDOzs7O0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN4QyxlQUFlLEVBQUUsS0FBSztTQUN0QixDQUFDLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsT0FBTzs7Y0FDQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxhQUFhO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7OztZQW5DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsMjBCQUF5RDs7YUFFMUQ7Ozs7WUFMUSxXQUFXOzs7NEJBUWpCLEtBQUssU0FBQyxpQkFBaUI7b0JBQ3ZCLEtBQUssU0FBQyxPQUFPO3lCQUNiLEtBQUssU0FBQyxhQUFhO3dCQUNuQixLQUFLLFNBQUMsWUFBWTswQkFDbEIsS0FBSyxTQUFDLGNBQWM7MEJBQ3BCLEtBQUssU0FBQyxhQUFhO3FDQUNuQixLQUFLLFNBQUMsMEJBQTBCOzhCQUNoQyxLQUFLLFNBQUMsbUJBQW1CO3NCQUN6QixLQUFLLFNBQUMsVUFBVTtzQkFDaEIsS0FBSyxTQUFDLFVBQVU7MkJBQ2hCLEtBQUssU0FBQyxlQUFlOzJCQUNyQixLQUFLLFNBQUMsZUFBZTtzQkFDckIsS0FBSztxQkFFTixNQUFNOzs7O0lBZk4sNERBQTZCOztJQUM3Qix3REFBb0Q7O0lBQ3BELGdEQUFzRDs7SUFDdEQscURBQWlDOztJQUNqQyxvREFBK0I7O0lBQy9CLHNEQUFtQzs7SUFDbkMsc0RBQXdHOztJQUN4RyxpRUFBaUY7O0lBQ2pGLDBEQUFxRDs7SUFDckQsa0RBQTREOztJQUM1RCxrREFBOEQ7O0lBQzlELHVEQUErQzs7SUFDL0MsdURBQWlEOztJQUNqRCxrREFBbUM7O0lBRXBDLGlEQUF1Qzs7Ozs7SUFFcEMsNkNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgRm9ybUFycmF5LCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtdGVybXMtYW5kLWNvbmRpdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS10ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtdGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1VGVybXNBbmRDb25kaXRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGVybXNhbmRjb25kaXRpb246IEZvcm1Hcm91cDtcbiAgQElucHV0KCdjaGVjay1ib3gtY29sb3InKSBjaGVja0JveENvbG9yID0gJ3ByaW1hcnknO1xuICBASW5wdXQoJ3RpdGxlJykgdGl0bGUgPSAnQ29udHJhY3QgVGVybXMgJiBDb25kaXRpb25zJztcbiAgQElucHV0KCd0aXRsZS1jb2xvcicpIHRpdGxlQ29sb3I7XG4gIEBJbnB1dCgndGl0bGUtc2l6ZScpIHRpdGxlU2l6ZTtcbiAgQElucHV0KCd0aXRsZS13ZWlnaHQnKSB0aXRsZVdlaWdodDtcbiAgQElucHV0KCdkZXNjcmlwdGlvbicpIGRlc2NyaXB0aW9uID0gJ0kgQWNjZXB0IHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBhbmQgYXV0aG9yaXplIHRoaXMgdHJhbnNhY3Rpb24uJztcbiAgQElucHV0KCdkZXNjcmlwdGlvbi1jdXN0b20tY2xhc3MnKSBkZXNjcmlwdGlvbkN1c3RvbUNsYXNzID0gJ3Rlcm1zQW5kQ29uZGl0aW9ucyc7XG4gIEBJbnB1dCgnbGluay1jdXN0b20tY2xhc3MnKSBsaW5rQ3VzdG9tQ2xhc3MgPSAnbGluayc7XG4gIEBJbnB1dCgnbGluay1vbmUnKSBsaW5rT25lID0gJ2h0dHBzOi8vd3d3LnN1a3Uud29ybGQvdGVybXMnO1xuICBASW5wdXQoJ2xpbmstdHdvJykgbGlua1R3byA9ICdodHRwczovL3d3dy5zdWt1LndvcmxkL3ByaXZhY3knO1xuICBASW5wdXQoJ2xpbmstbmFtZS1vbmUnKSBsaW5rT25lVGl0bGUgPSAnVGVybXMnO1xuICBASW5wdXQoJ2xpbmstbmFtZS10d28nKSBsaW5rVHdvVGl0bGUgPSAnUHJpdmFjeSc7XG4gIEBJbnB1dCgpIGNvbnRyb2wgPSAnY29udHJhY3RUZXJtcyc7XG5cbiBAT3V0cHV0KCkgYWN0aW9uICA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50ZXJtc2FuZGNvbmRpdGlvbiA9IHRoaXMuZmIuZ3JvdXAoe1xuXHRcdFx0J2NvbnRyYWN0VGVybXMnOiBmYWxzZVxuXHRcdH0pO1xuICB9XG5cbiAgYWN0aW9uMSgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy50ZXJtc2FuZGNvbmRpdGlvbi52YWx1ZS5jb250cmFjdFRlcm1zO1xuICAgIHRoaXMuYWN0aW9uLmVtaXQoZGF0YSk7XG4gIH1cblxufVxuIl19