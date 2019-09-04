/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuProgressBarTypeThreeComponent = /** @class */ (function () {
    function SukuProgressBarTypeThreeComponent() {
        this.enableToolTip = [];
        this.statusKey = ['inProgress', 'inComplete', 'complete'];
        this.tooltipInfo = 'This step in the journey is not yet complete.';
        this.iconInfoCustomClass = 'suku-shipped-icon';
        this.customIconClass = 'suku-xl';
        this.customTitleClass = '';
        this.enablePointer = true;
    }
    Object.defineProperty(SukuProgressBarTypeThreeComponent.prototype, "data", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                if (val.length == 0) {
                    /** @type {?} */
                    var data = '1';
                    document.documentElement.style.setProperty('--suku-progress-bar-count', data);
                }
                else {
                    console.log('val.length.toString()', val.length.toString());
                    /** @type {?} */
                    var data = val.length.toString();
                    document.documentElement.style.setProperty('--suku-progress-bar-count', data);
                }
                this.progressBarData = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SukuProgressBarTypeThreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} data
     * @return {?}
     */
    SukuProgressBarTypeThreeComponent.prototype.showDetails = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        console.log('e--', this.selected, data);
        if (this.selected == data) {
            this.selected = '';
        }
        else {
            this.selected = data;
        }
    };
    SukuProgressBarTypeThreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-progress-bar-type-three',
                    template: "<div class=\"col-12\">\n  <ul class=\"progressbar\">\n    <li *ngFor=\"let data of progressBarData;let i=index\">\n      <p class=\"circle\" id=\"progressBar{{i}}\" (click)=\"showDetails(((data?.status == statusKey[1]) ? data : ''))\" [ngClass]=\"{ \n    'active' : (data?.status == statusKey[0]), \n    'completed' : (data?.status == statusKey[2]), \n    'toolTip': (data?.status == statusKey[1] && selected == data), 'c-pointer': enablePointer }\">\n        <span *ngIf=\"!(data?.status == statusKey[2])\">{{i}}</span>\n        <span class=\"tipTooltext\" [style.visibility]=\"((selected == data) ? 'visible' : 'hidden')\"\n          [style.left.rem]=\"positionTooltext\">\n          <span>{{tooltipInfo}}</span>\n        </span>\n        <span *ngIf=\"(data?.status == statusKey[2])\" class=\"checkmark\"></span>\n      </p>\n      <span class=\"{{customTitleClass}}\" id=\"progressBarTitle{{i}}\"\n        [ngClass]=\"{'text-bold': data?.status == statusKey[0], 'c-pointer': enablePointer}\">\n        {{data?.name}}\n      </span>\n    </li>\n  </ul>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.progressActive{width:50px!important;height:50px;color:#fff;background:var(--suku-primary-color);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:var(--suku-primary-font)}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:var(--suku-primary-font)}.progressbar li{float:left;width:calc(82%/var(--suku-progress-bar-count));position:relative;text-align:center}.progressbar{counter-reset:step}.progressbar li .circle{content:counter(step);counter-increment:step;width:50px;height:50px;display:block;margin:0 auto 10px;border-radius:50%;line-height:50px;background:#757575;color:#fff;text-align:center;font-weight:400;font-size:14px;font-family:var(--suku-primary-font)}.progressbar li:after{content:'';position:absolute;width:100%;height:1px;color:#fff;background:#b3b3b3;top:25px;left:-50%;z-index:-1}.progressbar li.active:before{color:#fff;background:var(--suku-primary-color)}.progressbar li.completed:before{color:#fff;background-color:#1c1c1c}.progressbar li.active+li:after,.progressbar li.completed+li:after{background-color:#b3b3b3}.progressbar li:first-child:after{content:none}li{list-style:none;font-family:var(--suku-secondary-font);font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.checkmark{position:absolute;top:20%;right:45.5%;z-index:5;background:#1c1c1c;width:12px;height:21px}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid #d8fc40;border-width:0 3px 3px 0;transform:rotate(45deg)}.tipTool{position:relative;display:inline-block;height:0;text-align:center;border-radius:15px;background-color:#d8d8d8a8 transparent;font-size:18px;color:#757575;font-weight:700;font-style:italic;font-stretch:normal;letter-spacing:.5px}.tipTooltext{width:-webkit-max-content;width:-moz-max-content;width:max-content;background-color:#000000eb;text-align:left;border-radius:6px;padding:15px 18px;position:absolute;z-index:1;bottom:110%;left:18%;margin-left:-60px;font-style:normal;font-stretch:normal;font-size:13px;font-family:var(--suku-secondary-font);font-weight:500;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.tipTooltext::after{content:\"\";position:absolute;top:100%;left:36.5%;margin-left:0;border-width:5px;border-style:solid;border-color:#191922 transparent transparent;font-style:normal;font-stretch:normal}.active{color:#fff;background:var(--suku-primary-color)!important}.completed{color:#fff;background-color:#1c1c1c!important}button{background:0 0;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.c-pointer{cursor:pointer!important}.text-bold{font-weight:600!important;color:#000!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuProgressBarTypeThreeComponent.ctorParameters = function () { return []; };
    SukuProgressBarTypeThreeComponent.propDecorators = {
        statusKey: [{ type: Input, args: ['status-Key',] }],
        data: [{ type: Input }],
        tooltipInfo: [{ type: Input, args: ['tooltip-Info',] }],
        positionTooltip: [{ type: Input, args: ['position-tooltip',] }],
        positionTooltext: [{ type: Input, args: ['position-tooltext',] }],
        iconInfoCustomClass: [{ type: Input, args: ['icon-info-custom-class',] }],
        customIconClass: [{ type: Input, args: ['custom-icon-class',] }],
        customTitleClass: [{ type: Input, args: ['custom-title-class',] }],
        enablePointer: [{ type: Input, args: ['enable-pointer',] }]
    };
    return SukuProgressBarTypeThreeComponent;
}());
export { SukuProgressBarTypeThreeComponent };
if (false) {
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.progressBarData;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.selected;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.enableToolTip;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.statusKey;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.tooltipInfo;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.positionTooltip;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.positionTooltext;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.iconInfoCustomClass;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.customIconClass;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.customTitleClass;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.enablePointer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXItdHlwZS10aHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9ncmVzcy1iYXItdHlwZS10aHJlZS9zdWt1LXByb2dyZXNzLWJhci10eXBlLXRocmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBRXZFO0lBK0JFO1FBdkJBLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ0UsY0FBUyxHQUFHLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztRQWVuRCxnQkFBVyxHQUFHLCtDQUErQyxDQUFDO1FBR3BELHdCQUFtQixHQUFHLG1CQUFtQixDQUFDO1FBQy9DLG9CQUFlLEdBQUcsU0FBUyxDQUFDO1FBQzNCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMxQixrQkFBYSxHQUFHLElBQUksQ0FBQztJQUU5QyxDQUFDO0lBdEJELHNCQUNJLG1EQUFJOzs7OztRQURSLFVBQ1MsR0FBRztZQUNWLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7O3dCQUNiLElBQUksR0FBRyxHQUFHO29CQUNoQixRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQy9FO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDOzt3QkFDdEQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO29CQUNsQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQy9FO2dCQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO2FBQzVCO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUFXRCxvREFBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUdELHVEQUFXOzs7O0lBQVgsVUFBWSxJQUFJO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1NBQ3BCO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN0QjtJQUNILENBQUM7O2dCQTdDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsbWpDQUE0RDs7aUJBRTdEOzs7Ozs0QkFLRSxLQUFLLFNBQUMsWUFBWTt1QkFDbEIsS0FBSzs4QkFjTCxLQUFLLFNBQUMsY0FBYztrQ0FDcEIsS0FBSyxTQUFDLGtCQUFrQjttQ0FDeEIsS0FBSyxTQUFDLG1CQUFtQjtzQ0FDekIsS0FBSyxTQUFDLHdCQUF3QjtrQ0FDOUIsS0FBSyxTQUFDLG1CQUFtQjttQ0FDekIsS0FBSyxTQUFDLG9CQUFvQjtnQ0FDMUIsS0FBSyxTQUFDLGdCQUFnQjs7SUFpQnpCLHdDQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0ExQ1ksaUNBQWlDOzs7SUFDNUMsNERBQWdCOztJQUNoQixxREFBUzs7SUFDVCwwREFBbUI7O0lBQ25CLHNEQUEwRTs7SUFlMUUsd0RBQXFGOztJQUNyRiw0REFBMkM7O0lBQzNDLDZEQUE2Qzs7SUFDN0MsZ0VBQTJFOztJQUMzRSw0REFBd0Q7O0lBQ3hELDZEQUFtRDs7SUFDbkQsMERBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1wcm9ncmVzcy1iYXItdHlwZS10aHJlZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXByb2dyZXNzLWJhci10eXBlLXRocmVlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1wcm9ncmVzcy1iYXItdHlwZS10aHJlZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VQcm9ncmVzc0JhclR5cGVUaHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByb2dyZXNzQmFyRGF0YTtcbiAgc2VsZWN0ZWQ7XG4gIGVuYWJsZVRvb2xUaXAgPSBbXTtcbiAgQElucHV0KCdzdGF0dXMtS2V5Jykgc3RhdHVzS2V5ID0gWydpblByb2dyZXNzJywgJ2luQ29tcGxldGUnLCAnY29tcGxldGUnXTtcbiAgQElucHV0KClcbiAgc2V0IGRhdGEodmFsKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgaWYgKHZhbC5sZW5ndGggPT0gMCkge1xuICAgICAgICBjb25zdCBkYXRhID0gJzEnO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tc3VrdS1wcm9ncmVzcy1iYXItY291bnQnLCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWwubGVuZ3RoLnRvU3RyaW5nKCknLCB2YWwubGVuZ3RoLnRvU3RyaW5nKCkpO1xuICAgICAgICBjb25zdCBkYXRhID0gdmFsLmxlbmd0aC50b1N0cmluZygpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tc3VrdS1wcm9ncmVzcy1iYXItY291bnQnLCBkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvZ3Jlc3NCYXJEYXRhID0gdmFsO1xuICAgIH1cbiAgfVxuICBASW5wdXQoJ3Rvb2x0aXAtSW5mbycpIHRvb2x0aXBJbmZvID0gJ1RoaXMgc3RlcCBpbiB0aGUgam91cm5leSBpcyBub3QgeWV0IGNvbXBsZXRlLic7XG4gIEBJbnB1dCgncG9zaXRpb24tdG9vbHRpcCcpIHBvc2l0aW9uVG9vbHRpcDtcbiAgQElucHV0KCdwb3NpdGlvbi10b29sdGV4dCcpIHBvc2l0aW9uVG9vbHRleHQ7XG4gIEBJbnB1dCgnaWNvbi1pbmZvLWN1c3RvbS1jbGFzcycpIGljb25JbmZvQ3VzdG9tQ2xhc3MgPSAnc3VrdS1zaGlwcGVkLWljb24nO1xuICBASW5wdXQoJ2N1c3RvbS1pY29uLWNsYXNzJykgY3VzdG9tSWNvbkNsYXNzID0gJ3N1a3UteGwnO1xuICBASW5wdXQoJ2N1c3RvbS10aXRsZS1jbGFzcycpIGN1c3RvbVRpdGxlQ2xhc3MgPSAnJztcbiAgQElucHV0KCdlbmFibGUtcG9pbnRlcicpIGVuYWJsZVBvaW50ZXIgPSB0cnVlO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cblxuICBzaG93RGV0YWlscyhkYXRhKSB7XG4gICAgY29uc29sZS5sb2coJ2UtLScsIHRoaXMuc2VsZWN0ZWQsIGRhdGEpO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkID09IGRhdGEpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IGRhdGE7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==