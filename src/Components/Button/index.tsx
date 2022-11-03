
import styled from "styled-components";

export const StyledNewProjectButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;
    position: absolute;
    margin-left: 45%;   
    flex-wrap: wrap;

    width: 9.3rem;
    height: 9.37rem;

    background: var(--button-background-color);
    color: var(--button-text-color);
    font-size: var(--button-text-size);
    font-weight: var(--button-text-weight);
    border-radius: 50%;
    border: 8px;
    border: 8px solid var(--white);
    cursor: pointer;

    &:hover {
        background: var(--button-background-hover-color);
        transition: var(--button-hover-transition);
    }

    @media(max-width: 400px){
        margin-left: 40%; 
    }

`;

export const StyledLoginButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 28px;
    gap: 10px;

    width: 99px;
    height: 40px;

    background: var(--button-background-color);
    color: var(--button-text-color);
    font-size: var(--button-text-size);
    font-weight: var(--button-text-weight);
    border-radius: 8px;
    border: none;
    cursor: pointer;

    &:hover {
        background: var(--button-background-hover-color);
        transition: var(--button-hover-transition);
    }
`;

export const StyledButtonCta = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
    gap: 10px;

    width: 50%;
    height: 40px;

    background: var(--button-background-color);
    color: var(--button-text-color);
    font-size: var(--button-text-size);
    font-weight: var(--button-text-weight);
    border-radius: 8px;
    border: none;
    cursor: pointer;

    &:hover {
        background: var(--button-background-hover-color);
        transition: var(--button-hover-transition);
    }

    @media(max-width: 600px){
        width: 100%;
    }
`;

export const StyledButtonCloseModal = styled.button`
    position: absolute;
    right: 0%;
    top: 0%;
    display: flex;
    background-color: transparent;
    padding: 0 2px;
    border: none;

    width: 25px;
    height: 25px;

    color: var(--rose-700);

    cursor: pointer;

    svg {
        width: 25px;
        height: 25px;
    }
`

