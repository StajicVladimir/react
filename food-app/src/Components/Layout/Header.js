import React from "react";

import HeaderCartButton from '../Layout/HeaderCartButton';
import mealsImage from '../../asset/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
    return (
        <React.Fragment>
            <header className = {classes.header}>
                <h1>ReactMeals Yum Yum</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={['main-image']}>
                <img src={mealsImage} alt='YUM YUM'></img>
            </div>
        </React.Fragment>
    );
};

export default Header;