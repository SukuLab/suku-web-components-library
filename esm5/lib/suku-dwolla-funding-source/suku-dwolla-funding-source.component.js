/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<div class=\"col p-2\">\r\n  <div id=\"mainContainer\">\r\n    <p class=\"mt-2 note pl-3 text-center\"><b>Note:</b> Adding a funding resource requires a third-party UI, which may\r\n      take a few moments to load.</p>\r\n  </div>\r\n  <div class=\"col pt-3 pb-2 bg m-3\">\r\n    <div id=\"iavContainer\"></div>\r\n    <div class=\"col text-center pb-4\">\r\n      <button class=\"suku-button\" (click)=\"action.emit()\" *ngIf=\"enable?.button \">Return to Funding Sources</button>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [".suku-button{cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1px}.suku-button:hover{cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#a7bf2e!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1px}.suku-button:focus{box-shadow:none!important;outline:0!important}.dwolla-iav-link{font-weight:400;color:#a7bf2e!important;font-family:Poppins,sans-serif!important;letter-spacing:.2px}.dwolla-iav-button{cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1px}.dwolla-iav-back-button{width:auto!important;cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1.1px}.bg{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQ7SUFvQ0MsMENBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUE1QnpDLFdBQU0sR0FBRztZQUNSLE1BQU0sRUFBRSxLQUFLO1NBQ2IsQ0FBQztRQXdCUSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVNLENBQUM7SUF4QjdDLHNCQUNJLHNEQUFROzs7O1FBRFo7WUFFQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFDRCxVQUFhLEdBQUc7WUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN0QixDQUFDOzs7T0FIQTtJQUtELHNCQUNJLDJEQUFhOzs7O1FBRGpCO1lBRUMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzVCLENBQUM7Ozs7O1FBQ0QsVUFBa0IsR0FBRztZQUNwQixJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNuRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNyQjtpQkFBTTtnQkFDTixJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDaEM7UUFDRixDQUFDOzs7T0FUQTs7OztJQWVELG1EQUFROzs7SUFBUixjQUFZLENBQUM7Ozs7SUFFYix3REFBYTs7O0lBQWI7UUFBQSxpQkFrQ0M7UUFqQ0EsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRTs7b0JBQ3RDLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztnQkFDcEQsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUNsQzthQUNEO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQ2YsSUFBSSxDQUFDLFNBQVMsRUFDZDtnQkFDQyxTQUFTLEVBQUUsY0FBYztnQkFDekIsV0FBVyxFQUFFLENBQUUscUVBQXFFLENBQUU7Z0JBQ3RGLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsdUJBQXVCLEVBQUUsSUFBSTthQUM3Qjs7Ozs7WUFDRCxVQUFDLEdBQUcsRUFBRSxHQUFHO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN0RixJQUFJLEdBQUcsRUFBRTs7d0JBQ0YsYUFBYSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUk7b0JBQzFELElBQUksYUFBYSxFQUFFO3dCQUNsQixLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7cUJBQzFCO3lCQUFNO3dCQUNOLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztxQkFDM0I7aUJBQ0Q7WUFDRixDQUFDLEVBQ0QsQ0FBQztTQUNGO2FBQU07WUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDNUM7SUFDRixDQUFDOzs7OztJQUVELG1EQUFROzs7O0lBQVIsVUFBUyxHQUFHO1FBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRTtZQUNoQyxnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLGtCQUFrQixFQUFFLE9BQU87WUFDM0IsUUFBUSxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDSixDQUFDOztnQkFsRkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLGtoQkFBMEQ7O2lCQUUxRDs7OztnQkFMUSxXQUFXOzs7MkJBYWxCLEtBQUssU0FBQyxXQUFXO2dDQVFqQixLQUFLO3lCQWNMLE1BQU07O0lBaURSLHVDQUFDO0NBQUEsQUFuRkQsSUFtRkM7U0E5RVksZ0NBQWdDOzs7SUFDNUMscURBQVU7O0lBQ1YsMERBQWU7O0lBQ2Ysa0RBRUU7O0lBd0JGLGtEQUFzQzs7Ozs7SUFFMUIsb0RBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5kZWNsYXJlIHZhciBkd29sbGE6IGFueTtcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWR3b2xsYS1mdW5kaW5nLXNvdXJjZS5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC5zY3NzJyBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1RHdvbGxhRnVuZGluZ1NvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0X2lhdlRva2VuO1xyXG5cdF92YWxpZFJlc3BvbnNlO1xyXG5cdGVuYWJsZSA9IHtcclxuXHRcdGJ1dHRvbjogZmFsc2VcclxuXHR9O1xyXG5cclxuXHRASW5wdXQoJ2lhdi10b2tlbicpXHJcblx0Z2V0IGlhdlRva2VuKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2lhdlRva2VuO1xyXG5cdH1cclxuXHRzZXQgaWF2VG9rZW4odmFsKSB7XHJcblx0XHR0aGlzLl9pYXZUb2tlbiA9IHZhbDtcclxuXHR9XHJcblxyXG5cdEBJbnB1dCgpXHJcblx0Z2V0IHZhbGlkUmVzcG9uc2UoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdmFsaWRSZXNwb25zZTtcclxuXHR9XHJcblx0c2V0IHZhbGlkUmVzcG9uc2UodmFsKSB7XHJcblx0XHR0aGlzLl92YWxpZFJlc3BvbnNlID0gdmFsO1xyXG5cdFx0Y29uc29sZS5sb2coJ192YWxpZFJlc3BvbnNlJywgdGhpcy5fdmFsaWRSZXNwb25zZSk7XHJcblx0XHRpZiAodGhpcy5fdmFsaWRSZXNwb25zZSkge1xyXG5cdFx0XHR0aGlzLmdldER3b2xsYUh0bWwoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc25hY2tiYXIoJ1BsZWFzZSB3YWl0Li4uJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cclxuXHRnZXREd29sbGFIdG1sKCkge1xyXG5cdFx0aWYgKHRoaXMuX2lhdlRva2VuKSB7XHJcblx0XHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWF2Q29udGFpbmVyJykpIHtcclxuXHRcdFx0XHRjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lhdkNvbnRhaW5lcicpO1xyXG5cdFx0XHRcdHdoaWxlIChsaXN0Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG5cdFx0XHRcdFx0bGlzdC5yZW1vdmVDaGlsZChsaXN0LmZpcnN0Q2hpbGQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zb2xlLmxvZygndHJpZ2dlcmVkJywgdGhpcy5faWF2VG9rZW4pO1xyXG5cdFx0XHRkd29sbGEuY29uZmlndXJlKCdzYW5kYm94Jyk7XHJcblx0XHRcdGR3b2xsYS5pYXYuc3RhcnQoXHJcblx0XHRcdFx0dGhpcy5faWF2VG9rZW4sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29udGFpbmVyOiAnaWF2Q29udGFpbmVyJyxcclxuXHRcdFx0XHRcdHN0eWxlc2hlZXRzOiBbICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0byZzdWJzZXQ9bGF0aW4sbGF0aW4tZXh0JyBdLFxyXG5cdFx0XHRcdFx0bWljcm9EZXBvc2l0czogdHJ1ZSxcclxuXHRcdFx0XHRcdGJhY2tCdXR0b246IHRydWUsXHJcblx0XHRcdFx0XHRmYWxsYmFja1RvTWljcm9EZXBvc2l0czogdHJ1ZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0KGVyciwgcmVzKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3I6ICcgKyBKU09OLnN0cmluZ2lmeShlcnIpICsgJyAtLSBSZXNwb25zZTogJyArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG5cdFx0XHRcdFx0aWYgKHJlcykge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBjaGVja1Jlc3BvbnNlID0gcmVzWydfbGlua3MnXVsnZnVuZGluZy1zb3VyY2UnXS5ocmVmO1xyXG5cdFx0XHRcdFx0XHRpZiAoY2hlY2tSZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZW5hYmxlLmJ1dHRvbiA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5lbmFibGUuYnV0dG9uID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNuYWNrYmFyKCdQbGVhc2UgdHJ5IGFmdGVyIHNvbWV0aW1lLicpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c25hY2tiYXIobXNnKSB7XHJcblx0XHR0aGlzLnNuYWNrQmFyLm9wZW4obXNnLCAnY2xvc2UnLCB7XHJcblx0XHRcdHZlcnRpY2FsUG9zaXRpb246ICdib3R0b20nLFxyXG5cdFx0XHRob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCcsXHJcblx0XHRcdGR1cmF0aW9uOiAzMDAwXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19