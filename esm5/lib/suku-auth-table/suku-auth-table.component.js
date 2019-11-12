/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuAuthTableComponent = /** @class */ (function () {
    function SukuAuthTableComponent() {
        this.tableHeading = 'Table Heading';
        this.tableContent = [{ 'blocknumber': '11' }, { 'blocknumber2': '11' }, { 'claim': ['hello', 'wor'] }];
        this.tableBgColor = 'white';
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuAuthTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    SukuAuthTableComponent.prototype.getKeyValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        /** @type {?} */
        var formatedObject = {};
        Object.keys(obj).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            formatedObject = {
                key: key,
                value: obj[key]
            };
        }));
        return formatedObject;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    SukuAuthTableComponent.prototype.chechIfArray = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        console.log(data);
        if (typeof (data) == 'object') {
            return true;
        }
        else {
            return false;
        }
    };
    SukuAuthTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-auth-table',
                    template: " <div class=\"col mobilePadding\">\r\n   <div class=\"col text-center tableTopHeader keyText\" [style.font-weight]=\"headingFontWeight\"\r\n     [style.color]=\"headingTextColor\" [style.font-size]=\"headingTextSize\" [style.background-color]=\"headingBgColor\">\r\n     {{ tableHeading }}\r\n   </div>\r\n   <div *ngFor=\"let data of tableContent; let i = index\">\r\n     <div\r\n       class=\"text-center tblBorderRight tblBorderLeft  {{(i != 0) ? ('tblBorderTop') : ('')}}  {{(i == tableContent.length - 1) ? ('tableEndColor tblBorderBottom tableBorderBottomRadius') : ('')}}\"\r\n       [style.background-color]=\"tableBgColor\">\r\n       <div class=\"col row\">\r\n         <div class=\"col-lg-3 col-sm-4 col-xs-5 text-left tblCellBorderRight keyText  pr-3 pt-2 pb-2\"\r\n           [style.font-weight]=\"keyFontWeight\" [style.color]=\"keyTextColor\" [style.font-size]=\"keyTextSize\"\r\n           [style.background-color]=\"keyBgColor\">\r\n           {{ getKeyValue(data)['key'] | translate }}\r\n         </div>\r\n         <div class=\"col-lg-9 col-sm-8 col-xs-7 text-left This-is-a-description  pr-3 pt-2 pb-2\"\r\n           [style.font-weight]=\"valueFontWeight\" [style.color]=\"valueTextColor\" [style.font-size]=\"valueTextSize\"\r\n           [style.background-color]=\"valueBgColor\">\r\n           <span class=\"c-pointer\" *ngIf=\"!chechIfArray(getKeyValue(data)['value'])\"\r\n             (click)=\"action.emit(getKeyValue(data))\"> {{ getKeyValue(data)['value'] | translate }} </span>\r\n           <div *ngIf=\"chechIfArray(getKeyValue(data)['value'])\">\r\n             <ul *ngFor=\"let val of getKeyValue(data)['value']\">\r\n               <li *ngIf=\"val.url\"><a href=\"{{val.url}}\" target=\"_blank\">{{val.name | translate}}</a></li>\r\n               <li *ngIf=\"!(val.url)\">{{val.name | translate}}</li>\r\n             </ul>\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n </div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.tableTopHeader{border-style:solid;border-top-right-radius:2rem;border-color:#303038;font-weight:700;color:#fff;background-color:#212529;margin:auto}.tableHeaderColr{background-color:#eaeaea;color:#1c1c1c}.INTEREST-NAME{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px}.This-is-a-description{font-family:\"Encode Sans\",sans-serif!important;font-size:15px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:0;color:#3e3e3e;word-break:break-word}.sukuBorderBottom{font-family:var(--suku-primary-font);border-bottom:3.5px solid;border-color:#a7bf2e;font-size:18px;font-weight:600}.tableContentColor{border-top:solid #eaeaea;border-left:solid #eaeaea;border-right:solid #eaeaea}.tblBorderRight,.tblCellBorderRight{border-right:solid #eaeaea}.marginAuto{margin:auto}.tblBorderTop{border-top:solid #eaeaea}.tblBorderLeft{border-left:solid #eaeaea}.tblBorderBottom{border-bottom:solid #eaeaea}.tableEndColor{border-bottom-left-radius:2rem}.pR-0{padding-right:0!important}.pL-0{padding-left:0!important}.keyText{font-family:var(--suku-primary-font);font-weight:600}.tableBorderBottomRadius{border-bottom-left-radius:2rem}@media (max-width:575px){.tblCellBorderRight{border-right:none}.mobilePadding{padding:0!important}}.c-pointer{cursor:pointer!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuAuthTableComponent.ctorParameters = function () { return []; };
    SukuAuthTableComponent.propDecorators = {
        tableHeading: [{ type: Input, args: ['tableHeading',] }],
        tableContent: [{ type: Input, args: ['tableContent',] }],
        headingFontWeight: [{ type: Input, args: ['headingFontWeight',] }],
        headingTextColor: [{ type: Input, args: ['headingTextColor',] }],
        headingTextSize: [{ type: Input, args: ['headingTextSize',] }],
        headingBgColor: [{ type: Input, args: ['headingBgColor',] }],
        keyFontWeight: [{ type: Input, args: ['keyFontWeight',] }],
        keyTextColor: [{ type: Input, args: ['keyTextColor',] }],
        keyTextSize: [{ type: Input, args: ['keyTextSize',] }],
        keyBgColor: [{ type: Input, args: ['keyBgColor',] }],
        valueFontWeight: [{ type: Input, args: ['valueFontWeight',] }],
        valueTextColor: [{ type: Input, args: ['valueTextColor',] }],
        valueTextSize: [{ type: Input, args: ['valueTextSize',] }],
        valueBgColor: [{ type: Input, args: ['valueBgColor',] }],
        tableBgColor: [{ type: Input, args: ['tableBgColor',] }],
        action: [{ type: Output }]
    };
    return SukuAuthTableComponent;
}());
export { SukuAuthTableComponent };
if (false) {
    /** @type {?} */
    SukuAuthTableComponent.prototype.tableHeading;
    /** @type {?} */
    SukuAuthTableComponent.prototype.tableContent;
    /** @type {?} */
    SukuAuthTableComponent.prototype.headingFontWeight;
    /** @type {?} */
    SukuAuthTableComponent.prototype.headingTextColor;
    /** @type {?} */
    SukuAuthTableComponent.prototype.headingTextSize;
    /** @type {?} */
    SukuAuthTableComponent.prototype.headingBgColor;
    /** @type {?} */
    SukuAuthTableComponent.prototype.keyFontWeight;
    /** @type {?} */
    SukuAuthTableComponent.prototype.keyTextColor;
    /** @type {?} */
    SukuAuthTableComponent.prototype.keyTextSize;
    /** @type {?} */
    SukuAuthTableComponent.prototype.keyBgColor;
    /** @type {?} */
    SukuAuthTableComponent.prototype.valueFontWeight;
    /** @type {?} */
    SukuAuthTableComponent.prototype.valueTextColor;
    /** @type {?} */
    SukuAuthTableComponent.prototype.valueTextSize;
    /** @type {?} */
    SukuAuthTableComponent.prototype.valueBgColor;
    /** @type {?} */
    SukuAuthTableComponent.prototype.tableBgColor;
    /** @type {?} */
    SukuAuthTableComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hdXRoLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWF1dGgtdGFibGUvc3VrdS1hdXRoLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQXVCRTtRQWhCdUIsaUJBQVksR0FBRyxlQUFlLENBQUM7UUFDL0IsaUJBQVksR0FBRyxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQWFqRyxpQkFBWSxHQUFHLE9BQU8sQ0FBQztRQUNwQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRWpCLHlDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7O0lBRUQsNENBQVc7Ozs7SUFBWCxVQUFZLEdBQUc7O1lBQ1QsY0FBYyxHQUFHLEVBQUU7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxHQUFHO1lBQzFCLGNBQWMsR0FBRztnQkFDZixHQUFHLEVBQUUsR0FBRztnQkFDUixLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUNoQixDQUFBO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLGNBQWMsQ0FBQTtJQUN2QixDQUFDOzs7OztJQUVELDZDQUFZOzs7O0lBQVosVUFBYSxJQUFJO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7O2dCQTlDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsbTdEQUErQzs7aUJBRWhEOzs7OzsrQkFHRSxLQUFLLFNBQUMsY0FBYzsrQkFDcEIsS0FBSyxTQUFDLGNBQWM7b0NBQ3BCLEtBQUssU0FBQyxtQkFBbUI7bUNBQ3pCLEtBQUssU0FBQyxrQkFBa0I7a0NBQ3hCLEtBQUssU0FBQyxpQkFBaUI7aUNBQ3ZCLEtBQUssU0FBQyxnQkFBZ0I7Z0NBQ3RCLEtBQUssU0FBQyxlQUFlOytCQUNyQixLQUFLLFNBQUMsY0FBYzs4QkFDcEIsS0FBSyxTQUFDLGFBQWE7NkJBQ25CLEtBQUssU0FBQyxZQUFZO2tDQUNsQixLQUFLLFNBQUMsaUJBQWlCO2lDQUN2QixLQUFLLFNBQUMsZ0JBQWdCO2dDQUN0QixLQUFLLFNBQUMsZUFBZTsrQkFDckIsS0FBSyxTQUFDLGNBQWM7K0JBQ3BCLEtBQUssU0FBQyxjQUFjO3lCQUNwQixNQUFNOztJQXlCVCw2QkFBQztDQUFBLEFBL0NELElBK0NDO1NBMUNZLHNCQUFzQjs7O0lBRWpDLDhDQUFzRDs7SUFDdEQsOENBQXdIOztJQUN4SCxtREFBOEM7O0lBQzlDLGtEQUE0Qzs7SUFDNUMsaURBQTBDOztJQUMxQyxnREFBd0M7O0lBQ3hDLCtDQUFzQzs7SUFDdEMsOENBQW9DOztJQUNwQyw2Q0FBa0M7O0lBQ2xDLDRDQUFnQzs7SUFDaEMsaURBQTBDOztJQUMxQyxnREFBd0M7O0lBQ3hDLCtDQUFzQzs7SUFDdEMsOENBQW9DOztJQUNwQyw4Q0FBOEM7O0lBQzlDLHdDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1hdXRoLXRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1hdXRoLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWF1dGgtdGFibGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUF1dGhUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgndGFibGVIZWFkaW5nJykgdGFibGVIZWFkaW5nID0gJ1RhYmxlIEhlYWRpbmcnO1xyXG4gIEBJbnB1dCgndGFibGVDb250ZW50JykgdGFibGVDb250ZW50ID0gW3sgJ2Jsb2NrbnVtYmVyJzogJzExJyB9LCB7ICdibG9ja251bWJlcjInOiAnMTEnIH0sIHsgJ2NsYWltJzogWydoZWxsbycsICd3b3InXSB9XVxyXG4gIEBJbnB1dCgnaGVhZGluZ0ZvbnRXZWlnaHQnKSBoZWFkaW5nRm9udFdlaWdodDtcclxuICBASW5wdXQoJ2hlYWRpbmdUZXh0Q29sb3InKSBoZWFkaW5nVGV4dENvbG9yO1xyXG4gIEBJbnB1dCgnaGVhZGluZ1RleHRTaXplJykgaGVhZGluZ1RleHRTaXplO1xyXG4gIEBJbnB1dCgnaGVhZGluZ0JnQ29sb3InKSBoZWFkaW5nQmdDb2xvcjtcclxuICBASW5wdXQoJ2tleUZvbnRXZWlnaHQnKSBrZXlGb250V2VpZ2h0O1xyXG4gIEBJbnB1dCgna2V5VGV4dENvbG9yJykga2V5VGV4dENvbG9yO1xyXG4gIEBJbnB1dCgna2V5VGV4dFNpemUnKSBrZXlUZXh0U2l6ZTtcclxuICBASW5wdXQoJ2tleUJnQ29sb3InKSBrZXlCZ0NvbG9yO1xyXG4gIEBJbnB1dCgndmFsdWVGb250V2VpZ2h0JykgdmFsdWVGb250V2VpZ2h0O1xyXG4gIEBJbnB1dCgndmFsdWVUZXh0Q29sb3InKSB2YWx1ZVRleHRDb2xvcjtcclxuICBASW5wdXQoJ3ZhbHVlVGV4dFNpemUnKSB2YWx1ZVRleHRTaXplO1xyXG4gIEBJbnB1dCgndmFsdWVCZ0NvbG9yJykgdmFsdWVCZ0NvbG9yO1xyXG4gIEBJbnB1dCgndGFibGVCZ0NvbG9yJykgdGFibGVCZ0NvbG9yID0gJ3doaXRlJztcclxuICBAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgZ2V0S2V5VmFsdWUob2JqKSB7XHJcbiAgICBsZXQgZm9ybWF0ZWRPYmplY3QgPSB7fTtcclxuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBmb3JtYXRlZE9iamVjdCA9IHtcclxuICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICB2YWx1ZTogb2JqW2tleV1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZm9ybWF0ZWRPYmplY3RcclxuICB9XHJcblxyXG4gIGNoZWNoSWZBcnJheShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGlmICh0eXBlb2YgKGRhdGEpID09ICdvYmplY3QnKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=