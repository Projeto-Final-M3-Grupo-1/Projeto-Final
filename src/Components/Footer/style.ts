import styled from "styled-components";

export const StyledFooter = styled.footer`
    bottom: 0%;
    height: 9rem;
    background-color: var(--rose-600);
    display: flex;
    /* padding: 4px; */
    flex-direction: row;
    color: var(--white);
    justify-content: space-around;
    align-items: center;

    div {
        font-size: 12px;
        display: flex;
        flex-direction: column;
        padding: 4px;

        h5 {
            font-size: 1rem;
            font-weight: 500;
            padding: 4px;
        }

        ul {
            display: flex;
            flex-direction: column;
            padding: 8px;
            gap: 8px;
            font-weight: 200;
        }
        li {
            display: flex;
            flex-direction: row;
            gap: 2px;
        }
    }

    .scrolltop {
        position: absolute;
        width: 50px;
        height: 50px;
        left: 85%;
        bottom: 2%;
        cursor: pointer;

        @media (max-width: 720px) {
            position: absolute;
            width: 50px;
            height: 50px;
            left: 45%;
            bottom: 150px;
            color: var(--rose-700);
        }
    }

    button {
        font-size: 8px;
        width: 8rem;
        height: 2rem;
        border: 1px solid var(--white);
        border-radius: 2px;
        color: var(--slate-900);
    }
`;

export const StyledButtonRedes = styled.a`
    color: var(--footer-socials-color);
    background-color: transparent;
    text-decoration: none;
`
