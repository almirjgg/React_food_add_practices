import { CardComponent } from './Card.styled';

const Card = ({ card, children }) => {
  return <CardComponent className={card}>{children}</CardComponent>;
};

export default Card;
