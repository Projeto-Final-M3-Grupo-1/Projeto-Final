import { useContext, useEffect } from "react";

import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { UserContext } from "../../../Providers/UserProvider";
import { HeaderDashboard } from "../../HeaderDashboard";
import ModalCreateProject from "../../Modal/ModalAddProject";
import { ModalPerfilOng } from "../../Modal/ModalPerfilOng";
import Publications from "../../Publication";

export const DashboardOng = () => {
	const { showProject } = useContext(ProjectsContext);
	const { renderPublications, openPerfil } = useContext(UserContext);

	useEffect(() => {
		renderPublications();
	}, []);
	return (
		<>
			<HeaderDashboard />
			{openPerfil && <ModalPerfilOng />}
			{showProject && <ModalCreateProject />}
			<Publications />
		</>
	);
};
