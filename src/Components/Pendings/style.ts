import styled from "styled-components";

export const StyledCardProject = styled.ul`
  width: 90%;
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid var(--rose-600);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;

  padding: 5px;
  font-family: "Inter";

  li {
    width: 90%;
    height: 100px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid var(--rose-600);
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    padding: 10px;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    overflow: auto;

    :hover {
      background-color: var(--rose-50);
    }

    h2 {
      font-family: "Inter";
      font-weight: 600;
      color: var(--rose-600);
    }

    p {
      font-family: "Inter";
      font-weight: 600;
    }
  }
`;
