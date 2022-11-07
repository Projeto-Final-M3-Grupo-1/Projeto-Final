import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthContext";
import * as S from "./styles";

const ModalNovaPublicacao = () => {
	const { dataUser, loadingUser } = useContext(AuthContext);

	useEffect(() => {
		loadingUser();
	}, []);

	return (
		<S.Background>
			<S.Container>
				<S.Content>
					<S.UserContainer>
						<S.UserImage
							src={dataUser.fotoDePerfil}
							alt="Foto de Perfil"
						/>
						<S.UserInfo>
							<S.UserName>{dataUser.nome}</S.UserName>
							<S.UserType>
								{dataUser.typeUser === "dev"
									? "Desenvolvedor Voluntário"
									: "Loading..."}
							</S.UserType>
						</S.UserInfo>
					</S.UserContainer>
					<S.Form>
						<S.Legend>Título</S.Legend>
						<S.Input
							type="text"
							placeholder="ONG Do Bem se Prepara para lançar manual de ecologia"
						/>
						<S.Legend>Imagem URL</S.Legend>
						<S.Input
							type="text"
							placeholder="https://i.imgur.com/removed.png"
						/>
						<S.Legend>Site URL</S.Legend>
						<S.Input
							type="text"
							placeholder="https://www.ongdobem.com.br"
						/>
						<S.Legend>Descrição</S.Legend>
						<S.Description placeholder="A ONG Do Bem se prepara para lançar um manual de ecologia para crianças, o manual será lançado em breve e será disponibilizado gratuitamente para todos os interessados." />
						<S.Button>Salvar</S.Button>
					</S.Form>
				</S.Content>
			</S.Container>
		</S.Background>
	);
};

export default ModalNovaPublicacao;
