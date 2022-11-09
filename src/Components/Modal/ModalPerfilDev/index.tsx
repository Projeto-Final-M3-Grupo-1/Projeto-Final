import { useContext, useEffect, useState } from "react";
import { useOutSideClick } from "../../../hooks/useOutSideClick";
import { AuthContext } from "../../../Providers/AuthContext";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { UserContext } from "../../../Providers/UserProvider";
import api from "../../../Services/api";
import { StyledButtonCadastro, StyledButtonCta } from "../../Button";
import { ButtonCloseModal } from "../../Button/ButtonCloseModal";
import { ModalCreateTech } from "../ModalCreateTech";
import { StyledBoxModal } from "../ModalLogin/style";
import { MdDelete } from "react-icons/md";
import { useForm } from "react-hook-form";

import {
  StyledModalBody,
  StyledOngDetails,
  StyledProjectsRequests,
  StyledProjectDetails,
  StyledInfo,
  StyledContent,
  StyledButtons,
} from "../ModalPerfilOng/style";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaEditePerfil } from "../../../Services/validation/createUser.validation";

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
interface IEditPerfil {}
export const ModalPerfilDev = () => {
  const { setShowModal, handleNavigate } = useContext(ProjectsContext);
  const { handlePerfil, setOpenPerfil } = useContext(UserContext);
  const {
    handleSubmit,
    register,
    formState: {
      errors: { nome, email, github, linkedin },
    },
  } = useForm({
    resolver: yupResolver(schemaEditePerfil),
  });

  const { dataUser } = useContext(AuthContext);
  const { onSubmitEditPerfil } = useContext(UserContext);
  const {
    handleCreateTech,
    createTech,
    requestTechs,
    techs,
    requestDeleteTech,
  } = useContext(UserContext);

  const [projects, setProjetcts] = useState([] as unknown as iState);

  useEffect(() => {
    const getProject = () => {
      api
        .get(`/techs`)
        .then((res) => {
          setProjetcts(res.data);
        })
        .catch((error) => console.log(error));
    };
    getProject();
  }, []);
  useEffect(() => {
    requestTechs();
  }, []);

  return (
    <>
      <StyledBoxModal>
        <StyledModalBody>
          <ButtonCloseModal callback={handlePerfil} />

          <StyledContent>
            <StyledOngDetails>
              <div className="profile">
                <caption>
                  <img src={dataUser.fotoDePerfil} alt="" />
                </caption>
                <div className="details">
                  <h3>{dataUser.typeUser == "dev" && dataUser.nome}</h3>
                  <p>Dev Voluntário</p>
                </div>
              </div>
              <StyledProjectDetails>
                <form
                  className="formEditPerfil"
                  onSubmit={handleSubmit(onSubmitEditPerfil)}
                >
                  <StyledInfo>
                    <p className="label">Nome</p>
                    <input
                      {...register("nome")}
                      className="info"
                      defaultValue={
                        dataUser.typeUser == "dev" ? dataUser.nome : ""
                      }
                    ></input>
                  </StyledInfo>

                  <StyledInfo>
                    <p className="label">E-mail</p>
                    <input
                      {...register("email")}
                      className="info"
                      defaultValue={dataUser.email}
                    ></input>
                  </StyledInfo>

                  <StyledInfo>
                    <p className="label">GitHub</p>
                    <input
                      {...register("github")}
                      className="info"
                      defaultValue={
                        dataUser.typeUser == "dev" ? dataUser.github : ""
                      }
                    ></input>
                  </StyledInfo>

                  <StyledInfo>
                    <p className="label">Linkedin</p>
                    <input
                      {...register("linkedin")}
                      className="info"
                      defaultValue={
                        dataUser.typeUser == "dev" ? dataUser.linkedin : ""
                      }
                    ></input>
                  </StyledInfo>
                  <StyledButtonCadastro type="submit">
                    Salvar
                  </StyledButtonCadastro>
                </form>
              </StyledProjectDetails>
            </StyledOngDetails>

            <StyledProjectsRequests>
              <h2 className="title">Tecnologias que trabalho</h2>
              <div className="projectInfo">
                <ul className="techs">
                  {techs.length ? (
                    techs.map((element: any) => {
                      if (element.userId === dataUser.id) {
                        return (
                          <li key={element.id}>
                            <h2>{element.tech}</h2>

                            <MdDelete
                              onClick={() => requestDeleteTech(element.id)}
                            />
                          </li>
                        );
                      }
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
            <StyledButtons>
              <StyledButtonCadastro
                onClick={() => {
                  setOpenPerfil(false);
                  handleNavigate("/home");
                }}
              >
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
