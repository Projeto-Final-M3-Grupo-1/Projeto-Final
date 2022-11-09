import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthContext";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { UserContext } from "../../../Providers/UserProvider";
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
      {showModal && <ModalPerfilAdmin />}

      <Outlet />
    </>
  );
};
