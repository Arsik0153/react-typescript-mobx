export enum ThemeEnum  {
    light = "light",
    dark = "dark"
}

export interface ThemeT {
    colors: {
        text: string;
        bg: string;
        accent: string;
        box: string;
    },
}
