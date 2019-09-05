/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuProgressBarTypeThreeComponent {
    constructor() {
        this.enableToolTip = [];
        this.statusKey = ['inProgress', 'inComplete', 'complete'];
        this.tooltipInfo = 'This step in the journey is not yet complete.';
        this.customTitleClass = '';
        this.enablePointer = true;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set data(val) {
        if (val) {
            if (val.length == 0) {
                /** @type {?} */
                const data = '1';
                document.documentElement.style.setProperty('--suku-progress-bar-count', data);
            }
            else {
                console.log('val.length.toString()', val.length.toString());
                /** @type {?} */
                const data = val.length.toString();
                document.documentElement.style.setProperty('--suku-progress-bar-count', data);
            }
            this.progressBarData = val;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    showDetails(data) {
        console.log('e--', this.selected, data);
        if (this.selected == data) {
            this.selected = '';
        }
        else {
            this.selected = data;
        }
    }
}
SukuProgressBarTypeThreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-progress-bar-type-three',
                template: "<div class=\"col-12 w-100 d-flex flex-column\">\n  <ul class=\"progressbar\">\n    <li *ngFor=\"let data of progressBarData;let i=index\">\n      <p class=\"circle\" id=\"progressBar{{i}}\" (click)=\"showDetails(((data?.status == statusKey[1]) ? data : ''))\" [ngClass]=\"{ \n    'active' : (data?.status == statusKey[0]), \n    'completed' : (data?.status == statusKey[2]), \n    'toolTip': (data?.status == statusKey[1] && selected == data), 'c-pointer': enablePointer }\">\n        <span *ngIf=\"!(data?.status == statusKey[2])\">{{i}}</span>\n        <span class=\"tipTooltext\" [style.visibility]=\"((selected == data) ? 'visible' : 'hidden')\"\n          [style.left.rem]=\"positionTooltipLeft\" [style.top.rem]=\"positionTooltipTop\">\n          <span id=\"progressToolTip\">{{tooltipInfo}}</span>\n        </span>\n        <span *ngIf=\"(data?.status == statusKey[2])\" class=\"checkmark\"></span>\n      </p>\n      <span class=\"{{customTitleClass}}\" id=\"progressBarTitle{{i}}\"\n        [ngClass]=\"{'text-bold': data?.status == statusKey[0], 'c-pointer': enablePointer}\">\n        {{data?.name}}\n      </span>\n    </li>\n  </ul>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.progressActive{width:50px!important;height:50px;color:#fff;background:var(--suku-primary-color);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:var(--suku-primary-font)}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:var(--suku-primary-font)}.progressbar li{float:left;width:calc(82%/var(--suku-progress-bar-count));position:relative;text-align:center}.progressbar{counter-reset:step}.progressbar li .circle{content:counter(step);counter-increment:step;width:50px;height:50px;display:block;margin:0 auto 10px;border-radius:50%;line-height:50px;background:#757575;color:#fff;text-align:center;font-weight:400;font-size:14px;font-family:var(--suku-primary-font);z-index:10;position:relative}.progressbar li:after{content:'';position:absolute;width:100%;height:1px;color:#fff;background:#b3b3b3;top:25px;left:-50%;z-index:0}.progressbar li.active:before{color:#fff;background:var(--suku-primary-color)}.progressbar li.completed:before{color:#fff;background-color:#1c1c1c}.progressbar li.active+li:after,.progressbar li.completed+li:after{background-color:#b3b3b3}.progressbar li:first-child:after{content:none}li{list-style:none;font-family:var(--suku-secondary-font);font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.checkmark{position:absolute;top:32%;right:35.5%;z-index:5;background:#1c1c1c;width:12px;height:21px}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid #d8fc40;border-width:0 3px 3px 0;transform:rotate(45deg)}.tipTool{position:relative;display:inline-block;height:0;text-align:center;border-radius:15px;background-color:#d8d8d8a8 transparent;font-size:18px;color:#757575;font-weight:700;font-style:italic;font-stretch:normal;letter-spacing:.5px}.tipTooltext{width:-webkit-max-content;width:-moz-max-content;width:max-content;background-color:#000000eb;text-align:left;border-radius:6px;padding:15px 18px;position:absolute;z-index:1;bottom:130%;left:-60%;margin-left:-60px;font-style:normal;font-stretch:normal;font-size:13px;font-family:var(--suku-secondary-font);font-weight:500;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.tipTooltext::after{content:\"\";position:absolute;top:100%;left:36.5%;margin-left:0;border-width:5px;border-style:solid;border-color:#191922 transparent transparent;font-style:normal;font-stretch:normal}.active{color:#fff;background:var(--suku-primary-color)!important}.completed{color:#fff;background-color:#1c1c1c!important}button{background:0 0;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.c-pointer{cursor:pointer!important}.text-bold{font-weight:600!important;color:#000!important}"]
            }] }
];
/** @nocollapse */
SukuProgressBarTypeThreeComponent.ctorParameters = () => [];
SukuProgressBarTypeThreeComponent.propDecorators = {
    statusKey: [{ type: Input, args: ['status-Key',] }],
    data: [{ type: Input }],
    tooltipInfo: [{ type: Input, args: ['tooltip-Info',] }],
    positionTooltipLeft: [{ type: Input, args: ['position-tooltip-left',] }],
    positionTooltipTop: [{ type: Input, args: ['position-tooltip-top',] }],
    customTitleClass: [{ type: Input, args: ['custom-title-class',] }],
    enablePointer: [{ type: Input, args: ['enable-pointer',] }]
};
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
    SukuProgressBarTypeThreeComponent.prototype.positionTooltipLeft;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.positionTooltipTop;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.customTitleClass;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.enablePointer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXItdHlwZS10aHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9ncmVzcy1iYXItdHlwZS10aHJlZS9zdWt1LXByb2dyZXNzLWJhci10eXBlLXRocmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBT3ZFLE1BQU0sT0FBTyxpQ0FBaUM7SUF3QjVDO1FBckJBLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ0UsY0FBUyxHQUFHLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztRQWVuRCxnQkFBVyxHQUFHLCtDQUErQyxDQUFDO1FBR3hELHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMxQixrQkFBYSxHQUFHLElBQUksQ0FBQztJQUU5QyxDQUFDOzs7OztJQXBCRCxJQUNJLElBQUksQ0FBQyxHQUFHO1FBQ1YsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFOztzQkFDYixJQUFJLEdBQUcsR0FBRztnQkFDaEIsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxDQUFDO2FBQy9FO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDOztzQkFDdEQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO2dCQUNsQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDL0U7WUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7SUFTRCxRQUFRO0lBQ1IsQ0FBQzs7Ozs7SUFHRCxXQUFXLENBQUMsSUFBSTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUNwQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7WUEzQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLDZvQ0FBNEQ7O2FBRTdEOzs7Ozt3QkFLRSxLQUFLLFNBQUMsWUFBWTttQkFDbEIsS0FBSzswQkFjTCxLQUFLLFNBQUMsY0FBYztrQ0FDcEIsS0FBSyxTQUFDLHVCQUF1QjtpQ0FDN0IsS0FBSyxTQUFDLHNCQUFzQjsrQkFDNUIsS0FBSyxTQUFDLG9CQUFvQjs0QkFDMUIsS0FBSyxTQUFDLGdCQUFnQjs7OztJQXRCdkIsNERBQWdCOztJQUNoQixxREFBUzs7SUFDVCwwREFBbUI7O0lBQ25CLHNEQUEwRTs7SUFlMUUsd0RBQXFGOztJQUNyRixnRUFBb0Q7O0lBQ3BELCtEQUFrRDs7SUFDbEQsNkRBQW1EOztJQUNuRCwwREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXByb2dyZXNzLWJhci10eXBlLXRocmVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdGhyZWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXByb2dyZXNzLWJhci10eXBlLXRocmVlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVByb2dyZXNzQmFyVHlwZVRocmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJvZ3Jlc3NCYXJEYXRhO1xuICBzZWxlY3RlZDtcbiAgZW5hYmxlVG9vbFRpcCA9IFtdO1xuICBASW5wdXQoJ3N0YXR1cy1LZXknKSBzdGF0dXNLZXkgPSBbJ2luUHJvZ3Jlc3MnLCAnaW5Db21wbGV0ZScsICdjb21wbGV0ZSddO1xuICBASW5wdXQoKVxuICBzZXQgZGF0YSh2YWwpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICBpZiAodmFsLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSAnMSc7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zdWt1LXByb2dyZXNzLWJhci1jb3VudCcsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbC5sZW5ndGgudG9TdHJpbmcoKScsIHZhbC5sZW5ndGgudG9TdHJpbmcoKSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB2YWwubGVuZ3RoLnRvU3RyaW5nKCk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zdWt1LXByb2dyZXNzLWJhci1jb3VudCcsIGRhdGEpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9ncmVzc0JhckRhdGEgPSB2YWw7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgndG9vbHRpcC1JbmZvJykgdG9vbHRpcEluZm8gPSAnVGhpcyBzdGVwIGluIHRoZSBqb3VybmV5IGlzIG5vdCB5ZXQgY29tcGxldGUuJztcbiAgQElucHV0KCdwb3NpdGlvbi10b29sdGlwLWxlZnQnKSBwb3NpdGlvblRvb2x0aXBMZWZ0O1xuICBASW5wdXQoJ3Bvc2l0aW9uLXRvb2x0aXAtdG9wJykgcG9zaXRpb25Ub29sdGlwVG9wO1xuICBASW5wdXQoJ2N1c3RvbS10aXRsZS1jbGFzcycpIGN1c3RvbVRpdGxlQ2xhc3MgPSAnJztcbiAgQElucHV0KCdlbmFibGUtcG9pbnRlcicpIGVuYWJsZVBvaW50ZXIgPSB0cnVlO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cblxuICBzaG93RGV0YWlscyhkYXRhKSB7XG4gICAgY29uc29sZS5sb2coJ2UtLScsIHRoaXMuc2VsZWN0ZWQsIGRhdGEpO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkID09IGRhdGEpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IGRhdGE7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==