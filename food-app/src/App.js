import React, { useState } from 'react';
import Cart from './Components/Cart/Cart';

import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import CartProvider from './Components/Store/CartProvider';

function App() {
  const [cartIsShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
      setIsCartShown(true);
  };

  const hideCartHandler = () => {
      setIsCartShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
