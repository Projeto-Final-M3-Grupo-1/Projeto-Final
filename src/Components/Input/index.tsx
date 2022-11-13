import { StyledInput, StyledPasswordDiv } from "./styled";

interface IInput {
    textLabel: string;
    name: string;
    placeholder: string;
    type: string;
    register: any;
    error: any;
}
export const InputAndLabel = ({
    textLabel,
    name,
    placeholder,
    type,
    register,
    error,
}: IInput) => {
    return (
        <StyledInput>
            <label htmlFor={name}>{textLabel}</label>
            <input
                type={type}
                id={name}
                placeholder={placeholder}
                {...register(name)}
            />
            {error && <span>{error}</span>}
        </StyledInput>
    );
};