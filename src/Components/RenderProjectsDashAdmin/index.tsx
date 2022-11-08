import { useContext, useEffect } from 'react'
import { ProjectsContext } from '../../Providers/ProjectsProvider';
import api from '../../Services/api';
import { StyledDiv } from './style';


export const RenderPorjectsDashAdmin = () => {
    const { projects, requestProjects } =
    useContext(ProjectsContext);
// useEffect(() => {
//     requestProjects();
// }, []);


// const render = () => {
//   api
// }

return (
    <StyledDiv>
        <ul>
            {projects.map((project: any) => {
                console.log(projects);

                <li key={project.id}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </li>
        })}
        </ul>
    </StyledDiv>

    )
}
