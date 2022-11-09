import { useContext, useEffect } from "react";
import { GiH2O } from "react-icons/gi";
import { ProjectsContext } from "../../Providers/ProjectsProvider";

export const MyProject = () => {
    const {
        requestMyProject,
        requestOngMyProject,
        myProject,
        dataOngMyProject,
        requestAddDevOnTask,
    } = useContext(ProjectsContext);

    useEffect(() => {
        requestMyProject();
        requestOngMyProject();
    }, []);
    console.log(dataOngMyProject);
    console.log(myProject);

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
                <h2>Minha tarefa</h2>
                <ul>
                    {myProject.tasks ? (
                        myProject.tasks.map((element: any) => {
                            return (
                                element.userId == localStorage.userId &&
                                !element.completed && (
                                    <li>
                                        <h2>{element.title}</h2>
                                        <button>Concluir a tarefa</button>
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
                <h2>Tarefas em andamento</h2>
                {myProject.tasks ? (
                    myProject.tasks.map((element: any) => {
                        return (
                            !element.userId && (
                                <li>
                                    <h2>{element.title}</h2>
                                    <button
                                        onClick={() =>
                                            requestAddDevOnTask(element.id)
                                        }
                                    >
                                        Solicitar task
                                    </button>
                                </li>
                            )
                        );
                    })
                ) : (
                    <h2>Não a nenhuma tarefa em andamento</h2>
                )}
            </section>
        </>
    );
};
