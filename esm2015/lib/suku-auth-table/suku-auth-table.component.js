/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuAuthTableComponent {
    constructor() {
        this.tableHeading = 'Table Heading';
        this.tableContent = [{ 'blocknumber': '11' }, { 'blocknumber2': '11' }, { 'claim': ['hello', 'wor'] }];
        this.tableBgColor = 'white';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    getKeyValue(obj) {
        /** @type {?} */
        let formatedObject = {};
        Object.keys(obj).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            formatedObject = {
                key: key,
                value: obj[key]
            };
        }));
        return formatedObject;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    chechIfArray(data) {
        console.log(data);
        if (typeof (data) == 'object') {
            return true;
        }
        else {
            return false;
        }
    }
}
SukuAuthTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-auth-table',
                template: " <div class=\"col mobilePadding\">\n   <div class=\"col text-center tableTopHeader keyText\" [style.font-weight]=\"headingFontWeight\"\n     [style.color]=\"headingTextColor\" [style.font-size]=\"headingTextSize\" [style.background-color]=\"headingBgColor\">\n     {{ tableHeading }}\n   </div>\n   <div *ngFor=\"let data of tableContent; let i = index\">\n     <div\n       class=\"text-center tblBorderRight tblBorderLeft  {{(i != 0) ? ('tblBorderTop') : ('')}}  {{(i == tableContent.length - 1) ? ('tableEndColor tblBorderBottom tableBorderBottomRadius') : ('')}}\"\n       [style.background-color]=\"tableBgColor\">\n       <div class=\"col row\">\n         <div class=\"col-lg-3 col-sm-4 col-xs-5 text-left tblCellBorderRight keyText  pr-3 pt-2 pb-2\"\n           [style.font-weight]=\"keyFontWeight\" [style.color]=\"keyTextColor\" [style.font-size]=\"keyTextSize\"\n           [style.background-color]=\"keyBgColor\">\n           {{ getKeyValue(data)['key'] | translate }}\n         </div>\n         <div class=\"col-lg-9 col-sm-8 col-xs-7 text-left This-is-a-description  pr-3 pt-2 pb-2\"\n           [style.font-weight]=\"valueFontWeight\" [style.color]=\"valueTextColor\" [style.font-size]=\"valueTextSize\"\n           [style.background-color]=\"valueBgColor\">\n           <span *ngIf=\"!chechIfArray(getKeyValue(data)['value'])\"> {{ getKeyValue(data)['value'] }} </span>\n           <div *ngIf=\"chechIfArray(getKeyValue(data)['value'])\">\n             <ul *ngFor=\"let val of getKeyValue(data)['value']\">\n               <li>{{val}}</li>\n             </ul>\n           </div>\n         </div>\n       </div>\n     </div>\n   </div>\n </div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.tableTopHeader{border-style:solid;border-top-right-radius:2rem;border-color:#303038;font-weight:700;color:#fff;background-color:#212529;margin:auto}.tableHeaderColr{background-color:#eaeaea;color:#1c1c1c}.INTEREST-NAME{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px}.This-is-a-description{font-family:\"Encode Sans\",sans-serif!important;font-size:15px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:0;color:#3e3e3e;word-break:break-word}.sukuBorderBottom{font-family:var(--suku-primary-font);border-bottom:3.5px solid;border-color:#a7bf2e;font-size:18px;font-weight:600}.tableContentColor{border-top:solid #eaeaea;border-left:solid #eaeaea;border-right:solid #eaeaea}.tblBorderRight,.tblCellBorderRight{border-right:solid #eaeaea}.marginAuto{margin:auto}.tblBorderTop{border-top:solid #eaeaea}.tblBorderLeft{border-left:solid #eaeaea}.tblBorderBottom{border-bottom:solid #eaeaea}.tableEndColor{border-bottom-left-radius:2rem}.pR-0{padding-right:0!important}.pL-0{padding-left:0!important}.keyText{font-family:var(--suku-primary-font);font-weight:600}.tableBorderBottomRadius{border-bottom-left-radius:2rem}@media (max-width:575px){.tblCellBorderRight{border-right:none}.mobilePadding{padding:0!important}}"]
            }] }
];
/** @nocollapse */
SukuAuthTableComponent.ctorParameters = () => [];
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
    tableBgColor: [{ type: Input, args: ['tableBgColor',] }]
};
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hdXRoLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWF1dGgtdGFibGUvc3VrdS1hdXRoLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHNCQUFzQjtJQWlCakM7UUFmdUIsaUJBQVksR0FBRyxlQUFlLENBQUM7UUFDL0IsaUJBQVksR0FBRyxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQWFqRyxpQkFBWSxHQUFHLE9BQU8sQ0FBQztJQUM5QixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxHQUFHOztZQUNULGNBQWMsR0FBRyxFQUFFO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLGNBQWMsR0FBRztnQkFDZixHQUFHLEVBQUUsR0FBRztnQkFDUixLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUNoQixDQUFBO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLGNBQWMsQ0FBQTtJQUN2QixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxJQUFJO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0Isc29EQUErQzs7YUFFaEQ7Ozs7OzJCQUdFLEtBQUssU0FBQyxjQUFjOzJCQUNwQixLQUFLLFNBQUMsY0FBYztnQ0FDcEIsS0FBSyxTQUFDLG1CQUFtQjsrQkFDekIsS0FBSyxTQUFDLGtCQUFrQjs4QkFDeEIsS0FBSyxTQUFDLGlCQUFpQjs2QkFDdkIsS0FBSyxTQUFDLGdCQUFnQjs0QkFDdEIsS0FBSyxTQUFDLGVBQWU7MkJBQ3JCLEtBQUssU0FBQyxjQUFjOzBCQUNwQixLQUFLLFNBQUMsYUFBYTt5QkFDbkIsS0FBSyxTQUFDLFlBQVk7OEJBQ2xCLEtBQUssU0FBQyxpQkFBaUI7NkJBQ3ZCLEtBQUssU0FBQyxnQkFBZ0I7NEJBQ3RCLEtBQUssU0FBQyxlQUFlOzJCQUNyQixLQUFLLFNBQUMsY0FBYzsyQkFDcEIsS0FBSyxTQUFDLGNBQWM7Ozs7SUFkckIsOENBQXNEOztJQUN0RCw4Q0FBd0g7O0lBQ3hILG1EQUE4Qzs7SUFDOUMsa0RBQTRDOztJQUM1QyxpREFBMEM7O0lBQzFDLGdEQUF3Qzs7SUFDeEMsK0NBQXNDOztJQUN0Qyw4Q0FBb0M7O0lBQ3BDLDZDQUFrQzs7SUFDbEMsNENBQWdDOztJQUNoQyxpREFBMEM7O0lBQzFDLGdEQUF3Qzs7SUFDeEMsK0NBQXNDOztJQUN0Qyw4Q0FBb0M7O0lBQ3BDLDhDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWF1dGgtdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1hdXRoLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1hdXRoLXRhYmxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUF1dGhUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCd0YWJsZUhlYWRpbmcnKSB0YWJsZUhlYWRpbmcgPSAnVGFibGUgSGVhZGluZyc7XG4gIEBJbnB1dCgndGFibGVDb250ZW50JykgdGFibGVDb250ZW50ID0gW3sgJ2Jsb2NrbnVtYmVyJzogJzExJyB9LCB7ICdibG9ja251bWJlcjInOiAnMTEnIH0sIHsgJ2NsYWltJzogWydoZWxsbycsICd3b3InXSB9XVxuICBASW5wdXQoJ2hlYWRpbmdGb250V2VpZ2h0JykgaGVhZGluZ0ZvbnRXZWlnaHQ7XG4gIEBJbnB1dCgnaGVhZGluZ1RleHRDb2xvcicpIGhlYWRpbmdUZXh0Q29sb3I7XG4gIEBJbnB1dCgnaGVhZGluZ1RleHRTaXplJykgaGVhZGluZ1RleHRTaXplO1xuICBASW5wdXQoJ2hlYWRpbmdCZ0NvbG9yJykgaGVhZGluZ0JnQ29sb3I7XG4gIEBJbnB1dCgna2V5Rm9udFdlaWdodCcpIGtleUZvbnRXZWlnaHQ7XG4gIEBJbnB1dCgna2V5VGV4dENvbG9yJykga2V5VGV4dENvbG9yO1xuICBASW5wdXQoJ2tleVRleHRTaXplJykga2V5VGV4dFNpemU7XG4gIEBJbnB1dCgna2V5QmdDb2xvcicpIGtleUJnQ29sb3I7XG4gIEBJbnB1dCgndmFsdWVGb250V2VpZ2h0JykgdmFsdWVGb250V2VpZ2h0O1xuICBASW5wdXQoJ3ZhbHVlVGV4dENvbG9yJykgdmFsdWVUZXh0Q29sb3I7XG4gIEBJbnB1dCgndmFsdWVUZXh0U2l6ZScpIHZhbHVlVGV4dFNpemU7XG4gIEBJbnB1dCgndmFsdWVCZ0NvbG9yJykgdmFsdWVCZ0NvbG9yO1xuICBASW5wdXQoJ3RhYmxlQmdDb2xvcicpIHRhYmxlQmdDb2xvciA9ICd3aGl0ZSc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBnZXRLZXlWYWx1ZShvYmopIHtcbiAgICBsZXQgZm9ybWF0ZWRPYmplY3QgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGZvcm1hdGVkT2JqZWN0ID0ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdmFsdWU6IG9ialtrZXldXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvcm1hdGVkT2JqZWN0XG4gIH1cblxuICBjaGVjaElmQXJyYXkoZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGlmICh0eXBlb2YgKGRhdGEpID09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19