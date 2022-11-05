import { useContext, useEffect } from "react";
import * as S from "./style";
import { VscTriangleDown } from "react-icons/vsc";
import { AuthContext } from "../../Providers/AuthContext";

export const DropdownHeader = () => {
    const { dataUser, loadingUser } = useContext(AuthContext);

    console.log(dataUser);

    useEffect(() => {
        loadingUser();
    }, []);

    return (
        <S.Header>
            <S.Nav>
                <h2>Logo</h2>
                <S.Dropdown>
                    <S.Span>
                        Projetos
                        <VscTriangleDown />
                        <S.DropdownList>
                            <S.DropdownItem>Ver todos projetos</S.DropdownItem>
                            <S.DropdownItem>Adicionar projeto</S.DropdownItem>
                        </S.DropdownList>
                    </S.Span>
                    <S.Span>
                        Publicações
                        <VscTriangleDown />
                        <S.DropdownList>
                            <S.DropdownItem>
                                Ver todas publicações
                            </S.DropdownItem>
                            <S.DropdownItem>
                                Adicionar publicação
                            </S.DropdownItem>
                        </S.DropdownList>
                    </S.Span>
                </S.Dropdown>
                <S.User>
                    <S.Name>{dataUser.nome}</S.Name>
                    <S.Image src={dataUser.fotoDePerfil} alt="Foto de perfil" />
                </S.User>
            </S.Nav>
        </S.Header>
    );
};
export default DropdownHeader;
