import { useContext,useState } from "react";
import { AuthContext } from "../../Providers/AuthContext";
import { UserContext } from "../../Providers/UserProvider";
import { StyledButtonAddPubli } from "../Button";
import ModalNovaPublicacao from "../Modal/ModalNovaPublicacao";
import Card from "./CardPublication";
import {
  StyledPublications,
  StyledListPublications,
  StyledHeaderPublications,
  StyledMainPublication,
} from "./style";

const Publications = () => {
  const { publications } = useContext(UserContext);
  const { dataUser } = useContext(AuthContext);
  const { typeUser } = dataUser;

  const [isOpen, setIsOpen] = useState(false);

	const handleIsOpen = () => {
		setIsOpen(!isOpen);
	};

  return (
    <StyledMainPublication>
      {isOpen && <ModalNovaPublicacao handleIsOpen={handleIsOpen} />}
      <StyledPublications>
        <StyledHeaderPublications>
          <p>Publicações</p>
          {typeUser === "admin" && <StyledButtonAddPubli onClick={handleIsOpen}>+</StyledButtonAddPubli>}
        </StyledHeaderPublications>
        <StyledListPublications>
          {publications.length > 0 ? (
            publications.map((publication: any) => {
              return (
                <Card
                  title={publication.title}
                  description={publication.description}
                  img={publication.img}
                  id={publication.id}
                  key={publication.id}
                  site={publication.site}
                ></Card>
              );
            })
          ) : (
            <>
              <p>Ainda não há publicações</p>
            </>
          )}
        </StyledListPublications>
      </StyledPublications>
    </StyledMainPublication>
  );
};

export default Publications;
