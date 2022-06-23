import styled, { css } from 'styled-components';
import mq from '../../../../utils/mediaqueries';

export const Wrapper = styled.div`
    margin-top: 50px;
    margin-bottom: 100px;
    display: grid;
    gap: 30px;
    grid-auto-rows: 1fr;
    
    ${mq.greaterSm} {
        grid-template-columns: 1fr 1fr;
    }
`;

export const Book = styled.div`
    background-color: ${({ theme }) => theme.colors.box};
    border-radius: 10px;
    padding: 20px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 20px;
    
    ${mq.lowerSm} {
        padding: 15px 10px;
    }
`;

export const Cover = styled.img`
    max-width: 165px;
    grid-row: 1 / 5;
    object-fit: cover;
    height: 100%;
    
    ${mq.lowerXs} {
        max-width: 120px;
        grid-row: 1 / 5;
    }
`;

export const Title = styled.h3`
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 10px;
    margin-bottom: 0;
`;

export const Author = styled.p`
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
`;

export const Price = styled.h2`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    margin: 0;
    align-self: end;

    ${mq.lowerXs} {
        margin-bottom: 10px;
    }
`;

export const bookCss = css`
    height: fit-content;
    grid-row: 4 / 5;
    align-self: end;
`;
