import { useState } from "react";
import * as S from "./style";

const MobileHeader = ({ callback, logout }: any) => {
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
						<S.MobileDropdownItem onClick={callback}>
							Ver todos projetos
						</S.MobileDropdownItem>
						<S.MobileDropdownItem>Meu projeto</S.MobileDropdownItem>
						<S.MobileDropdownItem onClick={callback}>
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
