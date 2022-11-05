import { useContext } from "react";
import { UserContext } from "../../Providers/UserProvider";
import Card from "./CardPublication";
import { StyledListPublications } from "./style";

const Publications = () => {
  const { publications } = useContext(UserContext);

  return (
      <StyledListPublications>
        {
            publications.length > 0 ? (
                publications.map((publication: any) => {
                    return <Card title={publication.title} description={publication.description} img={publication.img} id={publication.id}></Card>
                })
            ) : (
                <>
                    <p>Ainda não há publicações</p>
                </>
            )
        }
      </StyledListPublications>

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