import { Dispatch, SetStateAction, useContext, useState } from "react";
import { Event } from "react-toastify/dist/core";
import { string } from "yup";
import { AuthContext } from "../../../Providers/AuthContext";
import { ProjectsContext, ProjectsProvider } from "../../../Providers/ProjectsProvider";
import { UserContext } from "../../../Providers/UserProvider";
import { StyledLoginButton } from "../../Button";
import ModalEditPubli from "../../Modal/ModalEditPubli";
import { StyledCard, StyledTextCard, StyledRightCard, StyledButtonsAdmin, StyledMainCard } from "./style";

interface ICard {
  img: string;
  title: string;
  description: string;
  id: number;
  site: string;
}

interface IIsOpen {
  handleIsOpen: () => void,
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Card = ({ img, title, description, id, site }: ICard ) => {
  const { dataUser } = useContext(AuthContext);
  const { getPublication } = useContext(UserContext);
  const { showModal, setShowModal } = useContext(ProjectsContext);
  const { typeUser } = dataUser;

  const [isOpenEdit, setIsOpenEdit] = useState<Boolean>(false);

	const handleIsOpenEdit = () => {
		setShowModal(!showModal);    
	};

  const teste = () => {
    getPublication(id)
  }

  return (
  <StyledMainCard>
      {showModal && <ModalEditPubli handleIsOpenEdit={handleIsOpenEdit}  img={img} site={site} title={title} description={description} />}
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
              <StyledLoginButton onClick={handleIsOpenEdit}>Editar</StyledLoginButton>
            </StyledButtonsAdmin>
          ) : (
            <StyledLoginButton>Ver site</StyledLoginButton>
          )}
        </StyledRightCard>
      </StyledCard>
  </StyledMainCard>
  );
};

export default Card;
