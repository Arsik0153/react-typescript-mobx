import styled, { CSSProp } from 'styled-components';
import { rgba } from 'polished';

type Props = {
    css?: CSSProp;
}

export const Button = styled.button<Props>`
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.accent};
    padding: 12px 20px;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.colors.accent};
    transition: 0.2s ease-out;

    &:hover {
        background-color: #fff;
        color: #000;
    }

    &:focus {
        box-shadow: 0 0 0 3px ${({ theme }) => rgba(theme.colors.accent, 0.5)}};
    }

    ${({ css }) => css}
`;
