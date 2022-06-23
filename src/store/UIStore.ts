import { DefaultTheme } from 'styled-components';
import { makeAutoObservable } from 'mobx';
import { darkTheme, lightTheme } from '../theme';
import { ThemeEnum } from '../theme/styled';

export class UIStore {
    theme: DefaultTheme = localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme;

    constructor() {
        makeAutoObservable(this);
    }

    get isLightTheme(): boolean {
        return this.theme.type === ThemeEnum.light;
    }

    toggleTheme(): void {
        this.theme = this.isLightTheme ? darkTheme : lightTheme;
        localStorage.setItem("theme", this.theme.type.valueOf());
    }
}
