import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButtom.module.css'
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

const HeaderCartButtom = props => {

    const cartCtx = useContext(CartContext);
    
    const numberofCartItems = cartCtx.items.reduce((curNumber, item) => {
        console.log(curNumber, item)
        return curNumber + item.amount
    }, 0);


    return <button className={classes.button} onClick={props.onClick}>
        <spam className={classes.icon}>
            <CartIcon />
        </spam>
        <spam>Your Card</spam>
        <spam className={classes.badge}>
            {numberofCartItems}
        </spam>
    </button>
}

export default HeaderCartButtom