import { createContext, useState } from "react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { toast } from "react-toastify";
import api from "../Services/api";

interface IProjectsContext {
    projects: any;
    setProjects: any;
    requestProjects: () => void;
    menu: boolean;
    setMenu: any;
    showModal: boolean;
    setShowModal: any;
    modalHome: boolean;
    setModalHome: React.Dispatch<React.SetStateAction<boolean>>;
    handleMenu: () => void;
    handleModal: () => void;
    handleProjectsToApply: any;
    scrollToTop: () => void;
    render: string;
    setRender: any;
    youRight: boolean;
    handleYouRight: any;
    applyOnProject: any;
    showProject: any;
    setShowProjects: any;
    createProjects: any;
    HandleModalProject: () => void;
    handleNavigate: any;
}

export const ProjectsContext = createContext<IProjectsContext>(
    {} as IProjectsContext
);

interface IProjectChildren {
    children: ReactNode;
}

export const ProjectsProvider = ({ children }: IProjectChildren) => {
    const [projects, setProjects] = useState([] as any);
    const [menu, setMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalHome, setModalHome] = useState(false);
    const [render, setRender] = useState("publications");
    const [youRight, setYouRight] = useState(false);
    const [showProject, setShowProjects] = useState(false);

    const navigate = useNavigate();

    const handleYouRight = (projectId: any) => {
        localStorage.setItem("projectId", projectId);
        return !youRight ? setYouRight(true) : setYouRight(false);
    };
    const handleProjectsToApply = (destination: any) => {
        return setRender(destination);
    };
    const handleNavigate = (route: string) => {
        return navigate(route);
    };

    const handleMenu = () => {
        return !menu ? setMenu(true) : setMenu(false);
    };
    const handleModal = () => {
        return !showModal ? setShowModal(true) : setShowModal(false);
    };

    const HandleModalProject = () => {
        return !showProject ? setShowProjects(true) : setShowProjects(false);
    };
    const applyOnProject = () => {
        const body = {
            projectId: +localStorage.projectId,
        };
        console.log(body);
        requestApplyOnProject(body);
    };

    const createProjects = (data: any) => {
        data.userId = localStorage.userId;
        data.ongId = localStorage.userId;
        console.log(data);
        api.post("/pendings", data, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        }).then(() => {
            setShowProjects(false);
            toast.success("Projeto cadastrado com sucesso!");
        });
    };

    const requestApplyOnProject = (body: any) => {
        api.patch(`/users/${localStorage.userId}`, body, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        }).then((res) => {
            setYouRight(false);
            toast.success(
                "Cadastrado com sucesso no projeto, acesse Meu Projeto para ver os detalhes"
            );
        });
    };

    const requestProjects = () => {
        api.get("/projects", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        }).then((res) => setProjects(res.data));
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <ProjectsContext.Provider
            value={{
                scrollToTop,
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
                modalHome,
                setModalHome,
                render,
                setRender,
                handleProjectsToApply,
                handleYouRight,
                youRight,
                applyOnProject,
                HandleModalProject,
                createProjects,
                showProject,
                setShowProjects,
            }}
        >
            {children}
        </ProjectsContext.Provider>
    );
};
