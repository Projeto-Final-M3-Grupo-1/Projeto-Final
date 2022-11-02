import { StyledInput } from "./styled";

interface IInput {
    textLabel: string;
    name: string;
    placeholder: string;
    type: string;
}
export const InputAndLabel = ({
    textLabel,
    name,
    placeholder,
    type,
}: IInput) => {
    return (
        <StyledInput>
            <label htmlFor={name}>{textLabel}</label>
            <input type={type} id={name} placeholder={placeholder} />
        </StyledInput>
    );
};
