import { useState } from "react";
import * as S from "./style";

const MobileHeader = ({ logout, navigate }: any) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <S.MobileNav>
            <h2>Logo</h2>
            <S.MenuHamburger onClick={handleOpen} />
            {isOpen ? (
                <S.MobileDropdown>
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
                        <S.LogoutButton onClick={logout}>Sair</S.LogoutButton>
                    </S.MobileDropdownList>
                </S.MobileDropdown>
            ) : null}
        </S.MobileNav>
    );
};

export default MobileHeader;
