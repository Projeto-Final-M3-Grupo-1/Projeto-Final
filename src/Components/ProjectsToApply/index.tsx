import { useContext, useEffect } from "react";
import { TbH1 } from "react-icons/tb";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import { StyledLoginButton } from "../Button";
import { ModalYouRightThis } from "../Modal/ModalYouRightThis";
import { StyledBoxProjectsToApply } from "./style";

export const ProjectsToApply = () => {
  const { projects, requestProjects, youRight, handleYouRight } =
    useContext(ProjectsContext);
  useEffect(() => {
    requestProjects();
  }, []);
  console.log(projects);
  return (
    <>
      <StyledBoxProjectsToApply>
        <h2>Projetos em que você pode se voluntariar</h2>
        <ul>
          {projects.length ? (
            projects.map((element: any) => {
              return (
                <li>
                  <img src={element.imgProject} alt="" />
                  <h2>{element.title}</h2>
                  <p>{element.description}</p>
                  <div>
                    <StyledLoginButton
                      onClick={() => handleYouRight(element.id)}
                    >
                      Trabalhar no projeto
                    </StyledLoginButton>
                    <StyledLoginButton
                      onClick={() => console.log(element.ongId)}
                    >
                      Ver perfil da ong
                    </StyledLoginButton>
                  </div>
                </li>
              );
            })
          ) : (
            <h1>teste</h1>
          )}
        </ul>
      </StyledBoxProjectsToApply>
      {youRight && <ModalYouRightThis />}
    </>
  );
};
