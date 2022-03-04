import propTypes from 'prop-types';
import React from "react";
import s from '../Statistic/Statistic.module.css'

const Statistic = ({option, total, positivePercentage}) => (
    <div className={s.section}>
       <ul className={s.option}>
          <li className={s.title}>Good: {option.good}</li>
          <li className={s.title}>Neutral: {option.neutral}</li>
          <li className={s.title}>Bad: {option.bad}</li>
      </ul>
      <span className={s.total}>Total: {total}</span>
      <span className={s.percentage}>Positive Feedback: {positivePercentage}%</span>
   </div>
);


export default Statistic;

Statistic.propTypes= {
   option: propTypes.object,
   total: propTypes.number,
   positivePercentage: propTypes.string,
};