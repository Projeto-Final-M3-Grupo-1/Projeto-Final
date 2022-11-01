import { StyledNewProjectButton } from "../Button";
import { MainStyle, StyledTextsMain, StyledImagesMain } from "./style";
// import { img-main-1 } from "../../assets/img-main-1.svg"

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
                <img src="https://medicinasa.com.br/wp-content/uploads/2019/08/volunteer2.jpg" alt="" />
                <img src="https://medicinasa.com.br/wp-content/uploads/2019/08/volunteer2.jpg" alt="" />
                <img src="https://medicinasa.com.br/wp-content/uploads/2019/08/volunteer2.jpg" alt="" />
            </StyledImagesMain>
        </MainStyle>
    )
}

export default Main;