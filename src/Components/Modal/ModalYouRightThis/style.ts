import styled from "styled-components";

export const StyledYouRight = styled.div`
    width: 90%;
    max-width: 350px;
    height: 100px;

    border-top: solid 5px var(--rose-700);
    border-bottom: solid 5px var(--rose-700);
    border-radius: 6px;
    padding: 11px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;

    position: relative;

    background-color: white;
    h2 {
        font-weight: 600;
    }
    div {
        width: 95%;
        height: 60px;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
`;
