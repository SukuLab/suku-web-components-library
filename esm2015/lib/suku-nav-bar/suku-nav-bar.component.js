/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuNavBarComponent {
    constructor() {
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
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    /**
     * @param {?} names
     * @return {?}
     */
    isActiveFun(names) {
        return this.selected === names;
    }
    /**
     * @param {?} names
     * @return {?}
     */
    toggle(names) {
        console.log('names', names);
        this.selected = '';
        this.isActive = true;
        this.selected = names;
        this.data.submenu.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            if (names == element) {
                console.log('element', element);
                this.action.emit(element);
                element.visible = true;
            }
            else {
                element.visible = false;
            }
        }));
        this.collpose = names.id;
        console.log('element1', this.collpose);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    select(name) {
        this.selected1 = name;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    isActive2(name) {
        return this.selected1 === name;
    }
}
SukuNavBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-nav-bar',
                template: "<nav class=\"navbar navbar-expand-lg {{navbarBgColor}} {{navbarCustomClass}} bg-dark navbar-light navbar1\">\r\n  <div>\r\n    <a title=\"SUKU\">\r\n      <img [src]=\"data?.logo\" alt=\"brand-SUKU\" class=\"btLine {{logoCustomClass}}\" />\r\n    </a>\r\n  </div>\r\n  <div class=\"collapse navbar-collapse justify-content-end mr-3\" id=\"navbarNav\">\r\n    <div *ngFor=\"let names of data.submenu\" class=\"responseTab\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"pT\" (click)=\"toggle(names)\">\r\n          <a [ngClass]=\"{'active': isActiveFun(names)}\" class=\"{{nameCustomClass}}\">\r\n            {{names.name | translate}}\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <!-- translate slide -->\r\n  <div class=\"row d-flex\">\r\n    <div class=\"col pT text-right align-items-end d-flex justify-content-end align-item-right toggle\"\r\n      *ngIf=\"enableTranslate\">\r\n      <mat-slide-toggle [labelPosition]=\"toggleLabelPosition\" color=\"{{sliderTheme}}\" id=\"{{sliderId}}\" type=\"checkbox\"\r\n        (change)=\"languageChange.emit($event)\" [checked]=\"translatorValue\">\r\n        <span class=\"toggle pr-3\">\r\n          {{language | translate | uppercase }}\r\n        </span>\r\n      </mat-slide-toggle>\r\n    </div>\r\n  </div>\r\n  <div class=\"row d-flex justify-content-around ml-lg-5\" *ngIf=\"hideBellIcon && !hideUserDetail\">\r\n    <!-- user notification and name -->\r\n    <a class=\"align-items-end d-flex\">\r\n      <i *ngIf=\"hideBellIcon\"><img id=\"notificationBell\" src=\"{{data?.bellIcon}}\" id=\"{{data?.bellIconId}}\"></i>\r\n      <span *ngIf=\"hideBellIcon\" class=\"count\" id=\"{{data?.notificationCountId}}\">{{data?.notificationCount}}</span>\r\n    </a>\r\n    <li class=\"iconColor\" *ngIf=\"!hideUserDetail\"><img [src]=\"userIcon\"></li>\r\n    <li class=\"userColor\" *ngIf=\"!hideUserDetail\" [style.color]=\"userNameColor\" [style.font-weight]=\"userNameFontWeight\"\r\n      [style.font-size.rem]=\"userNameFontSize\">{{UserName}}</li>\r\n  </div>\r\n</nav>\r\n<div *ngIf=\"isActive\">\r\n  <div *ngFor=\"let names of data.submenu\">\r\n    <div class=\"mobResponse1\" *ngIf=\"names?.visible\">\r\n      <div class=\"bgColor1 col-sm-12 wrapper {{submenuCustomClass}}\" *ngIf=\"names?.subMenu\">\r\n        <li *ngFor=\"let name of names?.subMenuData\" class=\"line\" (click)=\"select(name)\"\r\n          [ngClass]=\"{'active1': isActive2(name)}\">\r\n          <a>{{name.name | translate}}</a>\r\n        </li>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Response -->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark  mobResponse responseColor\">\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\" id=\"accordion\">\r\n      <div *ngFor=\"let names of data.submenu;  let i = index\">\r\n        <span id=\"buy{{i}}\" class=\"nav-item nav-link\" data-toggle=\"collapse\" attr.data-target=\"#collapseOne{{i}}\">\r\n          <ul class=\"navbar-nav\">\r\n            <li class=\"pT\" (click)=\"toggle(names)\">\r\n              <a class=\"subMenuBgStyle\">{{names.name | translate}} <i class=\"fa fa-arrow-down flRight\"\r\n                  *ngIf=\"names.subMenu===true\"></i></a>\r\n            </li>\r\n          </ul>\r\n          <div attr.id=\"collapseOne{{i}}\" class=\"panel-collapse panel panel-default collapse in\" role=\"tabpanel\"\r\n            aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n            <div *ngIf=\"isActive\">\r\n              <div *ngFor=\"let names of data.submenu\">\r\n                <div *ngIf=\"names?.visible\">\r\n                  <div class=\"bgColor1 col-sm-12 wrapper\" *ngIf=\"names?.subMenu\">\r\n                    <li *ngFor=\"let name of names?.subMenuData\" class=\"line\">\r\n                      <a>{{name.name | translate}}</a>\r\n                    </li>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </span>\r\n      </div>\r\n    </ul>\r\n  </div>\r\n</nav>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}nav ul li{font-size:18px;cursor:pointer;font-family:var(--suku-primary-font);letter-spacing:-.3px;color:rgba(255,255,255,.5);letter-spacing:-.4px}.img-width{width:125px}.btLine{margin-left:59px}.iconColor{color:var(--suku-text-label-two);font-size:19px;cursor:pointer;font-family:var(--suku-primary-font);letter-spacing:-.3px;letter-spacing:-.4px;padding-top:40px;margin-right:7px!important}.userColor{color:var(--suku-text-label-two);font-size:15px;cursor:pointer;font-family:var(--suku-primary-font);letter-spacing:-.3px;letter-spacing:-.4px;padding-top:45px;margin-right:40px}.pT{padding-top:40px;padding-left:2rem}.bgColor1{background:var(--suku-bg-secondary);color:var(--suku-text-label-two);padding-left:60px;padding-right:60px}.bgcolor{background:-webkit-radial-gradient(circle,#303038,#07070f)}li{list-style:none}.wrapper{display:-ms-grid;display:grid;grid-auto-rows:auto;grid-template-columns:repeat(auto-fill,minmax(24%,1fr));grid-row-gap:.5em;grid-column-gap:.5em;text-align:center;border:1px solid #4c4848;font-family:var(--suku-primary-font);height:60px;align-items:center}.wrapper li{align-items:center!important;font-size:15px;font-family:var(--suku-primary-font);letter-spacing:-.3px;color:rgba(255,255,255,.5);letter-spacing:-.4px;cursor:pointer;text-align:center;padding:10px;margin-left:20px;margin-right:20px;word-break:break-all!important}.wrapper li:hover{color:#fff;background:#17181a;border-radius:15px 50px 50px}.active1{border-radius:15px 50px 50px!important;background:#17181a!important;color:#fff!important}.active,ul li a:hover{border-bottom:4px solid var(--suku-secondary-color);padding-bottom:11px;color:var(--suku-text-label-two)}.navbar1{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:.5rem 1rem}.responseColor{background-color:#343a40!important}@media only screen and (max-width:768px) and (min-width:320px){.wrapper{display:-ms-grid;display:grid;-ms-grid-rows:auto;grid-template-rows:auto;grid-template-columns:repeat(auto-fill,minmax(100%,1fr))!important;grid-row-gap:.1em;grid-column-gap:.1em;text-align:center;border:none!important;font-family:var(--suku-primary-font);height:auto!important}.pT{padding-top:10px!important;padding-left:0!important}nav ul li{font-size:15px!important;cursor:pointer;font-family:Poppins,sans-serif;letter-spacing:-.3px;color:rgba(255,255,255,.5);letter-spacing:-.4px;border-bottom:2px solid rgba(0,0,0,.08)!important}.bgColor1{background:#696767a1;color:var(--suku-text-label-two);padding-left:0!important;padding-right:0!important;border-left:20px;border-bottom-left-radius:8px;border-bottom-right-radius:8px}.pT a:hover{border-bottom:0 solid!important;padding-bottom:0!important;color:var(--suku-text-label-two)}.btLine{margin-left:0!important}.userColor{margin-right:6px!important}.wrapper li{padding:3px!important;margin-left:0;margin-right:0;align-items:left;text-align:left}.wrapper li:hover{border-radius:0!important;color:#fff;background:0 0!important}.mobResponse{display:block!important}.mobResponse1{display:none}.useralign{text-align:end!important}}.flRight{float:right;color:#d6d6d6}@media (max-width:1440px){.mobResponse{display:none}}@media (min-width:1440px){.mobResponse{display:none}}@media only screen and (max-width:1440px) and (min-width:1440px){.mobResponse{display:none}}.count{width:20px;height:20px;float:left;font-size:11px;color:#000;line-height:20px;letter-spacing:-.04em;text-align:center;background:#d8fc40;border-radius:360px;position:relative;top:-15px;right:12px}:host .row{margin-right:0;margin-left:0}.toggle{font-size:18px;font-family:var(--suku-primary-font);color:rgba(255,255,255,.5)}"]
            }] }
];
/** @nocollapse */
SukuNavBarComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1uYXYtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LW5hdi1iYXIvc3VrdS1uYXYtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxNQUFNLE9BQU8sbUJBQW1CO0lBNkgvQjtRQTFIQSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDRyxhQUFRLEdBQUcscUNBQXFDLENBQUM7UUFDakQsYUFBUSxHQUFHLFNBQVMsQ0FBQztRQUlmLGtCQUFhLEdBQUcsU0FBUyxDQUFDO1FBQzNDLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBR0Usb0JBQWUsR0FBRyxXQUFXLENBQUM7UUFDOUIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDeEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDbEIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDL0IsYUFBUSxHQUFHLGNBQWMsQ0FBQztRQUN0QixnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUMzQixhQUFRLEdBQUcsaUJBQWlCLENBQUM7UUFDakIsd0JBQW1CLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3hDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyQyxTQUFJLEdBQUc7WUFDZixJQUFJLEVBQUUsbUNBQW1DO1lBQ3pDLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFFBQVEsRUFBRSxvQ0FB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QUN0QixLQUFLLFNBQUMsa0JBQWtCOzhCQUN4QixLQUFLLFNBQUMsa0JBQWtCO3VCQUN4QixLQUFLLFNBQUMsVUFBVTswQkFDaEIsS0FBSyxTQUFDLGNBQWM7dUJBQ3BCLEtBQUssU0FBQyxXQUFXO2tDQUNqQixLQUFLLFNBQUMsdUJBQXVCOzhCQUM3QixLQUFLLFNBQUMsa0JBQWtCO3FCQUN4QixNQUFNOzZCQUNOLE1BQU07bUJBRU4sS0FBSzs7OztJQTNCTix1Q0FBYzs7SUFDZCx1Q0FBYzs7SUFDZCx5Q0FBbUI7O0lBQ25CLDZDQUF1Qjs7SUFDdkIsdUNBQWlCOztJQUNqQix1Q0FBcUU7O0lBQ3JFLHVDQUF5Qzs7SUFDekMsNENBQXdDOztJQUN4QyxpREFBbUQ7O0lBQ25ELCtDQUErQzs7SUFDL0MsNENBQW9EOztJQUNwRCwwQ0FBMEI7O0lBQzFCLGdEQUFnRDs7SUFDaEQsaURBQWtEOztJQUNsRCw4Q0FBMEQ7O0lBQzFELDhDQUFpRDs7SUFDakQsMkNBQTZDOztJQUM3Qyw2Q0FBaUQ7O0lBQ2pELDhDQUFrRDs7SUFDbEQsdUNBQTZDOztJQUM3QywwQ0FBK0M7O0lBQy9DLHVDQUFpRDs7SUFDakQsa0RBQStEOztJQUMvRCw4Q0FBa0Q7O0lBQ2xELHFDQUFzQzs7SUFDdEMsNkNBQThDOztJQUM5QywyQ0FBa0I7O0lBQ2xCLG1DQStGRTs7SUFDRix3Q0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3N1a3UtbmF2LWJhcicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtbmF2LWJhci5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1uYXYtYmFyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VOYXZCYXJDb21wb25lbnQge1xyXG5cdGNvbGxwb3NlOiBhbnk7XHJcblx0c2VsZWN0ZWQ6IGFueTtcclxuXHRuYXZiYXJPcGVuID0gZmFsc2U7XHJcblx0cGFuZWxPcGVuU3RhdGUgPSBmYWxzZTtcclxuXHRpc0FjdGl2ZSA9IGZhbHNlO1xyXG5cdEBJbnB1dCgndXNlci1pY29uJykgdXNlckljb24gPSAnLi4vLi4vLi4vYXNzZXRzL2ltZy9hdmF0YXItaWNvbi5zdmcnO1xyXG5cdEBJbnB1dCgnVXNlci1uYW1lJykgVXNlck5hbWUgPSAnQWJpZ2FpbCc7XHJcblx0QElucHV0KCd1c2VyLW5hbWUtY29sb3InKSB1c2VyTmFtZUNvbG9yO1xyXG5cdEBJbnB1dCgndXNlci1uYW1lLWZvbnQtd2VpZ2h0JykgdXNlck5hbWVGb250V2VpZ2h0O1xyXG5cdEBJbnB1dCgndXNlci1uYW1lLWZvbnQtc2l6ZScpIHVzZXJOYW1lRm9udFNpemU7XHJcblx0QElucHV0KCduYXZiYXItYmctY29sb3InKSBuYXZiYXJCZ0NvbG9yID0gJ2JnY29sb3InO1xyXG5cdEBJbnB1dCgpIHN1Yk1lbnVMaXN0ID0gW107XHJcblx0QElucHV0KCduYXZiYXItY3VzdG9tLWNsYXNzJykgbmF2YmFyQ3VzdG9tQ2xhc3M7XHJcblx0QElucHV0KCdzdWJtZW51LWN1c3RvbS1jbGFzcycpIHN1Ym1lbnVDdXN0b21DbGFzcztcclxuXHRASW5wdXQoJ2xvZ28tY3VzdG9tLWNsYXNzJykgbG9nb0N1c3RvbUNsYXNzID0gJ2ltZy13aWR0aCc7XHJcblx0QElucHV0KCduYW1lLWN1c3RvbS1jbGFzcycpIG5hbWVDdXN0b21DbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnaGlkZS1iZWxsLWljb24nKSBoaWRlQmVsbEljb24gPSB0cnVlO1xyXG5cdEBJbnB1dCgnaGlkZS11c2VyLWRldGFpbCcpIGhpZGVVc2VyRGV0YWlsID0gdHJ1ZTtcclxuXHRASW5wdXQoJ2VuYWJsZS10cmFuc2xhdGUnKSBlbmFibGVUcmFuc2xhdGUgPSB0cnVlO1xyXG5cdEBJbnB1dCgnbGFuZ3VhZ2UnKSBsYW5ndWFnZSA9ICdsYW5ndWFnZV9CdG4nO1xyXG5cdEBJbnB1dCgnc2xpZGVyLXRoZW1lJykgc2xpZGVyVGhlbWUgPSAncHJpbWFyeSc7XHJcblx0QElucHV0KCdzbGlkZXItaWQnKSBzbGlkZXJJZCA9ICd0cmFuc2xhdGVCdXR0b24nO1xyXG5cdEBJbnB1dCgndG9nZ2xlLWxhYmVsLXBvc2l0aW9uJykgdG9nZ2xlTGFiZWxQb3NpdGlvbiA9ICdiZWZvcmUnO1xyXG5cdEBJbnB1dCgndHJhbnNsYXRvci12YWx1ZScpIHRyYW5zbGF0b3JWYWx1ZSA9IHRydWU7XHJcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgbGFuZ3VhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0c2VsZWN0ZWRJdGVtOiBhbnk7XHJcblx0QElucHV0KCkgZGF0YSA9IHtcclxuXHRcdGxvZ286ICdhc3NldHMvaW1hZ2VzL1N1a3VfTG9nb193aGl0ZS5wbmcnLFxyXG5cdFx0VXNlcm5hbWU6ICdOYXZiYXInLFxyXG5cdFx0Y29tcGFueU5hbWU6ICdNaWNyb3NvZnQnLFxyXG5cdFx0YmVsbEljb246ICcuLi8uLi8uLi9hc3NldHMvaW1nL2FsYXJtLWljb24uc3ZnJyxcclxuXHRcdGJlbGxJY29uSWQ6ICdub3RpZmljYXRpb25JY29uJyxcclxuXHRcdG5vdGlmaWNhdGlvbkNvdW50OiAyLFxyXG5cdFx0bm90aWZpY2F0aW9uQ291bnRJZDogJ25vdGlmaWNhdGlvbkNvdW50JyxcclxuXHRcdHN1Ym1lbnU6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdCdXknLFxyXG5cdFx0XHRcdHN1Yk1lbnU6IHRydWUsXHJcblx0XHRcdFx0dmlzaWJsZTogZmFsc2UsXHJcblx0XHRcdFx0aWQ6ICdjb2xsYXBzZU9uZScsXHJcblx0XHRcdFx0c3ViTWVudURhdGE6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ0xpc3RpbmdzICYgQmlkcycsXHJcblx0XHRcdFx0XHRcdHBhdGg6ICdwYXRoT25lJyxcclxuXHRcdFx0XHRcdFx0aWQ6IDFcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICdOZWdvdGlhdGlvbnMnLFxyXG5cdFx0XHRcdFx0XHRwYXRoOiAncGF0aFR3bycsXHJcblx0XHRcdFx0XHRcdGlkOiAyXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAnUHVyY2hhc2VPcmRlcnMnLFxyXG5cdFx0XHRcdFx0XHRwYXRoOiAncGF0aFRocmVlJyxcclxuXHRcdFx0XHRcdFx0aWQ6IDNcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICdUcmFuc2FjdGlvbnMnLFxyXG5cdFx0XHRcdFx0XHRwYXRoOiAncGF0aEZvdXInLFxyXG5cdFx0XHRcdFx0XHRpZDogNFxyXG5cdFx0XHRcdFx0fV1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdTZWxsJyxcclxuXHRcdFx0XHRzdWJNZW51OiB0cnVlLFxyXG5cdFx0XHRcdHZpc2libGU6IGZhbHNlLFxyXG5cdFx0XHRcdGlkOiAnY29sbGFwc2VPbmUnLFxyXG5cdFx0XHRcdHN1Yk1lbnVEYXRhOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICdCdXktU2VsbC1QcmljZScsXHJcblx0XHRcdFx0XHRcdHBhdGg6ICdwYXRoT25lJyxcclxuXHRcdFx0XHRcdFx0aWQ6IDFcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICdCdXlQcm9kdWN0cycsXHJcblx0XHRcdFx0XHRcdHBhdGg6ICdwYXRoVHdvJyxcclxuXHRcdFx0XHRcdFx0aWQ6IDJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICdCdXlQdXJjaGFzZU9yZGVycycsXHJcblx0XHRcdFx0XHRcdHBhdGg6ICdwYXRoVGhyZWUnLFxyXG5cdFx0XHRcdFx0XHRpZDogM1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ0J1eVRyYW5zYWN0aW9ucycsXHJcblx0XHRcdFx0XHRcdHBhdGg6ICdwYXRoRm91cicsXHJcblx0XHRcdFx0XHRcdGlkOiA0XHJcblx0XHRcdFx0XHR9XVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogJ1RyYW5zYWN0aW9uJyxcclxuXHRcdFx0XHRzdWJNZW51OiB0cnVlLFxyXG5cdFx0XHRcdHZpc2libGU6IHRydWUsXHJcblx0XHRcdFx0c3ViTWVudURhdGE6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ0xpc3RpbmdzICYgQmlkcycsXHJcblx0XHRcdFx0XHRcdHBhdGg6ICdwYXRoT25lJyxcclxuXHRcdFx0XHRcdFx0aWQ6IDFcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICdOZWdvdGlhdGlvbnMnLFxyXG5cdFx0XHRcdFx0XHRwYXRoOiAncGF0aFR3bycsXHJcblx0XHRcdFx0XHRcdGlkOiAyXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAnUHVyY2hhc2VPcmRlcnMnLFxyXG5cdFx0XHRcdFx0XHRwYXRoOiAncGF0aFRocmVlJyxcclxuXHRcdFx0XHRcdFx0aWQ6IDNcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICdUcmFuc2FjdGlvbnMnLFxyXG5cdFx0XHRcdFx0XHRwYXRoOiAncGF0aEZvdXInLFxyXG5cdFx0XHRcdFx0XHRpZDogNFxyXG5cdFx0XHRcdFx0fV1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdsb2dvdXRfTGJsJyxcclxuXHRcdFx0XHRzdWJNZW51OiBmYWxzZSxcclxuXHRcdFx0XHRpZDogJ0xvZ291dCdcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH07XHJcblx0c2VsZWN0ZWQxOiBhbnk7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0fVxyXG5cclxuXHR0b2dnbGVOYXZiYXIoKSB7XHJcblx0XHR0aGlzLm5hdmJhck9wZW4gPSAhdGhpcy5uYXZiYXJPcGVuO1xyXG5cdH1cclxuXHJcblx0aXNBY3RpdmVGdW4obmFtZXMpIHtcclxuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkID09PSBuYW1lcztcclxuXHR9XHJcblxyXG5cdHRvZ2dsZShuYW1lcykge1xyXG5cdFx0Y29uc29sZS5sb2coJ25hbWVzJywgbmFtZXMpO1xyXG5cdFx0dGhpcy5zZWxlY3RlZCA9ICcnO1xyXG5cdFx0dGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcblx0XHR0aGlzLnNlbGVjdGVkID0gbmFtZXM7XHJcblx0XHR0aGlzLmRhdGEuc3VibWVudS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cdFx0XHRpZiAobmFtZXMgPT0gZWxlbWVudCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudCk7XHJcblx0XHRcdFx0dGhpcy5hY3Rpb24uZW1pdChlbGVtZW50KTtcclxuXHRcdFx0XHRlbGVtZW50LnZpc2libGUgPSB0cnVlO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRlbGVtZW50LnZpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmNvbGxwb3NlID0gbmFtZXMuaWQ7XHJcblx0XHRjb25zb2xlLmxvZygnZWxlbWVudDEnLCB0aGlzLmNvbGxwb3NlKTtcclxuXHR9XHJcblxyXG5cdHNlbGVjdChuYW1lKSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkMSA9IG5hbWU7XHJcblx0fVxyXG5cclxuXHRpc0FjdGl2ZTIobmFtZSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWQxID09PSBuYW1lO1xyXG5cdH1cclxuXHJcbn1cclxuIl19