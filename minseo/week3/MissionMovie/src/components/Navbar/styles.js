import styled from "styled-components";
export const NavContainer = styled.nav`
    display: flex;
    width: 100%;
`

export const LogoContainer = styled.div`
    padding: 10px;
    cursor: pointer;
    
`

export const Button = styled.button`
    padding: 10px;
    margin: 5px;
    background-color: #1e1e1e;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;


    &:hover {
        background-color: #3b0070;
        cursor: pointer;

    }
`
export const ButtonContainer = styled.div`
    margin-left: auto;
    display: flex;
`