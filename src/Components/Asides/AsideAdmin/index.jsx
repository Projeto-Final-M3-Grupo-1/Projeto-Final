import { IoHome } from "react-icons/io5";
import { GrUserSettings } from "react-icons/gr";
import { GrAppsRounded } from "react-icons/gr";
import { TbSubtask } from "react-icons/tb";
import { TfiAngleLeft } from "react-icons/tfi";
import { useContext } from "react";
import { Menu } from "../../Menu";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";

function MenuAsideAdmin() {
  const { MoveAsideMenu, showAside } = useContext(ProjectsContext);
  return (
    <>
      <Menu classMovieAside={showAside}>
        <a>
          <IoHome className="IconAside" />
          Home
        </a>
        <a>
          <GrUserSettings className="IconAside" />
          Perfil
        </a>
        <a>
          <GrAppsRounded className="IconAside" />
          Projetos
        </a>
        <a>
          <TbSubtask className="IconAside" />
          Criar Tarefas
        </a>
        <a>
          <TbSubtask className="IconAside" />
          Criar Post
        </a>
        <TfiAngleLeft className="btnAside" onClick={MoveAsideMenu}>
          Teste
        </TfiAngleLeft>
      </Menu>
    </>
  );
}

export default MenuAsideAdmin;
