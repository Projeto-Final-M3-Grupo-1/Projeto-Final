import Headers from "../../Components/Header";
import { AboutUs } from "../../Components/AboutUs";
import { Cards } from "../../Components/Cards";
import { useContext, useState } from "react";

import { Footer } from "../../Components/Footer";
import { StyledContentWrapper } from "./styles";
import { AllProjects } from "../../Components/Home All Projects";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import Main from "../../Components/Main";
import { CreateTask } from "../../Components/Modal/ModalCreateTask";

export const Home = () => {
    const { menu } = useContext(ProjectsContext);
    const [open, setOpen] = useState(true);
    return (
        <>
            <StyledContentWrapper>
                <Headers />
                <Main />
                <Cards />
                <AboutUs />
                <AllProjects />
            </StyledContentWrapper>
            <Footer />
            {/* <CreateTask
        open={open}
        handleClose={() => setOpen(false)}
        projectId={1}
      /> */}

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
