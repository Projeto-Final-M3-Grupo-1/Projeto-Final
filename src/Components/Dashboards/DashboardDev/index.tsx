import { useContext, useEffect } from "react";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { UserContext } from "../../../Providers/UserProvider";
import Publications from "../../Publication";

import HeaderDashboard from "../../HeaderDashboard";
import { ModalPerfilDev } from "../../Modal/ModalPerfilDev";

export const DashboardDev = () => {
    const { handleModal, showModal, handleNavigate } =
        useContext(ProjectsContext);
    const { renderPublications } = useContext(UserContext);

    useEffect(() => {
       renderPublications();
    }, [])

    return (
        <>
            <HeaderDashboard />
            {showModal && <ModalPerfilDev />}
            <button onClick={handleModal}>perfil</button>
            <Publications></Publications>
        </>
    );
};
