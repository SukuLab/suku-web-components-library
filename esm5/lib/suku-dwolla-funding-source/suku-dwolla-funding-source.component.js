/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
var SukuDwollaFundingSourceComponent = /** @class */ (function () {
    function SukuDwollaFundingSourceComponent(snackBar) {
        this.snackBar = snackBar;
        this.action = new EventEmitter();
    }
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
        if (this.iavtoken) {
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
                if (err) {
                    console.log('failed');
                    ((/** @type {?} */ (document.getElementById('start')))).disabled = false;
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
            duration: 3500
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQ7SUFRQywwQ0FBb0IsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUQvQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNNLENBQUM7Ozs7SUFFN0MsbURBQVE7OztJQUFSLGNBQVksQ0FBQzs7OztJQUViLHdEQUFhOzs7SUFBYjtRQUNDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixDQUFDLG1CQUFrQixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFBLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JFLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRTs7b0JBQ3RDLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztnQkFDcEQsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUNsQzthQUNEO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQ2YsSUFBSSxDQUFDLFFBQVEsRUFDYjtnQkFDQyxTQUFTLEVBQUUsY0FBYztnQkFDekIsV0FBVyxFQUFFLENBQUUscUVBQXFFLENBQUU7Z0JBQ3RGLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsdUJBQXVCLEVBQUUsSUFBSTthQUM3Qjs7Ozs7WUFDRCxVQUFDLEdBQUcsRUFBRSxHQUFHO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN0RixJQUFJLEdBQUcsRUFBRTtvQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0QixDQUFDLG1CQUFrQixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFBLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2lCQUN0RTtZQUNGLENBQUMsRUFDRCxDQUFDO1NBQ0Y7YUFBTTtZQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUM1QztJQUNGLENBQUM7Ozs7O0lBRUQsbURBQVE7Ozs7SUFBUixVQUFTLEdBQUc7UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsa0JBQWtCLEVBQUUsT0FBTztZQUMzQixRQUFRLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztJQUNKLENBQUM7O2dCQW5ERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsZ1FBQTBEOztpQkFFMUQ7Ozs7Z0JBTFEsV0FBVzs7OzJCQU9sQixLQUFLLFNBQUMsV0FBVzt5QkFDakIsTUFBTTs7SUE2Q1IsdUNBQUM7Q0FBQSxBQXBERCxJQW9EQztTQS9DWSxnQ0FBZ0M7OztJQUM1QyxvREFBNkI7O0lBQzdCLGtEQUFzQzs7Ozs7SUFDMUIsb0RBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSB2YXIgZHdvbGxhOiBhbnk7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VEd29sbGFGdW5kaW5nU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCdpYXYtdG9rZW4nKSBpYXZ0b2tlbjtcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHt9XG5cblx0bmdPbkluaXQoKSB7fVxuXG5cdGdldER3b2xsYUh0bWwoKSB7XG5cdFx0aWYgKHRoaXMuaWF2dG9rZW4pIHtcblx0XHRcdCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKSkuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpYXZDb250YWluZXInKSkge1xuXHRcdFx0XHRjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lhdkNvbnRhaW5lcicpO1xuXHRcdFx0XHR3aGlsZSAobGlzdC5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRcdFx0XHRsaXN0LnJlbW92ZUNoaWxkKGxpc3QuZmlyc3RDaGlsZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnNvbGUubG9nKCd0cmlnZ2VyZWQnLCB0aGlzLmlhdnRva2VuKTtcblx0XHRcdGR3b2xsYS5jb25maWd1cmUoJ3NhbmRib3gnKTtcblx0XHRcdGR3b2xsYS5pYXYuc3RhcnQoXG5cdFx0XHRcdHRoaXMuaWF2dG9rZW4sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjb250YWluZXI6ICdpYXZDb250YWluZXInLFxuXHRcdFx0XHRcdHN0eWxlc2hlZXRzOiBbICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0byZzdWJzZXQ9bGF0aW4sbGF0aW4tZXh0JyBdLFxuXHRcdFx0XHRcdG1pY3JvRGVwb3NpdHM6IHRydWUsXG5cdFx0XHRcdFx0YmFja0J1dHRvbjogdHJ1ZSxcblx0XHRcdFx0XHRmYWxsYmFja1RvTWljcm9EZXBvc2l0czogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQoZXJyLCByZXMpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3I6ICcgKyBKU09OLnN0cmluZ2lmeShlcnIpICsgJyAtLSBSZXNwb25zZTogJyArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuXHRcdFx0XHRcdGlmIChlcnIpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcblx0XHRcdFx0XHRcdCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKSkuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc25hY2tiYXIoJ1BsZWFzZSB0cnkgYWZ0ZXIgc29tZXRpbWUuJyk7XG5cdFx0fVxuXHR9XG5cblx0c25hY2tiYXIobXNnKSB7XG5cdFx0dGhpcy5zbmFja0Jhci5vcGVuKG1zZywgJ2Nsb3NlJywge1xuXHRcdFx0dmVydGljYWxQb3NpdGlvbjogJ2JvdHRvbScsXG5cdFx0XHRob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCcsXG5cdFx0XHRkdXJhdGlvbjogMzUwMFxuXHRcdH0pO1xuXHR9XG59Il19