import { useContext } from "react";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { StyledLoginButton } from "../../Button";
import { StyledHeader } from "../../Header/header";
import { ModalPerfilDev } from "../../Modal/ModalPerfilDev";
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
            {showModal && <ModalPerfilDev />}
            <button onClick={handleModal}>perfil</button>
        </>
    );
};
