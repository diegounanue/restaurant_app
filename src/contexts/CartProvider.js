import { useReducer } from 'react';
import CartContext from './CartContext';

const initialState = {
    items: [],
    totalAmmount: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            let updatedTotalAmount = state.totalAmmount + action.item.price * action.item.amount;

            const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
         
            let updatedItems

            if (existingItemIndex !== -1) {
                const existingItem = state.items[existingItemIndex];

                const updatedItem = {
                    ...existingItem,
                    amount: action.item.amount + existingItem.amount
                };

                updatedItems = [...state.items];

                updatedItems[existingItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.item);
            }

            //const updatedTotalAmount = state.totalAmmount + action.totalAmmount;

            return {
                items: updatedItems,
                totalAmmount: updatedTotalAmount
            };
        case 'REMOVE':
            const itemToRemoveIndex = state.items.findIndex(item => item.id === action.id);

            const itemToRemove = state.items[itemToRemoveIndex];

            const updatedTotalAmountRemove = state.totalAmmount - itemToRemove.price;

            const updatedItem = {
                ...itemToRemove,
                amount: itemToRemove.amount -1
            }

            const updatedItemsRemove = [...state.items];

            updatedItemsRemove[itemToRemoveIndex] = updatedItem;
            return {
                items: updatedItemsRemove,
                totalAmmount: updatedTotalAmountRemove
            };
        default:
            return state
    }

}

const CartProvider = ({ children }) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

    const addItemToCartHandlder = item => {
        console.log('ADDDD :>> ');
        dispatchCartAction({ type: 'ADD', item })
    }

    const removeItemFromCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE', id })
    }

    const returnValues = {
        items: cartState.items,
        totalAmmount: cartState.totalAmmount,
        addItem: addItemToCartHandlder,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={returnValues}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;