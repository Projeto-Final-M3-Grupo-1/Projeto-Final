import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
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
    projectId: number;
}

interface iFormTask {
    title: string;
    content: string;
}

export const CreateTask = () => {
    const { onSubmitCreateTask } = useContext(UserContext);
    const { handleCreateTask } = useContext(ProjectsContext);
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
        <StyledBoxModalCreateTask>
            <StyledForm onSubmit={handleSubmit(onSubmitCreateTask)}>
                <ButtonCloseModal callback={handleCreateTask} />
                <div className="containerModal">
                    <figure>
                        <img
                            src="http://www.abo-sc.org.br/wp-content/uploads/2017/06/img-perfil-masc2.png"
                            alt=""
                        />
                    </figure>
                    <div className="containerNomeFuncao">
                        <h2>João Silva</h2>
                        <p>Tech Leader</p>
                    </div>
                </div>
                <InputAndLabel
                    textLabel="Nome da Task"
                    name="title"
                    placeholder="Digite o nome da task"
                    type="text"
                    register={register}
                    error={title?.message}
                />

                <StyledLoginButton type="submit">Salvar</StyledLoginButton>
            </StyledForm>
        </StyledBoxModalCreateTask>
    );
};
