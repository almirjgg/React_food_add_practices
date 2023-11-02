import { useContext } from 'react';
import { MealItemComponent } from './MealItem.styled';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext);
  const formattedPrice = `$${price.toFixed(2)}`;
  const addToCartHandler = amount => {
    cartCtx.addItem({ id, name, amount, price });
  };
  return (
    <>
      <MealItemComponent>
        <div>
          <h3>{name}</h3>
          <div className='description'>{description}</div>
          <div className='price'>{formattedPrice}</div>
        </div>
        <div>
          <MealItemForm id={id} onAddToCart={addToCartHandler} />
        </div>
      </MealItemComponent>
    </>
  );
};
export default MealItem;
