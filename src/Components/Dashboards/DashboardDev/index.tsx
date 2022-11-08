
import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../../Providers/UserProvider";
import Publications from "../../Publication";

import { ModalPerfilDev } from "../../Modal/ModalPerfilDev";

import { DropdownHeaderDev } from "../../HeaderDashboard/HeaderDashboardDev";
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
            <DropdownHeaderDev />
            {openPerfil && <ModalPerfilDev />}

            {!render ? <Publications /> : <ProjectsToApply />}
        </>
    );
};
