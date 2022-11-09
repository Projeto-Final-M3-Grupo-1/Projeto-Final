import styled from "styled-components";

export const StyledDashboardManageProjectsAdmin = styled.main`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1rem;
  margin: 1rem auto;
  max-width: 700px;
  padding: 1rem;
  /h2 {
    color: var(--page-title-color);
    font-size: 1.8rem;
    font-weight: var(--page-title-text-weight);
  }
  h3 {
    color: var(--slate-900);
    font-size: 1.5rem;
    font-weight: var(--page-title-text-weight);
  }
  p {
    line-height: 1.75;
    color: var(--slate-900);
    font-weight: 400;
    font-size: 1rem;
  } 
  .openTasks {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
    li {
      border: 2px solid var(--blue-500);
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 4px;
      gap: 1rem;
      height: 3rem;
      margin: 0.5rem;
      padding: 0.5rem;
    }
  }
  .doneTasks {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
    li {
      border: 2px solid var(--rose-500);
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 4px;
      height: 3rem;
      margin: 0.5rem;
      padding: 0.5rem;

      > button{
        background-color: var(--blue-500);
      }
    }
  }
`;