import { useContext, useEffect } from "react";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { UserContext } from "../../../Providers/UserProvider";
import { StyledLoginButton } from "../../Button";
import { StyledHeader } from "../../Header/header";
import { PerfilDev } from "../../Modal/ModalPerfilDev";
import Publications from "../../Publication";
export const DashboardDev = () => {
    const { handleModal, showModal, handleNavigate } =
        useContext(ProjectsContext);
    const { renderPublications } = useContext(UserContext);

    useEffect(() => {
       renderPublications();
    }, [])

    return (
        <>
            <StyledHeader>
                <h2>Logo</h2>
                <StyledLoginButton onClick={() => handleNavigate("/home")}>
                    Logout
                </StyledLoginButton>
            </StyledHeader>
            {showModal && <PerfilDev />}
            <p>ESSA PAGINA</p>
            <button onClick={handleModal}>perfil</button>
            <Publications></Publications>
        </>
    );
};
