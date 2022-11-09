import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { UserContext } from "../../../Providers/UserProvider";
import { HeaderDashboard } from "../../HeaderDashboard/HeaderDashboardOng";
import ModalCreateProject from "../../Modal/ModalAddProject";
import { ModalPerfilOng } from "../../Modal/ModalPerfilOng";

export const DashboardOng = () => {
  const { showModal, showProject } = useContext(ProjectsContext);
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
