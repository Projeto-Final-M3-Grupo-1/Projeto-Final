import { UserContext } from "../../../Providers/UserProvider";
import { StyledPerfilDev } from "./style";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthContext";

export const PerfilDev = () => {
    const { dataUser } = useContext(AuthContext);

    return (
        <StyledPerfilDev>
            <img src={dataUser.fotoDePerfil} alt="" />
            <input value={dataUser.github} />
            <input value={dataUser.linkedin} />
            <input value={dataUser.nome} />
        </StyledPerfilDev>
    );
};
