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
        this.save = new EventEmitter();
        this.remove = new EventEmitter();
        this.submitData = new EventEmitter();
        this.formStatus = new EventEmitter();
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
        this._items.splice(i, 1);
        this.remove.emit(item);
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
        console.log("this is key :", key);
        console.log("this is index :", index);
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
                template: "<div class=\"col p-0\">\n  <table>\n    <tr *ngIf=\"enableSelectAll && _items[0]\">\n      <td *ngFor=\"let list of _items[0] | keys; let i=index\" [ngClass]=\"{'text-center': typeKey[list]=='Checkbox'}\">\n        <!-- checkbox -->\n        <span [ngClass]=\"{'align-checkbox': editable[j] }\" *ngIf=\"(typeKey[list]=='Checkbox')\">\n          <mat-checkbox (change)=\"sendData();\" color=\"primary\"\n            [disabled]=\"!editable[j] && (list != selectionKey) || tableDisabled\" [(ngModel)]=\"selectAll\"\n            (change)=\"selectAllAction()\"> Select All\n          </mat-checkbox>\n        </span>\n      </td>\n    </tr>\n  </table>\n  <div class=\"header\">\n    <div class=\"col\" [ngClass]=\"{'pt-3 pb-3': (type == 'Processor'), 'pb-4 pt-4': (type != 'Processor') }\">\n      <div class=\"row\">\n        <div class=\"col mt-auto mb-auto\">\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{titleOneCustomClass}}\"\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">\n            {{titleContent}}\n            <span class=\"pl-5\" id=\"processor\">\n              <span [ngClass]=\"{'align-checkbox': editable[j] }\" *ngIf=\"type == 'Processor'\">\n                <mat-checkbox (change)=\"sendData();\" color=\"primary\" [disabled]=\"tableDisabled\" [(ngModel)]=\"selectAll\"\n                  (change)=\"selectAllAction()\">\n                  <span class=\"checkbox\">{{'selectAll_ChkBox' | translate}}</span>\n                </mat-checkbox>\n              </span>\n            </span>\n          </h1>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col p-0\">\n    <table class=\"table bg-white table-responsive-sm\" >\n      <thead>\n        <tr>\n          <th *ngFor=\"let head of _items[0] | keys\" [ngClass]=\"{'text-center': typeKey[head]=='Checkbox'}\" data-sortable = \"true\" >\n            <span *ngIf=\"!(head === 'Sku')\">{{head  | translate}}</span>\n            <span *ngIf=\"head === 'Sku'\" class=\"Sku\">{{head  | translate}}</span> \n           <span *ngIf=\"!(typeKey[head] =='Checkbox')\"class=\"float-right\" >\n              <span (click)=\"sort(head,typeKey[head],'asse');\"  class='fas fa-arrow-up'></span>\n              <span (click)=\"sort(head,typeKey[head],'desc');\"  class='fas fa-arrow-down'></span>\n           </span>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of _items;let j=index\">\n          <td [ngClass]=\"{'border-enable': checkValid(list), 'text-center': typeKey[list]=='Checkbox' }\"\n            *ngFor=\"let list of item | keys; let i=index\" [style.background-color]=\"(checkValid(list) ?\n            ((item[selectionKey] && item[highlighterKey] && enableHighlighter) ? '#a3ded8':( !(item[selectionKey] &&\n            enableHighlighter) ?\n            '#d3d9dc' : '#f8dbb4')) : '')\n            ||\n            ((item[selectionKey] && (list == patchKey)) ? '#d3d9dc' : \n            ( ((list == patchKey) &&(item[patchKey])) ? '#a3ded8':\n             ((list == patchKey) ? '#f8dbb4' :'')))\">\n            <span\n              *ngIf=\"!editable[j] && (list != actionkey) && (typeKey[list]!='Checkbox') && !checkValid(list) && (list != patchKey)\">\n              {{item[list]}}\n            </span>\n            <!-- input -->\n            <span *ngIf=\"editable[j] && (list != actionkey) && ( typeKey[list]=='String' || typeKey[list]=='Number')\">\n              <input (keyup)=\"sendData()\" (keypress)=\"checkSpcialChar($event)\" class=\"form-control\"\n                [(ngModel)]=\"item[list]\" [maxLength]=\"25\" type=\"{{(typeKey[list]=='Number')?'number':'text'}}\"\n                (change)=\"validate(item[list],j)\" [disabled]=\"tableDisabled\"\n                *ngIf=\"editable[j] && (list != actionkey) && ( typeKey[list]=='String' || typeKey[list]=='Number')\" />\n              <p id=\"{{j}}\" class=\"errorMessage\"\n                *ngIf=\"(j == errorvalidationIndex) && (item[list] == errorvalidationKey )\">value should be greater then\n                0</p>\n            </span>\n\n            <input type=\"date\" (keyup)=\"sendData()\" [disabled]=\"tableDisabled\" data-date=\"\"\n              data-date-format=\"mm/dd/yyyy\" class=\"form-control\"\n              *ngIf=\"editable[j] && (list != actionkey) && typeKey[list]=='Date'\" [(ngModel)]=\"item[list]\" />\n\n            <!-- checkbox -->\n            <span class=\"align-checkbox\" *ngIf=\"(typeKey[list]=='Checkbox')\">\n              <mat-checkbox color=\"primary\"\n                (change)=\"sendData();patchValue(item[selectionKey], item[highlighterKey], j)\"\n                [disabled]=\"(!editable[j] && (list != selectionKey) ) || tableDisabled\" [(ngModel)]=\"item[list]\">\n              </mat-checkbox>\n            </span>\n\n            <!-- select -->\n            <select class=\"form-control\" (change)=\"sendData()\" [disabled]=\"tableDisabled\" *ngIf=\"editable[j] && (list != actionkey) \n            && ( typeKey[list]!='String' && typeKey[list]!='Number' && typeKey[list]!='Checkbox' &&\n            typeKey[list] !='Date')\" [(ngModel)]=\"item[list]\">\n              <option *ngFor=\"let c of typeKey[list];let k=index\" id=\"asset{{k}}\" [ngValue]=\"c\"> {{c}} </option>\n            </select>\n\n            <!-- input- highlighterKey -->\n            <span *ngIf=\"checkValid(list) && (list != actionkey)\">\n              <span *ngFor=\"let data of keyData;let dataIndex=index\">\n                <span *ngIf=\"(list == data.key)\">\n                  <input type=\"{{(typeKey[list]=='Number')?'number':'text'}}\" id=\"asset{{j}}{{dataIndex}}\"\n                    (keyup)=\"sendData()\" [ngClass]=\"{'disabled': !item[selectionKey]}\"\n                    [disabled]=\"!item[selectionKey] || tableDisabled\" class=\"form-control sample\"\n                    [(ngModel)]=\"item[data.key]\" (change)=\"validate(item[data.key],dataIndex)\"\n                    *ngIf=\"checkValid(list) && (list != actionkey) && highlighterKey\" />\n                </span>\n                <p id=\"{{dataIndex}}\" class=\"errorMessage\"\n                  *ngIf=\"(dataIndex == errorvalidationIndex) && (item[data.key] == errorvalidationKey )\">value should be\n                  greater then 0</p>\n              </span>\n            </span>\n\n            <!-- input -patchKey -->\n            <span *ngIf=\"(list == patchKey) && (list != actionkey)\n            && patchKey\">\n              <input type=\"{{(typeKey[list]=='Number')?'number':'text'}}\" id=\"asset{{j}}{{selectionKey}}\"\n                (keyup)=\"sendData();\" [ngClass]=\"{'disabled':\n              item[selectionKey]}\" [disabled]=\"item[selectionKey] || tableDisabled\" class=\"form-control sample\"\n                [(ngModel)]=\"item[patchKey]\" *ngIf=\"(list == patchKey) && (list != actionkey)\n              && patchKey\" (change)=\"validate(item[patchKey],selectionKey)\" />\n              <p id=\"asset{{j}}{{selectionKey}}\" class=\"errorMessage\"\n                *ngIf=\"(selectionKey == errorvalidationIndex) && (item[patchKey] == errorvalidationKey )\">value should\n                be greater then 0</p>\n            </span>\n\n            <span class=\"col p-0 pl-2\" (click)=\"edit(j, item);sendData()\"\n              *ngIf=\"list == actionkey && !editable[j] && !tableDisabled\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\n                [ngClass]=\"{'btn-edit' : editable[j]}\">\n                {{'edit_TblBtn' | translate}}\n              </span>\n            </span>\n            <span class=\"col p-0 pl-2\" *ngIf=\"list == actionkey && editable[j]  && !tableDisabled\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\n                (click)=\"edit(j, item);sendData()\" [ngClass]=\"{'btn-edit' : editable[j]}\">\n                {{'save_TblBtn' | translate}}\n              </span>\n            </span>\n            <span class=\"col c-pointer pl-4\" *ngIf=\"list == actionkey && !tableDisabled\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\n                (click)=\"removedata(j, item);sendData()\" [ngClass]=\"{'btn-edit' : editable[j]}\">\n                {{'remove_TblBtn' | translate}}\n              </span>\n            </span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col text-right\" *ngIf=\"enableControls && !tableDisabled\">\n    <span class=\"p-2\">\n      <a class=\"secondary-btn\" id=\"addOneRow\" [style.font-size.rem]=\"controlsSize\" (click)=\"addTable(1,_items?.length)\"\n        color=\"primary\">{{'add1Row_TblBtn' | translate}}</a>\n    </span>\n    <span class=\"p-2\">\n      <a class=\"secondary-btn\" id=\"addTenRow\" [style.font-size.rem]=\"controlsSize\"\n        (click)=\"addTable(10, _items?.length)\" color=\"primary\">{{'add10Rows_TblBtn' | translate}}</a>\n    </span>\n  </div>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.header{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.title{font-family:var(--suku-primary-font);font-weight:600;font-size:var(--suku-font-size-5);text-transform:uppercase}.table{font-family:var(--suku-primary-font);box-shadow:0 1px 2px 0 rgba(0,0,0,.1)}table td{padding-left:1%}.btn-edit{line-height:2!important}input,select{width:100%;height:inherit!important}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0}td{width:15%}.form-control:focus{border:1px solid #ced4da;border-color:#ced4da!important;box-shadow:none!important}:host ::ng-deep.mat-checkbox{vertical-align:sub!important}th:last-child{width:12%!important}td:last-child{width:13%!important}button:focus{outline:0!important}.secondary-btn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:var(--suku-text-heading);border-bottom:3.5px solid;border-color:var(--suku-primary-color);word-break:break-word!important;cursor:pointer}.align-checkbox{font-size:18px}.c-pointer{cursor:pointer}table>tbody>tr>td{flex-wrap:wrap!important}.sample{background:inherit!important;border:none!important}.disabled{cursor:not-allowed}select option{border:1px solid #757575}option{border:1px solid #aaa;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,.1);color:#555}.errorMessage{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-1);color:red;padding:0 .75rem;margin-top:-6px!important;margin-bottom:0!important}.table th{padding:.5rem .5rem .5rem 1.25rem;border-bottom:2px solid #dee2e68a;border-left:1px solid #f2f2f2}.table td{padding:.25rem .25rem .25rem 1.25rem;border:1px solid #f2f2f2}.border-enable{border:1px solid #92929240}.hidden{display:none}table{width:100%}.checkbox{font-family:var(--suku-primary-font);color:#fff}:host #processor{font-family:var(--suku-primary-font);font-weight:500!important}:host #processor ::ng-deep.mat-checkbox-frame{border-color:rgba(255,255,255,.54)!important}.Sku{text-transform:uppercase}.float-right{float:right}"]
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
    save: [{ type: Output }],
    remove: [{ type: Output }],
    submitData: [{ type: Output }],
    formStatus: [{ type: Output }]
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
    SukuFormTableComponent.prototype.save;
    /** @type {?} */
    SukuFormTableComponent.prototype.remove;
    /** @type {?} */
    SukuFormTableComponent.prototype.submitData;
    /** @type {?} */
    SukuFormTableComponent.prototype.formStatus;
    /** @type {?} */
    SukuFormTableComponent.prototype._null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWZvcm0tdGFibGUvc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0UsTUFBTSxPQUFPLHNCQUFzQjtJQStEakM7UUE3REEsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUVaLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFLWSxrQkFBYSxHQUFHLE9BQU8sQ0FBQztRQUVqQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDbEMsaUJBQVksR0FBRywyQkFBMkIsQ0FBQztRQUM3QyxlQUFVLEdBQUcsTUFBTSxDQUFDO1FBR2hCLGlCQUFZLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsRSxXQUFNLEdBQUcsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQVdyQyxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixjQUFTLEdBQUcsbUJBQW1CLENBQUM7UUFrQmhDLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFFeEIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUdaLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FB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Q0FDTCxLQUFLO21CQUNMLE1BQU07cUJBQ04sTUFBTTt5QkFDTixNQUFNO3lCQUNOLE1BQU07Ozs7SUExRFAsbUNBQUU7O0lBQ0Ysd0NBQVk7O0lBQ1osMkNBQVU7O0lBQ1YsMENBQWM7O0lBQ2Qsc0RBQXFCOztJQUNyQixvREFBbUI7O0lBQ25CLDRDQUFrQzs7SUFDbEMsOENBQXNDOztJQUN0QywrQ0FBa0Q7O0lBQ2xELGdEQUEwQzs7SUFDMUMscURBQTBEOztJQUMxRCw4Q0FBbUU7O0lBQ25FLDRDQUEwQzs7SUFDMUMsNkNBQW1DOztJQUNuQyw4Q0FBcUM7O0lBQ3JDLDhDQUFtRjs7SUFDbkYsd0NBQThFOztJQUM5RSwrQ0FBOEM7O0lBUzlDLHlDQUFpQjs7SUFDakIsc0NBQWM7O0lBQ2QsOENBQTBCOztJQUMxQiwyQ0FBeUM7O0lBZXpDLDhDQUFzQjs7SUFDdEIsZ0RBQXdCOztJQUN4QiwwQ0FBa0I7O0lBQ2xCLDJDQUF3Qjs7SUFDeEIsbURBQW1DOztJQUNuQyxnREFBK0I7O0lBQy9CLGlEQUFpQzs7SUFDakMsMkNBQW1COztJQUNuQix5Q0FBc0I7O0lBQ3RCLDhDQUFzQjs7SUFDdEIsb0RBQTRCOztJQUM1QixzQ0FBb0M7O0lBQ3BDLHdDQUFzQzs7SUFDdEMsNENBQTBDOztJQUMxQyw0Q0FBMEM7O0lBRTFDLHVDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZm9ybS10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWZvcm0tdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWZvcm0tdGFibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Rm9ybVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgajtcbiAgX2l0ZW1zID0gW107XG4gIF9pdGVtc0tleTtcbiAgZWRpdGFibGUgPSBbXTtcbiAgZXJyb3J2YWxpZGF0aW9uSW5kZXg7XG4gIGVycm9ydmFsaWRhdGlvbktleTtcbiAgQElucHV0KCd0aXRsZS1vbmUtaWQnKSB0aXRsZU9uZUlkO1xuICBASW5wdXQoJ3RpdGxlLW9uZS1zaXplJykgdGl0bGVPbmVTaXplO1xuICBASW5wdXQoJ3RpdGxlLW9uZS1jb2xvcicpIHRpdGxlT25lQ29sb3IgPSAnd2hpdGUnO1xuICBASW5wdXQoJ3RpdGxlLW9uZS13ZWlnaHQnKSB0aXRsZU9uZVdlaWdodDtcbiAgQElucHV0KCd0aXRsZS1vbmUtY3VzdG9tLWNsYXNzJykgdGl0bGVPbmVDdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoJ3RpdGxlLWNvbnRlbnQnKSB0aXRsZUNvbnRlbnQgPSAnRW50ZXIgYW5pbWFsIGluZm9ybWF0aW9uOic7XG4gIEBJbnB1dCgnaGVhZGVyLXNpemUnKSBoZWFkZXJTaXplID0gJzE0cHgnO1xuICBASW5wdXQoJ2hlYWRlci1jb2xvcicpIGhlYWRlckNvbG9yO1xuICBASW5wdXQoJ2hlYWRlci13ZWlnaHQnKSBoZWFkZXJXZWlnaHQ7XG4gIEBJbnB1dCgnc3RhdHVzLWJnLXN0eWxlJykgY29sb3JQYWxsZXRlID0gWycjYTNkZWQ4JywgJyNmOGRiYjQnLCAnI2M3YzNmYScsICdncmF5J107XG4gIEBJbnB1dCgnc3RhdHVzJykgc3RhdHVzID0gWydjb21wbGV0ZWQnLCAnbm90LWNvbXBsZXRlZCcsICdwZW5kaW5nJywgJ290aGVycyddO1xuICBASW5wdXQoJ3RhYmxlRGlzYWJsZWQnKSB0YWJsZURpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCBlbmFibGVFZGl0SW5kZXgodmFsKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCArdmFsOyBpKyspIHtcbiAgICAgICAgdGhpcy5lZGl0YWJsZVtpXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpIHR5cGVLZXk7XG4gIEBJbnB1dCgpIHR5cGU7XG4gIEBJbnB1dCgpIGRlZmF1bHRDb3VudCA9IDI7XG4gIEBJbnB1dCgpIGFjdGlvbmtleSA9ICdhY3Rpb25zX1RibENvbEhkcic7XG4gIEBJbnB1dCgpXG4gIGdldCBpdGVtcygpIHtcbiAgICBjb25zb2xlLmxvZygnaXRlbXMgLS0tLS0tLS0tLS0tJyk7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG4gIHNldCBpdGVtcyh2YWwpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICBjb25zb2xlLmxvZygnX2l0ZW1zJywgdmFsKTtcbiAgICAgIHRoaXMuX2l0ZW1zID0gdmFsO1xuICAgIH1cbiAgICBpZiAodGhpcy5faXRlbXNbMF0pIHtcbiAgICAgIHRoaXMuX2l0ZW1zS2V5ID0gT2JqZWN0LmtleXModGhpcy5faXRlbXNbMF0pO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSBzZWxlY3Rpb25LZXk7XG4gIEBJbnB1dCgpIGhpZ2hsaWdodGVyS2V5O1xuICBASW5wdXQoKSBwYXRjaEtleTtcbiAgQElucHV0KCkgaGlkZGVuS2V5ID0gW107XG4gIEBJbnB1dCgpIGVuYWJsZUhpZ2hsaWdodGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGVuYWJsZUNvbnRyb2xzID0gdHJ1ZTtcbiAgQElucHV0KCkgZW5hYmxlU2VsZWN0QWxsID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNlbGVjdEFsbDtcbiAgQElucHV0KCkga2V5RGF0YSA9IFtdO1xuICBASW5wdXQoKSBjb250cm9sc1NpemU7XG4gIEBJbnB1dCgpIGNvbnRyb2xDdXN0b21DbGFzcztcbiAgQE91dHB1dCgpIHNhdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzdWJtaXREYXRhID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZm9ybVN0YXR1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBfbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGFkZFRhYmxlKHZhbCwgZWRpdEluZGV4KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWw7IGkrKykge1xuICAgICAgdGhpcy5lZGl0YWJsZVtlZGl0SW5kZXggKyBpXSA9IHRydWU7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IHt9O1xuICAgICAgY29uc3QgdHlwZUtleSA9IHRoaXMudHlwZUtleTtcbiAgICAgIE9iamVjdC5rZXlzKHR5cGVLZXkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodHlwZUtleVtrZXldID09ICdDaGVja2JveCcpIHtcbiAgICAgICAgICB0ZW1wbGF0ZVtrZXldID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZUtleVtrZXldID09ICdTdHJpbmcnIHx8IHR5cGVLZXlba2V5XSA9PSAnTnVtYmVyJykge1xuICAgICAgICAgIHRlbXBsYXRlW2tleV0gPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wbGF0ZVtrZXldID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZW5hYmxlQ29udHJvbHMpIHtcbiAgICAgICAgdGVtcGxhdGVbdGhpcy5hY3Rpb25rZXldID0gJyc7XG4gICAgICB9XG4gICAgICB0aGlzLl9pdGVtcy5wdXNoKHRlbXBsYXRlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ19pdGVtcycsIHRoaXMuX2l0ZW1zKTtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnX2l0ZW1zJywgdGhpcy5faXRlbXMpO1xuICB9XG5cbiAgZWRpdChpLCBpdGVtKSB7XG4gICAgY29uc29sZS5sb2coaSk7XG4gICAgaWYgKHRoaXMuZWRpdGFibGVbaV0pIHtcbiAgICAgIHRoaXMuZWRpdGFibGVbaV0gPSBmYWxzZTtcbiAgICAgIHRoaXMuc2F2ZS5lbWl0KGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVkaXRhYmxlW2ldID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVkYXRhKGksIGl0ZW0pIHtcbiAgICB0aGlzLl9pdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgdGhpcy5yZW1vdmUuZW1pdChpdGVtKTtcbiAgfVxuXG4gIGNoZWNrVmFsaWQobGlzdCkge1xuICAgIGlmICh0aGlzLmtleURhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5rZXlEYXRhLnNvbWUodmFsID0+IHtcbiAgICAgICAgcmV0dXJuIHZhbC5rZXkgPT0gbGlzdDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEFsbEFjdGlvbigpIHtcbiAgICBjb25zdCBzZWxlY3RBbGwgPSB0aGlzLnNlbGVjdEFsbDtcbiAgICBpZiAoc2VsZWN0QWxsKSB7XG4gICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChlbGVtZW50LCBtYWluSW5kZXgpID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMoZWxlbWVudCkuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChrZXkgPT0gdGhpcy5zZWxlY3Rpb25LZXkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudFtrZXldLCBpbmRleCwgbWFpbkluZGV4LCB0aGlzLl9pdGVtcyk7XG4gICAgICAgICAgICBlbGVtZW50W2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgZWxlbWVudFt0aGlzLnBhdGNoS2V5XSA9IGVsZW1lbnRbdGhpcy5oaWdobGlnaHRlcktleV07XG4gICAgICAgICAgICB0aGlzLl9pdGVtc1ttYWluSW5kZXhdW3RoaXMucGF0Y2hLZXldID0gdGhpcy5faXRlbXNbbWFpbkluZGV4XVt0aGlzLmhpZ2hsaWdodGVyS2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygnZGF0YScsIGVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKGVsZW1lbnQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGlmIChrZXkgPT0gdGhpcy5zZWxlY3Rpb25LZXkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudFtrZXldKTtcbiAgICAgICAgICAgIGVsZW1lbnRba2V5XSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoa2V5ID09IHRoaXMucGF0Y2hLZXkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudFtrZXldKTtcbiAgICAgICAgICAgIGVsZW1lbnRba2V5XSA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjaGtIaWRkZW5LZXkoa2V5KSB7XG4gICAgaWYgKHRoaXMuaGlkZGVuS2V5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaGlkZGVuS2V5LnNvbWUodmFsID0+IHtcbiAgICAgICAgcmV0dXJuIHZhbCA9PSBrZXk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBwYXRjaFZhbHVlKHNlbGVjdGlvbiwgZGVmYXVsdFZhbHVlLCBpbmRleCkge1xuICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgIHRoaXMuX2l0ZW1zW2luZGV4XVt0aGlzLnBhdGNoS2V5XSA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RBbGwgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2l0ZW1zW2luZGV4XVt0aGlzLnBhdGNoS2V5XSA9IHRoaXMuX251bGw7XG4gICAgfVxuICB9XG5cbiAgc2VuZERhdGEoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2l0ZW1zO1xuICAgIHRoaXMuc3VibWl0RGF0YS5lbWl0KGRhdGEpO1xuICB9XG5cbiAgdmFsaWRhdGUoa2V5LCBpbmRleCkge1xuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBrZXkgOlwiLCBrZXkpO1xuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBpbmRleCA6XCIsIGluZGV4KTtcbiAgICBpZiAoa2V5ID09IDApIHtcbiAgICAgIHRoaXMuZXJyb3J2YWxpZGF0aW9uSW5kZXggPSBpbmRleDtcbiAgICAgIHRoaXMuZXJyb3J2YWxpZGF0aW9uS2V5ID0ga2V5O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9ydmFsaWRhdGlvbkluZGV4ID0gJ04vQSc7XG4gICAgICB0aGlzLmVycm9ydmFsaWRhdGlvbktleSA9ICdOL0EnO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrU3BjaWFsQ2hhcihldmVudCkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LCBldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGlmIChldmVudC5jaGFyQ29kZSA9PSAzNiB8fFxuICAgICAgZXZlbnQuY2hhckNvZGUgPT0gOTUgfHxcbiAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQyIHx8XG4gICAgICBldmVudC5jaGFyQ29kZSA9PSA0NSB8fFxuICAgICAgZXZlbnQuY2hhckNvZGUgPT0gNDMgfHxcbiAgICAgIGV2ZW50LmNoYXJDb2RlID09IDQwIHx8XG4gICAgICBldmVudC5jaGFyQ29kZSA9PSA0MSB8fFxuICAgICAgZXZlbnQuY2hhckNvZGUgPT0gMzkgfHxcbiAgICAgIGV2ZW50LmNoYXJDb2RlID09IDMzIHx8XG4gICAgICBldmVudC5jaGFyQ29kZSA9PSAzMlxuICAgICkge1xuICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCEoKGV2ZW50LmNoYXJDb2RlID49IDY1KSAmJiAoZXZlbnQuY2hhckNvZGUgPD0gOTApIHx8XG4gICAgICAoZXZlbnQuY2hhckNvZGUgPj0gOTcpICYmIChldmVudC5jaGFyQ29kZSA8PSAxMjIpIHx8IChldmVudC5jaGFyQ29kZSA+PSA0OCkgJiZcbiAgICAgIChldmVudC5jaGFyQ29kZSA8PSA1NykpKSB7XG4gICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBldmVudC5yZXR1cm5WYWx1ZSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzb3J0KGhlYWQsIHR5cGUgLCBmb3JtYXRlKSB7XG4gICAgaWYgKHRoaXMuX2l0ZW1zKSB7XG4gICAgICBpZiAoISh0eXBlID09ICdDaGVja2JveCcpKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICByZXR1cm4gK2FbaGVhZF0gLSArYltoZWFkXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PSAnTnVtYmVyJykge1xuICAgICAgICAvLyB0aGlzLl9pdGVtcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIC8vICAgcmV0dXJuICthW2hlYWRdIC0gK2JbaGVhZF07XG4gICAgICAgIC8vIH0pO1xuICAgICAgICB0aGlzLl9pdGVtcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG5cbiAgICAgICAgICBpZiAoYVtoZWFkXSA8IGJbaGVhZF0gJiYgZm9ybWF0ZSA9PSAnYXNzZScpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYltoZWFkXSA8IGFbaGVhZF0gJiYgZm9ybWF0ZSA9PSAnZGVzYycpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT0gJ1N0cmluZycpIHtcbiAgICAgICAgdGhpcy5faXRlbXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIGlmIChhW2hlYWRdLnRvTG93ZXJDYXNlKCkgPCBiW2hlYWRdLnRvTG93ZXJDYXNlKCkgJiYgIGZvcm1hdGUgPT0gJ2Fzc2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChiW2hlYWRdLnRvTG93ZXJDYXNlKCkgPCBhW2hlYWRdLnRvTG93ZXJDYXNlKCkgJiYgZm9ybWF0ZSA9PSAnZGVzYycpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ3NvcnQgLScsIHRoaXMuX2l0ZW1zLCBoZWFkLCB0eXBlLGZvcm1hdGUpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=