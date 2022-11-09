import { useContext, useEffect } from "react";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import { UserContext } from "../../Providers/UserProvider";
import { CreateTask } from "../Modal/ModalCreateTask";
import * as S from "../MyProjectDev/styles";
import { MdDelete } from "react-icons/md";
import { BsEmojiSunglasses } from "react-icons/bs";
import {
  StyledButtonCadastro,
  StyledButtonCompleteProject,
  StyledButtonCreateTask,
} from "../Button";

export const ManageProject = () => {
  const {
    requestMyProject,
    requestOngMyProject,
    myProject,
    dataOngMyProject,
    deleteTask,
    handleCreateTask,
    createTask,
  } = useContext(ProjectsContext);
  const { requestAllUsers, allUsers } = useContext(UserContext);

  useEffect(() => {
    requestAllUsers();
    requestMyProject();
    requestOngMyProject();
  }, []);
  console.log(myProject);
  console.log(dataOngMyProject);
  console.log(allUsers);
  return (
    <S.Container>
      <S.Main>
        <S.ProjectTitle>{myProject.title}</S.ProjectTitle>
        <S.Description>
          <S.ProjectSubtitle>Descrição da Ong</S.ProjectSubtitle>
          <S.ONGName>{dataOngMyProject.razaoSocial}</S.ONGName>
          <S.ONGDescriptionText>
            {dataOngMyProject.descricaoDaOng}
          </S.ONGDescriptionText>
        </S.Description>
        <S.Description>
          <S.ProjectSubtitle>Descrição do projeto</S.ProjectSubtitle>
          <S.ONGDescriptionText>{myProject.description}</S.ONGDescriptionText>
        </S.Description>
        <section>
          <S.ProjectSubtitle>Tarefas em andamento</S.ProjectSubtitle>
          <ul>
            {myProject.tasks ? (
              myProject.tasks.map((element: any) => {
                return (
                  element.userId &&
                  !element.completed && (
                    <S.Task>
                      {allUsers.length &&
                        allUsers
                          .filter((dev: any) => dev.id == element.userId)
                          .map((dev: any) => (
                            <S.TaskTitle>{dev.nome}</S.TaskTitle>
                          ))}
                      <S.TaskTitle>{element.title}</S.TaskTitle>
                    </S.Task>
                  )
                );
              })
            ) : (
              <S.TaskTitle>Você ainda não pegou nenhuma task</S.TaskTitle>
            )}
          </ul>
        </section>
        <section>
          <S.ProjectSubtitle>Tarefas Criadas</S.ProjectSubtitle>
          <ul>
            {myProject.tasks ? (
              myProject.tasks.map((element: any) => {
                return (
                  !element.userId && (
                    <S.OpenTask>
                      <S.TaskTitle>{element.title}</S.TaskTitle>
                      <MdDelete
                        style={{
                          width: "30px",
                          height: "30px",
                          cursor: "pointer",
                          color: "var(--rose-600)",
                        }}
                        onClick={() => deleteTask(element.id)}
                      ></MdDelete>
                    </S.OpenTask>
                  )
                );
              })
            ) : (
              <S.TaskTitle>Nenhuma tarefa foi criada</S.TaskTitle>
            )}
          </ul>

          <StyledButtonCreateTask onClick={handleCreateTask}>
            Criar Task
          </StyledButtonCreateTask>
        </section>
        <section>
          <S.ProjectSubtitle>Tarefas Concluidas</S.ProjectSubtitle>
          <ul>
            {myProject.tasks ? (
              myProject.tasks.map((element: any) => {
                return (
                  element.completed && (
                    <S.CompletedTask>
                      <S.TaskTitle>{element.title}</S.TaskTitle>
                      <BsEmojiSunglasses />
                    </S.CompletedTask>
                  )
                );
              })
            ) : (
              <S.ProjectSubtitle>
                Não a nenhuma tarefa em andamento
              </S.ProjectSubtitle>
            )}
          </ul>
        </section>
        <StyledButtonCompleteProject>
          Concluir projeto
        </StyledButtonCompleteProject>
      </S.Main>
    </S.Container>
  );
};
