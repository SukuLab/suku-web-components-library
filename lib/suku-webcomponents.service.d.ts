export interface Theme {
    name: string;
    properties: any;
}
export declare const suku: Theme;
export declare const dark: Theme;
export declare const light: Theme;
export declare class SukuWebcomponentsService {
    private active;
    constructor();
    setLightTheme(): void;
    setDarkTheme(): void;
    setSukuTheme(): void;
    private setActiveTheme;
}
