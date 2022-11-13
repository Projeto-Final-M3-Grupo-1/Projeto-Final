import styled from "styled-components";

export const StyledForm = styled.form`
  width: 90%;
  max-width: 350px;

  border-top: solid 5px var(--rose-700);
  border-bottom: solid 5px var(--rose-700);
  border-radius: 6px;
  padding: 11px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  background-color: white;

  gap: 8px;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .close {
    position: absolute;
    right: 0%;
    top: 0%;

    width: 25px;
    height: 25px;

    color: var(--rose-700);

    cursor: pointer;
  }
`;

