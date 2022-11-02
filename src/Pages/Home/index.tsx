import Headers from "../../Components/Header";
import { AboutUs } from "../../Components/AboutUs";
import { Cards } from "../../Components/Cards";

import { Footer } from "../../Components/Footer";
import { StyledContentWrapper } from "./styles";
import { AllProjects } from "../../Components/Home All Projects";

export const Home = () => {
    return (
        <>

            <StyledContentWrapper>
                <Headers />
                <AboutUs />
                <AllProjects />
            </StyledContentWrapper>

            <Footer />


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
