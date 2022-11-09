import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthContext";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import api from "../../../Services/api";
import { StyledButtonCadastro, StyledButtonCta } from "../../Button";
import { ButtonCloseModal } from "../../Button/ButtonCloseModal";
import { StyledBoxModal } from "../ModalLogin/style";
import { useOutSideClick } from "../../../hooks/useOutSideClick";
import {
  StyledModalBody,
  StyledOngDetails,
  StyledProjectsRequests,
  StyledProjectDetails,
  StyledInfo,
  StyledContent,
  StyledButtons,
} from "./style";
import { MdDelete } from "react-icons/md";
import { UserContext } from "../../../Providers/UserProvider";
import { ModalCreateTech } from "../ModalCreateTech";

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

export const ModalPerfilAdmin = () => {
  const { setShowModal, handleNavigate } = useContext(ProjectsContext);
  const { handlePerfil } = useContext(UserContext);

  const { dataUser } = useContext(AuthContext);
  const [projects, setProjetcts] = useState([] as unknown as iState);
  const {
    handleCreateTech,
    createTech,
    requestTechs,
    techs,
    requestDeleteTech,
  } = useContext(UserContext);

  const modalRef = useOutSideClick(() => {
    setShowModal(false);
  });

  useEffect(() => {
    const getProject = () => {
      api
        .get(`/projects`)
        .then((res) => {
          setProjetcts(res.data);
        })
        .catch((error) => console.log(error));
    };
    getProject();
  }, [dataUser]);

  console.log(projects);

  return (
    <>
      <StyledBoxModal>
        <StyledModalBody>
          <ButtonCloseModal callback={() => setShowModal(false)} />

          <StyledContent>
            <StyledOngDetails>
              <div className="profile">
                <caption>
                  <img src={dataUser.fotoDePerfil} alt="" />
                </caption>
                <div className="details">
                  <h3>{dataUser.typeUser == "admin" && dataUser.nome}</h3>
                  <p>Tech Leader Voluntário</p>
                </div>
              </div>
              <StyledProjectDetails>
                <StyledInfo>
                  <p className="label">Nome:</p>
                  <input
                    className="info"
                    value={dataUser.typeUser == "admin" ? dataUser.nome : ""}
                  />
                </StyledInfo>

                <StyledInfo>
                  <p className="label">Usuário:</p>
                  <input
                    className="info"
                    value={dataUser.typeUser == "admin" ? dataUser.nome : ""}
                  />
                </StyledInfo>

                <StyledInfo>
                  <p className="label">Idade:</p>
                  <input className="info" placeholder="insira sua idade" />
                </StyledInfo>

                <StyledProjectsRequests
                  style={{ width: "95%", marginTop: "7px" }}
                >
                  <h2 className="title">Tecnologias que trabalho</h2>
                  <div className="projectInfo">
                    <ul className="techs">
                      {techs.length ? (
                        techs.map((element: any) => {
                          if (element.userId == dataUser.id)
                            return (
                              <li key={element.id}>
                                <h2>{element.tech}</h2>

                                <MdDelete
                                  onClick={() => requestDeleteTech(element.id)}
                                />
                              </li>
                            );
                        })
                      ) : (
                        <h2>Cadastre alguma tecnologia</h2>
                      )}
                    </ul>
                  </div>
                  <StyledButtonCta onClick={handleCreateTech}>
                    Adicionar tecnologias
                  </StyledButtonCta>
                </StyledProjectsRequests>
              </StyledProjectDetails>
            </StyledOngDetails>

            <StyledProjectsRequests>
              <h3 className="title">Solicitações do Projeto</h3>

              <div className="projectInfo">
                <h3 className="name">
                  {dataUser.typeUser == "admin" && dataUser.nome}
                </h3>
                <ul className="projectsInProgress">
                  {projects.length ? (
                    projects.map((element) => {
                      return (
                        <li>
                          <p className="title">{element.title}</p>
                          <button>gerenciar</button>
                        </li>
                      );
                    })
                  ) : (
                    <h1>Nenhum projeto</h1>
                  )}
                </ul>
              </div>
            </StyledProjectsRequests>
            <StyledButtons>
              <StyledButtonCadastro>Salvar</StyledButtonCadastro>
              <StyledButtonCadastro onClick={() => handleNavigate("/home")}>
                Logout
              </StyledButtonCadastro>
            </StyledButtons>
          </StyledContent>
        </StyledModalBody>
      </StyledBoxModal>
      {createTech && <ModalCreateTech />}
    </>
  );
};
