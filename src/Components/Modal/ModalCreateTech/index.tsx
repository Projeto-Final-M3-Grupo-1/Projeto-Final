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
    tech: string;
}
export const ModalCreateTech = () => {
    const { onSubmitTech } = useContext(UserContext);
    const { handleCreateTech, createTech } = useContext(UserContext);
    const {
        handleSubmit,
        register,
        formState: {
            errors: { tech },
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
                    name="tech"
                    placeholder="Digite seu nome"
                    type="text"
                    register={register}
                    error={tech?.message}
                />
                <StyledButtonCta type="submit">
                    Criar Tecnologia
                </StyledButtonCta>
            </StyledForm>
        </StyledBoxModal>
    );
};
