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
        this.tableDisabled = [];
        this.defaultCount = 2;
        this.actionkey = 'actions_TblColHdr';
        this.hiddenKey = [];
        this.enableHighlighter = false;
        this.enableControls = true;
        this.enableSelectAll = false;
        this.keyData = [];
        this.disableSelectAll = false;
        this.patchEmpty = 'Processor';
        this.hideErrorMsg = false;
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
            console.log('items ------------', this.items);
            /** @type {?} */
            var data = this.items;
            if (data) {
                data.filter((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    console.log('val', val);
                    delete val['undefined'];
                    return val;
                }));
            }
            return data;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                console.log('_items', val);
                if (val) {
                    val.filter((/**
                     * @param {?} el
                     * @return {?}
                     */
                    function (el) {
                        console.log('val', el);
                        delete el['undefined'];
                        return el;
                    }));
                }
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
                        console.log('element', element[key], index, mainIndex, _this._items[mainIndex][_this.patchKey]);
                        if (!_this.tableDisabled[mainIndex]) {
                            element[key] = true;
                            if (!element[_this.patchKey]) {
                                element[_this.patchKey] = element[_this.highlighterKey];
                            }
                            if (!_this._items[mainIndex][_this.patchKey]) {
                                _this._items[mainIndex][_this.patchKey] = _this._items[mainIndex][_this.highlighterKey];
                            }
                        }
                    }
                }));
                console.log('data', element);
            }));
        }
        else {
            this._items.forEach((/**
             * @param {?} element
             * @param {?} index
             * @return {?}
             */
            function (element, index) {
                Object.keys(element).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    if (key == _this.selectionKey) {
                        console.log('element', element[key]);
                        if (!_this.tableDisabled[index]) {
                            element[key] = false;
                        }
                    }
                    if (key == _this.patchKey) {
                        console.log('element', element[key]);
                        if (!_this.tableDisabled[index]) {
                            element[key] = '';
                        }
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
     * @param {?=} key
     * @return {?}
     */
    SukuFormTableComponent.prototype.patchValue = /**
     * @param {?} selection
     * @param {?} defaultValue
     * @param {?} index
     * @param {?=} key
     * @return {?}
     */
    function (selection, defaultValue, index, key) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                console.log('patchValue', selection, defaultValue, index, key);
                if (selection) {
                    this._items[index][this.patchKey] = defaultValue;
                }
                else {
                    if (!this.tableDisabled[index] && !this._items[index][this.patchKey]) {
                        this.selectAll = false;
                    }
                    this._items[index][this.patchKey] = this._null;
                    if (this.type == this.patchEmpty) {
                        this._items[index][key] = this._null;
                    }
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
            if (event.charCode == 69) {
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
            this._items.forEach((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                delete val['undefined'];
            }));
            console.log('sort -', this._items, head, type, formate);
        }
    };
    SukuFormTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-form-table',
                    template: "<div class=\"col p-0\">\r\n  <table>\r\n    <tr *ngIf=\"enableSelectAll && _items[0]\">\r\n      <td *ngFor=\"let list of _items[0] | keys; let i=index\" [ngClass]=\"{'text-center': typeKey[list]=='Checkbox'}\">\r\n        <!-- checkbox -->\r\n        <span [ngClass]=\"{'align-checkbox': editable[j] }\" *ngIf=\"(typeKey[list]=='Checkbox')\">\r\n          {{!editable[j] && (list != selectionKey) || tableDisabled[j] && disableSelectAll}}\r\n          <mat-checkbox (change)=\"sendData();\" color=\"primary\" [disabled]=\"disableSelectAll\" [(ngModel)]=\"selectAll\"\r\n            (change)=\"selectAllAction()\"> {{'selectAll_ChkBox' | translate}}\r\n          </mat-checkbox>\r\n        </span>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n  <div class=\"header\">\r\n    <div class=\"col\" [ngClass]=\"{'pt-3 pb-3': (type == 'Processor'), 'pb-4 pt-4': (type != 'Processor') }\">\r\n      <div class=\"row\">\r\n        <div class=\"col mt-auto mb-auto\">\r\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{titleOneCustomClass}}\"\r\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">\r\n            {{titleContent}}\r\n            <span class=\"pl-5\" id=\"processor\">\r\n              <span [ngClass]=\"{'align-checkbox': editable[j] }\" *ngIf=\"type == 'Processor'\">\r\n                <mat-checkbox (change)=\"sendData();\" color=\"primary\" [disabled]=\"disableSelectAll\"\r\n                  [(ngModel)]=\"selectAll\" (change)=\"selectAllAction()\">\r\n                  <span class=\"checkbox\">{{'selectAll_ChkBox' | translate}}</span>\r\n                </mat-checkbox>\r\n              </span>\r\n            </span>\r\n          </h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col p-0\">\r\n    <table class=\"table bg-white table-responsive-sm\">\r\n      <thead>\r\n        <tr>\r\n          <th *ngFor=\"let head of _items[0] | keys\" [ngClass]=\"{'text-center': typeKey[head]=='Checkbox'}\"\r\n            data-sortable=\"true\">\r\n            <span *ngIf=\"!(head === 'Sku')\">{{head  | translate}}</span>\r\n            <span *ngIf=\"head === 'Sku'\" class=\"Sku\">{{head  | translate}}</span>\r\n            <span *ngIf=\"!(typeKey[head] =='Checkbox')\" class=\"float-right c-pointer\">\r\n              <span *ngIf=\"sortable && !(head === 'actions_TblColHdr')\" (click)=\"sort(head,typeKey[head],'asse');\"\r\n                class='fas fa-caret-up displayBlock'></span>\r\n              <span *ngIf=\"sortable && !(head === 'actions_TblColHdr')\" (click)=\"sort(head,typeKey[head],'desc');\"\r\n                class='fas fa-caret-down displayBlock lineH'></span>\r\n            </span>\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of _items;let j=index\">\r\n          <td\r\n            [style.width.%]=\"((type == 'Producer') ? '' : ((typeKey[list] == 'Checkbox') ? list?.length * 0.45 : list?.length * 1 ))\"\r\n            [ngClass]=\"{'border-enable': checkValid(list), 'text-center': typeKey[list]=='Checkbox' }\"\r\n            *ngFor=\"let list of item | keys; let i=index\" [style.background-color]=\"(checkValid(list) ?\r\n            ((item[selectionKey] && item[highlighterKey] && enableHighlighter) ? '#a3ded8':( !(item[selectionKey] &&\r\n            enableHighlighter) ?\r\n            '#d3d9dc' : '#f8dbb4')) : '')\r\n            ||\r\n            ((item[selectionKey] && (list == patchKey)) ? '#d3d9dc' : \r\n            ( ((list == patchKey) &&(item[patchKey])) ? '#a3ded8':\r\n             ((list == patchKey) ? '#f8dbb4' :'')))\">\r\n            <span *ngIf=\"!editable[j] && (list != actionkey) && (typeKey[list]!='Checkbox') &&\r\n               !checkValid(list) && (list != patchKey)\" id=\"{{list | trim}}{{j}}\">\r\n              {{item[list]}}\r\n            </span>\r\n            <!-- input -->\r\n            <span *ngIf=\"editable[j] && (list != actionkey) && ( typeKey[list]=='String' || typeKey[list]=='Number')\">\r\n              <input (keyup)=\"sendData()\" (keypress)=\"checkSpcialChar($event,typeKey[list])\" class=\"form-control\"\r\n                [(ngModel)]=\"item[list]\" min=\"0\" [maxLength]=\"25\" type=\"{{(typeKey[list]=='Number')?'number':'text'}}\"\r\n                (change)=\"validate(item[list],j)\" [disabled]=\"tableDisabled[j]\" id=\"{{list | trim}}{{j}}\"\r\n                *ngIf=\"editable[j] && (list != actionkey) && ( typeKey[list]=='String' || typeKey[list]=='Number')\" />\r\n              <p id=\"{{j}}\" class=\"errorMessage\" *ngIf=\"(item[list]  && item[list] == 0) && !hideErrorMsg\">\r\n                {{errorMessageOne | translate}}\r\n              </p>\r\n            </span>\r\n\r\n            <input type=\"date\" (keyup)=\"sendData()\" [disabled]=\"tableDisabled[j]\" data-date=\"\"\r\n              data-date-format=\"mm/dd/yyyy\" class=\"form-control\" id=\"{{list | trim}}{{j}}\"\r\n              *ngIf=\"editable[j] && (list != actionkey) && typeKey[list]=='Date'\" [(ngModel)]=\"item[list]\" />\r\n\r\n            <!-- checkbox -->\r\n            <span class=\"align-checkbox\" *ngIf=\"(typeKey[list]=='Checkbox')\">\r\n              <mat-checkbox color=\"primary\" id=\"{{list | trim}}{{j}}\"\r\n                (change)=\"sendData();patchValue(item[selectionKey], item[highlighterKey], j, highlighterKey)\"\r\n                [disabled]=\"(!editable[j] && (list != selectionKey) ) || tableDisabled[j]\" [(ngModel)]=\"item[list]\">\r\n              </mat-checkbox>\r\n            </span>\r\n\r\n            <!-- select -->\r\n            <select class=\"form-control\" (change)=\"sendData()\" [disabled]=\"tableDisabled[j]\" *ngIf=\"editable[j] && (list != actionkey) \r\n            && ( typeKey[list]!='String' && typeKey[list]!='Number' && typeKey[list]!='Checkbox' &&\r\n            typeKey[list] !='Date')\" [(ngModel)]=\"item[list]\">\r\n              <option *ngFor=\"let c of typeKey[list];let k=index\" id=\"asset{{k}}\" [ngValue]=\"c\"> {{c}} </option>\r\n            </select>\r\n\r\n            <!-- input- highlighterKey -->\r\n            <span *ngIf=\"checkValid(list) && (list != actionkey)\">\r\n              <span *ngFor=\"let data of keyData;let dataIndex=index\">\r\n                <span *ngIf=\"(list == data.key)\">\r\n                  <input type=\"{{(typeKey[list]=='Number')?'number':'text'}}\" id=\"asset{{j}}{{dataIndex}}\"\r\n                    (keyup)=\"sendData()\" [ngClass]=\"{'disabled': !item[selectionKey]}\"\r\n                    [disabled]=\"!item[selectionKey] || tableDisabled[j]\" class=\"form-control sample\"\r\n                    id=\"{{list | trim}}{{j}}\" [(ngModel)]=\"item[data.key]\" (change)=\"validate(item[data.key],dataIndex)\"\r\n                    *ngIf=\"checkValid(list) && (list != actionkey) && highlighterKey\"\r\n                    (keypress)=\"checkSpcialChar($event,typeKey[list])\" min=\"0\" />\r\n                </span>\r\n                <p id=\"{{dataIndex}}\" class=\"errorMessage\"\r\n                  *ngIf=\"(item[data.key]  && item[data.key] == 0) && !hideErrorMsg\">\r\n                  {{errorMessageOne  | translate}}</p>\r\n              </span>\r\n            </span>\r\n\r\n            <!-- input -patchKey -->\r\n            <span *ngIf=\"(list == patchKey) && (list != actionkey)\r\n            && patchKey\">\r\n              <input type=\"{{(typeKey[list]=='Number')?'number':'text'}}\" id=\"asset{{j}}{{selectionKey}}\"\r\n                (keyup)=\"sendData();\" [ngClass]=\"{'disabled':\r\n              item[selectionKey]}\" [disabled]=\"item[selectionKey] || tableDisabled[j]\" class=\"form-control sample\"\r\n                [(ngModel)]=\"item[patchKey]\" *ngIf=\"(list == patchKey) && (list != actionkey)\r\n              && patchKey\" id=\"{{selectionKey | trim}}{{j}}Patch\" (change)=\"validate(item[patchKey],selectionKey)\"\r\n                min=\"0\" [maxLength]=\"10\" (keypress)=\"checkSpcialChar($event,typeKey[list]);\" />\r\n              <p id=\"asset{{j}}{{selectionKey}}\" class=\"errorMessage\"\r\n                *ngIf=\"(item[patchKey]  && item[patchKey] == 0) && !hideErrorMsg\">\r\n                {{errorMessageOne  | translate}}\r\n              </p>\r\n            </span>\r\n\r\n            <span class=\"col p-0 pl-2\" (click)=\"edit(j, item);sendData()\"\r\n              *ngIf=\"list == actionkey && !editable[j] && !tableDisabled[j]\">\r\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\r\n                [ngClass]=\"{'btn-edit' : editable[j]}\">\r\n                {{'edit_TblBtn' | translate}}\r\n              </span>\r\n            </span>\r\n            <span class=\"col p-0 pl-2\" *ngIf=\"(list == actionkey) && editable[j]  && !tableDisabled[j]\">\r\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\r\n                (click)=\"edit(j, item);sendData()\" [ngClass]=\"{'btn-edit' : editable[j]}\">\r\n                {{'save_TblBtn' | translate}}\r\n              </span>\r\n            </span>\r\n            <span class=\"col c-pointer pl-4\" *ngIf=\"(list == actionkey) && !tableDisabled[j]\">\r\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\r\n                (click)=\"removedata(j, item);sendData()\" [ngClass]=\"{'btn-edit' : editable[j]}\">\r\n                {{'remove_TblBtn' | translate}}\r\n              </span>\r\n            </span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"col text-right\" *ngIf=\"enableControls\">\r\n    <span class=\"p-2\">\r\n      <a class=\"secondary-btn\" id=\"addOneRow\" [style.font-size.rem]=\"controlsSize\" (click)=\"addTable(1,_items?.length)\"\r\n        color=\"primary\">{{'add1Row_TblBtn' | translate}}</a>\r\n    </span>\r\n    <span class=\"p-2\">\r\n      <a class=\"secondary-btn\" id=\"addTenRow\" [style.font-size.rem]=\"controlsSize\"\r\n        (click)=\"addTable(10, _items?.length)\" color=\"primary\">{{'add10Rows_TblBtn' | translate}}</a>\r\n    </span>\r\n  </div>\r\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.header{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.title{font-family:var(--suku-primary-font);font-weight:600;font-size:var(--suku-font-size-5);text-transform:uppercase}.table{font-family:var(--suku-primary-font);box-shadow:0 1px 2px 0 rgba(0,0,0,.1)}table td{padding-left:1%}.btn-edit{line-height:2!important}input,select{width:100%;height:inherit!important}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0}td{width:15%}.form-control:focus{border:1px solid #ced4da;border-color:#ced4da!important;box-shadow:none!important}:host ::ng-deep.mat-checkbox{vertical-align:sub!important}th:last-child{width:12%!important}td:last-child{width:13%!important}button:focus{outline:0!important}.secondary-btn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:var(--suku-text-heading);border-bottom:3.5px solid;border-color:var(--suku-primary-color);word-break:break-word!important;cursor:pointer}.align-checkbox{font-size:18px}.c-pointer{cursor:pointer}table>tbody>tr>td{flex-wrap:wrap!important}.sample{background:inherit!important;border:none!important}.disabled{cursor:not-allowed}select option{border:1px solid #757575}option{border:1px solid #aaa;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,.1);color:#555}.errorMessage{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-1);color:red;padding:0 .75rem;margin-top:-2px!important;margin-bottom:0!important}.table th{padding:.5rem .5rem .5rem 1.25rem;border-bottom:2px solid #dee2e68a;border-left:1px solid #f2f2f2}.table td{padding:.5rem 1rem;border:1px solid #f2f2f2}.border-enable{border:1px solid #92929240}.hidden{display:none}table{width:100%}.checkbox{font-family:var(--suku-primary-font);color:#fff}:host #processor{font-family:var(--suku-primary-font);font-weight:500!important}:host #processor ::ng-deep.mat-checkbox-frame{border-color:rgba(255,255,255,.54)!important}.Sku{text-transform:uppercase}.float-right{float:right}.displayBlock{display:block}.lineH{line-height:.1}:host ::ng-deep .table td{border-top:1px solid #bbbbbbcc;border:1px solid #f2f2f2!important}:host ::ng-deep .table thead th{border-bottom:2px solid #dee2e68a;border-left:1px solid #f2f2f2}"]
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
        disableSelectAll: [{ type: Input }],
        patchEmpty: [{ type: Input }],
        hideErrorMsg: [{ type: Input }],
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
    SukuFormTableComponent.prototype.disableSelectAll;
    /** @type {?} */
    SukuFormTableComponent.prototype.patchEmpty;
    /** @type {?} */
    SukuFormTableComponent.prototype.hideErrorMsg;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWZvcm0tdGFibGUvc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGO0lBa0dFO1FBM0ZBLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFFWixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBS1ksa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFFakIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLGlCQUFZLEdBQUcsMkJBQTJCLENBQUM7UUFDN0MsZUFBVSxHQUFHLE1BQU0sQ0FBQztRQUdoQixpQkFBWSxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEUsV0FBTSxHQUFHLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEQsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFXbEMsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsY0FBUyxHQUFHLG1CQUFtQixDQUFDO1FBaUNoQyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2Ysc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXhCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHYixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsZUFBVSxHQUFHLFdBQVcsQ0FBQztRQUN6QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNGLG9CQUFlLEdBQUcsaUNBQWlDLENBQUM7UUFDdEUsU0FB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Q04sTUFBTTs2QkFDTixNQUFNOzJCQUNOLEtBQUssU0FBQyxnQkFBZ0I7NkJBRXRCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBS2hDLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7MkJBSS9CLFlBQVksU0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBc1BqQyw2QkFBQztDQUFBLEFBclZELElBcVZDO1NBaFZZLHNCQUFzQjs7O0lBQ2pDLG1DQUFFOztJQUNGLHdDQUFZOztJQUNaLDJDQUFVOztJQUNWLDBDQUFjOztJQUNkLHNEQUFxQjs7SUFDckIsb0RBQW1COztJQUNuQiw0Q0FBa0M7O0lBQ2xDLDhDQUFzQzs7SUFDdEMsK0NBQWtEOztJQUNsRCxnREFBMEM7O0lBQzFDLHFEQUEwRDs7SUFDMUQsOENBQW1FOztJQUNuRSw0Q0FBMEM7O0lBQzFDLDZDQUFtQzs7SUFDbkMsOENBQXFDOztJQUNyQyw4Q0FBbUY7O0lBQ25GLHdDQUE4RTs7SUFDOUUsK0NBQTJDOztJQVMzQyx5Q0FBaUI7O0lBQ2pCLHNDQUFjOztJQUNkLDhDQUEwQjs7SUFDMUIsMkNBQXlDOztJQThCekMsOENBQXNCOztJQUN0QixnREFBd0I7O0lBQ3hCLDBDQUFrQjs7SUFDbEIsMkNBQXdCOztJQUN4QixtREFBbUM7O0lBQ25DLGdEQUErQjs7SUFDL0IsaURBQWlDOztJQUNqQywyQ0FBbUI7O0lBQ25CLHlDQUFzQjs7SUFDdEIsOENBQXNCOztJQUN0QixvREFBNEI7O0lBQzVCLGtEQUFrQzs7SUFDbEMsNENBQWtDOztJQUNsQyw4Q0FBOEI7O0lBQzlCLGlEQUFnRjs7SUFDaEYsc0NBQW9DOztJQUNwQyx3Q0FBc0M7O0lBQ3RDLDRDQUEwQzs7SUFDMUMsNENBQTBDOztJQUMxQywwQ0FBNEM7O0lBQzVDLHVDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LWZvcm0tdGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWZvcm0tdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZm9ybS10YWJsZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1Rm9ybVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBqO1xyXG4gIF9pdGVtcyA9IFtdO1xyXG4gIF9pdGVtc0tleTtcclxuICBlZGl0YWJsZSA9IFtdO1xyXG4gIGVycm9ydmFsaWRhdGlvbkluZGV4O1xyXG4gIGVycm9ydmFsaWRhdGlvbktleTtcclxuICBASW5wdXQoJ3RpdGxlLW9uZS1pZCcpIHRpdGxlT25lSWQ7XHJcbiAgQElucHV0KCd0aXRsZS1vbmUtc2l6ZScpIHRpdGxlT25lU2l6ZTtcclxuICBASW5wdXQoJ3RpdGxlLW9uZS1jb2xvcicpIHRpdGxlT25lQ29sb3IgPSAnd2hpdGUnO1xyXG4gIEBJbnB1dCgndGl0bGUtb25lLXdlaWdodCcpIHRpdGxlT25lV2VpZ2h0O1xyXG4gIEBJbnB1dCgndGl0bGUtb25lLWN1c3RvbS1jbGFzcycpIHRpdGxlT25lQ3VzdG9tQ2xhc3MgPSAnJztcclxuICBASW5wdXQoJ3RpdGxlLWNvbnRlbnQnKSB0aXRsZUNvbnRlbnQgPSAnRW50ZXIgYW5pbWFsIGluZm9ybWF0aW9uOic7XHJcbiAgQElucHV0KCdoZWFkZXItc2l6ZScpIGhlYWRlclNpemUgPSAnMTRweCc7XHJcbiAgQElucHV0KCdoZWFkZXItY29sb3InKSBoZWFkZXJDb2xvcjtcclxuICBASW5wdXQoJ2hlYWRlci13ZWlnaHQnKSBoZWFkZXJXZWlnaHQ7XHJcbiAgQElucHV0KCdzdGF0dXMtYmctc3R5bGUnKSBjb2xvclBhbGxldGUgPSBbJyNhM2RlZDgnLCAnI2Y4ZGJiNCcsICcjYzdjM2ZhJywgJ2dyYXknXTtcclxuICBASW5wdXQoJ3N0YXR1cycpIHN0YXR1cyA9IFsnY29tcGxldGVkJywgJ25vdC1jb21wbGV0ZWQnLCAncGVuZGluZycsICdvdGhlcnMnXTtcclxuICBASW5wdXQoJ3RhYmxlRGlzYWJsZWQnKSB0YWJsZURpc2FibGVkID0gW107XHJcbiAgQElucHV0KClcclxuICBzZXQgZW5hYmxlRWRpdEluZGV4KHZhbCkge1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICt2YWw7IGkrKykge1xyXG4gICAgICAgIHRoaXMuZWRpdGFibGVbaV0gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBJbnB1dCgpIHR5cGVLZXk7XHJcbiAgQElucHV0KCkgdHlwZTtcclxuICBASW5wdXQoKSBkZWZhdWx0Q291bnQgPSAyO1xyXG4gIEBJbnB1dCgpIGFjdGlvbmtleSA9ICdhY3Rpb25zX1RibENvbEhkcic7XHJcbiAgQElucHV0KClcclxuICBnZXQgaXRlbXMoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnaXRlbXMgLS0tLS0tLS0tLS0tJywgdGhpcy5pdGVtcyk7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5pdGVtcztcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGRhdGEuZmlsdGVyKHZhbCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbCcsIHZhbCk7XHJcbiAgICAgICAgZGVsZXRlIHZhbFsndW5kZWZpbmVkJ107XHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbiAgc2V0IGl0ZW1zKHZhbCkge1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnX2l0ZW1zJywgdmFsKTtcclxuICAgICAgaWYgKHZhbCkge1xyXG4gICAgICAgIHZhbC5maWx0ZXIoZWwgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3ZhbCcsIGVsKTtcclxuICAgICAgICAgIGRlbGV0ZSBlbFsndW5kZWZpbmVkJ107XHJcbiAgICAgICAgICByZXR1cm4gZWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5faXRlbXMgPSB2YWw7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5faXRlbXNbMF0pIHtcclxuICAgICAgdGhpcy5faXRlbXNLZXkgPSBPYmplY3Qua2V5cyh0aGlzLl9pdGVtc1swXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBJbnB1dCgpIHNlbGVjdGlvbktleTtcclxuICBASW5wdXQoKSBoaWdobGlnaHRlcktleTtcclxuICBASW5wdXQoKSBwYXRjaEtleTtcclxuICBASW5wdXQoKSBoaWRkZW5LZXkgPSBbXTtcclxuICBASW5wdXQoKSBlbmFibGVIaWdobGlnaHRlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGVuYWJsZUNvbnRyb2xzID0gdHJ1ZTtcclxuICBASW5wdXQoKSBlbmFibGVTZWxlY3RBbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzZWxlY3RBbGw7XHJcbiAgQElucHV0KCkga2V5RGF0YSA9IFtdO1xyXG4gIEBJbnB1dCgpIGNvbnRyb2xzU2l6ZTtcclxuICBASW5wdXQoKSBjb250cm9sQ3VzdG9tQ2xhc3M7XHJcbiAgQElucHV0KCkgZGlzYWJsZVNlbGVjdEFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHBhdGNoRW1wdHkgPSAnUHJvY2Vzc29yJztcclxuICBASW5wdXQoKSBoaWRlRXJyb3JNc2cgPSBmYWxzZTtcclxuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2Utb25lJykgZXJyb3JNZXNzYWdlT25lID0gJ3ZhbHVlIHNob3VsZCBiZSAgZ3JlYXRlciB0aGVuIDAnO1xyXG4gIEBPdXRwdXQoKSBzYXZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHN1Ym1pdERhdGEgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGZvcm1TdGF0dXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCd0YWJsZS1zb3J0YWJsZScpIHNvcnRhYmxlID0gJ2ZhbHNlJztcclxuICBfbnVsbCA9IG51bGw7XHJcbiAgQEhvc3RMaXN0ZW5lcigncGFzdGUnLCBbJyRldmVudCddKSBibG9ja1Bhc3RlKGU6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdlJywgZSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjb3B5JywgWyckZXZlbnQnXSkgYmxvY2tDb3B5KGU6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2N1dCcsIFsnJGV2ZW50J10pIGJsb2NrQ3V0KGU6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGFkZFRhYmxlKHZhbCwgZWRpdEluZGV4KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuZWRpdGFibGVbZWRpdEluZGV4ICsgaV0gPSB0cnVlO1xyXG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IHt9O1xyXG4gICAgICBjb25zdCB0eXBlS2V5ID0gdGhpcy50eXBlS2V5O1xyXG4gICAgICBPYmplY3Qua2V5cyh0eXBlS2V5KS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICBpZiAodHlwZUtleVtrZXldID09ICdDaGVja2JveCcpIHtcclxuICAgICAgICAgIHRlbXBsYXRlW2tleV0gPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVLZXlba2V5XSA9PSAnU3RyaW5nJyB8fCB0eXBlS2V5W2tleV0gPT0gJ051bWJlcicpIHtcclxuICAgICAgICAgIHRlbXBsYXRlW2tleV0gPSAnJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGVtcGxhdGVba2V5XSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLmVuYWJsZUNvbnRyb2xzKSB7XHJcbiAgICAgICAgdGVtcGxhdGVbdGhpcy5hY3Rpb25rZXldID0gJyc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5faXRlbXMucHVzaCh0ZW1wbGF0ZSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygnX2l0ZW1zJywgdGhpcy5faXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgY29uc29sZS5sb2coJ19pdGVtcycsIHRoaXMuX2l0ZW1zKTtcclxuICB9XHJcblxyXG4gIGVkaXQoaSwgaXRlbSkge1xyXG4gICAgY29uc29sZS5sb2coaSk7XHJcbiAgICBpZiAodGhpcy5lZGl0YWJsZVtpXSkge1xyXG4gICAgICB0aGlzLmVkaXRhYmxlW2ldID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2F2ZS5lbWl0KGl0ZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lZGl0YWJsZVtpXSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVkYXRhKGksIGl0ZW0pIHtcclxuICAgIGNvbnNvbGUubG9nKCdpbmRleCcsIGksIHRoaXMuX2l0ZW1zLmxlbmd0aCk7XHJcbiAgICBpZiAodGhpcy5faXRlbXMpIHtcclxuICAgICAgaWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCAhPSAxKSB7XHJcbiAgICAgICAgdGhpcy5faXRlbXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICBpbmRleDogaSxcclxuICAgICAgICAgIGRhdGE6IGl0ZW1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmVtb3ZlLmVtaXQoZGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgIGluZGV4OiBpLFxyXG4gICAgICAgICAgZGF0YTogaXRlbVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZW1vdmUuZW1pdChkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tWYWxpZChsaXN0KSB7XHJcbiAgICBpZiAodGhpcy5rZXlEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5rZXlEYXRhLnNvbWUodmFsID0+IHtcclxuICAgICAgICByZXR1cm4gdmFsLmtleSA9PSBsaXN0O1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdEFsbEFjdGlvbigpIHtcclxuICAgIGNvbnN0IHNlbGVjdEFsbCA9IHRoaXMuc2VsZWN0QWxsO1xyXG4gICAgaWYgKHNlbGVjdEFsbCkge1xyXG4gICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChlbGVtZW50LCBtYWluSW5kZXgpID0+IHtcclxuICAgICAgICBPYmplY3Qua2V5cyhlbGVtZW50KS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoa2V5ID09IHRoaXMuc2VsZWN0aW9uS2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudFtrZXldLCBpbmRleCwgbWFpbkluZGV4LCB0aGlzLl9pdGVtc1ttYWluSW5kZXhdW3RoaXMucGF0Y2hLZXldKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnRhYmxlRGlzYWJsZWRbbWFpbkluZGV4XSkge1xyXG4gICAgICAgICAgICAgIGVsZW1lbnRba2V5XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgaWYgKCFlbGVtZW50W3RoaXMucGF0Y2hLZXldKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50W3RoaXMucGF0Y2hLZXldID0gZWxlbWVudFt0aGlzLmhpZ2hsaWdodGVyS2V5XTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLl9pdGVtc1ttYWluSW5kZXhdW3RoaXMucGF0Y2hLZXldKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pdGVtc1ttYWluSW5kZXhdW3RoaXMucGF0Y2hLZXldID0gdGhpcy5faXRlbXNbbWFpbkluZGV4XVt0aGlzLmhpZ2hsaWdodGVyS2V5XTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGF0YScsIGVsZW1lbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoZWxlbWVudCkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICBpZiAoa2V5ID09IHRoaXMuc2VsZWN0aW9uS2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudFtrZXldKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnRhYmxlRGlzYWJsZWRbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudFtrZXldID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChrZXkgPT0gdGhpcy5wYXRjaEtleSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWxlbWVudCcsIGVsZW1lbnRba2V5XSk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy50YWJsZURpc2FibGVkW2luZGV4XSkge1xyXG4gICAgICAgICAgICAgIGVsZW1lbnRba2V5XSA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBlbGVtZW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGtIaWRkZW5LZXkoa2V5KSB7XHJcbiAgICBpZiAodGhpcy5oaWRkZW5LZXkubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmhpZGRlbktleS5zb21lKHZhbCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHZhbCA9PSBrZXk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgcGF0Y2hWYWx1ZShzZWxlY3Rpb24sIGRlZmF1bHRWYWx1ZSwgaW5kZXgsIGtleT8pIHtcclxuICAgIGNvbnNvbGUubG9nKCdwYXRjaFZhbHVlJywgc2VsZWN0aW9uLCBkZWZhdWx0VmFsdWUsIGluZGV4LCBrZXkpO1xyXG4gICAgaWYgKHNlbGVjdGlvbikge1xyXG4gICAgICB0aGlzLl9pdGVtc1tpbmRleF1bdGhpcy5wYXRjaEtleV0gPSBkZWZhdWx0VmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMudGFibGVEaXNhYmxlZFtpbmRleF0gJiYgIXRoaXMuX2l0ZW1zW2luZGV4XVt0aGlzLnBhdGNoS2V5XSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5faXRlbXNbaW5kZXhdW3RoaXMucGF0Y2hLZXldID0gdGhpcy5fbnVsbDtcclxuICAgICAgaWYgKHRoaXMudHlwZSA9PSB0aGlzLnBhdGNoRW1wdHkpIHtcclxuICAgICAgICB0aGlzLl9pdGVtc1tpbmRleF1ba2V5XSA9IHRoaXMuX251bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbmREYXRhKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2l0ZW1zO1xyXG4gICAgdGhpcy5zdWJtaXREYXRhLmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZShrZXksIGluZGV4KSB7XHJcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyBrZXkgOicsIGtleSk7XHJcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyBpbmRleCA6JywgaW5kZXgpO1xyXG4gICAgaWYgKGtleSA9PSAwKSB7XHJcbiAgICAgIHRoaXMuZXJyb3J2YWxpZGF0aW9uSW5kZXggPSBpbmRleDtcclxuICAgICAgdGhpcy5lcnJvcnZhbGlkYXRpb25LZXkgPSBrZXk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVycm9ydmFsaWRhdGlvbkluZGV4ID0gJ04vQSc7XHJcbiAgICAgIHRoaXMuZXJyb3J2YWxpZGF0aW9uS2V5ID0gJ04vQSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja1NwY2lhbENoYXIoZXZlbnQsIHR5cGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LCBldmVudC50YXJnZXQudmFsdWUpO1xyXG5cclxuICAgIC8qIGRpc2FibGUgLSBlICovXHJcbiAgICBpZiAodHlwZSA9PSAnTnVtYmVyJykge1xyXG4gICAgICBpZiAoZXZlbnQuY2hhckNvZGUgPT0gMTAxKSB7XHJcbiAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50LmNoYXJDb2RlID09IDQ1KSB7XHJcbiAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50LmNoYXJDb2RlID09IDY5KSB7XHJcbiAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiB2YWxpZGF0aW9uIGZvciBzdHJpbmcgICovXHJcbiAgICBpZiAodHlwZSA9PSAnU3RyaW5nJykge1xyXG4gICAgICBpZiAoZXZlbnQuY2hhckNvZGUgPT0gMzYgfHxcclxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSA5NSB8fFxyXG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQyIHx8XHJcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDUgfHxcclxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSA0MyB8fFxyXG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQ2IHx8XHJcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDAgfHxcclxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSA0MSB8fFxyXG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDM5IHx8XHJcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gMzMgfHxcclxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSAzMlxyXG4gICAgICApIHtcclxuICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoISgoZXZlbnQuY2hhckNvZGUgPj0gNjUpICYmIChldmVudC5jaGFyQ29kZSA8PSA5MCkgfHxcclxuICAgICAgKGV2ZW50LmNoYXJDb2RlID49IDk3KSAmJiAoZXZlbnQuY2hhckNvZGUgPD0gMTIyKSB8fCAoZXZlbnQuY2hhckNvZGUgPj0gNDgpICYmXHJcbiAgICAgIChldmVudC5jaGFyQ29kZSA8PSA1NykpKSB7XHJcbiAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGV2ZW50LnJldHVyblZhbHVlID0gdHJ1ZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc29ydChoZWFkLCB0eXBlLCBmb3JtYXRlKSB7XHJcbiAgICBpZiAodGhpcy5faXRlbXMpIHtcclxuICAgICAgaWYgKCEodHlwZSA9PSAnQ2hlY2tib3gnKSkge1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgIHJldHVybiArYVtoZWFkXSAtICtiW2hlYWRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlID09ICdOdW1iZXInKSB7XHJcbiAgICAgICAgaWYgKGZvcm1hdGUgPT0gJ2Fzc2UnKSB7XHJcbiAgICAgICAgICB0aGlzLl9pdGVtcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhW2hlYWRdIC0gYltoZWFkXVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmb3JtYXRlID09ICdkZXNjJykge1xyXG4gICAgICAgICAgdGhpcy5faXRlbXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYltoZWFkXSAtIGFbaGVhZF1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZSA9PSAnU3RyaW5nJykge1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgIGlmIChhW2hlYWRdLnRvTG93ZXJDYXNlKCkgPCBiW2hlYWRdLnRvTG93ZXJDYXNlKCkgJiYgZm9ybWF0ZSA9PSAnYXNzZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGJbaGVhZF0udG9Mb3dlckNhc2UoKSA8IGFbaGVhZF0udG9Mb3dlckNhc2UoKSAmJiBmb3JtYXRlID09ICdkZXNjJykge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKHZhbCA9PiB7XHJcbiAgICAgICAgZGVsZXRlIHZhbFsndW5kZWZpbmVkJ107XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygnc29ydCAtJywgdGhpcy5faXRlbXMsIGhlYWQsIHR5cGUsIGZvcm1hdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==