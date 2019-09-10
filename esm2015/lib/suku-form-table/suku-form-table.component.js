/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuFormTableComponent {
    constructor() {
        this.headerContent = 'cjkcsnns sjkcs jkkjs kjkjd kjdfkjdf jkdf';
        this.titleOneColor = 'white';
        this.titleOneCustomClass = '';
        this.titleContent = 'Enter animal information:';
        this.headerSize = '14px';
        this.dataSize = '12px';
        this.hrefSelection = 'lotid';
        this.colorPallete = ['#a3ded8', '#f8dbb4', '#c7c3fa', 'gray'];
        this.status = ['completed', 'not-completed', 'pending', 'others'];
        this.dataHeader = {
            CowId: 'Number',
            Birthdate: 'String',
            Approx_Weight: 'Number',
            Breed: 'Array'
        };
        this.editable = [];
        this.enableHighlighter = false;
        this.enableControls = true;
        this.enableSelectAll = false;
    }
    /**
     * @return {?}
     */
    get tableData() {
        return this._tableData;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set tableData(val) {
        this._tableData = val;
        if (this._tableData[0]) {
            this.tableDataKey = Object.keys(this._tableData[0]);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('dataHeader', this.dataHeader);
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
            }));
            this.items.push(template);
        }
    }
    /**
     * @return {?}
     */
    submit() {
        console.log('items', this.items);
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
        console.log('item', i);
        this.items.splice(i, 1);
        console.log('data', this.items);
    }
    /**
     * @param {?} e
     * @param {?} v
     * @return {?}
     */
    validate(e, v) {
        console.log(e, v);
        if (+e.target.value > +v) {
            e.preventDefault();
        }
    }
    /**
     * @return {?}
     */
    selectAllAction() {
        /** @type {?} */
        const selectAll = this.selectAll;
        if (selectAll) {
            this.items.forEach((/**
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
            this.items.forEach((/**
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
                template: "<div class=\"col\">\n  <div class=\"header\">\n    <div class=\"col pt-4 pb-4\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{titleOneCustomClass}}\"\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">\n            {{titleContent}}\n          </h1>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col p-0\">\n    <table class=\"table bg-white table-responsive-sm\">\n      <thead>\n        <tr>\n          <th *ngFor=\"let head of items[0] | keys\">\n            <span>{{head | titlecase }}</span>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of items;let j=index\">\n          <!-- '#d2d2d2' f8dbb4 -->\n          <td *ngFor=\"let list of item | keys; let i=index\" [style.background-color]=\"\n          ((list == highlighterKey) ? \n          ((item[selectionKey] && item[highlighterKey] && enableHighlighter) ? '#a3ded8':( !(item[selectionKey] && enableHighlighter) ? \n                 '#d3d9dc' : '#f8dbb4')) : '') || \n                 ((list == patchKey) ? \n          ((item[patchKey]) ? '#a3ded8' :( !(item[selectionKey]) ? '#f8dbb4' : '#d3d9dc')) : '')\n            \">\n            <span\n              *ngIf=\"!editable[j] && (list != 'action') && (typeKey[list]!='Checkbox') && (list != highlighterKey) && (list != patchKey)\">\n              {{item[list]}}\n            </span>\n            <!-- input -->\n            <input class=\"form-control\" [(ngModel)]=\"item[list]\" [maxLength]=\"25\"\n              *ngIf=\"editable[j] && (list != 'action') && ( typeKey[list]=='String' || typeKey[list]=='Number')\" />\n\n            <input type=\"date\" data-date=\"\" data-date-format=\"mm/dd/yyyy\" class=\"form-control\"\n              *ngIf=\"editable[j] && (list != 'action') && typeKey[list]=='Date'\" [(ngModel)]=\"item[list]\" />\n\n            <!-- checkbox -->\n            <span [ngClass]=\"{'align-checkbox': editable[j] }\" *ngIf=\"(typeKey[list]=='Checkbox')\">\n              <mat-checkbox color=\"primary\" [disabled]=\"!editable[j] && (list != selectionKey)\"\n                [(ngModel)]=\"item[list]\">\n              </mat-checkbox>\n            </span>\n\n            <!-- select -->\n            <select class=\"form-control\" *ngIf=\"editable[j] && (list != 'action') \n            && ( typeKey[list]!='String' && typeKey[list]!='Number' && typeKey[list]!='Checkbox' &&\n            typeKey[list] !='Date')\" [(ngModel)]=\"item[list]\">\n              <option *ngFor=\"let c of typeKey[list]\" [ngValue]=\"c\"> {{c}} </option>\n            </select>\n\n            <!-- input- highlighterKey -->\n            <input type=\"number\" [ngClass]=\"{'disabled': !item[selectionKey]}\" [disabled]=\"!item[selectionKey]\"\n              class=\"form-control sample\" [(ngModel)]=\"item[highlighterKey]\"\n              *ngIf=\"(list == highlighterKey) && (list != 'action') && highlighterKey\" />\n\n            <!-- input -patchKey -->\n            <input type=\"number\" [ngClass]=\"{'disabled': item[selectionKey]}\" [disabled]=\"item[selectionKey]\"\n              class=\"form-control sample\" [(ngModel)]=\"item[selectionKey] ? item[highlighterKey]: item[patchKey]\"\n              *ngIf=\"(list == patchKey) && (list != 'action') && patchKey\" />\n\n\n\n            <span class=\"col p-0 pl-2\" (click)=\"edit(j)\" *ngIf=\"list == 'action' && !editable[j]\">\n              <span class=\"secondary-btn\">\n                edit\n              </span>\n            </span>\n            <span class=\"col p-0 pl-2\" *ngIf=\"list == 'action' && editable[j]\">\n              <span class=\"secondary-btn\" (click)=\"edit(j)\">\n                save\n              </span>\n            </span>\n            <span class=\"col c-pointer pl-4\" *ngIf=\"list == 'action'\">\n              <span class=\"secondary-btn\" (click)=\"remove(j)\">\n                remove\n              </span>\n            </span>\n          </td>\n        </tr>\n        <tr *ngIf=\"enableSelectAll\">\n          <td *ngFor=\"let list of items[0] | keys; let i=index\">\n              <!-- checkbox -->\n              <span [ngClass]=\"{'align-checkbox': editable[j] }\" *ngIf=\"(typeKey[list]=='Checkbox')\">\n                <mat-checkbox color=\"primary\" [disabled]=\"!editable[j] && (list != selectionKey)\"\n                  [(ngModel)]=\"selectAll\" (change)=\"selectAllAction()\"> Select All\n                </mat-checkbox>\n              </span>\n            </td>\n          </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col text-right\" *ngIf=\"enableControls\">\n    <span class=\"p-2\">\n      <a class=\"secondary-btn\" (click)=\"addTable(1,items?.length)\" color=\"primary\">Add 1 row</a>\n    </span>\n    <span class=\"p-2\">\n      <a class=\"secondary-btn\" (click)=\"addTable(10, items?.length)\" color=\"primary\">Add 10 rows</a>\n    </span>\n  </div>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.header{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.title{font-family:var(--suku-primary-font);font-weight:600;font-size:var(--suku-font-size-5);text-transform:uppercase}.table{font-family:var(--suku-primary-font);box-shadow:0 1px 2px 0 rgba(0,0,0,.1)}table td{vertical-align:middle;padding-left:1%}input,select{width:100%;height:inherit!important}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0}td{width:15%}.form-control:focus{border:1px solid #ced4da;border-color:#ced4da!important;box-shadow:none!important}:host ::ng-deep.mat-checkbox{vertical-align:sub!important}td:last-child,th:last-child{width:12%!important}button:focus{outline:0!important}.secondary-btn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:var(--suku-text-heading);border-bottom:3.5px solid;border-color:var(--suku-primary-color);word-break:break-word!important;cursor:pointer}.align-checkbox{display:flex;padding-top:5%}.c-pointer{cursor:pointer}table>tbody>tr>td{flex-wrap:wrap!important}.sample{background:inherit!important;border:none!important}.disabled{cursor:not-allowed}select option{border:1px solid #757575}option{border:1px solid #aaa;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,.1);color:#555}.table td,.table th{padding:.75rem .75rem .75rem 1.5rem;vertical-align:top;border-top:1px solid #bbbbbbcc}"]
            }] }
];
/** @nocollapse */
SukuFormTableComponent.ctorParameters = () => [];
SukuFormTableComponent.propDecorators = {
    header: [{ type: Input, args: ['table-header',] }],
    headerContent: [{ type: Input, args: ['table-header-content',] }],
    tableData: [{ type: Input, args: ['table-data',] }],
    titleOneId: [{ type: Input, args: ['title-one-id',] }],
    titleOneSize: [{ type: Input, args: ['title-one-size',] }],
    titleOneColor: [{ type: Input, args: ['title-one-color',] }],
    titleOneWeight: [{ type: Input, args: ['title-one-weight',] }],
    titleOneCustomClass: [{ type: Input, args: ['title-one-custom-class',] }],
    titleContent: [{ type: Input, args: ['title-content',] }],
    headerSize: [{ type: Input, args: ['header-size',] }],
    headerColor: [{ type: Input, args: ['header-color',] }],
    headerWeight: [{ type: Input, args: ['header-weight',] }],
    dataSize: [{ type: Input, args: ['data-size',] }],
    dataColor: [{ type: Input, args: ['data-color',] }],
    dataWeight: [{ type: Input, args: ['data-weight',] }],
    hrefSelection: [{ type: Input, args: ['data-href',] }],
    colorPallete: [{ type: Input, args: ['status-bg-style',] }],
    status: [{ type: Input, args: ['status',] }],
    dataHeader: [{ type: Input }],
    typeKey: [{ type: Input }],
    items: [{ type: Input }],
    selectionKey: [{ type: Input }],
    highlighterKey: [{ type: Input }],
    patchKey: [{ type: Input }],
    enableHighlighter: [{ type: Input }],
    enableControls: [{ type: Input }],
    enableSelectAll: [{ type: Input }],
    selectAll: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuFormTableComponent.prototype.j;
    /** @type {?} */
    SukuFormTableComponent.prototype.header;
    /** @type {?} */
    SukuFormTableComponent.prototype.headerContent;
    /** @type {?} */
    SukuFormTableComponent.prototype._tableData;
    /** @type {?} */
    SukuFormTableComponent.prototype.tableDataKey;
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
    SukuFormTableComponent.prototype.dataSize;
    /** @type {?} */
    SukuFormTableComponent.prototype.dataColor;
    /** @type {?} */
    SukuFormTableComponent.prototype.dataWeight;
    /** @type {?} */
    SukuFormTableComponent.prototype.hrefSelection;
    /** @type {?} */
    SukuFormTableComponent.prototype.colorPallete;
    /** @type {?} */
    SukuFormTableComponent.prototype.status;
    /** @type {?} */
    SukuFormTableComponent.prototype.dataHeader;
    /** @type {?} */
    SukuFormTableComponent.prototype.editable;
    /** @type {?} */
    SukuFormTableComponent.prototype.typeKey;
    /** @type {?} */
    SukuFormTableComponent.prototype.items;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWZvcm0tdGFibGUvc3VrdS1mb3JtLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHNCQUFzQjtJQW9EakM7UUFqRCtCLGtCQUFhLEdBQUcsMENBQTBDLENBQUM7UUFpQmhFLGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBRWpCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUNsQyxpQkFBWSxHQUFHLDJCQUEyQixDQUFDO1FBQzdDLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFHdEIsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUdsQixrQkFBYSxHQUFHLE9BQU8sQ0FBQztRQUNsQixpQkFBWSxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEUsV0FBTSxHQUFHLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFckUsZUFBVSxHQUFHO1lBQ3BCLEtBQUssRUFBRSxRQUFRO1lBQ2YsU0FBUyxFQUFFLFFBQVE7WUFDbkIsYUFBYSxFQUFFLFFBQVE7WUFDdkIsS0FBSyxFQUFFLE9BQU87U0FDZixDQUFDO1FBRUYsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQU1MLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixvQkFBZSxHQUFHLEtBQUssQ0FBQztJQUlqQyxDQUFDOzs7O0lBOUNELElBQ0ksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELElBQUksU0FBUyxDQUFDLEdB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Iiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1mb3JtLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZm9ybS10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZm9ybS10YWJsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VGb3JtVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBqO1xuICBASW5wdXQoJ3RhYmxlLWhlYWRlcicpIGhlYWRlcjtcbiAgQElucHV0KCd0YWJsZS1oZWFkZXItY29udGVudCcpIGhlYWRlckNvbnRlbnQgPSAnY2prY3NubnMgc2prY3MgamtranMga2pramQga2pkZmtqZGYgamtkZic7XG4gIF90YWJsZURhdGE6IGFueTtcbiAgdGFibGVEYXRhS2V5O1xuXG4gIEBJbnB1dCgndGFibGUtZGF0YScpXG4gIGdldCB0YWJsZURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlRGF0YTtcbiAgfVxuXG4gIHNldCB0YWJsZURhdGEodmFsKSB7XG4gICAgdGhpcy5fdGFibGVEYXRhID0gdmFsO1xuICAgIGlmICh0aGlzLl90YWJsZURhdGFbMF0pIHtcbiAgICAgIHRoaXMudGFibGVEYXRhS2V5ID0gT2JqZWN0LmtleXModGhpcy5fdGFibGVEYXRhWzBdKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCd0aXRsZS1vbmUtaWQnKSB0aXRsZU9uZUlkO1xuICBASW5wdXQoJ3RpdGxlLW9uZS1zaXplJykgdGl0bGVPbmVTaXplO1xuICBASW5wdXQoJ3RpdGxlLW9uZS1jb2xvcicpIHRpdGxlT25lQ29sb3IgPSAnd2hpdGUnO1xuICBASW5wdXQoJ3RpdGxlLW9uZS13ZWlnaHQnKSB0aXRsZU9uZVdlaWdodDtcbiAgQElucHV0KCd0aXRsZS1vbmUtY3VzdG9tLWNsYXNzJykgdGl0bGVPbmVDdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoJ3RpdGxlLWNvbnRlbnQnKSB0aXRsZUNvbnRlbnQgPSAnRW50ZXIgYW5pbWFsIGluZm9ybWF0aW9uOic7XG4gIEBJbnB1dCgnaGVhZGVyLXNpemUnKSBoZWFkZXJTaXplID0gJzE0cHgnO1xuICBASW5wdXQoJ2hlYWRlci1jb2xvcicpIGhlYWRlckNvbG9yO1xuICBASW5wdXQoJ2hlYWRlci13ZWlnaHQnKSBoZWFkZXJXZWlnaHQ7XG4gIEBJbnB1dCgnZGF0YS1zaXplJykgZGF0YVNpemUgPSAnMTJweCc7XG4gIEBJbnB1dCgnZGF0YS1jb2xvcicpIGRhdGFDb2xvcjtcbiAgQElucHV0KCdkYXRhLXdlaWdodCcpIGRhdGFXZWlnaHQ7XG4gIEBJbnB1dCgnZGF0YS1ocmVmJykgaHJlZlNlbGVjdGlvbiA9ICdsb3RpZCc7XG4gIEBJbnB1dCgnc3RhdHVzLWJnLXN0eWxlJykgY29sb3JQYWxsZXRlID0gWycjYTNkZWQ4JywgJyNmOGRiYjQnLCAnI2M3YzNmYScsICdncmF5J107XG4gIEBJbnB1dCgnc3RhdHVzJykgc3RhdHVzID0gWydjb21wbGV0ZWQnLCAnbm90LWNvbXBsZXRlZCcsICdwZW5kaW5nJywgJ290aGVycyddO1xuXG4gIEBJbnB1dCgpIGRhdGFIZWFkZXIgPSB7XG4gICAgQ293SWQ6ICdOdW1iZXInLFxuICAgIEJpcnRoZGF0ZTogJ1N0cmluZycsXG4gICAgQXBwcm94X1dlaWdodDogJ051bWJlcicsXG4gICAgQnJlZWQ6ICdBcnJheSdcbiAgfTtcblxuICBlZGl0YWJsZSA9IFtdO1xuICBASW5wdXQoKSB0eXBlS2V5O1xuICBASW5wdXQoKSBpdGVtcztcbiAgQElucHV0KCkgc2VsZWN0aW9uS2V5O1xuICBASW5wdXQoKSBoaWdobGlnaHRlcktleTtcbiAgQElucHV0KCkgcGF0Y2hLZXk7XG4gIEBJbnB1dCgpIGVuYWJsZUhpZ2hsaWdodGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGVuYWJsZUNvbnRyb2xzID0gdHJ1ZTtcbiAgQElucHV0KCkgZW5hYmxlU2VsZWN0QWxsID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNlbGVjdEFsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCdkYXRhSGVhZGVyJywgdGhpcy5kYXRhSGVhZGVyKTtcbiAgfVxuXG4gIGFkZFRhYmxlKHZhbCwgZWRpdEluZGV4KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWw7IGkrKykge1xuICAgICAgdGhpcy5lZGl0YWJsZVtlZGl0SW5kZXggKyBpXSA9IHRydWU7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IHt9O1xuICAgICAgY29uc3QgdHlwZUtleSA9IHRoaXMudHlwZUtleTtcbiAgICAgIE9iamVjdC5rZXlzKHR5cGVLZXkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodHlwZUtleVtrZXldID09ICdDaGVja2JveCcpIHtcbiAgICAgICAgICB0ZW1wbGF0ZVtrZXldID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZUtleVtrZXldID09ICdTdHJpbmcnIHx8IHR5cGVLZXlba2V5XSA9PSAnTnVtYmVyJykge1xuICAgICAgICAgIHRlbXBsYXRlW2tleV0gPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLml0ZW1zLnB1c2godGVtcGxhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnaXRlbXMnLCB0aGlzLml0ZW1zKTtcbiAgfVxuXG4gIGVkaXQoaSkge1xuICAgIGNvbnNvbGUubG9nKGkpO1xuICAgIGlmICh0aGlzLmVkaXRhYmxlW2ldKSB7XG4gICAgICB0aGlzLmVkaXRhYmxlW2ldID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWRpdGFibGVbaV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShpKSB7XG4gICAgY29uc29sZS5sb2coJ2l0ZW0nLCBpKTtcbiAgICB0aGlzLml0ZW1zLnNwbGljZShpLCAxKTtcbiAgICBjb25zb2xlLmxvZygnZGF0YScsIHRoaXMuaXRlbXMpO1xuICB9XG5cbiAgdmFsaWRhdGUoZSwgdikge1xuICAgIGNvbnNvbGUubG9nKGUsIHYpO1xuICAgIGlmICgrZS50YXJnZXQudmFsdWUgPiArdikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEFsbEFjdGlvbigpIHtcbiAgICBjb25zdCBzZWxlY3RBbGwgPSB0aGlzLnNlbGVjdEFsbDtcbiAgICBpZiAoc2VsZWN0QWxsKSB7XG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKGVsZW1lbnQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGlmIChrZXkgPT0gJ1JlY2VpdmVkIEFsbCBCb3hlcycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudFtrZXldKTtcbiAgICAgICAgICAgIGVsZW1lbnRba2V5XSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKGVsZW1lbnQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGlmIChrZXkgPT0gJ1JlY2VpdmVkIEFsbCBCb3hlcycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudFtrZXldKTtcbiAgICAgICAgICAgIGVsZW1lbnRba2V5XSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoa2V5ID09IHRoaXMucGF0Y2hLZXkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudFtrZXldKTtcbiAgICAgICAgICAgIGVsZW1lbnRba2V5XSA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG5cbn1cblxuXG5cbiJdfQ==