import styled from "styled-components";
import { GlobalStyle } from "../../Styles/Global"

export const MainStyle = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`

export const StyledTextsMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    height: 50%;

    h1{
        color: var(--main-title-text-color);
        font-size: var(--main-title-text-size);
    }

    h2{
        color: var(--main-title-text-color-secondary);
        font-weight: var(--main-title-text-secondary-weight);
        font-size: var(--main-title-text-size);


        b{
            font-weight: var(--main-title-text-weight);
        }
    }

    p{
        color: var(--main-subtitle-text-color);
        font-weight: var(--main-subtitle-text-weight);
        font-size: var(--main-subtitle-text-size);
        max-width: 60%;
        text-align: center;
        margin-bottom: 4rem;
    }
`

export const StyledImagesMain = styled.div`
    display: flex;
    flex: row;
    max-width: 100%;
    overflow-x: hidden;
    height: 50%;

    img{
        max-width: calc(100%/3);
    }
`