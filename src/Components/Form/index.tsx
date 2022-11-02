import { ReactNode } from "react";
import { StyledForm } from "./styled";

interface IForm {
    children: ReactNode;
}

export const Form = ({ children }: IForm) => {
    return <StyledForm>{children}</StyledForm>;
};
