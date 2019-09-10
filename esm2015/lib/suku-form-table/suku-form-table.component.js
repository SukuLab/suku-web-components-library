/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
        this.enableHighlighter = false;
        this.enableControls = true;
        this.enableSelectAll = false;
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set items(val) {
        console.log('val', val.length);
        if (val.length == 0) {
            this.addTable(this.defaultCount, val.length);
        }
        else {
            this._items = val;
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
     * @return {?}
     */
    edit(i) {
        console.log(i);
        if (this.editable[i]) {
            this.editable[i] = false;
        }
        else {
            this.editable[i] = true;
        }
    }
    /**
     * @param {?} i
     * @return {?}
     */
    remove(i) {
        this._items.splice(i, 1);
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
        /** @type {?} */
        const result = data.some((/**
         * @param {?} val
         * @return {?}
         */
        val => {
            return val.key == list;
        }));
        return result;
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
             * @return {?}
             */
            element => {
                Object.keys(element).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                (key) => {
                    if (key == 'Received All Boxes') {
                        console.log('element', element[key]);
                        element[key] = true;
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
                    if (key == 'Received All Boxes') {
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
}
SukuFormTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-form-table',
                template: "<div class=\"col p-0\">\n  <div class=\"header\">\n    <div class=\"col pt-4 pb-4\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{titleOneCustomClass}}\"\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">\n            {{titleContent}}\n          </h1>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col p-0\">\n    <table class=\"table bg-white table-responsive-sm\">\n      <thead>\n        <tr>\n          <th *ngFor=\"let head of _items[0] | keys\">\n            <span>{{head | titlecase }}</span>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of _items;let j=index\">\n          <!-- '#d2d2d2' f8dbb4 -->\n          <!-- ((list == highlighterKey) ?\n           ((item[selectionKey] && item[highlighterKey] && enableHighlighter) ? '#a3ded8':( !(item[selectionKey] &&\n           enableHighlighter) ?\n           '#d3d9dc' : '#f8dbb4')) : '')\n           ||\n           ((list == patchKey) ?\n           ((item[patchKey]) ? '#a3ded8' :( !(item[selectionKey]) ? '#f8dbb4' : '#d3d9dc')) : '') -->\n          <td [ngClass]=\"{'border-enable': checkValid(list)}\" *ngFor=\"let list of item | keys; let i=index\"\n            [style.background-color]=\"(checkValid(list) ?\n            ((item[selectionKey] && item[highlighterKey] && enableHighlighter) ? '#a3ded8':( !(item[selectionKey] &&\n            enableHighlighter) ?\n            '#d3d9dc' : '#f8dbb4')) : '')\n            ||\n            ((list == patchKey) ?\n            ((item[patchKey]) ? '#a3ded8' :( !(item[selectionKey]) ? '#f8dbb4' : '#d3d9dc')) : '')\">\n            <span\n              *ngIf=\"!editable[j] && (list != 'action') && (typeKey[list]!='Checkbox') && !checkValid(list) && (list != patchKey)\">\n              {{item[list]}}\n            </span>\n            <!-- input -->\n            <input class=\"form-control\" [(ngModel)]=\"item[list]\" [maxLength]=\"25\"\n              *ngIf=\"editable[j] && (list != 'action') && ( typeKey[list]=='String' || typeKey[list]=='Number')\" />\n\n            <input type=\"date\" data-date=\"\" data-date-format=\"mm/dd/yyyy\" class=\"form-control\"\n              *ngIf=\"editable[j] && (list != 'action') && typeKey[list]=='Date'\" [(ngModel)]=\"item[list]\" />\n\n            <!-- checkbox -->\n            <span [ngClass]=\"{'align-checkbox': editable[j] }\" *ngIf=\"(typeKey[list]=='Checkbox')\">\n              <mat-checkbox color=\"primary\" [disabled]=\"!editable[j] && (list != selectionKey)\"\n                [(ngModel)]=\"item[list]\">\n              </mat-checkbox>\n            </span>\n\n            <!-- select -->\n            <select class=\"form-control\" *ngIf=\"editable[j] && (list != 'action') \n            && ( typeKey[list]!='String' && typeKey[list]!='Number' && typeKey[list]!='Checkbox' &&\n            typeKey[list] !='Date')\" [(ngModel)]=\"item[list]\">\n              <option *ngFor=\"let c of typeKey[list]\" [ngValue]=\"c\"> {{c}} </option>\n            </select>\n\n            <!-- input- highlighterKey -->\n            <span *ngIf=\"checkValid(list) && (list != 'action')\">\n              <span *ngFor=\"let data of keyData\">\n                <span *ngIf=\"(list == data.key)\">\n                  <input type=\"number\" [ngClass]=\"{'disabled': !item[selectionKey]}\" [disabled]=\"!item[selectionKey]\"\n                    class=\"form-control sample\" [(ngModel)]=\"item[data.key]\"\n                    *ngIf=\"checkValid(list) && (list != 'action') && highlighterKey\" />\n                </span>\n              </span>\n            </span>\n\n\n            <!-- input -patchKey -->\n            <input type=\"number\" [ngClass]=\"{'disabled': item[selectionKey]}\" [disabled]=\"item[selectionKey]\"\n              class=\"form-control sample\" [(ngModel)]=\"item[selectionKey] ? item[highlighterKey]: item[patchKey]\"\n              *ngIf=\"(list == patchKey) && (list != 'action') && patchKey\" />\n\n            <span class=\"col p-0 pl-2\" (click)=\"edit(j)\" *ngIf=\"list == 'action' && !editable[j]\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\n                [ngClass]=\"{'btn-edit' : editable[j]}\">\n                edit\n              </span>\n            </span>\n            <span class=\"col p-0 pl-2\" *ngIf=\"list == 'action' && editable[j]\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\n                (click)=\"edit(j)\" [ngClass]=\"{'btn-edit' : editable[j]}\">\n                save\n              </span>\n            </span>\n            <span class=\"col c-pointer pl-4\" *ngIf=\"list == 'action'\">\n              <span class=\"secondary-btn controlCustomClass\" id=\"edit{{j}}\" [style.font-size.rem]=\"controlsSize\"\n                (click)=\"remove(j)\" [ngClass]=\"{'btn-edit' : editable[j]}\">\n                remove\n              </span>\n            </span>\n          </td>\n        </tr>\n        <tr *ngIf=\"enableSelectAll && _items[0]\">\n          <td *ngFor=\"let list of _items[0] | keys; let i=index\">\n            <!-- checkbox -->\n            <span [ngClass]=\"{'align-checkbox': editable[j] }\" *ngIf=\"(typeKey[list]=='Checkbox')\">\n              <mat-checkbox color=\"primary\" [disabled]=\"!editable[j] && (list != selectionKey)\" [(ngModel)]=\"selectAll\"\n                (change)=\"selectAllAction()\"> Select All\n              </mat-checkbox>\n            </span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col text-right\" *ngIf=\"enableControls\">\n    <span class=\"p-2\">\n      <a class=\"secondary-btn\" id=\"addOneRow\" [style.font-size.rem]=\"controlsSize\" (click)=\"addTable(1,_items?.length)\"\n        color=\"primary\">Add 1 row</a>\n    </span>\n    <span class=\"p-2\">\n      <a class=\"secondary-btn\" id=\"addTenRow\" [style.font-size.rem]=\"controlsSize\"\n        (click)=\"addTable(10, _items?.length)\" color=\"primary\">Add 10 rows</a>\n    </span>\n  </div>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.header{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.title{font-family:var(--suku-primary-font);font-weight:600;font-size:var(--suku-font-size-5);text-transform:uppercase}.table{font-family:var(--suku-primary-font);box-shadow:0 1px 2px 0 rgba(0,0,0,.1)}table td{vertical-align:middle;padding-left:1%}.btn-edit{line-height:2!important}input,select{width:100%;height:inherit!important}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0}td{width:15%}.form-control:focus{border:1px solid #ced4da;border-color:#ced4da!important;box-shadow:none!important}:host ::ng-deep.mat-checkbox{vertical-align:sub!important}th:last-child{width:12%!important}td:last-child{width:13%!important}button:focus{outline:0!important}.secondary-btn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:var(--suku-text-heading);border-bottom:3.5px solid;border-color:var(--suku-primary-color);word-break:break-word!important;cursor:pointer}.align-checkbox{display:flex;padding-top:5%}.c-pointer{cursor:pointer}table>tbody>tr>td{flex-wrap:wrap!important}.sample{background:inherit!important;border:none!important}.disabled{cursor:not-allowed}select option{border:1px solid #757575}option{border:1px solid #aaa;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,.1);color:#555}.table th{padding:.5rem .5rem .5rem 1.25rem;border-top:1px solid #bbbbbbcc}.table td{padding:.25rem .25rem .25rem 1.25rem;border-top:1px solid #bbbbbbcc}.border-enable{border:1px solid #92929240}"]
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
    typeKey: [{ type: Input }],
    defaultCount: [{ type: Input }],
    items: [{ type: Input }],
    selectionKey: [{ type: Input }],
    highlighterKey: [{ type: Input }],
    patchKey: [{ type: Input }],
    enableHighlighter: [{ type: Input }],
    enableControls: [{ type: Input }],
    enableSelectAll: [{ type: Input }],
    selectAll: [{ type: Input }],
    keyData: [{ type: Input }],
    controlsSize: [{ type: Input }],
    controlCustomClass: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuFormTableComponent.prototype.j;
    /** @type {?} */
    SukuFormTableComponent.prototype._items;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWZvcm0tdGFibGUvc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHNCQUFzQjtJQXdDakM7UUF0Q0EsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFHWSxrQkFBYSxHQUFHLE9BQU8sQ0FBQztRQUVqQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDbEMsaUJBQVksR0FBRywyQkFBMkIsQ0FBQztRQUM3QyxlQUFVLEdBQUcsTUFBTSxDQUFDO1FBR2hCLGlCQUFZLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsRSxXQUFNLEdBQUcsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVyRSxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQWdCakIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBT2pDLENBQUM7Ozs7SUF4QkQsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBQ0QsSUFBSSxLQUFLLENBQUMsR0FBRztRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFD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SyxTQUFDLGlCQUFpQjs2QkFDdkIsS0FBSyxTQUFDLGtCQUFrQjtrQ0FDeEIsS0FBSyxTQUFDLHdCQUF3QjsyQkFDOUIsS0FBSyxTQUFDLGVBQWU7eUJBQ3JCLEtBQUssU0FBQyxhQUFhOzBCQUNuQixLQUFLLFNBQUMsY0FBYzsyQkFDcEIsS0FBSyxTQUFDLGVBQWU7MkJBQ3JCLEtBQUssU0FBQyxpQkFBaUI7cUJBQ3ZCLEtBQUssU0FBQyxRQUFRO3NCQUNkLEtBQUs7MkJBQ0wsS0FBSztvQkFDTCxLQUFLOzJCQVlMLEtBQUs7NkJBQ0wsS0FBSzt1QkFDTCxLQUFLO2dDQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzsyQkFDTCxLQUFLO2lDQUNMLEtBQUs7Ozs7SUFyQ04sbUNBQUU7O0lBQ0Ysd0NBQVk7O0lBQ1osMENBQWM7O0lBQ2QsNENBQWtDOztJQUNsQyw4Q0FBc0M7O0lBQ3RDLCtDQUFrRDs7SUFDbEQsZ0RBQTBDOztJQUMxQyxxREFBMEQ7O0lBQzFELDhDQUFtRTs7SUFDbkUsNENBQTBDOztJQUMxQyw2Q0FBbUM7O0lBQ25DLDhDQUFxQzs7SUFDckMsOENBQW1GOztJQUNuRix3Q0FBOEU7O0lBQzlFLHlDQUFpQjs7SUFDakIsOENBQTBCOztJQWExQiw4Q0FBc0I7O0lBQ3RCLGdEQUF3Qjs7SUFDeEIsMENBQWtCOztJQUNsQixtREFBbUM7O0lBQ25DLGdEQUErQjs7SUFDL0IsaURBQWlDOztJQUNqQywyQ0FBbUI7O0lBQ25CLHlDQUFpQjs7SUFDakIsOENBQXNCOztJQUN0QixvREFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWZvcm0tdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUZvcm1UYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGo7XG4gIF9pdGVtcyA9IFtdO1xuICBlZGl0YWJsZSA9IFtdO1xuICBASW5wdXQoJ3RpdGxlLW9uZS1pZCcpIHRpdGxlT25lSWQ7XG4gIEBJbnB1dCgndGl0bGUtb25lLXNpemUnKSB0aXRsZU9uZVNpemU7XG4gIEBJbnB1dCgndGl0bGUtb25lLWNvbG9yJykgdGl0bGVPbmVDb2xvciA9ICd3aGl0ZSc7XG4gIEBJbnB1dCgndGl0bGUtb25lLXdlaWdodCcpIHRpdGxlT25lV2VpZ2h0O1xuICBASW5wdXQoJ3RpdGxlLW9uZS1jdXN0b20tY2xhc3MnKSB0aXRsZU9uZUN1c3RvbUNsYXNzID0gJyc7XG4gIEBJbnB1dCgndGl0bGUtY29udGVudCcpIHRpdGxlQ29udGVudCA9ICdFbnRlciBhbmltYWwgaW5mb3JtYXRpb246JztcbiAgQElucHV0KCdoZWFkZXItc2l6ZScpIGhlYWRlclNpemUgPSAnMTRweCc7XG4gIEBJbnB1dCgnaGVhZGVyLWNvbG9yJykgaGVhZGVyQ29sb3I7XG4gIEBJbnB1dCgnaGVhZGVyLXdlaWdodCcpIGhlYWRlcldlaWdodDtcbiAgQElucHV0KCdzdGF0dXMtYmctc3R5bGUnKSBjb2xvclBhbGxldGUgPSBbJyNhM2RlZDgnLCAnI2Y4ZGJiNCcsICcjYzdjM2ZhJywgJ2dyYXknXTtcbiAgQElucHV0KCdzdGF0dXMnKSBzdGF0dXMgPSBbJ2NvbXBsZXRlZCcsICdub3QtY29tcGxldGVkJywgJ3BlbmRpbmcnLCAnb3RoZXJzJ107XG4gIEBJbnB1dCgpIHR5cGVLZXk7XG4gIEBJbnB1dCgpIGRlZmF1bHRDb3VudCA9IDI7XG4gIEBJbnB1dCgpXG4gIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cbiAgc2V0IGl0ZW1zKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCd2YWwnLCB2YWwubGVuZ3RoKTtcbiAgICBpZiAodmFsLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLmFkZFRhYmxlKHRoaXMuZGVmYXVsdENvdW50LCB2YWwubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faXRlbXMgPSB2YWw7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpIHNlbGVjdGlvbktleTtcbiAgQElucHV0KCkgaGlnaGxpZ2h0ZXJLZXk7XG4gIEBJbnB1dCgpIHBhdGNoS2V5O1xuICBASW5wdXQoKSBlbmFibGVIaWdobGlnaHRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBlbmFibGVDb250cm9scyA9IHRydWU7XG4gIEBJbnB1dCgpIGVuYWJsZVNlbGVjdEFsbCA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWxlY3RBbGw7XG4gIEBJbnB1dCgpIGtleURhdGE7XG4gIEBJbnB1dCgpIGNvbnRyb2xzU2l6ZTtcbiAgQElucHV0KCkgY29udHJvbEN1c3RvbUNsYXNzO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBhZGRUYWJsZSh2YWwsIGVkaXRJbmRleCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsOyBpKyspIHtcbiAgICAgIHRoaXMuZWRpdGFibGVbZWRpdEluZGV4ICsgaV0gPSB0cnVlO1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSB7fTtcbiAgICAgIGNvbnN0IHR5cGVLZXkgPSB0aGlzLnR5cGVLZXk7XG4gICAgICBPYmplY3Qua2V5cyh0eXBlS2V5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHR5cGVLZXlba2V5XSA9PSAnQ2hlY2tib3gnKSB7XG4gICAgICAgICAgdGVtcGxhdGVba2V5XSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVLZXlba2V5XSA9PSAnU3RyaW5nJyB8fCB0eXBlS2V5W2tleV0gPT0gJ051bWJlcicpIHtcbiAgICAgICAgICB0ZW1wbGF0ZVtrZXldID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcGxhdGVba2V5XSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmVuYWJsZUNvbnRyb2xzKSB7XG4gICAgICAgIHRlbXBsYXRlWydhY3Rpb24nXSA9ICcnO1xuICAgICAgfVxuICAgICAgdGhpcy5faXRlbXMucHVzaCh0ZW1wbGF0ZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdfaXRlbXMnLCB0aGlzLl9pdGVtcyk7XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgY29uc29sZS5sb2coJ19pdGVtcycsIHRoaXMuX2l0ZW1zKTtcbiAgfVxuXG4gIGVkaXQoaSkge1xuICAgIGNvbnNvbGUubG9nKGkpO1xuICAgIGlmICh0aGlzLmVkaXRhYmxlW2ldKSB7XG4gICAgICB0aGlzLmVkaXRhYmxlW2ldID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWRpdGFibGVbaV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShpKSB7XG4gICAgdGhpcy5faXRlbXMuc3BsaWNlKGksIDEpO1xuICB9XG5cbiAgY2hlY2tWYWxpZChsaXN0KSB7XG4gICAgY29uc3QgZGF0YSA9IFtcbiAgICAgIHsga2V5OiAnIyBvZiBCb3hlcycgfSxcbiAgICAgIHsga2V5OiAndGVzdCcgfVxuICAgIF07XG4gICAgY29uc3QgcmVzdWx0ID0gZGF0YS5zb21lKHZhbCA9PiB7XG4gICAgICByZXR1cm4gdmFsLmtleSA9PSBsaXN0O1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzZWxlY3RBbGxBY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VsZWN0QWxsID0gdGhpcy5zZWxlY3RBbGw7XG4gICAgaWYgKHNlbGVjdEFsbCkge1xuICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMoZWxlbWVudCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgaWYgKGtleSA9PSAnUmVjZWl2ZWQgQWxsIEJveGVzJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VsZW1lbnQnLCBlbGVtZW50W2tleV0pO1xuICAgICAgICAgICAgZWxlbWVudFtrZXldID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygnZGF0YScsIGVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKGVsZW1lbnQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGlmIChrZXkgPT0gJ1JlY2VpdmVkIEFsbCBCb3hlcycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudFtrZXldKTtcbiAgICAgICAgICAgIGVsZW1lbnRba2V5XSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoa2V5ID09IHRoaXMucGF0Y2hLZXkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudFtrZXldKTtcbiAgICAgICAgICAgIGVsZW1lbnRba2V5XSA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG5cbn1cblxuXG5cbiJdfQ==