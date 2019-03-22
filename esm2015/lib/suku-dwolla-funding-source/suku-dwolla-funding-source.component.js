/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
export class SukuDwollaFundingSourceComponent {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    getDwollaHtml() {
        if (this.iavtoken) {
            ((/** @type {?} */ (document.getElementById('start')))).disabled = true;
            if (document.getElementById('iavContainer')) {
                /** @type {?} */
                const list = document.getElementById('iavContainer');
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
            (err, res) => {
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
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    snackbar(msg) {
        this.snackBar.open(msg, 'close', {
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            duration: 3500
        });
    }
}
SukuDwollaFundingSourceComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-dwolla-funding-source',
                template: "<div class=\"col p-2\">\r\n    <div id=\"mainContainer\">\r\n      <input type=\"button\" class=\"suku-button\" id=\"start\" (click)=\"getDwollaHtml()\" value=\"Add Bank\">\r\n    </div>\r\n    <div id=\"iavContainer\" class=\"bg m-3\"></div>\r\n  </div>",
                styles: [".suku-button{cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1px}.suku-button:hover{cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#a7bf2e!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1px}.suku-button:focus{box-shadow:none!important;outline:0!important}.dwolla-iav-link{font-weight:400;color:#a7bf2e!important;font-family:Poppins,sans-serif!important;letter-spacing:.2px}.dwolla-iav-button{cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1px}.dwolla-iav-back-button{width:auto!important;cursor:pointer;border:2px solid #a7bf2e!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:Poppins,sans-serif!important;letter-spacing:1.1px}.bg{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}"]
            }] }
];
/** @nocollapse */
SukuDwollaFundingSourceComponent.ctorParameters = () => [
    { type: MatSnackBar }
];
SukuDwollaFundingSourceComponent.propDecorators = {
    iavtoken: [{ type: Input, args: ['iav-token',] }],
    action: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNaEQsTUFBTSxPQUFPLGdDQUFnQzs7OztJQUc1QyxZQUFvQixRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBRC9CLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ00sQ0FBQzs7OztJQUU3QyxRQUFRLEtBQUksQ0FBQzs7OztJQUViLGFBQWE7UUFDWixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsQ0FBQyxtQkFBa0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBQSxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyRSxJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUU7O3NCQUN0QyxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUM7Z0JBQ3BELE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO29CQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDbEM7YUFDRDtZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUNmLElBQUksQ0FBQyxRQUFRLEVBQ2I7Z0JBQ0MsU0FBUyxFQUFFLGNBQWM7Z0JBQ3pCLFdBQVcsRUFBRSxDQUFFLHFFQUFxRSxDQUFFO2dCQUN0RixhQUFhLEVBQUUsSUFBSTtnQkFDbkIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLHVCQUF1QixFQUFFLElBQUk7YUFDN0I7Ozs7O1lBQ0QsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RGLElBQUksR0FBRyxFQUFFO29CQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3RCLENBQUMsbUJBQWtCLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUEsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7aUJBQ3RFO1lBQ0YsQ0FBQyxFQUNELENBQUM7U0FDRjthQUFNO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQzVDO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsR0FBRztRQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUU7WUFDaEMsZ0JBQWdCLEVBQUUsUUFBUTtZQUMxQixrQkFBa0IsRUFBRSxPQUFPO1lBQzNCLFFBQVEsRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7O1lBbkRELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QywwUUFBMEQ7O2FBRTFEOzs7O1lBTFEsV0FBVzs7O3VCQU9sQixLQUFLLFNBQUMsV0FBVztxQkFDakIsTUFBTTs7OztJQURQLG9EQUE2Qjs7SUFDN0Isa0RBQXNDOzs7OztJQUMxQixvREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmRlY2xhcmUgdmFyIGR3b2xsYTogYW55O1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LWR3b2xsYS1mdW5kaW5nLXNvdXJjZScsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50LnNjc3MnIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VEd29sbGFGdW5kaW5nU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoJ2lhdi10b2tlbicpIGlhdnRva2VuO1xyXG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHJcblx0Z2V0RHdvbGxhSHRtbCgpIHtcclxuXHRcdGlmICh0aGlzLmlhdnRva2VuKSB7XHJcblx0XHRcdCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKSkuZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lhdkNvbnRhaW5lcicpKSB7XHJcblx0XHRcdFx0Y29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpYXZDb250YWluZXInKTtcclxuXHRcdFx0XHR3aGlsZSAobGlzdC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuXHRcdFx0XHRcdGxpc3QucmVtb3ZlQ2hpbGQobGlzdC5maXJzdENoaWxkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc29sZS5sb2coJ3RyaWdnZXJlZCcsIHRoaXMuaWF2dG9rZW4pO1xyXG5cdFx0XHRkd29sbGEuY29uZmlndXJlKCdzYW5kYm94Jyk7XHJcblx0XHRcdGR3b2xsYS5pYXYuc3RhcnQoXHJcblx0XHRcdFx0dGhpcy5pYXZ0b2tlbixcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb250YWluZXI6ICdpYXZDb250YWluZXInLFxyXG5cdFx0XHRcdFx0c3R5bGVzaGVldHM6IFsgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvJnN1YnNldD1sYXRpbixsYXRpbi1leHQnIF0sXHJcblx0XHRcdFx0XHRtaWNyb0RlcG9zaXRzOiB0cnVlLFxyXG5cdFx0XHRcdFx0YmFja0J1dHRvbjogdHJ1ZSxcclxuXHRcdFx0XHRcdGZhbGxiYWNrVG9NaWNyb0RlcG9zaXRzOiB0cnVlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyLCByZXMpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvcjogJyArIEpTT04uc3RyaW5naWZ5KGVycikgKyAnIC0tIFJlc3BvbnNlOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblx0XHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuXHRcdFx0XHRcdFx0KDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc25hY2tiYXIoJ1BsZWFzZSB0cnkgYWZ0ZXIgc29tZXRpbWUuJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzbmFja2Jhcihtc2cpIHtcclxuXHRcdHRoaXMuc25hY2tCYXIub3Blbihtc2csICdjbG9zZScsIHtcclxuXHRcdFx0dmVydGljYWxQb3NpdGlvbjogJ2JvdHRvbScsXHJcblx0XHRcdGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0JyxcclxuXHRcdFx0ZHVyYXRpb246IDM1MDBcclxuXHRcdH0pO1xyXG5cdH1cclxufSJdfQ==