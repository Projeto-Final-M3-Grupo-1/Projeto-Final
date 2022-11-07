import styled from "styled-components";

export const Background = styled.div`
	background-color: rgba(30, 41, 59, 0.8);
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 1200px;
	height: auto;
	min-height: 840px;
	background-color: var(--white);
	border-radius: 8px;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 80%;
	max-width: 996px;
`;

export const UserContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	width: 100%;
`;

export const UserImage = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	border: 4px solid var(--rose-600);
`;

export const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 20px;
`;

export const UserName = styled.h1`
	font-size: 24px;
	color: var(--slate-800);
	font-weight: 600;
`;

export const UserType = styled.h2`
	font-size: 16px;
	color: var(--slate-800);
	font-weight: 500;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;

	width: 100%;
	max-width: 996px;
	height: 100%;

	gap: 0.5rem;
	margin-top: 1rem;
`;

export const Input = styled.input`
	width: 100%;
	align-self: center;

	height: 45px;

	border: 2px solid var(--rose-600);
	border-radius: 4px;

	&:focus {
		outline: none;
	}
`;

export const Legend = styled.legend`
	font-size: 24px;
	color: var(--slate-800);
	font-weight: 500;
`;

export const Button = styled.button`
	width: 100%;
	align-self: center;
	height: 40px;
	margin-top: 24px;
	background-color: var(--rose-600);
	border: none;
	border-radius: 4px;
	color: var(--white);
	cursor: pointer;
`;

export const Description = styled.textarea`
	display: flex;
	align-self: center;
	width: 100%;
	resize: none;
	height: 200px;

	border: 2px solid var(--rose-600);
	border-radius: 4px;

	&:focus {
		outline: none;
	}
`;
