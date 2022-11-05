import styled from "styled-components";
export const Header = styled.header`
	width: 100%;
	display: flex;
	height: 80px;
	background-color: --var(white);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	align-items: center;
	justify-content: space-around;
	padding: 15px 0px;
	.logout {
		color: white;
		background-color: white;
	}
	@media (max-width: 700px) {
		width: 100%;
		box-sizing: border-box;
		height: 160px;
		flex-direction: column;
		gap: 20px;
		padding: 15px;
	}

	h2 {
		font-size: 2rem;
		font-family: "Inter";
		color: var(--rose-600);
		font-weight: 900;
		align-items: center;
		text-transform: uppercase;
	}

	@media (max-width: 700px) {
		nav {
			display: flex;
			justify-content: center;
			box-sizing: border-box;
			flex-wrap: wrap;
			gap: 10px;
			min-width: 320px;
		}
	}
`;

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 80%;
	max-width: 1200px;
`;

export const Dropdown = styled.ul`
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 300px;

	ul > li {
		display: none;
		width: 180px;
	}
`;

export const Span = styled.span`
	display: flex;
	align-items: center;
	gap: 10px;
	cursor: pointer;
	font-weight: 500;

	&:hover ul > li {
		display: block;
	}

	&:hover ul {
		margin-top: 90px;
	}
`;

export const DropdownList = styled.ul`
	position: absolute;
	background-color: var(--white);
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
	z-index: 1;
`;

export const DropdownItem = styled.li`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 10px 20px;
	cursor: pointer;

	&:hover {
		background-color: var(--rose-600);
		color: var(--white);
	}
`;

export const User = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const Name = styled.p`
	font-weight: 600;
	color: var(--slack-800);
`;

export const Image = styled.img`
	width: 45px;
	height: 45px;
	border-radius: 50%;
	border: 4px solid var(--rose-600);
`;
