import { CartComponent } from './Cart.styled';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = ({ onCloseCart, close }) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const removeItemHandler = id => {
    cartCtx.removeItem(id);
  };

  const addItemHandler = item => {
    const cartItem = { ...item, amount: 1 };
    cartCtx.addItem(cartItem);
  };

  const carItems = (
    <ul className='cart-items'>
      {cartCtx.items.map((item, i) => (
        <CartItem
          key={item.id + i}
          item={item}
          onRemove={() => removeItemHandler(item.id)}
          onAdd={() => addItemHandler(item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={onCloseCart}>
      <CartComponent>
        {carItems}
        <div className='total'>
          <span>total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className='actions'>
          <button className='button--alt' onClick={onCloseCart}>
            close
          </button>
          {hasItem ?? <button className='button'>Order</button>}
        </div>
      </CartComponent>
    </Modal>
  );
};

export default Cart;
