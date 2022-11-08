import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthContext";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import api from "../../../Services/api";
import { StyledButtonCadastro } from "../../Button";
import { ButtonCloseModal } from "../../Button/ButtonCloseModal";
import { StyledBoxModal } from "../ModalLogin/style";
import { useOutSideClick } from "../../../hooks/useOutSideClick";
import {
    StyledModalBody,
    StyledOngDetails,
    StyledProjectsRequests,
    StyledProjectDetails,
    StyledInfo,
    StyledDescription,
    StyledContent,
    StyledButtons,
} from "./style";

interface iState {
    length: any;
    map(arg0: (elem: any) => void): import("react").ReactNode;
    projects: any;
    title: string;
    description: string;
    id: number;
    user: number;
    setProjects: any;
}

export const ModalPerfilOng = () => {
    const { setShowModal, handleNavigate, projects, requestProjects } =
        useContext(ProjectsContext);
    const { dataUser } = useContext(AuthContext);

    const modalRef = useOutSideClick(() => {
        setShowModal(null);
    });

    useEffect(() => {
        requestProjects();
    }, []);


    console.log(projects);

    return (
        <>
            <StyledBoxModal>
                <StyledModalBody ref={modalRef}>
                    <ButtonCloseModal callback={() => setShowModal(false)} />

                    <StyledContent>
                        <StyledOngDetails>
                            <div className="profile">
                                <caption>
                                    <img src={dataUser.fotoDePerfil} alt="" />
                                </caption>
                                <div className="details">
                                    <h3>{dataUser.razaoSocial}</h3>
                                    <p>ONG</p>
                                </div>
                            </div>
                            <StyledProjectDetails>
                                <StyledInfo>
                                    <p className="label">Nome do projeto</p>
                                    <input
                                        className="info"
                                        value={dataUser.razaoSocial}
                                    />
                                </StyledInfo>

                                <StyledInfo>
                                    <p className="label">Razão Social</p>
                                    <input
                                        className="info"
                                        value={dataUser.razaoSocial}
                                    />
                                </StyledInfo>

                                <StyledInfo>
                                    <p className="label">CNPJ</p>
                                    <input
                                        className="info"
                                        value={dataUser.cnpj}
                                    />
                                </StyledInfo>

                                <StyledDescription>
                                    <p>O que fazemos</p>
                                    <textarea placeholder="Escreva sua descrição">
                                        {dataUser.description}
                                    </textarea>
                                </StyledDescription>
                            </StyledProjectDetails>
                        </StyledOngDetails>

                        <StyledProjectsRequests>
                            <h3 className="title">Solicitações do Projeto</h3>

                            <div className="projectInfo">
                                <h3 className="name">
                                    {dataUser.nomeDoResponsavel}
                                </h3>
                                {projects.length ? (
                                    projects.map((element: any) => {
                                        if (element.ongId === dataUser.id) {
                                            return (
                                                <>
                                                    <p className="title">
                                                        {element.title}
                                                    </p>
                                                    <p className="description">
                                                        {element.description}
                                                    </p>
                                                </>
                                            );
                                        }
                                    })
                                ) : (
                                    <h1>Nenhum projeto</h1>
                                )}

                                <StyledButtonCadastro>
                                    Criar projeto
                                </StyledButtonCadastro>
                            </div>
                        </StyledProjectsRequests>
                        <StyledButtons>
                            <StyledButtonCadastro>Salvar</StyledButtonCadastro>
                            <StyledButtonCadastro
                                onClick={() => handleNavigate("/home")}
                            >
                                Logout
                            </StyledButtonCadastro>
                        </StyledButtons>
                    </StyledContent>
                </StyledModalBody>
            </StyledBoxModal>
        </>
    );
};
