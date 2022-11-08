import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthContext";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { UserContext } from "../../../Providers/UserProvider";
import HeaderDashboard from "../../HeaderDashboard";
import { ModalPerfilAdmin } from "../../Modal/modalPerfilAdmin";
import { ProjectsToApply } from "../../ProjectsToApply";
import Publications from "../../Publication";

import { render } from "react-dom";

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

      {!render ? <Publications /> : <ProjectsToApply />}
    </>
  );
};
