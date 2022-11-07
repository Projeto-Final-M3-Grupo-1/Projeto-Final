import { useContext, useEffect } from "react";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { UserContext } from "../../../Providers/UserProvider";
import Publications from "../../Publication";

import HeaderDashboard from "../../HeaderDashboard";
import { ModalPerfilDev } from "../../Modal/ModalPerfilDev";

export const DashboardDev = () => {
    const { renderPublications, handlePerfil, openPerfil } =
        useContext(UserContext);

    useEffect(() => {
        renderPublications();
    }, []);

    return (
        <>
            <HeaderDashboard />
            {openPerfil && <ModalPerfilDev />}
            <button onClick={handlePerfil}>perfil</button>
            <Publications></Publications>
        </>
    );
};
