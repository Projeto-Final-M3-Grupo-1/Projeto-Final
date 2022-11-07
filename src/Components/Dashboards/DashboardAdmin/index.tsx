import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthContext";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { UserContext } from "../../../Providers/UserProvider";
import HeaderDashboard from "../../HeaderDashboard";
import { ModalPerfilAdmin } from "../../Modal/modalPerfilAdmin";
import Publications from "../../Publication";

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
      <Publications></Publications>
    </>
  );
};
