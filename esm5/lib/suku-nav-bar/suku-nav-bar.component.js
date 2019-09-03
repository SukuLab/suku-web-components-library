/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuNavBarComponent = /** @class */ (function () {
    function SukuNavBarComponent() {
        this.navbarOpen = false;
        this.panelOpenState = false;
        this.isActive = false;
        this.userIcon = '../../../assets/img/avatar-icon.svg';
        this.UserName = 'Abigail';
        this.navbarBgColor = 'bgcolor';
        this.subMenuList = [];
        this.logoCustomClass = 'img-width';
        this.nameCustomClass = '';
        this.data = {
            logo: 'assets/images/Suku_Logo_white.png',
            Username: 'Navbar',
            companyName: 'Microsoft',
            bellIcon: '../../../assets/img/alarm-icon.svg',
            bellIconId: 'notificationIcon',
            notificationCount: 2,
            notificationCountId: 'notificationCount',
            submenu: [
                {
                    name: 'Buy',
                    subMenu: true,
                    visible: false,
                    id: 'collapseOne',
                    subMenuData: [
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
                            name: 'PurchaseOrders',
                            path: 'pathThree',
                            id: 3
                        },
                        {
                            name: 'Transactions',
                            path: 'pathFour',
                            id: 4
                        }
                    ]
                },
                {
                    name: 'Sell',
                    subMenu: true,
                    visible: false,
                    id: 'collapseOne',
                    subMenuData: [
                        {
                            name: 'Buy-Sell-Price',
                            path: 'pathOne',
                            id: 1
                        },
                        {
                            name: 'BuyProducts',
                            path: 'pathTwo',
                            id: 2
                        },
                        {
                            name: 'BuyPurchaseOrders',
                            path: 'pathThree',
                            id: 3
                        },
                        {
                            name: 'BuyTransactions',
                            path: 'pathFour',
                            id: 4
                        }
                    ]
                },
                {
                    name: 'Transaction',
                    subMenu: true,
                    visible: true,
                    subMenuData: [
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
                            name: 'PurchaseOrders',
                            path: 'pathThree',
                            id: 3
                        },
                        {
                            name: 'Transactions',
                            path: 'pathFour',
                            id: 4
                        }
                    ]
                },
                {
                    name: 'Logout',
                    subMenu: false
                },
                {
                    name: 'Help',
                    subMenu: false
                }
            ]
        };
    }
    /**
     * @return {?}
     */
    SukuNavBarComponent.prototype.toggleNavbar = /**
     * @return {?}
     */
    function () {
        this.navbarOpen = !this.navbarOpen;
    };
    /**
     * @param {?} names
     * @return {?}
     */
    SukuNavBarComponent.prototype.isActiveFun = /**
     * @param {?} names
     * @return {?}
     */
    function (names) {
        return this.selected === names;
    };
    /**
     * @param {?} names
     * @return {?}
     */
    SukuNavBarComponent.prototype.toggle = /**
     * @param {?} names
     * @return {?}
     */
    function (names) {
        console.log('names', names);
        this.selected = '';
        this.isActive = true;
        this.selected = names;
        this.data.submenu.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            if (names == element) {
                console.log('element', element);
                element.visible = true;
            }
            else {
                element.visible = false;
            }
        }));
        this.collpose = names.id;
        console.log('element1', this.collpose);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    SukuNavBarComponent.prototype.select = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.selected1 = name;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    SukuNavBarComponent.prototype.isActive2 = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.selected1 === name;
    };
    SukuNavBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-nav-bar',
                    template: "<nav class=\"navbar navbar-expand-lg {{navbarBgColor}} {{navbarCustomClass}} bg-dark navbar-light navbar1\">\n  <div>\n    <a title=\"SUKU\">\n      <img [src]=\"data?.logo\" alt=\"brand-SUKU\" class=\"btLine {{logoCustomClass}}\" />\n    </a>\n  </div>\n  <div class=\"collapse navbar-collapse justify-content-end mr-5\" id=\"navbarNav\">\n    <div *ngFor=\"let names of data.submenu\" class=\"responseTab\">\n      <ul class=\"navbar-nav\">\n        <li class=\"pT\" (click)=\"toggle(names)\">\n          <a [ngClass]=\"{'active': isActiveFun(names)}\" class=\"{{nameCustomClass}}\">\n            {{names.name | uppercase}}\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row d-flex justify-content-around ml-lg-5\">\n    <a class=\"align-items-end d-flex\">\n      <i><img id=\"notificationBell\" src=\"{{data?.bellIcon}}\" id=\"{{data?.bellIconId}}\"></i>\n      <span class=\"count\" id=\"{{data?.notificationCountId}}\">{{data?.notificationCount}}</span>\n    </a>\n    <li class=\"iconColor\"><img [src]=\"userIcon\"></li>\n    <li class=\"userColor\" [style.color]=\"userNameColor\" [style.font-weight]=\"userNameFontWeight\"\n      [style.font-size.rem]=\"userNameFontSize\">{{UserName}}</li>\n  </div>\n</nav>\n<div *ngIf=\"isActive\">\n  <div *ngFor=\"let names of data.submenu\">\n    <div class=\"mobResponse1\" *ngIf=\"names?.visible\">\n      <div class=\"bgColor1 col-sm-12 wrapper {{submenuCustomClass}}\" *ngIf=\"names?.subMenu\">\n        <li *ngFor=\"let name of names?.subMenuData\" class=\"line\" (click)=\"select(name)\"\n          [ngClass]=\"{'active1': isActive2(name)}\">\n          <a>{{name.name}}</a>\n        </li>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Response -->\n<nav class=\"navbar navbar-expand-lg navbar-dark  mobResponse responseColor\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\" id=\"accordion\">\n      <div *ngFor=\"let names of data.submenu;  let i = index\">\n        <span id=\"buy{{i}}\" class=\"nav-item nav-link\" data-toggle=\"collapse\" attr.data-target=\"#collapseOne{{i}}\">\n          <ul class=\"navbar-nav\">\n            <li class=\"pT\" (click)=\"toggle(names)\">\n              <a class=\"subMenuBgStyle\">{{names.name | uppercase}} <i class=\"fa fa-arrow-down flRight\"\n                  *ngIf=\"names.subMenu===true\"></i></a>\n            </li>\n          </ul>\n          <div attr.id=\"collapseOne{{i}}\" class=\"panel-collapse panel panel-default collapse in\" role=\"tabpanel\"\n            aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n            <div *ngIf=\"isActive\">\n              <div *ngFor=\"let names of data.submenu\">\n                <div *ngIf=\"names?.visible\">\n                  <div class=\"bgColor1 col-sm-12 wrapper\" *ngIf=\"names?.subMenu\">\n                    <li *ngFor=\"let name of names?.subMenuData\" class=\"line\">\n                      <a>{{name.name}}</a>\n                    </li>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </span>\n      </div>\n    </ul>\n  </div>\n</nav>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}nav ul li{font-size:18px;cursor:pointer;font-family:var(--suku-primary-font);letter-spacing:-.3px;color:rgba(255,255,255,.5);letter-spacing:-.4px}.img-width{width:125px}.btLine{margin-left:59px}.iconColor{color:var(--suku-text-label-two);font-size:19px;cursor:pointer;font-family:var(--suku-primary-font);letter-spacing:-.3px;letter-spacing:-.4px;padding-top:40px;margin-right:7px!important}.userColor{color:var(--suku-text-label-two);font-size:15px;cursor:pointer;font-family:var(--suku-primary-font);letter-spacing:-.3px;letter-spacing:-.4px;padding-top:45px;margin-right:40px}.pT{padding-top:40px;padding-left:2rem}.bgColor1{background:var(--suku-bg-secondary);color:var(--suku-text-label-two);padding-left:60px;padding-right:60px}.bgcolor{background:-webkit-radial-gradient(circle,#303038,#07070f)}li{list-style:none}.wrapper{display:-ms-grid;display:grid;grid-auto-rows:auto;grid-template-columns:repeat(auto-fill,minmax(24%,1fr));grid-row-gap:.5em;grid-column-gap:.5em;text-align:center;border:1px solid #4c4848;font-family:var(--suku-primary-font);height:60px;align-items:center}.wrapper li{align-items:center!important;font-size:15px;font-family:var(--suku-primary-font);letter-spacing:-.3px;color:rgba(255,255,255,.5);letter-spacing:-.4px;cursor:pointer;text-align:center;padding:10px;margin-left:20px;margin-right:20px;word-break:break-all!important}.wrapper li:hover{color:#fff;background:#17181a;border-radius:15px 50px 50px}.active1{border-radius:15px 50px 50px!important;background:#17181a!important;color:#fff!important}.active,ul li a:hover{border-bottom:4px solid var(--suku-secondary-color);padding-bottom:11px;color:var(--suku-text-label-two)}.navbar1{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:.5rem 1rem}.responseColor{background-color:#343a40!important}@media only screen and (max-width:768px) and (min-width:320px){.wrapper{display:-ms-grid;display:grid;-ms-grid-rows:auto;grid-template-rows:auto;grid-template-columns:repeat(auto-fill,minmax(100%,1fr))!important;grid-row-gap:.1em;grid-column-gap:.1em;text-align:center;border:none!important;font-family:var(--suku-primary-font);height:auto!important}.pT{padding-top:10px!important;padding-left:0!important}nav ul li{font-size:15px!important;cursor:pointer;font-family:Poppins,sans-serif;letter-spacing:-.3px;color:rgba(255,255,255,.5);letter-spacing:-.4px;border-bottom:2px solid rgba(0,0,0,.08)!important}.bgColor1{background:#696767a1;color:var(--suku-text-label-two);padding-left:0!important;padding-right:0!important;border-left:20px;border-bottom-left-radius:8px;border-bottom-right-radius:8px}.pT a:hover{border-bottom:0 solid!important;padding-bottom:0!important;color:var(--suku-text-label-two)}.btLine{margin-left:0!important}.userColor{margin-right:6px!important}.wrapper li{padding:3px!important;margin-left:0;margin-right:0;align-items:left;text-align:left}.wrapper li:hover{border-radius:0!important;color:#fff;background:0 0!important}.mobResponse{display:block!important}.mobResponse1{display:none}.useralign{text-align:end!important}}.flRight{float:right;color:#d6d6d6}@media (max-width:1440px){.mobResponse{display:none}}@media (min-width:1440px){.mobResponse{display:none}}@media only screen and (max-width:1440px) and (min-width:1440px){.mobResponse{display:none}}.count{width:20px;height:20px;float:left;font-size:11px;color:#000;line-height:20px;letter-spacing:-.04em;text-align:center;background:#d8fc40;border-radius:360px;position:relative;top:-15px;right:12px}"]
                }] }
    ];
    /** @nocollapse */
    SukuNavBarComponent.ctorParameters = function () { return []; };
    SukuNavBarComponent.propDecorators = {
        userIcon: [{ type: Input, args: ['user-icon',] }],
        UserName: [{ type: Input, args: ['User-name',] }],
        userNameColor: [{ type: Input, args: ['user-name-color',] }],
        userNameFontWeight: [{ type: Input, args: ['user-name-font-weight',] }],
        userNameFontSize: [{ type: Input, args: ['user-name-font-size',] }],
        navbarBgColor: [{ type: Input, args: ['navbar-bg-color',] }],
        subMenuList: [{ type: Input }],
        navbarCustomClass: [{ type: Input, args: ['navbar-custom-class',] }],
        submenuCustomClass: [{ type: Input, args: ['submenu-custom-class',] }],
        logoCustomClass: [{ type: Input, args: ['logo-custom-class',] }],
        nameCustomClass: [{ type: Input, args: ['name-custom-class',] }],
        data: [{ type: Input }]
    };
    return SukuNavBarComponent;
}());
export { SukuNavBarComponent };
if (false) {
    /** @type {?} */
    SukuNavBarComponent.prototype.collpose;
    /** @type {?} */
    SukuNavBarComponent.prototype.selected;
    /** @type {?} */
    SukuNavBarComponent.prototype.navbarOpen;
    /** @type {?} */
    SukuNavBarComponent.prototype.panelOpenState;
    /** @type {?} */
    SukuNavBarComponent.prototype.isActive;
    /** @type {?} */
    SukuNavBarComponent.prototype.userIcon;
    /** @type {?} */
    SukuNavBarComponent.prototype.UserName;
    /** @type {?} */
    SukuNavBarComponent.prototype.userNameColor;
    /** @type {?} */
    SukuNavBarComponent.prototype.userNameFontWeight;
    /** @type {?} */
    SukuNavBarComponent.prototype.userNameFontSize;
    /** @type {?} */
    SukuNavBarComponent.prototype.navbarBgColor;
    /** @type {?} */
    SukuNavBarComponent.prototype.subMenuList;
    /** @type {?} */
    SukuNavBarComponent.prototype.navbarCustomClass;
    /** @type {?} */
    SukuNavBarComponent.prototype.submenuCustomClass;
    /** @type {?} */
    SukuNavBarComponent.prototype.logoCustomClass;
    /** @type {?} */
    SukuNavBarComponent.prototype.nameCustomClass;
    /** @type {?} */
    SukuNavBarComponent.prototype.selectedItem;
    /** @type {?} */
    SukuNavBarComponent.prototype.data;
    /** @type {?} */
    SukuNavBarComponent.prototype.selected1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1uYXYtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LW5hdi1iYXIvc3VrdS1uYXYtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQ7SUEySEM7UUFuSEEsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ0csYUFBUSxHQUFHLHFDQUFxQyxDQUFDO1FBQ2pELGFBQVEsR0FBRyxTQUFTLENBQUM7UUFJZixrQkFBYSxHQUFHLFNBQVMsQ0FBQztRQUMzQyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUdFLG9CQUFlLEdBQUcsV0FBVyxDQUFDO1FBQzlCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBRXhDLFNBQUksR0FBRztZQUNmLElBQUksRUFBRSxtQ0FBbUM7WUFDekMsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsUUFBUSxFQUFFLG9DQUFvQztZQUM5QyxVQUFVLEVBQUUsa0JBQWtCO1lBQzlCLGlCQUFpQixFQUFFLENBQUM7WUFDcEIsbUJBQW1CLEVBQUUsbUJBQW1CO1lBQ3hDLE9BQU8sRUFBRTtnQkFDUjtvQkFDQyxJQUFJLEVBQUUsS0FBSztvQkFDWCxPQUFPLEVBQUUsSUFBSTtvQkFDYixPQUFPLEVBQUUsS0FBSztvQkFDZCxFQUFFLEVBQUUsYUFBYTtvQkFDakIsV0FBVyxFQUFFO3dCQUNaOzRCQUNDLElBQUksRUFBRSxpQkFBaUI7NEJBQ3ZCLElBQUksRUFBRSxTQUFTOzRCQUNmLEVBQUUsRUFBRSxDQUFDO3lCQUNMO3dCQUNEOzRCQUNDLElBQUksRUFBRSxjQUFjOzRCQUNwQixJQUFJLEVBQUUsU0FBUzs0QkFD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WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtbmF2LWJhcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LW5hdi1iYXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LW5hdi1iYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1TmF2QmFyQ29tcG9uZW50IHtcblx0Y29sbHBvc2U6IGFueTtcblx0c2VsZWN0ZWQ6IGFueTtcblx0bmF2YmFyT3BlbiA9IGZhbHNlO1xuXHRwYW5lbE9wZW5TdGF0ZSA9IGZhbHNlO1xuXHRpc0FjdGl2ZSA9IGZhbHNlO1xuXHRASW5wdXQoJ3VzZXItaWNvbicpIHVzZXJJY29uID0gJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYXZhdGFyLWljb24uc3ZnJztcblx0QElucHV0KCdVc2VyLW5hbWUnKSBVc2VyTmFtZSA9ICdBYmlnYWlsJztcblx0QElucHV0KCd1c2VyLW5hbWUtY29sb3InKSB1c2VyTmFtZUNvbG9yO1xuXHRASW5wdXQoJ3VzZXItbmFtZS1mb250LXdlaWdodCcpIHVzZXJOYW1lRm9udFdlaWdodDtcblx0QElucHV0KCd1c2VyLW5hbWUtZm9udC1zaXplJykgdXNlck5hbWVGb250U2l6ZTtcblx0QElucHV0KCduYXZiYXItYmctY29sb3InKSBuYXZiYXJCZ0NvbG9yID0gJ2JnY29sb3InO1xuXHRASW5wdXQoKSBzdWJNZW51TGlzdCA9IFtdO1xuXHRASW5wdXQoJ25hdmJhci1jdXN0b20tY2xhc3MnKSBuYXZiYXJDdXN0b21DbGFzcztcblx0QElucHV0KCdzdWJtZW51LWN1c3RvbS1jbGFzcycpIHN1Ym1lbnVDdXN0b21DbGFzcztcblx0QElucHV0KCdsb2dvLWN1c3RvbS1jbGFzcycpIGxvZ29DdXN0b21DbGFzcyA9ICdpbWctd2lkdGgnO1xuXHRASW5wdXQoJ25hbWUtY3VzdG9tLWNsYXNzJykgbmFtZUN1c3RvbUNsYXNzID0gJyc7XG5cdHNlbGVjdGVkSXRlbTogYW55O1xuXHRASW5wdXQoKSBkYXRhID0ge1xuXHRcdGxvZ286ICdhc3NldHMvaW1hZ2VzL1N1a3VfTG9nb193aGl0ZS5wbmcnLFxuXHRcdFVzZXJuYW1lOiAnTmF2YmFyJyxcblx0XHRjb21wYW55TmFtZTogJ01pY3Jvc29mdCcsXG5cdFx0YmVsbEljb246ICcuLi8uLi8uLi9hc3NldHMvaW1nL2FsYXJtLWljb24uc3ZnJyxcblx0XHRiZWxsSWNvbklkOiAnbm90aWZpY2F0aW9uSWNvbicsXG5cdFx0bm90aWZpY2F0aW9uQ291bnQ6IDIsXG5cdFx0bm90aWZpY2F0aW9uQ291bnRJZDogJ25vdGlmaWNhdGlvbkNvdW50Jyxcblx0XHRzdWJtZW51OiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdCdXknLFxuXHRcdFx0XHRzdWJNZW51OiB0cnVlLFxuXHRcdFx0XHR2aXNpYmxlOiBmYWxzZSxcblx0XHRcdFx0aWQ6ICdjb2xsYXBzZU9uZScsXG5cdFx0XHRcdHN1Yk1lbnVEYXRhOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmFtZTogJ0xpc3RpbmdzICYgQmlkcycsXG5cdFx0XHRcdFx0XHRwYXRoOiAncGF0aE9uZScsXG5cdFx0XHRcdFx0XHRpZDogMVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmFtZTogJ05lZ290aWF0aW9ucycsXG5cdFx0XHRcdFx0XHRwYXRoOiAncGF0aFR3bycsXG5cdFx0XHRcdFx0XHRpZDogMlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmFtZTogJ1B1cmNoYXNlT3JkZXJzJyxcblx0XHRcdFx0XHRcdHBhdGg6ICdwYXRoVGhyZWUnLFxuXHRcdFx0XHRcdFx0aWQ6IDNcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG5hbWU6ICdUcmFuc2FjdGlvbnMnLFxuXHRcdFx0XHRcdFx0cGF0aDogJ3BhdGhGb3VyJyxcblx0XHRcdFx0XHRcdGlkOiA0XG5cdFx0XHRcdFx0fV1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdTZWxsJyxcblx0XHRcdFx0c3ViTWVudTogdHJ1ZSxcblx0XHRcdFx0dmlzaWJsZTogZmFsc2UsXG5cdFx0XHRcdGlkOiAnY29sbGFwc2VPbmUnLFxuXHRcdFx0XHRzdWJNZW51RGF0YTogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG5hbWU6ICdCdXktU2VsbC1QcmljZScsXG5cdFx0XHRcdFx0XHRwYXRoOiAncGF0aE9uZScsXG5cdFx0XHRcdFx0XHRpZDogMVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmFtZTogJ0J1eVByb2R1Y3RzJyxcblx0XHRcdFx0XHRcdHBhdGg6ICdwYXRoVHdvJyxcblx0XHRcdFx0XHRcdGlkOiAyXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuYW1lOiAnQnV5UHVyY2hhc2VPcmRlcnMnLFxuXHRcdFx0XHRcdFx0cGF0aDogJ3BhdGhUaHJlZScsXG5cdFx0XHRcdFx0XHRpZDogM1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmFtZTogJ0J1eVRyYW5zYWN0aW9ucycsXG5cdFx0XHRcdFx0XHRwYXRoOiAncGF0aEZvdXInLFxuXHRcdFx0XHRcdFx0aWQ6IDRcblx0XHRcdFx0XHR9XVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ1RyYW5zYWN0aW9uJyxcblx0XHRcdFx0c3ViTWVudTogdHJ1ZSxcblx0XHRcdFx0dmlzaWJsZTogdHJ1ZSxcblx0XHRcdFx0c3ViTWVudURhdGE6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuYW1lOiAnTGlzdGluZ3MgJiBCaWRzJyxcblx0XHRcdFx0XHRcdHBhdGg6ICdwYXRoT25lJyxcblx0XHRcdFx0XHRcdGlkOiAxXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuYW1lOiAnTmVnb3RpYXRpb25zJyxcblx0XHRcdFx0XHRcdHBhdGg6ICdwYXRoVHdvJyxcblx0XHRcdFx0XHRcdGlkOiAyXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuYW1lOiAnUHVyY2hhc2VPcmRlcnMnLFxuXHRcdFx0XHRcdFx0cGF0aDogJ3BhdGhUaHJlZScsXG5cdFx0XHRcdFx0XHRpZDogM1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmFtZTogJ1RyYW5zYWN0aW9ucycsXG5cdFx0XHRcdFx0XHRwYXRoOiAncGF0aEZvdXInLFxuXHRcdFx0XHRcdFx0aWQ6IDRcblx0XHRcdFx0XHR9XVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ0xvZ291dCcsXG5cdFx0XHRcdHN1Yk1lbnU6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnSGVscCcsXG5cdFx0XHRcdHN1Yk1lbnU6IGZhbHNlXG5cdFx0XHR9XG5cdFx0XVxuXHR9O1xuXHRzZWxlY3RlZDE6IGFueTtcblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHR0b2dnbGVOYXZiYXIoKSB7XG5cdFx0dGhpcy5uYXZiYXJPcGVuID0gIXRoaXMubmF2YmFyT3Blbjtcblx0fVxuXG5cdGlzQWN0aXZlRnVuKG5hbWVzKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWQgPT09IG5hbWVzO1xuXHR9XG5cblx0dG9nZ2xlKG5hbWVzKSB7XG5cdFx0Y29uc29sZS5sb2coJ25hbWVzJywgbmFtZXMpO1xuXHRcdHRoaXMuc2VsZWN0ZWQgPSAnJztcblx0XHR0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcblx0XHR0aGlzLnNlbGVjdGVkID0gbmFtZXM7XG5cdFx0dGhpcy5kYXRhLnN1Ym1lbnUuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0XHRcdGlmIChuYW1lcyA9PSBlbGVtZW50KSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudCk7XG5cdFx0XHRcdGVsZW1lbnQudmlzaWJsZSA9IHRydWU7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQudmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuY29sbHBvc2UgPSBuYW1lcy5pZDtcblx0XHRjb25zb2xlLmxvZygnZWxlbWVudDEnLCB0aGlzLmNvbGxwb3NlKTtcblx0fVxuXG5cdHNlbGVjdChuYW1lKSB7XG5cdFx0dGhpcy5zZWxlY3RlZDEgPSBuYW1lO1xuXHR9XG5cblx0aXNBY3RpdmUyKG5hbWUpIHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZDEgPT09IG5hbWU7XG5cdH1cblxufVxuIl19