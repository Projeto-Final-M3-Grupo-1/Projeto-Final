import styled from "styled-components";

export const StyledRegisterDev = styled.div`
  padding: 2.5rem 6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  h1 {
    color: var(--page-title-color);
    font-size: var(--page-title-font-size);
    font-weight: var(--page-title-text-weight);
  }

  p {
    line-height: 1.75;
  }

  @media(max-width: 600px){
    padding: 2.5rem;
  }
`;
