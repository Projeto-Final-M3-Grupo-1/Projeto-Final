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
