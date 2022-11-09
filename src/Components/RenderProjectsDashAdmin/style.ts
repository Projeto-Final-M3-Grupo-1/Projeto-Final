import styled from "styled-components";

export const StyledDiv = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
margin: 0 auto;
/* background-color: red; */

ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin-top: 30px; 

    width: 60%;

    gap: 10px;

    
}

li{
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid red;
    width: 90%;

    height: 100px;

    > button{
        background-color: var(--blue-700);
    }
}
`