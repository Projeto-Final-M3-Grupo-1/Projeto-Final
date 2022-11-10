import { useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import api from "../../Services/api";
import { StyledLoginButton } from "../Button";
import { StyledDashboardManageProjectsAdmin } from "./style";

interface iProjects {
    map(arg0: (project: any) => void): import("react").ReactNode;
}

export const ProjectDevelop = () => {
    const { requestProjects, handleManageProject } =
        useContext(ProjectsContext);
    const [projects, setProjects] = useState([] as unknown as iProjects);


    useEffect(() => {
        const render = () => {
            api.get("/projects").then((res) => {
                setProjects(res.data);
            });
        };


        render();
    }, []);

    return (
        <StyledDashboardManageProjectsAdmin>
            <ul className="openTasks">
                {projects.map(
                    (project: any) =>
                        project.status == "develop" && (
                            <li key={project.id}>
                                <h3>{project.title}</h3>
                                <StyledLoginButton
                                    onClick={() =>
                                        handleManageProject(project.id, 2)
                                    }
                                >
                                    Gerenciar
                                </StyledLoginButton>
                            </li>
                        )
                )}
            </ul>
        </StyledDashboardManageProjectsAdmin>
    );
};
