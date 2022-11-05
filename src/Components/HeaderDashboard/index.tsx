import * as S from "./style";
import { VscTriangleDown } from "react-icons/vsc";

const DropdownHeader = () => {
	const reload = () => {
		window.location.reload();
	};

	return (
		<S.Header>
			<S.Nav>
				<h2>Logo</h2>
				<S.Dropdown>
					<S.Span>
						Projetos
						<VscTriangleDown />
					</S.Span>
					<S.DropdownList>
						<S.DropdownItem>Ver todos projetos</S.DropdownItem>
						<S.DropdownItem>Adicionar projeto</S.DropdownItem>
					</S.DropdownList>
				</S.Dropdown>

				<button onClick={reload}>Recarregar</button>
			</S.Nav>
		</S.Header>
	);
};
export default DropdownHeader;
