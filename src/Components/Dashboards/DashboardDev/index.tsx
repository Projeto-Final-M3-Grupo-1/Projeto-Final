import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../../Providers/UserProvider";
import Publications from "../../Publication";
import { HeaderDashboard } from "../../HeaderDashboard";
import { ModalPerfilDev } from "../../Modal/ModalPerfilDev";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { ProjectsToApply } from "../../ProjectsToApply";

export const DashboardDev = () => {
	const { renderPublications, openPerfil } = useContext(UserContext);
	const { render, setRender } = useContext(ProjectsContext);
	useEffect(() => {
		renderPublications();
	}, []);

	return (
		<>
			<HeaderDashboard />
			{openPerfil && <ModalPerfilDev />}

			{!render ? <Publications /> : <ProjectsToApply />}
		</>
	);
};
