import Headers from "../../Components/Header";
import { AboutUs } from "../../Components/AboutUs";
import { Cards } from "../../Components/Cards";
import { useContext } from "react";

import { Footer } from "../../Components/Footer";
import { StyledContentWrapper } from "./styles";
import { AllProjects } from "../../Components/Home All Projects";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import Main from "../../Components/Main";



export const Home = () => {
    const { menu } = useContext(ProjectsContext);
    return (
        <>
            <StyledContentWrapper>
                <Headers />
                <Main />
                <Cards />
                <AboutUs />
                <AllProjects />
            </StyledContentWrapper>
            {/* 
                HEADER
                MAIN
                CARDS
                SOBRE NOS
                PROJETOS FINALIZADOS
                FOOTER 
             */}
        </>
    );
};
