import { useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import { StyledButtonCta } from "../Button";
import { ModalAcceptDecline } from "../Modal/ModalAcceptDecline";
import { StyledDashboardManageProjectsAdmin } from "./style";
interface iProjects {
    map(arg0: (project: any) => void): import("react").ReactNode;
    onClick: () => void;
}
export const ProjectPending = () => {

    const { setModalChange, requestProjects, projects, modalChange } =
        useContext(ProjectsContext);
    useEffect(() => {
        requestProjects();
    }, []);
    return (
        <>
            <StyledDashboardManageProjectsAdmin>
                <ul className="doneTasks">
                    {projects.map(
                        (project: any) =>
                            project.status === "pendings" && (
                                <li key={project.id}>
                                    <h3>{project.title}</h3>
                                    <StyledButtonCta
                                        onClick={() => {
                                            return (
                                                setModalChange(true),
                                                localStorage.setItem(
                                                    "idProject",
                                                    project.id
                                                )
                                            );
                                        }}
                                    >
                                        Gerenciar
                                    </StyledButtonCta>
                                </li>
                            )
                    )}
                </ul>
            </StyledDashboardManageProjectsAdmin>
            {modalChange && <ModalAcceptDecline />}
        </>
    );
};
