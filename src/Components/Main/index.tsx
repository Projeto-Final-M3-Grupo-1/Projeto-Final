import { StyledNewProjectButton } from "../Button";
import { MainStyle, StyledTextsMain, StyledImagesMain } from "./style";
import imgmain1 from "../../assets/imgmain1.svg"
import imgmain2 from "../../assets/imgmain2.svg"
import imgmain3 from "../../assets/imgmain3.svg"


const Main = () => {
    return (
        <MainStyle>
            <StyledTextsMain>
                <h1>Desenvolvedores Voluntários</h1>
                <h2>para sua <b>ONG</b></h2>
                <p>Somos uma empresa que projeta sites de forma totalmente gratuita para organizações não governamentais e projetos sociais em todo o Brasil.</p>
            </StyledTextsMain>
            <StyledNewProjectButton>Iniciar um projeto!</StyledNewProjectButton>
            <StyledImagesMain>
                <img src={imgmain1} alt="" />
                <img src={imgmain2} alt="" />
                <img src={imgmain3} alt="" />
            </StyledImagesMain>
        </MainStyle>
    )
}

export default Main;