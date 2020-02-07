/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-display-table/suku-display-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuDisplayTableComponent {
    constructor() {
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
    /**
     * @return {?}
     */
    get tableData() {
        return this._tableData;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set tableData(val) {
        this._tableData = val;
        if (this._tableData[0]) {
            this.tableDataKey = Object.keys(this._tableData[0]);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} p
     * @return {?}
     */
    paginationFun(p) {
        this.pagination.emit(p);
    }
    /**
     * @param {?} head
     * @param {?} type
     * @param {?} sortOption
     * @return {?}
     */
    sort(head, type, sortOption) {
        if (this._tableData) {
            if (type == 'Number') {
                if (sortOption == 'asse') {
                    this._tableData.sort((/**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */
                    (a, b) => {
                        return a[head] - b[head];
                    }));
                }
                if (sortOption == 'desc') {
                    this._tableData.sort((/**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */
                    (a, b) => {
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
                (a, b) => {
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
                const sortable = this._tableData.some((/**
                 * @param {?} dataVal
                 * @return {?}
                 */
                (dataVal) => {
                    return dataVal[head] !== '-';
                }));
                console.log({ sortable });
                if (sortable) {
                    this._tableData.sort((/**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */
                    (a, b) => {
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
    }
}
SukuDisplayTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-display-table',
                template: "<div class=\"col content\">\n  <div class=\"header\">\n    <div class=\"col pt-4 pb-4\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{titleOneCustomClass}}\"\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">\n            {{titleContent}}\n          </h1>\n        </div>\n      </div>\n    </div>\n  </div>\n  <table class=\"table table-striped table-bordered table-responsive-sm\">\n    <thead>\n      <tr>\n        <th [style.color]=\"headerColor\" [style.font-size.px]=\"headerSize\" [style.font-weight]=\"headerWeight\"\n          *ngFor=\"let header of header;\" id=\"{{header.id}}\" class=\"ellipsis\">\n          <span *ngIf=\"!translator\" class=\"hovertxt\">{{header.title}}</span>\n          <span *ngIf=\"translator\" class=\"hovertxt\">\n            {{ header.title | translate}}\n          </span>\n          <span *ngIf=\"sortable\" class=\"float-right c-pointer pl-3 ml\">\n            <span (click)=\"sort(header.id,header.type,'asse');\" class='fas fa-caret-up displayBlock '></span>\n            <span (click)=\"sort(header.id,header.type,'desc');\" class='fas fa-caret-down displayBlock lineH'></span>\n          </span>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of tableData | paginate: { itemsPerPage: itemsPerPageCount, currentPage: p,totalItems:\n        totalItem } let i = index\">\n        <td *ngFor=\"let key of tableDataKey;\" [style.color]=\"dataColor\" [style.font-size.px]=\"\n          dataSize\" [style.font-weight]=\"dataWeight\" [style.background-color]=\"\n         (data[key] === status[0]) ? colorPallete[0]: \n        (data[key] === status[1]) ? colorPallete[1]: \n        (data[key] === status[2]) ? colorPallete[2] :\n         (data[key] === status[3]) ? colorPallete[3] : (key==statusKey && data[key]) ? colorPallete[4] : 'white' \">\n          <span *ngIf=\"(key === hrefSelection)\" (click)=\"action.emit(data[key])\" class=\"suku-link c-pointer\">\n            {{data[key] | translate}}\n          </span>\n          <span *ngIf=\"(key === hrefSelectionOne && data[key] === 'complete_TblValue')\"\n            (click)=\"actionTwo.emit(data[hrefSelection])\" class=\"suku-link c-pointer\">\n            {{data[key] | translate}}\n          </span>\n          <!-- <span *ngIf=\"!(key === hrefSelection)\">\n            {{data[key] | translate}}</span> -->\n          <span\n            *ngIf=\"!((key === hrefSelection) || (key === hrefSelectionOne && data[key] === 'complete_TblValue')) && !dateType.includes(key)\">\n            {{data[key] | translate}}</span>\n          <span *ngIf=\"!(key === hrefSelection) && dateType.includes(key) && enableDatePipe\">\n            {{data[key] | dateLocale: 'dateFormat'}}</span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"col pt-4 pb-4\" *ngIf=\"showPagination\">\n    <div class=\"row\">\n      <div class=\"col text-right\">\n        <pagination-controls (pageChange)=\"p = $event;paginationFun(p);\" previousLabel=\"{{paginationPreviousLabel}}\"\n          nextLabel=\"{{paginationNextLabel}}\"></pagination-controls>\n      </div>\n    </div>\n  </div>\n\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.header{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.title{font-family:var(--suku-primary-font);font-weight:600;font-size:var(--suku-font-size-6);text-transform:uppercase}.table{font-family:var(--suku-primary-font);box-shadow:0 1px 2px 0 rgba(0,0,0,.1)}.c-pointer{cursor:pointer!important}.suku-link{color:#1d1d1d;text-decoration:underline}.displayBlock{display:block}.lineH{line-height:.2}.fas{font-size:18px}.ml{margin-left:.8rem;position:relative;top:-4px}.ellipsis{position:relative}.ellipsis:before{content:'&nbsp;';visibility:hidden}.ellipsis span.hovertxt{position:absolute;left:.85rem;right:2.5rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ellipsis span.hovertxt:hover{background:#fff;box-shadow:1.2px 2px #f2f2f2;position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-width:300px;z-index:4;margin-top:-1rem;padding:1rem;border-radius:3px;white-space:normal!important;word-break:break-word;left:0!important;box-shadow:0 3px 4px 0 rgba(0,0,0,.2)}"]
            }] }
];
/** @nocollapse */
SukuDisplayTableComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWRpc3BsYXktdGFibGUvc3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRL0UsTUFBTSxPQUFPLHlCQUF5QjtJQStDcEM7UUE3QytCLGtCQUFhLEdBQUcsMENBQTBDLENBQUM7UUFrQmhFLGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBRWpCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUNsQyxpQkFBWSxHQUFHLFNBQVMsQ0FBQztRQUMzQixlQUFVLEdBQUcsTUFBTSxDQUFDO1FBR3RCLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFHbEIsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFFbEIsaUJBQVksR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNoRixXQUFNLEdBQUcsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNqRCxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUcvQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ0gsNEJBQXVCLEdBQUcsVUFBVSxDQUFDO1FBQ3pDLHdCQUFtQixHQUFHLE1BQU0sQ0FBQztRQUNuRCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixhQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLGFBQVEsR0FBRyxDQUFDLFdBQVcsRUFBRSxT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Qy9CLCtDQUFpQzs7SUFDakMsa0RBQTRDOztJQUM1QyxxREFBMEI7O0lBQzFCLGlEQUFpRzs7SUFDakcsMkNBQThFOztJQUM5RSxtREFBb0Q7O0lBQ3BELHNEQUE4Qzs7SUFDOUMsOENBQStCOztJQUMvQiwrQ0FBdUM7O0lBQ3ZDLDREQUF5RTs7SUFDekUsd0RBQTZEOztJQUM3RCwyQ0FBc0M7O0lBQ3RDLCtDQUEwQzs7SUFDMUMsOENBQXFEOztJQUNyRCw2Q0FBNEM7O0lBQzVDLDZDQUF3RDs7SUFDeEQsbURBQWtEOztJQUNsRCw4Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZGlzcGxheS10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWRpc3BsYXktdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWRpc3BsYXktdGFibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1RGlzcGxheVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCd0YWJsZS1oZWFkZXInKSBoZWFkZXI7XG4gIEBJbnB1dCgndGFibGUtaGVhZGVyLWNvbnRlbnQnKSBoZWFkZXJDb250ZW50ID0gJ2Nqa2Nzbm5zIHNqa2NzIGpra2pzIGtqa2pkIGtqZGZramRmIGprZGYnO1xuICBfdGFibGVEYXRhOiBhbnk7XG4gIHA7XG4gIHRhYmxlRGF0YUtleTtcblxuICBASW5wdXQoJ3RhYmxlLWRhdGEnKVxuICBnZXQgdGFibGVEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl90YWJsZURhdGE7XG4gIH1cblxuICBzZXQgdGFibGVEYXRhKHZhbCkge1xuICAgIHRoaXMuX3RhYmxlRGF0YSA9IHZhbDtcbiAgICBpZiAodGhpcy5fdGFibGVEYXRhWzBdKSB7XG4gICAgICB0aGlzLnRhYmxlRGF0YUtleSA9IE9iamVjdC5rZXlzKHRoaXMuX3RhYmxlRGF0YVswXSk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgndGl0bGUtb25lLWlkJykgdGl0bGVPbmVJZDtcbiAgQElucHV0KCd0aXRsZS1vbmUtc2l6ZScpIHRpdGxlT25lU2l6ZTtcbiAgQElucHV0KCd0aXRsZS1vbmUtY29sb3InKSB0aXRsZU9uZUNvbG9yID0gJ3doaXRlJztcbiAgQElucHV0KCd0aXRsZS1vbmUtd2VpZ2h0JykgdGl0bGVPbmVXZWlnaHQ7XG4gIEBJbnB1dCgndGl0bGUtb25lLWN1c3RvbS1jbGFzcycpIHRpdGxlT25lQ3VzdG9tQ2xhc3MgPSAnJztcbiAgQElucHV0KCd0aXRsZS1jb250ZW50JykgdGl0bGVDb250ZW50ID0gJ05vLURhdGEnO1xuICBASW5wdXQoJ2hlYWRlci1zaXplJykgaGVhZGVyU2l6ZSA9ICcxNHB4JztcbiAgQElucHV0KCdoZWFkZXItY29sb3InKSBoZWFkZXJDb2xvcjtcbiAgQElucHV0KCdoZWFkZXItd2VpZ2h0JykgaGVhZGVyV2VpZ2h0O1xuICBASW5wdXQoJ2RhdGEtc2l6ZScpIGRhdGFTaXplID0gJzEycHgnO1xuICBASW5wdXQoJ2RhdGEtY29sb3InKSBkYXRhQ29sb3I7XG4gIEBJbnB1dCgnZGF0YS13ZWlnaHQnKSBkYXRhV2VpZ2h0O1xuICBASW5wdXQoJ2RhdGEtaHJlZicpIGhyZWZTZWxlY3Rpb24gPSAnbG90aWQnO1xuICBASW5wdXQoKSBocmVmU2VsZWN0aW9uT25lO1xuICBASW5wdXQoJ3N0YXR1cy1iZy1zdHlsZScpIGNvbG9yUGFsbGV0ZSA9IFsnI2EzZGVkOCcsICcjZjhkYmI0JywgJyNjN2MzZmEnLCAnI2MyYzFjMScsICcjYzdjM2ZhJ107XG4gIEBJbnB1dCgnc3RhdHVzJykgc3RhdHVzID0gWydjb21wbGV0ZWQnLCAnbm90LWNvbXBsZXRlZCcsICdwZW5kaW5nJywgJ290aGVycyddO1xuICBASW5wdXQoJ2Rpc3BsYXktcGFnaW5hdGlvbicpIHNob3dQYWdpbmF0aW9uID0gZmFsc2U7XG4gIEBJbnB1dCgndGFibGUtaXRlbXMtY291bnQnKSBpdGVtc1BlclBhZ2VDb3VudDtcbiAgQElucHV0KCd0b3RhbC1pdGVtJykgdG90YWxJdGVtO1xuICBASW5wdXQoJ3RyYW5zbGF0b3InKSB0cmFuc2xhdG9yID0gdHJ1ZTtcbiAgQElucHV0KCdwYWdpbmF0aW9uLXByZXZpb3VzLWxhYmVsJykgcGFnaW5hdGlvblByZXZpb3VzTGFiZWwgPSAnUHJldmlvdXMnO1xuICBASW5wdXQoJ3BhZ2luYXRpb24tbmV4dC1sYWJlbCcpIHBhZ2luYXRpb25OZXh0TGFiZWwgPSAnTmV4dCc7XG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwYWdpbmF0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCdhY3Rpb24tdHdvJykgYWN0aW9uVHdvID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoJ3RhYmxlLXNvcnRhYmxlJykgc29ydGFibGUgPSAnZmFsc2UnO1xuICBASW5wdXQoJ2RhdGUtdHlwZScpIGRhdGVUeXBlID0gWydzdGFydGRhdGUnLCAnZW5kZGF0ZSddO1xuICBASW5wdXQoJ2VuYWJsZS1kYXRlLXBpcGUnKSBlbmFibGVEYXRlUGlwZSA9IGZhbHNlO1xuICBASW5wdXQoKSBzdGF0dXNLZXkgPSAnJztcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHBhZ2luYXRpb25GdW4ocCkge1xuICAgIHRoaXMucGFnaW5hdGlvbi5lbWl0KHApO1xuICB9XG5cbiAgc29ydChoZWFkLCB0eXBlLCBzb3J0T3B0aW9uKSB7XG4gICAgaWYgKHRoaXMuX3RhYmxlRGF0YSkge1xuICAgICAgaWYgKHR5cGUgPT0gJ051bWJlcicpIHtcbiAgICAgICAgaWYgKHNvcnRPcHRpb24gPT0gJ2Fzc2UnKSB7XG4gICAgICAgICAgdGhpcy5fdGFibGVEYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhW2hlYWRdIC0gYltoZWFkXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzb3J0T3B0aW9uID09ICdkZXNjJykge1xuICAgICAgICAgIHRoaXMuX3RhYmxlRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYltoZWFkXSAtIGFbaGVhZF1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZSA9PSAnU3RyaW5nJykge1xuICAgICAgICB0aGlzLl90YWJsZURhdGEuc29ydCgoYSwgYikgPT4ge1xuXG4gICAgICAgICAgaWYgKGFbaGVhZF0udG9Mb3dlckNhc2UoKSA8IGJbaGVhZF0udG9Mb3dlckNhc2UoKSAmJiBzb3J0T3B0aW9uID09ICdhc3NlJykge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYltoZWFkXS50b0xvd2VyQ2FzZSgpIDwgYVtoZWFkXS50b0xvd2VyQ2FzZSgpICYmIHNvcnRPcHRpb24gPT0gJ2Rlc2MnKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFbaGVhZF0udG9Mb3dlckNhc2UoKSA+IGJbaGVhZF0udG9Mb3dlckNhc2UoKSAmJiBzb3J0T3B0aW9uID09ICdhc3NlJykge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChiW2hlYWRdLnRvTG93ZXJDYXNlKCkgPiBhW2hlYWRdLnRvTG93ZXJDYXNlKCkgJiYgc29ydE9wdGlvbiA9PSAnZGVzYycpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuXG4gICAgICBpZiAodHlwZSA9PSAnRGF0ZScpIHtcbiAgICAgICAgY29uc3Qgc29ydGFibGUgPSB0aGlzLl90YWJsZURhdGEuc29tZSgoZGF0YVZhbCkgPT4ge1xuICAgICAgICAgIHJldHVybiBkYXRhVmFsW2hlYWRdICE9PSAnLSc7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh7IHNvcnRhYmxlIH0pO1xuXG4gICAgICAgIGlmIChzb3J0YWJsZSkge1xuICAgICAgICAgIHRoaXMuX3RhYmxlRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoc29ydE9wdGlvbiA9PSAnYXNzZScpIHtcbiAgICAgICAgICAgICAgaWYgKGJbaGVhZF0gPT0gJy0nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAoPGFueT5uZXcgRGF0ZShiW2hlYWRdKSAtIDxhbnk+bmV3IERhdGUoYVtoZWFkXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNvcnRPcHRpb24gPT0gJ2Rlc2MnKSB7XG4gICAgICAgICAgICAgIGlmIChhW2hlYWRdID09ICctJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gKDxhbnk+bmV3IERhdGUoYVtoZWFkXSkgLSA8YW55Pm5ldyBEYXRlKGJbaGVhZF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZygnc29ydCAtJywgdGhpcy5fdGFibGVEYXRhLCBoZWFkLCB0eXBlLCBzb3J0T3B0aW9uKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==