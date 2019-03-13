/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
var SukuDwollaFundingSourceComponent = /** @class */ (function () {
    function SukuDwollaFundingSourceComponent(snackBar) {
        this.snackBar = snackBar;
        this.iavtoken = 'hZ29TKB3CRpZ6z2MBPmMFYKKTbdbXLWAYUOt3A5niEoQs8mvqw';
    }
    /**
     * @return {?}
     */
    SukuDwollaFundingSourceComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SukuDwollaFundingSourceComponent.prototype.getDwollaHtml = /**
     * @return {?}
     */
    function () {
        console.log('triggered');
        dwolla.configure('sandbox');
        dwolla.iav.start(this.iavtoken, {
            container: 'iavContainer',
            stylesheets: [
                'https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext',
            ],
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
            if (err) {
                // this.snackbar(err.message);
            }
        }));
    };
    SukuDwollaFundingSourceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-dwolla-funding-source',
                    template: "<div class=\"col p-2\">\r\n  <div id=\"mainContainer\">\r\n    <input type=\"button\" class=\"suku-button\" id=\"start\" (click)=\"getDwollaHtml()\" value=\"Add Bank\">\r\n  </div>\r\n  <div id=\"iavContainer\" class=\"bg m-3\"></div>\r\n</div>",
                    styles: [".suku-button{cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1px}.suku-button:hover{cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#a7bf2e!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1px}.suku-button:focus{box-shadow:none!important;outline:0!important}.dwolla-iav-link{font-weight:400;color:#a7bf2e!important;font-family:Poppins,sans-serif!important;letter-spacing:.2px}.dwolla-iav-button{cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1px}.dwolla-iav-back-button{width:auto!important;cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1.1px}.bg{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}"]
                }] }
    ];
    /** @nocollapse */
    SukuDwollaFundingSourceComponent.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
    SukuDwollaFundingSourceComponent.propDecorators = {
        iavtoken: [{ type: Input, args: ['iav-token',] }]
    };
    return SukuDwollaFundingSourceComponent;
}());
export { SukuDwollaFundingSourceComponent };
if (false) {
    /** @type {?} */
    SukuDwollaFundingSourceComponent.prototype.iavtoken;
    /**
     * @type {?}
     * @private
     */
    SukuDwollaFundingSourceComponent.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hEO0lBUUUsMENBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFGckIsYUFBUSxHQUFHLG9EQUFvRCxDQUFFO0lBRXhDLENBQUM7Ozs7SUFFOUMsbURBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUVELHdEQUFhOzs7SUFBYjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hDLFNBQVMsRUFBRSxjQUFjO1lBQ3pCLFdBQVcsRUFBRTtnQkFDWCxxRUFBcUU7YUFDdEU7WUFDRCxhQUFhLEVBQUUsSUFBSTtZQUNuQixVQUFVLEVBQUUsSUFBSTtZQUNoQix1QkFBdUIsRUFBRSxJQUFJO1NBQzlCOzs7OztRQUFFLFVBQVMsR0FBRyxFQUFFLEdBQUc7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEYsSUFBRyxHQUFHLEVBQUU7Z0JBQ04sOEJBQThCO2FBQy9CO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLGdRQUEwRDs7aUJBRTNEOzs7O2dCQUxRLFdBQVc7OzsyQkFPakIsS0FBSyxTQUFDLFdBQVc7O0lBa0NwQix1Q0FBQztDQUFBLEFBeENELElBd0NDO1NBbkNZLGdDQUFnQzs7O0lBQzNDLG9EQUFxRjs7Ozs7SUFFekUsb0RBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmRlY2xhcmUgdmFyIGR3b2xsYTogYW55O1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LWR3b2xsYS1mdW5kaW5nLXNvdXJjZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWR3b2xsYS1mdW5kaW5nLXNvdXJjZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1RHdvbGxhRnVuZGluZ1NvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCdpYXYtdG9rZW4nKSBpYXZ0b2tlbiA9ICdoWjI5VEtCM0NScFo2ejJNQlBtTUZZS0tUYmRiWExXQVlVT3QzQTVuaUVvUXM4bXZxdycgO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgZ2V0RHdvbGxhSHRtbCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCd0cmlnZ2VyZWQnKTtcclxuICAgICAgZHdvbGxhLmNvbmZpZ3VyZSgnc2FuZGJveCcpO1xyXG4gICAgICBkd29sbGEuaWF2LnN0YXJ0KHRoaXMuaWF2dG9rZW4sIHtcclxuICAgICAgY29udGFpbmVyOiAnaWF2Q29udGFpbmVyJyxcclxuICAgICAgc3R5bGVzaGVldHM6IFtcclxuICAgICAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG8mc3Vic2V0PWxhdGluLGxhdGluLWV4dCcsXHJcbiAgICAgIF0sXHJcbiAgICAgIG1pY3JvRGVwb3NpdHM6IHRydWUsXHJcbiAgICAgIGJhY2tCdXR0b246IHRydWUsXHJcbiAgICAgIGZhbGxiYWNrVG9NaWNyb0RlcG9zaXRzOiB0cnVlXHJcbiAgICB9LCBmdW5jdGlvbihlcnIsIHJlcykge1xyXG4gICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcgKyBKU09OLnN0cmluZ2lmeShlcnIpICsgJyAtLSBSZXNwb25zZTogJyArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG4gICAgICBpZihlcnIpIHtcclxuICAgICAgICAvLyB0aGlzLnNuYWNrYmFyKGVyci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBzbmFja2Jhcihtc2cpIHtcclxuXHQvLyBcdHRoaXMuc25hY2tCYXIub3Blbihtc2csICdjbG9zZScsIHtcclxuXHQvLyBcdFx0dmVydGljYWxQb3NpdGlvbjogJ2JvdHRvbScsXHJcblx0Ly8gXHRcdGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0JyxcclxuLy8gXHRcdGR1cmF0aW9uOiAzNTAwXHJcblx0Ly8gXHR9KTtcclxuXHQvLyB9XHJcblxyXG59XHJcbiJdfQ==