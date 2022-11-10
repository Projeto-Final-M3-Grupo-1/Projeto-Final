import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthContext";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { UserContext } from "../../../Providers/UserProvider";
import { schemaCreateTask } from "../../../Services/validation/createTask.validation";
import { StyledLoginButton } from "../../Button";
import { ButtonCloseModal } from "../../Button/ButtonCloseModal";
import { StyledForm } from "../../Form/styled";
import { InputAndLabel } from "../../Input";
import { TextArea } from "../../TextArea";
import { StyledBoxModalCreateTask } from "./styles";

interface iCreateTask {
    open: boolean;
    handleClose: () => void;

    projectId: number;
}

interface iFormTask {
    title: string;
    content: string;

    projectId: number;
}

export const CreateTask = () => {
    const { onSubmitCreateTask } = useContext(UserContext);
    const { handleCreateTask, createTask } = useContext(ProjectsContext);
    const { dataUser } = useContext(AuthContext);

    const {
        handleSubmit,
        register,
        formState: {
            errors: { title, content },
        },
    } = useForm<iFormTask>({
        resolver: yupResolver(schemaCreateTask),
    });

    return (
        <StyledBoxModalCreateTask show={createTask}>
            <StyledForm onSubmit={handleSubmit(onSubmitCreateTask)}>
                <ButtonCloseModal callback={handleCreateTask} />
                <div className="containerModal">
                    <figure>
                        <img src={dataUser.fotoDePerfil} alt="" />
                    </figure>
                    <div className="containerNomeFuncao">
                        <h2>
                            {dataUser.typeUser == "admin"
                                ? dataUser.nome
                                : dataUser.typeUser == "ong"
                                ? dataUser.razaoSocial
                                : null}
                        </h2>
                        <p>Tech Leader</p>
                    </div>
                </div>

                <InputAndLabel
                    textLabel="Título"
                    name="title"
                    placeholder="Título do seu Projeto"
                    type="text"
                    register={register}
                    error={title?.message}
                />
                <TextArea
                    textLabel="Descrição"
                    name="content"
                    placeholder="Faça um resumo da tarefa a ser realizada"
                    type="text"
                    error={content?.message}
                    register={register}
                />
                <StyledLoginButton type="submit">Salvar</StyledLoginButton>
            </StyledForm>
        </StyledBoxModalCreateTask>
    );
};
