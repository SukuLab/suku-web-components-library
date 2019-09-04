/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuDisplayTableComponent = /** @class */ (function () {
    function SukuDisplayTableComponent() {
        this.headerContent = 'cjkcsnns sjkcs jkkjs kjkjd kjdfkjdf jkdf';
        this.titleOneColor = 'white';
        this.titleOneCustomClass = '';
        this.titleContent = 'No-Data';
        this.headerSize = '14px';
        this.dataSize = '12px';
        this.hrefSelection = 'lotid';
        this.colorPallete = ["#a3ded8", "#f8dbb4", "#c7c3fa", "gray"];
        this.status = ["completed", "not-completed", "pending", 'others'];
    }
    Object.defineProperty(SukuDisplayTableComponent.prototype, "tableData", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tableData;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._tableData = val;
            if (this._tableData[0]) {
                this.tableDataKey = Object.keys(this._tableData[0]);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SukuDisplayTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuDisplayTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-display-table',
                    template: "<div class=\"col content\">\n  <div class=\"header\">\n    <div class=\"col pt-4 pb-4\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{titleOneCustomClass}}\"\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">\n            {{titleContent}}\n          </h1>\n        </div>\n      </div>\n    </div>\n  </div>\n  <table class=\"table table-striped \">\n    <thead>\n      <tr>\n        <th [style.color]=\"headerColor\" [style.font-size.px]=\"headerSize\" [style.font-weight]=\"headerWeight\"\n          *ngFor=\"let header of header;\" id=\"{{header.id}}\">{{header.title}}</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of tableData;\">\n        <td *ngFor=\"let key of tableDataKey;\" [style.color]=\"dataColor\" [style.font-size.px]=\"dataSize\"\n          [style.font-weight]=\"dataWeight\"\n          [style.background-color]=\"\n        (data[key] === status[0]) ? colorPallete[0]: (data[key] === status[1]) ? colorPallete[1]: (data[key] === status[2]) ? colorPallete[2] :(data[key] === status[3]) ? colorPallete[3] : 'white'\">\n          <a *ngIf=\"key === hrefSelection\" href=\"{{data[key]}}\">{{data[key]}}</a>\n          <span *ngIf=\"!(key === hrefSelection)\">{{data[key]}}</span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.header{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.title{font-family:var(--suku-primary-font);font-weight:600;font-size:var(--suku-font-size-6);text-transform:uppercase}.table{font-family:var(--suku-primary-font)}"]
                }] }
    ];
    /** @nocollapse */
    SukuDisplayTableComponent.ctorParameters = function () { return []; };
    SukuDisplayTableComponent.propDecorators = {
        header: [{ type: Input, args: ['table-header',] }],
        headerContent: [{ type: Input, args: ['table-header-content',] }],
        tableData: [{ type: Input, args: ['table-data',] }],
        titleOneId: [{ type: Input, args: ['title-one-id',] }],
        titleOneSize: [{ type: Input, args: ['title-one-size',] }],
        titleOneColor: [{ type: Input, args: ['title-one-color',] }],
        titleOneWeight: [{ type: Input, args: ['title-one-weight',] }],
        titleOneCustomClass: [{ type: Input, args: ['title-one-custom-class',] }],
        titleContent: [{ type: Input, args: ['title-one-Content',] }],
        headerSize: [{ type: Input, args: ['header-size',] }],
        headerColor: [{ type: Input, args: ['header-color',] }],
        headerWeight: [{ type: Input, args: ['header-weight',] }],
        dataSize: [{ type: Input, args: ['data-size',] }],
        dataColor: [{ type: Input, args: ['data-color',] }],
        dataWeight: [{ type: Input, args: ['data-weight',] }],
        hrefSelection: [{ type: Input, args: ['data-href',] }],
        colorPallete: [{ type: Input, args: ['status-bg-style',] }],
        status: [{ type: Input, args: ['status',] }]
    };
    return SukuDisplayTableComponent;
}());
export { SukuDisplayTableComponent };
if (false) {
    /** @type {?} */
    SukuDisplayTableComponent.prototype.header;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.headerContent;
    /** @type {?} */
    SukuDisplayTableComponent.prototype._tableData;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.tableDataKey;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.titleOneId;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.titleOneSize;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.titleOneColor;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.titleOneWeight;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.titleOneCustomClass;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.titleContent;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.headerSize;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.headerColor;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.headerWeight;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.dataSize;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.dataColor;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.dataWeight;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.hrefSelection;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.colorPallete;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.status;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWRpc3BsYXktdGFibGUvc3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBRy9FO0lBcUNFO1FBOUIrQixrQkFBYSxHQUFFLDBDQUEwQyxDQUFDO1FBaUJoRSxrQkFBYSxHQUFHLE9BQU8sQ0FBQztRQUVoQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDOUIsaUJBQVksR0FBRSxTQUFTLENBQUM7UUFDOUIsZUFBVSxHQUFFLE1BQU0sQ0FBQztRQUdyQixhQUFRLEdBQUcsTUFBTSxDQUFDO1FBR2xCLGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBQ2xCLGlCQUFZLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsRSxXQUFNLEdBQUcsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBQyxRQUFRLENBQUMsQ0FBQztJQUU3RSxDQUFDO0lBM0JELHNCQUNJLGdEQUFTOzs7O1FBRGI7WUFFRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7Ozs7UUFFRCxVQUFjLEdBQUc7WUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDckQ7UUFDSCxDQUFDOzs7T0FQQTs7OztJQXlCRCw0Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkF4Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLG02Q0FBa0Q7O2lCQUVuRDs7Ozs7eUJBRUUsS0FBSyxTQUFDLGNBQWM7Z0NBQ3BCLEtBQUssU0FBQyxzQkFBc0I7NEJBSTVCLEtBQUssU0FBQyxZQUFZOzZCQVdsQixLQUFLLFNBQUMsY0FBYzsrQkFDckIsS0FBSyxTQUFDLGdCQUFnQjtnQ0FDdEIsS0FBSyxTQUFDLGlCQUFpQjtpQ0FDdkIsS0FBSyxTQUFDLGtCQUFrQjtzQ0FDdkIsS0FBSyxTQUFDLHdCQUF3QjsrQkFDOUIsS0FBSyxTQUFDLG1CQUFtQjs2QkFDekIsS0FBSyxTQUFDLGFBQWE7OEJBQ3BCLEtBQUssU0FBQyxjQUFjOytCQUNuQixLQUFLLFNBQUMsZUFBZTsyQkFDckIsS0FBSyxTQUFDLFdBQVc7NEJBQ2xCLEtBQUssU0FBQyxZQUFZOzZCQUNqQixLQUFLLFNBQUMsYUFBYTtnQ0FDbkIsS0FBSyxTQUFDLFdBQVc7K0JBQ2pCLEtBQUssU0FBQyxpQkFBaUI7eUJBQ3ZCLEtBQUssU0FBQyxRQUFROztJQU1qQixnQ0FBQztDQUFBLEFBMUNELElBMENDO1NBckNZLHlCQUF5Qjs7O0lBQ3BDLDJDQUE4Qjs7SUFDOUIsa0RBQXlGOztJQUN6RiwrQ0FBZ0I7O0lBQ2hCLGlEQUFhOztJQWFiLCtDQUFrQzs7SUFDbkMsaURBQXNDOztJQUN0QyxrREFBa0Q7O0lBQ2xELG1EQUEwQzs7SUFDekMsd0RBQTBEOztJQUMxRCxpREFBb0Q7O0lBQ3BELCtDQUF5Qzs7SUFDMUMsZ0RBQW1DOztJQUNsQyxpREFBcUM7O0lBQ3JDLDZDQUFzQzs7SUFDdkMsOENBQStCOztJQUM5QiwrQ0FBaUM7O0lBQ2pDLGtEQUE0Qzs7SUFDNUMsaURBQW1GOztJQUNuRiwyQ0FBNkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZGlzcGxheS10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWRpc3BsYXktdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWRpc3BsYXktdGFibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1RGlzcGxheVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCd0YWJsZS1oZWFkZXInKSBoZWFkZXI7XG4gIEBJbnB1dCgndGFibGUtaGVhZGVyLWNvbnRlbnQnKSBoZWFkZXJDb250ZW50PSAnY2prY3NubnMgc2prY3MgamtranMga2pramQga2pkZmtqZGYgamtkZic7XG4gIF90YWJsZURhdGE6IGFueTtcbiAgdGFibGVEYXRhS2V5O1xuXG4gIEBJbnB1dCgndGFibGUtZGF0YScpXG4gIGdldCB0YWJsZURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlRGF0YTtcbiAgfVxuXG4gIHNldCB0YWJsZURhdGEodmFsKSB7XG4gICAgdGhpcy5fdGFibGVEYXRhID0gdmFsO1xuICAgIGlmICh0aGlzLl90YWJsZURhdGFbMF0pIHtcbiAgICAgIHRoaXMudGFibGVEYXRhS2V5ID0gT2JqZWN0LmtleXModGhpcy5fdGFibGVEYXRhWzBdKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCd0aXRsZS1vbmUtaWQnKSB0aXRsZU9uZUlkO1xuXHRASW5wdXQoJ3RpdGxlLW9uZS1zaXplJykgdGl0bGVPbmVTaXplO1xuXHRASW5wdXQoJ3RpdGxlLW9uZS1jb2xvcicpIHRpdGxlT25lQ29sb3IgPSAnd2hpdGUnO1xuXHRASW5wdXQoJ3RpdGxlLW9uZS13ZWlnaHQnKSB0aXRsZU9uZVdlaWdodDtcbiAgQElucHV0KCd0aXRsZS1vbmUtY3VzdG9tLWNsYXNzJykgdGl0bGVPbmVDdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoJ3RpdGxlLW9uZS1Db250ZW50JykgdGl0bGVDb250ZW50PSAnTm8tRGF0YSc7XG4gIEBJbnB1dCgnaGVhZGVyLXNpemUnKSBoZWFkZXJTaXplPSAnMTRweCc7XG5cdEBJbnB1dCgnaGVhZGVyLWNvbG9yJykgaGVhZGVyQ29sb3I7XG4gIEBJbnB1dCgnaGVhZGVyLXdlaWdodCcpIGhlYWRlcldlaWdodDtcbiAgQElucHV0KCdkYXRhLXNpemUnKSBkYXRhU2l6ZSA9ICcxMnB4Jztcblx0QElucHV0KCdkYXRhLWNvbG9yJykgZGF0YUNvbG9yO1xuICBASW5wdXQoJ2RhdGEtd2VpZ2h0JykgZGF0YVdlaWdodDsgIFxuICBASW5wdXQoJ2RhdGEtaHJlZicpIGhyZWZTZWxlY3Rpb24gPSAnbG90aWQnO1xuICBASW5wdXQoJ3N0YXR1cy1iZy1zdHlsZScpIGNvbG9yUGFsbGV0ZSA9IFtcIiNhM2RlZDhcIiwgXCIjZjhkYmI0XCIsIFwiI2M3YzNmYVwiLCBcImdyYXlcIl07XG4gIEBJbnB1dCgnc3RhdHVzJykgc3RhdHVzID0gW1wiY29tcGxldGVkXCIsIFwibm90LWNvbXBsZXRlZFwiLCBcInBlbmRpbmdcIiwnb3RoZXJzJ107XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==