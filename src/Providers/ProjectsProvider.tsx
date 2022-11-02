import { createContext, useState } from "react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Services/api";

interface IProjectsContext {
    projects: any;
    setProjects: any;
    requestProjects: () => void;
    menu: boolean;
    setMenu: any;
    showModal: boolean;
    setShowModal: any;
    handleMenu: () => void;
    handleModal: () => void;
    handleNavigate: any;
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
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const handleMenu = () => {
        return !menu ? setMenu(true) : setMenu(false);
    };
    const handleModal = () => {
        return !showModal ? setShowModal(true) : setShowModal(false);
    };
    const handleNavigate = (route: string) => {
        return navigate(route);
    };

    const requestProjects = () => {
        api.get("/projects").then((res) => setProjects(res.data));
    };
    return (
        <ProjectsContext.Provider
            value={{
                requestProjects,
                projects,
                setProjects,
                menu,
                setMenu,
                showModal,
                setShowModal,
                handleMenu,
                handleModal,
                handleNavigate,
            }}
        >
            {children}
        </ProjectsContext.Provider>
    );
};
