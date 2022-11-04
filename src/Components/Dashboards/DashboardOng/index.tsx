import { useContext } from "react";

import { ProjectsContext } from "../../../Providers/ProjectsProvider";

import MenuAsideOng from "../../Asides/AsideOng";
import { StyledLoginButton } from "../../Button";
import { StyledHeader } from "../../Header/header";

export const DashboardOng = () => {
    const { handleNavigate } = useContext(ProjectsContext);
    return (
        <>
            <StyledHeader>
                <h2>Logo</h2>
                <StyledLoginButton onClick={() => handleNavigate("/home")}>
                    Logout
                </StyledLoginButton>
            </StyledHeader>
            <MenuAsideOng />
            <h1>eu sou a das do ong</h1>
        </>
    );
};
