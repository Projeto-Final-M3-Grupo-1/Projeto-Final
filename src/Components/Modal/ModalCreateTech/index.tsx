import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCreateTech } from "../../../Services/validation/createUser.validation";
import { StyledForm } from "../../Form/styled";
import { InputAndLabel } from "../../Input";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../../Providers/UserProvider";
import { StyledBoxModal } from "../ModalLogin/style";
import { ButtonCloseModal } from "../../Button/ButtonCloseModal";
import { StyledButtonCta } from "../../Button";

interface ICreateTech {
    nome: string;
}
export const ModalCreateTech = () => {
    const { onSubmitTech } = useContext(UserContext);
    const { handleCreateTech, createTech } = useContext(UserContext);
    const {
        handleSubmit,
        register,
        formState: {
            errors: { nome },
        },
    } = useForm<ICreateTech>({
        resolver: yupResolver(schemaCreateTech),
    });
    return (
        <StyledBoxModal>
            <StyledForm onSubmit={handleSubmit(onSubmitTech)}>
                <ButtonCloseModal callback={handleCreateTech} />
                <InputAndLabel
                    textLabel="Nome"
                    name="nome"
                    placeholder="Digite seu nome"
                    type="text"
                    register={register}
                    error={nome?.message}
                />
                <StyledButtonCta>Criar Tecnologia</StyledButtonCta>
            </StyledForm>
        </StyledBoxModal>
    );
};
