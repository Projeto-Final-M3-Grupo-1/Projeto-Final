import { useContext } from "react";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";

import HeaderDashboard from "../../HeaderDashboard";
import { ModalPerfilDev } from "../../Modal/ModalPerfilDev";

export const DashboardDev = () => {
    const { handleModal, showModal, handleNavigate } =
        useContext(ProjectsContext);
    return (
        <>
            <HeaderDashboard />
            {showModal && <ModalPerfilDev />}
            <button onClick={handleModal}>perfil</button>
        </>
    );
};
