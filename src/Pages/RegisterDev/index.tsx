import { useContext } from "react";
import { Footer } from "../../Components/Footer";
import Headers from "../../Components/Header";
import { ModalRegister } from "../../Components/Modal/ModalRegister";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import { StyledRegisterDev } from "./styles";

export const RegisterDev = () => {
  const { showModal, handleModal } = useContext(ProjectsContext);
  return (
    <>
      <Headers />
      <StyledRegisterDev>
        <h1>O que faz um Desenvolvedor Voluntário na NomeDaEmpresa?</h1>
        <p>
          Somos uma plataforma com o objetivo de ajudar Projetos Sociais e
          desenvolvedores, especialmente o que estão no início da carreira ou
          que gostem de realizar trabalhos voluntários.
        </p>
        <p></p>
        <p>Buscamos desenvolvedores </p>
        {showModal && <ModalRegister />}
        <button onClick={handleModal}>Cadastrar</button>
      </StyledRegisterDev>

      <Footer />
    </>
  );
};
