import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize'

export default createGlobalStyle`
    ${normalize}
    
    body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        background-color: ${({ theme }) => theme.colors.bg};
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    button {
        padding: 0;
        border: none;
        background-color: transparent;
        font: inherit;
        line-height: inherit;
        appearance: none;
    }

    input::-ms-clear {
        display: none;
    }
`;
