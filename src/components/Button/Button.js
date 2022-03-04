import React from "react";
import propTypes from 'prop-types';
import s from '../Button/Button.module.css'


const Button = ({options, onClickHandel}) => (
   <ul className={s.section}>
       {options.map(option =>(
            <li key={option}>
                <button type="button"
                        className={s.button}
                        name= {option}
                        onClick = {() => onClickHandel(option)}>
                    {option}
                </button>
                
            </li>
       ))}
    
       
   </ul>
);
export default Button;
Button.propTypes ={
    option: propTypes.string,
    options: propTypes.object,
    onClickHandel: propTypes.func,
}