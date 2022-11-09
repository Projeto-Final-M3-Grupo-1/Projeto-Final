import { useContext, useEffect } from "react";

import { UserContext } from "../../../Providers/UserProvider";
import { ModalPerfilDev } from "../../Modal/ModalPerfilDev";
import { Outlet } from "react-router-dom";
import { HeaderDashboard } from "../../HeaderDashboard/HeaderDashboardOng";

export const DashboardDev = () => {
  const { renderPublications, openPerfil } = useContext(UserContext);

  useEffect(() => {
    renderPublications();
  }, []);

  return (
    <>
      <HeaderDashboard />
      {openPerfil && <ModalPerfilDev />}
      <Outlet />
    </>
  );
};
