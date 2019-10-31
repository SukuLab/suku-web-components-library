/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuDisplayTableComponent = /** @class */ (function () {
    function SukuDisplayTableComponent() {
        this.headerContent = 'cjkcsnns sjkcs jkkjs kjkjd kjdfkjdf jkdf';
        this.titleOneColor = 'white';
        this.titleOneCustomClass = '';
        this.titleContent = 'No-Data';
        this.headerSize = '14px';
        this.dataSize = '12px';
        this.hrefSelection = 'lotid';
        this.colorPallete = ['#a3ded8', '#f8dbb4', '#c7c3fa', 'gray'];
        this.status = ['completed', 'not-completed', 'pending', 'others'];
        this.showPagination = false;
        this.translator = true;
        this.paginationPreviousLabel = 'Previous';
        this.paginationNextLabel = 'Next';
        this.action = new EventEmitter();
        this.pagination = new EventEmitter();
        this.actionTwo = new EventEmitter();
        this.sortable = 'false';
        this.dateType = ['startdate', 'enddate'];
        this.enableDatePipe = false;
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
    /**
     * @param {?} p
     * @return {?}
     */
    SukuDisplayTableComponent.prototype.paginationFun = /**
     * @param {?} p
     * @return {?}
     */
    function (p) {
        this.pagination.emit(p);
    };
    /**
     * @param {?} head
     * @param {?} type
     * @param {?} formate
     * @return {?}
     */
    SukuDisplayTableComponent.prototype.sort = /**
     * @param {?} head
     * @param {?} type
     * @param {?} formate
     * @return {?}
     */
    function (head, type, formate) {
        if (this._tableData) {
            if (type == 'Number') {
                if (formate == 'asse') {
                    this._tableData.sort((/**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */
                    function (a, b) {
                        return a[head] - b[head];
                    }));
                }
                if (formate == 'desc') {
                    this._tableData.sort((/**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */
                    function (a, b) {
                        return b[head] - a[head];
                    }));
                }
            }
            if (type == 'String') {
                this._tableData.sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                function (a, b) {
                    if (a[head] < b[head] && formate == 'asse') {
                        return -1;
                    }
                    if (b[head] < a[head] && formate == 'desc') {
                        return -1;
                    }
                    return 0;
                }));
            }
            if (type == 'Date') {
                this._tableData.sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                function (a, b) {
                    a = new Date(a[head]);
                    b = new Date(b[head]);
                    if (a < b && formate == 'asse') {
                        return -1;
                    }
                    if (b < a && formate == 'desc') {
                        return -1;
                    }
                    return 0;
                }));
            }
            console.log('sort -', this._tableData, head, type, formate);
        }
    };
    SukuDisplayTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-display-table',
                    template: "<div class=\"col content\">\n  <div class=\"header\">\n    <div class=\"col pt-4 pb-4\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{titleOneCustomClass}}\"\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">\n            {{titleContent}}\n          </h1>\n        </div>\n      </div>\n    </div>\n  </div>\n  <table class=\"table table-striped border table-responsive-sm\">\n    <thead>\n      <tr>\n        <th [style.color]=\"headerColor\" [style.font-size.px]=\"headerSize\" [style.font-weight]=\"headerWeight\"\n          *ngFor=\"let header of header;\" id=\"{{header.id}}\">\n          <span *ngIf=\"!translator\">{{header.title}}</span>\n          <span *ngIf=\"translator\">\n            {{ header.title | translate}}\n          </span>\n          <span *ngIf=\"sortable\" class=\"float-right c-pointer pl-3\">\n            <span (click)=\"sort(header.id,header.type,'asse');\" class='fas fa-caret-up displayBlock '></span>\n            <span (click)=\"sort(header.id,header.type,'desc');\" class='fas fa-caret-down displayBlock lineH'></span>\n          </span>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of tableData | paginate: { itemsPerPage: itemsPerPageCount, currentPage: p,totalItems:\n        totalItem } let i = index\">\n        <td *ngFor=\"let key of tableDataKey;\" [style.color]=\"dataColor\" [style.font-size.px]=\"dataSize\"\n          [style.font-weight]=\"dataWeight\"\n          [style.background-color]=\"\n        (data[key] === status[0]) ? colorPallete[0]: (data[key] === status[1]) ? colorPallete[1]: (data[key] === status[2]) ? colorPallete[2] : (data[key] === status[3]) ? colorPallete[3] :(data[key] === status[4]) ? colorPallete[4] : 'white'\">\n          <span *ngIf=\"(key === hrefSelection)\" (click)=\"action.emit(data[key])\" class=\"suku-link c-pointer\">\n            {{data[key] | translate}}\n          </span>\n          <span *ngIf=\"(key === hrefSelectionOne && data[key] === 'complete_TblValue')\" (click)=\"actionTwo.emit(data[key])\" class=\"suku-link c-pointer\">\n              {{data[key] | translate}}\n          </span>\n          <!-- <span *ngIf=\"!(key === hrefSelection)\">\n            {{data[key] | translate}}</span> -->\n          <span *ngIf=\"!((key === hrefSelection) || (key === hrefSelectionOne && data[key] === 'complete_TblValue')) && !dateType.includes(key)\">\n            {{data[key] | translate}}</span>\n          <span *ngIf=\"!(key === hrefSelection) && dateType.includes(key) && enableDatePipe\">\n            {{data[key] | dateLocale: 'dateFormat'}}</span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"col pt-4 pb-4\" *ngIf=\"showPagination\">\n    <div class=\"row\">\n      <div class=\"col text-right\">\n        <pagination-controls (pageChange)=\"p = $event;paginationFun(p);\" previousLabel=\"{{paginationPreviousLabel}}\"\n          nextLabel=\"{{paginationNextLabel}}\"></pagination-controls>\n      </div>\n    </div>\n  </div>\n\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.header{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.title{font-family:var(--suku-primary-font);font-weight:600;font-size:var(--suku-font-size-6);text-transform:uppercase}.table{font-family:var(--suku-primary-font);box-shadow:0 1px 2px 0 rgba(0,0,0,.1)}.c-pointer{cursor:pointer!important}.suku-link{color:#1d1d1d;text-decoration:underline}.displayBlock{display:block}.lineH{line-height:.1}"]
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
        titleContent: [{ type: Input, args: ['title-content',] }],
        headerSize: [{ type: Input, args: ['header-size',] }],
        headerColor: [{ type: Input, args: ['header-color',] }],
        headerWeight: [{ type: Input, args: ['header-weight',] }],
        dataSize: [{ type: Input, args: ['data-size',] }],
        dataColor: [{ type: Input, args: ['data-color',] }],
        dataWeight: [{ type: Input, args: ['data-weight',] }],
        hrefSelection: [{ type: Input, args: ['data-href',] }],
        hrefSelectionOne: [{ type: Input }],
        colorPallete: [{ type: Input, args: ['status-bg-style',] }],
        status: [{ type: Input, args: ['status',] }],
        showPagination: [{ type: Input, args: ['display-pagination',] }],
        itemsPerPageCount: [{ type: Input, args: ['table-items-count',] }],
        totalItem: [{ type: Input, args: ['total-item',] }],
        translator: [{ type: Input, args: ['translator',] }],
        paginationPreviousLabel: [{ type: Input, args: ['pagination-previous-label',] }],
        paginationNextLabel: [{ type: Input, args: ['pagination-next-label',] }],
        action: [{ type: Output }],
        pagination: [{ type: Output }],
        actionTwo: [{ type: Output, args: ['action-two',] }],
        sortable: [{ type: Input, args: ['table-sortable',] }],
        dateType: [{ type: Input, args: ['date-type',] }],
        enableDatePipe: [{ type: Input, args: ['enable-date-pipe',] }]
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
    SukuDisplayTableComponent.prototype.p;
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
    SukuDisplayTableComponent.prototype.hrefSelectionOne;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.colorPallete;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.status;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.showPagination;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.itemsPerPageCount;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.totalItem;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.translator;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.paginationPreviousLabel;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.paginationNextLabel;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.action;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.pagination;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.actionTwo;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.sortable;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.dateType;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.enableDatePipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWRpc3BsYXktdGFibGUvc3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvRTtJQW1ERTtRQTVDK0Isa0JBQWEsR0FBRywwQ0FBMEMsQ0FBQztRQWtCaEUsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFFakIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBQzNCLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFHdEIsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUdsQixrQkFBYSxHQUFHLE9BQU8sQ0FBQztRQUVsQixpQkFBWSxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEUsV0FBTSxHQUFHLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakQsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFHL0IsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNILDRCQUF1QixHQUFHLFVBQVUsQ0FBQztRQUN6Qyx3QkFBbUIsR0FBRyxNQUFNLENBQUM7UUFDbkQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0IsYUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixhQUFRLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDN0IsbUJBQWMsR0FB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OztJQUN0QyxrREFBa0Q7O0lBQ2xELG1EQUEwQzs7SUFDMUMsd0RBQTBEOztJQUMxRCxpREFBaUQ7O0lBQ2pELCtDQUEwQzs7SUFDMUMsZ0RBQW1DOztJQUNuQyxpREFBcUM7O0lBQ3JDLDZDQUFzQzs7SUFDdEMsOENBQStCOztJQUMvQiwrQ0FBaUM7O0lBQ2pDLGtEQUE0Qzs7SUFDNUMscURBQTBCOztJQUMxQixpREFBbUY7O0lBQ25GLDJDQUE4RTs7SUFDOUUsbURBQW9EOztJQUNwRCxzREFBOEM7O0lBQzlDLDhDQUErQjs7SUFDL0IsK0NBQXVDOztJQUN2Qyw0REFBeUU7O0lBQ3pFLHdEQUE2RDs7SUFDN0QsMkNBQXNDOztJQUN0QywrQ0FBMEM7O0lBQzFDLDhDQUFvRDs7SUFDcEQsNkNBQTRDOztJQUM1Qyw2Q0FBd0Q7O0lBQ3hELG1EQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1kaXNwbGF5LXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZGlzcGxheS10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZGlzcGxheS10YWJsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VEaXNwbGF5VGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ3RhYmxlLWhlYWRlcicpIGhlYWRlcjtcbiAgQElucHV0KCd0YWJsZS1oZWFkZXItY29udGVudCcpIGhlYWRlckNvbnRlbnQgPSAnY2prY3NubnMgc2prY3MgamtranMga2pramQga2pkZmtqZGYgamtkZic7XG4gIF90YWJsZURhdGE6IGFueTtcbiAgcDtcbiAgdGFibGVEYXRhS2V5O1xuXG4gIEBJbnB1dCgndGFibGUtZGF0YScpXG4gIGdldCB0YWJsZURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlRGF0YTtcbiAgfVxuXG4gIHNldCB0YWJsZURhdGEodmFsKSB7XG4gICAgdGhpcy5fdGFibGVEYXRhID0gdmFsO1xuICAgIGlmICh0aGlzLl90YWJsZURhdGFbMF0pIHtcbiAgICAgIHRoaXMudGFibGVEYXRhS2V5ID0gT2JqZWN0LmtleXModGhpcy5fdGFibGVEYXRhWzBdKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCd0aXRsZS1vbmUtaWQnKSB0aXRsZU9uZUlkO1xuICBASW5wdXQoJ3RpdGxlLW9uZS1zaXplJykgdGl0bGVPbmVTaXplO1xuICBASW5wdXQoJ3RpdGxlLW9uZS1jb2xvcicpIHRpdGxlT25lQ29sb3IgPSAnd2hpdGUnO1xuICBASW5wdXQoJ3RpdGxlLW9uZS13ZWlnaHQnKSB0aXRsZU9uZVdlaWdodDtcbiAgQElucHV0KCd0aXRsZS1vbmUtY3VzdG9tLWNsYXNzJykgdGl0bGVPbmVDdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoJ3RpdGxlLWNvbnRlbnQnKSB0aXRsZUNvbnRlbnQgPSAnTm8tRGF0YSc7XG4gIEBJbnB1dCgnaGVhZGVyLXNpemUnKSBoZWFkZXJTaXplID0gJzE0cHgnO1xuICBASW5wdXQoJ2hlYWRlci1jb2xvcicpIGhlYWRlckNvbG9yO1xuICBASW5wdXQoJ2hlYWRlci13ZWlnaHQnKSBoZWFkZXJXZWlnaHQ7XG4gIEBJbnB1dCgnZGF0YS1zaXplJykgZGF0YVNpemUgPSAnMTJweCc7XG4gIEBJbnB1dCgnZGF0YS1jb2xvcicpIGRhdGFDb2xvcjtcbiAgQElucHV0KCdkYXRhLXdlaWdodCcpIGRhdGFXZWlnaHQ7XG4gIEBJbnB1dCgnZGF0YS1ocmVmJykgaHJlZlNlbGVjdGlvbiA9ICdsb3RpZCc7XG4gIEBJbnB1dCgpIGhyZWZTZWxlY3Rpb25PbmU7XG4gIEBJbnB1dCgnc3RhdHVzLWJnLXN0eWxlJykgY29sb3JQYWxsZXRlID0gWycjYTNkZWQ4JywgJyNmOGRiYjQnLCAnI2M3YzNmYScsICdncmF5J107XG4gIEBJbnB1dCgnc3RhdHVzJykgc3RhdHVzID0gWydjb21wbGV0ZWQnLCAnbm90LWNvbXBsZXRlZCcsICdwZW5kaW5nJywgJ290aGVycyddO1xuICBASW5wdXQoJ2Rpc3BsYXktcGFnaW5hdGlvbicpIHNob3dQYWdpbmF0aW9uID0gZmFsc2U7XG4gIEBJbnB1dCgndGFibGUtaXRlbXMtY291bnQnKSBpdGVtc1BlclBhZ2VDb3VudDtcbiAgQElucHV0KCd0b3RhbC1pdGVtJykgdG90YWxJdGVtO1xuICBASW5wdXQoJ3RyYW5zbGF0b3InKSB0cmFuc2xhdG9yID0gdHJ1ZTtcbiAgQElucHV0KCdwYWdpbmF0aW9uLXByZXZpb3VzLWxhYmVsJykgcGFnaW5hdGlvblByZXZpb3VzTGFiZWwgPSAnUHJldmlvdXMnO1xuICBASW5wdXQoJ3BhZ2luYXRpb24tbmV4dC1sYWJlbCcpIHBhZ2luYXRpb25OZXh0TGFiZWwgPSAnTmV4dCc7XG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwYWdpbmF0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCdhY3Rpb24tdHdvJylhY3Rpb25Ud28gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgndGFibGUtc29ydGFibGUnKSBzb3J0YWJsZSA9ICdmYWxzZSc7XG4gIEBJbnB1dCgnZGF0ZS10eXBlJykgZGF0ZVR5cGUgPSBbJ3N0YXJ0ZGF0ZScsICdlbmRkYXRlJ107XG4gIEBJbnB1dCgnZW5hYmxlLWRhdGUtcGlwZScpIGVuYWJsZURhdGVQaXBlID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBwYWdpbmF0aW9uRnVuKHApIHtcbiAgICB0aGlzLnBhZ2luYXRpb24uZW1pdChwKTtcbiAgfVxuICBzb3J0KGhlYWQsIHR5cGUsIGZvcm1hdGUpIHtcbiAgICBpZiAodGhpcy5fdGFibGVEYXRhKSB7XG4gICAgICBpZiAodHlwZSA9PSAnTnVtYmVyJykge1xuICAgICAgICBpZiAoZm9ybWF0ZSA9PSAnYXNzZScpIHtcbiAgICAgICAgICB0aGlzLl90YWJsZURhdGEuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGFbaGVhZF0gLSBiW2hlYWRdXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdGUgPT0gJ2Rlc2MnKSB7XG4gICAgICAgICAgdGhpcy5fdGFibGVEYXRhLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBiW2hlYWRdIC0gYVtoZWFkXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PSAnU3RyaW5nJykge1xuICAgICAgICB0aGlzLl90YWJsZURhdGEuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIGlmIChhW2hlYWRdIDwgYltoZWFkXSAmJiBmb3JtYXRlID09ICdhc3NlJykge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYltoZWFkXSA8IGFbaGVhZF0gJiYgZm9ybWF0ZSA9PSAnZGVzYycpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT0gJ0RhdGUnKSB7XG4gICAgICAgIHRoaXMuX3RhYmxlRGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgYSA9IG5ldyBEYXRlKGFbaGVhZF0pO1xuICAgICAgICAgIGIgPSBuZXcgRGF0ZShiW2hlYWRdKTtcbiAgICAgICAgICBpZiAoYSA8IGIgJiYgZm9ybWF0ZSA9PSAnYXNzZScpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGIgPCBhICYmIGZvcm1hdGUgPT0gJ2Rlc2MnKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdzb3J0IC0nLCB0aGlzLl90YWJsZURhdGEsIGhlYWQsIHR5cGUsIGZvcm1hdGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRhdGVUeXBlKGtleSkge1xuICAvLyAgIGNvbnNvbGUubG9nKCdrZXknLCBrZXkpO1xuICAvLyAgIHJldHVybiB0cnVlO1xuICAvLyB9XG5cbn1cbiJdfQ==