import {useContext} from 'react'
import { useOutSideClick } from '../../../hooks/useOutSideClick'
import { ProjectsContext } from '../../../Providers/ProjectsProvider'
import { CardsHome } from '../../CardsHome'
import { StyledBoxModal } from "../ModalLogin/style"
import { StyledModalHome } from './style'


export const ModalHome = () => {

    const { setModalHome } = useContext(ProjectsContext)

    const modalRef = useOutSideClick(() => {
        setModalHome(false);
    });
     
    return (
      <>
          <StyledBoxModal>
              <StyledModalHome ref={modalRef}>
                  <CardsHome/>
              </StyledModalHome>
          </StyledBoxModal>
      </>
    )
  }