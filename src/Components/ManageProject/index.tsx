import { useContext, useEffect } from "react";
import { ProjectsContext } from "../../Providers/ProjectsProvider";

export const ManageProject = () => {
    const {
        requestMyProject,
        requestOngMyProject,
        myProject,
        dataOngMyProject,
    } = useContext(ProjectsContext);

    useEffect(() => {
        requestMyProject();
        requestOngMyProject();
    }, []);
    console.log(myProject);
    console.log(dataOngMyProject);
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
        </>
    );
};
