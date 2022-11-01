import Headers from "../../Components/Header";
import { AboutUs } from "../../Components/AboutUs";
import { Footer } from "../../Components/Footer";
import { StyledContentWrapper } from "./styles";

export const Home = () => {
  return (
    <>
      <StyledContentWrapper>
        <Headers />
        <AboutUs />
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
