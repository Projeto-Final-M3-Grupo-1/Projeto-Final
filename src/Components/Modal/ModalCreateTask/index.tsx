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

interface iFormTask {
    title: string;
    content: string;

    projectId: number;
}

export const CreateTask = () => {
    const { handleCreateTask, createTask, onSubmitCreateTask } =
        useContext(ProjectsContext);
    const { dataUser } = useContext(AuthContext);

    const {
        handleSubmit,
        register,
        formState: {
            errors: { title },
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
                    textLabel="Tarefa"
                    name="title"
                    placeholder="Descrição da tarefa"
                    type="text"
                    register={register}
                    error={title?.message}
                />
                <StyledLoginButton type="submit">Criar task</StyledLoginButton>
            </StyledForm>
        </StyledBoxModalCreateTask>
    );
};
