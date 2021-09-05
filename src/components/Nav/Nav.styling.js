import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
    position: fixed;
    left: ${({ navbar }) => (navbar ? '0' : '-100%')};
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    z-index: 10;  
    transition: .3s ease-out;
     @media screen and (min-width: 600px){
        left: 0;
        height: 8rem;
    }
`;

export const NavUL = styled.ul`
    height: 100%;
    width: 100%;
    max-width: 110rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20vh 0;   
    @media screen and (min-width: 600px){
        padding: 0 3rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const NavLI = styled(Link)`
    color: #f1f1f1;
    letter-spacing: clamp(.1rem, 3vw, .3rem);
    cursor: pointer;
    font-size: 1.4rem;
    transition: .25s ease-out;
    &:hover {
        color: red;
    }
    &.active{
        color: aqua;
    }
`;

export const NavIcon = styled(Link)`
    position: absolute;
    top: 0rem;
    left: 5rem;
    font-size: 2rem;
    margin: 3rem 0;    
    display: flex;
    justify-content: flex-end;   
    color: #f1f1f1;
    z-index: 11;

    @media screen and (min-width: 600px) {
        display: none;
    }
`

