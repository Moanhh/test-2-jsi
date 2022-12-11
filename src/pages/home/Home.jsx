import { useState } from 'react';

import mealsImage from '../../assets/meals.jpg';
import classes from '../../components/Layout/Header.module.css';
// import {Container, Row, Col} from 'reactstrap'
import Header from '../../components/Layout/Header';
import Meals from '../../components/Meals/Meals';
import Cart from '../../components/Cart/Cart';
import CartProvider from '../../store/CartProvider';
// import list from '../../assets/data/FoodList'

function Home() {

 
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} >
      
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
      </Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default Home;
