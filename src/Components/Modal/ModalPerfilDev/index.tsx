import { UserContext } from "../../../Providers/UserProvider";
import { StyledPerfilDev } from "./style";
import { useContext } from "react";

export const PerfilDev = () => {
    const { user } = useContext(UserContext);
    console.log(user);
    return (
        <StyledPerfilDev>
            <img src={user.fotoDePerfil} alt="" />
            <a href={user.github}>{user.github}</a>
            <a href={user.linkedin}>{user.linkedin}</a>
            <input value={user.nome} />
        </StyledPerfilDev>
    );
};
