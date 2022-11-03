import styled from "styled-components";
export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  height: 80px;
  background-color: --var(white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: space-around;
  padding: 15px;

  @media (max-width: 700px) {
    width: 100%;
    box-sizing: border-box;
    height: 160px;
    flex-direction: column;
    gap: 20px;
    padding: 15px;
  }

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
    justify-content: center;
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
      cursor: pointer;
    }
  }
  @media (max-width: 700px) {
    nav {
      display: flex;
      justify-content: center;
      box-sizing: border-box;
      flex-wrap: wrap;
      gap: 10px;
      min-width: 320px;
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
