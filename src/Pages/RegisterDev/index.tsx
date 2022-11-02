import { useContext } from "react";
import { ModalRegister } from "../../Components/Modal/ModalRegister";
import { ProjectsContext } from "../../Providers/ProjectsProvider";

export const RegisterDev = () => {
    const { showModal, handleModal } = useContext(ProjectsContext);
    return (
        <>
            <h1>Sou o Registro do dev</h1>
            {showModal && <ModalRegister />}
            <button onClick={handleModal}>Cadastrar</button>
        </>
    );
};
