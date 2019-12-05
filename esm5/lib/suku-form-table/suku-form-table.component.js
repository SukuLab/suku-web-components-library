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
                    return 0;
                }));
            }
            if (type == 'Date') {
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
                    // if (a == '-') {
                    //   return 0;
                    // }
                    // if (sortOption == 'asse') {
                    //   if (new Date(a[head]) < new Date(b[head])) {
                    //     return -1;
                    //   }
                    // }
                    // if (sortOption == 'desc') {
                    //   if (new Date(b[head]) < new Date(a[head])) {
                    //     return -1;
                    //   }
                    // }
                }));
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
                    template: "<div class=\"col p-0\">\r\n  <table>\r\n    <tr *ngIf=\"enableSelectAll && _items[0]\">\r\n      <td *ngFor=\"let list of _items[0] | keys; let i = index\"\r\n        [ngClass]=\"{ 'text-center': typeKey[list] == 'Checkbox' }\" [style.width.%]=\"(list==uniqueKey) ? 8 :\r\n        92/keyLength\">\r\n        <!-- checkbox -->\r\n        <span [ngClass]=\"{ 'align-checkbox': editable[j] }\" *ngIf=\"typeKey[list] == 'Checkbox'\">\r\n          <mat-checkbox (change)=\"sendData()\" color=\"primary\" [disabled]=\"disableSelectAll\" [(ngModel)]=\"selectAll\"\r\n            (change)=\"selectAllAction()\">\r\n            {{ \"selectAll_ChkBox\" | translate }}\r\n          </mat-checkbox>\r\n        </span>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n\r\n  <div class=\"header\">\r\n    <div class=\"col\" [ngClass]=\"{\r\n        'pt-3 pb-3': type == 'Processor',\r\n        'pb-4 pt-4': type != 'Processor'\r\n      }\">\r\n      <div class=\"row\">\r\n        <div class=\"col mt-auto mb-auto\">\r\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{ titleOneCustomClass }}\"\r\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{ titleOneId }}\">\r\n            {{ titleContent }}\r\n            <span class=\"pl-5\" id=\"processor\">\r\n              <span [ngClass]=\"{ 'align-checkbox': editable[j] }\" *ngIf=\"type == 'Processor'\">\r\n                <mat-checkbox (change)=\"sendData()\" color=\"primary\" [disabled]=\"disableSelectAll\"\r\n                  [(ngModel)]=\"selectAll\" (change)=\"selectAllAction()\">\r\n                  <span class=\"checkbox\">{{\r\n                    \"selectAll_ChkBox\" | translate\r\n                  }}</span>\r\n                </mat-checkbox>\r\n              </span>\r\n            </span>\r\n          </h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col p-0\">\r\n    <table class=\"table bg-white table-responsive-sm\">\r\n      <thead>\r\n        <tr>\r\n          <th *ngFor=\"let head of _items[0] | keys\" [ngClass]=\"{ 'text-center': typeKey[head] == 'Checkbox' }\"\r\n            data-sortable=\"true\" class=\"ellipsis\">\r\n            <span *ngIf=\"!(head === 'Sku')\" class=\"hovertxt\">{{ head | translate }}</span>\r\n            <span *ngIf=\"head === 'Sku'\" class=\"Sku hovertxt\">{{\r\n              head | translate\r\n            }}</span>\r\n            <span *ngIf=\"!(typeKey[head] == 'Checkbox')\" class=\"float-right c-pointer ml\">\r\n              <span *ngIf=\"sortable && !(head === 'actions_TblColHdr')\" (click)=\"sort(head, typeKey[head], 'asse')\"\r\n                class=\"fas fa-caret-up displayBlock\"></span>\r\n              <span *ngIf=\"sortable && !(head === 'actions_TblColHdr')\" (click)=\"sort(head, typeKey[head], 'desc')\"\r\n                class=\"fas fa-caret-down displayBlock lineH\"></span>\r\n            </span>\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of _items; let j = index\">\r\n          <!-- type == 'Producer' ? ''  : typeKey[list] == 'Checkbox'   ? list?.length * 0.45   : list?.length * 1 -->\r\n          <td [style.width.%]=\"(list==uniqueKey) ? 8 : 92/keyLength\"\r\n            [ngClass]=\"{'border-enable': checkValid(list),'text-center': typeKey[list] == 'Checkbox' }\"\r\n            *ngFor=\"let list of item | keys; let i = index\" [style.background-color]=\"\r\n              (checkValid(list)\r\n                ? item[selectionKey] &&\r\n                  item[highlighterKey] &&\r\n                  enableHighlighter\r\n                  ? '#a3ded8'\r\n                  : !(item[selectionKey] && enableHighlighter)\r\n                  ? '#d3d9dc'\r\n                  : '#f8dbb4'\r\n                : '') ||\r\n              (item[selectionKey] && list == patchKey\r\n                ? '#d3d9dc'\r\n                : list == patchKey && item[patchKey]\r\n                ? '#a3ded8'\r\n                : list == patchKey\r\n                ? '#f8dbb4'\r\n                : '')\">\r\n            <span *ngIf=\"!editable[j] && list != actionkey && typeKey[list] != 'Checkbox' && !checkValid(list) &&\r\n                list != patchKey && typeKey[list] != 'Date'\" id=\"{{ list | trim }}{{ j }}\">{{ item[list] }}\r\n            </span>\r\n\r\n            <!-- input -->\r\n            <span *ngIf=\"editable[j] &&  list != actionkey && (typeKey[list] == 'String' || typeKey[list] == 'Number')\">\r\n              <input (keyup)=\"sendData()\" (keypress)=\"checkSpcialChar($event, typeKey[list])\" class=\"form-control\"\r\n                [(ngModel)]=\"item[list]\" min=\"0\" [maxLength]=\"25\"\r\n                type=\"{{ typeKey[list] == 'Number' ? 'number' : 'text' }}\" (change)=\"validate(item[list], j)\"\r\n                [disabled]=\"tableDisabled[j]\" id=\"{{ list | trim }}{{ j }}\" *ngIf=\"editable[j] && list != actionkey &&\r\n                  (typeKey[list] == 'String' || typeKey[list] == 'Number')\" />\r\n              <p id=\"{{ j }}\" class=\"errorMessage\" *ngIf=\"item[list] && item[list] == 0 && !hideErrorMsg\">\r\n                {{ errorMessageOne | translate }}\r\n              </p>\r\n            </span>\r\n\r\n            <input type=\"date\" (keyup)=\"sendData()\" [disabled]=\"tableDisabled[j]\" data-date=\"\"\r\n              data-date-format=\"mm/dd/yyyy\" class=\"form-control\" id=\"{{ list | trim }}{{ j }}\" *ngIf=\"\r\n                editable[j] && list != actionkey && typeKey[list] == 'Date'\r\n              \" [(ngModel)]=\"item[list]\" />\r\n\r\n            <!-- checkbox -->\r\n            <span class=\"align-checkbox\" *ngIf=\"typeKey[list] == 'Checkbox'\">\r\n              <mat-checkbox color=\"primary\" id=\"{{ list | trim }}{{ j }}\" (change)=\"sendData();patchValue( item[selectionKey],\r\n                    item[highlighterKey],j, highlighterKey)\"\r\n                [disabled]=\"(!editable[j] && list != selectionKey) || tableDisabled[j]\" [(ngModel)]=\"item[list]\">\r\n              </mat-checkbox>\r\n            </span>\r\n\r\n            <!-- select -->\r\n            <select class=\"form-control\" (change)=\"sendData()\" [disabled]=\"tableDisabled[j]\" *ngIf=\"\r\n                editable[j] && list != actionkey && typeKey[list] != 'String' && typeKey[list] != 'Number' &&\r\n                  typeKey[list] != 'Checkbox' && typeKey[list] != 'Date' \" [(ngModel)]=\"item[list]\">\r\n              <option *ngFor=\"let c of typeKey[list]; let k = index\" id=\"asset{{ k }}\" [ngValue]=\"c\">\r\n                {{ c }}\r\n              </option>\r\n            </select>\r\n\r\n            <!-- input- highlighterKey -->\r\n            <span *ngIf=\"checkValid(list) && list != actionkey\">\r\n              <span *ngFor=\"let data of keyData; let dataIndex = index\">\r\n                <span *ngIf=\"list == data.key\">\r\n                  <input type=\"{{ typeKey[list] == 'Number' ? 'number' : 'text' }}\" id=\"asset{{ j }}{{ dataIndex }}\"\r\n                    (keyup)=\"sendData()\" [ngClass]=\"{\r\n                      disabled: !(\r\n                        (item[selectionKey]\r\n                          ? disableHighlightKey\r\n                          : item[selectionKey]) && !tableDisabled[j] ) }\"\r\n                    [disabled]=\" !((item[selectionKey]  ? disableHighlightKey  : item[selectionKey]) && !tableDisabled[j] )\"\r\n                    class=\"form-control\r\n                    sample\" id=\"{{ list | trim }}{{ j }}\" [(ngModel)]=\"item[data.key]\"\r\n                    (change)=\"validate(item[data.key], dataIndex)\" *ngIf=\"\r\n                      checkValid(list) && list != actionkey && highlighterKey\r\n                    \" (keypress)=\"checkSpcialChar($event, typeKey[list])\" min=\"0\" />\r\n                </span>\r\n                <p id=\"{{ dataIndex }}\" class=\"errorMessage\"\r\n                  *ngIf=\"item[data.key] && item[data.key] == 0 && !hideErrorMsg\">\r\n                  {{ errorMessageOne | translate }}\r\n                </p>\r\n              </span>\r\n            </span>\r\n\r\n            <!-- input -patchKey -->\r\n            <span *ngIf=\"list == patchKey && list != actionkey && patchKey\">\r\n              <input type=\"{{ typeKey[list] == 'Number' ? 'number' : 'text' }}\" id=\"asset{{ j }}{{ selectionKey }}\"\r\n                (keyup)=\"sendData()\" [ngClass]=\"{ disabled: item[selectionKey] }\"\r\n                [disabled]=\"item[selectionKey] || tableDisabled[j]\" class=\"form-control sample\"\r\n                [(ngModel)]=\"item[patchKey]\" *ngIf=\"list == patchKey && list != actionkey && patchKey\"\r\n                id=\"{{ selectionKey | trim }}{{ j }}Patch\" (change)=\"validate(item[patchKey], selectionKey)\" min=\"0\"\r\n                [maxLength]=\"10\" (keypress)=\"checkSpcialChar($event, typeKey[list])\" />\r\n              <p id=\"asset{{ j }}{{ selectionKey }}\" class=\"errorMessage\"\r\n                *ngIf=\"item[patchKey] && item[patchKey] == 0 && !hideErrorMsg\">\r\n                {{ errorMessageOne | translate }}\r\n              </p>\r\n            </span>\r\n\r\n            <span *ngIf=\"typeKey[list] == 'Date'\">\r\n              {{ item[list] | dateLocale: \"dateFormat\" }}\r\n            </span>\r\n\r\n            <span class=\"col p-0 pl-2\" (click)=\"edit(j, item); sendData()\"\r\n              *ngIf=\"list == actionkey && !editable[j] && !tableDisabled[j]\">\r\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{ j }}\" [style.font-size.rem]=\"controlsSize\"\r\n                [ngClass]=\"{ 'btn-edit': editable[j] }\">\r\n                {{ \"edit_TblBtn\" | translate }}\r\n              </span>\r\n            </span>\r\n            <span class=\"col p-0 pl-2\" *ngIf=\"list == actionkey && editable[j] && !tableDisabled[j]\">\r\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{ j }}\" [style.font-size.rem]=\"controlsSize\"\r\n                (click)=\"edit(j, item); sendData()\" [ngClass]=\"{ 'btn-edit': editable[j] }\">\r\n                {{ \"save_TblBtn\" | translate }}\r\n              </span>\r\n            </span>\r\n            <span class=\"col c-pointer pl-4\" *ngIf=\"list == actionkey && !tableDisabled[j]\">\r\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{ j }}\" [style.font-size.rem]=\"controlsSize\"\r\n                (click)=\"removedata(j, item); sendData()\" [ngClass]=\"{ 'btn-edit': editable[j] }\">\r\n                {{ \"remove_TblBtn\" | translate }}\r\n              </span>\r\n            </span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"col text-right\" *ngIf=\"enableControls\">\r\n    <span class=\"p-2\">\r\n      <a class=\"secondary-btn\" id=\"addOneRow\" [style.font-size.rem]=\"controlsSize\" (click)=\"addTable(1, _items?.length)\"\r\n        color=\"primary\">{{ \"add1Row_TblBtn\" | translate }}</a>\r\n    </span>\r\n    <span class=\"p-2\">\r\n      <a class=\"secondary-btn\" id=\"addTenRow\" [style.font-size.rem]=\"controlsSize\"\r\n        (click)=\"addTable(10, _items?.length)\" color=\"primary\">{{ \"add10Rows_TblBtn\" | translate }}</a>\r\n    </span>\r\n  </div>\r\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.header{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.title{font-family:var(--suku-primary-font);font-weight:600;font-size:var(--suku-font-size-5);text-transform:uppercase}.table{font-family:var(--suku-primary-font);box-shadow:0 1px 2px 0 rgba(0,0,0,.1)}table td{padding-left:1%}.btn-edit{line-height:2!important}input,select{width:100%;height:inherit!important}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0}td{width:15%}.form-control:focus{border:1px solid #ced4da;border-color:#ced4da!important;box-shadow:none!important}:host ::ng-deep.mat-checkbox{vertical-align:sub!important}th:last-child{width:12%!important}td:last-child{width:13%!important}button:focus{outline:0!important}.secondary-btn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:var(--suku-text-heading);border-bottom:3.5px solid;border-color:var(--suku-primary-color);word-break:break-word!important;cursor:pointer}.align-checkbox{font-size:18px}.c-pointer{cursor:pointer}table>tbody>tr>td{flex-wrap:wrap!important}.sample{background:inherit!important;border:none!important}.disabled{cursor:not-allowed}select option{border:1px solid #757575}option{border:1px solid #aaa;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,.1);color:#555}.errorMessage{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-1);color:red;padding:0 .75rem;margin-top:-2px!important;margin-bottom:0!important}.table th{padding:.5rem .5rem .5rem 1.25rem;border-bottom:2px solid #dee2e68a;border-left:1px solid #f2f2f2}.table td{padding:.5rem 1rem;border:1px solid #f2f2f2}.border-enable{border:1px solid #92929240}.hidden{display:none}table{width:100%}.checkbox{font-family:var(--suku-primary-font);color:#fff}:host #processor{font-family:var(--suku-primary-font);font-weight:500!important}:host #processor ::ng-deep.mat-checkbox-frame{border-color:rgba(255,255,255,.54)!important}.Sku{text-transform:uppercase}.float-right{float:right}.displayBlock{display:block}.lineH{line-height:.1}:host ::ng-deep .table td{border-top:1px solid #bbbbbbcc;border:1px solid #f2f2f2!important}:host ::ng-deep .table thead th{border-bottom:2px solid #dee2e68a;border-left:1px solid #f2f2f2}.ml{margin-left:.8rem}.ellipsis{position:relative}.ellipsis:before{content:'&nbsp;';visibility:hidden}.ellipsis span.hovertxt{position:absolute;left:.85rem;right:1.8rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ellipsis span.hovertxt:hover{background:#fff;box-shadow:1.2px 2px #f2f2f2;position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-width:300px;z-index:4;margin-top:-1rem;padding:1rem;border-radius:3px;white-space:normal!important;word-break:break-word;left:0!important;box-shadow:0 3px 4px 0 rgba(0,0,0,.2)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWZvcm0tdGFibGUvc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGO0lBdUdFO1FBaEdBLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFFWixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBR2QsbUJBQWMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBR0Esa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFFakIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLGlCQUFZLEdBQUcsMkJBQTJCLENBQUM7UUFDN0MsZUFBVSxHQUFHLE1BQU0sQ0FBQztRQUdoQixpQkFBWSxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEUsV0FBTSxHQUFHLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEQsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDYix3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFZakQsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsY0FBUyxHQUFHLG1CQUFtQixDQUFDO1FBQ2hDLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQTZCdEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUtsQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2Ysc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXhCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHYixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsZUFBVSxHQUFHLFdBQVcsQ0FBQztRQUN6QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNGLG9CQUFlLEdBQUcsaUNBQWlDLENBQUM7UUFDdEUsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFHLE9BQU8sQ0FBQztRQUM1QyxVQUFLLEdBQUcsSUFBSSxDQUFDO0lBY2IsQ0FBQztJQTdFRCxzQkFDSSxtREFBZTs7Ozs7UUFEbkIsVUFDb0IsR0FBRztZQUNyQixJQUFJLEdBQUcsRUFBRTtnQkFDUCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2lCQUN6QjthQUNGO1FBQ0gsQ0FBQzs7O09BQUE7SUFNRCxzQkFDSSx5Q0FBSzs7OztRQURUO1lBRUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O2dCQUN4QyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDdkIsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLE1BQU07Ozs7O2dCQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUs7b0JBQ3JCLE9BQU8sR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN4QixPQUFPLEdBQUcsQ0FBQztnQkFDYixDQUFDLEVBQUMsQ0FBQzthQUNKO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDOzs7OztRQUNELFVBQVUsR0FBRztZQUNYLElBQUksR0FBRyxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLEdBQUcsRUFBRTtvQkFDUCxHQUFHLENBQUMsTUFBTTs7Ozs7b0JBQUMsVUFBQyxFQUFFLEVBQUUsS0FBSzt3QkFDbkIsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ3ZCLE9BQU8sRUFBRSxDQUFDO29CQUNaLENBQUMsRUFBQyxDQUFDO2lCQUNKO2dCQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2FBQ25CO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzthQUNyRDtRQUNILENBQUM7OztPQWhCQTs7Ozs7SUF3Q2tDLDJDQUFVOzs7O0lBQTdDLFVBQThDLENBQWdCO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVpQywwQ0FBUzs7OztJQUEzQyxVQUE0QyxDQUFnQjtRQUMxRCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFZ0MseUNBQVE7Ozs7SUFBekMsVUFBMEMsQ0FBZ0I7UUFDeEQsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFJRCx5Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7Ozs7SUFFRCx5Q0FBUTs7Ozs7SUFBUixVQUFTLEdBQUcsRUFBRSxTQUFTO2dDQUNaLENBQUM7WUFDUixPQUFLLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDOztnQkFDOUIsUUFBUSxHQUFHLEVBQUU7O2dCQUNiLE9BQU8sR0FBRyxPQUFLLE9BQU87WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxHQUFHO2dCQUMvQixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxVQUFVLEVBQUU7b0JBQzlCLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7aUJBQ3ZCO3FCQUFNLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVEsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksUUFBUSxFQUFFO29CQUMvRCxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUNwQjtxQkFBTTtvQkFDTCxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUNwQjtZQUNILENBQUMsRUFBQyxDQUFDO1lBQ0gsSUFBSSxPQUFLLGNBQWMsRUFBRTtnQkFDdkIsUUFBUSxDQUFDLE9BQUssU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQy9CO1lBQ0QsT0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLENBQUM7O1FBakJELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFO29CQUFuQixDQUFDO1NBaUJUO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCx1Q0FBTTs7O0lBQU47UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRUQscUNBQUk7Ozs7O0lBQUosVUFBSyxDQUFDLEVBQUUsSUFBSTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEI7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsMkNBQVU7Ozs7O0lBQVYsVUFBVyxDQUFDLEVBQUUsSUFBSTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOztvQkFDbkIsSUFBSSxHQUFHO29CQUNYLEtBQUssRUFBRSxDQUFDO29CQUNSLElBQUksRUFBRSxJQUFJO2lCQUNYO2dCQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hCO2lCQUFNOztvQkFDQyxJQUFJLEdBQUc7b0JBQ1gsS0FBSyxFQUFFLENBQUM7b0JBQ1IsSUFBSSxFQUFFLElBQUk7aUJBQ1g7Z0JBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDeEI7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsMkNBQVU7Ozs7SUFBVixVQUFXLElBQUk7UUFDYixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7Z0JBQ3JCLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFBLEdBQUc7Z0JBQ2xDLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUM7WUFDekIsQ0FBQyxFQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUM7U0FDZjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7Ozs7SUFFRCxnREFBZTs7O0lBQWY7UUFBQSxpQkErQ0M7O1lBOUNPLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUztRQUNoQyxJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7Ozs7WUFBQyxVQUFDLE9BQU8sRUFBRSxTQUFTO2dCQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU87Ozs7O2dCQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUs7b0JBQ3RDLElBQUksR0FBRyxJQUFJLEtBQUksQ0FBQyxZQUFZLEVBQUU7d0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQzlGLElBQUksQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFOzRCQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDOzRCQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQ0FDM0IsT0FBTyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDOzZCQUN2RDs0QkFDRCxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0NBQzFDLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDOzZCQUNyRjt5QkFDRjtxQkFDRjtnQkFDSCxDQUFDLEVBQUMsQ0FBQztnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMvQixDQUFDLEVBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7O1lBQUMsVUFBQyxPQUFPLEVBQUUsS0FBSztnQkFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsR0FBRztvQkFDL0IsSUFBSSxHQUFHLElBQUksS0FBSSxDQUFDLFlBQVksRUFBRTt3QkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFOzRCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO3lCQUN0QjtxQkFDRjtvQkFDRCxJQUFJLEdBQUcsSUFBSSxLQUFJLENBQUMsUUFBUSxFQUFFO3dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDckMsSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7NEJBQzlCLE9BQU8sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO3lCQUM3QjtxQkFDRjtvQkFDRCxJQUFJLEtBQUksQ0FBQyxJQUFJLElBQUksV0FBVyxFQUFFO3dCQUM1QixJQUFJLEdBQUcsSUFBSSxLQUFJLENBQUMsY0FBYyxFQUFFOzRCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDckMsSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0NBQzlCLE9BQU8sQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDOzZCQUNuQzt5QkFDRjtxQkFDRjtnQkFDSCxDQUFDLEVBQUMsQ0FBQztnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVELDZDQUFZOzs7O0lBQVosVUFBYSxHQUFHO1FBQ2QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2dCQUN2QixNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxHQUFHO2dCQUNwQyxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUM7WUFDcEIsQ0FBQyxFQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUM7U0FDZjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7Ozs7Ozs7O0lBRUssMkNBQVU7Ozs7Ozs7SUFBaEIsVUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsR0FBSTs7O2dCQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxTQUFTLEVBQUU7b0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsWUFBWSxDQUFDO2lCQUNsRDtxQkFBTTtvQkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUNwRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztxQkFDeEI7b0JBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDL0MsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7d0JBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztxQkFDdEM7aUJBQ0Y7Ozs7S0FDRjs7OztJQUVELHlDQUFROzs7SUFBUjs7WUFDUSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFFeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7O0lBRUQseUNBQVE7Ozs7O0lBQVIsVUFBUyxHQUFHLEVBQUUsS0FBSztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7WUFDbEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztTQUMvQjthQUFNO1lBQ0wsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztZQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsZ0RBQWU7Ozs7O0lBQWYsVUFBZ0IsS0FBSyxFQUFFLElBQUk7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2QyxpQkFBaUI7UUFDakIsSUFBSSxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3BCLElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxHQUFHLEVBQUU7Z0JBQ3pCLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBRTtnQkFDeEIsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQzFCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRSxFQUFFO2dCQUN4QixLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDMUIsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBRUQsNEJBQTRCO1FBQzVCLElBQUksSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUNwQixJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRTtnQkFDdEIsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFO2dCQUNwQixLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ3BCLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRTtnQkFDcEIsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFO2dCQUNwQixLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ3BCLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRTtnQkFDcEIsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFO2dCQUNwQixLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ3BCLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRTtnQkFDcEIsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLEVBQ3BCO2dCQUNBLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFFRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztZQUNwRCxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7WUFDM0UsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDekIsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDMUIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVELHFDQUFJOzs7Ozs7SUFBSixVQUFLLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVTtRQUEzQixpQkF3RkM7UUF2RkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN6QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksVUFBVSxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTs7Ozs7Z0JBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztvQkFDcEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxFQUFDLENBQUM7YUFDSjtZQUNELElBQUksSUFBSSxJQUFJLFFBQVEsRUFBRTtnQkFDcEIsSUFBSSxVQUFVLElBQUksTUFBTSxFQUFFO29CQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7O29CQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7d0JBQzdCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDMUIsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsSUFBSSxVQUFVLElBQUksTUFBTSxFQUFFO29CQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7O29CQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7d0JBQzdCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDMUIsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7YUFDRjtZQUNELElBQUksSUFBSSxJQUFJLFFBQVEsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7OztnQkFBQyxVQUFVLENBQUMsRUFBRSxDQUFDO29CQUM3QixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksVUFBVSxJQUFJLE1BQU0sRUFBRTt3QkFDekUsT0FBTyxDQUFDLENBQUMsQ0FBQztxQkFDWDtvQkFDRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksVUFBVSxJQUFJLE1BQU0sRUFBRTt3QkFDekUsT0FBTyxDQUFDLENBQUMsQ0FBQztxQkFDWDtvQkFDRCxPQUFPLENBQUMsQ0FBQztnQkFDWCxDQUFDLEVBQUMsQ0FBQzthQUNKO1lBQ0QsSUFBSSxJQUFJLElBQUksTUFBTSxFQUFFO2dCQUVsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7O2dCQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQ3BCLElBQUksVUFBVSxJQUFJLE1BQU0sRUFBRTt3QkFDeEIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFOzRCQUNsQixPQUFPLENBQUMsQ0FBQyxDQUFDO3lCQUNYO3dCQUNELE9BQU8sQ0FBQyxtQkFBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQSxHQUFHLG1CQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFBLENBQUMsQ0FBQztxQkFDMUQ7b0JBQ0QsSUFBSSxVQUFVLElBQUksTUFBTSxFQUFFO3dCQUN4QixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUU7NEJBQ2xCLE9BQU8sQ0FBQyxDQUFDLENBQUM7eUJBQ1g7d0JBQ0QsT0FBTyxDQUFDLG1CQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFBLEdBQUcsbUJBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUEsQ0FBQyxDQUFDO3FCQUMxRDtvQkFFRCxrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2QsSUFBSTtvQkFDSiw4QkFBOEI7b0JBQzlCLGlEQUFpRDtvQkFDakQsaUJBQWlCO29CQUNqQixNQUFNO29CQUNOLElBQUk7b0JBQ0osOEJBQThCO29CQUM5QixpREFBaUQ7b0JBQ2pELGlCQUFpQjtvQkFDakIsTUFBTTtvQkFDTixJQUFJO2dCQUNOLENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLEdBQUc7Z0JBQ3JCLE9BQU8sR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzFCLENBQUMsRUFBQyxDQUFDOztnQkFDRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU07WUFDeEIsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLE1BQU07Ozs7O2dCQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUs7b0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixJQUFJLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRTs7NEJBQ25CLE1BQU0sR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSTs7Ozt3QkFBQyxVQUFBLEVBQUU7NEJBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7NEJBQzNDLE9BQU8sRUFBRSxJQUFJLEdBQUcsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ25DLENBQUMsRUFBQzt3QkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDOUIsSUFBSSxNQUFNLEVBQUU7NEJBQ1YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7eUJBQ2xDOzZCQUFNOzRCQUNMLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO3lCQUNuQztxQkFDRjtvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtvQkFDdEQsT0FBTyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3hCLE9BQU8sR0FBRyxDQUFDO2dCQUNiLENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOztnQkF0WkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHVpV0FBK0M7O2lCQUVoRDs7Ozs7NkJBU0UsS0FBSyxTQUFDLGNBQWM7K0JBQ3BCLEtBQUssU0FBQyxnQkFBZ0I7Z0NBQ3RCLEtBQUssU0FBQyxpQkFBaUI7aUNBQ3ZCLEtBQUssU0FBQyxrQkFBa0I7c0NBQ3hCLEtBQUssU0FBQyx3QkFBd0I7K0JBQzlCLEtBQUssU0FBQyxlQUFlOzZCQUNyQixLQUFLLFNBQUMsYUFBYTs4QkFDbkIsS0FBSyxTQUFDLGNBQWM7K0JBQ3BCLEtBQUssU0FBQyxlQUFlOytCQUNyQixLQUFLLFNBQUMsaUJBQWlCO3lCQUN2QixLQUFLLFNBQUMsUUFBUTtnQ0FDZCxLQUFLLFNBQUMsZUFBZTtzQ0FDckIsS0FBSyxTQUFDLHFCQUFxQjtrQ0FFM0IsS0FBSzswQkFRTCxLQUFLO3VCQUNMLEtBQUs7K0JBQ0wsS0FBSzs0QkFDTCxLQUFLO21DQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkE0QkwsS0FBSzsrQkFFTCxLQUFLO2lDQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLO29DQUNMLEtBQUs7aUNBQ0wsS0FBSztrQ0FDTCxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSzsrQkFDTCxLQUFLO3FDQUNMLEtBQUs7bUNBQ0wsS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7a0NBQ0wsS0FBSyxTQUFDLG1CQUFtQjt1QkFDekIsTUFBTTt5QkFDTixNQUFNOzZCQUNOLE1BQU07NkJBQ04sTUFBTTsyQkFDTixLQUFLLFNBQUMsZ0JBQWdCOzZCQUV0QixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzRCQUtoQyxZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDOzJCQUkvQixZQUFZLFNBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQXFUakMsNkJBQUM7Q0FBQSxBQXpaRCxJQXlaQztTQXBaWSxzQkFBc0I7OztJQUNqQyxtQ0FBRTs7SUFDRix3Q0FBWTs7SUFDWiwyQ0FBVTs7SUFDViwwQ0FBYzs7SUFDZCxzREFBcUI7O0lBQ3JCLG9EQUFtQjs7SUFDbkIsZ0RBQTBCOztJQUMxQiw0Q0FBa0M7O0lBQ2xDLDhDQUFzQzs7SUFDdEMsK0NBQWtEOztJQUNsRCxnREFBMEM7O0lBQzFDLHFEQUEwRDs7SUFDMUQsOENBQW1FOztJQUNuRSw0Q0FBMEM7O0lBQzFDLDZDQUFtQzs7SUFDbkMsOENBQXFDOztJQUNyQyw4Q0FBbUY7O0lBQ25GLHdDQUE4RTs7SUFDOUUsK0NBQTJDOztJQUMzQyxxREFBMEQ7O0lBQzFELDJDQUFrQjs7SUFTbEIseUNBQWlCOztJQUNqQixzQ0FBYzs7SUFDZCw4Q0FBMEI7O0lBQzFCLDJDQUF5Qzs7SUFDekMsa0RBQStCOztJQTZCL0IsMkNBQTJCOztJQUUzQiw4Q0FBc0I7O0lBQ3RCLGdEQUF3Qjs7SUFDeEIsMENBQWtCOztJQUNsQiwyQ0FBd0I7O0lBQ3hCLG1EQUFtQzs7SUFDbkMsZ0RBQStCOztJQUMvQixpREFBaUM7O0lBQ2pDLDJDQUFtQjs7SUFDbkIseUNBQXNCOztJQUN0Qiw4Q0FBc0I7O0lBQ3RCLG9EQUE0Qjs7SUFDNUIsa0RBQWtDOztJQUNsQyw0Q0FBa0M7O0lBQ2xDLDhDQUE4Qjs7SUFDOUIsaURBQWdGOztJQUNoRixzQ0FBb0M7O0lBQ3BDLHdDQUFzQzs7SUFDdEMsNENBQTBDOztJQUMxQyw0Q0FBMEM7O0lBQzFDLDBDQUE0Qzs7SUFDNUMsdUNBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3UtZm9ybS10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZm9ybS10YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VGb3JtVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGo7XHJcbiAgX2l0ZW1zID0gW107XHJcbiAgX2l0ZW1zS2V5O1xyXG4gIGVkaXRhYmxlID0gW107XHJcbiAgZXJyb3J2YWxpZGF0aW9uSW5kZXg7XHJcbiAgZXJyb3J2YWxpZGF0aW9uS2V5O1xyXG4gIGRpc2FibGVBcnJMaXN0ID0gWzc0NDUxOF07XHJcbiAgQElucHV0KCd0aXRsZS1vbmUtaWQnKSB0aXRsZU9uZUlkO1xyXG4gIEBJbnB1dCgndGl0bGUtb25lLXNpemUnKSB0aXRsZU9uZVNpemU7XHJcbiAgQElucHV0KCd0aXRsZS1vbmUtY29sb3InKSB0aXRsZU9uZUNvbG9yID0gJ3doaXRlJztcclxuICBASW5wdXQoJ3RpdGxlLW9uZS13ZWlnaHQnKSB0aXRsZU9uZVdlaWdodDtcclxuICBASW5wdXQoJ3RpdGxlLW9uZS1jdXN0b20tY2xhc3MnKSB0aXRsZU9uZUN1c3RvbUNsYXNzID0gJyc7XHJcbiAgQElucHV0KCd0aXRsZS1jb250ZW50JykgdGl0bGVDb250ZW50ID0gJ0VudGVyIGFuaW1hbCBpbmZvcm1hdGlvbjonO1xyXG4gIEBJbnB1dCgnaGVhZGVyLXNpemUnKSBoZWFkZXJTaXplID0gJzE0cHgnO1xyXG4gIEBJbnB1dCgnaGVhZGVyLWNvbG9yJykgaGVhZGVyQ29sb3I7XHJcbiAgQElucHV0KCdoZWFkZXItd2VpZ2h0JykgaGVhZGVyV2VpZ2h0O1xyXG4gIEBJbnB1dCgnc3RhdHVzLWJnLXN0eWxlJykgY29sb3JQYWxsZXRlID0gWycjYTNkZWQ4JywgJyNmOGRiYjQnLCAnI2M3YzNmYScsICdncmF5J107XHJcbiAgQElucHV0KCdzdGF0dXMnKSBzdGF0dXMgPSBbJ2NvbXBsZXRlZCcsICdub3QtY29tcGxldGVkJywgJ3BlbmRpbmcnLCAnb3RoZXJzJ107XHJcbiAgQElucHV0KCd0YWJsZURpc2FibGVkJykgdGFibGVEaXNhYmxlZCA9IFtdO1xyXG4gIEBJbnB1dCgnZGlzYWJsZUhpZ2hsaWdodEtleScpIGRpc2FibGVIaWdobGlnaHRLZXkgPSBmYWxzZTtcclxuICBrZXlMZW5ndGg6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHNldCBlbmFibGVFZGl0SW5kZXgodmFsKSB7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgK3ZhbDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0YWJsZVtpXSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgQElucHV0KCkgdHlwZUtleTtcclxuICBASW5wdXQoKSB0eXBlO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRDb3VudCA9IDI7XHJcbiAgQElucHV0KCkgYWN0aW9ua2V5ID0gJ2FjdGlvbnNfVGJsQ29sSGRyJztcclxuICBASW5wdXQoKSBkaXNhYmxlZEFycmF5S2V5ID0gW107XHJcbiAgQElucHV0KClcclxuICBnZXQgaXRlbXMoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnaXRlbXMgLS0tLS0tLS0tLS0tJywgdGhpcy5pdGVtcyk7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5pdGVtcztcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGRhdGEuZmlsdGVyKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgZGVsZXRlIHZhbFsndW5kZWZpbmVkJ107XHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbiAgc2V0IGl0ZW1zKHZhbCkge1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnX2l0ZW1zJywgdmFsKTtcclxuICAgICAgaWYgKHZhbCkge1xyXG4gICAgICAgIHZhbC5maWx0ZXIoKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgZGVsZXRlIGVsWyd1bmRlZmluZWQnXTtcclxuICAgICAgICAgIHJldHVybiBlbDtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9pdGVtcyA9IHZhbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9pdGVtc1swXSkge1xyXG4gICAgICB0aGlzLl9pdGVtc0tleSA9IE9iamVjdC5rZXlzKHRoaXMuX2l0ZW1zWzBdKTtcclxuICAgICAgdGhpcy5rZXlMZW5ndGggPSBPYmplY3Qua2V5cyh0aGlzLl9pdGVtc0tleSkubGVuZ3RoO1xyXG4gICAgfVxyXG4gIH1cclxuICBASW5wdXQoKSB1bmlxdWVLZXkgPSAnc2t1JztcclxuXHJcbiAgQElucHV0KCkgc2VsZWN0aW9uS2V5O1xyXG4gIEBJbnB1dCgpIGhpZ2hsaWdodGVyS2V5O1xyXG4gIEBJbnB1dCgpIHBhdGNoS2V5O1xyXG4gIEBJbnB1dCgpIGhpZGRlbktleSA9IFtdO1xyXG4gIEBJbnB1dCgpIGVuYWJsZUhpZ2hsaWdodGVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZW5hYmxlQ29udHJvbHMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGVuYWJsZVNlbGVjdEFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNlbGVjdEFsbDtcclxuICBASW5wdXQoKSBrZXlEYXRhID0gW107XHJcbiAgQElucHV0KCkgY29udHJvbHNTaXplO1xyXG4gIEBJbnB1dCgpIGNvbnRyb2xDdXN0b21DbGFzcztcclxuICBASW5wdXQoKSBkaXNhYmxlU2VsZWN0QWxsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcGF0Y2hFbXB0eSA9ICdQcm9jZXNzb3InO1xyXG4gIEBJbnB1dCgpIGhpZGVFcnJvck1zZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS1vbmUnKSBlcnJvck1lc3NhZ2VPbmUgPSAndmFsdWUgc2hvdWxkIGJlICBncmVhdGVyIHRoZW4gMCc7XHJcbiAgQE91dHB1dCgpIHNhdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgc3VibWl0RGF0YSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZm9ybVN0YXR1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASW5wdXQoJ3RhYmxlLXNvcnRhYmxlJykgc29ydGFibGUgPSAnZmFsc2UnO1xyXG4gIF9udWxsID0gbnVsbDtcclxuICBASG9zdExpc3RlbmVyKCdwYXN0ZScsIFsnJGV2ZW50J10pIGJsb2NrUGFzdGUoZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgY29uc29sZS5sb2coJ2UnLCBlKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NvcHknLCBbJyRldmVudCddKSBibG9ja0NvcHkoZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY3V0JywgWyckZXZlbnQnXSkgYmxvY2tDdXQoZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgYWRkVGFibGUodmFsLCBlZGl0SW5kZXgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsOyBpKyspIHtcclxuICAgICAgdGhpcy5lZGl0YWJsZVtlZGl0SW5kZXggKyBpXSA9IHRydWU7XHJcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0ge307XHJcbiAgICAgIGNvbnN0IHR5cGVLZXkgPSB0aGlzLnR5cGVLZXk7XHJcbiAgICAgIE9iamVjdC5rZXlzKHR5cGVLZXkpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlS2V5W2tleV0gPT0gJ0NoZWNrYm94Jykge1xyXG4gICAgICAgICAgdGVtcGxhdGVba2V5XSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZUtleVtrZXldID09ICdTdHJpbmcnIHx8IHR5cGVLZXlba2V5XSA9PSAnTnVtYmVyJykge1xyXG4gICAgICAgICAgdGVtcGxhdGVba2V5XSA9ICcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0ZW1wbGF0ZVtrZXldID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMuZW5hYmxlQ29udHJvbHMpIHtcclxuICAgICAgICB0ZW1wbGF0ZVt0aGlzLmFjdGlvbmtleV0gPSAnJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9pdGVtcy5wdXNoKHRlbXBsYXRlKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCdfaXRlbXMnLCB0aGlzLl9pdGVtcyk7XHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnX2l0ZW1zJywgdGhpcy5faXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgZWRpdChpLCBpdGVtKSB7XHJcbiAgICBjb25zb2xlLmxvZyhpKTtcclxuICAgIGlmICh0aGlzLmVkaXRhYmxlW2ldKSB7XHJcbiAgICAgIHRoaXMuZWRpdGFibGVbaV0gPSBmYWxzZTtcclxuICAgICAgdGhpcy5zYXZlLmVtaXQoaXRlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVkaXRhYmxlW2ldID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZWRhdGEoaSwgaXRlbSkge1xyXG4gICAgY29uc29sZS5sb2coJ2luZGV4JywgaSwgdGhpcy5faXRlbXMubGVuZ3RoKTtcclxuICAgIGlmICh0aGlzLl9pdGVtcykge1xyXG4gICAgICBpZiAodGhpcy5faXRlbXMubGVuZ3RoICE9IDEpIHtcclxuICAgICAgICB0aGlzLl9pdGVtcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgIGluZGV4OiBpLFxyXG4gICAgICAgICAgZGF0YTogaXRlbVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZW1vdmUuZW1pdChkYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgICBkYXRhOiBpdGVtXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlbW92ZS5lbWl0KGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja1ZhbGlkKGxpc3QpIHtcclxuICAgIGlmICh0aGlzLmtleURhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmtleURhdGEuc29tZSh2YWwgPT4ge1xyXG4gICAgICAgIHJldHVybiB2YWwua2V5ID09IGxpc3Q7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0QWxsQWN0aW9uKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0QWxsID0gdGhpcy5zZWxlY3RBbGw7XHJcbiAgICBpZiAoc2VsZWN0QWxsKSB7XHJcbiAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGVsZW1lbnQsIG1haW5JbmRleCkgPT4ge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGVsZW1lbnQpLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGlmIChrZXkgPT0gdGhpcy5zZWxlY3Rpb25LZXkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VsZW1lbnQnLCBlbGVtZW50W2tleV0sIGluZGV4LCBtYWluSW5kZXgsIHRoaXMuX2l0ZW1zW21haW5JbmRleF1bdGhpcy5wYXRjaEtleV0pO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMudGFibGVEaXNhYmxlZFttYWluSW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudFtrZXldID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBpZiAoIWVsZW1lbnRbdGhpcy5wYXRjaEtleV0pIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRbdGhpcy5wYXRjaEtleV0gPSBlbGVtZW50W3RoaXMuaGlnaGxpZ2h0ZXJLZXldO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoIXRoaXMuX2l0ZW1zW21haW5JbmRleF1bdGhpcy5wYXRjaEtleV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW1zW21haW5JbmRleF1bdGhpcy5wYXRjaEtleV0gPSB0aGlzLl9pdGVtc1ttYWluSW5kZXhdW3RoaXMuaGlnaGxpZ2h0ZXJLZXldO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZWxlbWVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICBPYmplY3Qua2V5cyhlbGVtZW50KS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgIGlmIChrZXkgPT0gdGhpcy5zZWxlY3Rpb25LZXkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VsZW1lbnQnLCBlbGVtZW50W2tleV0pO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMudGFibGVEaXNhYmxlZFtpbmRleF0pIHtcclxuICAgICAgICAgICAgICBlbGVtZW50W2tleV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGtleSA9PSB0aGlzLnBhdGNoS2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudFtrZXldKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnRhYmxlRGlzYWJsZWRbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudFt0aGlzLnBhdGNoS2V5XSA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy50eXBlID09ICdQcm9jZXNzb3InKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT0gdGhpcy5oaWdobGlnaHRlcktleSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudFtrZXldKTtcclxuICAgICAgICAgICAgICBpZiAoIXRoaXMudGFibGVEaXNhYmxlZFtpbmRleF0pIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRbdGhpcy5oaWdobGlnaHRlcktleV0gPSAnJztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGF0YScsIGVsZW1lbnQsIHRoaXMucGF0Y2hLZXkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoa0hpZGRlbktleShrZXkpIHtcclxuICAgIGlmICh0aGlzLmhpZGRlbktleS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaGlkZGVuS2V5LnNvbWUodmFsID0+IHtcclxuICAgICAgICByZXR1cm4gdmFsID09IGtleTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBwYXRjaFZhbHVlKHNlbGVjdGlvbiwgZGVmYXVsdFZhbHVlLCBpbmRleCwga2V5Pykge1xyXG4gICAgY29uc29sZS5sb2coJ3BhdGNoVmFsdWUnLCBzZWxlY3Rpb24sIGRlZmF1bHRWYWx1ZSwgaW5kZXgsIGtleSk7XHJcbiAgICBpZiAoc2VsZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuX2l0ZW1zW2luZGV4XVt0aGlzLnBhdGNoS2V5XSA9IGRlZmF1bHRWYWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdGhpcy50YWJsZURpc2FibGVkW2luZGV4XSAmJiAhdGhpcy5faXRlbXNbaW5kZXhdW3RoaXMucGF0Y2hLZXldKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBbGwgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9pdGVtc1tpbmRleF1bdGhpcy5wYXRjaEtleV0gPSB0aGlzLl9udWxsO1xyXG4gICAgICBpZiAodGhpcy50eXBlID09IHRoaXMucGF0Y2hFbXB0eSkge1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zW2luZGV4XVtrZXldID0gdGhpcy5fbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VuZERhdGEoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5faXRlbXM7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3RoaXMuZGlzYWJsZUFyckxpc3QnLCB0aGlzLmRpc2FibGVBcnJMaXN0KTtcclxuICAgIHRoaXMuc3VibWl0RGF0YS5lbWl0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGUoa2V5LCBpbmRleCkge1xyXG4gICAgY29uc29sZS5sb2coJ3RoaXMgaXMga2V5IDonLCBrZXkpO1xyXG4gICAgY29uc29sZS5sb2coJ3RoaXMgaXMgaW5kZXggOicsIGluZGV4KTtcclxuICAgIGlmIChrZXkgPT0gMCkge1xyXG4gICAgICB0aGlzLmVycm9ydmFsaWRhdGlvbkluZGV4ID0gaW5kZXg7XHJcbiAgICAgIHRoaXMuZXJyb3J2YWxpZGF0aW9uS2V5ID0ga2V5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lcnJvcnZhbGlkYXRpb25JbmRleCA9ICdOL0EnO1xyXG4gICAgICB0aGlzLmVycm9ydmFsaWRhdGlvbktleSA9ICdOL0EnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tTcGNpYWxDaGFyKGV2ZW50LCB0eXBlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudCwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICAvKiBkaXNhYmxlIC0gZSAqL1xyXG4gICAgaWYgKHR5cGUgPT0gJ051bWJlcicpIHtcclxuICAgICAgaWYgKGV2ZW50LmNoYXJDb2RlID09IDEwMSkge1xyXG4gICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudC5jaGFyQ29kZSA9PSA0NSkge1xyXG4gICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudC5jaGFyQ29kZSA9PSA2OSkge1xyXG4gICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogdmFsaWRhdGlvbiBmb3Igc3RyaW5nICAqL1xyXG4gICAgaWYgKHR5cGUgPT0gJ1N0cmluZycpIHtcclxuICAgICAgaWYgKGV2ZW50LmNoYXJDb2RlID09IDM2IHx8XHJcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gOTUgfHxcclxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSA0MiB8fFxyXG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQ1IHx8XHJcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDMgfHxcclxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSA0NiB8fFxyXG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQwIHx8XHJcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDEgfHxcclxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSAzOSB8fFxyXG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDMzIHx8XHJcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gMzJcclxuICAgICAgKSB7XHJcbiAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCEoKGV2ZW50LmNoYXJDb2RlID49IDY1KSAmJiAoZXZlbnQuY2hhckNvZGUgPD0gOTApIHx8XHJcbiAgICAgIChldmVudC5jaGFyQ29kZSA+PSA5NykgJiYgKGV2ZW50LmNoYXJDb2RlIDw9IDEyMikgfHwgKGV2ZW50LmNoYXJDb2RlID49IDQ4KSAmJlxyXG4gICAgICAoZXZlbnQuY2hhckNvZGUgPD0gNTcpKSkge1xyXG4gICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBldmVudC5yZXR1cm5WYWx1ZSA9IHRydWU7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNvcnQoaGVhZCwgdHlwZSwgc29ydE9wdGlvbikge1xyXG4gICAgY29uc29sZS5sb2coJ0QnLCBoZWFkLCB0eXBlLCBzb3J0T3B0aW9uKTtcclxuICAgIGlmICh0aGlzLl9pdGVtcykge1xyXG4gICAgICBpZiAoISh0eXBlID09ICdDaGVja2JveCcpKSB7XHJcbiAgICAgICAgdGhpcy5faXRlbXMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuICthW2hlYWRdIC0gK2JbaGVhZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGUgPT0gJ051bWJlcicpIHtcclxuICAgICAgICBpZiAoc29ydE9wdGlvbiA9PSAnYXNzZScpIHtcclxuICAgICAgICAgIHRoaXMuX2l0ZW1zLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFbaGVhZF0gLSBiW2hlYWRdXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNvcnRPcHRpb24gPT0gJ2Rlc2MnKSB7XHJcbiAgICAgICAgICB0aGlzLl9pdGVtcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBiW2hlYWRdIC0gYVtoZWFkXVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlID09ICdTdHJpbmcnKSB7XHJcbiAgICAgICAgdGhpcy5faXRlbXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgaWYgKGFbaGVhZF0udG9Mb3dlckNhc2UoKSA8IGJbaGVhZF0udG9Mb3dlckNhc2UoKSAmJiBzb3J0T3B0aW9uID09ICdhc3NlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoYltoZWFkXS50b0xvd2VyQ2FzZSgpIDwgYVtoZWFkXS50b0xvd2VyQ2FzZSgpICYmIHNvcnRPcHRpb24gPT0gJ2Rlc2MnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlID09ICdEYXRlJykge1xyXG5cclxuICAgICAgICB0aGlzLl9pdGVtcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICBpZiAoc29ydE9wdGlvbiA9PSAnYXNzZScpIHtcclxuICAgICAgICAgICAgaWYgKGJbaGVhZF0gPT0gJy0nKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAoPGFueT5uZXcgRGF0ZShiW2hlYWRdKSAtIDxhbnk+bmV3IERhdGUoYVtoZWFkXSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHNvcnRPcHRpb24gPT0gJ2Rlc2MnKSB7XHJcbiAgICAgICAgICAgIGlmIChhW2hlYWRdID09ICctJykge1xyXG4gICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKDxhbnk+bmV3IERhdGUoYVtoZWFkXSkgLSA8YW55Pm5ldyBEYXRlKGJbaGVhZF0pKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBpZiAoYSA9PSAnLScpIHtcclxuICAgICAgICAgIC8vICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAvLyBpZiAoc29ydE9wdGlvbiA9PSAnYXNzZScpIHtcclxuICAgICAgICAgIC8vICAgaWYgKG5ldyBEYXRlKGFbaGVhZF0pIDwgbmV3IERhdGUoYltoZWFkXSkpIHtcclxuICAgICAgICAgIC8vICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICAgIC8vIGlmIChzb3J0T3B0aW9uID09ICdkZXNjJykge1xyXG4gICAgICAgICAgLy8gICBpZiAobmV3IERhdGUoYltoZWFkXSkgPCBuZXcgRGF0ZShhW2hlYWRdKSkge1xyXG4gICAgICAgICAgLy8gICAgIHJldHVybiAtMTtcclxuICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2godmFsID0+IHtcclxuICAgICAgICBkZWxldGUgdmFsWyd1bmRlZmluZWQnXTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9pdGVtcztcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBkYXRhLmZpbHRlcigodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3ZhbCcsIHZhbCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZEFycmF5S2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGlzYWJsZWRBcnJheUtleS5zb21lKGVsID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZWwnLCBlbCwgdmFsW3RoaXMudW5pcXVlS2V5XSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGVsID09IHZhbFt0aGlzLnVuaXF1ZUtleV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgIHRoaXMudGFibGVEaXNhYmxlZFtpbmRleF0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMudGFibGVEaXNhYmxlZFtpbmRleF0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJyB0aGlzLnRhYmxlRGlzYWJsZWQnLCB0aGlzLnRhYmxlRGlzYWJsZWQpXHJcbiAgICAgICAgICBkZWxldGUgdmFsWyd1bmRlZmluZWQnXTtcclxuICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJ3NvcnQgLScsIHRoaXMuX2l0ZW1zLCBoZWFkLCB0eXBlLCBzb3J0T3B0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=