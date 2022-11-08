import { useContext } from "react";
import { ModalRegisterOng } from "../../Components/Modal/ModalRegisterOng";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import { StyledMainPageOng, StyledTextPageOng } from "./style";
import Headers from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { StyledButtonCta, StyledLoginButton } from "../../Components/Button";
import { StyledHeader } from "../../Components/Header/header";

export const RegisterOng = () => {
  const { showModal, handleModal, handleNavigate } =
    useContext(ProjectsContext);
  return (
    <>
      <StyledHeader>
        <h2>Logo</h2>
        <StyledLoginButton onClick={() => handleNavigate("/home")}>
          Voltar
        </StyledLoginButton>
      </StyledHeader>
      <StyledMainPageOng>
        <StyledTextPageOng>
          <h1>Gostaria de ter um site desenvolvido pela nossa equipe?</h1>
          <p>
            Nossa plataforma trabalha em conjunto com organizações filantrópicas
            que estejam em funcionamento regular (ONGs e Projetos Sociais) para
            auxiliar, de forma gratuita, o desenvolvimento de sites únicos e
            direcionados às necessidades de cada instituição parceira. Desta
            forma, nossa plataforma faz a conexão entre a instituição
            filantrópica e o desenvolvedor, para que o seu projeto seja
            desenvolvido de forma dinâmica, por meio das melhores práticas e com
            um resultado de excelência.
          </p>
          <p>
            Para ingressar no processo de seleção como instituição filantrópica
            na nossa plataforma é muito simples, basta se cadastrar, agendar um
            horário para conversar com nossa equipe técnica e passar as
            necessidades da sua organização.
          </p>
          <p>
            Após o cumprimento das etapas de cadastro e entrevista, seu projeto
            será disponibilizado em nossa plataforma e os desenvolvedores
            cadastrados vão poder aplicar para integrar a equipe que será
            responsável pelo desenvolvimento do projeto.
          </p>
          <p>Então vamos nessa? </p>
          <p>
            Para que seu projeto tenha visibilidade em nossa plataforma e para
            que ele possa despertar o interesse dos desenvolvedores cadastrados,
            é muito importante criar postagens dentro do seu perfil e deixá-lo
            sempre atualizado. Isto ajudará de forma efetiva no momento da
            formação de equipes para seu projeto, pois quanto mais voluntários
            se interessarem pelo seu projeto, mais fácil será o desenvolvimento!
          </p>
        </StyledTextPageOng>
        <StyledButtonCta onClick={handleModal}>
          Quero fazer o bem
        </StyledButtonCta>
      </StyledMainPageOng>
      <Footer />
      {showModal && <ModalRegisterOng />}
    </>
  );
};
