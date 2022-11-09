import { useContext, useEffect } from "react";

import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { UserContext } from "../../../Providers/UserProvider";
import { HeaderDashboard } from "../../HeaderDashboard";
import ModalCreateProject from "../../Modal/ModalAddProject";
import { ModalPerfilOng } from "../../Modal/ModalPerfilOng";
import Publications from "../../Publication";

export const DashboardOng = () => {
	const { showModal, handleNavigate, showProject } =
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
			<Publications></Publications>
		</>
	);
};
