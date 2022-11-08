import styled from "styled-components";

export const StyledModalAddProject = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  top: 10%;
  left: 20%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  max-width: 500px;
  border-radius: 8px;
  background-color: var(--white);
  gap: 20px;

  label {
    font-size: 14px;
    font-weight: 500;
  }
  input {
    width: 95%;
    height: 25px;
    border: solid 1px var(--rose-700);
    border-radius: 4px;
    padding: 0px 5px;

    outline: var(--rose-900);
  }

  textarea {
    width: 95%;
    height: 250px;
    border: solid 1px var(--rose-700);
    border-radius: 4px;
    padding: 0px 5px;
    outline: var(--rose-900);
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 28px;
    gap: 10px;
    width: 100%;
    height: 40px;
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
  }
`;
