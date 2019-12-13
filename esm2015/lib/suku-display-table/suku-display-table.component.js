/**
 * @fileoverview added by tsickle
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
                template: "<div class=\"col content\">\r\n  <div class=\"header\">\r\n    <div class=\"col pt-4 pb-4\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{titleOneCustomClass}}\"\r\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">\r\n            {{titleContent}}\r\n          </h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <table class=\"table table-striped table-bordered table-responsive-sm\">\r\n    <thead>\r\n      <tr>\r\n        <th [style.color]=\"headerColor\" [style.font-size.px]=\"headerSize\" [style.font-weight]=\"headerWeight\"\r\n          *ngFor=\"let header of header;\" id=\"{{header.id}}\" class=\"ellipsis\">\r\n          <span *ngIf=\"!translator\" class=\"hovertxt\">{{header.title}}</span>\r\n          <span *ngIf=\"translator\" class=\"hovertxt\">\r\n            {{ header.title | translate}}\r\n          </span>\r\n          <span *ngIf=\"sortable\" class=\"float-right c-pointer pl-3 ml\">\r\n            <span (click)=\"sort(header.id,header.type,'asse');\" class='fas fa-caret-up displayBlock '></span>\r\n            <span (click)=\"sort(header.id,header.type,'desc');\" class='fas fa-caret-down displayBlock lineH'></span>\r\n          </span>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let data of tableData | paginate: { itemsPerPage: itemsPerPageCount, currentPage: p,totalItems:\r\n        totalItem } let i = index\">\r\n        <td *ngFor=\"let key of tableDataKey;\" [style.color]=\"dataColor\" [style.font-size.px]=\"\r\n          dataSize\" [style.font-weight]=\"dataWeight\"\r\n          [style.background-color]=\"\r\n        (data[key] === status[0]) ? colorPallete[0]: (data[key] === status[1]) ? colorPallete[1]: (data[key] === status[2]) ? colorPallete[2] : (data[key] === status[3]) ? colorPallete[3] :(data[key] === status[4]) ? colorPallete[4] : 'white'\">\r\n          <span *ngIf=\"(key === hrefSelection)\" (click)=\"action.emit(data[key])\" class=\"suku-link c-pointer\">\r\n            {{data[key] | translate}}\r\n          </span>\r\n          <span *ngIf=\"(key === hrefSelectionOne && data[key] === 'complete_TblValue')\"\r\n            (click)=\"actionTwo.emit(data[hrefSelection])\" class=\"suku-link c-pointer\">\r\n            {{data[key] | translate}}\r\n          </span>\r\n          <!-- <span *ngIf=\"!(key === hrefSelection)\">\r\n            {{data[key] | translate}}</span> -->\r\n          <span\r\n            *ngIf=\"!((key === hrefSelection) || (key === hrefSelectionOne && data[key] === 'complete_TblValue')) && !dateType.includes(key)\">\r\n            {{data[key] | translate}}</span>\r\n          <span *ngIf=\"!(key === hrefSelection) && dateType.includes(key) && enableDatePipe\">\r\n            {{data[key] | dateLocale: 'dateFormat'}}</span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"col pt-4 pb-4\" *ngIf=\"showPagination\">\r\n    <div class=\"row\">\r\n      <div class=\"col text-right\">\r\n        <pagination-controls (pageChange)=\"p = $event;paginationFun(p);\" previousLabel=\"{{paginationPreviousLabel}}\"\r\n          nextLabel=\"{{paginationNextLabel}}\"></pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>",
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
    enableDatePipe: [{ type: Input, args: ['enable-date-pipe',] }]
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWRpc3BsYXktdGFibGUvc3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVEvRSxNQUFNLE9BQU8seUJBQXlCO0lBOENwQztRQTVDK0Isa0JBQWEsR0FBRywwQ0FBMEMsQ0FBQztRQWtCaEUsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFFakIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBQzNCLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFHdEIsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUdsQixrQkFBYSxHQUFHLE9BQU8sQ0FBQztRQUVsQixpQkFBWSxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEUsV0FBTSxHQUFHLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakQsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFHL0IsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNILDRCQUF1QixHQUFHLFVBQVUsQ0FBQztRQUN6Qyx3QkFBbUIsR0FBRyxNQUFNLENBQUM7UUFDbkQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsYUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixhQUFRLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENB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QUFtRjs7SUFDbkYsMkNBQThFOztJQUM5RSxtREFBb0Q7O0lBQ3BELHNEQUE4Qzs7SUFDOUMsOENBQStCOztJQUMvQiwrQ0FBdUM7O0lBQ3ZDLDREQUF5RTs7SUFDekUsd0RBQTZEOztJQUM3RCwyQ0FBc0M7O0lBQ3RDLCtDQUEwQzs7SUFDMUMsOENBQXFEOztJQUNyRCw2Q0FBNEM7O0lBQzVDLDZDQUF3RDs7SUFDeEQsbURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3UtZGlzcGxheS10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZGlzcGxheS10YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VEaXNwbGF5VGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgndGFibGUtaGVhZGVyJykgaGVhZGVyO1xyXG4gIEBJbnB1dCgndGFibGUtaGVhZGVyLWNvbnRlbnQnKSBoZWFkZXJDb250ZW50ID0gJ2Nqa2Nzbm5zIHNqa2NzIGpra2pzIGtqa2pkIGtqZGZramRmIGprZGYnO1xyXG4gIF90YWJsZURhdGE6IGFueTtcclxuICBwO1xyXG4gIHRhYmxlRGF0YUtleTtcclxuXHJcbiAgQElucHV0KCd0YWJsZS1kYXRhJylcclxuICBnZXQgdGFibGVEYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlRGF0YTtcclxuICB9XHJcblxyXG4gIHNldCB0YWJsZURhdGEodmFsKSB7XHJcbiAgICB0aGlzLl90YWJsZURhdGEgPSB2YWw7XHJcbiAgICBpZiAodGhpcy5fdGFibGVEYXRhWzBdKSB7XHJcbiAgICAgIHRoaXMudGFibGVEYXRhS2V5ID0gT2JqZWN0LmtleXModGhpcy5fdGFibGVEYXRhWzBdKTtcclxuICAgIH1cclxuICB9XHJcbiAgQElucHV0KCd0aXRsZS1vbmUtaWQnKSB0aXRsZU9uZUlkO1xyXG4gIEBJbnB1dCgndGl0bGUtb25lLXNpemUnKSB0aXRsZU9uZVNpemU7XHJcbiAgQElucHV0KCd0aXRsZS1vbmUtY29sb3InKSB0aXRsZU9uZUNvbG9yID0gJ3doaXRlJztcclxuICBASW5wdXQoJ3RpdGxlLW9uZS13ZWlnaHQnKSB0aXRsZU9uZVdlaWdodDtcclxuICBASW5wdXQoJ3RpdGxlLW9uZS1jdXN0b20tY2xhc3MnKSB0aXRsZU9uZUN1c3RvbUNsYXNzID0gJyc7XHJcbiAgQElucHV0KCd0aXRsZS1jb250ZW50JykgdGl0bGVDb250ZW50ID0gJ05vLURhdGEnO1xyXG4gIEBJbnB1dCgnaGVhZGVyLXNpemUnKSBoZWFkZXJTaXplID0gJzE0cHgnO1xyXG4gIEBJbnB1dCgnaGVhZGVyLWNvbG9yJykgaGVhZGVyQ29sb3I7XHJcbiAgQElucHV0KCdoZWFkZXItd2VpZ2h0JykgaGVhZGVyV2VpZ2h0O1xyXG4gIEBJbnB1dCgnZGF0YS1zaXplJykgZGF0YVNpemUgPSAnMTJweCc7XHJcbiAgQElucHV0KCdkYXRhLWNvbG9yJykgZGF0YUNvbG9yO1xyXG4gIEBJbnB1dCgnZGF0YS13ZWlnaHQnKSBkYXRhV2VpZ2h0O1xyXG4gIEBJbnB1dCgnZGF0YS1ocmVmJykgaHJlZlNlbGVjdGlvbiA9ICdsb3RpZCc7XHJcbiAgQElucHV0KCkgaHJlZlNlbGVjdGlvbk9uZTtcclxuICBASW5wdXQoJ3N0YXR1cy1iZy1zdHlsZScpIGNvbG9yUGFsbGV0ZSA9IFsnI2EzZGVkOCcsICcjZjhkYmI0JywgJyNjN2MzZmEnLCAnZ3JheSddO1xyXG4gIEBJbnB1dCgnc3RhdHVzJykgc3RhdHVzID0gWydjb21wbGV0ZWQnLCAnbm90LWNvbXBsZXRlZCcsICdwZW5kaW5nJywgJ290aGVycyddO1xyXG4gIEBJbnB1dCgnZGlzcGxheS1wYWdpbmF0aW9uJykgc2hvd1BhZ2luYXRpb24gPSBmYWxzZTtcclxuICBASW5wdXQoJ3RhYmxlLWl0ZW1zLWNvdW50JykgaXRlbXNQZXJQYWdlQ291bnQ7XHJcbiAgQElucHV0KCd0b3RhbC1pdGVtJykgdG90YWxJdGVtO1xyXG4gIEBJbnB1dCgndHJhbnNsYXRvcicpIHRyYW5zbGF0b3IgPSB0cnVlO1xyXG4gIEBJbnB1dCgncGFnaW5hdGlvbi1wcmV2aW91cy1sYWJlbCcpIHBhZ2luYXRpb25QcmV2aW91c0xhYmVsID0gJ1ByZXZpb3VzJztcclxuICBASW5wdXQoJ3BhZ2luYXRpb24tbmV4dC1sYWJlbCcpIHBhZ2luYXRpb25OZXh0TGFiZWwgPSAnTmV4dCc7XHJcbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcGFnaW5hdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCdhY3Rpb24tdHdvJykgYWN0aW9uVHdvID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBJbnB1dCgndGFibGUtc29ydGFibGUnKSBzb3J0YWJsZSA9ICdmYWxzZSc7XHJcbiAgQElucHV0KCdkYXRlLXR5cGUnKSBkYXRlVHlwZSA9IFsnc3RhcnRkYXRlJywgJ2VuZGRhdGUnXTtcclxuICBASW5wdXQoJ2VuYWJsZS1kYXRlLXBpcGUnKSBlbmFibGVEYXRlUGlwZSA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBwYWdpbmF0aW9uRnVuKHApIHtcclxuICAgIHRoaXMucGFnaW5hdGlvbi5lbWl0KHApO1xyXG4gIH1cclxuXHJcbiAgc29ydChoZWFkLCB0eXBlLCBzb3J0T3B0aW9uKSB7XHJcbiAgICBpZiAodGhpcy5fdGFibGVEYXRhKSB7XHJcbiAgICAgIGlmICh0eXBlID09ICdOdW1iZXInKSB7XHJcbiAgICAgICAgaWYgKHNvcnRPcHRpb24gPT0gJ2Fzc2UnKSB7XHJcbiAgICAgICAgICB0aGlzLl90YWJsZURhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYVtoZWFkXSAtIGJbaGVhZF1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc29ydE9wdGlvbiA9PSAnZGVzYycpIHtcclxuICAgICAgICAgIHRoaXMuX3RhYmxlRGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBiW2hlYWRdIC0gYVtoZWFkXVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHlwZSA9PSAnU3RyaW5nJykge1xyXG4gICAgICAgIHRoaXMuX3RhYmxlRGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcblxyXG4gICAgICAgICAgaWYgKGFbaGVhZF0udG9Mb3dlckNhc2UoKSA8IGJbaGVhZF0udG9Mb3dlckNhc2UoKSAmJiBzb3J0T3B0aW9uID09ICdhc3NlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoYltoZWFkXS50b0xvd2VyQ2FzZSgpIDwgYVtoZWFkXS50b0xvd2VyQ2FzZSgpICYmIHNvcnRPcHRpb24gPT0gJ2Rlc2MnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoYVtoZWFkXS50b0xvd2VyQ2FzZSgpID4gYltoZWFkXS50b0xvd2VyQ2FzZSgpICYmIHNvcnRPcHRpb24gPT0gJ2Fzc2UnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGJbaGVhZF0udG9Mb3dlckNhc2UoKSA+IGFbaGVhZF0udG9Mb3dlckNhc2UoKSAmJiBzb3J0T3B0aW9uID09ICdkZXNjJykge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGlmICh0eXBlID09ICdEYXRlJykge1xyXG4gICAgICAgIGNvbnN0IHNvcnRhYmxlID0gdGhpcy5fdGFibGVEYXRhLnNvbWUoKGRhdGFWYWwpID0+IHtcclxuICAgICAgICAgIHJldHVybiBkYXRhVmFsW2hlYWRdICE9PSAnLSc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coeyBzb3J0YWJsZSB9KTtcclxuXHJcbiAgICAgICAgaWYgKHNvcnRhYmxlKSB7XHJcbiAgICAgICAgICB0aGlzLl90YWJsZURhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc29ydE9wdGlvbiA9PSAnYXNzZScpIHtcclxuICAgICAgICAgICAgICBpZiAoYltoZWFkXSA9PSAnLScpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuICg8YW55Pm5ldyBEYXRlKGJbaGVhZF0pIC0gPGFueT5uZXcgRGF0ZShhW2hlYWRdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNvcnRPcHRpb24gPT0gJ2Rlc2MnKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGFbaGVhZF0gPT0gJy0nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiAoPGFueT5uZXcgRGF0ZShhW2hlYWRdKSAtIDxhbnk+bmV3IERhdGUoYltoZWFkXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdzb3J0IC0nLCB0aGlzLl90YWJsZURhdGEsIGhlYWQsIHR5cGUsIHNvcnRPcHRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=