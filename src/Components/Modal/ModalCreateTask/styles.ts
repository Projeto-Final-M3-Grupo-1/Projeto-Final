import styled from "styled-components";

export const StyledBoxModalCreateTask = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  position: fixed;
  top: 0%;
  z-index: 4;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.5);

  .containerModal {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .containerNomeFuncao {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  img {
    width: 60px;
    border-radius: 50%;
    border: 1px solid var(--rose-600);
  }
`;
