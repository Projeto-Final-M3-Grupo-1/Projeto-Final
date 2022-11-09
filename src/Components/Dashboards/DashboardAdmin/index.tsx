import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthContext";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { UserContext } from "../../../Providers/UserProvider";
import { HeaderDashboard } from "../../HeaderDashboard";
import MobileHeader from "../../HeaderDashboard/MobileHeader";
import { ModalPerfilAdmin } from "../../Modal/modalPerfilAdmin";
export const DashboardAdmin = () => {
  const { loadingUser } = useContext(AuthContext);
  const { renderPublications } = useContext(UserContext);
  const { showModal } = useContext(ProjectsContext);
  useEffect(() => {
    loadingUser();
    renderPublications();
  }, []);

  return (
    <>
      <HeaderDashboard />
      {showModal && <ModalPerfilAdmin />}

      <Outlet />
    </>
  );
};
