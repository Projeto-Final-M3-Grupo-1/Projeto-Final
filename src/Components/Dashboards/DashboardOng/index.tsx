import { useContext } from "react";

import { ProjectsContext } from "../../../Providers/ProjectsProvider";

import MenuAsideOng from "../../Asides/AsideOng";
import { StyledLoginButton } from "../../Button";
import { StyledHeader } from "../../Header/header";
import { ModalPerfilOng } from "../../Modal/ModalPerfilOng";

export const DashboardOng = () => {
    const {  showModal, handleNavigate } = useContext(ProjectsContext);
    return (
        <>
            <StyledHeader>
                <h2>Logo</h2>
                <StyledLoginButton onClick={() => handleNavigate("/home")}>
                    Logout
                </StyledLoginButton>
            </StyledHeader>
          { showModal ? (<ModalPerfilOng/>)
                :
            (<MenuAsideOng />)
          }    

           
        </>
    );
};
