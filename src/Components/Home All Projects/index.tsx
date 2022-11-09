import { useContext, useEffect } from "react";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import { StyledButtonCta } from "../Button";
import { StyledAllProjectsBox } from "./style";

export const AllProjects = () => {

    const { requestProjects, projects } = useContext(ProjectsContext);
    useEffect(() => {
        requestProjects();
    }, []);
    return (
        <StyledAllProjectsBox id="projects">
            <h2>Projetos já realizados</h2>
            <ul>
                {projects.map(
                    (element: any) =>
                        element.status == "completed" && (
                            <li key={element.id}>
                                <img src={element.imgProject} alt="" />
                                <h3>{element.title}</h3>
                                <p>{element.description}</p>
                                <StyledButtonCta>Visite o site</StyledButtonCta>
                            </li>
                        )
                )}
            </ul>
        </StyledAllProjectsBox>
    );
};
