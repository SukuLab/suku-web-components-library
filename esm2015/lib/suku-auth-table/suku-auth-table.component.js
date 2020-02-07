/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-auth-table/suku-auth-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuAuthTableComponent {
    constructor() {
        this.tableHeading = 'Table Heading';
        this.tableContent = [{ 'blocknumber': '11' }, { 'blocknumber2': '11' }, { 'claim': ['hello', 'wor'] }];
        this.tableBgColor = 'white';
        this.linkKey = [];
        this.action = new EventEmitter();
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
    /**
     * @param {?} key
     * @return {?}
     */
    chkKeyLink(key) {
        if (this.linkKey) {
            return this.linkKey.some((/**
             * @param {?} k
             * @return {?}
             */
            k => {
                return k === key;
            }));
        }
    }
}
SukuAuthTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-auth-table',
                template: " <div class=\"col mobilePadding\">\n   <div class=\"col text-center tableTopHeader keyText\" [style.font-weight]=\"headingFontWeight\"\n     [style.color]=\"headingTextColor\" [style.font-size]=\"headingTextSize\" [style.background-color]=\"headingBgColor\">\n     {{ tableHeading }}\n   </div>\n   <div *ngFor=\"let data of tableContent; let i = index\">\n     <div\n       class=\"text-center tblBorderRight tblBorderLeft  {{(i != 0) ? ('tblBorderTop') : ('')}}  {{(i == tableContent.length - 1) ? ('tableEndColor tblBorderBottom tableBorderBottomRadius') : ('')}}\"\n       [style.background-color]=\"tableBgColor\">\n       <div class=\"col row\">\n         <div class=\"col-lg-3 col-sm-4 col-xs-5 text-left tblCellBorderRight keyText  pr-3 pt-2 pb-2\"\n           [style.font-weight]=\"keyFontWeight\" [style.color]=\"keyTextColor\" [style.font-size]=\"keyTextSize\"\n           [style.background-color]=\"keyBgColor\">\n           {{ getKeyValue(data)['key'] | translate }}\n         </div>\n         <div class=\"col-lg-9 col-sm-8 col-xs-7 text-left This-is-a-description  pr-3 pt-2 pb-2\"\n           [style.font-weight]=\"valueFontWeight\" [style.color]=\"valueTextColor\" [style.font-size]=\"valueTextSize\"\n           [style.background-color]=\"valueBgColor\">\n           <span *ngIf=\"!chechIfArray(getKeyValue(data)['value'])\">\n             <span [ngClass]=\"{'c-pointer' : chkKeyLink(getKeyValue(data)['key'])}\"\n               (click)=\"action.emit(getKeyValue(data))\">\n               {{ getKeyValue(data)['value'] | translate }} </span>\n           </span>\n           <div *ngIf=\"chechIfArray(getKeyValue(data)['value'])\">\n             <ul *ngFor=\"let val of getKeyValue(data)['value']\">\n               <li *ngIf=\"val.url\"><a href=\"{{val.url}}\" target=\"_blank\">{{val.name | translate}}</a></li>\n               <li *ngIf=\"!(val.url)\">{{val.name | translate}}</li>\n             </ul>\n           </div>\n         </div>\n       </div>\n     </div>\n   </div>\n </div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.tableTopHeader{border-style:solid;border-top-right-radius:2rem;border-color:#303038;font-weight:700;color:#fff;background-color:#212529;margin:auto}.tableHeaderColr{background-color:#eaeaea;color:#1c1c1c}.INTEREST-NAME{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px}.This-is-a-description{font-family:\"Encode Sans\",sans-serif!important;font-size:15px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:0;color:#3e3e3e;word-break:break-word}.sukuBorderBottom{font-family:var(--suku-primary-font);border-bottom:3.5px solid;border-color:#a7bf2e;font-size:18px;font-weight:600}.tableContentColor{border-top:solid #eaeaea;border-left:solid #eaeaea;border-right:solid #eaeaea}.tblBorderRight,.tblCellBorderRight{border-right:solid #eaeaea}.marginAuto{margin:auto}.tblBorderTop{border-top:solid #eaeaea}.tblBorderLeft{border-left:solid #eaeaea}.tblBorderBottom{border-bottom:solid #eaeaea}.tableEndColor{border-bottom-left-radius:2rem}.pR-0{padding-right:0!important}.pL-0{padding-left:0!important}.keyText{font-family:var(--suku-primary-font);font-weight:600}.tableBorderBottomRadius{border-bottom-left-radius:2rem}@media (max-width:575px){.tblCellBorderRight{border-right:none}.mobilePadding{padding:0!important}}.c-pointer{cursor:pointer!important;color:#007bff}.c-pointer:hover{text-decoration:underline}"]
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
    tableBgColor: [{ type: Input, args: ['tableBgColor',] }],
    linkKey: [{ type: Input }],
    action: [{ type: Output }]
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
    /** @type {?} */
    SukuAuthTableComponent.prototype.linkKey;
    /** @type {?} */
    SukuAuthTableComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hdXRoLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWF1dGgtdGFibGUvc3VrdS1hdXRoLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0UsTUFBTSxPQUFPLHNCQUFzQjtJQW1CakM7UUFqQnVCLGlCQUFZLEdBQUcsZUFBZSxDQUFDO1FBQy9CLGlCQUFZLEdBQUcsQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7UUFhakcsaUJBQVksR0FBRyxPQUFPLENBQUM7UUFDckMsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNaLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEdBQUc7O1lBQ1QsY0FBYyxHQUFHLEVBQUU7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsY0FBYyxHQUFHO2dCQUNmLEdBQUcsRUFBRSxHQUFHO2dCQUNSLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDO2FBQ2hCLENBQUE7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQUk7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsR0FBRztRQUNaLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzQixPQUFPLENBQUMsS0FBSyxHQUFHLENBQUM7WUFDbkIsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQXZERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsaStEQUErQzs7YUFFaEQ7Ozs7OzJCQUdFLEtBQUssU0FBQyxjQUFjOzJCQUNwQixLQUFLLFNBQUMsY0FBYztnQ0FDcEIsS0FBSyxTQUFDLG1CQUFtQjsrQkFDekIsS0FBSyxTQUFDLGtCQUFrQjs4QkFDeEIsS0FBSyxTQUFDLGlCQUFpQjs2QkFDdkIsS0FBSyxTQUFDLGdCQUFnQjs0QkFDdEIsS0FBSyxTQUFDLGVBQWU7MkJBQ3JCLEtBQUssU0FBQyxjQUFjOzBCQUNwQixLQUFLLFNBQUMsYUFBYTt5QkFDbkIsS0FBSyxTQUFDLFlBQVk7OEJBQ2xCLEtBQUssU0FBQyxpQkFBaUI7NkJBQ3ZCLEtBQUssU0FBQyxnQkFBZ0I7NEJBQ3RCLEtBQUssU0FBQyxlQUFlOzJCQUNyQixLQUFLLFNBQUMsY0FBYzsyQkFDcEIsS0FBSyxTQUFDLGNBQWM7c0JBQ3BCLEtBQUs7cUJBQ0wsTUFBTTs7OztJQWhCUCw4Q0FBc0Q7O0lBQ3RELDhDQUF3SDs7SUFDeEgsbURBQThDOztJQUM5QyxrREFBNEM7O0lBQzVDLGlEQUEwQzs7SUFDMUMsZ0RBQXdDOztJQUN4QywrQ0FBc0M7O0lBQ3RDLDhDQUFvQzs7SUFDcEMsNkNBQWtDOztJQUNsQyw0Q0FBZ0M7O0lBQ2hDLGlEQUEwQzs7SUFDMUMsZ0RBQXdDOztJQUN4QywrQ0FBc0M7O0lBQ3RDLDhDQUFvQzs7SUFDcEMsOENBQThDOztJQUM5Qyx5Q0FBc0I7O0lBQ3RCLHdDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1hdXRoLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtYXV0aC10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtYXV0aC10YWJsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VBdXRoVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgndGFibGVIZWFkaW5nJykgdGFibGVIZWFkaW5nID0gJ1RhYmxlIEhlYWRpbmcnO1xuICBASW5wdXQoJ3RhYmxlQ29udGVudCcpIHRhYmxlQ29udGVudCA9IFt7ICdibG9ja251bWJlcic6ICcxMScgfSwgeyAnYmxvY2tudW1iZXIyJzogJzExJyB9LCB7ICdjbGFpbSc6IFsnaGVsbG8nLCAnd29yJ10gfV1cbiAgQElucHV0KCdoZWFkaW5nRm9udFdlaWdodCcpIGhlYWRpbmdGb250V2VpZ2h0O1xuICBASW5wdXQoJ2hlYWRpbmdUZXh0Q29sb3InKSBoZWFkaW5nVGV4dENvbG9yO1xuICBASW5wdXQoJ2hlYWRpbmdUZXh0U2l6ZScpIGhlYWRpbmdUZXh0U2l6ZTtcbiAgQElucHV0KCdoZWFkaW5nQmdDb2xvcicpIGhlYWRpbmdCZ0NvbG9yO1xuICBASW5wdXQoJ2tleUZvbnRXZWlnaHQnKSBrZXlGb250V2VpZ2h0O1xuICBASW5wdXQoJ2tleVRleHRDb2xvcicpIGtleVRleHRDb2xvcjtcbiAgQElucHV0KCdrZXlUZXh0U2l6ZScpIGtleVRleHRTaXplO1xuICBASW5wdXQoJ2tleUJnQ29sb3InKSBrZXlCZ0NvbG9yO1xuICBASW5wdXQoJ3ZhbHVlRm9udFdlaWdodCcpIHZhbHVlRm9udFdlaWdodDtcbiAgQElucHV0KCd2YWx1ZVRleHRDb2xvcicpIHZhbHVlVGV4dENvbG9yO1xuICBASW5wdXQoJ3ZhbHVlVGV4dFNpemUnKSB2YWx1ZVRleHRTaXplO1xuICBASW5wdXQoJ3ZhbHVlQmdDb2xvcicpIHZhbHVlQmdDb2xvcjtcbiAgQElucHV0KCd0YWJsZUJnQ29sb3InKSB0YWJsZUJnQ29sb3IgPSAnd2hpdGUnO1xuICBASW5wdXQoKSBsaW5rS2V5ID0gW107XG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBnZXRLZXlWYWx1ZShvYmopIHtcbiAgICBsZXQgZm9ybWF0ZWRPYmplY3QgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGZvcm1hdGVkT2JqZWN0ID0ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdmFsdWU6IG9ialtrZXldXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvcm1hdGVkT2JqZWN0O1xuICB9XG5cbiAgY2hlY2hJZkFycmF5KGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBpZiAodHlwZW9mIChkYXRhKSA9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjaGtLZXlMaW5rKGtleSkge1xuICAgIGlmICh0aGlzLmxpbmtLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmxpbmtLZXkuc29tZShrID0+IHtcbiAgICAgICAgcmV0dXJuIGsgPT09IGtleTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19