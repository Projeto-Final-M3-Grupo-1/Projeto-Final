
import styled from "styled-components";
export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    height: 80px;
    background-color: --var(white);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    align-items: center;
    justify-content: space-around;
    /* padding-left: 119px; */

    h2 {
        font-size: 2rem;
        font-family: "Inter";
        color: var(--rose-600);
        font-weight: 900;
        align-items: center;
        text-transform: uppercase;
    }

    nav {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: 80px;
        align-items: center;
        font-family: "Inter";
        gap: 48px;
        text-decoration: none;
        list-style: none;
        /* padding-right: 314px; */

        .links--menu_header {
            text-decoration-line: none;
            font-size: 1rem;
            color: var(--slate-700);
            font-weight: 600;
        }
    }
    @media (max-width: 700px) {
        nav {
            display: none;
            width: 0%;
        }
    }

    button {
        background-color: var(--rose-600);
        color: var(--white);
        width: 99px;
        height: 40px;
        font-size: 1rem;
        border: none;
        border-radius: 8px;

        :hover {
            transition: 0.2s;
            background-color: var(--rose-700);
            border: none;
            height: 40px;
            border-radius: 8px;
            align-items: center;
        }
    }
`;

