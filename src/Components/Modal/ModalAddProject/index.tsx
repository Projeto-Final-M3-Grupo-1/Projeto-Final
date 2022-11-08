import * as S from "../../HeaderDashboard/style";

import { useContext } from "react";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthContext";
import { StyledModalAddProject } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCreateProject } from "../../../Services/validation/createUser.validation";
import { StyledBoxModal } from "../ModalLogin/style";
interface ICreateProjectProps {
  textLabel: string;
  name: string;
  placeholder: string;
  register: () => void;
  title: string;
  description: string;
}

function ModalCreateProject() {
  const { dataUser } = useContext(AuthContext);
  const { createProjects } = useContext(ProjectsContext);
  const { handleSubmit, register } = useForm<ICreateProjectProps>({
    resolver: yupResolver(schemaCreateProject),
  });

  return (
    <StyledBoxModal>
      <StyledModalAddProject onSubmit={handleSubmit(createProjects)}>
        <S.User>
          <S.Name>
            {dataUser.nome} || {dataUser.razaoSocial}
          </S.Name>
          <S.Image src={dataUser.fotoDePerfil} alt="Foto de perfil Ong" />
        </S.User>
        <label>Titulo</label>
        <input placeholder="Insira o Nome" {...register("title")} />
        <label>Descrição do Projeto</label>
        <textarea placeholder="Insira o Nome" {...register("description")} />
        <button type="submit">Cadastrar</button>
      </StyledModalAddProject>
    </StyledBoxModal>
  );
}

export default ModalCreateProject;
