import 'styled-components';
import { ThemeT, ThemeEnum } from './theme/styled';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeT {
        type: ThemeEnum;
    }
}
