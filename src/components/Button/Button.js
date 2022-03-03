import React from "react";
import s from '../Button/Button.module.css'


const Button = ({onGood, onNeutral, onBad}) => (
    <div className={s.section}>
          <h2>Please Leave Feedback</h2>
                <button 
                type="button" 
                onClick={onGood}>Good</button>
                <button 
                type="button"
                onClick={onNeutral}>Neutral</button>
                <button 
                type="button" 
                onClick={onBad}>Bad</button>
   </div>
);
export default Button;