import { useContext } from "react";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { StyledButtonCadastro} from "../../Button";
import { ButtonCloseModal } from "../../Button/ButtonCloseModal";
import { StyledBoxModal } from "../ModalLogin/style";
import { StyledModalBody } from "./style";
export const ModalAcceptDecline = () => {
    const { setModalChange, editProjects, projects } =
        useContext(ProjectsContext);
    return (
        <StyledBoxModal>
            <StyledModalBody>
                <ButtonCloseModal onClick={() => setModalChange(false)} />
                {projects.map((project: any) => {
                    return (
                        project.id == localStorage.idProject && (
                            <div key={project.id}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div>
                                    <StyledButtonCadastro
                                        onClick={editProjects}
                                    >
                                        Começar projeto
                                    </StyledButtonCadastro>
                                    <StyledButtonCadastro
                                        onClick={() => setModalChange(false)}
                                    >
                                        Deixar na Espera
                                    </StyledButtonCadastro>
                                </div>
                            </div>
                        )
                    );
                })}
            </StyledModalBody>
        </StyledBoxModal>
    );
};