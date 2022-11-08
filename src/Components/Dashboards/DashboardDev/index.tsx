import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../../Providers/UserProvider";
import Publications from "../../Publication";

import { ModalPerfilDev } from "../../Modal/ModalPerfilDev";

import { DropdownHeaderDev } from "../../HeaderDashboard/HeaderDashboardDev";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { ProjectsToApply } from "../../ProjectsToApply";
import { MyProject } from "../../MyProjectDev";
import { CircularProgress } from "@mui/material";
import { StyledBoxModal } from "../../Modal/ModalLogin/style";
import { Outlet } from "react-router-dom";

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

            <Outlet />

            {/* {render == "myProject" ? (
                <MyProject />
            ) : render == "projectsToApply" ? (
                <ProjectsToApply />
            ) : render == "publications" ? (
                <Publications />
            ) : (
                <StyledBoxModal>
                    <CircularProgress />
                </StyledBoxModal>
            )} */}
        </>
    );
};
