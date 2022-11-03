import { useContext } from "react";
import { ModalRegisterOng } from "../../Components/Modal/ModalRegisterOng";
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
                    <h1>
                        Gostaria de ter um site desenvolvido pela nossa equipe?
                    </h1>
                    <p>
                        Nosso site trabalha com ONGs que já estão em
                        funcionamento e com cadastros validos no Governo
                        Federal, realizamos de forma gratuita o desenvolvimento
                        de sites totalmente únicos e direcionados as
                        necessidades de cada ONG em especial. Para entrar no
                        processo de seleção você precisa ter um cadastro na
                        nossa plataforma e lembrar se que na hora de se
                        registrar todos os campos são obrigatórios. Após o
                        cadastro você marcará uma data para conversar com um de
                        nossos Líderes para que possamos entender o que você
                        precisa, em questão de funcionalidades para seu site e
                        também para avaliarmos a viabilidade do seu projeto.
                        Depois da entrevista concluida e de todo planejamento
                        concluido, seu projeto entrará em uma lista de espera e
                        irá para sorteio. Todos os sorteios são feitos ao vivo
                        pelo youtube e instagram trazendo transparência para
                        nossa plataforma. O numero de sorteados pode variar
                        dependendo da quantidade de projetos que estarão em
                        andamento e a quantidade de voluntários. Não haverá uma
                        data fixa para o sorteio de projetos já que para cada
                        situação o tempo de desenvolvimento pode variar. Dito
                        isto preencha todos os campos de registro, e após criar
                        sua conta é muito importante criar postagens dentro de
                        seu perfil para que os desenvolvedores voluntários se
                        interessem em ajudar seu projeto, poste fotos de seus
                        eventos já realizados, as datas de eventos futuros para
                        que os desenvolvedores possam acompanhar a movimentação
                        do seu projeto e até mesmo ir conhecer. Isto ajudará de
                        forma efetiva no momento da formação de equipes para seu
                        projeto, e quanto mais voluntários se interessarem em
                        lhe ajudar mais facil será o desenvolvimento!
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
