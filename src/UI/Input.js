import React from 'react';
import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {

    return (<div className={classes.input}>
        <label htmlFor={props.input.tag.id}>{props.input.label}</label>
        <input ref={ref} id={props.input.tag.id} {...props.input.tag} />
    </div>);
});

export default Input