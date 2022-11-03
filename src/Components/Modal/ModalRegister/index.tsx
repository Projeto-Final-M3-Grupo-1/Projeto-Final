import { Form } from "../../Form";
import { StyledButtonCadastro } from "../../Button";
import { InputAndLabel } from "../../Input";
import { StyledBoxModal } from "../ModalLogin/style";
import { StyledForm } from "../../Form/styled";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { shemaUserRegister } from "../../../Services/validation/createUser.validation";
import { FieldError } from "react-hook-form";
import { UserContext } from "../../../Providers/UserProvider";
import { useContext } from "react";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export interface IUserRegister {
  email: string;
  password: string;
  nome: string;
  github: string;
  linkedin: string;
  fotoDePerfil: string;
  confirmPassword: string;

  error?: {
    email?: FieldError;
    password?: FieldError;
    name?: FieldError;
    github?: FieldError;
    linkedin?: FieldError;
    fotoDePerfil?: FieldError;
    confirmPassword?: FieldError;
  };
}
export const ModalRegister = () => {
  const { onSubmitRegister } = useContext(UserContext);
  const { handleModal } = useContext(ProjectsContext);
  const {
    handleSubmit,
    register,
    formState: {
      errors: {
        email,
        password,
        nome,
        github,
        linkedin,
        fotoDePerfil,
        confirmPassword,
      },
    },
  } = useForm<IUserRegister>({
    resolver: yupResolver(shemaUserRegister),
  });
  return (
    <StyledBoxModal>
      <StyledForm onSubmit={handleSubmit(onSubmitRegister)}>
        <IoIosCloseCircleOutline onClick={handleModal} className="close" />
        <h2>Cadastrar Dev</h2>
        <InputAndLabel
          textLabel="Nome"
          name="nome"
          placeholder="Digite seu nome"
          type="text"
          register={register}
          error={nome?.message}
        />
        <InputAndLabel
          textLabel="Email"
          name="email"
          placeholder="Digite seu e-mail"
          type="text"
          register={register}
          error={email?.message}
        />
        <InputAndLabel
          textLabel="Senha"
          name="password"
          placeholder="Digite sua senha "
          type="password"
          error={password?.message}
          register={register}
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
          textLabel="Github"
          name="github"
          placeholder="Insira o link para o seu Github "
          type="text"
          register={register}
          error={github?.message}
        />
        <InputAndLabel
          textLabel="Linkedin"
          name="linkedin"
          placeholder="Insira o link para o seu Linkedin"
          type="text"
          register={register}
          error={linkedin?.message}
        />
        <InputAndLabel
          textLabel="Link para foto de perfil"
          name="fotoDePerfil"
          placeholder="Insira o link para a foto do seu perfil"
          type="text"
          register={register}
          error={fotoDePerfil?.message}
        />
        <StyledButtonCadastro type="submit">Cadastrar</StyledButtonCadastro>
      </StyledForm>
    </StyledBoxModal>
  );
};
