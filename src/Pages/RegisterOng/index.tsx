import { useContext } from "react";
import { ModalRegister } from "../../Components/Modal/ModalRegister";
import { ProjectsContext } from "../../Providers/ProjectsProvider";

export const RegisterOng = () => {
    const { showModal, handleModal } = useContext(ProjectsContext);
    return (
        <>
            <h1>Sou o Registro da Ong</h1>
            {showModal && <ModalRegister />}
            <button onClick={handleModal}>Cadastrar</button>
        </>
    );
};
