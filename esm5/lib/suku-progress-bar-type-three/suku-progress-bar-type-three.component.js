/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var SukuProgressBarTypeThreeComponent = /** @class */ (function () {
    function SukuProgressBarTypeThreeComponent() {
    }
    /**
     * @return {?}
     */
    SukuProgressBarTypeThreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuProgressBarTypeThreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-progress-bar-type-three',
                    template: "<div class=\"col-12\">\n  <ul class=\"progressbar\">\n    <li class=\"completed checkmark\">Step 1</li>\n    <li class=\"active\">Step 2</li>\n    <li>Step 3</li>\n    <li>Step 4</li>\n    <!-- <li>Step 5</li> -->\n  </ul>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.progressActive{width:50px!important;height:50px;color:#fff;background:var(--suku-primary-color);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:var(--suku-primary-font)}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:var(--suku-primary-font)}.container{width:100%;position:absolute;z-index:1}.progressbar li{float:left;width:20%;position:relative;text-align:center}.progressbar li:before{content:\"\";content:counter(step);counter-increment:step;width:50px;height:50px;display:block;margin:0 auto 10px;border-radius:50%;line-height:50px;background:#757575;color:#fff;text-align:center;font-weight:400;font-size:14px;font-family:var(--suku-primary-font)}.progressbar{counter-reset:step}.progressbar li:after{content:'';position:absolute;width:100%;height:1px;color:#fff;background:#b3b3b3;top:25px;left:-50%;z-index:-1}.progressbar li.active:before{color:#fff;background:var(--suku-primary-color)}.progressbar li.completed:before{color:#fff;background-color:#1c1c1c}.progressbar li.completed+li:after{background-color:#b3b3b3}.progressbar li.completed+.checkmark{content:'';display:block;width:8px;height:15px;border:solid #d8fc40;border-width:0 3px 3px 0;transform:rotate(45deg)}.progressbar li.active+li:after{background-color:#b3b3b3}.progressbar li:first-child:after{content:none}li{list-style:none;font-family:var(--suku-secondary-font);font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.checkmark{display:inline-block}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid #d8fc40;border-width:0 3px 3px 0;transform:rotate(45deg)}"]
                }] }
    ];
    /** @nocollapse */
    SukuProgressBarTypeThreeComponent.ctorParameters = function () { return []; };
    return SukuProgressBarTypeThreeComponent;
}());
export { SukuProgressBarTypeThreeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXItdHlwZS10aHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9ncmVzcy1iYXItdHlwZS10aHJlZS9zdWt1LXByb2dyZXNzLWJhci10eXBlLXRocmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRDtJQU9FO0lBQWdCLENBQUM7Ozs7SUFFakIsb0RBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBVkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLGtQQUE0RDs7aUJBRTdEOzs7O0lBUUQsd0NBQUM7Q0FBQSxBQVpELElBWUM7U0FQWSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXByb2dyZXNzLWJhci10eXBlLXRocmVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdGhyZWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXByb2dyZXNzLWJhci10eXBlLXRocmVlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVByb2dyZXNzQmFyVHlwZVRocmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==