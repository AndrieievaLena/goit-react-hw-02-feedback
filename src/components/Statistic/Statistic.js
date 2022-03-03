import React from "react";
import Button from '../Button/Button'
import s from '../Statistic/Statistic.module.css';

class Statistic extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };
      handleButtonGood = () => {
          this.setState(prevState => ({
        good: prevState.good + 1,
          }));
      };
      handleButtonNeutral =() => {
          this.setState(prevState => ({
              neutral: prevState.neutral + 1,
          }))
      };
      handleButtonBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        })) 
    };
    countcTotalFeedbak = () => {
        const {good, neutral , bad} = this.state;
        return(good + neutral + bad);
    }
    countPositiveFeedbackPercentage = () => {
        const {good} = this.state;
        if (!good) {
            return 0;
        
        } 
        return((good*100) / this.countcTotalFeedbak()).toFixed(0);
    }
      render() {
     return (
         <section className={s.section}>

             <div>
             <Button
             onGood={this.handleButtonGood}
             onNeutral={this.handleButtonNeutral}
             onBad={this.handleButtonBad}
             />
                 <h2>Statistic</h2>
                 <ul>
                    <li>Good{this.state.good}</li>
                    <li>Neutral{this.state.neutral}</li>
                    <li>Bad{this.state.bad}</li>
                </ul>
                <span>Total{this.countcTotalFeedbak()}</span>
                <span>Positive Feedback{this.countPositiveFeedbackPercentage()}%</span>
             </div>
         </section>
     )
 }
};


export default Statistic;