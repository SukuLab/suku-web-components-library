/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-nav-bar/suku-nav-bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
        this.hideBellIcon = true;
        this.hideUserDetail = true;
        this.enableTranslate = true;
        this.language = 'language_Btn';
        this.sliderTheme = 'primary';
        this.sliderId = 'translateButton';
        this.toggleLabelPosition = 'before';
        this.translatorValue = true;
        this.action = new EventEmitter();
        this.languageChange = new EventEmitter();
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
                    name: 'logout_Lbl',
                    subMenu: false,
                    id: 'Logout'
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
        var _this = this;
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
                _this.action.emit(element);
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
                    template: "<nav class=\"navbar navbar-expand-lg {{navbarBgColor}} {{navbarCustomClass}} bg-dark navbar-light navbar1\">\n  <div>\n    <a title=\"SUKU\">\n      <img [src]=\"data?.logo\" alt=\"brand-SUKU\" class=\"btLine {{logoCustomClass}}\" />\n    </a>\n  </div>\n  <div class=\"collapse navbar-collapse justify-content-end mr-3\" id=\"navbarNav\">\n    <div *ngFor=\"let names of data.submenu\" class=\"responseTab\">\n      <ul class=\"navbar-nav\">\n        <li class=\"pT\" (click)=\"toggle(names)\">\n          <a [ngClass]=\"{'active': isActiveFun(names)}\" class=\"{{nameCustomClass}}\">\n            {{names.name | translate}}\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <!-- translate slide -->\n  <div class=\"row d-flex\">\n    <div class=\"col pT text-right align-items-end d-flex justify-content-end align-item-right toggle\"\n      *ngIf=\"enableTranslate\">\n      <mat-slide-toggle [labelPosition]=\"toggleLabelPosition\" color=\"{{sliderTheme}}\" id=\"{{sliderId}}\" type=\"checkbox\"\n        (change)=\"languageChange.emit($event)\" [checked]=\"translatorValue\">\n        <span class=\"toggle pr-3\">\n          {{language | translate | uppercase }}\n        </span>\n      </mat-slide-toggle>\n    </div>\n  </div>\n  <div class=\"row d-flex justify-content-around ml-lg-5\" *ngIf=\"hideBellIcon && !hideUserDetail\">\n    <!-- user notification and name -->\n    <a class=\"align-items-end d-flex\">\n      <i *ngIf=\"hideBellIcon\"><img id=\"notificationBell\" src=\"{{data?.bellIcon}}\" id=\"{{data?.bellIconId}}\"></i>\n      <span *ngIf=\"hideBellIcon\" class=\"count\" id=\"{{data?.notificationCountId}}\">{{data?.notificationCount}}</span>\n    </a>\n    <li class=\"iconColor\" *ngIf=\"!hideUserDetail\"><img [src]=\"userIcon\"></li>\n    <li class=\"userColor\" *ngIf=\"!hideUserDetail\" [style.color]=\"userNameColor\" [style.font-weight]=\"userNameFontWeight\"\n      [style.font-size.rem]=\"userNameFontSize\">{{UserName}}</li>\n  </div>\n</nav>\n<div *ngIf=\"isActive\">\n  <div *ngFor=\"let names of data.submenu\">\n    <div class=\"mobResponse1\" *ngIf=\"names?.visible\">\n      <div class=\"bgColor1 col-sm-12 wrapper {{submenuCustomClass}}\" *ngIf=\"names?.subMenu\">\n        <li *ngFor=\"let name of names?.subMenuData\" class=\"line\" (click)=\"select(name)\"\n          [ngClass]=\"{'active1': isActive2(name)}\">\n          <a>{{name.name | translate}}</a>\n        </li>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Response -->\n<nav class=\"navbar navbar-expand-lg navbar-dark  mobResponse responseColor\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\" id=\"accordion\">\n      <div *ngFor=\"let names of data.submenu;  let i = index\">\n        <span id=\"buy{{i}}\" class=\"nav-item nav-link\" data-toggle=\"collapse\" attr.data-target=\"#collapseOne{{i}}\">\n          <ul class=\"navbar-nav\">\n            <li class=\"pT\" (click)=\"toggle(names)\">\n              <a class=\"subMenuBgStyle\">{{names.name | translate}} <i class=\"fa fa-arrow-down flRight\"\n                  *ngIf=\"names.subMenu===true\"></i></a>\n            </li>\n          </ul>\n          <div attr.id=\"collapseOne{{i}}\" class=\"panel-collapse panel panel-default collapse in\" role=\"tabpanel\"\n            aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n            <div *ngIf=\"isActive\">\n              <div *ngFor=\"let names of data.submenu\">\n                <div *ngIf=\"names?.visible\">\n                  <div class=\"bgColor1 col-sm-12 wrapper\" *ngIf=\"names?.subMenu\">\n                    <li *ngFor=\"let name of names?.subMenuData\" class=\"line\">\n                      <a>{{name.name | translate}}</a>\n                    </li>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </span>\n      </div>\n    </ul>\n  </div>\n</nav>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}nav ul li{font-size:18px;cursor:pointer;font-family:var(--suku-primary-font);letter-spacing:-.3px;color:rgba(255,255,255,.5);letter-spacing:-.4px}.img-width{width:125px}.btLine{margin-left:59px}.iconColor{color:var(--suku-text-label-two);font-size:19px;cursor:pointer;font-family:var(--suku-primary-font);letter-spacing:-.3px;letter-spacing:-.4px;padding-top:40px;margin-right:7px!important}.userColor{color:var(--suku-text-label-two);font-size:15px;cursor:pointer;font-family:var(--suku-primary-font);letter-spacing:-.3px;letter-spacing:-.4px;padding-top:45px;margin-right:40px}.pT{padding-top:40px;padding-left:2rem}.bgColor1{background:var(--suku-bg-secondary);color:var(--suku-text-label-two);padding-left:60px;padding-right:60px}.bgcolor{background:-webkit-radial-gradient(circle,#303038,#07070f)}li{list-style:none}.wrapper{display:-ms-grid;display:grid;grid-auto-rows:auto;grid-template-columns:repeat(auto-fill,minmax(24%,1fr));grid-row-gap:.5em;grid-column-gap:.5em;text-align:center;border:1px solid #4c4848;font-family:var(--suku-primary-font);height:60px;align-items:center}.wrapper li{align-items:center!important;font-size:15px;font-family:var(--suku-primary-font);letter-spacing:-.3px;color:rgba(255,255,255,.5);letter-spacing:-.4px;cursor:pointer;text-align:center;padding:10px;margin-left:20px;margin-right:20px;word-break:break-all!important}.wrapper li:hover{color:#fff;background:#17181a;border-radius:15px 50px 50px}.active1{border-radius:15px 50px 50px!important;background:#17181a!important;color:#fff!important}.active,ul li a:hover{border-bottom:4px solid var(--suku-secondary-color);padding-bottom:11px;color:var(--suku-text-label-two)}.navbar1{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:.5rem 1rem}.responseColor{background-color:#343a40!important}@media only screen and (max-width:768px) and (min-width:320px){.wrapper{display:-ms-grid;display:grid;-ms-grid-rows:auto;grid-template-rows:auto;grid-template-columns:repeat(auto-fill,minmax(100%,1fr))!important;grid-row-gap:.1em;grid-column-gap:.1em;text-align:center;border:none!important;font-family:var(--suku-primary-font);height:auto!important}.pT{padding-top:10px!important;padding-left:0!important}nav ul li{font-size:15px!important;cursor:pointer;font-family:Poppins,sans-serif;letter-spacing:-.3px;color:rgba(255,255,255,.5);letter-spacing:-.4px;border-bottom:2px solid rgba(0,0,0,.08)!important}.bgColor1{background:#696767a1;color:var(--suku-text-label-two);padding-left:0!important;padding-right:0!important;border-left:20px;border-bottom-left-radius:8px;border-bottom-right-radius:8px}.pT a:hover{border-bottom:0 solid!important;padding-bottom:0!important;color:var(--suku-text-label-two)}.btLine{margin-left:0!important}.userColor{margin-right:6px!important}.wrapper li{padding:3px!important;margin-left:0;margin-right:0;align-items:left;text-align:left}.wrapper li:hover{border-radius:0!important;color:#fff;background:0 0!important}.mobResponse{display:block!important}.mobResponse1{display:none}.useralign{text-align:end!important}}.flRight{float:right;color:#d6d6d6}@media (max-width:1440px){.mobResponse{display:none}}@media (min-width:1440px){.mobResponse{display:none}}@media only screen and (max-width:1440px) and (min-width:1440px){.mobResponse{display:none}}.count{width:20px;height:20px;float:left;font-size:11px;color:#000;line-height:20px;letter-spacing:-.04em;text-align:center;background:#d8fc40;border-radius:360px;position:relative;top:-15px;right:12px}:host .row{margin-right:0;margin-left:0}.toggle{font-size:18px;font-family:var(--suku-primary-font);color:rgba(255,255,255,.5)}"]
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
        hideBellIcon: [{ type: Input, args: ['hide-bell-icon',] }],
        hideUserDetail: [{ type: Input, args: ['hide-user-detail',] }],
        enableTranslate: [{ type: Input, args: ['enable-translate',] }],
        language: [{ type: Input, args: ['language',] }],
        sliderTheme: [{ type: Input, args: ['slider-theme',] }],
        sliderId: [{ type: Input, args: ['slider-id',] }],
        toggleLabelPosition: [{ type: Input, args: ['toggle-label-position',] }],
        translatorValue: [{ type: Input, args: ['translator-value',] }],
        action: [{ type: Output }],
        languageChange: [{ type: Output }],
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
    SukuNavBarComponent.prototype.hideBellIcon;
    /** @type {?} */
    SukuNavBarComponent.prototype.hideUserDetail;
    /** @type {?} */
    SukuNavBarComponent.prototype.enableTranslate;
    /** @type {?} */
    SukuNavBarComponent.prototype.language;
    /** @type {?} */
    SukuNavBarComponent.prototype.sliderTheme;
    /** @type {?} */
    SukuNavBarComponent.prototype.sliderId;
    /** @type {?} */
    SukuNavBarComponent.prototype.toggleLabelPosition;
    /** @type {?} */
    SukuNavBarComponent.prototype.translatorValue;
    /** @type {?} */
    SukuNavBarComponent.prototype.action;
    /** @type {?} */
    SukuNavBarComponent.prototype.languageChange;
    /** @type {?} */
    SukuNavBarComponent.prototype.selectedItem;
    /** @type {?} */
    SukuNavBarComponent.prototype.data;
    /** @type {?} */
    SukuNavBarComponent.prototype.selected1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1uYXYtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LW5hdi1iYXIvc3VrdS1uYXYtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkU7SUFrSUM7UUExSEEsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ0csYUFBUSxHQUFHLHFDQUFxQyxDQUFDO1FBQ2pELGFBQVEsR0FBRyxTQUFTLENBQUM7UUFJZixrQkFBYSxHQUFHLFNBQVMsQ0FBQztRQUMzQyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUdFLG9CQUFlLEdBQUcsV0FBVyxDQUFDO1FBQzlCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQy9CLGFBQVEsR0FBRyxjQUFjLENBQUM7UUFDdEIsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDM0IsYUFBUSxHQUFHLGlCQUFpQixDQUFDO1FBQ2pCLHdCQUFtQixHQUFHLFFBQVEsQ0FBQztRQUNwQyxvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN4QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFckMsU0FBSSxHQUFHO1lBQ2YsSUFBSSxFQUFFLG1DQUFtQztZQUN6QyxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsV0FBVztZQUN4QixRQUFRLEVBQUUsb0NBQW9DO1lBQzlDLFVBQVUsRUFB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QUMsbUJBQW1COytCQUN6QixLQUFLLFNBQUMsZ0JBQWdCO2lDQUN0QixLQUFLLFNBQUMsa0JBQWtCO2tDQUN4QixLQUFLLFNBQUMsa0JBQWtCOzJCQUN4QixLQUFLLFNBQUMsVUFBVTs4QkFDaEIsS0FBSyxTQUFDLGNBQWM7MkJBQ3BCLEtBQUssU0FBQyxXQUFXO3NDQUNqQixLQUFLLFNBQUMsdUJBQXVCO2tDQUM3QixLQUFLLFNBQUMsa0JBQWtCO3lCQUN4QixNQUFNO2lDQUNOLE1BQU07dUJBRU4sS0FBSzs7SUF1SVAsMEJBQUM7Q0FBQSxBQXhLRCxJQXdLQztTQW5LWSxtQkFBbUI7OztJQUMvQix1Q0FBYzs7SUFDZCx1Q0FBYzs7SUFDZCx5Q0FBbUI7O0lBQ25CLDZDQUF1Qjs7SUFDdkIsdUNBQWlCOztJQUNqQix1Q0FBcUU7O0lBQ3JFLHVDQUF5Qzs7SUFDekMsNENBQXdDOztJQUN4QyxpREFBbUQ7O0lBQ25ELCtDQUErQzs7SUFDL0MsNENBQW9EOztJQUNwRCwwQ0FBMEI7O0lBQzFCLGdEQUFnRDs7SUFDaEQsaURBQWtEOztJQUNsRCw4Q0FBMEQ7O0lBQzFELDhDQUFpRDs7SUFDakQsMkNBQTZDOztJQUM3Qyw2Q0FBaUQ7O0lBQ2pELDhDQUFrRDs7SUFDbEQsdUNBQTZDOztJQUM3QywwQ0FBK0M7O0lBQy9DLHVDQUFpRDs7SUFDakQsa0RBQStEOztJQUMvRCw4Q0FBa0Q7O0lBQ2xELHFDQUFzQzs7SUFDdEMsNkNBQThDOztJQUM5QywyQ0FBa0I7O0lBQ2xCLG1DQStGRTs7SUFDRix3Q0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtbmF2LWJhcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LW5hdi1iYXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LW5hdi1iYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1TmF2QmFyQ29tcG9uZW50IHtcblx0Y29sbHBvc2U6IGFueTtcblx0c2VsZWN0ZWQ6IGFueTtcblx0bmF2YmFyT3BlbiA9IGZhbHNlO1xuXHRwYW5lbE9wZW5TdGF0ZSA9IGZhbHNlO1xuXHRpc0FjdGl2ZSA9IGZhbHNlO1xuXHRASW5wdXQoJ3VzZXItaWNvbicpIHVzZXJJY29uID0gJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYXZhdGFyLWljb24uc3ZnJztcblx0QElucHV0KCdVc2VyLW5hbWUnKSBVc2VyTmFtZSA9ICdBYmlnYWlsJztcblx0QElucHV0KCd1c2VyLW5hbWUtY29sb3InKSB1c2VyTmFtZUNvbG9yO1xuXHRASW5wdXQoJ3VzZXItbmFtZS1mb250LXdlaWdodCcpIHVzZXJOYW1lRm9udFdlaWdodDtcblx0QElucHV0KCd1c2VyLW5hbWUtZm9udC1zaXplJykgdXNlck5hbWVGb250U2l6ZTtcblx0QElucHV0KCduYXZiYXItYmctY29sb3InKSBuYXZiYXJCZ0NvbG9yID0gJ2JnY29sb3InO1xuXHRASW5wdXQoKSBzdWJNZW51TGlzdCA9IFtdO1xuXHRASW5wdXQoJ25hdmJhci1jdXN0b20tY2xhc3MnKSBuYXZiYXJDdXN0b21DbGFzcztcblx0QElucHV0KCdzdWJtZW51LWN1c3RvbS1jbGFzcycpIHN1Ym1lbnVDdXN0b21DbGFzcztcblx0QElucHV0KCdsb2dvLWN1c3RvbS1jbGFzcycpIGxvZ29DdXN0b21DbGFzcyA9ICdpbWctd2lkdGgnO1xuXHRASW5wdXQoJ25hbWUtY3VzdG9tLWNsYXNzJykgbmFtZUN1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgnaGlkZS1iZWxsLWljb24nKSBoaWRlQmVsbEljb24gPSB0cnVlO1xuXHRASW5wdXQoJ2hpZGUtdXNlci1kZXRhaWwnKSBoaWRlVXNlckRldGFpbCA9IHRydWU7XG5cdEBJbnB1dCgnZW5hYmxlLXRyYW5zbGF0ZScpIGVuYWJsZVRyYW5zbGF0ZSA9IHRydWU7XG5cdEBJbnB1dCgnbGFuZ3VhZ2UnKSBsYW5ndWFnZSA9ICdsYW5ndWFnZV9CdG4nO1xuXHRASW5wdXQoJ3NsaWRlci10aGVtZScpIHNsaWRlclRoZW1lID0gJ3ByaW1hcnknO1xuXHRASW5wdXQoJ3NsaWRlci1pZCcpIHNsaWRlcklkID0gJ3RyYW5zbGF0ZUJ1dHRvbic7XG5cdEBJbnB1dCgndG9nZ2xlLWxhYmVsLXBvc2l0aW9uJykgdG9nZ2xlTGFiZWxQb3NpdGlvbiA9ICdiZWZvcmUnO1xuXHRASW5wdXQoJ3RyYW5zbGF0b3ItdmFsdWUnKSB0cmFuc2xhdG9yVmFsdWUgPSB0cnVlO1xuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgbGFuZ3VhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHNlbGVjdGVkSXRlbTogYW55O1xuXHRASW5wdXQoKSBkYXRhID0ge1xuXHRcdGxvZ286ICdhc3NldHMvaW1hZ2VzL1N1a3VfTG9nb193aGl0ZS5wbmcnLFxuXHRcdFVzZXJuYW1lOiAnTmF2YmFyJyxcblx0XHRjb21wYW55TmFtZTogJ01pY3Jvc29mdCcsXG5cdFx0YmVsbEljb246ICcuLi8uLi8uLi9hc3NldHMvaW1nL2FsYXJtLWljb24uc3ZnJyxcblx0XHRiZWxsSWNvbklkOiAnbm90aWZpY2F0aW9uSWNvbicsXG5cdFx0bm90aWZpY2F0aW9uQ291bnQ6IDIsXG5cdFx0bm90aWZpY2F0aW9uQ291bnRJZDogJ25vdGlmaWNhdGlvbkNvdW50Jyxcblx0XHRzdWJtZW51OiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdCdXknLFxuXHRcdFx0XHRzdWJNZW51OiB0cnVlLFxuXHRcdFx0XHR2aXNpYmxlOiBmYWxzZSxcblx0XHRcdFx0aWQ6ICdjb2xsYXBzZU9uZScsXG5cdFx0XHRcdHN1Yk1lbnVEYXRhOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmFtZTogJ0xpc3RpbmdzICYgQmlkcycsXG5cdFx0XHRcdFx0XHRwYXRoOiAncGF0aE9uZScsXG5cdFx0XHRcdFx0XHRpZDogMVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmFtZTogJ05lZ290aWF0aW9ucycsXG5cdFx0XHRcdFx0XHRwYXRoOiAncGF0aFR3bycsXG5cdFx0XHRcdFx0XHRpZDogMlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmFtZTogJ1B1cmNoYXNlT3JkZXJzJyxcblx0XHRcdFx0XHRcdHBhdGg6ICdwYXRoVGhyZWUnLFxuXHRcdFx0XHRcdFx0aWQ6IDNcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG5hbWU6ICdUcmFuc2FjdGlvbnMnLFxuXHRcdFx0XHRcdFx0cGF0aDogJ3BhdGhGb3VyJyxcblx0XHRcdFx0XHRcdGlkOiA0XG5cdFx0XHRcdFx0fV1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdTZWxsJyxcblx0XHRcdFx0c3ViTWVudTogdHJ1ZSxcblx0XHRcdFx0dmlzaWJsZTogZmFsc2UsXG5cdFx0XHRcdGlkOiAnY29sbGFwc2VPbmUnLFxuXHRcdFx0XHRzdWJNZW51RGF0YTogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG5hbWU6ICdCdXktU2VsbC1QcmljZScsXG5cdFx0XHRcdFx0XHRwYXRoOiAncGF0aE9uZScsXG5cdFx0XHRcdFx0XHRpZDogMVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmFtZTogJ0J1eVByb2R1Y3RzJyxcblx0XHRcdFx0XHRcdHBhdGg6ICdwYXRoVHdvJyxcblx0XHRcdFx0XHRcdGlkOiAyXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuYW1lOiAnQnV5UHVyY2hhc2VPcmRlcnMnLFxuXHRcdFx0XHRcdFx0cGF0aDogJ3BhdGhUaHJlZScsXG5cdFx0XHRcdFx0XHRpZDogM1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmFtZTogJ0J1eVRyYW5zYWN0aW9ucycsXG5cdFx0XHRcdFx0XHRwYXRoOiAncGF0aEZvdXInLFxuXHRcdFx0XHRcdFx0aWQ6IDRcblx0XHRcdFx0XHR9XVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ1RyYW5zYWN0aW9uJyxcblx0XHRcdFx0c3ViTWVudTogdHJ1ZSxcblx0XHRcdFx0dmlzaWJsZTogdHJ1ZSxcblx0XHRcdFx0c3ViTWVudURhdGE6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuYW1lOiAnTGlzdGluZ3MgJiBCaWRzJyxcblx0XHRcdFx0XHRcdHBhdGg6ICdwYXRoT25lJyxcblx0XHRcdFx0XHRcdGlkOiAxXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuYW1lOiAnTmVnb3RpYXRpb25zJyxcblx0XHRcdFx0XHRcdHBhdGg6ICdwYXRoVHdvJyxcblx0XHRcdFx0XHRcdGlkOiAyXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuYW1lOiAnUHVyY2hhc2VPcmRlcnMnLFxuXHRcdFx0XHRcdFx0cGF0aDogJ3BhdGhUaHJlZScsXG5cdFx0XHRcdFx0XHRpZDogM1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmFtZTogJ1RyYW5zYWN0aW9ucycsXG5cdFx0XHRcdFx0XHRwYXRoOiAncGF0aEZvdXInLFxuXHRcdFx0XHRcdFx0aWQ6IDRcblx0XHRcdFx0XHR9XVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ2xvZ291dF9MYmwnLFxuXHRcdFx0XHRzdWJNZW51OiBmYWxzZSxcblx0XHRcdFx0aWQ6ICdMb2dvdXQnXG5cdFx0XHR9XG5cdFx0XVxuXHR9O1xuXHRzZWxlY3RlZDE6IGFueTtcblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHR0b2dnbGVOYXZiYXIoKSB7XG5cdFx0dGhpcy5uYXZiYXJPcGVuID0gIXRoaXMubmF2YmFyT3Blbjtcblx0fVxuXG5cdGlzQWN0aXZlRnVuKG5hbWVzKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWQgPT09IG5hbWVzO1xuXHR9XG5cblx0dG9nZ2xlKG5hbWVzKSB7XG5cdFx0Y29uc29sZS5sb2coJ25hbWVzJywgbmFtZXMpO1xuXHRcdHRoaXMuc2VsZWN0ZWQgPSAnJztcblx0XHR0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcblx0XHR0aGlzLnNlbGVjdGVkID0gbmFtZXM7XG5cdFx0dGhpcy5kYXRhLnN1Ym1lbnUuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0XHRcdGlmIChuYW1lcyA9PSBlbGVtZW50KSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudCk7XG5cdFx0XHRcdHRoaXMuYWN0aW9uLmVtaXQoZWxlbWVudCk7XG5cdFx0XHRcdGVsZW1lbnQudmlzaWJsZSA9IHRydWU7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQudmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuY29sbHBvc2UgPSBuYW1lcy5pZDtcblx0XHRjb25zb2xlLmxvZygnZWxlbWVudDEnLCB0aGlzLmNvbGxwb3NlKTtcblx0fVxuXG5cdHNlbGVjdChuYW1lKSB7XG5cdFx0dGhpcy5zZWxlY3RlZDEgPSBuYW1lO1xuXHR9XG5cblx0aXNBY3RpdmUyKG5hbWUpIHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZDEgPT09IG5hbWU7XG5cdH1cblxufVxuIl19