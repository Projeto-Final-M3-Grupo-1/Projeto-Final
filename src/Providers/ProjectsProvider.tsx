import { createContext, useState } from "react";
import { ReactNode } from "react";
import { array } from "yup";
import api from "../Services/api";

interface IProjectsContext {
    projects: any;
    setProjects: any;
    requestProjects: () => void;
    menu: boolean;
    setMenu: any;
}

export const ProjectsContext = createContext<IProjectsContext>(
    {} as IProjectsContext
);

interface IProjectChildren {
    children: ReactNode;
}
// interface IProjectsData {
//     userId: number;
//     title: string;
//     description: string;
//     imgProject: string;
//     ongId: number;
//     id: number;
// }
export const ProjectsProvider = ({ children }: IProjectChildren) => {
    const [projects, setProjects] = useState([] as any);
    const [menu, setMenu] = useState(false);

    function requestProjects() {
        api.get("/projects").then((res) => setProjects(res.data));
    }
    return (
        <ProjectsContext.Provider
            value={{ requestProjects, projects, setProjects, menu, setMenu }}
        >
            {children}
        </ProjectsContext.Provider>
    );
};
