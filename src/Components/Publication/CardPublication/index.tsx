
import { string } from "yup";
import { StyledCard } from "./style";

interface ICard {
    img: string;
    title: string;
    description: string;
    id: number;
}

const Card = ({ img, title, description, id } : ICard) => {

    return (
        <StyledCard>
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{id}</p>
        </StyledCard>
    )
}

export default Card;