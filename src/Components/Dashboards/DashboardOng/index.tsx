import { useContext } from "react";

import { ProjectsContext } from "../../../Providers/ProjectsProvider";

import MenuAsideOng from "../../Asides/AsideOng";
import HeaderDashboard from "../../HeaderDashboard";
import { ModalPerfilOng } from "../../Modal/ModalPerfilOng";
import Publications from "../../Publication";

export const DashboardOng = () => {
	const { showModal, handleNavigate } = useContext(ProjectsContext);
	return (
		<>
			<HeaderDashboard />
			{showModal ? <ModalPerfilOng /> : <MenuAsideOng />}
			<Publications></Publications>
		</>
	);
};
