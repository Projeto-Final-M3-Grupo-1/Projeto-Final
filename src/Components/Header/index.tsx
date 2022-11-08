import { useContext } from "react";
import { Link } from "react-scroll";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import { ModalLogin } from "../Modal/ModalLogin";
import { StyledHeader, Logo } from "./header";
import { StyledLoginButton } from "../Button";
import { useNavigate } from "react-router-dom";

function Headers() {
  const { handleModal, showModal } = useContext(ProjectsContext);
  const navigate = useNavigate();

  return (
    <>
      <StyledHeader>
        <Logo>
          <h3>De</h3>
          <h4>Volunteer</h4>
        </Logo>
        <nav>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="/home"
            className="links--menu_header"
            href="/git"
            onClick={() => navigate("/home")}
          >
            Início
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="aboutUs"
            className="links--menu_header"
          >
            Sobre nós
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="projects"
            className="links--menu_header"
          >
            Projetos
          </Link>
        </nav>
        <StyledLoginButton onClick={handleModal} type="button">
          Login
        </StyledLoginButton>
      </StyledHeader>
      {showModal && <ModalLogin />}
    </>
  );
}
export default Headers;
