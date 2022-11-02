import { Form } from "../../Form";
import { StyledButtonCadastro } from "../../Button";
import { InputAndLabel } from "../../Input";
import { StyledBoxModal } from "../ModalLogin/style";

export const ModalRegister = () => {
  return (
    <StyledBoxModal>
      <Form>
        <h2>Cadastrar Dev</h2>
        <InputAndLabel
          textLabel="Nome"
          name="name"
          placeholder="Digite seu nome"
          type="text"
        />
        <InputAndLabel
          textLabel="Email"
          name="email"
          placeholder="Digite seu e-mail"
          type="text"
        />
        <InputAndLabel
          textLabel="Senha"
          name="senha"
          placeholder="Digite sua senha"
          type="password"
        />
        <InputAndLabel
          textLabel="Confirmação de Senha"
          name="senha"
          placeholder="Digite sua senha novamente"
          type="password"
        />
        <InputAndLabel
          textLabel="Github"
          name="github"
          placeholder="Insira o link para o seu Github "
          type="text"
        />
        <InputAndLabel
          textLabel="Linkedin"
          name="linkedin"
          placeholder="Insira o link para o seu Linkedin"
          type="text"
        />
        <InputAndLabel
          textLabel="Link para foto de perfil"
          name="linkedin"
          placeholder="Insira o link para a foto do seu perfil"
          type="text"
        />
        <StyledButtonCadastro type="submit">Cadastrar</StyledButtonCadastro>
      </Form>
    </StyledBoxModal>
  );
};
