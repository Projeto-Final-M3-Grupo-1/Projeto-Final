import { useContext } from "react";
import { ModalRegisterOng } from "../../Components/Modal/ModalRegisterOng";
import { ProjectsContext } from "../../Providers/ProjectsProvider";

export const RegisterOng = () => {
  const { showModal, handleModal } = useContext(ProjectsContext);
  return (
    <>
      <h1>Sou o Registro da Ong</h1>
      {showModal && <ModalRegisterOng />}
      <button onClick={handleModal}>Cadastrar</button>
    </>
  );
};
