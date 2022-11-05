import styled from "styled-components";

export const StyledCard = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 4px solid var(--rose-600);
    border-radius: 4px;
    padding: 1rem;
    gap: 2rem;
    width: 100%;

    img{
        width: 50%;
        height: 100%;
    }

    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;

        /* max-width: 60%; */

        img{
            max-height: 350px;
            width: 100%; 

        }
    }
`

export const StyledRightCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    
    gap: 1rem;

    button{
        width: 90%;
        cursor: pointer;
    }
`

export const StyledTextCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    

    h2{
        font-size: 22px;
        color: var(--rose-600);
        font-weight: var(--menu-item-text-weight);
    }

    p{
        font-size: 14px;
        line-height: 1.5;
    }
`

export const StyledButtonsAdmin = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    button{
        width: 45%;
    }

    @media (max-width: 850px) {
        flex-direction: column;
        gap: 1rem;

        button{
            width: 100%;
        } 
    }
`