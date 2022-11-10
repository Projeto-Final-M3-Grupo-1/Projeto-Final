import styled from "styled-components";

export const StyledModalHome = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-content: center;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 500px;
  background-color: var(--white);

  border-radius: 8px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    position: relative;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    
    height: 15rem;
    max-width: 750px;

    margin: 0 auto;
    overflow-y: hidden;
  }
`;
