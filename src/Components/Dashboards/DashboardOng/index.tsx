import { useContext, useEffect } from "react";

import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { UserContext } from "../../../Providers/UserProvider";

import MenuAsideOng from "../../Asides/AsideOng";
import HeaderDashboard from "../../HeaderDashboard";
import { ModalPerfilOng } from "../../Modal/ModalPerfilOng";
import Publications from "../../Publication";

export const DashboardOng = () => {
	const { showModal, handleNavigate } = useContext(ProjectsContext);
	const { renderPublications } = useContext(UserContext);

	useEffect(() => {
		renderPublications();
	}, []);
	return (
		<>
			<HeaderDashboard />
			{showModal && <ModalPerfilOng />}
			<Publications />
		</>
	);
};
