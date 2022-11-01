import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./header";

function Headers() {
  return (
    <StyledHeader>
      <h2>Logo</h2>
      <nav>
        <Link className="links--menu_header" to="/home">
          Início
        </Link>
        <Link className="links--menu_header" to="/sobre-nos">
          Sobre nós
        </Link>
        <Link className="links--menu_header" to="/projetos">
          Projetos
        </Link>
        <Link className="links--menu_header" to="/contato">
          Contato
        </Link>
        <button type="button">Login</button>
      </nav>
    </StyledHeader>
  );
}

export default Headers;
