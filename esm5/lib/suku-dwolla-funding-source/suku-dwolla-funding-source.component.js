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
            dwolla.configure('sandbox');
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
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-button{cursor:pointer;border:2px solid!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:var(--suku-primary-font);letter-spacing:1px}.suku-button:hover{cursor:pointer;border:2px solid!important;padding:10px 32px!important;background-color:var(--suku-primary-color)!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:var(--suku-primary-font);letter-spacing:1px}.suku-button:focus{box-shadow:none!important;outline:0!important}.dwolla-iav-link{font-weight:400;color:var(--suku-primary-color)!important;font-family:var(--suku-primary-font);letter-spacing:.2px}.dwolla-iav-button{cursor:pointer;border:2px solid!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:var(--suku-primary-font);letter-spacing:1px}.dwolla-iav-back-button{width:auto!important;cursor:pointer;border:2px solid!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:var(--suku-primary-font);letter-spacing:1.1px}.bg{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQ7SUFvQ0MsMENBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUE1QnpDLFdBQU0sR0FBRztZQUNSLE1BQU0sRUFBRSxLQUFLO1NBQ2IsQ0FBQztRQXdCUSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVNLENBQUM7SUF4QjdDLHNCQUNJLHNEQUFROzs7O1FBRFo7WUFFQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFDRCxVQUFhLEdBQUc7WUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN0QixDQUFDOzs7T0FIQTtJQUtELHNCQUNJLDJEQUFhOzs7O1FBRGpCO1lBRUMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzVCLENBQUM7Ozs7O1FBQ0QsVUFBa0IsR0FBRztZQUNwQixJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNuRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNyQjtpQkFBTTtnQkFDTixJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDaEM7UUFDRixDQUFDOzs7T0FUQTs7OztJQWVELG1EQUFROzs7SUFBUixjQUFZLENBQUM7Ozs7SUFFYix3REFBYTs7O0lBQWI7UUFBQSxpQkFrQ0M7UUFqQ0EsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRTs7b0JBQ3RDLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztnQkFDcEQsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUNsQzthQUNEO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQ2YsSUFBSSxDQUFDLFNBQVMsRUFDZDtnQkFDQyxTQUFTLEVBQUUsY0FBYztnQkFDekIsV0FBVyxFQUFFLENBQUUscUVBQXFFLENBQUU7Z0JBQ3RGLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsdUJBQXVCLEVBQUUsSUFBSTthQUM3Qjs7Ozs7WUFDRCxVQUFDLEdBQUcsRUFBRSxHQUFHO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN0RixJQUFJLEdBQUcsRUFBRTs7d0JBQ0YsYUFBYSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUk7b0JBQzFELElBQUksYUFBYSxFQUFFO3dCQUNsQixLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7cUJBQzFCO3lCQUFNO3dCQUNOLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztxQkFDM0I7aUJBQ0Q7WUFDRixDQUFDLEVBQ0QsQ0FBQztTQUNGO2FBQU07WUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDNUM7SUFDRixDQUFDOzs7OztJQUVELG1EQUFROzs7O0lBQVIsVUFBUyxHQUFHO1FBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRTtZQUNoQyxnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLGtCQUFrQixFQUFFLE9BQU87WUFDM0IsUUFBUSxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDSixDQUFDOztnQkFsRkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLDRmQUEwRDs7aUJBRTFEOzs7O2dCQUxRLFdBQVc7OzsyQkFhbEIsS0FBSyxTQUFDLFdBQVc7Z0NBUWpCLEtBQUs7eUJBY0wsTUFBTTs7SUFpRFIsdUNBQUM7Q0FBQSxBQW5GRCxJQW1GQztTQTlFWSxnQ0FBZ0M7OztJQUM1QyxxREFBVTs7SUFDViwwREFBZTs7SUFDZixrREFFRTs7SUF3QkYsa0RBQXNDOzs7OztJQUUxQixvREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIHZhciBkd29sbGE6IGFueTtcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50LnNjc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUR3b2xsYUZ1bmRpbmdTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRfaWF2VG9rZW47XG5cdF92YWxpZFJlc3BvbnNlO1xuXHRlbmFibGUgPSB7XG5cdFx0YnV0dG9uOiBmYWxzZVxuXHR9O1xuXG5cdEBJbnB1dCgnaWF2LXRva2VuJylcblx0Z2V0IGlhdlRva2VuKCkge1xuXHRcdHJldHVybiB0aGlzLl9pYXZUb2tlbjtcblx0fVxuXHRzZXQgaWF2VG9rZW4odmFsKSB7XG5cdFx0dGhpcy5faWF2VG9rZW4gPSB2YWw7XG5cdH1cblxuXHRASW5wdXQoKVxuXHRnZXQgdmFsaWRSZXNwb25zZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fdmFsaWRSZXNwb25zZTtcblx0fVxuXHRzZXQgdmFsaWRSZXNwb25zZSh2YWwpIHtcblx0XHR0aGlzLl92YWxpZFJlc3BvbnNlID0gdmFsO1xuXHRcdGNvbnNvbGUubG9nKCdfdmFsaWRSZXNwb25zZScsIHRoaXMuX3ZhbGlkUmVzcG9uc2UpO1xuXHRcdGlmICh0aGlzLl92YWxpZFJlc3BvbnNlKSB7XG5cdFx0XHR0aGlzLmdldER3b2xsYUh0bWwoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zbmFja2JhcignUGxlYXNlIHdhaXQuLi4nKTtcblx0XHR9XG5cdH1cblxuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7fVxuXG5cdG5nT25Jbml0KCkge31cblxuXHRnZXREd29sbGFIdG1sKCkge1xuXHRcdGlmICh0aGlzLl9pYXZUb2tlbikge1xuXHRcdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpYXZDb250YWluZXInKSkge1xuXHRcdFx0XHRjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lhdkNvbnRhaW5lcicpO1xuXHRcdFx0XHR3aGlsZSAobGlzdC5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRcdFx0XHRsaXN0LnJlbW92ZUNoaWxkKGxpc3QuZmlyc3RDaGlsZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnNvbGUubG9nKCd0cmlnZ2VyZWQnLCB0aGlzLl9pYXZUb2tlbik7XG5cdFx0XHRkd29sbGEuY29uZmlndXJlKCdzYW5kYm94Jyk7XG5cdFx0XHRkd29sbGEuaWF2LnN0YXJ0KFxuXHRcdFx0XHR0aGlzLl9pYXZUb2tlbixcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNvbnRhaW5lcjogJ2lhdkNvbnRhaW5lcicsXG5cdFx0XHRcdFx0c3R5bGVzaGVldHM6IFsgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvJnN1YnNldD1sYXRpbixsYXRpbi1leHQnIF0sXG5cdFx0XHRcdFx0bWljcm9EZXBvc2l0czogdHJ1ZSxcblx0XHRcdFx0XHRiYWNrQnV0dG9uOiB0cnVlLFxuXHRcdFx0XHRcdGZhbGxiYWNrVG9NaWNyb0RlcG9zaXRzOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChlcnIsIHJlcykgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvcjogJyArIEpTT04uc3RyaW5naWZ5KGVycikgKyAnIC0tIFJlc3BvbnNlOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG5cdFx0XHRcdFx0aWYgKHJlcykge1xuXHRcdFx0XHRcdFx0Y29uc3QgY2hlY2tSZXNwb25zZSA9IHJlc1snX2xpbmtzJ11bJ2Z1bmRpbmctc291cmNlJ10uaHJlZjtcblx0XHRcdFx0XHRcdGlmIChjaGVja1Jlc3BvbnNlKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZW5hYmxlLmJ1dHRvbiA9IHRydWU7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmVuYWJsZS5idXR0b24gPSBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc25hY2tiYXIoJ1BsZWFzZSB0cnkgYWZ0ZXIgc29tZXRpbWUuJyk7XG5cdFx0fVxuXHR9XG5cblx0c25hY2tiYXIobXNnKSB7XG5cdFx0dGhpcy5zbmFja0Jhci5vcGVuKG1zZywgJ2Nsb3NlJywge1xuXHRcdFx0dmVydGljYWxQb3NpdGlvbjogJ2JvdHRvbScsXG5cdFx0XHRob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCcsXG5cdFx0XHRkdXJhdGlvbjogMzAwMFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=