import { StyledNewProjectButton } from "../Button";
import { MainStyle, StyledTextsMain, StyledImagesMain } from "./style";
import Images from "../../assets/Images.png"

const Main = () => {
    return (
        <MainStyle>
            <StyledTextsMain>
                <h1>Desenvolvedores Voluntários</h1>
                <h2>para sua <b>ONG</b></h2>
                <p>Somos uma empresa que projeta sites de forma totalmente gratuita para organizações não governamentais e projetos sociais em todo o Brasil.</p>
            </StyledTextsMain>
            <StyledImagesMain>
                <StyledNewProjectButton>Iniciar um projeto!</StyledNewProjectButton>
                <img src={Images} alt="" />
            </StyledImagesMain>
        </MainStyle>
    )
}

export default Main;