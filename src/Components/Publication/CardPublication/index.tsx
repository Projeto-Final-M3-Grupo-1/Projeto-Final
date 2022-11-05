import { useContext } from "react";
import { string } from "yup";
import { AuthContext } from "../../../Providers/AuthContext";
import { StyledLoginButton } from "../../Button";
import { StyledCard, StyledTextCard, StyledRightCard, StyledButtonsAdmin } from "./style";

interface ICard {
  img: string;
  title: string;
  description: string;
}

const Card = ({ img, title, description }: ICard) => {
  const { dataUser } = useContext(AuthContext);
  const { typeUser } = dataUser;

  return (
    <StyledCard>
      <img src={img} alt="" />
      <StyledRightCard>
        <StyledTextCard>
          <h2>{title}</h2>
          <p>{description}</p>
        </StyledTextCard>
        {typeUser === "admin" ? (
          <StyledButtonsAdmin>
            <StyledLoginButton>Ver site</StyledLoginButton>
            <StyledLoginButton>Editar</StyledLoginButton>
          </StyledButtonsAdmin>
        ) : (
          <StyledLoginButton>Ver site</StyledLoginButton>
        )}
      </StyledRightCard>
    </StyledCard>
  );
};

export default Card;
