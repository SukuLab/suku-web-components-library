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
        this.disableArrList = [744518];
        this.titleOneColor = 'white';
        this.titleOneCustomClass = '';
        this.titleContent = 'Enter animal information:';
        this.headerSize = '14px';
        this.colorPallete = ['#a3ded8', '#f8dbb4', '#c7c3fa', 'gray'];
        this.status = ['completed', 'not-completed', 'pending', 'others'];
        this.tableDisabled = [];
        this.disableHighlightKey = false;
        this.defaultCount = 2;
        this.actionkey = 'actions_TblColHdr';
        this.disabledArrayKey = [];
        this.uniqueKey = 'sku';
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
                 * @param {?} index
                 * @return {?}
                 */
                function (val, index) {
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
                     * @param {?} index
                     * @return {?}
                     */
                    function (el, index) {
                        delete el['undefined'];
                        return el;
                    }));
                }
                this._items = val;
            }
            if (this._items[0]) {
                this._itemsKey = Object.keys(this._items[0]);
                this.keyLength = Object.keys(this._itemsKey).length;
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
                            element[_this.patchKey] = '';
                        }
                    }
                    if (_this.type == 'Processor') {
                        if (key == _this.highlighterKey) {
                            console.log('element', element[key]);
                            if (!_this.tableDisabled[index]) {
                                element[_this.highlighterKey] = '';
                            }
                        }
                    }
                }));
                console.log('data', element, _this.patchKey);
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
        console.log('this.disableArrList', this.disableArrList);
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
     * @param {?} sortOption
     * @return {?}
     */
    SukuFormTableComponent.prototype.sort = /**
     * @param {?} head
     * @param {?} type
     * @param {?} sortOption
     * @return {?}
     */
    function (head, type, sortOption) {
        var _this = this;
        console.log('D', head, type, sortOption);
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
                if (sortOption == 'asse') {
                    this._items.sort((/**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */
                    function (a, b) {
                        return a[head] - b[head];
                    }));
                }
                if (sortOption == 'desc') {
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
                var sortable = this._items.some((/**
                 * @param {?} dataVal
                 * @return {?}
                 */
                function (dataVal) {
                    return dataVal[head] !== '-';
                }));
                console.log({ sortable: sortable });
                if (sortable) {
                    this._items.sort((/**
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
            this._items.forEach((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                delete val['undefined'];
            }));
            /** @type {?} */
            var data = this._items;
            if (data) {
                data.filter((/**
                 * @param {?} val
                 * @param {?} index
                 * @return {?}
                 */
                function (val, index) {
                    console.log('val', val);
                    if (_this.disabledArrayKey) {
                        /** @type {?} */
                        var result = _this.disabledArrayKey.some((/**
                         * @param {?} el
                         * @return {?}
                         */
                        function (el) {
                            console.log('el', el, val[_this.uniqueKey]);
                            return el == val[_this.uniqueKey];
                        }));
                        console.log('result', result);
                        if (result) {
                            _this.tableDisabled[index] = true;
                        }
                        else {
                            _this.tableDisabled[index] = false;
                        }
                    }
                    console.log(' this.tableDisabled', _this.tableDisabled);
                    delete val['undefined'];
                    return val;
                }));
            }
            console.log('sort -', this._items, head, type, sortOption);
        }
    };
    SukuFormTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-form-table',
                    template: "<div class=\"col p-0\">\r\n  <table>\r\n    <tr *ngIf=\"enableSelectAll && _items[0]\">\r\n      <td *ngFor=\"let list of _items[0] | keys; let i = index\"\r\n        [ngClass]=\"{ 'text-center': typeKey[list] == 'Checkbox' }\" [style.width.%]=\"(list==uniqueKey) ? 8 :\r\n        92/keyLength\">\r\n        <!-- checkbox -->\r\n        <span [ngClass]=\"{ 'align-checkbox': editable[j] }\" *ngIf=\"typeKey[list] == 'Checkbox'\">\r\n          <mat-checkbox (change)=\"sendData()\" color=\"primary\" [disabled]=\"disableSelectAll\" [(ngModel)]=\"selectAll\"\r\n            (change)=\"selectAllAction()\">\r\n            {{ \"selectAll_ChkBox\" | translate }}\r\n          </mat-checkbox>\r\n        </span>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n\r\n  <div class=\"header\">\r\n    <div class=\"col\" [ngClass]=\"{\r\n        'pt-3 pb-3': type == 'Processor',\r\n        'pb-4 pt-4': type != 'Processor'\r\n      }\">\r\n      <div class=\"row\">\r\n        <div class=\"col mt-auto mb-auto\">\r\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{ titleOneCustomClass }}\"\r\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{ titleOneId }}\">\r\n            {{ titleContent }}\r\n            <span class=\"pl-5\" id=\"processor\">\r\n              <span [ngClass]=\"{ 'align-checkbox': editable[j] }\" *ngIf=\"type == 'Processor'\">\r\n                <mat-checkbox (change)=\"sendData()\" color=\"primary\" [disabled]=\"disableSelectAll\"\r\n                  [(ngModel)]=\"selectAll\" (change)=\"selectAllAction()\">\r\n                  <span class=\"checkbox\">{{\r\n                    \"selectAll_ChkBox\" | translate\r\n                  }}</span>\r\n                </mat-checkbox>\r\n              </span>\r\n            </span>\r\n          </h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col p-0\">\r\n    <table class=\"table bg-white table-responsive-sm\">\r\n      <thead>\r\n        <tr>\r\n          <th *ngFor=\"let head of _items[0] | keys\"\r\n            [ngClass]=\"{ 'text-center': typeKey[head] == 'Checkbox' , 'ellipsis' : !(typeKey[head] == 'Checkbox') }\"\r\n            data-sortable=\"true\">\r\n            <span *ngIf=\"!(head === 'Sku')\" class=\"hovertxt\">{{ head | translate }}</span>\r\n            <span *ngIf=\"head === 'Sku'\" class=\"Sku hovertxt\">{{\r\n              head | translate\r\n            }}</span>\r\n            <span *ngIf=\"!(typeKey[head] == 'Checkbox')\" class=\"float-right c-pointer ml\">\r\n              <span *ngIf=\"sortable && !(head === 'actions_TblColHdr')\" (click)=\"sort(head, typeKey[head], 'asse')\"\r\n                class=\"fas fa-caret-up displayBlock\"></span>\r\n              <span *ngIf=\"sortable && !(head === 'actions_TblColHdr')\" (click)=\"sort(head, typeKey[head], 'desc')\"\r\n                class=\"fas fa-caret-down displayBlock lineH\"></span>\r\n            </span>\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of _items; let j = index\">\r\n          <!-- type == 'Producer' ? ''  : typeKey[list] == 'Checkbox'   ? list?.length * 0.45   : list?.length * 1 -->\r\n          <td [style.width.%]=\"(list == uniqueKey) ? 8 : 92/keyLength\"\r\n            [ngClass]=\"{'border-enable': checkValid(list),'text-center': typeKey[list] == 'Checkbox' }\"\r\n            *ngFor=\"let list of item | keys; let i = index\" [style.background-color]=\"\r\n              (checkValid(list)\r\n                ? item[selectionKey] &&\r\n                  item[highlighterKey] &&\r\n                  enableHighlighter\r\n                  ? '#a3ded8'\r\n                  : !(item[selectionKey] && enableHighlighter)\r\n                  ? '#d3d9dc'\r\n                  : '#f8dbb4'\r\n                : '') ||\r\n              (item[selectionKey] && list == patchKey\r\n                ? '#d3d9dc'\r\n                : list == patchKey && item[patchKey]\r\n                ? '#a3ded8'\r\n                : list == patchKey\r\n                ? '#f8dbb4'\r\n                : '')\">\r\n            <span *ngIf=\"!editable[j] && list != actionkey && typeKey[list] != 'Checkbox' && !checkValid(list) &&\r\n                list != patchKey && typeKey[list] != 'Date'\" id=\"{{ list | trim }}{{ j }}\">{{ item[list] }}\r\n            </span>\r\n\r\n            <!-- input -->\r\n            <span *ngIf=\"editable[j] &&  list != actionkey && (typeKey[list] == 'String' || typeKey[list] == 'Number')\">\r\n              <input (keyup)=\"sendData()\" (keypress)=\"checkSpcialChar($event, typeKey[list])\" class=\"form-control\"\r\n                [(ngModel)]=\"item[list]\" min=\"0\" [maxLength]=\"25\"\r\n                type=\"{{ typeKey[list] == 'Number' ? 'number' : 'text' }}\" (change)=\"validate(item[list], j)\"\r\n                [disabled]=\"tableDisabled[j]\" id=\"{{ list | trim }}{{ j }}\" *ngIf=\"editable[j] && list != actionkey &&\r\n                  (typeKey[list] == 'String' || typeKey[list] == 'Number')\" />\r\n              <p id=\"{{ j }}\" class=\"errorMessage\" *ngIf=\"item[list] && item[list] == 0 && !hideErrorMsg\">\r\n                {{ errorMessageOne | translate }}\r\n              </p>\r\n            </span>\r\n\r\n            <input type=\"date\" (keyup)=\"sendData()\" [disabled]=\"tableDisabled[j]\" data-date=\"\"\r\n              data-date-format=\"mm/dd/yyyy\" class=\"form-control\" id=\"{{ list | trim }}{{ j }}\" *ngIf=\"\r\n                editable[j] && list != actionkey && typeKey[list] == 'Date'\r\n              \" [(ngModel)]=\"item[list]\" />\r\n\r\n            <!-- checkbox -->\r\n            <span class=\"align-checkbox\" *ngIf=\"typeKey[list] == 'Checkbox'\">\r\n              <mat-checkbox color=\"primary\" id=\"{{ list | trim }}{{ j }}\" (change)=\"sendData();patchValue( item[selectionKey],\r\n                    item[highlighterKey],j, highlighterKey)\"\r\n                [disabled]=\"(!editable[j] && list != selectionKey) || tableDisabled[j]\" [(ngModel)]=\"item[list]\">\r\n              </mat-checkbox>\r\n            </span>\r\n\r\n            <!-- select -->\r\n            <select class=\"form-control\" (change)=\"sendData()\" [disabled]=\"tableDisabled[j]\" *ngIf=\"\r\n                editable[j] && list != actionkey && typeKey[list] != 'String' && typeKey[list] != 'Number' &&\r\n                  typeKey[list] != 'Checkbox' && typeKey[list] != 'Date' \" [(ngModel)]=\"item[list]\">\r\n              <option *ngFor=\"let c of typeKey[list]; let k = index\" id=\"asset{{ k }}\" [ngValue]=\"c\">\r\n                {{ c }}\r\n              </option>\r\n            </select>\r\n\r\n            <!-- input- highlighterKey -->\r\n            <span *ngIf=\"checkValid(list) && list != actionkey\">\r\n              <span *ngFor=\"let data of keyData; let dataIndex = index\">\r\n                <span *ngIf=\"list == data.key\">\r\n                  <input type=\"{{ typeKey[list] == 'Number' ? 'number' : 'text' }}\" id=\"asset{{ j }}{{ dataIndex }}\"\r\n                    (keyup)=\"sendData()\" [ngClass]=\"{\r\n                      disabled: !(\r\n                        (item[selectionKey]\r\n                          ? disableHighlightKey\r\n                          : item[selectionKey]) && !tableDisabled[j] ) }\"\r\n                    [disabled]=\" !((item[selectionKey]  ? disableHighlightKey  : item[selectionKey]) && !tableDisabled[j] )\"\r\n                    class=\"form-control\r\n                    sample\" id=\"{{ list | trim }}{{ j }}\" [(ngModel)]=\"item[data.key]\"\r\n                    (change)=\"validate(item[data.key], dataIndex)\" *ngIf=\"\r\n                      checkValid(list) && list != actionkey && highlighterKey\r\n                    \" (keypress)=\"checkSpcialChar($event, typeKey[list])\" min=\"0\" />\r\n                </span>\r\n                <p id=\"{{ dataIndex }}\" class=\"errorMessage\"\r\n                  *ngIf=\"item[data.key] && item[data.key] == 0 && !hideErrorMsg\">\r\n                  {{ errorMessageOne | translate }}\r\n                </p>\r\n              </span>\r\n            </span>\r\n\r\n            <!-- input -patchKey -->\r\n            <span *ngIf=\"list == patchKey && list != actionkey && patchKey\">\r\n              <input type=\"{{ typeKey[list] == 'Number' ? 'number' : 'text' }}\" id=\"asset{{ j }}{{ selectionKey }}\"\r\n                (keyup)=\"sendData()\" [ngClass]=\"{ disabled: item[selectionKey] }\"\r\n                [disabled]=\"item[selectionKey] || tableDisabled[j]\" class=\"form-control sample\"\r\n                [(ngModel)]=\"item[patchKey]\" *ngIf=\"list == patchKey && list != actionkey && patchKey\"\r\n                id=\"{{ selectionKey | trim }}{{ j }}Patch\" (change)=\"validate(item[patchKey], selectionKey)\" min=\"0\"\r\n                [maxLength]=\"10\" (keypress)=\"checkSpcialChar($event, typeKey[list])\" />\r\n              <p id=\"asset{{ j }}{{ selectionKey }}\" class=\"errorMessage\"\r\n                *ngIf=\"item[patchKey] && item[patchKey] == 0 && !hideErrorMsg\">\r\n                {{ errorMessageOne | translate }}\r\n              </p>\r\n            </span>\r\n\r\n            <span *ngIf=\"typeKey[list] == 'Date'\">\r\n              {{ item[list] | dateLocale: \"dateFormat\" }}\r\n            </span>\r\n\r\n            <span class=\"col p-0 pl-2\" (click)=\"edit(j, item); sendData()\"\r\n              *ngIf=\"list == actionkey && !editable[j] && !tableDisabled[j]\">\r\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{ j }}\" [style.font-size.rem]=\"controlsSize\"\r\n                [ngClass]=\"{ 'btn-edit': editable[j] }\">\r\n                {{ \"edit_TblBtn\" | translate }}\r\n              </span>\r\n            </span>\r\n            <span class=\"col p-0 pl-2\" *ngIf=\"list == actionkey && editable[j] && !tableDisabled[j]\">\r\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{ j }}\" [style.font-size.rem]=\"controlsSize\"\r\n                (click)=\"edit(j, item); sendData()\" [ngClass]=\"{ 'btn-edit': editable[j] }\">\r\n                {{ \"save_TblBtn\" | translate }}\r\n              </span>\r\n            </span>\r\n            <span class=\"col c-pointer pl-4\" *ngIf=\"list == actionkey && !tableDisabled[j]\">\r\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{ j }}\" [style.font-size.rem]=\"controlsSize\"\r\n                (click)=\"removedata(j, item); sendData()\" [ngClass]=\"{ 'btn-edit': editable[j] }\">\r\n                {{ \"remove_TblBtn\" | translate }}\r\n              </span>\r\n            </span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"col text-right\" *ngIf=\"enableControls\">\r\n    <span class=\"p-2\">\r\n      <a class=\"secondary-btn\" id=\"addOneRow\" [style.font-size.rem]=\"controlsSize\" (click)=\"addTable(1, _items?.length)\"\r\n        color=\"primary\">{{ \"add1Row_TblBtn\" | translate }}</a>\r\n    </span>\r\n    <span class=\"p-2\">\r\n      <a class=\"secondary-btn\" id=\"addTenRow\" [style.font-size.rem]=\"controlsSize\"\r\n        (click)=\"addTable(10, _items?.length)\" color=\"primary\">{{ \"add10Rows_TblBtn\" | translate }}</a>\r\n    </span>\r\n  </div>\r\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.header{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.title{font-family:var(--suku-primary-font);font-weight:600;font-size:var(--suku-font-size-5);text-transform:uppercase}.table{font-family:var(--suku-primary-font);box-shadow:0 1px 2px 0 rgba(0,0,0,.1)}table td{padding-left:1%}.btn-edit{line-height:2!important}input,select{width:100%;height:inherit!important}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0}td{width:15%}.form-control:focus{border:1px solid #ced4da;border-color:#ced4da!important;box-shadow:none!important}:host ::ng-deep.mat-checkbox{vertical-align:sub!important}th:last-child{width:12%!important}td:last-child{width:13%!important}button:focus{outline:0!important}.secondary-btn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:var(--suku-text-heading);border-bottom:3.5px solid;border-color:var(--suku-primary-color);word-break:break-word!important;cursor:pointer}.align-checkbox{font-size:18px}.c-pointer{cursor:pointer}table>tbody>tr>td{flex-wrap:wrap!important}.sample{background:inherit!important;border:none!important}.disabled{cursor:not-allowed}select option{border:1px solid #757575}option{border:1px solid #aaa;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,.1);color:#555}.errorMessage{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-1);color:red;padding:0 .75rem;margin-top:-2px!important;margin-bottom:0!important}.table th{padding:.5rem .5rem .5rem 1.25rem;border-bottom:2px solid #dee2e68a;border-left:1px solid #f2f2f2}.table td{padding:.5rem 1rem;border:1px solid #f2f2f2}.border-enable{border:1px solid #92929240}.hidden{display:none}table{width:100%}.checkbox{font-family:var(--suku-primary-font);color:#fff}:host #processor{font-family:var(--suku-primary-font);font-weight:500!important}:host #processor ::ng-deep.mat-checkbox-frame{border-color:rgba(255,255,255,.54)!important}.Sku{text-transform:uppercase}.float-right{float:right}.displayBlock{display:block}.lineH{line-height:.12}.fas{font-size:18px}:host ::ng-deep .table td{border-top:1px solid #bbbbbbcc;border:1px solid #f2f2f2!important}:host ::ng-deep .table thead th{border-bottom:2px solid #dee2e68a;border-left:1px solid #f2f2f2}.ml{margin-left:.8rem;position:relative;top:-4px}.ellipsis{position:relative}.ellipsis:before{content:'&nbsp;';visibility:hidden}.ellipsis span.hovertxt{position:absolute;left:.85rem;right:2.5rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ellipsis span.hovertxt:hover{background:#fff;box-shadow:1.2px 2px #f2f2f2;position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-width:300px;z-index:4;margin-top:-1rem;padding:1rem;border-radius:3px;white-space:normal!important;word-break:break-word;left:0!important;box-shadow:0 3px 4px 0 rgba(0,0,0,.2)}"]
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
        disableHighlightKey: [{ type: Input, args: ['disableHighlightKey',] }],
        enableEditIndex: [{ type: Input }],
        typeKey: [{ type: Input }],
        type: [{ type: Input }],
        defaultCount: [{ type: Input }],
        actionkey: [{ type: Input }],
        disabledArrayKey: [{ type: Input }],
        items: [{ type: Input }],
        uniqueKey: [{ type: Input }],
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
    SukuFormTableComponent.prototype.disableArrList;
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
    SukuFormTableComponent.prototype.disableHighlightKey;
    /** @type {?} */
    SukuFormTableComponent.prototype.keyLength;
    /** @type {?} */
    SukuFormTableComponent.prototype.typeKey;
    /** @type {?} */
    SukuFormTableComponent.prototype.type;
    /** @type {?} */
    SukuFormTableComponent.prototype.defaultCount;
    /** @type {?} */
    SukuFormTableComponent.prototype.actionkey;
    /** @type {?} */
    SukuFormTableComponent.prototype.disabledArrayKey;
    /** @type {?} */
    SukuFormTableComponent.prototype.uniqueKey;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWZvcm0tdGFibGUvc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGO0lBdUdFO1FBaEdBLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFFWixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBR2QsbUJBQWMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBR0Esa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFFakIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLGlCQUFZLEdBQUcsMkJBQTJCLENBQUM7UUFDN0MsZUFBVSxHQUFHLE1BQU0sQ0FBQztRQUdoQixpQkFBWSxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEUsV0FBTSxHQUFHLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEQsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDYix3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFZakQsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsY0FBUyxHQUFHLG1CQUFtQixDQUFDO1FBQ2hDLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQTZCdEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUtsQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2Ysc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXhCLFlBQU8sR0FBRyxFQUFFLENBQUM7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SUFDakMsbUNBQUU7O0lBQ0Ysd0NBQVk7O0lBQ1osMkNBQVU7O0lBQ1YsMENBQWM7O0lBQ2Qsc0RBQXFCOztJQUNyQixvREFBbUI7O0lBQ25CLGdEQUEwQjs7SUFDMUIsNENBQWtDOztJQUNsQyw4Q0FBc0M7O0lBQ3RDLCtDQUFrRDs7SUFDbEQsZ0RBQTBDOztJQUMxQyxxREFBMEQ7O0lBQzFELDhDQUFtRTs7SUFDbkUsNENBQTBDOztJQUMxQyw2Q0FBbUM7O0lBQ25DLDhDQUFxQzs7SUFDckMsOENBQW1GOztJQUNuRix3Q0FBOEU7O0lBQzlFLCtDQUEyQzs7SUFDM0MscURBQTBEOztJQUMxRCwyQ0FBa0I7O0lBU2xCLHlDQUFpQjs7SUFDakIsc0NBQWM7O0lBQ2QsOENBQTBCOztJQUMxQiwyQ0FBeUM7O0lBQ3pDLGtEQUErQjs7SUE2Qi9CLDJDQUEyQjs7SUFFM0IsOENBQXNCOztJQUN0QixnREFBd0I7O0lBQ3hCLDBDQUFrQjs7SUFDbEIsMkNBQXdCOztJQUN4QixtREFBbUM7O0lBQ25DLGdEQUErQjs7SUFDL0IsaURBQWlDOztJQUNqQywyQ0FBbUI7O0lBQ25CLHlDQUFzQjs7SUFDdEIsOENBQXNCOztJQUN0QixvREFBNEI7O0lBQzVCLGtEQUFrQzs7SUFDbEMsNENBQWtDOztJQUNsQyw4Q0FBOEI7O0lBQzlCLGlEQUFnRjs7SUFDaEYsc0NBQW9DOztJQUNwQyx3Q0FBc0M7O0lBQ3RDLDRDQUEwQzs7SUFDMUMsNENBQTBDOztJQUMxQywwQ0FBNEM7O0lBQzVDLHVDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LWZvcm0tdGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWZvcm0tdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZm9ybS10YWJsZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1Rm9ybVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBqO1xyXG4gIF9pdGVtcyA9IFtdO1xyXG4gIF9pdGVtc0tleTtcclxuICBlZGl0YWJsZSA9IFtdO1xyXG4gIGVycm9ydmFsaWRhdGlvbkluZGV4O1xyXG4gIGVycm9ydmFsaWRhdGlvbktleTtcclxuICBkaXNhYmxlQXJyTGlzdCA9IFs3NDQ1MThdO1xyXG4gIEBJbnB1dCgndGl0bGUtb25lLWlkJykgdGl0bGVPbmVJZDtcclxuICBASW5wdXQoJ3RpdGxlLW9uZS1zaXplJykgdGl0bGVPbmVTaXplO1xyXG4gIEBJbnB1dCgndGl0bGUtb25lLWNvbG9yJykgdGl0bGVPbmVDb2xvciA9ICd3aGl0ZSc7XHJcbiAgQElucHV0KCd0aXRsZS1vbmUtd2VpZ2h0JykgdGl0bGVPbmVXZWlnaHQ7XHJcbiAgQElucHV0KCd0aXRsZS1vbmUtY3VzdG9tLWNsYXNzJykgdGl0bGVPbmVDdXN0b21DbGFzcyA9ICcnO1xyXG4gIEBJbnB1dCgndGl0bGUtY29udGVudCcpIHRpdGxlQ29udGVudCA9ICdFbnRlciBhbmltYWwgaW5mb3JtYXRpb246JztcclxuICBASW5wdXQoJ2hlYWRlci1zaXplJykgaGVhZGVyU2l6ZSA9ICcxNHB4JztcclxuICBASW5wdXQoJ2hlYWRlci1jb2xvcicpIGhlYWRlckNvbG9yO1xyXG4gIEBJbnB1dCgnaGVhZGVyLXdlaWdodCcpIGhlYWRlcldlaWdodDtcclxuICBASW5wdXQoJ3N0YXR1cy1iZy1zdHlsZScpIGNvbG9yUGFsbGV0ZSA9IFsnI2EzZGVkOCcsICcjZjhkYmI0JywgJyNjN2MzZmEnLCAnZ3JheSddO1xyXG4gIEBJbnB1dCgnc3RhdHVzJykgc3RhdHVzID0gWydjb21wbGV0ZWQnLCAnbm90LWNvbXBsZXRlZCcsICdwZW5kaW5nJywgJ290aGVycyddO1xyXG4gIEBJbnB1dCgndGFibGVEaXNhYmxlZCcpIHRhYmxlRGlzYWJsZWQgPSBbXTtcclxuICBASW5wdXQoJ2Rpc2FibGVIaWdobGlnaHRLZXknKSBkaXNhYmxlSGlnaGxpZ2h0S2V5ID0gZmFsc2U7XHJcbiAga2V5TGVuZ3RoOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBzZXQgZW5hYmxlRWRpdEluZGV4KHZhbCkge1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICt2YWw7IGkrKykge1xyXG4gICAgICAgIHRoaXMuZWRpdGFibGVbaV0gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBJbnB1dCgpIHR5cGVLZXk7XHJcbiAgQElucHV0KCkgdHlwZTtcclxuICBASW5wdXQoKSBkZWZhdWx0Q291bnQgPSAyO1xyXG4gIEBJbnB1dCgpIGFjdGlvbmtleSA9ICdhY3Rpb25zX1RibENvbEhkcic7XHJcbiAgQElucHV0KCkgZGlzYWJsZWRBcnJheUtleSA9IFtdO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGl0ZW1zKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2l0ZW1zIC0tLS0tLS0tLS0tLScsIHRoaXMuaXRlbXMpO1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuaXRlbXM7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBkYXRhLmZpbHRlcigodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZSB2YWxbJ3VuZGVmaW5lZCddO1xyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG4gIHNldCBpdGVtcyh2YWwpIHtcclxuICAgIGlmICh2YWwpIHtcclxuICAgICAgY29uc29sZS5sb2coJ19pdGVtcycsIHZhbCk7XHJcbiAgICAgIGlmICh2YWwpIHtcclxuICAgICAgICB2YWwuZmlsdGVyKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGRlbGV0ZSBlbFsndW5kZWZpbmVkJ107XHJcbiAgICAgICAgICByZXR1cm4gZWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5faXRlbXMgPSB2YWw7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5faXRlbXNbMF0pIHtcclxuICAgICAgdGhpcy5faXRlbXNLZXkgPSBPYmplY3Qua2V5cyh0aGlzLl9pdGVtc1swXSk7XHJcbiAgICAgIHRoaXMua2V5TGVuZ3RoID0gT2JqZWN0LmtleXModGhpcy5faXRlbXNLZXkpLmxlbmd0aDtcclxuICAgIH1cclxuICB9XHJcbiAgQElucHV0KCkgdW5pcXVlS2V5ID0gJ3NrdSc7XHJcblxyXG4gIEBJbnB1dCgpIHNlbGVjdGlvbktleTtcclxuICBASW5wdXQoKSBoaWdobGlnaHRlcktleTtcclxuICBASW5wdXQoKSBwYXRjaEtleTtcclxuICBASW5wdXQoKSBoaWRkZW5LZXkgPSBbXTtcclxuICBASW5wdXQoKSBlbmFibGVIaWdobGlnaHRlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGVuYWJsZUNvbnRyb2xzID0gdHJ1ZTtcclxuICBASW5wdXQoKSBlbmFibGVTZWxlY3RBbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzZWxlY3RBbGw7XHJcbiAgQElucHV0KCkga2V5RGF0YSA9IFtdO1xyXG4gIEBJbnB1dCgpIGNvbnRyb2xzU2l6ZTtcclxuICBASW5wdXQoKSBjb250cm9sQ3VzdG9tQ2xhc3M7XHJcbiAgQElucHV0KCkgZGlzYWJsZVNlbGVjdEFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHBhdGNoRW1wdHkgPSAnUHJvY2Vzc29yJztcclxuICBASW5wdXQoKSBoaWRlRXJyb3JNc2cgPSBmYWxzZTtcclxuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2Utb25lJykgZXJyb3JNZXNzYWdlT25lID0gJ3ZhbHVlIHNob3VsZCBiZSAgZ3JlYXRlciB0aGVuIDAnO1xyXG4gIEBPdXRwdXQoKSBzYXZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHN1Ym1pdERhdGEgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGZvcm1TdGF0dXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCd0YWJsZS1zb3J0YWJsZScpIHNvcnRhYmxlID0gJ2ZhbHNlJztcclxuICBfbnVsbCA9IG51bGw7XHJcbiAgQEhvc3RMaXN0ZW5lcigncGFzdGUnLCBbJyRldmVudCddKSBibG9ja1Bhc3RlKGU6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdlJywgZSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjb3B5JywgWyckZXZlbnQnXSkgYmxvY2tDb3B5KGU6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2N1dCcsIFsnJGV2ZW50J10pIGJsb2NrQ3V0KGU6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGFkZFRhYmxlKHZhbCwgZWRpdEluZGV4KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuZWRpdGFibGVbZWRpdEluZGV4ICsgaV0gPSB0cnVlO1xyXG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IHt9O1xyXG4gICAgICBjb25zdCB0eXBlS2V5ID0gdGhpcy50eXBlS2V5O1xyXG4gICAgICBPYmplY3Qua2V5cyh0eXBlS2V5KS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICBpZiAodHlwZUtleVtrZXldID09ICdDaGVja2JveCcpIHtcclxuICAgICAgICAgIHRlbXBsYXRlW2tleV0gPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVLZXlba2V5XSA9PSAnU3RyaW5nJyB8fCB0eXBlS2V5W2tleV0gPT0gJ051bWJlcicpIHtcclxuICAgICAgICAgIHRlbXBsYXRlW2tleV0gPSAnJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGVtcGxhdGVba2V5XSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLmVuYWJsZUNvbnRyb2xzKSB7XHJcbiAgICAgICAgdGVtcGxhdGVbdGhpcy5hY3Rpb25rZXldID0gJyc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5faXRlbXMucHVzaCh0ZW1wbGF0ZSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygnX2l0ZW1zJywgdGhpcy5faXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgY29uc29sZS5sb2coJ19pdGVtcycsIHRoaXMuX2l0ZW1zKTtcclxuICB9XHJcblxyXG4gIGVkaXQoaSwgaXRlbSkge1xyXG4gICAgY29uc29sZS5sb2coaSk7XHJcbiAgICBpZiAodGhpcy5lZGl0YWJsZVtpXSkge1xyXG4gICAgICB0aGlzLmVkaXRhYmxlW2ldID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2F2ZS5lbWl0KGl0ZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lZGl0YWJsZVtpXSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVkYXRhKGksIGl0ZW0pIHtcclxuICAgIGNvbnNvbGUubG9nKCdpbmRleCcsIGksIHRoaXMuX2l0ZW1zLmxlbmd0aCk7XHJcbiAgICBpZiAodGhpcy5faXRlbXMpIHtcclxuICAgICAgaWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCAhPSAxKSB7XHJcbiAgICAgICAgdGhpcy5faXRlbXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICBpbmRleDogaSxcclxuICAgICAgICAgIGRhdGE6IGl0ZW1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmVtb3ZlLmVtaXQoZGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgIGluZGV4OiBpLFxyXG4gICAgICAgICAgZGF0YTogaXRlbVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZW1vdmUuZW1pdChkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tWYWxpZChsaXN0KSB7XHJcbiAgICBpZiAodGhpcy5rZXlEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5rZXlEYXRhLnNvbWUodmFsID0+IHtcclxuICAgICAgICByZXR1cm4gdmFsLmtleSA9PSBsaXN0O1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdEFsbEFjdGlvbigpIHtcclxuICAgIGNvbnN0IHNlbGVjdEFsbCA9IHRoaXMuc2VsZWN0QWxsO1xyXG4gICAgaWYgKHNlbGVjdEFsbCkge1xyXG4gICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChlbGVtZW50LCBtYWluSW5kZXgpID0+IHtcclxuICAgICAgICBPYmplY3Qua2V5cyhlbGVtZW50KS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoa2V5ID09IHRoaXMuc2VsZWN0aW9uS2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudFtrZXldLCBpbmRleCwgbWFpbkluZGV4LCB0aGlzLl9pdGVtc1ttYWluSW5kZXhdW3RoaXMucGF0Y2hLZXldKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnRhYmxlRGlzYWJsZWRbbWFpbkluZGV4XSkge1xyXG4gICAgICAgICAgICAgIGVsZW1lbnRba2V5XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgaWYgKCFlbGVtZW50W3RoaXMucGF0Y2hLZXldKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50W3RoaXMucGF0Y2hLZXldID0gZWxlbWVudFt0aGlzLmhpZ2hsaWdodGVyS2V5XTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLl9pdGVtc1ttYWluSW5kZXhdW3RoaXMucGF0Y2hLZXldKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pdGVtc1ttYWluSW5kZXhdW3RoaXMucGF0Y2hLZXldID0gdGhpcy5faXRlbXNbbWFpbkluZGV4XVt0aGlzLmhpZ2hsaWdodGVyS2V5XTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGF0YScsIGVsZW1lbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoZWxlbWVudCkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICBpZiAoa2V5ID09IHRoaXMuc2VsZWN0aW9uS2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudFtrZXldKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnRhYmxlRGlzYWJsZWRbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudFtrZXldID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChrZXkgPT0gdGhpcy5wYXRjaEtleSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWxlbWVudCcsIGVsZW1lbnRba2V5XSk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy50YWJsZURpc2FibGVkW2luZGV4XSkge1xyXG4gICAgICAgICAgICAgIGVsZW1lbnRbdGhpcy5wYXRjaEtleV0gPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMudHlwZSA9PSAnUHJvY2Vzc29yJykge1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09IHRoaXMuaGlnaGxpZ2h0ZXJLZXkpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZWxlbWVudCcsIGVsZW1lbnRba2V5XSk7XHJcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLnRhYmxlRGlzYWJsZWRbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50W3RoaXMuaGlnaGxpZ2h0ZXJLZXldID0gJyc7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBlbGVtZW50LCB0aGlzLnBhdGNoS2V5KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGtIaWRkZW5LZXkoa2V5KSB7XHJcbiAgICBpZiAodGhpcy5oaWRkZW5LZXkubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmhpZGRlbktleS5zb21lKHZhbCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHZhbCA9PSBrZXk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgcGF0Y2hWYWx1ZShzZWxlY3Rpb24sIGRlZmF1bHRWYWx1ZSwgaW5kZXgsIGtleT8pIHtcclxuICAgIGNvbnNvbGUubG9nKCdwYXRjaFZhbHVlJywgc2VsZWN0aW9uLCBkZWZhdWx0VmFsdWUsIGluZGV4LCBrZXkpO1xyXG4gICAgaWYgKHNlbGVjdGlvbikge1xyXG4gICAgICB0aGlzLl9pdGVtc1tpbmRleF1bdGhpcy5wYXRjaEtleV0gPSBkZWZhdWx0VmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMudGFibGVEaXNhYmxlZFtpbmRleF0gJiYgIXRoaXMuX2l0ZW1zW2luZGV4XVt0aGlzLnBhdGNoS2V5XSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5faXRlbXNbaW5kZXhdW3RoaXMucGF0Y2hLZXldID0gdGhpcy5fbnVsbDtcclxuICAgICAgaWYgKHRoaXMudHlwZSA9PSB0aGlzLnBhdGNoRW1wdHkpIHtcclxuICAgICAgICB0aGlzLl9pdGVtc1tpbmRleF1ba2V5XSA9IHRoaXMuX251bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbmREYXRhKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2l0ZW1zO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCd0aGlzLmRpc2FibGVBcnJMaXN0JywgdGhpcy5kaXNhYmxlQXJyTGlzdCk7XHJcbiAgICB0aGlzLnN1Ym1pdERhdGEuZW1pdChkYXRhKTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKGtleSwgaW5kZXgpIHtcclxuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIGtleSA6Jywga2V5KTtcclxuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIGluZGV4IDonLCBpbmRleCk7XHJcbiAgICBpZiAoa2V5ID09IDApIHtcclxuICAgICAgdGhpcy5lcnJvcnZhbGlkYXRpb25JbmRleCA9IGluZGV4O1xyXG4gICAgICB0aGlzLmVycm9ydmFsaWRhdGlvbktleSA9IGtleTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZXJyb3J2YWxpZGF0aW9uSW5kZXggPSAnTi9BJztcclxuICAgICAgdGhpcy5lcnJvcnZhbGlkYXRpb25LZXkgPSAnTi9BJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrU3BjaWFsQ2hhcihldmVudCwgdHlwZSkge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQsIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgLyogZGlzYWJsZSAtIGUgKi9cclxuICAgIGlmICh0eXBlID09ICdOdW1iZXInKSB7XHJcbiAgICAgIGlmIChldmVudC5jaGFyQ29kZSA9PSAxMDEpIHtcclxuICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQuY2hhckNvZGUgPT0gNDUpIHtcclxuICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQuY2hhckNvZGUgPT0gNjkpIHtcclxuICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIHZhbGlkYXRpb24gZm9yIHN0cmluZyAgKi9cclxuICAgIGlmICh0eXBlID09ICdTdHJpbmcnKSB7XHJcbiAgICAgIGlmIChldmVudC5jaGFyQ29kZSA9PSAzNiB8fFxyXG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDk1IHx8XHJcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDIgfHxcclxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSA0NSB8fFxyXG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQzIHx8XHJcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDYgfHxcclxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSA0MCB8fFxyXG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQxIHx8XHJcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gMzkgfHxcclxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSAzMyB8fFxyXG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDMyXHJcbiAgICAgICkge1xyXG4gICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghKChldmVudC5jaGFyQ29kZSA+PSA2NSkgJiYgKGV2ZW50LmNoYXJDb2RlIDw9IDkwKSB8fFxyXG4gICAgICAoZXZlbnQuY2hhckNvZGUgPj0gOTcpICYmIChldmVudC5jaGFyQ29kZSA8PSAxMjIpIHx8IChldmVudC5jaGFyQ29kZSA+PSA0OCkgJiZcclxuICAgICAgKGV2ZW50LmNoYXJDb2RlIDw9IDU3KSkpIHtcclxuICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZXZlbnQucmV0dXJuVmFsdWUgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBzb3J0KGhlYWQsIHR5cGUsIHNvcnRPcHRpb24pIHtcclxuICAgIGNvbnNvbGUubG9nKCdEJywgaGVhZCwgdHlwZSwgc29ydE9wdGlvbik7XHJcbiAgICBpZiAodGhpcy5faXRlbXMpIHtcclxuICAgICAgaWYgKCEodHlwZSA9PSAnQ2hlY2tib3gnKSkge1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgIHJldHVybiArYVtoZWFkXSAtICtiW2hlYWRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlID09ICdOdW1iZXInKSB7XHJcbiAgICAgICAgaWYgKHNvcnRPcHRpb24gPT0gJ2Fzc2UnKSB7XHJcbiAgICAgICAgICB0aGlzLl9pdGVtcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhW2hlYWRdIC0gYltoZWFkXVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzb3J0T3B0aW9uID09ICdkZXNjJykge1xyXG4gICAgICAgICAgdGhpcy5faXRlbXMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYltoZWFkXSAtIGFbaGVhZF1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZSA9PSAnU3RyaW5nJykge1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgIGlmIChhW2hlYWRdLnRvTG93ZXJDYXNlKCkgPCBiW2hlYWRdLnRvTG93ZXJDYXNlKCkgJiYgc29ydE9wdGlvbiA9PSAnYXNzZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGJbaGVhZF0udG9Mb3dlckNhc2UoKSA8IGFbaGVhZF0udG9Mb3dlckNhc2UoKSAmJiBzb3J0T3B0aW9uID09ICdkZXNjJykge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGFbaGVhZF0udG9Mb3dlckNhc2UoKSA+IGJbaGVhZF0udG9Mb3dlckNhc2UoKSAmJiBzb3J0T3B0aW9uID09ICdhc3NlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChiW2hlYWRdLnRvTG93ZXJDYXNlKCkgPiBhW2hlYWRdLnRvTG93ZXJDYXNlKCkgJiYgc29ydE9wdGlvbiA9PSAnZGVzYycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGUgPT0gJ0RhdGUnKSB7XHJcbiAgICAgICAgY29uc3Qgc29ydGFibGUgPSB0aGlzLl9pdGVtcy5zb21lKChkYXRhVmFsKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YVZhbFtoZWFkXSAhPT0gJy0nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHsgc29ydGFibGUgfSk7XHJcblxyXG4gICAgICAgIGlmIChzb3J0YWJsZSkge1xyXG4gICAgICAgICAgdGhpcy5faXRlbXMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc29ydE9wdGlvbiA9PSAnYXNzZScpIHtcclxuICAgICAgICAgICAgICBpZiAoYltoZWFkXSA9PSAnLScpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuICg8YW55Pm5ldyBEYXRlKGJbaGVhZF0pIC0gPGFueT5uZXcgRGF0ZShhW2hlYWRdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNvcnRPcHRpb24gPT0gJ2Rlc2MnKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGFbaGVhZF0gPT0gJy0nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiAoPGFueT5uZXcgRGF0ZShhW2hlYWRdKSAtIDxhbnk+bmV3IERhdGUoYltoZWFkXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2godmFsID0+IHtcclxuICAgICAgICBkZWxldGUgdmFsWyd1bmRlZmluZWQnXTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9pdGVtcztcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBkYXRhLmZpbHRlcigodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3ZhbCcsIHZhbCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZEFycmF5S2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGlzYWJsZWRBcnJheUtleS5zb21lKGVsID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZWwnLCBlbCwgdmFsW3RoaXMudW5pcXVlS2V5XSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGVsID09IHZhbFt0aGlzLnVuaXF1ZUtleV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgIHRoaXMudGFibGVEaXNhYmxlZFtpbmRleF0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMudGFibGVEaXNhYmxlZFtpbmRleF0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJyB0aGlzLnRhYmxlRGlzYWJsZWQnLCB0aGlzLnRhYmxlRGlzYWJsZWQpXHJcbiAgICAgICAgICBkZWxldGUgdmFsWyd1bmRlZmluZWQnXTtcclxuICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJ3NvcnQgLScsIHRoaXMuX2l0ZW1zLCBoZWFkLCB0eXBlLCBzb3J0T3B0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=