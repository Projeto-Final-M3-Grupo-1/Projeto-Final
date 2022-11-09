import styled from "styled-components";

export const StyledModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    width: 60%;
    height: 300px;

    position: relative;
    
    background-color: var(--white);

    h3{
        position: relative;
        top: -6%;
        color: var(--rose-700);
        font-size: var(--card-subtitle-text-size);
        font-weight: var(--card-subtitle-text-weight);
    }

    p{
        position: relative;
        top: 0%;
        
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        
        width: 90%;
        height: 132px;
        
        font-size: var(--card-text-size);

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
    }

    div{
        display: flex;
        align-content: center;
        justify-content: space-between;
        align-items: center;
        
        width: 91%;
        
        margin-top: 1rem;
    }

    button :nth-child(1){
        position: relative;
        left: -25%;
        top: 18%;
    }
    button :nth-child(2){
        position: relative;
        top: 5%;
        left: 25%;
    }

`