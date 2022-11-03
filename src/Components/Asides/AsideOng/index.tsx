import { IoHome } from "react-icons/io5";
import { GrUserSettings } from "react-icons/gr";
import { GrAppsRounded } from "react-icons/gr";
import { TbSubtask } from "react-icons/tb";
import { Menu } from "../../Menu";

function MenuAsideOng() {
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
          Cadastrar Projeto
        </a>
        <a>
          <TbSubtask className="IconAside" />
          Projeto
        </a>
      </Menu>
    </>
  );
}

export default MenuAsideOng;
