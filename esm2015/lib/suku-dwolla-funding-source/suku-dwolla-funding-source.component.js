/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
export class SukuDwollaFundingSourceComponent {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.enable = {
            button: false
        };
        this.type = 'Production';
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get iavToken() {
        return this._iavToken;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set iavToken(val) {
        this._iavToken = val;
    }
    /**
     * @return {?}
     */
    get validResponse() {
        return this._validResponse;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set validResponse(val) {
        this._validResponse = val;
        console.log('_validResponse', this._validResponse);
        if (this._validResponse) {
            this.getDwollaHtml();
        }
        else {
            this.snackbar('Please wait...');
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    getDwollaHtml() {
        if (this._iavToken) {
            if (document.getElementById('iavContainer')) {
                /** @type {?} */
                const list = document.getElementById('iavContainer');
                while (list.hasChildNodes()) {
                    list.removeChild(list.firstChild);
                }
            }
            console.log('triggered', this._iavToken);
            if (this.type != 'Production') {
                dwolla.configure('sandbox');
            }
            dwolla.iav.start(this._iavToken, {
                container: 'iavContainer',
                stylesheets: ['https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext'],
                microDeposits: true,
                backButton: true,
                fallbackToMicroDeposits: true
            }, (/**
             * @param {?} err
             * @param {?} res
             * @return {?}
             */
            (err, res) => {
                console.log('Error: ' + JSON.stringify(err) + ' -- Response: ' + JSON.stringify(res));
                if (res) {
                    /** @type {?} */
                    const checkResponse = res['_links']['funding-source'].href;
                    if (checkResponse) {
                        this.enable.button = true;
                    }
                    else {
                        this.enable.button = false;
                    }
                }
            }));
        }
        else {
            this.snackbar('Please try after sometime.');
        }
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    snackbar(msg) {
        this.snackBar.open(msg, 'close', {
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            duration: 3000
        });
    }
}
SukuDwollaFundingSourceComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-dwolla-funding-source',
                template: "<div class=\"col p-2\">\r\n  <div id=\"mainContainer\">\r\n    <p class=\"mt-2 note pl-3 text-center\"><b>Note:</b> Adding a funding resource requires a third-party UI, which may\r\n      take a few moments to load.</p>\r\n  </div>\r\n  <div class=\"col pt-3 pb-2 bg m-3\">\r\n    <div id=\"iavContainer\"></div>\r\n    <div class=\"col text-center pb-4\">\r\n      <button class=\"suku-button\" (click)=\"action.emit()\" *ngIf=\"enable?.button \">Return to Funding Sources</button>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-button{cursor:pointer;border:2px solid!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:var(--suku-primary-font);letter-spacing:1px}.suku-button:hover{cursor:pointer;border:2px solid!important;padding:10px 32px!important;background-color:var(--suku-primary-color)!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:var(--suku-primary-font);letter-spacing:1px}.suku-button:focus{box-shadow:none!important;outline:0!important}.dwolla-iav-link{font-weight:400;color:var(--suku-primary-color)!important;font-family:var(--suku-primary-font);letter-spacing:.2px}.dwolla-iav-button{cursor:pointer;border:2px solid!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:var(--suku-primary-font);letter-spacing:1px}.dwolla-iav-back-button{width:auto!important;cursor:pointer;border:2px solid!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:var(--suku-primary-font);letter-spacing:1.1px}.bg{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}"]
            }] }
];
/** @nocollapse */
SukuDwollaFundingSourceComponent.ctorParameters = () => [
    { type: MatSnackBar }
];
SukuDwollaFundingSourceComponent.propDecorators = {
    type: [{ type: Input, args: ['type',] }],
    iavToken: [{ type: Input, args: ['iav-token',] }],
    validResponse: [{ type: Input }],
    action: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuDwollaFundingSourceComponent.prototype._iavToken;
    /** @type {?} */
    SukuDwollaFundingSourceComponent.prototype._validResponse;
    /** @type {?} */
    SukuDwollaFundingSourceComponent.prototype.enable;
    /** @type {?} */
    SukuDwollaFundingSourceComponent.prototype.type;
    /** @type {?} */
    SukuDwollaFundingSourceComponent.prototype.action;
    /**
     * @type {?}
     * @private
     */
    SukuDwollaFundingSourceComponent.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNaEQsTUFBTSxPQUFPLGdDQUFnQzs7OztJQWdDNUMsWUFBb0IsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQTdCekMsV0FBTSxHQUFHO1lBQ1IsTUFBTSxFQUFFLEtBQUs7U0FDYixDQUFDO1FBRWEsU0FBSSxHQUFHLFlBQVksQ0FBQztRQXVCekIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFTyxDQUFDOzs7O0lBeEI5QyxJQUNJLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFDRCxJQUFJLFFBQVEsQ0FBQyxHQUFHO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELElBQ0ksYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFDRCxJQUFJLGFBQWEsQ0FBQyxHQUFHO1FBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25ELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNoQztJQUNGLENBQUM7Ozs7SUFNRCxRQUFRLEtBQUssQ0FBQzs7OztJQUVkLGFBQWE7UUFDWixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxFQUFFOztzQkFDdEMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDO2dCQUNwRCxPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtvQkFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ2xDO2FBQ0Q7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDekMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFlBQVksRUFBRTtnQkFDOUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM1QjtZQUNELE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUNmLElBQUksQ0FBQyxTQUFTLEVBQ2Q7Z0JBQ0MsU0FBUyxFQUFFLGNBQWM7Z0JBQ3pCLFdBQVcsRUFBRSxDQUFDLHFFQUFxRSxDQUFDO2dCQUNwRixhQUFhLEVBQUUsSUFBSTtnQkFDbkIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLHVCQUF1QixFQUFFLElBQUk7YUFDN0I7Ozs7O1lBQ0QsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RGLElBQUksR0FBRyxFQUFFOzswQkFDRixhQUFhLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSTtvQkFDMUQsSUFBSSxhQUFhLEVBQUU7d0JBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztxQkFDMUI7eUJBQU07d0JBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO3FCQUMzQjtpQkFDRDtZQUNGLENBQUMsRUFDRCxDQUFDO1NBQ0Y7YUFBTTtZQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUM1QztJQUNGLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEdBQUc7UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsa0JBQWtCLEVBQUUsT0FBTztZQUMzQixRQUFRLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztJQUNKLENBQUM7OztZQXJGRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsa2hCQUEwRDs7YUFFMUQ7Ozs7WUFMUSxXQUFXOzs7bUJBYWxCLEtBQUssU0FBQyxNQUFNO3VCQUNaLEtBQUssU0FBQyxXQUFXOzRCQVFqQixLQUFLO3FCQWNMLE1BQU07Ozs7SUE3QlAscURBQVU7O0lBQ1YsMERBQWU7O0lBQ2Ysa0RBRUU7O0lBRUYsZ0RBQW1DOztJQXVCbkMsa0RBQXNDOzs7OztJQUUxQixvREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmRlY2xhcmUgdmFyIGR3b2xsYTogYW55O1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LWR3b2xsYS1mdW5kaW5nLXNvdXJjZScsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LWR3b2xsYS1mdW5kaW5nLXNvdXJjZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1RHdvbGxhRnVuZGluZ1NvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0X2lhdlRva2VuO1xyXG5cdF92YWxpZFJlc3BvbnNlO1xyXG5cdGVuYWJsZSA9IHtcclxuXHRcdGJ1dHRvbjogZmFsc2VcclxuXHR9O1xyXG5cclxuXHRASW5wdXQoJ3R5cGUnKSB0eXBlID0gJ1Byb2R1Y3Rpb24nO1xyXG5cdEBJbnB1dCgnaWF2LXRva2VuJylcclxuXHRnZXQgaWF2VG9rZW4oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5faWF2VG9rZW47XHJcblx0fVxyXG5cdHNldCBpYXZUb2tlbih2YWwpIHtcclxuXHRcdHRoaXMuX2lhdlRva2VuID0gdmFsO1xyXG5cdH1cclxuXHJcblx0QElucHV0KClcclxuXHRnZXQgdmFsaWRSZXNwb25zZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl92YWxpZFJlc3BvbnNlO1xyXG5cdH1cclxuXHRzZXQgdmFsaWRSZXNwb25zZSh2YWwpIHtcclxuXHRcdHRoaXMuX3ZhbGlkUmVzcG9uc2UgPSB2YWw7XHJcblx0XHRjb25zb2xlLmxvZygnX3ZhbGlkUmVzcG9uc2UnLCB0aGlzLl92YWxpZFJlc3BvbnNlKTtcclxuXHRcdGlmICh0aGlzLl92YWxpZFJlc3BvbnNlKSB7XHJcblx0XHRcdHRoaXMuZ2V0RHdvbGxhSHRtbCgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zbmFja2JhcignUGxlYXNlIHdhaXQuLi4nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7IH1cclxuXHJcblx0Z2V0RHdvbGxhSHRtbCgpIHtcclxuXHRcdGlmICh0aGlzLl9pYXZUb2tlbikge1xyXG5cdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lhdkNvbnRhaW5lcicpKSB7XHJcblx0XHRcdFx0Y29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpYXZDb250YWluZXInKTtcclxuXHRcdFx0XHR3aGlsZSAobGlzdC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuXHRcdFx0XHRcdGxpc3QucmVtb3ZlQ2hpbGQobGlzdC5maXJzdENoaWxkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc29sZS5sb2coJ3RyaWdnZXJlZCcsIHRoaXMuX2lhdlRva2VuKTtcclxuXHRcdFx0aWYgKHRoaXMudHlwZSAhPSAnUHJvZHVjdGlvbicpIHtcclxuXHRcdFx0XHRkd29sbGEuY29uZmlndXJlKCdzYW5kYm94Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZHdvbGxhLmlhdi5zdGFydChcclxuXHRcdFx0XHR0aGlzLl9pYXZUb2tlbixcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb250YWluZXI6ICdpYXZDb250YWluZXInLFxyXG5cdFx0XHRcdFx0c3R5bGVzaGVldHM6IFsnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG8mc3Vic2V0PWxhdGluLGxhdGluLWV4dCddLFxyXG5cdFx0XHRcdFx0bWljcm9EZXBvc2l0czogdHJ1ZSxcclxuXHRcdFx0XHRcdGJhY2tCdXR0b246IHRydWUsXHJcblx0XHRcdFx0XHRmYWxsYmFja1RvTWljcm9EZXBvc2l0czogdHJ1ZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0KGVyciwgcmVzKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3I6ICcgKyBKU09OLnN0cmluZ2lmeShlcnIpICsgJyAtLSBSZXNwb25zZTogJyArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG5cdFx0XHRcdFx0aWYgKHJlcykge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBjaGVja1Jlc3BvbnNlID0gcmVzWydfbGlua3MnXVsnZnVuZGluZy1zb3VyY2UnXS5ocmVmO1xyXG5cdFx0XHRcdFx0XHRpZiAoY2hlY2tSZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZW5hYmxlLmJ1dHRvbiA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5lbmFibGUuYnV0dG9uID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNuYWNrYmFyKCdQbGVhc2UgdHJ5IGFmdGVyIHNvbWV0aW1lLicpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c25hY2tiYXIobXNnKSB7XHJcblx0XHR0aGlzLnNuYWNrQmFyLm9wZW4obXNnLCAnY2xvc2UnLCB7XHJcblx0XHRcdHZlcnRpY2FsUG9zaXRpb246ICdib3R0b20nLFxyXG5cdFx0XHRob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCcsXHJcblx0XHRcdGR1cmF0aW9uOiAzMDAwXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19