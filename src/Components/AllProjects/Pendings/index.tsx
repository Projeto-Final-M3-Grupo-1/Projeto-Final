import { useContext, useEffect } from "react";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { StyledCardProject } from "../style";

export const PendingProject = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pendingProject, requestPendingProjects } =
    useContext(ProjectsContext);
  console.log(pendingProject);
  const idUser = localStorage.userId;
  useEffect(() => {
    requestPendingProjects();
  }, []);
  return (
    <StyledCardProject>
      <h2>Meus Projetos Pendentes</h2>
      {pendingProject.length
        ? pendingProject.map((data: any) => {
            if (data.ongId === idUser) {
              return (
                <li key={data.id}>
                  <h2>Nome do Projeto: {data.title}</h2>
                  <p>Descrição: {data.description}</p>
                </li>
              );
            }
          })
        : null}
    </StyledCardProject>
  );
};

/* {pendingProject.map((data: any) => {
    <li>{data.title}</li>;
  })} */
