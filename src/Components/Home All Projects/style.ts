import styled from "styled-components";

export const StyledAllProjectsBox = styled.div`
    width: 90%;
    min-height: 550px;

    margin: 0 auto;
    margin-top: 1rem;
    position: relative;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    h2 {
        font-size: 2rem;
        font-weight: var(--main-title-text-weight);
        line-height: 1.8rem;
        color: var(--main-title-text-color);
        align-self: center;
        text-align: center;
    }

    h3 {
        font-size: var(--main-subtitle-text-size);
        /* font-weight: var(--main-title-text-weight); */
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
        width: 90%;
        max-width: 700px;
        max-height: 320px;
        margin-top: 1rem;
        margin-bottom: 1rem;
        justify-content: center;

        display: flex;
        gap: 20px;

        padding: 1rem;

        overflow: hidden;
        overflow-x: scroll;
    }
    @media (min-width: 700px) {
        ul {
            width: 90%;
            max-width: 1200px;
            height: 600px;
            overflow: hidden;
        }
    }
    ul::-webkit-scrollbar {
        background-color: var(--rose-200);
        border-radius: 20px;
        width: 10px;
        height: 5px;
    }
    ul::-webkit-scrollbar-thumb {
        background-color: var(--rose-600);
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
    li > a {
        width: 52%;

        padding: 0 0.5rem;

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

    }
    @media (min-width: 700px) {
        li > a {
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
