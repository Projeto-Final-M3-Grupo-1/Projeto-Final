import { useContext } from "react";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import { TbArrowBigTop } from "react-icons/tb";
import { StyledFooter } from "./style";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

export const Footer = () => {
  const { scrollToTop } = useContext(ProjectsContext);

  return (
    <StyledFooter>
      <div>
        <h5>Contatos</h5>
        <ul>
          <li>
            <AiOutlineInstagram />
            <p>@DeVoluntario</p>
          </li>
          <li>
            <AiOutlineLinkedin />
            <p>/DeVoluntario</p>
          </li>
          <li>
            <AiOutlineFacebook />
            <p>/DeVoluntario</p>
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
