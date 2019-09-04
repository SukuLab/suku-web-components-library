/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuIconWidgetComponent = /** @class */ (function () {
    function SukuIconWidgetComponent() {
        this.icon = 'suku-shipped-icon';
        this.iconId = 'suku-shipped-icon';
        this.iconInfo = 'suku-shipped-icon';
        this.iconInfoCustomClass = 'suku-shipped-icon';
        this.customIconClass = 'suku-xl';
    }
    /**
     * @return {?}
     */
    SukuIconWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuIconWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-icon-widget',
                    template: "<div class=\"col\">\n  <span class=\"tipTool\" [style.left.rem]=\"positionTooltip\">\n    <span class=\"tipTooltext\" [style.left.rem]=\"positionTooltext\">\n      <span>{{iconInfo}}</span>\n    </span>\n    <i class=\"{{customIconClass}} {{icon}}\" id=\"{{iconId}}\"></i>\n  </span>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.c-pointer{cursor:pointer}.tipTool{position:relative;display:inline-block;height:0;text-align:center;border-radius:15px;background-color:#d8d8d8a8 transparent;font-size:18px;color:#757575;font-weight:700;font-style:italic;font-stretch:normal;letter-spacing:.5px}.tipTool .tipTooltext{visibility:hidden;width:-webkit-max-content;width:-moz-max-content;width:max-content;background-color:#000000eb;text-align:left;border-radius:6px;padding:15px 18px;position:absolute;z-index:1;bottom:150%;left:50%;margin-left:-60px;font-style:normal;font-stretch:normal;font-size:13px;font-family:var(--suku-secondary-font);font-weight:500;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.tipTool .tipTooltext::after{content:\"\";position:absolute;top:100%;left:36.5%;margin-left:0;border-width:5px;border-style:solid;border-color:#191922 transparent transparent;font-style:normal;font-stretch:normal}.tipTool:hover .tipTooltext{visibility:visible}.tooltip-info-content{font-family:var(--suku-secondary-font)}"]
                }] }
    ];
    /** @nocollapse */
    SukuIconWidgetComponent.ctorParameters = function () { return []; };
    SukuIconWidgetComponent.propDecorators = {
        icon: [{ type: Input }],
        iconId: [{ type: Input, args: ['icon-id',] }],
        iconInfo: [{ type: Input, args: ['icon-info',] }],
        positionTooltip: [{ type: Input, args: ['position-tooltip',] }],
        positionTooltext: [{ type: Input, args: ['position-tooltext',] }],
        iconInfoCustomClass: [{ type: Input, args: ['icon-info-custom-class',] }],
        customIconClass: [{ type: Input, args: ['custom-icon-class',] }]
    };
    return SukuIconWidgetComponent;
}());
export { SukuIconWidgetComponent };
if (false) {
    /** @type {?} */
    SukuIconWidgetComponent.prototype.icon;
    /** @type {?} */
    SukuIconWidgetComponent.prototype.iconId;
    /** @type {?} */
    SukuIconWidgetComponent.prototype.iconInfo;
    /** @type {?} */
    SukuIconWidgetComponent.prototype.positionTooltip;
    /** @type {?} */
    SukuIconWidgetComponent.prototype.positionTooltext;
    /** @type {?} */
    SukuIconWidgetComponent.prototype.iconInfoCustomClass;
    /** @type {?} */
    SukuIconWidgetComponent.prototype.customIconClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1pY29uLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1pY29uLXdpZGdldC9zdWt1LWljb24td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFhRTtRQVBTLFNBQUksR0FBRyxtQkFBbUIsQ0FBQztRQUNsQixXQUFNLEdBQUcsbUJBQW1CLENBQUM7UUFDM0IsYUFBUSxHQUFHLG1CQUFtQixDQUFDO1FBR2xCLHdCQUFtQixHQUFHLG1CQUFtQixDQUFDO1FBQy9DLG9CQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFakIsMENBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QiwrU0FBZ0Q7O2lCQUVqRDs7Ozs7dUJBRUUsS0FBSzt5QkFDTCxLQUFLLFNBQUMsU0FBUzsyQkFDZixLQUFLLFNBQUMsV0FBVztrQ0FDakIsS0FBSyxTQUFDLGtCQUFrQjttQ0FDeEIsS0FBSyxTQUFDLG1CQUFtQjtzQ0FDekIsS0FBSyxTQUFDLHdCQUF3QjtrQ0FDOUIsS0FBSyxTQUFDLG1CQUFtQjs7SUFNNUIsOEJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWJZLHVCQUF1Qjs7O0lBQ2xDLHVDQUFvQzs7SUFDcEMseUNBQStDOztJQUMvQywyQ0FBbUQ7O0lBQ25ELGtEQUEyQzs7SUFDM0MsbURBQTZDOztJQUM3QyxzREFBMkU7O0lBQzNFLGtEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWljb24td2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtaWNvbi13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWljb24td2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUljb25XaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpY29uID0gJ3N1a3Utc2hpcHBlZC1pY29uJztcbiAgQElucHV0KCdpY29uLWlkJykgaWNvbklkID0gJ3N1a3Utc2hpcHBlZC1pY29uJztcbiAgQElucHV0KCdpY29uLWluZm8nKSBpY29uSW5mbyA9ICdzdWt1LXNoaXBwZWQtaWNvbic7XG4gIEBJbnB1dCgncG9zaXRpb24tdG9vbHRpcCcpIHBvc2l0aW9uVG9vbHRpcDtcbiAgQElucHV0KCdwb3NpdGlvbi10b29sdGV4dCcpIHBvc2l0aW9uVG9vbHRleHQ7XG4gIEBJbnB1dCgnaWNvbi1pbmZvLWN1c3RvbS1jbGFzcycpIGljb25JbmZvQ3VzdG9tQ2xhc3MgPSAnc3VrdS1zaGlwcGVkLWljb24nO1xuICBASW5wdXQoJ2N1c3RvbS1pY29uLWNsYXNzJykgY3VzdG9tSWNvbkNsYXNzID0gJ3N1a3UteGwnO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==