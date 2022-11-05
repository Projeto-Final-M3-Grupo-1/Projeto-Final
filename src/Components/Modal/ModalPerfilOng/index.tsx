import { elementAcceptingRef } from "@mui/utils";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthContext";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { UserContext } from "../../../Providers/UserProvider";
import api from "../../../Services/api";
import { StyledButtonCadastro } from "../../Button";
import { ButtonCloseModal } from "../../Button/ButtonCloseModal";
import { StyledBoxModal } from "../ModalLogin/style";
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
    const { handleModal, handleNavigate } = useContext(ProjectsContext);
    const { dataUser } = useContext(AuthContext);
    const { user } = useContext(UserContext);
    const [projects, setProjetcts] = useState([] as unknown as iState);

    useEffect(() => {
        const getProject = () => {
            api.get(`/projects`)
                .then((res) => {
                    setProjetcts(res.data);
                })
                .catch((error) => console.log(error));
        };
        getProject();
    }, []);

    console.log(projects);

    return (
        <>
            <StyledBoxModal>
                <StyledModalBody>
                    <ButtonCloseModal callback={handleModal} />

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
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Etiam eu lorem sit amet
                                        odio ullamcorper pretium. Suspendisse
                                        sed iaculis massa. Vivamus varius semper
                                        posuere. Proin aliquet vel est id
                                        ultrices. Vestibulum quis pharetra
                                        lectus. Praesent vel nulla arcu. Proin
                                        eget sodales odio.
                                    </p>
                                </StyledDescription>
                            </StyledProjectDetails>
                        </StyledOngDetails>

                        <StyledProjectsRequests>
                            <h3 className="title">Solicitações do Projeto</h3>

                            <div className="projectInfo">
                                <h3 className="name">{dataUser.razaoSocial}</h3>
                                {projects.length ? (
                                    projects.map((element) => {
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
                                    <h1>Não Rolou</h1>
                                )}

                                <StyledButtonCadastro>
                                    Ver mais
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
