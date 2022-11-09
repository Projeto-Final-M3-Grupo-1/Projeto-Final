import { useContext } from "react";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import { TbArrowBigTop } from "react-icons/tb";
import { StyledFooter, StyledButtonRedes } from "./style";

import {
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiOutlineLinkedin,
} from "react-icons/ai";
import { useParams } from "react-router-dom";

export const Footer = () => {
	const { scrollToTop } = useContext(ProjectsContext);

	return (
		<StyledFooter>
			<div>
				<h5>Contatos</h5>
				<ul>
					<li>
						<AiOutlineInstagram />
						<StyledButtonRedes href="https://www.instagram.com/" target="_blank">@DeVolunteer</StyledButtonRedes>
					</li>
					<li>
						<AiOutlineLinkedin />
						<StyledButtonRedes href="https://www.linkedin.com/" target="_blank">/DeVolunteer</StyledButtonRedes>
					</li>
					<li>
						<AiOutlineFacebook />
						<StyledButtonRedes href="https://pt-br.facebook.com/" target="_blank">/DeVolunteer</StyledButtonRedes>
					</li>
					<TbArrowBigTop className="scrolltop" onClick={scrollToTop}>
						Topo
					</TbArrowBigTop>
				</ul>
			</div>
			<button>Copyright - Todos os Direitos Reservados ao Grupo 1</button>
		</StyledFooter>
	);
};
