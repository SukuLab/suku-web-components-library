/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
        console.log('items ------------');
        return this._items;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set items(val) {
        if (val) {
            console.log('_items', val);
            this._items = val;
        }
        if (this._items[0]) {
            this._itemsKey = Object.keys(this._items[0]);
        }
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
     * @return {?}
     */
    patchValue(selection, defaultValue, index) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (selection) {
                this._items[index][this.patchKey] = defaultValue;
            }
            else {
                this.selectAll = false;
                this._items[index][this.patchKey] = this._null;
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
     * @return {?}
     */
    checkSpcialChar(event) {
        console.log(event, event.target.value);
        // if (event.key == '0') {
        //   if (event.target.value == '0') {
        //     event.target.value = '';
        //     event.returnValue = false;
        //     return false;
        //   }
        // }
        if (event.charCode == 36 ||
            event.charCode == 95 ||
            event.charCode == 42 ||
            event.charCode == 45 ||
            event.charCode == 43 ||
            event.charCode == 40 ||
            event.charCode == 41 ||
            event.charCode == 39 ||
            event.charCode == 33 ||
            event.charCode == 32) {
            event.returnValue = true;
            return true;
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
                // this._items.sort((a, b) => {
                //   return +a[head] - +b[head];
                // });
                this._items.sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                function (a, b) {
                    if (a[head] < b[head] && formate == 'asse') {
                        return 1;
                    }
                    if (b[head] < a[head] && formate == 'desc') {
                        return -1;
                    }
                    return 0;
                }));
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
    }
}
SukuFormTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-form-table',
                template: "<div class=\"col p-0\">\n  <table>\n    <tr *ngIf=\"enableSelectAll && _items[0]\">\n      <td *ngFor=\"let list of _items[0] | keys; let i=index\" [ngClass]=\"{'text-center': typeKey[list]=='Checkbox'}\">\n        <!-- checkbox -->\n        <span [ngClass]=\"{'align-checkbox': editable[j] }\" *ngIf=\"(typeKey[list]=='Checkbox')\">\n          <mat-checkbox (change)=\"sendData();\" color=\"primary\"\n            [disabled]=\"!editable[j] && (list != selectionKey) || tableDisabled\" [(ngModel)]=\"selectAll\"\n            (change)=\"selectAllAction()\"> {{'selectAll_ChkBox' | translate}}\n          </mat-checkbox>\n        </span>\n      </td>\n    </tr>\n  </table>\n  <div class=\"header\">\n    <div class=\"col\" [ngClass]=\"{'pt-3 pb-3': (type == 'Processor'), 'pb-4 pt-4': (type != 'Processor') }\">\n      <div class=\"row\">\n        <div class=\"col mt-auto mb-auto\">\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{titleOneCustomClass}}\"\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">\n            {{titleContent}}\n            <span class=\"pl-5\" id=\"processor\">\n              <span [ngClass]=\"{'align-checkbox': editable[j] }\" *ngIf=\"type == 'Processor'\">\n                <mat-checkbox (change)=\"sendData();\" color=\"primary\" [disabled]=\"tableDisabled\" [(ngModel)]=\"selectAll\"\n                  (change)=\"selectAllAction()\">\n                  <span class=\"checkbox\">{{'selectAll_ChkBox' | translate}}</span>\n                </mat-checkbox>\n              </span>\n            </span>\n          </h1>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col p-0\">\n    <table class=\"table bg-white table-responsive-sm\">\n      <thead>\n        <tr>\n          <th *ngFor=\"let head of _items[0] | keys\" [ngClass]=\"{'text-center': typeKey[head]=='Checkbox'}\"\n            data-sortable=\"true\">\n            <span *ngIf=\"!(head === 'Sku')\">{{head  | translate}}</span>\n            <span *ngIf=\"head === 'Sku'\" class=\"Sku\">{{head  | translate}}</span>\n            <span *ngIf=\"!(typeKey[head] =='Checkbox')\" class=\"float-right c-pointer\">\n              <span *ngIf=\"sortable\" (click)=\"sort(head,typeKey[head],'asse');\"\n                class='fas fa-caret-up displayBlock'></span>\n              <span *ngIf=\"sortable\" (click)=\"sort(head,typeKey[head],'desc');\"\n                class='fas fa-caret-down displayBlock lineH'></span>\n            </span>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of _items;let j=index\">\n          <td [ngClass]=\"{'border-enable': checkValid(list), 'text-center': typeKey[list]=='Checkbox' }\"\n            *ngFor=\"let list of item | keys; let i=index\" [style.background-color]=\"(checkValid(list) ?\n            ((item[selectionKey] && item[highlighterKey] && enableHighlighter) ? '#a3ded8':( !(item[selectionKey] &&\n            enableHighlighter) ?\n            '#d3d9dc' : '#f8dbb4')) : '')\n            ||\n            ((item[selectionKey] && (list == patchKey)) ? '#d3d9dc' : \n            ( ((list == patchKey) &&(item[patchKey])) ? '#a3ded8':\n             ((list == patchKey) ? '#f8dbb4' :'')))\">\n            <span\n              *ngIf=\"!editable[j] && (list != actionkey) && (typeKey[list]!='Checkbox') && !checkValid(list) && (list != patchKey)\">\n              {{item[list]}}\n            </span>\n            <!-- input -->\n            <span *ngIf=\"editable[j] && (list != actionkey) && ( typeKey[list]=='String' || typeKey[list]=='Number')\">\n              <input (keyup)=\"sendData()\" (keypress)=\"checkSpcialChar($event)\" class=\"form-control\"\n                [(ngModel)]=\"item[list]\" [maxLength]=\"25\" type=\"{{(typeKey[list]=='Number')?'number':'text'}}\"\n                (change)=\"validate(item[list],j)\" [disabled]=\"tableDisabled\"\n                *ngIf=\"editable[j] && (list != actionkey) && ( typeKey[list]=='String' || typeKey[list]=='Number')\" />\n              <p id=\"{{j}}\" class=\"errorMessage\" *ngIf=\"(item[list]  && item[list] == 0)\">\n                {{errorMessageOne | translate}}\n              </p>\n            </span>\n\n            <input type=\"date\" (keyup)=\"sendData()\" [disabled]=\"tableDisabled\" data-date=\"\"\n              data-date-format=\"mm/dd/yyyy\" class=\"form-control\"\n              *ngIf=\"editable[j] && (list != actionkey) && typeKey[list]=='Date'\" [(ngModel)]=\"item[list]\" />\n\n            <!-- checkbox -->\n            <span class=\"align-checkbox\" *ngIf=\"(typeKey[list]=='Checkbox')\">\n              <mat-checkbox color=\"primary\"\n                (change)=\"sendData();patchValue(item[selectionKey], item[highlighterKey], j)\"\n                [disabled]=\"(!editable[j] && (list != selectionKey) ) || tableDisabled\" [(ngModel)]=\"item[list]\">\n              </mat-checkbox>\n            </span>\n\n            <!-- select -->\n            <select class=\"form-control\" (change)=\"sendData()\" [disabled]=\"tableDisabled\" *ngIf=\"editable[j] && (list != actionkey) \n            && ( typeKey[list]!='String' && typeKey[list]!='Number' && typeKey[list]!='Checkbox' &&\n            typeKey[list] !='Date')\" [(ngModel)]=\"item[list]\">\n              <option *ngFor=\"let c of typeKey[list];let k=index\" id=\"asset{{k}}\" [ngValue]=\"c\"> {{c}} </option>\n            </select>\n\n            <!-- input- highlighterKey -->\n            <span *ngIf=\"checkValid(list) && (list != actionkey)\">\n              <span *ngFor=\"let data of keyData;let dataIndex=index\">\n                <span *ngIf=\"(list == data.key)\">\n                  <input type=\"{{(typeKey[list]=='Number')?'number':'text'}}\" id=\"asset{{j}}{{dataIndex}}\"\n                    (keyup)=\"sendData()\" [ngClass]=\"{'disabled': !item[selectionKey]}\"\n                    [disabled]=\"!item[selectionKey] || tableDisabled\" class=\"form-control sample\"\n                    [(ngModel)]=\"item[data.key]\" (change)=\"validate(item[data.key],dataIndex)\"\n                    *ngIf=\"checkValid(list) && (list != actionkey) && highlighterKey\" />\n                </span>\n                <p id=\"{{dataIndex}}\" class=\"errorMessage\" *ngIf=\"(item[data.key]  && item[data.key] == 0)\">\n                  {{errorMessageOne  | translate}}</p>\n              </span>\n            </span>\n\n            <!-- input -patchKey -->\n            <span *ngIf=\"(list == patchKey) && (list != actionkey)\n            && patchKey\">\n              <input type=\"{{(typeKey[list]=='Number')?'number':'text'}}\" id=\"asset{{j}}{{selectionKey}}\"\n                (keyup)=\"sendData();\" [ngClass]=\"{'disabled':\n              item[selectionKey]}\" [disabled]=\"item[selectionKey] || tableDisabled\" class=\"form-control sample\"\n                [(ngModel)]=\"item[patchKey]\" *ngIf=\"(list == patchKey) && (list != actionkey)\n              && patchKey\" (change)=\"validate(item[patchKey],selectionKey)\" />\n              <p id=\"asset{{j}}{{selectionKey}}\" class=\"errorMessage\" *ngIf=\"(item[patchKey]  && item[patchKey] == 0)\">\n                {{errorMessageOne  | translate}}\n              </p>\n            </span>\n\n            <span class=\"col p-0 pl-2\" (click)=\"edit(j, item);sendData()\"\n              *ngIf=\"list == actionkey && !editable[j] && !tableDisabled\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\n                [ngClass]=\"{'btn-edit' : editable[j]}\">\n                {{'edit_TblBtn' | translate}}\n              </span>\n            </span>\n            <span class=\"col p-0 pl-2\" *ngIf=\"(list == actionkey) && editable[j]  && !tableDisabled\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\n                (click)=\"edit(j, item);sendData()\" [ngClass]=\"{'btn-edit' : editable[j]}\">\n                {{'save_TblBtn' | translate}}\n              </span>\n            </span>\n            <span class=\"col c-pointer pl-4\" *ngIf=\"(list == actionkey) && !tableDisabled\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\n                (click)=\"removedata(j, item);sendData()\" [ngClass]=\"{'btn-edit' : editable[j]}\">\n                {{'remove_TblBtn' | translate}}\n              </span>\n            </span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col text-right\" *ngIf=\"enableControls && !tableDisabled\">\n    <span class=\"p-2\">\n      <a class=\"secondary-btn\" id=\"addOneRow\" [style.font-size.rem]=\"controlsSize\" (click)=\"addTable(1,_items?.length)\"\n        color=\"primary\">{{'add1Row_TblBtn' | translate}}</a>\n    </span>\n    <span class=\"p-2\">\n      <a class=\"secondary-btn\" id=\"addTenRow\" [style.font-size.rem]=\"controlsSize\"\n        (click)=\"addTable(10, _items?.length)\" color=\"primary\">{{'add10Rows_TblBtn' | translate}}</a>\n    </span>\n  </div>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.header{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.title{font-family:var(--suku-primary-font);font-weight:600;font-size:var(--suku-font-size-5);text-transform:uppercase}.table{font-family:var(--suku-primary-font);box-shadow:0 1px 2px 0 rgba(0,0,0,.1)}table td{padding-left:1%}.btn-edit{line-height:2!important}input,select{width:100%;height:inherit!important}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0}td{width:15%}.form-control:focus{border:1px solid #ced4da;border-color:#ced4da!important;box-shadow:none!important}:host ::ng-deep.mat-checkbox{vertical-align:sub!important}th:last-child{width:12%!important}td:last-child{width:13%!important}button:focus{outline:0!important}.secondary-btn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:var(--suku-text-heading);border-bottom:3.5px solid;border-color:var(--suku-primary-color);word-break:break-word!important;cursor:pointer}.align-checkbox{font-size:18px}.c-pointer{cursor:pointer}table>tbody>tr>td{flex-wrap:wrap!important}.sample{background:inherit!important;border:none!important}.disabled{cursor:not-allowed}select option{border:1px solid #757575}option{border:1px solid #aaa;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,.1);color:#555}.errorMessage{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-1);color:red;padding:0 .75rem;margin-top:-6px!important;margin-bottom:0!important}.table th{padding:.5rem .5rem .5rem 1.25rem;border-bottom:2px solid #dee2e68a;border-left:1px solid #f2f2f2}.table td{padding:.25rem .25rem .25rem 1.25rem;border:1px solid #f2f2f2}.border-enable{border:1px solid #92929240}.hidden{display:none}table{width:100%}.checkbox{font-family:var(--suku-primary-font);color:#fff}:host #processor{font-family:var(--suku-primary-font);font-weight:500!important}:host #processor ::ng-deep.mat-checkbox-frame{border-color:rgba(255,255,255,.54)!important}.Sku{text-transform:uppercase}.float-right{float:right}.displayBlock{display:block}.lineH{line-height:.1}"]
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
    errorMessageOne: [{ type: Input, args: ['error-message-one',] }],
    save: [{ type: Output }],
    remove: [{ type: Output }],
    submitData: [{ type: Output }],
    formStatus: [{ type: Output }],
    sortable: [{ type: Input, args: ['table-sortable',] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWZvcm0tdGFibGUvc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0UsTUFBTSxPQUFPLHNCQUFzQjtJQWlFakM7UUEvREEsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUVaLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFLWSxrQkFBYSxHQUFHLE9BQU8sQ0FBQztRQUVqQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDbEMsaUJBQVksR0FBRywyQkFBMkIsQ0FBQztRQUM3QyxlQUFVLEdBQUcsTUFBTSxDQUFDO1FBR2hCLGlCQUFZLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsRSxXQUFNLEdBQUcsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQVdyQyxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixjQUFTLEdBQUcsbUJBQW1CLENBQUM7UUFrQmhDLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFFeEIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUdNLG9CQUFlLEdBQUcsaUNBQWlDLENBQUM7UUFDdEUsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsZUFB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QiwyQ0FBeUM7O0lBZXpDLDhDQUFzQjs7SUFDdEIsZ0RBQXdCOztJQUN4QiwwQ0FBa0I7O0lBQ2xCLDJDQUF3Qjs7SUFDeEIsbURBQW1DOztJQUNuQyxnREFBK0I7O0lBQy9CLGlEQUFpQzs7SUFDakMsMkNBQW1COztJQUNuQix5Q0FBc0I7O0lBQ3RCLDhDQUFzQjs7SUFDdEIsb0RBQTRCOztJQUM1QixpREFBZ0Y7O0lBQ2hGLHNDQUFvQzs7SUFDcEMsd0NBQXNDOztJQUN0Qyw0Q0FBMEM7O0lBQzFDLDRDQUEwQzs7SUFDMUMsMENBQTRDOztJQUU1Qyx1Q0FBYSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWZvcm0tdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUZvcm1UYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGo7XG4gIF9pdGVtcyA9IFtdO1xuICBfaXRlbXNLZXk7XG4gIGVkaXRhYmxlID0gW107XG4gIGVycm9ydmFsaWRhdGlvbkluZGV4O1xuICBlcnJvcnZhbGlkYXRpb25LZXk7XG4gIEBJbnB1dCgndGl0bGUtb25lLWlkJykgdGl0bGVPbmVJZDtcbiAgQElucHV0KCd0aXRsZS1vbmUtc2l6ZScpIHRpdGxlT25lU2l6ZTtcbiAgQElucHV0KCd0aXRsZS1vbmUtY29sb3InKSB0aXRsZU9uZUNvbG9yID0gJ3doaXRlJztcbiAgQElucHV0KCd0aXRsZS1vbmUtd2VpZ2h0JykgdGl0bGVPbmVXZWlnaHQ7XG4gIEBJbnB1dCgndGl0bGUtb25lLWN1c3RvbS1jbGFzcycpIHRpdGxlT25lQ3VzdG9tQ2xhc3MgPSAnJztcbiAgQElucHV0KCd0aXRsZS1jb250ZW50JykgdGl0bGVDb250ZW50ID0gJ0VudGVyIGFuaW1hbCBpbmZvcm1hdGlvbjonO1xuICBASW5wdXQoJ2hlYWRlci1zaXplJykgaGVhZGVyU2l6ZSA9ICcxNHB4JztcbiAgQElucHV0KCdoZWFkZXItY29sb3InKSBoZWFkZXJDb2xvcjtcbiAgQElucHV0KCdoZWFkZXItd2VpZ2h0JykgaGVhZGVyV2VpZ2h0O1xuICBASW5wdXQoJ3N0YXR1cy1iZy1zdHlsZScpIGNvbG9yUGFsbGV0ZSA9IFsnI2EzZGVkOCcsICcjZjhkYmI0JywgJyNjN2MzZmEnLCAnZ3JheSddO1xuICBASW5wdXQoJ3N0YXR1cycpIHN0YXR1cyA9IFsnY29tcGxldGVkJywgJ25vdC1jb21wbGV0ZWQnLCAncGVuZGluZycsICdvdGhlcnMnXTtcbiAgQElucHV0KCd0YWJsZURpc2FibGVkJykgdGFibGVEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzZXQgZW5hYmxlRWRpdEluZGV4KHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgK3ZhbDsgaSsrKSB7XG4gICAgICAgIHRoaXMuZWRpdGFibGVbaV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBASW5wdXQoKSB0eXBlS2V5O1xuICBASW5wdXQoKSB0eXBlO1xuICBASW5wdXQoKSBkZWZhdWx0Q291bnQgPSAyO1xuICBASW5wdXQoKSBhY3Rpb25rZXkgPSAnYWN0aW9uc19UYmxDb2xIZHInO1xuICBASW5wdXQoKVxuICBnZXQgaXRlbXMoKSB7XG4gICAgY29uc29sZS5sb2coJ2l0ZW1zIC0tLS0tLS0tLS0tLScpO1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuICBzZXQgaXRlbXModmFsKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgY29uc29sZS5sb2coJ19pdGVtcycsIHZhbCk7XG4gICAgICB0aGlzLl9pdGVtcyA9IHZhbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2l0ZW1zWzBdKSB7XG4gICAgICB0aGlzLl9pdGVtc0tleSA9IE9iamVjdC5rZXlzKHRoaXMuX2l0ZW1zWzBdKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgc2VsZWN0aW9uS2V5O1xuICBASW5wdXQoKSBoaWdobGlnaHRlcktleTtcbiAgQElucHV0KCkgcGF0Y2hLZXk7XG4gIEBJbnB1dCgpIGhpZGRlbktleSA9IFtdO1xuICBASW5wdXQoKSBlbmFibGVIaWdobGlnaHRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBlbmFibGVDb250cm9scyA9IHRydWU7XG4gIEBJbnB1dCgpIGVuYWJsZVNlbGVjdEFsbCA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWxlY3RBbGw7XG4gIEBJbnB1dCgpIGtleURhdGEgPSBbXTtcbiAgQElucHV0KCkgY29udHJvbHNTaXplO1xuICBASW5wdXQoKSBjb250cm9sQ3VzdG9tQ2xhc3M7XG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS1vbmUnKSBlcnJvck1lc3NhZ2VPbmUgPSAndmFsdWUgc2hvdWxkIGJlICBncmVhdGVyIHRoZW4gMCc7XG4gIEBPdXRwdXQoKSBzYXZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc3VibWl0RGF0YSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZvcm1TdGF0dXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgndGFibGUtc29ydGFibGUnKSBzb3J0YWJsZSA9ICdmYWxzZSc7XG5cbiAgX251bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBhZGRUYWJsZSh2YWwsIGVkaXRJbmRleCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsOyBpKyspIHtcbiAgICAgIHRoaXMuZWRpdGFibGVbZWRpdEluZGV4ICsgaV0gPSB0cnVlO1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSB7fTtcbiAgICAgIGNvbnN0IHR5cGVLZXkgPSB0aGlzLnR5cGVLZXk7XG4gICAgICBPYmplY3Qua2V5cyh0eXBlS2V5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHR5cGVLZXlba2V5XSA9PSAnQ2hlY2tib3gnKSB7XG4gICAgICAgICAgdGVtcGxhdGVba2V5XSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVLZXlba2V5XSA9PSAnU3RyaW5nJyB8fCB0eXBlS2V5W2tleV0gPT0gJ051bWJlcicpIHtcbiAgICAgICAgICB0ZW1wbGF0ZVtrZXldID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcGxhdGVba2V5XSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmVuYWJsZUNvbnRyb2xzKSB7XG4gICAgICAgIHRlbXBsYXRlW3RoaXMuYWN0aW9ua2V5XSA9ICcnO1xuICAgICAgfVxuICAgICAgdGhpcy5faXRlbXMucHVzaCh0ZW1wbGF0ZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdfaXRlbXMnLCB0aGlzLl9pdGVtcyk7XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgY29uc29sZS5sb2coJ19pdGVtcycsIHRoaXMuX2l0ZW1zKTtcbiAgfVxuXG4gIGVkaXQoaSwgaXRlbSkge1xuICAgIGNvbnNvbGUubG9nKGkpO1xuICAgIGlmICh0aGlzLmVkaXRhYmxlW2ldKSB7XG4gICAgICB0aGlzLmVkaXRhYmxlW2ldID0gZmFsc2U7XG4gICAgICB0aGlzLnNhdmUuZW1pdChpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lZGl0YWJsZVtpXSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlZGF0YShpLCBpdGVtKSB7XG4gICAgY29uc29sZS5sb2coJ2luZGV4JywgaSwgdGhpcy5faXRlbXMubGVuZ3RoKTtcbiAgICBpZiAodGhpcy5faXRlbXMpIHtcbiAgICAgIGlmICh0aGlzLl9pdGVtcy5sZW5ndGggIT0gMSkge1xuICAgICAgICB0aGlzLl9pdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgZGF0YTogaXRlbVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlbW92ZS5lbWl0KGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICBkYXRhOiBpdGVtXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVtb3ZlLmVtaXQoZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tWYWxpZChsaXN0KSB7XG4gICAgaWYgKHRoaXMua2V5RGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmtleURhdGEuc29tZSh2YWwgPT4ge1xuICAgICAgICByZXR1cm4gdmFsLmtleSA9PSBsaXN0O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0QWxsQWN0aW9uKCkge1xuICAgIGNvbnN0IHNlbGVjdEFsbCA9IHRoaXMuc2VsZWN0QWxsO1xuICAgIGlmIChzZWxlY3RBbGwpIHtcbiAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGVsZW1lbnQsIG1haW5JbmRleCkgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyhlbGVtZW50KS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGtleSA9PSB0aGlzLnNlbGVjdGlvbktleSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VsZW1lbnQnLCBlbGVtZW50W2tleV0sIGluZGV4LCBtYWluSW5kZXgsIHRoaXMuX2l0ZW1zKTtcbiAgICAgICAgICAgIGVsZW1lbnRba2V5XSA9IHRydWU7XG4gICAgICAgICAgICBlbGVtZW50W3RoaXMucGF0Y2hLZXldID0gZWxlbWVudFt0aGlzLmhpZ2hsaWdodGVyS2V5XTtcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zW21haW5JbmRleF1bdGhpcy5wYXRjaEtleV0gPSB0aGlzLl9pdGVtc1ttYWluSW5kZXhdW3RoaXMuaGlnaGxpZ2h0ZXJLZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMoZWxlbWVudCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgaWYgKGtleSA9PSB0aGlzLnNlbGVjdGlvbktleSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VsZW1lbnQnLCBlbGVtZW50W2tleV0pO1xuICAgICAgICAgICAgZWxlbWVudFtrZXldID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChrZXkgPT0gdGhpcy5wYXRjaEtleSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VsZW1lbnQnLCBlbGVtZW50W2tleV0pO1xuICAgICAgICAgICAgZWxlbWVudFtrZXldID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNoa0hpZGRlbktleShrZXkpIHtcbiAgICBpZiAodGhpcy5oaWRkZW5LZXkubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5oaWRkZW5LZXkuc29tZSh2YWwgPT4ge1xuICAgICAgICByZXR1cm4gdmFsID09IGtleTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHBhdGNoVmFsdWUoc2VsZWN0aW9uLCBkZWZhdWx0VmFsdWUsIGluZGV4KSB7XG4gICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgdGhpcy5faXRlbXNbaW5kZXhdW3RoaXMucGF0Y2hLZXldID0gZGVmYXVsdFZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbCA9IGZhbHNlO1xuICAgICAgdGhpcy5faXRlbXNbaW5kZXhdW3RoaXMucGF0Y2hLZXldID0gdGhpcy5fbnVsbDtcbiAgICB9XG4gIH1cblxuICBzZW5kRGF0YSgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5faXRlbXM7XG4gICAgdGhpcy5zdWJtaXREYXRhLmVtaXQoZGF0YSk7XG4gIH1cblxuICB2YWxpZGF0ZShrZXksIGluZGV4KSB7XG4gICAgY29uc29sZS5sb2coJ3RoaXMgaXMga2V5IDonLCBrZXkpO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIGluZGV4IDonLCBpbmRleCk7XG4gICAgaWYgKGtleSA9PSAwKSB7XG4gICAgICB0aGlzLmVycm9ydmFsaWRhdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB0aGlzLmVycm9ydmFsaWRhdGlvbktleSA9IGtleTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcnJvcnZhbGlkYXRpb25JbmRleCA9ICdOL0EnO1xuICAgICAgdGhpcy5lcnJvcnZhbGlkYXRpb25LZXkgPSAnTi9BJztcbiAgICB9XG4gIH1cblxuICBjaGVja1NwY2lhbENoYXIoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudCwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcblxuICAgIC8vIGlmIChldmVudC5rZXkgPT0gJzAnKSB7XG4gICAgLy8gICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09ICcwJykge1xuICAgIC8vICAgICBldmVudC50YXJnZXQudmFsdWUgPSAnJztcbiAgICAvLyAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIGlmIChldmVudC5jaGFyQ29kZSA9PSAzNiB8fFxuICAgICAgZXZlbnQuY2hhckNvZGUgPT0gOTUgfHxcbiAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQyIHx8XG4gICAgICBldmVudC5jaGFyQ29kZSA9PSA0NSB8fFxuICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDMgfHxcbiAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQwIHx8XG4gICAgICBldmVudC5jaGFyQ29kZSA9PSA0MSB8fFxuICAgICAgZXZlbnQuY2hhckNvZGUgPT0gMzkgfHxcbiAgICAgIGV2ZW50LmNoYXJDb2RlID09IDMzIHx8XG4gICAgICBldmVudC5jaGFyQ29kZSA9PSAzMlxuICAgICkge1xuICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCEoKGV2ZW50LmNoYXJDb2RlID49IDY1KSAmJiAoZXZlbnQuY2hhckNvZGUgPD0gOTApIHx8XG4gICAgICAoZXZlbnQuY2hhckNvZGUgPj0gOTcpICYmIChldmVudC5jaGFyQ29kZSA8PSAxMjIpIHx8IChldmVudC5jaGFyQ29kZSA+PSA0OCkgJiZcbiAgICAgIChldmVudC5jaGFyQ29kZSA8PSA1NykpKSB7XG4gICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBldmVudC5yZXR1cm5WYWx1ZSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzb3J0KGhlYWQsIHR5cGUsIGZvcm1hdGUpIHtcbiAgICBpZiAodGhpcy5faXRlbXMpIHtcbiAgICAgIGlmICghKHR5cGUgPT0gJ0NoZWNrYm94JykpIHtcbiAgICAgICAgdGhpcy5faXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgIHJldHVybiArYVtoZWFkXSAtICtiW2hlYWRdO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09ICdOdW1iZXInKSB7XG4gICAgICAgIC8vIHRoaXMuX2l0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgLy8gICByZXR1cm4gK2FbaGVhZF0gLSArYltoZWFkXTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIHRoaXMuX2l0ZW1zLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcblxuICAgICAgICAgIGlmIChhW2hlYWRdIDwgYltoZWFkXSAmJiBmb3JtYXRlID09ICdhc3NlJykge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChiW2hlYWRdIDwgYVtoZWFkXSAmJiBmb3JtYXRlID09ICdkZXNjJykge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PSAnU3RyaW5nJykge1xuICAgICAgICB0aGlzLl9pdGVtcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgaWYgKGFbaGVhZF0udG9Mb3dlckNhc2UoKSA8IGJbaGVhZF0udG9Mb3dlckNhc2UoKSAmJiBmb3JtYXRlID09ICdhc3NlJykge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYltoZWFkXS50b0xvd2VyQ2FzZSgpIDwgYVtoZWFkXS50b0xvd2VyQ2FzZSgpICYmIGZvcm1hdGUgPT0gJ2Rlc2MnKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdzb3J0IC0nLCB0aGlzLl9pdGVtcywgaGVhZCwgdHlwZSwgZm9ybWF0ZSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==