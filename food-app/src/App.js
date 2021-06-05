import React, { useState } from 'react';
import Cart from './Components/Cart/Cart';

import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';

function App() {
  const [cartIsShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
      setIsCartShown(true);
  };

  const hideCartHandler = () => {
      setIsCartShown(false);
  };

  return (
    <React.Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
