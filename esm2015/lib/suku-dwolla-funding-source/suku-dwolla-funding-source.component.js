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
                template: "<div class=\"col p-2\">\n    <div id=\"mainContainer\">\n      <input type=\"button\" class=\"suku-button\" id=\"start\" (click)=\"getDwollaHtml()\" value=\"Add Bank\">\n    </div>\n    <div id=\"iavContainer\" class=\"bg m-3\"></div>\n  </div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNaEQsTUFBTSxPQUFPLGdDQUFnQzs7OztJQUc1QyxZQUFvQixRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBRC9CLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ00sQ0FBQzs7OztJQUU3QyxRQUFRLEtBQUksQ0FBQzs7OztJQUViLGFBQWE7UUFDWixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsQ0FBQyxtQkFBa0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBQSxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyRSxJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUU7O3NCQUN0QyxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUM7Z0JBQ3BELE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO29CQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDbEM7YUFDRDtZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUNmLElBQUksQ0FBQyxRQUFRLEVBQ2I7Z0JBQ0MsU0FBUyxFQUFFLGNBQWM7Z0JBQ3pCLFdBQVcsRUFBRSxDQUFFLHFFQUFxRSxDQUFFO2dCQUN0RixhQUFhLEVBQUUsSUFBSTtnQkFDbkIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLHVCQUF1QixFQUFFLElBQUk7YUFDN0I7Ozs7O1lBQ0QsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RGLElBQUksR0FBRyxFQUFFO29CQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3RCLENBQUMsbUJBQWtCLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUEsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7aUJBQ3RFO1lBQ0YsQ0FBQyxFQUNELENBQUM7U0FDRjthQUFNO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQzVDO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsR0FBRztRQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUU7WUFDaEMsZ0JBQWdCLEVBQUUsUUFBUTtZQUMxQixrQkFBa0IsRUFBRSxPQUFPO1lBQzNCLFFBQVEsRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7O1lBbkRELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxnUUFBMEQ7O2FBRTFEOzs7O1lBTFEsV0FBVzs7O3VCQU9sQixLQUFLLFNBQUMsV0FBVztxQkFDakIsTUFBTTs7OztJQURQLG9EQUE2Qjs7SUFDN0Isa0RBQXNDOzs7OztJQUMxQixvREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIHZhciBkd29sbGE6IGFueTtcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50LnNjc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUR3b2xsYUZ1bmRpbmdTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoJ2lhdi10b2tlbicpIGlhdnRva2VuO1xuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge31cblxuXHRuZ09uSW5pdCgpIHt9XG5cblx0Z2V0RHdvbGxhSHRtbCgpIHtcblx0XHRpZiAodGhpcy5pYXZ0b2tlbikge1xuXHRcdFx0KDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpKS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lhdkNvbnRhaW5lcicpKSB7XG5cdFx0XHRcdGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWF2Q29udGFpbmVyJyk7XG5cdFx0XHRcdHdoaWxlIChsaXN0Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdFx0XHRcdGxpc3QucmVtb3ZlQ2hpbGQobGlzdC5maXJzdENoaWxkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y29uc29sZS5sb2coJ3RyaWdnZXJlZCcsIHRoaXMuaWF2dG9rZW4pO1xuXHRcdFx0ZHdvbGxhLmNvbmZpZ3VyZSgnc2FuZGJveCcpO1xuXHRcdFx0ZHdvbGxhLmlhdi5zdGFydChcblx0XHRcdFx0dGhpcy5pYXZ0b2tlbixcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNvbnRhaW5lcjogJ2lhdkNvbnRhaW5lcicsXG5cdFx0XHRcdFx0c3R5bGVzaGVldHM6IFsgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvJnN1YnNldD1sYXRpbixsYXRpbi1leHQnIF0sXG5cdFx0XHRcdFx0bWljcm9EZXBvc2l0czogdHJ1ZSxcblx0XHRcdFx0XHRiYWNrQnV0dG9uOiB0cnVlLFxuXHRcdFx0XHRcdGZhbGxiYWNrVG9NaWNyb0RlcG9zaXRzOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChlcnIsIHJlcykgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvcjogJyArIEpTT04uc3RyaW5naWZ5KGVycikgKyAnIC0tIFJlc3BvbnNlOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG5cdFx0XHRcdFx0aWYgKGVycikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xuXHRcdFx0XHRcdFx0KDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpKS5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zbmFja2JhcignUGxlYXNlIHRyeSBhZnRlciBzb21ldGltZS4nKTtcblx0XHR9XG5cdH1cblxuXHRzbmFja2Jhcihtc2cpIHtcblx0XHR0aGlzLnNuYWNrQmFyLm9wZW4obXNnLCAnY2xvc2UnLCB7XG5cdFx0XHR2ZXJ0aWNhbFBvc2l0aW9uOiAnYm90dG9tJyxcblx0XHRcdGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0Jyxcblx0XHRcdGR1cmF0aW9uOiAzNTAwXG5cdFx0fSk7XG5cdH1cbn0iXX0=