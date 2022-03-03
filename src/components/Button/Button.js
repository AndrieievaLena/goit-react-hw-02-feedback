import React from "react";
import propTypes from 'prop-types';


const Button = ({options, onClickHandel}) => (
   <ul>
       {options.map(option =>(
            <li key={option}>
                <button type="button">
                        name= {option}
                        onClick = {() => onClickHandel}
                    {option}
                </button>
                
            </li>
       ))}
    
       
   </ul>
);
export default Button;
Button.propTypes ={
    option: propTypes.string,
    options: propTypes.array,
    onClickHandel: propTypes.func,
}