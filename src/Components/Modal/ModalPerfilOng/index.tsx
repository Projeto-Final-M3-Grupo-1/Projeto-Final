import { useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { UserContext } from "../../../Providers/UserProvider";
import api from "../../../Services/api";
import { StyledButtonCadastro } from "../../Button";
import { ButtonCloseModal } from "../../Button/ButtonCloseModal";
import { StyledBoxModal } from "../ModalLogin/style";
import {
  StyledModalBody,
  StyledOngDetails,
  StyledProjectsRequests,
  StyledProjectDetails,
  StyledInfo,
  StyledDescription,
  StyledContent,
  StyledButtons,
} from "./style";

interface iState{
  map(arg0: (elem: any) => void): import("react").ReactNode;
  title: string;
  description: string;
  id: number, 
  user: number
}

export const ModalPerfilOng = () => {
  const { handleModal, handleNavigate } = useContext(ProjectsContext);
  const { user } = useContext(UserContext);
  const [project, setProjetct] = useState({} as iState)
  

  
  
  useEffect(()=>{
    const getProject = () => {
    
      api.get(`/projects`)
      .then(res => {
        setProjetct(res.data)
      }).catch(error =>
         console.log(error)
      ) 
    }
      getProject()
  }, [])
  
  console.log(project);
      
  
    return (
      <>
      <StyledBoxModal>
        <StyledModalBody>
          <ButtonCloseModal callback={handleModal} />

          <StyledContent>
            <StyledOngDetails>
              <div className="profile">
                <caption>
                  <img src={user.fotoDePerfil} alt="" />
                </caption>
                <div className="details">
                  <h3>{user.razaoSocial}</h3>
                  <p>ONG</p>
                </div>
              </div>
              <StyledProjectDetails>
                <StyledInfo>
                  <p className="label">Nome do projeto</p>
                  <input className="info" value={user.razaoSocial}/>
                </StyledInfo>

                <StyledInfo>
                  <p className="label">Razão Social</p>
                  <input className="info" value={user.razaoSocial} />
                </StyledInfo>

                <StyledInfo>
                  <p className="label">CNPJ</p>
                  <input className="info" value={user.cnpj} />
                </StyledInfo>

                <StyledDescription>
                  <p>O que fazemos</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu lorem sit amet odio ullamcorper pretium.
                    Suspendisse sed iaculis massa. Vivamus varius semper
                    posuere. Proin aliquet vel est id ultrices. Vestibulum quis
                    pharetra lectus. Praesent vel nulla arcu. Proin eget sodales
                    odio.
                  </p>
                </StyledDescription>
              </StyledProjectDetails>
            </StyledOngDetails>

            <StyledProjectsRequests>
              <h3 className="title">Solicitações do Projeto</h3>

              <div className="projectInfo">
                <h3 className="name">{user.razaoSocial}</h3>
                <p className="ong">{project.title}</p>
                <p className="description">
                  {project.description}
                </p>
                  
                    


                <StyledButtonCadastro>Ver mais</StyledButtonCadastro>
              </div>
            </StyledProjectsRequests>
        <StyledButtons>
          <StyledButtonCadastro>Salvar</StyledButtonCadastro>
          <StyledButtonCadastro onClick={() => handleNavigate("/home")}>Logout</StyledButtonCadastro>
        </StyledButtons>
          </StyledContent>
        </StyledModalBody>


      </StyledBoxModal>
    </>
  );
};
