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
        this.iavtoken = 'hZ29TKB3CRpZ6z2MBPmMFYKKTbdbXLWAYUOt3A5niEoQs8mvqw';
        this.action = new EventEmitter();
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
        (err, res) => {
            console.log('Error: ' + JSON.stringify(err) + ' -- Response: ' + JSON.stringify(res));
            if (err) {
                console.log('failed');
                ((/** @type {?} */ (document.getElementById('start')))).disabled = false;
            }
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlL3N1a3UtZHdvbGxhLWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNaEQsTUFBTSxPQUFPLGdDQUFnQzs7OztJQUczQyxZQUFvQixRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBRnJCLGFBQVEsR0FBRyxvREFBb0QsQ0FBRTtRQUMzRSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNPLENBQUM7Ozs7SUFFOUMsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsQ0FBQyxtQkFBa0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBQSxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyRSxJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUU7O2tCQUNyQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUM7WUFDcEQsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ25DO1NBQ0Y7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hDLFNBQVMsRUFBRSxjQUFjO1lBQ3pCLFdBQVcsRUFBRTtnQkFDWCxxRUFBcUU7YUFDdEU7WUFDRCxhQUFhLEVBQUUsSUFBSTtZQUNuQixVQUFVLEVBQUUsSUFBSTtZQUNoQix1QkFBdUIsRUFBRSxJQUFJO1NBQzlCOzs7OztRQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEYsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxtQkFBa0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBQSxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzthQUN2RTtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxnUUFBMEQ7O2FBRTNEOzs7O1lBTFEsV0FBVzs7O3VCQU9qQixLQUFLLFNBQUMsV0FBVztxQkFDakIsTUFBTTs7OztJQURQLG9EQUFxRjs7SUFDckYsa0RBQXNDOzs7OztJQUMxQixvREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIHZhciBkd29sbGE6IGFueTtcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1kd29sbGEtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWR3b2xsYS1mdW5kaW5nLXNvdXJjZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VEd29sbGFGdW5kaW5nU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdpYXYtdG9rZW4nKSBpYXZ0b2tlbiA9ICdoWjI5VEtCM0NScFo2ejJNQlBtTUZZS0tUYmRiWExXQVlVT3QzQTVuaUVvUXM4bXZxdycgO1xuICBAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBnZXREd29sbGFIdG1sKCkge1xuICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKSkuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWF2Q29udGFpbmVyJykpIHtcbiAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWF2Q29udGFpbmVyJyk7XG4gICAgICB3aGlsZSAobGlzdC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgbGlzdC5yZW1vdmVDaGlsZChsaXN0LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygndHJpZ2dlcmVkJywgdGhpcy5pYXZ0b2tlbik7XG4gICAgICBkd29sbGEuY29uZmlndXJlKCdzYW5kYm94Jyk7XG4gICAgICBkd29sbGEuaWF2LnN0YXJ0KHRoaXMuaWF2dG9rZW4sIHtcbiAgICAgIGNvbnRhaW5lcjogJ2lhdkNvbnRhaW5lcicsXG4gICAgICBzdHlsZXNoZWV0czogW1xuICAgICAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG8mc3Vic2V0PWxhdGluLGxhdGluLWV4dCcsXG4gICAgICBdLFxuICAgICAgbWljcm9EZXBvc2l0czogdHJ1ZSxcbiAgICAgIGJhY2tCdXR0b246IHRydWUsXG4gICAgICBmYWxsYmFja1RvTWljcm9EZXBvc2l0czogdHJ1ZVxuICAgIH0sIChlcnIsIHJlcykgPT4gIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJyArIEpTT04uc3RyaW5naWZ5KGVycikgKyAnIC0tIFJlc3BvbnNlOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn0iXX0=