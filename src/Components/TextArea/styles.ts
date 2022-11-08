import styled from "styled-components";

export const StyledTextArea = styled.div`
  width: 95%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 4px;

  label {
    font-size: 14px;
    font-weight: 500;
  }
  #content {
    width: 95%;
    height: 100px;

    border: solid 1px var(--rose-700);
    border-radius: 4px;
    padding: 0px 5px;

    outline: var(--rose-900);
    resize: none;
    font-style: var(--slate-900);
  }
`;
