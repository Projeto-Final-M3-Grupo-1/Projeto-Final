import { useContext } from "react";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { StyledLoginButton } from "../../Button";
import { StyledHeader } from "../../Header/header";
import { PerfilDev } from "../../Modal/ModalPerfilDev";
export const DashboardDev = () => {
    const { handleModal, showModal, handleNavigate } =
        useContext(ProjectsContext);
    return (
        <>
            <StyledHeader>
                <h2>Logo</h2>
                <StyledLoginButton onClick={() => handleNavigate("/home")}>
                    Logout
                </StyledLoginButton>
            </StyledHeader>
            {showModal && <PerfilDev />}
            <button onClick={handleModal}>perfil</button>
        </>
    );
};
