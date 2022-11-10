import { useContext, useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import * as S from "./style";
import { VscTriangleDown } from "react-icons/vsc";
import { AuthContext } from "../../Providers/AuthContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Providers/UserProvider";
import MobileHeader from "./MobileHeader";
import ModalCreateProject from "../Modal/ModalAddProject";
import Logo from "../Logo";

import { ModalAcceptDecline } from "../Modal/ModalAcceptDecline";

import ModalNovaPublicacao from "../Modal/ModalNovaPublicacao";
import { ProjectsContext } from "../../Providers/ProjectsProvider";

export const HeaderDashboard = () => {
    const { dataUser, loadingUser } = useContext(AuthContext);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const { handlePerfil } = useContext(UserContext);

    const { handleProjectsToApply, HandleModalProject, modalChange } =
        useContext(ProjectsContext);

    const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);
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

    const handleOpenModal = () => {
        setIsAddProjectOpen(!isAddProjectOpen);
    };

    const handleOpenPublishModal = () => {
        setIsCreateNewNotice(!isCreateNewNotice);
    };

    return (
        <>
            <S.Header>
                {isCreateNewNotice ? (
                    <>
                        <ModalNovaPublicacao
                            handleIsOpen={handleOpenPublishModal}
                        />
                    </>
                ) : null}
                {isAddProjectOpen ? (
                    <>
                        <ModalCreateProject />
                        <S.CloseButton onClick={handleOpenModal} />
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
                                                    navigate(
                                                        "/dashboard/projectstoapply"
                                                    );
                                                }}
                                            >
                                                Ver todos projetos
                                            </S.DropdownItem>
                                            <S.DropdownItem
                                                onClick={() => {
                                                    navigate(
                                                        "/dashboard/myproject"
                                                    );
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
                                            <S.DropdownItem
                                                onClick={handleOpenModal}
                                            >
                                                Criar projeto
                                            </S.DropdownItem>
                                            <S.DropdownItem
                                                onClick={() => {
                                                    navigate(
                                                        "/dashboard/pendingproject"
                                                    );
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
                                                    navigate(
                                                        "/dashboard/projectsadmin"
                                                    );
                                                }}
                                            >
                                                Ver todos projetos em andamento
                                            </S.DropdownItem>
                                            <S.DropdownItem
                                                onClick={() => {
                                                    navigate(
                                                        "/dashboard/manageproject"
                                                    );
                                                }}
                                            >
                                                Ver solicitações de Projeto
                                            </S.DropdownItem>
                                            <S.DropdownItem
                                                onClick={() => {
                                                    navigate(
                                                        "/dashboard/myproject"
                                                    );
                                                }}
                                            >
                                                Meus projetos
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
