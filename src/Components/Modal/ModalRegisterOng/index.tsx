import { StyledButtonCadastro } from "../../Button";
import { InputAndLabel } from "../../Input";
import { StyledBoxModal } from "../ModalLogin/style";
import { StyledForm } from "../../Form/styled";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { schemaUserOng } from "../../../Services/validation/createUser.validation";
import { FieldError } from "react-hook-form";
import { UserContext } from "../../../Providers/UserProvider";
import { useContext } from "react";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ButtonCloseModal } from "../../Button/ButtonCloseModal";

export interface IUserOng {
    email: string;
    password: string;
    razaoSocial: string;
    cnpj: string;
    nomeDoResponsavel: string;
    fotoDePerfil: string;
    telefone: string;
    confirmPassword: string;

    error?: {
        email?: FieldError;
        password?: FieldError;
        razaoSocial?: FieldError;
        cnpj?: FieldError;
        nomeDoResponsavel?: FieldError;
        fotoDePerfil?: FieldError;
        telefone?: FieldError;
        confirmPassword?: FieldError;
    };
}
export const ModalRegisterOng = () => {
    const { onSubmitOng } = useContext(UserContext);
    const { handleModal } = useContext(ProjectsContext);
    const {
        handleSubmit,
        register,
        formState: {
            errors: {
                email,
                password,
                razaoSocial,
                cnpj,
                telefone,
                nomeDoResponsavel,
                fotoDePerfil,
                confirmPassword,
            },
        },
    } = useForm<IUserOng>({
        resolver: yupResolver(schemaUserOng),
    });
    return (
        <StyledBoxModal onClick={handleModal}>
            <StyledForm onSubmit={handleSubmit(onSubmitOng)}>
                <h2>Cadastrar ONG</h2>
                <InputAndLabel
                    textLabel="Razão Social"
                    name="razaoSocial"
                    placeholder="Digite o nome da ONG"
                    type="text"
                    register={register}
                    error={razaoSocial?.message}
                />
                <InputAndLabel
                    textLabel="CNPJ"
                    name="cnpj"
                    placeholder="Digite seu CNPJ"
                    type="number"
                    register={register}
                    error={cnpj?.message}
                />
                <InputAndLabel
                    textLabel="Telefone"
                    name="telefone"
                    placeholder="Digite seu telefone"
                    type="number"
                    register={register}
                    error={telefone?.message}
                />
                <InputAndLabel
                    textLabel="Email"
                    name="email"
                    placeholder="Digite seu email"
                    type="text"
                    register={register}
                    error={email?.message}
                />
                <InputAndLabel
                    textLabel="Senha"
                    name="password"
                    placeholder="Insira uma senha"
                    type="password"
                    register={register}
                    error={password?.message}
                />
                <InputAndLabel
                    textLabel="Confirmação de Senha"
                    name="confirmPassword"
                    placeholder="Digite sua senha novamente"
                    type="password"
                    register={register}
                    error={confirmPassword?.message}
                />
                <InputAndLabel
                    textLabel="Nome do Responsável Legal"
                    name="nomeDoResponsavel"
                    placeholder="Insira o nome do responsável"
                    type="text"
                    register={register}
                    error={nomeDoResponsavel?.message}
                />
                <InputAndLabel
                    textLabel="Link para foto de perfil"
                    name="fotoDePerfil"
                    placeholder="Insira o link para a foto do seu perfil"
                    type="text"
                    register={register}
                    error={fotoDePerfil?.message}
                />
                <StyledButtonCadastro type="submit">
                    Cadastrar
                </StyledButtonCadastro>
            </StyledForm>
        </StyledBoxModal>
    );
};
