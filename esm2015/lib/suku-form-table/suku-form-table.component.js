/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        this.defaultCount = 2;
        this.hiddenKey = [];
        this.enableHighlighter = false;
        this.enableControls = true;
        this.enableSelectAll = false;
        this.keyData = [];
        this.save = new EventEmitter();
        this.remove = new EventEmitter();
        this.submitData = new EventEmitter();
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
                template['action'] = '';
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
        /** @type {?} */
        const data = [
            { key: '# of Boxes' },
            { key: 'test' }
        ];
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
        console.log('selection, defaultValue', selection, defaultValue, index);
        if (selection) {
            this._items[index][this.patchKey] = defaultValue;
        }
        else {
            this._items[index][this.patchKey] = this._null;
        }
    }
    /**
     * @return {?}
     */
    sendData() {
        /** @type {?} */
        const data = this._items;
        console.log('sendData', data);
        this.submitData.emit(data);
    }
}
SukuFormTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-form-table',
                template: "<div class=\"col p-0\">\n  <table>\n    <tr *ngIf=\"enableSelectAll && _items[0]\">\n      <td *ngFor=\"let list of _items[0] | keys; let i=index\" [ngClass]=\"{'text-center': typeKey[list]=='Checkbox'}\">\n        <!-- checkbox -->\n        <span [ngClass]=\"{'align-checkbox': editable[j] }\" *ngIf=\"(typeKey[list]=='Checkbox')\">\n          <mat-checkbox (change)=\"sendData();\" color=\"primary\" [disabled]=\"!editable[j] && (list != selectionKey)\"\n            [(ngModel)]=\"selectAll\" (change)=\"selectAllAction()\"> Select All\n          </mat-checkbox>\n        </span>\n      </td>\n    </tr>\n  </table>\n  <div class=\"header\">\n    <div class=\"col pt-4 pb-4\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{titleOneCustomClass}}\"\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">\n            {{titleContent}}\n          </h1>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col p-0\">\n    <table class=\"table bg-white table-responsive-sm\">\n      <thead>\n        <tr>\n          <th *ngFor=\"let head of _items[0] | keys\" [ngClass]=\"{'text-center': typeKey[head]=='Checkbox'}\">\n            <span>{{head | titlecase }}</span>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of _items;let j=index\">\n          <!-- '#d2d2d2' f8dbb4 -->\n          <!-- ((list == highlighterKey) ?\n           ((item[selectionKey] && item[highlighterKey] && enableHighlighter) ? '#a3ded8':( !(item[selectionKey] &&\n           enableHighlighter) ?\n           '#d3d9dc' : '#f8dbb4')) : '')\n           ||\n           ((list == patchKey) ?\n           ((item[patchKey]) ? '#a3ded8' :( !(item[selectionKey]) ? '#f8dbb4' : '#d3d9dc')) : '') -->\n          <td [ngClass]=\"{'border-enable': checkValid(list), 'text-center': typeKey[list]=='Checkbox' }\"\n            *ngFor=\"let list of item | keys; let i=index\" [style.background-color]=\"(checkValid(list) ?\n            ((item[selectionKey] && item[highlighterKey] && enableHighlighter) ? '#a3ded8':( !(item[selectionKey] &&\n            enableHighlighter) ?\n            '#d3d9dc' : '#f8dbb4')) : '')\n            ||\n            ((list == patchKey) ?\n            ((item[patchKey]) ? '#a3ded8' :( !(item[selectionKey]) ? '#f8dbb4' : '#d3d9dc')) : '')\">\n            <span\n              *ngIf=\"!editable[j] && (list != 'action') && (typeKey[list]!='Checkbox') && !checkValid(list) && (list != patchKey)\">\n              {{item[list]}}\n            </span>\n            <!-- input -->\n            <input (keyup)=\"sendData()\" class=\"form-control\" [(ngModel)]=\"item[list]\" [maxLength]=\"25\"\n              type=\"{{(typeKey[list]=='Number')?'number':'text'}}\"\n              *ngIf=\"editable[j] && (list != 'action') && ( typeKey[list]=='String' || typeKey[list]=='Number')\" />\n\n            <input type=\"date\" (keyup)=\"sendData()\" data-date=\"\" data-date-format=\"mm/dd/yyyy\" class=\"form-control\"\n              *ngIf=\"editable[j] && (list != 'action') && typeKey[list]=='Date'\" [(ngModel)]=\"item[list]\" />\n\n            <!-- checkbox -->\n            <span class=\"align-checkbox\" *ngIf=\"(typeKey[list]=='Checkbox')\">\n              <mat-checkbox color=\"primary\"\n                (change)=\"sendData();patchValue(item[selectionKey], item[highlighterKey], j)\"\n                [disabled]=\"!editable[j] && (list != selectionKey)\" [(ngModel)]=\"item[list]\">\n              </mat-checkbox>\n            </span>\n\n            <!-- select -->\n            <select class=\"form-control\" (change)=\"sendData()\" *ngIf=\"editable[j] && (list != 'action') \n            && ( typeKey[list]!='String' && typeKey[list]!='Number' && typeKey[list]!='Checkbox' &&\n            typeKey[list] !='Date')\" [(ngModel)]=\"item[list]\">\n              <option *ngFor=\"let c of typeKey[list];let k=index\" id=\"asset{{k}}\" [ngValue]=\"c\"> {{c}} </option>\n            </select>\n\n            <!-- input- highlighterKey -->\n            <span *ngIf=\"checkValid(list) && (list != 'action')\">\n              <span *ngFor=\"let data of keyData;let dataIndex=index\">\n                <span *ngIf=\"(list == data.key)\">\n                  <input type=\"{{(typeKey[list]=='Number')?'number':'text'}}\" id=\"asset{{j}}{{dataIndex}}\"\n                    (keyup)=\"sendData()\" [ngClass]=\"{'disabled': !item[selectionKey]}\" [disabled]=\"!item[selectionKey]\"\n                    class=\"form-control sample\" [(ngModel)]=\"item[data.key]\"\n                    *ngIf=\"checkValid(list) && (list != 'action') && highlighterKey\" />\n                </span>\n              </span>\n            </span>\n\n            <!-- input -patchKey -->\n            <input type=\"{{(typeKey[list]=='Number')?'number':'text'}}\" id=\"asset{{j}}{{selectionKey}}\"\n              (keyup)=\"sendData();\" [ngClass]=\"{'disabled':\n              item[selectionKey]}\" [disabled]=\"item[selectionKey]\" class=\"form-control sample\"\n              [(ngModel)]=\"item[patchKey]\" *ngIf=\"(list == patchKey) && (list != 'action')\n              && patchKey\" />\n            <!-- item[selectionKey] ?\n              ( item[highlighterKey] && item[patchKey]=item[highlighterKey])\n              : item[patchKey] = _null -->\n\n            <span class=\"col p-0 pl-2\" (click)=\"edit(j, item)\" *ngIf=\"list == 'action' && !editable[j]\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\n                [ngClass]=\"{'btn-edit' : editable[j]}\">\n                edit\n              </span>\n            </span>\n            <span class=\"col p-0 pl-2\" *ngIf=\"list == 'action' && editable[j]\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\n                (click)=\"edit(j, item)\" [ngClass]=\"{'btn-edit' : editable[j]}\">\n                save\n              </span>\n            </span>\n            <span class=\"col c-pointer pl-4\" *ngIf=\"list == 'action'\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\n                (click)=\"removedata(j, item)\" [ngClass]=\"{'btn-edit' : editable[j]}\">\n                remove\n              </span>\n            </span>\n          </td>\n        </tr>\n\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col text-right\" *ngIf=\"enableControls\">\n    <span class=\"p-2\">\n      <a class=\"secondary-btn\" id=\"addOneRow\" [style.font-size.rem]=\"controlsSize\" (click)=\"addTable(1,_items?.length)\"\n        color=\"primary\">Add 1 row</a>\n    </span>\n    <span class=\"p-2\">\n      <a class=\"secondary-btn\" id=\"addTenRow\" [style.font-size.rem]=\"controlsSize\"\n        (click)=\"addTable(10, _items?.length)\" color=\"primary\">Add 10 rows</a>\n    </span>\n  </div>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.header{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.title{font-family:var(--suku-primary-font);font-weight:600;font-size:var(--suku-font-size-5);text-transform:uppercase}.table{font-family:var(--suku-primary-font);box-shadow:0 1px 2px 0 rgba(0,0,0,.1)}table td{vertical-align:middle;padding-left:1%}.btn-edit{line-height:2!important}input,select{width:100%;height:inherit!important}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0}td{width:15%}.form-control:focus{border:1px solid #ced4da;border-color:#ced4da!important;box-shadow:none!important}:host ::ng-deep.mat-checkbox{vertical-align:sub!important}th:last-child{width:12%!important}td:last-child{width:13%!important}button:focus{outline:0!important}.secondary-btn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:var(--suku-text-heading);border-bottom:3.5px solid;border-color:var(--suku-primary-color);word-break:break-word!important;cursor:pointer}.align-checkbox{font-size:18px}.c-pointer{cursor:pointer}table>tbody>tr>td{flex-wrap:wrap!important}.sample{background:inherit!important;border:none!important}.disabled{cursor:not-allowed}select option{border:1px solid #757575}option{border:1px solid #aaa;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,.1);color:#555}.table th{padding:.5rem .5rem .5rem 1.25rem;border-bottom:2px solid #dee2e68a;border-left:1px solid #f2f2f2}.table td{padding:.25rem .25rem .25rem 1.25rem;border:1px solid #f2f2f2}.border-enable{border:1px solid #92929240}.hidden{display:none}table{width:100%}"]
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
    enableEditIndex: [{ type: Input }],
    typeKey: [{ type: Input }],
    defaultCount: [{ type: Input }],
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
    submitData: [{ type: Output }]
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
    SukuFormTableComponent.prototype.typeKey;
    /** @type {?} */
    SukuFormTableComponent.prototype.defaultCount;
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
    SukuFormTableComponent.prototype._null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWZvcm0tdGFibGUvc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sc0JBQXNCO0lBeURqQztRQXZEQSxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBRVosYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUdZLGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBRWpCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUNsQyxpQkFBWSxHQUFHLDJCQUEyQixDQUFDO1FBQzdDLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFHaEIsaUJBQVksR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLFdBQU0sR0FBRyxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBVXJFLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBa0JqQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2Ysc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXhCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHWixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxQyxVQUFLLEdBQUcsSUFBSSxDQUFDO0lBR2IsQ0FBQzs7Ozs7SUExQ0QsSUFDSSxlQUFlLENB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eUJBQ3JCLEtBQUssU0FBQyxhQUFhOzBCQUNuQixLQUFLLFNBQUMsY0FBYzsyQkFDcEIsS0FBSyxTQUFDLGVBQWU7MkJBQ3JCLEtBQUssU0FBQyxpQkFBaUI7cUJBQ3ZCLEtBQUssU0FBQyxRQUFROzhCQUNkLEtBQUs7c0JBUUwsS0FBSzsyQkFDTCxLQUFLO29CQUNMLEtBQUs7MkJBY0wsS0FBSzs2QkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSztnQ0FDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3NCQUNMLEtBQUs7MkJBQ0wsS0FBSztpQ0FDTCxLQUFLO21CQUNMLE1BQU07cUJBQ04sTUFBTTt5QkFDTixNQUFNOzs7O0lBcERQLG1DQUFFOztJQUNGLHdDQUFZOztJQUNaLDJDQUFVOztJQUNWLDBDQUFjOztJQUNkLDRDQUFrQzs7SUFDbEMsOENBQXNDOztJQUN0QywrQ0FBa0Q7O0lBQ2xELGdEQUEwQzs7SUFDMUMscURBQTBEOztJQUMxRCw4Q0FBbUU7O0lBQ25FLDRDQUEwQzs7SUFDMUMsNkNBQW1DOztJQUNuQyw4Q0FBcUM7O0lBQ3JDLDhDQUFtRjs7SUFDbkYsd0NBQThFOztJQVM5RSx5Q0FBaUI7O0lBQ2pCLDhDQUEwQjs7SUFlMUIsOENBQXNCOztJQUN0QixnREFBd0I7O0lBQ3hCLDBDQUFrQjs7SUFDbEIsMkNBQXdCOztJQUN4QixtREFBbUM7O0lBQ25DLGdEQUErQjs7SUFDL0IsaURBQWlDOztJQUNqQywyQ0FBbUI7O0lBQ25CLHlDQUFzQjs7SUFDdEIsOENBQXNCOztJQUN0QixvREFBNEI7O0lBQzVCLHNDQUFvQzs7SUFDcEMsd0NBQXNDOztJQUN0Qyw0Q0FBMEM7O0lBRTFDLHVDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZm9ybS10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWZvcm0tdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWZvcm0tdGFibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Rm9ybVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgajtcbiAgX2l0ZW1zID0gW107XG4gIF9pdGVtc0tleTtcbiAgZWRpdGFibGUgPSBbXTtcbiAgQElucHV0KCd0aXRsZS1vbmUtaWQnKSB0aXRsZU9uZUlkO1xuICBASW5wdXQoJ3RpdGxlLW9uZS1zaXplJykgdGl0bGVPbmVTaXplO1xuICBASW5wdXQoJ3RpdGxlLW9uZS1jb2xvcicpIHRpdGxlT25lQ29sb3IgPSAnd2hpdGUnO1xuICBASW5wdXQoJ3RpdGxlLW9uZS13ZWlnaHQnKSB0aXRsZU9uZVdlaWdodDtcbiAgQElucHV0KCd0aXRsZS1vbmUtY3VzdG9tLWNsYXNzJykgdGl0bGVPbmVDdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoJ3RpdGxlLWNvbnRlbnQnKSB0aXRsZUNvbnRlbnQgPSAnRW50ZXIgYW5pbWFsIGluZm9ybWF0aW9uOic7XG4gIEBJbnB1dCgnaGVhZGVyLXNpemUnKSBoZWFkZXJTaXplID0gJzE0cHgnO1xuICBASW5wdXQoJ2hlYWRlci1jb2xvcicpIGhlYWRlckNvbG9yO1xuICBASW5wdXQoJ2hlYWRlci13ZWlnaHQnKSBoZWFkZXJXZWlnaHQ7XG4gIEBJbnB1dCgnc3RhdHVzLWJnLXN0eWxlJykgY29sb3JQYWxsZXRlID0gWycjYTNkZWQ4JywgJyNmOGRiYjQnLCAnI2M3YzNmYScsICdncmF5J107XG4gIEBJbnB1dCgnc3RhdHVzJykgc3RhdHVzID0gWydjb21wbGV0ZWQnLCAnbm90LWNvbXBsZXRlZCcsICdwZW5kaW5nJywgJ290aGVycyddO1xuICBASW5wdXQoKVxuICBzZXQgZW5hYmxlRWRpdEluZGV4KHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgK3ZhbDsgaSsrKSB7XG4gICAgICAgIHRoaXMuZWRpdGFibGVbaV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBASW5wdXQoKSB0eXBlS2V5O1xuICBASW5wdXQoKSBkZWZhdWx0Q291bnQgPSAyO1xuICBASW5wdXQoKVxuICBnZXQgaXRlbXMoKSB7XG4gICAgY29uc29sZS5sb2coJ2l0ZW1zIC0tLS0tLS0tLS0tLScpO1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuICBzZXQgaXRlbXModmFsKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgY29uc29sZS5sb2coJ19pdGVtcycsIHZhbCk7XG4gICAgICB0aGlzLl9pdGVtcyA9IHZhbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2l0ZW1zWzBdKSB7XG4gICAgICB0aGlzLl9pdGVtc0tleSA9IE9iamVjdC5rZXlzKHRoaXMuX2l0ZW1zWzBdKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgc2VsZWN0aW9uS2V5O1xuICBASW5wdXQoKSBoaWdobGlnaHRlcktleTtcbiAgQElucHV0KCkgcGF0Y2hLZXk7XG4gIEBJbnB1dCgpIGhpZGRlbktleSA9IFtdO1xuICBASW5wdXQoKSBlbmFibGVIaWdobGlnaHRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBlbmFibGVDb250cm9scyA9IHRydWU7XG4gIEBJbnB1dCgpIGVuYWJsZVNlbGVjdEFsbCA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWxlY3RBbGw7XG4gIEBJbnB1dCgpIGtleURhdGEgPSBbXTtcbiAgQElucHV0KCkgY29udHJvbHNTaXplO1xuICBASW5wdXQoKSBjb250cm9sQ3VzdG9tQ2xhc3M7XG4gIEBPdXRwdXQoKSBzYXZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc3VibWl0RGF0YSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBfbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGFkZFRhYmxlKHZhbCwgZWRpdEluZGV4KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWw7IGkrKykge1xuICAgICAgdGhpcy5lZGl0YWJsZVtlZGl0SW5kZXggKyBpXSA9IHRydWU7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IHt9O1xuICAgICAgY29uc3QgdHlwZUtleSA9IHRoaXMudHlwZUtleTtcbiAgICAgIE9iamVjdC5rZXlzKHR5cGVLZXkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodHlwZUtleVtrZXldID09ICdDaGVja2JveCcpIHtcbiAgICAgICAgICB0ZW1wbGF0ZVtrZXldID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZUtleVtrZXldID09ICdTdHJpbmcnIHx8IHR5cGVLZXlba2V5XSA9PSAnTnVtYmVyJykge1xuICAgICAgICAgIHRlbXBsYXRlW2tleV0gPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wbGF0ZVtrZXldID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZW5hYmxlQ29udHJvbHMpIHtcbiAgICAgICAgdGVtcGxhdGVbJ2FjdGlvbiddID0gJyc7XG4gICAgICB9XG4gICAgICB0aGlzLl9pdGVtcy5wdXNoKHRlbXBsYXRlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ19pdGVtcycsIHRoaXMuX2l0ZW1zKTtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnX2l0ZW1zJywgdGhpcy5faXRlbXMpO1xuICB9XG5cbiAgZWRpdChpLCBpdGVtKSB7XG4gICAgY29uc29sZS5sb2coaSk7XG4gICAgaWYgKHRoaXMuZWRpdGFibGVbaV0pIHtcbiAgICAgIHRoaXMuZWRpdGFibGVbaV0gPSBmYWxzZTtcbiAgICAgIHRoaXMuc2F2ZS5lbWl0KGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVkaXRhYmxlW2ldID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVkYXRhKGksIGl0ZW0pIHtcbiAgICB0aGlzLl9pdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgdGhpcy5yZW1vdmUuZW1pdChpdGVtKTtcbiAgfVxuXG4gIGNoZWNrVmFsaWQobGlzdCkge1xuICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICB7IGtleTogJyMgb2YgQm94ZXMnIH0sXG4gICAgICB7IGtleTogJ3Rlc3QnIH1cbiAgICBdO1xuICAgIGlmICh0aGlzLmtleURhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5rZXlEYXRhLnNvbWUodmFsID0+IHtcbiAgICAgICAgcmV0dXJuIHZhbC5rZXkgPT0gbGlzdDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEFsbEFjdGlvbigpIHtcbiAgICBjb25zdCBzZWxlY3RBbGwgPSB0aGlzLnNlbGVjdEFsbDtcbiAgICBpZiAoc2VsZWN0QWxsKSB7XG4gICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChlbGVtZW50LCBtYWluSW5kZXgpID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMoZWxlbWVudCkuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChrZXkgPT0gdGhpcy5zZWxlY3Rpb25LZXkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudFtrZXldLCBpbmRleCwgbWFpbkluZGV4LCB0aGlzLl9pdGVtcyk7XG4gICAgICAgICAgICBlbGVtZW50W2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgZWxlbWVudFt0aGlzLnBhdGNoS2V5XSA9IGVsZW1lbnRbdGhpcy5oaWdobGlnaHRlcktleV07XG4gICAgICAgICAgICB0aGlzLl9pdGVtc1ttYWluSW5kZXhdW3RoaXMucGF0Y2hLZXldID0gdGhpcy5faXRlbXNbbWFpbkluZGV4XVt0aGlzLmhpZ2hsaWdodGVyS2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMoZWxlbWVudCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgaWYgKGtleSA9PSB0aGlzLnNlbGVjdGlvbktleSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VsZW1lbnQnLCBlbGVtZW50W2tleV0pO1xuICAgICAgICAgICAgZWxlbWVudFtrZXldID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChrZXkgPT0gdGhpcy5wYXRjaEtleSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VsZW1lbnQnLCBlbGVtZW50W2tleV0pO1xuICAgICAgICAgICAgZWxlbWVudFtrZXldID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNoa0hpZGRlbktleShrZXkpIHtcbiAgICBpZiAodGhpcy5oaWRkZW5LZXkubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5oaWRkZW5LZXkuc29tZSh2YWwgPT4ge1xuICAgICAgICByZXR1cm4gdmFsID09IGtleTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHBhdGNoVmFsdWUoc2VsZWN0aW9uLCBkZWZhdWx0VmFsdWUsIGluZGV4KSB7XG4gICAgY29uc29sZS5sb2coJ3NlbGVjdGlvbiwgZGVmYXVsdFZhbHVlJywgc2VsZWN0aW9uLCBkZWZhdWx0VmFsdWUsIGluZGV4KTtcbiAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLl9pdGVtc1tpbmRleF1bdGhpcy5wYXRjaEtleV0gPSBkZWZhdWx0VmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2l0ZW1zW2luZGV4XVt0aGlzLnBhdGNoS2V5XSA9IHRoaXMuX251bGw7XG4gICAgfVxuICB9XG5cbiAgc2VuZERhdGEoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2l0ZW1zO1xuICAgIGNvbnNvbGUubG9nKCdzZW5kRGF0YScsIGRhdGEpO1xuICAgIHRoaXMuc3VibWl0RGF0YS5lbWl0KGRhdGEpO1xuICB9XG5cbn1cblxuXG5cbiJdfQ==