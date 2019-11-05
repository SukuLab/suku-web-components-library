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
        this.defaultCount = 2;
        this.actionkey = 'actions_TblColHdr';
        this.hiddenKey = [];
        this.enableHighlighter = false;
        this.enableControls = true;
        this.enableSelectAll = false;
        this.keyData = [];
        this.disableSelectAll = false;
        this.patchEmpty = 'Processor';
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
                        console.log('element', element[key], index, mainIndex, this._items);
                        element[key] = true;
                        element[this.patchKey] = element[this.highlighterKey];
                        this._items[mainIndex][this.patchKey] = this._items[mainIndex][this.highlighterKey];
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
            element => {
                Object.keys(element).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                (key) => {
                    if (key == this.selectionKey) {
                        console.log('element', element[key]);
                        element[key] = false;
                    }
                    if (key == this.patchKey) {
                        console.log('element', element[key]);
                        element[key] = '';
                    }
                }));
                console.log('data', element);
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
        return tslib_1.__awaiter(this, void 0, void 0, /** @this {!SukuFormTableComponent} */ function* () {
            console.log('patchValue', selection, defaultValue, index, key);
            if (selection) {
                this._items[index][this.patchKey] = defaultValue;
            }
            else {
                this.selectAll = false;
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
                template: "<div class=\"col p-0\">\n  <table>\n    <tr *ngIf=\"enableSelectAll && _items[0]\">\n      <td *ngFor=\"let list of _items[0] | keys; let i=index\" [ngClass]=\"{'text-center': typeKey[list]=='Checkbox'}\">\n        <!-- checkbox -->\n        <span [ngClass]=\"{'align-checkbox': editable[j] }\" *ngIf=\"(typeKey[list]=='Checkbox')\">\n          {{!editable[j] && (list != selectionKey) || tableDisabled[j] && disableSelectAll}}\n          <mat-checkbox (change)=\"sendData();\" color=\"primary\" [disabled]=\"disableSelectAll\" [(ngModel)]=\"selectAll\"\n            (change)=\"selectAllAction()\"> {{'selectAll_ChkBox' | translate}}\n          </mat-checkbox>\n        </span>\n      </td>\n    </tr>\n  </table>\n  <div class=\"header\">\n    <div class=\"col\" [ngClass]=\"{'pt-3 pb-3': (type == 'Processor'), 'pb-4 pt-4': (type != 'Processor') }\">\n      <div class=\"row\">\n        <div class=\"col mt-auto mb-auto\">\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{titleOneCustomClass}}\"\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">\n            {{titleContent}}\n            <span class=\"pl-5\" id=\"processor\">\n              <span [ngClass]=\"{'align-checkbox': editable[j] }\" *ngIf=\"type == 'Processor'\">\n                <mat-checkbox (change)=\"sendData();\" color=\"primary\" [disabled]=\"disableSelectAll\"\n                  [(ngModel)]=\"selectAll\" (change)=\"selectAllAction()\">\n                  <span class=\"checkbox\">{{'selectAll_ChkBox' | translate}}</span>\n                </mat-checkbox>\n              </span>\n            </span>\n          </h1>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col p-0\">\n    <table class=\"table bg-white table-responsive-sm\">\n      <thead>\n        <tr>\n          <th *ngFor=\"let head of _items[0] | keys\" [ngClass]=\"{'text-center': typeKey[head]=='Checkbox'}\"\n            data-sortable=\"true\">\n            <span *ngIf=\"!(head === 'Sku')\">{{head  | translate}}</span>\n            <span *ngIf=\"head === 'Sku'\" class=\"Sku\">{{head  | translate}}</span>\n            <span *ngIf=\"!(typeKey[head] =='Checkbox')\" class=\"float-right c-pointer\">\n              <span *ngIf=\"sortable && !(head === 'actions_TblColHdr')\" (click)=\"sort(head,typeKey[head],'asse');\"\n                class='fas fa-caret-up displayBlock'></span>\n              <span *ngIf=\"sortable && !(head === 'actions_TblColHdr')\" (click)=\"sort(head,typeKey[head],'desc');\"\n                class='fas fa-caret-down displayBlock lineH'></span>\n            </span>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of _items;let j=index\">\n          <td\n            [style.width.%]=\"((type == 'Producer') ? '' : ((typeKey[list] == 'Checkbox') ? list?.length * 0.45 : list?.length * 1 ))\"\n            [ngClass]=\"{'border-enable': checkValid(list), 'text-center': typeKey[list]=='Checkbox' }\"\n            *ngFor=\"let list of item | keys; let i=index\" [style.background-color]=\"(checkValid(list) ?\n            ((item[selectionKey] && item[highlighterKey] && enableHighlighter) ? '#a3ded8':( !(item[selectionKey] &&\n            enableHighlighter) ?\n            '#d3d9dc' : '#f8dbb4')) : '')\n            ||\n            ((item[selectionKey] && (list == patchKey)) ? '#d3d9dc' : \n            ( ((list == patchKey) &&(item[patchKey])) ? '#a3ded8':\n             ((list == patchKey) ? '#f8dbb4' :'')))\">\n            <span *ngIf=\"!editable[j] && (list != actionkey) && (typeKey[list]!='Checkbox') &&\n               !checkValid(list) && (list != patchKey)\" id=\"{{list | trim}}{{j}}\">\n              {{item[list]}}\n            </span>\n            <!-- input -->\n            <span *ngIf=\"editable[j] && (list != actionkey) && ( typeKey[list]=='String' || typeKey[list]=='Number')\">\n              <input (keyup)=\"sendData()\" (keypress)=\"checkSpcialChar($event,typeKey[list])\" class=\"form-control\"\n                [(ngModel)]=\"item[list]\" min=\"0\" [maxLength]=\"25\" type=\"{{(typeKey[list]=='Number')?'number':'text'}}\"\n                (change)=\"validate(item[list],j)\" [disabled]=\"tableDisabled[j]\" id=\"{{list | trim}}{{j}}\"\n                *ngIf=\"editable[j] && (list != actionkey) && ( typeKey[list]=='String' || typeKey[list]=='Number')\" />\n              <p id=\"{{j}}\" class=\"errorMessage\" *ngIf=\"(item[list]  && item[list] == 0)\">\n                {{errorMessageOne | translate}}\n              </p>\n            </span>\n\n            <input type=\"date\" (keyup)=\"sendData()\" [disabled]=\"tableDisabled[j]\" data-date=\"\"\n              data-date-format=\"mm/dd/yyyy\" class=\"form-control\" id=\"{{list | trim}}{{j}}\"\n              *ngIf=\"editable[j] && (list != actionkey) && typeKey[list]=='Date'\" [(ngModel)]=\"item[list]\" />\n\n            <!-- checkbox -->\n            <span class=\"align-checkbox\" *ngIf=\"(typeKey[list]=='Checkbox')\">\n              <mat-checkbox color=\"primary\" id=\"{{list | trim}}{{j}}\"\n                (change)=\"sendData();patchValue(item[selectionKey], item[highlighterKey], j, highlighterKey)\"\n                [disabled]=\"(!editable[j] && (list != selectionKey) ) || tableDisabled[j]\" [(ngModel)]=\"item[list]\">\n              </mat-checkbox>\n            </span>\n\n            <!-- select -->\n            <select class=\"form-control\" (change)=\"sendData()\" [disabled]=\"tableDisabled[j]\" *ngIf=\"editable[j] && (list != actionkey) \n            && ( typeKey[list]!='String' && typeKey[list]!='Number' && typeKey[list]!='Checkbox' &&\n            typeKey[list] !='Date')\" [(ngModel)]=\"item[list]\">\n              <option *ngFor=\"let c of typeKey[list];let k=index\" id=\"asset{{k}}\" [ngValue]=\"c\"> {{c}} </option>\n            </select>\n\n            <!-- input- highlighterKey -->\n            <span *ngIf=\"checkValid(list) && (list != actionkey)\">\n              <span *ngFor=\"let data of keyData;let dataIndex=index\">\n                <span *ngIf=\"(list == data.key)\">\n                  <input type=\"{{(typeKey[list]=='Number')?'number':'text'}}\" id=\"asset{{j}}{{dataIndex}}\"\n                    (keyup)=\"sendData()\" [ngClass]=\"{'disabled': !item[selectionKey]}\"\n                    [disabled]=\"!item[selectionKey] || tableDisabled[j]\" class=\"form-control sample\"\n                    id=\"{{list | trim}}{{j}}\" [(ngModel)]=\"item[data.key]\" (change)=\"validate(item[data.key],dataIndex)\"\n                    *ngIf=\"checkValid(list) && (list != actionkey) && highlighterKey\"\n                    (keypress)=\"checkSpcialChar($event,typeKey[list])\" min=\"0\" />\n                </span>\n                <p id=\"{{dataIndex}}\" class=\"errorMessage\" *ngIf=\"(item[data.key]  && item[data.key] == 0)\">\n                  {{errorMessageOne  | translate}}</p>\n              </span>\n            </span>\n\n            <!-- input -patchKey -->\n            <span *ngIf=\"(list == patchKey) && (list != actionkey)\n            && patchKey\">\n              <input type=\"{{(typeKey[list]=='Number')?'number':'text'}}\" id=\"asset{{j}}{{selectionKey}}\"\n                (keyup)=\"sendData();\" [ngClass]=\"{'disabled':\n              item[selectionKey]}\" [disabled]=\"item[selectionKey] || tableDisabled[j]\" class=\"form-control sample\"\n                [(ngModel)]=\"item[patchKey]\" *ngIf=\"(list == patchKey) && (list != actionkey)\n              && patchKey\" id=\"{{selectionKey | trim}}{{j}}Patch\" (change)=\"validate(item[patchKey],selectionKey)\"\n                min=\"0\" [maxLength]=\"10\" (keypress)=\"checkSpcialChar($event,typeKey[list]);\" />\n              <p id=\"asset{{j}}{{selectionKey}}\" class=\"errorMessage\" *ngIf=\"(item[patchKey]  && item[patchKey] == 0)\">\n                {{errorMessageOne  | translate}}\n              </p>\n            </span>\n\n            <span class=\"col p-0 pl-2\" (click)=\"edit(j, item);sendData()\"\n              *ngIf=\"list == actionkey && !editable[j] && !tableDisabled[j]\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\n                [ngClass]=\"{'btn-edit' : editable[j]}\">\n                {{'edit_TblBtn' | translate}}\n              </span>\n            </span>\n            <span class=\"col p-0 pl-2\" *ngIf=\"(list == actionkey) && editable[j]  && !tableDisabled[j]\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\n                (click)=\"edit(j, item);sendData()\" [ngClass]=\"{'btn-edit' : editable[j]}\">\n                {{'save_TblBtn' | translate}}\n              </span>\n            </span>\n            <span class=\"col c-pointer pl-4\" *ngIf=\"(list == actionkey) && !tableDisabled[j]\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\n                (click)=\"removedata(j, item);sendData()\" [ngClass]=\"{'btn-edit' : editable[j]}\">\n                {{'remove_TblBtn' | translate}}\n              </span>\n            </span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col text-right\" *ngIf=\"enableControls\">\n    <span class=\"p-2\">\n      <a class=\"secondary-btn\" id=\"addOneRow\" [style.font-size.rem]=\"controlsSize\" (click)=\"addTable(1,_items?.length)\"\n        color=\"primary\">{{'add1Row_TblBtn' | translate}}</a>\n    </span>\n    <span class=\"p-2\">\n      <a class=\"secondary-btn\" id=\"addTenRow\" [style.font-size.rem]=\"controlsSize\"\n        (click)=\"addTable(10, _items?.length)\" color=\"primary\">{{'add10Rows_TblBtn' | translate}}</a>\n    </span>\n  </div>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWZvcm0tdGFibGUvc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzdGLE1BQU0sT0FBTyxzQkFBc0I7SUE0RmpDO1FBMUZBLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFFWixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBS1ksa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFFakIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLGlCQUFZLEdBQUcsMkJBQTJCLENBQUM7UUFDN0MsZUFBVSxHQUFHLE1BQU0sQ0FBQztRQUdoQixpQkFBWSxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEUsV0FBTSxHQUFHLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEQsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFXbEMsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsY0FBUyxHQUFHLG1CQUFtQixDQUFDO1FBaUNoQyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2Ysc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXhCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHYixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsZUFBVSxHQUFHLFdBQVcsQ0FBQztRQUNOLG9CQUFlLEdBQUcsaUNBQWlDLENBQUM7UUFDdEUsU0FBSSxHQUFHLElB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a0M7O0lBQ2xDLDRDQUFrQzs7SUFDbEMsaURBQWdGOztJQUNoRixzQ0FBb0M7O0lBQ3BDLHdDQUFzQzs7SUFDdEMsNENBQTBDOztJQUMxQyw0Q0FBMEM7O0lBQzFDLDBDQUE0Qzs7SUFDNUMsdUNBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWZvcm0tdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUZvcm1UYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGo7XG4gIF9pdGVtcyA9IFtdO1xuICBfaXRlbXNLZXk7XG4gIGVkaXRhYmxlID0gW107XG4gIGVycm9ydmFsaWRhdGlvbkluZGV4O1xuICBlcnJvcnZhbGlkYXRpb25LZXk7XG4gIEBJbnB1dCgndGl0bGUtb25lLWlkJykgdGl0bGVPbmVJZDtcbiAgQElucHV0KCd0aXRsZS1vbmUtc2l6ZScpIHRpdGxlT25lU2l6ZTtcbiAgQElucHV0KCd0aXRsZS1vbmUtY29sb3InKSB0aXRsZU9uZUNvbG9yID0gJ3doaXRlJztcbiAgQElucHV0KCd0aXRsZS1vbmUtd2VpZ2h0JykgdGl0bGVPbmVXZWlnaHQ7XG4gIEBJbnB1dCgndGl0bGUtb25lLWN1c3RvbS1jbGFzcycpIHRpdGxlT25lQ3VzdG9tQ2xhc3MgPSAnJztcbiAgQElucHV0KCd0aXRsZS1jb250ZW50JykgdGl0bGVDb250ZW50ID0gJ0VudGVyIGFuaW1hbCBpbmZvcm1hdGlvbjonO1xuICBASW5wdXQoJ2hlYWRlci1zaXplJykgaGVhZGVyU2l6ZSA9ICcxNHB4JztcbiAgQElucHV0KCdoZWFkZXItY29sb3InKSBoZWFkZXJDb2xvcjtcbiAgQElucHV0KCdoZWFkZXItd2VpZ2h0JykgaGVhZGVyV2VpZ2h0O1xuICBASW5wdXQoJ3N0YXR1cy1iZy1zdHlsZScpIGNvbG9yUGFsbGV0ZSA9IFsnI2EzZGVkOCcsICcjZjhkYmI0JywgJyNjN2MzZmEnLCAnZ3JheSddO1xuICBASW5wdXQoJ3N0YXR1cycpIHN0YXR1cyA9IFsnY29tcGxldGVkJywgJ25vdC1jb21wbGV0ZWQnLCAncGVuZGluZycsICdvdGhlcnMnXTtcbiAgQElucHV0KCd0YWJsZURpc2FibGVkJykgdGFibGVEaXNhYmxlZCA9IFtdO1xuICBASW5wdXQoKVxuICBzZXQgZW5hYmxlRWRpdEluZGV4KHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgK3ZhbDsgaSsrKSB7XG4gICAgICAgIHRoaXMuZWRpdGFibGVbaV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBASW5wdXQoKSB0eXBlS2V5O1xuICBASW5wdXQoKSB0eXBlO1xuICBASW5wdXQoKSBkZWZhdWx0Q291bnQgPSAyO1xuICBASW5wdXQoKSBhY3Rpb25rZXkgPSAnYWN0aW9uc19UYmxDb2xIZHInO1xuICBASW5wdXQoKVxuICBnZXQgaXRlbXMoKSB7XG4gICAgY29uc29sZS5sb2coJ2l0ZW1zIC0tLS0tLS0tLS0tLScsIHRoaXMuaXRlbXMpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLml0ZW1zO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBkYXRhLmZpbHRlcih2YWwgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndmFsJywgdmFsKTtcbiAgICAgICAgZGVsZXRlIHZhbFsndW5kZWZpbmVkJ107XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbiAgc2V0IGl0ZW1zKHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdfaXRlbXMnLCB2YWwpO1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICB2YWwuZmlsdGVyKGVsID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygndmFsJywgZWwpO1xuICAgICAgICAgIGRlbGV0ZSBlbFsndW5kZWZpbmVkJ107XG4gICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2l0ZW1zID0gdmFsO1xuICAgIH1cbiAgICBpZiAodGhpcy5faXRlbXNbMF0pIHtcbiAgICAgIHRoaXMuX2l0ZW1zS2V5ID0gT2JqZWN0LmtleXModGhpcy5faXRlbXNbMF0pO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSBzZWxlY3Rpb25LZXk7XG4gIEBJbnB1dCgpIGhpZ2hsaWdodGVyS2V5O1xuICBASW5wdXQoKSBwYXRjaEtleTtcbiAgQElucHV0KCkgaGlkZGVuS2V5ID0gW107XG4gIEBJbnB1dCgpIGVuYWJsZUhpZ2hsaWdodGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGVuYWJsZUNvbnRyb2xzID0gdHJ1ZTtcbiAgQElucHV0KCkgZW5hYmxlU2VsZWN0QWxsID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNlbGVjdEFsbDtcbiAgQElucHV0KCkga2V5RGF0YSA9IFtdO1xuICBASW5wdXQoKSBjb250cm9sc1NpemU7XG4gIEBJbnB1dCgpIGNvbnRyb2xDdXN0b21DbGFzcztcbiAgQElucHV0KCkgZGlzYWJsZVNlbGVjdEFsbCA9IGZhbHNlO1xuICBASW5wdXQoKSBwYXRjaEVtcHR5ID0gJ1Byb2Nlc3Nvcic7XG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS1vbmUnKSBlcnJvck1lc3NhZ2VPbmUgPSAndmFsdWUgc2hvdWxkIGJlICBncmVhdGVyIHRoZW4gMCc7XG4gIEBPdXRwdXQoKSBzYXZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc3VibWl0RGF0YSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZvcm1TdGF0dXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgndGFibGUtc29ydGFibGUnKSBzb3J0YWJsZSA9ICdmYWxzZSc7XG4gIF9udWxsID0gbnVsbDtcbiAgQEhvc3RMaXN0ZW5lcigncGFzdGUnLCBbJyRldmVudCddKSBibG9ja1Bhc3RlKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnZScsIGUpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NvcHknLCBbJyRldmVudCddKSBibG9ja0NvcHkoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2N1dCcsIFsnJGV2ZW50J10pIGJsb2NrQ3V0KGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGFkZFRhYmxlKHZhbCwgZWRpdEluZGV4KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWw7IGkrKykge1xuICAgICAgdGhpcy5lZGl0YWJsZVtlZGl0SW5kZXggKyBpXSA9IHRydWU7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IHt9O1xuICAgICAgY29uc3QgdHlwZUtleSA9IHRoaXMudHlwZUtleTtcbiAgICAgIE9iamVjdC5rZXlzKHR5cGVLZXkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodHlwZUtleVtrZXldID09ICdDaGVja2JveCcpIHtcbiAgICAgICAgICB0ZW1wbGF0ZVtrZXldID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZUtleVtrZXldID09ICdTdHJpbmcnIHx8IHR5cGVLZXlba2V5XSA9PSAnTnVtYmVyJykge1xuICAgICAgICAgIHRlbXBsYXRlW2tleV0gPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wbGF0ZVtrZXldID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZW5hYmxlQ29udHJvbHMpIHtcbiAgICAgICAgdGVtcGxhdGVbdGhpcy5hY3Rpb25rZXldID0gJyc7XG4gICAgICB9XG4gICAgICB0aGlzLl9pdGVtcy5wdXNoKHRlbXBsYXRlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ19pdGVtcycsIHRoaXMuX2l0ZW1zKTtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnX2l0ZW1zJywgdGhpcy5faXRlbXMpO1xuICB9XG5cbiAgZWRpdChpLCBpdGVtKSB7XG4gICAgY29uc29sZS5sb2coaSk7XG4gICAgaWYgKHRoaXMuZWRpdGFibGVbaV0pIHtcbiAgICAgIHRoaXMuZWRpdGFibGVbaV0gPSBmYWxzZTtcbiAgICAgIHRoaXMuc2F2ZS5lbWl0KGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVkaXRhYmxlW2ldID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVkYXRhKGksIGl0ZW0pIHtcbiAgICBjb25zb2xlLmxvZygnaW5kZXgnLCBpLCB0aGlzLl9pdGVtcy5sZW5ndGgpO1xuICAgIGlmICh0aGlzLl9pdGVtcykge1xuICAgICAgaWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCAhPSAxKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICBkYXRhOiBpdGVtXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVtb3ZlLmVtaXQoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgIGRhdGE6IGl0ZW1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZW1vdmUuZW1pdChkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja1ZhbGlkKGxpc3QpIHtcbiAgICBpZiAodGhpcy5rZXlEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMua2V5RGF0YS5zb21lKHZhbCA9PiB7XG4gICAgICAgIHJldHVybiB2YWwua2V5ID09IGxpc3Q7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RBbGxBY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VsZWN0QWxsID0gdGhpcy5zZWxlY3RBbGw7XG4gICAgaWYgKHNlbGVjdEFsbCkge1xuICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoZWxlbWVudCwgbWFpbkluZGV4KSA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKGVsZW1lbnQpLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoa2V5ID09IHRoaXMuc2VsZWN0aW9uS2V5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWxlbWVudCcsIGVsZW1lbnRba2V5XSwgaW5kZXgsIG1haW5JbmRleCwgdGhpcy5faXRlbXMpO1xuICAgICAgICAgICAgZWxlbWVudFtrZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsZW1lbnRbdGhpcy5wYXRjaEtleV0gPSBlbGVtZW50W3RoaXMuaGlnaGxpZ2h0ZXJLZXldO1xuICAgICAgICAgICAgdGhpcy5faXRlbXNbbWFpbkluZGV4XVt0aGlzLnBhdGNoS2V5XSA9IHRoaXMuX2l0ZW1zW21haW5JbmRleF1bdGhpcy5oaWdobGlnaHRlcktleV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyhlbGVtZW50KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBpZiAoa2V5ID09IHRoaXMuc2VsZWN0aW9uS2V5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWxlbWVudCcsIGVsZW1lbnRba2V5XSk7XG4gICAgICAgICAgICBlbGVtZW50W2tleV0gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGtleSA9PSB0aGlzLnBhdGNoS2V5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWxlbWVudCcsIGVsZW1lbnRba2V5XSk7XG4gICAgICAgICAgICBlbGVtZW50W2tleV0gPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygnZGF0YScsIGVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2hrSGlkZGVuS2V5KGtleSkge1xuICAgIGlmICh0aGlzLmhpZGRlbktleS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmhpZGRlbktleS5zb21lKHZhbCA9PiB7XG4gICAgICAgIHJldHVybiB2YWwgPT0ga2V5O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcGF0Y2hWYWx1ZShzZWxlY3Rpb24sIGRlZmF1bHRWYWx1ZSwgaW5kZXgsIGtleT8pIHtcbiAgICBjb25zb2xlLmxvZygncGF0Y2hWYWx1ZScsIHNlbGVjdGlvbiwgZGVmYXVsdFZhbHVlLCBpbmRleCwga2V5KTtcbiAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLl9pdGVtc1tpbmRleF1bdGhpcy5wYXRjaEtleV0gPSBkZWZhdWx0VmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsID0gZmFsc2U7XG4gICAgICB0aGlzLl9pdGVtc1tpbmRleF1bdGhpcy5wYXRjaEtleV0gPSB0aGlzLl9udWxsO1xuICAgICAgaWYgKHRoaXMudHlwZSA9PSB0aGlzLnBhdGNoRW1wdHkpIHtcbiAgICAgICAgdGhpcy5faXRlbXNbaW5kZXhdW2tleV0gPSB0aGlzLl9udWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNlbmREYXRhKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9pdGVtcztcbiAgICB0aGlzLnN1Ym1pdERhdGEuZW1pdChkYXRhKTtcbiAgfVxuXG4gIHZhbGlkYXRlKGtleSwgaW5kZXgpIHtcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyBrZXkgOicsIGtleSk7XG4gICAgY29uc29sZS5sb2coJ3RoaXMgaXMgaW5kZXggOicsIGluZGV4KTtcbiAgICBpZiAoa2V5ID09IDApIHtcbiAgICAgIHRoaXMuZXJyb3J2YWxpZGF0aW9uSW5kZXggPSBpbmRleDtcbiAgICAgIHRoaXMuZXJyb3J2YWxpZGF0aW9uS2V5ID0ga2V5O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9ydmFsaWRhdGlvbkluZGV4ID0gJ04vQSc7XG4gICAgICB0aGlzLmVycm9ydmFsaWRhdGlvbktleSA9ICdOL0EnO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrU3BjaWFsQ2hhcihldmVudCwgdHlwZSkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LCBldmVudC50YXJnZXQudmFsdWUpO1xuXG4gICAgLyogZGlzYWJsZSAtIGUgKi9cbiAgICBpZiAodHlwZSA9PSAnTnVtYmVyJykge1xuICAgICAgaWYgKGV2ZW50LmNoYXJDb2RlID09IDEwMSkge1xuICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuY2hhckNvZGUgPT0gNDUpIHtcbiAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmNoYXJDb2RlID09IDY5KSB7XG4gICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiB2YWxpZGF0aW9uIGZvciBzdHJpbmcgICovXG4gICAgaWYgKHR5cGUgPT0gJ1N0cmluZycpIHtcbiAgICAgIGlmIChldmVudC5jaGFyQ29kZSA9PSAzNiB8fFxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSA5NSB8fFxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSA0MiB8fFxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSA0NSB8fFxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSA0MyB8fFxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSA0NiB8fFxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSA0MCB8fFxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSA0MSB8fFxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSAzOSB8fFxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSAzMyB8fFxuICAgICAgICBldmVudC5jaGFyQ29kZSA9PSAzMlxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEoKGV2ZW50LmNoYXJDb2RlID49IDY1KSAmJiAoZXZlbnQuY2hhckNvZGUgPD0gOTApIHx8XG4gICAgICAoZXZlbnQuY2hhckNvZGUgPj0gOTcpICYmIChldmVudC5jaGFyQ29kZSA8PSAxMjIpIHx8IChldmVudC5jaGFyQ29kZSA+PSA0OCkgJiZcbiAgICAgIChldmVudC5jaGFyQ29kZSA8PSA1NykpKSB7XG4gICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBldmVudC5yZXR1cm5WYWx1ZSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzb3J0KGhlYWQsIHR5cGUsIGZvcm1hdGUpIHtcbiAgICBpZiAodGhpcy5faXRlbXMpIHtcbiAgICAgIGlmICghKHR5cGUgPT0gJ0NoZWNrYm94JykpIHtcbiAgICAgICAgdGhpcy5faXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgIHJldHVybiArYVtoZWFkXSAtICtiW2hlYWRdO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09ICdOdW1iZXInKSB7XG4gICAgICAgIGlmIChmb3JtYXRlID09ICdhc3NlJykge1xuICAgICAgICAgIHRoaXMuX2l0ZW1zLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhW2hlYWRdIC0gYltoZWFkXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXRlID09ICdkZXNjJykge1xuICAgICAgICAgIHRoaXMuX2l0ZW1zLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBiW2hlYWRdIC0gYVtoZWFkXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PSAnU3RyaW5nJykge1xuICAgICAgICB0aGlzLl9pdGVtcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgaWYgKGFbaGVhZF0udG9Mb3dlckNhc2UoKSA8IGJbaGVhZF0udG9Mb3dlckNhc2UoKSAmJiBmb3JtYXRlID09ICdhc3NlJykge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYltoZWFkXS50b0xvd2VyQ2FzZSgpIDwgYVtoZWFkXS50b0xvd2VyQ2FzZSgpICYmIGZvcm1hdGUgPT0gJ2Rlc2MnKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2godmFsID0+IHtcbiAgICAgICAgZGVsZXRlIHZhbFsndW5kZWZpbmVkJ107XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCdzb3J0IC0nLCB0aGlzLl9pdGVtcywgaGVhZCwgdHlwZSwgZm9ybWF0ZSk7XG4gICAgfVxuICB9XG5cblxufVxuIl19