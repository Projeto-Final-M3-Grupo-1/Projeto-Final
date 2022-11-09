import styled from "styled-components";

export const StyledMainPublication = styled.div`
    
`

export const StyledPublications = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px; 
    gap: 1rem;
    padding: 3rem 4rem;

    @media (max-width: 650px){
     padding: 2rem 2rem;    
    }
`

export const StyledHeaderPublications = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    p{
        font-size: 25px;
        color: var(--rose-600);
        font-weight: var(--menu-item-text-weight); 
    }

`

export const StyledListPublications = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center; 
    gap: 2rem;
`
