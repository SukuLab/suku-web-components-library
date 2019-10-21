/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuNavSubmenuComponent = /** @class */ (function () {
    function SukuNavSubmenuComponent() {
        this.subMenuList = [];
        this.subMenuList = [
            {
                name: 'Listings & Bids',
                path: 'pathOne',
                id: 1
            },
            {
                name: 'Negotiations',
                path: 'pathTwo',
                id: 2
            },
            {
                name: 'Purchase Orders',
                path: 'pathThree',
                id: 3
            },
            {
                name: 'Transactions',
                path: 'pathFour',
                id: 4
            }
        ];
    }
    /**
     * @param {?} event
     * @param {?} newValue
     * @return {?}
     */
    SukuNavSubmenuComponent.prototype.subMenuSelected = /**
     * @param {?} event
     * @param {?} newValue
     * @return {?}
     */
    function (event, newValue) {
        console.log(newValue);
        this.selectedItem = newValue;
    };
    SukuNavSubmenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-nav-submenu',
                    template: "<div class=\"header-main\">\n  <div class=\"sub-menu-bar navBarRes\" *ngIf=\"true\">\n    <div class=\"container\">\n      <div class=\"sub-menu\">\n        <nav>\n          <ul class=\"mt-2 pt-1\" id=\"subMenu\">\n            <li [ngClass]=\"{'active': selectedItem == item}\"\n              (click)=\"subMenuSelected($event, item);\" *ngFor=\"let item of subMenuList\" >\n              <a class=\"c-pointer\">{{ item.name }} {{item.path}}</a>\n            </li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.header-main .sub-menu-bar{width:100%;height:62px;float:left;background:#2b3034;position:relative}.header-main .sub-menu{float:left}.header-main .sub-menu nav{float:left;padding:0;margin:0}.header-main .sub-menu nav ul{height:47px;float:left;padding:0;margin:0}.header-main .sub-menu nav ul li{height:30px;float:left;font-family:var(--suku-primary-font);font-size:15px;color:rgba(255,255,255,.5);line-height:2px;letter-spacing:.01em;position:relative;padding:0;border-radius:15px 50px 50px;margin:0 10px 0 0}.header-main .sub-menu nav ul li:before{display:none}.header-main .sub-menu nav ul li a{height:30px;float:left;color:rgba(255,255,255,.5);text-decoration:none;position:relative;padding:22px 37px 20px;border-radius:28px 76px 63px;font-family:var(--suku-primary-font)}.header-main .sub-menu nav ul li a:before{content:\"\";width:0;height:0;-webkit-transition:.5s;transition:.5s;background:0 0;border-radius:0;position:absolute;top:0;opacity:0}.header-main .sub-menu nav ul li a:after{content:\"\";width:0;height:0;-webkit-transition:.5s;transition:.5s;background:0 0;border-radius:15px 50px 50px;position:absolute;top:0;opacity:0}.header-main .sub-menu nav ul li.active a,.header-main .sub-menu nav ul li:hover a{color:#fff!important;background:#17181a!important}.header-main .sub-menu nav ul li.active a:after,.header-main .sub-menu nav ul li.active a:before,.header-main .sub-menu nav ul li:hover a:after,.header-main .sub-menu nav ul li:hover a:before{opacity:1;border-radius:15px 50px 50px}.sub-menu-style{background:#2b3034;color:#fff}ul#subMenu{list-style:none}.c-pointer{cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    SukuNavSubmenuComponent.ctorParameters = function () { return []; };
    SukuNavSubmenuComponent.propDecorators = {
        subMenuList: [{ type: Input }]
    };
    return SukuNavSubmenuComponent;
}());
export { SukuNavSubmenuComponent };
if (false) {
    /** @type {?} */
    SukuNavSubmenuComponent.prototype.subMenuList;
    /** @type {?} */
    SukuNavSubmenuComponent.prototype.selectedItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1uYXYtc3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1uYXYtc3VibWVudS9zdWt1LW5hdi1zdWJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBUUM7UUFGUyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUd6QixJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2xCO2dCQUNDLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLElBQUksRUFBRSxTQUFTO2dCQUNmLEVBQUUsRUFBRSxDQUFDO2FBQ0w7WUFDRDtnQkFDQyxJQUFJLEVBQUUsY0FBYztnQkFDcEIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsRUFBRSxFQUFFLENBQUM7YUFDTDtZQUNEO2dCQUNDLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLElBQUksRUFBRSxXQUFXO2dCQUNqQixFQUFFLEVBQUUsQ0FBQzthQUNMO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLElBQUksRUFBRSxVQUFVO2dCQUNoQixFQUFFLEVBQUUsQ0FBQzthQUNMO1NBQ0QsQ0FBQztJQUNILENBQUM7Ozs7OztJQUNELGlEQUFlOzs7OztJQUFmLFVBQWdCLEtBQUssRUFBRSxRQUFRO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7SUFDOUIsQ0FBQzs7Z0JBbkNELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QiwwaUJBQWdEOztpQkFFaEQ7Ozs7OzhCQUVDLEtBQUs7O0lBOEJQLDhCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0EvQlksdUJBQXVCOzs7SUFDbkMsOENBQTBCOztJQUMxQiwrQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1uYXYtc3VibWVudScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LW5hdi1zdWJtZW51LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbICcuL3N1a3UtbmF2LXN1Ym1lbnUuY29tcG9uZW50LnNjc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdU5hdlN1Ym1lbnVDb21wb25lbnQge1xuXHRASW5wdXQoKSBzdWJNZW51TGlzdCA9IFtdO1xuXHRzZWxlY3RlZEl0ZW06IGFueTtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5zdWJNZW51TGlzdCA9IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ0xpc3RpbmdzICYgQmlkcycsXG5cdFx0XHRcdHBhdGg6ICdwYXRoT25lJyxcblx0XHRcdFx0aWQ6IDFcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdOZWdvdGlhdGlvbnMnLFxuXHRcdFx0XHRwYXRoOiAncGF0aFR3bycsXG5cdFx0XHRcdGlkOiAyXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnUHVyY2hhc2UgT3JkZXJzJyxcblx0XHRcdFx0cGF0aDogJ3BhdGhUaHJlZScsXG5cdFx0XHRcdGlkOiAzXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnVHJhbnNhY3Rpb25zJyxcblx0XHRcdFx0cGF0aDogJ3BhdGhGb3VyJyxcblx0XHRcdFx0aWQ6IDRcblx0XHRcdH1cblx0XHRdO1xuXHR9XG5cdHN1Yk1lbnVTZWxlY3RlZChldmVudCwgbmV3VmFsdWUpIHtcblx0XHRjb25zb2xlLmxvZyhuZXdWYWx1ZSk7XG5cdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSBuZXdWYWx1ZTtcblx0fVxufVxuIl19