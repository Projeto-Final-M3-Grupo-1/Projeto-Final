import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        /* Color Styles */
        --rose-900: #881337;
        --rose-800: #9f1239;
        --rose-700: #be123c;
        --rose-600: #e11d48;
        --rose-500: #f43f5e;
        --rose-400: #fb7185;
        --rose-300: #fda4af;
        --rose-200: #fecdd3;
        --rose-100: #ffe4e6;
        --rose-50: #fff1f2;

        --slate-900: #0f172a;
        --slate-800: #1e293b;
        --slate-700: #334155;
        --slate-600: #475569;
        --slate-500: #64748b;
        --slate-400: #94a3b8;
        --slate-300: #cbd5e1;
        --slate-200: #e2e8f0;
        --slate-100: #f1f5f9;
        --slate-50: #f8fafc;

        --white: #ffffff;
        --black: #000000;

        /* Homepage Texts */
        // Header
        --logo-text-size: 1.5rem;
        --logo-text-color: var(--rose-600);
        --logo-text-hover-color: var(--rose-500);
        --logo-text-hover-transition: 0.2s;
        --logo-text-weight: 900;

        --menu-item-text-size: 1rem;
        --menu-item-text-color: var(--slate-700);
        --menu-item-text-hover-color: var(--slate-900);
        --menu-item-hover-transition: 0.2s;
        --menu-item-text-weight: 600;

        --button-text-size: 1rem;
        --button-text-color: var(--white);
        --button-background-color: var(--rose-600);
        --button-background-hover-color: var(--rose-700);
        --button-hover-transition: 0.2s;
        --button-text-weight: 600;

        --header-height: 5rem;
        --header-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        // Main
        --main-title-text-size: 5rem;
        --main-title-text-color: var(--rose-600);
        --main-title-text-color-secondary: var(--slate-800);
        --main-title-text-weight: 900;
        --main-title-text-secondary-weight: 600;
        --main-subtitle-text-size: 1.5rem;
        --main-subtitle-text-color: var(--slate-800);
        --main-subtitle-text-weight: 500;

        --cta-button-text-size: 1.25rem;
        --cta-button-text-color: var(--white);
        --cta-button-background-color: var(--rose-600);
        --cta-button-background-hover-color: var(--rose-600);
        --cta-button-hover-transition: 0.2s;

        --card-border-color: var(--rose-700);
        --card-title-text-size: 2rem;
        --card-title-text-color: var(--rose-600);
        --card-title-text-weight: 600;
        --card-subtitle-text-size: 1.5rem;
        --card-subtitle-text-color: var(--slate-900);
        --card-subtitle-text-weight: 600;
        --card-text-size: 1rem;
        --card-text-color: var(--slate-700);
        --card-text-weight: 400;
        --card-button-text-size: 1rem;
        --card-button-text-color: var(--white);
        --card-button-background-color: var(--rose-500);

        // Sobre nós
        --about-title-text-size: 1.5rem;
        --about-title-text-color: var(--rose-600);
        --about-title-text-weight: 900;
        --about-subtitle-text-size: 1rem;
        --about-subtitle-text-color: var(--slate-900);
        --about-subtitle-text-weight: 500;

        // Projetos já realizados
        --projects-title-text-size: 1.5rem;
        --projects-title-text-color: var(--rose-600);
        --projects-title-text-weight: 900;
        --projects-subtitle-text-size: 1rem;
        --projects-subtitle-text-color: var(--slate-900);
        --projects-subtitle-text-weight: 500;
        --projects-button-text-size: 1rem;
        --projects-button-text-color: var(--white);
        --projects-button-text-weight: 600;
        --projects-button-background-color: var(--rose-500);

        // Footer
        --footer-background-color: var(--rose-600);
        --footer-text-color: var(--white);
        --footer-title-text-size: 1.5rem;
        --footer-title-text-weight: 900;
        --footer-socials-text-size: 1.5rem;
        --footer-socials-text-weight: 400;
        --footer-button-background-color: var(--white);
        --footer-button-text-color: var(--slate-900);
        --footer-text-small-size: 0.9375rem;
        --footer-text-small-weight: 400;
    }

    /* Reset */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: 'Inter', sans-serif;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    body{
        font-family: 'Inter', sans-serif;
        width: 100vw;
        height: 100vh;
        position: relative;
    }

    #root {
        position: relative;
        min-height: 100vh;

    }
`;
