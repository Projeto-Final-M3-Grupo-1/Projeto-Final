import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    box-sizing: border-box;
    height: 15.8rem;
    padding: 100px;
  }
`;
export const StyledTitle = styled.h3`
  font-size: var(--main-subtitle-text-size);
  font-weight: var(--main-title-text-weight);
  color: var(--main-title-text-color);
  line-height: 1.8rem;
`;
export const StyledParagraph = styled.p`
  height: 209px;
  max-width: 1200px;
  font-style: var(--main-subtitle-text-weight);
  color: var(--main-subtitle-text-color);
`;
