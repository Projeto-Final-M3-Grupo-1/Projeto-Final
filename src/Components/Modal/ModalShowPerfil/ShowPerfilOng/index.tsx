import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../Providers/UserProvider";
import api from "../../../../Services/api";
import { ButtonCloseModal } from "../../../Button/ButtonCloseModal";
import { StyledForm } from "../../../Form/styled";
import { StyledBoxModal } from "../../ModalLogin/style";
import { StyledOngOnProject } from "./style";

export const ShowPerfilOng = () => {
    const { handlePerfilOngOnProject } = useContext(UserContext);
    const [ongPerfil, setOngPerfil] = useState<any>({});

    useEffect(() => {
        api.get(`/users/${localStorage.ongId}`, {
            headers: {
                authorization: localStorage.token,
            },
        }).then((res) => setOngPerfil(res.data));
    }, []);
    console.log(ongPerfil);
    return (
        <StyledBoxModal>
            <StyledOngOnProject>
                <ButtonCloseModal callback={handlePerfilOngOnProject} />
                <img src={ongPerfil.fotoDePerfil} alt="" />
                <h2>{ongPerfil.razaoSocial}</h2>
                <p>{ongPerfil.descricaoDaOng}</p>
            </StyledOngOnProject>
        </StyledBoxModal>
    );
};
