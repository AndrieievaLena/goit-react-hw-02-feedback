import propTypes from 'prop-types';
import React from "react";

const Statistic = ({option, total, positivePercentage}) => (
    <div>
       <ul>
          <li>Good{option.good}</li>
          <li>Neutral{option.neutral}</li>
          <li>Bad{option.bad}</li>
      </ul>
      <span>Total{total}</span>
      <span>Positive Feedback{positivePercentage}%</span>
   </div>
);


export default Statistic;

Statistic.propTypes= {
   option: propTypes.array,
   total: propTypes.number,
   positivePercentage: propTypes.func,
};