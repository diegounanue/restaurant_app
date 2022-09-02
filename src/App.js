import { useState } from 'react';
import './App.css';

import Header from './Components/UI/Header/Header';
import MealsList from './Components/Meals/MealsList';
import Cart from './Components/Cart/Cart';
import MealsSummary from './Components/Meals/Components/MealsSummary/MealsSummary';
import CartProvider from './contexts/CartProvider';

function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => setShowCart(!showCart);

  return (
    <div className="App">
      <CartProvider>
        <Header onOpen={showCartHandler}/>
        {showCart && <Cart onClose={showCartHandler} />}
        <MealsSummary />
        <MealsList />
      </CartProvider>
    </div>
  );
}

export default App;
