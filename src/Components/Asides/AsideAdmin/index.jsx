import { IoHome } from "react-icons/io5";
import { GrUserSettings } from "react-icons/gr";
import { GrAppsRounded } from "react-icons/gr";
import { TbSubtask } from "react-icons/tb";
import { Menu } from "../../Menu";

function MenuAsideAdmin() {
  return (
    <>
      <Menu>
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
          Meus Projetos
        </a>
        <a>
          <TbSubtask className="IconAside" />
          Meus Projetos
        </a>
      </Menu>
    </>
  );
}

export default MenuAsideAdmin;
