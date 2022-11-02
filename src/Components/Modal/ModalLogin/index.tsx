import { Form } from "../../Form";
import { StyledLoginButton } from "../../Button";
import { InputAndLabel } from "../../Input";
import { StyledBoxModal } from "./style";

export const ModalLogin = () => {
    return (
        <StyledBoxModal>
            <Form>
                <h2>Já faz parte?</h2>
                <InputAndLabel
                    textLabel="Email"
                    name="email"
                    placeholder="Digite seu email"
                    type="text"
                />
                <InputAndLabel
                    textLabel="Senha"
                    name="senha"
                    placeholder="Digite sua senha"
                    type="password"
                />
                <StyledLoginButton>Login</StyledLoginButton>
            </Form>
        </StyledBoxModal>
    );
};
