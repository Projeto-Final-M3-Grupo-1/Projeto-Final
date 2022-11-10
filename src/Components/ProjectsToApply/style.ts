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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

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
        padding: 1.5rem;
    }
    ul > li > h2 {
        font-size: 20px;
        font-weight: 600;
        color: var(--rose-600);
    }
    ul > li > p {
        width: 90%;
        margin-top: 1rem;
        max-height: 209px;
        max-width: 1200px;
        
        font-style: var(--main-subtitle-text-weight);
        line-height: 2;
        font-weight: 600;

        color: var(--main-subtitle-text-color);

        overflow: hidden;
        overflow-y: scroll;
        ::-webkit-scrollbar {
            background-color: var(--rose-200);
            border-radius: 20px;
            width: 5px; 
        }
        ::-webkit-scrollbar-thumb {
            background-color: var(--main-title-text-color);
            border-radius: 20px;
        }
    }
    @media (max-width: 740px) {
        ul > li > div > button {
            font-size: 10px;
        }
    }
`;
