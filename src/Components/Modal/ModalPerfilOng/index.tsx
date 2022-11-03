// import { useContext } from "react";
// import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { StyledButtonCadastro } from "../../Button";
import { StyledBoxModal } from "../ModalLogin/style";
import { StyledModalBody, CloseButton, StyledOngDetails,StyledProjectsRequests,StyledProjectDetails, StyledInfo, StyledDescription, StyledContent } from "./style";



export const ModalPerfilOng = () => {

//   const { handleModal } = useContext(ProjectsContext);

  return (
   
    <StyledBoxModal>
        <StyledModalBody>

            <CloseButton>
                X
            </CloseButton>
            
            <StyledContent>
                
            <StyledOngDetails>
                <div className="profile">
                    <caption>
                    <img src="" alt="" />
                    </caption>
                    <div className="details">
                    <h3>Alimentando o Povo</h3>
                    <p>ONG</p>
                    </div>
                </div>
                <StyledProjectDetails>
                    <StyledInfo>
                        <p className="label">Nome do projeto</p>
                        <p className="info">Alimentando o Povo</p>
                    </StyledInfo>
                    
                    <StyledInfo>
                    <p className="label">Razão Social</p>
                        <p className="info">Alimentando o Povo</p>
                    </StyledInfo>
                    
                    <StyledInfo>
                    <p className="label">CNPJ</p>
                        <p className="info">01.234.567/0001-90</p>
                    </StyledInfo>
                    
                    <StyledDescription>
                        <p>O que fazemos:</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu lorem sit amet odio ullamcorper pretium. Suspendisse sed iaculis massa. Vivamus varius semper posuere. Proin aliquet vel est id ultrices. Vestibulum quis pharetra lectus. Praesent vel nulla arcu. Proin eget sodales odio. 
                        </p>
                    </StyledDescription>
                </StyledProjectDetails>
            </StyledOngDetails>
            
            <StyledProjectsRequests>
                <h3 className="title">Solicitações do Projeto 
                </h3>
                
                <div className="projectInfo">
                    <h3 className="name">
                    Alimentando o Povo
                    </h3>

                    <p>ONG Alimentando o Povo</p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu lorem sit amet odio ullamcorper pretium. Suspendisse sed iaculis massa. Vivamus varius semper posuere. Proin aliquet vel est id ultrices. Vestibulum quis pharetra lectus. Praesent vel nulla arcu. Proin eget sodales odio. 
                    
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu lorem sit amet odio ullamcorper pretium. Suspendisse sed iaculis massa. Vivamus varius semper posuere. 
                    </p>

                    <StyledButtonCadastro>
                        Ver mais
                    </StyledButtonCadastro>
                </div>
            </StyledProjectsRequests>
            </StyledContent>
        </StyledModalBody>
    </StyledBoxModal>

  )
}
