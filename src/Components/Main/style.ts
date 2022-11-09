import styled from "styled-components";

export const MainStyle = styled.main`
  max-height: 100vh;
  display: flex;
  gap: 2.5rem;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledTextsMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  padding-top: 2rem;
  flex-wrap: wrap;

  h1 {
    color: var(--main-title-text-color);
    font-size: var(--main-title-text-size);
  }

  h2 {
    color: var(--main-title-text-color-secondary);
    font-weight: var(--main-title-text-secondary-weight);
    font-size: var(--main-title-text-size);

    b {
      font-weight: var(--main-title-text-weight);
    }
  }

  p {
    color: var(--main-subtitle-text-color);
    font-weight: var(--main-subtitle-text-weight);
    font-size: var(--main-subtitle-text-size);
    max-width: 60%;
    text-align: center;

    @media (max-width: 1200px) {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 880px) {
    h1,
    h2 {
      font-size: 3rem;
    }
  }

  @media (max-width: 650px) {
    h1,
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
      width: 80%;
    }
  }
`;

export const StyledImagesMain = styled.div`
  display: flex;
  flex: row;
  max-width: 100%;
  overflow-x: hidden;
  height: 50%;
  position: relative;
  justify-content: center;

  img {
    width: 100%;
    align-self: flex-end;
    max-height: 254px;
    margin-top: 4rem;
  }

  button{
    position: absolute;
  }

  @media (max-width: 880px) {
    img {
      margin-top: 4rem;
    }

    button {
      width: 7.5rem;
      height: 7.5rem;
    }
  }

  @media (max-width: 650px) {
    img {
      margin-top: 3rem;
    }
    button {
      width: 5rem;
      height: 5rem;
      font-size: 10px;
    }
  }
`;
