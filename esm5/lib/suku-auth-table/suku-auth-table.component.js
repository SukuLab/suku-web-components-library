/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-auth-table/suku-auth-table.component.ts
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
                    template: " <div class=\"col mobilePadding\">\n   <div class=\"col text-center tableTopHeader keyText\" [style.font-weight]=\"headingFontWeight\"\n     [style.color]=\"headingTextColor\" [style.font-size]=\"headingTextSize\" [style.background-color]=\"headingBgColor\">\n     {{ tableHeading }}\n   </div>\n   <div *ngFor=\"let data of tableContent; let i = index\">\n     <div\n       class=\"text-center tblBorderRight tblBorderLeft  {{(i != 0) ? ('tblBorderTop') : ('')}}  {{(i == tableContent.length - 1) ? ('tableEndColor tblBorderBottom tableBorderBottomRadius') : ('')}}\"\n       [style.background-color]=\"tableBgColor\">\n       <div class=\"col row\">\n         <div class=\"col-lg-3 col-sm-4 col-xs-5 text-left tblCellBorderRight keyText  pr-3 pt-2 pb-2\"\n           [style.font-weight]=\"keyFontWeight\" [style.color]=\"keyTextColor\" [style.font-size]=\"keyTextSize\"\n           [style.background-color]=\"keyBgColor\">\n           {{ getKeyValue(data)['key'] | translate }}\n         </div>\n         <div class=\"col-lg-9 col-sm-8 col-xs-7 text-left This-is-a-description  pr-3 pt-2 pb-2\"\n           [style.font-weight]=\"valueFontWeight\" [style.color]=\"valueTextColor\" [style.font-size]=\"valueTextSize\"\n           [style.background-color]=\"valueBgColor\">\n           <span class=\"c-pointer\" *ngIf=\"!chechIfArray(getKeyValue(data)['value'])\" (click)=\"action.emit(getKeyValue(data))\"> {{ getKeyValue(data)['value'] }} </span>\n           <div *ngIf=\"chechIfArray(getKeyValue(data)['value'])\">\n             <ul *ngFor=\"let val of getKeyValue(data)['value']\">\n               <li *ngIf=\"val.url\"><a href=\"{{val.url}}\" target=\"_blank\" >{{val.name}}</a></li>\n               <li *ngIf=\"!(val.url)\">{{val.name}}</li>\n             </ul>\n           </div>\n         </div>\n       </div>\n     </div>\n   </div>\n </div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hdXRoLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWF1dGgtdGFibGUvc3VrdS1hdXRoLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0U7SUF1QkU7UUFoQnVCLGlCQUFZLEdBQUcsZUFBZSxDQUFDO1FBQy9CLGlCQUFZLEdBQUcsQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7UUFhakcsaUJBQVksR0FBRyxPQUFPLENBQUM7UUFDcEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVqQix5Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVELDRDQUFXOzs7O0lBQVgsVUFBWSxHQUFHOztZQUNULGNBQWMsR0FBRyxFQUFFO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsR0FBRztZQUMxQixjQUFjLEdBQUc7Z0JBQ2YsR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDaEIsQ0FBQTtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxjQUFjLENBQUE7SUFDdkIsQ0FBQzs7Ozs7SUFFRCw2Q0FBWTs7OztJQUFaLFVBQWEsSUFBSTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDOztnQkE5Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHMwREFBK0M7O2lCQUVoRDs7Ozs7K0JBR0UsS0FBSyxTQUFDLGNBQWM7K0JBQ3BCLEtBQUssU0FBQyxjQUFjO29DQUNwQixLQUFLLFNBQUMsbUJBQW1CO21DQUN6QixLQUFLLFNBQUMsa0JBQWtCO2tDQUN4QixLQUFLLFNBQUMsaUJBQWlCO2lDQUN2QixLQUFLLFNBQUMsZ0JBQWdCO2dDQUN0QixLQUFLLFNBQUMsZUFBZTsrQkFDckIsS0FBSyxTQUFDLGNBQWM7OEJBQ3BCLEtBQUssU0FBQyxhQUFhOzZCQUNuQixLQUFLLFNBQUMsWUFBWTtrQ0FDbEIsS0FBSyxTQUFDLGlCQUFpQjtpQ0FDdkIsS0FBSyxTQUFDLGdCQUFnQjtnQ0FDdEIsS0FBSyxTQUFDLGVBQWU7K0JBQ3JCLEtBQUssU0FBQyxjQUFjOytCQUNwQixLQUFLLFNBQUMsY0FBYzt5QkFDcEIsTUFBTTs7SUF5QlQsNkJBQUM7Q0FBQSxBQS9DRCxJQStDQztTQTFDWSxzQkFBc0I7OztJQUVqQyw4Q0FBc0Q7O0lBQ3RELDhDQUF3SDs7SUFDeEgsbURBQThDOztJQUM5QyxrREFBNEM7O0lBQzVDLGlEQUEwQzs7SUFDMUMsZ0RBQXdDOztJQUN4QywrQ0FBc0M7O0lBQ3RDLDhDQUFvQzs7SUFDcEMsNkNBQWtDOztJQUNsQyw0Q0FBZ0M7O0lBQ2hDLGlEQUEwQzs7SUFDMUMsZ0RBQXdDOztJQUN4QywrQ0FBc0M7O0lBQ3RDLDhDQUFvQzs7SUFDcEMsOENBQThDOztJQUM5Qyx3Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtYXV0aC10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWF1dGgtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWF1dGgtdGFibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1QXV0aFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoJ3RhYmxlSGVhZGluZycpIHRhYmxlSGVhZGluZyA9ICdUYWJsZSBIZWFkaW5nJztcbiAgQElucHV0KCd0YWJsZUNvbnRlbnQnKSB0YWJsZUNvbnRlbnQgPSBbeyAnYmxvY2tudW1iZXInOiAnMTEnIH0sIHsgJ2Jsb2NrbnVtYmVyMic6ICcxMScgfSwgeyAnY2xhaW0nOiBbJ2hlbGxvJywgJ3dvciddIH1dXG4gIEBJbnB1dCgnaGVhZGluZ0ZvbnRXZWlnaHQnKSBoZWFkaW5nRm9udFdlaWdodDtcbiAgQElucHV0KCdoZWFkaW5nVGV4dENvbG9yJykgaGVhZGluZ1RleHRDb2xvcjtcbiAgQElucHV0KCdoZWFkaW5nVGV4dFNpemUnKSBoZWFkaW5nVGV4dFNpemU7XG4gIEBJbnB1dCgnaGVhZGluZ0JnQ29sb3InKSBoZWFkaW5nQmdDb2xvcjtcbiAgQElucHV0KCdrZXlGb250V2VpZ2h0Jykga2V5Rm9udFdlaWdodDtcbiAgQElucHV0KCdrZXlUZXh0Q29sb3InKSBrZXlUZXh0Q29sb3I7XG4gIEBJbnB1dCgna2V5VGV4dFNpemUnKSBrZXlUZXh0U2l6ZTtcbiAgQElucHV0KCdrZXlCZ0NvbG9yJykga2V5QmdDb2xvcjtcbiAgQElucHV0KCd2YWx1ZUZvbnRXZWlnaHQnKSB2YWx1ZUZvbnRXZWlnaHQ7XG4gIEBJbnB1dCgndmFsdWVUZXh0Q29sb3InKSB2YWx1ZVRleHRDb2xvcjtcbiAgQElucHV0KCd2YWx1ZVRleHRTaXplJykgdmFsdWVUZXh0U2l6ZTtcbiAgQElucHV0KCd2YWx1ZUJnQ29sb3InKSB2YWx1ZUJnQ29sb3I7XG4gIEBJbnB1dCgndGFibGVCZ0NvbG9yJykgdGFibGVCZ0NvbG9yID0gJ3doaXRlJztcbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGdldEtleVZhbHVlKG9iaikge1xuICAgIGxldCBmb3JtYXRlZE9iamVjdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgZm9ybWF0ZWRPYmplY3QgPSB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB2YWx1ZTogb2JqW2tleV1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm9ybWF0ZWRPYmplY3RcbiAgfVxuXG4gIGNoZWNoSWZBcnJheShkYXRhKSB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgaWYgKHR5cGVvZiAoZGF0YSkgPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=