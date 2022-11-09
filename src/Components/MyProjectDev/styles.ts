import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 80%;
	max-width: 1200px;
	margin-top: 3rem;

	gap: 1.5rem;
`;

export const ProjectTitle = styled.h2`
	font-size: 1.5rem;
	font-weight: 900;
	color: var(--rose-600);
`;

export const ProjectSubtitle = styled.h3`
	font-size: 1.25rem;
	font-weight: 600;
	color: var(--slate-800);
`;

export const ProjectDescription = styled.p`
	font-size: 1rem;
	font-weight: 400;
	color: var(--slate-800);
`;

export const ONGName = styled.h5`
	font-size: 1rem;
	font-weight: 600;
	color: var(--slate-800);
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const ONGDescriptionText = styled.p`
	font-size: 1rem;
	font-weight: 400;
	color: var(--slate-800);
`;

export const Task = styled.li`
	border: 2px solid var(--blue-600);
	border-radius: 4px;
	padding: 0 1rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	height: 100px;
`;

export const TaskTitle = styled.h4`
	font-size: 1.25rem;
	font-weight: 600;
	color: var(--slate-900);
`;

export const TaskButton = styled.button`
	background-color: var(--blue-600);
	border: none;
	border-radius: 4px;
	padding: 0.5rem 1rem;
	color: var(--white);
	font-size: 1.25rem;
	font-weight: 600;
	cursor: pointer;
`;

export const OpenTask = styled.li`
	border: 2px solid var(--slate-600);
	border-radius: 4px;
	padding: 0 1rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	height: 100px;
	margin-top: 1rem;
`;

export const OpenTaskButton = styled.button`
	background-color: var(--slate-600);
	border: none;
	border-radius: 4px;
	padding: 0.5rem 1rem;
	color: var(--white);
	font-size: 1.25rem;
	font-weight: 600;
	cursor: pointer;
`;

export const CompletedTask = styled.li`
	border: 2px solid var(--rose-600);
	border-radius: 4px;
	padding: 0 1rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	height: 100px;
	margin-top: 1rem;
`;

export const CompletedTaskButton = styled.button`
	background-color: var(--slate-600);
	border: none;
	border-radius: 4px;
	padding: 0.5rem 1rem;
	color: var(--white);
	font-size: 1.25rem;
	font-weight: 600;
	cursor: pointer;
`;
