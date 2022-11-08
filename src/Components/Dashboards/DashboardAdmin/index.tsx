import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthContext";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { UserContext } from "../../../Providers/UserProvider";
import HeaderDashboard from "../../HeaderDashboard";
import { ModalPerfilAdmin } from "../../Modal/modalPerfilAdmin";

import Publications from "../../Publication";
import { RenderPorjectsDashAdmin } from "../../RenderProjectsDashAdmin";

export const DashboardAdmin = () => {
  const { loadingUser } = useContext(AuthContext);
  const { render, setRender, requestProjects } = useContext(ProjectsContext);

  const { showModal } = useContext(ProjectsContext);

  useEffect(() => {
    loadingUser();
    requestProjects();
  }, []);

  return (
    <>
      <HeaderDashboard />
      {showModal && <ModalPerfilAdmin />}

      <Outlet/>
    </>
  );
};
