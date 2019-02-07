/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuNavSubmenuComponent {
    constructor() {
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
    subMenuSelected(event, newValue) {
        console.log(newValue);
        this.selectedItem = newValue;
    }
}
SukuNavSubmenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-nav-submenu',
                template: "<div class=\"header-main\">\r\n  <div class=\"sub-menu-bar navBarRes\" *ngIf=\"true\">\r\n    <div class=\"container\">\r\n      <div class=\"sub-menu\">\r\n        <nav>\r\n          <ul class=\"mt-2 pt-1\" id=\"subMenu\">\r\n            <li [ngClass]=\"{'active': selectedItem == item}\"\r\n              (click)=\"subMenuSelected($event, item);\" *ngFor=\"let item of subMenuList\" >\r\n              <a class=\"c-pointer\">{{ item.name }} {{item.path}}</a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".header-main .sub-menu-bar{width:100%;height:62px;float:left;background:#2b3034;position:relative}.header-main .sub-menu{float:left}.header-main .sub-menu nav{float:left;padding:0;margin:0}.header-main .sub-menu nav ul{height:47px;float:left;padding:0;margin:0}.header-main .sub-menu nav ul li{height:30px;float:left;font-family:Poppins,sans-serif;font-size:15px;color:rgba(255,255,255,.5);line-height:2px;letter-spacing:.01em;position:relative;padding:0;border-radius:15px 50px 50px;margin:0 10px 0 0}.header-main .sub-menu nav ul li:before{display:none}.header-main .sub-menu nav ul li a{height:30px;float:left;color:rgba(255,255,255,.5);text-decoration:none;position:relative;padding:22px 37px 20px;border-radius:28px 76px 63px;font-family:Poppins,sans-serif}.header-main .sub-menu nav ul li a:before{content:\"\";width:0;height:0;transition:.5s;background:0 0;border-radius:0;position:absolute;top:0;opacity:0}.header-main .sub-menu nav ul li a:after{content:\"\";width:0;height:0;transition:.5s;background:0 0;border-radius:15px 50px 50px;position:absolute;top:0;opacity:0}.header-main .sub-menu nav ul li.active a,.header-main .sub-menu nav ul li:hover a{color:#fff!important;background:#17181a!important}.header-main .sub-menu nav ul li.active a:after,.header-main .sub-menu nav ul li.active a:before,.header-main .sub-menu nav ul li:hover a:after,.header-main .sub-menu nav ul li:hover a:before{opacity:1;border-radius:15px 50px 50px}.sub-menu-style{background:#2b3034;color:#fff}ul#subMenu{list-style:none}.c-pointer{cursor:pointer}"]
            }] }
];
/** @nocollapse */
SukuNavSubmenuComponent.ctorParameters = () => [];
SukuNavSubmenuComponent.propDecorators = {
    subMenuList: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuNavSubmenuComponent.prototype.subMenuList;
    /** @type {?} */
    SukuNavSubmenuComponent.prototype.selectedItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1uYXYtc3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1uYXYtc3VibWVudS9zdWt1LW5hdi1zdWJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTyx1QkFBdUI7SUFHbkM7UUFGUyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUd6QixJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2xCO2dCQUNDLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLElBQUksRUFBRSxTQUFTO2dCQUNmLEVBQUUsRUFBRSxDQUFDO2FBQ0w7WUFDRDtnQkFDQyxJQUFJLEVBQUUsY0FBYztnQkFDcEIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsRUFBRSxFQUFFLENBQUM7YUFDTDtZQUNEO2dCQUNDLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLElBQUksRUFBRSxXQUFXO2dCQUNqQixFQUFFLEVBQUUsQ0FBQzthQUNMO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLElBQUksRUFBRSxVQUFVO2dCQUNoQixFQUFFLEVBQUUsQ0FBQzthQUNMO1NBQ0QsQ0FBQztJQUNILENBQUM7Ozs7OztJQUNELGVBQWUsQ0FBQyxLQUFLLEVBQUUsUUFBUTtRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7OztZQW5DRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsMGtCQUFnRDs7YUFFaEQ7Ozs7OzBCQUVDLEtBQUs7Ozs7SUFBTiw4Q0FBMEI7O0lBQzFCLCtDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LW5hdi1zdWJtZW51JyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1uYXYtc3VibWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbICcuL3N1a3UtbmF2LXN1Ym1lbnUuY29tcG9uZW50LnNjc3MnIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VOYXZTdWJtZW51Q29tcG9uZW50IHtcclxuXHRASW5wdXQoKSBzdWJNZW51TGlzdCA9IFtdO1xyXG5cdHNlbGVjdGVkSXRlbTogYW55O1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5zdWJNZW51TGlzdCA9IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdMaXN0aW5ncyAmIEJpZHMnLFxyXG5cdFx0XHRcdHBhdGg6ICdwYXRoT25lJyxcclxuXHRcdFx0XHRpZDogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogJ05lZ290aWF0aW9ucycsXHJcblx0XHRcdFx0cGF0aDogJ3BhdGhUd28nLFxyXG5cdFx0XHRcdGlkOiAyXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnUHVyY2hhc2UgT3JkZXJzJyxcclxuXHRcdFx0XHRwYXRoOiAncGF0aFRocmVlJyxcclxuXHRcdFx0XHRpZDogM1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogJ1RyYW5zYWN0aW9ucycsXHJcblx0XHRcdFx0cGF0aDogJ3BhdGhGb3VyJyxcclxuXHRcdFx0XHRpZDogNFxyXG5cdFx0XHR9XHJcblx0XHRdO1xyXG5cdH1cclxuXHRzdWJNZW51U2VsZWN0ZWQoZXZlbnQsIG5ld1ZhbHVlKSB7XHJcblx0XHRjb25zb2xlLmxvZyhuZXdWYWx1ZSk7XHJcblx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IG5ld1ZhbHVlO1xyXG5cdH1cclxufVxyXG4iXX0=