import { useContext } from "react";
import { ModalRegister } from "../../Components/Modal/ModalRegister";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import { StyledMainPageOng, StyledTextPageOng } from "./style";
import Headers from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { StyledButtonCta } from "../../Components/Button";

export const RegisterOng = () => {
  const { showModal, handleModal } = useContext(ProjectsContext);
  return (
    <>
      {/* <h1>Sou o Registro da Ong</h1>
      {showModal && <ModalRegister />}
      <button onClick={handleModal}>Cadastrar</button> */}
      <Headers />
      <StyledMainPageOng>
        <StyledTextPageOng>
          <h1>Gostaria de ter um site desenvolvido pela nossa equipe?</h1>
          <p>
            Nossa plataforma trabalha em conjunto com organizações filantrópicas
            que estejam em pleno funcionamento (ONGs e Projetos Sociais) e
            realizamos, de forma gratuita, o desenvolvimento de sites únicos e
            direcionados às necessidades de cada instituição parceira.
          </p>
          <p>
            Desta forma, nossa plataforma faz a conexão entre a instituição
            filantrópica e o desenvolvedor, para que o seu projeto seja
            desenvolvido de forma dinâmica, por meio das melhores práticas e com
            um resultado de excelência.
          </p>
          <p>
            Para ingressar no processo de seleção como instituição filantrópica
            é muito simples, basta seguir alguns passos: a) realizar um cadastro
            na nossa plataforma; b) agendar um horário para conversar com a
            nossa equipe técnica e passar as necessidades da sua organização.
          </p>
        </StyledTextPageOng>
        <StyledButtonCta>Quero fazer o bem</StyledButtonCta>
      </StyledMainPageOng>
      <Footer />
    </>
  );
};
