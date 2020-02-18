/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-form-table/suku-form-table.component.ts
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
        this.limit = new EventEmitter();
        this.sortable = 'false';
        this.maxRowLength = 1;
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
        if (this._items.length === this.maxRowLength) {
            this.limit.emit(true);
            return;
        }
        if (val === 10) {
            if (this._items.length + val !== this.maxRowLength) {
                this.limit.emit(true);
                return;
            }
        }
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
                    template: "<div class=\"col p-0\">\n  <table>\n    <tr *ngIf=\"enableSelectAll && _items[0]\">\n      <td *ngFor=\"let list of _items[0] | keys; let i = index\"\n        [ngClass]=\"{ 'text-center': typeKey[list] == 'Checkbox' }\" [style.width.%]=\"(list==uniqueKey) ? 8 :\n        92/keyLength\">\n        <!-- checkbox -->\n        <span [ngClass]=\"{ 'align-checkbox': editable[j] }\" *ngIf=\"typeKey[list] == 'Checkbox'\">\n          <mat-checkbox (change)=\"sendData()\" color=\"primary\" [disabled]=\"disableSelectAll\" [(ngModel)]=\"selectAll\"\n            (change)=\"selectAllAction()\">\n            {{ \"selectAll_ChkBox\" | translate }}\n          </mat-checkbox>\n        </span>\n      </td>\n    </tr>\n  </table>\n\n  <div class=\"header\">\n    <div class=\"col\" [ngClass]=\"{\n        'pt-3 pb-3': type == 'Processor',\n        'pb-4 pt-4': type != 'Processor'\n      }\">\n      <div class=\"row\">\n        <div class=\"col mt-auto mb-auto\">\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{ titleOneCustomClass }}\"\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{ titleOneId }}\">\n            {{ titleContent }}\n            <span class=\"pl-5\" id=\"processor\">\n              <span [ngClass]=\"{ 'align-checkbox': editable[j] }\" *ngIf=\"type == 'Processor'\">\n                <mat-checkbox (change)=\"sendData()\" color=\"primary\" [disabled]=\"disableSelectAll\"\n                  [(ngModel)]=\"selectAll\" (change)=\"selectAllAction()\">\n                  <span class=\"checkbox\">{{\n                    \"selectAll_ChkBox\" | translate\n                  }}</span>\n                </mat-checkbox>\n              </span>\n            </span>\n          </h1>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col p-0\">\n    <table class=\"table bg-white table-responsive-sm\">\n      <thead>\n        <tr>\n          <th *ngFor=\"let head of _items[0] | keys\"\n            [ngClass]=\"{ 'text-center': typeKey[head] == 'Checkbox' , 'ellipsis' : !(typeKey[head] == 'Checkbox') }\"\n            data-sortable=\"true\">\n            <span *ngIf=\"!(head === 'Sku')\" class=\"hovertxt\">{{ head | translate }}</span>\n            <span *ngIf=\"head === 'Sku'\" class=\"Sku hovertxt\">{{\n              head | translate\n            }}</span>\n            <span *ngIf=\"!(typeKey[head] == 'Checkbox')\" class=\"float-right c-pointer ml\">\n              <span *ngIf=\"sortable && !(head === 'actions_TblColHdr')\" (click)=\"sort(head, typeKey[head], 'asse')\"\n                class=\"fas fa-caret-up displayBlock\"></span>\n              <span *ngIf=\"sortable && !(head === 'actions_TblColHdr')\" (click)=\"sort(head, typeKey[head], 'desc')\"\n                class=\"fas fa-caret-down displayBlock lineH\"></span>\n            </span>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of _items; let j = index\">\n          <!-- type == 'Producer' ? ''  : typeKey[list] == 'Checkbox'   ? list?.length * 0.45   : list?.length * 1 -->\n          <td [style.width.%]=\"(list == uniqueKey) ? 8 : 92/keyLength\"\n            [ngClass]=\"{'border-enable': checkValid(list),'text-center': typeKey[list] == 'Checkbox' }\"\n            *ngFor=\"let list of item | keys; let i = index\" [style.background-color]=\"\n              (checkValid(list)\n                ? item[selectionKey] &&\n                  item[highlighterKey] &&\n                  enableHighlighter\n                  ? '#a3ded8'\n                  : !(item[selectionKey] && enableHighlighter)\n                  ? '#d3d9dc'\n                  : '#f8dbb4'\n                : '') ||\n              (item[selectionKey] && list == patchKey\n                ? '#d3d9dc'\n                : list == patchKey && item[patchKey]\n                ? '#a3ded8'\n                : list == patchKey\n                ? '#f8dbb4'\n                : '')\">\n            <span *ngIf=\"!editable[j] && list != actionkey && typeKey[list] != 'Checkbox' && !checkValid(list) &&\n                list != patchKey && typeKey[list] != 'Date'\" id=\"{{ list | trim }}{{ j }}\">{{ item[list] }}\n            </span>\n\n            <!-- input -->\n            <span *ngIf=\"editable[j] &&  list != actionkey && (typeKey[list] == 'String' || typeKey[list] == 'Number')\">\n              <input (keyup)=\"sendData()\" (keypress)=\"checkSpcialChar($event, typeKey[list])\" class=\"form-control\"\n                [(ngModel)]=\"item[list]\" min=\"0\" [maxLength]=\"25\"\n                type=\"{{ typeKey[list] == 'Number' ? 'number' : 'text' }}\" (change)=\"validate(item[list], j)\"\n                [disabled]=\"tableDisabled[j]\" id=\"{{ list | trim }}{{ j }}\" *ngIf=\"editable[j] && list != actionkey &&\n                  (typeKey[list] == 'String' || typeKey[list] == 'Number')\" />\n              <p id=\"{{ j }}\" class=\"errorMessage\" *ngIf=\"item[list] && item[list] == 0 && !hideErrorMsg\">\n                {{ errorMessageOne | translate }}\n              </p>\n            </span>\n\n            <input type=\"date\" (keyup)=\"sendData()\" [disabled]=\"tableDisabled[j]\" data-date=\"\"\n              data-date-format=\"mm/dd/yyyy\" class=\"form-control\" id=\"{{ list | trim }}{{ j }}\" *ngIf=\"\n                editable[j] && list != actionkey && typeKey[list] == 'Date'\n              \" [(ngModel)]=\"item[list]\" />\n\n            <!-- checkbox -->\n            <span class=\"align-checkbox\" *ngIf=\"typeKey[list] == 'Checkbox'\">\n              <mat-checkbox color=\"primary\" id=\"{{ list | trim }}{{ j }}\" (change)=\"sendData();patchValue( item[selectionKey],\n                    item[highlighterKey],j, highlighterKey)\"\n                [disabled]=\"(!editable[j] && list != selectionKey) || tableDisabled[j]\" [(ngModel)]=\"item[list]\">\n              </mat-checkbox>\n            </span>\n\n            <!-- select -->\n            <select class=\"form-control\" (change)=\"sendData()\" [disabled]=\"tableDisabled[j]\" *ngIf=\"\n                editable[j] && list != actionkey && typeKey[list] != 'String' && typeKey[list] != 'Number' &&\n                  typeKey[list] != 'Checkbox' && typeKey[list] != 'Date' \" [(ngModel)]=\"item[list]\">\n              <option *ngFor=\"let c of typeKey[list]; let k = index\" id=\"asset{{ k }}\" [ngValue]=\"c\">\n                {{ c }}\n              </option>\n            </select>\n\n            <!-- input- highlighterKey -->\n            <span *ngIf=\"checkValid(list) && list != actionkey\">\n              <span *ngFor=\"let data of keyData; let dataIndex = index\">\n                <span *ngIf=\"list == data.key\">\n                  <input type=\"{{ typeKey[list] == 'Number' ? 'number' : 'text' }}\" id=\"asset{{ j }}{{ dataIndex }}\"\n                    (keyup)=\"sendData()\" [ngClass]=\"{\n                      disabled: !(\n                        (item[selectionKey]\n                          ? disableHighlightKey\n                          : item[selectionKey]) && !tableDisabled[j] ) }\"\n                    [disabled]=\" !((item[selectionKey]  ? disableHighlightKey  : item[selectionKey]) && !tableDisabled[j] )\"\n                    class=\"form-control\n                    sample\" id=\"{{ list | trim }}{{ j }}\" [(ngModel)]=\"item[data.key]\"\n                    (change)=\"validate(item[data.key], dataIndex)\" *ngIf=\"\n                      checkValid(list) && list != actionkey && highlighterKey\n                    \" (keypress)=\"checkSpcialChar($event, typeKey[list])\" min=\"0\" />\n                </span>\n                <p id=\"{{ dataIndex }}\" class=\"errorMessage\"\n                  *ngIf=\"item[data.key] && item[data.key] == 0 && !hideErrorMsg\">\n                  {{ errorMessageOne | translate }}\n                </p>\n              </span>\n            </span>\n\n            <!-- input -patchKey -->\n            <span *ngIf=\"list == patchKey && list != actionkey && patchKey\">\n              <input type=\"{{ typeKey[list] == 'Number' ? 'number' : 'text' }}\" id=\"asset{{ j }}{{ selectionKey }}\"\n                (keyup)=\"sendData()\" [ngClass]=\"{ disabled: item[selectionKey] }\"\n                [disabled]=\"item[selectionKey] || tableDisabled[j]\" class=\"form-control sample\"\n                [(ngModel)]=\"item[patchKey]\" *ngIf=\"list == patchKey && list != actionkey && patchKey\"\n                id=\"{{ selectionKey | trim }}{{ j }}Patch\" (change)=\"validate(item[patchKey], selectionKey)\" min=\"0\"\n                [maxLength]=\"10\" (keypress)=\"checkSpcialChar($event, typeKey[list])\" />\n              <p id=\"asset{{ j }}{{ selectionKey }}\" class=\"errorMessage\"\n                *ngIf=\"item[patchKey] && item[patchKey] == 0 && !hideErrorMsg\">\n                {{ errorMessageOne | translate }}\n              </p>\n            </span>\n\n            <span *ngIf=\"typeKey[list] == 'Date'\">\n              {{ item[list] | dateLocale: \"dateFormat\" }}\n            </span>\n\n            <span class=\"col p-0 pl-2\" (click)=\"edit(j, item); sendData()\"\n              *ngIf=\"list == actionkey && !editable[j] && !tableDisabled[j]\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{ j }}\" [style.font-size.rem]=\"controlsSize\"\n                [ngClass]=\"{ 'btn-edit': editable[j] }\">\n                {{ \"edit_TblBtn\" | translate }}\n              </span>\n            </span>\n            <span class=\"col p-0 pl-2\" *ngIf=\"list == actionkey && editable[j] && !tableDisabled[j]\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{ j }}\" [style.font-size.rem]=\"controlsSize\"\n                (click)=\"edit(j, item); sendData()\" [ngClass]=\"{ 'btn-edit': editable[j] }\">\n                {{ \"save_TblBtn\" | translate }}\n              </span>\n            </span>\n            <span class=\"col c-pointer pl-4\" *ngIf=\"list == actionkey && !tableDisabled[j]\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{ j }}\" [style.font-size.rem]=\"controlsSize\"\n                (click)=\"removedata(j, item); sendData()\" [ngClass]=\"{ 'btn-edit': editable[j] }\">\n                {{ \"remove_TblBtn\" | translate }}\n              </span>\n            </span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col text-right\" *ngIf=\"enableControls\">\n    <span class=\"p-2\">\n      <a class=\"secondary-btn\" id=\"addOneRow\" [style.font-size.rem]=\"controlsSize\" (click)=\"addTable(1, _items?.length)\"\n        color=\"primary\">{{ \"add1Row_TblBtn\" | translate }}</a>\n    </span>\n    <span class=\"p-2\">\n      <a class=\"secondary-btn\" id=\"addTenRow\" [style.font-size.rem]=\"controlsSize\"\n        (click)=\"addTable(10, _items?.length)\" color=\"primary\">{{ \"add10Rows_TblBtn\" | translate }}</a>\n    </span>\n  </div>\n</div>",
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
        limit: [{ type: Output }],
        sortable: [{ type: Input, args: ['table-sortable',] }],
        maxRowLength: [{ type: Input }],
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
    SukuFormTableComponent.prototype.limit;
    /** @type {?} */
    SukuFormTableComponent.prototype.sortable;
    /** @type {?} */
    SukuFormTableComponent.prototype.maxRowLength;
    /** @type {?} */
    SukuFormTableComponent.prototype._null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWZvcm0tdGFibGUvc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RjtJQXlHRTtRQWxHQSxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBRVosYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUdkLG1CQUFjLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUdBLGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBRWpCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUNsQyxpQkFBWSxHQUFHLDJCQUEyQixDQUFDO1FBQzdDLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFHaEIsaUJBQVksR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLFdBQU0sR0FBRyxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ2Isd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBWWpELGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxtQkFBbUIsQ0FBQztRQUNoQyxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUE2QnRCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFLbEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUV4QixZQUFPLEdBQUcsRUFBRSxDQUFD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QixvREFBNEI7O0lBQzVCLGtEQUFrQzs7SUFDbEMsNENBQWtDOztJQUNsQyw4Q0FBOEI7O0lBQzlCLGlEQUFnRjs7SUFDaEYsc0NBQW9DOztJQUNwQyx3Q0FBc0M7O0lBQ3RDLDRDQUEwQzs7SUFDMUMsNENBQTBDOztJQUMxQyx1Q0FBcUM7O0lBQ3JDLDBDQUE0Qzs7SUFDNUMsOENBQTBCOztJQUMxQix1Q0FBYSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZm9ybS10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWZvcm0tdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWZvcm0tdGFibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Rm9ybVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgajtcbiAgX2l0ZW1zID0gW107XG4gIF9pdGVtc0tleTtcbiAgZWRpdGFibGUgPSBbXTtcbiAgZXJyb3J2YWxpZGF0aW9uSW5kZXg7XG4gIGVycm9ydmFsaWRhdGlvbktleTtcbiAgZGlzYWJsZUFyckxpc3QgPSBbNzQ0NTE4XTtcbiAgQElucHV0KCd0aXRsZS1vbmUtaWQnKSB0aXRsZU9uZUlkO1xuICBASW5wdXQoJ3RpdGxlLW9uZS1zaXplJykgdGl0bGVPbmVTaXplO1xuICBASW5wdXQoJ3RpdGxlLW9uZS1jb2xvcicpIHRpdGxlT25lQ29sb3IgPSAnd2hpdGUnO1xuICBASW5wdXQoJ3RpdGxlLW9uZS13ZWlnaHQnKSB0aXRsZU9uZVdlaWdodDtcbiAgQElucHV0KCd0aXRsZS1vbmUtY3VzdG9tLWNsYXNzJykgdGl0bGVPbmVDdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoJ3RpdGxlLWNvbnRlbnQnKSB0aXRsZUNvbnRlbnQgPSAnRW50ZXIgYW5pbWFsIGluZm9ybWF0aW9uOic7XG4gIEBJbnB1dCgnaGVhZGVyLXNpemUnKSBoZWFkZXJTaXplID0gJzE0cHgnO1xuICBASW5wdXQoJ2hlYWRlci1jb2xvcicpIGhlYWRlckNvbG9yO1xuICBASW5wdXQoJ2hlYWRlci13ZWlnaHQnKSBoZWFkZXJXZWlnaHQ7XG4gIEBJbnB1dCgnc3RhdHVzLWJnLXN0eWxlJykgY29sb3JQYWxsZXRlID0gWycjYTNkZWQ4JywgJyNmOGRiYjQnLCAnI2M3YzNmYScsICdncmF5J107XG4gIEBJbnB1dCgnc3RhdHVzJykgc3RhdHVzID0gWydjb21wbGV0ZWQnLCAnbm90LWNvbXBsZXRlZCcsICdwZW5kaW5nJywgJ290aGVycyddO1xuICBASW5wdXQoJ3RhYmxlRGlzYWJsZWQnKSB0YWJsZURpc2FibGVkID0gW107XG4gIEBJbnB1dCgnZGlzYWJsZUhpZ2hsaWdodEtleScpIGRpc2FibGVIaWdobGlnaHRLZXkgPSBmYWxzZTtcbiAga2V5TGVuZ3RoOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHNldCBlbmFibGVFZGl0SW5kZXgodmFsKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCArdmFsOyBpKyspIHtcbiAgICAgICAgdGhpcy5lZGl0YWJsZVtpXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpIHR5cGVLZXk7XG4gIEBJbnB1dCgpIHR5cGU7XG4gIEBJbnB1dCgpIGRlZmF1bHRDb3VudCA9IDI7XG4gIEBJbnB1dCgpIGFjdGlvbmtleSA9ICdhY3Rpb25zX1RibENvbEhkcic7XG4gIEBJbnB1dCgpIGRpc2FibGVkQXJyYXlLZXkgPSBbXTtcbiAgQElucHV0KClcbiAgZ2V0IGl0ZW1zKCkge1xuICAgIGNvbnNvbGUubG9nKCdpdGVtcyAtLS0tLS0tLS0tLS0nLCB0aGlzLml0ZW1zKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5pdGVtcztcbiAgICBpZiAoZGF0YSkge1xuICAgICAgZGF0YS5maWx0ZXIoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgZGVsZXRlIHZhbFsndW5kZWZpbmVkJ107XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbiAgc2V0IGl0ZW1zKHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdfaXRlbXMnLCB2YWwpO1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICB2YWwuZmlsdGVyKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBkZWxldGUgZWxbJ3VuZGVmaW5lZCddO1xuICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9pdGVtcyA9IHZhbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2l0ZW1zWzBdKSB7XG4gICAgICB0aGlzLl9pdGVtc0tleSA9IE9iamVjdC5rZXlzKHRoaXMuX2l0ZW1zWzBdKTtcbiAgICAgIHRoaXMua2V5TGVuZ3RoID0gT2JqZWN0LmtleXModGhpcy5faXRlbXNLZXkpLmxlbmd0aDtcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgdW5pcXVlS2V5ID0gJ3NrdSc7XG5cbiAgQElucHV0KCkgc2VsZWN0aW9uS2V5O1xuICBASW5wdXQoKSBoaWdobGlnaHRlcktleTtcbiAgQElucHV0KCkgcGF0Y2hLZXk7XG4gIEBJbnB1dCgpIGhpZGRlbktleSA9IFtdO1xuICBASW5wdXQoKSBlbmFibGVIaWdobGlnaHRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBlbmFibGVDb250cm9scyA9IHRydWU7XG4gIEBJbnB1dCgpIGVuYWJsZVNlbGVjdEFsbCA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWxlY3RBbGw7XG4gIEBJbnB1dCgpIGtleURhdGEgPSBbXTtcbiAgQElucHV0KCkgY29udHJvbHNTaXplO1xuICBASW5wdXQoKSBjb250cm9sQ3VzdG9tQ2xhc3M7XG4gIEBJbnB1dCgpIGRpc2FibGVTZWxlY3RBbGwgPSBmYWxzZTtcbiAgQElucHV0KCkgcGF0Y2hFbXB0eSA9ICdQcm9jZXNzb3InO1xuICBASW5wdXQoKSBoaWRlRXJyb3JNc2cgPSBmYWxzZTtcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLW9uZScpIGVycm9yTWVzc2FnZU9uZSA9ICd2YWx1ZSBzaG91bGQgYmUgIGdyZWF0ZXIgdGhlbiAwJztcbiAgQE91dHB1dCgpIHNhdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzdWJtaXREYXRhID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZm9ybVN0YXR1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxpbWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoJ3RhYmxlLXNvcnRhYmxlJykgc29ydGFibGUgPSAnZmFsc2UnO1xuICBASW5wdXQoKSBtYXhSb3dMZW5ndGggPSAxO1xuICBfbnVsbCA9IG51bGw7XG4gIEBIb3N0TGlzdGVuZXIoJ3Bhc3RlJywgWyckZXZlbnQnXSkgYmxvY2tQYXN0ZShlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ2UnLCBlKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjb3B5JywgWyckZXZlbnQnXSkgYmxvY2tDb3B5KGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjdXQnLCBbJyRldmVudCddKSBibG9ja0N1dChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBhZGRUYWJsZSh2YWwsIGVkaXRJbmRleCkge1xuICAgIGlmICh0aGlzLl9pdGVtcy5sZW5ndGggPT09IHRoaXMubWF4Um93TGVuZ3RoKSB7XG4gICAgICB0aGlzLmxpbWl0LmVtaXQodHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHZhbCA9PT0gMTApIHtcbiAgICAgIGlmICh0aGlzLl9pdGVtcy5sZW5ndGggKyB2YWwgIT09IHRoaXMubWF4Um93TGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubGltaXQuZW1pdCh0cnVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsOyBpKyspIHtcbiAgICAgIHRoaXMuZWRpdGFibGVbZWRpdEluZGV4ICsgaV0gPSB0cnVlO1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSB7fTtcbiAgICAgIGNvbnN0IHR5cGVLZXkgPSB0aGlzLnR5cGVLZXk7XG4gICAgICBPYmplY3Qua2V5cyh0eXBlS2V5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHR5cGVLZXlba2V5XSA9PSAnQ2hlY2tib3gnKSB7XG4gICAgICAgICAgdGVtcGxhdGVba2V5XSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVLZXlba2V5XSA9PSAnU3RyaW5nJyB8fCB0eXBlS2V5W2tleV0gPT0gJ051bWJlcicpIHtcbiAgICAgICAgICB0ZW1wbGF0ZVtrZXldID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcGxhdGVba2V5XSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmVuYWJsZUNvbnRyb2xzKSB7XG4gICAgICAgIHRlbXBsYXRlW3RoaXMuYWN0aW9ua2V5XSA9ICcnO1xuICAgICAgfVxuICAgICAgdGhpcy5faXRlbXMucHVzaCh0ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ19pdGVtcycsIHRoaXMuX2l0ZW1zKTtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnX2l0ZW1zJywgdGhpcy5faXRlbXMpO1xuICB9XG5cbiAgZWRpdChpLCBpdGVtKSB7XG4gICAgY29uc29sZS5sb2coaSk7XG4gICAgaWYgKHRoaXMuZWRpdGFibGVbaV0pIHtcbiAgICAgIHRoaXMuZWRpdGFibGVbaV0gPSBmYWxzZTtcbiAgICAgIHRoaXMuc2F2ZS5lbWl0KGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVkaXRhYmxlW2ldID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVkYXRhKGksIGl0ZW0pIHtcbiAgICBjb25zb2xlLmxvZygnaW5kZXgnLCBpLCB0aGlzLl9pdGVtcy5sZW5ndGgpO1xuICAgIGlmICh0aGlzLl9pdGVtcykge1xuICAgICAgaWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCAhPSAxKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICBkYXRhOiBpdGVtXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVtb3ZlLmVtaXQoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgIGRhdGE6IGl0ZW1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZW1vdmUuZW1pdChkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja1ZhbGlkKGxpc3QpIHtcbiAgICBpZiAodGhpcy5rZXlEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMua2V5RGF0YS5zb21lKHZhbCA9PiB7XG4gICAgICAgIHJldHVybiB2YWwua2V5ID09IGxpc3Q7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RBbGxBY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VsZWN0QWxsID0gdGhpcy5zZWxlY3RBbGw7XG4gICAgaWYgKHNlbGVjdEFsbCkge1xuICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoZWxlbWVudCwgbWFpbkluZGV4KSA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKGVsZW1lbnQpLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoa2V5ID09IHRoaXMuc2VsZWN0aW9uS2V5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWxlbWVudCcsIGVsZW1lbnRba2V5XSwgaW5kZXgsIG1haW5JbmRleCwgdGhpcy5faXRlbXNbbWFpbkluZGV4XVt0aGlzLnBhdGNoS2V5XSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGFibGVEaXNhYmxlZFttYWluSW5kZXhdKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnRba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgIGlmICghZWxlbWVudFt0aGlzLnBhdGNoS2V5XSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbdGhpcy5wYXRjaEtleV0gPSBlbGVtZW50W3RoaXMuaGlnaGxpZ2h0ZXJLZXldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghdGhpcy5faXRlbXNbbWFpbkluZGV4XVt0aGlzLnBhdGNoS2V5XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW1zW21haW5JbmRleF1bdGhpcy5wYXRjaEtleV0gPSB0aGlzLl9pdGVtc1ttYWluSW5kZXhdW3RoaXMuaGlnaGxpZ2h0ZXJLZXldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyhlbGVtZW50KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBpZiAoa2V5ID09IHRoaXMuc2VsZWN0aW9uS2V5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWxlbWVudCcsIGVsZW1lbnRba2V5XSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGFibGVEaXNhYmxlZFtpbmRleF0pIHtcbiAgICAgICAgICAgICAgZWxlbWVudFtrZXldID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChrZXkgPT0gdGhpcy5wYXRjaEtleSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VsZW1lbnQnLCBlbGVtZW50W2tleV0pO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnRhYmxlRGlzYWJsZWRbaW5kZXhdKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnRbdGhpcy5wYXRjaEtleV0gPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMudHlwZSA9PSAnUHJvY2Vzc29yJykge1xuICAgICAgICAgICAgaWYgKGtleSA9PSB0aGlzLmhpZ2hsaWdodGVyS2V5KSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudFtrZXldKTtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLnRhYmxlRGlzYWJsZWRbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudFt0aGlzLmhpZ2hsaWdodGVyS2V5XSA9ICcnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBlbGVtZW50LCB0aGlzLnBhdGNoS2V5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNoa0hpZGRlbktleShrZXkpIHtcbiAgICBpZiAodGhpcy5oaWRkZW5LZXkubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5oaWRkZW5LZXkuc29tZSh2YWwgPT4ge1xuICAgICAgICByZXR1cm4gdmFsID09IGtleTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHBhdGNoVmFsdWUoc2VsZWN0aW9uLCBkZWZhdWx0VmFsdWUsIGluZGV4LCBrZXk/KSB7XG4gICAgY29uc29sZS5sb2coJ3BhdGNoVmFsdWUnLCBzZWxlY3Rpb24sIGRlZmF1bHRWYWx1ZSwgaW5kZXgsIGtleSk7XG4gICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgdGhpcy5faXRlbXNbaW5kZXhdW3RoaXMucGF0Y2hLZXldID0gZGVmYXVsdFZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMudGFibGVEaXNhYmxlZFtpbmRleF0gJiYgIXRoaXMuX2l0ZW1zW2luZGV4XVt0aGlzLnBhdGNoS2V5XSkge1xuICAgICAgICB0aGlzLnNlbGVjdEFsbCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5faXRlbXNbaW5kZXhdW3RoaXMucGF0Y2hLZXldID0gdGhpcy5fbnVsbDtcbiAgICAgIGlmICh0aGlzLnR5cGUgPT0gdGhpcy5wYXRjaEVtcHR5KSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zW2luZGV4XVtrZXldID0gdGhpcy5fbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZW5kRGF0YSgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5faXRlbXM7XG5cbiAgICBjb25zb2xlLmxvZygndGhpcy5kaXNhYmxlQXJyTGlzdCcsIHRoaXMuZGlzYWJsZUFyckxpc3QpO1xuICAgIHRoaXMuc3VibWl0RGF0YS5lbWl0KGRhdGEpO1xuICB9XG5cbiAgdmFsaWRhdGUoa2V5LCBpbmRleCkge1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIGtleSA6Jywga2V5KTtcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyBpbmRleCA6JywgaW5kZXgpO1xuICAgIGlmIChrZXkgPT0gMCkge1xuICAgICAgdGhpcy5lcnJvcnZhbGlkYXRpb25JbmRleCA9IGluZGV4O1xuICAgICAgdGhpcy5lcnJvcnZhbGlkYXRpb25LZXkgPSBrZXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXJyb3J2YWxpZGF0aW9uSW5kZXggPSAnTi9BJztcbiAgICAgIHRoaXMuZXJyb3J2YWxpZGF0aW9uS2V5ID0gJ04vQSc7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tTcGNpYWxDaGFyKGV2ZW50LCB0eXBlKSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cbiAgICAvKiBkaXNhYmxlIC0gZSAqL1xuICAgIGlmICh0eXBlID09ICdOdW1iZXInKSB7XG4gICAgICBpZiAoZXZlbnQuY2hhckNvZGUgPT0gMTAxKSB7XG4gICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5jaGFyQ29kZSA9PSA0NSkge1xuICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuY2hhckNvZGUgPT0gNjkpIHtcbiAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIHZhbGlkYXRpb24gZm9yIHN0cmluZyAgKi9cbiAgICBpZiAodHlwZSA9PSAnU3RyaW5nJykge1xuICAgICAgaWYgKGV2ZW50LmNoYXJDb2RlID09IDM2IHx8XG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDk1IHx8XG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQyIHx8XG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQ1IHx8XG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQzIHx8XG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQ2IHx8XG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQwIHx8XG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQxIHx8XG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDM5IHx8XG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDMzIHx8XG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDMyXG4gICAgICApIHtcbiAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoISgoZXZlbnQuY2hhckNvZGUgPj0gNjUpICYmIChldmVudC5jaGFyQ29kZSA8PSA5MCkgfHxcbiAgICAgIChldmVudC5jaGFyQ29kZSA+PSA5NykgJiYgKGV2ZW50LmNoYXJDb2RlIDw9IDEyMikgfHwgKGV2ZW50LmNoYXJDb2RlID49IDQ4KSAmJlxuICAgICAgKGV2ZW50LmNoYXJDb2RlIDw9IDU3KSkpIHtcbiAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGV2ZW50LnJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNvcnQoaGVhZCwgdHlwZSwgc29ydE9wdGlvbikge1xuICAgIGNvbnNvbGUubG9nKCdEJywgaGVhZCwgdHlwZSwgc29ydE9wdGlvbik7XG4gICAgaWYgKHRoaXMuX2l0ZW1zKSB7XG4gICAgICBpZiAoISh0eXBlID09ICdDaGVja2JveCcpKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICByZXR1cm4gK2FbaGVhZF0gLSArYltoZWFkXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PSAnTnVtYmVyJykge1xuICAgICAgICBpZiAoc29ydE9wdGlvbiA9PSAnYXNzZScpIHtcbiAgICAgICAgICB0aGlzLl9pdGVtcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYVtoZWFkXSAtIGJbaGVhZF1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc29ydE9wdGlvbiA9PSAnZGVzYycpIHtcbiAgICAgICAgICB0aGlzLl9pdGVtcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYltoZWFkXSAtIGFbaGVhZF1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT0gJ1N0cmluZycpIHtcbiAgICAgICAgdGhpcy5faXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgIGlmIChhW2hlYWRdLnRvTG93ZXJDYXNlKCkgPCBiW2hlYWRdLnRvTG93ZXJDYXNlKCkgJiYgc29ydE9wdGlvbiA9PSAnYXNzZScpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGJbaGVhZF0udG9Mb3dlckNhc2UoKSA8IGFbaGVhZF0udG9Mb3dlckNhc2UoKSAmJiBzb3J0T3B0aW9uID09ICdkZXNjJykge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhW2hlYWRdLnRvTG93ZXJDYXNlKCkgPiBiW2hlYWRdLnRvTG93ZXJDYXNlKCkgJiYgc29ydE9wdGlvbiA9PSAnYXNzZScpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYltoZWFkXS50b0xvd2VyQ2FzZSgpID4gYVtoZWFkXS50b0xvd2VyQ2FzZSgpICYmIHNvcnRPcHRpb24gPT0gJ2Rlc2MnKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PSAnRGF0ZScpIHtcbiAgICAgICAgY29uc3Qgc29ydGFibGUgPSB0aGlzLl9pdGVtcy5zb21lKChkYXRhVmFsKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGRhdGFWYWxbaGVhZF0gIT09ICctJztcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHsgc29ydGFibGUgfSk7XG5cbiAgICAgICAgaWYgKHNvcnRhYmxlKSB7XG4gICAgICAgICAgdGhpcy5faXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKHNvcnRPcHRpb24gPT0gJ2Fzc2UnKSB7XG4gICAgICAgICAgICAgIGlmIChiW2hlYWRdID09ICctJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gKDxhbnk+bmV3IERhdGUoYltoZWFkXSkgLSA8YW55Pm5ldyBEYXRlKGFbaGVhZF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzb3J0T3B0aW9uID09ICdkZXNjJykge1xuICAgICAgICAgICAgICBpZiAoYVtoZWFkXSA9PSAnLScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuICg8YW55Pm5ldyBEYXRlKGFbaGVhZF0pIC0gPGFueT5uZXcgRGF0ZShiW2hlYWRdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICBkZWxldGUgdmFsWyd1bmRlZmluZWQnXTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuX2l0ZW1zO1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgZGF0YS5maWx0ZXIoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygndmFsJywgdmFsKTtcbiAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZEFycmF5S2V5KSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmRpc2FibGVkQXJyYXlLZXkuc29tZShlbCA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbCcsIGVsLCB2YWxbdGhpcy51bmlxdWVLZXldKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGVsID09IHZhbFt0aGlzLnVuaXF1ZUtleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQnLCByZXN1bHQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICB0aGlzLnRhYmxlRGlzYWJsZWRbaW5kZXhdID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMudGFibGVEaXNhYmxlZFtpbmRleF0gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coJyB0aGlzLnRhYmxlRGlzYWJsZWQnLCB0aGlzLnRhYmxlRGlzYWJsZWQpXG4gICAgICAgICAgZGVsZXRlIHZhbFsndW5kZWZpbmVkJ107XG4gICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnc29ydCAtJywgdGhpcy5faXRlbXMsIGhlYWQsIHR5cGUsIHNvcnRPcHRpb24pO1xuICAgIH1cbiAgfVxuXG5cbn1cbiJdfQ==