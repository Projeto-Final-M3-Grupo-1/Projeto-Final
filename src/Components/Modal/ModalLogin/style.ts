import styled from "styled-components";

export const StyledBoxModal = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  position: fixed;
  top: 0%;
  z-index: 4;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.5);
  span {
    font-size: 12px;
    font-weight: 700;
    color: var(--rose-900);
  }
`;
