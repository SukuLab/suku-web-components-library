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
                    if (a[head] < b[head] && sortOption == 'asse') {
                        return -1;
                    }
                    if (b[head] < a[head] && sortOption == 'desc') {
                        return -1;
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
            if (type == 'Date') {
                // this._tableData.sort(function (a, b) {
                //   if (sortOption == 'asse') {
                //     if (b == '-' && a) {
                //       return -1;
                //     }
                //   }
                //   if (sortOption == 'desc') {
                //     if (a == '-' && b) {
                //       return -1;
                //     }
                //   }
                //   a = new Date(a[head]);
                //   b = new Date(b[head]);
                //   if (a < b && sortOption == 'asse') {
                //     return -1;
                //   }
                //   if (b < a && sortOption == 'desc') {
                //     return -1;
                //   }
                //   return 0;
                // });
            }
            console.log('sort -', this._tableData, head, type, sortOption);
        }
    };
    SukuDisplayTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-display-table',
                    template: "<div class=\"col content\">\r\n  <div class=\"header\">\r\n    <div class=\"col pt-4 pb-4\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{titleOneCustomClass}}\"\r\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">\r\n            {{titleContent}}\r\n          </h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <table class=\"table table-striped table-bordered table-responsive-sm\">\r\n    <thead>\r\n      <tr>\r\n        <th [style.color]=\"headerColor\" [style.font-size.px]=\"headerSize\" [style.font-weight]=\"headerWeight\"\r\n          *ngFor=\"let header of header;\" id=\"{{header.id}}\" class=\"ellipsis\">\r\n          <span *ngIf=\"!translator\" class=\"hovertxt\">{{header.title}}</span>\r\n          <span *ngIf=\"translator\" class=\"hovertxt\">\r\n            {{ header.title | translate}}\r\n          </span>\r\n          <span *ngIf=\"sortable\" class=\"float-right c-pointer pl-3 ml\">\r\n            <span (click)=\"sort(header.id,header.type,'asse');\" class='fas fa-caret-up displayBlock '></span>\r\n            <span (click)=\"sort(header.id,header.type,'desc');\" class='fas fa-caret-down displayBlock lineH'></span>\r\n          </span>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let data of tableData | paginate: { itemsPerPage: itemsPerPageCount, currentPage: p,totalItems:\r\n        totalItem } let i = index\">\r\n        <td *ngFor=\"let key of tableDataKey;\" [style.color]=\"dataColor\" [style.font-size.px]=\"\r\n          dataSize\" [style.font-weight]=\"dataWeight\"\r\n          [style.background-color]=\"\r\n        (data[key] === status[0]) ? colorPallete[0]: (data[key] === status[1]) ? colorPallete[1]: (data[key] === status[2]) ? colorPallete[2] : (data[key] === status[3]) ? colorPallete[3] :(data[key] === status[4]) ? colorPallete[4] : 'white'\">\r\n          <span *ngIf=\"(key === hrefSelection)\" (click)=\"action.emit(data[key])\" class=\"suku-link c-pointer\">\r\n            {{data[key] | translate}}\r\n          </span>\r\n          <span *ngIf=\"(key === hrefSelectionOne && data[key] === 'complete_TblValue')\"\r\n            (click)=\"actionTwo.emit(data[hrefSelection])\" class=\"suku-link c-pointer\">\r\n            {{data[key] | translate}}\r\n          </span>\r\n          <!-- <span *ngIf=\"!(key === hrefSelection)\">\r\n            {{data[key] | translate}}</span> -->\r\n          <span\r\n            *ngIf=\"!((key === hrefSelection) || (key === hrefSelectionOne && data[key] === 'complete_TblValue')) && !dateType.includes(key)\">\r\n            {{data[key] | translate}}</span>\r\n          <span *ngIf=\"!(key === hrefSelection) && dateType.includes(key) && enableDatePipe\">\r\n            {{data[key] | dateLocale: 'dateFormat'}}</span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"col pt-4 pb-4\" *ngIf=\"showPagination\">\r\n    <div class=\"row\">\r\n      <div class=\"col text-right\">\r\n        <pagination-controls (pageChange)=\"p = $event;paginationFun(p);\" previousLabel=\"{{paginationPreviousLabel}}\"\r\n          nextLabel=\"{{paginationNextLabel}}\"></pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWRpc3BsYXktdGFibGUvc3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvRTtJQW1ERTtRQTVDK0Isa0JBQWEsR0FBRywwQ0FBMEMsQ0FBQztRQWtCaEUsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFFakIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBQzNCLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFHdEIsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUdsQixrQkFBYSxHQUFHLE9BQU8sQ0FBQztRQUVsQixpQkFBWSxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEUsV0FBTSxHQUFHLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakQsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFHL0IsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNILDRCQUF1QixHQUFHLFVBQVUsQ0FBQztRQUN6Qyx3QkFBbUIsR0FBRyxNQUFNLENBQUM7UUFDbkQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsYUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixhQUFRLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDN0IsbUJBQWMsR0FB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O0lBQzlFLG1EQUFvRDs7SUFDcEQsc0RBQThDOztJQUM5Qyw4Q0FBK0I7O0lBQy9CLCtDQUF1Qzs7SUFDdkMsNERBQXlFOztJQUN6RSx3REFBNkQ7O0lBQzdELDJDQUFzQzs7SUFDdEMsK0NBQTBDOztJQUMxQyw4Q0FBcUQ7O0lBQ3JELDZDQUE0Qzs7SUFDNUMsNkNBQXdEOztJQUN4RCxtREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1kaXNwbGF5LXRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWRpc3BsYXktdGFibGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdURpc3BsYXlUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCd0YWJsZS1oZWFkZXInKSBoZWFkZXI7XHJcbiAgQElucHV0KCd0YWJsZS1oZWFkZXItY29udGVudCcpIGhlYWRlckNvbnRlbnQgPSAnY2prY3NubnMgc2prY3MgamtranMga2pramQga2pkZmtqZGYgamtkZic7XHJcbiAgX3RhYmxlRGF0YTogYW55O1xyXG4gIHA7XHJcbiAgdGFibGVEYXRhS2V5O1xyXG5cclxuICBASW5wdXQoJ3RhYmxlLWRhdGEnKVxyXG4gIGdldCB0YWJsZURhdGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGFibGVEYXRhO1xyXG4gIH1cclxuXHJcbiAgc2V0IHRhYmxlRGF0YSh2YWwpIHtcclxuICAgIHRoaXMuX3RhYmxlRGF0YSA9IHZhbDtcclxuICAgIGlmICh0aGlzLl90YWJsZURhdGFbMF0pIHtcclxuICAgICAgdGhpcy50YWJsZURhdGFLZXkgPSBPYmplY3Qua2V5cyh0aGlzLl90YWJsZURhdGFbMF0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBASW5wdXQoJ3RpdGxlLW9uZS1pZCcpIHRpdGxlT25lSWQ7XHJcbiAgQElucHV0KCd0aXRsZS1vbmUtc2l6ZScpIHRpdGxlT25lU2l6ZTtcclxuICBASW5wdXQoJ3RpdGxlLW9uZS1jb2xvcicpIHRpdGxlT25lQ29sb3IgPSAnd2hpdGUnO1xyXG4gIEBJbnB1dCgndGl0bGUtb25lLXdlaWdodCcpIHRpdGxlT25lV2VpZ2h0O1xyXG4gIEBJbnB1dCgndGl0bGUtb25lLWN1c3RvbS1jbGFzcycpIHRpdGxlT25lQ3VzdG9tQ2xhc3MgPSAnJztcclxuICBASW5wdXQoJ3RpdGxlLWNvbnRlbnQnKSB0aXRsZUNvbnRlbnQgPSAnTm8tRGF0YSc7XHJcbiAgQElucHV0KCdoZWFkZXItc2l6ZScpIGhlYWRlclNpemUgPSAnMTRweCc7XHJcbiAgQElucHV0KCdoZWFkZXItY29sb3InKSBoZWFkZXJDb2xvcjtcclxuICBASW5wdXQoJ2hlYWRlci13ZWlnaHQnKSBoZWFkZXJXZWlnaHQ7XHJcbiAgQElucHV0KCdkYXRhLXNpemUnKSBkYXRhU2l6ZSA9ICcxMnB4JztcclxuICBASW5wdXQoJ2RhdGEtY29sb3InKSBkYXRhQ29sb3I7XHJcbiAgQElucHV0KCdkYXRhLXdlaWdodCcpIGRhdGFXZWlnaHQ7XHJcbiAgQElucHV0KCdkYXRhLWhyZWYnKSBocmVmU2VsZWN0aW9uID0gJ2xvdGlkJztcclxuICBASW5wdXQoKSBocmVmU2VsZWN0aW9uT25lO1xyXG4gIEBJbnB1dCgnc3RhdHVzLWJnLXN0eWxlJykgY29sb3JQYWxsZXRlID0gWycjYTNkZWQ4JywgJyNmOGRiYjQnLCAnI2M3YzNmYScsICdncmF5J107XHJcbiAgQElucHV0KCdzdGF0dXMnKSBzdGF0dXMgPSBbJ2NvbXBsZXRlZCcsICdub3QtY29tcGxldGVkJywgJ3BlbmRpbmcnLCAnb3RoZXJzJ107XHJcbiAgQElucHV0KCdkaXNwbGF5LXBhZ2luYXRpb24nKSBzaG93UGFnaW5hdGlvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgndGFibGUtaXRlbXMtY291bnQnKSBpdGVtc1BlclBhZ2VDb3VudDtcclxuICBASW5wdXQoJ3RvdGFsLWl0ZW0nKSB0b3RhbEl0ZW07XHJcbiAgQElucHV0KCd0cmFuc2xhdG9yJykgdHJhbnNsYXRvciA9IHRydWU7XHJcbiAgQElucHV0KCdwYWdpbmF0aW9uLXByZXZpb3VzLWxhYmVsJykgcGFnaW5hdGlvblByZXZpb3VzTGFiZWwgPSAnUHJldmlvdXMnO1xyXG4gIEBJbnB1dCgncGFnaW5hdGlvbi1uZXh0LWxhYmVsJykgcGFnaW5hdGlvbk5leHRMYWJlbCA9ICdOZXh0JztcclxuICBAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwYWdpbmF0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoJ2FjdGlvbi10d28nKSBhY3Rpb25Ud28gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCd0YWJsZS1zb3J0YWJsZScpIHNvcnRhYmxlID0gJ2ZhbHNlJztcclxuICBASW5wdXQoJ2RhdGUtdHlwZScpIGRhdGVUeXBlID0gWydzdGFydGRhdGUnLCAnZW5kZGF0ZSddO1xyXG4gIEBJbnB1dCgnZW5hYmxlLWRhdGUtcGlwZScpIGVuYWJsZURhdGVQaXBlID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIHBhZ2luYXRpb25GdW4ocCkge1xyXG4gICAgdGhpcy5wYWdpbmF0aW9uLmVtaXQocCk7XHJcbiAgfVxyXG5cclxuICBzb3J0KGhlYWQsIHR5cGUsIHNvcnRPcHRpb24pIHtcclxuICAgIGlmICh0aGlzLl90YWJsZURhdGEpIHtcclxuICAgICAgaWYgKHR5cGUgPT0gJ051bWJlcicpIHtcclxuICAgICAgICBpZiAoc29ydE9wdGlvbiA9PSAnYXNzZScpIHtcclxuICAgICAgICAgIHRoaXMuX3RhYmxlRGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhW2hlYWRdIC0gYltoZWFkXVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzb3J0T3B0aW9uID09ICdkZXNjJykge1xyXG4gICAgICAgICAgdGhpcy5fdGFibGVEYXRhLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJbaGVhZF0gLSBhW2hlYWRdXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGUgPT0gJ1N0cmluZycpIHtcclxuICAgICAgICB0aGlzLl90YWJsZURhdGEuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgaWYgKGFbaGVhZF0gPCBiW2hlYWRdICYmIHNvcnRPcHRpb24gPT0gJ2Fzc2UnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChiW2hlYWRdIDwgYVtoZWFkXSAmJiBzb3J0T3B0aW9uID09ICdkZXNjJykge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGlmICh0eXBlID09ICdEYXRlJykge1xyXG4gICAgICAgIGNvbnN0IHNvcnRhYmxlID0gdGhpcy5fdGFibGVEYXRhLnNvbWUoKGRhdGFWYWwpID0+IHtcclxuICAgICAgICAgIHJldHVybiBkYXRhVmFsW2hlYWRdICE9PSAnLSc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coeyBzb3J0YWJsZSB9KTtcclxuXHJcbiAgICAgICAgaWYgKHNvcnRhYmxlKSB7XHJcbiAgICAgICAgICB0aGlzLl90YWJsZURhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc29ydE9wdGlvbiA9PSAnYXNzZScpIHtcclxuICAgICAgICAgICAgICBpZiAoYltoZWFkXSA9PSAnLScpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuICg8YW55Pm5ldyBEYXRlKGJbaGVhZF0pIC0gPGFueT5uZXcgRGF0ZShhW2hlYWRdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNvcnRPcHRpb24gPT0gJ2Rlc2MnKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGFbaGVhZF0gPT0gJy0nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiAoPGFueT5uZXcgRGF0ZShhW2hlYWRdKSAtIDxhbnk+bmV3IERhdGUoYltoZWFkXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlID09ICdEYXRlJykge1xyXG4gICAgICAgIC8vIHRoaXMuX3RhYmxlRGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgLy8gICBpZiAoc29ydE9wdGlvbiA9PSAnYXNzZScpIHtcclxuICAgICAgICAvLyAgICAgaWYgKGIgPT0gJy0nICYmIGEpIHtcclxuICAgICAgICAvLyAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyAgIGlmIChzb3J0T3B0aW9uID09ICdkZXNjJykge1xyXG4gICAgICAgIC8vICAgICBpZiAoYSA9PSAnLScgJiYgYikge1xyXG4gICAgICAgIC8vICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICAgIC8vICAgYSA9IG5ldyBEYXRlKGFbaGVhZF0pO1xyXG4gICAgICAgIC8vICAgYiA9IG5ldyBEYXRlKGJbaGVhZF0pO1xyXG4gICAgICAgIC8vICAgaWYgKGEgPCBiICYmIHNvcnRPcHRpb24gPT0gJ2Fzc2UnKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiAtMTtcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyAgIGlmIChiIDwgYSAmJiBzb3J0T3B0aW9uID09ICdkZXNjJykge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gICByZXR1cm4gMDtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZygnc29ydCAtJywgdGhpcy5fdGFibGVEYXRhLCBoZWFkLCB0eXBlLCBzb3J0T3B0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19