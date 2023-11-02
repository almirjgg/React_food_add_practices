import { useRef, useState } from 'react';
import Input from '../../UI/Input';

import { MealItemFormComponent } from './MealItemForm.styled';

const MealItemForm = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = e => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    onAddToCart(enteredAmountNumber);
  };

  return (
    <>
      <MealItemFormComponent onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label='Amount'
          input={{
            type: 'number',
            id: 'amount' + id,
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
          }}
        />
        <button>+ Add</button>
        {!amountIsValid && <p>enter a valid amount 1 to 5</p>}
      </MealItemFormComponent>
    </>
  );
};

export default MealItemForm;
