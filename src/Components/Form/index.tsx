import { ReactNode } from "react";
import { StyledForm } from "./styled";

interface IForm {
    children: ReactNode;
    submitFunction: () => void;
}

export const Form = ({ children, submitFunction }: IForm) => {
    return <StyledForm onSubmit={submitFunction}>{children}</StyledForm>;
};
