
import styled from "styled-components";

export const StyledAllProjectsBox = styled.div`
    width: 90%;
    min-height: 600px;

    margin: 0 auto;
    margin-top: 1rem;
    position: relative;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: var(--main-subtitle-text-size);
        font-weight: var(--main-title-text-weight);
        line-height: 1.8rem;

        color: var(--main-title-text-color);
    }
    @media (min-width: 700px) {
        h2 {
            left: 47%;
            top: 0%;
        }
    }
    h3 {
        font-size: var(--main-subtitle-text-size);
        font-weight: var(--main-title-text-weight);
        line-height: 1.8rem;

        color: var(--main-title-text-color);
    }
    @media (min-width: 700px) {
        h3 {
            position: absolute;
            left: 47%;
            top: 0%;
        }
    }

    ul {
        width: 100%;
        max-width: 700px;
        max-height: 400px;
        margin-top: 1rem;
        margin-bottom: 1rem;

        display: flex;
        gap: 20px;

        padding: 1rem;

        overflow: hidden;
        overflow-x: scroll;
    }
    @media (min-width: 700px) {
        ul {
            min-width: 1200px;
            height: 600px;
        }
    }
    ul::-webkit-scrollbar {
        background-color: var(--rose-200);
        border-radius: 20px;
        width: 10px;
        height: 5px;
    }
    ul::-webkit-scrollbar-thumb {
        background-color: var(--main-title-text-color);
        border-radius: 20px;
    }

    li {
        width: 90%;
        max-width: 400px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    @media (min-width: 700px) {
        li {
            flex-direction: row;

            min-width: 700px;
            height: 305px;
            position: relative;
        }
    }
    li > img {
        width: 200px;
        height: 200px;

        border-radius: 8px;
    }
    @media (min-width: 700px) {
        li > img {
            width: 300px;
            height: 300px;
        }
    }
    li > button {
        width: 90%;
    }
    @media (min-width: 700px) {
        li > button {
            max-width: 380px;
            position: absolute;
            right: 0%;
            bottom: 0%;
        }
    }
    li > p {
        line-height: 1.1;
        max-width: 80ch;
    }
    @media (max-width: 700px) {
        li > p {
            max-width: 18ch;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
`;
