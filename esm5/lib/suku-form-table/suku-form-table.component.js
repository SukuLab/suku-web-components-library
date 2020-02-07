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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWZvcm0tdGFibGUvc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RjtJQXVHRTtRQWhHQSxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBRVosYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUdkLG1CQUFjLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUdBLGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBRWpCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUNsQyxpQkFBWSxHQUFHLDJCQUEyQixDQUFDO1FBQzdDLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFHaEIsaUJBQVksR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLFdBQU0sR0FBRyxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ2Isd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBWWpELGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxtQkFBbUIsQ0FBQztRQUNoQyxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUE2QnRCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFLbEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUV4QixZQUFPLEdBQUcsRUFBRSxDQUFD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O0lBQ2pDLG1DQUFFOztJQUNGLHdDQUFZOztJQUNaLDJDQUFVOztJQUNWLDBDQUFjOztJQUNkLHNEQUFxQjs7SUFDckIsb0RBQW1COztJQUNuQixnREFBMEI7O0lBQzFCLDRDQUFrQzs7SUFDbEMsOENBQXNDOztJQUN0QywrQ0FBa0Q7O0lBQ2xELGdEQUEwQzs7SUFDMUMscURBQTBEOztJQUMxRCw4Q0FBbUU7O0lBQ25FLDRDQUEwQzs7SUFDMUMsNkNBQW1DOztJQUNuQyw4Q0FBcUM7O0lBQ3JDLDhDQUFtRjs7SUFDbkYsd0NBQThFOztJQUM5RSwrQ0FBMkM7O0lBQzNDLHFEQUEwRDs7SUFDMUQsMkNBQWtCOztJQVNsQix5Q0FBaUI7O0lBQ2pCLHNDQUFjOztJQUNkLDhDQUEwQjs7SUFDMUIsMkNBQXlDOztJQUN6QyxrREFBK0I7O0lBNkIvQiwyQ0FBMkI7O0lBRTNCLDhDQUFzQjs7SUFDdEIsZ0RBQXdCOztJQUN4QiwwQ0FBa0I7O0lBQ2xCLDJDQUF3Qjs7SUFDeEIsbURBQW1DOztJQUNuQyxnREFBK0I7O0lBQy9CLGlEQUFpQzs7SUFDakMsMkNBQW1COztJQUNuQix5Q0FBc0I7O0lBQ3RCLDhDQUFzQjs7SUFDdEIsb0RBQTRCOztJQUM1QixrREFBa0M7O0lBQ2xDLDRDQUFrQzs7SUFDbEMsOENBQThCOztJQUM5QixpREFBZ0Y7O0lBQ2hGLHNDQUFvQzs7SUFDcEMsd0NBQXNDOztJQUN0Qyw0Q0FBMEM7O0lBQzFDLDRDQUEwQzs7SUFDMUMsMENBQTRDOztJQUM1Qyx1Q0FBYSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZm9ybS10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWZvcm0tdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWZvcm0tdGFibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Rm9ybVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgajtcbiAgX2l0ZW1zID0gW107XG4gIF9pdGVtc0tleTtcbiAgZWRpdGFibGUgPSBbXTtcbiAgZXJyb3J2YWxpZGF0aW9uSW5kZXg7XG4gIGVycm9ydmFsaWRhdGlvbktleTtcbiAgZGlzYWJsZUFyckxpc3QgPSBbNzQ0NTE4XTtcbiAgQElucHV0KCd0aXRsZS1vbmUtaWQnKSB0aXRsZU9uZUlkO1xuICBASW5wdXQoJ3RpdGxlLW9uZS1zaXplJykgdGl0bGVPbmVTaXplO1xuICBASW5wdXQoJ3RpdGxlLW9uZS1jb2xvcicpIHRpdGxlT25lQ29sb3IgPSAnd2hpdGUnO1xuICBASW5wdXQoJ3RpdGxlLW9uZS13ZWlnaHQnKSB0aXRsZU9uZVdlaWdodDtcbiAgQElucHV0KCd0aXRsZS1vbmUtY3VzdG9tLWNsYXNzJykgdGl0bGVPbmVDdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoJ3RpdGxlLWNvbnRlbnQnKSB0aXRsZUNvbnRlbnQgPSAnRW50ZXIgYW5pbWFsIGluZm9ybWF0aW9uOic7XG4gIEBJbnB1dCgnaGVhZGVyLXNpemUnKSBoZWFkZXJTaXplID0gJzE0cHgnO1xuICBASW5wdXQoJ2hlYWRlci1jb2xvcicpIGhlYWRlckNvbG9yO1xuICBASW5wdXQoJ2hlYWRlci13ZWlnaHQnKSBoZWFkZXJXZWlnaHQ7XG4gIEBJbnB1dCgnc3RhdHVzLWJnLXN0eWxlJykgY29sb3JQYWxsZXRlID0gWycjYTNkZWQ4JywgJyNmOGRiYjQnLCAnI2M3YzNmYScsICdncmF5J107XG4gIEBJbnB1dCgnc3RhdHVzJykgc3RhdHVzID0gWydjb21wbGV0ZWQnLCAnbm90LWNvbXBsZXRlZCcsICdwZW5kaW5nJywgJ290aGVycyddO1xuICBASW5wdXQoJ3RhYmxlRGlzYWJsZWQnKSB0YWJsZURpc2FibGVkID0gW107XG4gIEBJbnB1dCgnZGlzYWJsZUhpZ2hsaWdodEtleScpIGRpc2FibGVIaWdobGlnaHRLZXkgPSBmYWxzZTtcbiAga2V5TGVuZ3RoOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHNldCBlbmFibGVFZGl0SW5kZXgodmFsKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCArdmFsOyBpKyspIHtcbiAgICAgICAgdGhpcy5lZGl0YWJsZVtpXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpIHR5cGVLZXk7XG4gIEBJbnB1dCgpIHR5cGU7XG4gIEBJbnB1dCgpIGRlZmF1bHRDb3VudCA9IDI7XG4gIEBJbnB1dCgpIGFjdGlvbmtleSA9ICdhY3Rpb25zX1RibENvbEhkcic7XG4gIEBJbnB1dCgpIGRpc2FibGVkQXJyYXlLZXkgPSBbXTtcbiAgQElucHV0KClcbiAgZ2V0IGl0ZW1zKCkge1xuICAgIGNvbnNvbGUubG9nKCdpdGVtcyAtLS0tLS0tLS0tLS0nLCB0aGlzLml0ZW1zKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5pdGVtcztcbiAgICBpZiAoZGF0YSkge1xuICAgICAgZGF0YS5maWx0ZXIoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgZGVsZXRlIHZhbFsndW5kZWZpbmVkJ107XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbiAgc2V0IGl0ZW1zKHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdfaXRlbXMnLCB2YWwpO1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICB2YWwuZmlsdGVyKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBkZWxldGUgZWxbJ3VuZGVmaW5lZCddO1xuICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9pdGVtcyA9IHZhbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2l0ZW1zWzBdKSB7XG4gICAgICB0aGlzLl9pdGVtc0tleSA9IE9iamVjdC5rZXlzKHRoaXMuX2l0ZW1zWzBdKTtcbiAgICAgIHRoaXMua2V5TGVuZ3RoID0gT2JqZWN0LmtleXModGhpcy5faXRlbXNLZXkpLmxlbmd0aDtcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgdW5pcXVlS2V5ID0gJ3NrdSc7XG5cbiAgQElucHV0KCkgc2VsZWN0aW9uS2V5O1xuICBASW5wdXQoKSBoaWdobGlnaHRlcktleTtcbiAgQElucHV0KCkgcGF0Y2hLZXk7XG4gIEBJbnB1dCgpIGhpZGRlbktleSA9IFtdO1xuICBASW5wdXQoKSBlbmFibGVIaWdobGlnaHRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBlbmFibGVDb250cm9scyA9IHRydWU7XG4gIEBJbnB1dCgpIGVuYWJsZVNlbGVjdEFsbCA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWxlY3RBbGw7XG4gIEBJbnB1dCgpIGtleURhdGEgPSBbXTtcbiAgQElucHV0KCkgY29udHJvbHNTaXplO1xuICBASW5wdXQoKSBjb250cm9sQ3VzdG9tQ2xhc3M7XG4gIEBJbnB1dCgpIGRpc2FibGVTZWxlY3RBbGwgPSBmYWxzZTtcbiAgQElucHV0KCkgcGF0Y2hFbXB0eSA9ICdQcm9jZXNzb3InO1xuICBASW5wdXQoKSBoaWRlRXJyb3JNc2cgPSBmYWxzZTtcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLW9uZScpIGVycm9yTWVzc2FnZU9uZSA9ICd2YWx1ZSBzaG91bGQgYmUgIGdyZWF0ZXIgdGhlbiAwJztcbiAgQE91dHB1dCgpIHNhdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzdWJtaXREYXRhID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZm9ybVN0YXR1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCd0YWJsZS1zb3J0YWJsZScpIHNvcnRhYmxlID0gJ2ZhbHNlJztcbiAgX251bGwgPSBudWxsO1xuICBASG9zdExpc3RlbmVyKCdwYXN0ZScsIFsnJGV2ZW50J10pIGJsb2NrUGFzdGUoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdlJywgZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY29weScsIFsnJGV2ZW50J10pIGJsb2NrQ29weShlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY3V0JywgWyckZXZlbnQnXSkgYmxvY2tDdXQoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgYWRkVGFibGUodmFsLCBlZGl0SW5kZXgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbDsgaSsrKSB7XG4gICAgICB0aGlzLmVkaXRhYmxlW2VkaXRJbmRleCArIGldID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0ge307XG4gICAgICBjb25zdCB0eXBlS2V5ID0gdGhpcy50eXBlS2V5O1xuICAgICAgT2JqZWN0LmtleXModHlwZUtleSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh0eXBlS2V5W2tleV0gPT0gJ0NoZWNrYm94Jykge1xuICAgICAgICAgIHRlbXBsYXRlW2tleV0gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlS2V5W2tleV0gPT0gJ1N0cmluZycgfHwgdHlwZUtleVtrZXldID09ICdOdW1iZXInKSB7XG4gICAgICAgICAgdGVtcGxhdGVba2V5XSA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBsYXRlW2tleV0gPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5lbmFibGVDb250cm9scykge1xuICAgICAgICB0ZW1wbGF0ZVt0aGlzLmFjdGlvbmtleV0gPSAnJztcbiAgICAgIH1cbiAgICAgIHRoaXMuX2l0ZW1zLnB1c2godGVtcGxhdGUpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnX2l0ZW1zJywgdGhpcy5faXRlbXMpO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIGNvbnNvbGUubG9nKCdfaXRlbXMnLCB0aGlzLl9pdGVtcyk7XG4gIH1cblxuICBlZGl0KGksIGl0ZW0pIHtcbiAgICBjb25zb2xlLmxvZyhpKTtcbiAgICBpZiAodGhpcy5lZGl0YWJsZVtpXSkge1xuICAgICAgdGhpcy5lZGl0YWJsZVtpXSA9IGZhbHNlO1xuICAgICAgdGhpcy5zYXZlLmVtaXQoaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWRpdGFibGVbaV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZWRhdGEoaSwgaXRlbSkge1xuICAgIGNvbnNvbGUubG9nKCdpbmRleCcsIGksIHRoaXMuX2l0ZW1zLmxlbmd0aCk7XG4gICAgaWYgKHRoaXMuX2l0ZW1zKSB7XG4gICAgICBpZiAodGhpcy5faXRlbXMubGVuZ3RoICE9IDEpIHtcbiAgICAgICAgdGhpcy5faXRlbXMuc3BsaWNlKGksIDEpO1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgIGRhdGE6IGl0ZW1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZW1vdmUuZW1pdChkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgZGF0YTogaXRlbVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlbW92ZS5lbWl0KGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrVmFsaWQobGlzdCkge1xuICAgIGlmICh0aGlzLmtleURhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5rZXlEYXRhLnNvbWUodmFsID0+IHtcbiAgICAgICAgcmV0dXJuIHZhbC5rZXkgPT0gbGlzdDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEFsbEFjdGlvbigpIHtcbiAgICBjb25zdCBzZWxlY3RBbGwgPSB0aGlzLnNlbGVjdEFsbDtcbiAgICBpZiAoc2VsZWN0QWxsKSB7XG4gICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChlbGVtZW50LCBtYWluSW5kZXgpID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMoZWxlbWVudCkuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChrZXkgPT0gdGhpcy5zZWxlY3Rpb25LZXkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudFtrZXldLCBpbmRleCwgbWFpbkluZGV4LCB0aGlzLl9pdGVtc1ttYWluSW5kZXhdW3RoaXMucGF0Y2hLZXldKTtcbiAgICAgICAgICAgIGlmICghdGhpcy50YWJsZURpc2FibGVkW21haW5JbmRleF0pIHtcbiAgICAgICAgICAgICAgZWxlbWVudFtrZXldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaWYgKCFlbGVtZW50W3RoaXMucGF0Y2hLZXldKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudFt0aGlzLnBhdGNoS2V5XSA9IGVsZW1lbnRbdGhpcy5oaWdobGlnaHRlcktleV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCF0aGlzLl9pdGVtc1ttYWluSW5kZXhdW3RoaXMucGF0Y2hLZXldKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faXRlbXNbbWFpbkluZGV4XVt0aGlzLnBhdGNoS2V5XSA9IHRoaXMuX2l0ZW1zW21haW5JbmRleF1bdGhpcy5oaWdobGlnaHRlcktleV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygnZGF0YScsIGVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKGVsZW1lbnQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGlmIChrZXkgPT0gdGhpcy5zZWxlY3Rpb25LZXkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudFtrZXldKTtcbiAgICAgICAgICAgIGlmICghdGhpcy50YWJsZURpc2FibGVkW2luZGV4XSkge1xuICAgICAgICAgICAgICBlbGVtZW50W2tleV0gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGtleSA9PSB0aGlzLnBhdGNoS2V5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWxlbWVudCcsIGVsZW1lbnRba2V5XSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGFibGVEaXNhYmxlZFtpbmRleF0pIHtcbiAgICAgICAgICAgICAgZWxlbWVudFt0aGlzLnBhdGNoS2V5XSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy50eXBlID09ICdQcm9jZXNzb3InKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09IHRoaXMuaGlnaGxpZ2h0ZXJLZXkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VsZW1lbnQnLCBlbGVtZW50W2tleV0pO1xuICAgICAgICAgICAgICBpZiAoIXRoaXMudGFibGVEaXNhYmxlZFtpbmRleF0pIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50W3RoaXMuaGlnaGxpZ2h0ZXJLZXldID0gJyc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygnZGF0YScsIGVsZW1lbnQsIHRoaXMucGF0Y2hLZXkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2hrSGlkZGVuS2V5KGtleSkge1xuICAgIGlmICh0aGlzLmhpZGRlbktleS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmhpZGRlbktleS5zb21lKHZhbCA9PiB7XG4gICAgICAgIHJldHVybiB2YWwgPT0ga2V5O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcGF0Y2hWYWx1ZShzZWxlY3Rpb24sIGRlZmF1bHRWYWx1ZSwgaW5kZXgsIGtleT8pIHtcbiAgICBjb25zb2xlLmxvZygncGF0Y2hWYWx1ZScsIHNlbGVjdGlvbiwgZGVmYXVsdFZhbHVlLCBpbmRleCwga2V5KTtcbiAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLl9pdGVtc1tpbmRleF1bdGhpcy5wYXRjaEtleV0gPSBkZWZhdWx0VmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy50YWJsZURpc2FibGVkW2luZGV4XSAmJiAhdGhpcy5faXRlbXNbaW5kZXhdW3RoaXMucGF0Y2hLZXldKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLl9pdGVtc1tpbmRleF1bdGhpcy5wYXRjaEtleV0gPSB0aGlzLl9udWxsO1xuICAgICAgaWYgKHRoaXMudHlwZSA9PSB0aGlzLnBhdGNoRW1wdHkpIHtcbiAgICAgICAgdGhpcy5faXRlbXNbaW5kZXhdW2tleV0gPSB0aGlzLl9udWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNlbmREYXRhKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9pdGVtcztcblxuICAgIGNvbnNvbGUubG9nKCd0aGlzLmRpc2FibGVBcnJMaXN0JywgdGhpcy5kaXNhYmxlQXJyTGlzdCk7XG4gICAgdGhpcy5zdWJtaXREYXRhLmVtaXQoZGF0YSk7XG4gIH1cblxuICB2YWxpZGF0ZShrZXksIGluZGV4KSB7XG4gICAgY29uc29sZS5sb2coJ3RoaXMgaXMga2V5IDonLCBrZXkpO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIGluZGV4IDonLCBpbmRleCk7XG4gICAgaWYgKGtleSA9PSAwKSB7XG4gICAgICB0aGlzLmVycm9ydmFsaWRhdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB0aGlzLmVycm9ydmFsaWRhdGlvbktleSA9IGtleTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcnJvcnZhbGlkYXRpb25JbmRleCA9ICdOL0EnO1xuICAgICAgdGhpcy5lcnJvcnZhbGlkYXRpb25LZXkgPSAnTi9BJztcbiAgICB9XG4gIH1cblxuICBjaGVja1NwY2lhbENoYXIoZXZlbnQsIHR5cGUpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudCwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcblxuICAgIC8qIGRpc2FibGUgLSBlICovXG4gICAgaWYgKHR5cGUgPT0gJ051bWJlcicpIHtcbiAgICAgIGlmIChldmVudC5jaGFyQ29kZSA9PSAxMDEpIHtcbiAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmNoYXJDb2RlID09IDQ1KSB7XG4gICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5jaGFyQ29kZSA9PSA2OSkge1xuICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogdmFsaWRhdGlvbiBmb3Igc3RyaW5nICAqL1xuICAgIGlmICh0eXBlID09ICdTdHJpbmcnKSB7XG4gICAgICBpZiAoZXZlbnQuY2hhckNvZGUgPT0gMzYgfHxcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gOTUgfHxcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDIgfHxcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDUgfHxcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDMgfHxcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDYgfHxcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDAgfHxcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDEgfHxcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gMzkgfHxcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gMzMgfHxcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gMzJcbiAgICAgICkge1xuICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKChldmVudC5jaGFyQ29kZSA+PSA2NSkgJiYgKGV2ZW50LmNoYXJDb2RlIDw9IDkwKSB8fFxuICAgICAgKGV2ZW50LmNoYXJDb2RlID49IDk3KSAmJiAoZXZlbnQuY2hhckNvZGUgPD0gMTIyKSB8fCAoZXZlbnQuY2hhckNvZGUgPj0gNDgpICYmXG4gICAgICAoZXZlbnQuY2hhckNvZGUgPD0gNTcpKSkge1xuICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZXZlbnQucmV0dXJuVmFsdWUgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc29ydChoZWFkLCB0eXBlLCBzb3J0T3B0aW9uKSB7XG4gICAgY29uc29sZS5sb2coJ0QnLCBoZWFkLCB0eXBlLCBzb3J0T3B0aW9uKTtcbiAgICBpZiAodGhpcy5faXRlbXMpIHtcbiAgICAgIGlmICghKHR5cGUgPT0gJ0NoZWNrYm94JykpIHtcbiAgICAgICAgdGhpcy5faXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgIHJldHVybiArYVtoZWFkXSAtICtiW2hlYWRdO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09ICdOdW1iZXInKSB7XG4gICAgICAgIGlmIChzb3J0T3B0aW9uID09ICdhc3NlJykge1xuICAgICAgICAgIHRoaXMuX2l0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhW2hlYWRdIC0gYltoZWFkXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzb3J0T3B0aW9uID09ICdkZXNjJykge1xuICAgICAgICAgIHRoaXMuX2l0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBiW2hlYWRdIC0gYVtoZWFkXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PSAnU3RyaW5nJykge1xuICAgICAgICB0aGlzLl9pdGVtcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgaWYgKGFbaGVhZF0udG9Mb3dlckNhc2UoKSA8IGJbaGVhZF0udG9Mb3dlckNhc2UoKSAmJiBzb3J0T3B0aW9uID09ICdhc3NlJykge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYltoZWFkXS50b0xvd2VyQ2FzZSgpIDwgYVtoZWFkXS50b0xvd2VyQ2FzZSgpICYmIHNvcnRPcHRpb24gPT0gJ2Rlc2MnKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFbaGVhZF0udG9Mb3dlckNhc2UoKSA+IGJbaGVhZF0udG9Mb3dlckNhc2UoKSAmJiBzb3J0T3B0aW9uID09ICdhc3NlJykge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChiW2hlYWRdLnRvTG93ZXJDYXNlKCkgPiBhW2hlYWRdLnRvTG93ZXJDYXNlKCkgJiYgc29ydE9wdGlvbiA9PSAnZGVzYycpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09ICdEYXRlJykge1xuICAgICAgICBjb25zdCBzb3J0YWJsZSA9IHRoaXMuX2l0ZW1zLnNvbWUoKGRhdGFWYWwpID0+IHtcbiAgICAgICAgICByZXR1cm4gZGF0YVZhbFtoZWFkXSAhPT0gJy0nO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coeyBzb3J0YWJsZSB9KTtcblxuICAgICAgICBpZiAoc29ydGFibGUpIHtcbiAgICAgICAgICB0aGlzLl9pdGVtcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoc29ydE9wdGlvbiA9PSAnYXNzZScpIHtcbiAgICAgICAgICAgICAgaWYgKGJbaGVhZF0gPT0gJy0nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAoPGFueT5uZXcgRGF0ZShiW2hlYWRdKSAtIDxhbnk+bmV3IERhdGUoYVtoZWFkXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNvcnRPcHRpb24gPT0gJ2Rlc2MnKSB7XG4gICAgICAgICAgICAgIGlmIChhW2hlYWRdID09ICctJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gKDxhbnk+bmV3IERhdGUoYVtoZWFkXSkgLSA8YW55Pm5ldyBEYXRlKGJbaGVhZF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKHZhbCA9PiB7XG4gICAgICAgIGRlbGV0ZSB2YWxbJ3VuZGVmaW5lZCddO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5faXRlbXM7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkYXRhLmZpbHRlcigodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWwnLCB2YWwpO1xuICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVkQXJyYXlLZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGlzYWJsZWRBcnJheUtleS5zb21lKGVsID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VsJywgZWwsIHZhbFt0aGlzLnVuaXF1ZUtleV0pO1xuICAgICAgICAgICAgICByZXR1cm4gZWwgPT0gdmFsW3RoaXMudW5pcXVlS2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdCcsIHJlc3VsdCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgIHRoaXMudGFibGVEaXNhYmxlZFtpbmRleF0gPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy50YWJsZURpc2FibGVkW2luZGV4XSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZygnIHRoaXMudGFibGVEaXNhYmxlZCcsIHRoaXMudGFibGVEaXNhYmxlZClcbiAgICAgICAgICBkZWxldGUgdmFsWyd1bmRlZmluZWQnXTtcbiAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdzb3J0IC0nLCB0aGlzLl9pdGVtcywgaGVhZCwgdHlwZSwgc29ydE9wdGlvbik7XG4gICAgfVxuICB9XG5cblxufVxuIl19