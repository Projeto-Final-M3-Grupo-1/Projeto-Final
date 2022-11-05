import styled from "styled-components";

export const StyledCard = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 4px solid var(--rose-600);
    border-radius: 4px;

    img{
        width: 50%;
        height: 100%;
    }
`

export const StyledRightCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

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