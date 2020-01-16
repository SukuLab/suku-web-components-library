/**
 * @fileoverview added by tsickle
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
                    template: "<nav class=\"navbar navbar-expand-lg {{navbarBgColor}} {{navbarCustomClass}} bg-dark navbar-light navbar1\">\r\n  <div>\r\n    <a title=\"SUKU\">\r\n      <img [src]=\"data?.logo\" alt=\"brand-SUKU\" class=\"btLine {{logoCustomClass}}\" />\r\n    </a>\r\n  </div>\r\n  <div class=\"collapse navbar-collapse justify-content-end mr-3\" id=\"navbarNav\">\r\n    <div *ngFor=\"let names of data.submenu\" class=\"responseTab\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"pT\" (click)=\"toggle(names)\">\r\n          <a [ngClass]=\"{'active': isActiveFun(names)}\" class=\"{{nameCustomClass}}\">\r\n            {{names.name | translate}}\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <!-- translate slide -->\r\n  <div class=\"row d-flex\">\r\n    <div class=\"col pT text-right align-items-end d-flex justify-content-end align-item-right toggle\"\r\n      *ngIf=\"enableTranslate\">\r\n      <mat-slide-toggle [labelPosition]=\"toggleLabelPosition\" color=\"{{sliderTheme}}\" id=\"{{sliderId}}\" type=\"checkbox\"\r\n        (change)=\"languageChange.emit($event)\" [checked]=\"translatorValue\">\r\n        <span class=\"toggle pr-3\">\r\n          {{language | translate | uppercase }}\r\n        </span>\r\n      </mat-slide-toggle>\r\n    </div>\r\n  </div>\r\n  <div class=\"row d-flex justify-content-around ml-lg-5\" *ngIf=\"hideBellIcon && !hideUserDetail\">\r\n    <!-- user notification and name -->\r\n    <a class=\"align-items-end d-flex\">\r\n      <i *ngIf=\"hideBellIcon\"><img id=\"notificationBell\" src=\"{{data?.bellIcon}}\" id=\"{{data?.bellIconId}}\"></i>\r\n      <span *ngIf=\"hideBellIcon\" class=\"count\" id=\"{{data?.notificationCountId}}\">{{data?.notificationCount}}</span>\r\n    </a>\r\n    <li class=\"iconColor\" *ngIf=\"!hideUserDetail\"><img [src]=\"userIcon\"></li>\r\n    <li class=\"userColor\" *ngIf=\"!hideUserDetail\" [style.color]=\"userNameColor\" [style.font-weight]=\"userNameFontWeight\"\r\n      [style.font-size.rem]=\"userNameFontSize\">{{UserName}}</li>\r\n  </div>\r\n</nav>\r\n<div *ngIf=\"isActive\">\r\n  <div *ngFor=\"let names of data.submenu\">\r\n    <div class=\"mobResponse1\" *ngIf=\"names?.visible\">\r\n      <div class=\"bgColor1 col-sm-12 wrapper {{submenuCustomClass}}\" *ngIf=\"names?.subMenu\">\r\n        <li *ngFor=\"let name of names?.subMenuData\" class=\"line\" (click)=\"select(name)\"\r\n          [ngClass]=\"{'active1': isActive2(name)}\">\r\n          <a>{{name.name | translate}}</a>\r\n        </li>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Response -->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark  mobResponse responseColor\">\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\" id=\"accordion\">\r\n      <div *ngFor=\"let names of data.submenu;  let i = index\">\r\n        <span id=\"buy{{i}}\" class=\"nav-item nav-link\" data-toggle=\"collapse\" attr.data-target=\"#collapseOne{{i}}\">\r\n          <ul class=\"navbar-nav\">\r\n            <li class=\"pT\" (click)=\"toggle(names)\">\r\n              <a class=\"subMenuBgStyle\">{{names.name | translate}} <i class=\"fa fa-arrow-down flRight\"\r\n                  *ngIf=\"names.subMenu===true\"></i></a>\r\n            </li>\r\n          </ul>\r\n          <div attr.id=\"collapseOne{{i}}\" class=\"panel-collapse panel panel-default collapse in\" role=\"tabpanel\"\r\n            aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n            <div *ngIf=\"isActive\">\r\n              <div *ngFor=\"let names of data.submenu\">\r\n                <div *ngIf=\"names?.visible\">\r\n                  <div class=\"bgColor1 col-sm-12 wrapper\" *ngIf=\"names?.subMenu\">\r\n                    <li *ngFor=\"let name of names?.subMenuData\" class=\"line\">\r\n                      <a>{{name.name | translate}}</a>\r\n                    </li>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </span>\r\n      </div>\r\n    </ul>\r\n  </div>\r\n</nav>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1uYXYtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LW5hdi1iYXIvc3VrdS1uYXYtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RTtJQWtJQztRQTFIQSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDRyxhQUFRLEdBQUcscUNBQXFDLENBQUM7UUFDakQsYUFBUSxHQUFHLFNBQVMsQ0FBQztRQUlmLGtCQUFhLEdBQUcsU0FBUyxDQUFDO1FBQzNDLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBR0Usb0JBQWUsR0FBRyxXQUFXLENBQUM7UUFDOUIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDeEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDbEIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDL0IsYUFBUSxHQUFHLGNBQWMsQ0FBQztRQUN0QixnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUMzQixhQUFRLEdBQUcsaUJBQWlCLENBQUM7UUFDakIsd0JBQW1CLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3hDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyQyxTQUFJLEdBQUc7WUFDZixJQUFJLEVBQUUsbUNBQW1DO1lBQ3pDLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFFBQVEsRUFBRSxvQ0FBb0M7WUFDOUMsVUFBVSxFQUFF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QyxtQkFBbUI7K0JBQ3pCLEtBQUssU0FBQyxnQkFBZ0I7aUNBQ3RCLEtBQUssU0FBQyxrQkFBa0I7a0NBQ3hCLEtBQUssU0FBQyxrQkFBa0I7MkJBQ3hCLEtBQUssU0FBQyxVQUFVOzhCQUNoQixLQUFLLFNBQUMsY0FBYzsyQkFDcEIsS0FBSyxTQUFDLFdBQVc7c0NBQ2pCLEtBQUssU0FBQyx1QkFBdUI7a0NBQzdCLEtBQUssU0FBQyxrQkFBa0I7eUJBQ3hCLE1BQU07aUNBQ04sTUFBTTt1QkFFTixLQUFLOztJQXVJUCwwQkFBQztDQUFBLEFBeEtELElBd0tDO1NBbktZLG1CQUFtQjs7O0lBQy9CLHVDQUFjOztJQUNkLHVDQUFjOztJQUNkLHlDQUFtQjs7SUFDbkIsNkNBQXVCOztJQUN2Qix1Q0FBaUI7O0lBQ2pCLHVDQUFxRTs7SUFDckUsdUNBQXlDOztJQUN6Qyw0Q0FBd0M7O0lBQ3hDLGlEQUFtRDs7SUFDbkQsK0NBQStDOztJQUMvQyw0Q0FBb0Q7O0lBQ3BELDBDQUEwQjs7SUFDMUIsZ0RBQWdEOztJQUNoRCxpREFBa0Q7O0lBQ2xELDhDQUEwRDs7SUFDMUQsOENBQWlEOztJQUNqRCwyQ0FBNkM7O0lBQzdDLDZDQUFpRDs7SUFDakQsOENBQWtEOztJQUNsRCx1Q0FBNkM7O0lBQzdDLDBDQUErQzs7SUFDL0MsdUNBQWlEOztJQUNqRCxrREFBK0Q7O0lBQy9ELDhDQUFrRDs7SUFDbEQscUNBQXNDOztJQUN0Qyw2Q0FBOEM7O0lBQzlDLDJDQUFrQjs7SUFDbEIsbUNBK0ZFOztJQUNGLHdDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc3VrdS1uYXYtYmFyJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1uYXYtYmFyLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LW5hdi1iYXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdU5hdkJhckNvbXBvbmVudCB7XHJcblx0Y29sbHBvc2U6IGFueTtcclxuXHRzZWxlY3RlZDogYW55O1xyXG5cdG5hdmJhck9wZW4gPSBmYWxzZTtcclxuXHRwYW5lbE9wZW5TdGF0ZSA9IGZhbHNlO1xyXG5cdGlzQWN0aXZlID0gZmFsc2U7XHJcblx0QElucHV0KCd1c2VyLWljb24nKSB1c2VySWNvbiA9ICcuLi8uLi8uLi9hc3NldHMvaW1nL2F2YXRhci1pY29uLnN2Zyc7XHJcblx0QElucHV0KCdVc2VyLW5hbWUnKSBVc2VyTmFtZSA9ICdBYmlnYWlsJztcclxuXHRASW5wdXQoJ3VzZXItbmFtZS1jb2xvcicpIHVzZXJOYW1lQ29sb3I7XHJcblx0QElucHV0KCd1c2VyLW5hbWUtZm9udC13ZWlnaHQnKSB1c2VyTmFtZUZvbnRXZWlnaHQ7XHJcblx0QElucHV0KCd1c2VyLW5hbWUtZm9udC1zaXplJykgdXNlck5hbWVGb250U2l6ZTtcclxuXHRASW5wdXQoJ25hdmJhci1iZy1jb2xvcicpIG5hdmJhckJnQ29sb3IgPSAnYmdjb2xvcic7XHJcblx0QElucHV0KCkgc3ViTWVudUxpc3QgPSBbXTtcclxuXHRASW5wdXQoJ25hdmJhci1jdXN0b20tY2xhc3MnKSBuYXZiYXJDdXN0b21DbGFzcztcclxuXHRASW5wdXQoJ3N1Ym1lbnUtY3VzdG9tLWNsYXNzJykgc3VibWVudUN1c3RvbUNsYXNzO1xyXG5cdEBJbnB1dCgnbG9nby1jdXN0b20tY2xhc3MnKSBsb2dvQ3VzdG9tQ2xhc3MgPSAnaW1nLXdpZHRoJztcclxuXHRASW5wdXQoJ25hbWUtY3VzdG9tLWNsYXNzJykgbmFtZUN1c3RvbUNsYXNzID0gJyc7XHJcblx0QElucHV0KCdoaWRlLWJlbGwtaWNvbicpIGhpZGVCZWxsSWNvbiA9IHRydWU7XHJcblx0QElucHV0KCdoaWRlLXVzZXItZGV0YWlsJykgaGlkZVVzZXJEZXRhaWwgPSB0cnVlO1xyXG5cdEBJbnB1dCgnZW5hYmxlLXRyYW5zbGF0ZScpIGVuYWJsZVRyYW5zbGF0ZSA9IHRydWU7XHJcblx0QElucHV0KCdsYW5ndWFnZScpIGxhbmd1YWdlID0gJ2xhbmd1YWdlX0J0bic7XHJcblx0QElucHV0KCdzbGlkZXItdGhlbWUnKSBzbGlkZXJUaGVtZSA9ICdwcmltYXJ5JztcclxuXHRASW5wdXQoJ3NsaWRlci1pZCcpIHNsaWRlcklkID0gJ3RyYW5zbGF0ZUJ1dHRvbic7XHJcblx0QElucHV0KCd0b2dnbGUtbGFiZWwtcG9zaXRpb24nKSB0b2dnbGVMYWJlbFBvc2l0aW9uID0gJ2JlZm9yZSc7XHJcblx0QElucHV0KCd0cmFuc2xhdG9yLXZhbHVlJykgdHJhbnNsYXRvclZhbHVlID0gdHJ1ZTtcclxuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBsYW5ndWFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRzZWxlY3RlZEl0ZW06IGFueTtcclxuXHRASW5wdXQoKSBkYXRhID0ge1xyXG5cdFx0bG9nbzogJ2Fzc2V0cy9pbWFnZXMvU3VrdV9Mb2dvX3doaXRlLnBuZycsXHJcblx0XHRVc2VybmFtZTogJ05hdmJhcicsXHJcblx0XHRjb21wYW55TmFtZTogJ01pY3Jvc29mdCcsXHJcblx0XHRiZWxsSWNvbjogJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYWxhcm0taWNvbi5zdmcnLFxyXG5cdFx0YmVsbEljb25JZDogJ25vdGlmaWNhdGlvbkljb24nLFxyXG5cdFx0bm90aWZpY2F0aW9uQ291bnQ6IDIsXHJcblx0XHRub3RpZmljYXRpb25Db3VudElkOiAnbm90aWZpY2F0aW9uQ291bnQnLFxyXG5cdFx0c3VibWVudTogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogJ0J1eScsXHJcblx0XHRcdFx0c3ViTWVudTogdHJ1ZSxcclxuXHRcdFx0XHR2aXNpYmxlOiBmYWxzZSxcclxuXHRcdFx0XHRpZDogJ2NvbGxhcHNlT25lJyxcclxuXHRcdFx0XHRzdWJNZW51RGF0YTogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAnTGlzdGluZ3MgJiBCaWRzJyxcclxuXHRcdFx0XHRcdFx0cGF0aDogJ3BhdGhPbmUnLFxyXG5cdFx0XHRcdFx0XHRpZDogMVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ05lZ290aWF0aW9ucycsXHJcblx0XHRcdFx0XHRcdHBhdGg6ICdwYXRoVHdvJyxcclxuXHRcdFx0XHRcdFx0aWQ6IDJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICdQdXJjaGFzZU9yZGVycycsXHJcblx0XHRcdFx0XHRcdHBhdGg6ICdwYXRoVGhyZWUnLFxyXG5cdFx0XHRcdFx0XHRpZDogM1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ1RyYW5zYWN0aW9ucycsXHJcblx0XHRcdFx0XHRcdHBhdGg6ICdwYXRoRm91cicsXHJcblx0XHRcdFx0XHRcdGlkOiA0XHJcblx0XHRcdFx0XHR9XVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogJ1NlbGwnLFxyXG5cdFx0XHRcdHN1Yk1lbnU6IHRydWUsXHJcblx0XHRcdFx0dmlzaWJsZTogZmFsc2UsXHJcblx0XHRcdFx0aWQ6ICdjb2xsYXBzZU9uZScsXHJcblx0XHRcdFx0c3ViTWVudURhdGE6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ0J1eS1TZWxsLVByaWNlJyxcclxuXHRcdFx0XHRcdFx0cGF0aDogJ3BhdGhPbmUnLFxyXG5cdFx0XHRcdFx0XHRpZDogMVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ0J1eVByb2R1Y3RzJyxcclxuXHRcdFx0XHRcdFx0cGF0aDogJ3BhdGhUd28nLFxyXG5cdFx0XHRcdFx0XHRpZDogMlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ0J1eVB1cmNoYXNlT3JkZXJzJyxcclxuXHRcdFx0XHRcdFx0cGF0aDogJ3BhdGhUaHJlZScsXHJcblx0XHRcdFx0XHRcdGlkOiAzXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAnQnV5VHJhbnNhY3Rpb25zJyxcclxuXHRcdFx0XHRcdFx0cGF0aDogJ3BhdGhGb3VyJyxcclxuXHRcdFx0XHRcdFx0aWQ6IDRcclxuXHRcdFx0XHRcdH1dXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnVHJhbnNhY3Rpb24nLFxyXG5cdFx0XHRcdHN1Yk1lbnU6IHRydWUsXHJcblx0XHRcdFx0dmlzaWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRzdWJNZW51RGF0YTogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAnTGlzdGluZ3MgJiBCaWRzJyxcclxuXHRcdFx0XHRcdFx0cGF0aDogJ3BhdGhPbmUnLFxyXG5cdFx0XHRcdFx0XHRpZDogMVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ05lZ290aWF0aW9ucycsXHJcblx0XHRcdFx0XHRcdHBhdGg6ICdwYXRoVHdvJyxcclxuXHRcdFx0XHRcdFx0aWQ6IDJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICdQdXJjaGFzZU9yZGVycycsXHJcblx0XHRcdFx0XHRcdHBhdGg6ICdwYXRoVGhyZWUnLFxyXG5cdFx0XHRcdFx0XHRpZDogM1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ1RyYW5zYWN0aW9ucycsXHJcblx0XHRcdFx0XHRcdHBhdGg6ICdwYXRoRm91cicsXHJcblx0XHRcdFx0XHRcdGlkOiA0XHJcblx0XHRcdFx0XHR9XVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogJ2xvZ291dF9MYmwnLFxyXG5cdFx0XHRcdHN1Yk1lbnU6IGZhbHNlLFxyXG5cdFx0XHRcdGlkOiAnTG9nb3V0J1xyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fTtcclxuXHRzZWxlY3RlZDE6IGFueTtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZU5hdmJhcigpIHtcclxuXHRcdHRoaXMubmF2YmFyT3BlbiA9ICF0aGlzLm5hdmJhck9wZW47XHJcblx0fVxyXG5cclxuXHRpc0FjdGl2ZUZ1bihuYW1lcykge1xyXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWQgPT09IG5hbWVzO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlKG5hbWVzKSB7XHJcblx0XHRjb25zb2xlLmxvZygnbmFtZXMnLCBuYW1lcyk7XHJcblx0XHR0aGlzLnNlbGVjdGVkID0gJyc7XHJcblx0XHR0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuXHRcdHRoaXMuc2VsZWN0ZWQgPSBuYW1lcztcclxuXHRcdHRoaXMuZGF0YS5zdWJtZW51LmZvckVhY2goZWxlbWVudCA9PiB7XHJcblx0XHRcdGlmIChuYW1lcyA9PSBlbGVtZW50KSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2VsZW1lbnQnLCBlbGVtZW50KTtcclxuXHRcdFx0XHR0aGlzLmFjdGlvbi5lbWl0KGVsZW1lbnQpO1xyXG5cdFx0XHRcdGVsZW1lbnQudmlzaWJsZSA9IHRydWU7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGVsZW1lbnQudmlzaWJsZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuY29sbHBvc2UgPSBuYW1lcy5pZDtcclxuXHRcdGNvbnNvbGUubG9nKCdlbGVtZW50MScsIHRoaXMuY29sbHBvc2UpO1xyXG5cdH1cclxuXHJcblx0c2VsZWN0KG5hbWUpIHtcclxuXHRcdHRoaXMuc2VsZWN0ZWQxID0gbmFtZTtcclxuXHR9XHJcblxyXG5cdGlzQWN0aXZlMihuYW1lKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZDEgPT09IG5hbWU7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=