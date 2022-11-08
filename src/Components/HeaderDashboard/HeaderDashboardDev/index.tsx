import { useContext, useEffect, useState } from "react";
import * as S from "./style";
import { VscTriangleDown } from "react-icons/vsc";
import { AuthContext } from "../../../Providers/AuthContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Providers/UserProvider";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import Logo from "../../Logo";

export const DropdownHeaderDev = () => {
  const { dataUser, loadingUser } = useContext(AuthContext);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { handlePerfil } = useContext(UserContext);
  const { setRender, handleProjectsToApply } = useContext(ProjectsContext);

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
          <Logo />
          <S.MenuHamburger />
          <S.MobileDropdown>
            <S.MobileDropdownList>
              <S.MobileDropdownItem onClick={handleProjectsToApply}>
                Ver todos projetos
              </S.MobileDropdownItem>
              <S.MobileDropdownItem>Meu projeto</S.MobileDropdownItem>
              <S.MobileDropdownItem onClick={handleProjectsToApply}>
                Ver todas publicações
              </S.MobileDropdownItem>
              <S.LogoutButton onClick={logout}>Sair</S.LogoutButton>
            </S.MobileDropdownList>
          </S.MobileDropdown>
        </S.MobileNav>
      ) : (
        <S.Nav>
          <Logo />
          <S.Dropdown>
            <S.Span>
              Projetos
              <VscTriangleDown />
              <S.DropdownList>
                <S.DropdownItem
                  onClick={() => navigate("/dashboard/projectstoapply")}
                >
                  Ver todos projetos
                </S.DropdownItem>
                <S.DropdownItem
                  onClick={() => navigate("/dashboard/myproject")}
                >
                  Meu projeto
                </S.DropdownItem>
              </S.DropdownList>
            </S.Span>
            <S.Span>
              Publicações
              <VscTriangleDown />
              <S.DropdownList>
                <S.DropdownItem onClick={() => navigate("/dashboard")}>
                  Ver todas publicações
                </S.DropdownItem>
                <S.DropdownItem onClick={handleProjectsToApply}>
                  Ver todas publicações
                </S.DropdownItem>
              </S.DropdownList>
            </S.Span>
          </S.Dropdown>
          <S.User>
            <S.Name>{dataUser.nome || dataUser.razaoSocial}</S.Name>

            <S.Image
              onClick={handlePerfil}
              src={dataUser.fotoDePerfil}
              alt="Foto de perfil"
            />
          </S.User>
        </S.Nav>
      )}
    </S.Header>
  );
};
