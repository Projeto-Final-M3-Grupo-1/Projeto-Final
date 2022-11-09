import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthContext";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import api from "../../../Services/api";
import { StyledButtonCadastro } from "../../Button";
import { ButtonCloseModal } from "../../Button/ButtonCloseModal";
import { StyledBoxModal } from "../ModalLogin/style";
import { useOutSideClick } from "../../../hooks/useOutSideClick";
import { useForm } from "react-hook-form";
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

import { schemaOngDescription } from "../../../Services/validation/createUser.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../../Providers/UserProvider";
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
export interface IUserRegister {
  descricaoDaOng: string;
  error?: {
    descricaoDaOng: string;
  };
}
export const ModalPerfilOng = () => {
  const { dataUser } = useContext(AuthContext);
  const { onSubmitEditOngPerfil, handlePerfil } = useContext(UserContext);
  const { setShowModal, handleNavigate } = useContext(ProjectsContext);
  const [projects, setProjetcts] = useState([] as unknown as iState);
  const {
    handleSubmit,
    register,
    formState: {
      errors: { descricaoDaOng, telefone },
    },
  } = useForm({
    resolver: yupResolver(schemaOngDescription),
  });
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
  }, []);
  console.log(dataUser);
  return (
    <>
      <StyledBoxModal>
        <StyledModalBody ref={modalRef}>
          <ButtonCloseModal callback={handlePerfil} />
          <StyledContent>
            <StyledOngDetails>
              <div className="profile">
                <caption>
                  <img src={dataUser.fotoDePerfil} alt="foto de perfil" />
                </caption>
                <div className="details">
                  <h3>{dataUser.typeUser == "ong" && dataUser.razaoSocial}</h3>
                  <p>ONG</p>
                </div>
              </div>
              <StyledProjectDetails>
                <StyledInfo>
                  <p className="label">Razão Social</p>
                  <input
                    className="info"
                    value={
                      dataUser.typeUser == "ong" ? dataUser.razaoSocial : ""
                    }
                  />
                </StyledInfo>
                <StyledInfo>
                  <p className="label">CNPJ</p>
                  <input
                    className="info"
                    value={dataUser.typeUser == "ong" ? dataUser.cnpj : ""}
                  />
                </StyledInfo>
                <StyledDescription>
                  <form onSubmit={handleSubmit(onSubmitEditOngPerfil)}>
                    <p className="label">Telefone</p>
                    <textarea className="telephone" {...register("telefone")}>
                      {dataUser.typeUser == "ong" && dataUser.telefone}
                    </textarea>
                    <p>O que fazemos</p>
                    <textarea
                      {...register("descricaoDaOng")}
                      placeholder="Escreva sua descrição"
                      className="info"
                    >
                      {dataUser.typeUser == "ong" && dataUser.descricaoDaOng}
                    </textarea>
                    <StyledButtonCadastro type="submit">
                      Salvar
                    </StyledButtonCadastro>
                  </form>
                </StyledDescription>
              </StyledProjectDetails>
            </StyledOngDetails>
            <StyledProjectsRequests>
              <h3 className="title">Solicitações do Projeto</h3>
              <div className="projectInfo">
                <h3 className="name">
                  {dataUser.typeUser == "ong" && dataUser.nomeDoResponsavel}
                </h3>
                {projects.length ? (
                  projects.map((element) => {
                    if (element.ongId === dataUser.id) {
                      return (
                        <>
                          <p className="title">{element.title}</p>
                          <p className="description">{element.description}</p>
                        </>
                      );
                    }
                  })
                ) : (
                  <h1>Nenhum projeto</h1>
                )}
                <StyledButtonCadastro>Criar projeto</StyledButtonCadastro>
              </div>
            </StyledProjectsRequests>
            <StyledButtons>
              <StyledButtonCadastro onClick={() => handleNavigate("/home")}>
                Logout
              </StyledButtonCadastro>
            </StyledButtons>
          </StyledContent>
        </StyledModalBody>
      </StyledBoxModal>
    </>
  );
};
