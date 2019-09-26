import { EventEmitter } from '@angular/core';
export declare class SukuNavBarComponent {
    collpose: any;
    selected: any;
    navbarOpen: boolean;
    panelOpenState: boolean;
    isActive: boolean;
    userIcon: string;
    UserName: string;
    userNameColor: any;
    userNameFontWeight: any;
    userNameFontSize: any;
    navbarBgColor: string;
    subMenuList: any[];
    navbarCustomClass: any;
    submenuCustomClass: any;
    logoCustomClass: string;
    nameCustomClass: string;
    hideBellIcon: boolean;
    hideUserDetail: boolean;
    enableTranslate: boolean;
    language: string;
    sliderTheme: string;
    sliderId: string;
    translatorValue: boolean;
    action: EventEmitter<{}>;
    languageChange: EventEmitter<{}>;
    selectedItem: any;
    data: {
        logo: string;
        Username: string;
        companyName: string;
        bellIcon: string;
        bellIconId: string;
        notificationCount: number;
        notificationCountId: string;
        submenu: ({
            name: string;
            subMenu: boolean;
            visible: boolean;
            id: string;
            subMenuData: {
                name: string;
                path: string;
                id: number;
            }[];
        } | {
            name: string;
            subMenu: boolean;
            visible: boolean;
            subMenuData: {
                name: string;
                path: string;
                id: number;
            }[];
            id?: undefined;
        } | {
            name: string;
            subMenu: boolean;
            id: string;
            visible?: undefined;
            subMenuData?: undefined;
        })[];
    };
    selected1: any;
    constructor();
    toggleNavbar(): void;
    isActiveFun(names: any): boolean;
    toggle(names: any): void;
    select(name: any): void;
    isActive2(name: any): boolean;
}
