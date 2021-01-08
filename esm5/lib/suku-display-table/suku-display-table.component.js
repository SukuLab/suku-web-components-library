/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-display-table/suku-display-table.component.ts
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
        this.colorPallete = ['#a3ded8', '#f8dbb4', '#c7c3fa', '#c2c1c1', '#c7c3fa'];
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
        this.statusKey = '';
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
     * @param {?} sortOption
     * @return {?}
     */
    SukuDisplayTableComponent.prototype.sort = /**
     * @param {?} head
     * @param {?} type
     * @param {?} sortOption
     * @return {?}
     */
    function (head, type, sortOption) {
        if (this._tableData) {
            if (type == 'Number') {
                if (sortOption == 'asse') {
                    this._tableData.sort((/**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */
                    function (a, b) {
                        return a[head] - b[head];
                    }));
                }
                if (sortOption == 'desc') {
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
                    if (a[head].toLowerCase() < b[head].toLowerCase() && sortOption == 'asse') {
                        return -1;
                    }
                    if (b[head].toLowerCase() < a[head].toLowerCase() && sortOption == 'desc') {
                        return -1;
                    }
                    if (a[head].toLowerCase() > b[head].toLowerCase() && sortOption == 'asse') {
                        return 1;
                    }
                    if (b[head].toLowerCase() > a[head].toLowerCase() && sortOption == 'desc') {
                        return 1;
                    }
                    return 0;
                }));
            }
            if (type == 'Date') {
                /** @type {?} */
                var sortable = this._tableData.some((/**
                 * @param {?} dataVal
                 * @return {?}
                 */
                function (dataVal) {
                    return dataVal[head] !== '-';
                }));
                console.log({ sortable: sortable });
                if (sortable) {
                    this._tableData.sort((/**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */
                    function (a, b) {
                        if (sortOption == 'asse') {
                            if (b[head] == '-') {
                                return -1;
                            }
                            return ((/** @type {?} */ (new Date(b[head]))) - (/** @type {?} */ (new Date(a[head]))));
                        }
                        if (sortOption == 'desc') {
                            if (a[head] == '-') {
                                return -1;
                            }
                            return ((/** @type {?} */ (new Date(a[head]))) - (/** @type {?} */ (new Date(b[head]))));
                        }
                    }));
                }
            }
            console.log('sort -', this._tableData, head, type, sortOption);
        }
    };
    SukuDisplayTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-display-table',
                    template: "<div class=\"col content\">\n  <div class=\"header\">\n    <div class=\"col pt-4 pb-4\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{titleOneCustomClass}}\"\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">\n            {{titleContent}}\n          </h1>\n        </div>\n      </div>\n    </div>\n  </div>\n  <table class=\"table table-striped table-bordered table-responsive-sm\">\n    <thead>\n      <tr>\n        <th [style.color]=\"headerColor\" [style.font-size.px]=\"headerSize\" [style.font-weight]=\"headerWeight\"\n          *ngFor=\"let header of header;\" id=\"{{header.id}}\" class=\"ellipsis\">\n          <span *ngIf=\"!translator\" class=\"hovertxt\">{{header.title}}</span>\n          <span *ngIf=\"translator\" class=\"hovertxt\">\n            {{ header.title | translate}}\n          </span>\n          <span *ngIf=\"sortable\" class=\"float-right c-pointer pl-3 ml\">\n            <span (click)=\"sort(header.id,header.type,'asse');\" class='fas fa-caret-up displayBlock '></span>\n            <span (click)=\"sort(header.id,header.type,'desc');\" class='fas fa-caret-down displayBlock lineH'></span>\n          </span>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of tableData | paginate: { itemsPerPage: itemsPerPageCount, currentPage: p,totalItems:\n        totalItem } let i = index\">\n        <td *ngFor=\"let key of tableDataKey;\" [style.color]=\"dataColor\" [style.font-size.px]=\"\n          dataSize\" [style.font-weight]=\"dataWeight\" [style.background-color]=\"\n         (data[key] === status[0]) ? colorPallete[0]: \n        (data[key] === status[1]) ? colorPallete[1]: \n        (data[key] === status[2]) ? colorPallete[2] :\n         (data[key] === status[3]) ? colorPallete[3] : (key==statusKey && data[key]) ? colorPallete[4] : 'white' \">\n          <span *ngIf=\"(key === hrefSelection)\" (click)=\"action.emit(data[key])\" class=\"suku-link c-pointer\">\n            {{data[key] | translate}}\n          </span>\n          <span *ngIf=\"(key === hrefSelectionOne && data[key] === 'complete_TblValue')\"\n            (click)=\"actionTwo.emit(data[hrefSelection])\" class=\"suku-link c-pointer\">\n            {{data[key] | translate}}\n          </span>\n          <!-- <span *ngIf=\"!(key === hrefSelection)\">\n            {{data[key] | translate}}</span> -->\n          <span\n            *ngIf=\"!((key === hrefSelection) || (key === hrefSelectionOne && data[key] === 'complete_TblValue')) && !dateType.includes(key)\">\n            {{data[key] | translate}}</span>\n          <span *ngIf=\"!(key === hrefSelection) && dateType.includes(key) && enableDatePipe\">\n            {{data[key] | dateLocale: 'dateFormat'}}</span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"col pt-4 pb-4\" *ngIf=\"showPagination\">\n    <div class=\"row\">\n      <div class=\"col text-right\">\n        <pagination-controls (pageChange)=\"p = $event;paginationFun(p);\" previousLabel=\"{{paginationPreviousLabel}}\"\n          nextLabel=\"{{paginationNextLabel}}\"></pagination-controls>\n      </div>\n    </div>\n  </div>\n\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.header{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.title{font-family:var(--suku-primary-font);font-weight:600;font-size:var(--suku-font-size-6);text-transform:uppercase}.table{font-family:var(--suku-primary-font);box-shadow:0 1px 2px 0 rgba(0,0,0,.1)}.c-pointer{cursor:pointer!important}.suku-link{color:#1d1d1d;text-decoration:underline}.displayBlock{display:block}.lineH{line-height:.2}.fas{font-size:18px}.ml{margin-left:.8rem;position:relative;top:-4px}.ellipsis{position:relative}.ellipsis:before{content:'&nbsp;';visibility:hidden}.ellipsis span.hovertxt{position:absolute;left:.85rem;right:2.5rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ellipsis span.hovertxt:hover{background:#fff;box-shadow:1.2px 2px #f2f2f2;position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-width:300px;z-index:4;margin-top:-1rem;padding:1rem;border-radius:3px;white-space:normal!important;word-break:break-word;left:0!important;box-shadow:0 3px 4px 0 rgba(0,0,0,.2)}"]
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
        enableDatePipe: [{ type: Input, args: ['enable-date-pipe',] }],
        statusKey: [{ type: Input }]
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
    /** @type {?} */
    SukuDisplayTableComponent.prototype.statusKey;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWRpc3BsYXktdGFibGUvc3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0U7SUFvREU7UUE3QytCLGtCQUFhLEdBQUcsMENBQTBDLENBQUM7UUFrQmhFLGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBRWpCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUNsQyxpQkFBWSxHQUFHLFNBQVMsQ0FBQztRQUMzQixlQUFVLEdBQUcsTUFBTSxDQUFDO1FBR3RCLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFHbEIsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFFbEIsaUJBQVksR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNoRixXQUFNLEdBQUcsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNqRCxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUcvQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ0gsNEJBQXVCLEdBQUcsVUFBVSxDQUFDO1FBQ3pDLHdCQUFtQixHQUFHLE1BQU0sQ0FBQztRQUNuRCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixhQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLGFBQVEsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM3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dEMsOENBQStCOztJQUMvQiwrQ0FBaUM7O0lBQ2pDLGtEQUE0Qzs7SUFDNUMscURBQTBCOztJQUMxQixpREFBaUc7O0lBQ2pHLDJDQUE4RTs7SUFDOUUsbURBQW9EOztJQUNwRCxzREFBOEM7O0lBQzlDLDhDQUErQjs7SUFDL0IsK0NBQXVDOztJQUN2Qyw0REFBeUU7O0lBQ3pFLHdEQUE2RDs7SUFDN0QsMkNBQXNDOztJQUN0QywrQ0FBMEM7O0lBQzFDLDhDQUFxRDs7SUFDckQsNkNBQTRDOztJQUM1Qyw2Q0FBd0Q7O0lBQ3hELG1EQUFrRDs7SUFDbEQsOENBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWRpc3BsYXktdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdURpc3BsYXlUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgndGFibGUtaGVhZGVyJykgaGVhZGVyO1xuICBASW5wdXQoJ3RhYmxlLWhlYWRlci1jb250ZW50JykgaGVhZGVyQ29udGVudCA9ICdjamtjc25ucyBzamtjcyBqa2tqcyBramtqZCBramRma2pkZiBqa2RmJztcbiAgX3RhYmxlRGF0YTogYW55O1xuICBwO1xuICB0YWJsZURhdGFLZXk7XG5cbiAgQElucHV0KCd0YWJsZS1kYXRhJylcbiAgZ2V0IHRhYmxlRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVEYXRhO1xuICB9XG5cbiAgc2V0IHRhYmxlRGF0YSh2YWwpIHtcbiAgICB0aGlzLl90YWJsZURhdGEgPSB2YWw7XG4gICAgaWYgKHRoaXMuX3RhYmxlRGF0YVswXSkge1xuICAgICAgdGhpcy50YWJsZURhdGFLZXkgPSBPYmplY3Qua2V5cyh0aGlzLl90YWJsZURhdGFbMF0pO1xuICAgIH1cbiAgfVxuICBASW5wdXQoJ3RpdGxlLW9uZS1pZCcpIHRpdGxlT25lSWQ7XG4gIEBJbnB1dCgndGl0bGUtb25lLXNpemUnKSB0aXRsZU9uZVNpemU7XG4gIEBJbnB1dCgndGl0bGUtb25lLWNvbG9yJykgdGl0bGVPbmVDb2xvciA9ICd3aGl0ZSc7XG4gIEBJbnB1dCgndGl0bGUtb25lLXdlaWdodCcpIHRpdGxlT25lV2VpZ2h0O1xuICBASW5wdXQoJ3RpdGxlLW9uZS1jdXN0b20tY2xhc3MnKSB0aXRsZU9uZUN1c3RvbUNsYXNzID0gJyc7XG4gIEBJbnB1dCgndGl0bGUtY29udGVudCcpIHRpdGxlQ29udGVudCA9ICdOby1EYXRhJztcbiAgQElucHV0KCdoZWFkZXItc2l6ZScpIGhlYWRlclNpemUgPSAnMTRweCc7XG4gIEBJbnB1dCgnaGVhZGVyLWNvbG9yJykgaGVhZGVyQ29sb3I7XG4gIEBJbnB1dCgnaGVhZGVyLXdlaWdodCcpIGhlYWRlcldlaWdodDtcbiAgQElucHV0KCdkYXRhLXNpemUnKSBkYXRhU2l6ZSA9ICcxMnB4JztcbiAgQElucHV0KCdkYXRhLWNvbG9yJykgZGF0YUNvbG9yO1xuICBASW5wdXQoJ2RhdGEtd2VpZ2h0JykgZGF0YVdlaWdodDtcbiAgQElucHV0KCdkYXRhLWhyZWYnKSBocmVmU2VsZWN0aW9uID0gJ2xvdGlkJztcbiAgQElucHV0KCkgaHJlZlNlbGVjdGlvbk9uZTtcbiAgQElucHV0KCdzdGF0dXMtYmctc3R5bGUnKSBjb2xvclBhbGxldGUgPSBbJyNhM2RlZDgnLCAnI2Y4ZGJiNCcsICcjYzdjM2ZhJywgJyNjMmMxYzEnLCAnI2M3YzNmYSddO1xuICBASW5wdXQoJ3N0YXR1cycpIHN0YXR1cyA9IFsnY29tcGxldGVkJywgJ25vdC1jb21wbGV0ZWQnLCAncGVuZGluZycsICdvdGhlcnMnXTtcbiAgQElucHV0KCdkaXNwbGF5LXBhZ2luYXRpb24nKSBzaG93UGFnaW5hdGlvbiA9IGZhbHNlO1xuICBASW5wdXQoJ3RhYmxlLWl0ZW1zLWNvdW50JykgaXRlbXNQZXJQYWdlQ291bnQ7XG4gIEBJbnB1dCgndG90YWwtaXRlbScpIHRvdGFsSXRlbTtcbiAgQElucHV0KCd0cmFuc2xhdG9yJykgdHJhbnNsYXRvciA9IHRydWU7XG4gIEBJbnB1dCgncGFnaW5hdGlvbi1wcmV2aW91cy1sYWJlbCcpIHBhZ2luYXRpb25QcmV2aW91c0xhYmVsID0gJ1ByZXZpb3VzJztcbiAgQElucHV0KCdwYWdpbmF0aW9uLW5leHQtbGFiZWwnKSBwYWdpbmF0aW9uTmV4dExhYmVsID0gJ05leHQnO1xuICBAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcGFnaW5hdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgnYWN0aW9uLXR3bycpIGFjdGlvblR3byA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCd0YWJsZS1zb3J0YWJsZScpIHNvcnRhYmxlID0gJ2ZhbHNlJztcbiAgQElucHV0KCdkYXRlLXR5cGUnKSBkYXRlVHlwZSA9IFsnc3RhcnRkYXRlJywgJ2VuZGRhdGUnXTtcbiAgQElucHV0KCdlbmFibGUtZGF0ZS1waXBlJykgZW5hYmxlRGF0ZVBpcGUgPSBmYWxzZTtcbiAgQElucHV0KCkgc3RhdHVzS2V5ID0gJyc7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBwYWdpbmF0aW9uRnVuKHApIHtcbiAgICB0aGlzLnBhZ2luYXRpb24uZW1pdChwKTtcbiAgfVxuXG4gIHNvcnQoaGVhZCwgdHlwZSwgc29ydE9wdGlvbikge1xuICAgIGlmICh0aGlzLl90YWJsZURhdGEpIHtcbiAgICAgIGlmICh0eXBlID09ICdOdW1iZXInKSB7XG4gICAgICAgIGlmIChzb3J0T3B0aW9uID09ICdhc3NlJykge1xuICAgICAgICAgIHRoaXMuX3RhYmxlRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYVtoZWFkXSAtIGJbaGVhZF1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc29ydE9wdGlvbiA9PSAnZGVzYycpIHtcbiAgICAgICAgICB0aGlzLl90YWJsZURhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGJbaGVhZF0gLSBhW2hlYWRdXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGUgPT0gJ1N0cmluZycpIHtcbiAgICAgICAgdGhpcy5fdGFibGVEYXRhLnNvcnQoKGEsIGIpID0+IHtcblxuICAgICAgICAgIGlmIChhW2hlYWRdLnRvTG93ZXJDYXNlKCkgPCBiW2hlYWRdLnRvTG93ZXJDYXNlKCkgJiYgc29ydE9wdGlvbiA9PSAnYXNzZScpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGJbaGVhZF0udG9Mb3dlckNhc2UoKSA8IGFbaGVhZF0udG9Mb3dlckNhc2UoKSAmJiBzb3J0T3B0aW9uID09ICdkZXNjJykge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhW2hlYWRdLnRvTG93ZXJDYXNlKCkgPiBiW2hlYWRdLnRvTG93ZXJDYXNlKCkgJiYgc29ydE9wdGlvbiA9PSAnYXNzZScpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYltoZWFkXS50b0xvd2VyQ2FzZSgpID4gYVtoZWFkXS50b0xvd2VyQ2FzZSgpICYmIHNvcnRPcHRpb24gPT0gJ2Rlc2MnKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cblxuICAgICAgaWYgKHR5cGUgPT0gJ0RhdGUnKSB7XG4gICAgICAgIGNvbnN0IHNvcnRhYmxlID0gdGhpcy5fdGFibGVEYXRhLnNvbWUoKGRhdGFWYWwpID0+IHtcbiAgICAgICAgICByZXR1cm4gZGF0YVZhbFtoZWFkXSAhPT0gJy0nO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coeyBzb3J0YWJsZSB9KTtcblxuICAgICAgICBpZiAoc29ydGFibGUpIHtcbiAgICAgICAgICB0aGlzLl90YWJsZURhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKHNvcnRPcHRpb24gPT0gJ2Fzc2UnKSB7XG4gICAgICAgICAgICAgIGlmIChiW2hlYWRdID09ICctJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gKDxhbnk+bmV3IERhdGUoYltoZWFkXSkgLSA8YW55Pm5ldyBEYXRlKGFbaGVhZF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzb3J0T3B0aW9uID09ICdkZXNjJykge1xuICAgICAgICAgICAgICBpZiAoYVtoZWFkXSA9PSAnLScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuICg8YW55Pm5ldyBEYXRlKGFbaGVhZF0pIC0gPGFueT5uZXcgRGF0ZShiW2hlYWRdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coJ3NvcnQgLScsIHRoaXMuX3RhYmxlRGF0YSwgaGVhZCwgdHlwZSwgc29ydE9wdGlvbik7XG4gICAgfVxuICB9XG59XG4iXX0=