import { useContext } from "react";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import HeaderDashboard from "../../HeaderDashboard";
import { PerfilDev } from "../../Modal/ModalPerfilDev";

export const DashboardDev = () => {
	const { handleModal, showModal, handleNavigate } =
		useContext(ProjectsContext);
	return (
		<>
			<HeaderDashboard />
			{showModal && <PerfilDev />}
			<button onClick={handleModal}>perfil</button>
		</>
	);
};
