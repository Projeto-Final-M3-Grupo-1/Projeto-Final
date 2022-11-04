import { StyledButtonCloseModal } from "./style";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const ButtonCloseModal = ({callback} : any) => {
  return (
    <StyledButtonCloseModal onClick={callback}>
      <IoIosCloseCircleOutline />
    </StyledButtonCloseModal>
  );
};
