import { Fragment } from "react";
import mealsImage from '../../assets/meals.jpeg'
import classes from './Header.module.css'
import HeaderCartButtom from "./HeaderCartButtom";

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButtom onClick={props.onOpenCart}>Cart</HeaderCartButtom>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table of delicious good!"/>
        </div>
    </Fragment>
}

export default Header;