import { useContext } from 'react';
import './MealItem.scss';
import MealsForm from '../MealsForm/MealsForm';
import CartContext from '../../../../contexts/CartContext';

const MealItem = ({ id, name, description, price }) => {
    const cartCtx = useContext(CartContext);

    const priceFixed = `$${price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: id,
            name: name,
            amount: amount,
            price: price,
        });
    };

    return (
        <>
            <li className='meal-item-container'>
                <div className='meal-item'>
                    <h3> {name} </h3>
                    <p className='description'> {description} </p>
                    <p className='price'> {priceFixed} </p>
                </div>
                <MealsForm id={id} onAddToCart={addToCartHandler} />
            </li>
        </>
    );
}

export default MealItem;