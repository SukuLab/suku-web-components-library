/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
export class SukuProgressBarTypeThreeComponent {
    constructor() {
        this.enableToolTip = [];
        this.statusKey = ['inProgress', 'inComplete', 'complete', 'anotherStep', 'pending', 'completedAndOther'];
        this.tooltipInfo = 'This step in the journey is not yet complete.';
        this.customTitleClass = '';
        this.customSubtitleClass = '';
        this.enablePointer = true;
        this.action = new EventEmitter();
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
        console.log('e--', data);
        if (data.status == 'inComplete') {
            if (this.selected == data) {
                this.selected = '';
            }
            else {
                this.selected = data;
            }
        }
        else {
            this.selected = '';
            this.action.emit(data);
        }
    }
}
SukuProgressBarTypeThreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-progress-bar-type-three',
                template: "<div class=\"col-12 w-100 d-flex flex-column\">\n  <ul class=\"progressbar p-xs-0\">\n    <li *ngFor=\"let data of progressBarData;let i=index\">\n      <p class=\"circle\" id=\"progressBar{{i}}\" (click)=\"showDetails(data)\" [ngClass]=\"{ \n    'active' : (data?.status == statusKey[0]), \n    'completed' : (data?.status == statusKey[2]),\n    'pending' : (data?.status == statusKey[4]),\n    'anotherStep' : (data?.status == statusKey[3]),\n    'completedAndOther': (data?.status == statusKey[5]),\n    'toolTip': (data?.status == statusKey[1] && selected == data), 'c-pointer': enablePointer }\">\n        <span *ngIf=\"!(data?.status == statusKey[2]) && !(data?.status == statusKey[3]) && !(data?.status == statusKey[4]) && ! (data?.status == statusKey[5])\">{{i+1}}</span>\n        <span class=\"tipTooltext\" [style.visibility]=\"((selected == data) ? 'visible' : 'hidden')\"\n          [style.left.rem]=\"positionTooltipLeft\" [style.top.rem]=\"positionTooltipTop\">\n          <span id=\"progressToolTip\">{{tooltipInfo | translate}}</span>\n        </span>\n        <span *ngIf=\"(data?.status == statusKey[4])\"><i class=\"fas fa-clock\"></i></span>\n        <span *ngIf=\"(data?.status == statusKey[3])\"><i class=\"fas fa-clock\"></i></span>\n        <span *ngIf=\"(data?.status == statusKey[2])\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></span>\n        <span *ngIf=\"(data?.status == statusKey[5])\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></span>\n      </p>\n      <span id=\"progressBarTitle{{i}}\">\n        <span class=\"{{customTitleClass}} title\" id=\"title{{i}}\"\n          [ngClass]=\"{'text-bold': data?.status == statusKey[0], 'c-pointer': enablePointer}\">{{data?.type | translate}}</span>\n        <p [ngClass]=\"{'subtitle-bold': data?.status == statusKey[0], 'c-pointer': enablePointer}\"\n          class=\"{{customSubtitleClass}} type mb-1\" id=\"subTitle{{i}}\">{{data?.name | translate}}</p>\n      </span>\n    </li>\n  </ul>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.progressActive{width:50px!important;height:50px;color:#fff;background:var(--suku-primary-color);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:var(--suku-primary-font)}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:var(--suku-primary-font)}.progressbar li{float:left;width:calc(92%/var(--suku-progress-bar-count));position:relative;text-align:center}.progressbar{counter-reset:step}.progressbar li .circle{content:counter(step);counter-increment:step;width:50px;height:50px;display:block;margin:0 auto 10px;border-radius:50%;line-height:50px;background:#757575;color:#fff;text-align:center;font-weight:400;font-size:14px;font-family:var(--suku-primary-font);z-index:10;position:relative}.progressbar li:after{content:'';position:absolute;width:100%;height:1px;color:#fff;background:#b3b3b3;top:25px;left:-50%;z-index:0}.progressbar li.active:before{color:#fff;background:var(--suku-primary-color)}.progressbar li.anotherStep:before{color:#fff;background-color:#1c1c1c}.progressbar li.active+li:after,.progressbar li.completed+li:after,.progressbar li.pending+li:after{background-color:#b3b3b3}.progressbar li:first-child:after{content:none}li{list-style:none;font-family:var(--suku-secondary-font);font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.checkmark{position:absolute;top:32%;right:35.5%;z-index:5;background:#1c1c1c;width:12px;height:21px}.checkmarkForAnotherStep{position:absolute;top:32%;right:35.5%;z-index:5;color:#fff;width:12px;height:21px}.checkmarkForAnotherStep:after{content:'';display:block;width:8px;height:15px;border:solid #fff;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid #d8fc40;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.tipTool{position:relative;display:inline-block;height:0;text-align:center;border-radius:15px;background-color:#d8d8d8a8 transparent;font-size:18px;color:#757575;font-weight:700;font-style:italic;font-stretch:normal;letter-spacing:.5px}.tipTooltext{width:-webkit-max-content;width:-moz-max-content;width:max-content;background-color:#000000eb;text-align:left;border-radius:6px;padding:15px 18px;position:absolute;z-index:1;bottom:130%;left:-60%;margin-left:-60px;font-style:normal;font-stretch:normal;font-size:13px;font-family:var(--suku-secondary-font);font-weight:500;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.tipTooltext::after{content:\"\";position:absolute;top:100%;left:36.5%;margin-left:0;border-width:5px;border-style:solid;border-color:#191922 transparent transparent;font-style:normal;font-stretch:normal}.active,.anotherStep{color:#fff;background:var(--suku-primary-color)!important}.completed,.pending{color:var(--suku-primary-color)!important;background-color:#1c1c1c!important}.completedAndOther{color:#fff;background:var(--suku-primary-color)!important}button{background:0 0;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.c-pointer{cursor:pointer!important}.text-bold{font-weight:600!important;color:#000!important}.title,.type{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2)}.subtitle-bold{font-weight:500!important;color:#000}@media only screen and (max-width:480px){.p-xs-0{padding:0!important}}@media (min-width:1440px){.progressbar li:after{height:2.8px}}@media (max-width:900px){.tipTooltext{width:200px!important;bottom:130%;left:11%}}@media (max-width:480px){.tipTooltext{width:140px!important;bottom:130%;left:58%}}@media (max-width:320px){.tipTool .tipTooltext{width:150px!important}}"]
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
    customSubtitleClass: [{ type: Input, args: ['custom-subtitlee-class',] }],
    enablePointer: [{ type: Input, args: ['enable-pointer',] }],
    action: [{ type: Output }]
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
    SukuProgressBarTypeThreeComponent.prototype.customSubtitleClass;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.enablePointer;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXItdHlwZS10aHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9ncmVzcy1iYXItdHlwZS10aHJlZS9zdWt1LXByb2dyZXNzLWJhci10eXBlLXRocmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWdCLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNN0YsTUFBTSxPQUFPLGlDQUFpQztJQTBCNUM7UUF2QkEsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDRSxjQUFTLEdBQUcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFlbEcsZ0JBQVcsR0FBRywrQ0FBK0MsQ0FBQztRQUd4RCxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDbEIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXRDLENBQUM7Ozs7O0lBdEJELElBQ0ksSUFBSSxDQUFDLEdBQUc7UUFDVixJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7O3NCQUNiLElBQUksR0FBRyxHQUFHO2dCQUNoQixRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDL0U7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7O3NCQUN0RCxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUMvRTtZQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7OztJQVdELFFBQVE7SUFDUixDQUFDOzs7OztJQUdELFdBQVcsQ0FBQyxJQUFJO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLFlBQVksRUFBRTtZQUMvQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO2dCQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUN0QjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7OztZQWxERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsbTlEQUE0RDs7YUFFN0Q7Ozs7O3dCQUtFLEtBQUssU0FBQyxZQUFZO21CQUNsQixLQUFLOzBCQWNMLEtBQUssU0FBQyxjQUFjO2tDQUNwQixLQUFLLFNBQUMsdUJBQXVCO2lDQUM3QixLQUFLLFNBQUMsc0JBQXNCOytCQUM1QixLQUFLLFNBQUMsb0JBQW9CO2tDQUMxQixLQUFLLFNBQUMsd0JBQXdCOzRCQUM5QixLQUFLLFNBQUMsZ0JBQWdCO3FCQUN0QixNQUFNOzs7O0lBeEJQLDREQUFnQjs7SUFDaEIscURBQVM7O0lBQ1QsMERBQW1COztJQUNuQixzREFBeUg7O0lBZXpILHdEQUFxRjs7SUFDckYsZ0VBQW9EOztJQUNwRCwrREFBa0Q7O0lBQ2xELDZEQUFtRDs7SUFDbkQsZ0VBQTBEOztJQUMxRCwwREFBOEM7O0lBQzlDLG1EQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1wcm9ncmVzcy1iYXItdHlwZS10aHJlZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXByb2dyZXNzLWJhci10eXBlLXRocmVlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1wcm9ncmVzcy1iYXItdHlwZS10aHJlZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VQcm9ncmVzc0JhclR5cGVUaHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByb2dyZXNzQmFyRGF0YTtcbiAgc2VsZWN0ZWQ7XG4gIGVuYWJsZVRvb2xUaXAgPSBbXTtcbiAgQElucHV0KCdzdGF0dXMtS2V5Jykgc3RhdHVzS2V5ID0gWydpblByb2dyZXNzJywgJ2luQ29tcGxldGUnLCAnY29tcGxldGUnLCAnYW5vdGhlclN0ZXAnLCAncGVuZGluZycsICdjb21wbGV0ZWRBbmRPdGhlciddO1xuICBASW5wdXQoKVxuICBzZXQgZGF0YSh2YWwpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICBpZiAodmFsLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSAnMSc7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zdWt1LXByb2dyZXNzLWJhci1jb3VudCcsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbC5sZW5ndGgudG9TdHJpbmcoKScsIHZhbC5sZW5ndGgudG9TdHJpbmcoKSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB2YWwubGVuZ3RoLnRvU3RyaW5nKCk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zdWt1LXByb2dyZXNzLWJhci1jb3VudCcsIGRhdGEpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9ncmVzc0JhckRhdGEgPSB2YWw7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgndG9vbHRpcC1JbmZvJykgdG9vbHRpcEluZm8gPSAnVGhpcyBzdGVwIGluIHRoZSBqb3VybmV5IGlzIG5vdCB5ZXQgY29tcGxldGUuJztcbiAgQElucHV0KCdwb3NpdGlvbi10b29sdGlwLWxlZnQnKSBwb3NpdGlvblRvb2x0aXBMZWZ0O1xuICBASW5wdXQoJ3Bvc2l0aW9uLXRvb2x0aXAtdG9wJykgcG9zaXRpb25Ub29sdGlwVG9wO1xuICBASW5wdXQoJ2N1c3RvbS10aXRsZS1jbGFzcycpIGN1c3RvbVRpdGxlQ2xhc3MgPSAnJztcbiAgQElucHV0KCdjdXN0b20tc3VidGl0bGVlLWNsYXNzJykgY3VzdG9tU3VidGl0bGVDbGFzcyA9ICcnO1xuICBASW5wdXQoJ2VuYWJsZS1wb2ludGVyJykgZW5hYmxlUG9pbnRlciA9IHRydWU7XG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuXG4gIHNob3dEZXRhaWxzKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZygnZS0tJywgZGF0YSk7XG4gICAgaWYgKGRhdGEuc3RhdHVzID09ICdpbkNvbXBsZXRlJykge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gZGF0YSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZGF0YTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9ICcnO1xuICAgICAgdGhpcy5hY3Rpb24uZW1pdChkYXRhKTtcbiAgICB9XG4gIH1cblxufVxuIl19