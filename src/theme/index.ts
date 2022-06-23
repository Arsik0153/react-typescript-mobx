import { DefaultTheme } from 'styled-components';
import { ThemeEnum } from './styled';

export const lightTheme: DefaultTheme = {
    type: ThemeEnum.light,

    colors: {
        text: '#242424',
        bg: '#fff',
        accent: '#3E2BFB',
        box: '#EDECEA',
    },
};

export const darkTheme: DefaultTheme = {
    type: ThemeEnum.dark,

    colors: {
        text: '#fff',
        bg: '#242424',
        accent: '#3E2BFB',
        box: '#484848',
    },
};
