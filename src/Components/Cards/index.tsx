import { useContext } from "react";
import { StyledButtonCta } from "../Button";
import { StyledDiv, StyledCard } from "./styled";
import { ProjectsContext } from "../../Providers/ProjectsProvider";

export const Cards = () => {
    const { handleNavigate } = useContext(ProjectsContext);
    return (
        <StyledDiv>
            <StyledCard>
                <h2>Desenvolvedor</h2>
                <h3>
                    Ainda não ingressou no mercado de trabalho por falta de
                    experiência?
                </h3>
                <p>
                    Gostaria de ajudar projetos sociais por todo o Brasil e
                    fazer o bem para milhares de pessoas?
                </p>
                <p>
                    Além de garantir experiência, receba um selo de conclusão de
                    projeto no seu perfil para mostrar para futuros
                    contratantes.
                </p>

                <StyledButtonCta onClick={() => handleNavigate("/registerdev")}>
                    Torne se um colaborador!
                </StyledButtonCta>
            </StyledCard>

            <StyledCard>
                <h2>Administrador de ONGs</h2>
                <h3>
                    Você tem um projeto social, e gostaria de aumentar o seu
                    impacto na comunidade?
                </h3>
                <p>
                    Criar um site onde as pessoas consigam encontrar seu projeto
                    de forma fácil e também acompanhar seu projeto, suas
                    atividades dando também a opção de receber doações não
                    apenas de sua cidade ou estado mas de todo brasil e do
                    mundo, inscreva-se já e solicite a análise do seu projeto!
                </p>
                <StyledButtonCta onClick={() => handleNavigate("/registerdev")}>
                    Solicite um projeto!
                </StyledButtonCta>
            </StyledCard>
        </StyledDiv>
    );
};
