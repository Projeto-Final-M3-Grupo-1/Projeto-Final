import { useContext, useEffect, useState } from "react";
import * as S from "./style";
import { VscTriangleDown } from "react-icons/vsc";
import { AuthContext } from "../../../Providers/AuthContext";
import { useNavigate } from "react-router-dom";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import ModalNovaPublicacao from "../../Modal/ModalNovaPublicacao";
import { PendingProject } from "../../AllProjects/Pendings";

const DropdownHeader = () => {
  const { dataUser, loadingUser } = useContext(AuthContext);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { handleModal, HandleModalProject } = useContext(ProjectsContext);

  const width = window.innerWidth;
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    loadingUser();
    handleResize();
  }, []);

  const handleResize = () => {
    if (width <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <S.Header>
      {isMobile ? (
        <S.MobileNav>
          <h2>DeVoluntário</h2>
          <S.MenuHamburger />
          <S.MobileDropdown>
            <S.MobileDropdownList>
              <S.MobileDropdownItem>Meus Projetos</S.MobileDropdownItem>
              <S.MobileDropdownItem onClick={HandleModalProject}>
                Adicionar projeto
              </S.MobileDropdownItem>
              <S.MobileDropdownItem>Ver todas publicações</S.MobileDropdownItem>
              <S.MobileDropdownItem>Adicionar publicação</S.MobileDropdownItem>
              <S.LogoutButton onClick={logout}>Sair</S.LogoutButton>
            </S.MobileDropdownList>
          </S.MobileDropdown>
        </S.MobileNav>
      ) : (
        <S.Nav>
          <h2>DeVoluntário</h2>
          <S.Dropdown>
            <S.Span>
              Projetos
              <VscTriangleDown />
              <S.DropdownList>
                <S.DropdownItem>Meus Projetos</S.DropdownItem>
                <S.DropdownItem onClick={HandleModalProject}>
                  Adicionar projeto
                </S.DropdownItem>
              </S.DropdownList>
            </S.Span>
            <S.Span>
              Publicações
              <VscTriangleDown />
              <S.DropdownList>
                <S.DropdownItem>Ver todas publicações</S.DropdownItem>
                <S.DropdownItem>Adicionar publicação</S.DropdownItem>
              </S.DropdownList>
            </S.Span>
          </S.Dropdown>
          <S.User>
            <S.Name>{dataUser.nome || dataUser.razaoSocial}</S.Name>

            <S.Image
              onClick={handleModal}
              src={dataUser.fotoDePerfil}
              alt="Foto de perfil"
            />
          </S.User>
        </S.Nav>
      )}
    </S.Header>
  );
};
export default DropdownHeader;
