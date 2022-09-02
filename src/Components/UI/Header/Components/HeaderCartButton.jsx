import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import CartIcon from "../../../../assets/cart-icon";
import CartContext from "../../../../contexts/CartContext";
import './HeaderCartButton.scss';

const HeaderCartButton = ({onOpenCart}) => {
    const {items} = useContext(CartContext);
    const [mouseOveCartButton, setMouseOverCartButton] = useState(false);

    const totalItemsAdded = items.reduce((acc, item) => {
        return acc + item.amount
    }, 0);

    const btnBump = `${mouseOveCartButton ? 'cart-icon-container bump' : 'cart-icon-container'}`;

    useEffect( () => {
        setMouseOverCartButton(true);
        const timer = setTimeout(() => {
            setMouseOverCartButton(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
        }

    }, [items]);

       

    return (
        <button className={btnBump} onClick={onOpenCart}>
            <span className="icon">
                <CartIcon />
            </span>
            <span> Your Cart </span>
            <span className="badge"> {totalItemsAdded} </span>
        </button>
)}

export default HeaderCartButton;