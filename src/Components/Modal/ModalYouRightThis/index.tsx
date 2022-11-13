import { useContext } from "react";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { StyledLoginButton } from "../../Button";
import { StyledBoxModal } from "../ModalLogin/style";
import { StyledYouRight } from "./style";

export const ModalYouRightThis = () => {
    const { handleYouRight, applyOnProject } = useContext(ProjectsContext);
    return (
        <StyledBoxModal>
            <StyledYouRight>
                <h2>Tem certeza que deseja trabalhar nesse projeto?</h2>
                <div>
                    <StyledLoginButton onClick={applyOnProject}>
                        Sim
                    </StyledLoginButton>
                    <StyledLoginButton onClick={() => handleYouRight}>
                        Cancelar
                    </StyledLoginButton>
                </div>
            </StyledYouRight>
        </StyledBoxModal>
    );
};
