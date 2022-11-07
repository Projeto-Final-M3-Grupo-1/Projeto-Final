import { IoHome } from "react-icons/io5";
import { GrUserSettings } from "react-icons/gr";
import { GrAppsRounded } from "react-icons/gr";
import { TbSubtask } from "react-icons/tb";
import { Menu } from "../../Menu";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { useContext } from "react";

function MenuAsideOng() {
  const { handleModal } = useContext(ProjectsContext);


  return (
    <>
      <Menu>
        <button>
          <IoHome className="IconAside" />
          Home
        </button>
        <button onClick={handleModal}>
          <GrUserSettings className="IconAside" />
          Perfil
        </button>
        <button>
          <GrAppsRounded className="IconAside" />
          Cadastrar Projeto
        </button>
        <button>
          <TbSubtask className="IconAside" />
          Projeto
        </button>
      </Menu>
    </>
  );
}

export default MenuAsideOng;
