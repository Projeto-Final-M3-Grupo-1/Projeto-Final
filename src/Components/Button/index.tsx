import styled from "styled-components";

export const StyledNewProjectButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 10px;

    width: 149px;
    height: 150px;

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