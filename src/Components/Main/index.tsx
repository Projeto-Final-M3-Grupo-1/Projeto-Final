import { useContext } from "react"
import { StyledNewProjectButton } from "../Button";
import { MainStyle, StyledTextsMain, StyledImagesMain } from "./style";
import Images from "../../assets/Images.png"
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import { ModalHome } from "../Modal/ModalHome";

const Main = () => {

    const {setModalHome, modalHome} = useContext(ProjectsContext)

    return (
  <>
            <MainStyle>
                <StyledTextsMain>
                    <h1>Desenvolvedores Voluntários</h1>
                    <h2>para sua <b>ONG</b></h2>
                    <p>Somos uma empresa que projeta sites de forma totalmente gratuita para organizações não governamentais e projetos sociais em todo o Brasil.</p>
                </StyledTextsMain>
                <StyledImagesMain>
                    <StyledNewProjectButton onClick={() => setModalHome(true)}>Iniciar um projeto!</StyledNewProjectButton>
                    <img src={Images} alt="" />
                </StyledImagesMain>
            </MainStyle>
            {modalHome && <ModalHome/>}
  </>
    )
}

        


export default Main;