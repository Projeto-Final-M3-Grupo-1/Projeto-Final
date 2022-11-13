import styled from "styled-components";

export const StyledInput = styled.div`
    width: 95%;
    height: 60px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    label {
        font-size: 14px;
        font-weight: 500;
    }
    input {
        width: 95%;
        height: 25px;

        border: solid 1px var(--rose-700);
        border-radius: 4px;
        padding: 0px 5px;

        outline: var(--rose-900);
    }
`;
export const StyledPasswordDiv = styled.div`
    position: relative;
    width: 100%;
    height: 25px;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
`;

export const StyledShowBtn = styled.button`
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
 
    border: none;
    border-radius: 4px;
 
    padding: 4px;
 
    background-color: var(--rose-600);
    color: var(--white);
 
    position: absolute;
    right: 2%;
    top: 9%;
 
    cursor: pointer;
`;





