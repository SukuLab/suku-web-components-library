/**
 * @fileoverview added by tsickle
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
    SukuDwollaFundingSourceComponent.prototype.action;
    /**
     * @type {?}
     * @private
     */
    SukuDwollaFundingSourceComponent.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQ7SUFvQ0MsMENBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUE1QnpDLFdBQU0sR0FBRztZQUNSLE1BQU0sRUFBRSxLQUFLO1NBQ2IsQ0FBQztRQXdCUSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVNLENBQUM7SUF4QjdDLHNCQUNJLHNEQUFROzs7O1FBRFo7WUFFQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFDRCxVQUFhLEdBQUc7WUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN0QixDQUFDOzs7T0FIQTtJQUtELHNCQUNJLDJEQUFhOzs7O1FBRGpCO1lBRUMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzVCLENBQUM7Ozs7O1FBQ0QsVUFBa0IsR0FBRztZQUNwQixJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNuRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNyQjtpQkFBTTtnQkFDTixJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDaEM7UUFDRixDQUFDOzs7T0FUQTs7OztJQWVELG1EQUFROzs7SUFBUixjQUFZLENBQUM7Ozs7SUFFYix3REFBYTs7O0lBQWI7UUFBQSxpQkFpQ0M7UUFoQ0EsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRTs7b0JBQ3RDLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztnQkFDcEQsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUNsQzthQUNEO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUNmLElBQUksQ0FBQyxTQUFTLEVBQ2Q7Z0JBQ0MsU0FBUyxFQUFFLGNBQWM7Z0JBQ3pCLFdBQVcsRUFBRSxDQUFFLHFFQUFxRSxDQUFFO2dCQUN0RixhQUFhLEVBQUUsSUFBSTtnQkFDbkIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLHVCQUF1QixFQUFFLElBQUk7YUFDN0I7Ozs7O1lBQ0QsVUFBQyxHQUFHLEVBQUUsR0FBRztnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdEYsSUFBSSxHQUFHLEVBQUU7O3dCQUNGLGFBQWEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJO29CQUMxRCxJQUFJLGFBQWEsRUFBRTt3QkFDbEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3FCQUMxQjt5QkFBTTt3QkFDTixLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7cUJBQzNCO2lCQUNEO1lBQ0YsQ0FBQyxFQUNELENBQUM7U0FDRjthQUFNO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQzVDO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxtREFBUTs7OztJQUFSLFVBQVMsR0FBRztRQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUU7WUFDaEMsZ0JBQWdCLEVBQUUsUUFBUTtZQUMxQixrQkFBa0IsRUFBRSxPQUFPO1lBQzNCLFFBQVEsRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBakZELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsNEJBQTRCO29CQUN0Qyw0ZkFBMEQ7O2lCQUUxRDs7OztnQkFMUSxXQUFXOzs7MkJBYWxCLEtBQUssU0FBQyxXQUFXO2dDQVFqQixLQUFLO3lCQWNMLE1BQU07O0lBZ0RSLHVDQUFDO0NBQUEsQUFsRkQsSUFrRkM7U0E3RVksZ0NBQWdDOzs7SUFDNUMscURBQVU7O0lBQ1YsMERBQWU7O0lBQ2Ysa0RBRUU7O0lBd0JGLGtEQUFzQzs7Ozs7SUFFMUIsb0RBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSB2YXIgZHdvbGxhOiBhbnk7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VEd29sbGFGdW5kaW5nU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0X2lhdlRva2VuO1xuXHRfdmFsaWRSZXNwb25zZTtcblx0ZW5hYmxlID0ge1xuXHRcdGJ1dHRvbjogZmFsc2Vcblx0fTtcblxuXHRASW5wdXQoJ2lhdi10b2tlbicpXG5cdGdldCBpYXZUb2tlbigpIHtcblx0XHRyZXR1cm4gdGhpcy5faWF2VG9rZW47XG5cdH1cblx0c2V0IGlhdlRva2VuKHZhbCkge1xuXHRcdHRoaXMuX2lhdlRva2VuID0gdmFsO1xuXHR9XG5cblx0QElucHV0KClcblx0Z2V0IHZhbGlkUmVzcG9uc2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3ZhbGlkUmVzcG9uc2U7XG5cdH1cblx0c2V0IHZhbGlkUmVzcG9uc2UodmFsKSB7XG5cdFx0dGhpcy5fdmFsaWRSZXNwb25zZSA9IHZhbDtcblx0XHRjb25zb2xlLmxvZygnX3ZhbGlkUmVzcG9uc2UnLCB0aGlzLl92YWxpZFJlc3BvbnNlKTtcblx0XHRpZiAodGhpcy5fdmFsaWRSZXNwb25zZSkge1xuXHRcdFx0dGhpcy5nZXREd29sbGFIdG1sKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc25hY2tiYXIoJ1BsZWFzZSB3YWl0Li4uJyk7XG5cdFx0fVxuXHR9XG5cblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge31cblxuXHRuZ09uSW5pdCgpIHt9XG5cblx0Z2V0RHdvbGxhSHRtbCgpIHtcblx0XHRpZiAodGhpcy5faWF2VG9rZW4pIHtcblx0XHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWF2Q29udGFpbmVyJykpIHtcblx0XHRcdFx0Y29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpYXZDb250YWluZXInKTtcblx0XHRcdFx0d2hpbGUgKGxpc3QuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0XHRcdFx0bGlzdC5yZW1vdmVDaGlsZChsaXN0LmZpcnN0Q2hpbGQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjb25zb2xlLmxvZygndHJpZ2dlcmVkJywgdGhpcy5faWF2VG9rZW4pO1xuXHRcdFx0ZHdvbGxhLmlhdi5zdGFydChcblx0XHRcdFx0dGhpcy5faWF2VG9rZW4sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjb250YWluZXI6ICdpYXZDb250YWluZXInLFxuXHRcdFx0XHRcdHN0eWxlc2hlZXRzOiBbICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0byZzdWJzZXQ9bGF0aW4sbGF0aW4tZXh0JyBdLFxuXHRcdFx0XHRcdG1pY3JvRGVwb3NpdHM6IHRydWUsXG5cdFx0XHRcdFx0YmFja0J1dHRvbjogdHJ1ZSxcblx0XHRcdFx0XHRmYWxsYmFja1RvTWljcm9EZXBvc2l0czogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQoZXJyLCByZXMpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3I6ICcgKyBKU09OLnN0cmluZ2lmeShlcnIpICsgJyAtLSBSZXNwb25zZTogJyArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuXHRcdFx0XHRcdGlmIChyZXMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGNoZWNrUmVzcG9uc2UgPSByZXNbJ19saW5rcyddWydmdW5kaW5nLXNvdXJjZSddLmhyZWY7XG5cdFx0XHRcdFx0XHRpZiAoY2hlY2tSZXNwb25zZSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmVuYWJsZS5idXR0b24gPSB0cnVlO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5lbmFibGUuYnV0dG9uID0gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNuYWNrYmFyKCdQbGVhc2UgdHJ5IGFmdGVyIHNvbWV0aW1lLicpO1xuXHRcdH1cblx0fVxuXG5cdHNuYWNrYmFyKG1zZykge1xuXHRcdHRoaXMuc25hY2tCYXIub3Blbihtc2csICdjbG9zZScsIHtcblx0XHRcdHZlcnRpY2FsUG9zaXRpb246ICdib3R0b20nLFxuXHRcdFx0aG9yaXpvbnRhbFBvc2l0aW9uOiAncmlnaHQnLFxuXHRcdFx0ZHVyYXRpb246IDMwMDBcblx0XHR9KTtcblx0fVxufVxuIl19