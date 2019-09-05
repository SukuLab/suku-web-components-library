/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuClaimsWidgetComponent {
    constructor() {
        this.claims = [
            {
                name: 'Mas fresco',
                verifiable: true
            },
            {
                name: 'Mejor ternura',
                verifiable: false
            },
            {
                name: 'Mejor para medio ambiente y animal',
                verifiable: false
            }
        ];
        this.tooltipInfo = 'This claim has name an expired endorsement';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuClaimsWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-claims-widget',
                template: "<div class=\"col\">\n  <p class=\"row mb-1 pb-2\" *ngFor=\"let claim of claims;let i=index\" [ngClass]=\"{ 'toolTip': !claim?.verifiable}\">\n    <i [ngClass]=\"{'suku-claim-verified-icon': claim?.verifiable, \n    'suku-claim-unverified-icon': !claim?.verifiable }\" class=\"suku-md\"></i>\n    <span class=\"mt-auto mb-auto pl-2\">{{claim?.name}}</span>\n    <span class=\"title\">\n      <span class=\"tipTooltext\" [style.left.rem]=\"positionTooltipLeft\" [style.left.rem]=\"positionTooltipTop\">\n        <span>{{tooltipInfo}}</span>\n      </span>\n\n    </span>\n  </p>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.title{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3)}.toolTip:hover .tipTooltext{visibility:visible}.tipTooltext{visibility:hidden;width:-webkit-max-content;width:-moz-max-content;width:max-content;background-color:#000000eb;text-align:left;border-radius:6px;padding:15px 18px;position:relative;z-index:1;bottom:-8%;left:30%;margin-left:-60px;font-style:normal;font-stretch:normal;font-size:13px;font-family:var(--suku-secondary-font);font-weight:500;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.tipTooltext::after{content:\"\";position:absolute;top:42%;left:-3%;margin-left:0;border-width:5px;border-style:solid;border-color:#191922 transparent transparent;font-style:normal;font-stretch:normal;transform:rotate(90deg)}"]
            }] }
];
/** @nocollapse */
SukuClaimsWidgetComponent.ctorParameters = () => [];
SukuClaimsWidgetComponent.propDecorators = {
    claims: [{ type: Input }],
    tooltipInfo: [{ type: Input }],
    positionTooltipLeft: [{ type: Input, args: ['position-tooltip-left',] }],
    positionTooltipTop: [{ type: Input, args: ['position-tooltip-top',] }]
};
if (false) {
    /** @type {?} */
    SukuClaimsWidgetComponent.prototype.claims;
    /** @type {?} */
    SukuClaimsWidgetComponent.prototype.tooltipInfo;
    /** @type {?} */
    SukuClaimsWidgetComponent.prototype.positionTooltipLeft;
    /** @type {?} */
    SukuClaimsWidgetComponent.prototype.positionTooltipTop;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jbGFpbXMtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNsYWltcy13aWRnZXQvc3VrdS1jbGFpbXMtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHlCQUF5QjtJQWtCcEM7UUFqQlMsV0FBTSxHQUFHO1lBQ2hCO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixVQUFVLEVBQUUsSUFBSTthQUNqQjtZQUNEO2dCQUNFLElBQUksRUFBRSxlQUFlO2dCQUNyQixVQUFVLEVBQUUsS0FBSzthQUNsQjtZQUNEO2dCQUNFLElBQUksRUFBRSxvQ0FBb0M7Z0JBQzFDLFVBQVUsRUFBRSxLQUFLO2FBQ2xCO1NBQ0YsQ0FBQztRQUNPLGdCQUFXLEdBQUcsNENBQTRDLENBQUM7SUFHcEQsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBMUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixvbEJBQWtEOzthQUVuRDs7Ozs7cUJBRUUsS0FBSzswQkFjTCxLQUFLO2tDQUNMLEtBQUssU0FBQyx1QkFBdUI7aUNBQzdCLEtBQUssU0FBQyxzQkFBc0I7Ozs7SUFoQjdCLDJDQWFFOztJQUNGLGdEQUFvRTs7SUFDcEUsd0RBQW9EOztJQUNwRCx1REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1jbGFpbXMtd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtY2xhaW1zLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtY2xhaW1zLXdpZGdldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VDbGFpbXNXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjbGFpbXMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ01hcyBmcmVzY28nLFxuICAgICAgdmVyaWZpYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ01lam9yIHRlcm51cmEnLFxuICAgICAgdmVyaWZpYWJsZTogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdNZWpvciBwYXJhIG1lZGlvIGFtYmllbnRlIHkgYW5pbWFsJyxcbiAgICAgIHZlcmlmaWFibGU6IGZhbHNlXG4gICAgfVxuICBdO1xuICBASW5wdXQoKSB0b29sdGlwSW5mbyA9ICdUaGlzIGNsYWltIGhhcyBuYW1lIGFuIGV4cGlyZWQgZW5kb3JzZW1lbnQnO1xuICBASW5wdXQoJ3Bvc2l0aW9uLXRvb2x0aXAtbGVmdCcpIHBvc2l0aW9uVG9vbHRpcExlZnQ7XG4gIEBJbnB1dCgncG9zaXRpb24tdG9vbHRpcC10b3AnKSBwb3NpdGlvblRvb2x0aXBUb3A7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19