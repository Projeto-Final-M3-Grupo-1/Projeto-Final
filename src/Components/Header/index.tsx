import React from "react";
import { useContext } from "react";
import { Link } from "react-scroll";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import { ModalLogin } from "../Modal/ModalLogin";
import { StyledHeader } from "./header";
import { StyledLoginButton } from "../Button";

function Headers() {
  const { handleModal, showModal } = useContext(ProjectsContext);

  return (
    <>
      <StyledHeader>
        <h2>Logo</h2>
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
