import styled from "styled-components";

export const StyledMainCard = styled.div`
  width: 100%;
`;

export const StyledCard = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 4px solid var(--rose-600);
  border-radius: 4px;
  padding: 1rem;
  gap: 2rem;
  width: 96%;

  img {
    width: 50%;
    height: 100%;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;

    img {
      max-height: 350px;
      width: 100%;
    }
  }
`;

export const StyledRightCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  gap: 1rem;

  button {
    width: 90%;
    cursor: pointer;
  }
`;

export const StyledTextCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    font-size: 22px;
    color: var(--rose-600);
    font-weight: var(--menu-item-text-weight);
  }

  p {
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const StyledButtonSite = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 28px;
  gap: 10px;
  text-decoration: none;

  width: 35%;

  background: var(--button-background-color);
  color: var(--button-text-color);
  font-size: var(--button-text-size);
  font-weight: var(--button-text-weight);
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background: var(--button-background-hover-color);
    transition: var(--button-hover-transition);
  }

  @media(max-width: 850px){
    width: 100%;
    padding: 0.8rem 0;
  }
`;

export const StyledButtonsAdmin = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  button {
    width: 45%;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 1rem;

    button {
      width: 100%;
    }
  }
`;
