/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
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
        this.tableDisabled = false;
        this.defaultCount = 2;
        this.actionkey = 'actions_TblColHdr';
        this.hiddenKey = [];
        this.enableHighlighter = false;
        this.enableControls = true;
        this.enableSelectAll = false;
        this.keyData = [];
        this.errorMessageOne = 'value should be  greater then 0';
        this.save = new EventEmitter();
        this.remove = new EventEmitter();
        this.submitData = new EventEmitter();
        this.formStatus = new EventEmitter();
        this.sortable = 'false';
        this._null = null;
    }
    Object.defineProperty(SukuFormTableComponent.prototype, "enableEditIndex", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                for (var i = 0; i < +val; i++) {
                    this.editable[i] = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SukuFormTableComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            console.log('items ------------');
            return this._items;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                console.log('_items', val);
                this._items = val;
            }
            if (this._items[0]) {
                this._itemsKey = Object.keys(this._items[0]);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    SukuFormTableComponent.prototype.blockPaste = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        console.log('e', e);
        e.preventDefault();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SukuFormTableComponent.prototype.blockCopy = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SukuFormTableComponent.prototype.blockCut = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
    };
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
                template[this_1.actionkey] = '';
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
     * @param {?} item
     * @return {?}
     */
    SukuFormTableComponent.prototype.edit = /**
     * @param {?} i
     * @param {?} item
     * @return {?}
     */
    function (i, item) {
        console.log(i);
        if (this.editable[i]) {
            this.editable[i] = false;
            this.save.emit(item);
        }
        else {
            this.editable[i] = true;
        }
    };
    /**
     * @param {?} i
     * @param {?} item
     * @return {?}
     */
    SukuFormTableComponent.prototype.removedata = /**
     * @param {?} i
     * @param {?} item
     * @return {?}
     */
    function (i, item) {
        console.log('index', i, this._items.length);
        if (this._items) {
            if (this._items.length != 1) {
                this._items.splice(i, 1);
                /** @type {?} */
                var data = {
                    index: i,
                    data: item
                };
                this.remove.emit(data);
            }
            else {
                /** @type {?} */
                var data = {
                    index: i,
                    data: item
                };
                this.remove.emit(data);
            }
        }
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
        if (this.keyData.length > 0) {
            /** @type {?} */
            var result = this.keyData.some((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                return val.key == list;
            }));
            return result;
        }
        else {
            return false;
        }
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
             * @param {?} mainIndex
             * @return {?}
             */
            function (element, mainIndex) {
                Object.keys(element).forEach((/**
                 * @param {?} key
                 * @param {?} index
                 * @return {?}
                 */
                function (key, index) {
                    if (key == _this.selectionKey) {
                        console.log('element', element[key], index, mainIndex, _this._items);
                        element[key] = true;
                        element[_this.patchKey] = element[_this.highlighterKey];
                        _this._items[mainIndex][_this.patchKey] = _this._items[mainIndex][_this.highlighterKey];
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
                    if (key == _this.selectionKey) {
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
    /**
     * @param {?} key
     * @return {?}
     */
    SukuFormTableComponent.prototype.chkHiddenKey = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (this.hiddenKey.length > 0) {
            /** @type {?} */
            var result = this.hiddenKey.some((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                return val == key;
            }));
            return result;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} selection
     * @param {?} defaultValue
     * @param {?} index
     * @return {?}
     */
    SukuFormTableComponent.prototype.patchValue = /**
     * @param {?} selection
     * @param {?} defaultValue
     * @param {?} index
     * @return {?}
     */
    function (selection, defaultValue, index) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (selection) {
                    this._items[index][this.patchKey] = defaultValue;
                }
                else {
                    this.selectAll = false;
                    this._items[index][this.patchKey] = this._null;
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * @return {?}
     */
    SukuFormTableComponent.prototype.sendData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var data = this._items;
        this.submitData.emit(data);
    };
    /**
     * @param {?} key
     * @param {?} index
     * @return {?}
     */
    SukuFormTableComponent.prototype.validate = /**
     * @param {?} key
     * @param {?} index
     * @return {?}
     */
    function (key, index) {
        console.log('this is key :', key);
        console.log('this is index :', index);
        if (key == 0) {
            this.errorvalidationIndex = index;
            this.errorvalidationKey = key;
        }
        else {
            this.errorvalidationIndex = 'N/A';
            this.errorvalidationKey = 'N/A';
        }
    };
    /**
     * @param {?} event
     * @param {?} type
     * @return {?}
     */
    SukuFormTableComponent.prototype.checkSpcialChar = /**
     * @param {?} event
     * @param {?} type
     * @return {?}
     */
    function (event, type) {
        console.log(event, event.target.value);
        /* disable - e */
        if (type == 'Number') {
            if (event.charCode == 101) {
                event.returnValue = false;
                return false;
            }
            if (event.charCode == 45) {
                event.returnValue = false;
                return false;
            }
        }
        /* validation for string  */
        if (type == 'String') {
            if (event.charCode == 36 ||
                event.charCode == 95 ||
                event.charCode == 42 ||
                event.charCode == 45 ||
                event.charCode == 43 ||
                event.charCode == 46 ||
                event.charCode == 40 ||
                event.charCode == 41 ||
                event.charCode == 39 ||
                event.charCode == 33 ||
                event.charCode == 32) {
                event.returnValue = true;
                return true;
            }
        }
        if (!((event.charCode >= 65) && (event.charCode <= 90) ||
            (event.charCode >= 97) && (event.charCode <= 122) || (event.charCode >= 48) &&
            (event.charCode <= 57))) {
            event.returnValue = false;
            return false;
        }
        event.returnValue = true;
        return true;
    };
    /**
     * @param {?} head
     * @param {?} type
     * @param {?} formate
     * @return {?}
     */
    SukuFormTableComponent.prototype.sort = /**
     * @param {?} head
     * @param {?} type
     * @param {?} formate
     * @return {?}
     */
    function (head, type, formate) {
        if (this._items) {
            if (!(type == 'Checkbox')) {
                this._items.sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                function (a, b) {
                    return +a[head] - +b[head];
                }));
            }
            if (type == 'Number') {
                if (formate == 'asse') {
                    this._items.sort((/**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */
                    function (a, b) {
                        return a[head] - b[head];
                    }));
                }
                if (formate == 'desc') {
                    this._items.sort((/**
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
                this._items.sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                function (a, b) {
                    if (a[head].toLowerCase() < b[head].toLowerCase() && formate == 'asse') {
                        return -1;
                    }
                    if (b[head].toLowerCase() < a[head].toLowerCase() && formate == 'desc') {
                        return -1;
                    }
                    return 0;
                }));
            }
            console.log('sort -', this._items, head, type, formate);
        }
    };
    SukuFormTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-form-table',
                    template: "<div class=\"col p-0\">\n  <table>\n    <tr *ngIf=\"enableSelectAll && _items[0]\">\n      <td *ngFor=\"let list of _items[0] | keys; let i=index\" [ngClass]=\"{'text-center': typeKey[list]=='Checkbox'}\">\n        <!-- checkbox -->\n        <span [ngClass]=\"{'align-checkbox': editable[j] }\" *ngIf=\"(typeKey[list]=='Checkbox')\">\n          <mat-checkbox (change)=\"sendData();\" color=\"primary\"\n            [disabled]=\"!editable[j] && (list != selectionKey) || tableDisabled\" [(ngModel)]=\"selectAll\"\n            (change)=\"selectAllAction()\"> {{'selectAll_ChkBox' | translate}}\n          </mat-checkbox>\n        </span>\n      </td>\n    </tr>\n  </table>\n  <div class=\"header\">\n    <div class=\"col\" [ngClass]=\"{'pt-3 pb-3': (type == 'Processor'), 'pb-4 pt-4': (type != 'Processor') }\">\n      <div class=\"row\">\n        <div class=\"col mt-auto mb-auto\">\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{titleOneCustomClass}}\"\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">\n            {{titleContent}}\n            <span class=\"pl-5\" id=\"processor\">\n              <span [ngClass]=\"{'align-checkbox': editable[j] }\" *ngIf=\"type == 'Processor'\">\n                <mat-checkbox (change)=\"sendData();\" color=\"primary\" [disabled]=\"tableDisabled\" [(ngModel)]=\"selectAll\"\n                  (change)=\"selectAllAction()\">\n                  <span class=\"checkbox\">{{'selectAll_ChkBox' | translate}}</span>\n                </mat-checkbox>\n              </span>\n            </span>\n          </h1>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col p-0\">\n    <table class=\"table bg-white table-responsive-sm\">\n      <thead>\n        <tr>\n          <th *ngFor=\"let head of _items[0] | keys\" [ngClass]=\"{'text-center': typeKey[head]=='Checkbox'}\"\n            data-sortable=\"true\">\n            <span *ngIf=\"!(head === 'Sku')\">{{head  | translate}}</span>\n            <span *ngIf=\"head === 'Sku'\" class=\"Sku\">{{head  | translate}}</span>\n            <span *ngIf=\"!(typeKey[head] =='Checkbox')\" class=\"float-right c-pointer\">\n              <span *ngIf=\"sortable && !(head === 'actions_TblColHdr')\" (click)=\"sort(head,typeKey[head],'asse');\"\n                class='fas fa-caret-up displayBlock'></span>\n              <span *ngIf=\"sortable && !(head === 'actions_TblColHdr')\" (click)=\"sort(head,typeKey[head],'desc');\"\n                class='fas fa-caret-down displayBlock lineH'></span>\n            </span>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of _items;let j=index\">\n          <td [ngClass]=\"{'border-enable': checkValid(list), 'text-center': typeKey[list]=='Checkbox' }\"\n            *ngFor=\"let list of item | keys; let i=index\" [style.background-color]=\"(checkValid(list) ?\n            ((item[selectionKey] && item[highlighterKey] && enableHighlighter) ? '#a3ded8':( !(item[selectionKey] &&\n            enableHighlighter) ?\n            '#d3d9dc' : '#f8dbb4')) : '')\n            ||\n            ((item[selectionKey] && (list == patchKey)) ? '#d3d9dc' : \n            ( ((list == patchKey) &&(item[patchKey])) ? '#a3ded8':\n             ((list == patchKey) ? '#f8dbb4' :'')))\">\n            <span *ngIf=\"!editable[j] && (list != actionkey) && (typeKey[list]!='Checkbox') &&\n               !checkValid(list) && (list != patchKey)\" id=\"{{list | trim}}{{j}}\">\n              {{item[list]}}\n            </span>\n            <!-- input -->\n            <span *ngIf=\"editable[j] && (list != actionkey) && ( typeKey[list]=='String' || typeKey[list]=='Number')\">\n              <input (keyup)=\"sendData()\" (keypress)=\"checkSpcialChar($event,typeKey[list])\" class=\"form-control\"\n                [(ngModel)]=\"item[list]\" [maxLength]=\"25\" type=\"{{(typeKey[list]=='Number')?'number':'text'}}\"\n                (change)=\"validate(item[list],j)\" [disabled]=\"tableDisabled\" id=\"{{list | trim}}{{j}}\"\n                *ngIf=\"editable[j] && (list != actionkey) && ( typeKey[list]=='String' || typeKey[list]=='Number')\"\n                min=\"0\" />\n              <p id=\"{{j}}\" class=\"errorMessage\" *ngIf=\"(item[list]  && item[list] == 0)\">\n                {{errorMessageOne | translate}}\n              </p>\n            </span>\n\n            <input type=\"date\" (keyup)=\"sendData()\" [disabled]=\"tableDisabled\" data-date=\"\"\n              data-date-format=\"mm/dd/yyyy\" class=\"form-control\" id=\"{{list | trim}}{{j}}\"\n              *ngIf=\"editable[j] && (list != actionkey) && typeKey[list]=='Date'\" [(ngModel)]=\"item[list]\" />\n\n            <!-- checkbox -->\n            <span class=\"align-checkbox\" *ngIf=\"(typeKey[list]=='Checkbox')\">\n              <mat-checkbox color=\"primary\" id=\"{{list | trim}}{{j}}\"\n                (change)=\"sendData();patchValue(item[selectionKey], item[highlighterKey], j)\"\n                [disabled]=\"(!editable[j] && (list != selectionKey) ) || tableDisabled\" [(ngModel)]=\"item[list]\">\n              </mat-checkbox>\n            </span>\n\n            <!-- select -->\n            <select class=\"form-control\" (change)=\"sendData()\" [disabled]=\"tableDisabled\" *ngIf=\"editable[j] && (list != actionkey) \n            && ( typeKey[list]!='String' && typeKey[list]!='Number' && typeKey[list]!='Checkbox' &&\n            typeKey[list] !='Date')\" [(ngModel)]=\"item[list]\">\n              <option *ngFor=\"let c of typeKey[list];let k=index\" id=\"asset{{k}}\" [ngValue]=\"c\"> {{c}} </option>\n            </select>\n\n            <!-- input- highlighterKey -->\n            <span *ngIf=\"checkValid(list) && (list != actionkey)\">\n              <span *ngFor=\"let data of keyData;let dataIndex=index\">\n                <span *ngIf=\"(list == data.key)\">\n                  <input type=\"{{(typeKey[list]=='Number')?'number':'text'}}\" id=\"asset{{j}}{{dataIndex}}\"\n                    (keyup)=\"sendData()\" [ngClass]=\"{'disabled': !item[selectionKey]}\"\n                    [disabled]=\"!item[selectionKey] || tableDisabled\" class=\"form-control sample\"\n                    id=\"{{list | trim}}{{j}}\" [(ngModel)]=\"item[data.key]\" (change)=\"validate(item[data.key],dataIndex)\"\n                    *ngIf=\"checkValid(list) && (list != actionkey) && highlighterKey\" min=\"0\"\n                    (keypress)=\"checkSpcialChar($event,typeKey[list])\" />\n                </span>\n                <p id=\"{{dataIndex}}\" class=\"errorMessage\" *ngIf=\"(item[data.key]  && item[data.key] == 0)\">\n                  {{errorMessageOne  | translate}}</p>\n              </span>\n            </span>\n\n            <!-- input -patchKey -->\n            <span *ngIf=\"(list == patchKey) && (list != actionkey)\n            && patchKey\">\n              <input type=\"{{(typeKey[list]=='Number')?'number':'text'}}\" id=\"asset{{j}}{{selectionKey}}\"\n                (keyup)=\"sendData();\" [ngClass]=\"{'disabled':\n              item[selectionKey]}\" [disabled]=\"item[selectionKey] || tableDisabled\" class=\"form-control sample\"\n                [(ngModel)]=\"item[patchKey]\" *ngIf=\"(list == patchKey) && (list != actionkey)\n              && patchKey\" id=\"{{selectionKey | trim}}{{j}}Patch\" (change)=\"validate(item[patchKey],selectionKey)\"\n                min=\"0\" (keypress)=\"checkSpcialChar($event,typeKey[list])\" />\n              <p id=\"asset{{j}}{{selectionKey}}\" class=\"errorMessage\" *ngIf=\"(item[patchKey]  && item[patchKey] == 0)\">\n                {{errorMessageOne  | translate}}\n              </p>\n            </span>\n\n            <span class=\"col p-0 pl-2\" (click)=\"edit(j, item);sendData()\"\n              *ngIf=\"list == actionkey && !editable[j] && !tableDisabled\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\n                [ngClass]=\"{'btn-edit' : editable[j]}\">\n                {{'edit_TblBtn' | translate}}\n              </span>\n            </span>\n            <span class=\"col p-0 pl-2\" *ngIf=\"(list == actionkey) && editable[j]  && !tableDisabled\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\n                (click)=\"edit(j, item);sendData()\" [ngClass]=\"{'btn-edit' : editable[j]}\">\n                {{'save_TblBtn' | translate}}\n              </span>\n            </span>\n            <span class=\"col c-pointer pl-4\" *ngIf=\"(list == actionkey) && !tableDisabled\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\n                (click)=\"removedata(j, item);sendData()\" [ngClass]=\"{'btn-edit' : editable[j]}\">\n                {{'remove_TblBtn' | translate}}\n              </span>\n            </span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col text-right\" *ngIf=\"enableControls && !tableDisabled\">\n    <span class=\"p-2\">\n      <a class=\"secondary-btn\" id=\"addOneRow\" [style.font-size.rem]=\"controlsSize\" (click)=\"addTable(1,_items?.length)\"\n        color=\"primary\">{{'add1Row_TblBtn' | translate}}</a>\n    </span>\n    <span class=\"p-2\">\n      <a class=\"secondary-btn\" id=\"addTenRow\" [style.font-size.rem]=\"controlsSize\"\n        (click)=\"addTable(10, _items?.length)\" color=\"primary\">{{'add10Rows_TblBtn' | translate}}</a>\n    </span>\n  </div>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.header{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.title{font-family:var(--suku-primary-font);font-weight:600;font-size:var(--suku-font-size-5);text-transform:uppercase}.table{font-family:var(--suku-primary-font);box-shadow:0 1px 2px 0 rgba(0,0,0,.1)}table td{padding-left:1%}.btn-edit{line-height:2!important}input,select{width:100%;height:inherit!important}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0}td{width:15%}.form-control:focus{border:1px solid #ced4da;border-color:#ced4da!important;box-shadow:none!important}:host ::ng-deep.mat-checkbox{vertical-align:sub!important}th:last-child{width:12%!important}td:last-child{width:13%!important}button:focus{outline:0!important}.secondary-btn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:var(--suku-text-heading);border-bottom:3.5px solid;border-color:var(--suku-primary-color);word-break:break-word!important;cursor:pointer}.align-checkbox{font-size:18px}.c-pointer{cursor:pointer}table>tbody>tr>td{flex-wrap:wrap!important}.sample{background:inherit!important;border:none!important}.disabled{cursor:not-allowed}select option{border:1px solid #757575}option{border:1px solid #aaa;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,.1);color:#555}.errorMessage{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-1);color:red;padding:0 .75rem;margin-top:-6px!important;margin-bottom:0!important}.table th{padding:.5rem .5rem .5rem 1.25rem;border-bottom:2px solid #dee2e68a;border-left:1px solid #f2f2f2}.table td{padding:.25rem .25rem .25rem 1.25rem;border:1px solid #f2f2f2}.border-enable{border:1px solid #92929240}.hidden{display:none}table{width:100%}.checkbox{font-family:var(--suku-primary-font);color:#fff}:host #processor{font-family:var(--suku-primary-font);font-weight:500!important}:host #processor ::ng-deep.mat-checkbox-frame{border-color:rgba(255,255,255,.54)!important}.Sku{text-transform:uppercase}.float-right{float:right}.displayBlock{display:block}.lineH{line-height:.1}"]
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
        tableDisabled: [{ type: Input, args: ['tableDisabled',] }],
        enableEditIndex: [{ type: Input }],
        typeKey: [{ type: Input }],
        type: [{ type: Input }],
        defaultCount: [{ type: Input }],
        actionkey: [{ type: Input }],
        items: [{ type: Input }],
        selectionKey: [{ type: Input }],
        highlighterKey: [{ type: Input }],
        patchKey: [{ type: Input }],
        hiddenKey: [{ type: Input }],
        enableHighlighter: [{ type: Input }],
        enableControls: [{ type: Input }],
        enableSelectAll: [{ type: Input }],
        selectAll: [{ type: Input }],
        keyData: [{ type: Input }],
        controlsSize: [{ type: Input }],
        controlCustomClass: [{ type: Input }],
        errorMessageOne: [{ type: Input, args: ['error-message-one',] }],
        save: [{ type: Output }],
        remove: [{ type: Output }],
        submitData: [{ type: Output }],
        formStatus: [{ type: Output }],
        sortable: [{ type: Input, args: ['table-sortable',] }],
        blockPaste: [{ type: HostListener, args: ['paste', ['$event'],] }],
        blockCopy: [{ type: HostListener, args: ['copy', ['$event'],] }],
        blockCut: [{ type: HostListener, args: ['cut', ['$event'],] }]
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
    SukuFormTableComponent.prototype._itemsKey;
    /** @type {?} */
    SukuFormTableComponent.prototype.editable;
    /** @type {?} */
    SukuFormTableComponent.prototype.errorvalidationIndex;
    /** @type {?} */
    SukuFormTableComponent.prototype.errorvalidationKey;
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
    SukuFormTableComponent.prototype.tableDisabled;
    /** @type {?} */
    SukuFormTableComponent.prototype.typeKey;
    /** @type {?} */
    SukuFormTableComponent.prototype.type;
    /** @type {?} */
    SukuFormTableComponent.prototype.defaultCount;
    /** @type {?} */
    SukuFormTableComponent.prototype.actionkey;
    /** @type {?} */
    SukuFormTableComponent.prototype.selectionKey;
    /** @type {?} */
    SukuFormTableComponent.prototype.highlighterKey;
    /** @type {?} */
    SukuFormTableComponent.prototype.patchKey;
    /** @type {?} */
    SukuFormTableComponent.prototype.hiddenKey;
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
    /** @type {?} */
    SukuFormTableComponent.prototype.errorMessageOne;
    /** @type {?} */
    SukuFormTableComponent.prototype.save;
    /** @type {?} */
    SukuFormTableComponent.prototype.remove;
    /** @type {?} */
    SukuFormTableComponent.prototype.submitData;
    /** @type {?} */
    SukuFormTableComponent.prototype.formStatus;
    /** @type {?} */
    SukuFormTableComponent.prototype.sortable;
    /** @type {?} */
    SukuFormTableComponent.prototype._null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWZvcm0tdGFibGUvc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGO0lBZ0ZFO1FBekVBLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFFWixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBS1ksa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFFakIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLGlCQUFZLEdBQUcsMkJBQTJCLENBQUM7UUFDN0MsZUFBVSxHQUFHLE1BQU0sQ0FBQztRQUdoQixpQkFBWSxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEUsV0FBTSxHQUFHLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFXckMsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsY0FBUyxHQUFHLG1CQUFtQixDQUFDO1FBa0JoQyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2Ysc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXhCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHTSxvQkFBZSxHQUFHLGlDQUFpQyxDQUFDO1FBQ3RFLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLGVBQVUsR0FBRyxJ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Qzs7SUFDbkMsZ0RBQStCOztJQUMvQixpREFBaUM7O0lBQ2pDLDJDQUFtQjs7SUFDbkIseUNBQXNCOztJQUN0Qiw4Q0FBc0I7O0lBQ3RCLG9EQUE0Qjs7SUFDNUIsaURBQWdGOztJQUNoRixzQ0FBb0M7O0lBQ3BDLHdDQUFzQzs7SUFDdEMsNENBQTBDOztJQUMxQyw0Q0FBMEM7O0lBQzFDLDBDQUE0Qzs7SUFDNUMsdUNBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWZvcm0tdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUZvcm1UYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGo7XG4gIF9pdGVtcyA9IFtdO1xuICBfaXRlbXNLZXk7XG4gIGVkaXRhYmxlID0gW107XG4gIGVycm9ydmFsaWRhdGlvbkluZGV4O1xuICBlcnJvcnZhbGlkYXRpb25LZXk7XG4gIEBJbnB1dCgndGl0bGUtb25lLWlkJykgdGl0bGVPbmVJZDtcbiAgQElucHV0KCd0aXRsZS1vbmUtc2l6ZScpIHRpdGxlT25lU2l6ZTtcbiAgQElucHV0KCd0aXRsZS1vbmUtY29sb3InKSB0aXRsZU9uZUNvbG9yID0gJ3doaXRlJztcbiAgQElucHV0KCd0aXRsZS1vbmUtd2VpZ2h0JykgdGl0bGVPbmVXZWlnaHQ7XG4gIEBJbnB1dCgndGl0bGUtb25lLWN1c3RvbS1jbGFzcycpIHRpdGxlT25lQ3VzdG9tQ2xhc3MgPSAnJztcbiAgQElucHV0KCd0aXRsZS1jb250ZW50JykgdGl0bGVDb250ZW50ID0gJ0VudGVyIGFuaW1hbCBpbmZvcm1hdGlvbjonO1xuICBASW5wdXQoJ2hlYWRlci1zaXplJykgaGVhZGVyU2l6ZSA9ICcxNHB4JztcbiAgQElucHV0KCdoZWFkZXItY29sb3InKSBoZWFkZXJDb2xvcjtcbiAgQElucHV0KCdoZWFkZXItd2VpZ2h0JykgaGVhZGVyV2VpZ2h0O1xuICBASW5wdXQoJ3N0YXR1cy1iZy1zdHlsZScpIGNvbG9yUGFsbGV0ZSA9IFsnI2EzZGVkOCcsICcjZjhkYmI0JywgJyNjN2MzZmEnLCAnZ3JheSddO1xuICBASW5wdXQoJ3N0YXR1cycpIHN0YXR1cyA9IFsnY29tcGxldGVkJywgJ25vdC1jb21wbGV0ZWQnLCAncGVuZGluZycsICdvdGhlcnMnXTtcbiAgQElucHV0KCd0YWJsZURpc2FibGVkJykgdGFibGVEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzZXQgZW5hYmxlRWRpdEluZGV4KHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgK3ZhbDsgaSsrKSB7XG4gICAgICAgIHRoaXMuZWRpdGFibGVbaV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBASW5wdXQoKSB0eXBlS2V5O1xuICBASW5wdXQoKSB0eXBlO1xuICBASW5wdXQoKSBkZWZhdWx0Q291bnQgPSAyO1xuICBASW5wdXQoKSBhY3Rpb25rZXkgPSAnYWN0aW9uc19UYmxDb2xIZHInO1xuICBASW5wdXQoKVxuICBnZXQgaXRlbXMoKSB7XG4gICAgY29uc29sZS5sb2coJ2l0ZW1zIC0tLS0tLS0tLS0tLScpO1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuICBzZXQgaXRlbXModmFsKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgY29uc29sZS5sb2coJ19pdGVtcycsIHZhbCk7XG4gICAgICB0aGlzLl9pdGVtcyA9IHZhbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2l0ZW1zWzBdKSB7XG4gICAgICB0aGlzLl9pdGVtc0tleSA9IE9iamVjdC5rZXlzKHRoaXMuX2l0ZW1zWzBdKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgc2VsZWN0aW9uS2V5O1xuICBASW5wdXQoKSBoaWdobGlnaHRlcktleTtcbiAgQElucHV0KCkgcGF0Y2hLZXk7XG4gIEBJbnB1dCgpIGhpZGRlbktleSA9IFtdO1xuICBASW5wdXQoKSBlbmFibGVIaWdobGlnaHRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBlbmFibGVDb250cm9scyA9IHRydWU7XG4gIEBJbnB1dCgpIGVuYWJsZVNlbGVjdEFsbCA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWxlY3RBbGw7XG4gIEBJbnB1dCgpIGtleURhdGEgPSBbXTtcbiAgQElucHV0KCkgY29udHJvbHNTaXplO1xuICBASW5wdXQoKSBjb250cm9sQ3VzdG9tQ2xhc3M7XG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS1vbmUnKSBlcnJvck1lc3NhZ2VPbmUgPSAndmFsdWUgc2hvdWxkIGJlICBncmVhdGVyIHRoZW4gMCc7XG4gIEBPdXRwdXQoKSBzYXZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc3VibWl0RGF0YSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZvcm1TdGF0dXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgndGFibGUtc29ydGFibGUnKSBzb3J0YWJsZSA9ICdmYWxzZSc7XG4gIF9udWxsID0gbnVsbDtcbiAgQEhvc3RMaXN0ZW5lcigncGFzdGUnLCBbJyRldmVudCddKSBibG9ja1Bhc3RlKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnZScsIGUpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NvcHknLCBbJyRldmVudCddKSBibG9ja0NvcHkoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2N1dCcsIFsnJGV2ZW50J10pIGJsb2NrQ3V0KGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGFkZFRhYmxlKHZhbCwgZWRpdEluZGV4KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWw7IGkrKykge1xuICAgICAgdGhpcy5lZGl0YWJsZVtlZGl0SW5kZXggKyBpXSA9IHRydWU7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IHt9O1xuICAgICAgY29uc3QgdHlwZUtleSA9IHRoaXMudHlwZUtleTtcbiAgICAgIE9iamVjdC5rZXlzKHR5cGVLZXkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodHlwZUtleVtrZXldID09ICdDaGVja2JveCcpIHtcbiAgICAgICAgICB0ZW1wbGF0ZVtrZXldID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZUtleVtrZXldID09ICdTdHJpbmcnIHx8IHR5cGVLZXlba2V5XSA9PSAnTnVtYmVyJykge1xuICAgICAgICAgIHRlbXBsYXRlW2tleV0gPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wbGF0ZVtrZXldID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZW5hYmxlQ29udHJvbHMpIHtcbiAgICAgICAgdGVtcGxhdGVbdGhpcy5hY3Rpb25rZXldID0gJyc7XG4gICAgICB9XG4gICAgICB0aGlzLl9pdGVtcy5wdXNoKHRlbXBsYXRlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ19pdGVtcycsIHRoaXMuX2l0ZW1zKTtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnX2l0ZW1zJywgdGhpcy5faXRlbXMpO1xuICB9XG5cbiAgZWRpdChpLCBpdGVtKSB7XG4gICAgY29uc29sZS5sb2coaSk7XG4gICAgaWYgKHRoaXMuZWRpdGFibGVbaV0pIHtcbiAgICAgIHRoaXMuZWRpdGFibGVbaV0gPSBmYWxzZTtcbiAgICAgIHRoaXMuc2F2ZS5lbWl0KGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVkaXRhYmxlW2ldID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVkYXRhKGksIGl0ZW0pIHtcbiAgICBjb25zb2xlLmxvZygnaW5kZXgnLCBpLCB0aGlzLl9pdGVtcy5sZW5ndGgpO1xuICAgIGlmICh0aGlzLl9pdGVtcykge1xuICAgICAgaWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCAhPSAxKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICBkYXRhOiBpdGVtXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVtb3ZlLmVtaXQoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgIGRhdGE6IGl0ZW1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZW1vdmUuZW1pdChkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja1ZhbGlkKGxpc3QpIHtcbiAgICBpZiAodGhpcy5rZXlEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMua2V5RGF0YS5zb21lKHZhbCA9PiB7XG4gICAgICAgIHJldHVybiB2YWwua2V5ID09IGxpc3Q7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RBbGxBY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VsZWN0QWxsID0gdGhpcy5zZWxlY3RBbGw7XG4gICAgaWYgKHNlbGVjdEFsbCkge1xuICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoZWxlbWVudCwgbWFpbkluZGV4KSA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKGVsZW1lbnQpLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoa2V5ID09IHRoaXMuc2VsZWN0aW9uS2V5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWxlbWVudCcsIGVsZW1lbnRba2V5XSwgaW5kZXgsIG1haW5JbmRleCwgdGhpcy5faXRlbXMpO1xuICAgICAgICAgICAgZWxlbWVudFtrZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsZW1lbnRbdGhpcy5wYXRjaEtleV0gPSBlbGVtZW50W3RoaXMuaGlnaGxpZ2h0ZXJLZXldO1xuICAgICAgICAgICAgdGhpcy5faXRlbXNbbWFpbkluZGV4XVt0aGlzLnBhdGNoS2V5XSA9IHRoaXMuX2l0ZW1zW21haW5JbmRleF1bdGhpcy5oaWdobGlnaHRlcktleV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyhlbGVtZW50KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBpZiAoa2V5ID09IHRoaXMuc2VsZWN0aW9uS2V5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWxlbWVudCcsIGVsZW1lbnRba2V5XSk7XG4gICAgICAgICAgICBlbGVtZW50W2tleV0gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGtleSA9PSB0aGlzLnBhdGNoS2V5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWxlbWVudCcsIGVsZW1lbnRba2V5XSk7XG4gICAgICAgICAgICBlbGVtZW50W2tleV0gPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygnZGF0YScsIGVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2hrSGlkZGVuS2V5KGtleSkge1xuICAgIGlmICh0aGlzLmhpZGRlbktleS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmhpZGRlbktleS5zb21lKHZhbCA9PiB7XG4gICAgICAgIHJldHVybiB2YWwgPT0ga2V5O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcGF0Y2hWYWx1ZShzZWxlY3Rpb24sIGRlZmF1bHRWYWx1ZSwgaW5kZXgpIHtcbiAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLl9pdGVtc1tpbmRleF1bdGhpcy5wYXRjaEtleV0gPSBkZWZhdWx0VmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsID0gZmFsc2U7XG4gICAgICB0aGlzLl9pdGVtc1tpbmRleF1bdGhpcy5wYXRjaEtleV0gPSB0aGlzLl9udWxsO1xuICAgIH1cbiAgfVxuXG4gIHNlbmREYXRhKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9pdGVtcztcbiAgICB0aGlzLnN1Ym1pdERhdGEuZW1pdChkYXRhKTtcbiAgfVxuXG4gIHZhbGlkYXRlKGtleSwgaW5kZXgpIHtcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyBrZXkgOicsIGtleSk7XG4gICAgY29uc29sZS5sb2coJ3RoaXMgaXMgaW5kZXggOicsIGluZGV4KTtcbiAgICBpZiAoa2V5ID09IDApIHtcbiAgICAgIHRoaXMuZXJyb3J2YWxpZGF0aW9uSW5kZXggPSBpbmRleDtcbiAgICAgIHRoaXMuZXJyb3J2YWxpZGF0aW9uS2V5ID0ga2V5O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9ydmFsaWRhdGlvbkluZGV4ID0gJ04vQSc7XG4gICAgICB0aGlzLmVycm9ydmFsaWRhdGlvbktleSA9ICdOL0EnO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrU3BjaWFsQ2hhcihldmVudCwgdHlwZSkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LCBldmVudC50YXJnZXQudmFsdWUpO1xuXG4gICAgLyogZGlzYWJsZSAtIGUgKi9cbiAgICBpZiAodHlwZSA9PSAnTnVtYmVyJykge1xuICAgICAgaWYgKGV2ZW50LmNoYXJDb2RlID09IDEwMSkge1xuICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuY2hhckNvZGUgPT0gNDUpIHtcbiAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIHZhbGlkYXRpb24gZm9yIHN0cmluZyAgKi9cbiAgICBpZiAodHlwZSA9PSAnU3RyaW5nJykge1xuICAgICAgaWYgKGV2ZW50LmNoYXJDb2RlID09IDM2IHx8XG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDk1IHx8XG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQyIHx8XG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQ1IHx8XG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQzIHx8XG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQ2IHx8XG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQwIHx8XG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQxIHx8XG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDM5IHx8XG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDMzIHx8XG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDMyXG4gICAgICApIHtcbiAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoISgoZXZlbnQuY2hhckNvZGUgPj0gNjUpICYmIChldmVudC5jaGFyQ29kZSA8PSA5MCkgfHxcbiAgICAgIChldmVudC5jaGFyQ29kZSA+PSA5NykgJiYgKGV2ZW50LmNoYXJDb2RlIDw9IDEyMikgfHwgKGV2ZW50LmNoYXJDb2RlID49IDQ4KSAmJlxuICAgICAgKGV2ZW50LmNoYXJDb2RlIDw9IDU3KSkpIHtcbiAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGV2ZW50LnJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNvcnQoaGVhZCwgdHlwZSwgZm9ybWF0ZSkge1xuICAgIGlmICh0aGlzLl9pdGVtcykge1xuICAgICAgaWYgKCEodHlwZSA9PSAnQ2hlY2tib3gnKSkge1xuICAgICAgICB0aGlzLl9pdGVtcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgcmV0dXJuICthW2hlYWRdIC0gK2JbaGVhZF07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT0gJ051bWJlcicpIHtcbiAgICAgICAgaWYgKGZvcm1hdGUgPT0gJ2Fzc2UnKSB7XG4gICAgICAgICAgdGhpcy5faXRlbXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGFbaGVhZF0gLSBiW2hlYWRdXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdGUgPT0gJ2Rlc2MnKSB7XG4gICAgICAgICAgdGhpcy5faXRlbXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGJbaGVhZF0gLSBhW2hlYWRdXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09ICdTdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICBpZiAoYVtoZWFkXS50b0xvd2VyQ2FzZSgpIDwgYltoZWFkXS50b0xvd2VyQ2FzZSgpICYmIGZvcm1hdGUgPT0gJ2Fzc2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChiW2hlYWRdLnRvTG93ZXJDYXNlKCkgPCBhW2hlYWRdLnRvTG93ZXJDYXNlKCkgJiYgZm9ybWF0ZSA9PSAnZGVzYycpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ3NvcnQgLScsIHRoaXMuX2l0ZW1zLCBoZWFkLCB0eXBlLCBmb3JtYXRlKTtcbiAgICB9XG4gIH1cblxufVxuIl19