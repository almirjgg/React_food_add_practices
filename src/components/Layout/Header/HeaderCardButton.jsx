import { HeaderCardButtonComponent } from './HeaderCardButton.styled';
import CartIcon from '../../Cart/CartIcon';
import CartContext from '../../../store/cart-context';
import { useContext, useEffect, useState } from 'react';

const HeaderCardButton = ({ onClick }) => {
  const [bumpClass, setBumpClass] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClasses = `${bumpClass ? 'bump' : ''}`;
  useEffect(() => {
    if (items.length === 0) return;
    setBumpClass(true);

    const t = setTimeout(() => {
      setBumpClass(false);
    }, 300);

    return () => {
      clearTimeout(t);
    };
  }, [items]);
  return (
    <>
      <HeaderCardButtonComponent onClick={onClick} $btnClasses={btnClasses}>
        <span className='icon'>
          <CartIcon />
        </span>
        <span>Your cart</span>
        <span className='badge'>{numberOfCartItems}</span>
      </HeaderCardButtonComponent>
    </>
  );
};

export default HeaderCardButton;
