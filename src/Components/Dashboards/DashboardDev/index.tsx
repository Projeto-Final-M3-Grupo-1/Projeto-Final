import { useContext, useEffect } from "react";

import { UserContext } from "../../../Providers/UserProvider";
import { HeaderDashboard } from "../../HeaderDashboard";
import { ModalPerfilDev } from "../../Modal/ModalPerfilDev";
import { Outlet } from "react-router-dom";

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
