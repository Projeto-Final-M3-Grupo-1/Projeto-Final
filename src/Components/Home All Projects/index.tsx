import { useContext, useEffect } from "react";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import { StyledButtonCta } from "../Button";
import { StyledAllProjectsBox } from "./style";

export const AllProjects = () => {
    // function requestProjects() {
    //     api.get("/projects").then((res) => console.log(res));
    // }
    const { requestProjects, projects } = useContext(ProjectsContext);
    useEffect(() => {
        requestProjects();
    }, []);
    return (
        <StyledAllProjectsBox>
            <h2>Projetos já realizados</h2>
            <ul>
                {projects.map((element: any) => (
                    <li>
                        <img src={element.imgProject} alt="" />
                        <h3>{element.title}</h3>
                        <p>{element.description}</p>
                        <StyledButtonCta>Visite o site</StyledButtonCta>
                    </li>
                ))}
            </ul>
        </StyledAllProjectsBox>
    );
};
