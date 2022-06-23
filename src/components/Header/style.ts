import styled, { css } from 'styled-components';
import mq, { hidden } from '../../utils/mediaqueries';

export const Wrapper = styled.nav`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    
    ${mq.lowerXs} {
        margin-top: 20px;
    }
`

export const Logo = styled.span`
    color: ${({ theme }) => theme.colors.text};
    font-size: 24px;
    font-weight: 600;
    display: flex;
    align-items: center;
    
    ${mq.lowerXs} {
        font-size: 20px;
    }
`;

export const SwitcherWrapper = styled.button`
    position: relative;
    margin-left: 7px;
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

export const LoveWords = styled.span`
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
    opacity: .4;
    margin-left: 25px;
    
    ${hidden.lowerXs}
`;

export const cartIconCss = css`
    fill: ${({ theme }) => theme.colors.text};
    width: 30px;
    height: 30px;
`;

export const switcherIconCss = css`
    fill: ${({ theme }) => theme.colors.accent};
`;
