import styled from "styled-components";

export const StyledAside = styled.aside`
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  background-color: var(--slate-500);
  color: var(--slate-50);
  nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;

    .IconAside {
      width: 20%;
      color: white;
    }
  }
  button {
    height: 55px;
    border-bottom: 1px solid black;
    margin: 10px;
    align-items: center;
    text-align: left;
    display: flex;
    cursor: pointer;
    color: white;
    background-color: var(--slate-500);
    border: none;
  }

  button:hover {
    height: 55px;
    border-bottom: 1px solid black;
    margin: 10px;
    align-items: center;
    text-align: left;
    display: flex;
    cursor: pointer;
    scale: 1.02;
    color: white;
  }

  a {
    height: 55px;
    border-bottom: 1px solid black;
    margin: 10px;
    align-items: center;
    text-align: left;
    display: flex;
    cursor: pointer;
    color: white;
  }
  a:hover {
    height: 55px;
    border-bottom: 1px solid black;
    margin: 10px;
    align-items: center;
    text-align: left;
    display: flex;
    cursor: pointer;
    scale: 1.02;
    color: white;
  }
`;
