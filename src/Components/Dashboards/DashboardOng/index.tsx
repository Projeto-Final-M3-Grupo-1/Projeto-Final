import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { UserContext } from "../../../Providers/UserProvider";
import { PendingProject } from "../../AllProjects/Pendings";

import HeaderDashboard from "../../HeaderDashboard/HeaderDashboardOng";
import ModalCreateProject from "../../Modal/ModalAddProject";
import { ModalPerfilOng } from "../../Modal/ModalPerfilOng";
import Publications from "../../Publication";

export const DashboardOng = () => {
  const { showModal, handleNavigate, showProject, pendingProject } =
    useContext(ProjectsContext);
  const { renderPublications } = useContext(UserContext);

  useEffect(() => {
    renderPublications();
  }, []);
  return (
    <>
      <HeaderDashboard />
      {showModal && <ModalPerfilOng />}
      {showProject && <ModalCreateProject />}
      <Outlet />
    </>
  );
};
