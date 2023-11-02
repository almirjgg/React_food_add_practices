import { HeaderComponent } from './Header.styled';
import mealsImag from '../../assets/meals.jpg';
import { ImageContainer } from './Image.styled';
import HeaderCardButton from './HeaderCardButton';
const Header = ({ onOpenCart }) => {
  return (
    <>
      <HeaderComponent>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick={onOpenCart} />
      </HeaderComponent>
      <ImageContainer>
        <img src={mealsImag} alt='meals' />
      </ImageContainer>
    </>
  );
};

export default Header;
