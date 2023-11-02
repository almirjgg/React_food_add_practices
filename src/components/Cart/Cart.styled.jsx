import styled from 'styled-components';

export const CartComponent = styled.div`
  .cart-items {
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 20rem;
    overflow: auto;
  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  .actions {
    text-align: right;

    & button {
      font: inherit;
      cursor: pointer;
      background-color: transparent;
      border: 1px solid #8a2b06;
      padding: 0.5rem 2rem;
      border-radius: 25px;
      margin-left: 1rem;
    }
  }

  .actions button:hover,
  .actions button:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }

  .actions .button--alt {
    color: #8a2b06;
    cursor: pointer;
  }

  .actions .button {
    background-color: #8a2b06;
    color: white;
    cursor: pointer;
  }
`;
