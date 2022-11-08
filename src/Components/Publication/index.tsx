import { type } from "os";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthContext";
import { UserContext } from "../../Providers/UserProvider";
import { StyledButtonAddPubli } from "../Button";
import { CircularProgress } from "@mui/material";
import Card from "./CardPublication";
import {
    StyledPublications,
    StyledListPublications,
    StyledHeaderPublications,
} from "./style";

const Publications = () => {
    const { publications } = useContext(UserContext);
    const { dataUser } = useContext(AuthContext);
    const { typeUser } = dataUser;

    return (
        <StyledPublications>
            <StyledHeaderPublications>
                <p>Publicações</p>
                {typeUser === "admin" && (
                    <StyledButtonAddPubli>+</StyledButtonAddPubli>
                )}
            </StyledHeaderPublications>
            <StyledListPublications>
                {publications.length > 0 ? (
                    publications.map((publication: any) => {
                        return (
                            <Card
                                title={publication.title}
                                description={publication.description}
                                img={publication.img}
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
    );
};

export default Publications;

// {publications > 0 ? (
//     publications.map((publication, index) => {
//       return (
//         <Card>
//           transaction={transaction}
//           key={index}
//           removeTransaction={removeTransaction}
//         />
//       );
//     })
//   ) : (
//     <>
//       <p>Ainda não há notícias publicadas</p>
//     </>
//   )}
