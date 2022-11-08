import { useContext, useEffect, useState } from 'react'
import { ProjectsContext } from '../../Providers/ProjectsProvider';
import api from '../../Services/api';
import { StyledDiv } from './style';


interface iProjects{
    map(arg0: (project: any) => void): import("react").ReactNode;
}

export const RenderProjectsDashAdmin = () => {
    const {  requestProjects } =
    useContext(ProjectsContext);
    const [projects, setProjects] = useState([] as unknown as iProjects)

useEffect(() => {
    // requestProjects();
    const render = () => {
      api.get("/projects")
      .then(res => {
          setProjects(res.data)
          console.log(res.data)
      })
    }

    render()
}, []);


return (
    <StyledDiv>
        <ul>
            {projects.map((project: any) => 
                // console.log(projects);           
                    <li key={project.id}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </li>
                
        )}        
        </ul>
    </StyledDiv>

    )
}
