import { useContext } from "react";
import { ModalRegisterOng } from "../../Components/Modal/ModalRegisterOng";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import { StyledMainPageOng, StyledTextPageOng } from "./style";
import Headers from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { StyledButtonCta, StyledLoginButton } from "../../Components/Button";
import { StyledHeader } from "../../Components/Header/header";

export const RegisterOng = () => {
<<<<<<< HEAD
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
=======
  const { showModal, handleModal } = useContext(ProjectsContext);
  return (
    <>
      {/* <h1>Sou o Registro da Ong</h1>
      {showModal && <ModalRegister />}
      <button onClick={handleModal}>Cadastrar</button> */}
      <Headers />
>>>>>>> d56be835f0fefdfe3c2311fa64f54a624ef2b901
      <StyledMainPageOng>
        <StyledTextPageOng>
          <h1>Gostaria de ter um site desenvolvido pela nossa equipe?</h1>
          <p>
<<<<<<< HEAD
            Nosso site trabalha com ONGs que já estão em funcionamento e com
            cadastros validos no Governo Federal, realizamos de forma gratuita o
            desenvolvimento de sites totalmente únicos e direcionados as
            necessidades de cada ONG em especial. Para entrar no processo de
            seleção você precisa ter um cadastro na nossa plataforma e lembrar
            se que na hora de se registrar todos os campos são obrigatórios.
            Após o cadastro você marcará uma data para conversar com um de
            nossos Líderes para que possamos entender o que você precisa, em
            questão de funcionalidades para seu site e também para avaliarmos a
            viabilidade do seu projeto. Depois da entrevista concluida e de todo
            planejamento concluido, seu projeto entrará em uma lista de espera e
            irá para sorteio. Todos os sorteios são feitos ao vivo pelo youtube
            e instagram trazendo transparência para nossa plataforma. O numero
            de sorteados pode variar dependendo da quantidade de projetos que
            estarão em andamento e a quantidade de voluntários. Não haverá uma
            data fixa para o sorteio de projetos já que para cada situação o
            tempo de desenvolvimento pode variar. Dito isto preencha todos os
            campos de registro, e após criar sua conta é muito importante criar
            postagens dentro de seu perfil para que os desenvolvedores
            voluntários se interessem em ajudar seu projeto, poste fotos de seus
            eventos já realizados, as datas de eventos futuros para que os
            desenvolvedores possam acompanhar a movimentação do seu projeto e
            até mesmo ir conhecer. Isto ajudará de forma efetiva no momento da
            formação de equipes para seu projeto, e quanto mais voluntários se
            interessarem em lhe ajudar mais facil será o desenvolvimento!
=======
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
>>>>>>> d56be835f0fefdfe3c2311fa64f54a624ef2b901
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
