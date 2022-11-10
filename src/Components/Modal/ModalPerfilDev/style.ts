import { style } from "@mui/system";
import styled from "styled-components";

export const StyledPerfilDev = styled.div`
    width: 90%;
    max-width: 500px;
    height: 500px;
    background-color: var(--white);
    div {
        min-width: 90%;
    }
    button {
        width: 100%;
    }
`;

export const StyledListTechs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 1rem;
    width: 80%;

    ul{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        overflow-y: scroll;
        width: 100%;
        max-height: 300px;

        ::-webkit-scrollbar {
          background-color: var(--rose-200);
          border-radius: 20px;
          width: 5px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: var(--main-title-text-color);
          border-radius: 20px;
        }

        li{
            margin-right: 5px;
            border: 1px solid var(--rose-600);
            border-radius: 4px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 0.5rem;
        }
    }
`