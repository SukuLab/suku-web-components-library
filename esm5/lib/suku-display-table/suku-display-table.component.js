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
                    template: "<div class=\"col content\">\r\n  <div class=\"header\">\r\n    <div class=\"col pt-4 pb-4\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{titleOneCustomClass}}\"\r\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">\r\n            {{titleContent}}\r\n          </h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <table class=\"table table-striped table-bordered table-responsive-sm\">\r\n    <thead>\r\n      <tr>\r\n        <th [style.color]=\"headerColor\" [style.font-size.px]=\"headerSize\" [style.font-weight]=\"headerWeight\"\r\n          *ngFor=\"let header of header;\" id=\"{{header.id}}\" class=\"ellipsis\">\r\n          <span *ngIf=\"!translator\" class=\"hovertxt\">{{header.title}}</span>\r\n          <span *ngIf=\"translator\" class=\"hovertxt\">\r\n            {{ header.title | translate}}\r\n          </span>\r\n          <span *ngIf=\"sortable\" class=\"float-right c-pointer pl-3 ml\">\r\n            <span (click)=\"sort(header.id,header.type,'asse');\" class='fas fa-caret-up displayBlock '></span>\r\n            <span (click)=\"sort(header.id,header.type,'desc');\" class='fas fa-caret-down displayBlock lineH'></span>\r\n          </span>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let data of tableData | paginate: { itemsPerPage: itemsPerPageCount, currentPage: p,totalItems:\r\n        totalItem } let i = index\">\r\n        <td *ngFor=\"let key of tableDataKey;\" [style.color]=\"dataColor\" [style.font-size.px]=\"\r\n          dataSize\" [style.font-weight]=\"dataWeight\" [style.background-color]=\"\r\n         (data[key] === status[0]) ? colorPallete[0]: \r\n        (data[key] === status[1]) ? colorPallete[1]: \r\n        (data[key] === status[2]) ? colorPallete[2] :\r\n         (data[key] === status[3]) ? colorPallete[3] : (key==statusKey && data[key]) ? colorPallete[4] : 'white' \">\r\n          <span *ngIf=\"(key === hrefSelection)\" (click)=\"action.emit(data[key])\" class=\"suku-link c-pointer\">\r\n            {{data[key] | translate}}\r\n          </span>\r\n          <span *ngIf=\"(key === hrefSelectionOne && data[key] === 'complete_TblValue')\"\r\n            (click)=\"actionTwo.emit(data[hrefSelection])\" class=\"suku-link c-pointer\">\r\n            {{data[key] | translate}}\r\n          </span>\r\n          <!-- <span *ngIf=\"!(key === hrefSelection)\">\r\n            {{data[key] | translate}}</span> -->\r\n          <span\r\n            *ngIf=\"!((key === hrefSelection) || (key === hrefSelectionOne && data[key] === 'complete_TblValue')) && !dateType.includes(key)\">\r\n            {{data[key] | translate}}</span>\r\n          <span *ngIf=\"!(key === hrefSelection) && dateType.includes(key) && enableDatePipe\">\r\n            {{data[key] | dateLocale: 'dateFormat'}}</span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"col pt-4 pb-4\" *ngIf=\"showPagination\">\r\n    <div class=\"row\">\r\n      <div class=\"col text-right\">\r\n        <pagination-controls (pageChange)=\"p = $event;paginationFun(p);\" previousLabel=\"{{paginationPreviousLabel}}\"\r\n          nextLabel=\"{{paginationNextLabel}}\"></pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWRpc3BsYXktdGFibGUvc3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvRTtJQW9ERTtRQTdDK0Isa0JBQWEsR0FBRywwQ0FBMEMsQ0FBQztRQWtCaEUsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFFakIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBQzNCLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFHdEIsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUdsQixrQkFBYSxHQUFHLE9BQU8sQ0FBQztRQUVsQixpQkFBWSxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2hGLFdBQU0sR0FBRyxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRy9CLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDSCw0QkFBdUIsR0FBRyxVQUFVLENBQUM7UUFDekMsd0JBQW1CLEdBQUcsTUFBTSxDQUFDO1FBQ25ELFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsYUFBUSxHQUFHLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzdC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Qyw4Q0FBK0I7O0lBQy9CLCtDQUFpQzs7SUFDakMsa0RBQTRDOztJQUM1QyxxREFBMEI7O0lBQzFCLGlEQUFpRzs7SUFDakcsMkNBQThFOztJQUM5RSxtREFBb0Q7O0lBQ3BELHNEQUE4Qzs7SUFDOUMsOENBQStCOztJQUMvQiwrQ0FBdUM7O0lBQ3ZDLDREQUF5RTs7SUFDekUsd0RBQTZEOztJQUM3RCwyQ0FBc0M7O0lBQ3RDLCtDQUEwQzs7SUFDMUMsOENBQXFEOztJQUNyRCw2Q0FBNEM7O0lBQzVDLDZDQUF3RDs7SUFDeEQsbURBQWtEOztJQUNsRCw4Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1kaXNwbGF5LXRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWRpc3BsYXktdGFibGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdURpc3BsYXlUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCd0YWJsZS1oZWFkZXInKSBoZWFkZXI7XHJcbiAgQElucHV0KCd0YWJsZS1oZWFkZXItY29udGVudCcpIGhlYWRlckNvbnRlbnQgPSAnY2prY3NubnMgc2prY3MgamtranMga2pramQga2pkZmtqZGYgamtkZic7XHJcbiAgX3RhYmxlRGF0YTogYW55O1xyXG4gIHA7XHJcbiAgdGFibGVEYXRhS2V5O1xyXG5cclxuICBASW5wdXQoJ3RhYmxlLWRhdGEnKVxyXG4gIGdldCB0YWJsZURhdGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGFibGVEYXRhO1xyXG4gIH1cclxuXHJcbiAgc2V0IHRhYmxlRGF0YSh2YWwpIHtcclxuICAgIHRoaXMuX3RhYmxlRGF0YSA9IHZhbDtcclxuICAgIGlmICh0aGlzLl90YWJsZURhdGFbMF0pIHtcclxuICAgICAgdGhpcy50YWJsZURhdGFLZXkgPSBPYmplY3Qua2V5cyh0aGlzLl90YWJsZURhdGFbMF0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBASW5wdXQoJ3RpdGxlLW9uZS1pZCcpIHRpdGxlT25lSWQ7XHJcbiAgQElucHV0KCd0aXRsZS1vbmUtc2l6ZScpIHRpdGxlT25lU2l6ZTtcclxuICBASW5wdXQoJ3RpdGxlLW9uZS1jb2xvcicpIHRpdGxlT25lQ29sb3IgPSAnd2hpdGUnO1xyXG4gIEBJbnB1dCgndGl0bGUtb25lLXdlaWdodCcpIHRpdGxlT25lV2VpZ2h0O1xyXG4gIEBJbnB1dCgndGl0bGUtb25lLWN1c3RvbS1jbGFzcycpIHRpdGxlT25lQ3VzdG9tQ2xhc3MgPSAnJztcclxuICBASW5wdXQoJ3RpdGxlLWNvbnRlbnQnKSB0aXRsZUNvbnRlbnQgPSAnTm8tRGF0YSc7XHJcbiAgQElucHV0KCdoZWFkZXItc2l6ZScpIGhlYWRlclNpemUgPSAnMTRweCc7XHJcbiAgQElucHV0KCdoZWFkZXItY29sb3InKSBoZWFkZXJDb2xvcjtcclxuICBASW5wdXQoJ2hlYWRlci13ZWlnaHQnKSBoZWFkZXJXZWlnaHQ7XHJcbiAgQElucHV0KCdkYXRhLXNpemUnKSBkYXRhU2l6ZSA9ICcxMnB4JztcclxuICBASW5wdXQoJ2RhdGEtY29sb3InKSBkYXRhQ29sb3I7XHJcbiAgQElucHV0KCdkYXRhLXdlaWdodCcpIGRhdGFXZWlnaHQ7XHJcbiAgQElucHV0KCdkYXRhLWhyZWYnKSBocmVmU2VsZWN0aW9uID0gJ2xvdGlkJztcclxuICBASW5wdXQoKSBocmVmU2VsZWN0aW9uT25lO1xyXG4gIEBJbnB1dCgnc3RhdHVzLWJnLXN0eWxlJykgY29sb3JQYWxsZXRlID0gWycjYTNkZWQ4JywgJyNmOGRiYjQnLCAnI2M3YzNmYScsICcjYzJjMWMxJywgJyNjN2MzZmEnXTtcclxuICBASW5wdXQoJ3N0YXR1cycpIHN0YXR1cyA9IFsnY29tcGxldGVkJywgJ25vdC1jb21wbGV0ZWQnLCAncGVuZGluZycsICdvdGhlcnMnXTtcclxuICBASW5wdXQoJ2Rpc3BsYXktcGFnaW5hdGlvbicpIHNob3dQYWdpbmF0aW9uID0gZmFsc2U7XHJcbiAgQElucHV0KCd0YWJsZS1pdGVtcy1jb3VudCcpIGl0ZW1zUGVyUGFnZUNvdW50O1xyXG4gIEBJbnB1dCgndG90YWwtaXRlbScpIHRvdGFsSXRlbTtcclxuICBASW5wdXQoJ3RyYW5zbGF0b3InKSB0cmFuc2xhdG9yID0gdHJ1ZTtcclxuICBASW5wdXQoJ3BhZ2luYXRpb24tcHJldmlvdXMtbGFiZWwnKSBwYWdpbmF0aW9uUHJldmlvdXNMYWJlbCA9ICdQcmV2aW91cyc7XHJcbiAgQElucHV0KCdwYWdpbmF0aW9uLW5leHQtbGFiZWwnKSBwYWdpbmF0aW9uTmV4dExhYmVsID0gJ05leHQnO1xyXG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHBhZ2luYXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgnYWN0aW9uLXR3bycpIGFjdGlvblR3byA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASW5wdXQoJ3RhYmxlLXNvcnRhYmxlJykgc29ydGFibGUgPSAnZmFsc2UnO1xyXG4gIEBJbnB1dCgnZGF0ZS10eXBlJykgZGF0ZVR5cGUgPSBbJ3N0YXJ0ZGF0ZScsICdlbmRkYXRlJ107XHJcbiAgQElucHV0KCdlbmFibGUtZGF0ZS1waXBlJykgZW5hYmxlRGF0ZVBpcGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzdGF0dXNLZXkgPSAnJztcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgcGFnaW5hdGlvbkZ1bihwKSB7XHJcbiAgICB0aGlzLnBhZ2luYXRpb24uZW1pdChwKTtcclxuICB9XHJcblxyXG4gIHNvcnQoaGVhZCwgdHlwZSwgc29ydE9wdGlvbikge1xyXG4gICAgaWYgKHRoaXMuX3RhYmxlRGF0YSkge1xyXG4gICAgICBpZiAodHlwZSA9PSAnTnVtYmVyJykge1xyXG4gICAgICAgIGlmIChzb3J0T3B0aW9uID09ICdhc3NlJykge1xyXG4gICAgICAgICAgdGhpcy5fdGFibGVEYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFbaGVhZF0gLSBiW2hlYWRdXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNvcnRPcHRpb24gPT0gJ2Rlc2MnKSB7XHJcbiAgICAgICAgICB0aGlzLl90YWJsZURhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYltoZWFkXSAtIGFbaGVhZF1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGUgPT0gJ1N0cmluZycpIHtcclxuICAgICAgICB0aGlzLl90YWJsZURhdGEuc29ydCgoYSwgYikgPT4ge1xyXG5cclxuICAgICAgICAgIGlmIChhW2hlYWRdLnRvTG93ZXJDYXNlKCkgPCBiW2hlYWRdLnRvTG93ZXJDYXNlKCkgJiYgc29ydE9wdGlvbiA9PSAnYXNzZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGJbaGVhZF0udG9Mb3dlckNhc2UoKSA8IGFbaGVhZF0udG9Mb3dlckNhc2UoKSAmJiBzb3J0T3B0aW9uID09ICdkZXNjJykge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGFbaGVhZF0udG9Mb3dlckNhc2UoKSA+IGJbaGVhZF0udG9Mb3dlckNhc2UoKSAmJiBzb3J0T3B0aW9uID09ICdhc3NlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChiW2hlYWRdLnRvTG93ZXJDYXNlKCkgPiBhW2hlYWRdLnRvTG93ZXJDYXNlKCkgJiYgc29ydE9wdGlvbiA9PSAnZGVzYycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICBpZiAodHlwZSA9PSAnRGF0ZScpIHtcclxuICAgICAgICBjb25zdCBzb3J0YWJsZSA9IHRoaXMuX3RhYmxlRGF0YS5zb21lKChkYXRhVmFsKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YVZhbFtoZWFkXSAhPT0gJy0nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHsgc29ydGFibGUgfSk7XHJcblxyXG4gICAgICAgIGlmIChzb3J0YWJsZSkge1xyXG4gICAgICAgICAgdGhpcy5fdGFibGVEYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNvcnRPcHRpb24gPT0gJ2Fzc2UnKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGJbaGVhZF0gPT0gJy0nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiAoPGFueT5uZXcgRGF0ZShiW2hlYWRdKSAtIDxhbnk+bmV3IERhdGUoYVtoZWFkXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzb3J0T3B0aW9uID09ICdkZXNjJykge1xyXG4gICAgICAgICAgICAgIGlmIChhW2hlYWRdID09ICctJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gKDxhbnk+bmV3IERhdGUoYVtoZWFkXSkgLSA8YW55Pm5ldyBEYXRlKGJbaGVhZF0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnc29ydCAtJywgdGhpcy5fdGFibGVEYXRhLCBoZWFkLCB0eXBlLCBzb3J0T3B0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19