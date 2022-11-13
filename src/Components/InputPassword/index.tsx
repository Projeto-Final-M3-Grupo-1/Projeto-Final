import { useContext } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { UserContext } from "../../Providers/UserProvider";
import { StyledInput, StyledPasswordDiv, StyledShowBtn } from "./styled";

interface IInput {
    textLabel: string;
    name: string;
    placeholder: string;
    type: string;
    register: any;
    error: any;
}
export const InputAndLabelPassword = ({
    textLabel,
    name,
    placeholder,
    type,
    register,
    error,
}: IInput) => {
  const { onSubmitLogin, shownPassword, togglePassword } = useContext(UserContext);

    return (
        <StyledInput>
            <label htmlFor={name}>{textLabel}</label>
        <StyledPasswordDiv>
            <input
                type={type}
                id={name}
                placeholder={placeholder}
                {...register(name)}
            />
        <StyledShowBtn onClick={togglePassword}>
           { shownPassword === false ? <AiFillEyeInvisible /> : <AiFillEye /> } 
         </StyledShowBtn>
        </StyledPasswordDiv>
            {error && <span>{error}</span>}
        </StyledInput>
    );
};