import { CartItemComponent } from './CartItem.styled';

const CartItem = ({ item, onRemove, onAdd }) => {
  const price = `$${item.price.toFixed(2)}`;
  return (
    <CartItemComponent>
      <div>
        <h2>{item.name}</h2>
        <div className='summary'>
          <span className='price'>{price}</span>
          <span className='amount'>x{item.amount}</span>
        </div>
      </div>
      <div className='actions'>
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </CartItemComponent>
  );
};

export default CartItem;
