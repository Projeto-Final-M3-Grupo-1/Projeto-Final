import { useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import api from "../../Services/api";
import { StyledLoginButton } from "../Button";
import { StyledDashboardManageProjectsAdmin } from "./style";

interface iProjects {
  map(arg0: (project: any) => void): import("react").ReactNode;
}

export const ProjectPending = () => {
  const { requestProjects, handleManageProject } = useContext(ProjectsContext);
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
                <StyledLoginButton>add</StyledLoginButton>
              </li>
            )
        )}
      </ul>
    </StyledDashboardManageProjectsAdmin>
    
  );
};
