import styled from "styled-components";

export const StyledAllProjectsBox = styled.div`
    width: 90%;
    min-height: 600px;

    margin: 0 auto;
    margin-top: 1rem;

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

        display: flex;
        gap: 20px;

        overflow: hidden;
        overflow-x: scroll;
    }
    @media (min-width: 700px) {
        ul {
            min-width: 1200px;
            height: 600px;
        }
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
            max-width: 300px;
            position: absolute;
            right: 0%;
            bottom: 0%;
        }
    }
    li > p {
        max-width: 18ch;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    @media (min-width: 700px) {
        li > p {
            max-width: none;

            overflow: none;
            text-overflow: none;
        }
    }
    /*
    ul {
        max-height: 500px;

        margin-top: 100px;

        overflow: hidden;
        overflow-y: scroll;

        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
    }
    li {
        position: relative;

        width: 90%;
        max-width: 700px;
        min-height: 200px;
    }
    @media (max-width: ) {
        
    }
    img {
        width: 200px;
        height: 200px;
    }
    li > h2 {
        position: absolute;
        left: 30%;
        top: 0%;
    }
    li > p {
        position: absolute;
        left: 30%;
        top: 20%;
        text-align: center;
    }
    li > button {
        position: absolute;
        right: 0%;
        bottom: 0%;
    } */
`;