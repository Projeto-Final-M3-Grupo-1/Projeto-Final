import styled from "styled-components";
export const StyledAside = styled.aside`
  width: 250px;
  height: 100vh;
  display: "flex";
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  background-color: var(--slate-400);
  color: var(--slate-50);

  .movieAside {
    position: relative;
  }
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

  a {
    height: 55px;
    margin: 10px;
    align-items: center;
    text-align: left;
    display: flex;
    cursor: pointer;
    color: white;
    box-shadow: 0px 1px 1px -1px #000000b5;
  }
  a:hover {
    height: 55px;
    margin: 10px;
    align-items: center;
    text-align: left;
    display: flex;
    cursor: pointer;
    scale: 1.02;
    color: white;
    box-shadow: 0px 1px 1px -1px #000000b5;
  }

  .btnAside {
    position: relative;
    color: white;
    left: 225px;
    top: 54px;
    width: 20px;
    height: 50px;
    cursor: pointer;
  }
  .btnAside:hover {
    position: relative;
    color: white;
    left: 225px;
    top: 54px;
    width: 20px;
    height: 50px;
    cursor: pointer;
  }

  .moveAside {
    position: absolute;
    width: 250px;
    height: 100vh;
    display: flex;
    position: absolute;
    left: 350px;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    background-color: var(--slate-500);
    color: var(--slate-50);
    cursor: pointer;
  }
`;

export const StyledAsideMovie = styled.aside`
  position: absolute;
  left: 50%;
  width: 250px;
  height: 100vh;
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

  a {
    height: 55px;
    margin: 10px;
    align-items: center;
    text-align: left;
    display: flex;
    cursor: pointer;
    color: white;
    box-shadow: 0px 1px 1px -1px #000000b5;
  }
  a:hover {
    height: 55px;
    margin: 10px;
    align-items: center;
    text-align: left;
    display: flex;
    cursor: pointer;
    scale: 1.02;
    color: white;
    box-shadow: 0px 1px 1px -1px #000000b5;
  }

  .btnAside {
    position: relative;
    color: white;
    left: 225px;
    top: 54px;
    width: 20px;
    height: 50px;
    cursor: pointer;
  }
  .btnAside:hover {
    position: relative;
    color: white;
    left: 225px;
    top: 54px;
    width: 20px;
    height: 50px;
    cursor: pointer;
  }

  position: absolute;
  width: 250px;
  height: 100vh;
  display: flex;
  position: absolute;
  left: 350px;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  background-color: var(--slate-500);
  color: var(--slate-50);
  cursor: pointer;
`;
