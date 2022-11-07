import styled from "styled-components";

export const StyledModalHome = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-content: center;
    justify-content: center;
    align-items: center;

    width: 90%;
    height: 460px;
    background-color: var(--white);

    border-radius: 8px;

    overflow: hidden;
    overflow-y: scroll;

    @media (min-width: 768px) {
        display: flex;

        height: 15rem;
        max-width: 750px;

        margin: 0 auto;
        overflow-y: hidden;
    }
`;