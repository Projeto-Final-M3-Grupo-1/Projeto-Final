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
  handleNavigate: any;
  createProjects: any;
  showProject: any;
  HandleModalProject: () => void;
  scrollToTop: () => void;
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
  const [showProject, setShowProjects] = useState(false);

  const navigate = useNavigate();

  const handleMenu = () => {
    return !menu ? setMenu(true) : setMenu(false);
  };
  const handleModal = () => {
    return !showModal ? setShowModal(true) : setShowModal(false);
  };

  const HandleModalProject = () => {
    return !showProject ? setShowProjects(true) : setShowProjects(false);
  };
  const handleNavigate = (route: string) => {
    return navigate(route);
  };

  const requestProjects = () => {
    api.get("/projects").then((res) => setProjects(res.data));
  };

  const createProjects = (data: any) => {
    data.userId = localStorage.userId;
    data.ongId = localStorage.userId;
    console.log(data);
    api
      .post("/pendings", data, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
      .then(() => {
        setShowProjects(false);
        toast.success("Projeto cadastrado com sucesso!");
      });
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
        HandleModalProject,
        createProjects,
        showProject,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
