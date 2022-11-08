import { StyledTextArea } from "./styles";

interface iTextArea {
  textLabel: string;
  name: string;
  placeholder: string;
  type: string;
  register: any;
  error: any;
}

export const TextArea = ({
  textLabel,
  name,
  placeholder,
  type,
  register,
  error,
}: iTextArea) => {
  return (
    <StyledTextArea>
      <label htmlFor={name}>{textLabel}</label>
      <textarea
        rows={4}
        type={type}
        id={name}
        placeholder={placeholder}
        {...register(name)}
      ></textarea>
      {error && <span>{error}</span>}
    </StyledTextArea>
  );
};
