import { useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import Modal from '../UI/Modal/Modal';
import './Cart.scss';
import CartItem from './CartItem/CartItem';

const Cart = ({onClose}) => {

  const {items, totalAmmount, addItem, removeItem} = useContext(CartContext);

  const total = `$${totalAmmount.toFixed(2)}`;

  const onAddItemHandler = item => {
    addItem({...item, amount: 1});
  }

  const onRemoveItemHandler = id => {
    removeItem(id);
  }

  const cartItems = (
    <ul className='cart-items'>
      {items.map((item) => (
        <li>
          <CartItem 
            amount={item.amount}
            name={item.name}
            price={item.price}
            onAdd={onAddItemHandler.bind(null, item)}
            onRemove={onRemoveItemHandler.bind(null, item.id)}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className='total'>
        <span> Total Amount </span>
        <span> {total} </span>
      </div>
      <div className='actions'>
        <button className='button--alt' onClick={onClose}>Close</button>
        <button className='button'>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;