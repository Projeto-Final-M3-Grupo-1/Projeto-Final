import { useContext, useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

import * as S from "./style";
import { VscTriangleDown } from "react-icons/vsc";
import { AuthContext, iDataUser } from "../../Providers/AuthContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Providers/UserProvider";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import MobileHeader from "./MobileHeader";
import Logo from "../Logo";

export const HeaderDashboard = () => {
  const { dataUser, loadingUser } = useContext(AuthContext);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { handlePerfil } = useContext(UserContext);
  const { handleProjectsToApply, HandleModalProject } = useContext(ProjectsContext);

  const [userType, setUserType] = useState<string>(dataUser.typeUser);

  const loadUserType = () => {
    setUserType(dataUser.typeUser);
  };

  const windowSize = useWindowSize();
  const width = windowSize.width;
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    loadingUser();
    handleResize();
  }, [width]);

  useEffect(() => {
    loadUserType();
  }, [dataUser]);

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
        <MobileHeader
          callback={handleProjectsToApply}
          navigate={navigate}
          logout={logout}
        />
      ) : (
        <S.Nav>
          <Logo></Logo>
          <S.Dropdown>
            {userType === "dev" && (
              <>
                <S.Span>
                  Projetos
                  <VscTriangleDown />
                  <S.DropdownList>
                    <S.DropdownItem
                      onClick={() => {
                        navigate("/dashboard/projectstoapply");
                      }}
                    >
                      Ver todos projetos
                    </S.DropdownItem>
                    <S.DropdownItem
                      onClick={() => {
                        navigate("/dashboard/myproject");
                      }}
                    >
                      Meu projeto
                    </S.DropdownItem>
                  </S.DropdownList>
                </S.Span>
                <S.Span>
                  Publicações
                  <VscTriangleDown />
                  <S.DropdownList>
                    <S.DropdownItem
                      onClick={() => {
                        navigate("/dashboard");
                      }}
                    >
                      Ver todas publicações
                    </S.DropdownItem>
                    <S.DropdownItem
                      onClick={() => {
                        navigate("/dashboard");
                      }}
                    >
                      Ver todas publicações
                    </S.DropdownItem>
                  </S.DropdownList>
                </S.Span>
              </>
            )}
            {userType === "ong" && (
              <>
                <S.Span>
                  Projetos
                  <VscTriangleDown />
                  <S.DropdownList>
                    <S.DropdownItem onClick={HandleModalProject} >Criar projeto</S.DropdownItem>
                    <S.DropdownItem onClick={() => {navigate("/dashboard/pendingproject")}} >Meu projeto</S.DropdownItem>
                  </S.DropdownList>
                </S.Span>
                <S.Span>
                  Publicações
                  <VscTriangleDown />
                  <S.DropdownList>
                    <S.DropdownItem onClick={() => {navigate("/dashboard")}}>Ver todas publicações</S.DropdownItem>
                    <S.DropdownItem>Ver todas publicações</S.DropdownItem>
                  </S.DropdownList>
                </S.Span>
              </>
            )}
            {userType === "admin" && (
              <>
                <S.Span>
                  Projetos
                  <VscTriangleDown />
                  <S.DropdownList>
                    <S.DropdownItem
                      onClick={() => {
                        navigate("/dashboard/projectdevelop");
                      }}
                    >
                      Ver todos projetos em andamento
                    </S.DropdownItem>

                    <S.DropdownItem
                      onClick={() => {
                        navigate("/dashboard/projectpending");
                      }}
                    >
                      Ver solicitações de Projeto
                    </S.DropdownItem>
                    <S.DropdownItem>Meus projetos</S.DropdownItem>
                  </S.DropdownList>
                </S.Span>
                <S.Span>
                  Publicações
                  <VscTriangleDown />
                  <S.DropdownList>
                    <S.DropdownItem
                      onClick={() => {
                        navigate("/dashboard");
                      }}
                    >
                      Ver todas publicações
                    </S.DropdownItem>
                    <S.DropdownItem>Criar nova publicação</S.DropdownItem>
                  </S.DropdownList>
                </S.Span>
              </>
            )}
          </S.Dropdown>
          <S.User>
            <S.Name>
              {dataUser.typeUser == "dev" || dataUser.typeUser == "admin"
                ? dataUser.nome
                : dataUser.typeUser == "ong"
                ? dataUser.razaoSocial
                : null}
            </S.Name>

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
