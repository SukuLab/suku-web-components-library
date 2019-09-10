/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuFormTableComponent = /** @class */ (function () {
    function SukuFormTableComponent() {
        this._items = [];
        this.editable = [];
        this.titleOneColor = 'white';
        this.titleOneCustomClass = '';
        this.titleContent = 'Enter animal information:';
        this.headerSize = '14px';
        this.colorPallete = ['#a3ded8', '#f8dbb4', '#c7c3fa', 'gray'];
        this.status = ['completed', 'not-completed', 'pending', 'others'];
        this.defaultCount = 2;
        this.enableHighlighter = false;
        this.enableControls = true;
        this.enableSelectAll = false;
    }
    Object.defineProperty(SukuFormTableComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            console.log('val', val.length);
            if (val.length == 0) {
                this.addTable(this.defaultCount, val.length);
            }
            else {
                this._items = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SukuFormTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} val
     * @param {?} editIndex
     * @return {?}
     */
    SukuFormTableComponent.prototype.addTable = /**
     * @param {?} val
     * @param {?} editIndex
     * @return {?}
     */
    function (val, editIndex) {
        var _loop_1 = function (i) {
            this_1.editable[editIndex + i] = true;
            /** @type {?} */
            var template = {};
            /** @type {?} */
            var typeKey = this_1.typeKey;
            Object.keys(typeKey).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                if (typeKey[key] == 'Checkbox') {
                    template[key] = false;
                }
                else if (typeKey[key] == 'String' || typeKey[key] == 'Number') {
                    template[key] = '';
                }
                else {
                    template[key] = '';
                }
            }));
            if (this_1.enableControls) {
                template['action'] = '';
            }
            this_1._items.push(template);
        };
        var this_1 = this;
        for (var i = 0; i < val; i++) {
            _loop_1(i);
        }
        console.log('_items', this._items);
    };
    /**
     * @return {?}
     */
    SukuFormTableComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        console.log('_items', this._items);
    };
    /**
     * @param {?} i
     * @return {?}
     */
    SukuFormTableComponent.prototype.edit = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        console.log(i);
        if (this.editable[i]) {
            this.editable[i] = false;
        }
        else {
            this.editable[i] = true;
        }
    };
    /**
     * @param {?} i
     * @return {?}
     */
    SukuFormTableComponent.prototype.remove = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this._items.splice(i, 1);
    };
    /**
     * @param {?} list
     * @return {?}
     */
    SukuFormTableComponent.prototype.checkValid = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        /** @type {?} */
        var data = [
            { key: '# of Boxes' },
            { key: 'test' }
        ];
        /** @type {?} */
        var result = data.some((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            return val.key == list;
        }));
        return result;
    };
    /**
     * @return {?}
     */
    SukuFormTableComponent.prototype.selectAllAction = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var selectAll = this.selectAll;
        if (selectAll) {
            this._items.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                Object.keys(element).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    if (key == 'Received All Boxes') {
                        console.log('element', element[key]);
                        element[key] = true;
                    }
                }));
                console.log('data', element);
            }));
        }
        else {
            this._items.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                Object.keys(element).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    if (key == 'Received All Boxes') {
                        console.log('element', element[key]);
                        element[key] = false;
                    }
                    if (key == _this.patchKey) {
                        console.log('element', element[key]);
                        element[key] = '';
                    }
                }));
                console.log('data', element);
            }));
        }
    };
    SukuFormTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-form-table',
                    template: "<div class=\"col p-0\">\n  <div class=\"header\">\n    <div class=\"col pt-4 pb-4\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{titleOneCustomClass}}\"\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">\n            {{titleContent}}\n          </h1>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col p-0\">\n    <table class=\"table bg-white table-responsive-sm\">\n      <thead>\n        <tr>\n          <th *ngFor=\"let head of _items[0] | keys\">\n            <span>{{head | titlecase }}</span>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of _items;let j=index\">\n          <!-- '#d2d2d2' f8dbb4 -->\n          <!-- ((list == highlighterKey) ?\n           ((item[selectionKey] && item[highlighterKey] && enableHighlighter) ? '#a3ded8':( !(item[selectionKey] &&\n           enableHighlighter) ?\n           '#d3d9dc' : '#f8dbb4')) : '')\n           ||\n           ((list == patchKey) ?\n           ((item[patchKey]) ? '#a3ded8' :( !(item[selectionKey]) ? '#f8dbb4' : '#d3d9dc')) : '') -->\n          <td [ngClass]=\"{'border-enable': checkValid(list)}\" *ngFor=\"let list of item | keys; let i=index\"\n            [style.background-color]=\"(checkValid(list) ?\n            ((item[selectionKey] && item[highlighterKey] && enableHighlighter) ? '#a3ded8':( !(item[selectionKey] &&\n            enableHighlighter) ?\n            '#d3d9dc' : '#f8dbb4')) : '')\n            ||\n            ((list == patchKey) ?\n            ((item[patchKey]) ? '#a3ded8' :( !(item[selectionKey]) ? '#f8dbb4' : '#d3d9dc')) : '')\">\n            <span\n              *ngIf=\"!editable[j] && (list != 'action') && (typeKey[list]!='Checkbox') && !checkValid(list) && (list != patchKey)\">\n              {{item[list]}}\n            </span>\n            <!-- input -->\n            <input class=\"form-control\" [(ngModel)]=\"item[list]\" [maxLength]=\"25\"\n              *ngIf=\"editable[j] && (list != 'action') && ( typeKey[list]=='String' || typeKey[list]=='Number')\" />\n\n            <input type=\"date\" data-date=\"\" data-date-format=\"mm/dd/yyyy\" class=\"form-control\"\n              *ngIf=\"editable[j] && (list != 'action') && typeKey[list]=='Date'\" [(ngModel)]=\"item[list]\" />\n\n            <!-- checkbox -->\n            <span [ngClass]=\"{'align-checkbox': editable[j] }\" *ngIf=\"(typeKey[list]=='Checkbox')\">\n              <mat-checkbox color=\"primary\" [disabled]=\"!editable[j] && (list != selectionKey)\"\n                [(ngModel)]=\"item[list]\">\n              </mat-checkbox>\n            </span>\n\n            <!-- select -->\n            <select class=\"form-control\" *ngIf=\"editable[j] && (list != 'action') \n            && ( typeKey[list]!='String' && typeKey[list]!='Number' && typeKey[list]!='Checkbox' &&\n            typeKey[list] !='Date')\" [(ngModel)]=\"item[list]\">\n              <option *ngFor=\"let c of typeKey[list]\" [ngValue]=\"c\"> {{c}} </option>\n            </select>\n\n            <!-- input- highlighterKey -->\n            <span *ngIf=\"checkValid(list) && (list != 'action')\">\n              <span *ngFor=\"let data of keyData\">\n                <span *ngIf=\"(list == data.key)\">\n                  <input type=\"number\" [ngClass]=\"{'disabled': !item[selectionKey]}\" [disabled]=\"!item[selectionKey]\"\n                    class=\"form-control sample\" [(ngModel)]=\"item[data.key]\"\n                    *ngIf=\"checkValid(list) && (list != 'action') && highlighterKey\" />\n                </span>\n              </span>\n            </span>\n\n\n            <!-- input -patchKey -->\n            <input type=\"number\" [ngClass]=\"{'disabled': item[selectionKey]}\" [disabled]=\"item[selectionKey]\"\n              class=\"form-control sample\" [(ngModel)]=\"item[selectionKey] ? item[highlighterKey]: item[patchKey]\"\n              *ngIf=\"(list == patchKey) && (list != 'action') && patchKey\" />\n\n            <span class=\"col p-0 pl-2\" (click)=\"edit(j)\" *ngIf=\"list == 'action' && !editable[j]\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\n                [ngClass]=\"{'btn-edit' : editable[j]}\">\n                edit\n              </span>\n            </span>\n            <span class=\"col p-0 pl-2\" *ngIf=\"list == 'action' && editable[j]\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\n                (click)=\"edit(j)\" [ngClass]=\"{'btn-edit' : editable[j]}\">\n                save\n              </span>\n            </span>\n            <span class=\"col c-pointer pl-4\" *ngIf=\"list == 'action'\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\n                (click)=\"remove(j)\" [ngClass]=\"{'btn-edit' : editable[j]}\">\n                remove\n              </span>\n            </span>\n          </td>\n        </tr>\n        <tr *ngIf=\"enableSelectAll && _items[0]\">\n          <td *ngFor=\"let list of _items[0] | keys; let i=index\">\n            <!-- checkbox -->\n            <span [ngClass]=\"{'align-checkbox': editable[j] }\" *ngIf=\"(typeKey[list]=='Checkbox')\">\n              <mat-checkbox color=\"primary\" [disabled]=\"!editable[j] && (list != selectionKey)\" [(ngModel)]=\"selectAll\"\n                (change)=\"selectAllAction()\"> Select All\n              </mat-checkbox>\n            </span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col text-right\" *ngIf=\"enableControls\">\n    <span class=\"p-2\">\n      <a class=\"secondary-btn\" id=\"addOneRow\" [style.font-size.rem]=\"controlsSize\" (click)=\"addTable(1,_items?.length)\"\n        color=\"primary\">Add 1 row</a>\n    </span>\n    <span class=\"p-2\">\n      <a class=\"secondary-btn\" id=\"addTenRow\" [style.font-size.rem]=\"controlsSize\"\n        (click)=\"addTable(10, _items?.length)\" color=\"primary\">Add 10 rows</a>\n    </span>\n  </div>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.header{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.title{font-family:var(--suku-primary-font);font-weight:600;font-size:var(--suku-font-size-5);text-transform:uppercase}.table{font-family:var(--suku-primary-font);box-shadow:0 1px 2px 0 rgba(0,0,0,.1)}table td{vertical-align:middle;padding-left:1%}.btn-edit{line-height:2!important}input,select{width:100%;height:inherit!important}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0}td{width:15%}.form-control:focus{border:1px solid #ced4da;border-color:#ced4da!important;box-shadow:none!important}:host ::ng-deep.mat-checkbox{vertical-align:sub!important}th:last-child{width:12%!important}td:last-child{width:13%!important}button:focus{outline:0!important}.secondary-btn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:var(--suku-text-heading);border-bottom:3.5px solid;border-color:var(--suku-primary-color);word-break:break-word!important;cursor:pointer}.align-checkbox{display:flex;padding-top:5%}.c-pointer{cursor:pointer}table>tbody>tr>td{flex-wrap:wrap!important}.sample{background:inherit!important;border:none!important}.disabled{cursor:not-allowed}select option{border:1px solid #757575}option{border:1px solid #aaa;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,.1);color:#555}.table th{padding:.5rem .5rem .5rem 1.25rem;border-top:1px solid #bbbbbbcc}.table td{padding:.25rem .25rem .25rem 1.25rem;border-top:1px solid #bbbbbbcc}.border-enable{border:1px solid #92929240}"]
                }] }
    ];
    /** @nocollapse */
    SukuFormTableComponent.ctorParameters = function () { return []; };
    SukuFormTableComponent.propDecorators = {
        titleOneId: [{ type: Input, args: ['title-one-id',] }],
        titleOneSize: [{ type: Input, args: ['title-one-size',] }],
        titleOneColor: [{ type: Input, args: ['title-one-color',] }],
        titleOneWeight: [{ type: Input, args: ['title-one-weight',] }],
        titleOneCustomClass: [{ type: Input, args: ['title-one-custom-class',] }],
        titleContent: [{ type: Input, args: ['title-content',] }],
        headerSize: [{ type: Input, args: ['header-size',] }],
        headerColor: [{ type: Input, args: ['header-color',] }],
        headerWeight: [{ type: Input, args: ['header-weight',] }],
        colorPallete: [{ type: Input, args: ['status-bg-style',] }],
        status: [{ type: Input, args: ['status',] }],
        typeKey: [{ type: Input }],
        defaultCount: [{ type: Input }],
        items: [{ type: Input }],
        selectionKey: [{ type: Input }],
        highlighterKey: [{ type: Input }],
        patchKey: [{ type: Input }],
        enableHighlighter: [{ type: Input }],
        enableControls: [{ type: Input }],
        enableSelectAll: [{ type: Input }],
        selectAll: [{ type: Input }],
        keyData: [{ type: Input }],
        controlsSize: [{ type: Input }],
        controlCustomClass: [{ type: Input }]
    };
    return SukuFormTableComponent;
}());
export { SukuFormTableComponent };
if (false) {
    /** @type {?} */
    SukuFormTableComponent.prototype.j;
    /** @type {?} */
    SukuFormTableComponent.prototype._items;
    /** @type {?} */
    SukuFormTableComponent.prototype.editable;
    /** @type {?} */
    SukuFormTableComponent.prototype.titleOneId;
    /** @type {?} */
    SukuFormTableComponent.prototype.titleOneSize;
    /** @type {?} */
    SukuFormTableComponent.prototype.titleOneColor;
    /** @type {?} */
    SukuFormTableComponent.prototype.titleOneWeight;
    /** @type {?} */
    SukuFormTableComponent.prototype.titleOneCustomClass;
    /** @type {?} */
    SukuFormTableComponent.prototype.titleContent;
    /** @type {?} */
    SukuFormTableComponent.prototype.headerSize;
    /** @type {?} */
    SukuFormTableComponent.prototype.headerColor;
    /** @type {?} */
    SukuFormTableComponent.prototype.headerWeight;
    /** @type {?} */
    SukuFormTableComponent.prototype.colorPallete;
    /** @type {?} */
    SukuFormTableComponent.prototype.status;
    /** @type {?} */
    SukuFormTableComponent.prototype.typeKey;
    /** @type {?} */
    SukuFormTableComponent.prototype.defaultCount;
    /** @type {?} */
    SukuFormTableComponent.prototype.selectionKey;
    /** @type {?} */
    SukuFormTableComponent.prototype.highlighterKey;
    /** @type {?} */
    SukuFormTableComponent.prototype.patchKey;
    /** @type {?} */
    SukuFormTableComponent.prototype.enableHighlighter;
    /** @type {?} */
    SukuFormTableComponent.prototype.enableControls;
    /** @type {?} */
    SukuFormTableComponent.prototype.enableSelectAll;
    /** @type {?} */
    SukuFormTableComponent.prototype.selectAll;
    /** @type {?} */
    SukuFormTableComponent.prototype.keyData;
    /** @type {?} */
    SukuFormTableComponent.prototype.controlsSize;
    /** @type {?} */
    SukuFormTableComponent.prototype.controlCustomClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWZvcm0tdGFibGUvc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUE2Q0U7UUF0Q0EsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFHWSxrQkFBYSxHQUFHLE9BQU8sQ0FBQztRQUVqQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDbEMsaUJBQVksR0FBRywyQkFBMkIsQ0FBQztRQUM3QyxlQUFVLEdBQUcsTUFBTSxDQUFDO1FBR2hCLGlCQUFZLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsRSxXQUFNLEdBQUcsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVyRSxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQWdCakIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBT2pDLENBQUM7SUF4QkQsc0JBQ0kseUNBQUs7Ozs7UUFEVDtZQUVFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7OztRQUNELFVBQVUsR0FBRztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQixJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFD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QixLQUFLLFNBQUMsZ0JBQWdCO2dDQUN0QixLQUFLLFNBQUMsaUJBQWlCO2lDQUN2QixLQUFLLFNBQUMsa0JBQWtCO3NDQUN4QixLQUFLLFNBQUMsd0JBQXdCOytCQUM5QixLQUFLLFNBQUMsZUFBZTs2QkFDckIsS0FBSyxTQUFDLGFBQWE7OEJBQ25CLEtBQUssU0FBQyxjQUFjOytCQUNwQixLQUFLLFNBQUMsZUFBZTsrQkFDckIsS0FBSyxTQUFDLGlCQUFpQjt5QkFDdkIsS0FBSyxTQUFDLFFBQVE7MEJBQ2QsS0FBSzsrQkFDTCxLQUFLO3dCQUNMLEtBQUs7K0JBWUwsS0FBSztpQ0FDTCxLQUFLOzJCQUNMLEtBQUs7b0NBQ0wsS0FBSztpQ0FDTCxLQUFLO2tDQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLOytCQUNMLEtBQUs7cUNBQ0wsS0FBSzs7SUF5RlIsNkJBQUM7Q0FBQSxBQXBJRCxJQW9JQztTQS9IWSxzQkFBc0I7OztJQUNqQyxtQ0FBRTs7SUFDRix3Q0FBWTs7SUFDWiwwQ0FBYzs7SUFDZCw0Q0FBa0M7O0lBQ2xDLDhDQUFzQzs7SUFDdEMsK0NBQWtEOztJQUNsRCxnREFBMEM7O0lBQzFDLHFEQUEwRDs7SUFDMUQsOENBQW1FOztJQUNuRSw0Q0FBMEM7O0lBQzFDLDZDQUFtQzs7SUFDbkMsOENBQXFDOztJQUNyQyw4Q0FBbUY7O0lBQ25GLHdDQUE4RTs7SUFDOUUseUNBQWlCOztJQUNqQiw4Q0FBMEI7O0lBYTFCLDhDQUFzQjs7SUFDdEIsZ0RBQXdCOztJQUN4QiwwQ0FBa0I7O0lBQ2xCLG1EQUFtQzs7SUFDbkMsZ0RBQStCOztJQUMvQixpREFBaUM7O0lBQ2pDLDJDQUFtQjs7SUFDbkIseUNBQWlCOztJQUNqQiw4Q0FBc0I7O0lBQ3RCLG9EQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZm9ybS10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWZvcm0tdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWZvcm0tdGFibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Rm9ybVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgajtcbiAgX2l0ZW1zID0gW107XG4gIGVkaXRhYmxlID0gW107XG4gIEBJbnB1dCgndGl0bGUtb25lLWlkJykgdGl0bGVPbmVJZDtcbiAgQElucHV0KCd0aXRsZS1vbmUtc2l6ZScpIHRpdGxlT25lU2l6ZTtcbiAgQElucHV0KCd0aXRsZS1vbmUtY29sb3InKSB0aXRsZU9uZUNvbG9yID0gJ3doaXRlJztcbiAgQElucHV0KCd0aXRsZS1vbmUtd2VpZ2h0JykgdGl0bGVPbmVXZWlnaHQ7XG4gIEBJbnB1dCgndGl0bGUtb25lLWN1c3RvbS1jbGFzcycpIHRpdGxlT25lQ3VzdG9tQ2xhc3MgPSAnJztcbiAgQElucHV0KCd0aXRsZS1jb250ZW50JykgdGl0bGVDb250ZW50ID0gJ0VudGVyIGFuaW1hbCBpbmZvcm1hdGlvbjonO1xuICBASW5wdXQoJ2hlYWRlci1zaXplJykgaGVhZGVyU2l6ZSA9ICcxNHB4JztcbiAgQElucHV0KCdoZWFkZXItY29sb3InKSBoZWFkZXJDb2xvcjtcbiAgQElucHV0KCdoZWFkZXItd2VpZ2h0JykgaGVhZGVyV2VpZ2h0O1xuICBASW5wdXQoJ3N0YXR1cy1iZy1zdHlsZScpIGNvbG9yUGFsbGV0ZSA9IFsnI2EzZGVkOCcsICcjZjhkYmI0JywgJyNjN2MzZmEnLCAnZ3JheSddO1xuICBASW5wdXQoJ3N0YXR1cycpIHN0YXR1cyA9IFsnY29tcGxldGVkJywgJ25vdC1jb21wbGV0ZWQnLCAncGVuZGluZycsICdvdGhlcnMnXTtcbiAgQElucHV0KCkgdHlwZUtleTtcbiAgQElucHV0KCkgZGVmYXVsdENvdW50ID0gMjtcbiAgQElucHV0KClcbiAgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuICBzZXQgaXRlbXModmFsKSB7XG4gICAgY29uc29sZS5sb2coJ3ZhbCcsIHZhbC5sZW5ndGgpO1xuICAgIGlmICh2YWwubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuYWRkVGFibGUodGhpcy5kZWZhdWx0Q291bnQsIHZhbC5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IHZhbDtcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgc2VsZWN0aW9uS2V5O1xuICBASW5wdXQoKSBoaWdobGlnaHRlcktleTtcbiAgQElucHV0KCkgcGF0Y2hLZXk7XG4gIEBJbnB1dCgpIGVuYWJsZUhpZ2hsaWdodGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGVuYWJsZUNvbnRyb2xzID0gdHJ1ZTtcbiAgQElucHV0KCkgZW5hYmxlU2VsZWN0QWxsID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNlbGVjdEFsbDtcbiAgQElucHV0KCkga2V5RGF0YTtcbiAgQElucHV0KCkgY29udHJvbHNTaXplO1xuICBASW5wdXQoKSBjb250cm9sQ3VzdG9tQ2xhc3M7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGFkZFRhYmxlKHZhbCwgZWRpdEluZGV4KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWw7IGkrKykge1xuICAgICAgdGhpcy5lZGl0YWJsZVtlZGl0SW5kZXggKyBpXSA9IHRydWU7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IHt9O1xuICAgICAgY29uc3QgdHlwZUtleSA9IHRoaXMudHlwZUtleTtcbiAgICAgIE9iamVjdC5rZXlzKHR5cGVLZXkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodHlwZUtleVtrZXldID09ICdDaGVja2JveCcpIHtcbiAgICAgICAgICB0ZW1wbGF0ZVtrZXldID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZUtleVtrZXldID09ICdTdHJpbmcnIHx8IHR5cGVLZXlba2V5XSA9PSAnTnVtYmVyJykge1xuICAgICAgICAgIHRlbXBsYXRlW2tleV0gPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wbGF0ZVtrZXldID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZW5hYmxlQ29udHJvbHMpIHtcbiAgICAgICAgdGVtcGxhdGVbJ2FjdGlvbiddID0gJyc7XG4gICAgICB9XG4gICAgICB0aGlzLl9pdGVtcy5wdXNoKHRlbXBsYXRlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ19pdGVtcycsIHRoaXMuX2l0ZW1zKTtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnX2l0ZW1zJywgdGhpcy5faXRlbXMpO1xuICB9XG5cbiAgZWRpdChpKSB7XG4gICAgY29uc29sZS5sb2coaSk7XG4gICAgaWYgKHRoaXMuZWRpdGFibGVbaV0pIHtcbiAgICAgIHRoaXMuZWRpdGFibGVbaV0gPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lZGl0YWJsZVtpXSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKGkpIHtcbiAgICB0aGlzLl9pdGVtcy5zcGxpY2UoaSwgMSk7XG4gIH1cblxuICBjaGVja1ZhbGlkKGxpc3QpIHtcbiAgICBjb25zdCBkYXRhID0gW1xuICAgICAgeyBrZXk6ICcjIG9mIEJveGVzJyB9LFxuICAgICAgeyBrZXk6ICd0ZXN0JyB9XG4gICAgXTtcbiAgICBjb25zdCByZXN1bHQgPSBkYXRhLnNvbWUodmFsID0+IHtcbiAgICAgIHJldHVybiB2YWwua2V5ID09IGxpc3Q7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNlbGVjdEFsbEFjdGlvbigpIHtcbiAgICBjb25zdCBzZWxlY3RBbGwgPSB0aGlzLnNlbGVjdEFsbDtcbiAgICBpZiAoc2VsZWN0QWxsKSB7XG4gICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyhlbGVtZW50KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBpZiAoa2V5ID09ICdSZWNlaXZlZCBBbGwgQm94ZXMnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWxlbWVudCcsIGVsZW1lbnRba2V5XSk7XG4gICAgICAgICAgICBlbGVtZW50W2tleV0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMoZWxlbWVudCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgaWYgKGtleSA9PSAnUmVjZWl2ZWQgQWxsIEJveGVzJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VsZW1lbnQnLCBlbGVtZW50W2tleV0pO1xuICAgICAgICAgICAgZWxlbWVudFtrZXldID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChrZXkgPT0gdGhpcy5wYXRjaEtleSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VsZW1lbnQnLCBlbGVtZW50W2tleV0pO1xuICAgICAgICAgICAgZWxlbWVudFtrZXldID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cblxufVxuXG5cblxuIl19