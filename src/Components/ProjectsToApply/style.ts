import styled from "styled-components";

export const StyledBoxProjectsToApply = styled.div`
    width: 60%;
    max-width: 1200px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    padding: 20px 0px;

    @media (max-width: 740px) {
        width: 100%;
    }

    h2 {
        font-size: 22px;
        color: var(--rose-600);
        font-weight: var(--menu-item-text-weight);
    }
    ul {
        width: 95%;
        max-width: 800px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0px 20px;
        gap: 20px;

        text-align: center;
    }
    ul > li > img {
        max-width: 95%;
        min-height: 300px;

        border-radius: 2rem;
    }
    ul > li {
        width: 95%;
        min-height: 300px;

        padding: 20px 0px;

        border: 5px solid var(--rose-600);
        border-radius: 8px;
    }
    ul > li > div {
        height: 60px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    ul > li > div > button {
        width: 40%;
    }
    @media (max-width: 740px) {
        ul > li > div > button {
            font-size: 10px;
        }
    }
`;
