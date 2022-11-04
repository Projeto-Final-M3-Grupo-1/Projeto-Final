import { useContext } from "react";
import { StyledButtonCta, StyledLoginButton } from "../../Components/Button";
import { Footer } from "../../Components/Footer";
import Headers from "../../Components/Header";
import { StyledHeader } from "../../Components/Header/header";
import { ModalRegister } from "../../Components/Modal/ModalRegister";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import { StyledRegisterDev } from "./styles";

export const RegisterDev = () => {
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
            <StyledRegisterDev>
                <h1>O que faz um Desenvolvedor Voluntário na NomeDaEmpresa?</h1>
                <p>
                    Somos uma plataforma com o objetivo de ajudar Projetos
                    Sociais e desenvolvedores, especialmente o que estão no
                    início da carreira e/ou devs que gostem de realizar
                    trabalhos voluntários.
                </p>
                <p>
                    Buscamos desenvolvedores para projetar sites inteiramente
                    gratuitos para ONGs e/ou Projetos Sociais, auxiliando o
                    programador júnior a incrementar seu portifólio. Trabalhamos
                    de forma dinâmica oferecendo projetos de qualidade,
                    aplicando as melhores práticas do mercado e nossa equipe de
                    desenvolvedores é totalmente capacitada para produzir as
                    aplicações e ajudar seu Projeto Social.
                </p>
                <p>
                    Por meio deste projeto, encontramos uma forma de ajudar
                    outros colegas de profissão, fazendo com que desenvolvedores
                    inexperientes e que estejam com dificuldades de encontrar o
                    primeiro emprego, possam trabalhar suas habilidades
                    técnicas, impulsionar seu portifólio com novos projetos e
                    praticar o bem!.
                </p>
                <p>
                    Devs juniores podem se voluntariar para trabalhar junto com
                    outros colegas e, sob a supervisão da nossa equipe,
                    desenvolver sites completos que vão trazer a prática e
                    experência necessárias para ingressar no mercado de
                    trabalho.
                </p>
                <p>
                    Não somos uma escola de desenvolvimento mas apenas
                    disponibilizamos uma plataforma que possibilite aos
                    desenvolvedores novas oportunidades de praticar o conteúdo
                    técnico, contribuir com projetos sociais e desenvolver seu
                    portifólio. Temos uma equipe que contribui ativamente
                    auxiliando os desenvolvedores, sendo necessário o
                    pré-requisito de já ser um desenvolvedor web para colaborar
                    nos projetos!
                </p>
                <p>
                    Ao final de cada projeto o desenvolvedor receberá uma nota
                    de avaliação do Tech Leader vinculado ao projeto
                    desenvolvido e um comentário detalhado sobre seu trabalho no
                    projeto que será anexado ao seu perfil. Ao finalizar 5
                    projetos dentro de nossa plataforma e se manter dentro dos
                    requisitos mínimos de avaliação, o desenvolvedor receberá o
                    selo da nossa plataforma em seu currículo e este selo terá
                    um QR code, onde os recrutadores poderão acessar seu perfil
                    dentro da plataforma e vizualizar os comentários e
                    descrições detalhadas de seu engajamento em cada projeto
                    concluído. Poderá também ver os comentarios dos Projetos
                    Sociais e das pessoas que utilizaram seu site após a
                    conclusão do projeto!
                </p>
                {showModal && <ModalRegister />}

                <StyledButtonCta onClick={handleModal}>
                    Cadastrar
                </StyledButtonCta>
            </StyledRegisterDev>

            <Footer />
        </>
    );
};
