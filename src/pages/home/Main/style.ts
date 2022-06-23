import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import mq from '../../../utils/mediaqueries';

export const Wrapper = styled.main`
    margin-top: 90px;
    
    ${mq.lowerXs} {
        margin-top: 50px;
    }
`;

export const Heading = styled.h1`
    font-weight: 700;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.text};
    line-height: 0;
    
    ${mq.lowerSm} {
        font-size: 20px;
    }
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mq.lowerXs} {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const InputBox = styled.div`
    background: ${({ theme }) => theme.colors.box};
    border-radius: 10px;
    display: flex;
    align-items: center;
    width: 280px;
    height: 40px;
    
    ${mq.lowerXs} {
        width: 100%;
        margin-top: 15px;
    }
`;

export const Input = styled.input`
    background: ${({ theme }) => theme.colors.box};
    outline: none;
    height: 100%;
    width: 100%;
    justify-self: stretch;
    border: none;
    border-radius: 10px;
    font-size: 14px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.text};
    
    &::placeholder {
        color: ${({ theme }) => rgba(theme.colors.text, 0.6)};
    }
`;

export const magnifierIconCss = css`
    fill: ${({ theme }) => rgba(theme.colors.text, 0.7)};
    height: 23px;
    width: 23px;
    margin: 0 10px 0 13px;
`;
