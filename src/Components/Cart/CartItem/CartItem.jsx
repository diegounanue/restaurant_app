import './CartItem.scss';

const CartItem = ({name, price, amount, onRemove, onAdd}) => {
  const priceFixed = `$${price.toFixed(2)}`;

  return (
    <li className='cart-item'>
      <div>
        <h2>{name}</h2>
        <div className='summary'>
          <span className='price'>{priceFixed}</span>
          <span className='amount'> {amount}</span>
        </div>
      </div>
      <div className='actions'>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
