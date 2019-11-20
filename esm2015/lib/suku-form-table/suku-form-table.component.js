/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
export class SukuFormTableComponent {
    constructor() {
        this._items = [];
        this.editable = [];
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
    /**
     * @param {?} val
     * @return {?}
     */
    set enableEditIndex(val) {
        if (val) {
            for (let i = 0; i < +val; i++) {
                this.editable[i] = true;
            }
        }
    }
    /**
     * @return {?}
     */
    get items() {
        console.log('items ------------', this.items);
        /** @type {?} */
        const data = this.items;
        if (data) {
            data.filter((/**
             * @param {?} val
             * @return {?}
             */
            val => {
                console.log('val', val);
                delete val['undefined'];
                return val;
            }));
        }
        return data;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set items(val) {
        if (val) {
            console.log('_items', val);
            if (val) {
                val.filter((/**
                 * @param {?} el
                 * @return {?}
                 */
                el => {
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
    }
    /**
     * @param {?} e
     * @return {?}
     */
    blockPaste(e) {
        console.log('e', e);
        e.preventDefault();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    blockCopy(e) {
        e.preventDefault();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    blockCut(e) {
        e.preventDefault();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} val
     * @param {?} editIndex
     * @return {?}
     */
    addTable(val, editIndex) {
        for (let i = 0; i < val; i++) {
            this.editable[editIndex + i] = true;
            /** @type {?} */
            const template = {};
            /** @type {?} */
            const typeKey = this.typeKey;
            Object.keys(typeKey).forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
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
            if (this.enableControls) {
                template[this.actionkey] = '';
            }
            this._items.push(template);
        }
        console.log('_items', this._items);
    }
    /**
     * @return {?}
     */
    submit() {
        console.log('_items', this._items);
    }
    /**
     * @param {?} i
     * @param {?} item
     * @return {?}
     */
    edit(i, item) {
        console.log(i);
        if (this.editable[i]) {
            this.editable[i] = false;
            this.save.emit(item);
        }
        else {
            this.editable[i] = true;
        }
    }
    /**
     * @param {?} i
     * @param {?} item
     * @return {?}
     */
    removedata(i, item) {
        console.log('index', i, this._items.length);
        if (this._items) {
            if (this._items.length != 1) {
                this._items.splice(i, 1);
                /** @type {?} */
                const data = {
                    index: i,
                    data: item
                };
                this.remove.emit(data);
            }
            else {
                /** @type {?} */
                const data = {
                    index: i,
                    data: item
                };
                this.remove.emit(data);
            }
        }
    }
    /**
     * @param {?} list
     * @return {?}
     */
    checkValid(list) {
        if (this.keyData.length > 0) {
            /** @type {?} */
            const result = this.keyData.some((/**
             * @param {?} val
             * @return {?}
             */
            val => {
                return val.key == list;
            }));
            return result;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    selectAllAction() {
        /** @type {?} */
        const selectAll = this.selectAll;
        if (selectAll) {
            this._items.forEach((/**
             * @param {?} element
             * @param {?} mainIndex
             * @return {?}
             */
            (element, mainIndex) => {
                Object.keys(element).forEach((/**
                 * @param {?} key
                 * @param {?} index
                 * @return {?}
                 */
                (key, index) => {
                    if (key == this.selectionKey) {
                        console.log('element', element[key], index, mainIndex, this._items[mainIndex][this.patchKey]);
                        if (!this.tableDisabled[mainIndex]) {
                            element[key] = true;
                            if (!element[this.patchKey]) {
                                element[this.patchKey] = element[this.highlighterKey];
                            }
                            if (!this._items[mainIndex][this.patchKey]) {
                                this._items[mainIndex][this.patchKey] = this._items[mainIndex][this.highlighterKey];
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
            (element, index) => {
                Object.keys(element).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                (key) => {
                    if (key == this.selectionKey) {
                        console.log('element', element[key]);
                        if (!this.tableDisabled[index]) {
                            element[key] = false;
                        }
                    }
                    if (key == this.patchKey) {
                        console.log('element', element[key]);
                        if (!this.tableDisabled[index]) {
                            element[this.patchKey] = '';
                        }
                    }
                    if (this.type == 'Processor') {
                        if (key == this.highlighterKey) {
                            console.log('element', element[key]);
                            if (!this.tableDisabled[index]) {
                                element[this.highlighterKey] = '';
                            }
                        }
                    }
                }));
                console.log('data', element, this.patchKey);
            }));
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    chkHiddenKey(key) {
        if (this.hiddenKey.length > 0) {
            /** @type {?} */
            const result = this.hiddenKey.some((/**
             * @param {?} val
             * @return {?}
             */
            val => {
                return val == key;
            }));
            return result;
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} selection
     * @param {?} defaultValue
     * @param {?} index
     * @param {?=} key
     * @return {?}
     */
    patchValue(selection, defaultValue, index, key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        });
    }
    /**
     * @return {?}
     */
    sendData() {
        /** @type {?} */
        const data = this._items;
        this.submitData.emit(data);
    }
    /**
     * @param {?} key
     * @param {?} index
     * @return {?}
     */
    validate(key, index) {
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
    }
    /**
     * @param {?} event
     * @param {?} type
     * @return {?}
     */
    checkSpcialChar(event, type) {
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
    }
    /**
     * @param {?} head
     * @param {?} type
     * @param {?} formate
     * @return {?}
     */
    sort(head, type, formate) {
        if (this._items) {
            if (!(type == 'Checkbox')) {
                this._items.sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                (a, b) => {
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
            val => {
                delete val['undefined'];
            }));
            console.log('sort -', this._items, head, type, formate);
        }
    }
}
SukuFormTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-form-table',
                template: "<div class=\"col p-0\">\r\n  <table>\r\n    <tr *ngIf=\"enableSelectAll && _items[0]\">\r\n      <td *ngFor=\"let list of _items[0] | keys; let i=index\" [ngClass]=\"{'text-center': typeKey[list]=='Checkbox'}\">\r\n        <!-- checkbox -->\r\n        <span [ngClass]=\"{'align-checkbox': editable[j] }\" *ngIf=\"(typeKey[list]=='Checkbox')\">\r\n          <mat-checkbox (change)=\"sendData();\" color=\"primary\" [disabled]=\"disableSelectAll\" [(ngModel)]=\"selectAll\"\r\n            (change)=\"selectAllAction()\"> {{'selectAll_ChkBox' | translate}}\r\n          </mat-checkbox>\r\n        </span>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n  <div class=\"header\">\r\n    <div class=\"col\" [ngClass]=\"{'pt-3 pb-3': (type == 'Processor'), 'pb-4 pt-4': (type != 'Processor') }\">\r\n      <div class=\"row\">\r\n        <div class=\"col mt-auto mb-auto\">\r\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{titleOneCustomClass}}\"\r\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">\r\n            {{titleContent}}\r\n            <span class=\"pl-5\" id=\"processor\">\r\n              <span [ngClass]=\"{'align-checkbox': editable[j] }\" *ngIf=\"type == 'Processor'\">\r\n                <mat-checkbox (change)=\"sendData();\" color=\"primary\" [disabled]=\"disableSelectAll\"\r\n                  [(ngModel)]=\"selectAll\" (change)=\"selectAllAction()\">\r\n                  <span class=\"checkbox\">{{'selectAll_ChkBox' | translate}}</span>\r\n                </mat-checkbox>\r\n              </span>\r\n            </span>\r\n          </h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col p-0\">\r\n    <table class=\"table bg-white table-responsive-sm\">\r\n      <thead>\r\n        <tr>\r\n          <th *ngFor=\"let head of _items[0] | keys\" [ngClass]=\"{'text-center': typeKey[head]=='Checkbox'}\"\r\n            data-sortable=\"true\">\r\n            <span *ngIf=\"!(head === 'Sku')\">{{head  | translate}}</span>\r\n            <span *ngIf=\"head === 'Sku'\" class=\"Sku\">{{head  | translate}}</span>\r\n            <span *ngIf=\"!(typeKey[head] =='Checkbox')\" class=\"float-right c-pointer\">\r\n              <span *ngIf=\"sortable && !(head === 'actions_TblColHdr')\" (click)=\"sort(head,typeKey[head],'asse');\"\r\n                class='fas fa-caret-up displayBlock'></span>\r\n              <span *ngIf=\"sortable && !(head === 'actions_TblColHdr')\" (click)=\"sort(head,typeKey[head],'desc');\"\r\n                class='fas fa-caret-down displayBlock lineH'></span>\r\n            </span>\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of _items;let j=index\">\r\n          <td\r\n            [style.width.%]=\"((type == 'Producer') ? '' : ((typeKey[list] == 'Checkbox') ? list?.length * 0.45 : list?.length * 1 ))\"\r\n            [ngClass]=\"{'border-enable': checkValid(list), 'text-center': typeKey[list]=='Checkbox' }\"\r\n            *ngFor=\"let list of item | keys; let i=index\" [style.background-color]=\"(checkValid(list) ?\r\n            ((item[selectionKey] && item[highlighterKey] && enableHighlighter) ? '#a3ded8':( !(item[selectionKey] &&\r\n            enableHighlighter) ?\r\n            '#d3d9dc' : '#f8dbb4')) : '')\r\n            ||\r\n            ((item[selectionKey] && (list == patchKey)) ? '#d3d9dc' : \r\n            ( ((list == patchKey) &&(item[patchKey])) ? '#a3ded8':\r\n             ((list == patchKey) ? '#f8dbb4' :'')))\">\r\n            <span *ngIf=\"!editable[j] && (list != actionkey) && (typeKey[list]!='Checkbox') &&\r\n               !checkValid(list) && (list != patchKey)\" id=\"{{list | trim}}{{j}}\">\r\n              {{item[list]}}\r\n            </span>\r\n            <!-- input -->\r\n            <span *ngIf=\"editable[j] && (list != actionkey) && ( typeKey[list]=='String' || typeKey[list]=='Number')\">\r\n              <input (keyup)=\"sendData()\" (keypress)=\"checkSpcialChar($event,typeKey[list])\" class=\"form-control\"\r\n                [(ngModel)]=\"item[list]\" min=\"0\" [maxLength]=\"25\" type=\"{{(typeKey[list]=='Number')?'number':'text'}}\"\r\n                (change)=\"validate(item[list],j)\" [disabled]=\"tableDisabled[j]\" id=\"{{list | trim}}{{j}}\"\r\n                *ngIf=\"editable[j] && (list != actionkey) && ( typeKey[list]=='String' || typeKey[list]=='Number')\" />\r\n              <p id=\"{{j}}\" class=\"errorMessage\" *ngIf=\"(item[list]  && item[list] == 0) && !hideErrorMsg\">\r\n                {{errorMessageOne | translate}}\r\n              </p>\r\n            </span>\r\n\r\n            <input type=\"date\" (keyup)=\"sendData()\" [disabled]=\"tableDisabled[j]\" data-date=\"\"\r\n              data-date-format=\"mm/dd/yyyy\" class=\"form-control\" id=\"{{list | trim}}{{j}}\"\r\n              *ngIf=\"editable[j] && (list != actionkey) && typeKey[list]=='Date'\" [(ngModel)]=\"item[list]\" />\r\n\r\n            <!-- checkbox -->\r\n            <span class=\"align-checkbox\" *ngIf=\"(typeKey[list]=='Checkbox')\">\r\n              <mat-checkbox color=\"primary\" id=\"{{list | trim}}{{j}}\"\r\n                (change)=\"sendData();patchValue(item[selectionKey], item[highlighterKey], j, highlighterKey)\"\r\n                [disabled]=\"(!editable[j] && (list != selectionKey) ) || tableDisabled[j]\" [(ngModel)]=\"item[list]\">\r\n              </mat-checkbox>\r\n            </span>\r\n\r\n            <!-- select -->\r\n            <select class=\"form-control\" (change)=\"sendData()\" [disabled]=\"tableDisabled[j]\" *ngIf=\"editable[j] && (list != actionkey) \r\n            && ( typeKey[list]!='String' && typeKey[list]!='Number' && typeKey[list]!='Checkbox' &&\r\n            typeKey[list] !='Date')\" [(ngModel)]=\"item[list]\">\r\n              <option *ngFor=\"let c of typeKey[list];let k=index\" id=\"asset{{k}}\" [ngValue]=\"c\"> {{c}} </option>\r\n            </select>\r\n\r\n            <!-- input- highlighterKey -->\r\n            <span *ngIf=\"checkValid(list) && (list != actionkey)\">\r\n              <span *ngFor=\"let data of keyData;let dataIndex=index\">\r\n                <span *ngIf=\"(list == data.key)\">\r\n                  <input type=\"{{(typeKey[list]=='Number')?'number':'text'}}\" id=\"asset{{j}}{{dataIndex}}\"\r\n                    (keyup)=\"sendData()\" [ngClass]=\"{'disabled': !(item[selectionKey] ? (disableHighlightKey) :\r\n                    item[selectionKey])}\"\r\n                    [disabled]=\"!(item[selectionKey] ? (disableHighlightKey) : item[selectionKey])\" class=\"form-control\r\n                    sample\" id=\"{{list | trim}}{{j}}\" [(ngModel)]=\"item[data.key]\"\r\n                    (change)=\"validate(item[data.key],dataIndex)\"\r\n                    *ngIf=\"checkValid(list) && (list != actionkey) && highlighterKey\"\r\n                    (keypress)=\"checkSpcialChar($event,typeKey[list])\" min=\"0\" />\r\n                </span>\r\n                <p id=\"{{dataIndex}}\" class=\"errorMessage\"\r\n                  *ngIf=\"(item[data.key]  && item[data.key] == 0) && !hideErrorMsg\">\r\n                  {{errorMessageOne  | translate}}</p>\r\n              </span>\r\n            </span>\r\n\r\n            <!-- input -patchKey -->\r\n            <span *ngIf=\"(list == patchKey) && (list != actionkey)\r\n            && patchKey\">\r\n              <input type=\"{{(typeKey[list]=='Number')?'number':'text'}}\" id=\"asset{{j}}{{selectionKey}}\"\r\n                (keyup)=\"sendData();\" [ngClass]=\"{'disabled':\r\n              item[selectionKey]}\" [disabled]=\"item[selectionKey] || tableDisabled[j]\" class=\"form-control sample\"\r\n                [(ngModel)]=\"item[patchKey]\" *ngIf=\"(list == patchKey) && (list != actionkey)\r\n              && patchKey\" id=\"{{selectionKey | trim}}{{j}}Patch\" (change)=\"validate(item[patchKey],selectionKey)\"\r\n                min=\"0\" [maxLength]=\"10\" (keypress)=\"checkSpcialChar($event,typeKey[list]);\" />\r\n              <p id=\"asset{{j}}{{selectionKey}}\" class=\"errorMessage\"\r\n                *ngIf=\"(item[patchKey]  && item[patchKey] == 0) && !hideErrorMsg\">\r\n                {{errorMessageOne  | translate}}\r\n              </p>\r\n            </span>\r\n\r\n            <span class=\"col p-0 pl-2\" (click)=\"edit(j, item);sendData()\"\r\n              *ngIf=\"list == actionkey && !editable[j] && !tableDisabled[j]\">\r\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\r\n                [ngClass]=\"{'btn-edit' : editable[j]}\">\r\n                {{'edit_TblBtn' | translate}}\r\n              </span>\r\n            </span>\r\n            <span class=\"col p-0 pl-2\" *ngIf=\"(list == actionkey) && editable[j]  && !tableDisabled[j]\">\r\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\r\n                (click)=\"edit(j, item);sendData()\" [ngClass]=\"{'btn-edit' : editable[j]}\">\r\n                {{'save_TblBtn' | translate}}\r\n              </span>\r\n            </span>\r\n            <span class=\"col c-pointer pl-4\" *ngIf=\"(list == actionkey) && !tableDisabled[j]\">\r\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\r\n                (click)=\"removedata(j, item);sendData()\" [ngClass]=\"{'btn-edit' : editable[j]}\">\r\n                {{'remove_TblBtn' | translate}}\r\n              </span>\r\n            </span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"col text-right\" *ngIf=\"enableControls\">\r\n    <span class=\"p-2\">\r\n      <a class=\"secondary-btn\" id=\"addOneRow\" [style.font-size.rem]=\"controlsSize\" (click)=\"addTable(1,_items?.length)\"\r\n        color=\"primary\">{{'add1Row_TblBtn' | translate}}</a>\r\n    </span>\r\n    <span class=\"p-2\">\r\n      <a class=\"secondary-btn\" id=\"addTenRow\" [style.font-size.rem]=\"controlsSize\"\r\n        (click)=\"addTable(10, _items?.length)\" color=\"primary\">{{'add10Rows_TblBtn' | translate}}</a>\r\n    </span>\r\n  </div>\r\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.header{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.title{font-family:var(--suku-primary-font);font-weight:600;font-size:var(--suku-font-size-5);text-transform:uppercase}.table{font-family:var(--suku-primary-font);box-shadow:0 1px 2px 0 rgba(0,0,0,.1)}table td{padding-left:1%}.btn-edit{line-height:2!important}input,select{width:100%;height:inherit!important}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0}td{width:15%}.form-control:focus{border:1px solid #ced4da;border-color:#ced4da!important;box-shadow:none!important}:host ::ng-deep.mat-checkbox{vertical-align:sub!important}th:last-child{width:12%!important}td:last-child{width:13%!important}button:focus{outline:0!important}.secondary-btn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:var(--suku-text-heading);border-bottom:3.5px solid;border-color:var(--suku-primary-color);word-break:break-word!important;cursor:pointer}.align-checkbox{font-size:18px}.c-pointer{cursor:pointer}table>tbody>tr>td{flex-wrap:wrap!important}.sample{background:inherit!important;border:none!important}.disabled{cursor:not-allowed}select option{border:1px solid #757575}option{border:1px solid #aaa;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,.1);color:#555}.errorMessage{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-1);color:red;padding:0 .75rem;margin-top:-2px!important;margin-bottom:0!important}.table th{padding:.5rem .5rem .5rem 1.25rem;border-bottom:2px solid #dee2e68a;border-left:1px solid #f2f2f2}.table td{padding:.5rem 1rem;border:1px solid #f2f2f2}.border-enable{border:1px solid #92929240}.hidden{display:none}table{width:100%}.checkbox{font-family:var(--suku-primary-font);color:#fff}:host #processor{font-family:var(--suku-primary-font);font-weight:500!important}:host #processor ::ng-deep.mat-checkbox-frame{border-color:rgba(255,255,255,.54)!important}.Sku{text-transform:uppercase}.float-right{float:right}.displayBlock{display:block}.lineH{line-height:.1}:host ::ng-deep .table td{border-top:1px solid #bbbbbbcc;border:1px solid #f2f2f2!important}:host ::ng-deep .table thead th{border-bottom:2px solid #dee2e68a;border-left:1px solid #f2f2f2}"]
            }] }
];
/** @nocollapse */
SukuFormTableComponent.ctorParameters = () => [];
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
    SukuFormTableComponent.prototype.disableHighlightKey;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWZvcm0tdGFibGUvc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzdGLE1BQU0sT0FBTyxzQkFBc0I7SUE4RmpDO1FBNUZBLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFFWixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBS1ksa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFFakIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLGlCQUFZLEdBQUcsMkJBQTJCLENBQUM7UUFDN0MsZUFBVSxHQUFHLE1BQU0sQ0FBQztRQUdoQixpQkFBWSxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEUsV0FBTSxHQUFHLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEQsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDYix3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFXakQsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsY0FBUyxHQUFHLG1CQUFtQixDQUFDO1FBaUNoQyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2Ysc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXhCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHYixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsZUFBVSxHQUFHLFdBQVcsQ0FBQztRQUN6QixpQkFBWSxHQUFHLEtB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a0M7O0lBQ2xDLDRDQUFrQzs7SUFDbEMsOENBQThCOztJQUM5QixpREFBZ0Y7O0lBQ2hGLHNDQUFvQzs7SUFDcEMsd0NBQXNDOztJQUN0Qyw0Q0FBMEM7O0lBQzFDLDRDQUEwQzs7SUFDMUMsMENBQTRDOztJQUM1Qyx1Q0FBYSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1mb3JtLXRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWZvcm0tdGFibGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUZvcm1UYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgajtcclxuICBfaXRlbXMgPSBbXTtcclxuICBfaXRlbXNLZXk7XHJcbiAgZWRpdGFibGUgPSBbXTtcclxuICBlcnJvcnZhbGlkYXRpb25JbmRleDtcclxuICBlcnJvcnZhbGlkYXRpb25LZXk7XHJcbiAgQElucHV0KCd0aXRsZS1vbmUtaWQnKSB0aXRsZU9uZUlkO1xyXG4gIEBJbnB1dCgndGl0bGUtb25lLXNpemUnKSB0aXRsZU9uZVNpemU7XHJcbiAgQElucHV0KCd0aXRsZS1vbmUtY29sb3InKSB0aXRsZU9uZUNvbG9yID0gJ3doaXRlJztcclxuICBASW5wdXQoJ3RpdGxlLW9uZS13ZWlnaHQnKSB0aXRsZU9uZVdlaWdodDtcclxuICBASW5wdXQoJ3RpdGxlLW9uZS1jdXN0b20tY2xhc3MnKSB0aXRsZU9uZUN1c3RvbUNsYXNzID0gJyc7XHJcbiAgQElucHV0KCd0aXRsZS1jb250ZW50JykgdGl0bGVDb250ZW50ID0gJ0VudGVyIGFuaW1hbCBpbmZvcm1hdGlvbjonO1xyXG4gIEBJbnB1dCgnaGVhZGVyLXNpemUnKSBoZWFkZXJTaXplID0gJzE0cHgnO1xyXG4gIEBJbnB1dCgnaGVhZGVyLWNvbG9yJykgaGVhZGVyQ29sb3I7XHJcbiAgQElucHV0KCdoZWFkZXItd2VpZ2h0JykgaGVhZGVyV2VpZ2h0O1xyXG4gIEBJbnB1dCgnc3RhdHVzLWJnLXN0eWxlJykgY29sb3JQYWxsZXRlID0gWycjYTNkZWQ4JywgJyNmOGRiYjQnLCAnI2M3YzNmYScsICdncmF5J107XHJcbiAgQElucHV0KCdzdGF0dXMnKSBzdGF0dXMgPSBbJ2NvbXBsZXRlZCcsICdub3QtY29tcGxldGVkJywgJ3BlbmRpbmcnLCAnb3RoZXJzJ107XHJcbiAgQElucHV0KCd0YWJsZURpc2FibGVkJykgdGFibGVEaXNhYmxlZCA9IFtdO1xyXG4gIEBJbnB1dCgnZGlzYWJsZUhpZ2hsaWdodEtleScpIGRpc2FibGVIaWdobGlnaHRLZXkgPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBlbmFibGVFZGl0SW5kZXgodmFsKSB7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgK3ZhbDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0YWJsZVtpXSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgQElucHV0KCkgdHlwZUtleTtcclxuICBASW5wdXQoKSB0eXBlO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRDb3VudCA9IDI7XHJcbiAgQElucHV0KCkgYWN0aW9ua2V5ID0gJ2FjdGlvbnNfVGJsQ29sSGRyJztcclxuICBASW5wdXQoKVxyXG4gIGdldCBpdGVtcygpIHtcclxuICAgIGNvbnNvbGUubG9nKCdpdGVtcyAtLS0tLS0tLS0tLS0nLCB0aGlzLml0ZW1zKTtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLml0ZW1zO1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgZGF0YS5maWx0ZXIodmFsID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygndmFsJywgdmFsKTtcclxuICAgICAgICBkZWxldGUgdmFsWyd1bmRlZmluZWQnXTtcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuICBzZXQgaXRlbXModmFsKSB7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdfaXRlbXMnLCB2YWwpO1xyXG4gICAgICBpZiAodmFsKSB7XHJcbiAgICAgICAgdmFsLmZpbHRlcihlbCA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygndmFsJywgZWwpO1xyXG4gICAgICAgICAgZGVsZXRlIGVsWyd1bmRlZmluZWQnXTtcclxuICAgICAgICAgIHJldHVybiBlbDtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9pdGVtcyA9IHZhbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9pdGVtc1swXSkge1xyXG4gICAgICB0aGlzLl9pdGVtc0tleSA9IE9iamVjdC5rZXlzKHRoaXMuX2l0ZW1zWzBdKTtcclxuICAgIH1cclxuICB9XHJcbiAgQElucHV0KCkgc2VsZWN0aW9uS2V5O1xyXG4gIEBJbnB1dCgpIGhpZ2hsaWdodGVyS2V5O1xyXG4gIEBJbnB1dCgpIHBhdGNoS2V5O1xyXG4gIEBJbnB1dCgpIGhpZGRlbktleSA9IFtdO1xyXG4gIEBJbnB1dCgpIGVuYWJsZUhpZ2hsaWdodGVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZW5hYmxlQ29udHJvbHMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGVuYWJsZVNlbGVjdEFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNlbGVjdEFsbDtcclxuICBASW5wdXQoKSBrZXlEYXRhID0gW107XHJcbiAgQElucHV0KCkgY29udHJvbHNTaXplO1xyXG4gIEBJbnB1dCgpIGNvbnRyb2xDdXN0b21DbGFzcztcclxuICBASW5wdXQoKSBkaXNhYmxlU2VsZWN0QWxsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcGF0Y2hFbXB0eSA9ICdQcm9jZXNzb3InO1xyXG4gIEBJbnB1dCgpIGhpZGVFcnJvck1zZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS1vbmUnKSBlcnJvck1lc3NhZ2VPbmUgPSAndmFsdWUgc2hvdWxkIGJlICBncmVhdGVyIHRoZW4gMCc7XHJcbiAgQE91dHB1dCgpIHNhdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgc3VibWl0RGF0YSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZm9ybVN0YXR1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASW5wdXQoJ3RhYmxlLXNvcnRhYmxlJykgc29ydGFibGUgPSAnZmFsc2UnO1xyXG4gIF9udWxsID0gbnVsbDtcclxuICBASG9zdExpc3RlbmVyKCdwYXN0ZScsIFsnJGV2ZW50J10pIGJsb2NrUGFzdGUoZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgY29uc29sZS5sb2coJ2UnLCBlKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NvcHknLCBbJyRldmVudCddKSBibG9ja0NvcHkoZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY3V0JywgWyckZXZlbnQnXSkgYmxvY2tDdXQoZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgYWRkVGFibGUodmFsLCBlZGl0SW5kZXgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsOyBpKyspIHtcclxuICAgICAgdGhpcy5lZGl0YWJsZVtlZGl0SW5kZXggKyBpXSA9IHRydWU7XHJcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0ge307XHJcbiAgICAgIGNvbnN0IHR5cGVLZXkgPSB0aGlzLnR5cGVLZXk7XHJcbiAgICAgIE9iamVjdC5rZXlzKHR5cGVLZXkpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlS2V5W2tleV0gPT0gJ0NoZWNrYm94Jykge1xyXG4gICAgICAgICAgdGVtcGxhdGVba2V5XSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZUtleVtrZXldID09ICdTdHJpbmcnIHx8IHR5cGVLZXlba2V5XSA9PSAnTnVtYmVyJykge1xyXG4gICAgICAgICAgdGVtcGxhdGVba2V5XSA9ICcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0ZW1wbGF0ZVtrZXldID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMuZW5hYmxlQ29udHJvbHMpIHtcclxuICAgICAgICB0ZW1wbGF0ZVt0aGlzLmFjdGlvbmtleV0gPSAnJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9pdGVtcy5wdXNoKHRlbXBsYXRlKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCdfaXRlbXMnLCB0aGlzLl9pdGVtcyk7XHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnX2l0ZW1zJywgdGhpcy5faXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgZWRpdChpLCBpdGVtKSB7XHJcbiAgICBjb25zb2xlLmxvZyhpKTtcclxuICAgIGlmICh0aGlzLmVkaXRhYmxlW2ldKSB7XHJcbiAgICAgIHRoaXMuZWRpdGFibGVbaV0gPSBmYWxzZTtcclxuICAgICAgdGhpcy5zYXZlLmVtaXQoaXRlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVkaXRhYmxlW2ldID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZWRhdGEoaSwgaXRlbSkge1xyXG4gICAgY29uc29sZS5sb2coJ2luZGV4JywgaSwgdGhpcy5faXRlbXMubGVuZ3RoKTtcclxuICAgIGlmICh0aGlzLl9pdGVtcykge1xyXG4gICAgICBpZiAodGhpcy5faXRlbXMubGVuZ3RoICE9IDEpIHtcclxuICAgICAgICB0aGlzLl9pdGVtcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgIGluZGV4OiBpLFxyXG4gICAgICAgICAgZGF0YTogaXRlbVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZW1vdmUuZW1pdChkYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgICBkYXRhOiBpdGVtXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlbW92ZS5lbWl0KGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja1ZhbGlkKGxpc3QpIHtcclxuICAgIGlmICh0aGlzLmtleURhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmtleURhdGEuc29tZSh2YWwgPT4ge1xyXG4gICAgICAgIHJldHVybiB2YWwua2V5ID09IGxpc3Q7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0QWxsQWN0aW9uKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0QWxsID0gdGhpcy5zZWxlY3RBbGw7XHJcbiAgICBpZiAoc2VsZWN0QWxsKSB7XHJcbiAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGVsZW1lbnQsIG1haW5JbmRleCkgPT4ge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGVsZW1lbnQpLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGlmIChrZXkgPT0gdGhpcy5zZWxlY3Rpb25LZXkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VsZW1lbnQnLCBlbGVtZW50W2tleV0sIGluZGV4LCBtYWluSW5kZXgsIHRoaXMuX2l0ZW1zW21haW5JbmRleF1bdGhpcy5wYXRjaEtleV0pO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMudGFibGVEaXNhYmxlZFttYWluSW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudFtrZXldID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBpZiAoIWVsZW1lbnRbdGhpcy5wYXRjaEtleV0pIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRbdGhpcy5wYXRjaEtleV0gPSBlbGVtZW50W3RoaXMuaGlnaGxpZ2h0ZXJLZXldO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoIXRoaXMuX2l0ZW1zW21haW5JbmRleF1bdGhpcy5wYXRjaEtleV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW1zW21haW5JbmRleF1bdGhpcy5wYXRjaEtleV0gPSB0aGlzLl9pdGVtc1ttYWluSW5kZXhdW3RoaXMuaGlnaGxpZ2h0ZXJLZXldO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZWxlbWVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICBPYmplY3Qua2V5cyhlbGVtZW50KS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgIGlmIChrZXkgPT0gdGhpcy5zZWxlY3Rpb25LZXkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VsZW1lbnQnLCBlbGVtZW50W2tleV0pO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMudGFibGVEaXNhYmxlZFtpbmRleF0pIHtcclxuICAgICAgICAgICAgICBlbGVtZW50W2tleV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGtleSA9PSB0aGlzLnBhdGNoS2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudFtrZXldKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnRhYmxlRGlzYWJsZWRbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudFt0aGlzLnBhdGNoS2V5XSA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy50eXBlID09ICdQcm9jZXNzb3InKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT0gdGhpcy5oaWdobGlnaHRlcktleSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudFtrZXldKTtcclxuICAgICAgICAgICAgICBpZiAoIXRoaXMudGFibGVEaXNhYmxlZFtpbmRleF0pIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRbdGhpcy5oaWdobGlnaHRlcktleV0gPSAnJztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGF0YScsIGVsZW1lbnQsIHRoaXMucGF0Y2hLZXkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoa0hpZGRlbktleShrZXkpIHtcclxuICAgIGlmICh0aGlzLmhpZGRlbktleS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaGlkZGVuS2V5LnNvbWUodmFsID0+IHtcclxuICAgICAgICByZXR1cm4gdmFsID09IGtleTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBwYXRjaFZhbHVlKHNlbGVjdGlvbiwgZGVmYXVsdFZhbHVlLCBpbmRleCwga2V5Pykge1xyXG4gICAgY29uc29sZS5sb2coJ3BhdGNoVmFsdWUnLCBzZWxlY3Rpb24sIGRlZmF1bHRWYWx1ZSwgaW5kZXgsIGtleSk7XHJcbiAgICBpZiAoc2VsZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuX2l0ZW1zW2luZGV4XVt0aGlzLnBhdGNoS2V5XSA9IGRlZmF1bHRWYWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdGhpcy50YWJsZURpc2FibGVkW2luZGV4XSAmJiAhdGhpcy5faXRlbXNbaW5kZXhdW3RoaXMucGF0Y2hLZXldKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBbGwgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9pdGVtc1tpbmRleF1bdGhpcy5wYXRjaEtleV0gPSB0aGlzLl9udWxsO1xyXG4gICAgICBpZiAodGhpcy50eXBlID09IHRoaXMucGF0Y2hFbXB0eSkge1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zW2luZGV4XVtrZXldID0gdGhpcy5fbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VuZERhdGEoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5faXRlbXM7XHJcbiAgICB0aGlzLnN1Ym1pdERhdGEuZW1pdChkYXRhKTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKGtleSwgaW5kZXgpIHtcclxuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIGtleSA6Jywga2V5KTtcclxuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIGluZGV4IDonLCBpbmRleCk7XHJcbiAgICBpZiAoa2V5ID09IDApIHtcclxuICAgICAgdGhpcy5lcnJvcnZhbGlkYXRpb25JbmRleCA9IGluZGV4O1xyXG4gICAgICB0aGlzLmVycm9ydmFsaWRhdGlvbktleSA9IGtleTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZXJyb3J2YWxpZGF0aW9uSW5kZXggPSAnTi9BJztcclxuICAgICAgdGhpcy5lcnJvcnZhbGlkYXRpb25LZXkgPSAnTi9BJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrU3BjaWFsQ2hhcihldmVudCwgdHlwZSkge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQsIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgLyogZGlzYWJsZSAtIGUgKi9cclxuICAgIGlmICh0eXBlID09ICdOdW1iZXInKSB7XHJcbiAgICAgIGlmIChldmVudC5jaGFyQ29kZSA9PSAxMDEpIHtcclxuICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQuY2hhckNvZGUgPT0gNDUpIHtcclxuICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQuY2hhckNvZGUgPT0gNjkpIHtcclxuICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIHZhbGlkYXRpb24gZm9yIHN0cmluZyAgKi9cclxuICAgIGlmICh0eXBlID09ICdTdHJpbmcnKSB7XHJcbiAgICAgIGlmIChldmVudC5jaGFyQ29kZSA9PSAzNiB8fFxyXG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDk1IHx8XHJcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDIgfHxcclxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSA0NSB8fFxyXG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQzIHx8XHJcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDYgfHxcclxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSA0MCB8fFxyXG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQxIHx8XHJcbiAgICAgICAgZXZlbnQuY2hhckNvZGUgPT0gMzkgfHxcclxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSAzMyB8fFxyXG4gICAgICAgIGV2ZW50LmNoYXJDb2RlID09IDMyXHJcbiAgICAgICkge1xyXG4gICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghKChldmVudC5jaGFyQ29kZSA+PSA2NSkgJiYgKGV2ZW50LmNoYXJDb2RlIDw9IDkwKSB8fFxyXG4gICAgICAoZXZlbnQuY2hhckNvZGUgPj0gOTcpICYmIChldmVudC5jaGFyQ29kZSA8PSAxMjIpIHx8IChldmVudC5jaGFyQ29kZSA+PSA0OCkgJiZcclxuICAgICAgKGV2ZW50LmNoYXJDb2RlIDw9IDU3KSkpIHtcclxuICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZXZlbnQucmV0dXJuVmFsdWUgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBzb3J0KGhlYWQsIHR5cGUsIGZvcm1hdGUpIHtcclxuICAgIGlmICh0aGlzLl9pdGVtcykge1xyXG4gICAgICBpZiAoISh0eXBlID09ICdDaGVja2JveCcpKSB7XHJcbiAgICAgICAgdGhpcy5faXRlbXMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuICthW2hlYWRdIC0gK2JbaGVhZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGUgPT0gJ051bWJlcicpIHtcclxuICAgICAgICBpZiAoZm9ybWF0ZSA9PSAnYXNzZScpIHtcclxuICAgICAgICAgIHRoaXMuX2l0ZW1zLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFbaGVhZF0gLSBiW2hlYWRdXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvcm1hdGUgPT0gJ2Rlc2MnKSB7XHJcbiAgICAgICAgICB0aGlzLl9pdGVtcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBiW2hlYWRdIC0gYVtoZWFkXVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlID09ICdTdHJpbmcnKSB7XHJcbiAgICAgICAgdGhpcy5faXRlbXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgaWYgKGFbaGVhZF0udG9Mb3dlckNhc2UoKSA8IGJbaGVhZF0udG9Mb3dlckNhc2UoKSAmJiBmb3JtYXRlID09ICdhc3NlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoYltoZWFkXS50b0xvd2VyQ2FzZSgpIDwgYVtoZWFkXS50b0xvd2VyQ2FzZSgpICYmIGZvcm1hdGUgPT0gJ2Rlc2MnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2godmFsID0+IHtcclxuICAgICAgICBkZWxldGUgdmFsWyd1bmRlZmluZWQnXTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzb3J0IC0nLCB0aGlzLl9pdGVtcywgaGVhZCwgdHlwZSwgZm9ybWF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19