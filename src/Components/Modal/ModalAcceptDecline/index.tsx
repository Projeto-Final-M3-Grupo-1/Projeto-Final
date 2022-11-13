import { useContext } from "react";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { StyledButtonCadastro } from "../../Button";
import { ButtonCloseModal } from "../../Button/ButtonCloseModal";
import { StyledBoxModal } from "../ModalLogin/style";
import { StyledModalAccept } from "./style";
export const ModalAcceptDecline = () => {
    const { setModalChange, editProjects, projects, deleteProject } =
        useContext(ProjectsContext);
    return (
        <StyledBoxModal>
            <StyledModalAccept>
                <ButtonCloseModal onClick={() => setModalChange(false)} />
                {projects.map((project: any) => {
                    return (
                        project.id === +localStorage.idProject && (
                            <div className="divAccept" key={project.id}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div>
                                    <StyledButtonCadastro
                                        onClick={editProjects}
                                    >
                                        Começar projeto
                                    </StyledButtonCadastro>
                                    <StyledButtonCadastro
                                        onClick={() => deleteProject(localStorage.idProject)}
                                    >
                                        Deletar projeto
                                    </StyledButtonCadastro>
                                </div>
                            </div>
                        )
                    );
                })}
            </StyledModalAccept>
        </StyledBoxModal>
    );
};
