// @ts-nocheck
import { useContext, useEffect } from "react";
import { useOutSideClick } from "../../../hooks/useOutSideClick";
import { AuthContext } from "../../../Providers/AuthContext";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import { FieldError, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./style";
import { newNoticeSchema } from "../../../Services/validation/newNoticeSchema";
import { UserContext } from "../../../Providers/UserProvider";

interface iModalEditPubli {
  handleIsOpen: () => void;
  img: string;
  title: string;
  site: string;
  description: string;
  id: number;
}

interface iNoticeForm {
  title: string;
  description: string;
  site?: string;
  img?: string;

  error?: {
    title?: FieldError;
    description?: FieldError;
    img?: FieldError;
    site?: FieldError;
  };
}

const ModalEditPubli = ({
  handleIsOpen,
  img,
  title,
  site,
  description,
  id,
}: iModalEditPubli) => {
  const { dataUser, loadingUser } = useContext(AuthContext);
  const { setShowModal } = useContext(ProjectsContext);

  const { onSubmitEditPubli } = useContext(UserContext);

  const modalRef = useOutSideClick(() => {
    setShowModal(false);
});

  const {
    handleSubmit,
    register,
    formState: { errors },
} = useForm<iNoticeForm>({
    resolver: yupResolver(newNoticeSchema),
});
useEffect(() => {
    loadingUser();
}, []);

  return (
    <S.Background>
      <S.Container ref={modalRef}>
        <S.CloseButton onClick={handleIsOpen} />
        <S.Content>
          <S.UserContainer>
            <S.UserImage src={dataUser.fotoDePerfil} alt="Foto de Perfil" />
            <S.UserInfo>
              <S.UserName>{dataUser.nome}</S.UserName>
              <S.UserType>Desenvolvedor Voluntário</S.UserType>
            </S.UserInfo>
          </S.UserContainer>
          <S.Form onSubmit={handleSubmit(onSubmitEditPubli)}>
            <S.Legend>Título</S.Legend>
            <S.Input
              type="text"
              placeholder="ONG Do Bem se Prepara para lançar manual de ecologia"
              {...register("title")}
            >
              {title}
            </S.Input>
            {errors.title?.message}

            <S.Legend>Imagem URL</S.Legend>
            <S.Input
              type="text"
              placeholder="https://i.imgur.com/removed.png"
              {...register("img")}
            >
              {img}
            </S.Input>

            {errors.img?.message}
            <S.Legend>Site URL</S.Legend>
            <S.Input
              type="text"
              placeholder="https://www.ongdobem.com.br"
              {...register("site")}
            >
              {site}
            </S.Input>

            {errors.site?.message}
            <S.Legend>Descrição</S.Legend>
            <S.Description
              placeholder="A ONG Do Bem se prepara para lançar um manual de ecologia para crianças, o manual será lançado em breve e será disponibilizado gratuitamente para todos os interessados."
              {...register("description")}
            >
              {description}
            </S.Description>

            {errors.description?.message}
            <S.Button type="submit">Editar</S.Button>
          </S.Form>
        </S.Content>
      </S.Container>
    </S.Background>
  );
};

export default ModalEditPubli;
