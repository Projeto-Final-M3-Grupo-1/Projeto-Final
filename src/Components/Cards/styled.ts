import styled from "styled-components";

export const StyledDiv = styled.div`
display: flex;
align-items: center;

gap: 20px;

min-width: 300px;
height: 300px;

overflow: hidden;
overflow-x: scroll;



@media (min-width: 768px){
    box-sizing: border-box;
    overflow: hidden;
    max-width: 1200px;
    height: 400px;
    margin: 0 auto;
    padding: 100px;
}

`

export const StyledCard = styled.div`
   
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;

    min-width: 280px;
    width: 95%;
    height: 216px;
    border-radius: 4px;
    
    margin: 0 0 0 5px;
    
    gap: 12px;
    
    border: 1px solid var(--card-border-color);

    @media (min-width: 768px){
        max-height: 450px;
        max-width: 400px;
        border-radius: 8px;
    }
    
    h2{
        font-size: var(--card-text-size);
        color: var(--card-title-text-color);
        font-weight: var(--card-title-text-weight);
    }

    h3{
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;

        font-size: var(--card-text2-size);
        font-weight: var(--card-subtitle-text-weight);
        text-align: center;
        
        width: 90%;
    }

    p{
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        text-align: justify;

        width: 90%;
        font-size: var(--card-text3-size);
    }
    
    > button{
        width: 90%;
        height: 25px;
        font-size: 14px
    }
    `

