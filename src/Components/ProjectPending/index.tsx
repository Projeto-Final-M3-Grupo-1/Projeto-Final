import {  useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import api from "../../Services/api";
import { StyledButtonCta } from "../Button";
import { StyledDashboardManageProjectsAdmin } from "./style";

interface iProjects {
  map(arg0: (project: any) => void): import("react").ReactNode;
  onClick: () => void;
}

  

export const ProjectPending = () => {
  const { modalChange, setModalChange, requestOngMyProject, setIdProject, idProject } = useContext(ProjectsContext);
  console.log(idProject)
  const [projects, setProjects] = useState([] as unknown as iProjects);

  useEffect(() => {
    const render = () => {
      api.get("/projects").then((res) => {
        setProjects(res.data);
        console.log(res.data);
      });
    };

    render();
  }, []);

  return (
    <StyledDashboardManageProjectsAdmin>
      <ul className="doneTasks">
        {projects.map(
          (project: any) =>
            project.status === "pendings" && (
              <li key={project.id}>
                <h3>{project.title}</h3>
                <StyledButtonCta onClick={() => {return  (setModalChange(true), localStorage.setItem("idProject",project.id))}}
                >
                  add
                </StyledButtonCta>

              </li>
            )
        )}
      </ul>
    </StyledDashboardManageProjectsAdmin>
    
  );
};
