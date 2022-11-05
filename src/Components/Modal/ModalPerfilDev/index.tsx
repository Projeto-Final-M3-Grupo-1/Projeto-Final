// import { UserContext } from "../../../Providers/UserProvider";
import { StyledPerfilDev } from "./style";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthContext";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { useOutSideClick } from "../../../hooks/useOutSideClick";

export const PerfilDev = () => {
    const { setShowModal } = useContext(ProjectsContext);
    const { dataUser } = useContext(AuthContext);

    const modalRef = useOutSideClick(() => {
        setShowModal(null)
    })

    return (
        <StyledPerfilDev ref={modalRef}> 
            <img src={dataUser.fotoDePerfil} alt="" />
            <input value={dataUser.github} />
            <input value={dataUser.linkedin} />
            <input value={dataUser.nome} />
        </StyledPerfilDev>
    );
};
