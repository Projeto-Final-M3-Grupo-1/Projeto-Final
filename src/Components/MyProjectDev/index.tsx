import { useContext, useEffect } from "react";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
import * as S from "./styles";
import { BsEmojiSunglasses } from "react-icons/bs";

export const MyProject = () => {
	const {
		requestMyProject,
		requestOngMyProject,
		myProject,
		dataOngMyProject,
		requestAddDevOnTask,
		requestCompleteTask,
	} = useContext(ProjectsContext);

	useEffect(() => {
		requestMyProject();
		requestOngMyProject();
	}, []);

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
					<S.ONGDescriptionText>
						{myProject.description}
					</S.ONGDescriptionText>
				</S.Description>
				<section>
					<S.ProjectSubtitle>Minha tarefa</S.ProjectSubtitle>
					<ul>
						{myProject.tasks ? (
							myProject.tasks.map((element: any) => {
								return (
									element.userId == localStorage.userId &&
									!element.completed && (
										<S.Task>
											<S.TaskTitle>
												{element.title}
											</S.TaskTitle>
											<S.TaskButton
												onClick={() =>
													requestCompleteTask(
														element.id
													)
												}
											>
												Concluir a tarefa
											</S.TaskButton>
										</S.Task>
									)
								);
							})
						) : (
							<h2>Você ainda não pegou nenhuma task</h2>
						)}
					</ul>
				</section>
				<section>
					<S.ProjectSubtitle>Tarefas em Aberto</S.ProjectSubtitle>
					<ul>
						{myProject.tasks ? (
							myProject.tasks.map((element: any) => {
								return (
									!element.userId && (
										<S.OpenTask>
											<S.TaskTitle>
												{element.title}
											</S.TaskTitle>
											<S.OpenTaskButton
												onClick={() =>
													requestAddDevOnTask(
														element.id
													)
												}
											>
												Solicitar task
											</S.OpenTaskButton>
										</S.OpenTask>
									)
								);
							})
						) : (
							<h2>Não a nenhuma tarefa em andamento</h2>
						)}
					</ul>
				</section>
				<section>
					<S.ProjectSubtitle>Tarefas Concluidas</S.ProjectSubtitle>
					<ul>
						{myProject.tasks ? (
							myProject.tasks.map((element: any) => {
								return (
									element.completed && (
										<>
											<S.CompletedTask>
												<S.TaskTitle>
													{element.title}
												</S.TaskTitle>
												<BsEmojiSunglasses />
											</S.CompletedTask>
										</>
									)
								);
							})
						) : (
							<h2>Não a nenhuma tarefa em andamento</h2>
						)}
					</ul>
				</section>
			</S.Main>
		</S.Container>
	);
};
