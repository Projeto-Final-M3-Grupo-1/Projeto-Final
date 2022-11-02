import styled from "styled-components";

export const StyledDiv = styled.div`
    width: 95%;
    margin: 0 auto;
    height: 300px;
    text-align: center;
    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        box-sizing: border-box;
        height: 15.8rem;
        /* padding: 100px; */
    }
`;
export const StyledTitle = styled.h3`
    font-size: var(--main-subtitle-text-size);
    font-weight: var(--main-title-text-weight);
    color: var(--main-title-text-color);
    line-height: 1.8rem;
`;
export const StyledParagraph = styled.p`
    margin-top: 1rem;
    height: 209px;
    max-width: 1200px;
    font-style: var(--main-subtitle-text-weight);
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
    @media (min-width: 768px) {
        overflow: none;
        overflow-y: hidden;
    }
`;
