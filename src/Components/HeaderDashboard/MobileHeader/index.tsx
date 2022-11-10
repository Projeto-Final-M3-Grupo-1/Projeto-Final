import { useState } from "react";
import Logo from "../../Logo";
import * as S from "./style";

export interface iMobileProps {
    logout: () => void;
    navigate: (data: string) => void;
    userType: string;
    handleOpenPublishModal: () => void;
    handleOpenModal: () => void;
}

const MobileHeader = ({
    logout,
    navigate,
    userType,
    handleOpenPublishModal,
    handleOpenModal,
}: iMobileProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <S.MobileNav>
            <Logo />
            <S.MenuHamburger onClick={handleOpen} />
            {isOpen ? (
                <S.MobileDropdown>
                    {userType === "admin" ? (
                        <S.MobileDropdownList>
                            <S.MobileDropdownItem
                                onClick={() => {
                                    navigate("/dashboard/projectdevelop");
                                }}
                            >
                                Ver todos projetos em andamento
                            </S.MobileDropdownItem>
                            <S.MobileDropdownItem
                                onClick={() => {
                                    navigate("/dashboard/manageproject");
                                }}
                            >
                                Ver solicitações de Projeto
                            </S.MobileDropdownItem>

                            <S.MobileDropdownItem
                                onClick={() => {
                                    navigate("/dashboard");
                                }}
                            >
                                Ver todas publicações
                            </S.MobileDropdownItem>
                            <S.MobileDropdownItem
                                onClick={() => {
                                    handleOpenPublishModal();
                                }}
                            >
                                Criar nova publicação
                            </S.MobileDropdownItem>
                            <S.LogoutButton onClick={logout}>
                                Sair
                            </S.LogoutButton>
                        </S.MobileDropdownList>
                    ) : null}
                    {userType === "ong" ? (
                        <S.MobileDropdownList>
                            <S.MobileDropdownItem onClick={handleOpenModal}>
                                Criar projeto
                            </S.MobileDropdownItem>
                            <S.MobileDropdownItem
                                onClick={() => {
                                    navigate("/dashboard/pendingproject");
                                }}
                            >
                                Meu projeto
                            </S.MobileDropdownItem>
                            <S.MobileDropdownItem
                                onClick={() => {
                                    navigate("/dashboard");
                                }}
                            >
                                Ver todas publicações
                            </S.MobileDropdownItem>
                            <S.LogoutButton onClick={logout}>
                                Sair
                            </S.LogoutButton>
                        </S.MobileDropdownList>
                    ) : null}
                    {userType === "dev" ? (
                        <S.MobileDropdownList>
                            <S.MobileDropdownItem
                                onClick={() => {
                                    navigate("/dashboard/projectstoapply");
                                }}
                            >
                                Ver todos projetos
                            </S.MobileDropdownItem>
                            <S.MobileDropdownItem
                                onClick={() => {
                                    navigate("/dashboard/myproject");
                                }}
                            >
                                Meu projeto
                            </S.MobileDropdownItem>
                            <S.MobileDropdownItem
                                onClick={() => {
                                    navigate("/dashboard");
                                }}
                            >
                                Ver todas publicações
                            </S.MobileDropdownItem>
                            <S.LogoutButton onClick={logout}>
                                Sair
                            </S.LogoutButton>
                        </S.MobileDropdownList>
                    ) : null}
                </S.MobileDropdown>
            ) : null}
        </S.MobileNav>
    );
};

export default MobileHeader;
