import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import { StyledHeader } from "./header";

function Headers() {
  // const { menu, setMenu } = useContext(ProjectsContext);
  // const handleClick = () => {
  //     return !menu ? setMenu(true) : setMenu(false);
  // };
  return (
    <StyledHeader>
      <h2>Logo</h2>
      {/* {menu && (
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
                </nav>
            )}
            <button onClick={handleClick}></button> */}
      <button type="button">Lofffgin</button>
    </StyledHeader>
  );
}

export default Headers;
