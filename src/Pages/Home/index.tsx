import Headers from "../../Components/Header";
import { AboutUs } from "../../Components/AboutUs";
import { Cards } from "../../Components/Cards";

export const Home = () => {
    return (
        <>
            <Headers />
            <Cards />
            <AboutUs />

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
