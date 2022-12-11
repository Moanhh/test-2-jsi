import { Fragment } from 'react';
import {NavLink} from 'react-router-dom';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import './Header.css'

const Header = (props) => {


  const nav_links =[
    {
      path: '/',
      display: 'Home',
    },
    {
      path: 'menu',
      display: 'Menu',
    },
]



  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <div>
        <div className="navigation">
              <ul className="nav">
                {
                nav_links.map((item, index) => (
                  <li className="nav_item" key = {index}> 
                    <NavLink to={item.path} className={(navClass) => 
                      navClass.isActive ? 'nav_active' : ''}>{item.display}</NavLink>
                  </li>
                ))
                }
              </ul>
            </div>
        </div>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
