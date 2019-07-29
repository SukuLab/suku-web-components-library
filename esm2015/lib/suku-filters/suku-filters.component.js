/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class SukuFiltersComponent {
    constructor() {
        this.size = '18';
        this.filterOnChange = new EventEmitter();
        this.applyFilter = new EventEmitter();
        this.selectAll = new EventEmitter();
        this.deselectAll = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuFiltersComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-filters',
                template: "<div class=\"side-bar\" [formGroup]=\"form\">\n  <div class=\"filter-title\">\n    <a class=\"collapsed f30\" data-toggle=\"collapse\" href=\".collapse-filter\"></a>\n  </div>\n  <div class=\"collapse-filter collapse\" id=\"collapse-filter\">\n    <div class=\"box\">\n      <div class=\"filter-list\">\n        <h2 [style.font-size.px]=\"size\" class=\"unreadNotifications\">{{filterHeading}}</h2>\n        <div class=\"options pl-3\">\n          <div *ngFor=\"let status of statusTypesDynamic; let l = index\">\n            <mat-checkbox *ngIf=\"!status?.label\" color=\"primary\" [checked]=\"status.checked\"\n              (change)=\"(status.checked = $event.checked); filterOnChange.emit($event);\">\n              {{status.displayName}}</mat-checkbox>\n            <div *ngIf=\"status?.label\" class=\"mat-checkbox-label pb-2\">\n              {{status.displayName}}\n            </div>\n            <div class=\"p-0\">\n              <div class=\"col-sm-12 pl-3\" *ngFor=\"let subStatus of status.sub; let sk = index\">\n                <mat-checkbox [checked]=\"subStatus.checked\"\n                  (change)=\"(subStatus.checked = $event.checked); filterOnChange.emit($event);\" color=\"primary\">\n                  {{subStatus.displayName}}</mat-checkbox>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-3 mt-4 mb-1\">\n          <h3 class=\"filterSubHeading\">{{filterSubHeading}}</h3>\n          <div class=\"pb-0 mt-3\">From</div>\n          <mat-form-field class=\"p-0 col-sm-12\">\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" id=\"fromDateMyPro\"\n              formControlName=\"fromDate\" name=\"fromDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n          <div class=\"mt-3 pb-0\">To</div>\n          <mat-form-field class=\"p-0 col-sm-12\">\n            <input matInput formControlName=\"tillDate\" [matDatepicker]=\"picker1\" placeholder=\"Choose a date\"\n              id=\"tillDateMyPro\" name=\"tillDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n            <mat-datepicker #picker1></mat-datepicker>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"p-3 pb-4 pl-5 pr-5\">\n        <button type=\"button\" class=\" btn btn-info btn-lg btn-block\" (click)=\"applyFilter.emit()\">Apply Date Filters\n        </button>\n      </div>\n      <div class=\"filter-links\">\n        <p>\n          <a (click)=\"selectAll.emit();\">select all</a>\n          <a (click)=\"deselectAll.emit();\">clear all</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{font-size:12px!important;font-family:var(--suku-primary-font)!important}.btn:hover{border:2px solid #a7bf2e;background-color:#a7bf2e}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-info:hover{background-color:var(--suku-primary-border-color)!important}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.side-bar{width:100%;float:left;padding:0 15px 0 0}.side-bar .filter-title{color:#c5af79}.side-bar .filter-title a{color:#b6b6b6;text-decoration:none}.side-bar .box{width:100%;float:left;background:#fff;box-shadow:rgba(0,0,0,.07) 0 10px 20px;border-radius:0 0 30px 30px;padding:25px 0 15px}.side-bar .box .filter-list{width:100%;float:left;padding:0 20px}.side-bar .box .filter-list:last-child{padding-bottom:0}.side-bar .box .filter-list h2{font-family:var(--suku-primary-font)!important;font-size:15px!important;color:#b6b6b6;border-bottom:1px solid #ececec;padding:0 0 15px;margin:0 0 15px}.side-bar .box .filter-links{width:100%;float:left;border-top:1px solid #ececec;padding:10px 0 0 30px}.side-bar .box .filter-links p{font-family:var(--suku-secondary-font)!important;font-size:var(--suku-font-size-3);line-height:14px;text-transform:lowercase;padding:0}.side-bar .box .filter-links p a{color:#1d1d1d;text-decoration:underline;margin:0 15px 0 0}.side-bar .box .filter-links p a:hover{color:#02b3e3}.side-bar .box .add-btn{width:100%;float:left;padding:0 20px 20px}.side-bar .collapse{width:100%;float:left;margin:0;padding:0}@media (min-width:992px){.side-bar .filter-title a{pointer-events:none}.side-bar .collapse-filter{height:auto!important;display:block!important;overflow:visible!important;visibility:visible!important}}@media (max-width:991px){.side-bar{padding:0;margin:0 0 30px}.side-bar .filter-title{height:auto;line-height:normal;border-bottom:1px solid #ccc;padding:0 0 15px}.side-bar .filter-title a{width:100%;float:left;font-size:16px;text-transform:uppercase;text-decoration:none;position:relative;margin:0;padding:0}.side-bar .filter-title a:before{content:\"\\f056\";float:right;font-weight:300;font-size:20px;color:#c5af79;position:absolute;top:0;right:0}.side-bar .filter-title a.collapsed:before{content:\"\\f055\"}.side-bar .collapse-filter{width:100%;float:left;margin:0;padding:0}.mat-form-field{display:flow-root}.btn{font-size:10px!important;padding:5px!important}}.btn-p{border:solid 2px var(--suku-primary-color);border-radius:10px 20px 15px;background-color:#343a40!important;color:#fff;font-family:var(--suku-secondary-font)!important;font-weight:600;font-size:14px;padding:.75rem 2.1rem}.btn-p:hover{border:solid 2px var(--suku-primary-color);background-color:var(--suku-primary-color)}.btn-primary:hover{border:2px solid var(--suku-primary-color);background-color:var(--suku-primary-color)}.btn-p:hover{border:2px solid var(--suku-primary-color);border-radius:10px 20px 15px;background-color:var(--suku-primary-color)!important;color:#fff}.btn-p-p.disabled:hover{border:2px solid!important;border-radius:10px 20px 15px;background-color:#fff;color:#1d1d1d}.zeplin_button{height:40px;color:#f2f2f2;border:solid 2px var(--suku-primary-color);background-color:#272727!important}.zeplin_button:hover{background-color:var(--suku-primary-color)!important}.zeplin_button1{height:40px;color:#f2f2f2!important;border:2px solid #757575a6!important;background-color:#272727!important}.btn_zep1:hover{background-color:#757575a6!important}.REVIEW-BIDS{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:300;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#fff}.btn-primary{border:solid 2px var(--suku-primary-color);border-radius:10px 20px 15px}.btn-primary:active,.btn-primary:hover{border:solid 2px var(--suku-primary-color);border-radius:10px 20px 15px;background-color:var(--suku-primary-color);color:#fff}.btn-primary.disabled{border:solid 2px var(--suku-primary-color);border-radius:10px 20px 15px;background-color:#fff;color:grey}.btn-primary.disabled.focus,.btn-primary.disabled:focus,.btn-primary.disabled:hover,.btn-primary[disabled].focus,.btn-primary[disabled]:focus,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary.focus,fieldset[disabled] .btn-primary:focus,fieldset[disabled] .btn-primary:hover{border:solid 2px var(--suku-primary-color);border-radius:10px 20px 15px;background-color:#fff!important;color:grey}.btn-primary.focus,.btn-primary:focus{border:solid 2px var(--suku-primary-color);border-radius:10px 20px 15px;background-color:var(--suku-primary-color);color:#fff}.btn-primary.active.focus,.btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active.focus,.btn-primary:active:focus,.btn-primary:active:hover,.open>.dropdown-toggle .btn-primary.focus,.open>.dropdown-toggle .btn-primary:focus,.open>.dropdown-toggle.btn-primary:hover{border:solid 2px var(--suku-primary-color);border-radius:10px 20px 15px;background-color:var(--suku-primary-color);color:#fff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}.btn-primary.focus,.btn-primary:focus,.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem var(--suku-primary-color)}.btn{border:solid 2px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:#fff;color:#000;font-family:'Encode Sans',sans-serif;font-weight:600;padding:.55rem .85rem}.btn:hover{border:solid 2px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:var(--suku-primary-color);color:#fff}.btn.disabled:hover{border:2px solid!important;border-radius:28px 76px 63px;background-color:#fff;color:#000}.btn-info{border:solid 2px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:#fff;color:#000}.btn-info:active,.btn-info:hover{border:solid 2px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:var(--suku-primary-color);color:#fff}.btn-info.disabled{border:solid 2px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:solid 2px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:#fff!important;color:grey}.btn-info.focus,.btn-info:focus{border:solid 2px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:var(--suku-primary-color);color:#fff}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:solid 2px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:var(--suku-primary-color);color:#fff}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}.btn-info.focus,.btn-info:focus,.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem var(--suku-primary-color)}.default-btn{font-family:'Encode Sans',sans-serif;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#fff!important}.secondary-btn{font-family:'Encode Sans',sans-serif;font-size:14px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important;border-bottom:3.5px solid var(--suku-primary-color)}.clearAll{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:#1d1d1d;text-decoration:underline;text-transform:uppercase}.filterSubHeading{font-size:18px}/deep/.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0,0,.2,.1);border-width:0!important;border-style:solid;border-color:#757575a6}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none;border:1px solid #757575a6}.mat-checkbox-frame,/deep/.mat-checkbox-background{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none;border:1px solid #757575a6}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0,0,.2,.1);border-width:0!important;border-style:solid;border-color:#757575a6}/deep/.mat-checkbox-checked.mat-primary .mat-checkbox-background{background-color:#fff}/deep/.mat-checkbox-checkmark-path{stroke:#0f0f0f!important}/deep/.mat-checkbox-checked .mat-checkbox-layout .mat-checkbox-label{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:17px;letter-spacing:.2px;color:#000!important}/deep/.mat-checkbox-layout .mat-checkbox-label{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:17px;letter-spacing:.2px;color:#757575a6!important}.mat-checkbox-label{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:17px;letter-spacing:.2px}"]
            }] }
];
/** @nocollapse */
SukuFiltersComponent.ctorParameters = () => [];
SukuFiltersComponent.propDecorators = {
    form: [{ type: Input }],
    filterHeading: [{ type: Input }],
    size: [{ type: Input }],
    filterSubHeading: [{ type: Input }],
    statusTypesDynamic: [{ type: Input }],
    filterOnChange: [{ type: Output }],
    applyFilter: [{ type: Output }],
    selectAll: [{ type: Output }],
    deselectAll: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuFiltersComponent.prototype.form;
    /** @type {?} */
    SukuFiltersComponent.prototype.filterHeading;
    /** @type {?} */
    SukuFiltersComponent.prototype.size;
    /** @type {?} */
    SukuFiltersComponent.prototype.filterSubHeading;
    /** @type {?} */
    SukuFiltersComponent.prototype.statusTypesDynamic;
    /** @type {?} */
    SukuFiltersComponent.prototype.filterOnChange;
    /** @type {?} */
    SukuFiltersComponent.prototype.applyFilter;
    /** @type {?} */
    SukuFiltersComponent.prototype.selectAll;
    /** @type {?} */
    SukuFiltersComponent.prototype.deselectAll;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1maWx0ZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWZpbHRlcnMvc3VrdS1maWx0ZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFNekMsTUFBTSxPQUFPLG9CQUFvQjtJQVcvQjtRQVJTLFNBQUksR0FBRyxJQUFJLENBQUM7UUFHWCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUUzQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixndkZBQTRDOzthQUU3Qzs7Ozs7bUJBRUUsS0FBSzs0QkFDTCxLQUFLO21CQUNMLEtBQUs7K0JBQ0wsS0FBSztpQ0FDTCxLQUFLOzZCQUNMLE1BQU07MEJBQ04sTUFBTTt3QkFDTixNQUFNOzBCQUNOLE1BQU07Ozs7SUFSUCxvQ0FBeUI7O0lBQ3pCLDZDQUF1Qjs7SUFDdkIsb0NBQXFCOztJQUNyQixnREFBMEI7O0lBQzFCLGtEQUFtQzs7SUFDbkMsOENBQThDOztJQUM5QywyQ0FBMkM7O0lBQzNDLHlDQUF5Qzs7SUFDekMsMkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZmlsdGVycycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWZpbHRlcnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWZpbHRlcnMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1RmlsdGVyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgZmlsdGVySGVhZGluZztcbiAgQElucHV0KCkgc2l6ZSA9ICcxOCc7XG4gIEBJbnB1dCgpIGZpbHRlclN1YkhlYWRpbmc7XG4gIEBJbnB1dCgpIHN0YXR1c1R5cGVzRHluYW1pYzogYW55W107XG4gIEBPdXRwdXQoKSBmaWx0ZXJPbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGFwcGx5RmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VsZWN0QWxsID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGVzZWxlY3RBbGwgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gfVxuIl19