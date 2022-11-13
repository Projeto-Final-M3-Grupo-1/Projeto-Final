import { useContext, useEffect, useState } from "react";
import * as S from "./style";
import { VscTriangleDown } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Providers/UserProvider";
import ModalCreateProject from "../Modal/ModalAddProject";

import ModalNovaPublicacao from "../Modal/ModalNovaPublicacao";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import { AuthContext } from "../../Providers/AuthContext";
import MobileHeader from "./MobileHeader";
import Logo from "../Logo";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ModalAcceptDecline } from "../Modal/ModalAcceptDecline";

export const HeaderDashboard = () => {
  const { dataUser, loadingUser } = useContext(AuthContext);
  const {handleOpenModal} = useContext(ProjectsContext)
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { handlePerfil } = useContext(UserContext);

  const {
    modalChange,
    isAddProjectOpen,
    setIsAddProjectOpen,
  } = useContext(ProjectsContext);

  const [isCreateNewNotice, setIsCreateNewNotice] = useState(false);

  const [userType, setUserType] = useState<string>(dataUser.typeUser);
  const windowSize = useWindowSize();
  const width = windowSize.width;
  const navigate = useNavigate();

  const loadUserType = () => {
    setUserType(dataUser.typeUser);
  };

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

  const handleOpenPublishModal = () => {
    setIsCreateNewNotice(!isCreateNewNotice);
  };

  return (
    <>
      <S.Header>
        {isCreateNewNotice ? (
          <>
            <ModalNovaPublicacao handleIsOpen={handleOpenPublishModal} />
          </>
        ) : null}
        {isAddProjectOpen ? (
          <>
            <ModalCreateProject />
            <S.CloseButton
              className="buttonCreateProject"
              onClick={handleOpenModal}
            />
          </>
        ) : null}
        {isMobile ? (
          <MobileHeader
            navigate={navigate}
            logout={logout}
            userType={userType}
            handleOpenPublishModal={handleOpenPublishModal}
            handleOpenModal={handleOpenModal}
          />
        ) : (
          <S.Nav>
            <Logo />
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
                  <S.Span
                    onClick={() => {
                      navigate("/dashboard");
                    }}
                  >
                    Publicações
                  </S.Span>
                </>
              )}
              {userType === "ong" && (
                <>
                  <S.Span>
                    Projetos
                    <VscTriangleDown />
                    <S.DropdownList>
                      <S.DropdownItem onClick={handleOpenModal}>
                        Criar projeto
                      </S.DropdownItem>
                      <S.DropdownItem
                        onClick={() => {
                          navigate("/dashboard/pendingproject");
                        }}
                      >
                        Meu projeto
                      </S.DropdownItem>
                    </S.DropdownList>
                  </S.Span>
                  <S.Span
                    onClick={() => {
                      navigate("/dashboard");
                    }}
                  >
                    Publicações
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
                          handleOpenPublishModal();
                        }}
                      >
                        Criar nova publicação
                      </S.DropdownItem>
                    </S.DropdownList>
                  </S.Span>
                </>
              )}
            </S.Dropdown>
            <S.User>
              <S.Name>
                {dataUser.typeUser === "ong"
                  ? dataUser.razaoSocial
                  : dataUser.nome}
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
      {modalChange && <ModalAcceptDecline />}
    </>
  );
};
