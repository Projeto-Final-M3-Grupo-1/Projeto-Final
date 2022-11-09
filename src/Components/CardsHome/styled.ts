import styled from "styled-components";

export const StyledDivHome = styled.div`
  display: flex;
  gap: 20px;
  max-width: 95%;
  height: 434px;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem 0;

  /* overflow: hidden;
    overflow-x: scroll;
    ::-webkit-scrollbar {
        background-color: var(--rose-200);
        border-radius: 20px;
        height: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--main-title-text-color);
        border-radius: 20px;
    } */

  @media (min-width: 768px) {
    box-sizing: border-box;
    flex-direction: row;
    max-width: 1200px;
    height: 400px;
    margin: auto 12px;
    /* padding: 100px; */
  }
`;

export const StyledCardHome = styled.div`
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

  @media (min-width: 768px) {
    max-height: 450px;
    max-width: 400px;
    border-radius: 8px;

    &:hover {
      box-shadow: 10px 12px 5px 0px rgba(0, 0, 0, 0.21);
      -webkit-box-shadow: 10px 12px 5px 0px rgba(0, 0, 0, 0.21);
      -moz-box-shadow: 10px 12px 5px 0px rgba(0, 0, 0, 0.21);
      transition: 0.5s;
    }
  }

  h2 {
    font-size: var(--card-text-size);
    color: var(--card-title-text-color);
    font-weight: var(--card-title-text-weight);
  }

  h3 {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;

    font-size: var(--card-text2-size);
    font-weight: var(--card-subtitle-text-weight);
    text-align: center;

    width: 90%;
  }

  p {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    text-align: justify;

    width: 90%;
    font-size: var(--card-text3-size);
  }

  > button {
    width: 90%;
    height: 25px;
    font-size: 14px;
  }

  @media (min-width: 768px) {
    > button {
      height: 40px;
    }
  }
`;

export const StyledP = styled.p`
  align-self: center;

  @media (min-width: 768px) {
    font-size: var(--card-title-text-size);
    font-weight: var(--card-title-text-weight);
    color: var(--card-title-text-color);
  }
`;
