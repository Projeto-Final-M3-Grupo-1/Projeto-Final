import styled from "styled-components";
import { GlobalStyle } from "../../Styles/Global"

export const MainStyle = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const StyledTextsMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
    padding-top: 2rem;
    flex-wrap: wrap;

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

        @media(max-width: 1200px){
            font-size: 1.3rem;
        }
    }

    @media(max-width: 650px){
        h1, h2{
            font-size: 2rem;
        }
        p{
            font-size: 1rem;
            width: 80%;
        }
    }
`

export const StyledImagesMain = styled.div`
    display: flex;
    flex: row;
    max-width: 100%;
    overflow-x: hidden;
    height: 50%;
    position: relative;

    img{
        height: 80%;
        width: 100%;
        align-self: flex-end;
        max-height: 254px;
    }

    @media(max-width: 877px){
        margin-top: 2rem;

        button{
            width: 7.5rem;
        height: 7.5rem;
        }
    }

    @media(max-width: 650px){

        img{
            margin-bottom: 1rem;
        }

        button{
            width: 6rem;
            height: 6rem;
            font-size: 10px; 
        }
    }   

    
`