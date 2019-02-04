/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<div class=\"header-main\">\r\n  <div class=\"sub-menu-bar navBarRes\" *ngIf=\"true\">\r\n    <div class=\"container\">\r\n      <div class=\"sub-menu\">\r\n        <nav>\r\n          <ul class=\"mt-2 pt-1\" id=\"subMenu\">\r\n            <li [ngClass]=\"{'active': selectedItem == item}\"\r\n              (click)=\"subMenuSelected($event, item);\" *ngFor=\"let item of subMenuList\" >\r\n              <a class=\"c-pointer\">{{ item.name }} {{item.path}}</a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".header-main .sub-menu-bar{width:100%;height:62px;float:left;background:#2b3034;position:relative}.header-main .sub-menu{float:left}.header-main .sub-menu nav{float:left;padding:0;margin:0}.header-main .sub-menu nav ul{height:47px;float:left;padding:0;margin:0}.header-main .sub-menu nav ul li{height:30px;float:left;font-family:Poppins,sans-serif;font-size:15px;color:rgba(255,255,255,.5);line-height:2px;letter-spacing:.01em;position:relative;padding:0;border-radius:15px 50px 50px;margin:0 10px 0 0}.header-main .sub-menu nav ul li:before{display:none}.header-main .sub-menu nav ul li a{height:30px;float:left;color:rgba(255,255,255,.5);text-decoration:none;position:relative;padding:22px 37px 20px;border-radius:28px 76px 63px;font-family:Poppins,sans-serif}.header-main .sub-menu nav ul li a:before{content:\"\";width:0;height:0;transition:.5s;background:0 0;border-radius:0;position:absolute;top:0;opacity:0}.header-main .sub-menu nav ul li a:after{content:\"\";width:0;height:0;transition:.5s;background:0 0;border-radius:15px 50px 50px;position:absolute;top:0;opacity:0}.header-main .sub-menu nav ul li.active a,.header-main .sub-menu nav ul li:hover a{color:#fff!important;background:#17181a!important}.header-main .sub-menu nav ul li.active a:after,.header-main .sub-menu nav ul li.active a:before,.header-main .sub-menu nav ul li:hover a:after,.header-main .sub-menu nav ul li:hover a:before{opacity:1;border-radius:15px 50px 50px}.sub-menu-style{background:#2b3034;color:#fff}ul#subMenu{list-style:none}.c-pointer{cursor:pointer}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1uYXYtc3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1uYXYtc3VibWVudS9zdWt1LW5hdi1zdWJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBUUM7UUFGUyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUd6QixJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2xCO2dCQUNDLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLElBQUksRUFBRSxTQUFTO2dCQUNmLEVBQUUsRUFBRSxDQUFDO2FBQ0w7WUFDRDtnQkFDQyxJQUFJLEVBQUUsY0FBYztnQkFDcEIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsRUFBRSxFQUFFLENBQUM7YUFDTDtZQUNEO2dCQUNDLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLElBQUksRUFBRSxXQUFXO2dCQUNqQixFQUFFLEVBQUUsQ0FBQzthQUNMO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLElBQUksRUFBRSxVQUFVO2dCQUNoQixFQUFFLEVBQUUsQ0FBQzthQUNMO1NBQ0QsQ0FBQztJQUNILENBQUM7Ozs7OztJQUNELGlEQUFlOzs7OztJQUFmLFVBQWdCLEtBQUssRUFBRSxRQUFRO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7SUFDOUIsQ0FBQzs7Z0JBbkNELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qiwwa0JBQWdEOztpQkFFaEQ7Ozs7OzhCQUVDLEtBQUs7O0lBOEJQLDhCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0EvQlksdUJBQXVCOzs7SUFDbkMsOENBQTBCOztJQUMxQiwrQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc3VrdS1uYXYtc3VibWVudScsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtbmF2LXN1Ym1lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyAnLi9zdWt1LW5hdi1zdWJtZW51LmNvbXBvbmVudC5zY3NzJyBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1TmF2U3VibWVudUNvbXBvbmVudCB7XHJcblx0QElucHV0KCkgc3ViTWVudUxpc3QgPSBbXTtcclxuXHRzZWxlY3RlZEl0ZW06IGFueTtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuc3ViTWVudUxpc3QgPSBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnTGlzdGluZ3MgJiBCaWRzJyxcclxuXHRcdFx0XHRwYXRoOiAncGF0aE9uZScsXHJcblx0XHRcdFx0aWQ6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdOZWdvdGlhdGlvbnMnLFxyXG5cdFx0XHRcdHBhdGg6ICdwYXRoVHdvJyxcclxuXHRcdFx0XHRpZDogMlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogJ1B1cmNoYXNlIE9yZGVycycsXHJcblx0XHRcdFx0cGF0aDogJ3BhdGhUaHJlZScsXHJcblx0XHRcdFx0aWQ6IDNcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdUcmFuc2FjdGlvbnMnLFxyXG5cdFx0XHRcdHBhdGg6ICdwYXRoRm91cicsXHJcblx0XHRcdFx0aWQ6IDRcclxuXHRcdFx0fVxyXG5cdFx0XTtcclxuXHR9XHJcblx0c3ViTWVudVNlbGVjdGVkKGV2ZW50LCBuZXdWYWx1ZSkge1xyXG5cdFx0Y29uc29sZS5sb2cobmV3VmFsdWUpO1xyXG5cdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSBuZXdWYWx1ZTtcclxuXHR9XHJcbn1cclxuIl19