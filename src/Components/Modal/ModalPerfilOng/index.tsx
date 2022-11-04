import { Input } from "@mui/material";
import { useContext } from "react";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { UserContext } from "../../../Providers/UserProvider";
import { StyledButtonCadastro } from "../../Button";
import { ButtonCloseModal } from "../../Button/ButtonCloseModal";
import { StyledBoxModal } from "../ModalLogin/style";
import { StyledModalBody, StyledOngDetails ,StyledProjectsRequests,StyledProjectDetails, StyledInfo, StyledDescription, StyledContent } from "./style";



export const ModalPerfilOng = () => {

  const { handleModal, showModal } = useContext(ProjectsContext);

  const { user } = useContext(UserContext);
console.log(user);


  return (
    <>
    {showModal && 
        <StyledBoxModal>
        <StyledModalBody>
        
        <ButtonCloseModal callback={handleModal}/>
        
        <StyledContent>
        
        <StyledOngDetails>
        <div className="profile">
        <caption>
        <img src="" alt="" />
        </caption>
        <div className="details">
        <h3>{user.nomeDoResponsavel}</h3>
        <p>ONG</p>
        </div>
        </div>
        <StyledProjectDetails>
        <StyledInfo>
        <p className="label">Nome do projeto</p>
        <input className="info"
          value={user.nomeDoResponsavel}
        />
        </StyledInfo>
        
        <StyledInfo>
        <p className="label">Razão Social</p>
        <input className="info"
          value={user.razaoSocial}  
        />
        </StyledInfo>
        
        <StyledInfo>
        <p className="label">CNPJ</p>
        <Input className="info"
          value={user.cnpj}
        />
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
        {user.razaoSocial}
        </h3>
        
        <p className="ong">ONG Alimentando o Povo</p>
        
        <p className="description">
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
    }
    </>  

  )
}
