import { useContext } from "react"
import { ProjectsContext } from "../../../Providers/ProjectsProvider"
import { ButtonCloseModal } from "../../Button/ButtonCloseModal"
import { StyledBoxModal } from "../ModalLogin/style"
import { StyledModalBody } from "./style"

export const ModalAcceptDecline = () => {
  const {modalChange, setModalChange} = useContext(ProjectsContext);
  


  return (
    <StyledBoxModal>
      <StyledModalBody>
        <ButtonCloseModal onClick={() => setModalChange(false)} />
                                           
      </StyledModalBody>
    </StyledBoxModal>
  )
}
