import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ContainerCountDown = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 600;
    color: ${theme.colors.title};
`;

export const ContentNumber = styled.div`
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${theme.colors.white};
    box-shadow: 0 0 60px rgba(0,0,0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

`;

export const Number = styled.span`
    flex: 1;
    &:first-child {
        border-right: 1px solid #f8f1f3;
    }
    &:last-child {
        border-left: 1px solid #f8f1f3;
    }
`;

export const Points = styled.span`
    font-size: 6.25rem;
    margin: 0 0.5rem;
`;

export const Button = styled.button`
    width: 100%;
    height: 5rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border:0;
    border-radius: 5px;
    background: ${theme.colors.blue};
    color: ${theme.colors.white};
    font-size: 1.25rem;
    font-weight: 600;
    transition: all 0.2s;

    &:not(:disabled):hover {
        background: ${theme.colors.blue_dark}
    }

    &:disabled {
        background: ${theme.colors.white};
        color: ${theme.colors.title};
        cursor: not-allowed;
        border-bottom: 4px solid ${theme.colors.green};
    }

`;

export const ButtonAbandon = styled.button`
    width: 100%;
    height: 5rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border:0;
    border-radius: 5px;
    background: ${theme.colors.white};
    color: ${theme.colors.title};
    font-size: 1.25rem;
    font-weight: 600;
    transition: all 0.2s;
    
    &:not(:disabled):hover {
        background: ${theme.colors.red};
        color: ${theme.colors.white}
    }

`;

export const Icon = styled.img`
    margin-left: 0.5rem;
`;