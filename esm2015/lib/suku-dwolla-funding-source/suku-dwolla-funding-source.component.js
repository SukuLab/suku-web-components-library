/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
export class SukuDwollaFundingSourceComponent {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.iavtoken = 'hZ29TKB3CRpZ6z2MBPmMFYKKTbdbXLWAYUOt3A5niEoQs8mvqw';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    getDwollaHtml() {
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
    }
}
SukuDwollaFundingSourceComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-dwolla-funding-source',
                template: "<div class=\"col p-2\">\r\n  <div id=\"mainContainer\">\r\n    <input type=\"button\" class=\"suku-button\" id=\"start\" (click)=\"getDwollaHtml()\" value=\"Add Bank\">\r\n  </div>\r\n  <div id=\"iavContainer\" class=\"bg m-3\"></div>\r\n</div>",
                styles: [".suku-button{cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1px}.suku-button:hover{cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#a7bf2e!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1px}.suku-button:focus{box-shadow:none!important;outline:0!important}.dwolla-iav-link{font-weight:400;color:#a7bf2e!important;font-family:Poppins,sans-serif!important;letter-spacing:.2px}.dwolla-iav-button{cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1px}.dwolla-iav-back-button{width:auto!important;cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1.1px}.bg{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}"]
            }] }
];
/** @nocollapse */
SukuDwollaFundingSourceComponent.ctorParameters = () => [
    { type: MatSnackBar }
];
SukuDwollaFundingSourceComponent.propDecorators = {
    iavtoken: [{ type: Input, args: ['iav-token',] }]
};
if (false) {
    /** @type {?} */
    SukuDwollaFundingSourceComponent.prototype.iavtoken;
    /**
     * @type {?}
     * @private
     */
    SukuDwollaFundingSourceComponent.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTWhELE1BQU0sT0FBTyxnQ0FBZ0M7Ozs7SUFHM0MsWUFBb0IsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUZyQixhQUFRLEdBQUcsb0RBQW9ELENBQUU7SUFFeEMsQ0FBQzs7OztJQUU5QyxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQyxTQUFTLEVBQUUsY0FBYztZQUN6QixXQUFXLEVBQUU7Z0JBQ1gscUVBQXFFO2FBQ3RFO1lBQ0QsYUFBYSxFQUFFLElBQUk7WUFDbkIsVUFBVSxFQUFFLElBQUk7WUFDaEIsdUJBQXVCLEVBQUUsSUFBSTtTQUM5Qjs7Ozs7UUFBRSxVQUFTLEdBQUcsRUFBRSxHQUFHO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RGLElBQUcsR0FBRyxFQUFFO2dCQUNOLDhCQUE4QjthQUMvQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBOUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxnUUFBMEQ7O2FBRTNEOzs7O1lBTFEsV0FBVzs7O3VCQU9qQixLQUFLLFNBQUMsV0FBVzs7OztJQUFsQixvREFBcUY7Ozs7O0lBRXpFLG9EQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5kZWNsYXJlIHZhciBkd29sbGE6IGFueTtcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWR3b2xsYS1mdW5kaW5nLXNvdXJjZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUR3b2xsYUZ1bmRpbmdTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgnaWF2LXRva2VuJykgaWF2dG9rZW4gPSAnaFoyOVRLQjNDUnBaNnoyTUJQbU1GWUtLVGJkYlhMV0FZVU90M0E1bmlFb1FzOG12cXcnIDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGdldER3b2xsYUh0bWwoKSB7XHJcbiAgICBjb25zb2xlLmxvZygndHJpZ2dlcmVkJyk7XHJcbiAgICAgIGR3b2xsYS5jb25maWd1cmUoJ3NhbmRib3gnKTtcclxuICAgICAgZHdvbGxhLmlhdi5zdGFydCh0aGlzLmlhdnRva2VuLCB7XHJcbiAgICAgIGNvbnRhaW5lcjogJ2lhdkNvbnRhaW5lcicsXHJcbiAgICAgIHN0eWxlc2hlZXRzOiBbXHJcbiAgICAgICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvJnN1YnNldD1sYXRpbixsYXRpbi1leHQnLFxyXG4gICAgICBdLFxyXG4gICAgICBtaWNyb0RlcG9zaXRzOiB0cnVlLFxyXG4gICAgICBiYWNrQnV0dG9uOiB0cnVlLFxyXG4gICAgICBmYWxsYmFja1RvTWljcm9EZXBvc2l0czogdHJ1ZVxyXG4gICAgfSwgZnVuY3Rpb24oZXJyLCByZXMpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyKSArICcgLS0gUmVzcG9uc2U6ICcgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgaWYoZXJyKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zbmFja2JhcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gc25hY2tiYXIobXNnKSB7XHJcblx0Ly8gXHR0aGlzLnNuYWNrQmFyLm9wZW4obXNnLCAnY2xvc2UnLCB7XHJcblx0Ly8gXHRcdHZlcnRpY2FsUG9zaXRpb246ICdib3R0b20nLFxyXG5cdC8vIFx0XHRob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCcsXHJcbi8vIFx0XHRkdXJhdGlvbjogMzUwMFxyXG5cdC8vIFx0fSk7XHJcblx0Ly8gfVxyXG5cclxufVxyXG4iXX0=