/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-dwolla-funding-source/suku-dwolla-funding-source.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
var SukuDwollaFundingSourceComponent = /** @class */ (function () {
    function SukuDwollaFundingSourceComponent(snackBar) {
        this.snackBar = snackBar;
        this.enable = {
            button: false
        };
        this.type = 'Production';
        this.action = new EventEmitter();
    }
    Object.defineProperty(SukuDwollaFundingSourceComponent.prototype, "iavToken", {
        get: /**
         * @return {?}
         */
        function () {
            return this._iavToken;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._iavToken = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SukuDwollaFundingSourceComponent.prototype, "validResponse", {
        get: /**
         * @return {?}
         */
        function () {
            return this._validResponse;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._validResponse = val;
            console.log('_validResponse', this._validResponse);
            if (this._validResponse) {
                this.getDwollaHtml();
            }
            else {
                this.snackbar('Please wait...');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SukuDwollaFundingSourceComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    SukuDwollaFundingSourceComponent.prototype.getDwollaHtml = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._iavToken) {
            if (document.getElementById('iavContainer')) {
                /** @type {?} */
                var list = document.getElementById('iavContainer');
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
            function (err, res) {
                console.log('Error: ' + JSON.stringify(err) + ' -- Response: ' + JSON.stringify(res));
                if (res) {
                    /** @type {?} */
                    var checkResponse = res['_links']['funding-source'].href;
                    if (checkResponse) {
                        _this.enable.button = true;
                    }
                    else {
                        _this.enable.button = false;
                    }
                }
            }));
        }
        else {
            this.snackbar('Please try after sometime.');
        }
    };
    /**
     * @param {?} msg
     * @return {?}
     */
    SukuDwollaFundingSourceComponent.prototype.snackbar = /**
     * @param {?} msg
     * @return {?}
     */
    function (msg) {
        this.snackBar.open(msg, 'close', {
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            duration: 3000
        });
    };
    SukuDwollaFundingSourceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-dwolla-funding-source',
                    template: "<div class=\"col p-2\">\n  <div id=\"mainContainer\">\n    <p class=\"mt-2 note pl-3 text-center\"><b>Note:</b> Adding a funding resource requires a third-party UI, which may\n      take a few moments to load.</p>\n  </div>\n  <div class=\"col pt-3 pb-2 bg m-3\">\n    <div id=\"iavContainer\"></div>\n    <div class=\"col text-center pb-4\">\n      <button class=\"suku-button\" (click)=\"action.emit()\" *ngIf=\"enable?.button \">Return to Funding Sources</button>\n    </div>\n  </div>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-button{cursor:pointer;border:2px solid!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:var(--suku-primary-font);letter-spacing:1px}.suku-button:hover{cursor:pointer;border:2px solid!important;padding:10px 32px!important;background-color:var(--suku-primary-color)!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:var(--suku-primary-font);letter-spacing:1px}.suku-button:focus{box-shadow:none!important;outline:0!important}.dwolla-iav-link{font-weight:400;color:var(--suku-primary-color)!important;font-family:var(--suku-primary-font);letter-spacing:.2px}.dwolla-iav-button{cursor:pointer;border:2px solid!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:var(--suku-primary-font);letter-spacing:1px}.dwolla-iav-back-button{width:auto!important;cursor:pointer;border:2px solid!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:var(--suku-primary-font);letter-spacing:1.1px}.bg{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}"]
                }] }
    ];
    /** @nocollapse */
    SukuDwollaFundingSourceComponent.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
    SukuDwollaFundingSourceComponent.propDecorators = {
        type: [{ type: Input, args: ['type',] }],
        iavToken: [{ type: Input, args: ['iav-token',] }],
        validResponse: [{ type: Input }],
        action: [{ type: Output }]
    };
    return SukuDwollaFundingSourceComponent;
}());
export { SukuDwollaFundingSourceComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hEO0lBcUNDLDBDQUFvQixRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBN0J6QyxXQUFNLEdBQUc7WUFDUixNQUFNLEVBQUUsS0FBSztTQUNiLENBQUM7UUFFYSxTQUFJLEdBQUcsWUFBWSxDQUFDO1FBdUJ6QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVPLENBQUM7SUF4QjlDLHNCQUNJLHNEQUFROzs7O1FBRFo7WUFFQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFDRCxVQUFhLEdBQUc7WUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN0QixDQUFDOzs7T0FIQTtJQUtELHNCQUNJLDJEQUFhOzs7O1FBRGpCO1lBRUMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzVCLENBQUM7Ozs7O1FBQ0QsVUFBa0IsR0FBRztZQUNwQixJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNuRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNyQjtpQkFBTTtnQkFDTixJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDaEM7UUFDRixDQUFDOzs7T0FUQTs7OztJQWVELG1EQUFROzs7SUFBUixjQUFhLENBQUM7Ozs7SUFFZCx3REFBYTs7O0lBQWI7UUFBQSxpQkFvQ0M7UUFuQ0EsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRTs7b0JBQ3RDLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztnQkFDcEQsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUNsQzthQUNEO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUU7Z0JBQzlCLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDNUI7WUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FDZixJQUFJLENBQUMsU0FBUyxFQUNkO2dCQUNDLFNBQVMsRUFBRSxjQUFjO2dCQUN6QixXQUFXLEVBQUUsQ0FBQyxxRUFBcUUsQ0FBQztnQkFDcEYsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLFVBQVUsRUFBRSxJQUFJO2dCQUNoQix1QkFBdUIsRUFBRSxJQUFJO2FBQzdCOzs7OztZQUNELFVBQUMsR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RGLElBQUksR0FBRyxFQUFFOzt3QkFDRixhQUFhLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSTtvQkFDMUQsSUFBSSxhQUFhLEVBQUU7d0JBQ2xCLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztxQkFDMUI7eUJBQU07d0JBQ04sS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO3FCQUMzQjtpQkFDRDtZQUNGLENBQUMsRUFDRCxDQUFDO1NBQ0Y7YUFBTTtZQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUM1QztJQUNGLENBQUM7Ozs7O0lBRUQsbURBQVE7Ozs7SUFBUixVQUFTLEdBQUc7UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsa0JBQWtCLEVBQUUsT0FBTztZQUMzQixRQUFRLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztJQUNKLENBQUM7O2dCQXJGRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsNGZBQTBEOztpQkFFMUQ7Ozs7Z0JBTFEsV0FBVzs7O3VCQWFsQixLQUFLLFNBQUMsTUFBTTsyQkFDWixLQUFLLFNBQUMsV0FBVztnQ0FRakIsS0FBSzt5QkFjTCxNQUFNOztJQW1EUix1Q0FBQztDQUFBLEFBdEZELElBc0ZDO1NBakZZLGdDQUFnQzs7O0lBQzVDLHFEQUFVOztJQUNWLDBEQUFlOztJQUNmLGtEQUVFOztJQUVGLGdEQUFtQzs7SUF1Qm5DLGtEQUFzQzs7Ozs7SUFFMUIsb0RBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSB2YXIgZHdvbGxhOiBhbnk7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1RHdvbGxhRnVuZGluZ1NvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdF9pYXZUb2tlbjtcblx0X3ZhbGlkUmVzcG9uc2U7XG5cdGVuYWJsZSA9IHtcblx0XHRidXR0b246IGZhbHNlXG5cdH07XG5cblx0QElucHV0KCd0eXBlJykgdHlwZSA9ICdQcm9kdWN0aW9uJztcblx0QElucHV0KCdpYXYtdG9rZW4nKVxuXHRnZXQgaWF2VG9rZW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2lhdlRva2VuO1xuXHR9XG5cdHNldCBpYXZUb2tlbih2YWwpIHtcblx0XHR0aGlzLl9pYXZUb2tlbiA9IHZhbDtcblx0fVxuXG5cdEBJbnB1dCgpXG5cdGdldCB2YWxpZFJlc3BvbnNlKCkge1xuXHRcdHJldHVybiB0aGlzLl92YWxpZFJlc3BvbnNlO1xuXHR9XG5cdHNldCB2YWxpZFJlc3BvbnNlKHZhbCkge1xuXHRcdHRoaXMuX3ZhbGlkUmVzcG9uc2UgPSB2YWw7XG5cdFx0Y29uc29sZS5sb2coJ192YWxpZFJlc3BvbnNlJywgdGhpcy5fdmFsaWRSZXNwb25zZSk7XG5cdFx0aWYgKHRoaXMuX3ZhbGlkUmVzcG9uc2UpIHtcblx0XHRcdHRoaXMuZ2V0RHdvbGxhSHRtbCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNuYWNrYmFyKCdQbGVhc2Ugd2FpdC4uLicpO1xuXHRcdH1cblx0fVxuXG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHsgfVxuXG5cdG5nT25Jbml0KCkgeyB9XG5cblx0Z2V0RHdvbGxhSHRtbCgpIHtcblx0XHRpZiAodGhpcy5faWF2VG9rZW4pIHtcblx0XHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWF2Q29udGFpbmVyJykpIHtcblx0XHRcdFx0Y29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpYXZDb250YWluZXInKTtcblx0XHRcdFx0d2hpbGUgKGxpc3QuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0XHRcdFx0bGlzdC5yZW1vdmVDaGlsZChsaXN0LmZpcnN0Q2hpbGQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjb25zb2xlLmxvZygndHJpZ2dlcmVkJywgdGhpcy5faWF2VG9rZW4pO1xuXHRcdFx0aWYgKHRoaXMudHlwZSAhPSAnUHJvZHVjdGlvbicpIHtcblx0XHRcdFx0ZHdvbGxhLmNvbmZpZ3VyZSgnc2FuZGJveCcpO1xuXHRcdFx0fVxuXHRcdFx0ZHdvbGxhLmlhdi5zdGFydChcblx0XHRcdFx0dGhpcy5faWF2VG9rZW4sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjb250YWluZXI6ICdpYXZDb250YWluZXInLFxuXHRcdFx0XHRcdHN0eWxlc2hlZXRzOiBbJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvJnN1YnNldD1sYXRpbixsYXRpbi1leHQnXSxcblx0XHRcdFx0XHRtaWNyb0RlcG9zaXRzOiB0cnVlLFxuXHRcdFx0XHRcdGJhY2tCdXR0b246IHRydWUsXG5cdFx0XHRcdFx0ZmFsbGJhY2tUb01pY3JvRGVwb3NpdHM6IHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0KGVyciwgcmVzKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyKSArICcgLS0gUmVzcG9uc2U6ICcgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcblx0XHRcdFx0XHRpZiAocmVzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBjaGVja1Jlc3BvbnNlID0gcmVzWydfbGlua3MnXVsnZnVuZGluZy1zb3VyY2UnXS5ocmVmO1xuXHRcdFx0XHRcdFx0aWYgKGNoZWNrUmVzcG9uc2UpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5lbmFibGUuYnV0dG9uID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZW5hYmxlLmJ1dHRvbiA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zbmFja2JhcignUGxlYXNlIHRyeSBhZnRlciBzb21ldGltZS4nKTtcblx0XHR9XG5cdH1cblxuXHRzbmFja2Jhcihtc2cpIHtcblx0XHR0aGlzLnNuYWNrQmFyLm9wZW4obXNnLCAnY2xvc2UnLCB7XG5cdFx0XHR2ZXJ0aWNhbFBvc2l0aW9uOiAnYm90dG9tJyxcblx0XHRcdGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0Jyxcblx0XHRcdGR1cmF0aW9uOiAzMDAwXG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==