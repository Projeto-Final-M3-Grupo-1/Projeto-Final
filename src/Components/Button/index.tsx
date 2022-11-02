
import styled from "styled-components";

export const StyledNewProjectButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: center;
    padding: 0px;
    gap: 10px;
    position: absolute;
    margin-top: 19rem;

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

    @media(max-width: 1080px){
        margin-top: 22rem;
    }

    @media(max-width: 900px){
        margin-top: 24rem;
    }

    @media(max-width: 750px){
        margin-top: 25rem;
    }

    @media(max-width: 650px){
        margin-top: 15rem;
        width: 6rem;
        height: 6rem;
        font-size: 12px;
        border: 6px;
        border: 6px solid var(--white);
    }

    @media(max-width: 450px){
        margin-top: 17rem;
    }

    @media(max-width: 350px){
        margin-top: 20rem;
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
    padding: 0px;
    gap: 10px;

    width: 478px;
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

