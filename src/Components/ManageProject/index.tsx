import { useContext, useEffect } from "react";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import { UserContext } from "../../Providers/UserProvider";
import { CreateTask } from "../Modal/ModalCreateTask";

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
        <>
            <h2>{myProject.title}</h2>
            <div>
                <h2>Descrição da Ong</h2>
                <h3>{dataOngMyProject.razaoSocial}</h3>
                <p>{dataOngMyProject.descricaoDaOng}</p>
            </div>
            <div>
                <h2>Descrição do projeto</h2>
                <p>{myProject.description}</p>
            </div>
            <section>
                <h2>Tarefas em andamento</h2>
                <ul>
                    {myProject.tasks ? (
                        myProject.tasks.map((element: any) => {
                            return (
                                element.userId &&
                                !element.completed && (
                                    <li>
                                        {allUsers.length &&
                                            allUsers
                                                .filter(
                                                    (dev: any) =>
                                                        dev.id == element.userId
                                                )
                                                .map((dev: any) => (
                                                    <h1>{dev.nome}</h1>
                                                ))}
                                        <h2>{element.title}</h2>
                                    </li>
                                )
                            );
                        })
                    ) : (
                        <h2>Você ainda não pegou nenhuma task</h2>
                    )}
                </ul>
            </section>
            <section>
                <h2>Tarefas Criadas</h2>
                <ul>
                    {myProject.tasks ? (
                        myProject.tasks.map((element: any) => {
                            return (
                                !element.userId && (
                                    <li>
                                        <h2>{element.title}</h2>
                                        <button
                                            onClick={() =>
                                                deleteTask(element.id)
                                            }
                                        >
                                            Deletar Tarefa
                                        </button>
                                    </li>
                                )
                            );
                        })
                    ) : (
                        <h2>Nenhuma tarefa foi criada</h2>
                    )}
                </ul>

                <button onClick={handleCreateTask}>Criar Task</button>
            </section>
            {createTask && <CreateTask projectId={localStorage.projectId} />}
        </>
    );
};
