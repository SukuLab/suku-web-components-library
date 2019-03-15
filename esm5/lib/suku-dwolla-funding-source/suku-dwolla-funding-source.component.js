/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
var SukuDwollaFundingSourceComponent = /** @class */ (function () {
    function SukuDwollaFundingSourceComponent(snackBar) {
        this.snackBar = snackBar;
        this.iavtoken = 'hZ29TKB3CRpZ6z2MBPmMFYKKTbdbXLWAYUOt3A5niEoQs8mvqw';
        this.action = new EventEmitter();
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
        ((/** @type {?} */ (document.getElementById('start')))).disabled = true;
        if (document.getElementById('iavContainer')) {
            /** @type {?} */
            var list = document.getElementById('iavContainer');
            while (list.hasChildNodes()) {
                list.removeChild(list.firstChild);
            }
        }
        console.log('triggered', this.iavtoken);
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
                console.log('failed');
                ((/** @type {?} */ (document.getElementById('start')))).disabled = false;
            }
        }));
    };
    SukuDwollaFundingSourceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-dwolla-funding-source',
                    template: "<div class=\"col p-2\">\n    <div id=\"mainContainer\">\n      <input type=\"button\" class=\"suku-button\" id=\"start\" (click)=\"getDwollaHtml()\" value=\"Add Bank\">\n    </div>\n    <div id=\"iavContainer\" class=\"bg m-3\"></div>\n  </div>",
                    styles: [".suku-button{cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1px}.suku-button:hover{cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#a7bf2e!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1px}.suku-button:focus{box-shadow:none!important;outline:0!important}.dwolla-iav-link{font-weight:400;color:#a7bf2e!important;font-family:Poppins,sans-serif!important;letter-spacing:.2px}.dwolla-iav-button{cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1px}.dwolla-iav-back-button{width:auto!important;cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1.1px}.bg{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}"]
                }] }
    ];
    /** @nocollapse */
    SukuDwollaFundingSourceComponent.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
    SukuDwollaFundingSourceComponent.propDecorators = {
        iavtoken: [{ type: Input, args: ['iav-token',] }],
        action: [{ type: Output }]
    };
    return SukuDwollaFundingSourceComponent;
}());
export { SukuDwollaFundingSourceComponent };
if (false) {
    /** @type {?} */
    SukuDwollaFundingSourceComponent.prototype.iavtoken;
    /** @type {?} */
    SukuDwollaFundingSourceComponent.prototype.action;
    /**
     * @type {?}
     * @private
     */
    SukuDwollaFundingSourceComponent.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQ7SUFRRSwwQ0FBb0IsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUZyQixhQUFRLEdBQUcsb0RBQW9ELENBQUU7UUFDM0UsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDTyxDQUFDOzs7O0lBRTlDLG1EQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCx3REFBYTs7O0lBQWI7UUFDRSxDQUFDLG1CQUFrQixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFBLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JFLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRTs7Z0JBQ3JDLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztZQUNwRCxPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDbkM7U0FDRjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEMsU0FBUyxFQUFFLGNBQWM7WUFDekIsV0FBVyxFQUFFO2dCQUNYLHFFQUFxRTthQUN0RTtZQUNELGFBQWEsRUFBRSxJQUFJO1lBQ25CLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLHVCQUF1QixFQUFFLElBQUk7U0FDOUI7Ozs7O1FBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RGLElBQUksR0FBRyxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsbUJBQWtCLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUEsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDdkU7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXRDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsZ1FBQTBEOztpQkFFM0Q7Ozs7Z0JBTFEsV0FBVzs7OzJCQU9qQixLQUFLLFNBQUMsV0FBVzt5QkFDakIsTUFBTTs7SUFpQ1QsdUNBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQW5DWSxnQ0FBZ0M7OztJQUMzQyxvREFBcUY7O0lBQ3JGLGtEQUFzQzs7Ozs7SUFDMUIsb0RBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSB2YXIgZHdvbGxhOiBhbnk7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1RHdvbGxhRnVuZGluZ1NvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnaWF2LXRva2VuJykgaWF2dG9rZW4gPSAnaFoyOVRLQjNDUnBaNnoyTUJQbU1GWUtLVGJkYlhMV0FZVU90M0E1bmlFb1FzOG12cXcnIDtcbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZ2V0RHdvbGxhSHRtbCgpIHtcbiAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0JykpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lhdkNvbnRhaW5lcicpKSB7XG4gICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lhdkNvbnRhaW5lcicpO1xuICAgICAgd2hpbGUgKGxpc3QuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIGxpc3QucmVtb3ZlQ2hpbGQobGlzdC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3RyaWdnZXJlZCcsIHRoaXMuaWF2dG9rZW4pO1xuICAgICAgZHdvbGxhLmNvbmZpZ3VyZSgnc2FuZGJveCcpO1xuICAgICAgZHdvbGxhLmlhdi5zdGFydCh0aGlzLmlhdnRva2VuLCB7XG4gICAgICBjb250YWluZXI6ICdpYXZDb250YWluZXInLFxuICAgICAgc3R5bGVzaGVldHM6IFtcbiAgICAgICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvJnN1YnNldD1sYXRpbixsYXRpbi1leHQnLFxuICAgICAgXSxcbiAgICAgIG1pY3JvRGVwb3NpdHM6IHRydWUsXG4gICAgICBiYWNrQnV0dG9uOiB0cnVlLFxuICAgICAgZmFsbGJhY2tUb01pY3JvRGVwb3NpdHM6IHRydWVcbiAgICB9LCAoZXJyLCByZXMpID0+ICB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcgKyBKU09OLnN0cmluZ2lmeShlcnIpICsgJyAtLSBSZXNwb25zZTogJyArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnZmFpbGVkJyk7XG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKSkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59Il19