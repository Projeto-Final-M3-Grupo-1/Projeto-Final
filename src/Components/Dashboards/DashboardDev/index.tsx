import { useContext } from "react";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { PerfilDev } from "../../Modal/ModalPerfilDev";
export const DashboardDev = () => {
    const { handleModal, showModal } = useContext(ProjectsContext);
    return (
        <>
            {showModal && <PerfilDev />}
            <button onClick={handleModal}>perfil</button>
        </>
    );
};
