import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    padding: 7px 13px;
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.bg};
    font-size: 13px;
    font-weight: 600;
    border-radius: 5px;
    transform: translate(-50%);
    left: 50%;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.11);
    white-space: nowrap;
    margin-top: 3px;
    margin-left: -1px;
    cursor: default;
    animation: popUp 0.3s ease;
    
    &:before {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background: ${({ theme }) => theme.colors.text};
        margin-top: -7px;
        transform: rotate(45deg) translate(-50%);
        left: 50%;
    }
`;
